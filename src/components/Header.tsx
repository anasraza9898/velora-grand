import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { navItems } from "../data/contact";
import { Cta } from "./Cta";

export function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => setOpen(false), [location.pathname]);

  useEffect(() => {
    document.body.classList.toggle("nav-open", open);
    if (open) requestAnimationFrame(() => closeRef.current?.focus());
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.classList.remove("nav-open");
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Main navigation">
        <Link to="/" className="brand-mark" aria-label="VELORA GRAND home">
          <span>VELORA</span>
          <strong>GRAND</strong>
        </Link>
        <div className="desktop-nav">
          {navItems.slice(1).map((item) => (
            <NavLink key={item.href} to={item.href} className={({ isActive }) => (isActive ? "active" : "")}>
              {item.label}
            </NavLink>
          ))}
        </div>
        <div className="nav-actions">
          <Cta to="/contact" variant="primary" className="nav-cta">
            Book a Visit
          </Cta>
          <button
            className="icon-button mobile-toggle"
            type="button"
            aria-label="Open navigation menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
          >
            <Menu size={22} />
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="mobile-panel"
              initial={{ y: -18, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -18, opacity: 0 }}
              transition={{ duration: 0.22 }}
            >
              <div className="mobile-panel-head">
                <Link to="/" className="brand-mark">
                  <span>VELORA</span>
                  <strong>GRAND</strong>
                </Link>
                <button ref={closeRef} className="icon-button" type="button" aria-label="Close navigation menu" onClick={() => setOpen(false)}>
                  <X size={22} />
                </button>
              </div>
              <div className="mobile-links">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.03 }}
                  >
                    <NavLink to={item.href}>{item.label}</NavLink>
                  </motion.div>
                ))}
              </div>
              <div className="mobile-menu-cta">
                <Cta to="/contact">Book a Venue Visit</Cta>
                <Cta to="/contact" variant="secondary">
                  Check Date Availability
                </Cta>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
