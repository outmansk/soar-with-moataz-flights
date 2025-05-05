
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Trophy } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section bg-white">
      <div className="container">
        <h2 className="section-title">About Your Pilot</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-start mt-16">
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
                <span>BI (2016), BP (2017), BPC (2023)</span>
              </div>
              <div className="flex items-center">
                <span className="font-semibold text-sky-700 w-32">Club Number:</span>
                <span>MR 3857</span>
              </div>
              <div className="flex items-center">
                <span className="font-semibold text-sky-700 w-32">Insurance ID:</span>
                <span>050224000018</span>
              </div>
              <div className="flex items-center">
                <span className="font-semibold text-sky-700 w-32">Federation:</span>
                <span>Moroccan Royal Federation of Light and Sport Aviation</span>
              </div>
            </div>
            
            <blockquote className="italic text-gray-700 border-l-4 border-sky-500 pl-4 py-2 my-6">
              "My mission is to create unforgettable moments of freedom in the sky, ensuring safety while delivering the pure joy of flight."
            </blockquote>
            
            <div className="pt-4">
              <h4 className="text-xl font-semibold text-gray-800 mb-3">Awards & Achievements</h4>
              <div className="flex flex-wrap gap-3">
                <Card className="bg-sky-50 border-sky-200">
                  <CardContent className="p-4 flex items-center gap-2">
                    <Trophy className="text-sky-700" />
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
          
          {/* Credentials & Awards */}
          <div className="space-y-8">
            <Tabs defaultValue="license" className="w-full">
              <TabsList className="w-full grid grid-cols-2">
                <TabsTrigger value="license">Official License</TabsTrigger>
                <TabsTrigger value="awards">Awards</TabsTrigger>
              </TabsList>
              <TabsContent value="license" className="mt-6">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="/public/lovable-uploads/decba7f7-2490-4988-9542-758fd3d11ea9.png" 
                    alt="Moataz Rachad's Official Pilot License" 
                    className="w-full h-auto" 
                  />
                </div>
                <div className="mt-4 bg-sky-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-sky-800 mb-2">License Details</h5>
                  <ul className="space-y-1 text-sm">
                    <li><span className="font-medium">BI:</span> Brevet Initial / Beginner Certificate (obtained 27.11.2016)</li>
                    <li><span className="font-medium">BP:</span> Brevet Pilote / Pilot Certificate (obtained 20.02.2017)</li>
                    <li><span className="font-medium">BPC:</span> Brevet Pilote Confirmé / Confirmed Pilot Certificate (obtained 25.11.2023)</li>
                  </ul>
                </div>
              </TabsContent>
              <TabsContent value="awards" className="mt-6">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="/public/lovable-uploads/9534ede3-ed8c-479b-b177-38e3aad35f14.png" 
                    alt="Moataz Rachad with Coupe du Trône Trophy" 
                    className="w-full h-auto" 
                  />
                </div>
                <div className="mt-4 bg-sky-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-sky-800 mb-2">Coupe du Trône 2023</h5>
                  <p className="text-gray-700">
                    Moataz proudly holding the prestigious Coupe du Trône trophy, one of Morocco's highest achievements in paragliding competitions.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
