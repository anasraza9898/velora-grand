import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { faqs } from "../data/content";

export function FAQAccordion() {
  const [open, setOpen] = useState(0);

  return (
    <div className="faq-list">
      {faqs.map((item, index) => (
        <div className="faq-item" key={item.question}>
          <button
            type="button"
            aria-expanded={open === index}
            aria-controls={`faq-${index}`}
            onClick={() => setOpen(open === index ? -1 : index)}
          >
            <span>{item.question}</span>
            <ChevronDown size={18} aria-hidden="true" />
          </button>
          <div id={`faq-${index}`} className="faq-answer" hidden={open !== index}>
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
