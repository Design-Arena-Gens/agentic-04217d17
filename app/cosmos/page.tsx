'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import StarsBackground from '@/components/StarsBackground';
import Navbar from '@/components/Navbar';

export default function Cosmos() {
  const watches = [
    {
      name: 'Cosmos Astronomique',
      price: '385,000 €',
      description: 'Équation du temps, lever/coucher soleil, planétarium',
    },
    {
      name: 'Cosmos Lunar',
      price: '245,000 €',
      description: 'Phases lunaires 3D, âge de la lune, marées',
    },
    {
      name: 'Cosmos Stellarium',
      price: '525,000 €',
      description: 'Carte céleste mobile, tourbillon, quantième sidéral',
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
            <div className="text-8xl mb-6">🌌</div>
            <h1 className="section-title">Collection Cosmos</h1>
            <p className="font-cormorant text-2xl text-gray-300 max-w-3xl mx-auto">
              L'univers au poignet. Des complications astronomiques qui capturent
              l'infini et célèbrent les mystères du cosmos.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="luxury-card mb-20"
          >
            <div className="h-[600px] bg-gradient-to-br from-cosmic-rose via-cosmic-purple to-cosmic-dark rounded-xl flex items-center justify-center">
              <div className="text-center">
                <div className="text-9xl mb-8">⌚</div>
                <p className="font-cinzel text-3xl text-white">Cosmos Astronomique</p>
                <p className="font-cormorant text-xl text-cosmic-rose mt-4">
                  Platine 950 • 44mm • Complications Célestes
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
                L'Horlogerie Céleste
              </h2>
              <p className="font-cormorant text-xl text-gray-300 leading-relaxed mb-6">
                La collection Cosmos représente le summum de la haute horlogerie
                astronomique. Chaque montre est un observatoire miniature qui révèle
                les secrets de l'univers avec une précision extraordinaire.
              </p>
              <p className="font-cormorant text-xl text-gray-300 leading-relaxed">
                Nos horlogers-astronomes ont développé des mécanismes uniques capables
                de reproduire les mouvements célestes avec une exactitude scientifique,
                transformant chaque garde-temps en véritable œuvre d'art cosmique.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="luxury-card"
            >
              <h3 className="font-cinzel text-2xl mb-6 text-gradient">
                Complications Astronomiques
              </h3>
              <ul className="font-cormorant text-lg text-gray-300 space-y-4">
                <li>• Mouvement manufacture ultra-compliqué</li>
                <li>• Calibre AETERNUM C-01</li>
                <li>• Phases lunaires précision 122 ans</li>
                <li>• Carte céleste mobile</li>
                <li>• Équation du temps</li>
                <li>• Lever et coucher du soleil</li>
                <li>• Quantième perpétuel</li>
                <li>• Tourbillon visible</li>
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
                  <div className="h-80 bg-gradient-to-br from-cosmic-rose via-cosmic-purple to-cosmic-dark rounded-xl mb-6 flex items-center justify-center text-8xl">
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
            className="mt-20"
          >
            <div className="luxury-card max-w-4xl mx-auto">
              <h2 className="font-cinzel text-4xl mb-6 text-gradient text-center">
                L'Univers Entre Vos Mains
              </h2>
              <p className="font-cormorant text-xl text-gray-300 mb-8 text-center">
                Nos montres Cosmos sont des pièces d'exception nécessitant plus de
                1000 heures de fabrication. Chaque complication est assemblée et
                réglée à la main par nos maîtres horlogers.
              </p>
              <div className="text-center">
                <Link href="/contact" className="btn-luxury">
                  Prendre Rendez-vous
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
