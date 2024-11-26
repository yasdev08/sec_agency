"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};
const services = [
  {
    title: "Sécurité événementielle",
    description:
      "Confiez l'accueil et la sécurité de vos événements à notre équipe expérimentée.",
    image: "/assets/agents-securite-evenementielle-paris.jpg",
    link: "/services/securite-evenementielle",
  },
  {
    title: "Gestion de Foule et Contrôle d’Accès",
    description:
      "Nous offrons des services spécialisés pour gérer les foules et contrôler les accès, garantissant une circulation fluide et sécurisée dans des environnements à forte densité.",
    image: "/assets/controle-d'acces.jpg",
    link: "/",
  },
  {
    title: "Sécurisation des Sites Sensibles, Sièges Sociaux et Chantiers",
    description:
      "Nos services de sécurisation protègent vos sites sensibles, sièges sociaux et chantiers contre les intrusions, vols et actes de vandalisme.",
    image: "/assets/surveillance-incendie-sieges-sociaux.jpg",
    link: "/services/surveillance",
  },
  {
    title: "Maîtres-chiens",
    description:
      "Nos équipes de maîtres-chiens offrent une solution efficace pour la surveillance et la dissuasion. La présence d’un chien bien formé augmente considérablement le niveau de sécurité.",
    image: "/assets/maitre-chien-securite-privee.jpg",
    link: "/",
  },
  {
    title: "Sécurité Incendie",
    description:
      "Nos services de sécurité incendie garantissent la conformité aux réglementations et minimisent les risques liés aux incendies dans vos locaux.",
    image: "/assets/fiche-metier-agent-securite-incendie.jpg",
    link: "/services/alarm-response",
  },
  {
    title: "Sécurité Boutiques, Maisons de Luxe et Grandes Surfaces",
    description:
      "Nos services de sécurité pour boutiques, maisons de luxe et grandes surfaces garantissent la protection de vos produits, clients et votre image, avec des solutions adaptées et efficaces.",
    image: "/assets/sec-hotel-de-luxe.jpg",
    link: "/services/security-consulting",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-gradient-to-b from-gray-100 to-bg min-h-screen">
      <motion.section
        className="container mx-auto px-4 py-12"
        initial="initial"
        animate="animate"
        variants={{ animate: { transition: { staggerChildren: 0.1 } } }}
      >
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-8 text-primtext text-center"
          variants={fadeIn}
        >
          Nos Services
        </motion.h1>

        <motion.p
          className="text-sectext text-xl mb-16 text-center max-w-5xl mx-auto"
          variants={fadeIn}
        >
          Chez Cpservice, nous offrons une gamme complète de services de
          sécurité conçus pour répondre aux divers besoins de nos clients. Notre
          équipe de professionnels expérimentés utilise une technologie de
          pointe et des méthodologies éprouvées pour offrir une protection et
          une tranquillité d'esprit inégalées.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg border-2 shadow-lg overflow-hidden"
              variants={fadeIn}
              whileHover={{ scale: 1.03, borderColor: "#ae2829ff" }}
              whileTap={{ scale: 0.98 }}
            >
              <Link href={service.link}>
                <div className="relative h-72">
                  <Image
                    src={service.image}
                    alt={service.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div>
                  <h2 className="text-xl font-semibold mt-6 mb-2">
                    {service.title}
                  </h2>
                  <p className="text-sectext">{service.description}</p>
                </div>
                <p className="text-sm inline-flex  text-logcol2">
                En savoir plus<ChevronRight />
                </p>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-20 bg-logcol1 text-white rounded-lg p-8 shadow-xl"
          variants={fadeIn}
        >
          <h2 className="text-3xl font-bold mb-4">
            Prêt à Améliorer Votre Sécurité Personnelle?
          </h2>
          <p className="text-lg mb-6">
            Contactez-nous dès maintenant pour discuter de vos besoins de
            protection personnelle et recevez un plan de sécurité personnalisé.{" "}
          </p>
          <Link
            href="/#contact"
            className="bg-white text-logcol1 px-8 py-2 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-300"
          >
            Contactez-nous
          </Link>
        </motion.div>
      </motion.section>
    </div>
  );
}
