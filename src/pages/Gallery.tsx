import { GalleryLightbox } from "../components/GalleryLightbox";
import { PageHero } from "../components/PageHero";
import { imageSlots } from "../data/images";

export default function Gallery() {
  return (
    <>
      <PageHero eyebrow="Gallery" title="A visual language for high-value Karachi celebrations." copy="Filter by event type, open images in the lightbox, and imagine the real venue photography that would replace these demo assets." image={imageSlots.exterior} />
      <section className="section">
        <div className="container"><GalleryLightbox /></div>
      </section>
    </>
  );
}
