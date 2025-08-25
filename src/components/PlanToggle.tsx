"use client";

import { useState } from "react";

interface PlanToggleProps {
  defaultPlan: string;
  onPlanChange: (plan: string) => void;
}

export default function PlanToggle({ defaultPlan, onPlanChange }: PlanToggleProps) {
  const [activePlan, setActivePlan] = useState(defaultPlan);

  const handlePlanChange = (plan: string) => {
    setActivePlan(plan);
    onPlanChange(plan);
  };

  return (
    <div className="flex justify-center gap-4 mb-8">
      <button
        onClick={() => handlePlanChange("corretores")}
        className={`px-8 py-3 text-lg font-semibold rounded-lg transition ${
          activePlan === "corretores"
            ? "bg-primary text-white"
            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
        }`}
      >
        Corretor Autônomo
      </button>
      <button
        onClick={() => handlePlanChange("imobiliarias")}
        className={`px-8 py-3 text-lg font-semibold rounded-lg transition ${
          activePlan === "imobiliarias"
            ? "bg-primary text-white"
            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
        }`}
      >
        Imobiliárias
      </button>
    </div>
  );
}
