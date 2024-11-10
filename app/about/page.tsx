

export default function About() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      

      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">About Secure Solutions</h1>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-300 mb-4">
            At Secure Solutions, our mission is to provide unparalleled security services that ensure the safety and peace of mind of our clients. We are committed to delivering innovative, reliable, and professional security solutions tailored to meet the unique needs of individuals, businesses, and organizations.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our History</h2>
          <p className="text-gray-300 mb-4">
            Founded in 2000, Secure Solutions has grown from a small local security firm to a leading provider of comprehensive security services. With over two decades of experience, we have continuously evolved our practices and technologies to stay at the forefront of the security industry.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
          <p className="text-gray-300 mb-4">
            Our team consists of highly trained professionals with diverse backgrounds in law enforcement, military, and private security. Led by our experienced management team, our security personnel undergo rigorous training and continuous professional development to ensure they are equipped to handle any situation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {[
              { name: 'John Doe', role: 'Chief Executive Officer', image: '/assets/prof_icon.png' },
              { name: 'Jane Smith', role: 'Chief Operations Officer', image: '/assets/prof_icon.png' },
              { name: 'Mike Johnson', role: 'Head of Technology', image: '/assets/prof_icon.png' },
            ].map((member, index) => (
              <div key={index} className="bg-gray-800 rounded-lg overflow-hidden">
                <img src={member.image} alt={member.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-gray-400">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
          <ul className="list-disc list-inside text-gray-300">
            <li className="mb-2">Integrity: We uphold the highest ethical standards in all our operations.</li>
            <li className="mb-2">Professionalism: Our team is committed to excellence in every aspect of our service.</li>
            <li className="mb-2">Innovation: We continuously seek new ways to enhance our security solutions.</li>
            <li className="mb-2">Client-Centric: We prioritize our clients' needs and tailor our services accordingly.</li>
            <li>Continuous Improvement: We invest in ongoing training and development for our team.</li>
          </ul>
        </section>
      </main>

      
    </div>
  )
}