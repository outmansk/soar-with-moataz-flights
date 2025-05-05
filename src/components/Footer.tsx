
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold">Soar with Moataz</h3>
            <p className="mt-2 text-gray-400">Experience the freedom of flight</p>
          </div>
          
          <div className="flex flex-col md:flex-row md:space-x-12 space-y-6 md:space-y-0">
            <div>
              <h4 className="font-semibold mb-3">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-sky-400 transition">Home</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-sky-400 transition">About</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-sky-400 transition">Services</a></li>
                <li><a href="#booking" className="text-gray-400 hover:text-sky-400 transition">Book Now</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Contact</h4>
              <ul className="space-y-2">
                <li className="text-gray-400">WhatsApp: +212 060 538 7041</li>
                <li className="text-gray-400">Location: Aguergour, Morocco</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Soar with Moataz. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
