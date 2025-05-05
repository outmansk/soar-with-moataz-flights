
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { format } from 'date-fns';
import { ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BlogPostProps } from '@/components/BlogPost';

const BlogPostPage = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<BlogPostProps | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, this would fetch from an API
    // For now, we'll simulate with some static data
    const blogPosts: BlogPostProps[] = [
      {
        id: '1',
        title: 'The Ultimate Guide to Your First Paragliding Experience',
        excerpt: 'Everything you need to know before taking your first flight with a professional paragliding pilot.',
        content: `
          <p>Paragliding is an exhilarating experience that allows you to soar through the sky like a bird, feeling the wind beneath you and taking in breathtaking views. As a tandem paragliding pilot with years of experience, I've had the privilege of introducing many first-timers to this incredible sport.</p>
          
          <h2>What to Expect</h2>
          <p>Your first paragliding experience typically begins with a brief introduction and safety briefing. I'll explain the equipment, the takeoff process, and what you can expect during the flight. Don't worry - as a tandem passenger, you don't need any prior experience. I'll handle all the technical aspects of the flight.</p>
          
          <h2>Preparing for Your Flight</h2>
          <ul>
            <li>Wear comfortable clothing and sturdy shoes</li>
            <li>Bring sunglasses and sunscreen</li>
            <li>A light jacket is recommended, as it can be cooler at altitude</li>
            <li>Leave valuable items on the ground</li>
            <li>Bring a camera with a secure strap, or I can take photos for you</li>
          </ul>
          
          <h2>During the Flight</h2>
          <p>The takeoff is gentle and easy - you'll simply walk forward until we're airborne. Once in the air, you can relax and enjoy the sensation of flying. The paraglider is very stable, and most people find the experience surprisingly comfortable. Depending on weather conditions, flights typically last 15-30 minutes.</p>
          
          <h2>Is it Safe?</h2>
          <p>When conducted with a professional pilot and proper equipment, tandem paragliding has an excellent safety record. I use only certified equipment that is regularly inspected and maintained. Weather conditions are carefully assessed before each flight to ensure optimal safety.</p>
          
          <h2>Booking Your Experience</h2>
          <p>Ready to take the leap? Book your tandem paragliding experience today. Feel free to contact me with any questions about the process or to discuss any concerns you might have. I look forward to sharing the skies with you!</p>
        `,
        author: 'Moataz Rachad',
        date: new Date('2024-01-15'),
        image: 'https://images.unsplash.com/photo-1503789146722-cf137a3c0fea?q=80&w=1974&auto=format&fit=crop',
        tags: ['Beginners', 'Guide', 'Safety']
      },
      {
        id: '2',
        title: 'Paragliding Across the Atlas Mountains',
        excerpt: 'A journey through Morocco\'s most beautiful landscapes from a bird\'s eye view.',
        content: `
          <p>The Atlas Mountains of Morocco offer some of the most stunning paragliding opportunities in the world. The combination of reliable thermals, breathtaking landscapes, and unique cultural experiences make this a premier destination for pilots from around the globe.</p>
          
          <h2>My Journey</h2>
          <p>Last month, I embarked on an ambitious cross-country paragliding expedition across the Atlas range. Starting from the foothills near Marrakech, our team of four pilots planned a five-day journey, following the mountain range and landing in small villages along the way.</p>
          
          <h2>The Route</h2>
          <p>Our path took us over diverse terrain, from the red earth and green valleys of the lower Atlas to the stark, snow-capped peaks of the higher mountains. Each day presented new challenges and rewards:</p>
          
          <ul>
            <li>Day 1: Takeoff from Aguergour, flying over traditional Berber villages</li>
            <li>Day 2: Crossing the high plateau, with thermals taking us to over 4,000 meters</li>
            <li>Day 3: Following the ridgeline of Toubkal, Morocco's highest peak</li>
            <li>Day 4: Descending into the verdant valleys of the Anti-Atlas</li>
            <li>Day 5: Final glide to our destination, covering over 250km total distance</li>
          </ul>
          
          <h2>Cultural Encounters</h2>
          <p>One of the most enriching aspects of the journey was the hospitality we received in the mountain villages. Each evening, we would land near a settlement and invariably be welcomed with mint tea, fresh bread, and curious, friendly locals. Many had never seen paragliders before, and we delighted in showing them our equipment and sharing stories despite language barriers.</p>
          
          <h2>Technical Challenges</h2>
          <p>The Atlas Mountains present unique flying conditions. Strong thermals develop by mid-morning, offering excellent lift, but the afternoon winds can become challenging. We learned to take off early, make good distance before noon, and look for landing options by early afternoon when conditions could become more turbulent.</p>
          
          <h2>Join the Adventure</h2>
          <p>While cross-country expeditions require advanced piloting skills, I also offer tandem flights that allow you to experience the beauty of the Atlas Mountains from the air. These flights typically launch from Aguergour, just outside Marrakech, and provide spectacular views of the mountains, valleys, and desert landscapes beyond.</p>
        `,
        author: 'Moataz Rachad',
        date: new Date('2024-02-22'),
        image: 'https://images.unsplash.com/photo-1575286124288-1a0e537fc1ef?q=80&w=2070&auto=format&fit=crop',
        tags: ['Adventure', 'Morocco', 'Atlas Mountains']
      },
      {
        id: '3',
        title: 'Weather Conditions: When is the Perfect Time to Fly?',
        excerpt: 'Understanding weather patterns and optimal conditions for a safe and enjoyable paragliding experience.',
        content: `
          <p>Weather is the most critical factor in paragliding. As pilots, we're constantly monitoring conditions, reading forecasts, and making judgment calls about whether to fly. Understanding the basics of paragliding weather can help you plan your tandem experience and appreciate why flights sometimes need to be rescheduled.</p>
          
          <h2>The Ideal Conditions</h2>
          <p>Perfect paragliding conditions typically include:</p>
          <ul>
            <li>Light to moderate wind (5-15 km/h) blowing directly into the launch area</li>
            <li>Stable air with gentle thermals for lift</li>
            <li>Good visibility with no precipitation</li>
            <li>No approaching frontal systems or storms</li>
          </ul>
          
          <h2>Morning vs. Afternoon Flights</h2>
          <p>In many locations, including our flying sites in Morocco, morning flights tend to be smoother and more gentle - perfect for first-time flyers who might be nervous. Afternoon flights often have stronger thermals, providing more lift and potentially longer flights, but with more turbulence.</p>
          
          <h2>Seasonal Considerations</h2>
          <p>In Morocco, we're fortunate to have excellent flying conditions throughout much of the year:</p>
          <ul>
            <li>Spring (March-May): Perhaps the best season, with stable conditions and moderate temperatures</li>
            <li>Summer (June-August): Very hot, with strong thermals in the middle of the day. Early morning and late afternoon flights are best</li>
            <li>Autumn (September-November): Excellent flying weather returns, similar to spring</li>
            <li>Winter (December-February): Can be good on clear days, though temperatures at altitude can be cold</li>
          </ul>
          
          <h2>Reading the Signs</h2>
          <p>Even without sophisticated weather instruments, there are natural signs that experienced pilots look for:</p>
          <ul>
            <li>Cloud formations: Cumulus clouds often indicate good thermals, while dark, building clouds can signal instability</li>
            <li>Wind on vegetation: Movement of trees and grasses shows wind direction and strength</li>
            <li>Birds soaring: Birds using thermals often mark good lift areas</li>
          </ul>
          
          <h2>Safety First</h2>
          <p>As a professional pilot, I will always prioritize safety over keeping to a schedule. If conditions aren't suitable, I'll recommend rescheduling your flight. While this can be disappointing, remember that it's being done to ensure your experience is not only safe but enjoyable. A slightly delayed flight is always better than a uncomfortable one.</p>
          
          <h2>Booking Advice</h2>
          <p>When booking your paragliding experience, I recommend:</p>
          <ul>
            <li>Planning for flexibility with dates when possible</li>
            <li>Booking earlier in your trip rather than on the last day, allowing for rebooking if needed</li>
            <li>Being understanding if we need to change plans based on conditions</li>
          </ul>
          
          <p>Remember, the weather that makes paragliding possible also makes it unpredictable - that's part of the adventure!</p>
        `,
        author: 'Moataz Rachad',
        date: new Date('2024-03-10'),
        image: 'https://images.unsplash.com/photo-1505508740470-1c73e96c0ba7?q=80&w=2071&auto=format&fit=crop',
        tags: ['Weather', 'Safety', 'Tips']
      },
      {
        id: '4',
        title: 'The Psychology of Flying: Overcoming Fear of Heights',
        excerpt: 'How to mentally prepare yourself for paragliding and conquer your fear of heights.',
        content: `
          <p>It's entirely normal to feel apprehensive about paragliding, especially if you have a fear of heights. As someone who has introduced hundreds of people to the sport, I've seen all levels of anxiety transform into pure joy once we're in the air. This article shares strategies to help you manage fear and fully enjoy your paragliding experience.</p>
          
          <h2>Understanding Your Fear</h2>
          <p>First, it's important to recognize that fear of heights (acrophobia) is a common and natural protective mechanism. Our brains are wired to be cautious around edges and drops - it's kept our species alive! However, paragliding creates a different sensation than standing on a ledge or looking down from a tall building.</p>
          
          <h2>The Paragliding Difference</h2>
          <p>Many people with height fears are surprised to find that paragliding doesn't trigger the same anxieties as other height-related activities. Why?</p>
          <ul>
            <li>No physical connection to the ground means no vertigo-inducing reference points</li>
            <li>The gradual ascent allows your brain to adjust comfortably</li>
            <li>The stability of modern paragliders provides a secure feeling</li>
            <li>The focus on the horizon rather than looking straight down reduces anxiety</li>
          </ul>
          
          <h2>Preparation Techniques</h2>
          <p>Here are proven strategies to help manage pre-flight anxiety:</p>
          <ul>
            <li><strong>Education:</strong> Understanding the equipment, safety systems, and physics of flight can reduce fear of the unknown</li>
            <li><strong>Visualization:</strong> Spend time before your flight visualizing a positive, enjoyable experience</li>
            <li><strong>Breathing:</strong> Practice deep, slow breathing to calm your nervous system</li>
            <li><strong>Communication:</strong> Let your pilot know about your concerns - we're experienced in helping nervous flyers</li>
          </ul>
          
          <h2>During the Flight</h2>
          <p>Once airborne, try these techniques:</p>
          <ul>
            <li>Focus on the horizon rather than looking straight down</li>
            <li>Engage with the experience - notice the sensations, the view, the sounds</li>
            <li>Continue with controlled breathing</li>
            <li>Trust your pilot and communicate if you need reassurance</li>
          </ul>
          
          <h2>Success Stories</h2>
          <p>Some of my most rewarding experiences as a pilot have been with guests who began terrified but ended their flights elated. I recall one client who was shaking before takeoff but was begging for a longer flight by the end. Another couldn't even look at the edge of the takeoff area initially, but within minutes of being airborne was completely relaxed and taking photos.</p>
          
          <h2>The Transformation</h2>
          <p>Beyond just enjoying the flight, many people find that paragliding helps them with their general fear of heights. The controlled exposure in a safe environment can be therapeutic, giving your brain evidence that height experiences can be positive.</p>
          
          <h2>Taking the Leap</h2>
          <p>If you're reading this and feeling nervous about booking a paragliding experience, know that you're not alone. The vast majority of my first-time passengers have some degree of apprehension. Almost without exception, they land with huge smiles and a new perspective - not just of the landscape, but of their own capabilities.</p>
          
          <p>Ready to transform your fear into exhilaration? Reach out to discuss how we can make your first flight a comfortable and memorable experience.</p>
        `,
        author: 'Moataz Rachad',
        date: new Date('2024-04-05'),
        image: 'https://images.unsplash.com/photo-1505929528589-fb93b0bae09e?q=80&w=2070&auto=format&fit=crop',
        tags: ['Psychology', 'Fear', 'Preparation']
      }
    ];

    const foundPost = blogPosts.find(post => post.id === id);
    setPost(foundPost || null);
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-sky-dark"></div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="pt-20 min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">Blog Post Not Found</h2>
        <Button asChild variant="outline">
          <Link to="/blog">
            <ChevronLeft size={16} className="mr-2" />
            Back to Blog
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="pt-20 bg-gray-50">
      <div className="container py-16">
        <Button asChild variant="outline" className="mb-6">
          <Link to="/blog">
            <ChevronLeft size={16} className="mr-2" />
            Back to Blog
          </Link>
        </Button>
        
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="relative h-[300px] md:h-[400px]">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-full object-cover" 
            />
          </div>
          
          <div className="p-6 md:p-10">
            <div className="flex gap-2 mb-4 flex-wrap">
              {post.tags.map((tag, index) => (
                <span key={index} className="bg-sky-light text-sky-dark text-xs px-2 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
            
            <div className="flex items-center text-gray-500 mb-8">
              <span className="font-medium mr-4">{post.author}</span>
              <span>{format(post.date, 'MMMM dd, yyyy')}</span>
            </div>
            
            <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.content || '' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;
