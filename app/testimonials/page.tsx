'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Star, Shield, Users, Eye, Lock, Bell, FileCheck, ChevronDown, ChevronUp, Clock, UserCheck, ShieldCheck } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const testimonials = [
  {
    name: "Jean Dupont",
    company: "Directeur, Événements d’Entreprise",
    image: "/assets/prof_icon.png",
    quote:
      "CPService a joué un rôle crucial dans la sécurisation de nos événements d’entreprise. Leur professionnalisme et leur rigueur sont incomparables.",
    rating: 5,
    service: "Sécurité Événementielle",
  },
  {
    name: "Sophie Martin",
    company: "Propriétaire, Résidences de Luxe",
    image: "/assets/prof_icon.png",
    quote:
      "Les services discrets et efficaces de CPService ont transformé la sécurité de nos résidences haut de gamme. Une équipe de confiance.",
    rating: 5,
    service: "Sécurité pour Maisons de Luxe",
  },
  {
    name: "Michel Laurent",
    company: "Directeur des Opérations, Groupe Industriel",
    image: "/assets/prof_icon.png",
    quote:
      "L’équipe CPService a assuré la sécurité de notre site sensible avec une vigilance exemplaire. Leur réactivité et expertise sont remarquables.",
    rating: 5,
    service: "Sécurisation de Sites Sensibles",
  },
  {
    name: "Camille Rousseau",
    company: "Gestionnaire, Grands Magasins",
    image: "/assets/prof_icon.png",
    quote:
      "La prévention des vols et la surveillance apportées par CPService nous ont permis de travailler sereinement, même en période de forte affluence.",
    rating: 5,
    service: "Sécurité en Grandes Surfaces",
  },
  {
    name: "Alexandre Lefèvre",
    company: "Organisateur, Festivals Culturels",
    image: "/assets/prof_icon.png",
    quote:
      "CPService a géré la foule et contrôlé l'accès à nos événements avec une précision exemplaire. Une équipe expérimentée et professionnelle.",
    rating: 5,
    service: "Gestion de Foule et Contrôle d'Accès",
  },
  {
    name: "Claire Boucher",
    company: "CEO, Agence Immobilière de Luxe",
    image: "/assets/prof_icon.png",
    quote:
      "Les maîtres-chiens de CPService ont su sécuriser nos chantiers avec efficacité. Leur présence rassure nos équipes et nos clients.",
    rating: 5,
    service: "Maîtres-Chiens et Sécurité des Chantiers",
  },
  {
    name: "Paul Durand",
    company: "Responsable, Immeubles de Bureaux",
    image: "/assets/prof_icon.png",
    quote:
      "Avec CPService, la gestion des incendies et des urgences est entre de bonnes mains. Leur formation et leur équipement sont au top.",
    rating: 5,
    service: "Sécurité Incendie",
  },
];


const impactStats = [
  { label: "Clients satisfaits", value: "500+", icon: Users },
  { label: "Incidents de Sécurité Prévenus", value: "1000+", icon: Shield },
  { label: "Années d'Expérience", value: "25+", icon: Clock },
  { label: "Professionnels Sécurité Formés", value: "200+", icon: UserCheck }
]

const serviceIcons = {
  "Sécurisation de Sites Sensibles": Shield,
  "Sécurité Événementielle": Users,
  "Maîtres-Chiens et Sécurité des Chantiers": Eye,
  "Gestion de Foule et Contrôle d'Accès": Lock,
  "Sécurité Incendie": Bell,
  "Sécurité en Grandes Surfaces": FileCheck,
  "Sécurité pour Maisons de Luxe": ShieldCheck
}

export default function TestimonialsPage() {
  const [expandedTestimonial, setExpandedTestimonial] = useState<number | null>(null)

  return (
    <div className="bg-gradient-to-b from-gray-100 to-white min-h-screen">
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
          Témoignages Clients 
        </motion.h1>
        
        <motion.p 
          className="text-xl text-center mb-16 text-gray-600 max-w-3xl mx-auto"
          variants={fadeIn}
        >
          Découvrez les retours d'expérience de nos clients satisfaits, qui nous font confiance pour leur sécurité et leur tranquillité d'esprit.
        </motion.p>

        

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={fadeIn}
        >
          {testimonials.map((testimonial, index) => {
            const ServiceIcon = serviceIcons[testimonial.service as keyof typeof serviceIcons]
            return (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg"
                variants={fadeIn}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center mb-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h2 className="font-semibold text-gray-800">{testimonial.name}</h2>
                    <p className="text-gray-600 text-sm">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4 italic">
                  {expandedTestimonial === index 
                    ? testimonial.quote 
                    : `${testimonial.quote.slice(0, 100)}...`}
                </p>
                <button 
                  onClick={() => setExpandedTestimonial(expandedTestimonial === index ? null : index)}
                  className="text-logcol1 hover:underline mb-4 flex items-center"
                >
                  {expandedTestimonial === index ? (
                    <>Lire moins <ChevronUp className="ml-1 w-4 h-4" /></>
                  ) : (
                    <>En savoir plus <ChevronDown className="ml-1 w-4 h-4" /></>
                  )}
                </button>
                <div className="flex justify-between items-center">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <ServiceIcon className="w-4 h-4 mr-1" />
                    <span className="text-sm">{testimonial.service}</span>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div 
          className="mt-20 bg-logcol1 hover:bg-blue-700 text-white rounded-lg p-8 shadow-xl"
          variants={fadeIn}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Our Impact</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="w-12 h-12 mx-auto mb-4" />
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="mt-20 text-center"
          variants={fadeIn}
        >
          <h2 className="text-3xl font-bold mb-8">Prêt à Découvrir Notre Service?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
          Rejoignez nos clients satisfaits et laissez-nous vous fournir des solutions de sécurité de premier plan adaptées à vos besoins.
          </p>
          <Link href="/#contact" passHref>
            <button className="bg-logcol1 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300">
            Obtenir Un Devis Gratuit
            </button>
          </Link>
        </motion.div>
      </motion.section>
    </div>
  )
}