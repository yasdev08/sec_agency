"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Eye, FileText, Bold, ShieldAlert, Cookie, FileCode2, Fence, Ban } from "lucide-react";
import Link from "next/link";
import { title } from "process";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};
const legalSections = [
  {
    title: "Identification de l’entreprise",
    icon: FileText,
    content: (
      <>
        <b>Nom commercial</b> : Cyno Protection Service <br />
        <b>Forme juridique </b>: SASU (Société par actions simplifiée à associé
        unique)
        <br />
        <b>Capital social</b> : 1 000 € <br />
        <b>Siège social </b>: 107 B Rue Henri Barbusse, 93300 Aubervilliers,
        France
        <br />
        <b>Numéro SIRET </b>: 898 652 912 00020
        <br />
        <b>Numéro SIREN </b>: 898 652 912
        <br />
        <b>Numéro RCS </b>: Bobigny B 898 652 912
        <br />
        <b>Code NAF/APE </b>: 8010Z (Activités de sécurité privée)
        <br />
        <b>Numéro de TVA Intracommunautaire </b>: FR15898652912
      </>
    ),
  },
  {
    title: "Autorisation Administrative CNAPS",
    icon: Lock,
    content: (
      <>
        <b>Numéro d'autorisation CNAPS</b> :{" "}
        <span className="font-semibold">AUT-093-2123-10-07-20240952904</span>{" "}
        <br /> Conformément à l'article 8, l'autorisation administrative
        préalable ne confère aucun caractère officiel à l'entreprise et n'engage
        en aucune manière la responsabilité des pouvoirs publics.
      </>
    ),
  },
  {
    title: "Hébergement du site internet",
    icon: FileCode2,
    content: (
      <>
        <b>Hébergeur </b>:  Vercel
        <br />
        <b>Adresse </b>: États-Unis
        <br />
        <b>Contact </b>: <a href="https://vercel.com/contact" rel="noreferrer" target="_blank"><b>www.vercel.com/contact</b></a>
      </>
    ),
  },
  {
    title: "Responsable de la publication",
    icon: Eye,
    content: (
      <>
        <b>Responsable légal</b> : Cyno Protection Service<br/>
        <b>Contact </b>: contact@cpservice.pro
      </>
    ),
  },
  {
    title: "Protection des données personnelles (RGPD)",
    icon: ShieldAlert,
    content: (<>
    
    <b>Données collectées </b>: <br/>
Les données personnelles collectées via le formulaire de contact (nom, prénom, numéro de téléphone, adresse email) sont utilisées exclusivement pour répondre aux demandes des clients ou les recontacter dans le cadre de nos prestations.
<br/>
<b>Droits des utilisateurs </b>: <br/>
Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d’un droit d’accès, de rectification et de suppression de vos données.
Pour exercer ces droits, vous pouvez contacter : contact@cpservice.pro
    
    </>)
  },
  {
    title: "Utilisation de cookies",
    icon: Cookie,
    content: (<>
    
    Le site Cyno Protection Service utilise des cookies.


    
    </>),
  },
  {
    title: "Propriété intellectuelle",
    icon: Fence,
    content: (<>
    
    Tout le contenu du site Cyno Protection Service (textes, images, logos, graphismes, vidéos, etc.) est protégé par les dispositions du Code de la Propriété Intellectuelle. Toute reproduction, distribution, modification, adaptation, retransmission ou publication, même partielle, est strictement interdite sans l’accord écrit préalable de Cyno Protection Service.


    
    </>),
  },
  {
    title: "Limitations de responsabilité",
    icon: Ban,
    content: (<>
    
    Cyno Protection Service ne pourra être tenu responsable des dommages matériels ou immatériels liés à l’utilisation du site (bugs, incompatibilités, etc.).
    Les visiteurs s'engagent à utiliser un matériel à jour et exempt de virus pour accéder au site.

    
    </>),
  },
];

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
          Mentions Légales
        </motion.h1>

        <motion.p
          className="text-xl text-center mb-16 text-gray-600"
          variants={fadeIn}
        >
          Veuillez lire attentivement cette notice légale. Elle contient des
          informations importantes sur vos droits et obligations.{" "}
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
