"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
export default function Serv() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 my-6">
        <h2 className="text-3xl font-bold mb-12 text-primtext text-center">
          Nos Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Sécurité événementielle",
              description:
                "Nos services d'accueil et de sécurité événementielle assurent la tranquillité et le bon déroulement de vos événements, qu'ils soient privés ou publics.",
              link: "/services/securite-evenementielle",
              image: "/assets/agents-securite-evenementielle-paris.jpg",
            },
            {
              title: "Gestion de Foule et Contrôle d’Accès",
              description:
                "Nous offrons des services spécialisés pour gérer les foules et contrôler les accès, garantissant une circulation fluide et sécurisée dans des environnements à forte densité.",
              link: "/services/gestion-de-foule",
              image: "/assets/controle-d'acces.jpg",
            },
            {
              title: "Intervention et rondes avec agents cynophile",
              description:
                "Nos équipes de maîtres-chiens offrent une solution efficace pour la surveillance et la dissuasion. La présence d’un chien bien formé augmente considérablement le niveau de sécurité.",
              link: "/services/maitres-chiens",
              image: "/assets/maitre-chien.jpeg",
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, borderColor: "#ae2829ff" }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-bg p-6 rounded-lg border-2  "
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
                <h3 className="text-xl text-primtext font-semibold mb-2 mt-8">
                  {service.title}
                </h3>
                <p className="text-sectext">{service.description}</p>

                <p className="text-sm inline-flex text-logcol2">
                En savoir plus<ChevronRight />
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/services"
            className="bg-logcol2 text-white px-8 py-3 rounded-full font-semibold text-lg inline-block hover:bg-red-700 transition-colors"
          >
            Plus de Services
          </Link>
        </div>
      </div>
    </section>
  );
}
