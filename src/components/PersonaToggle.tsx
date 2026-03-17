"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

/**
 * Minimal client component — just the interactive toggle pills.
 * The actual persona content is resolved server-side via searchParams in page.tsx.
 * This component only handles the visual toggle + navigation.
 */
export default function PersonaToggle({ dark = true }: { dark?: boolean }) {
  const searchParams = useSearchParams();
  const current = searchParams.get("para") || "gestor";

  const base = dark
    ? "px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300"
    : "px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300";

  const active = dark
    ? "bg-white text-primary shadow-lg"
    : "bg-primary text-white shadow-lg";

  const inactive = dark
    ? "text-white/60 hover:text-white/90 hover:bg-white/[0.08]"
    : "text-gray-500 hover:text-gray-700 hover:bg-gray-100";

  return (
    <div className={`inline-flex items-center gap-1 p-1 rounded-full ${dark ? "bg-white/[0.08] border border-white/[0.1]" : "bg-gray-100 border border-gray-200"}`}>
      <Link
        href="?para=gestor"
        scroll={false}
        className={`${base} ${current === "gestor" ? active : inactive}`}
      >
        Sou Gestor
      </Link>
      <Link
        href="?para=corretor"
        scroll={false}
        className={`${base} ${current === "corretor" ? active : inactive}`}
      >
        Sou Corretor
      </Link>
    </div>
  );
}
