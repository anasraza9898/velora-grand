import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { imageSlots } from "../data/images";

export default function About() {
  return (
    <>
      <PageHero eyebrow="About" title="Modern event discipline, Karachi family warmth." copy="VELORA GRAND was imagined as a venue where operational planning meets the scale, hospitality, and emotional texture of local celebrations." image={imageSlots.exterior} />
      <section className="section about-editorial">
        <div className="container editorial-columns">
          {[
            ["Our philosophy", "A wedding venue should feel impressive on arrival and quietly competent everywhere else: movement, timing, seating, service, and family needs."],
            ["The guest experience", "Guests should understand where to go, elders should be comfortable, and families should never feel the room is working against the event."],
            ["Planning discipline", "The visit begins with facts: guest count, event type, date, stage needs, vendor flow, dining rhythm, and parking expectations."],
            ["Venue team", "The team is positioned as calm, prepared, and specific. No exaggerated claims, just a clear process families can trust."],
            ["Attention to detail", "The small things matter: entrance light, stage visibility, aisle width, table spacing, and the path from photographs to dinner."],
          ].map(([title, copy]) => (
            <Reveal className="editorial-note" key={title}><h2>{title}</h2><p>{copy}</p></Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
