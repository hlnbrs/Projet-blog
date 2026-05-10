import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "À propos d'Hélène Barroso",
  description:
    "Ancienne chargée d'affaires bancaires reconvertie dans l'immobilier en 2022. Finisher MDS Jordanie 2024. 30 ventes en exclusivité à Toulouse.",
};

export default function AProposPage() {
  return (
    <>
      {/* HERO */}
      <section
        className="relative flex flex-col md:flex-row min-h-[60vh]"
        style={{ backgroundColor: "var(--color-ivoire)" }}
      >
        <div className="flex flex-col justify-center px-8 md:px-16 lg:px-24 py-20 md:w-[55%]">
          <span className="label-cat mb-4">À propos</span>
          <h1
            style={{
              fontFamily: "var(--font-prata)",
              fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
              color: "var(--color-cerisier)",
              lineHeight: "1.15",
            }}
          >
            Bonjour, je suis Hélène.
          </h1>
        </div>
        <div className="relative md:w-[45%] min-h-[40vh] md:min-h-full">
          <Image
            src="/images/0005_PORTRAIT_PRO_HELEN6_WEB.jpg"
            alt="Hélène Barroso, agente immobilière à Toulouse"
            fill
            className="object-cover object-top"
            priority
          />
        </div>
      </section>

      {/* PARCOURS BANCAIRE */}
      <section
        style={{ backgroundColor: "var(--color-creme)" }}
        className="px-8 md:px-16 lg:px-24 py-20"
      >
        <div className="max-w-3xl">
          <span className="label-cat mb-4 block">Mon parcours</span>
          <h2
            style={{
              fontFamily: "var(--font-prata)",
              fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
              color: "var(--color-charbon)",
              marginBottom: "1.5rem",
            }}
          >
            Le regard financier comme différentiel
          </h2>
          <p
            style={{
              fontFamily: "var(--font-redhat)",
              fontSize: "1rem",
              color: "var(--color-graphite)",
              lineHeight: "1.85",
              marginBottom: "1.25rem",
            }}
          >
            Pendant des années, j&apos;ai accompagné des particuliers et des
            professionnels en banque. J&apos;ai appris à lire des dossiers, à
            comprendre les situations financières, à anticiper les obstacles.
            Ce n&apos;est pas du conseil en patrimoine — c&apos;est un regard financier
            forgé par des années au contact des dossiers réels.
          </p>
          <p
            style={{
              fontFamily: "var(--font-redhat)",
              fontSize: "1rem",
              color: "var(--color-graphite)",
              lineHeight: "1.85",
            }}
          >
            En 2022, j&apos;ai choisi de me reconvertir dans l&apos;immobilier indépendant.
            Quatre ans plus tard : une trentaine de ventes, toutes en exclusivité,
            dans un périmètre centré sur Toulouse et ses alentours.
            Je travaille là où la recommandation me porte.
          </p>
        </div>
      </section>

      {/* CHIFFRES CLÉS */}
      <section
        style={{ backgroundColor: "var(--color-ivoire)" }}
        className="px-8 md:px-16 lg:px-24 py-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
          {[
            { chiffre: "4 ans", label: "d'expérience en immobilier" },
            { chiffre: "~30", label: "ventes réalisées" },
            { chiffre: "100%", label: "en exclusivité" },
          ].map(({ chiffre, label }) => (
            <div
              key={label}
              className="text-center p-8"
              style={{
                backgroundColor: "var(--color-creme)",
                border: "1px solid var(--color-sable)",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-prata)",
                  fontSize: "2.5rem",
                  color: "var(--color-cerisier)",
                  marginBottom: "0.5rem",
                }}
              >
                {chiffre}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-redhat)",
                  fontSize: "0.875rem",
                  color: "var(--color-graphite)",
                  letterSpacing: "0.05em",
                }}
              >
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* TRAIL & MDS */}
      <section
        style={{ backgroundColor: "var(--color-charbon)" }}
        className="flex flex-col md:flex-row"
      >
        <div className="flex flex-col justify-center px-8 md:px-16 lg:px-24 py-20 md:w-[55%]">
          <span
            className="label-cat mb-4 block"
            style={{ color: "var(--color-argile)" }}
          >
            Ce que le trail m&apos;a appris sur l&apos;engagement
          </span>
          <h2
            style={{
              fontFamily: "var(--font-prata)",
              fontSize: "clamp(1.4rem, 2.8vw, 2rem)",
              color: "var(--color-ivoire)",
              marginBottom: "1.5rem",
            }}
          >
            On finit ce qu&apos;on commence.
          </h2>
          <div
            style={{
              fontFamily: "var(--font-redhat)",
              fontSize: "0.9375rem",
              color: "var(--color-sable)",
              lineHeight: "1.85",
            }}
            className="space-y-3 mb-6"
          >
            <p>2019–2023 : trail intensif. Trans&apos;Aubrac 53 km. Euskal Trail 2×25 km.</p>
            <p>Novembre 2023 : transition CrossFit pour préparer le Marathon des Sables.</p>
            <p>2024 : Marathon des Sables Jordanie — Wadi Rum — 6 jours en désert — dossard 234.</p>
            <p>Depuis mars 2025 : CrossFit 5 fois par semaine.</p>
          </div>
          <p
            style={{
              fontFamily: "var(--font-prata)",
              fontSize: "1.05rem",
              color: "var(--color-argile)",
              fontStyle: "italic",
            }}
          >
            &ldquo;Ce que le désert m&apos;a appris : on finit ce qu&apos;on commence.
            C&apos;est aussi comme ça que je travaille.&rdquo;
          </p>
        </div>
        <div className="relative md:w-[45%] min-h-[50vh]">
          <Image
            src="/images/Arrivée MDS Jordan.jpeg"
            alt="Hélène Barroso — Arrivée Marathon des Sables Jordanie 2024, dossard 234"
            fill
            className="object-cover object-center"
          />
          <div
            className="absolute bottom-4 left-4 right-4 p-3"
            style={{
              backgroundColor: "rgba(31,27,22,0.8)",
              fontFamily: "var(--font-redhat)",
              fontSize: "0.75rem",
              color: "var(--color-pierre)",
              letterSpacing: "0.05em",
            }}
          >
            Marathon des Sables Jordanie 2024 — Wadi Rum
          </div>
        </div>
      </section>

      {/* VALEURS */}
      <section
        style={{ backgroundColor: "var(--color-creme)" }}
        className="px-8 md:px-16 lg:px-24 py-20"
      >
        <span className="label-cat mb-4 block">Mes valeurs</span>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl">
          {[
            { val: "Confiance", desc: "Je suis là de la première conversation à la dernière signature." },
            { val: "Transparence", desc: "Je dis ce que je pense, y compris quand ce n'est pas ce qu'on veut entendre." },
            { val: "Engagement", desc: "Je ne lâche pas un dossier en cours de route." },
            { val: "Expertise", desc: "Un regard bancaire au service de chaque transaction." },
          ].map(({ val, desc }) => (
            <div key={val} className="p-6" style={{ backgroundColor: "var(--color-ivoire)", border: "1px solid var(--color-sable)" }}>
              <h3
                style={{
                  fontFamily: "var(--font-redhat)",
                  fontWeight: 600,
                  fontSize: "0.9375rem",
                  color: "var(--color-cerisier)",
                  marginBottom: "0.5rem",
                }}
              >
                {val}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-redhat)",
                  fontSize: "0.8125rem",
                  color: "var(--color-graphite)",
                  lineHeight: "1.7",
                }}
              >
                {desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <Link href="/contact" className="btn-primary">
            Travaillons ensemble →
          </Link>
        </div>
      </section>
    </>
  );
}
