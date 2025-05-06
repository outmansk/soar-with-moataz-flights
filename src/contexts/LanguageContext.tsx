
import React, { createContext, useState, useContext, useEffect, ReactNode } from "react";

// Define the available languages
export type LanguageCode = "en" | "fr" | "es";

// Define the structure of our translations
type TranslationType = {
  [key: string]: string;
};

type TranslationsType = {
  [key in LanguageCode]: TranslationType;
};

// Define the context type
interface LanguageContextType {
  language: LanguageCode;
  setLanguage: (language: LanguageCode) => void;
  t: (key: string) => string;
}

// Create the context
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Sample translations for demonstration
const translations: TranslationsType = {
  en: {
    "navbar.about": "About",
    "navbar.services": "Services",
    "navbar.gallery": "Gallery",
    "navbar.testimonials": "Testimonials",
    "navbar.blog": "Blog",
    "navbar.contact": "Contact",
    "navbar.bookNow": "Book Now",
    "hero.heading": "Experience the Freedom of Flight",
    "hero.subheading": "Soar above the mountains with professional pilot Moataz Rachad",
    "hero.button": "Book Your Flight",
    // Add more translations as needed
  },
  fr: {
    "navbar.about": "À propos",
    "navbar.services": "Services",
    "navbar.gallery": "Galerie",
    "navbar.testimonials": "Témoignages",
    "navbar.blog": "Blog",
    "navbar.contact": "Contact",
    "navbar.bookNow": "Réserver",
    "hero.heading": "Vivez la Liberté du Vol",
    "hero.subheading": "Survolez les montagnes avec le pilote professionnel Moataz Rachad",
    "hero.button": "Réservez Votre Vol",
    // Add more translations as needed
  },
  es: {
    "navbar.about": "Sobre Nosotros",
    "navbar.services": "Servicios",
    "navbar.gallery": "Galería",
    "navbar.testimonials": "Testimonios",
    "navbar.blog": "Blog",
    "navbar.contact": "Contacto",
    "navbar.bookNow": "Reservar",
    "hero.heading": "Experimenta la Libertad de Volar",
    "hero.subheading": "Sobrevuela las montañas con el piloto profesional Moataz Rachad",
    "hero.button": "Reserva Tu Vuelo",
    // Add more translations as needed
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

// Create the provider
export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguageState] = useState<LanguageCode>("en");

  useEffect(() => {
    // Check if a language preference is stored in localStorage
    const savedLanguage = localStorage.getItem("preferredLanguage") as LanguageCode;
    if (savedLanguage && Object.keys(translations).includes(savedLanguage)) {
      setLanguageState(savedLanguage);
    }
  }, []);

  const setLanguage = (newLanguage: LanguageCode) => {
    setLanguageState(newLanguage);
    localStorage.setItem("preferredLanguage", newLanguage);
  };

  // Translation function
  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook for using the language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
