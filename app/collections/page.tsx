'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';
import StarsBackground from '@/components/StarsBackground';
import Navbar from '@/components/Navbar';

export default function Collections() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const collections = [
    {
      name: 'Heritage',
      link: '/heritage',
      emoji: '👑',
      description: 'Élégance classique intemporelle',
      color: 'from-cosmic-purple to-cosmic-dark',
    },
    {
      name: 'Sport',
      link: '/sport',
      emoji: '🏔️',
      description: 'Performance et robustesse',
      color: 'from-cosmic-cyan to-cosmic-dark',
    },
    {
      name: 'Cosmos',
      link: '/cosmos',
      emoji: '🌌',
      description: 'Complications astronomiques',
      color: 'from-cosmic-rose to-cosmic-dark',
    },
    {
      name: 'Femme',
      link: '/femme',
      emoji: '✨',
      description: 'Élégance joaillière féminine',
      color: 'from-cosmic-purple via-cosmic-rose to-cosmic-dark',
    },
    {
      name: 'Limited Edition',
      link: '/limited',
      emoji: '💫',
      description: 'Pièces uniques exclusives',
      color: 'from-cosmic-cyan via-cosmic-purple to-cosmic-rose',
    },
  ];

  return (
    <main className="relative min-h-screen">
      <StarsBackground />
      <Navbar />

      <div className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="section-title"
          >
            Collections
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="font-cormorant text-2xl text-center text-gray-300 max-w-3xl mx-auto mb-16"
          >
            Explorez nos univers horlogers exclusifs. Chaque collection incarne
            une vision unique de l'excellence et du luxe.
          </motion.p>

          {/* Horizontal Scroll Section */}
          <div className="relative mb-20">
            <div className="text-center mb-8">
              <p className="font-cormorant text-lg text-cosmic-cyan">← Glissez horizontalement →</p>
            </div>

            <div
              ref={scrollContainerRef}
              className="flex overflow-x-auto space-x-8 pb-8 snap-x snap-mandatory scrollbar-hide"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {collections.map((collection, index) => (
                <Link key={index} href={collection.link}>
                  <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    className="flex-none w-[400px] snap-center"
                  >
                    <div className="luxury-card h-[600px] flex flex-col justify-between">
                      <div
                        className={`h-80 bg-gradient-to-br ${collection.color} rounded-xl mb-6 flex items-center justify-center text-9xl`}
                      >
                        {collection.emoji}
                      </div>
                      <div>
                        <h3 className="font-cinzel text-4xl mb-4 text-gradient">
                          {collection.name}
                        </h3>
                        <p className="font-cormorant text-xl text-gray-300 mb-6">
                          {collection.description}
                        </p>
                        <button className="btn-luxury w-full">Découvrir</button>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>

          {/* Grid View */}
          <div className="mt-32">
            <h2 className="font-cinzel text-4xl text-center mb-16 text-gradient">
              Vue d'Ensemble
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {collections.map((collection, index) => (
                <Link key={index} href={collection.link}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="luxury-card group cursor-pointer"
                  >
                    <div
                      className={`h-64 bg-gradient-to-br ${collection.color} rounded-xl mb-6 flex items-center justify-center text-7xl`}
                    >
                      {collection.emoji}
                    </div>
                    <h3 className="font-cinzel text-2xl mb-3 text-gradient">
                      {collection.name}
                    </h3>
                    <p className="font-cormorant text-gray-300 mb-4">
                      {collection.description}
                    </p>
                    <div className="text-cosmic-cyan font-cormorant group-hover:translate-x-2 transition-transform">
                      Explorer →
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>

          {/* Customization CTA */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mt-32 text-center"
          >
            <div className="luxury-card max-w-4xl mx-auto">
              <h2 className="font-cinzel text-4xl mb-6 text-gradient">
                Créez Votre Montre Unique
              </h2>
              <p className="font-cormorant text-xl text-gray-300 mb-8">
                Aucune collection ne correspond parfaitement à vos désirs ?
                Créez votre propre chef-d'œuvre horloger sur mesure.
              </p>
              <Link href="/personnalisation" className="btn-luxury">
                Configurateur de Montre
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </main>
  );
}
