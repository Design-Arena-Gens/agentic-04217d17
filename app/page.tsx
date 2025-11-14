'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import StarsBackground from '@/components/StarsBackground';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <main className="relative">
      <StarsBackground />
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative">
        <div className="container mx-auto px-6 text-center z-10">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="font-cinzel text-7xl md:text-9xl mb-6 text-gradient"
          >
            AETERNUM
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="font-cormorant text-2xl md:text-3xl mb-12 text-cosmic-cyan"
          >
            Haute Horlogerie Suisse
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="font-cormorant text-lg md:text-xl mb-12 max-w-3xl mx-auto text-gray-300"
          >
            L'art horloger dans sa forme la plus pure. Des montres d'exception
            créées pour l'éternité, où chaque seconde devient une œuvre d'art cosmique.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="flex gap-6 justify-center"
          >
            <Link href="/collections" className="btn-luxury">
              Découvrir les Collections
            </Link>
            <Link href="/personnalisation" className="btn-luxury">
              Créer votre Montre
            </Link>
          </motion.div>
        </div>

        <div className="scroll-indicator">
          <div className="w-6 h-10 border-2 border-cosmic-purple rounded-full flex justify-center">
            <div className="w-1 h-3 bg-cosmic-cyan rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* Excellence Section */}
      <section className="min-h-screen flex items-center justify-center relative py-20">
        <div className="container mx-auto px-6 z-10">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="section-title"
          >
            Excellence Horlogère
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="luxury-card text-center"
            >
              <div className="text-6xl mb-4">⚙️</div>
              <h3 className="font-cinzel text-2xl mb-4 text-cosmic-purple">Manufacture Suisse</h3>
              <p className="font-cormorant text-gray-300">
                Chaque mouvement est assemblé à la main par nos maîtres horlogers
                dans nos ateliers de Genève.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="luxury-card text-center"
            >
              <div className="text-6xl mb-4">💎</div>
              <h3 className="font-cinzel text-2xl mb-4 text-cosmic-cyan">Matériaux Précieux</h3>
              <p className="font-cormorant text-gray-300">
                Or 18 carats, platine, saphirs et diamants d'exception pour
                des créations uniques.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="luxury-card text-center"
            >
              <div className="text-6xl mb-4">⏱️</div>
              <h3 className="font-cinzel text-2xl mb-4 text-cosmic-rose">Complications Exclusives</h3>
              <p className="font-cormorant text-gray-300">
                Tourbillon, phases lunaires, quantième perpétuel - l'horlogerie
                dans sa forme la plus sophistiquée.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Collections Preview */}
      <section className="min-h-screen flex items-center justify-center relative py-20">
        <div className="container mx-auto px-6 z-10">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="section-title"
          >
            Nos Collections
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 mt-16">
            <Link href="/heritage">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="luxury-card group cursor-pointer"
              >
                <div className="h-80 bg-gradient-to-br from-cosmic-purple to-cosmic-dark rounded-xl mb-6 flex items-center justify-center text-8xl">
                  👑
                </div>
                <h3 className="font-cinzel text-3xl mb-4 text-gradient">Heritage</h3>
                <p className="font-cormorant text-gray-300">
                  L'élégance intemporelle dans sa forme la plus pure. Des montres classiques
                  qui traversent les générations.
                </p>
              </motion.div>
            </Link>

            <Link href="/sport">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="luxury-card group cursor-pointer"
              >
                <div className="h-80 bg-gradient-to-br from-cosmic-cyan to-cosmic-dark rounded-xl mb-6 flex items-center justify-center text-8xl">
                  🏔️
                </div>
                <h3 className="font-cinzel text-3xl mb-4 text-gradient">Sport</h3>
                <p className="font-cormorant text-gray-300">
                  Performance et luxe réunis. Des montres conçues pour les aventuriers
                  qui exigent l'excellence.
                </p>
              </motion.div>
            </Link>

            <Link href="/cosmos">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="luxury-card group cursor-pointer"
              >
                <div className="h-80 bg-gradient-to-br from-cosmic-rose to-cosmic-dark rounded-xl mb-6 flex items-center justify-center text-8xl">
                  🌌
                </div>
                <h3 className="font-cinzel text-3xl mb-4 text-gradient">Cosmos</h3>
                <p className="font-cormorant text-gray-300">
                  Inspiré par l'infini de l'univers. Des complications astronomiques
                  d'une précision extraordinaire.
                </p>
              </motion.div>
            </Link>

            <Link href="/femme">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="luxury-card group cursor-pointer"
              >
                <div className="h-80 bg-gradient-to-br from-cosmic-purple via-cosmic-rose to-cosmic-dark rounded-xl mb-6 flex items-center justify-center text-8xl">
                  ✨
                </div>
                <h3 className="font-cinzel text-3xl mb-4 text-gradient">Femme</h3>
                <p className="font-cormorant text-gray-300">
                  Élégance féminine et sophistication. Des créations joaillières
                  qui célèbrent la beauté éternelle.
                </p>
              </motion.div>
            </Link>
          </div>

          <div className="text-center mt-16">
            <Link href="/collections" className="btn-luxury">
              Voir Toutes les Collections
            </Link>
          </div>
        </div>
      </section>

      {/* Craftsmanship Section */}
      <section className="min-h-screen flex items-center justify-center relative py-20">
        <div className="container mx-auto px-6 z-10">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="section-title"
          >
            Savoir-Faire
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="max-w-4xl mx-auto text-center mt-16"
          >
            <p className="font-cormorant text-2xl text-gray-300 leading-relaxed mb-8">
              Depuis nos ateliers de la Vallée de Joux, nous perpétuons l'excellence
              horlogère suisse. Chaque garde-temps AETERNUM est le fruit de centaines
              d'heures de travail minutieux, alliant tradition ancestrale et innovation
              technique.
            </p>
            <p className="font-cormorant text-xl text-gray-400 leading-relaxed">
              Nos maîtres horlogers, véritables artistes du temps, assemblent à la main
              chaque composant avec une précision absolue. Du polissage des ponts au
              réglage final, chaque étape est réalisée avec une attention maniaque
              au détail.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8 mt-20">
            {['350h', '18K', '100m', '5 ans'].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-6xl font-cinzel mb-4 text-gradient">{stat}</div>
                <p className="font-cormorant text-gray-400">
                  {index === 0 && 'Heures de fabrication'}
                  {index === 1 && 'Or Éthique'}
                  {index === 2 && 'Étanchéité'}
                  {index === 3 && 'Garantie'}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="min-h-screen flex items-center justify-center relative py-20">
        <div className="container mx-auto px-6 z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="font-cinzel text-6xl mb-8 text-gradient">
              Créez Votre Légende
            </h2>
            <p className="font-cormorant text-2xl text-gray-300 mb-12">
              Personnalisez votre montre AETERNUM selon vos désirs. Choisissez les
              matériaux, les complications et les finitions pour créer une pièce unique
              qui vous ressemble.
            </p>
            <Link href="/personnalisation" className="btn-luxury text-lg px-12 py-6">
              Commencer la Personnalisation
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 glass-effect py-12 mt-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <h3 className="font-cinzel text-2xl mb-4 text-gradient">AETERNUM</h3>
              <p className="font-cormorant text-gray-400">
                Haute Horlogerie Suisse depuis l'éternité
              </p>
            </div>
            <div>
              <h4 className="font-cinzel text-lg mb-4">Collections</h4>
              <ul className="font-cormorant text-gray-400 space-y-2">
                <li><Link href="/heritage" className="hover:text-cosmic-cyan">Heritage</Link></li>
                <li><Link href="/sport" className="hover:text-cosmic-cyan">Sport</Link></li>
                <li><Link href="/cosmos" className="hover:text-cosmic-cyan">Cosmos</Link></li>
                <li><Link href="/femme" className="hover:text-cosmic-cyan">Femme</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-cinzel text-lg mb-4">Services</h4>
              <ul className="font-cormorant text-gray-400 space-y-2">
                <li><Link href="/personnalisation" className="hover:text-cosmic-cyan">Personnalisation</Link></li>
                <li><Link href="/contact" className="hover:text-cosmic-cyan">Contact</Link></li>
                <li><Link href="/apropos" className="hover:text-cosmic-cyan">À Propos</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-cinzel text-lg mb-4">Contact</h4>
              <p className="font-cormorant text-gray-400">
                Rue de la Paix 1<br />
                1211 Genève, Suisse<br />
                +41 22 XXX XX XX
              </p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 text-center font-cormorant text-gray-500">
            © 2025 AETERNUM. Tous droits réservés.
          </div>
        </div>
      </footer>
    </main>
  );
}
