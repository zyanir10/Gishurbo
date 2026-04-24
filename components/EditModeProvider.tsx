"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
  useCallback,
  ReactNode,
} from "react";

interface EditModeContextType {
  isEditMode: boolean;
  toggleEditMode: () => void;
  registerValueUpdater: (key: string, setter: (v: string) => void) => void;
  unregisterValueUpdater: (key: string) => void;
  notifyValuesSaved: (updates: Record<string, string>) => void;
}

const EditModeContext = createContext<EditModeContextType>({
  isEditMode: false,
  toggleEditMode: () => {},
  registerValueUpdater: () => {},
  unregisterValueUpdater: () => {},
  notifyValuesSaved: () => {},
});

export function EditModeProvider({ children }: { children: ReactNode }) {
  const [isEditMode, setIsEditMode] = useState(false);
  const valueUpdatersRef = useRef<Record<string, (v: string) => void>>({});

  const registerValueUpdater = useCallback(
    (key: string, setter: (v: string) => void) => {
      valueUpdatersRef.current[key] = setter;
    },
    []
  );

  const unregisterValueUpdater = useCallback((key: string) => {
    delete valueUpdatersRef.current[key];
  }, []);

  const notifyValuesSaved = useCallback((updates: Record<string, string>) => {
    Object.entries(updates).forEach(([key, value]) => {
      valueUpdatersRef.current[key]?.(value);
    });
  }, []);

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
        registerValueUpdater,
        unregisterValueUpdater,
        notifyValuesSaved,
      }}
    >
      {children}
    </EditModeContext.Provider>
  );
}

export const useEditMode = () => useContext(EditModeContext);
