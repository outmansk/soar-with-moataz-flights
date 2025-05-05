
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1620425225402-d30fb2817a0b?q=80&w=2070&auto=format&fit=crop')",
          backgroundPosition: "center 30%"
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Content */}
      <div className="container relative z-10 text-white text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in">
          Experience the Freedom <br /> of Flight
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Soar above the mountains with professional pilot Moataz Rachad
        </p>
        <Button 
          onClick={scrollToBooking} 
          className="text-lg px-8 py-6 bg-sky-500 hover:bg-sky-600 animate-fade-in" 
          style={{ animationDelay: "0.4s" }}
        >
          Book Your Flight
        </Button>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
