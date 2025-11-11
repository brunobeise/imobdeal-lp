"use client";

import { useBlackNovember } from "@/hooks/useBlackNovember";

interface BlackNovemberBadgeProps {
  className?: string;
}

export default function BlackNovemberBadge({ className = "" }: BlackNovemberBadgeProps) {
  const { isBlackNovember, discount } = useBlackNovember();

  if (!isBlackNovember) return null;

  return (
    <div className={`absolute -top-2 md:-top-3 -right-3 md:-right-4 z-10 ${className}`}>
      <div className="bg-black text-[#F9A826] px-1.5 md:px-2 py-0.5 md:py-1 rounded-full text-xs font-bold border border-[#F9A826] md:border-2 shadow-lg">
        <span className="text-[9px] md:text-[10px]">🔥 {discount}</span>
      </div>
    </div>
  );
}