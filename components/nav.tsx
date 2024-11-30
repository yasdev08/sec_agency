"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
const navItems = [
  { href: "/", label: "Accueil" },
  { href: "/about", label: "à propos" },
  { href: "/services", label: "Services" },
  /* { href: "/case-studies", label: "Cas d'études" }, */
  { href: "/testimonials", label: "Avis" },
  { href: "./#contact", label: "Contact" },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  return (
    <nav className="bg-bg1 shadow-md border-b-2 border-gray-800 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-32">
          <div className="flex justify-center md:justify-start flex-1">
            <Link href="/">
              <Image src="/log.png" alt="security logo" width={190} height={190}/>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-base font-medium ${
                    pathname === item.href
                      ? "bg-logcol2 font-semibold text-white"
                      : "text-navtext hover:bg-logcol2 hover:text-white"
                  } transition-colors duration-200`}
                >
                  {item.label}
                </Link>
              ))}
              
              <Link
                href="/devis"
                className="bg-logcol2 text-white px-8 py-3 rounded-full font-semibold text-base"
              >
                Demander un devis  
              </Link>
              
              
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-white hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 mb-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  pathname === item.href
                    ? "bg-logcol2 font-extrabold text-white"
                    : "text-navtext hover:bg-logcol2 hover:text-white"
                } transition-colors duration-200`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="text-center max-w-full">
              <Link
                href="/devis"
                className="bg-logcol2 text-white px-8 py-3 rounded-full font-semibold text-base "
                onClick={() => setIsOpen(false)}
              >
                
                Demander un devis
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
