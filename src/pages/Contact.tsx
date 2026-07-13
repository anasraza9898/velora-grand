import { BookingForm } from "../components/BookingForm";
import { FAQAccordion } from "../components/FAQAccordion";
import { PageHero } from "../components/PageHero";
import { imageSlots } from "../data/images";

export default function Contact() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Book a venue visit or check your date." copy="Share the event type, date, guest count, and preferred visit time. The demo form prepares a WhatsApp enquiry for a real-world conversion flow." image={imageSlots.exterior} />
      <section className="section"><div className="container"><BookingForm /></div></section>
      <section className="section faq-section"><div className="container split-grid"><div><p className="eyebrow">FAQ</p><h2>Questions families ask before visiting.</h2></div><FAQAccordion /></div></section>
    </>
  );
}
