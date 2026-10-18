'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero-section">
      <motion.div 
        className="hero-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <span className="hero-eyebrow">Naturopathe Côte d&apos;Opale</span>
        
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
      </motion.div>
    </section>
  );
}