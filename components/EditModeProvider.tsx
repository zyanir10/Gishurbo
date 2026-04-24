"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from "react";
import contentData from "@/lib/content.json";
import { supabase } from "@/lib/supabase";

const defaults = contentData as Record<string, string>;

interface EditModeContextType {
  isEditMode: boolean;
  toggleEditMode: () => void;
  contentMap: Record<string, string>;
  updateContentMap: (updates: Record<string, string>) => void;
}

const EditModeContext = createContext<EditModeContextType>({
  isEditMode: false,
  toggleEditMode: () => {},
  contentMap: defaults,
  updateContentMap: () => {},
});

export function EditModeProvider({
  children,
  initialContent,
}: {
  children: ReactNode;
  initialContent?: Record<string, string>;
}) {
  const [isEditMode, setIsEditMode] = useState(false);
  const [contentMap, setContentMap] = useState<Record<string, string>>(
    initialContent ?? defaults
  );

  const updateContentMap = useCallback((updates: Record<string, string>) => {
    // Update React state immediately for instant UI feedback
    setContentMap((prev) => ({ ...prev, ...updates }));

    // Persist to Supabase (fire and forget)
    const rows = Object.entries(updates).map(([key, value]) => ({ key, value }));
    supabase
      .from("content")
      .upsert(rows, { onConflict: "key" })
      .then(({ error }) => {
        if (error) console.error("[content] Supabase upsert failed:", error.message);
      });
  }, []);

  // Block clicks on links/buttons while in edit mode
  useEffect(() => {
    if (!isEditMode) return;

    function handleClick(e: MouseEvent) {
      const target = e.target as HTMLElement;
      if (
        target.closest("[data-edit-ui]") ||
        target.closest("[contenteditable]")
      ) {
        return;
      }
      if (target.closest("a") || target.closest("button")) {
        e.preventDefault();
        e.stopPropagation();
      }
    }

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, [isEditMode]);

  return (
    <EditModeContext.Provider
      value={{
        isEditMode,
        toggleEditMode: () => setIsEditMode((v) => !v),
        contentMap,
        updateContentMap,
      }}
    >
      {children}
    </EditModeContext.Provider>
  );
}

export const useEditMode = () => useContext(EditModeContext);
