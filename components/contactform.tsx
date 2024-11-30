
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import Link from "next/link";
import emailjs from "@emailjs/browser";
 


export default function Contactform() {
  const [from_name, setFrom_name] = useState("");
  const [from_email, setFrom_email] = useState("");
  const [message, setMessage] = useState("");
  const [from_number, setFrom_number] = useState("");
  

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      from_name: from_name,
      from_email: from_email,
      from_number: from_number,
      message: message,
    };

    emailjs
      .send(
        "default_service",
        "template_5bzixp5",
        templateParams,
        "BznnDkit0tmvMkfep"
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          alert("Message sent successfully!");
          // Reset form fields
          setFrom_name("");
          setFrom_number("");
          setFrom_email("");
          setMessage("");
        },
        (error) => {
          console.log("Failed to send message:", error.text);
          alert("Failed to send message, please try again.");
        }
      );
  };
  return (
    <section className="py-20 bg-bg" id="contact">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-navtext text-center">
          Contact Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="from_name" className="block mb-2 text-primtext">
                  Nom Complet
                </label>
                <input
                  type="text"
                  id="from_name"
                  value={from_name}
                  onChange={(e) => setFrom_name(e.target.value)}
                  required
                  placeholder="Veuillez Entrez Votre Nom"
                  className="w-full px-4 py-2 rounded bg-bg text-sectext border-gray-500 border-2"
                />
              </div>
              <div>
                <label
                  htmlFor="from_number"
                  className="block mb-2 text-primtext"
                >
                  Numéro Téléphone
                </label>
                <input
                  type="tel"
                  id="from_number"
                  value={from_number}
                  onChange={(e) => setFrom_number(e.target.value)}
                  required
                  placeholder="Tapez Votre Numéro de Téléphone"
                  className="w-full px-4 py-2 rounded bg-bg text-sectext border-gray-500 border-2"
                />
              </div>
              <div>
                <label
                  htmlFor="from_email"
                  className="block mb-2 text-primtext"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="from_email"
                  value={from_email}
                  onChange={(e) => setFrom_email(e.target.value)}
                  placeholder="Tapez votre E-mail"
                  required
                  className="w-full px-4 py-2 rounded bg-bg text-sectext border-gray-500 border-2"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 text-primtext">
                  Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Taper votre message"
                  required
                  className="w-full px-4 py-2 rounded bg-bg text-sectext h-32 border-gray-500 border-2"
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-logcol2 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-logcol2"
              >
                Envoyer un message
                <Send className="ml-2 -mr-1 h-5 w-5 " aria-hidden="true" />
              </motion.button>
            </form>
          </div>

          <div className="mt-8 text-primtext font-medium">
            <div className="space-y-4 ">
              <div className="flex items-center">
                <Mail className="w-6 h-6 mr-4 text-logcol2" />
                <Link href="mailto:contact@cpservice.pro" legacyBehavior>
                  <a target="_blank" rel="noopener noreferrer">
                    <span>contact@cpservice.pro</span>
                  </a>
                </Link>
              </div>
              <div className="flex items-center">
                <Phone className="w-6 h-6 mr-4 text-logcol2" />
                <Link href="tel:+33623860657" legacyBehavior>
                  <a target="_blank" rel="noopener noreferrer">
                    <span>+33 (623) 860-657</span>
                  </a>
                </Link>
              </div>
              <div className="flex items-center">
                <MapPin className="w-6 h-6 mr-4 text-logcol2" />
                <Link
                  target="_blank"
                  href="https://www.google.com/maps/place/107B+Rue+Henri+Barbusse,+93300+Aubervilliers,+France/@48.9099951,2.3908297,17z/data=!3m1!4b1!4m6!3m5!1s0x47e66c39260a5f1d:0x1e011a53d755f9c7!8m2!3d48.9099951!4d2.3908297!16s%2Fg%2F11c0pyx14b?entry=ttu&g_ep=EgoyMDI0MTEwNi4wIKXMDSoASAFQAw%3D%3D"
                >
                  <span>107B Rue Henri Barbusse 93300 AUBERVILLIERS</span>
                </Link>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
}
