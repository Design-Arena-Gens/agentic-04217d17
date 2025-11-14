'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import StarsBackground from '@/components/StarsBackground';
import Navbar from '@/components/Navbar';

export default function Sport() {
  const watches = [
    {
      name: 'Sport Diver',
      price: '95,000 €',
      description: 'Étanchéité 300m, lunette céramique, chronographe',
    },
    {
      name: 'Sport Chrono',
      price: '115,000 €',
      description: 'Chronographe flyback, tachymètre, titane Grade 5',
    },
    {
      name: 'Sport GMT',
      price: '105,000 €',
      description: 'Double fuseau horaire, réserve de marche 120h',
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
            <div className="text-8xl mb-6">🏔️</div>
            <h1 className="section-title">Collection Sport</h1>
            <p className="font-cormorant text-2xl text-gray-300 max-w-3xl mx-auto">
              Performance et luxe fusionnent. Des montres conçues pour affronter
              les conditions extrêmes sans compromis sur l'élégance.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="luxury-card mb-20"
          >
            <div className="h-[600px] bg-gradient-to-br from-cosmic-cyan to-cosmic-dark rounded-xl flex items-center justify-center">
              <div className="text-center">
                <div className="text-9xl mb-8">⌚</div>
                <p className="font-cinzel text-3xl text-white">Sport Diver</p>
                <p className="font-cormorant text-xl text-cosmic-cyan mt-4">
                  Titane Grade 5 • 44mm • Étanchéité 300m
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
                Technologie Extrême
              </h2>
              <p className="font-cormorant text-xl text-gray-300 leading-relaxed mb-6">
                La collection Sport incarne la fusion parfaite entre haute horlogerie
                et résistance extrême. Chaque montre est conçue pour accompagner les
                aventuriers les plus exigeants, des profondeurs océaniques aux sommets
                alpins.
              </p>
              <p className="font-cormorant text-xl text-gray-300 leading-relaxed">
                Matériaux de pointe, mouvements certifiés chronomètre et design
                ergonomique se conjuguent pour créer des instruments de précision
                inégalés.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="luxury-card"
            >
              <h3 className="font-cinzel text-2xl mb-6 text-gradient">
                Performance Technique
              </h3>
              <ul className="font-cormorant text-lg text-gray-300 space-y-4">
                <li>• Mouvement manufacture chronographe</li>
                <li>• Calibre AETERNUM S-01</li>
                <li>• Certification chronomètre COSC</li>
                <li>• Boîtier titane Grade 5 ou céramique</li>
                <li>• Étanchéité jusqu'à 300 mètres</li>
                <li>• Verre saphir bombé triple traitement</li>
                <li>• Lunette céramique haute résistance</li>
                <li>• Système anti-choc paraflex</li>
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
                  <div className="h-80 bg-gradient-to-br from-cosmic-cyan to-cosmic-dark rounded-xl mb-6 flex items-center justify-center text-8xl">
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
                Personnalisez Votre Sport
              </h2>
              <p className="font-cormorant text-xl text-gray-300 mb-8">
                Adaptez votre montre Sport à vos besoins spécifiques avec notre
                configurateur avancé.
              </p>
              <Link href="/personnalisation" className="btn-luxury">
                Configurateur
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
