'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import StarsBackground from '@/components/StarsBackground';
import Navbar from '@/components/Navbar';

export default function Personnalisation() {
  const [config, setConfig] = useState({
    collection: 'Heritage',
    case: 'Or Rose 18K',
    size: '42mm',
    dial: 'Noir Galactique',
    complications: [] as string[],
    strap: 'Cuir Alligator Noir',
    engraving: '',
  });

  const [price, setPrice] = useState(85000);

  const collections = ['Heritage', 'Sport', 'Cosmos', 'Femme'];
  const cases = ['Or Rose 18K', 'Or Jaune 18K', 'Platine 950', 'Titane Grade 5'];
  const sizes = ['38mm', '40mm', '42mm', '44mm'];
  const dials = [
    'Noir Galactique',
    'Bleu Cosmos',
    'Argenté Météorite',
    'Nacre Irisée',
  ];
  const complications = [
    'Tourbillon (+45000€)',
    'Phases Lunaires (+8000€)',
    'Quantième Perpétuel (+25000€)',
    'Chronographe (+12000€)',
    'GMT (+6000€)',
  ];
  const straps = [
    'Cuir Alligator Noir',
    'Cuir Alligator Marron',
    'Bracelet Or',
    'Bracelet Titane',
    'Caoutchouc Premium',
  ];

  const updateConfig = (key: string, value: string) => {
    setConfig({ ...config, [key]: value });
  };

  const toggleComplication = (complication: string) => {
    const newComplications = config.complications.includes(complication)
      ? config.complications.filter((c) => c !== complication)
      : [...config.complications, complication];
    setConfig({ ...config, complications: newComplications });

    // Update price
    const complicationPrices: { [key: string]: number } = {
      'Tourbillon (+45000€)': 45000,
      'Phases Lunaires (+8000€)': 8000,
      'Quantième Perpétuel (+25000€)': 25000,
      'Chronographe (+12000€)': 12000,
      'GMT (+6000€)': 6000,
    };

    const additionalPrice = newComplications.reduce(
      (sum, c) => sum + (complicationPrices[c] || 0),
      0
    );
    setPrice(85000 + additionalPrice);
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
            Personnalisation
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="font-cormorant text-2xl text-center text-gray-300 max-w-3xl mx-auto mb-16"
          >
            Créez la montre de vos rêves. Chaque choix façonne une pièce unique
            qui vous accompagnera pour l'éternité.
          </motion.p>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Configurator */}
            <div className="space-y-8">
              {/* Collection */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="luxury-card"
              >
                <h3 className="font-cinzel text-2xl mb-4 text-gradient">Collection</h3>
                <div className="grid grid-cols-2 gap-4">
                  {collections.map((coll) => (
                    <button
                      key={coll}
                      onClick={() => updateConfig('collection', coll)}
                      className={`py-3 px-4 rounded-lg font-cormorant transition-all ${
                        config.collection === coll
                          ? 'bg-cosmic-purple text-white'
                          : 'glass-effect hover:bg-cosmic-purple/20'
                      }`}
                    >
                      {coll}
                    </button>
                  ))}
                </div>
              </motion.div>

              {/* Case Material */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="luxury-card"
              >
                <h3 className="font-cinzel text-2xl mb-4 text-gradient">Boîtier</h3>
                <div className="space-y-3">
                  {cases.map((caseOption) => (
                    <button
                      key={caseOption}
                      onClick={() => updateConfig('case', caseOption)}
                      className={`w-full py-3 px-4 rounded-lg font-cormorant text-left transition-all ${
                        config.case === caseOption
                          ? 'bg-cosmic-purple text-white'
                          : 'glass-effect hover:bg-cosmic-purple/20'
                      }`}
                    >
                      {caseOption}
                    </button>
                  ))}
                </div>
              </motion.div>

              {/* Size */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="luxury-card"
              >
                <h3 className="font-cinzel text-2xl mb-4 text-gradient">Taille</h3>
                <div className="grid grid-cols-4 gap-4">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => updateConfig('size', size)}
                      className={`py-3 px-4 rounded-lg font-cormorant transition-all ${
                        config.size === size
                          ? 'bg-cosmic-cyan text-black'
                          : 'glass-effect hover:bg-cosmic-cyan/20'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </motion.div>

              {/* Dial */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="luxury-card"
              >
                <h3 className="font-cinzel text-2xl mb-4 text-gradient">Cadran</h3>
                <div className="grid grid-cols-2 gap-4">
                  {dials.map((dial) => (
                    <button
                      key={dial}
                      onClick={() => updateConfig('dial', dial)}
                      className={`py-3 px-4 rounded-lg font-cormorant transition-all ${
                        config.dial === dial
                          ? 'bg-cosmic-cyan text-black'
                          : 'glass-effect hover:bg-cosmic-cyan/20'
                      }`}
                    >
                      {dial}
                    </button>
                  ))}
                </div>
              </motion.div>

              {/* Complications */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="luxury-card"
              >
                <h3 className="font-cinzel text-2xl mb-4 text-gradient">
                  Complications Horlogères
                </h3>
                <div className="space-y-3">
                  {complications.map((comp) => (
                    <button
                      key={comp}
                      onClick={() => toggleComplication(comp)}
                      className={`w-full py-3 px-4 rounded-lg font-cormorant text-left transition-all ${
                        config.complications.includes(comp)
                          ? 'bg-cosmic-rose text-white'
                          : 'glass-effect hover:bg-cosmic-rose/20'
                      }`}
                    >
                      {comp}
                    </button>
                  ))}
                </div>
              </motion.div>

              {/* Strap */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="luxury-card"
              >
                <h3 className="font-cinzel text-2xl mb-4 text-gradient">Bracelet</h3>
                <div className="space-y-3">
                  {straps.map((strap) => (
                    <button
                      key={strap}
                      onClick={() => updateConfig('strap', strap)}
                      className={`w-full py-3 px-4 rounded-lg font-cormorant text-left transition-all ${
                        config.strap === strap
                          ? 'bg-cosmic-purple text-white'
                          : 'glass-effect hover:bg-cosmic-purple/20'
                      }`}
                    >
                      {strap}
                    </button>
                  ))}
                </div>
              </motion.div>

              {/* Engraving */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="luxury-card"
              >
                <h3 className="font-cinzel text-2xl mb-4 text-gradient">
                  Gravure Personnalisée
                </h3>
                <input
                  type="text"
                  value={config.engraving}
                  onChange={(e) => updateConfig('engraving', e.target.value)}
                  placeholder="Votre message (max 30 caractères)"
                  maxLength={30}
                  className="w-full py-3 px-4 rounded-lg glass-effect font-cormorant text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cosmic-purple"
                />
              </motion.div>
            </div>

            {/* Preview & Summary */}
            <div className="space-y-8">
              {/* Watch Preview */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="luxury-card sticky top-32"
              >
                <h3 className="font-cinzel text-2xl mb-6 text-gradient text-center">
                  Votre Création
                </h3>

                {/* Visual representation */}
                <div className="relative h-96 bg-gradient-to-br from-cosmic-purple via-cosmic-dark to-cosmic-cyan rounded-xl mb-8 flex items-center justify-center">
                  <div className="text-9xl">⌚</div>
                  <div className="absolute bottom-4 left-4 right-4 glass-effect p-4 rounded-lg">
                    <p className="font-cinzel text-sm text-cosmic-cyan">
                      {config.collection} • {config.size}
                    </p>
                  </div>
                </div>

                {/* Configuration Summary */}
                <div className="space-y-4 mb-8">
                  <div className="glass-effect p-4 rounded-lg">
                    <p className="font-cormorant text-sm text-gray-400">Collection</p>
                    <p className="font-cinzel text-lg text-white">{config.collection}</p>
                  </div>

                  <div className="glass-effect p-4 rounded-lg">
                    <p className="font-cormorant text-sm text-gray-400">Boîtier</p>
                    <p className="font-cinzel text-lg text-white">
                      {config.case} • {config.size}
                    </p>
                  </div>

                  <div className="glass-effect p-4 rounded-lg">
                    <p className="font-cormorant text-sm text-gray-400">Cadran</p>
                    <p className="font-cinzel text-lg text-white">{config.dial}</p>
                  </div>

                  {config.complications.length > 0 && (
                    <div className="glass-effect p-4 rounded-lg">
                      <p className="font-cormorant text-sm text-gray-400">Complications</p>
                      <ul className="font-cinzel text-sm text-white space-y-1">
                        {config.complications.map((comp) => (
                          <li key={comp}>• {comp.split(' (+')[0]}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="glass-effect p-4 rounded-lg">
                    <p className="font-cormorant text-sm text-gray-400">Bracelet</p>
                    <p className="font-cinzel text-lg text-white">{config.strap}</p>
                  </div>

                  {config.engraving && (
                    <div className="glass-effect p-4 rounded-lg">
                      <p className="font-cormorant text-sm text-gray-400">Gravure</p>
                      <p className="font-cinzel text-lg text-white italic">
                        "{config.engraving}"
                      </p>
                    </div>
                  )}
                </div>

                {/* Price */}
                <div className="glass-effect p-6 rounded-lg mb-6 text-center">
                  <p className="font-cormorant text-sm text-gray-400 mb-2">
                    Prix estimé
                  </p>
                  <p className="font-cinzel text-4xl text-gradient">
                    {price.toLocaleString('fr-FR')} €
                  </p>
                  <p className="font-cormorant text-xs text-gray-500 mt-2">
                    Délai de fabrication : 6-8 mois
                  </p>
                </div>

                {/* CTA */}
                <button className="btn-luxury w-full text-lg">
                  Demander un Devis
                </button>
                <p className="font-cormorant text-center text-sm text-gray-400 mt-4">
                  Un conseiller vous contactera sous 24h
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
