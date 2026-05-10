import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Acheter un bien à Toulouse",
  description:
    "Hélène Barroso vous accompagne dans votre projet d'achat à Toulouse : structuration du dossier, analyse bancaire réelle et suivi jusqu'à la signature.",
};

const steps = [
  { num: "01", title: "Cadrer votre projet", desc: "Comprendre vos besoins réels, votre calendrier et vos contraintes avant toute recherche." },
  { num: "02", title: "Analyser votre dossier", desc: "Évaluer votre capacité d'emprunt réelle — pas celle du simulateur, celle du banquier." },
  { num: "03", title: "Cibler les biens", desc: "Sélection rigoureuse selon vos critères, avec un regard expérimenté sur le prix du marché." },
  { num: "04", title: "Accompagner jusqu'à la signature", desc: "Aide à la négociation, lecture du compromis, suivi jusqu'à l'acte définitif." },
];

export default function AcheteursPage() {
  return (
    <>
      {/* HERO */}
      <section
        className="relative flex flex-col md:flex-row min-h-[70vh]"
        style={{ backgroundColor: "var(--color-ivoire)" }}
      >
        <div className="flex flex-col justify-center px-8 md:px-16 lg:px-24 py-20 md:w-1/2 lg:w-[55%]">
          <span className="label-cat mb-4">Acheteurs</span>
          <h1
            style={{
              fontFamily: "var(--font-prata)",
              fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
              color: "var(--color-cerisier)",
              lineHeight: "1.15",
              marginBottom: "1.5rem",
            }}
          >
            Trouver le bon bien.<br />Au bon prix. Sans stress.
          </h1>
          <p
            style={{
              fontFamily: "var(--font-redhat)",
              fontSize: "1.0625rem",
              color: "var(--color-graphite)",
              lineHeight: "1.8",
              maxWidth: "440px",
              marginBottom: "2.5rem",
            }}
          >
            Je structure votre projet avant même la première visite.
            Parce qu&apos;un achat réussi se prépare — et la préparation commence
            par regarder ensemble ce que le banquier regardera.
          </p>
          <Link href="/contact" className="btn-primary w-fit">
            Prendre contact →
          </Link>
        </div>
        <div className="relative md:w-1/2 lg:w-[45%] min-h-[50vh] md:min-h-full">
          <Image
            src="/images/0002 Conseil Achat Immobilier Toulouse.jpg"
            alt="Intérieur contemporain à Toulouse"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </section>

      {/* ANGLE BANCAIRE */}
      <section
        style={{ backgroundColor: "var(--color-creme)" }}
        className="px-8 md:px-16 lg:px-24 py-20"
      >
        <div className="max-w-3xl">
          <span className="label-cat mb-4 block">Mon regard bancaire</span>
          <h2
            style={{
              fontFamily: "var(--font-prata)",
              fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
              color: "var(--color-charbon)",
              marginBottom: "1.5rem",
            }}
          >
            Avant de chercher, on regarde ensemble<br />ce que le banquier regardera.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Capacité réelle vs théorique",
                desc: "Le simulateur en ligne vous donne un chiffre. Le banquier en donne un autre. Je vous aide à comprendre la différence — avant de visiter.",
              },
              {
                title: "Composition du dossier",
                desc: "CDI, CDD, indépendant, primo-accédant : chaque profil a ses forces et ses points de vigilance. Je vous aide à présenter le vôtre sous son meilleur jour.",
              },
              {
                title: "Points de blocage anticipés",
                desc: "Taux d'endettement, reste à vivre, apport minimum : je repère les obstacles avant qu'ils deviennent des refus.",
              },
            ].map(({ title, desc }) => (
              <div
                key={title}
                className="p-6"
                style={{
                  backgroundColor: "var(--color-ivoire)",
                  border: "1px solid var(--color-sable)",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-redhat)",
                    fontWeight: 600,
                    fontSize: "0.9375rem",
                    color: "var(--color-cerisier)",
                    marginBottom: "0.75rem",
                  }}
                >
                  {title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-redhat)",
                    fontSize: "0.9rem",
                    color: "var(--color-graphite)",
                    lineHeight: "1.7",
                  }}
                >
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROFILS */}
      <section
        style={{ backgroundColor: "var(--color-ivoire)" }}
        className="px-8 md:px-16 lg:px-24 py-20"
      >
        <span className="label-cat mb-4 block">Pour qui ?</span>
        <h2
          style={{
            fontFamily: "var(--font-prata)",
            fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
            color: "var(--color-charbon)",
            marginBottom: "3rem",
          }}
        >
          Je m&apos;adresse à vous, quelle que soit votre situation
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
          {[
            {
              title: "Vous achetez seul(e)",
              desc: "Être seul(e) face à un achat immobilier peut être déstabilisant. Je suis là pour penser à votre place les étapes que vous ne connaissez pas encore, et vous accompagner à chaque rendez-vous.",
            },
            {
              title: "Vous êtes primo-accédant(e)",
              desc: "Vous découvrez le monde de l'acquisition — les termes, les délais, les interlocuteurs. Je simplifie, j'explique, et je m'assure que vous ne signez rien sans comprendre ce que vous signez.",
            },
          ].map(({ title, desc }) => (
            <div
              key={title}
              className="p-8"
              style={{
                backgroundColor: "var(--color-creme)",
                border: "1px solid var(--color-sable)",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-redhat)",
                  fontWeight: 600,
                  fontSize: "1rem",
                  color: "var(--color-cerisier)",
                  marginBottom: "0.75rem",
                }}
              >
                {title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-redhat)",
                  fontSize: "0.9rem",
                  color: "var(--color-graphite)",
                  lineHeight: "1.8",
                }}
              >
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ACCOMPAGNEMENT — 4 étapes */}
      <section
        style={{ backgroundColor: "var(--color-charbon)" }}
        className="px-8 md:px-16 lg:px-24 py-20"
      >
        <span className="label-cat mb-4 block" style={{ color: "var(--color-argile)" }}>De la recherche à la signature</span>
        <h2
          style={{
            fontFamily: "var(--font-prata)",
            fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
            color: "var(--color-ivoire)",
            marginBottom: "3rem",
          }}
        >
          4 étapes pour un achat serein
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          {steps.map(({ num, title, desc }) => (
            <div
              key={num}
              className="flex gap-5 p-6"
              style={{
                backgroundColor: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(201,166,135,0.3)",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-prata)",
                  fontSize: "1.25rem",
                  color: "var(--color-argile)",
                  minWidth: "2.5rem",
                }}
              >
                {num}
              </span>
              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-redhat)",
                    fontWeight: 600,
                    fontSize: "0.9375rem",
                    color: "var(--color-ivoire)",
                    marginBottom: "0.5rem",
                  }}
                >
                  {title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-redhat)",
                    fontSize: "0.875rem",
                    color: "var(--color-sable)",
                    lineHeight: "1.7",
                  }}
                >
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <Link href="/contact" className="btn-primary">
            Prendre contact →
          </Link>
        </div>
      </section>
    </>
  );
}
