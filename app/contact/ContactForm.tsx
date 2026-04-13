"use client";

import { useState } from "react";

type FormState = {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  phone: "",
  email: "",
  subject: "",
  message: "",
};

const subjectOptions = [
  "גישור משפחתי",
  "גישור עסקי",
  "בוררות",
  "תיאום הורי",
  "אחר",
];

const inputClass =
  "w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors bg-white";

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const set = (field: keyof FormState) => (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="text-center py-16 bg-white rounded-2xl border border-gold/30 shadow-sm">
        <div className="text-5xl mb-5" aria-hidden="true">✅</div>
        <h3 className="text-2xl font-bold text-navy mb-3">ההודעה נשלחה!</h3>
        <p className="text-gray-500">
          תודה על פנייתכם. נחזור אליכם תוך 24 שעות.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block text-sm font-medium text-navy mb-1.5">
          שם מלא *
        </label>
        <input
          required
          type="text"
          value={form.name}
          onChange={set("name")}
          className={inputClass}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-navy mb-1.5">
            טלפון *
          </label>
          <input
            required
            type="tel"
            value={form.phone}
            onChange={set("phone")}
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-navy mb-1.5">
            אימייל *
          </label>
          <input
            required
            type="email"
            value={form.email}
            onChange={set("email")}
            className={inputClass}
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-navy mb-1.5">
          נושא הפנייה *
        </label>
        <select
          required
          value={form.subject}
          onChange={set("subject")}
          className={`${inputClass} appearance-none cursor-pointer`}
        >
          <option value="" disabled>
            בחרו נושא...
          </option>
          {subjectOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-navy mb-1.5">
          הודעה *
        </label>
        <textarea
          required
          rows={5}
          placeholder="תארו בקצרה את הסכסוך או הפנייה..."
          value={form.message}
          onChange={set("message")}
          className={`${inputClass} resize-none`}
        />
      </div>
      {status === "error" && (
        <p className="text-red-500 text-sm">שגיאה בשליחה. אנא נסו שוב.</p>
      )}
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-gold text-navy font-bold py-3.5 rounded-lg hover:bg-gold/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed text-sm"
      >
        {status === "loading" ? "שולח..." : "שליחה"}
      </button>
    </form>
  );
}
