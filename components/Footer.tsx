import Link from "next/link";
import EditableText from "./EditableText";

const quickLinks = [
  { href: "/about", label: "אודות" },
  { href: "/services", label: "שירותים" },
  { href: "/process", label: "תהליך" },
  { href: "/for-lawyers", label: "להפניות" },
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
              <EditableText contentKey="footer.brand" />
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              <EditableText contentKey="footer.tagline" />
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-gold font-semibold mb-5 text-xs uppercase tracking-widest">
              <EditableText contentKey="footer.nav.title" />
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
              <EditableText contentKey="footer.contact.title" />
            </h3>
            <ul className="space-y-3 text-white/50 text-sm">
              <li><EditableText contentKey="footer.contact.address" /></li>
              <li><EditableText contentKey="footer.contact.phone" /></li>
              <li><EditableText contentKey="footer.contact.email" /></li>
              <li><EditableText contentKey="footer.contact.whatsapp" /></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/30 text-sm">
          <EditableText contentKey="footer.copyright" />
        </div>
      </div>
    </footer>
  );
}
