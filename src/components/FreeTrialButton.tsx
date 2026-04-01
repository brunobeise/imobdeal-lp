"use client";

import { useLeadModal } from "@/contexts/LeadModalContext";
import BlackNovemberBadge from "./BlackNovemberBadge";

interface FreeTrialButtonProps {
  variant?: "primary" | "secondary";
  size?: "default" | "large";
  className?: string;
  children: React.ReactNode;
  source?: string;
  showBlackNovemberBadge?: boolean;
}

export default function FreeTrialButton({
  variant = "primary",
  size = "default",
  className = "",
  children,
  showBlackNovemberBadge = true
}: FreeTrialButtonProps) {
  const { open } = useLeadModal();

  const baseClasses = "font-bold transition-colors inline-block text-center rounded-lg cursor-pointer";

  const variantClasses = {
    primary: "bg-secondary hover:bg-secondary/90 text-primary",
    secondary: "bg-secondary hover:bg-[#e6961f] text-primary"
  };

  const sizeClasses = {
    default: "px-4 md:px-6 py-2 md:py-3 text-sm md:text-[14px]",
    large: "px-6 md:px-8 py-3 md:py-4 text-base md:text-lg"
  };

  const finalClassName = `
    ${baseClasses}
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  return (
    <div className="relative inline-block">
      <button
        type="button"
        className={finalClassName}
        onClick={open}
      >
        {children}
      </button>
      {showBlackNovemberBadge && <BlackNovemberBadge />}
    </div>
  );
}
