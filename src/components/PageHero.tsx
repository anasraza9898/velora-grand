import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  copy,
  image,
  children,
}: {
  eyebrow: string;
  title: string;
  copy: string;
  image: string;
  children?: ReactNode;
}) {
  return (
    <section className="page-hero">
      <div className="page-hero-media" aria-hidden="true">
        <img src={image} alt="" />
      </div>
      <div className="container page-hero-content">
        <motion.p className="eyebrow" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
          {eyebrow}
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}>
          {title}
        </motion.h1>
        <motion.p className="hero-copy" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          {copy}
        </motion.p>
        {children}
      </div>
    </section>
  );
}
