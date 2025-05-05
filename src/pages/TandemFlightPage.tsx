
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Camera, Video, Clock, Users, Star, ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const TandemFlightPage = () => {
  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      window.scrollTo({
        top: bookingSection.offsetTop - 100,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
      <div className="container py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Vol Tandem en Parapente</h1>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Une expérience unique sur Marrakech avec des pilotes professionnels
        </p>

        {/* Hero Image */}
        <div className="relative h-96 rounded-xl overflow-hidden mb-12 shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1600193898957-1259b1da6753?q=80&w=1974&auto=format&fit=crop"
            alt="Vol tandem en parapente"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
            <div className="p-6 text-white">
              <h2 className="text-3xl font-bold mb-2">Service de Luxe</h2>
              <p className="text-lg">Profitez d'un vol inoubliable avec des professionnels qualifiés</p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          {/* Left Column - Main Info */}
          <div>
            <Card className="mb-8">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">À propos du Vol Tandem</h2>
                <p className="text-gray-600 mb-6">
                  Le vol tandem en parapente avec moniteur est une activité unique sur Marrakech. Vous allez profiter 
                  d'un service de luxe avec des pilotes professionnels qualifiés par l'état marocain, possédant 
                  des brevets internationaux.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Clock className="text-sky-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-800">Durée du Vol</h3>
                      <p className="text-gray-600">Le vol en parapente dure généralement entre 20 et 30 minutes selon les conditions.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Video className="text-sky-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-800">Vidéo GoPro incluse</h3>
                      <p className="text-gray-600">Votre expérience sera filmée avec une caméra GoPro de haute qualité. La vidéo est offerte par le pilote.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Users className="text-sky-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-800">Briefing complet</h3>
                      <p className="text-gray-600">À votre arrivée, vous recevrez un briefing pour comprendre l'activité et comment vous préparer.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">L'Expérience de Vol</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="text-sky-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-800">Transport au site de décollage</h3>
                      <p className="text-gray-600">La route vers le décollage est de 5 minutes du point de rendez-vous. Le transport sera avec la voiture du club, accompagné par les pilotes et le matériel.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Star className="text-sky-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-800">Vue panoramique</h3>
                      <p className="text-gray-600">Pendant que le pilote fait ses préparations, vous pourrez prendre des photos d'une vue panoramique inoubliable du sommet de la montagne.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <ArrowDown className="text-sky-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-800">Atterrissage en douceur</h3>
                      <p className="text-gray-600">Le parapente vole à environ 35 km/h, ce qui garantit une expérience agréable dans les airs. L'atterrissage sera doux comme une plume.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Camera className="text-sky-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-800">Après le vol</h3>
                      <p className="text-gray-600">Après l'atterrissage, profitez d'un thé et de petits gâteaux marocains tout en recevant votre vidéo sur place.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Right Column - CTA and Logistics */}
          <div>
            <Card className="mb-8 bg-sky-50 border-sky-100">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4 text-sky-800">Réservez votre Vol</h2>
                <p className="text-gray-700 mb-6">
                  Après avoir passé votre réservation, vous recevrez la localisation GPS qui vous indiquera le point d'atterrissage et le lieu de rendez-vous.
                </p>
                
                <div className="bg-white p-4 rounded-lg border border-sky-100 mb-6">
                  <h3 className="font-semibold text-gray-800 mb-2">Ce qui est inclus:</h3>
                  <ul className="space-y-2">
                    {[
                      'Vol tandem de 20-30 minutes',
                      'Pilote professionnel certifié',
                      'Transport au site de décollage',
                      'Vidéo GoPro de votre expérience',
                      'Thé et pâtisseries marocaines après le vol',
                      'Assurance complète'
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <Button 
                    onClick={scrollToBooking} 
                    className="w-full bg-sky-600 hover:bg-sky-700 text-lg py-6"
                  >
                    Réserver maintenant
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    asChild
                    className="w-full border-sky-600 text-sky-600 hover:bg-sky-50"
                  >
                    <Link to="/blog">Voir nos expériences</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Questions fréquentes</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-800">Qui peut faire du parapente tandem?</h3>
                    <p className="text-gray-600">Presque tout le monde! Pas besoin d'expérience préalable. Les enfants (avec autorisation parentale) et les seniors peuvent participer.</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-800">Que faut-il porter?</h3>
                    <p className="text-gray-600">Des vêtements confortables, des chaussures fermées (type baskets) et un coupe-vent si possible.</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-800">Quelle est la meilleure période pour voler?</h3>
                    <p className="text-gray-600">Les vols ont lieu toute l'année, mais les meilleures conditions sont généralement le matin et en début de soirée.</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-800">Comment se fait le paiement?</h3>
                    <p className="text-gray-600">Le paiement peut être effectué en ligne lors de la réservation ou sur place avant le vol.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Call to action */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Prêt pour l'aventure?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Réservez votre vol tandem aujourd'hui et vivez une expérience inoubliable au-dessus des montagnes de l'Atlas.
          </p>
          <Button onClick={scrollToBooking} className="bg-sky-600 hover:bg-sky-700 text-lg py-6 px-8">
            Réserver mon vol
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TandemFlightPage;
