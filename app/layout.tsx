import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Nav from '@/components/nav'
import Image from 'next/image';
import WhatsappMsg from '@/components/whatsappMsg';

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
      <head>
      <link rel="icon" href="/logooo.png" sizes="any" />


      </head>
      <body className={`${inter.className} bg-gray-100 text-gray-900   min-h-screen flex flex-col`}>
        
          <Nav/>
        

        <main className="flex-grow">
          {children}

          {/*Whatsapp message icon on all pages*/ }
          
          <WhatsappMsg/>
        </main>

        <footer className="bg-gray-800 py-8">
          <div className="container mx-auto px-4 text-white text-center">
            <p>&copy; {new Date().getFullYear()} Secure Solutions. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
    
  )
}