
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ServiceCard = ({ 
  title, 
  description, 
  price, 
  image, 
  features 
}: { 
  title: string; 
  description: string; 
  price: string; 
  image: string; 
  features: string[];
}) => {
  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-sky-dark font-semibold">{price}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-4">{description}</p>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button onClick={scrollToBooking} className="w-full">Book Now</Button>
      </CardFooter>
    </Card>
  );
};

const Services = () => {
  const services = [
    {
      title: "Discovery Flight",
      description: "Perfect for first-time flyers looking to experience the thrill of paragliding in a safe, controlled environment.",
      price: "From 600 MAD",
      image: "https://images.unsplash.com/photo-1600193898957-1259b1da6753?q=80&w=1974&auto=format&fit=crop",
      features: [
        "15-20 minute flight",
        "Professional pilot handling the controls",
        "Basic maneuvers introduction",
        "Stunning panoramic views"
      ]
    },
    {
      title: "Adrenaline Flight",
      description: "For thrill-seekers wanting to experience the more dynamic side of paragliding with exciting maneuvers.",
      price: "From 800 MAD",
      image: "https://images.unsplash.com/photo-1503507026605-554935769c10?q=80&w=1974&auto=format&fit=crop",
      features: [
        "25-30 minute flight",
        "Dynamic turns and swoops",
        "Wing-overs experience",
        "Go-Pro video recording option"
      ]
    },
    {
      title: "Group Experience",
      description: "Share the paragliding adventure with friends or family with our special group packages.",
      price: "From 500 MAD/person",
      image: "https://images.unsplash.com/photo-1627471470446-9f1bbbb0f145?q=80&w=1974&auto=format&fit=crop",
      features: [
        "Flights for 3+ people",
        "Group discounts available",
        "Consecutive flight scheduling",
        "Group photo session included"
      ]
    },
    {
      title: "Custom Event",
      description: "Make your special occasion unforgettable with a custom paragliding experience.",
      price: "From 1000 MAD",
      image: "https://images.unsplash.com/photo-1599547332222-499c0339a499?q=80&w=1974&auto=format&fit=crop",
      features: [
        "Perfect for proposals & anniversaries",
        "Personalized flight plan",
        "Special requests accommodation",
        "Professional photography included"
      ]
    }
  ];

  return (
    <section id="services" className="section bg-gray-50">
      <div className="container">
        <h2 className="section-title">Flight Experiences</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Choose from our range of carefully designed paragliding experiences, each offering unique thrills and memories that will last a lifetime.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
