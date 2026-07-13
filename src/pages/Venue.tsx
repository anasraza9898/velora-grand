import { Cta } from "../components/Cta";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { imageSlots } from "../data/images";

const specs = [
  ["Guest capacity", "Up to 800, depending on stage and dining layout"],
  ["Primary spaces", "Grand Hall, Emerald Pavilion, Courtyard Arrival"],
  ["Family areas", "Planning support for elders, close family seating, bridal room"],
  ["Operations", "Vendor movement, dining flow, visit timing, parking coordination"],
];

export default function Venue() {
  return (
    <>
      <PageHero eyebrow="The Venue" title="A hall with scale, warmth, and operational discipline." copy="Explore the guest journey from arrival to stage sightlines, dining movement, family areas, and event-day coordination." image={imageSlots.hall}>
        <div className="hero-actions"><Cta to="/contact">Book a Venue Visit</Cta><Cta to="/gallery" variant="secondary">View Gallery</Cta></div>
      </PageHero>
      <section className="section venue-detail">
        <div className="container split-grid">
          <Reveal><h2>Built around guest comfort, not just decor.</h2></Reveal>
          <Reveal><p>The best venue walkthrough answers practical questions quickly: where guests enter, how families are received, how visible the stage feels from the room, and how dinner service moves without crowding the celebration.</p></Reveal>
        </div>
      </section>
      <section className="section specs-section">
        <div className="container spec-grid">
          {specs.map(([label, value]) => (
            <Reveal className="spec-item" key={label}><span>{label}</span><strong>{value}</strong></Reveal>
          ))}
        </div>
      </section>
      <section className="section venue-flow">
        <div className="container venue-flow-grid">
          {["Guest arrival experience", "Stage sightlines", "Dining layout", "Parking coordination", "Family areas", "Bridal room", "Event operations"].map((item) => (
            <Reveal className="flow-card" key={item}><h3>{item}</h3><p>Discussed during the visit so planning decisions are made around the actual space and event type.</p></Reveal>
          ))}
        </div>
      </section>
      <aside className="sticky-visit"><Cta to="/contact">Book a Venue Visit</Cta></aside>
    </>
  );
}
