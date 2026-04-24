import "server-only";
import { readFileSync, writeFileSync } from "fs";
import { join } from "path";
import contentData from "./content.json";

const defaults = contentData as Record<string, string>;
const contentPath = join(process.cwd(), "lib", "content.json");

export async function getAllContent(): Promise<Record<string, string>> {
  if (!process.env.KV_REST_API_URL) {
    // Local dev — return whatever is on disk right now
    try {
      return JSON.parse(readFileSync(contentPath, "utf-8"));
    } catch {
      return defaults;
    }
  }
  try {
    const { kv } = await import("@vercel/kv");
    const overrides = await kv.hgetall<Record<string, string>>("content");
    return { ...defaults, ...(overrides ?? {}) };
  } catch (e) {
    console.error("[contentStore] KV read failed:", e);
    return defaults;
  }
}

export async function setContentValue(
  key: string,
  value: string
): Promise<void> {
  if (process.env.KV_REST_API_URL) {
    const { kv } = await import("@vercel/kv");
    await kv.hset("content", { [key]: value });
  } else {
    // Local dev — write to file so hot-reload picks it up
    const current = JSON.parse(readFileSync(contentPath, "utf-8"));
    current[key] = value;
    writeFileSync(contentPath, JSON.stringify(current, null, 2), "utf-8");
  }
}
