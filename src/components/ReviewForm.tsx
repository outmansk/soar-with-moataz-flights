
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
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

const reviewSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  location: z.string().min(2, { message: "Location must be at least 2 characters." }),
  rating: z.number().min(1).max(5),
  review: z.string().min(10, { message: "Review must be at least 10 characters." }),
});

type ReviewFormData = z.infer<typeof reviewSchema>;

// An array of default profile pictures to use for new reviews
const defaultProfilePictures = [
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1470&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1376&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=1399&auto=format&fit=crop"
];

interface ReviewFormProps {
  onAddTestimonial: (testimonial: {
    quote: string;
    author: string;
    location: string;
    image: string;
  }) => void;
}

const ReviewForm = ({ onAddTestimonial }: ReviewFormProps) => {
  const form = useForm<ReviewFormData>({
    resolver: zodResolver(reviewSchema),
    defaultValues: {
      name: "",
      location: "",
      rating: 5,
      review: "",
    },
  });

  function onSubmit(data: ReviewFormData) {
    // Get a random profile picture from our array
    const randomProfilePic = defaultProfilePictures[Math.floor(Math.random() * defaultProfilePictures.length)];
    
    // Create the testimonial object
    const newTestimonial = {
      quote: data.review,
      author: data.name,
      location: data.location,
      image: randomProfilePic
    };
    
    // Add the testimonial to the parent component
    onAddTestimonial(newTestimonial);
    
    // Show success message
    toast.success("Thank you for your review! Your testimonial has been added.");
    
    // Reset the form
    form.reset();
  }

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Share Your Experience</h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Location</FormLabel>
                  <FormControl>
                    <Input placeholder="City, Country" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <FormField
            control={form.control}
            name="rating"
            render={({ field }) => (
              <FormItem className="space-y-1">
                <FormLabel>Rating</FormLabel>
                <div className="flex space-x-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => field.onChange(star)}
                      className={`text-2xl ${
                        star <= field.value ? 'text-yellow-400' : 'text-gray-300'
                      }`}
                      aria-label={`Rate ${star} stars`}
                    >
                      ★
                    </button>
                  ))}
                </div>
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="review"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Review</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Share your experience with Moataz's paragliding adventure..." 
                    className="min-h-[120px]" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button type="submit" className="w-full md:w-auto bg-sky-dark hover:bg-sky">
            Submit Review
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ReviewForm;
