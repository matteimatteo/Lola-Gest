'use client'; // Indispensable pour utiliser useEffect

import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Axes from './components/Axes';
import Cabinet from './components/Cabinet';
import Footer from './components/Footer';

export default function Home() {
  
  // Ce code s'exécute une seule fois au chargement de la page
  useEffect(() => {
    // Désactive la restauration automatique du navigateur
    window.history.scrollRestoration = 'manual';
    // Remonte tout en haut
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <Header />
      <Hero />
      <Axes />
      <Cabinet />
      <Footer />
    </main>
  );
}