import { SiClaude, SiOpenai, SiGooglegemini } from "react-icons/si";
import { MdBolt, MdLockOutline, MdHistory } from "react-icons/md";

/* ---------------------------------------------------------------------------
 * Assistentes de IA via MCP.
 * O backend publica o servidor MCP (OAuth, escopo por módulo, ~175 tools).
 * O app só ensina a conectar o Claude; ChatGPT e Gemini entram como clientes
 * MCP reconhecidos (mcp.origin.ts). Por isso o Claude é a conversa de exemplo.
 * --------------------------------------------------------------------------- */

const assistants = [
  { name: "Claude", icon: <SiClaude size={22} />, color: "#D97757" },
  { name: "ChatGPT", icon: <SiOpenai size={22} />, color: "#111827" },
  { name: "Gemini", icon: <SiGooglegemini size={22} />, color: "#4285F4" },
];

const destaques = [
  {
    icon: <MdBolt size={20} />,
    titulo: "Mais de 170 ações",
    texto:
      "Pipeline, imóveis, leads, metas, financeiro e WhatsApp. O assistente consulta e executa o mesmo que você faria na tela.",
  },
  {
    icon: <MdLockOutline size={20} />,
    titulo: "Dentro das suas permissões",
    texto:
      "Ele age como você, nem um acesso a mais. O corretor vê só o que já via, e você escolhe quais módulos liberar ao conectar.",
  },
  {
    icon: <MdHistory size={20} />,
    titulo: "Tudo fica registrado",
    texto:
      "Cada alteração entra no histórico com o seu nome e o do assistente. Os números são os mesmos dos dashboards, sem conta paralela.",
  },
];

const parados = [
  { cliente: "João Pereira", etapa: "Visita", dias: 14, corretor: "Carla" },
  { cliente: "Mariana Souza", etapa: "Proposta", dias: 12, corretor: "Rafael" },
  { cliente: "Paulo Lima", etapa: "Atendimento", dias: 11, corretor: "Rafael" },
];

function ToolChip({ label }: { label: string }) {
  return (
    <div className="inline-flex items-center gap-1.5 rounded-md border border-[#E8E4D8] bg-white px-2.5 py-1 text-[11px] font-medium text-gray-500">
      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
      ImobDeal: {label}
    </div>
  );
}

function UserBubble({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-end">
      <p className="max-w-[85%] rounded-2xl bg-[#EFECE3] px-4 py-2.5 text-sm text-gray-800">
        {children}
      </p>
    </div>
  );
}

function ClaudeTurn({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-3">
      <SiClaude size={18} className="mt-1 flex-shrink-0 text-[#D97757]" />
      <div className="min-w-0 flex-1 space-y-2.5 text-sm leading-relaxed text-gray-800">
        {children}
      </div>
    </div>
  );
}

/* Conversa ilustrativa, no visual do Claude. Nomes e números são de exemplo. */
function ChatMock() {
  return (
    <div
      role="img"
      aria-label="Exemplo de conversa no Claude conectado ao ImobDeal: o gestor pergunta quais negócios estão parados e pede para criar uma tarefa"
      className="overflow-hidden rounded-2xl border border-[#E8E4D8] bg-[#FAF9F5] shadow-xl shadow-primary/5"
    >
      <div className="flex items-center gap-2 border-b border-[#E8E4D8] px-5 py-3">
        <SiClaude size={16} className="text-[#D97757]" />
        <span className="text-sm font-semibold text-gray-800">Claude</span>
        <span className="ml-auto rounded-full bg-white px-2.5 py-0.5 text-[11px] font-medium text-gray-500 ring-1 ring-[#E8E4D8]">
          ImobDeal conectado
        </span>
      </div>

      <div className="space-y-5 px-5 py-6" aria-hidden="true">
        <UserBubble>Quais negócios estão parados há mais de 10 dias?</UserBubble>

        <ClaudeTurn>
          <ToolChip label="negócios estagnados" />
          <p>Encontrei 3 negócios sem movimento há mais de 10 dias:</p>
          <ul className="divide-y divide-[#E8E4D8] rounded-lg border border-[#E8E4D8] bg-white text-[13px]">
            {parados.map((n) => (
              <li
                key={n.cliente}
                className="flex items-center justify-between gap-3 px-3 py-2"
              >
                <span className="min-w-0 leading-tight">
                  <span className="block font-semibold">{n.cliente}</span>
                  <span className="block text-xs text-gray-500">{n.etapa}</span>
                </span>
                <span className="flex-shrink-0 text-gray-500">
                  {n.dias} dias · {n.corretor}
                </span>
              </li>
            ))}
          </ul>
          <p>
            O da Mariana já está em proposta. Quer que eu crie uma tarefa para o
            Rafael ligar para ela hoje?
          </p>
        </ClaudeTurn>

        <UserBubble>Cria, para as 15h.</UserBubble>

        <ClaudeTurn>
          <ToolChip label="criar tarefa" />
          <p>
            Pronto. Tarefa criada para o Rafael hoje às 15h, no negócio da
            Mariana Souza. Fica no histórico como feita por você, via Claude.
          </p>
        </ClaudeTurn>
      </div>
    </div>
  );
}

export default function AiAssistants() {
  return (
    <section className="bg-surface-light py-20 md:py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-sm font-semibold text-accent-amber uppercase tracking-wider mb-3">
              Inteligência artificial · 100% MCP
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-[2.6rem] font-bold text-gray-900 tracking-tight leading-[1.15] text-balance">
              Pergunte em português.
              <span className="block text-primary">
                A IA responde com os dados da sua imobiliária.
              </span>
            </h2>
            <p className="text-gray-500 text-base md:text-lg mt-5 leading-relaxed">
              O ImobDeal é 100% conectado por MCP, o padrão aberto que liga
              assistentes de IA a sistemas. Conecte o assistente que você já usa
              e ele passa a consultar seus negócios, imóveis, leads e metas. E
              também a agir: registra nota, cria tarefa, move negócio de etapa.
            </p>

            {/* Assistentes compatíveis */}
            <div className="mt-8">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Funciona com
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-3">
                {assistants.map((a) => (
                  <span
                    key={a.name}
                    className="inline-flex items-center gap-2.5 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-800"
                  >
                    <span style={{ color: a.color }}>{a.icon}</span>
                    {a.name}
                  </span>
                ))}
              </div>
              <p className="text-gray-500 text-sm mt-3">
                E qualquer outro assistente compatível com MCP. Sem instalar
                nada: cole o endereço do ImobDeal e autorize.
              </p>
            </div>
          </div>

          <ChatMock />
        </div>

        {/* Destaques */}
        <div className="mt-14 grid md:grid-cols-3 gap-x-10 gap-y-8">
          {destaques.map((d) => (
            <div key={d.titulo}>
              <span className="text-primary">{d.icon}</span>
              <p className="text-gray-900 font-bold text-sm mt-2.5">
                {d.titulo}
              </p>
              <p className="text-gray-600 text-sm mt-1.5 leading-relaxed">
                {d.texto}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
