import "./globals.css";
import { Montserrat } from "next/font/google";
import Nav from "@/components/nav";
import WhatsappMsg from "@/components/whatsappMsg";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "CpService - Votre Expert en Sécurité Privée en France",
  description:
    "CPService offre des solutions de sécurité sur mesure : vigiles, sécurité événementielle, gestion de foule, protection rapprochée, sécurité incendie, et bien plus. Faites confiance à nos experts pour protéger vos biens, vos événements et vos espaces sensibles.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <GoogleTagManager gtmId={"GTM-5W9F7HVG"}/>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content="sécurité privée, vigiles, sécurité événementielle, gestion de foule, protection rapprochée, sécurité incendie, maîtres chiens, sécurisation de sites sensibles, sécurité magasins, CPService" />
      </head>
      <body
        className={`${montserrat.className} bg-gray-100 text-gray-900   min-h-screen flex flex-col`}
      >
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=5W9F7HVG"
height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe></noscript>
        <Nav />

        <main className="flex-grow">
          {children}
          {/*Whatsapp message icon on all pages*/}

          <WhatsappMsg />
        </main>

        <footer className="bg-gray-800 py-8">
          <div className="container mx-auto px-4 text-white text-center">
            <p>
              &copy; {new Date().getFullYear()} © Cpservice. Tous droits réservés.
            </p>
          </div>
        </footer>
        <Analytics />
        <SpeedInsights />
      </body>
      <GoogleAnalytics gaId="G-M0LRPKVMCK" />
      
      
    </html>
  );
}
