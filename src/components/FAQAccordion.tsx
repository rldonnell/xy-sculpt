'use client';

import { useState } from 'react';

interface FAQItem { question: string; answer: string; }

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="faq-list">
      {items.map((item, i) => (
        <div key={i} className={`faq-item${openIndex === i ? ' open' : ''}`}>
          <button className="faq-trigger" onClick={() => setOpenIndex(openIndex === i ? null : i)}>
            <span>{item.question}</span>
            <span className="faq-icon">+</span>
          </button>
          {openIndex === i && (
            <div className="faq-content">
              <p>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
