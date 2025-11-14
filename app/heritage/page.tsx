'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import StarsBackground from '@/components/StarsBackground';
import Navbar from '@/components/Navbar';

export default function Heritage() {
  const watches = [
    {
      name: 'Heritage Classique',
      price: '85,000 €',
      description: 'Trois aiguilles, date, réserve de marche 72h',
    },
    {
      name: 'Heritage Grand Complication',
      price: '245,000 €',
      description: 'Tourbillon, quantième perpétuel, phases lunaires',
    },
    {
      name: 'Heritage Skeleton',
      price: '165,000 €',
      description: 'Mouvement squelette, finitions Côtes de Genève',
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
            <div className="text-8xl mb-6">👑</div>
            <h1 className="section-title">Collection Heritage</h1>
            <p className="font-cormorant text-2xl text-gray-300 max-w-3xl mx-auto">
              L'essence de l'horlogerie classique suisse. Des montres intemporelles
              qui incarnent l'élégance et la tradition horlogère.
            </p>
          </motion.div>

          {/* Hero Image Area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="luxury-card mb-20"
          >
            <div className="h-[600px] bg-gradient-to-br from-cosmic-purple to-cosmic-dark rounded-xl flex items-center justify-center">
              <div className="text-center">
                <div className="text-9xl mb-8">⌚</div>
                <p className="font-cinzel text-3xl text-white">Heritage Classique</p>
                <p className="font-cormorant text-xl text-cosmic-cyan mt-4">
                  Or Rose 18K • 42mm • Cadran Noir
                </p>
              </div>
            </div>
          </motion.div>

          {/* Description */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-cinzel text-4xl mb-6 text-gradient">
                L'Art Intemporel
              </h2>
              <p className="font-cormorant text-xl text-gray-300 leading-relaxed mb-6">
                La collection Heritage rend hommage aux grands classiques de l'horlogerie
                suisse. Chaque montre est le fruit d'un savoir-faire transmis de génération
                en génération dans nos ateliers de la Vallée de Joux.
              </p>
              <p className="font-cormorant text-xl text-gray-300 leading-relaxed">
                Des lignes épurées, des proportions parfaites et une lisibilité exemplaire
                définissent cette collection destinée aux connaisseurs qui apprécient
                l'élégance discrète et le raffinement absolu.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="luxury-card"
            >
              <h3 className="font-cinzel text-2xl mb-6 text-gradient">
                Caractéristiques Techniques
              </h3>
              <ul className="font-cormorant text-lg text-gray-300 space-y-4">
                <li>• Mouvement manufacture automatique</li>
                <li>• Calibre AETERNUM H-01</li>
                <li>• Réserve de marche 72 heures</li>
                <li>• Fréquence 28,800 alternances/heure</li>
                <li>• Boîtier or 18 carats ou platine 950</li>
                <li>• Étanchéité 30 mètres</li>
                <li>• Verre saphir bombé antireflet</li>
                <li>• Fond transparent saphir</li>
              </ul>
            </motion.div>
          </div>

          {/* Models */}
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
                  <div className="h-80 bg-gradient-to-br from-cosmic-purple to-cosmic-dark rounded-xl mb-6 flex items-center justify-center text-8xl">
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

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mt-20 text-center"
          >
            <div className="luxury-card max-w-4xl mx-auto">
              <h2 className="font-cinzel text-4xl mb-6 text-gradient">
                Créez Votre Heritage Sur Mesure
              </h2>
              <p className="font-cormorant text-xl text-gray-300 mb-8">
                Personnalisez chaque détail de votre montre Heritage pour créer
                une pièce unique qui reflète votre personnalité.
              </p>
              <Link href="/personnalisation" className="btn-luxury">
                Commencer la Personnalisation
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
