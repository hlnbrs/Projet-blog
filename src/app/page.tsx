import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hélène Barroso — Agent immobilière à Toulouse",
  description:
    "Hélène Barroso vous accompagne avec écoute et bienveillance pour concrétiser votre projet immobilier à Toulouse. Vente et achat en exclusivité.",
};

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section
        style={{ backgroundColor: "var(--color-ivoire)" }}
        className="relative min-h-[90vh] flex flex-col md:flex-row"
      >
        {/* Texte gauche */}
        <div className="flex flex-col justify-center px-8 md:px-16 lg:px-24 py-20 md:w-1/2 lg:w-[55%]">
          <div className="flex gap-8 mb-10">
            {[
              { icon: "🏠", label: "Achat" },
              { icon: "🔑", label: "Vente" },
              { icon: "🤝", label: "Accompagnement sur-mesure" },
            ].map(({ icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-2">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-xl"
                  style={{ border: "1.5px solid var(--color-argile)" }}
                >
                  {icon}
                </div>
                <span
                  style={{
                    fontFamily: "var(--font-redhat)",
                    fontSize: "0.65rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--color-graphite)",
                    textAlign: "center",
                  }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>

          <h1
            style={{
              fontFamily: "var(--font-prata)",
              fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
              lineHeight: "1.1",
              color: "var(--color-cerisier)",
              marginBottom: "1.5rem",
            }}
          >
            Trouver plus qu&apos;un bien,<br />un lieu de vie.
          </h1>

          <p
            style={{
              fontFamily: "var(--font-redhat)",
              fontSize: "1.0625rem",
              color: "var(--color-graphite)",
              lineHeight: "1.7",
              maxWidth: "440px",
              marginBottom: "2.5rem",
            }}
          >
            Je vous accompagne avec écoute et bienveillance pour concrétiser
            votre projet immobilier à Toulouse et ses alentours.
          </p>

          <Link href="/estimation" className="btn-primary w-fit">
            Demander une estimation personnalisée →
          </Link>
        </div>

        {/* Photo droite */}
        <div className="relative md:w-1/2 lg:w-[45%] min-h-[50vh] md:min-h-full">
          <Image
            src="/images/0013_PORTRAIT_PRO_COUV_WEB.jpg"
            alt="Hélène Barroso, agente immobilière à Toulouse"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </section>

      {/* À PROPOS — 2 colonnes */}
      <section
        style={{ backgroundColor: "var(--color-ivoire)" }}
        className="flex flex-col md:flex-row"
      >
        {/* Texte */}
        <div className="flex flex-col justify-center px-8 md:px-16 lg:px-24 py-20 md:w-1/2">
          <span className="label-cat mb-4">À propos</span>
          <h2
            style={{
              fontFamily: "var(--font-prata)",
              fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
              color: "var(--color-charbon)",
              marginBottom: "1.25rem",
            }}
          >
            Bonjour, je suis Hélène.
          </h2>
          <p
            style={{
              fontFamily: "var(--font-redhat)",
              fontSize: "1rem",
              color: "var(--color-graphite)",
              lineHeight: "1.8",
              marginBottom: "1.5rem",
            }}
          >
            Passionnée par l&apos;immobilier et l&apos;accompagnement humain, j&apos;aide mes
            clients à concrétiser leurs projets de vie en toute sérénité.
            Mon parcours bancaire me permet de regarder chaque transaction
            avec un œil financier que peu d&apos;agents possèdent.
          </p>
          <p
            style={{
              fontFamily: "var(--font-prata)",
              fontSize: "1.1rem",
              color: "var(--color-terra)",
              fontStyle: "italic",
              marginBottom: "1.5rem",
            }}
          >
            Ravie de vous accompagner !
          </p>
          <div className="flex items-center gap-3">
            <span
              style={{
                fontFamily: "var(--font-prata)",
                fontSize: "1.25rem",
                color: "var(--color-cerisier)",
              }}
            >
              HB
            </span>
            <span
              style={{
                fontFamily: "var(--font-redhat)",
                fontSize: "0.6875rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--color-graphite)",
              }}
            >
              Hélène Barroso / Votre agente immobilière
            </span>
          </div>
        </div>

        {/* Photo */}
        <div className="relative md:w-1/2 min-h-[400px]">
          <Image
            src="/images/0001 Helene Barroso agent immobilier.jpg"
            alt="Hélène Barroso, agente immobilière indépendante"
            fill
            className="object-cover object-top"
          />
        </div>
      </section>

      {/* PHILOSOPHIE — 2 colonnes inversées */}
      <section
        style={{ backgroundColor: "var(--color-creme)" }}
        className="flex flex-col md:flex-row-reverse"
      >
        {/* Texte */}
        <div className="flex flex-col justify-center px-8 md:px-16 lg:px-24 py-20 md:w-1/2">
          <span className="label-cat mb-4">Ma philosophie</span>
          <h2
            style={{
              fontFamily: "var(--font-prata)",
              fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
              color: "var(--color-charbon)",
              marginBottom: "1.25rem",
            }}
          >
            L&apos;écoute au cœur<br />de chaque projet.
          </h2>
          <p
            style={{
              fontFamily: "var(--font-redhat)",
              fontSize: "1rem",
              color: "var(--color-graphite)",
              lineHeight: "1.8",
              marginBottom: "2rem",
            }}
          >
            Chaque bien a une histoire. Chaque projet est unique. Mon rôle :
            comprendre vos besoins et vous guider avec bienveillance et
            expertise, de la première conversation à la signature finale.
          </p>

          {/* Badge */}
          <div
            className="inline-flex gap-3 mb-8 flex-wrap"
          >
            {["Conseil", "Confiance", "Sérénité"].map((val) => (
              <span
                key={val}
                style={{
                  fontFamily: "var(--font-redhat)",
                  fontSize: "0.75rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--color-cerisier)",
                  border: "1px solid var(--color-argile)",
                  padding: "0.4rem 1rem",
                  borderRadius: "999px",
                }}
              >
                {val}
              </span>
            ))}
          </div>

          <Link href="/a-propos" className="btn-secondary w-fit">
            En savoir plus →
          </Link>
        </div>

        {/* Photo */}
        <div className="relative md:w-1/2 min-h-[400px]">
          <Image
            src="/images/0002 Conseil Achat Immobilier Toulouse.jpg"
            alt="Hélène Barroso dans un intérieur contemporain"
            fill
            className="object-cover object-center"
          />
        </div>
      </section>

      {/* BLOG — aperçu */}
      <section
        style={{ backgroundColor: "var(--color-ivoire)" }}
        className="px-8 md:px-16 lg:px-24 py-20"
      >
        <span className="label-cat mb-4 block">Conseils immobiliers</span>
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="md:w-1/2">
            <h2
              style={{
                fontFamily: "var(--font-prata)",
                fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                color: "var(--color-charbon)",
                marginBottom: "1.25rem",
              }}
            >
              5 étapes clés pour vendre votre bien
            </h2>
            <ol className="space-y-2 mb-6">
              {["Estimer", "Valoriser", "Diffuser", "Sélectionner", "Sécuriser"].map((step, i) => (
                <li
                  key={step}
                  style={{
                    fontFamily: "var(--font-redhat)",
                    fontSize: "0.9375rem",
                    color: "var(--color-graphite)",
                  }}
                >
                  <span style={{ color: "var(--color-argile)", marginRight: "0.5rem" }}>{i + 1}.</span>
                  {step}
                </li>
              ))}
            </ol>
            <Link href="/blog/5-etapes-vendre-votre-bien" className="btn-secondary w-fit">
              Lire l&apos;article →
            </Link>
          </div>
          <div
            className="md:w-1/2 rounded-sm overflow-hidden"
            style={{
              backgroundColor: "var(--color-creme)",
              padding: "3rem",
              border: "1px solid var(--color-sable)",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-prata)",
                fontSize: "1.1rem",
                color: "var(--color-graphite)",
                fontStyle: "italic",
                lineHeight: "1.7",
              }}
            >
              &ldquo;Une vente réussie commence par une bonne estimation.
              Mais elle se gagne dans les détails : la présentation du bien,
              la sélection des acheteurs, la lecture du dossier.&rdquo;
            </p>
            <p
              className="mt-4"
              style={{
                fontFamily: "var(--font-redhat)",
                fontSize: "0.8125rem",
                color: "var(--color-pierre)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              — Hélène Barroso
            </p>
          </div>
        </div>
      </section>

      {/* CITATION — fond charbon */}
      <section
        style={{ backgroundColor: "var(--color-charbon)" }}
        className="flex flex-col md:flex-row items-center"
      >
        <div className="relative md:w-2/5 min-h-[350px]">
          <Image
            src="/images/0012_PORTRAIT_HELENE2_WEB.jpg"
            alt="Portrait Hélène Barroso noir et blanc"
            fill
            className="object-cover object-top"
          />
        </div>
        <div className="px-8 md:px-16 lg:px-20 py-20 md:w-3/5">
          <span
            style={{
              fontFamily: "var(--font-prata)",
              fontSize: "5rem",
              color: "var(--color-terra)",
              lineHeight: "0.5",
              display: "block",
              marginBottom: "1rem",
            }}
          >
            &ldquo;
          </span>
          <p
            style={{
              fontFamily: "var(--font-prata)",
              fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)",
              color: "var(--color-ivoire)",
              lineHeight: "1.5",
              marginBottom: "1.5rem",
            }}
          >
            La réussite d&apos;un projet immobilier repose sur la confiance,
            la clarté et l&apos;accompagnement.
          </p>
          <p
            style={{
              fontFamily: "var(--font-redhat)",
              fontSize: "0.8125rem",
              color: "var(--color-argile)",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            — Hélène Barroso
          </p>
        </div>
      </section>

      {/* ENGAGEMENT — 3 colonnes */}
      <section
        style={{ backgroundColor: "var(--color-ivoire)" }}
        className="px-8 md:px-16 lg:px-24 py-20 text-center"
      >
        <span className="label-cat mb-4 block">Mon engagement</span>
        <h2
          style={{
            fontFamily: "var(--font-prata)",
            fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
            color: "var(--color-charbon)",
            marginBottom: "3rem",
          }}
        >
          Un accompagnement sur-mesure
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {[
            {
              icon: "📋",
              title: "Estimation offerte",
              desc: "Une estimation précise et détaillée de votre bien, sans engagement.",
            },
            {
              icon: "🎯",
              title: "Stratégie personnalisée",
              desc: "Un plan de vente adapté à vos objectifs et à votre timing.",
            },
            {
              icon: "🤝",
              title: "Suivi de A à Z",
              desc: "Je vous accompagne à chaque étape jusqu'à la signature finale.",
            },
          ].map(({ icon, title, desc }) => (
            <div
              key={title}
              className="flex flex-col items-center gap-4 p-8"
              style={{
                backgroundColor: "var(--color-creme)",
                border: "1px solid var(--color-sable)",
                borderRadius: "2px",
              }}
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center text-2xl"
                style={{ border: "1.5px solid var(--color-argile)" }}
              >
                {icon}
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-redhat)",
                  fontWeight: 500,
                  fontSize: "1rem",
                  color: "var(--color-charbon)",
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
        <Link href="/contact" className="btn-primary">
          Contactez-moi →
        </Link>
      </section>
    </>
  );
}
