"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface LeadModalContextType {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

const LeadModalContext = createContext<LeadModalContextType>({
  isOpen: false,
  open: () => {},
  close: () => {},
});

export function LeadModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <LeadModalContext.Provider
      value={{
        isOpen,
        open: () => setIsOpen(true),
        close: () => setIsOpen(false),
      }}
    >
      {children}
    </LeadModalContext.Provider>
  );
}

export function useLeadModal() {
  return useContext(LeadModalContext);
}
