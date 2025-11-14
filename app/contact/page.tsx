'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import StarsBackground from '@/components/StarsBackground';
import Navbar from '@/components/Navbar';

export default function Contact() {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    sujet: 'Information',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Merci pour votre message ! Notre équipe vous contactera sous 24h.');
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
            Contact
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="font-cormorant text-2xl text-center text-gray-300 max-w-3xl mx-auto mb-16"
          >
            Notre équipe est à votre disposition pour répondre à toutes vos questions
            et vous accompagner dans votre projet horloger.
          </motion.p>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="luxury-card"
            >
              <h2 className="font-cinzel text-3xl mb-8 text-gradient">
                Envoyez-nous un Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="font-cormorant text-lg text-gray-300 block mb-2">
                      Prénom *
                    </label>
                    <input
                      type="text"
                      name="prenom"
                      required
                      value={formData.prenom}
                      onChange={handleChange}
                      className="w-full py-3 px-4 rounded-lg glass-effect font-cormorant text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cosmic-purple"
                      placeholder="Jean"
                    />
                  </div>

                  <div>
                    <label className="font-cormorant text-lg text-gray-300 block mb-2">
                      Nom *
                    </label>
                    <input
                      type="text"
                      name="nom"
                      required
                      value={formData.nom}
                      onChange={handleChange}
                      className="w-full py-3 px-4 rounded-lg glass-effect font-cormorant text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cosmic-purple"
                      placeholder="Dupont"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-cormorant text-lg text-gray-300 block mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full py-3 px-4 rounded-lg glass-effect font-cormorant text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cosmic-purple"
                    placeholder="jean.dupont@example.com"
                  />
                </div>

                <div>
                  <label className="font-cormorant text-lg text-gray-300 block mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    name="telephone"
                    value={formData.telephone}
                    onChange={handleChange}
                    className="w-full py-3 px-4 rounded-lg glass-effect font-cormorant text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cosmic-purple"
                    placeholder="+33 6 XX XX XX XX"
                  />
                </div>

                <div>
                  <label className="font-cormorant text-lg text-gray-300 block mb-2">
                    Sujet *
                  </label>
                  <select
                    name="sujet"
                    required
                    value={formData.sujet}
                    onChange={handleChange}
                    className="w-full py-3 px-4 rounded-lg glass-effect font-cormorant text-white focus:outline-none focus:ring-2 focus:ring-cosmic-purple"
                  >
                    <option value="Information">Information générale</option>
                    <option value="Achat">Achat d'une montre</option>
                    <option value="Personnalisation">Personnalisation</option>
                    <option value="SAV">Service après-vente</option>
                    <option value="Rendez-vous">Prise de rendez-vous</option>
                  </select>
                </div>

                <div>
                  <label className="font-cormorant text-lg text-gray-300 block mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full py-3 px-4 rounded-lg glass-effect font-cormorant text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cosmic-purple resize-none"
                    placeholder="Décrivez votre projet ou votre demande..."
                  />
                </div>

                <button type="submit" className="btn-luxury w-full text-lg">
                  Envoyer le Message
                </button>

                <p className="font-cormorant text-center text-sm text-gray-400">
                  Réponse sous 24h • Confidentialité garantie
                </p>
              </form>
            </motion.div>

            {/* Contact Information */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="luxury-card"
              >
                <h2 className="font-cinzel text-3xl mb-8 text-gradient">
                  Nos Coordonnées
                </h2>

                <div className="space-y-6">
                  <div>
                    <div className="flex items-center mb-3">
                      <div className="text-3xl mr-4">🏢</div>
                      <h3 className="font-cinzel text-xl text-cosmic-cyan">Siège Social</h3>
                    </div>
                    <p className="font-cormorant text-gray-300 ml-14">
                      Rue de la Paix 1<br />
                      1211 Genève, Suisse
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center mb-3">
                      <div className="text-3xl mr-4">⚙️</div>
                      <h3 className="font-cinzel text-xl text-cosmic-cyan">Manufacture</h3>
                    </div>
                    <p className="font-cormorant text-gray-300 ml-14">
                      Vallée de Joux<br />
                      1347 Le Sentier, Suisse
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center mb-3">
                      <div className="text-3xl mr-4">📞</div>
                      <h3 className="font-cinzel text-xl text-cosmic-cyan">Téléphone</h3>
                    </div>
                    <p className="font-cormorant text-gray-300 ml-14">
                      +41 22 XXX XX XX<br />
                      Lundi - Vendredi : 9h - 18h
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center mb-3">
                      <div className="text-3xl mr-4">✉️</div>
                      <h3 className="font-cinzel text-xl text-cosmic-cyan">Email</h3>
                    </div>
                    <p className="font-cormorant text-gray-300 ml-14">
                      contact@aeternum-watches.ch<br />
                      vip@aeternum-watches.ch
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="luxury-card"
              >
                <h2 className="font-cinzel text-3xl mb-8 text-gradient">
                  Horaires de Visite
                </h2>

                <div className="space-y-4">
                  <div className="glass-effect p-4 rounded-lg">
                    <h3 className="font-cinzel text-lg text-cosmic-purple mb-2">
                      Boutique Genève
                    </h3>
                    <p className="font-cormorant text-gray-300">
                      Lundi - Samedi : 10h - 19h<br />
                      Dimanche : Sur rendez-vous
                    </p>
                  </div>

                  <div className="glass-effect p-4 rounded-lg">
                    <h3 className="font-cinzel text-lg text-cosmic-purple mb-2">
                      Visite Manufacture
                    </h3>
                    <p className="font-cormorant text-gray-300">
                      Sur rendez-vous uniquement<br />
                      Réservation 48h à l'avance
                    </p>
                  </div>

                  <div className="glass-effect p-4 rounded-lg">
                    <h3 className="font-cinzel text-lg text-cosmic-purple mb-2">
                      Consultations Privées
                    </h3>
                    <p className="font-cormorant text-gray-300">
                      7 jours/7 sur rendez-vous<br />
                      Service VIP personnalisé
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="luxury-card text-center"
              >
                <h3 className="font-cinzel text-2xl mb-4 text-gradient">
                  Suivez-nous
                </h3>
                <div className="flex justify-center space-x-6 text-4xl">
                  <a href="#" className="hover:scale-110 transition-transform">📷</a>
                  <a href="#" className="hover:scale-110 transition-transform">📘</a>
                  <a href="#" className="hover:scale-110 transition-transform">🐦</a>
                  <a href="#" className="hover:scale-110 transition-transform">▶️</a>
                </div>
                <p className="font-cormorant text-gray-400 mt-4">
                  @aeternumwatches
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
