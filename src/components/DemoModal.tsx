"use client";
import { useState } from "react";
import ProposalCTA from "./ProposalCTA";

export default function DemoButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <button
        onClick={openModal}
        className="bg-primary hover:bg-primary/90 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg font-bold transition-colors text-sm md:text-[14px] text-center"
      >
        Ver Demonstração
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/70 bg-opacity-50 flex items-center justify-center z-50 p-2 md:p-4">
          <div className="rounded-lg max-w-4xl w-full max-h-[95vh] md:max-h-[90vh] overflow-y-auto relative">
            {/* Botão de fechar */}
            <button
              onClick={closeModal}
              className="absolute top-2 md:top-12 right-2 md:right-6 text-gray-500 hover:text-gray-700 text-xl md:text-2xl font-bold z-10"
            >
              ×
            </button>

            {/* Usando o mesmo componente da página como-funciona */}
            <ProposalCTA />
          </div>
        </div>
      )}
    </>
  );
}
