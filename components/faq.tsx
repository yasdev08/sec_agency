import Link from "next/link";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
export default function Faq() {

    const [openFAQ, setOpenFAQ] = useState<number | null>(null)


  const faqs = [
    {
      question: "What types of security services do you offer?",
      answer:
        "We offer a wide range of security services including personal protection, event security, surveillance, access control, corporate security, and mobile patrols. Our services are tailored to meet the specific needs of individuals, businesses, and organizations.",
    },
    {
      question: "How experienced are your security personnel?",
      answer:
        "Our security personnel are highly trained professionals with diverse backgrounds in law enforcement, military, and private security. Many have over 10 years of experience in the field. We also provide ongoing training to ensure our team stays up-to-date with the latest security practices and technologies.",
    },
    {
      question: "Do you provide 24/7 security services?",
      answer:
        "Yes, we offer round-the-clock security services. Our team is available 24 hours a day, 7 days a week, 365 days a year to respond to your security needs and emergencies.",
    },
    {
      question: "How do you ensure the quality of your security services?",
      answer:
        "We maintain high standards through rigorous hiring processes, continuous training, regular performance evaluations, and client feedback. We also utilize advanced technology and follow industry best practices to ensure the highest quality of service.",
    },
    {
      question: "Can you provide security for special events?",
      answer:
        "Absolutely. We specialize in event security for gatherings of all sizes, from small corporate functions to large public events. Our team will work with you to develop a comprehensive security plan tailored to your event's specific needs.",
    },
    {
      question: "How do I get started with your services?",
      answer:
        "Getting started is easy. Simply contact us through our website or give us a call. We'll schedule a consultation to discuss your security needs, assess your situation, and provide a customized security solution.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }


  return (

<section className="py-20 bg-white text-primtext">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
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