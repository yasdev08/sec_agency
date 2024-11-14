'use client'

import { motion } from 'framer-motion'
import { Shield, Users, Award, Clock } from 'lucide-react'
import Image from 'next/image'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const stats = [
  { icon: Shield, value: '20+', label: 'Years of Experience' },
  { icon: Users, value: '1000+', label: 'Satisfied Clients' },
  { icon: Award, value: '50+', label: 'Industry Awards' },
  { icon: Clock, value: '24/7', label: 'Support Available' },
]

const teamMembers = [
  { name: 'John Doe', role: 'CEO & Founder', image: '/assets/person-6.jpg' },
  { name: 'Jane Smith', role: 'Head of Operations', image: '/assets/person-6.jpg' },
  { name: 'Mike Johnson', role: 'Chief Security Officer', image: '/assets/person-6.jpg' },
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
          About Secure Solutions
        </motion.h1>
        
        <motion.p 
          className="text-xl text-center mb-12 text-gray-600 max-w-3xl mx-auto"
          variants={fadeIn}
        >
          With over two decades of experience, we've been at the forefront of private security, 
          providing unparalleled protection and peace of mind to our clients.
        </motion.p>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20"
          variants={fadeIn}
        >
          <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/assets/portrait-male-security-guard-with-uniforaaam.jpg"
              alt="Secure Solutions Team"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-semibold mb-6 text-gray-800">Our Mission</h2>
            <p className="text-gray-600 mb-4">
              At Secure Solutions, we are committed to providing top-tier security services 
              that go beyond conventional measures. Our mission is to create safer environments 
              for our clients, leveraging cutting-edge technology and expert personnel.
            </p>
            <p className="text-gray-600">
              We believe in proactive security measures, continuous training, and 
              adapting to the ever-evolving landscape of potential threats.
            </p>
          </div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          variants={fadeIn}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md text-center border-2"
              whileHover={{ scale: 1.05 , borderColor:"#ef4444"}}
              whileTap={{ scale: 0.95 }}
              
            >
              <stat.icon className="w-12 h-12 mx-auto mb-4 text-red-500" />
              <h3 className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.h2 
          className="text-3xl font-semibold text-center mb-12 text-gray-800"
          variants={fadeIn}
        >
          Meet Our Leadership
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
        </motion.div>
      </motion.section>
    </div>
  )
}