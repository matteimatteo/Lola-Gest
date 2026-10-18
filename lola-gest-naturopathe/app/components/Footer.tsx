import Image from 'next/image';
import Link from 'next/link';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <Image
            src="/logo.png"
            alt="Logo Lola Gest Naturopathe"
            width={100}
            height={80}
            style={{ objectFit: 'contain' }}
          />
        </div>

        <div className="footer-divider" />

        <nav className="footer-links">
          <a
            href="https://www.planity.com/lola-gest-naturopathe-62780-cucq"
            target="_blank"
            rel="noopener noreferrer"
          >
            Prendre RDV sur Planity
          </a>
          <a
            href="https://www.instagram.com/lola.naturo"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <Link href="/mentions-legales" className="footer-mentions">
            Mentions légales
          </Link>
        </nav>

        <p className="footer-copy">
          © {new Date().getFullYear()} Lola Gest Naturopathe. Tous droits
          réservés.
        </p>
      </div>
    </footer>
  );
}