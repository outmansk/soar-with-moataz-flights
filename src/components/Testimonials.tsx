
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const TestimonialCard = ({ 
  quote, 
  author, 
  location, 
  image 
}: { 
  quote: string; 
  author: string; 
  location: string; 
  image: string;
}) => {
  return (
    <Card className="h-full">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="mb-4 flex">
          {[1, 2, 3, 4, 5].map((star) => (
            <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        
        <blockquote className="text-gray-700 italic mb-6 flex-grow">
          "{quote}"
        </blockquote>
        
        <div className="flex items-center">
          <div className="mr-4">
            <img 
              src={image} 
              alt={author}
              className="h-12 w-12 rounded-full object-cover border-2 border-sky-200" 
            />
          </div>
          <div>
            <p className="font-semibold text-gray-800">{author}</p>
            <p className="text-sm text-gray-500">{location}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      quote: "The experience was beyond words! Moataz made me feel safe the entire time while still giving me the thrill of a lifetime. Will definitely be back for another flight!",
      author: "Sarah T.",
      location: "Paris, France",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop"
    },
    {
      quote: "I booked a surprise flight for our anniversary, and my wife couldn't stop talking about it for weeks. Moataz's professionalism and skill made this an unforgettable celebration.",
      author: "Ahmed K.",
      location: "Casablanca, Morocco",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
    },
    {
      quote: "As someone terrified of heights, I never thought I'd enjoy paragliding. Moataz's calm demeanor and expertise completely changed my perspective. It was magical!",
      author: "Emma L.",
      location: "London, UK",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop"
    },
    {
      quote: "Our group of friends had an amazing day flying with Moataz. The views were spectacular and the photos he took for us captured memories we'll cherish forever.",
      author: "Carlos M.",
      location: "Barcelona, Spain",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974&auto=format&fit=crop"
    }
  ];

  return (
    <section id="testimonials" className="section bg-white">
      <div className="container">
        <h2 className="section-title">What Clients Say</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Hear from those who have experienced the thrill of soaring through the skies with Moataz.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
