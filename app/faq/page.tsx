import Link from 'next/link'


export default function Faq(){

  const faqs = [
    {
      question: "What types of security services do you offer?",
      answer: "We offer a wide range of security services including personal protection, event security, surveillance, access control, corporate security, and mobile patrols. Our services are tailored to meet the specific needs of individuals, businesses, and organizations."
    },
    {
      question: "How experienced are your security personnel?",
      answer: "Our security personnel are highly trained professionals with diverse backgrounds in law enforcement, military, and private security. Many have over 10 years of experience in the field. We also provide ongoing training to ensure our team stays up-to-date with the latest security practices and technologies."
    },
    {
      question: "Do you provide 24/7 security services?",
      answer: "Yes, we offer round-the-clock security services. Our team is available 24 hours a day, 7 days a week, 365 days a year to respond to your security needs and emergencies."
    },
    {
      question: "How do you ensure the quality of your security services?",
      answer: "We maintain high standards through rigorous hiring processes, continuous training, regular performance evaluations, and client feedback. We also utilize advanced technology and follow industry best practices to ensure the highest quality of service."
    },
    {
      question: "Can you provide security for special events?",
      answer: "Absolutely. We specialize in event security for gatherings of all sizes, from small corporate functions to large public events. Our team will work with you to develop a comprehensive security plan tailored to your event's specific needs."
    },
    {
      question: "How do I get started with your services?",
      answer: "Getting started is easy. Simply contact us through our website or give us a call. We'll schedule a consultation to discuss your security needs, assess your situation, and provide a customized security solution."
    }
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
        <h1 className="text-4xl font-bold mb-8 ">Frequently Asked Questions</h1>

        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">{faq.question}</h2>
              <p className="text-gray-300">{faq.answer}</p>
            </div>
          ))}
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Still Have Questions?</h2>
          <p className="text-gray-300 mb-4">
            If you couldn't find the answer to your question, please don't hesitate to reach out to us directly. Our team is always ready to assist you with any inquiries you may have about our security services.
          </p>
          <Link href="/#contact" className="bg-red-600 text-white px-6 py-2 rounded font-semibold inline-block hover:bg-red-700 transition-colors">
            Contact Us
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
