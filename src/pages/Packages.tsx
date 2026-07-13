import { Check } from "lucide-react";
import { Cta } from "../components/Cta";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { packages } from "../data/content";
import { imageSlots } from "../data/images";

export default function Packages() {
  return (
    <>
      <PageHero eyebrow="Packages" title="Wedding venue packages without fake fixed prices." copy="Starting quotation is available after date and guest-count confirmation, because layout, stage styling, menu coordination, and timing change the real scope." image={imageSlots.hall} />
      <section className="section packages-section">
        <div className="container package-grid">
          {packages.map((item) => (
            <Reveal className="package-panel" key={item.title}>
              <p className="eyebrow">{item.guests}</p>
              <h2>{item.title}</h2>
              <strong>{item.fit}</strong>
              <p>{item.copy}</p>
              <ul>{item.includes.map((include) => <li key={include}><Check size={17} />{include}</li>)}</ul>
              <Cta to="/contact" variant="secondary">Request a Custom Quote</Cta>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="section customize-section">
        <div className="container split-grid">
          <div><p className="eyebrow">Usually Customized</p><h2>The quote follows the actual celebration.</h2></div>
          <div className="custom-list">{["Guest count", "Event date", "Stage styling", "Menu coordination", "Lighting mood", "Entrance experience"].map((item) => <span key={item}>{item}</span>)}</div>
        </div>
      </section>
    </>
  );
}
