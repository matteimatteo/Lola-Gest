import Link from 'next/link';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero-section">

      {/* Contenu central — prêt pour une vidéo en background plus tard */}
      <div className="hero-content">
        <span className="hero-eyebrow">Naturopathe · Côte d&apos;Opale</span>

        <h1>
          Drainage Lymphatique<br />
          <span className="hero-accent">&amp; Naturopathie</span>
        </h1>

        <p className="hero-subtitle">
          Un accompagnement sur-mesure pour retrouver vitalité et équilibre,
          dans le respect de votre nature profonde.
        </p>

        <div className="hero-buttons">
          <a
            href="https://www.planity.com/lola-gest-naturopathe-62780-cucq"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Prendre RDV
          </a>
          <Link href="#axes" className="btn-secondary">
            Découvrir mes soins
          </Link>
        </div>
      </div>

    </section>
  );
}