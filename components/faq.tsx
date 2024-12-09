import Link from "next/link";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
export default function Faq() {

    const [openFAQ, setOpenFAQ] = useState<number | null>(null)


  const faqs = [
    {
      question: "Vos agents sont-ils formés et certifiés ?",
      answer:
        "Oui, tous nos agents sont formés, certifiés et disposent d'une expérience dans les domaines de la sécurité.",
    },
    {
      question: "Proposez-vous des services de sécurité personnalisés ?",
      answer:
        "Absolument. Nous réalisons une analyse approfondie de vos besoins pour créer une solution sur mesure adaptée à votre situation.",
    },
    {
      question: "Êtes-vous disponibles 24/7 ?",
      answer:
        "Oui, notre équipe est disponible à tout moment pour répondre à vos besoins, y compris en urgence.",
    },
    {
      question: "Intervenez-vous dans toute la France ?",
      answer:
        "Oui, nous proposons nos services partout en France, avec une capacité d’intervention rapide.",
    },
    {
      question: "Comment puis-je obtenir un devis ?",
      answer:
        "Vous pouvez nous contacter via notre formulaire en ligne, par e-mail ou par téléphone. Nous vous répondrons rapidement avec une proposition adaptée à vos besoins.",
    },
    {
      question: "Offrez-vous une garantie sur vos services ?",
      answer:
        "Nous nous engageons à fournir un service de qualité avec des résultats mesurables. La satisfaction de nos clients est notre priorité.",
    },
    {
      question: "Travaillez-vous avec des technologies avancées ?",
      answer:
        "Oui, nous utilisons des systèmes de vidéosurveillance, des dispositifs de contrôle d’accès biométriques et d’autres technologies innovantes pour renforcer nos services.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }


  return (

<section className="py-20 bg-white text-primtext">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Questions Fréquentes</h2>
          <div className="max-w-3xl mx-auto">
            {faqs.map((item, index) => (
              <div key={index} className="mb-4 bg-bg rounded-lg">
                <button
                  className="w-full p-4 font-semibold flex justify-between items-center cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openFAQ === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  {item.question}
                  {openFAQ === index ? (
                    <ChevronDown className="w-5 h-5 transform transition-transform duration-200" />
                  ) : (
                    <ChevronRight className="w-5 h-5 transform transition-transform duration-200" />
                  )}
                </button>
                <AnimatePresence>
                  {openFAQ === index && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-4 pt-0 text-sectext">{item.answer}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
  );
}