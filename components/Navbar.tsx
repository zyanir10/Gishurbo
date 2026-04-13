"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/", label: "בית" },
  { href: "/about", label: "אודות" },
  { href: "/services", label: "שירותים" },
  { href: "/process", label: "תהליך" },
  { href: "/for-lawyers", label: "לעורכי דין" },
  { href: "/join", label: "הצטרפות" },
  { href: "/contact", label: "צור קשר" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 bg-navy transition-shadow duration-300 ${
        scrolled ? "shadow-lg shadow-black/30" : ""
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo — appears on right in RTL flex-row */}
        <Link
          href="/"
          className="text-gold font-bold text-base leading-tight shrink-0"
        >
          מרכז הבוררות והגישור | אילת
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white text-sm hover:text-gold transition-colors duration-200 relative group"
            >
              {link.label}
              <span className="absolute -bottom-0.5 right-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-gold text-navy font-bold text-sm px-4 py-2 rounded hover:bg-gold/90 transition-colors duration-200 shrink-0"
          >
            לקביעת פגישה
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className="lg:hidden text-white p-2 flex flex-col gap-1.5"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="פתח תפריט"
        >
          <span
            className="block w-6 h-0.5 bg-white transition-all duration-300 origin-center"
            style={
              isOpen ? { transform: "rotate(45deg) translate(3px, 7px)" } : {}
            }
          />
          <span
            className="block w-6 h-0.5 bg-white transition-all duration-300"
            style={isOpen ? { opacity: 0 } : {}}
          />
          <span
            className="block w-6 h-0.5 bg-white transition-all duration-300 origin-center"
            style={
              isOpen
                ? { transform: "rotate(-45deg) translate(3px, -7px)" }
                : {}
            }
          />
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-navy border-t border-white/10 px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white hover:text-gold transition-colors duration-200 text-base"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-gold text-navy font-bold text-sm px-4 py-2.5 rounded text-center hover:bg-gold/90 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            לקביעת פגישה
          </Link>
        </div>
      )}
    </nav>
  );
}
