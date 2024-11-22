// components/MultiStepForm.js

"use client"
import { FormEvent, useState } from "react";
import Image from "next/image";

export default function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: "",
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleNext = () => setStep((prev) => prev + 1);
  const handlePrev = () => setStep((prev) => prev - 1);

  const handleChange = (e:FormEvent) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-bg text-primtext min-h-screen flex flex-col items-center justify-center p-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">Demandez votre devis personnalisé en 3 clics</h1>
        <p className="mt-2 text-lg text-sectext">Remplissez le formulaire et obtenez votre devis personnalisé en 24h.</p>
        <div className="mt-4 bg-red-500 text-white px-4 py-2 rounded-full inline-block text-sm">
          € Devis 100% gratuit
        </div>
      </div>

      {/* Progress Bar */}
      <p className="font-semibold text-sectext">Etape {step} sur 3</p>
      <div className="w-full max-w-md bg-primtext rounded-full h-2 mb-6">
        <div
          className="bg-red-500 h-2 rounded-full transition-all"
          style={{ width: `${(step / 3) * 100}%` }}
        ></div>
      </div>

      {/* Steps */}
      <div className="w-full max-w-md">
        {step === 1 && (
          <div>
            <p className="text-lg font-medium mb-4">Quel est votre besoin ?</p>
            <div className="space-y-4">
              {["Agent de sécurité", "Agent incendie SSIAP1", "Agent incendie SSIAP2", "Agent cynophile"].map(
                (option, index) => (
                  <button
                    key={index}
                    onClick={() => setFormData({ ...formData, service: option })}
                    className={`flex items-center p-4 w-full rounded-lg text-left border ${
                      formData.service === option ? "border-red-500" : "border-gray-700"
                    } hover:border-red-500 transition`}
                  >
                    <Image src="/assets/logo-agent-securite-2.png" width={50} height={50} alt="agent de securite icon"></Image>
                    <span>{option}</span>
                  </button>
                )
              )}
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <p className="text-lg font-medium mb-4">Entrez vos informations :</p>
            <div className="space-y-4">
              <input
                type="text"
                name="firstName"
                placeholder="Prénom *"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-red-500"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Nom *"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-red-500"
              />
              <input
                type="email"
                name="email"
                placeholder="E-Mail *"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-red-500"
              />
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <p className="text-lg font-medium mb-4">Confirmez vos informations :</p>
            <ul className="space-y-2">
              <li><strong>Service:</strong> {formData.service}</li>
              <li><strong>Prénom:</strong> {formData.firstName}</li>
              <li><strong>Nom:</strong> {formData.lastName}</li>
              <li><strong>E-Mail:</strong> {formData.email}</li>
            </ul>
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
        {step < 3 && (
          <button
            onClick={handleNext}
            className="bg-red-500 hover:bg-red-600 text-white py-3 px-6 rounded-full transition"
            disabled={step === 1 && !formData.service}
          >
            Suivant
          </button>
        )}
        {step === 3 && (
          <button
            onClick={() => alert("Formulaire soumis !")}
            className="bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-full transition"
          >
            Soumettre
          </button>
        )}
      </div>
    </div>
  );
}
