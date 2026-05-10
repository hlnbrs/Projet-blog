import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité — Hélène Barroso",
};

export default function ConfidentialitePage() {
  return (
    <section style={{ backgroundColor: "var(--color-ivoire)" }} className="px-8 md:px-16 lg:px-24 py-20 max-w-3xl">
      <h1 style={{ fontFamily: "var(--font-prata)", fontSize: "2rem", color: "var(--color-cerisier)", marginBottom: "2rem" }}>
        Politique de confidentialité
      </h1>
      <div style={{ fontFamily: "var(--font-redhat)", fontSize: "0.9375rem", color: "var(--color-graphite)", lineHeight: "1.8" }} className="flex flex-col gap-6">
        <p>Ce site collecte uniquement les données que vous transmettez volontairement via les formulaires de contact et d&apos;estimation.</p>
        <div>
          <h2 style={{ fontFamily: "var(--font-redhat)", fontWeight: 600, fontSize: "1rem", color: "var(--color-charbon)", marginBottom: "0.5rem" }}>Données collectées</h2>
          <p>Prénom, nom, adresse email, téléphone, et les informations relatives à votre projet immobilier.</p>
        </div>
        <div>
          <h2 style={{ fontFamily: "var(--font-redhat)", fontWeight: 600, fontSize: "1rem", color: "var(--color-charbon)", marginBottom: "0.5rem" }}>Finalité</h2>
          <p>Ces données sont utilisées exclusivement pour vous recontacter dans le cadre de votre demande. Elles ne sont ni vendues, ni transmises à des tiers.</p>
        </div>
        <div>
          <h2 style={{ fontFamily: "var(--font-redhat)", fontWeight: 600, fontSize: "1rem", color: "var(--color-charbon)", marginBottom: "0.5rem" }}>Vos droits (RGPD)</h2>
          <p>Conformément au Règlement Général sur la Protection des Données, vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression de vos données. Pour exercer ces droits, contactez Hélène Barroso via le formulaire de contact.</p>
        </div>
        <div>
          <h2 style={{ fontFamily: "var(--font-redhat)", fontWeight: 600, fontSize: "1rem", color: "var(--color-charbon)", marginBottom: "0.5rem" }}>Cookies et analytics</h2>
          <p>Ce site utilise Google Analytics 4 pour mesurer l&apos;audience. Les cookies analytiques ne sont déposés qu&apos;après votre consentement explicite via le bandeau RGPD.</p>
        </div>
      </div>
    </section>
  );
}
