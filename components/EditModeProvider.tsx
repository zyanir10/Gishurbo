"use client";

import { createContext, useContext, useState, ReactNode } from "react";

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
  return (
    <EditModeContext.Provider
      value={{ isEditMode, toggleEditMode: () => setIsEditMode((v) => !v) }}
    >
      {children}
    </EditModeContext.Provider>
  );
}

export const useEditMode = () => useContext(EditModeContext);
