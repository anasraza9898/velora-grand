import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { galleryImages, type GalleryImage, type ImageCategory } from "../data/images";

const filters: Array<"All" | ImageCategory> = ["All", "Baraat", "Walima", "Mehndi", "Nikah", "Corporate", "Details"];

export function GalleryLightbox({ preview = false }: { preview?: boolean }) {
  const [filter, setFilter] = useState<"All" | ImageCategory>("All");
  const [selected, setSelected] = useState<GalleryImage | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const images = useMemo(() => {
    const list = filter === "All" ? galleryImages : galleryImages.filter((item) => item.category === filter);
    return preview ? list.slice(0, 6) : list;
  }, [filter, preview]);

  useEffect(() => {
    document.body.classList.toggle("modal-open", Boolean(selected));
    if (selected) requestAnimationFrame(() => closeRef.current?.focus());
    const onKey = (event: KeyboardEvent) => {
      if (!selected) return;
      if (event.key === "Escape") setSelected(null);
      if (event.key === "ArrowRight") move(1);
      if (event.key === "ArrowLeft") move(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", onKey);
    };
  });

  const move = (direction: 1 | -1) => {
    if (!selected) return;
    const source = filter === "All" ? galleryImages : galleryImages.filter((item) => item.category === filter);
    const index = source.findIndex((item) => item.id === selected.id);
    const next = source[(index + direction + source.length) % source.length];
    setSelected(next);
  };

  return (
    <div className="gallery-experience">
      {!preview && (
        <div className="filter-row" role="group" aria-label="Filter gallery">
          {filters.map((item) => (
            <button key={item} type="button" className={filter === item ? "active" : ""} onClick={() => setFilter(item)} aria-pressed={filter === item}>
              {item}
            </button>
          ))}
        </div>
      )}
      <motion.div layout className="masonry-grid" aria-live="polite">
        <AnimatePresence mode="popLayout">
          {images.map((image) => (
            <motion.button
              layout
              key={image.id}
              className={`gallery-tile ${image.aspect}`}
              type="button"
              onClick={() => setSelected(image)}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.22 }}
              aria-label={`Open ${image.title}`}
            >
              <img src={image.src} alt={image.alt} loading="lazy" decoding="async" />
              <span className="tile-overlay">
                <ZoomIn size={18} />
                <strong>{image.title}</strong>
                <small>{image.category}</small>
              </span>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>
      <AnimatePresence>
        {selected && (
          <motion.div
            className="lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={selected.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            onKeyDown={(event) => {
              if (event.key === "Escape") setSelected(null);
            }}
          >
            <button ref={closeRef} className="icon-button lightbox-close" type="button" aria-label="Close gallery image" onClick={() => setSelected(null)}>
              <X size={22} />
            </button>
            <button className="icon-button lightbox-prev" type="button" aria-label="Previous image" onClick={(event) => { event.stopPropagation(); move(-1); }}>
              <ChevronLeft size={26} />
            </button>
            <motion.figure
              className="lightbox-figure"
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.98 }}
              onClick={(event) => event.stopPropagation()}
            >
              <img src={selected.src} alt={selected.alt} />
              <figcaption>
                <strong>{selected.title}</strong>
                <span>{selected.category}</span>
              </figcaption>
            </motion.figure>
            <button className="icon-button lightbox-next" type="button" aria-label="Next image" onClick={(event) => { event.stopPropagation(); move(1); }}>
              <ChevronRight size={26} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
