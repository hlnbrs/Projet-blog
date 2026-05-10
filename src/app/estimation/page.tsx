import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Estimation gratuite — Hélène Barroso",
  description:
    "Demandez une estimation personnalisée et gratuite de votre bien à Toulouse. Hélène Barroso vous rappelle sous 24h.",
};

export default function EstimationPage() {
  return (
    <section
      style={{ backgroundColor: "var(--color-ivoire)" }}
      className="px-8 md:px-16 lg:px-24 py-20"
    >
      <div className="max-w-2xl">
        <span className="label-cat mb-4 block">Estimation</span>
        <h1
          style={{
            fontFamily: "var(--font-prata)",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            color: "var(--color-cerisier)",
            marginBottom: "0.75rem",
          }}
        >
          Votre estimation personnalisée — gratuite et sans engagement.
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
          Je vous rappelle sous 24h pour un premier échange.
          Pas d&apos;outil automatique — une estimation humaine, ancrée dans
          la réalité du marché toulousain.
        </p>

        <form
          action="https://formspree.io/f/placeholder"
          method="POST"
          className="flex flex-col gap-5"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="type_bien" style={{ fontFamily: "var(--font-redhat)", fontSize: "0.8125rem", color: "var(--color-graphite)", letterSpacing: "0.05em" }}>
                Type de bien *
              </label>
              <select
                id="type_bien"
                name="type_bien"
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
                <option value="appartement">Appartement</option>
                <option value="maison">Maison</option>
                <option value="autre">Autre</option>
              </select>
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="surface" style={{ fontFamily: "var(--font-redhat)", fontSize: "0.8125rem", color: "var(--color-graphite)", letterSpacing: "0.05em" }}>
                Surface approximative (m²) *
              </label>
              <input
                id="surface"
                name="surface"
                type="text"
                required
                placeholder="ex : 65"
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
              <label htmlFor="secteur" style={{ fontFamily: "var(--font-redhat)", fontSize: "0.8125rem", color: "var(--color-graphite)", letterSpacing: "0.05em" }}>
                Secteur / Ville *
              </label>
              <input
                id="secteur"
                name="secteur"
                type="text"
                required
                placeholder="ex : Toulouse, Saint-Cyprien"
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
              <label htmlFor="situation" style={{ fontFamily: "var(--font-redhat)", fontSize: "0.8125rem", color: "var(--color-graphite)", letterSpacing: "0.05em" }}>
                Situation *
              </label>
              <select
                id="situation"
                name="situation"
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
                <option value="residence_principale">Résidence principale</option>
                <option value="residence_secondaire">Résidence secondaire</option>
                <option value="locatif">Bien locatif</option>
              </select>
            </div>
          </div>

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
            <label htmlFor="message" style={{ fontFamily: "var(--font-redhat)", fontSize: "0.8125rem", color: "var(--color-graphite)", letterSpacing: "0.05em" }}>
              Message libre (facultatif)
            </label>
            <textarea
              id="message"
              name="message"
              rows={3}
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
            Demander mon estimation →
          </button>
        </form>

        <p
          className="mt-6"
          style={{
            fontFamily: "var(--font-redhat)",
            fontSize: "0.8125rem",
            color: "var(--color-pierre)",
            lineHeight: "1.6",
          }}
        >
          Vos données ne sont utilisées que pour vous recontacter. Aucune transmission à des tiers.
        </p>
      </div>
    </section>
  );
}
