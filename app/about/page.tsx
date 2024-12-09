'use client'

import Wcu from '@/components/wcu'
import { motion } from 'framer-motion'
import { Shield, Users, Award, Clock, Check, Eye } from 'lucide-react'
import Image from 'next/image'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const stats = [
  { icon: Shield, value: '100%', label: "Agents certifiés à votre service" },
  { icon: Users, value: '100%', label: 'Engagement envers votre sécurité' },
  { icon: Award, value: '100%', label: 'Satisfaction garantie' },
  { icon: Clock, value: '24/7', label: 'Support Disponible' },
]

/* const teamMembers = [
  { name: 'Houari', role: 'PDG & Fondateur', image: '/assets/person-6.jpg' },
  { name: 'Mehdi B', role: 'Chef des Opérations', image: '/assets/person-6.jpg' },
  { name: 'Manel H', role: 'Chef de la Sécurité', image: '/assets/person-6.jpg' },
] */

const valeurs = [
  "Une équipe qualifiée et dédiée, formée pour répondre aux situations les plus exigeantes.",
  "Une approche transparente et des solutions adaptées à vos besoins spécifiques.",
  "L’utilisation de technologies avancées pour améliorer nos services et garantir une protection optimale.",
  "Nous nous engageons à protéger ce qui compte le plus pour vous, avec rigueur et discrétion.",
]

export default function About() {
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
          A Propos De Nous
        </motion.h1>
        
        <motion.p 
          className="text-xl text-center mb-12 text-gray-600 max-w-3xl mx-auto"
          variants={fadeIn}
        >
          Bienvenue chez Cyno Protection Service, votre partenaire de confiance pour des solutions de sécurité sur mesure. Nous nous engageons à protéger ce qui compte pour vous grâce à une approche proactive, innovante et professionnelle.
        </motion.p>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20"
          variants={fadeIn}
        >
          <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/assets/cps.jpg"
              alt="Secure Solutions Team"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-semibold mb-6 text-gray-800">Notre Mission</h2>
            <p className="text-gray-600 mb-4 text-lg">
            Fournir des services de sécurité fiables, professionnels et innovants, tout en établissant des relations solides et basées sur la confiance avec nos clients.
            </p>
            <p className="text-gray-600 text-lg">
            Nous croyons aux mesures de sécurité proactives, à la formation continue et 
            s'adapter au paysage en constante évolution des menaces potentielles.
            </p>
          </div>

          
        </motion.div>
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-center mb-8 text-gray-800"
          variants={fadeIn}
        >
          Nos Valeurs
        </motion.h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-20">
              {valeurs.map((valeurs, index) => (
                <div key={index} className="flex items-center text-lg">
                  <Check className="w-12 h-12 text-green-500 mr-2" />
                  <span>{valeurs}</span>
                </div>
              ))}
        </div>
        <section className="py-20 bg-bg">
        <div className="container mx-auto px-4 ">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-center mb-20 text-gray-800"
          variants={fadeIn}
        >
          Pourquoi Nous Choisir?
        </motion.h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ml-4">
            {[
              { icon: Shield, title: 'Professionnalisme et Expertise', description: "Notre équipe est composée d'agents expérimentés, issus des forces de l'ordre, de l'armée et de la sécurité privée." },
              { icon: Users, title: 'Solutions Personnalisées', description: "Chaque client est unique. Nous analysons vos besoins spécifiques pour créer un plan de sécurité sur mesure, parfaitement adapté à vos attentes." },
              { icon: Eye, title: 'Technologies de Pointe', description: "Nous intégrons des outils de sécurité avancés, tels que la vidéosurveillance, les systèmes de contrôle d'accès et les logiciels de gestion des risques, pour garantir une sécurité optimale." },
              { icon: Clock, title: 'Disponibilité 24/7', description: "Nous sommes disponibles à tout moment pour répondre à vos besoins. Que ce soit pour une urgence ou une surveillance continue, notre équipe est toujours prête à intervenir." },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start"
              >
                <feature.icon className="w-8 h-8 mr-4 text-logcol2 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primtext">{feature.title}</h3>
                  <p className="text-sectext">{feature.description}</p>
                  
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          variants={fadeIn}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md text-center border-2"
              whileHover={{ scale: 1.05 , borderColor:"#ae2829ff"}}
              whileTap={{ scale: 0.95 }}
              
            >
              <stat.icon className="w-12 h-12 mx-auto mb-4 text-logcol2" />
              <h3 className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

       {/*  <motion.h2 
          className="text-3xl font-semibold text-center mb-12 text-gray-800"
          variants={fadeIn}
        >
          Rencontrez Notre Leadership
        </motion.h2>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
          variants={fadeIn}
        >
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative h-64 mb-4 rounded-md overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </motion.div>
          ))}
        </motion.div> */}
      </motion.section>
    </div>
  )
}