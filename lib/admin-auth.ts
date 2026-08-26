import crypto from "crypto";
import { cookies } from "next/headers";

export const SESSION_COOKIE = "gishurbo_admin";
const SESSION_PAYLOAD = "admin-session-v1";

/**
 * The session value is derived from the admin password, so changing
 * ADMIN_PASSWORD immediately invalidates every existing session.
 */
function sessionToken(): string | null {
  const password = process.env.ADMIN_PASSWORD;
  if (!password) return null;
  return crypto
    .createHmac("sha256", password)
    .update(SESSION_PAYLOAD)
    .digest("hex");
}

function safeEqual(a: string, b: string): boolean {
  const bufA = Buffer.from(a);
  const bufB = Buffer.from(b);
  return bufA.length === bufB.length && crypto.timingSafeEqual(bufA, bufB);
}

export function isConfigured(): boolean {
  return Boolean(process.env.ADMIN_PASSWORD);
}

export function checkPassword(input: string): string | null {
  const password = process.env.ADMIN_PASSWORD;
  if (!password || !input) return null;
  return safeEqual(input, password) ? sessionToken() : null;
}

export async function isAuthenticated(): Promise<boolean> {
  const expected = sessionToken();
  if (!expected) return false;
  const value = (await cookies()).get(SESSION_COOKIE)?.value;
  return Boolean(value) && safeEqual(value!, expected);
}

export const cookieOptions = {
  httpOnly: true,
  sameSite: "lax" as const,
  secure: process.env.NODE_ENV === "production",
  path: "/",
  maxAge: 60 * 60 * 12,
};
