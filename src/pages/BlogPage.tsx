
import React from 'react';
import BlogPost, { BlogPostProps } from '@/components/BlogPost';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const BlogPage = () => {
  const blogPosts: BlogPostProps[] = [
    {
      id: '1',
      title: 'The Ultimate Guide to Your First Paragliding Experience',
      excerpt: 'Everything you need to know before taking your first flight with a professional paragliding pilot.',
      author: 'Moataz Rachad',
      date: new Date('2024-01-15'),
      image: 'https://images.unsplash.com/photo-1503789146722-cf137a3c0fea?q=80&w=1974&auto=format&fit=crop',
      tags: ['Beginners', 'Guide', 'Safety']
    },
    {
      id: '2',
      title: 'Paragliding Across the Atlas Mountains',
      excerpt: 'A journey through Morocco\'s most beautiful landscapes from a bird\'s eye view.',
      author: 'Moataz Rachad',
      date: new Date('2024-02-22'),
      image: 'https://images.unsplash.com/photo-1575286124288-1a0e537fc1ef?q=80&w=2070&auto=format&fit=crop',
      tags: ['Adventure', 'Morocco', 'Atlas Mountains']
    },
    {
      id: '3',
      title: 'Weather Conditions: When is the Perfect Time to Fly?',
      excerpt: 'Understanding weather patterns and optimal conditions for a safe and enjoyable paragliding experience.',
      author: 'Moataz Rachad',
      date: new Date('2024-03-10'),
      image: 'https://images.unsplash.com/photo-1505508740470-1c73e96c0ba7?q=80&w=2071&auto=format&fit=crop',
      tags: ['Weather', 'Safety', 'Tips']
    },
    {
      id: '4',
      title: 'The Psychology of Flying: Overcoming Fear of Heights',
      excerpt: 'How to mentally prepare yourself for paragliding and conquer your fear of heights.',
      author: 'Moataz Rachad',
      date: new Date('2024-04-05'),
      image: 'https://images.unsplash.com/photo-1505929528589-fb93b0bae09e?q=80&w=2070&auto=format&fit=crop',
      tags: ['Psychology', 'Fear', 'Preparation']
    }
  ];

  return (
    <div className="pt-20 bg-gray-50">
      <div className="container py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Paragliding Blog</h1>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Insights, tips, and adventures from the skies with professional paraglider Moataz Rachad.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogPost key={post.id} {...post} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button asChild className="bg-sky-dark hover:bg-sky">
            <Link to="/blog/new">Share Your Story</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
