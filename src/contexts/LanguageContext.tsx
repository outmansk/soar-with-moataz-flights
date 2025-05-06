
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
    "about.title": "About Moataz",
    "services.title": "Flight Experiences",
    "services.description": "Choose from our range of carefully designed paragliding experiences, each offering unique thrills and memories that will last a lifetime.",
    "gallery.title": "Flight Gallery",
    "gallery.description": "Experience the beauty and thrill of paragliding through our collection of stunning moments captured in the sky.",
    "testimonials.title": "What Clients Say",
    "testimonials.description": "Hear from those who have experienced the thrill of soaring through the skies with Moataz.",
    "testimonials.shareExperience": "Share Your Experience",
    "contact.title": "Contact Us",
    "contact.description": "Have questions or ready to book your paragliding adventure? Reach out to us through any of these channels.",
    "contact.callUs": "Call Us",
    "contact.whatsapp": "WhatsApp",
    "contact.chatNow": "Chat Now",
    "contact.location": "Flight Location",
    "contact.locationText": "Our main takeoff site is located in Aguergour, approximately 35km from Marrakech. We also operate at various sites depending on weather conditions.",
    "booking.title": "Book Your Flight",
    "footer.quickLinks": "Quick Links",
    "footer.home": "Home",
    "footer.about": "About",
    "footer.services": "Services",
    "footer.bookNow": "Book Now",
    "footer.contact": "Contact",
    "footer.whatsapp": "WhatsApp",
    "footer.location": "Location",
    "footer.rights": "All rights reserved."
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
    "about.title": "À propos de Moataz",
    "services.title": "Expériences de Vol",
    "services.description": "Choisissez parmi notre gamme d'expériences de parapente soigneusement conçues, offrant chacune des sensations uniques et des souvenirs qui dureront toute une vie.",
    "gallery.title": "Galerie de Vol",
    "gallery.description": "Découvrez la beauté et les sensations du parapente à travers notre collection de moments magnifiques capturés dans le ciel.",
    "testimonials.title": "Ce que disent les clients",
    "testimonials.description": "Écoutez ceux qui ont vécu l'émotion de voler dans le ciel avec Moataz.",
    "testimonials.shareExperience": "Partagez Votre Expérience",
    "contact.title": "Contactez-nous",
    "contact.description": "Vous avez des questions ou êtes prêt à réserver votre aventure en parapente? Contactez-nous via l'un de ces canaux.",
    "contact.callUs": "Appelez-nous",
    "contact.whatsapp": "WhatsApp",
    "contact.chatNow": "Discuter Maintenant",
    "contact.location": "Lieu de Vol",
    "contact.locationText": "Notre site de décollage principal est situé à Aguergour, à environ 35 km de Marrakech. Nous opérons également sur différents sites selon les conditions météorologiques.",
    "booking.title": "Réservez Votre Vol",
    "footer.quickLinks": "Liens Rapides",
    "footer.home": "Accueil",
    "footer.about": "À propos",
    "footer.services": "Services",
    "footer.bookNow": "Réserver",
    "footer.contact": "Contact",
    "footer.whatsapp": "WhatsApp",
    "footer.location": "Lieu",
    "footer.rights": "Tous droits réservés."
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
    "about.title": "Sobre Moataz",
    "services.title": "Experiencias de Vuelo",
    "services.description": "Elija entre nuestra gama de experiencias de parapente cuidadosamente diseñadas, cada una ofreciendo emociones únicas y recuerdos que durarán toda la vida.",
    "gallery.title": "Galería de Vuelo",
    "gallery.description": "Experimente la belleza y la emoción del parapente a través de nuestra colección de momentos impresionantes capturados en el cielo.",
    "testimonials.title": "Lo que dicen los clientes",
    "testimonials.description": "Escuche a aquellos que han experimentado la emoción de volar por los cielos con Moataz.",
    "testimonials.shareExperience": "Comparte tu Experiencia",
    "contact.title": "Contáctenos",
    "contact.description": "¿Tiene preguntas o está listo para reservar su aventura de parapente? Comuníquese con nosotros a través de cualquiera de estos canales.",
    "contact.callUs": "Llámenos",
    "contact.whatsapp": "WhatsApp",
    "contact.chatNow": "Chatear Ahora",
    "contact.location": "Ubicación de Vuelo",
    "contact.locationText": "Nuestro sitio principal de despegue está ubicado en Aguergour, aproximadamente a 35 km de Marrakech. También operamos en varios sitios según las condiciones climáticas.",
    "booking.title": "Reserva tu Vuelo",
    "footer.quickLinks": "Enlaces Rápidos",
    "footer.home": "Inicio",
    "footer.about": "Sobre Nosotros",
    "footer.services": "Servicios",
    "footer.bookNow": "Reservar",
    "footer.contact": "Contacto",
    "footer.whatsapp": "WhatsApp",
    "footer.location": "Ubicación",
    "footer.rights": "Todos los derechos reservados."
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
    } else {
      // Try to detect browser language
      const browserLang = navigator.language.split('-')[0] as LanguageCode;
      if (Object.keys(translations).includes(browserLang)) {
        setLanguageState(browserLang);
        localStorage.setItem("preferredLanguage", browserLang);
      }
    }
  }, []);

  const setLanguage = (newLanguage: LanguageCode) => {
    setLanguageState(newLanguage);
    localStorage.setItem("preferredLanguage", newLanguage);
    // Force a slight DOM update to ensure all components re-render with new language
    document.documentElement.lang = newLanguage;
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
