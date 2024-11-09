import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Secure Solutions - Your Trusted Security Partner',
  description: 'Providing comprehensive security solutions for individuals and businesses.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-900 text-white min-h-screen flex flex-col`}>
        <header className="bg-gray-800 py-4">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold">Secure Solutions</Link>
            <nav>
              <ul className="flex space-x-4 items-center">
                <li><Link href="/" className="text-white hover:text-gray-300">Home</Link></li>
                <li className="relative group">
                  <button className="text-white hover:text-gray-300 flex items-center">
                    Pages <ChevronDown className="ml-1 w-4 h-4" />
                  </button>
                  <ul className="absolute left-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-2 z-10 hidden group-hover:block">
                    <li><Link href="/about" className="block px-4 py-2 text-sm text-white hover:bg-gray-700">About Us</Link></li>
                    <li><Link href="/services" className="block px-4 py-2 text-sm text-white hover:bg-gray-700">Services</Link></li>
                    <li><Link href="/case-studies" className="block px-4 py-2 text-sm text-white hover:bg-gray-700">Case Studies</Link></li>
                    <li><Link href="/certifications" className="block px-4 py-2 text-sm text-white hover:bg-gray-700">Certifications</Link></li>
                    <li><Link href="/faq" className="block px-4 py-2 text-sm text-white hover:bg-gray-700">FAQ</Link></li>
                  </ul>
                </li>
                <li><Link href="/#contact" className="text-white hover:text-gray-300">Contact</Link></li>
              </ul>
            </nav>
          </div>
        </header>


        <Analytics/>

        <main className="flex-grow">
          {children}
        </main>

        <footer className="bg-gray-800 py-8">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; {new Date().getFullYear()} Secure Solutions. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}