import { Shield,Users,Eye,Clock } from "lucide-react"
import { motion } from "framer-motion"


export default function Wcu(){

    return(
    <section className="py-20 bg-bg">
        <div className="container mx-auto px-4 my-6">
          <h2 className="text-3xl text-navtext font-bold mb-20 text-center">Pourquoi Nous Choisir?</h2>
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

      
    )
}