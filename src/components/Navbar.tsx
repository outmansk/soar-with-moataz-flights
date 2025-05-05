
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-white/90 backdrop-blur-sm fixed w-full z-50 shadow">
      <div className="container mx-auto flex justify-between items-center py-4">
        <div className="flex items-center">
          <h1 className="text-xl md:text-2xl font-bold text-sky-dark">Soar with Moataz</h1>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-sky-500 transition">Home</button>
          <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-sky-500 transition">About</button>
          <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-sky-500 transition">Services</button>
          <button onClick={() => scrollToSection('gallery')} className="text-gray-700 hover:text-sky-500 transition">Gallery</button>
          <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover:text-sky-500 transition">Testimonials</button>
          <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-sky-500 transition">Contact</button>
        </div>
        
        {/* Book Button */}
        <div className="hidden md:block">
          <Button onClick={() => scrollToSection('booking')} className="bg-sky-500 hover:bg-sky-600 text-white">
            Book Now
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700" onClick={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full animate-fade-in">
          <div className="container mx-auto py-4 flex flex-col space-y-4">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-sky-500 transition">Home</button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-sky-500 transition">About</button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-sky-500 transition">Services</button>
            <button onClick={() => scrollToSection('gallery')} className="text-gray-700 hover:text-sky-500 transition">Gallery</button>
            <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover:text-sky-500 transition">Testimonials</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-sky-500 transition">Contact</button>
            <Button onClick={() => scrollToSection('booking')} className="bg-sky-500 hover:bg-sky-600 text-white w-full">
              Book Now
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
