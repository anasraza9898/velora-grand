import { Building2, CalendarCheck, Car, HeartHandshake, MapPinned, Sparkles, UsersRound } from "lucide-react";
import { imageSlots } from "./images";

export const trustSignals = [
  { label: "Up to 800 Guests", note: "Layouts planned around sightlines and service flow", icon: UsersRound },
  { label: "Indoor & Covered Spaces", note: "Climate-aware planning for Karachi evenings", icon: Building2 },
  { label: "Dedicated Event Team", note: "Visit, planning, setup, and event-day coordination", icon: HeartHandshake },
  { label: "Parking Coordination", note: "Arrival guidance for families and formal guests", icon: Car },
];

export const celebrations = [
  {
    id: "baraat",
    title: "Baraat",
    mood: "Formal arrival, stage presence, and a hall that lets every family table feel included.",
    atmosphere: "Cinematic ivory lighting with an emerald stage anchor.",
    setup: "Grand Hall, central aisle, family-front seating, high-visibility stage.",
    image: imageSlots.hall,
  },
  {
    id: "walima",
    title: "Walima",
    mood: "A composed reception evening with clean dining movement and elegant photography corners.",
    atmosphere: "Soft champagne, ivory florals, polished service rhythm.",
    setup: "Grand Hall or Emerald Pavilion with seated dining zones.",
    image: imageSlots.champagneStage,
  },
  {
    id: "mehndi",
    title: "Mehndi",
    mood: "Warm, festive, and energetic without sacrificing guest comfort.",
    atmosphere: "Amber wash lighting, patterned textiles, lively entrance moments.",
    setup: "Pavilion-led layout with performance area and relaxed lounge pockets.",
    image: imageSlots.mehndi,
  },
  {
    id: "nikah",
    title: "Nikah",
    mood: "Intimate, respectful, and beautifully framed for family presence.",
    atmosphere: "Ivory florals, quiet lighting, clear ceremony sightlines.",
    setup: "Floral stage, close family seating, calm arrival sequence.",
    image: imageSlots.nikahSetup,
  },
  {
    id: "corporate",
    title: "Corporate",
    mood: "A formal venue experience for dinners, launches, and leadership gatherings.",
    atmosphere: "Charcoal, warm brass, focused stage lighting.",
    setup: "Theatre, banquet, or hybrid dining with registration arrival.",
    image: imageSlots.corporate,
  },
];

export const spaces = [
  {
    title: "The Grand Hall",
    capacity: "Up to 800 guests",
    bestFor: "Baraat, Walima, large corporate dinners",
    copy: "A high-volume hall designed around stage visibility, dining movement, and comfortable family seating.",
    image: imageSlots.hall,
  },
  {
    title: "The Emerald Pavilion",
    capacity: "250-450 guests",
    bestFor: "Nikah, engagement, intimate walima",
    copy: "A richly framed setting for florals, stage styling, and quieter family-first celebrations.",
    image: imageSlots.emeraldStage,
  },
  {
    title: "The Courtyard Arrival",
    capacity: "Managed guest arrival",
    bestFor: "Photography, welcome drinks, valet coordination",
    copy: "A warm first impression with covered drop-off, directional lighting, and planned family movement.",
    image: imageSlots.exterior,
  },
];

export const journey = [
  { title: "Visit", copy: "Walk the arrival, stage, dining, and family areas with the event team.", icon: MapPinned },
  { title: "Choose Your Setting", copy: "Select the hall, pavilion, or courtyard sequence around your guest count.", icon: Building2 },
  { title: "Plan The Details", copy: "Discuss stage direction, lighting mood, vendor flow, and visit timing.", icon: Sparkles },
  { title: "Celebrate", copy: "Arrive to a venue prepared around the family, not just the decor.", icon: CalendarCheck },
];

export const testimonials = [
  {
    quote: "The demo copy here is written as sample website content: the strongest part was how clearly the visit explained stage visibility and guest flow.",
    name: "Ahsan & Mahrukh",
    detail: "Sample family testimonial, Karachi",
  },
  {
    quote: "Our parents cared about parking, dining timing, and family seating. This website makes those questions feel handled before a call.",
    name: "The Siddiqui Family",
    detail: "Sample wedding enquiry",
  },
  {
    quote: "For a corporate dinner, the venue story feels polished without becoming cold or office-like.",
    name: "H. Rahman",
    detail: "Sample corporate event lead",
  },
];

export const packages = [
  {
    title: "Essential Gathering",
    fit: "Nikah, engagement, focused family events",
    guests: "150-300 guests",
    copy: "A polished venue foundation with the right planning conversation for an intimate but formal event.",
    includes: ["Venue access window", "Planning consultation", "Standard guest flow support", "Stage direction guidance", "Dining layout support"],
  },
  {
    title: "Signature Celebration",
    fit: "Baraat, Walima, Mehndi",
    guests: "300-550 guests",
    copy: "A balanced marquee experience for families who need scale, warmth, and a smooth event journey.",
    includes: ["Extended venue access", "Event coordination", "Arrival planning", "Lighting mood guidance", "Vendor movement planning"],
  },
  {
    title: "Grand Velora Experience",
    fit: "Large weddings, formal galas",
    guests: "550-800 guests",
    copy: "A full-scale venue presentation for high-value events with layered spaces and a more detailed planning process.",
    includes: ["Grand Hall priority layout", "Courtyard arrival planning", "Family area coordination", "Premium stage consultation", "Operations walkthrough"],
  },
];

export const faqs = [
  {
    question: "How does a venue visit work?",
    answer: "A visit is a guided walkthrough of the arrival area, main hall, stage sightlines, dining flow, family areas, and available setup options for your event type.",
  },
  {
    question: "Can we check a wedding date before visiting?",
    answer: "Yes. Send the preferred event date, event type, and estimated guest count on WhatsApp so the team can confirm whether the date is open for discussion.",
  },
  {
    question: "What guest capacity should we plan around?",
    answer: "The demo venue is positioned for up to 800 guests, but the ideal layout depends on stage size, dining style, family seating, and vendor requirements.",
  },
  {
    question: "Can decor and stage styling be customized?",
    answer: "Yes. Stage styling, lighting mood, entrance moments, and floral direction are normally customized after date and guest-count confirmation.",
  },
  {
    question: "Are outside vendors supported?",
    answer: "Outside vendor coordination can be discussed during planning so load-in, service movement, timing, and venue rules are clear before the event.",
  },
  {
    question: "Is this a real venue?",
    answer: "VELORA GRAND is a fictional portfolio/demo brand created to show premium website quality for Karachi banquet and marquee businesses.",
  },
];
