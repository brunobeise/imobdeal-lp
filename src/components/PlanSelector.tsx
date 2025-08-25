"use client";
import { useState } from "react";

interface PlanSelectorProps {
  children: (activePlan: string) => React.ReactNode;
}

export default function PlanSelector({ children }: PlanSelectorProps) {
  const [activePlan, setActivePlan] = useState("corretores");

  return (
    <>
      <div className="flex justify-center gap-4 mb-8">
        <button
          className={`px-8 py-3 text-lg font-semibold rounded-lg transition ${
            activePlan === "corretores"
              ? "bg-primary text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
          onClick={() => setActivePlan("corretores")}
        >
          Corretor Autônomo
        </button>
        <button
          className={`px-8 py-3 text-lg font-semibold rounded-lg transition ${
            activePlan === "imobiliarias"
              ? "bg-primary text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
          onClick={() => setActivePlan("imobiliarias")}
        >
          Imobiliárias
        </button>
      </div>
      {children(activePlan)}
    </>
  );
}
