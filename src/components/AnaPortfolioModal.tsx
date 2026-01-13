"use client";

import { useState } from "react";

export default function AnaPortfolioModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="text-sm inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
      >
        Portfólio da Ana Clara
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </button>

      {/* Modal do Portfólio da Ana Clara */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-0 md:p-4">
          <div className="fixed inset-0 bg-black/50" onClick={() => setIsModalOpen(false)} />
          <div className="relative bg-white w-full h-full md:rounded-2xl md:max-w-[297mm] md:h-[90vh] overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between p-4 md:p-6 border-b bg-gray-50">
              <div>
                <h3 className="text-lg md:text-xl font-bold text-primary">Portfólio da Ana Clara</h3>
                <p className="text-xs md:text-sm text-gray-600 mt-1">Exemplo de como seus clientes visualizam as propostas</p>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 hover:bg-gray-200 rounded-full transition-colors flex-shrink-0"
                aria-label="Fechar modal"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="h-[calc(100vh-70px)] md:h-[calc(90vh-80px)] overflow-auto">
              <iframe
                src="https://app.imobdeal.com.br/portfolio/ckpEETz"
                className="w-full h-full min-h-[800px] border-0"
                title="Portfólio da Ana Clara"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}