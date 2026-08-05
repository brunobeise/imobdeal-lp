"use client";

import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

/**
 * Wrapper do lightbox isolado num módulo próprio para ser carregado via
 * next/dynamic. Importado direto, o pacote (core + plugins + CSS) entrava no
 * bundle inicial de toda a home — e quase ninguém abre o zoom.
 */
type Props = Omit<React.ComponentProps<typeof Lightbox>, "plugins"> & {
  /** Faixa de miniaturas embaixo — só o tour do produto usa. */
  withThumbnails?: boolean;
};

export default function ImageLightbox({ withThumbnails = false, ...props }: Props) {
  return <Lightbox plugins={withThumbnails ? [Zoom, Thumbnails] : [Zoom]} {...props} />;
}
