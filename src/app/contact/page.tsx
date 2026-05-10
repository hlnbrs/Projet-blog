import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Hélène Barroso",
  description:
    "Contactez Hélène Barroso, agente immobilière à Toulouse. Réponse personnelle sous 24h.",
};

export default function ContactPage() {
  return (
    <section
      style={{ backgroundColor: "var(--color-ivoire)" }}
      className="px-8 md:px-16 lg:px-24 py-20"
    >
      <div className="max-w-2xl">
        <span className="label-cat mb-4 block">Contact</span>
        <h1
          style={{
            fontFamily: "var(--font-prata)",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            color: "var(--color-cerisier)",
            marginBottom: "0.75rem",
          }}
        >
          Parlons de votre projet.
        </h1>
        <p
          style={{
            fontFamily: "var(--font-redhat)",
            fontSize: "1rem",
            color: "var(--color-graphite)",
            marginBottom: "2.5rem",
            lineHeight: "1.7",
          }}
        >
          Je vous réponds personnellement dans les 24 heures.
        </p>

        <form
          action="https://formspree.io/f/placeholder"
          method="POST"
          className="flex flex-col gap-5"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="prenom" style={{ fontFamily: "var(--font-redhat)", fontSize: "0.8125rem", color: "var(--color-graphite)", letterSpacing: "0.05em" }}>
                Prénom *
              </label>
              <input
                id="prenom"
                name="prenom"
                type="text"
                required
                style={{
                  fontFamily: "var(--font-redhat)",
                  fontSize: "0.9375rem",
                  color: "var(--color-charbon)",
                  backgroundColor: "white",
                  border: "1px solid var(--color-sable)",
                  padding: "0.75rem 1rem",
                  outline: "none",
                }}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="nom" style={{ fontFamily: "var(--font-redhat)", fontSize: "0.8125rem", color: "var(--color-graphite)", letterSpacing: "0.05em" }}>
                Nom *
              </label>
              <input
                id="nom"
                name="nom"
                type="text"
                required
                style={{
                  fontFamily: "var(--font-redhat)",
                  fontSize: "0.9375rem",
                  color: "var(--color-charbon)",
                  backgroundColor: "white",
                  border: "1px solid var(--color-sable)",
                  padding: "0.75rem 1rem",
                  outline: "none",
                }}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" style={{ fontFamily: "var(--font-redhat)", fontSize: "0.8125rem", color: "var(--color-graphite)", letterSpacing: "0.05em" }}>
                Email *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                style={{
                  fontFamily: "var(--font-redhat)",
                  fontSize: "0.9375rem",
                  color: "var(--color-charbon)",
                  backgroundColor: "white",
                  border: "1px solid var(--color-sable)",
                  padding: "0.75rem 1rem",
                  outline: "none",
                }}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="telephone" style={{ fontFamily: "var(--font-redhat)", fontSize: "0.8125rem", color: "var(--color-graphite)", letterSpacing: "0.05em" }}>
                Téléphone *
              </label>
              <input
                id="telephone"
                name="telephone"
                type="tel"
                required
                style={{
                  fontFamily: "var(--font-redhat)",
                  fontSize: "0.9375rem",
                  color: "var(--color-charbon)",
                  backgroundColor: "white",
                  border: "1px solid var(--color-sable)",
                  padding: "0.75rem 1rem",
                  outline: "none",
                }}
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="projet" style={{ fontFamily: "var(--font-redhat)", fontSize: "0.8125rem", color: "var(--color-graphite)", letterSpacing: "0.05em" }}>
              Type de projet *
            </label>
            <select
              id="projet"
              name="projet"
              required
              style={{
                fontFamily: "var(--font-redhat)",
                fontSize: "0.9375rem",
                color: "var(--color-charbon)",
                backgroundColor: "white",
                border: "1px solid var(--color-sable)",
                padding: "0.75rem 1rem",
                outline: "none",
                appearance: "none",
              }}
            >
              <option value="">Sélectionnez...</option>
              <option value="vendre">Vendre un bien</option>
              <option value="acheter">Acheter un bien</option>
              <option value="autre">Autre</option>
            </select>
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="message" style={{ fontFamily: "var(--font-redhat)", fontSize: "0.8125rem", color: "var(--color-graphite)", letterSpacing: "0.05em" }}>
              Message (facultatif)
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              style={{
                fontFamily: "var(--font-redhat)",
                fontSize: "0.9375rem",
                color: "var(--color-charbon)",
                backgroundColor: "white",
                border: "1px solid var(--color-sable)",
                padding: "0.75rem 1rem",
                outline: "none",
                resize: "vertical",
              }}
            />
          </div>

          <button type="submit" className="btn-primary w-fit">
            Envoyer ma demande →
          </button>
        </form>

        <div className="mt-10 pt-8" style={{ borderTop: "1px solid var(--color-sable)" }}>
          <a
            href="https://www.instagram.com/helene.barroso.immobilier"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "var(--font-redhat)",
              fontSize: "0.9rem",
              color: "var(--color-cerisier)",
              textDecoration: "none",
            }}
          >
            → @helene.barroso.immobilier sur Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
