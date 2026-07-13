import { Cta } from "../components/Cta";
import { imageSlots } from "../data/images";

export default function NotFound() {
  return (
    <section className="not-found">
      <img src={imageSlots.exterior} alt="" />
      <div className="container">
        <p className="eyebrow">404</p>
        <h1>This room is not on the floor plan.</h1>
        <p>The page you opened does not exist. Return to the venue story or book a visit.</p>
        <div className="hero-actions"><Cta to="/">Return Home</Cta><Cta to="/contact" variant="secondary">Book a Visit</Cta></div>
      </div>
    </section>
  );
}
