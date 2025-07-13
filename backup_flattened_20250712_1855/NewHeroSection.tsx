"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  Zap,
  TrendingUp,
  Clock,
  Users,
  Star,
} from "lucide-react";
import { Link } from "wouter";
import { SparklesCore } from "@/components/SparklesCore";

export default function NewHeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Interactive Animated Background */}
      <div className="h-full w-full absolute inset-0 z-0">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 pt-32 pb-16">
        <div className="max-w-6xl mx-auto">
          {/* Hero Content */}
          <div className="text-center mb-16">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-yellow-400/20 to-orange-400/20 border border-yellow-400/30 text-yellow-300 text-sm font-medium mb-8 backdrop-blur-sm">
              <Zap className="w-4 h-4 mr-2" />
              <span>AI-Powered Business Automation</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-tight">
              <span className="block">Transform Your</span>
              <span className="block bg-gradient-to-r from-[#ffcf00] via-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Business
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              Stop losing revenue to missed calls and manual scheduling.
              <span className="text-yellow-400 font-semibold">
                {" "}
                AI automation
              </span>{" "}
              that works while you sleep, booking appointments and growing your
              business 24/7.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-16">
              <Link href="/calculator">
                <Button className="group bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 font-bold text-base sm:text-lg px-4 sm:px-8 py-4 sm:py-6 rounded-xl transition-all duration-300 hover:scale-105 whitespace-nowrap">
                  <span className="text-sm sm:text-base">
                    Calculate Revenue Loss
                  </span>
                  <ChevronRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button
                className="group bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-black font-bold text-base sm:text-lg px-4 sm:px-8 py-4 sm:py-6 rounded-xl shadow-2xl shadow-yellow-400/25 transition-all duration-300 hover:shadow-yellow-400/40 hover:scale-105 whitespace-nowrap"
                onClick={() =>
                  window.open(
                    "https://calendly.com/dashinfluence/new-meeting",
                    "_blank"
                  )
                }
              >
                <span className="text-sm sm:text-base">Free Consultation</span>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center justify-center gap-8 text-gray-400 mb-12">
              <div className="flex items-center">
                <Star className="w-5 h-5 text-yellow-400 mr-2" />
                <span className="text-sm">4.9/5 Rating</span>
              </div>
              <div className="w-px h-4 bg-gray-600"></div>
              <div className="flex items-center">
                <Users className="w-5 h-5 text-blue-400 mr-2" />
                <span className="text-sm">500+ Clients</span>
              </div>
              <div className="w-px h-4 bg-gray-600"></div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-green-400 mr-2" />
                <span className="text-sm">24/7 Support</span>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">30%</h3>
              <p className="text-gray-400">Average Revenue Increase</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">24/7</h3>
              <p className="text-gray-400">Automated Booking</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">70+</h3>
              <p className="text-gray-400">Businesses Automated</p>
            </div>
          </div>

          {/* Feature Preview */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                See It In Action
              </h2>
              <p className="text-gray-400 text-lg">
                Watch how our AI handles bookings automatically
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Smart Call Handling
                    </h3>
                    <p className="text-gray-400">
                      AI answers calls, qualifies leads, and books appointments
                      automatically
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Revenue Optimization
                    </h3>
                    <p className="text-gray-400">
                      Never miss a booking opportunity with 24/7 availability
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Customer Satisfaction
                    </h3>
                    <p className="text-gray-400">
                      Instant responses and professional booking experience
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-white/10 transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-2 shadow-xl transform rotate-[-8deg] group-hover:rotate-0">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <span className="text-sm text-gray-400">AI Dashboard</span>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-blue-300 text-sm">
                          New Booking
                        </span>
                        <span className="text-green-400 text-xs">
                          Confirmed
                        </span>
                      </div>
                      <p className="text-white text-lg font-semibold mt-1">
                        Premium Detail - $299
                      </p>
                      <p className="text-gray-400 text-sm">Tomorrow, 2:00 PM</p>
                    </div>

                    <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-yellow-300 text-sm">
                          Revenue Today
                        </span>
                        <span className="text-white text-sm font-semibold">
                          $1,247
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-60"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-60"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 120"
          className="w-full h-auto"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,64L60,69.3C120,75,240,85,360,80C480,75,600,53,720,48C840,43,960,53,1080,58.7C1200,64,1320,64,1380,64L1440,64L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}
