"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface EditModeContextType {
  isEditMode: boolean;
  toggleEditMode: () => void;
}

const EditModeContext = createContext<EditModeContextType>({
  isEditMode: false,
  toggleEditMode: () => {},
});

export function EditModeProvider({ children }: { children: ReactNode }) {
  const [isEditMode, setIsEditMode] = useState(false);

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
      value={{ isEditMode, toggleEditMode: () => setIsEditMode((v) => !v) }}
    >
      {children}
    </EditModeContext.Provider>
  );
}

export const useEditMode = () => useContext(EditModeContext);
