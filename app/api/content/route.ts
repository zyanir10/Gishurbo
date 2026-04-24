import { NextRequest, NextResponse } from "next/server";

const GITHUB_TOKEN = process.env.GITHUB_TOKEN ?? "";
const GITHUB_REPO = process.env.GITHUB_REPO ?? "";
const FILE_PATH = "lib/content.json";

export async function PATCH(req: NextRequest) {
  if (!GITHUB_TOKEN || !GITHUB_REPO) {
    return NextResponse.json({ error: "GitHub env vars not configured" }, { status: 500 });
  }

  const updates: Record<string, string> = await req.json();

  const apiUrl = `https://api.github.com/repos/${GITHUB_REPO}/contents/${FILE_PATH}`;
  const headers = {
    Authorization: `Bearer ${GITHUB_TOKEN}`,
    Accept: "application/vnd.github+json",
    "Content-Type": "application/json",
  };

  // Step 1: fetch current file
  const getRes = await fetch(apiUrl, { headers });
  if (!getRes.ok) {
    const body = await getRes.text();
    return NextResponse.json({ error: "GitHub GET failed", detail: body }, { status: 502 });
  }
  const { content: encoded, sha } = await getRes.json();

  // Step 2: decode, merge updates
  const current: Record<string, string> = JSON.parse(
    Buffer.from(encoded, "base64").toString("utf-8")
  );
  const updated = { ...current, ...updates };

  // Step 3: re-encode and commit
  const newContent = Buffer.from(JSON.stringify(updated, null, 2)).toString("base64");
  const keys = Object.keys(updates).join(", ");

  const putRes = await fetch(apiUrl, {
    method: "PUT",
    headers,
    body: JSON.stringify({
      message: `content update: ${keys}`,
      content: newContent,
      sha,
    }),
  });

  if (!putRes.ok) {
    const body = await putRes.text();
    return NextResponse.json({ error: "GitHub PUT failed", detail: body }, { status: 502 });
  }

  return NextResponse.json({ ok: true, updated: Object.keys(updates) });
}
