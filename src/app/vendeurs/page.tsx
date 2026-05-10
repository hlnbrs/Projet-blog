import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vendre votre bien à Toulouse",
  description:
    "Hélène Barroso vous accompagne pour vendre votre bien à Toulouse avec méthode, exclusivité et lecture experte du dossier acquéreur.",
};

const steps = [
  { num: "01", title: "Estimer", desc: "Une estimation précise, ancrée dans les données réelles du marché toulousain." },
  { num: "02", title: "Valoriser", desc: "Préparation du bien, mise en valeur photographique et rédaction de l'annonce." },
  { num: "03", title: "Diffuser", desc: "Publication unique, stratégique, et partage avec le réseau interagences Axo." },
  { num: "04", title: "Sélectionner", desc: "Je reçois et qualifie chaque acheteur — analyse réelle du dossier bancaire." },
  { num: "05", title: "Sécuriser", desc: "De la promesse à la signature finale, je reste à vos côtés à chaque étape." },
];

const faq = [
  {
    q: "Pourquoi vos honoraires sont-ils à ce niveau ?",
    a: "Mes honoraires reflètent un service complet et personnalisé : estimation, valorisation, diffusion, sélection des acheteurs, suivi administratif jusqu'à la signature. Vous ne payez pas une annonce — vous payez un résultat et une présence à chaque étape.",
  },
  {
    q: "Que se passe-t-il si le bien ne se vend pas ?",
    a: "Nous faisons un point ensemble après 4 à 6 semaines. Je vous présente un bilan des visites, des retours acheteurs et, si nécessaire, une recommandation d'ajustement. La transparence est au cœur de ma méthode.",
  },
  {
    q: "Quelle est la durée du mandat exclusif ?",
    a: "Le mandat exclusif est généralement signé pour 3 mois, renouvelable par accord commun. Cette durée permet de déployer une stratégie de vente cohérente sans précipiter la décision.",
  },
  {
    q: "Puis-je vendre en parallèle par moi-même ?",
    a: "Dans le cadre d'un mandat exclusif, la vente passe par moi. C'est précisément ce qui permet d'envoyer un signal de cohérence fort au marché — et d'éviter la dévalorisation liée à une diffusion multiple.",
  },
];

