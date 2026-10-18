import './Cabinet.css';
import Image from 'next/image';

export default function Cabinet() {
  return (
    <section id="cabinet" className="cabinet-section">
      <div className="cabinet-container">
        <span className="cabinet-eyebrow">Le Cabinet</span>
        <h2>Venir au Cabinet<br />Opale Santé</h2>

        <div className="cabinet-content">
          
          {/* COLONNE GAUCHE : Photo + Textes */}
          <div className="cabinet-infos">
            
            {/* L'image du bureau ajoutée ici */}
            <div style={{ position: 'relative', width: '100%', height: '220px', marginBottom: '1.5rem', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(44,38,32,0.08)' }}>
              <Image 
                src="/cabinet-bureau.png" 
                alt="Aperçu du cabinet de naturopathie" 
                fill 
                style={{ objectFit: 'cover' }} 
              />
            </div>

            <h3>Pôle Santé – Opale Santé Trépied</h3>
            
            <p className="cabinet-adresse" style={{ marginBottom: '1.5rem' }}>
              216 Rue Emile Grevet<br />
              62780 Cucq – Côte d&apos;Opale
            </p>

            <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
              <div style={{ flex: 1, minWidth: '180px' }}>
                <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', color: 'var(--terracotta)', marginBottom: '0.8rem', letterSpacing: '0.1em' }}>Contact</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.8' }}>
                  <li>📞 07 88 13 67 24</li>
                  <li>✉️ lola.naturo7@gmail.com</li>
                  <li>💳 Espèces / chèques</li>
                </ul>
              </div>

              <div style={{ flex: 1, minWidth: '180px' }}>
                <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', color: 'var(--terracotta)', marginBottom: '0.8rem', letterSpacing: '0.1em' }}>Horaires</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.8' }}>
                  <li><strong>Mar :</strong> 08:30 – 13:00</li>
                  <li><strong>Jeu - Ven :</strong> 08:30 – 20:00</li>
                  <li><strong>Sam :</strong> 13:00 – 14:00</li>
                  <li><strong>Dim :</strong> 08:30 – 14:00</li>
                  <li style={{ opacity: 0.7, marginTop: '0.3rem' }}><em>Fermé Lun & Mer</em></li>
                </ul>
              </div>
            </div>

            <a
              href="https://www.instagram.com/lola.naturo"
              target="_blank"
              rel="noopener noreferrer"
              className="cabinet-instagram"
            >
              Suivez-moi sur Instagram @lola.naturo
            </a>
          </div>

          {/* COLONNE DROITE : La GRANDE Map */}
          <div className="cabinet-map">
            <iframe
              src="https://www.google.com/maps?q=216+Rue+Emile+Grevet+62780+Cucq&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, position: 'absolute', top: 0, left: 0 }}
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title="Localisation du cabinet - 216 Rue Emile Grevet, 62780 Cucq"
            />
          </div>
          
        </div>
      </div>
    </section>
  );
}