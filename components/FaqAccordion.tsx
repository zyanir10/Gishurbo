"use client";

import { useState } from "react";
import { c } from "@/lib/content";

const FAQ_COUNT = 8;

export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="divide-y divide-gray-100 border border-gray-100 rounded-2xl overflow-hidden">
      {Array.from({ length: FAQ_COUNT }, (_, i) => {
        const isOpen = open === i;

        return (
          <div key={i}>
            <button
              id={`faq-q-${i}`}
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-4 p-6 text-right transition-colors duration-150 ease-out hover:bg-gray-50 active:bg-gray-100"
              aria-expanded={isOpen}
              aria-controls={`faq-a-${i}`}
            >
              <span
                className={`font-semibold text-lg transition-colors duration-150 ease-out ${
                  isOpen ? "text-gold" : "text-navy"
                }`}
              >
                {c[`home.faq.${i}.q`]}
              </span>
              <span
                className={`text-gold text-2xl font-light shrink-0 transition-transform duration-300 ease-out motion-reduce:transition-none ${
                  isOpen ? "rotate-45" : ""
                }`}
                aria-hidden="true"
              >
                +
              </span>
            </button>

            <div
              id={`faq-a-${i}`}
              role="region"
              aria-labelledby={`faq-q-${i}`}
              aria-hidden={!isOpen}
              className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                  {c[`home.faq.${i}.a`]}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
