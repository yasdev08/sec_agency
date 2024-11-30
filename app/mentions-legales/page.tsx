'use client'

import { motion } from 'framer-motion'
import { Shield, Lock, Eye, FileText } from 'lucide-react'
import Link from 'next/link'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const legalSections = [
  {
    title: "Terms of Use",
    icon: FileText,
    content: `By accessing and using the Secure Solutions website, you agree to comply with and be bound by these Terms of Use. You agree not to use the website for any unlawful purpose or in any way that could damage, disable, overburden, or impair our servers or networks. Secure Solutions reserves the right to modify or discontinue any aspect of the website at any time without notice.`
  },
  {
    title: "Privacy Policy",
    icon: Lock,
    content: `Secure Solutions is committed to protecting your privacy. We collect personal information solely for the purpose of providing and improving our services. We do not sell, trade, or otherwise transfer your personally identifiable information to third parties. For more details on how we collect, use, and protect your data, please review our full Privacy Policy.`
  },
  {
    title: "Disclaimer",
    icon: Shield,
    content: `The information provided on this website is for general informational purposes only. While we strive to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose.`
  },
  {
    title: "Copyright Notice",
    icon: Eye,
    content: `All content on this website, including text, graphics, logos, images, and software, is the property of Secure Solutions or its content suppliers and is protected by international copyright laws. The compilation of all content on this site is the exclusive property of Secure Solutions and is protected by international copyright laws.`
  }
]

export default function LegalNoticePage() {
  return (
    <div className="bg-gradient-to-b from-gray-100 to-white min-h-screen">
      <motion.section 
        className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
        initial="initial"
        animate="animate"
        variants={{ animate: { transition: { staggerChildren: 0.1 } } }}
      >
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-center mb-8 text-gray-800"
          variants={fadeIn}
        >
          Legal Notice
        </motion.h1>
        
        <motion.p 
          className="text-xl text-center mb-16 text-gray-600"
          variants={fadeIn}
        >
          Please read this legal notice carefully. It contains important information about your rights and obligations.
        </motion.p>

        {legalSections.map((section, index) => (
          <motion.div 
            key={index}
            className="mb-12"
            variants={fadeIn}
          >
            <div className="flex items-center mb-4">
              <section.icon className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-2xl font-semibold text-gray-800">{section.title}</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">{section.content}</p>
          </motion.div>
        ))}

        <motion.div 
          className="mt-16 bg-blue-600 text-white rounded-lg p-8 shadow-xl"
          variants={fadeIn}
        >
          <h2 className="text-2xl font-bold mb-4">Questions or Concerns?</h2>
          <p className="mb-6">
            If you have any questions or concerns about our legal policies, please don't hesitate to contact us.
          </p>
          <Link href="/contact">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-300">
              Contact Us
            </button>
          </Link>
        </motion.div>

        <motion.p 
          className="text-center text-gray-500 mt-16"
          variants={fadeIn}
        >
          Last updated: {new Date().toLocaleDateString()}
        </motion.p>
      </motion.section>
    </div>
  )
}