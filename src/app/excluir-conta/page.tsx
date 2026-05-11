import type { Metadata } from "next";
import ExcluirContaForm from "./ExcluirContaForm";

export const metadata: Metadata = {
  title: "Solicitar exclusão de conta | ImobDeal",
  description:
    "Solicite a exclusão definitiva da sua conta no aplicativo ImobDeal e dos dados pessoais associados. Atendimento em até 30 dias, conforme a LGPD.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function ExcluirContaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-primary text-white py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-sm uppercase tracking-widest text-white/70 mb-2">
            Aplicativo móvel ImobDeal
          </p>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Solicitar exclusão de conta
          </h1>
          <p className="text-base md:text-lg text-white/90">
            Encerre sua conta e remova seus dados pessoais do ImobDeal
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white p-6 md:p-10 rounded-lg shadow-md">
            <div className="prose max-w-none mb-8">
              <h2 className="text-xl font-bold text-primary mb-3">
                O que acontece após a solicitação
              </h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>
                  Validamos sua identidade pelo e-mail cadastrado e confirmamos
                  o pedido em até <strong>2 dias úteis</strong>.
                </li>
                <li>
                  Sua conta e seus <strong>dados pessoais</strong> (nome,
                  e-mail, telefone, CRECI, foto de perfil) são{" "}
                  <strong>excluídos definitivamente em até 30 dias</strong>.
                </li>
                <li>
                  Dados operacionais que você criou no CRM (contatos de clientes,
                  negócios, imóveis, mensagens, anotações) também são excluídos,
                  exceto quando precisarem ser mantidos pela imobiliária à qual
                  você está vinculado para a continuidade do CRM compartilhado.
                </li>
                <li>
                  Mantemos retidos apenas os dados exigidos por obrigação legal
                  (notas fiscais por 5 anos, logs de acesso por 6 meses) — vide
                  seção 8 da{" "}
                  <a
                    href="/politica-privacidade-app"
                    className="text-primary underline"
                  >
                    política de privacidade do app
                  </a>
                  .
                </li>
                <li>
                  <strong>A exclusão é irreversível.</strong> Não é possível
                  recuperar a conta após a confirmação.
                </li>
              </ul>
            </div>

            <ExcluirContaForm />

            <div className="mt-10 pt-6 border-t border-gray-200 text-sm text-gray-600">
              <p>
                Prefere falar diretamente com nosso Encarregado de Dados? Envie
                um e-mail para{" "}
                <a
                  href="mailto:privacidade@imobdeal.com.br"
                  className="text-primary underline"
                >
                  privacidade@imobdeal.com.br
                </a>{" "}
                a partir do e-mail cadastrado na conta, com o assunto{" "}
                <strong>&quot;Solicitação de exclusão de conta&quot;</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
