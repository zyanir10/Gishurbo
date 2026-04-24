import { NextRequest, NextResponse } from "next/server";
import { readFileSync, writeFileSync } from "fs";
import { join } from "path";

const contentPath = join(process.cwd(), "lib", "content.json");

export async function PATCH(req: NextRequest) {
  try {
    const { key, value } = await req.json();
    if (typeof key !== "string" || typeof value !== "string") {
      return NextResponse.json({ error: "invalid payload" }, { status: 400 });
    }
    const current = JSON.parse(readFileSync(contentPath, "utf-8"));
    current[key] = value;
    writeFileSync(contentPath, JSON.stringify(current, null, 2), "utf-8");
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "failed to save" }, { status: 500 });
  }
}
