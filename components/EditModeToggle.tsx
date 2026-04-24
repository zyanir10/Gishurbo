"use client";

import { useEditMode } from "./EditModeProvider";
import { useState } from "react";

const btnBase: React.CSSProperties = {
  fontWeight: 700,
  fontSize: "14px",
  padding: "12px 20px",
  borderRadius: "9999px",
  boxShadow: "0 4px 16px rgba(0,0,0,0.25)",
  border: "none",
  cursor: "pointer",
  whiteSpace: "nowrap",
};

export default function EditModeToggle() {
  const { isEditMode, toggleEditMode } = useEditMode();
  const [saving, setSaving] = useState(false);

  async function saveAndExit() {
    setSaving(true);
    const elements = document.querySelectorAll("[data-content-key]");
    const saves = Array.from(elements).map((el) => {
      const key = el.getAttribute("data-content-key")!;
      const value = (el as HTMLElement).innerText;
      return fetch("/api/content", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ key, value }),
      });
    });
    await Promise.all(saves);
    setSaving(false);
    toggleEditMode();
  }

  if (!isEditMode) {
    return (
      <button
        onClick={toggleEditMode}
        data-edit-ui="true"
        style={{
          ...btnBase,
          position: "fixed",
          bottom: "24px",
          right: "24px",
          zIndex: 200,
          background: "#C9A646",
          color: "#1E2A38",
        }}
      >
        ✏️ עריכה
      </button>
    );
  }

  return (
    <div
      style={{
        position: "fixed",
        bottom: "24px",
        right: "24px",
        zIndex: 200,
        display: "flex",
        gap: "8px",
      }}
      data-edit-ui="true"
    >
      <button
        onClick={toggleEditMode}
        data-edit-ui="true"
        style={{ ...btnBase, background: "#6b7280", color: "#fff" }}
      >
        בטל שינויים
      </button>
      <button
        onClick={saveAndExit}
        disabled={saving}
        data-edit-ui="true"
        style={{
          ...btnBase,
          background: saving ? "#15803d" : "#16a34a",
          color: "#fff",
          opacity: saving ? 0.8 : 1,
        }}
      >
        {saving ? "שומר..." : "✓ סיום עריכה"}
      </button>
    </div>
  );
}
