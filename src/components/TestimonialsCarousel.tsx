"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface Testimonial {
  name: string;
  role: string;
  image: string;
  text: string;
  highlight?: string;
}

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
}

export default function TestimonialsCarousel({ testimonials }: TestimonialsCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Atualiza as bolinhas quando o usuário rola manualmente
  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const scrollLeft = scrollRef.current.scrollLeft;
        const cardWidth = scrollRef.current.children[0]?.clientWidth || 300;
        const gap = 16; // 16px gap
        const currentIndex = Math.round(scrollLeft / (cardWidth + gap));
        setCurrentSlide(Math.min(currentIndex, testimonials.length - 1));
      }
    };

    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener('scroll', handleScroll);
      return () => scrollElement.removeEventListener('scroll', handleScroll);
    }
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div>
      <div className="max-w-6xl mx-auto">

        {/* Mobile: Scroll horizontal */}
        <div className="md:hidden">
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide"
            style={{
              scrollSnapType: 'x mandatory',
              scrollBehavior: 'smooth'
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[85vw] max-w-sm"
                style={{ scrollSnapAlign: 'start' }}
              >
                <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 h-full flex flex-col">
                  <svg className="w-7 h-7 text-accent-amber/60 mb-3 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M11.3 2.5C6 2.5 2.5 6 2.5 11.3c0 3.1 1.3 5.4 3.5 7.1l-1.3 3.1 3.5-1.8c.9.3 1.9.5 3.1.5C16.6 20.2 20.2 16.6 20.2 11.3S16.6 2.5 11.3 2.5z" opacity=".15"/><path d="M9.59 8.59c.44-.88 1.06-1.34 2.16-1.34.88 0 1.56.44 1.56 1.12 0 1.1-1.78 1.1-1.78 3.08h-1.32c0-2.42 1.78-2.2 1.78-3.08 0-.22-.22-.44-.66-.44-.44 0-.66.22-.88.66l-.86-.88zm1.32 6.16c-.44 0-.88-.44-.88-.88s.44-.88.88-.88.88.44.88.88-.44.88-.88.88z" fill="none"/><text x="4" y="17" fontSize="14" fontWeight="bold" fill="currentColor">&ldquo;</text></svg>
                  {testimonial.highlight && (
                    <p className="text-sm font-bold text-primary mb-2 leading-snug">
                      {testimonial.highlight}
                    </p>
                  )}
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">
                    {testimonial.text}
                  </p>
                  <div className="flex items-center pt-4 border-t border-gray-100">
                    <Image
                      width={40}
                      height={40}
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full mr-3 object-cover ring-2 ring-accent-amber/30"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">
                        {testimonial.name}
                      </h4>
                      <p className="text-xs text-gray-500">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Indicadores (bolinhas) - Mobile */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (scrollRef.current) {
                    const cardWidth = scrollRef.current.children[0]?.clientWidth || 300;
                    scrollRef.current.scrollLeft = index * (cardWidth + 16);
                  }
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide ? "bg-primary w-6" : "bg-gray-300 w-2"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Desktop: Carrossel com slides */}
        <div className="hidden md:block relative">
          {/* Botões de navegação - Desktop */}
          <button
            onClick={prevSlide}
            className="absolute -left-5 lg:left-[-50px] top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white text-primary rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-lg border border-gray-200 z-10"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute -right-5 lg:right-[-50px] top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white text-primary rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-lg border border-gray-200 z-10"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Carrossel */}
          <div className="overflow-hidden pb-2">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(-${currentSlide * (100 / 3)}%)`,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-1/3 flex-shrink-0 px-4"
                >
                  <div className="bg-white rounded-2xl p-6 shadow border border-gray-100 h-full flex flex-col">
                    <svg className="w-7 h-7 text-accent-amber/60 mb-3 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M11.3 2.5C6 2.5 2.5 6 2.5 11.3c0 3.1 1.3 5.4 3.5 7.1l-1.3 3.1 3.5-1.8c.9.3 1.9.5 3.1.5C16.6 20.2 20.2 16.6 20.2 11.3S16.6 2.5 11.3 2.5z" opacity=".15"/><path d="M9.59 8.59c.44-.88 1.06-1.34 2.16-1.34.88 0 1.56.44 1.56 1.12 0 1.1-1.78 1.1-1.78 3.08h-1.32c0-2.42 1.78-2.2 1.78-3.08 0-.22-.22-.44-.66-.44-.44 0-.66.22-.88.66l-.86-.88zm1.32 6.16c-.44 0-.88-.44-.88-.88s.44-.88.88-.88.88.44.88.88-.44.88-.88.88z" fill="none"/><text x="4" y="17" fontSize="14" fontWeight="bold" fill="currentColor">&ldquo;</text></svg>
                    {testimonial.highlight && (
                      <p className="text-sm font-bold text-primary mb-2 leading-snug">
                        {testimonial.highlight}
                      </p>
                    )}
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">
                      {testimonial.text}
                    </p>
                    <div className="flex items-center pt-4 border-t border-gray-100">
                      <Image
                        width={40}
                        height={40}
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-10 h-10 rounded-full mr-3 object-cover ring-2 ring-accent-amber/30"
                      />
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm">
                          {testimonial.name}
                        </h4>
                        <p className="text-xs text-gray-500">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
