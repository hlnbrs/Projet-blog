import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales — Hélène Barroso",
};

export default function MentionsLegalesPage() {
  return (
    <section style={{ backgroundColor: "var(--color-ivoire)" }} className="px-8 md:px-16 lg:px-24 py-20 max-w-3xl">
      <h1 style={{ fontFamily: "var(--font-prata)", fontSize: "2rem", color: "var(--color-cerisier)", marginBottom: "2rem" }}>
        Mentions légales
      </h1>
      <div style={{ fontFamily: "var(--font-redhat)", fontSize: "0.9375rem", color: "var(--color-graphite)", lineHeight: "1.8" }} className="flex flex-col gap-6">
        <div>
          <h2 style={{ fontFamily: "var(--font-redhat)", fontWeight: 600, fontSize: "1rem", color: "var(--color-charbon)", marginBottom: "0.5rem" }}>Éditeur du site</h2>
          <p>Hélène Barroso — Agent commercial immobilier indépendante<br />
          Réseau Axo l&apos;immobilier actif<br />
          Toulouse, Haute-Garonne (31)<br />
          Instagram : @helene.barroso.immobilier</p>
        </div>
        <div>
          <h2 style={{ fontFamily: "var(--font-redhat)", fontWeight: 600, fontSize: "1rem", color: "var(--color-charbon)", marginBottom: "0.5rem" }}>Hébergement</h2>
          <p>Ce site est hébergé par Vercel Inc., 340 Pine Street Suite 701, San Francisco, CA 94104, États-Unis.</p>
        </div>
        <div>
          <h2 style={{ fontFamily: "var(--font-redhat)", fontWeight: 600, fontSize: "1rem", color: "var(--color-charbon)", marginBottom: "0.5rem" }}>Propriété intellectuelle</h2>
          <p>L&apos;ensemble du contenu de ce site (textes, photos, design) est la propriété exclusive d&apos;Hélène Barroso, sauf mention contraire. Toute reproduction est interdite sans autorisation préalable écrite.</p>
        </div>
        <div>
          <h2 style={{ fontFamily: "var(--font-redhat)", fontWeight: 600, fontSize: "1rem", color: "var(--color-charbon)", marginBottom: "0.5rem" }}>Crédits photos</h2>
          <p>Photos portrait : photographe professionnel (droits cédés à Hélène Barroso).<br />
          Photos Marathon des Sables Jordanie 2024 : avec autorisation. Les photos signées Ian Corless sont exclues du site.</p>
        </div>
      </div>
    </section>
  );
}
