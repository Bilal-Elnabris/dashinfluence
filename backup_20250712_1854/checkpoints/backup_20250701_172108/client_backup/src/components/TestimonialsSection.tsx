import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { SparklesCore } from "@/components/SparklesCore";

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Michael Thompson",
      company: "Premium Auto Detailing",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
      quote:
        "DashInfluence automated my booking completely. I went from missing 30% of calls to capturing every single one. My revenue increased by 40% in just 60 days.",
      result: "+$180K additional revenue in first quarter",
      rating: 5,
    },
    {
      name: "Sarah Chen",
      company: "Elite Car Care",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b412f526?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
      quote:
        "Our team was drowning in administrative work. Now our AI handles appointment scheduling, follow-ups, and client communications. We focus purely on delivering exceptional service.",
      result: "Saved 25 hours/week across team",
      rating: 5,
    },
    {
      name: "David Rodriguez",
      company: "Mobile Detail Pro",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
      quote:
        "The AI never sleeps and never misses a call. I was losing thousands in missed appointments. Now I'm booking more jobs than I can handle. It's been a game-changer.",
      result: "300% increase in booking rate",
      rating: 5,
    },
    {
      name: "Jennifer Martinez",
      company: "Sparkle Auto Spa",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
      quote:
        "The AI handles customer inquiries 24/7. I used to lose bookings after hours, but now we capture every opportunity. Our revenue jumped 35% in the first month.",
      result: "35% revenue increase in first month",
      rating: 5,
    },
    {
      name: "Robert Johnson",
      company: "Classic Car Detailing",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
      quote:
        "As a classic car specialist, I need to focus on quality work, not phone calls. The AI handles all my scheduling perfectly and my clients love the professional experience.",
      result: "50% more time for quality work",
      rating: 5,
    },
    {
      name: "Amanda Wilson",
      company: "Express Wash & Detail",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b412f526?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
      quote:
        "We run a high-volume operation and the AI keeps up perfectly. No more missed calls or double bookings. Our efficiency has improved dramatically.",
      result: "200% increase in booking efficiency",
      rating: 5,
    },
    {
      name: "Carlos Mendez",
      company: "Luxury Auto Care",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
      quote:
        "Our luxury clientele expects premium service. The AI provides exactly that - professional, consistent, and always available. Our customer satisfaction scores are through the roof.",
      result: "98% customer satisfaction rate",
      rating: 5,
    },
    {
      name: "Lisa Park",
      company: "Eco-Friendly Detailing",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
      quote:
        "The AI understands our eco-friendly approach and communicates our values perfectly to customers. It's like having a perfect team member who never takes a day off.",
      result: "40% increase in repeat customers",
      rating: 5,
    },
    {
      name: "Tom Anderson",
      company: "Mobile Detail Express",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
      quote:
        "Running a mobile business means I'm always on the road. The AI handles all my scheduling and customer communication while I focus on delivering great results.",
      result: "60% reduction in administrative time",
      rating: 5,
    },
    {
      name: "Rachel Green",
      company: "Family Auto Care",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b412f526?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
      quote:
        "As a family business, we needed something that could grow with us. The AI scales perfectly and has helped us expand our services without hiring more staff.",
      result: "Tripled our service capacity",
      rating: 5,
    },
  ];

  // Group testimonials into sets of 3
  const testimonialGroups = [];
  for (let i = 0; i < testimonials.length; i += 3) {
    testimonialGroups.push(testimonials.slice(i, i + 3));
  }

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialGroups.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonialGroups.length) % testimonialGroups.length
    );
  };

  return (
    <div className="section-padding bg-gradient-to-r from-slate-100 to-gray-100 dark:from-slate-800 dark:to-gray-800 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <SparklesCore
          id="tsparticlestestimonials"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={80}
          className="w-full h-full"
          particleColor="#ffcf00"
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            What Our Clients Say
          </h2>
          <div className="w-24 h-1 bg-[#ffcf00] mx-auto mb-6 border-b-2 border-dashed border-[#ffcf00]"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join hundreds of car detailing businesses that have transformed
            their operations with AI automation
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto px-8">
          {/* Navigation Arrows */}
          <Button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>

          <Button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>

          {/* Current Group of Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-500 ease-in-out">
            {testimonialGroups[currentIndex]?.map((testimonial, index) => (
              <Card
                key={`${currentIndex}-${index}`}
                className="p-6 shadow-lg hover:shadow-xl transition-all duration-500 ease-in-out border-0 bg-card transform hover:scale-105"
                style={{
                  animation: `slideIn 0.5s ease-out ${index * 0.1}s both`,
                }}
              >
                <CardContent className="p-6">
                  {/* Quote Icon */}
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-[#ffcf00]/10 rounded-full flex items-center justify-center">
                      <Quote className="w-6 h-6 text-[#ffcf00]" />
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-[#ffcf00] fill-current"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-muted-foreground mb-6 italic text-center leading-relaxed text-sm">
                    "{testimonial.quote}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center justify-center mb-4">
                    <img
                      src={testimonial.image}
                      alt={`${testimonial.name}, ${testimonial.company}`}
                      className="w-12 h-12 rounded-full mr-4 object-cover border-2 border-[#ffcf00]/20"
                    />
                    <div className="text-center">
                      <h4 className="font-bold text-foreground text-sm">
                        {testimonial.name}
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>

                  {/* Result */}
                  <div className="text-center">
                    <div className="inline-block bg-[#ffcf00]/10 text-[#ffcf00] font-bold px-4 py-2 rounded-full text-sm">
                      {testimonial.result}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonialGroups.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-[#ffcf00]" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-[#ffcf00] mb-2">500+</div>
            <div className="text-muted-foreground">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#ffcf00] mb-2">40%</div>
            <div className="text-muted-foreground">
              Average Revenue Increase
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#ffcf00] mb-2">24/7</div>
            <div className="text-muted-foreground">AI Availability</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#ffcf00] mb-2">4.9/5</div>
            <div className="text-muted-foreground">Client Rating</div>
          </div>
        </div>
      </div>
    </div>
  );
}
