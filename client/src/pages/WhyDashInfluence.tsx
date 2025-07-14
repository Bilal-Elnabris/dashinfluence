import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Zap,
  CheckCircle,
  Target,
  Users,
  Clock,
  Award,
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState, useEffect } from "react";
import { SparklesCore } from "@/components/SparklesCore";
import Footer from "@/components/Footer";

export default function WhyDashInfluence() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonialsPerPage, setTestimonialsPerPage] = useState(3);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 640) {
        setTestimonialsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setTestimonialsPerPage(2);
      } else {
        setTestimonialsPerPage(3);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  // Group testimonials based on testimonialsPerPage
  const testimonialGroups = [];
  for (let i = 0; i < testimonials.length; i += testimonialsPerPage) {
    testimonialGroups.push(testimonials.slice(i, i + testimonialsPerPage));
  }

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialGroups.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonialGroups.length) % testimonialGroups.length
    );
  };

  const successStories = [
    {
      name: "Michael Thompson",
      company: "Re/Max Premier",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
      quote:
        "DashInfluence automated my lead nurturing completely. I went from converting 8% of leads to 24% in just 60 days. The AI handles follow-ups better than I ever could manually.",
      result: "+$180K additional revenue in first quarter",
    },
    {
      name: "Sarah Chen",
      company: "Keller Williams Team Lead",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b412f526?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
      quote:
        "Our team was drowning in administrative work. Now our AI handles appointment scheduling, follow-ups, and client communications. We focus purely on closing deals.",
      result: "Saved 30 hours/week across team",
    },
  ];

  const processSteps = [
    {
      step: 1,
      title: "Discovery",
      description: "Deep dive into your current processes and pain points",
    },
    {
      step: 2,
      title: "Design",
      description: "Custom automation blueprint tailored to your business",
    },
    {
      step: 3,
      title: "Deploy",
      description: "Seamless integration with your existing systems",
    },
    {
      step: 4,
      title: "Optimize",
      description: "Continuous monitoring and improvement for maximum ROI",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Hero Section with Stars */}
      <section className="relative min-h-screen overflow-hidden w-full pt-0 pb-0 mb-0">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <SparklesCore
            id="tsparticles-y-hero"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 pt-32 pb-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-yellow-400/20 to-orange-400/20 border border-yellow-400/30 text-yellow-300 text-sm font-medium mb-8 backdrop-blur-sm">
                <Star className="w-4 h-4 mr-2" />
                <span>Client Success Stories</span>
              </div>

              <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-tight">
                <span className="block">What Our</span>
                <span className="block bg-gradient-to-r from-[#ffcf00] via-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  Clients Say
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
                Join hundreds of businesses that have transformed their
                operations with{" "}
                <span className="text-yellow-400 font-semibold">
                  AI automation
                </span>
              </p>
            </div>

            <div className="relative max-w-6xl mx-auto px-4 md:px-8 relative z-10">
              {/* Navigation Arrows - Desktop */}
              <Button
                onClick={prevTestimonial}
                className="hidden md:block absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>

              <Button
                onClick={nextTestimonial}
                className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
              >
                <ChevronRight className="w-6 h-6" />
              </Button>

              {/* Current Group of Testimonials */}
              <div
                className={`grid gap-8 transition-all duration-500 ease-in-out ${
                  testimonialsPerPage === 1
                    ? "grid-cols-1"
                    : testimonialsPerPage === 2
                    ? "grid-cols-1 sm:grid-cols-2"
                    : "grid-cols-1 md:grid-cols-3"
                }`}
              >
                {testimonialGroups[currentIndex]?.map((testimonial, index) => (
                  <div
                    key={index}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300 group transform hover:scale-105"
                    style={{
                      animation: `slideIn 0.5s ease-out ${index * 0.1}s both`,
                    }}
                  >
                    {/* Quote Icon */}
                    <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                      <Quote className="w-8 h-8 text-white" />
                    </div>

                    {/* Rating */}
                    <div className="flex justify-center mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-gray-300 mb-8 italic text-center leading-relaxed text-base">
                      "{testimonial.quote}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center justify-center mb-6">
                      <img
                        src={testimonial.image}
                        alt={`${testimonial.name}, ${testimonial.company}`}
                        className="w-12 h-12 rounded-full mr-4 object-cover border-2 border-yellow-400/30"
                      />
                      <div className="text-center">
                        <h4 className="font-bold text-white text-sm">
                          {testimonial.name}
                        </h4>
                        <p className="text-xs text-gray-400">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>

                    {/* Result */}
                    <div className="text-center">
                      <p className="text-yellow-400 font-bold text-sm">
                        {testimonial.result}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Mobile Navigation and Dots Indicator */}
              <div className="flex flex-col items-center mt-12 space-y-6">
                {/* Mobile Navigation Arrows */}
                <div className="flex md:hidden items-center justify-center space-x-4">
                  <Button
                    onClick={prevTestimonial}
                    className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </Button>

                  {/* Dots Indicator */}
                  <div className="flex items-center space-x-2 mt-0 mb-0">
                    {testimonialGroups.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 ${
                          index === currentIndex
                            ? "bg-yellow-400 scale-110 shadow-md"
                            : "bg-white/30 hover:bg-white/50"
                        }`}
                      />
                    ))}
                  </div>

                  <Button
                    onClick={nextTestimonial}
                    className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </Button>
                </div>

                {/* Desktop Dots Indicator */}
                <div className="hidden md:flex justify-center items-center space-x-2 mt-0 mb-0">
                  {testimonialGroups.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 ${
                        index === currentIndex
                          ? "bg-yellow-400 scale-110 shadow-md"
                          : "bg-white/30 hover:bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              </div>
              {/* Add a healthy gap below the dots */}
              <div className="mt-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Small gap with white stars above Why Choose DashInfluence */}
      <div className="relative w-full h-12 mb-2 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <SparklesCore
            id="tsparticles-y-gap-above-whychoose"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={40}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div>
      </div>

      {/* Why Choose DashInfluence Section with Stars */}
      <section className="relative overflow-hidden w-full min-h-[600px]">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <SparklesCore
            id="tsparticles-y-whychoose"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={80}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Why Choose DashInfluence?
            </h1>
            <div className="w-24 h-1 bg-[#ffcf00] mx-auto mb-6 border-b-2 border-dashed border-[#ffcf00]"></div>
            <p className="text-xl text-white max-w-3xl mx-auto">
              We don't just automate processes – we transform businesses with AI
              that actually works
            </p>
          </div>

          {/* Key Differentiators */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-10 h-10 text-[#ffcf00]" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">
                Industry Expertise
              </h3>
              <p className="text-white">
                Specialized in business automation with deep understanding of
                your unique challenges and opportunities across multiple
                industries.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-[#ffcf00]" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">
                Proven Results
              </h3>
              <p className="text-white">
                70+ successful implementations with average 300% ROI within 90
                days of deployment.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-10 h-10 text-[#ffcf00]" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">
                Custom Solutions
              </h3>
              <p className="text-white">
                Tailored automation that fits your existing processes, not
                generic one-size-fits-all solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process Section with Stars */}
      <section className="relative overflow-hidden w-full min-h-[600px]">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <SparklesCore
            id="tsparticles-y-process"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={80}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4 text-white">
              Our Implementation Process
            </h2>
            <p className="text-xl text-white">
              From discovery to optimization, we ensure your success
            </p>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            {processSteps.map((step, index) => (
              <div key={step.step} className="relative text-center group">
                <div className="w-16 h-16 bg-[hsl(217,69%,34%)] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 relative z-10 shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl">
                  {step.step}
                </div>
                <h4 className="font-bold mb-2 text-white">{step.title}</h4>
                <p className="text-sm text-white">{step.description}</p>
              </div>
            ))}

            {/* Connecting lines overlay */}
            <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 z-0">
              {/* Main gradient line */}
              <div className="w-full h-full bg-gradient-to-r from-[hsl(217,69%,34%)] via-[#ffcf00] to-[hsl(217,69%,34%)] opacity-70 rounded-full"></div>

              {/* Subtle dashed overlay */}
              <div
                className="absolute top-0 left-0 w-full h-full opacity-40"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(90deg, transparent 0, transparent 16px, rgba(255, 207, 0, 0.4) 16px, rgba(255, 207, 0, 0.4) 20px)",
                }}
              ></div>
            </div>

            {/* Simple arrow indicators */}
            <div className="hidden md:block absolute top-6 left-1/4 w-0 h-0 border-l-3 border-l-[#ffcf00] border-t-1.5 border-t-transparent border-b-1.5 border-b-transparent z-10"></div>
            <div className="hidden md:block absolute top-6 left-1/2 w-0 h-0 border-l-3 border-l-[#ffcf00] border-t-1.5 border-t-transparent border-b-1.5 border-b-transparent z-10"></div>
            <div className="hidden md:block absolute top-6 left-3/4 w-0 h-0 border-l-3 border-l-[#ffcf00] border-t-1.5 border-t-transparent border-b-1.5 border-b-transparent z-10"></div>
          </div>
        </div>
      </section>

      {/* CTA Section with Stars in the Box Background */}
      <section className="relative w-full pb-32 mb-24">
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="text-center relative">
            <div className="bg-white text-[hsl(217,69%,34%)] rounded-xl p-8 relative overflow-hidden shadow-xl border border-gray-100">
              {/* Stars behind the entire CTA box */}
              <div className="absolute inset-0 z-0 pointer-events-none rounded-xl overflow-hidden">
                <SparklesCore
                  id="tsparticles-y-cta"
                  background="transparent"
                  minSize={0.6}
                  maxSize={1.4}
                  particleDensity={60}
                  className="w-full h-full"
                  particleColor="#FFFFFF"
                />
              </div>
              {/* Stars behind the CTA button only */}
              <div className="absolute left-1/2 bottom-8 -translate-x-1/2 w-72 h-20 z-0 pointer-events-none">
                <SparklesCore
                  id="tsparticles-y-cta-btn"
                  background="transparent"
                  minSize={0.6}
                  maxSize={1.4}
                  particleDensity={20}
                  className="w-full h-full"
                  particleColor="#FFFFFF"
                />
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4 text-[hsl(217,69%,34%)]">
                  Ready to Transform Your Business?
                </h3>
                <p className="text-lg mb-6 text-gray-700 max-w-2xl mx-auto">
                  Join hundreds of successful businesses that have already
                  automated their way to success
                </p>
                <Button
                  className="bg-[hsl(217,69%,34%)] text-white font-bold px-6 sm:px-8 py-3 hover:bg-[hsl(217,69%,28%)] transition-colors text-sm sm:text-base whitespace-nowrap shadow-lg hover:shadow-xl"
                  onClick={() =>
                    window.open(
                      "https://calendly.com/dashinfluence/new-meeting",
                      "_blank"
                    )
                  }
                >
                  <span className="text-sm sm:text-base font-semibold">
                    Schedule Your Free Consultation
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* White stars effect in the last gap above the footer */}
      <div className="relative w-full h-24 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <SparklesCore
            id="tsparticles-y-bottom-gap"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={40}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div>
      </div>
    </div>
  );
}
