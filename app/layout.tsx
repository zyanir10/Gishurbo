import type { Metadata } from "next";
import { Heebo, Assistant } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { EditModeProvider } from "@/components/EditModeProvider";
import EditModeToggle from "@/components/EditModeToggle";
import DebugContentSource from "@/components/DebugContentSource";
import { createClient } from "@supabase/supabase-js";
import contentData from "@/lib/content.json";

const defaults = contentData as Record<string, string>;

async function fetchContentFromSupabase(): Promise<Record<string, string>> {
  try {
    const url = (process.env.NEXT_PUBLIC_SUPABASE_URL ?? "").replace(/\/rest\/v1\/?$/, "");
    const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";
    if (!url || !key) {
      console.log("[content] Supabase env vars missing, falling back to content.json");
      return { ...defaults, __content_source: "content.json (no env vars)" };
    }
    const supabase = createClient(url, key);
    const { data, error } = await supabase.from("content").select("key, value");
    if (error) {
      console.log("[content] Supabase fetch failed, falling back to content.json:", error.message);
      return { ...defaults, __content_source: `content.json (fetch error: ${error.message})` };
    }
    if (!data || data.length === 0) {
      console.log("[content] Supabase table empty — seeding with defaults");
      const rows = Object.entries(defaults).map(([key, value]) => ({ key, value }));
      const { error: seedError } = await supabase
        .from("content")
        .upsert(rows, { onConflict: "key" });
      if (seedError) {
        console.log("[content] Seed failed (RLS?):", seedError.message);
        return { ...defaults, __content_source: `content.json (seed failed: ${seedError.message})` };
      }
      console.log(`[content] Seeded ${rows.length} keys into Supabase`);
      return { ...defaults, __content_source: `content.json (just seeded ${rows.length} keys — reload to confirm)` };
    }
    const overrides: Record<string, string> = {};
    data.forEach(({ key, value }: { key: string; value: string }) => {
      overrides[key] = value;
    });
    console.log(`[content] Loaded ${data.length} keys from Supabase`);
    return { ...defaults, ...overrides, __content_source: `supabase (${data.length} keys)` };
  } catch (err) {
    console.log("[content] Supabase error, falling back to content.json:", err);
    return { ...defaults, __content_source: "content.json (error)" };
  }
}

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  variable: "--font-heebo",
});

const assistant = Assistant({
  subsets: ["hebrew", "latin"],
  variable: "--font-assistant",
});

export const metadata: Metadata = {
  title: "מרכז הבוררות והגישור באילת | פתרונות חכמים לסכסוכים",
  description:
    "המרכז המוביל לבוררות וגישור בדרום ישראל. שירותי ADR מקצועיים לאנשים פרטיים, עסקים ומוסדות.",
  openGraph: {
    title: "מרכז הבוררות והגישור באילת",
    description:
      "המרכז המוביל לבוררות וגישור בדרום ישראל. שירותי ADR מקצועיים לאנשים פרטיים, עסקים ומוסדות.",
    locale: "he_IL",
    type: "website",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialContent = await fetchContentFromSupabase();
  return (
    <html
      lang="he"
      dir="rtl"
      className={`${heebo.variable} ${assistant.variable}`}
    >
      <body className="min-h-screen flex flex-col antialiased">
        <EditModeProvider initialContent={initialContent}>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <EditModeToggle />
          <DebugContentSource />

          {/* WhatsApp floating button */}
          <a
            href="https://wa.me/972000000000"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200"
          >
            <svg
              viewBox="0 0 24 24"
              fill="white"
              className="w-7 h-7"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </a>
        </EditModeProvider>
      </body>
    </html>
  );
}
