'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './Header.css';

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsVisible(false);
        setIsMobileMenuOpen(false);
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
      
      <button 
        className="mobile-menu-btn"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Menu"
      >
        {isMobileMenuOpen ? '✕' : '☰'}
      </button>

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
          Prendre RDV sur Planity
        </a>
      </div>
    </header>
  );
}