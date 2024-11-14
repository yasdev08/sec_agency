import { color, motion } from "framer-motion";
import { Shield, Users, Eye, Scale, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Serv() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 my-6">
        <h2 className="text-3xl font-bold mb-12 text-primtext text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Shield,
              title: "Personal Protection",
              description:
                "Tailored security solutions for individuals and families.",
              link:"/"
            },
            {
              icon: Users,
              title: "Event Security",
              description: "Comprehensive security for events of all sizes.",
              link:"/"
            },
            {
              icon: Eye,
              title: "Surveillance",
              description:
                "State-of-the-art monitoring and surveillance systems.",
                link:"/"
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, borderColor: "#ef4444" }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-bg p-6 rounded-lg border-2  "
            >
              <service.icon className="w-12 h-12 mb-4 text-red-500" />
              <h3 className="text-xl text-primtext font-semibold mb-2">{service.title}</h3>
              <p className="text-sectext">{service.description}</p>
              <Link href={service.link}>
                <p className="text-sm inline-flex text-red-500">
                  Read More <ChevronRight />
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/services"
            className="bg-red-600 text-white px-8 py-3 rounded-full font-semibold text-lg inline-block hover:bg-red-700 transition-colors"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
