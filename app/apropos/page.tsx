'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import StarsBackground from '@/components/StarsBackground';
import Navbar from '@/components/Navbar';

export default function APropos() {
  const values = [
    {
      icon: '⚙️',
      title: 'Excellence Technique',
      description: 'Chaque montre est le résultat de centaines d\'heures de travail minutieux par nos maîtres horlogers.',
    },
    {
      icon: '💎',
      title: 'Matériaux Nobles',
      description: 'Nous sélectionnons exclusivement des métaux précieux et pierres d\'exception certifiés.',
    },
    {
      icon: '🌍',
      title: 'Éthique & Durabilité',
      description: 'Engagement pour des pratiques responsables et un approvisionnement éthique.',
    },
    {
      icon: '🎨',
      title: 'Design Intemporel',
      description: 'Des créations qui transcendent les modes pour devenir des classiques éternels.',
    },
  ];

  const timeline = [
    { year: '1755', event: 'Fondation fictive de la maison AETERNUM dans la Vallée de Joux' },
    { year: '1888', event: 'Création du premier tourbillon manufacture AETERNUM' },
    { year: '1952', event: 'Lancement de la collection Heritage, icône de la marque' },
    { year: '1985', event: 'Développement des complications astronomiques Cosmos' },
    { year: '2010', event: 'Ouverture du centre d\'excellence horloger à Genève' },
    { year: '2025', event: 'Nouvelle ère avec les éditions limitées ultra-exclusives' },
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
            À Propos
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="font-cormorant text-2xl text-center text-gray-300 max-w-3xl mx-auto mb-16"
          >
            L'histoire d'une passion pour l'excellence horlogère et l'innovation technique
            au service du luxe intemporel.
          </motion.p>

          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="luxury-card mb-20"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="h-96 bg-gradient-to-br from-cosmic-purple via-cosmic-cyan to-cosmic-rose rounded-xl flex items-center justify-center text-9xl">
                ⌚
              </div>
              <div>
                <h2 className="font-cinzel text-4xl mb-6 text-gradient">
                  Notre Vision
                </h2>
                <p className="font-cormorant text-xl text-gray-300 leading-relaxed mb-6">
                  AETERNUM incarne l'excellence de l'horlogerie suisse traditionnelle
                  tout en embrassant l'innovation et la modernité. Depuis la Vallée de Joux,
                  berceau de la haute horlogerie, nous créons des garde-temps d'exception
                  destinés à traverser les générations.
                </p>
                <p className="font-cormorant text-xl text-gray-300 leading-relaxed">
                  Chaque montre AETERNUM est bien plus qu'un simple instrument de mesure
                  du temps : c'est une œuvre d'art mécanique, un témoignage du savoir-faire
                  artisanal et un compagnon pour l'éternité.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Values */}
          <div className="mb-20">
            <h2 className="font-cinzel text-4xl text-center mb-12 text-gradient">
              Nos Valeurs
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="luxury-card text-center"
                >
                  <div className="text-6xl mb-4">{value.icon}</div>
                  <h3 className="font-cinzel text-xl mb-4 text-cosmic-cyan">
                    {value.title}
                  </h3>
                  <p className="font-cormorant text-gray-300">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="luxury-card mb-20"
          >
            <h2 className="font-cinzel text-4xl mb-12 text-gradient text-center">
              Notre Histoire
            </h2>

            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start"
                >
                  <div className="glass-effect px-6 py-3 rounded-full font-cinzel text-2xl text-cosmic-purple mr-6 flex-shrink-0">
                    {item.year}
                  </div>
                  <div className="pt-2">
                    <p className="font-cormorant text-xl text-gray-300">{item.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Craftsmanship */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="luxury-card"
            >
              <h2 className="font-cinzel text-3xl mb-6 text-gradient">
                Savoir-Faire Artisanal
              </h2>
              <p className="font-cormorant text-lg text-gray-300 leading-relaxed mb-4">
                Dans nos ateliers de la Vallée de Joux, nos maîtres horlogers perpétuent
                un savoir-faire ancestral transmis de génération en génération. Chaque
                composant est assemblé, ajusté et décoré à la main avec une précision
                microscopique.
              </p>
              <p className="font-cormorant text-lg text-gray-300 leading-relaxed">
                Le polissage des ponts, le réglage des échappements, la décoration Côtes
                de Genève - chaque étape requiert des années d'apprentissage et une
                maîtrise absolue du geste.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="luxury-card"
            >
              <h2 className="font-cinzel text-3xl mb-6 text-gradient">
                Innovation Technique
              </h2>
              <p className="font-cormorant text-lg text-gray-300 leading-relaxed mb-4">
                Parallèlement à la tradition, nous investissons massivement dans la
                recherche et le développement. Nos ingénieurs horlogers explorent de
                nouveaux matériaux, perfectionnent les complications et repoussent les
                limites de la précision.
              </p>
              <p className="font-cormorant text-lg text-gray-300 leading-relaxed">
                Cette alliance unique entre tradition et innovation fait d'AETERNUM
                une manufacture d'avant-garde respectueuse de son héritage.
              </p>
            </motion.div>
          </div>

          {/* Team Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="luxury-card mb-20 text-center"
          >
            <h2 className="font-cinzel text-4xl mb-8 text-gradient">
              Notre Équipe
            </h2>
            <p className="font-cormorant text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Plus de 250 artisans, horlogers, ingénieurs et designers collaborent
              quotidiennement pour donner vie à nos créations exceptionnelles.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-6xl mb-4">👨‍🔧</div>
                <h3 className="font-cinzel text-2xl text-cosmic-purple mb-2">120+</h3>
                <p className="font-cormorant text-gray-300">Maîtres Horlogers</p>
              </div>
              <div>
                <div className="text-6xl mb-4">🔬</div>
                <h3 className="font-cinzel text-2xl text-cosmic-cyan mb-2">45+</h3>
                <p className="font-cormorant text-gray-300">Ingénieurs R&D</p>
              </div>
              <div>
                <div className="text-6xl mb-4">💎</div>
                <h3 className="font-cinzel text-2xl text-cosmic-rose mb-2">30+</h3>
                <p className="font-cormorant text-gray-300">Artisans Joailliers</p>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <div className="luxury-card max-w-4xl mx-auto">
              <h2 className="font-cinzel text-4xl mb-6 text-gradient">
                Visitez Notre Manufacture
              </h2>
              <p className="font-cormorant text-xl text-gray-300 mb-8">
                Découvrez les coulisses de la création horlogère lors d'une visite
                privée de nos ateliers dans la Vallée de Joux.
              </p>
              <Link href="/contact" className="btn-luxury">
                Réserver une Visite
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
