import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Nav from '@/components/nav'
import Image from 'next/image';

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
          <Link href='/'>
            <Image src="/security-svgrepo-com.svg" className="object-contain grid "  alt="security logo" width={60} height={60}/>
          </Link>
            <Nav/>
            
          </div>
        </header>

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