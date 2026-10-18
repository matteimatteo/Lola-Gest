import type { Metadata } from 'next';
import './mentions-legales.css';

export const metadata: Metadata = {
  title: 'Mentions Légales | Lola Gest Naturopathe',
  description: 'Mentions légales du site de Lola Gest, naturopathe à Cucq sur la Côte d\'Opale.',
  robots: { index: false, follow: false },
};

export default function MentionsLegales() {
  return (
    <main className="mentions-page">
      <div className="mentions-container">

        <header className="mentions-header">
          <p className="mentions-eyebrow">Informations légales</p>
          <h1>Mentions Légales</h1>
        </header>

        <section className="mentions-section">
          <h2>1. Éditeur du site</h2>
          <p>
            Le présent site est édité par :<br /><br />
            <strong>Lola Gest</strong><br />
            Naturopathe — Praticienne en Drainage Lymphatique (Méthode Renata França®)<br />
            Cabinet Opale Santé — 216 Rue Émile Grevet, 62780 Cucq<br />
            Contact : <a href="https://www.instagram.com/lola.naturo" target="_blank" rel="noopener noreferrer">@lola.naturo sur Instagram</a>
          </p>
        </section>

        <section className="mentions-section">
          <h2>2. Hébergement</h2>
          <p>
            Ce site est hébergé par :<br /><br />
            <strong>IONOS SARL</strong><br />
            7 Place de la Gare, 57200 Sarreguemines, France<br />
            <a href="https://www.ionos.fr" target="_blank" rel="noopener noreferrer">ionos.fr</a>
          </p>
        </section>

        <section className="mentions-section">
          <h2>3. Propriété intellectuelle</h2>
          <p>
            L&apos;ensemble des contenus présents sur ce site (textes, photographies, logo, design)
            est la propriété exclusive de Lola Gest, sauf mention contraire. Toute reproduction,
            représentation ou diffusion, en tout ou partie, est interdite sans l&apos;autorisation
            écrite préalable de l&apos;auteur.
          </p>
        </section>

        <section className="mentions-section">
          <h2>4. Données personnelles & RGPD</h2>
          <p>
            Ce site ne collecte aucune donnée personnelle directement. La prise de rendez-vous
            est effectuée via la plateforme Planity (
            <a href="https://www.planity.com" target="_blank" rel="noopener noreferrer">planity.com</a>
            ), soumise à ses propres conditions générales et politique de confidentialité.
          </p>
          <p>
            Conformément au Règlement Général sur la Protection des Données (RGPD — Règlement UE
            2016/679) et à la loi Informatique et Libertés du 6 janvier 1978 modifiée, vous
            disposez d&apos;un droit d&apos;accès, de rectification, de suppression et d&apos;opposition
            aux données vous concernant. Pour exercer ce droit, contactez Lola Gest via Instagram
            à l&apos;adresse mentionnée ci-dessus.
          </p>
        </section>

        <section className="mentions-section">
          <h2>5. Cookies</h2>
          <p>
            Ce site n&apos;utilise pas de cookies de traçage ou d&apos;analyse. Aucun outil tiers de
            suivi (Google Analytics, etc.) n&apos;est installé sur ce site.
          </p>
        </section>

        <section className="mentions-section">
          <h2>6. Responsabilité</h2>
          <p>
            Les informations présentées sur ce site ont un caractère général et informatif.
            Elles ne remplacent en aucun cas un avis médical ou une consultation auprès d&apos;un
            professionnel de santé qualifié. La naturopathie est une pratique de bien-être
            complémentaire et ne se substitue pas à la médecine conventionnelle.
          </p>
          <p>
            Lola Gest ne saurait être tenue responsable des dommages directs ou indirects
            résultant de l&apos;utilisation de ce site ou de l&apos;impossibilité d&apos;y accéder.
          </p>
        </section>

        <section className="mentions-section">
          <h2>7. Liens hypertextes</h2>
          <p>
            Ce site peut contenir des liens vers des sites tiers (Instagram, Planity). Lola Gest
            n&apos;est pas responsable du contenu de ces sites externes et ne peut être tenue
            responsable des dommages ou préjudices résultant de leur utilisation.
          </p>
        </section>

        <section className="mentions-section">
          <h2>8. Droit applicable</h2>
          <p>
            Le présent site est soumis au droit français. En cas de litige, les tribunaux
            français seront seuls compétents.
          </p>
        </section>

        <div className="mentions-back">
          <a href="/">← Retour au site</a>
        </div>

      </div>
    </main>
  );
}
