
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-xl md:text-2xl font-bold text-sky-dark">
            Soar with Moataz
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <NavLink href="#about" scrolled={scrolled}>About</NavLink>
          <NavLink href="#services" scrolled={scrolled}>Services</NavLink>
          <NavLink href="#gallery" scrolled={scrolled}>Gallery</NavLink>
          <NavLink href="#testimonials" scrolled={scrolled}>Testimonials</NavLink>
          <Link to="/blog" className={`font-medium transition-colors ${scrolled ? 'text-gray-700 hover:text-sky-dark' : 'text-white hover:text-sky-light'}`}>
            Blog
          </Link>
          <NavLink href="#contact" scrolled={scrolled}>Contact</NavLink>
          <Button 
            variant="default" 
            asChild
            className="bg-sky-dark hover:bg-sky text-white font-medium"
          >
            <a href="#booking">Book Now</a>
          </Button>
        </div>

        {/* Mobile Navigation Button */}
        <div className="md:hidden">
          <Button variant="ghost" onClick={toggleMenu} className="p-1 text-sky-dark">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="container mx-auto py-4 px-4 flex flex-col space-y-4">
            <MobileNavLink href="#about" onClick={toggleMenu}>About</MobileNavLink>
            <MobileNavLink href="#services" onClick={toggleMenu}>Services</MobileNavLink>
            <MobileNavLink href="#gallery" onClick={toggleMenu}>Gallery</MobileNavLink>
            <MobileNavLink href="#testimonials" onClick={toggleMenu}>Testimonials</MobileNavLink>
            <Link to="/blog" className="py-2 text-gray-700 hover:text-sky-dark font-medium" onClick={toggleMenu}>
              Blog
            </Link>
            <MobileNavLink href="#contact" onClick={toggleMenu}>Contact</MobileNavLink>
            <Button 
              variant="default" 
              asChild
              className="bg-sky-dark hover:bg-sky w-full"
            >
              <a href="#booking" onClick={toggleMenu}>Book Now</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ href, scrolled, children }) => (
  <a 
    href={href} 
    className={`font-medium transition-colors ${scrolled ? 'text-gray-700 hover:text-sky-dark' : 'text-white hover:text-sky-light'}`}
  >
    {children}
  </a>
);

const MobileNavLink = ({ href, onClick, children }) => (
  <a 
    href={href} 
    className="py-2 text-gray-700 hover:text-sky-dark font-medium"
    onClick={onClick}
  >
    {children}
  </a>
);

export default Navbar;
