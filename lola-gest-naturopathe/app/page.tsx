'use client';

import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Axes from './components/Axes';
import Cabinet from './components/Cabinet';
import Footer from './components/Footer';

export default function Home() {
  useEffect(() => {
    window.history.scrollRestoration = 'manual';
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