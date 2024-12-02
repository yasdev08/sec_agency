"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "/assets/maitre-chien.webp",
    "/assets/cps1.jpg",
    "/assets/secuagent.jpg",
    "/assets/sec-agent.jpg",
    
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      <AnimatePresence initial={false}>
        <motion.img
        srcSet=""
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
          className="text-5xl font-bold mb-4 text-white"
        >
          CpService pour un Monde Plus Sûr
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl mb-8 text-white"
        >
Votre partenaire de confiance en sécurité privée

</motion.p>
        <Link href="/devis">
        <motion.span
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          
          className="bg-logcol2 text-white px-8 py-3 rounded-full font-semibold text-lg"
        >
          Demander un devis
        </motion.span>
        </Link>
      </div>
    </section>
  );
}
