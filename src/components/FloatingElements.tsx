/**
 * FloatingElements — Animated glass-morphism UI cards that float
 * around the hero text, showcasing platform features.
 * Positioned relative to a centered container so they stay near text on wide screens.
 * Pure CSS animations. Server Component.
 */
export default function FloatingElements() {
  return (
    <div
      className="absolute inset-0 pointer-events-none z-[5] flex justify-center"
      aria-hidden="true"
    >
      {/* Centered anchor — cards position relative to this */}
      <div className="relative w-full max-w-7xl h-full">

        {/* ── 1. LEADS NOTIFICATION ── top-left */}
        <div className="absolute top-[12%] left-0 hidden lg:block">
          <div className="hero-float-enter" style={{ animationDelay: "0.2s" }}>
            <div
              className="floating-card"
              style={{ "--float-y": "-8px", "--float-duration": "12s" } as React.CSSProperties}
            >
              <div className="glass-float rounded-2xl px-5 py-3.5">
                <div className="flex items-center gap-3">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400" />
                  </span>
                  <div>
                    <p className="text-white text-sm font-bold tracking-tight">3 leads novos</p>
                    <p className="text-white/40 text-[10px]">Última hora</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── 2. VGV VENDIDO ── top-right */}
        <div
          className="absolute top-[8%] right-0 hidden lg:block"
          style={{ transform: "rotate(-1deg)" }}
        >
          <div className="hero-float-enter" style={{ animationDelay: "0.5s" }}>
            <div
              className="floating-card"
              style={{ "--float-y": "-9px", "--float-duration": "14s" } as React.CSSProperties}
            >
              <div className="glass-float rounded-2xl p-4 w-52">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-7 h-7 rounded-lg bg-accent-amber/20 flex items-center justify-center">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-accent-amber">
                      <path d="M7 1v12M4 4h5a2 2 0 010 4H4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <p className="text-white/40 text-[10px] font-medium">VGV Vendido</p>
                </div>
                <p className="text-white text-xl font-bold tracking-tight">
                  R$ 2.4<span className="text-base text-white/40">M</span>
                </p>
                <div className="flex items-center gap-1 mt-1">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-emerald-400">
                    <path d="M6 9V3m0 0L3 6m3-3l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-emerald-400 text-[11px] font-medium">+R$ 450K este mês</span>
                </div>
                <div className="mt-2.5 flex items-end gap-0.5 h-6">
                  {[25, 35, 28, 50, 38, 55, 48, 65, 52, 70, 62, 80].map((h, i) => (
                    <div key={i} className="flex-1 rounded-t bg-gradient-to-t from-accent-amber/40 to-accent-amber/10" style={{ height: `${h}%` }} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── 3. KANBAN PC ── mid-left */}
        <div
          className="absolute top-[28%] -left-32 hidden xl:block"
          style={{ transform: "rotate(-3deg)" }}
        >
          <div className="hero-float-enter" style={{ animationDelay: "0.8s" }}>
            <div
              className="floating-card"
              style={{ "--float-y": "-7px", "--float-duration": "16s" } as React.CSSProperties}
            >
              <div className="glass-float rounded-2xl p-3.5 w-72">
                <div className="flex items-center gap-2 px-1 mb-2.5">
                  <div className="flex gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-red-400/60" />
                    <span className="w-2 h-2 rounded-full bg-amber-400/60" />
                    <span className="w-2 h-2 rounded-full bg-emerald-400/60" />
                  </div>
                  <div className="flex-1 bg-white/[0.06] rounded px-2 py-0.5">
                    <span className="text-white/25 text-[8px]">app.imobdeal.com.br/kanban</span>
                  </div>
                </div>
                <div className="bg-white/[0.04] rounded-lg border border-dashed border-white/[0.1] p-2.5 h-36">
                  <div className="flex gap-2 h-full">
                    <div className="flex-1 flex flex-col gap-1.5">
                      <div className="flex items-center gap-1 mb-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400/60" />
                        <span className="text-white/25 text-[7px] font-medium">Novos</span>
                      </div>
                      <div className="bg-white/[0.06] rounded p-1.5 flex-1">
                        <div className="w-full h-1.5 bg-white/10 rounded mb-1" />
                        <div className="w-3/4 h-1 bg-white/[0.05] rounded" />
                      </div>
                      <div className="bg-white/[0.06] rounded p-1.5 flex-1">
                        <div className="w-full h-1.5 bg-white/10 rounded mb-1" />
                        <div className="w-1/2 h-1 bg-white/[0.05] rounded" />
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col gap-1.5">
                      <div className="flex items-center gap-1 mb-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/60" />
                        <span className="text-white/25 text-[7px] font-medium">Em visita</span>
                      </div>
                      <div className="bg-white/[0.06] rounded p-1.5 flex-1">
                        <div className="w-full h-1.5 bg-white/10 rounded mb-1" />
                        <div className="w-2/3 h-1 bg-white/[0.05] rounded" />
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col gap-1.5">
                      <div className="flex items-center gap-1 mb-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/60" />
                        <span className="text-white/25 text-[7px] font-medium">Proposta</span>
                      </div>
                      <div className="bg-white/[0.06] rounded p-1.5 flex-1">
                        <div className="w-full h-1.5 bg-white/10 rounded mb-1" />
                        <div className="w-3/5 h-1 bg-white/[0.05] rounded" />
                      </div>
                      <div className="bg-white/[0.06] rounded p-1.5 flex-1">
                        <div className="w-full h-1.5 bg-white/10 rounded mb-1" />
                        <div className="w-2/4 h-1 bg-white/[0.05] rounded" />
                      </div>
                    </div>
                  </div>
                  <p className="text-center text-white/20 text-[8px] mt-1.5">Print do Kanban aqui</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── 4. TEMPO MÉDIO DE RESPOSTA ── mid-right */}
        <div
          className="absolute top-[29%] -right-16 hidden xl:block"
          style={{ transform: "rotate(2deg)" }}
        >
          <div className="hero-float-enter" style={{ animationDelay: "1s" }}>
            <div
              className="floating-card"
              style={{ "--float-y": "-10px", "--float-duration": "15s" } as React.CSSProperties}
            >
              <div className="glass-float rounded-2xl p-4 w-48">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-7 h-7 rounded-lg bg-violet-500/20 flex items-center justify-center">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-violet-400">
                      <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M7 4v3.5l2.5 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                  <p className="text-white/40 text-[10px] font-medium">Tempo Médio de Resposta</p>
                </div>
                <p className="text-white text-2xl font-bold tracking-tight">
                  4<span className="text-lg text-white/50">min</span>
                </p>
                <div className="flex items-center gap-1 mt-1">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-emerald-400">
                    <path d="M6 9V3m0 0L3 6m3-3l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-emerald-400 text-[11px] font-medium">−38% este mês</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── 5. MOBILE LISTA DE LEADS ── right-lower */}
        <div
          className="absolute top-[48%] right-4 hidden xl:block"
          style={{ transform: "rotate(3deg)" }}
        >
          <div className="hero-float-enter" style={{ animationDelay: "1.3s" }}>
            <div
              className="floating-card"
              style={{ "--float-y": "-9px", "--float-duration": "14s" } as React.CSSProperties}
            >
              <div className="glass-float rounded-[20px] p-2 w-36">
                <div className="flex justify-center mb-1.5">
                  <div className="w-12 h-1.5 bg-white/10 rounded-full" />
                </div>
                <div className="bg-white/[0.04] rounded-xl border border-dashed border-white/[0.08] p-2 space-y-1.5">
                  <div className="flex items-center gap-1 mb-2">
                    <span className="text-white/30 text-[7px] font-bold">Meus Leads</span>
                    <span className="ml-auto text-[6px] text-accent-amber/60 font-medium">Ver todos</span>
                  </div>
                  {["Ana S.", "Carlos M.", "Júlia R.", "Roberto P."].map((name, i) => (
                    <div key={i} className="flex items-center gap-1.5 bg-white/[0.05] rounded-lg px-1.5 py-1">
                      <div className="w-4 h-4 rounded-full bg-gradient-to-br from-white/20 to-white/5 flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="text-white/40 text-[6px] font-medium truncate">{name}</p>
                        <p className="text-white/20 text-[5px]">Apt {2 + i} quartos</p>
                      </div>
                      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${i === 0 ? "bg-emerald-400" : i === 1 ? "bg-amber-400" : "bg-white/15"}`} />
                    </div>
                  ))}
                  <p className="text-center text-white/15 text-[6px] pt-1">Print lista de leads</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── 6. WHATSAPP NOTIFICATION ── left-lower */}
        <div
          className="absolute bottom-[36%] -left-12 hidden xl:block"
          style={{ transform: "rotate(-1deg)" }}
        >
          <div className="hero-float-enter" style={{ animationDelay: "1.4s" }}>
            <div
              className="floating-card"
              style={{ "--float-y": "-7px", "--float-duration": "11s" } as React.CSSProperties}
            >
              <div className="glass-float rounded-2xl px-4 py-3 flex items-center gap-3">
                <div className="w-9 h-9 bg-emerald-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-emerald-400">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white text-[11px] font-semibold">Lead visualizou proposta</p>
                  <p className="text-white/30 text-[9px]">Agora mesmo</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── 7. TAXA DE CONVERSÃO ── bottom-left */}
        <div
          className="absolute bottom-[18%] left-6 hidden lg:block"
          style={{ transform: "rotate(1deg)" }}
        >
          <div className="hero-float-enter" style={{ animationDelay: "0.7s" }}>
            <div
              className="floating-card"
              style={{ "--float-y": "-8px", "--float-duration": "13s" } as React.CSSProperties}
            >
              <div className="glass-float rounded-2xl px-5 py-4 flex items-center gap-3.5">
                <div className="relative w-12 h-12 flex-shrink-0">
                  <svg viewBox="0 0 36 36" className="w-12 h-12 -rotate-90">
                    <circle cx="18" cy="18" r="14" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="4" />
                    <circle cx="18" cy="18" r="14" fill="none" stroke="url(#convGrad)" strokeWidth="4" strokeDasharray="88 88" strokeDashoffset="56" strokeLinecap="round" />
                    <defs>
                      <linearGradient id="convGrad" x1="0" y1="0" x2="36" y2="36">
                        <stop offset="0%" stopColor="#fbbf24" />
                        <stop offset="100%" stopColor="#fb923c" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <span className="absolute inset-0 flex items-center justify-center text-white text-[10px] font-bold">36%</span>
                </div>
                <div>
                  <p className="text-white/40 text-[10px] font-medium">Taxa de Conversão</p>
                  <p className="text-white text-lg font-bold tracking-tight">36<span className="text-sm text-white/40">%</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── 8. VISITAS REALIZADAS ── bottom-center-left */}
        <div
          className="absolute bottom-[6%] left-[18%] hidden lg:block"
          style={{ transform: "rotate(-1deg)" }}
        >
          <div className="hero-float-enter" style={{ animationDelay: "1.6s" }}>
            <div
              className="floating-card"
              style={{ "--float-y": "-6px", "--float-duration": "11s" } as React.CSSProperties}
            >
              <div className="glass-float rounded-2xl px-4 py-3 flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-cyan-400">
                    <path d="M2 14l3-4 3 2 3-5 3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="13" cy="4" r="2" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </div>
                <div>
                  <p className="text-white/40 text-[10px] font-medium">Visitas Realizadas</p>
                  <p className="text-white text-lg font-bold tracking-tight">84 <span className="text-emerald-400 text-[10px] font-medium">+12</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── 9. RELATÓRIOS ── bottom-right */}
        <div
          className="absolute bottom-[10%] right-24 hidden lg:block"
          style={{ transform: "rotate(2deg)" }}
        >
          <div className="hero-float-enter" style={{ animationDelay: "1.5s" }}>
            <div
              className="floating-card"
              style={{ "--float-y": "-8px", "--float-duration": "12s" } as React.CSSProperties}
            >
              <div className="glass-float rounded-2xl p-4 w-44">
                <div className="flex items-center justify-between mb-2.5">
                  <p className="text-white/50 text-[10px] font-semibold">Relatórios</p>
                  <span className="text-[8px] text-white/20 bg-white/[0.06] px-1.5 py-0.5 rounded">Semanal</span>
                </div>
                <div className="flex items-end gap-1 h-12">
                  {[35, 55, 40, 70, 50, 85, 60].map((h, i) => (
                    <div key={i} className="flex-1 bg-gradient-to-t from-cyan-400/50 to-cyan-400/10 rounded-t" style={{ height: `${h}%` }} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
