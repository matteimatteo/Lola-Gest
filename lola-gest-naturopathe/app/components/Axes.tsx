import './Axes.css';

export default function Axes() {
  return (
    <section id="axes" className="axes-section">
      <div className="axes-container">
        <header className="axes-header">
          <span className="axes-eyebrow">Mon accompagnement</span>
          <h2>Trois axes pour<br />retrouver votre équilibre</h2>
          <p className="axes-intro">
            Un espace pensé pour vous accueillir avec bienveillance, prendre le temps
            d&apos;échanger et de vous accompagner vers un mieux-être naturel et durable.
          </p>
        </header>

        <div className="axes-grid">
          {/* Axe 1 : Drainage Renata Franca */}
          <article className="axe-card axe-card--primary">
            <div className="axe-card__number">01</div>
            <div className="axe-card__body">
              <div className="axe-card__icon" style={{ marginBottom: '1.5rem' }}>
                <img 
                  src="/icone1.jpg" 
                  alt="Illustration" 
                  style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '50%' }} 
                />
              </div>
              <h3>
                Drainage Lymphatique<br />
                <span className="axe-card__brand">Méthode Renata Franca<sup>®</sup></span>
              </h3>
              <p>
                Une technique de massage reconnue pour ses mouvements précis, rythmés et dynamiques.
                Elle stimule la circulation de la lymphe, favorise l&apos;élimination des toxines et
                réduit les excès de liquides.
              </p>
              
              {/* AJOUT DU PRIX ICI */}
              <div style={{ marginTop: 'auto', paddingTop: '1rem' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'rgba(255,255,255,0.9)', display: 'block', marginBottom: '0.5rem' }}>
                  À partir de 50 €
                </span>
                <a
                  href="https://www.planity.com/lola-gest-naturopathe-62780-cucq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="axe-card__cta"
                >
                  Prendre RDV
                </a>
              </div>
            </div>
          </article>

          {/* Axe 2 : Naturopathie & Nutrithérapie */}
          <article className="axe-card axe-card--secondary">
            <div className="axe-card__number">02</div>
            <div className="axe-card__body">
              <div className="axe-card__icon" style={{ marginBottom: '1.5rem' }}>
                <img 
                  src="/icone2.jpg" 
                  alt="Illustration" 
                  style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '50%' }} 
                />
              </div>
              <h3>
                Accompagnement<br />
                <span className="axe-card__brand">Naturopathique & Nutrithérapie</span>
              </h3>
              <p>
                Spécialisée en nutrithérapie, je vous propose un bilan de vitalité complet
                pour rééquilibrer votre alimentation, soutenir votre digestion et corriger les carences.
              </p>
              
              {/* AJOUT DU PRIX ICI */}
              <div style={{ marginTop: 'auto', paddingTop: '1rem' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--terracotta)', display: 'block', marginBottom: '0.5rem' }}>
                  À partir de 60 €
                </span>
                <a
                  href="https://www.planity.com/lola-gest-naturopathe-62780-cucq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="axe-card__cta"
                >
                  Prendre RDV
                </a>
              </div>
            </div>
          </article>

          {/* Axe 3 : Bien-être & Méditation */}
          <article className="axe-card axe-card--tertiary">
            <div className="axe-card__number">03</div>
            <div className="axe-card__body">
              <div className="axe-card__icon" style={{ marginBottom: '1.5rem' }}>
                <img 
                  src="/icone3.jpg" 
                  alt="Illustration" 
                  style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '50%' }} 
                />
              </div>
              <h3>
                Gestion du Stress<br />
                <span className="axe-card__brand">& Méditation Guidée</span>
              </h3>
              <p>
                Des outils naturels pour apaiser le système nerveux et retrouver une sérénité
                profonde au quotidien. Séances de relaxation, bols tibétains et méditation guidée.
              </p>
              
              {/* AJOUT DU PRIX ICI */}
              <div style={{ marginTop: 'auto', paddingTop: '1rem' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-dark)', display: 'block', marginBottom: '0.5rem' }}>
                  À partir de 40 €
                </span>
                <a
                  href="https://www.planity.com/lola-gest-naturopathe-62780-cucq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="axe-card__cta"
                >
                  Prendre RDV
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}