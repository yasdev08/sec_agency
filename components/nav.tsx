import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { motion } from "framer-motion"
export default function Nav(){
    return(
        
          <nav>
            <ul className="flex space-x-4 items-center">
              <li><Link href="/" className="text-white hover:text-gray-300">Home</Link></li>
              <li className="relative group">
                <button className="text-white hover:text-gray-300 flex items-center">
                  Pages <ChevronDown className="ml-1 w-4 h-4" />
                </button>
                <ul className="absolute left-0 mt-0 w-48 bg-gray-800 rounded-md shadow-lg py-2 z-10 hidden group-hover:block">
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
        
    )
}