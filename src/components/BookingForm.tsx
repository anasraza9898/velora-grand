import { CalendarDays, CheckCircle2, MapPin, MessageCircle, Phone } from "lucide-react";
import { useMemo, useState } from "react";
import { contactConfig, whatsappUrl } from "../data/contact";
import { Cta } from "./Cta";

type FormState = {
  name: string;
  phone: string;
  type: string;
  date: string;
  guests: string;
  visitDay: string;
  visitTime: string;
  notes: string;
};

const initial: FormState = {
  name: "",
  phone: "",
  type: "",
  date: "",
  guests: "",
  visitDay: "",
  visitTime: "",
  notes: "",
};

export function BookingForm() {
  const [form, setForm] = useState(initial);
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitted, setSubmitted] = useState(false);

  const errors = useMemo(() => validate(form), [form]);
  const show = (name: keyof FormState) => touched[name] && errors[name];

  const update = (name: keyof FormState, value: string) => setForm((current) => ({ ...current, [name]: value }));

  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    setTouched(Object.keys(form).reduce((acc, key) => ({ ...acc, [key]: true }), {}));
    if (Object.keys(errors).length) return;
    setSubmitted(true);
    const message = [
      "Hello VELORA GRAND, I would like to book a venue visit.",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Event type: ${form.type}`,
      `Preferred event date: ${form.date}`,
      `Estimated guests: ${form.guests}`,
      `Preferred visit: ${form.visitDay} at ${form.visitTime}`,
      form.notes ? `Notes: ${form.notes}` : "",
    ].filter(Boolean).join("\n");
    window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
  };

  return (
    <div className="booking-grid">
      <form className="booking-form" onSubmit={submit} noValidate>
        <div className="form-head">
          <p className="eyebrow">Venue Visit Booking</p>
          <h2>Tell us what your family is planning.</h2>
          <p>After validation, this demo opens WhatsApp with a formatted enquiry. No backend submission is simulated.</p>
        </div>
        <div className="field-grid">
          <Field label="Full Name" name="name" value={form.name} error={show("name")} onBlur={() => setTouched({ ...touched, name: true })} onChange={update} />
          <Field label="Phone Number" name="phone" value={form.phone} error={show("phone")} onBlur={() => setTouched({ ...touched, phone: true })} onChange={update} />
          <Select label="Event Type" name="type" value={form.type} error={show("type")} onBlur={() => setTouched({ ...touched, type: true })} onChange={update} options={["Baraat", "Walima", "Mehndi", "Nikah", "Engagement", "Corporate Event"]} />
          <Field label="Preferred Event Date" name="date" type="date" value={form.date} error={show("date")} onBlur={() => setTouched({ ...touched, date: true })} onChange={update} />
          <Field label="Estimated Guest Count" name="guests" inputMode="numeric" value={form.guests} error={show("guests")} onBlur={() => setTouched({ ...touched, guests: true })} onChange={update} />
          <Field label="Preferred Visit Day" name="visitDay" value={form.visitDay} error={show("visitDay")} onBlur={() => setTouched({ ...touched, visitDay: true })} onChange={update} />
          <Select label="Preferred Visit Time" name="visitTime" value={form.visitTime} error={show("visitTime")} onBlur={() => setTouched({ ...touched, visitTime: true })} onChange={update} options={["Morning", "Afternoon", "Evening"]} />
          <label className="field full">
            <span>Additional Notes</span>
            <textarea value={form.notes} onChange={(event) => update("notes", event.target.value)} onBlur={() => setTouched({ ...touched, notes: true })} rows={4} />
          </label>
        </div>
        {submitted && (
          <p className="success-state" role="status">
            <CheckCircle2 size={18} /> WhatsApp enquiry prepared.
          </p>
        )}
        <button className="submit-button" type="submit">
          <MessageCircle size={18} /> Plan on WhatsApp
        </button>
      </form>
      <aside className="contact-card" aria-label="Direct contact options">
        <p className="eyebrow">Direct Enquiry</p>
        <h2>Prefer a quicker conversation?</h2>
        <p>Use these demo contact actions. Replace the phone, WhatsApp number, and map link from one config file before real launch.</p>
        <div className="contact-actions">
          <a href={contactConfig.phoneHref}><Phone size={18} /> Call Venue</a>
          <a href={whatsappUrl("Hello VELORA GRAND, I would like to check date availability.")}><MessageCircle size={18} /> WhatsApp</a>
          <a href={contactConfig.directionsUrl}><MapPin size={18} /> Get Directions</a>
        </div>
        <div className="visit-note">
          <CalendarDays size={20} />
          <span>Best visits happen with event date, guest count, and celebration type ready.</span>
        </div>
        <Cta to="/packages" variant="secondary">View Packages</Cta>
      </aside>
    </div>
  );
}

function validate(form: FormState): Partial<Record<keyof FormState, string>> {
  const errors: Partial<Record<keyof FormState, string>> = {};
  if (form.name.trim().length < 2) errors.name = "Enter a full name.";
  if (!/^[+\d\s()-]{7,}$/.test(form.phone)) errors.phone = "Enter a valid phone number.";
  if (!form.type) errors.type = "Choose an event type.";
  if (!form.date) errors.date = "Choose a preferred event date.";
  if (!form.guests || Number(form.guests) < 20) errors.guests = "Enter an estimated guest count.";
  if (!form.visitDay.trim()) errors.visitDay = "Enter a preferred visit day.";
  if (!form.visitTime) errors.visitTime = "Choose a visit time.";
  return errors;
}

function Field({ label, name, value, error, onChange, onBlur, type = "text", inputMode }: {
  label: string;
  name: keyof FormState;
  value: string;
  error?: string | false;
  onChange: (name: keyof FormState, value: string) => void;
  onBlur: () => void;
  type?: string;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
}) {
  return (
    <label className="field">
      <span>{label}</span>
      <input name={name} type={type} inputMode={inputMode} value={value} onChange={(event) => onChange(name, event.target.value)} onBlur={onBlur} aria-invalid={Boolean(error)} />
      {error && <small>{error}</small>}
    </label>
  );
}

function Select({ label, name, value, error, onChange, onBlur, options }: {
  label: string;
  name: keyof FormState;
  value: string;
  error?: string | false;
  onChange: (name: keyof FormState, value: string) => void;
  onBlur: () => void;
  options: string[];
}) {
  return (
    <label className="field">
      <span>{label}</span>
      <select name={name} value={value} onChange={(event) => onChange(name, event.target.value)} onBlur={onBlur} aria-invalid={Boolean(error)}>
        <option value="">Select one</option>
        {options.map((option) => <option key={option}>{option}</option>)}
      </select>
      {error && <small>{error}</small>}
    </label>
  );
}
