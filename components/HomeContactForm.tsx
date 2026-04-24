"use client";

import { useState } from "react";
import { useEditMode } from "./EditModeProvider";

const inputClass =
  "w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-navy placeholder-gray-400 focus:outline-none focus:border-gold transition-colors bg-white";

export default function HomeContactForm() {
  const { contentMap } = useEditMode();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [desc, setDesc] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, message: desc }),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="bg-white rounded-2xl p-10 text-center shadow-lg">
        <div className="text-5xl mb-4" aria-hidden="true">
          ✅
        </div>
        <p className="text-navy font-bold text-xl">קיבלנו! נחזור אליך בהקדם.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-lg space-y-4">
      <h3 className="font-bold text-navy text-xl mb-2">
        {contentMap["home.form.title"] ?? "טופס יצירת קשר"}
      </h3>
      <input
        required
        type="text"
        placeholder={contentMap["home.form.name"] ?? "שם מלא"}
        value={name}
        onChange={(e) => setName(e.target.value)}
        className={inputClass}
      />
      <input
        required
        type="tel"
        placeholder={contentMap["home.form.phone"] ?? "טלפון"}
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className={inputClass}
      />
      <textarea
        rows={3}
        placeholder={contentMap["home.form.desc"] ?? "תיאור קצר (אופציונלי)"}
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        className={`${inputClass} resize-none`}
      />
      {status === "error" && (
        <p className="text-red-500 text-sm text-center">
          שגיאה בשליחה. אנא נסה שוב.
        </p>
      )}
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full bg-navy text-gold font-bold py-4 rounded-xl hover:bg-navy/90 transition-colors disabled:opacity-60 text-sm"
      >
        {status === "sending"
          ? "שולח..."
          : (contentMap["home.form.submit"] ?? "שלח")}
      </button>
    </form>
  );
}
