import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Mike Thompson",
      company: "Thompson's Auto Detail",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
      quote:
        "I was skeptical at first, but this AI thing actually works. Used to miss calls all the time when I was working on cars. Now it catches everything and books appointments even when I'm not around. Pretty cool.",
      result: "No more missed calls",
      rating: 5,
    },
    {
      name: "Sarah Chen",
      company: "Elite Car Care",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b412f526?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
      quote:
        "Our team was spending way too much time on the phone and scheduling. Now the AI handles most of that stuff so we can focus on what we're good at - making cars look amazing.",
      result: "Saved 20+ hours/week",
      rating: 5,
    },
    {
      name: "Dave Rodriguez",
      company: "Mobile Detail Pro",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
      quote:
        "Running a mobile business is tough - you're always driving around. This AI answers calls and books jobs while I'm on the road. It's like having a secretary that never takes breaks.",
      result: "Bookings up 25%",
      rating: 4,
    },
    {
      name: "Jen Martinez",
      company: "Sparkle Auto Spa",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
      quote:
        "I was losing customers because I couldn't answer the phone when I was busy with clients. The AI catches those calls and books them. Simple solution to a big problem.",
      result: "Revenue up 30%",
      rating: 5,
    },
    {
      name: "Rob Johnson",
      company: "Classic Auto Care",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
      quote:
        "I work on classic cars - that's my passion. But I was spending half my day on the phone instead of working on cars. Now the AI handles all the scheduling stuff.",
      result: "More time for cars",
      rating: 5,
    },
    {
      name: "Amanda Wilson",
      company: "Express Wash & Detail",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b412f526?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
      quote:
        "We're a busy shop and things were getting chaotic with double bookings and missed calls. The AI keeps everything organized. No more scheduling headaches.",
      result: "Eliminated double bookings",
      rating: 4,
    },
    {
      name: "Carlos Mendez",
      company: "Luxury Auto Care",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
      quote:
        "Our clients expect professional service. The AI gives them that experience - always polite, always available, always gets the details right. It's been great for our reputation.",
      result: "Better customer reviews",
      rating: 5,
    },
    {
      name: "Lisa Park",
      company: "Eco-Friendly Detailing",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
      quote:
        "I was worried the AI wouldn't understand our eco-friendly approach, but it actually explains our green products and methods really well to customers. Pretty impressed.",
      result: "More repeat customers",
      rating: 4,
    },
    {
      name: "Tom Anderson",
      company: "Mobile Detail Express",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
      quote:
        "Mobile detailing means I'm always on the move. The AI handles all the customer stuff while I'm driving between jobs. Saves me a ton of time and stress.",
      result: "Less admin work",
      rating: 5,
    },
    {
      name: "Rachel Green",
      company: "Family Auto Care",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b412f526?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
      quote:
        "We're a small family business and couldn't afford to hire more staff. The AI helps us handle more customers without the overhead. It's been perfect for us.",
      result: "Grew without hiring",
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
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            What Our Clients Say
          </h2>
          <div className="w-24 h-1 bg-[#ffcf00] mx-auto mb-6 border-b-2 border-dashed border-[#ffcf00]"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join hundreds of businesses that have transformed their operations
            with AI automation
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto px-8">
          {/* Navigation Arrows - Desktop */}
          <Button
            onClick={prevTestimonial}
            className="hidden md:block absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>

          <Button
            onClick={nextTestimonial}
            className="hidden md:block absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-300 hover:scale-110"
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

          {/* Mobile Navigation and Dots Indicator */}
          <div className="flex flex-col items-center mt-6 space-y-4">
            {/* Mobile Navigation Arrows */}
            <div className="flex md:hidden items-center justify-center space-x-4">
              <Button
                onClick={prevTestimonial}
                className="bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-300 hover:scale-110"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>

              {/* Dots Indicator */}
              <div className="flex space-x-2">
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

              <Button
                onClick={nextTestimonial}
                className="bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-300 hover:scale-110"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>

            {/* Desktop Dots Indicator */}
            <div className="hidden md:flex justify-center space-x-2">
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
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-[#ffcf00] mb-2">200+</div>
            <div className="text-muted-foreground">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#ffcf00] mb-2">25%</div>
            <div className="text-muted-foreground">
              Average Revenue Increase
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#ffcf00] mb-2">24/7</div>
            <div className="text-muted-foreground">AI Availability</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#ffcf00] mb-2">4.7/5</div>
            <div className="text-muted-foreground">Client Rating</div>
          </div>
        </div>
      </div>
    </div>
  );
}
