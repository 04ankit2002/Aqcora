import React from 'react'
import { BsArrowDown } from 'react-icons/bs'

function Hero() {
  return (
    <main className="relative min-h-screen w-full bg-gradient-to-r from-cyan-200 via-cyan-400 to-blue-600 rounded-2xl overflow-hidden">
      {/* Overlay for glass effect */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>

      <div className="relative z-10 max-w-5xl mx-auto min-h-screen flex items-center justify-center">
        <div className="w-[80%] text-center flex flex-col items-center gap-8">
          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white drop-shadow-lg">
            <span className="block animate-fade-in">Sip Pure</span>
            <span className="block animate-fade-in-delay-1">Live Pure</span>
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed animate-fade-in-delay-3">
            Welcome to <span className="font-semibold">AQCORA Mineral Water</span>, where purity meets perfection.
            Crafted through advanced RO systems and packed under the highest hygiene standards, every sip is as refreshing and safe as nature intended.
          </p>

          {/* CTA Button */}
          <div className="flex items-center justify-center">
            <a
              href="#contact"
              className="bg-white/90 hover:bg-white text-blue-600 font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-white/80 mb-2">Scroll</span>
        <BsArrowDown className="h-6 w-6 text-white" />
      </div>
    </main>
  )
}

export default Hero
