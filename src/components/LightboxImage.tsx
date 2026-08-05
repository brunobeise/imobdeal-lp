"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { useState } from "react";

/* Só baixa o pacote do lightbox quando alguém clica para ampliar. */
const ImageLightbox = dynamic(() => import("./ImageLightbox"), { ssr: false });

interface LightboxImageProps {
  src: string;
  alt: string;
  /** Proporção do frame, casada com a resolução nativa do print. */
  aspect: string;
  sizes: string;
  priority?: boolean;
  /** Quando true, o frame perde o arredondamento inferior (uso no hero). */
  bleedBottom?: boolean;
  /** Sem moldura e sem recorte — para mockups com fundo transparente. */
  bare?: boolean;
  className?: string;
  objectPosition?: string;
}

export default function LightboxImage({
  src,
  alt,
  aspect,
  sizes,
  priority = false,
  bleedBottom = false,
  bare = false,
  className = "",
  objectPosition = "object-top",
}: LightboxImageProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Ampliar imagem: ${alt}`}
        className={`group block w-full text-left cursor-zoom-in ${className}`}
      >
        <div
          className={
            bare
              ? ""
              : `screenshot-frame ${bleedBottom ? "!pb-0 !rounded-b-none" : ""}`
          }
        >
          <div
            className={
              bare
                ? "relative"
                : `bg-surface overflow-hidden border border-white/10 relative ${
                    bleedBottom ? "rounded-t-lg" : "rounded-lg"
                  }`
            }
            style={{ aspectRatio: aspect }}
          >
            <Image
              src={src}
              alt={alt}
              fill
              priority={priority}
              /* O next/image desta versão não deriva fetchPriority de priority:
                 sem isto o <link rel=preload> e o <img> saem sem
                 fetchpriority="high" e o LCP disputa banda com os scripts. */
              fetchPriority={priority ? "high" : undefined}
              sizes={sizes}
              className={bare ? "object-contain" : `object-cover ${objectPosition}`}
            />

            {/* Affordance de zoom */}
            <span className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300 flex items-center justify-center">
              <span className="w-11 h-11 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-primary">
                  <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="2" />
                  <path d="M13.5 13.5L17 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M9 6.5v5M6.5 9h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </span>
            </span>
          </div>
        </div>
      </button>

      {open && (
        <ImageLightbox
          open={open}
          close={() => setOpen(false)}
          slides={[{ src, alt }]}
          controller={{ closeOnBackdropClick: true }}
          styles={{ container: { backgroundColor: "rgba(0, 0, 0, 0.9)" } }}
          zoom={{ maxZoomPixelRatio: 5 }}
          render={{ buttonPrev: () => null, buttonNext: () => null }}
        />
      )}
    </>
  );
}
