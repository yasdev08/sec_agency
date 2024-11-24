"use client";

import Link from "next/link";
import {
  ArrowLeft,
  Shield,
  Users,
  Eye,
  Lock,
  Briefcase,
  Car,
  Scale,
  Bell,
  FileCheck,
} from "lucide-react";
import { animate, motion } from "framer-motion";
import Image from "next/image";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};
const services = [
  {
    icon: Shield,
    title: "Personal Protection",
    description:
      "Tailored security solutions for individuals and families, ensuring peace of mind in any situation.",
    image: "/placeholder.svg?height=400&width=600",
    link: "/services/personal-protection",
  },
  {
    icon: Users,
    title: "Event Security",
    description:
      "Comprehensive security measures for events of all sizes, from corporate gatherings to large-scale festivals.",
    image: "/placeholder.svg?height=400&width=600",
    link: "/services/event-security",
  },
  {
    icon: Eye,
    title: "Surveillance",
    description:
      "State-of-the-art monitoring and surveillance systems to protect your property and assets 24/7.",
    image: "/placeholder.svg?height=400&width=600",
    link: "/services/surveillance",
  },
  {
    icon: Lock,
    title: "Cybersecurity",
    description:
      "Advanced digital protection services to safeguard your sensitive information and online presence.",
    image: "/placeholder.svg?height=400&width=600",
    link: "/services/cybersecurity",
  },
  {
    icon: Bell,
    title: "Alarm Response",
    description:
      "Rapid response teams ready to investigate and address any security alerts at your property.",
    image: "/placeholder.svg?height=400&width=600",
    link: "/services/alarm-response",
  },
  {
    icon: FileCheck,
    title: "Security Consulting",
    description:
      "Expert advice and strategies to enhance your existing security measures and protocols.",
    image: "/placeholder.svg?height=400&width=600",
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
          Our Services
        </motion.h1>

        <motion.p
          className="text-sectext text-xl mb-16 text-center max-w-3xl mx-auto"
          variants={fadeIn}
        >
          At Secure Solutions, we offer a comprehensive range of security
          services designed to meet the diverse needs of our clients. Our team
          of experienced professionals utilizes cutting-edge technology and
          proven methodologies to deliver unparalleled protection and peace of
          mind.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg border-2 shadow-lg overflow-hidden"
              variants={fadeIn}
              whileHover={{ scale: 1.03, borderColor: "#ef4444" }}
              whileTap={{ scale: 0.98 }}
            >
              <Link href={service.link}>
              <div className="relative h-48">
                <Image src={service.image}
                alt={service.title}
                layout="fill"
                objectFit="cover"                
                />
              </div>
              <div>
                <service.icon className="w-12 h-12 mb-4 text-red-500" />
                <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
                <p className="text-sectext">{service.description}</p>
              </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-20 bg-blue-600 text-white rounded-lg p-8 shadow-xl"
          variants={fadeIn}
        >
          <h2 className="text-3xl font-bold mb-4">Need a Customized Solution?</h2>
          <p className="text-lg mb-6">
            Our team of experts is ready to create a tailored security plan that meets your specific needs.
          </p>
          <Link href="/#contact" className="bg-white text-blue-600 px-8 py-2 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-300">
            Contact Us
          </Link>
        </motion.div>

        
      </motion.section>
    </div>
  );
}
