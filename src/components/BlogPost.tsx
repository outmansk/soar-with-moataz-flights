
import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { Card, CardContent } from '@/components/ui/card';

export interface BlogPostProps {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  author: string;
  date: Date;
  image: string;
  tags: string[];
}

const BlogPost: React.FC<BlogPostProps> = ({ 
  id, 
  title, 
  excerpt, 
  author, 
  date, 
  image, 
  tags 
}) => {
  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300" 
        />
      </div>
      <CardContent className="p-6 flex-grow flex flex-col">
        <div className="flex gap-2 mb-3 flex-wrap">
          {tags.map((tag, index) => (
            <span key={index} className="bg-sky-light text-sky-dark text-xs px-2 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-semibold mb-2 hover:text-sky-dark transition-colors">
          <Link to={`/blog/${id}`}>{title}</Link>
        </h3>
        <p className="text-gray-600 mb-4 flex-grow">{excerpt}</p>
        <div className="flex items-center justify-between text-sm text-gray-500 mt-auto">
          <span>{author}</span>
          <span>{format(date, 'MMM dd, yyyy')}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default BlogPost;
