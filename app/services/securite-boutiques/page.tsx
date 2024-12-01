"use client";

import { motion } from "framer-motion";
import { Shield, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const features = [
  "Surveillance active et dissuasion contre les vols et les intrusions.",
  "Gestion stricte des entrées et sorties pour limiter l'accès non autorisé.",
  "Installation et monitoring de systèmes de vidéosurveillance de haute technologie.",
  "Stratégies efficaces pour réduire les vols internes et externes.",
  "Réponse immédiate aux situations d'urgence pour minimiser les impacts.",
];

export default function secincendie() {
  return (
    <div className="bg-gradient-to-b from-gray-100 to-bg min-h-screen">
      <motion.section
        className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
        initial="initial"
        animate="animate"
        variants={{ animate: { transition: { staggerChildren: 0.1 } } }}
      >
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center mb-8 text-gray-800"
          variants={fadeIn}
        >
          Sécurité Boutiques, Maisons de Luxe et Grandes Surfaces
        </motion.h1>

        <motion.div
          className="flex flex-col md:flex-row items-center justify-between mb-16"
          variants={fadeIn}
        >
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image
              src="/assets/sec-hotel-de-luxe.jpg"
              alt="Personal Protection"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <p className="text-xl mb-6 text-gray-600">
              Nos services de sécurité dédiés aux boutiques, maisons de luxe et
              grandes surfaces offrent une protection optimale pour vos
              produits, vos clients et votre image de marque. Grâce à notre
              expertise et nos solutions avancées, nous assurons un
              environnement sûr et serein, adapté à vos besoins spécifiques.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <Check className="w-8 h-8 text-green-500 mr-2" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn}
          className="bg-white rounded-lg shadow-lg p-8 mb-16"
        >
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Pourquoi choisir nos services de sécurité boutiques ?
          </h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <Shield className="w-6 h-6 text-logcol1 mr-2 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-2">
                  Professionnalisme
                </h3>
                <p className="text-gray-600">
                  Agents formés et habitués à gérer des environnements
                  exigeants.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <Shield className="w-6 h-6 text-logcol1 mr-2 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-2">
                  Approche Personnalisée
                </h3>
                <p className="text-gray-600">
                  Des solutions adaptées à la taille et à la nature de votre
                  commerce.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <Shield className="w-6 h-6 text-logcol1 mr-2 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-2">
                  Technologie de Pointe
                </h3>
                <p className="text-gray-600">
                Systèmes avancés pour maximiser la sécurité de vos locaux.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <Shield className="w-6 h-6 text-logcol1 mr-2 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-2">
                Discrétion et Efficacité
                </h3>
                <p className="text-gray-600">
                Une sécurité visible mais subtile, pour préserver l’expérience client.
                </p>
              </div>
            </li>
          </ul>
        </motion.div>

        <motion.div
          className="bg-logcol1 text-white rounded-lg p-8 shadow-xl text-center"
          variants={fadeIn}
        >
          <h2 className="text-3xl font-bold mb-4">
            Prêt à Améliorer Votre Sécurité Personnelle?
          </h2>
          <p className="text-lg mb-6">
            Contactez-nous dès maintenant pour discuter de vos besoins de
            protection personnelle et recevez un plan de sécurité personnalisé.
          </p>
          <Link
            href="/devis"
            className="bg-white text-logcol1 px-6 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-300"
          >
            Prendez un Devis
          </Link>
        </motion.div>
      </motion.section>
    </div>
  );
}
