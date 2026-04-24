"use client";

import { useState } from "react";
import EditableText from "./EditableText";

const FAQ_COUNT = 8;

export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="divide-y divide-gray-100 border border-gray-100 rounded-2xl overflow-hidden">
      {Array.from({ length: FAQ_COUNT }, (_, i) => (
        <div key={i}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between gap-4 p-6 text-right hover:bg-gray-50 transition-colors duration-200"
            aria-expanded={open === i}
          >
            <span
              className={`font-semibold text-lg transition-colors ${
                open === i ? "text-gold" : "text-navy"
              }`}
            >
              <EditableText contentKey={`home.faq.${i}.q`} />
            </span>
            <span
              className={`text-gold text-2xl font-light shrink-0 transition-transform duration-300 ${
                open === i ? "rotate-45" : ""
              }`}
              aria-hidden="true"
            >
              +
            </span>
          </button>
          {open === i && (
            <div className="px-6 pb-6 text-gray-600 leading-relaxed">
              <EditableText contentKey={`home.faq.${i}.a`} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
