import { MapPin, MessageCircle, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { contactConfig, navItems, whatsappUrl } from "../data/contact";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Link to="/" className="brand-mark footer-brand">
            <span>VELORA</span>
            <strong>GRAND</strong>
          </Link>
          <p>
            A fictional premium Karachi marquee and banquet website created as a portfolio flagship for venue owners.
          </p>
        </div>
        <div>
          <h2>Explore</h2>
          <ul>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link to={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Contact</h2>
          <ul className="footer-contact">
            <li>
              <Phone size={16} /> <a href={contactConfig.phoneHref}>{contactConfig.phoneDisplay}</a>
            </li>
            <li>
              <MapPin size={16} /> <a href={contactConfig.directionsUrl}>Demo location in Karachi</a>
            </li>
            <li>
              <MessageCircle size={16} /> <a href={whatsappUrl("Hello VELORA GRAND, I would like to plan an event visit.")}>Plan on WhatsApp</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>Demo website. Replace contact details before production use.</span>
        <span>Built for venue visit conversion.</span>
      </div>
    </footer>
  );
}
