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
  const { isEditMode, toggleEditMode, contentMap, updateContentMap } =
    useEditMode();
  const [saving, setSaving] = useState(false);

  function saveAndExit() {
    setSaving(true);
    const elements = document.querySelectorAll("[data-content-key]");
    const updates: Record<string, string> = {};
    elements.forEach((el) => {
      const key = el.getAttribute("data-content-key")!;
      updates[key] = (el as HTMLElement).innerText;
    });
    updateContentMap(updates);
    setSaving(false);
    toggleEditMode();
  }

  function exportContent() {
    const json = JSON.stringify(contentMap, null, 2);
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "content.json";
    a.click();
    URL.revokeObjectURL(url);
  }

  if (!isEditMode) {
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
          onClick={exportContent}
          data-edit-ui="true"
          style={{
            ...btnBase,
            background: "#1E2A38",
            color: "#C9A646",
            border: "2px solid #C9A646",
          }}
        >
          ייצוא תוכן
        </button>
        <button
          onClick={toggleEditMode}
          data-edit-ui="true"
          style={{ ...btnBase, background: "#C9A646", color: "#1E2A38" }}
        >
          ✏️ עריכה
        </button>
      </div>
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
