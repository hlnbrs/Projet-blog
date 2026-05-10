import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pourquoi je ne travaille qu'en exclusivité à Toulouse",
  description:
    "L'exclusivité n'est pas une contrainte pour le vendeur — c'est sa meilleure protection. Hélène Barroso explique pourquoi.",
};

export default function ArticleExclusivite() {
  return (
    <article
      style={{ backgroundColor: "var(--color-ivoire)" }}
      className="px-8 md:px-16 lg:px-24 py-20 max-w-3xl"
    >
      {/* Fil d'Ariane */}
      <nav className="mb-8 flex gap-2 items-center" style={{ fontFamily: "var(--font-redhat)", fontSize: "0.8125rem", color: "var(--color-pierre)" }}>
        <Link href="/blog" style={{ color: "var(--color-pierre)", textDecoration: "none" }}>Blog</Link>
        <span>→</span>
        <span style={{ color: "var(--color-graphite)" }}>Vendre à Toulouse</span>
      </nav>

      <span
        className="label-cat mb-4 block"
        style={{ color: "var(--color-cerisier)" }}
      >
        Vendre à Toulouse
      </span>

      <h1
        style={{
          fontFamily: "var(--font-prata)",
          fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
          color: "var(--color-charbon)",
          lineHeight: "1.25",
          marginBottom: "1rem",
        }}
      >
        Pourquoi je ne travaille qu&apos;en exclusivité —<br />
        et ce que ça change pour vous
      </h1>

      <p style={{ fontFamily: "var(--font-redhat)", fontSize: "0.8125rem", color: "var(--color-pierre)", marginBottom: "3rem" }}>
        Hélène Barroso — Mai 2026 — 5 min de lecture
      </p>

      <div
        style={{
          fontFamily: "var(--font-redhat)",
          fontSize: "1rem",
          color: "var(--color-graphite)",
          lineHeight: "1.85",
        }}
        className="flex flex-col gap-6"
      >
        <p>
          Un vendeur m&apos;a appelée il y a quelques mois. Son appartement était en ligne
          depuis quatre mois sur trois agences différentes. Il avait eu des visites,
          quelques retours vagues, mais aucune offre sérieuse. Il était épuisé.
          Et il ne comprenait pas pourquoi.
        </p>

        <p>
          Je lui ai demandé de regarder ses annonces ensemble. Trois présentations
          différentes, trois séries de photos, trois prix légèrement différents.
          Le même bien, apparent partout, qui semblait ne séduire personne.
        </p>

        <h2
          style={{
            fontFamily: "var(--font-prata)",
            fontSize: "1.4rem",
            color: "var(--color-charbon)",
            marginTop: "1rem",
          }}
        >
          Ce que la multiplication des agences fait au marché
        </h2>

        <p>
          Un acheteur qui voit le même bien affiché par trois agences se dit une chose :
          &ldquo;Ce bien ne se vend pas.&rdquo; C&apos;est un signal négatif, fort, immédiat.
          Même si le bien est parfait. Même si le prix est juste.
          La présence multiple envoie un message de désintérêt que vous n&apos;avez
          pas voulu envoyer.
        </p>

        <p>
          L&apos;exclusivité, c&apos;est l&apos;inverse. Un seul interlocuteur, une seule annonce,
          une cohérence totale. C&apos;est un signal de confiance.
        </p>

        <h2
          style={{
            fontFamily: "var(--font-prata)",
            fontSize: "1.4rem",
            color: "var(--color-charbon)",
            marginTop: "1rem",
          }}
        >
          Et l&apos;interagence, dans tout ça ?
        </h2>

        <p>
          Travailler en exclusivité ne signifie pas travailler seule. Dans le réseau Axo,
          un mandat exclusif peut être partagé avec des confrères — c&apos;est ce qu&apos;on appelle
          l&apos;interagence. Vos honoraires, au lieu de fragmenter le travail, ouvrent un réseau.
          Vous avez une agente dédiée, et derrière elle, l&apos;accès à un collectif d&apos;acheteurs
          plus large.
        </p>

        <p>
          C&apos;est le meilleur des deux mondes : l&apos;engagement d&apos;une relation exclusive
          et la puissance d&apos;un réseau.
        </p>

        <p
          style={{
            borderLeft: "3px solid var(--color-argile)",
            paddingLeft: "1.25rem",
            color: "var(--color-charbon)",
            fontStyle: "italic",
          }}
        >
          Pour l&apos;appartement de ce vendeur : mandat signé, bien republié une seule fois,
          première offre reçue en 12 jours. Pas parce que le marché avait changé.
          Parce que la présentation, elle, avait changé.
        </p>
      </div>

      {/* CTA */}
      <div
        className="mt-12 p-8"
        style={{ backgroundColor: "var(--color-creme)", border: "1px solid var(--color-sable)" }}
      >
        <p
          style={{
            fontFamily: "var(--font-redhat)",
            fontSize: "0.9375rem",
            color: "var(--color-graphite)",
            marginBottom: "1.25rem",
          }}
        >
          Vous envisagez de vendre votre bien à Toulouse ? Demandez une estimation
          personnalisée — c&apos;est gratuit et sans engagement.
        </p>
        <Link href="/estimation" className="btn-primary">
          Demander une estimation →
        </Link>
      </div>

      <div className="mt-8">
        <Link
          href="/blog"
          style={{
            fontFamily: "var(--font-redhat)",
            fontSize: "0.875rem",
            color: "var(--color-graphite)",
            textDecoration: "none",
          }}
        >
          ← Retour au blog
        </Link>
      </div>
    </article>
  );
}
