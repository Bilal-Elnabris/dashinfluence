import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

export default function TestimonialsSection() {
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
  ];

  return (
    <div className="section-padding bg-muted/50">
      <div className="max-w-6xl mx-auto px-6">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border-0 bg-card"
            >
              <CardContent className="p-0">
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
                <p className="text-muted-foreground mb-6 italic text-center leading-relaxed">
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
                    <h4 className="font-bold text-foreground">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
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
