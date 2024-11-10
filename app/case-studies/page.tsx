import Link from 'next/link'
import { Shield, Users, Eye, Lock } from 'lucide-react'

export default function Case_studies() {
  const caseStudies = [
    {
      title: "High-Profile Event Security",
      client: "International Music Festival",
      challenge: "Securing a large-scale outdoor music festival with over 100,000 attendees.",
      solution: "Implemented a multi-layered security approach including perimeter control, crowd management, and real-time threat assessment.",
      result: "Zero major security incidents reported, with a 98% attendee satisfaction rate regarding safety measures.",
      icon: Users
    },
    {
      title: "Corporate Espionage Prevention",
      client: "Tech Innovation Corp",
      challenge: "Protecting sensitive R&D information from potential corporate espionage attempts.",
      solution: "Deployed advanced cybersecurity measures, conducted regular security audits, and trained employees on information security best practices.",
      result: "Successfully thwarted multiple attempted data breaches, securing the client's intellectual property.",
      icon: Shield
    },
    {
      title: "VIP Protection",
      client: "Global Business Leader",
      challenge: "Ensuring the safety of a high-profile executive during international business trips.",
      solution: "Provided a dedicated security team, conducted thorough risk assessments for each location, and implemented discreet protective measures.",
      result: "Safely conducted 20+ international trips without any security incidents or privacy breaches.",
      icon: Eye
    },
    {
      title: "Retail Chain Loss Prevention",
      client: "NationalMart Stores",
      challenge: "Reducing inventory shrinkage across a national chain of retail stores.",
      solution: "Implemented an integrated security system with CCTV, electronic article surveillance, and trained loss prevention officers.",
      result: "Reduced inventory shrinkage by 40% within the first year, saving the client millions in potential losses.",
      icon: Lock
    }
  ]

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      

      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Case Studies</h1>

        <p className="text-gray-300 mb-8">
          Explore how Secure Solutions has successfully addressed complex security challenges for our clients across various industries. These case studies demonstrate our expertise, innovative approaches, and the tangible results we deliver.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg">
              <study.icon className="w-12 h-12 mb-4 text-red-500" />
              <h2 className="text-2xl font-semibold mb-2">{study.title}</h2>
              <p className="text-gray-400 mb-4">Client: {study.client}</p>
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">Challenge:</h3>
                <p className="text-gray-300">{study.challenge}</p>
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">Solution:</h3>
                <p className="text-gray-300">{study.solution}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Result:</h3>
                <p className="text-gray-300">{study.result}</p>
              </div>
            </div>
          ))}
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Your Security Challenge</h2>
          <p className="text-gray-300 mb-4">
            Every security situation is unique. Our team of experts is ready to analyze your specific needs and develop a tailored solution that addresses your security challenges effectively.
          </p>
          <Link href="/#contact" className="bg-red-600 text-white px-6 py-2 rounded font-semibold inline-block hover:bg-red-700 transition-colors">
            Discuss Your Security Needs
          </Link>
        </section>
      </main>

      
    </div>
  )
}