export default function VendeursPage() {
  return (
    <>
      {/* HERO */}
      <section
        className="relative flex flex-col md:flex-row min-h-[70vh]"
        style={{ backgroundColor: "var(--color-ivoire)" }}
      >
        <div className="flex flex-col justify-center px-8 md:px-16 lg:px-24 py-20 md:w-1/2 lg:w-[55%]">
          <span className="label-cat mb-4">Vendeurs</span>
          <h1
            style={{
              fontFamily: "var(--font-prata)",
              fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
              color: "var(--color-cerisier)",
              lineHeight: "1.15",
              marginBottom: "1.5rem",
            }}
          >
            Vendre votre bien,<br />sans mauvaises surprises.
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
            Vous ne perdez pas de temps. Je sélectionne les acquéreurs avec
            un regard que peu d&apos;agents possèdent — celui d&apos;une ancienne
            chargée d&apos;affaires bancaires.
          </p>
          <Link href="/estimation" className="btn-primary w-fit">
            Demander une estimation personnalisée →
          </Link>
        </div>
        <div className="relative md:w-1/2 lg:w-[45%] min-h-[50vh] md:min-h-full">
          <Image
            src="/images/0007_PORTRAIT_PRO_HELEN10_WEB.jpg"
            alt="Hélène Barroso, agente immobilière Toulouse"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </section>

      {/* EXCLUSIVITÉ */}
      <section
        style={{ backgroundColor: "var(--color-creme)" }}
        className="px-8 md:px-16 lg:px-24 py-20"
      >
        <div className="max-w-3xl">
          <span className="label-cat mb-4 block">Exclusivité</span>
          <h2
            style={{
              fontFamily: "var(--font-prata)",
              fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
              color: "var(--color-charbon)",
              marginBottom: "1.5rem",
            }}
          >
            Pourquoi je ne travaille qu&apos;en exclusivité —<br />
            et ce que ça change pour vous
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Un signal de confiance fort",
                desc: "Un bien présenté par une seule agente envoie un message clair au marché : c'est sérieux. Cela attire les acheteurs motivés.",
              },
              {
                title: "Une diffusion maîtrisée",
                desc: "Je publie une seule fois, de manière cohérente. La multiplication des annonces dévalue un bien — je l'évite pour vous.",
              },
              {
                title: "Le réseau interagences",
                desc: "L'exclusivité me permet de partager avec mes confrères Axo. Vos honoraires ouvrent ce réseau — plus de chances de trouver le bon acheteur.",
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

      {/* MÉTHODE — 5 étapes */}
      <section
        style={{ backgroundColor: "var(--color-ivoire)" }}
        className="px-8 md:px-16 lg:px-24 py-20"
      >
        <span className="label-cat mb-4 block">Ma méthode</span>
        <h2
          style={{
            fontFamily: "var(--font-prata)",
            fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
            color: "var(--color-charbon)",
            marginBottom: "3rem",
          }}
        >
          5 étapes pour une vente réussie
        </h2>
        <div className="flex flex-col gap-0">
          {steps.map(({ num, title, desc }, i) => (
            <div
              key={num}
              className="flex gap-6 py-6"
              style={{
                borderTop: i === 0 ? "1px solid var(--color-sable)" : "none",
                borderBottom: "1px solid var(--color-sable)",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-prata)",
                  fontSize: "1.5rem",
                  color: "var(--color-argile)",
                  minWidth: "3rem",
                }}
              >
                {num}
              </span>
              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-redhat)",
                    fontWeight: 600,
                    fontSize: "1rem",
                    color: "var(--color-charbon)",
                    marginBottom: "0.375rem",
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
            </div>
          ))}
        </div>
      </section>

      {/* LECTURE ACQUÉREUR */}
      <section
        style={{ backgroundColor: "var(--color-charbon)" }}
        className="px-8 md:px-16 lg:px-24 py-20"
      >
        <div className="max-w-2xl mx-auto text-center">
          <h2
            style={{
              fontFamily: "var(--font-prata)",
              fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
              color: "var(--color-ivoire)",
              marginBottom: "1.5rem",
            }}
          >
            Vous ne perdez pas de temps en visites inutiles.
          </h2>
          <p
            style={{
              fontFamily: "var(--font-redhat)",
              fontSize: "1rem",
              color: "var(--color-sable)",
              lineHeight: "1.8",
              marginBottom: "0",
            }}
          >
            Mon expérience bancaire me permet de reconnaître un acquéreur sérieux
            avant même la première visite. J&apos;analyse la composition du dossier,
            l&apos;apport réel, la solidité du projet. Vous ne recevez que des acheteurs
            qualifiés.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section
        style={{ backgroundColor: "var(--color-ivoire)" }}
        className="px-8 md:px-16 lg:px-24 py-20"
      >
        <span className="label-cat mb-4 block">Questions fréquentes</span>
        <h2
          style={{
            fontFamily: "var(--font-prata)",
            fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
            color: "var(--color-charbon)",
            marginBottom: "2.5rem",
          }}
        >
          Ce que vous voulez savoir
        </h2>
        <div className="max-w-3xl flex flex-col gap-0">
          {faq.map(({ q, a }) => (
            <details
              key={q}
              className="group"
              style={{ borderBottom: "1px solid var(--color-sable)" }}
            >
              <summary
                className="flex justify-between items-center py-5 cursor-pointer list-none"
                style={{
                  fontFamily: "var(--font-redhat)",
                  fontWeight: 500,
                  fontSize: "0.9375rem",
                  color: "var(--color-charbon)",
                }}
              >
                {q}
                <span
                  style={{ color: "var(--color-argile)", fontSize: "1.25rem", transition: "transform 0.2s" }}
                  className="group-open:rotate-45 inline-block"
                >
                  +
                </span>
              </summary>
              <p
                className="pb-5"
                style={{
                  fontFamily: "var(--font-redhat)",
                  fontSize: "0.9rem",
                  color: "var(--color-graphite)",
                  lineHeight: "1.8",
                }}
              >
                {a}
              </p>
            </details>
          ))}
        </div>

        <div className="mt-12">
          <Link href="/estimation" className="btn-primary">
            Demander une estimation personnalisée →
          </Link>
        </div>
      </section>
    </>
  );
}
