import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image
                width={120}
                height={60}
                src="/imobdeal-branco.svg"
                alt="ImobDeal"
                className="brightness-0 invert"
              />
            </Link>
            <p className="text-white/50 text-sm leading-relaxed">
              O CRM imobiliário completo para gestores e corretores que querem resultados.
            </p>
          </div>

          {/* Produto */}
          <div>
            <h4 className="font-semibold text-white/90 mb-4 text-sm uppercase tracking-wider">Produto</h4>
            <ul className="space-y-3">
              <li><Link href="/como-funciona" className="text-white/50 hover:text-white text-sm transition-colors">Links Inteligentes</Link></li>
              <li><Link href="/precos" className="text-white/50 hover:text-white text-sm transition-colors">Preços</Link></li>
              <li><Link href="/integracoes" className="text-white/50 hover:text-white text-sm transition-colors">Integrações</Link></li>
            </ul>
          </div>

          {/* Suporte */}
          <div>
            <h4 className="font-semibold text-white/90 mb-4 text-sm uppercase tracking-wider">Suporte</h4>
            <ul className="space-y-3">
              <li>
                <Link href="https://wa.me/5551995529578?text=Olá! Tenho dúvidas sobre o ImobDeal." target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white text-sm transition-colors">
                  Dúvidas
                </Link>
              </li>
              <li>
                <Link href="https://wa.me/5551995529578?text=Olá! Gostaria de falar sobre parcerias com o ImobDeal." target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white text-sm transition-colors">
                  Parcerias
                </Link>
              </li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="font-semibold text-white/90 mb-4 text-sm uppercase tracking-wider">Empresa</h4>
            <ul className="space-y-3">
              <li><Link href="/sobre" className="text-white/50 hover:text-white text-sm transition-colors">Sobre Nós</Link></li>
              <li><Link href="/politica-privacidade" className="text-white/50 hover:text-white text-sm transition-colors">Política de Privacidade</Link></li>
              <li><Link href="/termos-servico" className="text-white/50 hover:text-white text-sm transition-colors">Termos de Serviço</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} ImobDeal. Todos os direitos reservados. CNPJ 62.081.400/0001-26
          </p>
        </div>
      </div>
    </footer>
  );
}
