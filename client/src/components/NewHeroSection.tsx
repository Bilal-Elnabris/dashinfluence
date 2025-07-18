"use client";

import { useState, useEffect } from "react";
// import { useLenisScrollAnimation } from "@/hooks/useLenisScroll";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  Zap,
  TrendingUp,
  Clock,
  Users,
  Star,
} from "lucide-react";
import { Link, useLocation } from "wouter";
import { SparklesCore } from "@/components/SparklesCore";
import { useTranslation } from "react-i18next";
import { BrandText } from "./BrandText";

export default function NewHeroSection() {
  const [scrollY, setScrollY] = useState(0);
  // const { addScrollListener } = useLenisScrollAnimation();
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  const [location, setLocation] = useLocation();

  // useEffect(() => {
  //   const unsubscribe = addScrollListener((e: any) => {
  //     setScrollY(e.scroll);
  //   });

  //   return () => {
  //     if (unsubscribe) unsubscribe();
  //   };
  // }, [addScrollListener]);

  return (
    <div
      className={`relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden${
        isArabic ? " font-cairo" : ""
      }`}
    >
      {/* Stars Background for Hero Section */}
      <div className="absolute inset-0 z-0">
        <SparklesCore
          id="tsparticlesherohome"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 pt-32 pb-16 flex items-center justify-center min-h-[70vh]">
        <div className="max-w-6xl mx-auto w-full">
          {/* Hero Content */}
          <div
            className={`text-center mb-16 hero-center ${
              isArabic ? "font-cairo" : ""
            }`}
          >
            {" "}
            {/* Add font-cairo for Arabic */}
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-yellow-400/20 to-orange-400/20 border border-yellow-400/30 text-yellow-300 text-sm font-medium mb-8 backdrop-blur-sm">
              <Zap className="w-4 h-4 mr-2" />
              <span>
                {isArabic
                  ? "أتمتة الأعمال بالذكاء الاصطناعي"
                  : "AI-Powered Business Automation"}
              </span>
            </div>
            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-tight">
              <span className="block">
                <BrandText isArabic={isArabic}>
                  {isArabic ? "أعد ابتكار" : "Reinvent your"}
                </BrandText>
              </span>
              <span className="block bg-gradient-to-r from-[#ffcf00] via-yellow-400 to-orange-400 bg-clip-text text-transparent">
                <BrandText isArabic={isArabic}>
                  {isArabic ? "عملك" : "business"}
                </BrandText>
              </span>
            </h1>
            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              <BrandText isArabic={isArabic}>
                {isArabic ? (
                  <>
                    توقف عن فقدان الإيرادات بسبب المكالمات الفائتة والجدولة
                    اليدوية.
                    <span className="text-yellow-400 font-semibold">
                      {" الأتمتة الذكية"}
                    </span>
                    {
                      " التي تعمل أثناء نومك، تحجز المواعيد وتنمي عملك على مدار الساعة."
                    }
                  </>
                ) : (
                  <>
                    Stop losing revenue to missed calls and manual scheduling.
                    <span className="text-yellow-400 font-semibold">
                      {" AI automation"}
                    </span>
                    {
                      " that works while you sleep, booking appointments and growing your business 24/7."
                    }
                  </>
                )}
              </BrandText>
            </p>
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-16">
              <Link href="/calculator">
                <Button className="group bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 font-bold text-base sm:text-lg px-4 sm:px-8 py-4 sm:py-6 rounded-xl transition-all duration-300 hover:scale-105 whitespace-nowrap">
                  <span className="text-sm sm:text-base">
                    {isArabic
                      ? "احسب خسارة الإيرادات"
                      : "Calculate Revenue Loss"}
                  </span>
                  <ChevronRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button
                className="group bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-black font-bold text-base sm:text-lg px-4 sm:px-8 py-4 sm:py-6 rounded-xl shadow-2xl shadow-yellow-400/25 transition-all duration-300 hover:shadow-yellow-400/40 hover:scale-105 whitespace-nowrap"
                onClick={() => setLocation("/business-intake")}
              >
                <span className="text-sm sm:text-base">
                  {isArabic ? "استشارة مجانية" : "Free Consultation"}
                </span>
              </Button>
            </div>
            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-gray-400 mb-12">
              <div className="flex items-center">
                <Star className="w-5 h-5 text-yellow-400 mr-2" />
                <span className="text-sm">
                  {isArabic ? "تقييم 4.9/5" : "4.9/5 Rating"}
                </span>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 text-blue-400 mr-2" />
                <span className="text-sm">
                  {isArabic ? "+500 عميل" : "500+ Clients"}
                </span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-green-400 mr-2" />
                <span className="text-sm">
                  {isArabic ? "دعم 24/7" : "24/7 Support"}
                </span>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Stars Background for Stats Grid */}
            <div className="absolute inset-0 z-0 pointer-events-none">
              <SparklesCore
                id="tsparticlesherostats"
                background="transparent"
                minSize={0.6}
                maxSize={1.4}
                particleDensity={100}
                className="w-full h-full"
                particleColor="#FFFFFF"
              />
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">
                {isArabic ? "30%" : "30%"}
              </h3>
              <p className="text-gray-400">
                {isArabic
                  ? "زيادة الإيرادات المتوقعة"
                  : "Average Revenue Increase"}
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">
                {isArabic ? "24/7" : "24/7"}
              </h3>
              <p className="text-gray-400">
                {isArabic ? "جدولة مؤكدة" : "Automated Booking"}
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">
                {isArabic ? "70+" : "70+"}
              </h3>
              <p className="text-gray-400">
                {isArabic ? "شركات تم تطويرها" : "Businesses Automated"}
              </p>
            </div>
          </div>

          {/* Feature Preview */}
          {/* See it in Action Section */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {isArabic
                  ? "شاهد الذكاء الاصطناعي أثناء العمل"
                  : "See It In Action"}
              </h2>
              <p className="text-gray-400 text-lg">
                {isArabic
                  ? "شاهد كيف يتعامل الذكاء الاصطناعي مع الحجوزات تلقائيًا"
                  : "Watch how our AI handles bookings automatically"}
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
                      {isArabic
                        ? "إدارة المكالمات الذكية"
                        : "Smart Call Handling"}
                    </h3>
                    <p className="text-gray-400">
                      {isArabic
                        ? "الذكاء الاصطناعي يجيب على المكالمات، يؤهل العملاء، ويحجز المواعيد تلقائيًا"
                        : "AI answers calls, qualifies leads, and books appointments automatically"}
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {isArabic ? "تعظيم الإيرادات" : "Revenue Optimization"}
                    </h3>
                    <p className="text-gray-400">
                      {isArabic
                        ? "لا تفوت أي فرصة حجز مع توفر الخدمة على مدار الساعة"
                        : "Never miss a booking opportunity with 24/7 availability"}
                    </p>
                  </div>
                </div>
              </div>
              {/* Animation/Video/Scene - always visible */}
              <div className="w-full h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center">
                {/* هنا يمكن وضع أي مشهد أو فيديو توضيحي، أو إبقاء العنصر الحالي */}
                <span className="text-white text-lg">
                  {isArabic
                    ? "مشهد توضيحي أو فيديو هنا"
                    : "Demo animation or video here"}
                </span>
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
