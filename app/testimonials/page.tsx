import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Star } from 'lucide-react'

const testimonials = [
  {
    name: "John Smith",
    company: "Tech Innovations Inc.",
    image: "/assets/prof_icon.png",
    quote: "Secure Solutions has been instrumental in safeguarding our corporate events. Their professionalism and attention to detail are unmatched.",
    rating: 5
  },
  {
    name: "Sarah Johnson",
    company: "Luxury Estates",
    image: "/assets/prof_icon.png",
    quote: "We've been using Secure Solutions for our high-end residential properties. Their discrete and effective security measures give our clients peace of mind.",
    rating: 5
  },
  {
    name: "Michael Chen",
    company: "Global Finance Group",
    image: "/assets/prof_icon.png",
    quote: "The team at Secure Solutions provided excellent security during our international conference. Their global expertise was evident in every aspect of their service.",
    rating: 4
  },
  {
    name: "Emily Rodriguez",
    company: "City Hospital",
    image: "/assets/prof_icon.png",
    quote: "In the healthcare sector, security is paramount. Secure Solutions has consistently delivered top-notch security services, ensuring the safety of our staff and patients.",
    rating: 5
  }
]

export default function TestimonialsPage() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      

      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Client Testimonials</h1>

        <p className="text-gray-300 mb-12 text-center max-w-2xl mx-auto">
          Don't just take our word for it. Here's what our clients have to say about Secure Solutions' commitment to excellence in security services.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={50}
                  height={50}
                  className="rounded-full mr-4"
                />
                <div>
                  <h2 className="font-semibold">{testimonial.name}</h2>
                  <p className="text-gray-400 text-sm">{testimonial.company}</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">"{testimonial.quote}"</p>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-600'
                    }`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/#contact"
            className="bg-red-600 text-white px-8 py-3 rounded-full font-semibold text-lg inline-block hover:bg-red-700 transition-colors"
          >
            Contact Us for Your Security Needs
          </Link>
        </div>
      </main>

     
    </div>
  )
}