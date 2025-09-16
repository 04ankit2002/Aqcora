import React from "react";
import { FaTint, FaCertificate, FaGlassWhiskey } from "react-icons/fa";
import { MdHealthAndSafety } from "react-icons/md";

function About() {
  return (
    <section id="about" className="py-24 px-6 relative ">
      <div className="container mx-auto max-w-6xl">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16">
          About <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">Aqcora</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side: Story */}
          <div className="space-y-6 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
              Purity You Can Trust, Taste You’ll Love
            </h3>
            <p className="text-gray-600 leading-relaxed">
              At <span className="font-semibold">AQCORA</span>, we believe everyone deserves clean, safe, and mineral-rich water. 
              Founded in 2024, our mission is to deliver a brand of water that blends **purity, wellness, and trust**.  
            </p>
            <p className="text-gray-600 leading-relaxed">
              Every drop goes through **multi-stage RO + UV purification** while retaining essential minerals. 
              Our promise: water that’s as refreshing and natural as it should be.
            </p>
            <div className="mt-6">
              <a
                href="#contact"
                className="bg-gradient-to-r from-cyan-400 to-blue-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get In Touch
              </a>
            </div>
          </div>

          {/* Right Side: Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Feature Card */}
            <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition duration-300 border border-cyan-100">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full text-white">
                  <FaTint className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-800">Pure & Safe</h4>
                  <p className="text-gray-600 text-sm">Advanced RO + UV purification</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition duration-300 border border-cyan-100">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full text-white">
                  <MdHealthAndSafety className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-800">Mineral Enriched</h4>
                  <p className="text-gray-600 text-sm">Balanced with essential minerals</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition duration-300 border border-cyan-100">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full text-white">
                  <FaCertificate className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-800">Certified Quality</h4>
                  <p className="text-gray-600 text-sm">FSSAI approved & tested</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition duration-300 border border-cyan-100">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full text-white">
                  <FaGlassWhiskey className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-800">Great Taste</h4>
                  <p className="text-gray-600 text-sm">Crisp, refreshing & light</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
