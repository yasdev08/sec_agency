import "./globals.css";
import { Montserrat } from "next/font/google";
import Nav from "@/components/nav";
import WhatsappMsg from "@/components/whatsappMsg";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Link from "next/link";
import { Suspense } from "react";
import Loading from "./loading";
import { Heart } from "lucide-react";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "CpService - Votre Expert en Sécurité Privée en France",
  description:
    "CPService offre des solutions de sécurité : vigiles, sécurité événementielle, gestion de foule, et protection rapprochée. Faites confiance à nos experts.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <GoogleTagManager gtmId={"GTM-5W9F7HVG"} />
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.cpservice.pro" />

      </head>
      <body
        className={`${montserrat.className} bg-gray-100 text-gray-900   min-h-screen flex flex-col`}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=5W9F7HVG"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <Nav />

        <main className="flex-grow">
          <Suspense fallback={<Loading/>}>
          
          {children}
          {/*Whatsapp message icon on all pages*/}
          </Suspense>
          <WhatsappMsg />
        </main>

        <footer className="bg-logcol1 py-8 ">
          
          <div className="container mx-auto px-4 text-white text-center">
            
            <p>
              &copy; {new Date().getFullYear()} © Cpservice. Tous droits
              réservés.
            </p>
            <p>CNAPS : AUT-093-2123-10-07-20240952904</p>
            <p>Numéro siret : 898652912</p>
            <div className="flex-col flex">
            <Link href="/mentions-legales" className="font-bold underline hover:text-logcol2">
              Mentions légales
            </Link>
            <Link href="/cgu" className="font-bold underline hover:text-logcol2">
              CGU
            </Link>
            <div>Ce site a été réalisé par <Link href="https://yasserm.vercel.app/" className="font-bold underline hover:text-logcol2">
             Yasser
            </Link></div>
            
            
            </div>
          </div>
        </footer>

        <Analytics/>
        <SpeedInsights/>
      </body>
      <GoogleAnalytics gaId="G-M0LRPKVMCK" />
    </html>
  );
}
