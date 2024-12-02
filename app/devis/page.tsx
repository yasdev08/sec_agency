"use client";
import { useState } from "react";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import {
  Building2,
  ContactRound,
  FileText,
  Gauge,
  Hash,
  Mail,
  Phone,
  Timer,
  TimerOff,
} from "lucide-react";


export default function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: [] as string[],
    Nomdesociete: "",
    email: "",
    numerotel: "",
    nbragent: "",
    debutduree: "",
    finduree:""
  });

  const serviceOptions = [
    {
      name: "Agent de sécurité",
      icon: "/assets/logo-agent-securite-2.png",
      alt: "logo agent securite",
    },
    {
      name: "Agent incendie SSIAP1",
      icon: "/assets/logo-agent-securite-siaap.png",
      alt: "logo agent securite ssiap 1",
    },
    {
      name: "Agent incendie SSIAP2",
      icon: "/assets/logo-agent-securite-siaap-2.png",
      alt: "logo agent securite ssiap 2",
    },
    {
      name: "Agent cynophile",
      icon: "/assets/logo-agent-securite-cynophile.png",
      alt: "logo agent securite cynophile",
    },
  ];

  const handleNext = () => {
    if (step === 1 && formData.service.length === 0) {
      alert("Veuillez sélectionner au moins un service.");
      return;
    }
    if (step === 2 && (!formData.nbragent || !formData.debutduree || !formData.finduree)) {
      alert("Veuillez remplir tous les champs requis.");
      return;
    }
    if (
      step === 3 &&
      (!formData.Nomdesociete || !formData.numerotel || !formData.email)
    ) {
      alert("Veuillez remplir tous les champs requis.");
      return;
    }
    setStep((prev) => prev + 1);
  };

  const handlePrev = () => setStep((prev) => prev - 1);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const toggleService = (service: string) => {
    setFormData((prev) => {
      const newServices = prev.service.includes(service)
        ? prev.service.filter((s) => s !== service) // Remove if already selected
        : [...prev.service, service]; // Add if not selected
      return { ...prev, service: newServices };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "default_service",
        "template_8j6n657",
        formData,
        "BznnDkit0tmvMkfep"
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          alert("Message envoyé avec succès !");
          // Reset form fields
          setFormData({
            service: [],
            Nomdesociete: "",
            email: "",
            numerotel: "",
            nbragent: "",
            debutduree: "",
            finduree:"",
          });
          setStep(1);
        },
        (error) => {
          console.log("Failed to send message:", error.text);
          alert("Échec de l'envoi du message, veuillez réessayer.");
        }
      );
  };

  return (
    <div className="bg-bg py-20 text-primtext min-h-screen flex flex-col items-center justify-center p-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold">
          Demandez votre devis personnalisé en 4 clics
        </h1>
        <p className="mt-2 text-xl text-sectext">
          Remplissez le formulaire et obtenez votre devis personnalisé en 24h.
        </p>
        <div className="mt-4 bg-logcol2 hover:bg-red-500 text-white px-4 py-2 rounded-full inline-block text-sm">
          € Devis 100% gratuit
        </div>
      </div>

      {/* Progress Bar */}
      <p className="font-semibold text-sectext">Étape {step} sur 4</p>
      <div className="w-full max-w-md bg-primtext rounded-full h-2 mb-6">
        <div
          className="bg-logcol2 h-2 rounded-full transition-all"
          style={{ width: `${(step / 4) * 100}%` }}
        ></div>
      </div>

      {/* Steps */}
      <div className="w-full max-w-md">
        {step === 1 && (
          <div>
            <p className="text-lg font-medium mb-4">Quel est votre besoin ?</p>
            <div className="space-y-4">
              {serviceOptions.map((option, index) => (
                <button
                  key={index}
                  onClick={() => toggleService(option.name)}
                  className={`flex items-center p-4 w-full rounded-lg  text-left border ${
                    formData.service.includes(option.name)
                      ? "border-b-4 border-logcol2 "
                      : "border-gray-700"
                  } hover:border-logcol2 transition`}
                >
                  <Image
                    src={option.icon}
                    width={50}
                    height={50}
                    alt={option.alt}
                  />
                  <span>{option.name}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <p className="text-lg font-medium mb-4">
              Entrez vos informations :
            </p>
            <div className="space-y-4">
              <div>
                <label htmlFor="nbragent"> Le nombre des agents :</label>
              <input
              id="nbragent"
                type="number"
                name="nbragent"
                placeholder="Nombre des agents *"
                value={formData.nbragent}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-bg border border-gray-700 text-black focus:outline-none focus:border-red-500"
              />
              </div>
              <div>
              <label htmlFor="debutduree">Le début de durée :</label>
              <input
                id="debutduree"
                type="date"
                name="debutduree"
                placeholder="Le début de durée *"
                value={formData.debutduree}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-bg border border-gray-700 text-black focus:outline-none focus:border-red-500"
              />
              </div>
              <div>
              <label htmlFor="finduree">La fin de durée :</label>
              <input
                id="finduree"
                type="date"
                name="finduree"
                placeholder="La fin de durée *"
                value={formData.finduree}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-bg border border-gray-700 text-black focus:outline-none focus:border-red-500"
              />
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <p className="text-lg font-medium mb-4">
              Entrez vos informations :
            </p>
            <div className="space-y-4">
              <input
                type="text"
                name="Nomdesociete"
                placeholder="Nom de la société *"
                value={formData.Nomdesociete}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-bg border border-gray-700 text-black focus:outline-none focus:border-red-500"
              />
              
              <input
                type="text"
                name="numerotel"
                placeholder="Numéro de téléphone *"
                value={formData.numerotel}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-bg border border-gray-700 text-black focus:outline-none focus:border-red-500"
              />
              <input
                type="email"
                name="email"
                placeholder="E-Mail *"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-bg border border-gray-700 text-black focus:outline-none focus:border-red-500"
              />
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="bg-bg p-6 rounded-lg border-logcol2 shadow-lg text-black mt-4">
            <p className="text-xl font-semibold mb-6 text-center">
              Confirmez vos informations :
            </p>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-logcol2 pb-2">
                <strong className="text-sm text-gray-700 flex items-center">
                  {" "}
                  <ContactRound className="mr-2" color="#ae2829ff" /> Services :
                </strong>
                <p className="text-base">
                  {formData.service.join(", ") || "Non spécifié"}
                </p>
              </div>
              <div className="flex justify-between items-center border-b border-logcol2 pb-2">
                <strong className="text-sm text-gray-700 flex items-center">
                  <Building2 className="mr-2" color="#ae2829ff " /> Nom de la
                  société :
                </strong>
                <p className="text-lg">
                  {formData.Nomdesociete || "Non spécifié"}
                </p>
              </div>
              <div className="flex justify-between items-center border-b border-logcol2 pb-2">
                <strong className="text-sm text-gray-700 flex items-center">
                  <Phone className="mr-2" color="#ae2829ff" /> Numéro de
                  téléphone :
                </strong>
                <p className="text-lg">
                  {formData.numerotel || "Non spécifié"}
                </p>
              </div>
              <div className="flex justify-between items-center border-b border-logcol2 pb-2">
                <strong className="text-sm text-gray-700 flex items-center">
                  <Mail className="mr-2" color="#ae2829ff" /> E-Mail :
                </strong>
                <p className="text-lg">{formData.email || "Non spécifié"}</p>
              </div>
              <div className="flex justify-between items-center border-b border-logcol2 pb-2">
                <strong className="text-sm text-gray-700 flex items-center">
                  <Hash className="mr-2" color="#ae2829ff" />
                  Nombre d'agents :
                </strong>
                <p className="text-lg">
                  {formData.nbragent || "Non spécifié"} Agents
                </p>
              </div>
              <div className="flex justify-between items-center border-b border-logcol2 pb-2">
                <strong className="text-sm text-gray-700 flex items-center">
                  <Timer className="mr-2" color="#ae2829ff" />
                  Le début de Durée :
                </strong>
                <p className="text-lg">
                  {formData.debutduree || "Non spécifié"} 
                </p>
              </div>
              <div className="flex justify-between items-center">
                <strong className="text-sm text-gray-700 flex items-center">
                  <TimerOff className="mr-2" color="#ae2829ff" />
                  La fin de Durée :
                </strong>
                <p className="text-lg">
                  {formData.finduree || "Non spécifié"} 
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="mt-8 flex justify-between w-full max-w-md">
        {step > 1 && (
          <button
            onClick={handlePrev}
            className="bg-gray-700 hover:bg-gray-600 text-white py-3 px-6 rounded-full transition"
          >
            Précédent
          </button>
        )}
        {step < 4 && (
          <button
            onClick={handleNext}
            className="bg-logcol2 hover:bg-red-600 text-white py-3 px-6 rounded-full transition"
          >
            Suivant
          </button>
        )}
        {step === 4 && (
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-full transition"
          >
            Soumettre
          </button>
        )}
      </div>

      {/* Google Section */}
      <div className="flex flex-col mt-8 shadow-lg rounded-lg p-6 justify-between items-center md:flex-row  max-w-4xl mx-auto space-y-8 md:space-y-0">
        <div className="flex items-center space-x-4 mr-4">
          <Image
            src="/assets/google-icon.png"
            alt="Google"
            width={32}
            height={32}
          />
          
          <p className="text-sm font-semibold ">
            
          <span className="text-yellow-400">★★★★★</span>
          </p>
        </div>

        {/* Devis Gratuit Section */}
        <div className="flex items-center space-x-4 mr-4">
          <FileText width={32}
            height={32}  />
          <div>
            <p className="text-sm font-semibold">Devis gratuit</p>
            <p className="text-xs text-gray-400">sans engagement</p>
          </div>
        </div>

        {/* Rapide et Gratuit Section */}
        <div className="flex items-center space-x-4 mr-4">
          <Gauge
            width={32}
            height={32}
          />
          <div>
            <p className="text-sm  font-semibold">Rapide et gratuit</p>
            <p className="text-xs text-gray-400">de 2h à 24h</p>
          </div>
        </div>
      </div>
    </div>
  );
}
