import emeraldStage from "../assets/images/velora-emerald-stage.webp";
import exterior from "../assets/images/velora-exterior-blue-hour.webp";
import marqueeInterior from "../assets/images/velora-marquee-interior.webp";
import champagneStage from "../assets/images/warm-champagne-stage.webp";
import nikahSetup from "../assets/images/floral-nikah-setup.webp";
import dining from "../assets/images/grand-banquet-dining.webp";
import mehndi from "../assets/images/mehndi-warm-lighting.webp";
import corporate from "../assets/images/corporate-gala-arrangement.webp";
import corridor from "../assets/images/architectural-corridor.webp";
import tableDetail from "../assets/images/table-floral-detail.webp";
import teamPrep from "../assets/images/team-preparing-event.webp";

export type ImageCategory =
  | "Baraat"
  | "Walima"
  | "Mehndi"
  | "Nikah"
  | "Corporate"
  | "Details";

export type GalleryImage = {
  id: string;
  title: string;
  category: ImageCategory;
  src: string;
  alt: string;
  aspect: "wide" | "portrait" | "square" | "tall";
};

export const imageSlots = {
  exterior,
  hall: marqueeInterior,
  emeraldStage,
  champagneStage,
  nikahSetup,
  dining,
  mehndi,
  corporate,
  corridor,
  tableDetail,
  coupleSilhouette: emeraldStage,
  teamPrep,
};

export const galleryImages: GalleryImage[] = [
  {
    id: "arrival-blue-hour",
    title: "Blue Hour Arrival",
    category: "Details",
    src: imageSlots.exterior,
    alt: "VELORA GRAND exterior at blue hour with warm arrival lighting",
    aspect: "wide",
  },
  {
    id: "grand-hall-baraat",
    title: "Grand Hall Baraat Layout",
    category: "Baraat",
    src: imageSlots.hall,
    alt: "Luxury Pakistani wedding marquee interior with stage and chandeliers",
    aspect: "wide",
  },
  {
    id: "emerald-stage",
    title: "Emerald Stage",
    category: "Walima",
    src: imageSlots.champagneStage,
    alt: "Emerald and ivory wedding stage with tasteful couple silhouettes",
    aspect: "wide",
  },
  {
    id: "floral-nikah",
    title: "Floral Nikah Setting",
    category: "Nikah",
    src: imageSlots.nikahSetup,
    alt: "Floral nikah stage setting with ivory flowers and warm lights",
    aspect: "portrait",
  },
  {
    id: "banquet-dining",
    title: "Banquet Dining Flow",
    category: "Details",
    src: imageSlots.dining,
    alt: "Grand banquet dining arrangement with comfortable guest movement",
    aspect: "tall",
  },
  {
    id: "mehndi-lighting",
    title: "Warm Mehndi Lighting",
    category: "Mehndi",
    src: imageSlots.mehndi,
    alt: "Warm festive mehndi lighting inside a luxury marquee",
    aspect: "square",
  },
  {
    id: "corporate-gala",
    title: "Corporate Gala Arrangement",
    category: "Corporate",
    src: imageSlots.corporate,
    alt: "Formal corporate gala arrival at an upscale Karachi venue",
    aspect: "portrait",
  },
  {
    id: "corridor",
    title: "Architectural Corridor",
    category: "Details",
    src: imageSlots.corridor,
    alt: "Architectural venue corridor with warm wall lighting",
    aspect: "wide",
  },
  {
    id: "table-styling",
    title: "Table Styling Detail",
    category: "Details",
    src: imageSlots.tableDetail,
    alt: "Luxury table styling and floral detail in ivory and emerald tones",
    aspect: "square",
  },
];
