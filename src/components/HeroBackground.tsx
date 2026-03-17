/**
 * Animated geometric background — identical to the CRM login screen.
 * Pure CSS animations, no JS needed. Server Component.
 */
export default function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Inline keyframes — same as CRM login */}
      <style>{`
        @keyframes float-up {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-30px) scale(1.05); }
        }
        @keyframes orbit {
          0% { transform: translate(-50%, -50%) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes orbit-reverse {
          0% { transform: translate(-50%, -50%) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(-360deg); }
        }
        @keyframes pulse-ring {
          0%, 100% { transform: scale(1); opacity: 0.06; }
          50% { transform: scale(1.08); opacity: 0.1; }
        }
        @keyframes pulse-ring-slow {
          0%, 100% { transform: scale(1); opacity: 0.04; }
          50% { transform: scale(1.12); opacity: 0.08; }
        }
        @keyframes glow-breathe {
          0%, 100% { opacity: 0.15; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(1.15); }
        }
        @keyframes glow-breathe-alt {
          0%, 100% { opacity: 0.1; transform: scale(1.1); }
          50% { opacity: 0.25; transform: scale(0.9); }
        }
        @keyframes dot-twinkle {
          0%, 100% { opacity: 0.12; transform: scale(1); }
          50% { opacity: 0.35; transform: scale(1.4); }
        }
        @keyframes dot-twinkle-alt {
          0%, 100% { opacity: 0.08; transform: scale(1.2); }
          50% { opacity: 0.28; transform: scale(0.8); }
        }
        @keyframes corner-glow {
          0%, 100% { opacity: 0.06; transform: scale(1); }
          50% { opacity: 0.14; transform: scale(1.1); }
        }
        @keyframes drift-horizontal {
          0%, 100% { transform: translateX(0) rotate(25deg); }
          50% { transform: translateX(40px) rotate(28deg); }
        }
        @keyframes drift-horizontal-alt {
          0%, 100% { transform: translateX(0) rotate(-35deg); }
          50% { transform: translateX(-30px) rotate(-32deg); }
        }
      `}</style>

      {/* Círculos pulsantes */}
      <div
        className="absolute top-[10%] left-[8%] w-72 h-72 border border-white rounded-full"
        style={{ animation: 'pulse-ring 6s ease-in-out infinite', opacity: 0.06 }}
      />
      <div
        className="absolute top-[5%] left-[5%] w-96 h-96 border border-white rounded-full"
        style={{ animation: 'pulse-ring-slow 8s ease-in-out infinite 1s', opacity: 0.04 }}
      />
      <div
        className="absolute bottom-[-8%] right-[-5%] w-[500px] h-[500px] border border-white rounded-full"
        style={{ animation: 'pulse-ring 7s ease-in-out infinite 0.5s', opacity: 0.06 }}
      />
      <div
        className="absolute bottom-[-12%] right-[-8%] w-[600px] h-[600px] border border-white rounded-full"
        style={{ animation: 'pulse-ring-slow 9s ease-in-out infinite 2s', opacity: 0.04 }}
      />

      {/* Linhas diagonais que deslizam */}
      <div
        className="absolute top-1/2 left-1/2 w-[700px] h-[1px] bg-white"
        style={{ animation: 'drift-horizontal 12s ease-in-out infinite', opacity: 0.06, transformOrigin: 'center' }}
      />
      <div
        className="absolute top-1/2 left-1/2 w-[500px] h-[1px] bg-white"
        style={{ animation: 'drift-horizontal-alt 10s ease-in-out infinite 1.5s', opacity: 0.06, transformOrigin: 'center' }}
      />

      {/* Órbitas lentas */}
      <div
        className="absolute top-[30%] left-[50%] w-[400px] h-[400px] border border-white/[0.04] rounded-full"
        style={{ animation: 'orbit 45s linear infinite' }}
      />
      <div
        className="absolute top-[60%] left-[30%] w-[300px] h-[300px] border border-white/[0.03] rounded-full"
        style={{ animation: 'orbit-reverse 55s linear infinite' }}
      />

      {/* Glows que respiram */}
      <div
        className="absolute top-0 right-0 w-1/2 h-1/3 bg-gradient-to-bl from-primary-light to-primary blur-3xl"
        style={{ animation: 'glow-breathe 8s ease-in-out infinite' }}
      />
      <div
        className="absolute bottom-0 left-0 w-1/3 h-1/4 bg-gradient-to-tr from-primary-light to-primary blur-3xl"
        style={{ animation: 'glow-breathe-alt 10s ease-in-out infinite 3s' }}
      />
      <div
        className="absolute top-[40%] right-[10%] w-48 h-48 bg-primary-light rounded-full blur-3xl"
        style={{ animation: 'float-up 12s ease-in-out infinite 2s', opacity: 0.08 }}
      />

      {/* Pontinhos animados */}
      {[
        { top: '8%',  left: '12%', size: 3, delay: '0s',   dur: '5s',  alt: false },
        { top: '15%', left: '42%', size: 2, delay: '1.2s', dur: '6s',  alt: true },
        { top: '6%',  left: '75%', size: 3, delay: '0.5s', dur: '7s',  alt: false },
        { top: '22%', left: '90%', size: 2, delay: '2s',   dur: '5.5s',alt: true },
        { top: '35%', left: '5%',  size: 2, delay: '1.8s', dur: '6.5s',alt: false },
        { top: '45%', left: '25%', size: 3, delay: '0.8s', dur: '5s',  alt: true },
        { top: '40%', left: '68%', size: 2, delay: '2.5s', dur: '7s',  alt: false },
        { top: '55%', left: '88%', size: 3, delay: '1s',   dur: '6s',  alt: true },
        { top: '65%', left: '15%', size: 2, delay: '3s',   dur: '5.5s',alt: false },
        { top: '70%', left: '50%', size: 3, delay: '0.3s', dur: '7s',  alt: true },
        { top: '75%', left: '78%', size: 2, delay: '1.5s', dur: '6s',  alt: false },
        { top: '85%', left: '35%', size: 3, delay: '2.2s', dur: '5s',  alt: true },
        { top: '88%', left: '60%', size: 2, delay: '0.7s', dur: '6.5s',alt: false },
        { top: '92%', left: '8%',  size: 2, delay: '1.3s', dur: '7s',  alt: true },
        { top: '50%', left: '55%', size: 2, delay: '3.5s', dur: '5.5s',alt: false },
        { top: '28%', left: '60%', size: 3, delay: '2.8s', dur: '6s',  alt: true },
      ].map((dot, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white/20"
          style={{
            top: dot.top,
            left: dot.left,
            width: dot.size,
            height: dot.size,
            animation: `${dot.alt ? 'dot-twinkle-alt' : 'dot-twinkle'} ${dot.dur} ease-in-out infinite ${dot.delay}`,
          }}
        />
      ))}

      {/* Luminosidade azul clara nos cantos */}
      <div
        className="absolute -top-20 -left-20 w-[400px] h-[400px] rounded-full blur-[120px]"
        style={{
          background: 'radial-gradient(circle, rgba(96,165,250,0.18) 0%, transparent 70%)',
          animation: 'corner-glow 10s ease-in-out infinite',
        }}
      />
      <div
        className="absolute -top-16 -right-16 w-[350px] h-[350px] rounded-full blur-[100px]"
        style={{
          background: 'radial-gradient(circle, rgba(96,165,250,0.14) 0%, transparent 70%)',
          animation: 'corner-glow 12s ease-in-out infinite 2s',
        }}
      />
      <div
        className="absolute -bottom-20 -left-16 w-[350px] h-[350px] rounded-full blur-[110px]"
        style={{
          background: 'radial-gradient(circle, rgba(96,165,250,0.12) 0%, transparent 70%)',
          animation: 'corner-glow 11s ease-in-out infinite 4s',
        }}
      />
      <div
        className="absolute -bottom-16 -right-20 w-[400px] h-[400px] rounded-full blur-[120px]"
        style={{
          background: 'radial-gradient(circle, rgba(96,165,250,0.16) 0%, transparent 70%)',
          animation: 'corner-glow 13s ease-in-out infinite 1s',
        }}
      />
    </div>
  );
}
