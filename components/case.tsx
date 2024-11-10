import Link from "next/link"

export default function Case(){

    return(
        <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Success Stories</h2>
          <p className="text-center text-gray-300 mb-8">
            Discover how we've helped our clients overcome complex security challenges and achieve peace of mind.
          </p>
          <div className="text-center">
            <Link href="/case-studies" className="bg-red-600 text-white px-8 py-3 rounded-full font-semibold text-lg inline-block hover:bg-red-700 transition-colors">
              View Case Studies
            </Link>
          </div>
        </div>
      </section>



    )
}