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

const defaults = contentData as Record<string, string>;
const STORAGE_KEY = "eilat-adr-content";

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

  // Merge localStorage overrides after hydration
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const overrides = JSON.parse(stored) as Record<string, string>;
        setContentMap((prev) => ({ ...prev, ...overrides }));
      }
    } catch {}
  }, []);

  const updateContentMap = useCallback((updates: Record<string, string>) => {
    setContentMap((prev) => {
      const next = { ...prev, ...updates };
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {}
      return next;
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
