"use client";

import { useEditMode } from "@/components/EditModeProvider";

export default function DebugContentSource() {
  const { contentMap } = useEditMode();
  const source = contentMap["__content_source"] ?? "unknown";
  const isSupabase = source.startsWith("supabase");

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        background: isSupabase ? "#166534" : "#7f1d1d",
        color: "#fff",
        textAlign: "center",
        padding: "6px 12px",
        fontSize: "13px",
        fontFamily: "monospace",
      }}
    >
      [DEBUG] content source: {source}
    </div>
  );
}
