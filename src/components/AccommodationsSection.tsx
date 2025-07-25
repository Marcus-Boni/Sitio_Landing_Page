'use client';

import { motion } from 'framer-motion';
import {
  Home,
  Wifi,
  Car,
  Waves,
  ChefHat,
  Gamepad2,
  TreePine,
  Sprout,
  CheckCircle,
} from 'lucide-react';
import React from 'react';

import { useTheme } from '../contexts/ThemeContext';
import { accommodations, amenities } from '../data/siteData';

const AccommodationsSection: React.FC = () => {
  const { isDark } = useTheme();

  const amenityIcons: Record<
    string,
    React.ComponentType<{ size?: number; className?: string }>
  > = {
    '🏊': Waves,
    '🔥': ChefHat,
    '👨‍🍳': ChefHat,
    '📶': Wifi,
    '🚗': Car,
    '🎯': Gamepad2,
    '🥾': TreePine,
    '🌱': Sprout,
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };
  return (
    <section
      id="structure"
      className={`py-20 transition-colors duration-300 ${
        isDark ? 'bg-gradient-to-b from-gray-900 to-gray-800' : 'bg-white'
      }`}
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 ${
              isDark
                ? 'bg-blue-800/50 text-blue-300 border border-blue-700'
                : 'bg-blue-100 text-blue-800'
            }`}
          >
            <Home size={16} />
            Nossa Estrutura
          </motion.div>{' '}
          <h2
            className={`text-4xl md:text-5xl font-bold mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
          >
            Estrutura e{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
              Comodidades
            </span>
          </h2>{' '}
          <p
            className={`text-xl max-w-3xl mx-auto leading-relaxed ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            Desenhado para proporcionar máximo conforto e diversão para toda a
            família. Cada espaço foi pensado para criar momentos especiais e
            memórias inesquecíveis.
          </p>
        </motion.div>{' '}
        {/* Accommodations */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center mb-20"
        >
          {accommodations.map((accommodation, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.02,
                boxShadow: isDark
                  ? '0 20px 40px rgba(0,0,0,0.3)'
                  : '0 20px 40px rgba(0,0,0,0.1)',
              }}
              className={`p-8 rounded-2xl border transition-all duration-300 max-w-2xl w-full ${
                isDark
                  ? 'bg-gray-800 border-gray-700 hover:border-blue-600'
                  : 'bg-gradient-to-br from-blue-50 to-green-50 border-gray-100 hover:border-blue-200'
              }`}
            >
              <div className="text-center mb-6">
                <div className="text-5xl mb-4">{accommodation.icon}</div>
                <h3
                  className={`text-3xl font-bold mb-3 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {accommodation.title}
                </h3>
                <p
                  className={`text-lg leading-relaxed mb-6 ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}
                >
                  {accommodation.description}
                </p>
              </div>

              <div className="space-y-3 mb-6">
                {accommodation.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <CheckCircle
                      size={18}
                      className="text-green-600 flex-shrink-0"
                    />
                    <span
                      className={isDark ? 'text-gray-300' : 'text-gray-700'}
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <div
                  className={`flex items-center justify-center gap-2 font-medium py-3 px-4 rounded-lg ${
                    isDark
                      ? 'text-green-400 bg-green-900/50'
                      : 'text-green-600 bg-green-50'
                  }`}
                >
                  <CheckCircle size={16} />
                  <span>Disponível para reserva</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>{' '}
        {/* Amenities Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          {' '}
          <h3
            className={`text-3xl font-bold mb-4 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
          >
            Comodidades Completas
          </h3>{' '}
          <p
            className={`text-lg max-w-2xl mx-auto ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            Tudo que você precisa para uma estadia perfeita, desde
            entretenimento até conexão com a natureza.
          </p>
        </motion.div>{' '}
        {/* Amenities Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {amenities.map((amenity, index) => {
            const IconComponent = amenityIcons[amenity.icon] || Home;

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow: isDark
                    ? '0 10px 25px rgba(0,0,0,0.3)'
                    : '0 10px 25px rgba(0,0,0,0.1)',
                }}
                className={`p-6 rounded-xl shadow-lg border transition-all duration-300 group ${
                  isDark
                    ? 'bg-gray-800 border-gray-700 hover:border-green-600'
                    : 'bg-white border-gray-100 hover:border-green-200'
                }`}
              >
                <div className="text-center">
                  {' '}
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors ${
                      isDark
                        ? 'bg-green-900/50 group-hover:bg-green-800/70'
                        : 'bg-green-100 group-hover:bg-green-200'
                    }`}
                  >
                    <IconComponent size={24} className="text-green-600" />
                  </div>{' '}
                  <h4
                    className={`font-semibold mb-2 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {amenity.name}
                  </h4>
                  <div className="w-12 h-1 bg-gradient-to-r from-green-600 to-blue-600 rounded-full mx-auto" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-green-600 to-blue-600 p-8 rounded-2xl text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Pronto para sua experiência única?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Reserve agora e garante momentos inesquecíveis em meio à natureza
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
            >
              <Home size={20} />
              Verificar Disponibilidade
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AccommodationsSection;
