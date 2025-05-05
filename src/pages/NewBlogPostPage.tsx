
import React from 'react';
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/sonner";

const blogPostSchema = z.object({
  title: z.string().min(5, { message: "Title must be at least 5 characters." }),
  author: z.string().min(2, { message: "Author name must be at least 2 characters." }),
  excerpt: z.string().min(10, { message: "Excerpt must be at least 10 characters." }).max(200, { message: "Excerpt must be less than 200 characters." }),
  content: z.string().min(50, { message: "Content must be at least 50 characters." }),
  tags: z.string().min(3, { message: "Please provide at least one tag." }),
  image: z.string().url({ message: "Please enter a valid image URL." }),
});

type BlogPostFormData = z.infer<typeof blogPostSchema>;

const NewBlogPostPage = () => {
  const navigate = useNavigate();
  
  const form = useForm<BlogPostFormData>({
    resolver: zodResolver(blogPostSchema),
    defaultValues: {
      title: "",
      author: "",
      excerpt: "",
      content: "",
      tags: "",
      image: "",
    },
  });

  function onSubmit(data: BlogPostFormData) {
    // In a real application, we would send this data to a server
    console.log("Blog post submitted:", data);
    
    // Show success message
    toast.success("Thank you for sharing your story! It will be published after moderation.");
    
    // Redirect to blog page
    navigate('/blog');
  }

  return (
    <div className="pt-20 bg-gray-50">
      <div className="container py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">Share Your Paragliding Story</h1>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Have an amazing experience to share? Tell us about your paragliding adventure with Moataz.
        </p>
        
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm p-6 md:p-8">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input placeholder="Your blog post title" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="author"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="excerpt"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Short Excerpt</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="A brief summary of your post (will appear in previews)" 
                        className="resize-none" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="content"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Content</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Share your paragliding experience in detail..." 
                        className="min-h-[200px]" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="tags"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tags</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Separate tags with commas (e.g. Beginners, Adventure, Morocco)" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="image"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Image URL</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Link to a photo from your experience" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div className="flex justify-end">
                <Button type="submit" className="bg-sky-dark hover:bg-sky">
                  Submit Story
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default NewBlogPostPage;
