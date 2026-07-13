export const contactConfig = {
  brand: "VELORA GRAND",
  city: "Karachi, Pakistan",
  phoneDisplay: "+92 300 000 0000",
  phoneHref: "tel:+923000000000",
  whatsappNumber: "923000000000",
  email: "events@veloragrand.example",
  address: "Demo Road, Karachi, Pakistan",
  directionsUrl: "https://maps.google.com/?q=Karachi%20Pakistan",
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "The Venue", href: "/venue" },
  { label: "Celebrations", href: "/celebrations" },
  { label: "Gallery", href: "/gallery" },
  { label: "Packages", href: "/packages" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function whatsappUrl(message: string) {
  return `https://wa.me/${contactConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
