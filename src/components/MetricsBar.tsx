"use client";

import { useEffect, useRef, useState } from "react";

interface Metric {
  value: number;
  suffix: string;
  label: string;
}

const metrics: Metric[] = [
  { value: 500, suffix: "+", label: "Corretores ativos" },
  { value: 100, suffix: "+", label: "Imobiliárias" },
  { value: 500000, suffix: "+", label: "Propostas geradas" },
  { value: 98, suffix: "%", label: "Satisfação" },
];

function formatNumber(n: number): string {
  if (n >= 1000000) return `${(n / 1000000).toFixed(n % 1000000 === 0 ? 0 : 1)}M`;
  if (n >= 1000) return `${(n / 1000).toFixed(0)}k`;
  return n.toString();
}

function AnimatedNumber({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 1800;
          const start = performance.now();

          function tick(now: number) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
          }

          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {formatNumber(count)}
      {suffix}
    </span>
  );
}

export default function MetricsBar() {
  return (
    <section className="bg-primary py-14 relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary pointer-events-none" />

      <div className="max-w-6xl mx-auto px-5 md:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {metrics.map((m, i) => (
            <div key={i} className="text-center">
              <p className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                <AnimatedNumber target={m.value} suffix={m.suffix} />
              </p>
              <p className="text-white/50 text-sm mt-2 font-medium">{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
