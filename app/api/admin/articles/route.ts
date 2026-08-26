import { del, list, put } from "@vercel/blob";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

import { isAuthenticated } from "@/lib/admin-auth";
import { BLOB_PREFIX, getArticles } from "@/lib/articles";
import { docxToArticleBody } from "@/lib/articles/convert";
import type { Article } from "@/lib/articles/types";

const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const MAX_BYTES = 10 * 1024 * 1024;

function unauthorized() {
  return NextResponse.json({ error: "נדרשת התחברות" }, { status: 401 });
}

function storageMissing() {
  return NextResponse.json(
    {
      error:
        "אחסון הקבצים אינו מחובר. יש ליצור Blob Store בלוח הבקרה של Vercel ולקשר אותו לפרויקט.",
    },
    { status: 503 }
  );
}

function refreshKnowledgePages(slug: string) {
  revalidatePath("/knowledge");
  revalidatePath(`/knowledge/${slug}`);
  revalidatePath("/sitemap.xml");
}

export async function GET() {
  if (!(await isAuthenticated())) return unauthorized();
  const articles = await getArticles();
  return NextResponse.json({
    articles: articles.map((a) => ({
      slug: a.slug,
      title: a.title,
      category: a.category,
      dateISO: a.dateISO,
      featured: Boolean(a.featured),
      uploaded: Boolean(a.uploaded),
    })),
  });
}

export async function POST(request: Request) {
  if (!(await isAuthenticated())) return unauthorized();
  if (!process.env.BLOB_READ_WRITE_TOKEN) return storageMissing();

  const form = await request.formData();
  const file = form.get("file");
  const slug = String(form.get("slug") ?? "").trim();
  const title = String(form.get("title") ?? "").trim();

  if (!(file instanceof File) || !file.name.toLowerCase().endsWith(".docx")) {
    return NextResponse.json(
      { error: "יש לצרף קובץ Word בפורמט ‎.docx" },
      { status: 400 }
    );
  }
  if (file.size > MAX_BYTES) {
    return NextResponse.json(
      { error: "הקובץ גדול מדי (מקסימום 10MB)" },
      { status: 400 }
    );
  }
  if (!SLUG_PATTERN.test(slug)) {
    return NextResponse.json(
      { error: "כתובת המאמר חייבת להכיל אותיות אנגליות קטנות, ספרות ומקפים בלבד" },
      { status: 400 }
    );
  }
  if (!title) {
    return NextResponse.json({ error: "יש להזין כותרת" }, { status: 400 });
  }

  let body;
  try {
    body = await docxToArticleBody(Buffer.from(await file.arrayBuffer()), {
      dropFirstHeading: form.get("dropFirstHeading") === "true",
    });
  } catch (err) {
    console.error("docx conversion failed:", err);
    return NextResponse.json(
      { error: "לא הצלחנו לקרוא את הקובץ. ודאו שזהו מסמך Word תקין." },
      { status: 422 }
    );
  }

  if (!body.blocks.length) {
    return NextResponse.json(
      { error: "לא נמצא תוכן במסמך" },
      { status: 422 }
    );
  }

  const dateISO = String(form.get("dateISO") ?? "").trim();
  const article: Article = {
    ...body,
    slug,
    title,
    category: String(form.get("category") ?? "").trim() || "מאמרים",
    image: String(form.get("image") ?? "").trim() || "/bridge-mediation.jpeg",
    imageAlt: String(form.get("imageAlt") ?? "").trim() || title,
    dateISO: /^\d{4}-\d{2}-\d{2}$/.test(dateISO)
      ? dateISO
      : new Date().toISOString().slice(0, 10),
    featured: form.get("featured") === "true",
    original: form.get("original") === "true",
    author:
      String(form.get("author") ?? "").trim() || "המרכז ליישוב סכסוכים באילת",
    authorImage: String(form.get("authorImage") ?? "").trim() || "/Logo.png",
    byline: String(form.get("byline") ?? "").trim() || "בוררות וגישור באילת",
  };

  // Only one article can hold the hero slot.
  if (article.featured) {
    const { blobs } = await list({ prefix: BLOB_PREFIX });
    await Promise.all(
      blobs
        .filter((b) => b.pathname !== `${BLOB_PREFIX}${slug}.json`)
        .map(async (b) => {
          const res = await fetch(b.url, { cache: "no-store" });
          if (!res.ok) return;
          const other = (await res.json()) as Article;
          if (!other?.featured) return;
          await put(
            b.pathname,
            JSON.stringify({ ...other, featured: false }),
            {
              access: "public",
              contentType: "application/json",
              allowOverwrite: true,
              addRandomSuffix: false,
            }
          );
        })
    );
  }

  await put(`${BLOB_PREFIX}${slug}.json`, JSON.stringify(article), {
    access: "public",
    contentType: "application/json",
    allowOverwrite: true,
    addRandomSuffix: false,
  });

  refreshKnowledgePages(slug);
  return NextResponse.json({ ok: true, slug, blocks: article.blocks.length });
}

export async function DELETE(request: Request) {
  if (!(await isAuthenticated())) return unauthorized();
  if (!process.env.BLOB_READ_WRITE_TOKEN) return storageMissing();

  const slug = new URL(request.url).searchParams.get("slug") ?? "";
  if (!SLUG_PATTERN.test(slug)) {
    return NextResponse.json({ error: "מזהה מאמר לא תקין" }, { status: 400 });
  }

  const { blobs } = await list({ prefix: `${BLOB_PREFIX}${slug}.json` });
  if (!blobs.length) {
    return NextResponse.json(
      { error: "המאמר לא נמצא, או שהוא מאמר מובנה שלא ניתן למחוק כאן" },
      { status: 404 }
    );
  }

  await del(blobs.map((b) => b.url));
  refreshKnowledgePages(slug);
  return NextResponse.json({ ok: true });
}
