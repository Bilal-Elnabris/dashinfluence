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
import { useIsMobile } from "@/hooks/useIsMobile";
import Footer from "@/components/Footer";
import { useTranslation } from "react-i18next";
import { BrandText } from "../components/BrandText";
import { useLocation } from "wouter";

export default function WhyDashInfluence() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonialsPerPage, setTestimonialsPerPage] = useState(3);
  const [location, setLocation] = useLocation();
  const isMobile = useIsMobile();

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

  // Testimonials: add Arabic translations
  const testimonials = isArabic
    ? [
        {
          name: "مايك طومسون",
          company: "تومسون لخدمات السيارات",
          image:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
          quote:
            "كنت مترددًا في البداية، لكن الذكاء الاصطناعي فعلاً أحدث فرقًا. لم أعد أفوت أي مكالمة، وأصبحت المواعيد تُحجز حتى أثناء انشغالي. تجربة رائعة!",
          result: "لا مزيد من المكالمات الفائتة",
          rating: 5,
        },
        {
          name: "سارة تشين",
          company: "إيليت كار كير",
          image:
            "https://images.unsplash.com/photo-1494790108755-2616b412f526?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
          quote:
            "كان فريقنا يقضي وقتًا طويلاً في المكالمات والجدولة. الآن الذكاء الاصطناعي يتولى كل ذلك ونركز على تقديم أفضل خدمة لعملائنا.",
          result: "وفرنا أكثر من 20 ساعة أسبوعيًا",
          rating: 5,
        },
        {
          name: "ديف رودريغيز",
          company: "موبايل ديتيل برو",
          image:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
          quote:
            "إدارة الأعمال المتنقلة صعبة، لكن الذكاء الاصطناعي يرد على المكالمات ويحجز المواعيد أثناء تنقلي. كأن لدي سكرتير لا يتوقف عن العمل!",
          result: "زيادة الحجوزات بنسبة 25%",
          rating: 4,
        },
        {
          name: "جين مارتينيز",
          company: "سباركل أوتو سبا",
          image:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
          quote:
            "كنت أفقد عملاء لأنني لم أستطع الرد على الهاتف عندما كنت مشغولاً بالعملاء. الذكاء الاصطناعي يلتقط تلك المكالمات ويحجزها. حل بسيط لمشكلة كبيرة.",
          result: "زيادة الإيرادات بنسبة 30%",
          rating: 5,
        },
        {
          name: "روب جونسون",
          company: "كلاسيك أوتو كير",
          image:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
          quote:
            "أعمل على سيارات كلاسيكية - هذا هو حبي. لكنني كنت أقضي نصف يوم في المكالمات بدلاً من العمل على السيارات. الآن الذكاء الاصطناعي يتولى كل الأمور الجدولية.",
          result: "المزيد من الوقت للسيارات",
          rating: 5,
        },
        {
          name: "أماندا ويلسون",
          company: "تومسون لخدمات السيارات",
          image:
            "https://images.unsplash.com/photo-1494790108755-2616b412f526?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
          quote:
            "نحن متاجر حريصين والأمور كانت تصبح أكثر تعقيداً بسبب الحجوزات المزدوجة والمكالمات الفائتة. الذكاء الاصطناعي يحافظ على كل شيء منظم. لا مزيد من التخطيط المعقد.",
          result: "إزالة الحجوزات المزدوجة",
          rating: 4,
        },
        {
          name: "كارلوس مينديز",
          company: "لوكسوري أوتو كير",
          image:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
          quote:
            "يتوقع عملائنا خدمة مهنية عالية. الذكاء الاصطناعي يعطيهم تجربة - دائماً مهذب، دائماً متاح، دائماً يحصل على التفاصيل بشكل صحيح. كانت رائعة لسمعتنا.",
          result: "تقييمات أفضل للعملاء",
          rating: 5,
        },
        {
          name: "ليزا بارك",
          company: "تيليفوني أوتو ديتيل",
          image:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
          quote:
            "كنت أقلق من أن الذكاء الاصطناعي لن يفهم نهجنا البيئي، لكنه فعلاً يشرح أفضل نهجنا البيئي والطرق الخضراء لعملائنا. لقد أثبتت رائعة.",
          result: "عملاء تكرارية أكثر",
          rating: 4,
        },
        {
          name: "توم آندرسون",
          company: "موبايل ديتيل إكسبريس",
          image:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
          quote:
            "التنظيف الموبايلي يعني أنني دائماً أتنقل. الذكاء الاصطناعي يتولى كل الأمور العملية مع العملاء أثناء تنقلي بين الوظائف. يوفر لي الكثير من الوقت والإجهاد.",
          result: "أقل عمل تنظيف",
          rating: 5,
        },
        {
          name: "راشيل جرين",
          company: "تومسون لخدمات السيارات",
          image:
            "https://images.unsplash.com/photo-1494790108755-2616b412f526?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
          quote:
            "نحن مؤسسة صغيرة ولم نتمكن من توظيف المزيد من الموظفين. الذكاء الاصطناعي يساعدنا في التعامل مع المزيد من العملاء بدون التكلفة الزائدة. كان عظيماً لنا.",
          result: "نمو بدون توظيف",
          rating: 5,
        },
      ]
    : [
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
    <div
      className={`min-h-screen flex flex-col bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden${
        isArabic ? " font-cairo" : ""
      }`}
    >
      {/* Hero Section with Stars */}
      <section className="relative min-h-screen overflow-hidden w-full pt-0 pb-0 mb-0">
        {/* Stars background for the entire testimonials section */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <SparklesCore
            id="tsparticles-testimonials-stars-section"
            background="transparent"
            minSize={isMobile ? 0.3 : 0.6}
            maxSize={isMobile ? 0.7 : 1.4}
            particleDensity={isMobile ? 10 : 18}
            className="w-full h-full"
            particleColor="#fff"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 pt-32 pb-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-yellow-400/20 to-orange-400/20 border border-yellow-400/30 text-yellow-300 text-sm font-medium mb-8 backdrop-blur-sm">
                <Star className="w-4 h-4 mr-2" />
                <span>{t("whyInfluence.testimonials.badge")}</span>
              </div>

              <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-tight">
                <span className="block">
                  {t("whyInfluence.testimonials.heading1")}
                </span>
                <span className="block bg-gradient-to-r from-[#ffcf00] via-yellow-400 to-orange-400 bg-clip-text text-transparent text-6xl md:text-8xl leading-normal pb-3">
                  {t("whyInfluence.testimonials.heading2")}
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
                {t("whyInfluence.testimonials.intro")}
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
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300 group transform hover:scale-105 relative overflow-hidden"
                    style={{
                      animation: `slideIn 0.5s ease-out ${index * 0.1}s both`,
                    }}
                  >
                    {/* Quote Icon */}
                    <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                      <Quote className="w-8 h-8 text-white" />
                    </div>

                    {/* Stars background behind the avatar circle */}
                    <div className="absolute left-1/2 top-[120px] -translate-x-1/2 -z-10 w-24 h-24 pointer-events-none">
                      <SparklesCore
                        id={`tsparticles-testimonial-avatar-stars-${index}`}
                        background="transparent"
                        minSize={isMobile ? 0.2 : 0.3}
                        maxSize={isMobile ? 0.4 : 0.7}
                        particleDensity={isMobile ? 18 : 60}
                        className="w-full h-full"
                        particleColor="#fff"
                      />
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
              <div
                className={`flex flex-col items-center mt-12 space-y-6${
                  isArabic ? " font-cairo" : ""
                }`}
              >
                {/* Mobile Navigation Arrows */}
                <div
                  className={`flex md:hidden items-center justify-center ${
                    isArabic
                      ? "flex-row-reverse space-x-reverse space-x-4"
                      : "space-x-4"
                  }`}
                >
                  <Button
                    onClick={prevTestimonial}
                    className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </Button>

                  {/* Dots Indicator */}
                  <div
                    className={`flex items-center ${
                      isArabic ? "flex-row-reverse space-x-2" : "space-x-2"
                    } mt-0 mb-0`}
                  >
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
                <div
                  className={`hidden md:flex justify-center items-center ${
                    isArabic ? "flex-row-reverse space-x-2" : "space-x-2"
                  } mt-0 mb-0`}
                >
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
              <div className="mt-10 relative w-full h-12 overflow-visible">
                {/* Stars background for the lower portion of the testimonials card section */}
                <div className="absolute inset-0 z-0 pointer-events-none w-full h-full">
                  <SparklesCore
                    id="tsparticles-testimonials-lower-gap"
                    background="transparent"
                    minSize={isMobile ? 0.2 : 0.3}
                    maxSize={isMobile ? 0.4 : 0.7}
                    particleDensity={isMobile ? 40 : 100}
                    className="w-full h-full"
                    particleColor="#fff"
                  />
                </div>
              </div>
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
            minSize={isMobile ? 0.2 : 0.3}
            maxSize={isMobile ? 0.4 : 0.7}
            particleDensity={isMobile ? 40 : 100}
            className="w-full h-full"
            particleColor="#fff"
          />
        </div>
      </div>

      {/* Why Choose DashInfluence Section with Stars */}
      <section className="relative overflow-hidden w-full min-h-[600px]">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <SparklesCore
            id="tsparticles-y-whychoose"
            background="transparent"
            minSize={isMobile ? 0.2 : 0.3}
            maxSize={isMobile ? 0.4 : 0.7}
            particleDensity={isMobile ? 40 : 100}
            className="w-full h-full"
            particleColor="#fff"
          />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-4 text-white">
              <BrandText isArabic={isArabic}>
                {isArabic
                  ? "لماذا تختار داش إنفلونس؟"
                  : "Why Choose DashInfluence?"}
              </BrandText>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-white max-w-2xl mx-auto mb-6 text-center">
              {isArabic ? (
                <>
                  إذا كنت تبحث عن شريك موثوق يقود أعمالك نحو التحول الرقمي
                  الحقيقي، فنحن في داش إنفلونس نضع خبرتنا بين يديك. نحن لا نقدم
                  حلولاً جاهزة، بل نصمم لكل عميل استراتيجية مخصصة تضمن له نتائج
                  ملموسة ونموًا مستدامًا. خبرتنا العميقة، ونجاحاتنا المثبتة،
                  ودعمنا المستمر هي ما يجعلنا الخيار الأمثل لرواد الأعمال
                  الطموحين.
                </>
              ) : (
                <>
                  We are a professional agency specializing in business
                  automation and delivering real, measurable results for our
                  clients through AI. Our expertise, custom solutions, and
                  ongoing support set us apart.
                </>
              )}
            </p>
          </div>
          {/* Differentiators */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Card 1 */}
            <div className="bg-white/10 rounded-xl p-6 text-center shadow-lg">
              <Zap className="w-10 h-10 mx-auto mb-4 text-[#ffcf00]" />
              <h3 className="font-bold text-lg mb-2 text-white">
                {isArabic ? "خبرة عملية متنوعة" : "Industry Expertise"}
              </h3>
              <p className="text-white text-sm">
                {isArabic
                  ? "سنوات من العمل مع شركات من مختلف القطاعات، مما يمنحنا فهماً عميقاً لتحدياتك واحتياجاتك."
                  : "Years of automation experience across diverse industries."}
              </p>
            </div>
            {/* Card 2 */}
            <div className="bg-white/10 rounded-xl p-6 text-center shadow-lg">
              <CheckCircle className="w-10 h-10 mx-auto mb-4 text-[#ffcf00]" />
              <h3 className="font-bold text-lg mb-2 text-white">
                {isArabic ? "نتائج حقيقية وملموسة" : "Proven Results"}
              </h3>
              <p className="text-white text-sm">
                {isArabic
                  ? "مشاريعنا الناجحة تتحدث عن نفسها، مع تحقيق عوائد استثمارية عالية لعملائنا في وقت قياسي."
                  : "Dozens of successful projects and high ROI."}
              </p>
            </div>
            {/* Card 3 */}
            <div className="bg-white/10 rounded-xl p-6 text-center shadow-lg">
              <Target className="w-10 h-10 mx-auto mb-4 text-[#ffcf00]" />
              <h3 className="font-bold text-lg mb-2 text-white">
                {isArabic ? "حلول مصممة خصيصًا لك" : "Custom Solutions"}
              </h3>
              <p className="text-white text-sm">
                {isArabic
                  ? "نبتكر حلولاً تناسب طبيعة عملك وأهدافك، بعيدًا عن القوالب الجاهزة."
                  : "We tailor solutions to your unique needs."}
              </p>
            </div>
            {/* Card 4 */}
            <div className="bg-white/10 rounded-xl p-6 text-center shadow-lg">
              <Award className="w-10 h-10 mx-auto mb-4 text-[#ffcf00]" />
              <h3 className="font-bold text-lg mb-2 text-white">
                {isArabic ? "دعم متواصل وشراكة حقيقية" : "Ongoing Support"}
              </h3>
              <p className="text-white text-sm">
                {isArabic
                  ? "نرافقك في كل خطوة، من البداية وحتى تحقيق النجاح، ونبقى معك لضمان استمرارية التطوير."
                  : "We support you every step for guaranteed success."}
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
            minSize={isMobile ? 0.2 : 0.3}
            maxSize={isMobile ? 0.4 : 0.7}
            particleDensity={isMobile ? 40 : 100}
            className="w-full h-full"
            particleColor="#fff"
          />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4 text-white">
              {isArabic
                ? "رحلتنا معك خطوة بخطوة"
                : "Our Implementation Process"}
            </h2>
            <p className="text-xl text-white">
              {isArabic ? (
                <>
                  من أول لقاء حتى تحقيق النتائج، نعمل معك كشريك حقيقي: نكتشف
                  احتياجاتك، نصمم الحلول الأنسب، ننفذها بسلاسة مع تدريب فريقك
                  ودعمك الكامل، ونواصل التحسين والتطوير لضمان نجاحك الدائم.
                </>
              ) : (
                <>From discovery to optimization, we ensure your success</>
              )}
            </p>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            {processSteps.map((step, index) => (
              <div key={step.step} className="relative text-center group">
                <div className="w-16 h-16 bg-[hsl(217,69%,34%)] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 relative z-10 shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl">
                  {step.step}
                </div>
                <h4 className="font-bold mb-2 text-white">
                  {isArabic
                    ? step.step === 1
                      ? "اكتشاف وتحليل"
                      : step.step === 2
                      ? "تصميم الحلول"
                      : step.step === 3
                      ? "تنفيذ متكامل"
                      : step.step === 4
                      ? "تحسين مستمر"
                      : step.title
                    : step.title}
                </h4>
                <p className="text-sm text-white">
                  {isArabic
                    ? step.step === 1
                      ? "نغوص في تفاصيل أعمالك ونحدد التحديات والفرص."
                      : step.step === 2
                      ? "نرسم خطة أتمتة مخصصة تلبي أهدافك بدقة."
                      : step.step === 3
                      ? "ننفذ الحلول بسلاسة مع تدريب فريقك ودعمك الكامل."
                      : step.step === 4
                      ? "نراقب الأداء ونطور الحلول باستمرار لتحقيق أفضل النتائج."
                      : step.description
                    : step.description}
                </p>
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
      <section className="relative w-full pb-16 mb-12">
        {/* Stars background for the entire CTA section */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <SparklesCore
            id="tsparticles-cta-stars-section"
            background="transparent"
            minSize={isMobile ? 0.2 : 0.3}
            maxSize={isMobile ? 0.4 : 0.7}
            particleDensity={isMobile ? 40 : 100}
            className="w-full h-full"
            particleColor="#fff"
          />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <div className="bg-white text-[hsl(217,69%,34%)] rounded-xl p-8 relative overflow-hidden shadow-xl border border-gray-100 text-center">
            <h3 className="text-2xl font-bold mb-4 text-[hsl(217,69%,34%)]">
              {isArabic
                ? "هل أنت مستعد للانطلاق نحو مستقبل أعمالك؟"
                : "Ready to Transform Your Business?"}
            </h3>
            <p className="text-lg mb-6 text-gray-700 max-w-2xl mx-auto text-center">
              {isArabic
                ? "احجز استشارتك المجانية اليوم وابدأ رحلتك مع داش إنفلونس نحو التميز الرقمي والنجاح المستدام."
                : "Book your free consultation now and start your digital transformation journey with DashInfluence."}
            </p>
            <Button
              className="bg-[hsl(217,69%,34%)] text-white font-bold px-6 sm:px-8 py-3 hover:bg-[hsl(217,69%,28%)] transition-colors text-sm sm:text-base whitespace-nowrap shadow-lg hover:shadow-xl"
              onClick={() => setLocation("/business-intake")}
            >
              <span className="text-sm sm:text-base font-semibold">
                {isArabic
                  ? "احجز استشارتك المجانية الآن"
                  : "Schedule Your Free Consultation"}
              </span>
            </Button>
          </div>
        </div>
      </section>

      {/* White stars effect in the last gap above the footer */}
      <div className="relative w-full h-12 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <SparklesCore
            id="tsparticles-y-bottom-gap"
            background="transparent"
            minSize={isMobile ? 0.2 : 0.3}
            maxSize={isMobile ? 0.4 : 0.7}
            particleDensity={isMobile ? 40 : 100}
            className="w-full h-full"
            particleColor="#fff"
          />
        </div>
      </div>
    </div>
  );
}
