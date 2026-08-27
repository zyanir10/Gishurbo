# -*- coding: utf-8 -*-
"""
Extracts article bodies from the source .docx files into JSON block files
consumed by lib/articles/. The text is copied verbatim from the documents —
nothing here rewrites or paraphrases the author's wording.

Usage:  python scripts/extract_articles.py
Output: lib/articles/content/<slug>.json  ->  { lead, blocks, keywords }
"""

import json
import os
import re
import sys
import zipfile

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, "Planning - Dont use for code!", "Articles")
OUT = os.path.join(ROOT, "lib", "articles", "content")

# Per-document rules. `drop` lines are metadata/boilerplate that belong in the
# page chrome rather than the article body.
DOCS = [
    {
        "slug": "conflict-as-opportunity",
        "file": "כשהקונפליקט הופך להזדמנות- מאמר לאתר.docx",
        "drop": [r"^כשהקונפליקט הופך להזדמנות"],
    },
    {
        "slug": "organizational-conflict",
        "file": "ניהול קונפליקטים בארגונים - מאמר לאתר.docx",
        "drop": [r"^יישוב\s+קונפליקטים\s+במרחב הארגוני$"],
        # Reads as a section heading but was left as body text in the document.
        "promote": [r"^כיצד מנהלים קונפליקט בארגון\?$"],
    },
    {
        "slug": "hr-conflict-research",
        "file": "תקציר מחקר -אסנת אדלר ניהול קונפליקטים בארגונים.docx",
        # Title, byline and journal line are rendered from the page metadata.
        "drop": [r"^תקציר מחקר: תפיסת תפקיד", r"^מאת:", r"Sociology and Social Work"],
    },
    {
        "slug": "why-mediation-personal-view",
        "file": "מבט אישי - מיכל זמרן - מאמר לאתר.docx",
        # Byline and title are rendered from the page metadata.
        "drop": [r"^מאת:", r"^מדוע גישור\?$"],
        # The standfirst is bold and short, but it reads as the article's lead.
        "demote": [r"^מבט אישי\."],
        # Section titles the author left unbolded.
        "promote": [
            r"^בטווח הקצר:",
            r"^בטווח הארוך:",
            r"^שותפות בקביעת הגורל:",
            r"^המשפט כברירה אחרונה",
        ],
    },
    {
        "slug": "ai-mediation",
        "file": "גישור ובינה מלכותית- מאמר לאתר.docx",
        "drop": [r"^קטגוריה", r"^זמן קריאה"],
    },
]

# Words that were glued together in the source .docx (a space was lost between
# two runs). Verified against the raw XML — these are typos in the originals.
GLUED = {
    "באילתמסייע": "באילת מסייע",
    "שאיןשני": "שאין שני",
    "גםאין": "גם אין",
    "שבחןאת": "שבחן את",
    "לקהילות.בתהליך": "לקהילות. בתהליך",
}

# Everything from this marker onward is the SEO keyword list, not article text.
KEYWORDS_MARKER = "מילות מפתח"
HEADING_MAX = 80


def clean(text):
    """Normalisation shared by every run of text."""
    text = (
        text.replace("&amp;", "&")
        .replace("&lt;", "<")
        .replace("&gt;", ">")
        .replace("&quot;", '"')
        .replace("&apos;", "'")
    )
    # Word leaves NBSP and RTL marks scattered through Hebrew text.
    text = text.replace("\u00a0", " ")
    for mark in ("\u200b", "\u200f", "\u200e", "\ufeff"):
        text = text.replace(mark, "")
    text = re.sub(r"[ \t]+", " ", text)
    for wrong, right in GLUED.items():
        text = text.replace(wrong, right)
    # Restore the space after punctuation that the source omits mid-sentence.
    text = re.sub(r"(?<=[\u0590-\u05FF])([,:;])(?=[\u0590-\u05FF])", r"\1 ", text)
    # Word left stray spaces inside parentheses around years, e.g. "( 2010 )".
    text = re.sub(r"\(\s+(\d{4})\s+\)", r"(\1)", text)
    return re.sub(r"\s+([,.:;])", r"\1", text)


