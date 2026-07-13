import { motion } from "framer-motion";
import { GalleryLightbox } from "../components/GalleryLightbox";
import { CelebrationSelector } from "../components/CelebrationSelector";
import { Cta } from "../components/Cta";
import { Reveal } from "../components/Reveal";
import { journey, spaces, testimonials, trustSignals } from "../data/content";
import { imageSlots } from "../data/images";
import { whatsappUrl } from "../data/contact";

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <motion.img
          src={imageSlots.exterior}
          alt="VELORA GRAND exterior at blue hour in Karachi"
          initial={{ scale: 1.04, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="hero-overlay" />
        <div className="container hero-inner">
          <motion.p className="eyebrow" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}>
            Karachi · Weddings · Celebrations · Corporate Events
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }}>
            A Grand Setting For Your Greatest Day.
          </motion.h1>
          <motion.p className="hero-copy" initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.16 }}>
            VELORA GRAND is a fictional premium Karachi marquee and banquet venue designed around arrival, family comfort, stage visibility, and celebrations that feel carefully hosted from the first car to the final farewell.
          </motion.p>
          <motion.div className="hero-actions" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.24 }}>
            <Cta to="/contact">Book a Venue Visit</Cta>
            <Cta to="/venue" variant="secondary">Explore the Venue</Cta>
          </motion.div>
        </div>
      </section>

      <section className="trust-strip" aria-label="Venue trust details">
        <div className="container trust-grid">
          {trustSignals.map(({ label, note, icon: Icon }) => (
            <div key={label}>
              <Icon size={22} aria-hidden="true" />
              <strong>{label}</strong>
              <span>{note}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section story-section">
        <div className="container story-grid">
          <Reveal>
            <p className="eyebrow">Venue Story</p>
            <h2>Designed for the way Karachi families actually celebrate.</h2>
          </Reveal>
          <Reveal delay={0.05}>
            <p>
              A beautiful stage is only one part of a good wedding venue. Families ask how guests arrive, whether elders can move comfortably, how quickly dinner can be served, and whether every table still feels connected to the stage.
            </p>
            <p>
              VELORA GRAND frames those practical questions with a more cinematic experience: covered arrival, warm architectural lighting, layered halls, and a planning conversation that begins with the family flow.
            </p>
          </Reveal>
          <Reveal className="story-image">
            <img src={imageSlots.hall} alt="Grand interior marquee with central aisle and stage visibility" loading="lazy" decoding="async" />
          </Reveal>
        </div>
      </section>

      <CelebrationSelector />

      <section className="section spaces-section">
        <div className="container">
          <div className="section-kicker wide">
            <p className="eyebrow">Signature Spaces</p>
            <h2>Three settings, one carefully managed guest journey.</h2>
          </div>
          <div className="spaces-list">
            {spaces.map((space, index) => (
              <Reveal className="space-row" key={space.title}>
                <img src={space.image} alt={`${space.title} at VELORA GRAND`} loading="lazy" decoding="async" />
                <div>
                  <span>0{index + 1}</span>
                  <h3>{space.title}</h3>
                  <p>{space.copy}</p>
                  <dl>
                    <dt>Capacity</dt><dd>{space.capacity}</dd>
                    <dt>Best suited for</dt><dd>{space.bestFor}</dd>
                  </dl>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section journey-section">
        <div className="container">
          <div className="section-kicker">
            <p className="eyebrow">Event Journey</p>
            <h2>From visit to celebration, the path stays clear.</h2>
          </div>
          <div className="journey-grid">
            {journey.map(({ title, copy, icon: Icon }, index) => (
              <Reveal key={title} delay={index * 0.04} className="journey-step">
                <Icon size={24} />
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section gallery-preview">
        <div className="container">
          <div className="section-kicker wide">
            <p className="eyebrow">Gallery Preview</p>
            <h2>Image-led, editorial, and ready for real venue photography.</h2>
          </div>
          <GalleryLightbox preview />
          <div className="center-actions">
            <Cta to="/gallery" variant="secondary">Open Full Gallery</Cta>
          </div>
        </div>
      </section>

      <section className="section proof-section">
        <div className="container proof-grid">
          {testimonials.map((item) => (
            <Reveal className="quote-card" key={item.name}>
              <blockquote>{item.quote}</blockquote>
              <cite>{item.name}<span>{item.detail}</span></cite>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="final-cta">
        <div className="container final-cta-inner">
          <p className="eyebrow">Venue Visit</p>
          <h2>See The Space Before You Imagine The Day.</h2>
          <p>Walk the arrival, hall, stage, dining flow, and family areas before choosing a package or decor direction.</p>
          <div className="hero-actions">
            <Cta to="/contact">Book Your Venue Visit</Cta>
            <Cta href={whatsappUrl("Hello VELORA GRAND, I would like to plan a visit on WhatsApp.")} variant="secondary">Plan on WhatsApp</Cta>
          </div>
        </div>
      </section>
    </>
  );
}
