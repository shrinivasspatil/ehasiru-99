'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { FAQ } from '@/lib/data';

interface FAQAccordionProps {
  items: FAQ[];
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="divide-y divide-border/40 border-y border-border/40">
      {items.map((item, index) => (
        <div key={index}>
          <button
            type="button"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex items-center justify-between gap-4 py-5 text-left"
            aria-expanded={openIndex === index}
          >
            <span className="font-semibold text-foreground">{item.question}</span>
            <ChevronDown
              className={`w-5 h-5 shrink-0 text-primary transition-transform ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>
          {openIndex === index && (
            <p className="pb-5 text-muted-foreground leading-relaxed">{item.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
}
