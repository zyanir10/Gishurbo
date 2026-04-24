"use client";

import { useEditMode } from "./EditModeProvider";

export default function EditModeToggle() {
  const { isEditMode, toggleEditMode } = useEditMode();

  return (
    <button
      onClick={toggleEditMode}
      aria-label={isEditMode ? "סיום עריכה" : "כניסה למצב עריכה"}
      style={{
        position: "fixed",
        bottom: "24px",
        insetInlineEnd: "24px",
        zIndex: 200,
        background: isEditMode ? "#16a34a" : "#C9A646",
        color: isEditMode ? "#fff" : "#1E2A38",
        fontWeight: 700,
        fontSize: "14px",
        padding: "12px 20px",
        borderRadius: "9999px",
        boxShadow: "0 4px 16px rgba(0,0,0,0.25)",
        border: "none",
        cursor: "pointer",
        transition: "background 0.2s, color 0.2s",
        display: "flex",
        alignItems: "center",
        gap: "6px",
      }}
    >
      {isEditMode ? "✓ סיום עריכה" : "✏️ עריכה"}
    </button>
  );
}
