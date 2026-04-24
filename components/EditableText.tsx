"use client";

import { useEditMode } from "./EditModeProvider";
import { useState, useRef } from "react";
import contentData from "@/lib/content.json";

const content = contentData as Record<string, string>;

export default function EditableText({ contentKey }: { contentKey: string }) {
  const { isEditMode } = useEditMode();
  const [value, setValue] = useState(content[contentKey] ?? contentKey);
  const [isEditing, setIsEditing] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const spanRef = useRef<HTMLSpanElement>(null);

  if (!isEditMode) {
    return <>{value}</>;
  }

  async function handleSave() {
    const newValue = spanRef.current?.innerText ?? value;
    const res = await fetch("/api/content", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ key: contentKey, value: newValue }),
    });
    if (res.ok) {
      setValue(newValue);
      setIsEditing(false);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2500);
    }
  }

  return (
    <span className="relative inline">
      <span
        ref={spanRef}
        contentEditable
        suppressContentEditableWarning
        data-content-key={contentKey}
        data-edit-ui="true"
        onFocus={() => setIsEditing(true)}
        onBlur={() => setTimeout(() => setIsEditing(false), 150)}
        style={{
          outline: "none",
          borderRadius: "2px",
          paddingInline: "2px",
          cursor: "text",
          boxShadow: isEditing
            ? "0 0 0 2px #C9A646"
            : undefined,
        }}
        className="hover:ring-2 hover:ring-[#C9A646]/50 transition-shadow"
      >
        {value}
      </span>
      {isEditing && (
        <button
          onMouseDown={(e) => {
            e.preventDefault();
            handleSave();
          }}
          data-edit-ui="true"
          style={{
            position: "absolute",
            top: "calc(100% + 4px)",
            insetInlineEnd: 0,
            zIndex: 9999,
            background: "#16a34a",
            color: "#fff",
            fontSize: "12px",
            fontWeight: 700,
            padding: "2px 10px",
            borderRadius: "4px",
            whiteSpace: "nowrap",
            boxShadow: "0 2px 8px rgba(0,0,0,0.25)",
            border: "none",
            cursor: "pointer",
          }}
        >
          שמור
        </button>
      )}
      {showToast && (
        <span
          style={{
            position: "fixed",
            bottom: "96px",
            insetInlineEnd: "24px",
            zIndex: 9999,
            background: "#16a34a",
            color: "#fff",
            fontSize: "14px",
            fontWeight: 700,
            padding: "8px 16px",
            borderRadius: "8px",
            boxShadow: "0 4px 16px rgba(0,0,0,0.3)",
            whiteSpace: "nowrap",
          }}
        >
          ✓ נשמר בהצלחה
        </span>
      )}
    </span>
  );
}
