"use client";

import Hero from "@/components/hero";
import Serv from "@/components/services";
import Wcu from "@/components/wcu";
import Case from "@/components/case";
import Team from "@/components/team";
import Contactform from "@/components/contactform";

export default function Main() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <Serv />

      {/* Why Choose Us Section */}
      <Wcu />

      {/* Case Studies Highlight Section */}
      <Case />

      {/* Team Section */}
      <Team />

      {/* Contact Form Section */}
      <Contactform />
    </div>
  );
}
