import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--color-creme)" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          {/* Identité */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span
                style={{
                  fontFamily: "var(--font-prata)",
                  fontSize: "2rem",
                  color: "var(--color-cerisier)",
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
                  lineHeight: "1.4",
                }}
              >
                Hélène Barroso
                <br />
                <span style={{ color: "var(--color-pierre)", fontWeight: 300 }}>Votre agente immobilière</span>
              </span>
            </div>
            <div className="flex gap-8 mt-4">
              {["Achat", "Vente", "Accompagnement"].map((item) => (
                <span key={item} className="label-cat text-[11px]">
                  {item}
                </span>
              ))}
            </div>
            <p
              className="mt-6 italic"
              style={{
                fontFamily: "var(--font-prata)",
                fontSize: "0.9375rem",
                color: "var(--color-graphite)",
              }}
            >
              Plus qu&apos;une transaction, une relation de confiance.
            </p>
          </div>

          {/* Liens */}
          <nav className="flex flex-col gap-2">
            {[
              { href: "/vendeurs", label: "Vendeurs" },
              { href: "/acheteurs", label: "Acheteurs" },
              { href: "/blog", label: "Blog" },
              { href: "/a-propos", label: "À propos" },
              { href: "/contact", label: "Contact" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                style={{
                  fontFamily: "var(--font-redhat)",
                  fontSize: "0.875rem",
                  color: "var(--color-graphite)",
                  textDecoration: "none",
                }}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Contact & réseaux */}
          <div
            style={{
              fontFamily: "var(--font-redhat)",
              fontSize: "0.875rem",
              color: "var(--color-graphite)",
            }}
          >
            <a
              href="https://www.instagram.com/helene.barroso.immobilier"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--color-cerisier)", textDecoration: "none", display: "block", marginBottom: "0.5rem" }}
            >
              @helene.barroso.immobilier
            </a>
            <span style={{ color: "var(--color-pierre)", fontSize: "0.8125rem" }}>
              Toulouse &amp; périphérie — jusqu&apos;à 1h30
            </span>
          </div>
        </div>

        <div
          className="mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs"
          style={{
            borderTop: "1px solid var(--color-sable)",
            color: "var(--color-pierre)",
            fontFamily: "var(--font-redhat)",
          }}
        >
          <span>© {new Date().getFullYear()} Hélène Barroso — Tous droits réservés</span>
          <div className="flex gap-6">
            <Link href="/mentions-legales" style={{ color: "var(--color-pierre)", textDecoration: "none" }}>
              Mentions légales
            </Link>
            <Link href="/confidentialite" style={{ color: "var(--color-pierre)", textDecoration: "none" }}>
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
