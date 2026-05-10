"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-ivoire/95 backdrop-blur-sm border-b border-sable"
      style={{ borderColor: "var(--color-sable)" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 no-underline">
          <span
            style={{
              fontFamily: "var(--font-prata)",
              fontSize: "1.5rem",
              color: "var(--color-cerisier)",
              fontWeight: 400,
              letterSpacing: "0.02em",
            }}
          >
            HB
          </span>
          <span
            style={{
              fontFamily: "var(--font-redhat)",
              fontSize: "0.6875rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--color-graphite)",
              lineHeight: "1.3",
            }}
          >
            Hélène Barroso
            <br />
            <span style={{ color: "var(--color-pierre)", fontWeight: 300 }}>Votre agente immobilière</span>
          </span>
        </Link>

        {/* Nav desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { href: "/vendeurs", label: "Vendeurs" },
            { href: "/acheteurs", label: "Acheteurs" },
            { href: "/blog", label: "Blog" },
            { href: "/a-propos", label: "À propos" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              style={{
                fontFamily: "var(--font-redhat)",
                fontSize: "0.875rem",
                fontWeight: 500,
                color: "var(--color-graphite)",
                letterSpacing: "0.05em",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-cerisier)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-graphite)")}
            >
              {label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary">
            Contact
          </Link>
        </nav>

        {/* Burger mobile */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span
            className="block w-6 h-px transition-all"
            style={{
              backgroundColor: "var(--color-charbon)",
              transform: open ? "rotate(45deg) translate(3px, 3px)" : "none",
            }}
          />
          <span
            className="block w-6 h-px transition-all"
            style={{
              backgroundColor: "var(--color-charbon)",
              opacity: open ? 0 : 1,
            }}
          />
          <span
            className="block w-6 h-px transition-all"
            style={{
              backgroundColor: "var(--color-charbon)",
              transform: open ? "rotate(-45deg) translate(3px, -3px)" : "none",
            }}
          />
        </button>
      </div>

      {/* Menu mobile */}
      {open && (
        <div
          className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-4 border-t"
          style={{
            backgroundColor: "var(--color-ivoire)",
            borderColor: "var(--color-sable)",
          }}
        >
          {[
            { href: "/vendeurs", label: "Vendeurs" },
            { href: "/acheteurs", label: "Acheteurs" },
            { href: "/blog", label: "Blog" },
            { href: "/a-propos", label: "À propos" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              style={{
                fontFamily: "var(--font-redhat)",
                fontSize: "1rem",
                fontWeight: 500,
                color: "var(--color-graphite)",
                textDecoration: "none",
              }}
            >
              {label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary inline-block w-fit" onClick={() => setOpen(false)}>
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
