"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Lock,
  Eye,
  FileText,
  Bold,
  ShieldAlert,
  Cookie,
  FileCode2,
  Fence,
  Ban,
  LinkIcon,
  Scale,
  Mail,
  Plus,
  OctagonAlert,
  BookOpenText,
} from "lucide-react";
import Link from "next/link";
import { title } from "process";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};
const legalSections = [
  {
    title: "Objet",
    icon: FileText,
    content: `Les présentes Conditions Générales d’Utilisation (CGU) ont pour objet de définir les modalités et conditions d’utilisation du site internet cpservice.pro (ci-après dénommé "le Site"). Toute navigation sur le Site implique l’acceptation pleine et entière des présentes CGU.`,
  },
  {
    title: "Accès au Site",
    icon: Lock,
    content: ` Le Site est accessible gratuitement à tout utilisateur disposant d’un accès à Internet. Les frais liés à l’accès au Site (connexion Internet, matériel, etc.) sont à la charge exclusive de l’utilisateur.
Le Site peut être suspendu temporairement pour des raisons de maintenance sans préavis.`,
  },
  {
    title: "Description des services",
    icon: BookOpenText,
    content: `Le Site a pour but de :

Présenter les activités et services de Cyno Protection Service.
Permettre aux utilisateurs de demander des informations via le formulaire de contact.
Les informations fournies sur le Site sont données à titre indicatif. Cyno Protection Service s’efforce de maintenir ces informations à jour, mais ne peut garantir leur exactitude, leur exhaustivité ou leur pertinence à tout moment.`,
  },
  {
    title: "Propriété intellectuelle",
    icon: Eye,
    content: `Tout le contenu du Site (textes, images, logos, vidéos, graphismes, etc.) est la propriété exclusive de Cyno Protection Service ou de ses partenaires, sauf indication contraire.
Toute reproduction, modification, distribution ou exploitation de ces éléments sans autorisation préalable est strictement interdite et constitue une contrefaçon au sens des articles L.335-2 et suivants du Code de la Propriété Intellectuelle.`,
  },
  {
    title: "Utilisation des données personnelles",
    icon: ShieldAlert,
    content: `Conformément à notre politique de confidentialité et au RGPD :

Les données collectées via le formulaire de contact sont utilisées uniquement pour répondre aux demandes des utilisateurs ou pour les recontacter.
Les utilisateurs peuvent exercer leurs droits d'accès, de rectification et de suppression des données en contactant contact@cpservice.pro.
Pour plus d'informations, consultez notre Politique de Confidentialité.`,
  },
  {
    title: "Responsabilité",
    icon: OctagonAlert,
    content: `Cyno Protection Service ne pourra être tenu responsable en cas de :

Dommages directs ou indirects causés au matériel de l’utilisateur lors de l’accès au Site.
Dommages résultant de l’utilisation d’un matériel non compatible ou infecté par un virus.
Pertes résultant de l’interruption du Site, d’une erreur ou d’un dysfonctionnement.
L’utilisateur s’engage à ne pas utiliser le Site à des fins illégales ou contraires aux lois en vigueur.`,
  },
  {
    title: "Liens hypertextes",
    icon: LinkIcon,
    content: `Le Site peut contenir des liens vers d’autres sites internet. Cyno Protection Service ne saurait être tenu responsable du contenu de ces sites externes, leur utilisation étant soumise à leurs propres conditions.`,
  },
  {
    title: "Modification des CGU",
    icon: Plus,
    content: `Les présentes CGU peuvent être modifiées à tout moment. Les utilisateurs sont invités à les consulter régulièrement pour être informés des éventuels changements.`,
  },
  {
    title: "Loi applicable et juridiction compétente",
    icon: Scale,
    content: `Les présentes CGU sont régies par la loi française. En cas de litige, et à défaut de résolution amiable, les tribunaux compétents seront ceux dépendant du siège social de Cyno Protection Service.`,
  },
  {
    title: "Contact",
    icon: Mail,
    content: `Pour toute question ou réclamation concernant les présentes CGU, vous pouvez contacter :
Email : contact@cpservice.pro
Adresse postale : 107 B Rue Henri Barbusse, 93300 Aubervilliers, France`,
  },
];

export default function CguPage() {
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
          Conditions Générales d'Utilisation (CGU)
        </motion.h1>

        <motion.p
          className="text-xl text-center mb-16 text-gray-600"
          variants={fadeIn}
        >
          Veuillez lire attentivement les conditions générales d'utilisation.
          Elle contient des informations importantes sur vos droits et
          obligations.
        </motion.p>

        {legalSections.map((section, index) => (
          <motion.div key={index} className="mb-12" variants={fadeIn}>
            <div className="flex items-center mb-4">
              <section.icon className="w-8 h-8 text-logcol1 mr-3" />
              <h2 className="text-2xl font-semibold text-gray-800">
                {section.title}
              </h2>
            </div>
            <p className="text-gray-600 leading-relaxed">{section.content}</p>
          </motion.div>
        ))}

        <motion.div
          className="mt-16 bg-logcol1 text-white rounded-lg p-8 shadow-xl"
          variants={fadeIn}
        >
          <h2 className="text-2xl font-bold mb-4">Des questions ou des préoccupations ?</h2>
          <p className="mb-6">
          Si vous avez des questions ou des préoccupations concernant nos politiques juridiques, n'hésitez pas à nous contacter.
          </p>
          <Link href="/#contact">
            <button className="bg-white text-logcol1 px-6 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-300">
              Contactez nous
            </button>
          </Link>
        </motion.div>

        <motion.p className="text-center text-gray-500 mt-16" variants={fadeIn}>
          Dernière mise à jour: {new Date().toLocaleDateString()}
        </motion.p>
      </motion.section>
    </div>
  );
}
