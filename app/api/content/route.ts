import { NextRequest, NextResponse } from "next/server";
import { setContentValue } from "@/lib/contentStore";

export async function PATCH(req: NextRequest) {
  try {
    const { key, value } = await req.json();
    if (typeof key !== "string" || typeof value !== "string") {
      return NextResponse.json({ error: "invalid payload" }, { status: 400 });
    }
    await setContentValue(key, value);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "failed to save" }, { status: 500 });
  }
}
