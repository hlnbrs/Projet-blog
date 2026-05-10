import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog — L'immobilier, une histoire de confiance",
  description:
    "Conseils, analyses et ressources immobilières pour vendeurs et acheteurs à Toulouse. Par Hélène Barroso.",
};

const categories = ["Tous", "Vendre à Toulouse", "Acheter autrement", "Le marché en clair"];

const articles = [
  {
    slug: "5-etapes-vendre-votre-bien",
    categorie: "Vendre à Toulouse",
    couleur: "#5C2E1F",
    titre: "Pourquoi je ne travaille qu'en exclusivité — et ce que ça change pour vous",
    extrait: "Le bénéfice vendeur. L'interagence expliquée. Pas la contrainte.",
    date: "Mai 2026",
  },
  {
    slug: "ce-que-votre-banquier-regardera",
    categorie: "Acheter autrement",
    couleur: "#A8744E",
    titre: "Ce que votre banquier regardera dans votre dossier",
    extrait: "L'expertise bancaire directe. Ce que peu d'agents peuvent écrire.",
    date: "Avril 2026",
  },
  {
    slug: "honoraires-trop-eleves",
    categorie: "Vendre à Toulouse",
    couleur: "#5C2E1F",
    titre: "Ce que j'entends quand on me dit que mes honoraires sont trop élevés",
    extrait: "Pédagogie. Désarmement d'une objection classique.",
    date: "Avril 2026",
  },
  {
    slug: "marche-toulousain-2026",
    categorie: "Le marché en clair",
    couleur: "#C9A687",
    titre: "Le marché toulousain en 2026 : ce que les chiffres disent vraiment",
    extrait: "Bilan annuel. Données DVF commentées. Fort SEO.",
    date: "Mars 2026",
  },
  {
    slug: "saint-cyprien-minimes-rangueil",
    categorie: "Le marché en clair",
    couleur: "#C9A687",
    titre: "Saint-Cyprien, Minimes, Rangueil : trois quartiers, trois marchés",
    extrait: "Hyper-local. Prix réels, profils, délais de vente.",
    date: "Mars 2026",
  },
  {
    slug: "primo-accedant-toulouse",
    categorie: "Acheter autrement",
    couleur: "#A8744E",
    titre: "Primo-accédant à Toulouse : par où commencer vraiment",
    extrait: "Guide pratique. Ancrage local fort. Étape par étape.",
    date: "Février 2026",
  },
];

export default function BlogPage() {
  return (
    <>
      <style>{`
        .article-card { transition: box-shadow 0.2s; }
        .article-card:hover { box-shadow: 0 4px 20px rgba(31,27,22,0.12) !important; }
      `}</style>

      {/* HERO */}
      <section
        className="relative flex flex-col md:flex-row min-h-[55vh]"
        style={{ backgroundColor: "var(--color-ivoire)" }}
      >
        <div className="flex flex-col justify-center px-8 md:px-16 lg:px-24 py-20 md:w-[55%]">
          <span className="label-cat mb-4">Le blog</span>
          <h1
            style={{
              fontFamily: "var(--font-prata)",
              fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
              color: "var(--color-cerisier)",
              lineHeight: "1.15",
              marginBottom: "1.25rem",
            }}
          >
            L&apos;immobilier,<br />une histoire de confiance.
          </h1>
          <p
            style={{
              fontFamily: "var(--font-redhat)",
              fontSize: "1rem",
              color: "var(--color-graphite)",
              lineHeight: "1.8",
              maxWidth: "420px",
            }}
          >
            Des conseils, des analyses et des ressources pour vous accompagner
            à chaque étape de votre projet.
          </p>
        </div>
        <div className="relative md:w-[45%] min-h-[40vh] md:min-h-full">
          <Image
            src="/images/0003 Meilleur agent immobilier Toulouse.jpg"
            alt="Hélène Barroso, agente immobilière à Toulouse"
            fill
            className="object-cover object-top"
            priority
          />
        </div>
      </section>

      {/* CATÉGORIES */}
      <section
        style={{ backgroundColor: "var(--color-creme)", borderBottom: "1px solid var(--color-sable)" }}
        className="px-8 md:px-16 lg:px-24 py-5"
      >
        <div className="flex gap-4 flex-wrap">
          {categories.map((cat, i) => (
            <span
              key={cat}
              style={{
                fontFamily: "var(--font-redhat)",
                fontSize: "0.8125rem",
                fontWeight: 500,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: i === 0 ? "var(--color-cerisier)" : "var(--color-graphite)",
                border: i === 0 ? "1px solid var(--color-cerisier)" : "1px solid transparent",
                padding: "0.35rem 1rem",
              }}
            >
              {cat}
            </span>
          ))}
        </div>
      </section>

      {/* GRILLE ARTICLES */}
      <section
        style={{ backgroundColor: "var(--color-ivoire)" }}
        className="px-8 md:px-16 lg:px-24 py-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map(({ slug, categorie, couleur, titre, extrait, date }) => (
            <Link
              key={slug}
              href={`/blog/${slug}`}
              style={{ textDecoration: "none" }}
            >
              <article
                className="article-card flex flex-col h-full"
                style={{
                  backgroundColor: "white",
                  border: "1px solid var(--color-sable)",
                  boxShadow: "0 2px 8px rgba(31,27,22,0.04)",
                }}
              >
                <div className="px-5 py-2" style={{ backgroundColor: couleur }}>
                  <span
                    style={{
                      fontFamily: "var(--font-redhat)",
                      fontSize: "0.6875rem",
                      fontWeight: 500,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "white",
                    }}
                  >
                    {categorie}
                  </span>
                </div>

                <div className="p-6 flex flex-col flex-1 gap-3">
                  <h2
                    style={{
                      fontFamily: "var(--font-prata)",
                      fontSize: "1.0625rem",
                      color: "var(--color-charbon)",
                      lineHeight: "1.45",
                    }}
                  >
                    {titre}
                  </h2>
                  <p
                    style={{
                      fontFamily: "var(--font-redhat)",
                      fontSize: "0.875rem",
                      color: "var(--color-graphite)",
                      lineHeight: "1.6",
                      flex: 1,
                    }}
                  >
                    {extrait}
                  </p>
                  <div className="flex justify-between items-center mt-2">
                    <span style={{ fontFamily: "var(--font-redhat)", fontSize: "0.75rem", color: "var(--color-pierre)" }}>
                      {date}
                    </span>
                    <span style={{ fontFamily: "var(--font-redhat)", fontSize: "0.75rem", fontWeight: 500, color: "var(--color-cerisier)", letterSpacing: "0.05em" }}>
                      Lire l&apos;article →
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
