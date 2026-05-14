import Link from "next/link";
import Image from "next/image";
import { c } from "@/lib/content";

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
            <div className="mb-4">
              <Image
                src="/Logo for website.png"
                alt="המרכז ליישוב סכסוכים באילת"
                width={160}
                height={48}
                style={{ objectFit: "contain" }}
              />
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              {c["footer.tagline"]}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-gold font-semibold mb-5 text-xs uppercase tracking-widest">
              {c["footer.nav.title"]}
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
              {c["footer.contact.title"]}
            </h3>
            <ul className="space-y-3 text-white/50 text-sm">
              <li>{c["footer.contact.address"]}</li>
              <li>{c["footer.contact.phone"]}</li>
              <li>{c["footer.contact.email"]}</li>
              <li>{c["footer.contact.whatsapp"]}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/30 text-sm">
          {c["footer.copyright"]}
        </div>
      </div>
    </footer>
  );
}
