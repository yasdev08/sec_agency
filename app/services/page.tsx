import Link from 'next/link'
import { ArrowLeft, Shield, Users, Eye, Lock, Briefcase, Car } from 'lucide-react'

export default function ServicesPage() {
  const services = [
    { icon: Shield, title: 'Personal Protection', description: 'Tailored security solutions for individuals and families, including bodyguard services and residential security.' },
    { icon: Users, title: 'Event Security', description: 'Comprehensive security planning and execution for events of all sizes, from corporate gatherings to large public events.' },
    { icon: Eye, title: 'Surveillance', description: 'State-of-the-art monitoring and surveillance systems, including CCTV installation and 24/7 remote monitoring services.' },
    { icon: Lock, title: 'Access Control', description: 'Advanced access control systems to secure your premises, including biometric systems and smart card solutions.' },
    { icon: Briefcase, title: 'Corporate Security', description: 'Customized security solutions for businesses, including risk assessment, security audits, and employee training.' },
    { icon: Car, title: 'Mobile Patrols', description: 'Regular mobile patrols to ensure the security of your property, with rapid response capabilities.' },
  ]

  return (
    <div className="bg-gray-900 text-white min-h-screen">

      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Our Services</h1>

        <p className="text-gray-300 mb-8">
          At Secure Solutions, we offer a comprehensive range of security services designed to meet the diverse needs of our clients. Our team of experienced professionals utilizes cutting-edge technology and proven methodologies to deliver unparalleled protection and peace of mind.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg">
              <service.icon className="w-12 h-12 mb-4 text-red-500" />
              <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Customized Solutions</h2>
          <p className="text-gray-300 mb-4">
            We understand that every client has unique security needs. Our team of experts works closely with you to assess your specific requirements and develop tailored security solutions that address your concerns and mitigate potential risks.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-gray-300 mb-4">
            To learn more about our services or to request a personalized security assessment, please don't hesitate to contact us. Our team is ready to assist you in enhancing your security measures.
          </p>
          <Link href="/#contact" className="bg-red-600 text-white px-6 py-2 rounded font-semibold inline-block hover:bg-red-700 transition-colors">
            Contact Us
          </Link>
        </section>
      </main>

      
    </div>
  )
}