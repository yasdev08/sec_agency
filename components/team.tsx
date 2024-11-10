import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"


export default function Team(){
    return(
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: 'John Doe', role: 'Chief Security Officer', image: '/assets/prof_icon.png' },
            { name: 'Jane Smith', role: 'Operations Manager', image: '/assets/prof_icon.png' },
            { name: 'Mike Johnson', role: 'Head of Technology', image: '/assets/prof_icon.png' },
          ].map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-700 rounded-lg overflow-hidden"
            >
              <Image src={member.image} alt={member.name} className="w-full h-64 object-cover" width = {600} height={600}/>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-gray-300">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/about" className="bg-red-600 text-white px-8 py-3 rounded-full font-semibold text-lg inline-block hover:bg-red-700 transition-colors">
            Learn More About Us
          </Link>
        </div>
      </div>
    </section>
    )
}