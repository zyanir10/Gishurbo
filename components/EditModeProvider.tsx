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

export function EditModeProvider({ children }: { children: ReactNode }) {
  const [isEditMode, setIsEditMode] = useState(false);
  const [contentMap, setContentMap] = useState<Record<string, string>>(defaults);

  // Load content from Supabase on mount; seed from defaults if table is empty
  useEffect(() => {
    async function loadContent() {
      const { data, error } = await supabase
        .from("content")
        .select("key, value");

      if (error) {
        console.error("[content] Supabase fetch failed:", error.message);
        return;
      }

      if (data.length === 0) {
        // Seed the table with bundled defaults
        const rows = Object.entries(defaults).map(([key, value]) => ({
          key,
          value,
        }));
        const { error: seedError } = await supabase
          .from("content")
          .upsert(rows, { onConflict: "key" });
        if (seedError) {
          console.error("[content] Supabase seed failed:", seedError.message);
        }
        return; // defaults are already in state
      }

      const overrides: Record<string, string> = {};
      data.forEach(({ key, value }: { key: string; value: string }) => {
        overrides[key] = value;
      });
      setContentMap({ ...defaults, ...overrides });
    }

    loadContent();
  }, []);

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
