import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { celebrations } from "../data/content";
import { Cta } from "./Cta";

export function CelebrationSelector() {
  const [active, setActive] = useState(celebrations[0]);

  return (
    <section className="section celebration-selector">
      <div className="container selector-grid">
        <div className="section-kicker">
          <p className="eyebrow">Celebration Types</p>
          <h2>Every event has its own rhythm.</h2>
          <p>
            Choose the celebration and the venue story changes around arrival, stage direction,
            guest comfort, and the mood families remember first.
          </p>
        </div>
        <div className="selector-panel">
          <div className="selector-tabs" role="tablist" aria-label="Celebration types">
            {celebrations.map((item) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={active.id === item.id}
                className={active.id === item.id ? "selected" : ""}
                onClick={() => setActive(item)}
              >
                {item.title}
              </button>
            ))}
          </div>
          <div className="selector-stage">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.25 }}
                className="selector-card"
              >
                <img src={active.image} alt={`${active.title} event setup at VELORA GRAND`} decoding="async" />
                <div>
                  <p className="eyebrow">{active.atmosphere}</p>
                  <h3>{active.title}</h3>
                  <p>{active.mood}</p>
                  <dl>
                    <dt>Recommended setup</dt>
                    <dd>{active.setup}</dd>
                  </dl>
                  <Cta to="/contact" variant="secondary">
                    Check Date Availability
                  </Cta>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
