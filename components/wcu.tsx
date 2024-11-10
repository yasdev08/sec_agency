import { Shield,Users,Eye,Clock } from "lucide-react"
import { motion } from "framer-motion"


export default function Wcu(){

    return(
    <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: Shield, title: 'Expertise', description: 'Over 20 years of experience in the security industry.' },
              { icon: Users, title: 'Trained Professionals', description: 'Our team consists of ex-military and law enforcement experts.' },
              { icon: Eye, title: 'Advanced Technology', description: 'Utilizing cutting-edge security technology and equipment.' },
              { icon: Clock, title: '24/7 Availability', description: 'Round-the-clock service and rapid response times.' },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start"
              >
                <feature.icon className="w-8 h-8 mr-4 text-red-500 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      
    )
}