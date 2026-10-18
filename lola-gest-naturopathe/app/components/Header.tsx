'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './Header.css';

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  // NOUVEAU : État pour gérer l'ouverture du menu sur mobile
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsVisible(false);
        setIsMobileMenuOpen(false); // Ferme le menu si on scroll vers le bas
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleScrollLink = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    // Ferme le menu mobile après avoir cliqué sur un lien
    setIsMobileMenuOpen(false); 
  };

  return (
    <header className={`header ${isVisible ? '' : 'header--hidden'}`}>
      <div className="logo-container">
        <Image 
          src="/logo.png" 
          alt="Logo Lola Gest Naturopathe" 
          width={70} 
          height={45} 
          style={{ objectFit: 'contain', mixBlendMode: 'darken' }}
        />
      </div>
      
      {/* NOUVEAU : Le bouton Burger visible uniquement sur mobile */}
      <button 
        className="mobile-menu-btn"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Menu"
      >
        {isMobileMenuOpen ? '✕' : '☰'}
      </button>

      {/* On ajoute une classe dynamique si le menu est ouvert */}
      <nav className={`navbar ${isMobileMenuOpen ? 'navbar--open' : ''}`}>
        <ul>
          <li>
            <Link href="#axes" onClick={(e) => handleScrollLink(e, 'axes')}>
              Mes accompagnements
            </Link>
          </li>
          <li>
            <Link href="#cabinet" onClick={(e) => handleScrollLink(e, 'cabinet')}>
              Le Cabinet
            </Link>
          </li>
        </ul>
      </nav>

      <div className="cta-container">
        <a 
          href="https://www.planity.com/lola-gest-naturopathe-62780-cucq" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn-planity"
        >
          Prendre RDV
        </a>
      </div>
    </header>
  );
}