def para_runs(xml):
    """
    One paragraph as a list of {t, b} runs, preserving which spans the author
    emphasised. Adjacent runs sharing a weight are merged.
    """
    runs = []
    for match in re.finditer(r"<w:r(?: [^>]*)?>(.*?)</w:r>", xml, re.S):
        body = match.group(1)
        pieces = []
        for tok in re.findall(r"<w:t(?: [^>]*)?>(.*?)</w:t>|<w:tab/>|<w:br/>", body, re.S):
            pieces.append(tok if tok else " ")
        text = clean("".join(pieces))
        if not text:
            continue
        bold = "<w:b/>" in body
        if runs and runs[-1]["b"] == bold:
            runs[-1]["t"] += text
        else:
            runs.append({"t": text, "b": bold})

    # Glued words and doubled spaces only surface once runs are joined.
    for r in runs:
        for wrong, right in GLUED.items():
            r["t"] = r["t"].replace(wrong, right)
        r["t"] = re.sub(r" {2,}", " ", r["t"])

    # A space lost between two runs shows up only across the boundary.
    for i in range(len(runs) - 1):
        joined = runs[i]["t"] + runs[i + 1]["t"]
        for wrong in GLUED:
            if wrong in joined and wrong not in runs[i]["t"] and wrong not in runs[i + 1]["t"]:
                runs[i]["t"] += " "
                break

    # Emphasis should wrap words, not the spaces around them.
    for i, r in enumerate(runs):
        if not r["b"]:
            continue
        lead = len(r["t"]) - len(r["t"].lstrip(" "))
        if lead and i > 0:
            r["t"] = r["t"][lead:]
            runs[i - 1]["t"] += " "
        trail = len(r["t"]) - len(r["t"].rstrip(" "))
        if trail and i + 1 < len(runs):
            r["t"] = r["t"].rstrip(" ")
            runs[i + 1]["t"] = " " + runs[i + 1]["t"].lstrip(" ")

    for r in runs:
        r["t"] = re.sub(r" {2,}", " ", r["t"])
    if runs:
        runs[0]["t"] = runs[0]["t"].lstrip()
        runs[-1]["t"] = runs[-1]["t"].rstrip()
    return [r for r in runs if r["t"]]


def content(runs):
    """Plain string when nothing is emphasised, otherwise the run list."""
    if not runs:
        return ""
    if all(r["b"] for r in runs) or not any(r["b"] for r in runs):
        return "".join(r["t"] for r in runs)
    return [{"t": r["t"], "b": True} if r["b"] else {"t": r["t"]} for r in runs]


def para_text(xml):
    """Flattened text of one paragraph, used for classification."""
    return "".join(r["t"] for r in para_runs(xml)).strip()


def is_heading(xml, text):
    style = re.search(r'w:pStyle w:val="([^"]*)"', xml)
    if style and style.group(1).startswith("Heading"):
        return len(text) <= HEADING_MAX
    if style and style.group(1) != "TableParagraph":
        return False  # BodyText / FirstParagraph etc. are explicitly body copy
    # Documents with no outline styles mark their headings with bold runs.
    return "<w:b/>" in xml and len(text) <= HEADING_MAX


CELL_RE = re.compile(r"<w:tc>.*?</w:tc>", re.S)
ROW_RE = re.compile(r"<w:tr[ >].*?</w:tr>", re.S)
PARA_RE = re.compile(r"<w:p[ >].*?</w:p>|<w:p/>", re.S)
# An RTL "1." is stored as ".1"; either way it marks an ordered item.
ORDERED_RE = re.compile(r"^\.(\d+)[ \u00a0]*|^(\d+)\.[ \u00a0]+")
BULLET_RE = re.compile(r"^[●•·]\s*")
# Cells holding running prose mean the table is being used purely for layout.
LAYOUT_CELL_CHARS = 200


def cell_paragraphs(cell):
    return [para for para in PARA_RE.findall(cell)]


def cell_text(cell):
    return " ".join(
        t for t in ("".join(r["t"] for r in para_runs(p)).strip() for p in cell_paragraphs(cell)) if t
    ).strip()


def table_rows(tbl):
    return [CELL_RE.findall(row) for row in ROW_RE.findall(tbl)]


def is_layout_table(rows):
    return any(len(cell_text(c)) > LAYOUT_CELL_CHARS for row in rows for c in row)


