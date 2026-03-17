import FreeTrialButton from "@/components/FreeTrialButton";
import HeroBackground from "@/components/HeroBackground";

export default function ComoFunciona() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative min-h-[80vh] flex items-center bg-primary overflow-hidden">
        <HeroBackground />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-5 md:px-8 py-28 md:py-36 text-center">
          <p className="text-gradient-accent text-xs sm:text-sm font-bold uppercase tracking-[0.2em] mb-6">
            Links Inteligentes
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.6rem] font-bold text-white tracking-tight leading-[1.1] max-w-4xl mx-auto">
            Cada clique do seu cliente
            <br />
            <span className="text-gradient-accent">conta uma história.</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-white/70 mt-6 max-w-2xl mx-auto leading-relaxed">
            Envie propostas, portfólios e análises por links rastreáveis. Saiba em tempo real quem abriu, o que olhou e por quanto tempo — e receba um alerta no WhatsApp na hora certa de fazer o follow-up.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <FreeTrialButton
              variant="primary"
              size="large"
              source="como_funciona_hero"
              showBlackNovemberBadge={false}
              className="w-full sm:w-auto px-10 !bg-gradient-to-r !from-accent-yellow !via-accent-amber !to-accent-orange !text-primary !rounded-xl !font-bold !shadow-lg !shadow-accent-amber/20 hover:!shadow-xl hover:!shadow-accent-amber/30 !transition-all !duration-300"
            >
              Teste Grátis por 7 Dias
            </FreeTrialButton>
            <a
              href="#como-funciona"
              className="text-white/60 hover:text-white text-sm font-medium transition-colors"
            >
              Ver como funciona →
            </a>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-white/40">
            <span className="flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-accent-amber">
                <path d="M11.667 3.5L5.25 9.917 2.333 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Tracking em tempo real
            </span>
            <span className="flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-accent-amber">
                <path d="M11.667 3.5L5.25 9.917 2.333 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Notificação via WhatsApp
            </span>
            <span className="flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-accent-amber">
                <path d="M11.667 3.5L5.25 9.917 2.333 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Setup em 5 minutos
            </span>
          </div>
        </div>
      </section>

      {/* ── O QUE SÃO LINKS INTELIGENTES ─────────────────────────── */}
      <section className="bg-surface-light py-20 md:py-28 px-5 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-accent-amber uppercase tracking-wider mb-3">
              O conceito
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-gray-900 tracking-tight leading-tight">
              Não é só um link.
              <br />
              <span className="text-primary">É uma ferramenta de vendas.</span>
            </h2>
            <p className="mt-4 text-base md:text-lg text-gray-500 max-w-2xl mx-auto">
              Links Inteligentes do ImobDeal são URLs únicas que carregam propostas, portfólios ou análises de investimento — e rastreiam cada interação do cliente automaticamente.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="group relative bg-white rounded-2xl p-8 shadow-[0_1px_3px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300 border border-gray-100">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-primary">
                  <path d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M10.172 13.828a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.102 1.101" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">URL única por cliente</h3>
              <p className="text-gray-500 leading-relaxed">
                Cada link é exclusivo. Quando o cliente abre, você sabe exatamente quem está visualizando, sem confusão.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group relative bg-white rounded-2xl p-8 shadow-[0_1px_3px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300 border border-gray-100">
              <div className="w-12 h-12 rounded-xl bg-accent-amber/15 flex items-center justify-center mb-5">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-accent-amber">
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7S2 12 2 12z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Rastreamento invisível</h3>
              <p className="text-gray-500 leading-relaxed">
                Sem plugins, sem downloads. O cliente abre normalmente e você recebe dados de visualização, tempo de leitura e engajamento.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group relative bg-white rounded-2xl p-8 shadow-[0_1px_3px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300 border border-gray-100">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-5">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-emerald-600">
                  <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Alerta instantâneo</h3>
              <p className="text-gray-500 leading-relaxed">
                Receba uma notificação no WhatsApp no momento exato em que o cliente abre o link. O timing perfeito para o follow-up.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMO FUNCIONA (step-by-step) ─────────────────────────── */}
      <section id="como-funciona" className="bg-white py-20 md:py-28 px-5 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-accent-amber uppercase tracking-wider mb-3">
              Passo a passo
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-gray-900 tracking-tight leading-tight">
              Simples assim:
              <br />
              <span className="text-primary">3 passos para vender mais.</span>
            </h2>
          </div>

          <div className="space-y-0">
            {/* Step 1 */}
            <div className="relative flex flex-col md:flex-row items-start gap-6 md:gap-10 pb-16">
              <div className="flex-shrink-0 flex flex-col items-center">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-yellow via-accent-amber to-accent-orange flex items-center justify-center text-primary font-black text-xl shadow-lg shadow-accent-amber/20">
                  1
                </div>
                <div className="hidden md:block w-px h-full bg-gradient-to-b from-accent-amber/30 to-transparent mt-3" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Crie o conteúdo e gere o link</h3>
                <p className="text-gray-500 text-lg leading-relaxed max-w-xl">
                  Monte sua proposta comercial, portfólio de imóveis ou análise de investimento na plataforma. Em poucos cliques, o ImobDeal gera um link exclusivo e rastreável — pronto para enviar por WhatsApp, e-mail ou qualquer canal.
                </p>
                <div className="mt-5 inline-flex items-center gap-2 bg-primary/5 rounded-xl px-4 py-2.5 text-sm">
                  <span className="text-primary font-mono font-medium">app.imobdeal.com.br/p/</span>
                  <span className="text-accent-amber font-bold">seu-link-unico</span>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative flex flex-col md:flex-row items-start gap-6 md:gap-10 pb-16">
              <div className="flex-shrink-0 flex flex-col items-center">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-yellow via-accent-amber to-accent-orange flex items-center justify-center text-primary font-black text-xl shadow-lg shadow-accent-amber/20">
                  2
                </div>
                <div className="hidden md:block w-px h-full bg-gradient-to-b from-accent-amber/30 to-transparent mt-3" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">O cliente abre e navega</h3>
                <p className="text-gray-500 text-lg leading-relaxed max-w-xl">
                  Seu cliente clica no link e visualiza um conteúdo profissional e interativo — sem precisar baixar nada. Nos bastidores, o ImobDeal registra cada ação: quando abriu, quanto tempo ficou, quais imóveis ou condições mais chamaram atenção.
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 rounded-lg px-3 py-1.5 text-sm font-medium">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    Visualizou 3min 42s
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 rounded-lg px-3 py-1.5 text-sm font-medium">
                    <span className="w-2 h-2 rounded-full bg-blue-400" />
                    5 imóveis visitados
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-amber-50 text-amber-700 rounded-lg px-3 py-1.5 text-sm font-medium">
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                    2 favoritos
                  </span>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative flex flex-col md:flex-row items-start gap-6 md:gap-10">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-yellow via-accent-amber to-accent-orange flex items-center justify-center text-primary font-black text-xl shadow-lg shadow-accent-amber/20">
                  3
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Você recebe o alerta e age</h3>
                <p className="text-gray-500 text-lg leading-relaxed max-w-xl">
                  No momento em que o cliente abre o link, uma notificação chega no seu WhatsApp com nome do cliente e qual conteúdo ele acessou. Você faz o follow-up na hora certa, com contexto — quando o interesse está no pico.
                </p>
                <div className="mt-5 bg-gray-50 rounded-2xl p-5 max-w-sm border border-gray-100">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-full bg-emerald-500 flex items-center justify-center">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-medium">ImobDeal Bot</p>
                      <p className="text-sm text-gray-700 font-medium">Agora</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-100">
                    <p className="text-sm text-gray-600">
                      🔔 <strong className="text-gray-800">João Silva</strong> abriu sua proposta <strong className="text-primary">&quot;Ap. 302 - Ed. Aurora&quot;</strong> agora mesmo!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TIPOS DE LINKS ───────────────────────────────────────── */}
      <section className="bg-surface-light py-20 md:py-28 px-5 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-accent-amber uppercase tracking-wider mb-3">
              4 tipos de link
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-gray-900 tracking-tight leading-tight">
              Um link para cada momento
              <br />
              <span className="text-primary">da jornada do cliente.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Proposta */}
            <div className="relative bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-[0_1px_3px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300">
              <div className="h-2 bg-gradient-to-r from-primary to-primary-light" />
              <div className="p-8">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-primary">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Link de Proposta</h3>
                <p className="text-gray-500 leading-relaxed mb-5">
                  Proposta comercial completa com fotos, condições de pagamento, simulação financeira e dados do imóvel — tudo interativo e profissional.
                </p>
                <ul className="space-y-2.5">
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-emerald-500 flex-shrink-0">
                      <path d="M13.333 4L6 11.333 2.667 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Fotos em alta resolução do imóvel
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-emerald-500 flex-shrink-0">
                      <path d="M13.333 4L6 11.333 2.667 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Tabela de pagamento personalizada
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-emerald-500 flex-shrink-0">
                      <path d="M13.333 4L6 11.333 2.667 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Tracking de tempo em cada seção
                  </li>
                </ul>
              </div>
            </div>

            {/* Portfólio */}
            <div className="relative bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-[0_1px_3px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300">
              <div className="h-2 bg-gradient-to-r from-accent-yellow via-accent-amber to-accent-orange" />
              <div className="p-8">
                <div className="w-14 h-14 rounded-2xl bg-accent-amber/15 flex items-center justify-center mb-5">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-accent-amber">
                    <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
                    <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
                    <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
                    <rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Link de Portfólio</h3>
                <p className="text-gray-500 leading-relaxed mb-5">
                  Vários imóveis em um único link. Ideal para mostrar opções ao cliente e descobrir qual despertou mais interesse — pelo tempo de visualização.
                </p>
                <ul className="space-y-2.5">
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-emerald-500 flex-shrink-0">
                      <path d="M13.333 4L6 11.333 2.667 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Múltiplos imóveis em um só link
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-emerald-500 flex-shrink-0">
                      <path d="M13.333 4L6 11.333 2.667 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Gráfico de interesse por imóvel
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-emerald-500 flex-shrink-0">
                      <path d="M13.333 4L6 11.333 2.667 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Comparação visual para o cliente
                  </li>
                </ul>
              </div>
            </div>

            {/* Imóvel */}
            <div className="relative bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-[0_1px_3px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300">
              <div className="h-2 bg-gradient-to-r from-sky-400 to-blue-600" />
              <div className="p-8">
                <div className="w-14 h-14 rounded-2xl bg-sky-500/10 flex items-center justify-center mb-5">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-sky-600">
                    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M9 22V12h6v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Link de Imóvel</h3>
                <p className="text-gray-500 leading-relaxed mb-5">
                  Uma landing page exclusiva para cada imóvel. Compartilhe nas redes, anúncios ou diretamente com o cliente — com tracking de quem acessou.
                </p>
                <ul className="space-y-2.5">
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-emerald-500 flex-shrink-0">
                      <path d="M13.333 4L6 11.333 2.667 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Landing page individual por imóvel
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-emerald-500 flex-shrink-0">
                      <path d="M13.333 4L6 11.333 2.667 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Galeria de fotos e detalhes completos
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-emerald-500 flex-shrink-0">
                      <path d="M13.333 4L6 11.333 2.667 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Ideal para redes sociais e anúncios
                  </li>
                </ul>
              </div>
            </div>

            {/* Viabilidade */}
            <div className="relative bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-[0_1px_3px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300">
              <div className="h-2 bg-gradient-to-r from-emerald-400 to-emerald-600" />
              <div className="p-8">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-5">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-emerald-600">
                    <path d="M18 20V10M12 20V4M6 20v-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Link de Viabilidade</h3>
                <p className="text-gray-500 leading-relaxed mb-5">
                  Análise de investimento com projeção de rentabilidade, retorno e valorização — profissional e interativa, feita para converter investidores.
                </p>
                <ul className="space-y-2.5">
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-emerald-500 flex-shrink-0">
                      <path d="M13.333 4L6 11.333 2.667 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Simulação de retorno financeiro
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-emerald-500 flex-shrink-0">
                      <path d="M13.333 4L6 11.333 2.667 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Gráficos profissionais automáticos
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-emerald-500 flex-shrink-0">
                      <path d="M13.333 4L6 11.333 2.667 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Credibilidade com investidores
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── POR QUE TRACKING MUDA O JOGO ─────────────────────────── */}
      <section className="bg-white py-20 md:py-28 px-5 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-accent-amber uppercase tracking-wider mb-3">
              O diferencial
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-gray-900 tracking-tight leading-tight">
              Sem tracking, você vende no escuro.
              <br />
              <span className="text-primary">Com tracking, você vende no timing.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Sem ImobDeal */}
            <div className="rounded-2xl border-2 border-red-100 bg-red-50/50 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-red-500">
                    <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-red-700">Sem Links Inteligentes</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-red-400 flex-shrink-0 mt-0.5">
                    <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  <span className="text-red-700/80 text-sm leading-relaxed">Envia PDF e nunca sabe se o cliente sequer abriu</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-red-400 flex-shrink-0 mt-0.5">
                    <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  <span className="text-red-700/80 text-sm leading-relaxed">Faz follow-up no momento errado e incomoda o cliente</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-red-400 flex-shrink-0 mt-0.5">
                    <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  <span className="text-red-700/80 text-sm leading-relaxed">Não sabe quais imóveis despertaram mais interesse</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-red-400 flex-shrink-0 mt-0.5">
                    <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  <span className="text-red-700/80 text-sm leading-relaxed">Perde vendas por não agir na hora certa</span>
                </li>
              </ul>
            </div>

            {/* Com ImobDeal */}
            <div className="rounded-2xl border-2 border-emerald-100 bg-emerald-50/50 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-emerald-600">
                    <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-emerald-800">Com Links Inteligentes</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-emerald-500 flex-shrink-0 mt-0.5">
                    <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-emerald-800/80 text-sm leading-relaxed">Sabe o segundo exato em que o cliente abriu o link</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-emerald-500 flex-shrink-0 mt-0.5">
                    <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-emerald-800/80 text-sm leading-relaxed">Faz o follow-up quando o interesse está no pico</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-emerald-500 flex-shrink-0 mt-0.5">
                    <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-emerald-800/80 text-sm leading-relaxed">Descobre qual imóvel ou condição chamou mais atenção</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-emerald-500 flex-shrink-0 mt-0.5">
                    <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-emerald-800/80 text-sm leading-relaxed">Converte mais com atendimento assertivo e no timing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── MÉTRICAS RÁPIDAS ─────────────────────────────────────── */}
      <section className="bg-primary py-16 px-5 md:px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-3xl md:text-4xl font-black text-white tracking-tight">+50%</p>
            <p className="text-white/50 text-sm mt-1">Taxa de fechamento</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-black text-gradient-accent tracking-tight">5 min</p>
            <p className="text-white/50 text-sm mt-1">Para criar e enviar</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-black text-white tracking-tight">Real-time</p>
            <p className="text-white/50 text-sm mt-1">Notificação via WhatsApp</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-black text-gradient-accent tracking-tight">100%</p>
            <p className="text-white/50 text-sm mt-1">Rastreável e mensurável</p>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ────────────────────────────────────────────── */}
      <section className="relative bg-primary py-20 md:py-28 overflow-hidden">
        <HeroBackground />
        <div className="relative z-10 max-w-3xl mx-auto px-5 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Pare de vender no escuro.
          </h2>
          <p className="text-white/60 text-lg mt-5 max-w-xl mx-auto">
            Comece a enviar Links Inteligentes hoje. Saiba quem abre, o que olha e quando agir — tudo em tempo real no seu WhatsApp.
          </p>
          <div className="mt-10">
            <FreeTrialButton
              variant="primary"
              size="large"
              source="como_funciona_cta_final"
              showBlackNovemberBadge={false}
              className="!bg-gradient-to-r !from-accent-yellow !via-accent-amber !to-accent-orange !text-primary !rounded-xl !font-bold !shadow-lg !shadow-accent-amber/20 hover:!shadow-xl hover:!shadow-accent-amber/30 !transition-all !duration-300 px-12"
            >
              Começar Teste Grátis
            </FreeTrialButton>
          </div>
          <p className="text-white/30 text-xs mt-6">
            7 dias grátis · Setup em 5 minutos · Cancele quando quiser
          </p>
        </div>
      </section>
    </>
  );
}
