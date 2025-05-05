
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PhoneCall, MessageSquare } from 'lucide-react';

const Contact = () => {
  const openWhatsApp = () => {
    window.open("https://wa.me/+2120605387041", "_blank");
  };

  return (
    <section id="contact" className="section bg-gray-50">
      <div className="container">
        <h2 className="section-title">Contact Us</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Have questions or ready to book your paragliding adventure? Reach out to us through any of these channels.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card>
              <CardContent className="flex items-center gap-4 p-6">
                <div className="bg-sky-100 p-3 rounded-full">
                  <PhoneCall className="h-6 w-6 text-sky-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Call Us</h3>
                  <p className="text-gray-600">+212 060 538 7041</p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="flex items-center gap-4 p-6">
                <div className="bg-sky-100 p-3 rounded-full">
                  <MessageSquare className="h-6 w-6 text-sky-600" />
                </div>
                <div>
                  <h3 className="font-semibold">WhatsApp</h3>
                  <p className="text-gray-600">Message us directly</p>
                </div>
                <Button 
                  onClick={openWhatsApp}
                  className="ml-auto bg-green-500 hover:bg-green-600"
                >
                  Chat Now
                </Button>
              </CardContent>
            </Card>
            
            <div>
              <h3 className="text-lg font-semibold mb-3">Flight Location</h3>
              <p className="text-gray-600 mb-4">
                Our main takeoff site is located in Aguergour, approximately 35km from Marrakech. We also operate at various sites depending on weather conditions.
              </p>
            </div>
          </div>
          
          {/* Map */}
          <div className="h-full min-h-[300px] rounded-lg overflow-hidden shadow-md">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54301.95553251829!2d-8.231260665966824!3d31.505546300000013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafe85fc814b31f%3A0xa87ab576df3efa03!2sAguergour!5e0!3m2!1sen!2sma!4v1620918225388!5m2!1sen!2sma" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
