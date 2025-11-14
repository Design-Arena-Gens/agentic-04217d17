'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import StarsBackground from '@/components/StarsBackground';
import Navbar from '@/components/Navbar';

export default function Femme() {
  const watches = [
    {
      name: 'Femme Précieuse',
      price: '125,000 €',
      description: 'Or rose, lunette diamants, cadran nacre',
    },
    {
      name: 'Femme Joaillerie',
      price: '285,000 €',
      description: 'Sertissage intégral diamants, or blanc 18K',
    },
    {
      name: 'Femme Élégance',
      price: '95,000 €',
      description: 'Design épuré, or jaune, bracelet milanais',
    },
  ];

  return (
    <main className="relative min-h-screen">
      <StarsBackground />
      <Navbar />

      <div className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <div className="text-8xl mb-6">✨</div>
            <h1 className="section-title">Collection Femme</h1>
            <p className="font-cormorant text-2xl text-gray-300 max-w-3xl mx-auto">
              Élégance et féminité sublimées. Des créations joaillières où
              l'horlogerie rencontre l'art du bijou.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="luxury-card mb-20"
          >
            <div className="h-[600px] bg-gradient-to-br from-cosmic-purple via-cosmic-rose to-cosmic-dark rounded-xl flex items-center justify-center">
              <div className="text-center">
                <div className="text-9xl mb-8">⌚</div>
                <p className="font-cinzel text-3xl text-white">Femme Précieuse</p>
                <p className="font-cormorant text-xl text-cosmic-rose mt-4">
                  Or Rose 18K • 36mm • Diamants
                </p>
              </div>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-cinzel text-4xl mb-6 text-gradient">
                Art Joaillier
              </h2>
              <p className="font-cormorant text-xl text-gray-300 leading-relaxed mb-6">
                La collection Femme célèbre la beauté éternelle à travers des créations
                où l'horlogerie fine rencontre la joaillerie d'exception. Chaque montre
                est une œuvre d'art portée au quotidien.
              </p>
              <p className="font-cormorant text-xl text-gray-300 leading-relaxed">
                Nos artisans joailliers sélectionnent minutieusement chaque pierre
                précieuse pour garantir un éclat incomparable. Les sertissages sont
                réalisés à la main selon les techniques ancestrales.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="luxury-card"
            >
              <h3 className="font-cinzel text-2xl mb-6 text-gradient">
                Excellence Joaillière
              </h3>
              <ul className="font-cormorant text-lg text-gray-300 space-y-4">
                <li>• Mouvement manufacture ultra-plat</li>
                <li>• Calibre AETERNUM F-01</li>
                <li>• Boîtier or 18 carats</li>
                <li>• Diamants certifiés VVS</li>
                <li>• Sertissage grain ou griffes</li>
                <li>• Cadran nacre ou météorite</li>
                <li>• Étanchéité 30 mètres</li>
                <li>• Bracelet interchangeable</li>
              </ul>
            </motion.div>
          </div>

          <div>
            <h2 className="font-cinzel text-4xl text-center mb-12 text-gradient">
              Modèles de la Collection
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {watches.map((watch, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="luxury-card group cursor-pointer"
                >
                  <div className="h-80 bg-gradient-to-br from-cosmic-purple via-cosmic-rose to-cosmic-dark rounded-xl mb-6 flex items-center justify-center text-8xl">
                    ⌚
                  </div>
                  <h3 className="font-cinzel text-2xl mb-3">{watch.name}</h3>
                  <p className="font-cormorant text-gray-300 mb-4">{watch.description}</p>
                  <p className="font-cinzel text-3xl text-gradient mb-6">{watch.price}</p>
                  <button className="btn-luxury w-full">En Savoir Plus</button>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mt-20 text-center"
          >
            <div className="luxury-card max-w-4xl mx-auto">
              <h2 className="font-cinzel text-4xl mb-6 text-gradient">
                Créez Votre Bijou Unique
              </h2>
              <p className="font-cormorant text-xl text-gray-300 mb-8">
                Personnalisez votre montre avec le choix des pierres précieuses,
                des sertissages et des finitions pour une pièce véritablement unique.
              </p>
              <Link href="/personnalisation" className="btn-luxury">
                Personnaliser
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
