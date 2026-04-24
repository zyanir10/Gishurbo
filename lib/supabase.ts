import { createClient } from "@supabase/supabase-js";

// Strip /rest/v1/ suffix if present — the JS client needs the base project URL
const url = (process.env.NEXT_PUBLIC_SUPABASE_URL ?? "").replace(
  /\/rest\/v1\/?$/,
  ""
);
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

export const supabase = createClient(url, key);
