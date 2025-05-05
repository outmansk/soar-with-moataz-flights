
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="section bg-white">
      <div className="container">
        <h2 className="section-title">About Your Pilot</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mt-16">
          {/* Pilot Image */}
          <div className="rounded-lg overflow-hidden shadow-lg transform hover:scale-[1.02] transition duration-300">
            <img 
              src="https://images.unsplash.com/photo-1617720087359-3414528de950?q=80&w=987&auto=format&fit=crop" 
              alt="Moataz Rachad" 
              className="w-full h-auto object-cover" 
            />
          </div>
          
          {/* Pilot Info */}
          <div className="space-y-6">
            <h3 className="text-3xl font-semibold text-gray-800">Moataz Rachad</h3>
            <p className="text-gray-600 leading-relaxed">
              With over 10 years of paragliding experience, Moataz Rachad is a certified professional pilot dedicated to sharing the exhilarating experience of free flight with others. His passion for flying and commitment to safety make him one of the most trusted paragliding pilots in the region.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center">
                <span className="font-semibold text-sky-700 w-32">License:</span>
                <span>Professional Paragliding Pilot</span>
              </div>
              <div className="flex items-center">
                <span className="font-semibold text-sky-700 w-32">Certifications:</span>
                <span>BI, BP, BPC</span>
              </div>
              <div className="flex items-center">
                <span className="font-semibold text-sky-700 w-32">Club Number:</span>
                <span>MR 3857</span>
              </div>
              <div className="flex items-center">
                <span className="font-semibold text-sky-700 w-32">Federation:</span>
                <span>Moroccan Federation of Air Sports</span>
              </div>
            </div>
            
            <blockquote className="italic text-gray-700 border-l-4 border-sky-500 pl-4 py-2 my-6">
              "My mission is to create unforgettable moments of freedom in the sky, ensuring safety while delivering the pure joy of flight."
            </blockquote>
            
            <div className="pt-4">
              <h4 className="text-xl font-semibold text-gray-800 mb-3">Awards & Achievements</h4>
              <div className="flex flex-wrap gap-3">
                <Card className="bg-sky-50 border-sky-200">
                  <CardContent className="p-4">
                    <p className="font-medium">Coupe du Trône 2023</p>
                  </CardContent>
                </Card>
                <Card className="bg-sky-50 border-sky-200">
                  <CardContent className="p-4">
                    <p className="font-medium">5000+ Flight Hours</p>
                  </CardContent>
                </Card>
                <Card className="bg-sky-50 border-sky-200">
                  <CardContent className="p-4">
                    <p className="font-medium">Advanced Safety Training</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
