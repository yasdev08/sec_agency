'use client'

import { useState, useEffect } from 'react'
import { motion,AnimatePresence} from 'framer-motion'
import { Shield, Users, Eye, Clock, Mail, Phone, MapPin } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'



export default function Main() {

  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const images = [
    "/assets/portrait-male-security-guard-with-uniform.jpg",
    "/assets/portrait-male-security-guard-with-uniforaaam.jpg",
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 3000) // Change image every 5 seconds

    return () => clearInterval(timer)
  }, [images.length])

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to a server
    console.log('Form submitted:', { name, email, message })
    // Reset form fields
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    
    <div className="bg-gray-900 text-white min-h-screen">
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <AnimatePresence initial={false}>
          <motion.img
            key={currentImageIndex}
            src={images[currentImageIndex]}
            alt={`Security background ${currentImageIndex + 1}`}
            className="absolute inset-0 w-full h-full object-cover opacity-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          />
        </AnimatePresence>
        <div className="relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-bold mb-4"
          >
            Secure Solutions for a Safer World
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl mb-8"
          >
            Your trusted partner in private security
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-red-600 text-white px-8 py-3 rounded-full font-semibold text-lg"
          >
            Get a Free Consultation
          </motion.button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: 'Personal Protection', description: 'Tailored security solutions for individuals and families.' },
              { icon: Users, title: 'Event Security', description: 'Comprehensive security for events of all sizes.' },
              { icon: Eye, title: 'Surveillance', description: 'State-of-the-art monitoring and surveillance systems.' },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-700 p-6 rounded-lg"
              >
                <service.icon className="w-12 h-12 mb-4 text-red-500" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/services" className="bg-red-600 text-white px-8 py-3 rounded-full font-semibold text-lg inline-block hover:bg-red-700 transition-colors">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
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

      {/* Case Studies Highlight Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Success Stories</h2>
          <p className="text-center text-gray-300 mb-8">
            Discover how we've helped our clients overcome complex security challenges and achieve peace of mind.
          </p>
          <div className="text-center">
            <Link href="/case-studies" className="bg-red-600 text-white px-8 py-3 rounded-full font-semibold text-lg inline-block hover:bg-red-700 transition-colors">
              View Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: 'John Doe', role: 'Chief Security Officer', image: '/assets/person-6.jpg' },
            { name: 'Jane Smith', role: 'Operations Manager', image: '/assets/person-6.jpg' },
            { name: 'Mike Johnson', role: 'Head of Technology', image: '/assets/person-6.jpg' },
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
    

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full px-4 py-2 rounded bg-gray-800 text-white"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-2 rounded bg-gray-800 text-white"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2">Message</label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className="w-full px-4 py-2 rounded bg-gray-800 text-white h-32"
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="bg-red-600 text-white px-6 py-2 rounded font-semibold"
                >
                  Send Message
                </motion.button>
              </form>
            </div>

            <div className='mt-8'>
              <div className="space-y-4 ">
                <div className="flex items-center">
                  <Mail className="w-6 h-6 mr-4 text-red-500" />
                  <span>contact@securesolutions.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-6 h-6 mr-4 text-red-500" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 mr-4 text-red-500" />
                  <span>123 Security St, Nourmandie, Paris 93000</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      
      
    </div>
    
  )
}