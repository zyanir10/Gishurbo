import Link from "next/link";

const quickLinks = [
  { href: "/about", label: "אודות" },
  { href: "/services", label: "שירותים" },
  { href: "/process", label: "תהליך" },
  { href: "/for-lawyers", label: "לעורכי דין" },
  { href: "/join", label: "הצטרפות" },
  { href: "/contact", label: "צור קשר" },
];

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="text-gold font-bold text-xl mb-3">
              מרכז הבוררות והגישור | אילת
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              דרך חכמה יותר לייישוב סכסוכים
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-gold font-semibold mb-5 text-xs uppercase tracking-widest">
              ניווט מהיר
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-gold transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-gold font-semibold mb-5 text-xs uppercase tracking-widest">
              פרטי קשר
            </h3>
            <ul className="space-y-3 text-white/50 text-sm">
              <li>📍 אילת, ישראל</li>
              <li>📞 טלפון: יתעדכן בקרוב</li>
              <li>✉️ מייל: יתעדכן בקרוב</li>
              <li>💬 WhatsApp: זמין</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/30 text-sm">
          © 2026 מרכז הבוררות והגישור באילת. כל הזכויות שמורות.
        </div>
      </div>
    </footer>
  );
}