def extract(doc):
    path = os.path.join(SRC, doc["file"])
    with zipfile.ZipFile(path) as z:
        xml = z.read("word/document.xml").decode("utf-8")

    drop = [re.compile(pat) for pat in doc.get("drop", [])]
    promote = [re.compile(pat) for pat in doc.get("promote", [])]
    demote = [re.compile(pat) for pat in doc.get("demote", [])]
    blocks, keywords = [], []
    in_keywords = False

    def emit(para, ordered=False):
        """Classifies one paragraph and appends it to `blocks`."""
        nonlocal in_keywords
        runs = para_runs(para)
        text = "".join(r["t"] for r in runs).strip()
        if not text:
            return

        if KEYWORDS_MARKER in text and len(text) <= HEADING_MAX:
            in_keywords = True
            return
        if in_keywords:
            keywords.append(text)
            return
        if any(pat.search(text) for pat in drop):
            return

        demoted = any(pat.search(text) for pat in demote)
        if not demoted and (
            any(pat.search(text) for pat in promote) or is_heading(para, text)
        ):
            blocks.append({"type": "h", "text": ORDERED_RE.sub("", text, count=1).strip()})
            return

        bullet = bool(BULLET_RE.match(text))
        marker = ORDERED_RE.match(text)
        if bullet or marker or ordered:
            strip = BULLET_RE if bullet else ORDERED_RE
            if runs and (bullet or marker):
                runs[0]["t"] = strip.sub("", runs[0]["t"], count=1).lstrip()
                runs = [r for r in runs if r["t"]]
            item = content(runs)
            want = bool(marker or ordered)
            last = blocks[-1] if blocks else None
            if last and last["type"] == "list" and last.get("ordered", False) == want:
                last["items"].append(item)
            else:
                blocks.append({"type": "list", "items": [item], "ordered": want})
            return

        rich = content(runs)
        if "numPr" in para:
            last = blocks[-1] if blocks else None
            if last and last["type"] == "list" and not last.get("ordered", False):
                last["items"].append(rich)
            else:
                blocks.append({"type": "list", "items": [rich], "ordered": False})
        else:
            blocks.append({"type": "p", "text": rich})

    for node in re.finditer(r"<w:tbl>.*?</w:tbl>|<w:p[ >].*?</w:p>", xml, re.S):
        chunk = node.group(0)

        if chunk.startswith("<w:tbl>"):
            rows = table_rows(chunk)
            if not rows:
                continue
            if is_layout_table(rows):
                # Flatten: the wide cell holds the copy, a narrow cell the number.
                for row in rows:
                    texts = [cell_text(c) for c in row]
                    numbered = any(ORDERED_RE.match(t) for t in texts[1:])
                    for para in cell_paragraphs(row[0]):
                        emit(para, ordered=numbered)
                continue

            data = [[cell_text(c) for c in row] for row in rows]
            data = [r for r in data if any(v for v in r)]
            if not data:
                continue
            previous = blocks[-1] if blocks else None
            # Word splits a table across a page break into two tables.
            if (
                previous
                and previous["type"] == "table"
                and len(previous["head"]) == len(data[0])
                and not previous["rows"]
            ):
                previous["rows"] = data
            elif (
                previous
                and previous["type"] == "table"
                and len(previous["head"]) == len(data[0])
                and all(not ORDERED_RE.match(v) for v in data[0])
                and previous["rows"]
                and data[0] != previous["head"]
                and any(v.isdigit() for v in data[0])
            ):
                previous["rows"].extend(data)
            else:
                blocks.append({"type": "table", "head": data[0], "rows": data[1:]})
            continue

        emit(chunk)



    # The opening paragraph becomes the article lead-in.
    lead = ""
    for i, b in enumerate(blocks):
        if b["type"] == "p":
            lead = b["text"]
            blocks.pop(i)
            break

    return {"lead": lead, "blocks": blocks, "keywords": keywords}


def main():
    sys.stdout.reconfigure(encoding="utf-8")
    os.makedirs(OUT, exist_ok=True)
    for doc in DOCS:
        data = extract(doc)
        dest = os.path.join(OUT, doc["slug"] + ".json")
        with open(dest, "w", encoding="utf-8") as f:
            json.dump(data, f, ensure_ascii=False, indent=2)
        counts = {}
        for b in data["blocks"]:
            counts[b["type"]] = counts.get(b["type"], 0) + 1
        print(
            f"{doc['slug']:28} {counts}  keywords={len(data['keywords'])}  lead={len(data['lead'])} chars"
        )


if __name__ == "__main__":
    main()
