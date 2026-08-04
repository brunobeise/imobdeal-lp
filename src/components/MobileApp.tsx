import { FaApple, FaGooglePlay } from "react-icons/fa";
import { MdCheck } from "react-icons/md";
import LightboxImage from "./LightboxImage";

/* ---------------------------------------------------------------------------
 * Lojas. A App Store usa /br/ (e não /us/) para cair na ficha em português;
 * o Google Play recebe hl=pt_BR pelo mesmo motivo.
 * Vazias, as constantes fazem o selo virar estático em vez de link quebrado.
 * --------------------------------------------------------------------------- */
const APP_STORE_URL =
  "https://apps.apple.com/br/app/imobdeal-crm-imobili%C3%A1rio/id6768801586";
const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.imobdeal.app&hl=pt_BR";

const appHighlights = [
  "Agenda e visitas do dia na palma da mão",
  "Leads novos e negócios em andamento",
  "Cadastro de imóvel por áudio, direto da rua",
  "Acompanhamento da equipe em tempo real",
];

function StoreBadge({
  href,
  icon,
  label,
  store,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  store: string;
}) {
  const content = (
    <>
      <span className="text-white/90">{icon}</span>
      <span className="text-left leading-tight">
        <span className="block text-[10px] text-white/50 uppercase tracking-wide">
          {label}
        </span>
        <span className="block text-sm font-semibold text-white">{store}</span>
      </span>
    </>
  );

  const className =
    "inline-flex items-center gap-3 rounded-xl border border-white/15 bg-white/5 px-5 py-3 transition-colors";

  // Sem URL configurada, renderiza como selo estático — nunca como link quebrado.
  if (!href) {
    return <div className={className}>{content}</div>;
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${className} hover:bg-white/10`}
    >
      {content}
    </a>
  );
}

export default function MobileApp() {
  return (
    <section className="bg-primary py-20 md:py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        {/* App mobile */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-[2.6rem] font-extrabold text-white tracking-tight leading-[1.15] text-balance">
              Sua operação continua rodando
              <span className="block text-accent-amber">fora do escritório.</span>
            </h2>
            <p className="text-white/60 text-base md:text-lg mt-5 leading-relaxed max-w-xl">
              O ImobDeal tem aplicativo nativo para iPhone e Android. Seu corretor
              atende o lead na rua, entre uma visita e outra. E você acompanha o
              movimento da equipe de onde estiver.
            </p>

            <ul className="mt-8 space-y-3">
              {appHighlights.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2.5 text-sm text-white/70"
                >
                  <MdCheck
                    className="text-accent-amber mt-0.5 flex-shrink-0"
                    size={18}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <StoreBadge
                href={APP_STORE_URL}
                icon={<FaApple size={24} />}
                label="Baixe na"
                store="App Store"
              />
              <StoreBadge
                href={PLAY_STORE_URL}
                icon={<FaGooglePlay size={20} />}
                label="Disponível no"
                store="Google Play"
              />
            </div>
          </div>

          {/* Mockup do app — PNG com fundo transparente, sem moldura */}
          <div className="flex justify-center">
            <div className="w-full max-w-[300px]">
              <LightboxImage
                src="/screenshots/app-mobile.png"
                alt="Aplicativo do ImobDeal no celular: leads aguardando atendimento, tarefas atrasadas e funil de vendas por etapa"
                aspect="1216 / 2207"
                sizes="(min-width: 1024px) 300px, 70vw"
                bare
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
