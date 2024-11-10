import Link from 'next/link'
import { ArrowLeft, Shield, Award, Users, Briefcase } from 'lucide-react'

export default function CertificationsPage() {
  const certifications = [
    {
      title: "Certified Protection Professional (CPP)",
      description: "Demonstrates expertise in all areas of security management.",
      icon: Shield,
    },
    {
      title: "Physical Security Professional (PSP)",
      description: "Validates proficiency in physical security assessment, integration, and implementation.",
      icon: Briefcase,
    },
    {
      title: "Certified Security Supervisor (CSS)",
      description: "Recognizes frontline security supervisors who have demonstrated specific knowledge and skills.",
      icon: Users,
    },
    {
      title: "ASIS Board Certified in Security Management",
      description: "Highest level of certification for security management professionals.",
      icon: Award,
    },
  ]

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/*<header className="bg-gray-800 py-4">
        <div className="container mx-auto px-4">
          <Link href="/" className="text-white hover:text-gray-300 flex items-center">
            <ArrowLeft className="mr-2" />
            Back to Home
          </Link>
        </div>
      </header>*/}

      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Our Certifications</h1>

        <p className="text-gray-300 mb-8">
          At Secure Solutions, we pride ourselves on maintaining the highest standards of professionalism and expertise in the security industry. Our team holds various certifications that demonstrate our commitment to excellence and continuous improvement.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg flex items-start">
              <cert.icon className="w-12 h-12 mr-4 text-red-500 flex-shrink-0" />
              <div>
                <h2 className="text-xl font-semibold mb-2">{cert.title}</h2>
                <p className="text-gray-300">{cert.description}</p>
              </div>
            </div>
          ))}
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Why Our Certifications Matter</h2>
          <p className="text-gray-300 mb-4">
            These certifications demonstrate our team's expertise and commitment to staying at the forefront of security practices. When you choose Secure Solutions, you're partnering with professionals who have been rigorously trained and tested in all aspects of security management and operations.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Our Commitment to Excellence</h2>
          <p className="text-gray-300 mb-4">
            We continuously invest in our team's professional development to ensure we're always equipped to handle the evolving security landscape. Our certifications are just one aspect of our commitment to providing you with the highest quality security services.
          </p>
          <Link href="/#contact" className="bg-red-600 text-white px-6 py-2 rounded font-semibold inline-block hover:bg-red-700 transition-colors">
            Contact Us to Learn More
          </Link>
        </section>
      </main>

      {/*<footer className="bg-gray-800 py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 Secure Solutions. All rights reserved.</p>
        </div>
          </footer>*/}
    </div>
  )
}