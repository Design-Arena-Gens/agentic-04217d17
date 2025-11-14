'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import StarsBackground from '@/components/StarsBackground';
import Navbar from '@/components/Navbar';

export default function Limited() {
  const editions = [
    {
      name: 'Nebula Edition',
      pieces: '8 pièces',
      price: '750,000 €',
      description: 'Cadran météorite, tourbillon triple axe, boîtier platine saphir',
    },
    {
      name: 'Supernova Edition',
      pieces: '5 pièces',
      price: '1,250,000 €',
      description: 'Complications grand sonnerie, or éthique, diamants rouges',
    },
    {
      name: 'Aurora Edition',
      pieces: '12 pièces',
      price: '485,000 €',
      description: 'Émail grand feu, quantième perpétuel, phases lunaires 3D',
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
            <div className="text-8xl mb-6">💫</div>
            <h1 className="section-title">Éditions Limitées</h1>
            <p className="font-cormorant text-2xl text-gray-300 max-w-3xl mx-auto">
              L'exclusivité absolue. Des pièces uniques créées en quantité ultra-limitée
              pour les collectionneurs les plus exigeants.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="luxury-card mb-20"
          >
            <div className="h-[600px] bg-gradient-to-br from-cosmic-cyan via-cosmic-purple to-cosmic-rose rounded-xl flex items-center justify-center">
              <div className="text-center">
                <div className="text-9xl mb-8">⌚</div>
                <p className="font-cinzel text-3xl text-white">Nebula Edition</p>
                <p className="font-cormorant text-xl text-cosmic-cyan mt-4">
                  Platine 950 • 45mm • 8/8 Pièces Restantes
                </p>
              </div>
            </div>
          </motion.div>

          <div className="mb-20">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="font-cinzel text-4xl mb-6 text-gradient">
                L'Art de l'Exception
              </h2>
              <p className="font-cormorant text-xl text-gray-300 leading-relaxed mb-6">
                Chaque édition limitée AETERNUM représente le summum absolu de notre
                savoir-faire. Ces créations uniques sont le fruit d'années de recherche
                et de développement, intégrant les complications les plus sophistiquées
                et les matériaux les plus rares.
              </p>
              <p className="font-cormorant text-xl text-gray-300 leading-relaxed">
                Produites en quantité extrêmement restreinte, ces montres sont destinées
                aux collectionneurs avertis qui recherchent l'exclusivité absolue et
                l'excellence horlogère sans compromis.
              </p>
            </motion.div>
          </div>

          <div>
            <h2 className="font-cinzel text-4xl text-center mb-12 text-gradient">
              Collections Actuelles
            </h2>

            <div className="space-y-8">
              {editions.map((edition, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="luxury-card"
                >
                  <div className="grid lg:grid-cols-3 gap-8 items-center">
                    <div className="h-80 bg-gradient-to-br from-cosmic-cyan via-cosmic-purple to-cosmic-rose rounded-xl flex items-center justify-center text-8xl">
                      ⌚
                    </div>
                    <div className="lg:col-span-2">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="font-cinzel text-3xl text-gradient">{edition.name}</h3>
                        <span className="glass-effect px-4 py-2 rounded-full font-cormorant text-cosmic-cyan">
                          {edition.pieces}
                        </span>
                      </div>
                      <p className="font-cormorant text-xl text-gray-300 mb-6">
                        {edition.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <p className="font-cinzel text-4xl text-gradient">{edition.price}</p>
                        <Link href="/contact" className="btn-luxury">
                          Réserver
                        </Link>
                      </div>
                    </div>
                  </div>
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
                Service Privilège
              </h2>
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-5xl mb-4">🎯</div>
                  <h4 className="font-cinzel text-xl mb-2 text-cosmic-cyan">
                    Conseil Exclusif
                  </h4>
                  <p className="font-cormorant text-gray-400">
                    Rendez-vous privé avec nos experts
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-5xl mb-4">🌟</div>
                  <h4 className="font-cinzel text-xl mb-2 text-cosmic-purple">
                    Visite Manufacture
                  </h4>
                  <p className="font-cormorant text-gray-400">
                    Découvrez nos ateliers en Suisse
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-5xl mb-4">🎁</div>
                  <h4 className="font-cinzel text-xl mb-2 text-cosmic-rose">
                    Coffret Prestige
                  </h4>
                  <p className="font-cormorant text-gray-400">
                    Écrin sur mesure et certificat
                  </p>
                </div>
              </div>
              <div className="text-center">
                <Link href="/contact" className="btn-luxury">
                  Prendre Rendez-vous
                </Link>
                <p className="font-cormorant text-gray-400 mt-4">
                  Réponse sous 24h • Confidentialité garantie
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
