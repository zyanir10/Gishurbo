import { NextResponse } from "next/server";

import {
  SESSION_COOKIE,
  checkPassword,
  cookieOptions,
  isAuthenticated,
  isConfigured,
} from "@/lib/admin-auth";
import { blobTokenSource } from "@/lib/blob";

export async function GET() {
  const tokenSource = blobTokenSource();
  return NextResponse.json({
    configured: isConfigured(),
    authenticated: await isAuthenticated(),
    storage: Boolean(tokenSource),
    // Variable name only — never the token itself.
    storageVar: tokenSource,
  });
}

export async function POST(request: Request) {
  if (!isConfigured()) {
    return NextResponse.json(
      { error: "לא הוגדרה סיסמת ניהול. יש להגדיר ADMIN_PASSWORD." },
      { status: 503 }
    );
  }

  let password = "";
  try {
    ({ password } = await request.json());
  } catch {
    return NextResponse.json({ error: "בקשה לא תקינה" }, { status: 400 });
  }

  const token = checkPassword(String(password ?? ""));
  if (!token) {
    return NextResponse.json({ error: "סיסמה שגויה" }, { status: 401 });
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set(SESSION_COOKIE, token, cookieOptions);
  return response;
}

export async function DELETE() {
  const response = NextResponse.json({ ok: true });
  response.cookies.set(SESSION_COOKIE, "", { ...cookieOptions, maxAge: 0 });
  return response;
}
