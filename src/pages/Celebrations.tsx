import { Cta } from "../components/Cta";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { celebrations } from "../data/content";
import { imageSlots } from "../data/images";

const extra = ["Engagement"];

export default function Celebrations() {
  const list = [...celebrations, ...extra.map((title) => ({ id: "engagement", title, mood: "A polished family announcement with photography corners, soft florals, and a comfortable dining sequence.", atmosphere: "Ivory, amber, and quiet emerald details.", setup: "Emerald Pavilion with lounge-style arrival.", image: imageSlots.emeraldStage }))];
  return (
    <>
      <PageHero eyebrow="Celebrations" title="Separate moods for Baraat, Walima, Mehndi, Nikah, and corporate events." copy="Each event type receives its own layout conversation, stage direction, and guest flow consideration." image={imageSlots.emeraldStage} />
      <section className="section celebration-story">
        <div className="container celebration-stack">
          {list.map((item, index) => (
            <Reveal className="celebration-row" key={`${item.id}-${index}`}>
              <img src={item.image} alt={`${item.title} setup at VELORA GRAND`} loading="lazy" decoding="async" />
              <div>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h2>{item.title}</h2>
                <p>{item.mood}</p>
                <dl><dt>Visual mood</dt><dd>{item.atmosphere}</dd><dt>Layout direction</dt><dd>{item.setup}</dd></dl>
                <Cta to="/contact" variant="secondary">Check Date Availability</Cta>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
