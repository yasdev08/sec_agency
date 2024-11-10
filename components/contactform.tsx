import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import { RWebShare } from "react-web-share";
import WhatsappMsg from "./whatsappMsg";

export default function Contactform() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      name: name,
      email: email,
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
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log("Failed to send message:", error.text);
          alert("Failed to send message, please try again.");
        }
      );
  };
  return (
    <section className="py-20 bg-gray-900" id="contact">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2">
                  Name
                </label>
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
                <label htmlFor="email" className="block mb-2">
                  Email
                </label>
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
                <label htmlFor="message" className="block mb-2">
                  Message
                </label>
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

          <div className="mt-8">
            <div className="space-y-4 ">
              <div className="flex items-center">
                <Mail className="w-6 h-6 mr-4 text-red-500" />
                <Link href="mailto:contact@securesolutions.com" legacyBehavior>
                  <a target="_blank" rel="noopener noreferrer">
                    <span>contact@securesolutions.com</span>
                  </a>
                </Link>
              </div>
              <div className="flex items-center">
                <Phone className="w-6 h-6 mr-4 text-red-500" />
                <Link href="tel:+33623860657" legacyBehavior>
                  <a target="_blank" rel="noopener noreferrer">
                    <span>+33 (623) 860-657</span>
                  </a>
                </Link>
              </div>
              <div className="flex items-center">
                <MapPin className="w-6 h-6 mr-4 text-red-500" />
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
