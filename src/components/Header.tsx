"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { useLeadModal } from "@/contexts/LeadModalContext";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { open: openLeadModal } = useLeadModal();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { label: "Funcionalidades", href: "#funcionalidades" },
    { label: "Preços", href: "/precos" },
    { label: "Sobre", href: "/sobre" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-primary/95 backdrop-blur-md shadow-lg shadow-black/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Image
            width={100}
            height={80}
            src="/imobdeal-branco.svg"
            alt="ImobDeal"
            className="brightness-0 invert"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-white/70 hover:text-white text-sm font-medium transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="https://app.imobdeal.com.br"
            className="text-white/70 hover:text-white text-sm font-medium transition-colors"
          >
            Entrar
          </Link>
          <button
            onClick={openLeadModal}
            className="text-sm font-semibold px-5 py-2.5 rounded-lg text-primary transition-all duration-200 cursor-pointer"
            style={{
              backgroundImage: "linear-gradient(90deg, #fde047 0%, #fbbf24 50%, #fb923c 100%)",
            }}
          >
            Teste Grátis
          </button>
        </div>

        {/* Mobile menu btn */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white p-2"
          aria-label="Menu"
        >
          {menuOpen ? <HiX size={24} /> : <HiOutlineMenuAlt3 size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-primary/98 backdrop-blur-lg border-t border-white/10 mt-2">
          <div className="px-5 py-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-white/80 hover:text-white text-base font-medium transition-colors py-2"
              >
                {item.label}
              </Link>
            ))}
            <hr className="border-white/10 my-2" />
            <Link
              href="https://app.imobdeal.com.br"
              className="text-white/80 text-base font-medium py-2"
            >
              Entrar
            </Link>
            <button
              onClick={() => { setMenuOpen(false); openLeadModal(); }}
              className="text-center font-semibold px-6 py-3 rounded-lg text-primary cursor-pointer"
              style={{
                backgroundImage: "linear-gradient(90deg, #fde047 0%, #fbbf24 50%, #fb923c 100%)",
              }}
            >
              Teste Grátis
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
