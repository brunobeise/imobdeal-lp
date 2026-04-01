"use client";

import { ReactNode } from "react";
import { LeadModalProvider } from "@/contexts/LeadModalContext";
import LeadCaptureModal from "./LeadCaptureModal";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <LeadModalProvider>
      {children}
      <LeadCaptureModal />
    </LeadModalProvider>
  );
}
