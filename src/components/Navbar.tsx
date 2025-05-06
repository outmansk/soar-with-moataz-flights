
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from './ui/button';
import { useLanguage, LanguageCode } from '@/contexts/LanguageContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Available languages
const languages = {
  en: "English",
  fr: "Français",
  es: "Español"
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

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

  const changeLanguage = (lang: LanguageCode) => {
    setLanguage(lang);
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
          <NavLink href="#about" scrolled={scrolled}>{t('navbar.about')}</NavLink>
          <NavLink href="#services" scrolled={scrolled}>{t('navbar.services')}</NavLink>
          <NavLink href="#gallery" scrolled={scrolled}>{t('navbar.gallery')}</NavLink>
          <NavLink href="#testimonials" scrolled={scrolled}>{t('navbar.testimonials')}</NavLink>
          <Link to="/blog" className={`font-medium transition-colors ${scrolled ? 'text-gray-700 hover:text-sky-dark' : 'text-white hover:text-sky-light'}`}>
            {t('navbar.blog')}
          </Link>
          <NavLink href="#contact" scrolled={scrolled}>{t('navbar.contact')}</NavLink>
          
          {/* Language Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className={`rounded-full p-2 ${scrolled ? 'text-gray-700' : 'text-white'}`}>
                <Globe className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {Object.entries(languages).map(([code, name]) => (
                <DropdownMenuItem 
                  key={code}
                  className={language === code ? "bg-sky-100 font-medium" : ""}
                  onClick={() => changeLanguage(code as LanguageCode)}
                >
                  {name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Button 
            variant="default" 
            asChild
            className="bg-sky-dark hover:bg-sky text-white font-medium"
          >
            <a href="#booking">{t('navbar.bookNow')}</a>
          </Button>
        </div>

        {/* Mobile Navigation Button */}
        <div className="md:hidden flex items-center space-x-2">
          {/* Language Button for Mobile */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className={`rounded-full p-1 ${scrolled ? 'text-gray-700' : 'text-white'}`}>
                <Globe className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {Object.entries(languages).map(([code, name]) => (
                <DropdownMenuItem 
                  key={code}
                  className={language === code ? "bg-sky-100 font-medium" : ""}
                  onClick={() => changeLanguage(code as LanguageCode)}
                >
                  {name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Button variant="ghost" onClick={toggleMenu} className="p-1 text-sky-dark">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="container mx-auto py-4 px-4 flex flex-col space-y-4">
            <MobileNavLink href="#about" onClick={toggleMenu}>{t('navbar.about')}</MobileNavLink>
            <MobileNavLink href="#services" onClick={toggleMenu}>{t('navbar.services')}</MobileNavLink>
            <MobileNavLink href="#gallery" onClick={toggleMenu}>{t('navbar.gallery')}</MobileNavLink>
            <MobileNavLink href="#testimonials" onClick={toggleMenu}>{t('navbar.testimonials')}</MobileNavLink>
            <Link to="/blog" className="py-2 text-gray-700 hover:text-sky-dark font-medium" onClick={toggleMenu}>
              {t('navbar.blog')}
            </Link>
            <MobileNavLink href="#contact" onClick={toggleMenu}>{t('navbar.contact')}</MobileNavLink>
            <Button 
              variant="default" 
              asChild
              className="bg-sky-dark hover:bg-sky w-full"
            >
              <a href="#booking" onClick={toggleMenu}>{t('navbar.bookNow')}</a>
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
