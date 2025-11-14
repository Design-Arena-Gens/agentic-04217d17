'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass-effect py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="font-cinzel text-3xl font-bold text-gradient">
          AETERNUM
        </Link>

        <div className="hidden md:flex space-x-8 font-cormorant text-lg">
          <Link href="/" className="hover:text-cosmic-cyan transition-colors">
            Accueil
          </Link>
          <Link href="/collections" className="hover:text-cosmic-cyan transition-colors">
            Collections
          </Link>
          <Link href="/personnalisation" className="hover:text-cosmic-cyan transition-colors">
            Personnalisation
          </Link>
          <Link href="/apropos" className="hover:text-cosmic-cyan transition-colors">
            À Propos
          </Link>
          <Link href="/contact" className="hover:text-cosmic-cyan transition-colors">
            Contact
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <button className="btn-luxury text-xs py-2 px-4">
            BOUTIQUE
          </button>
        </div>
      </div>
    </nav>
  );
}
