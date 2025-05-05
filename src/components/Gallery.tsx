
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

const Gallery = () => {
  const [selected, setSelected] = useState<string | null>(null);

  const galleryItems = [
    {
      id: 1,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1504687699362-09f1d2758e96?q=80&w=1974&auto=format&fit=crop',
      alt: 'Paragliding over mountains'
    },
    {
      id: 2,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1600193898957-1259b1da6753?q=80&w=1974&auto=format&fit=crop',
      alt: 'Paragliding tandem flight'
    },
    {
      id: 3,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1524829747128-78471f483d1b?q=80&w=2070&auto=format&fit=crop',
      alt: 'Paragliding above clouds'
    },
    {
      id: 4,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1622256510721-992f0118e1af?q=80&w=1974&auto=format&fit=crop',
      alt: 'Sunset paragliding flight'
    },
    {
      id: 5,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?q=80&w=2135&auto=format&fit=crop',
      alt: 'Mountain valley paragliding'
    },
    {
      id: 6,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1625486302205-70fd73347466?q=80&w=1974&auto=format&fit=crop',
      alt: 'Beach paragliding'
    },
    {
      id: 7,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1621851491520-07ed3f006943?q=80&w=1974&auto=format&fit=crop',
      alt: 'Group paragliding experience'
    },
    {
      id: 8,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1623187653282-9a939d4324cc?q=80&w=2070&auto=format&fit=crop',
      alt: 'Paragliding over water'
    },
  ];

  return (
    <section id="gallery" className="section bg-gray-50">
      <div className="container">
        <h2 className="section-title">Flight Gallery</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Experience the beauty and thrill of paragliding through our collection of stunning moments captured in the sky.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryItems.map((item) => (
            <Dialog key={item.id}>
              <DialogTrigger asChild>
                <div className="relative overflow-hidden rounded-lg shadow-md cursor-pointer group">
                  <img 
                    src={item.src} 
                    alt={item.alt} 
                    className="w-full h-64 object-cover transition duration-300 ease-in-out transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-sm font-semibold bg-black bg-opacity-50 px-4 py-2 rounded-full">
                      View Larger
                    </span>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-3xl p-0 bg-transparent border-none">
                <img 
                  src={item.src} 
                  alt={item.alt} 
                  className="w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-2xl"
                />
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
