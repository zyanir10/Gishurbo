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


def para_text(xml):
    """Concatenate the runs of one <w:p>, honouring tabs and breaks."""
    out = []
    for token in re.findall(r"<w:t[^>]*>(.*?)</w:t>|<w:tab/>|<w:br/>", xml, re.S):
        out.append(token if token else " ")
    text = "".join(out)
    text = (
        text.replace("&amp;", "&")
        .replace("&lt;", "<")
        .replace("&gt;", ">")
        .replace("&quot;", '"')
        .replace("&apos;", "'")
    )
    # Word leaves NBSP and RTL marks scattered through Hebrew text.
    text = text.replace(" ", " ").replace("‏", "").replace("‎", "")
    text = re.sub(r"[ 	]+", " ", text).strip()

    for wrong, right in GLUED.items():
        text = text.replace(wrong, right)
    # Restore the space after punctuation that the source omits mid-sentence.
    text = re.sub(r"(?<=[֐-׿])([,:;])(?=[֐-׿])", r"\1 ", text)
    # Word left stray spaces inside parentheses around years, e.g. "( 2010 )".
    text = re.sub(r"\(\s+(\d{4})\s+\)", r"(\1)", text)
    return re.sub(r"\s+([,.:;])", r"\1", text)


def is_heading(xml, text):
    style = re.search(r'w:pStyle w:val="([^"]*)"', xml)
    if style and style.group(1).startswith("Heading"):
        return len(text) <= HEADING_MAX
    if style:  # BodyText / FirstParagraph etc. are explicitly body copy
        return False
    # Documents with no outline styles mark their headings with bold runs.
    return "<w:b/>" in xml and len(text) <= HEADING_MAX


def extract(doc):
    path = os.path.join(SRC, doc["file"])
    with zipfile.ZipFile(path) as z:
        xml = z.read("word/document.xml").decode("utf-8")

    drop = [re.compile(p) for p in doc.get("drop", [])]
    promote = [re.compile(p) for p in doc.get("promote", [])]
    blocks, keywords = [], []
    in_keywords = False

    for para in re.findall(r"<w:p[ >].*?</w:p>", xml, re.S):
        text = para_text(para)
        if not text:
            continue

        if KEYWORDS_MARKER in text and len(text) <= HEADING_MAX:
            in_keywords = True
            continue
        if in_keywords:
            keywords.append(text)
            continue

        if any(p.search(text) for p in drop):
            continue

        if "numPr" in para:
            if blocks and blocks[-1]["type"] == "list":
                blocks[-1]["items"].append(text)
            else:
                blocks.append({"type": "list", "items": [text]})
        elif any(p.search(text) for p in promote) or is_heading(para, text):
            blocks.append({"type": "h", "text": text})
        else:
            blocks.append({"type": "p", "text": text})

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
