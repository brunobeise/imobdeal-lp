"use client";
import { useState } from "react";
import { InputMask } from "@react-input/mask";

export default function ProposalCTA() {
  const [whatsapp, setWhatsapp] = useState("");
  const [error, setError] = useState(false);

  const handleClick = (proposalType: string) => {
    const cleanNumber = whatsapp.replace(/\D/g, "").slice(2);
    if (cleanNumber.length < 11) {
      setError(true);

      return;
    }

    console.log(cleanNumber);

    const proposalUrl =
      proposalType === "morador"
        ? `https://app.imobdeal.com.br/proposta/WNzENco?whatsapp=${cleanNumber}`
        : `https://app.imobdeal.com.br/proposta/atMVOj6?whatsapp=${cleanNumber}`;

    // Abre a proposta em uma nova aba
    window.open(proposalUrl, "_blank");
  };

  return (
    <section className="bg-gray-100 mt-10 mb-10 text-[#0b2a41] py-14 px-6 text-center ">
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        <h2 className="text-4xl font-bold mb-6">
          Experimente uma proposta agora mesmo!
        </h2>
        <p className="text-lg mb-6">
          Veja como sua proposta será apresentada ao cliente e teste o tracking
          em ação. Insira seu WhatsApp para receber notificações quando
          visualizar a proposta.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <InputMask
            placeholder="(__) _____-____"
            mask="+55 (__) _____-____"
            replacement={{ _: /\d/ }}
            className={`border w-full sm:w-80 px-4 py-3 rounded-md text-gray-900 focus:outline-none focus:ring-1 ${
              error ? "border-red-500 ring-red-500" : "border-gray-300"
            }`}
            value={whatsapp || ""}
            onChange={(e) => {
              setWhatsapp(e.target.value);
              setError(false);
            }}
          />
        </div>
        <p
          className={`mt-4 w-[380px] text-center text-sm ${
            error ? "text-red-500" : "text-gray-500"
          }`}
        >
          Digite seu WhatsApp para testar o tracking na prática. Nosso sistema
          enviará uma mensagem assim que você visualizar a proposta.
        </p>

        {/* Botões para testar cada tipo de proposta */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
          <button
            onClick={() => handleClick("morador")}
            className="bg-white border hover:bg-[#c9d7e178]   font-semibold px-6 py-3 rounded-md transition cursor-pointer hover:opacity-90"
          >
            Proposta para Morador
          </button>
          <button
            onClick={() => handleClick("investidor")}
            className="bg-[#0b2a41] text-white  font-semibold px-6 py-3 rounded-md transition cursor-pointer hover:opacity-90"
          >
            Proposta para Investidor
          </button>
        </div>
      </div>
    </section>
  );
}
