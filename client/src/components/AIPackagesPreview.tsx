import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle,
  Phone,
  MessageCircle,
  Zap,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { SparklesCore } from "@/components/SparklesCore";
import { useTranslation } from "react-i18next";
import { BrandText } from "./BrandText";

export default function AIPackagesPreview() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  const packages = [
    {
      name: isArabic ? "الباقة الأساسية" : "Essential Package",
      description: isArabic
        ? "مثالية للأعمال الصغيرة أو الجديدة: دردشة ذكية على مدار الساعة، حجز تلقائي، تذكيرات بالرسائل، ولوحة تحكم بسيطة."
        : "Perfect for small or new businesses: 24/7 AI chat, online booking, SMS reminders, and a simple dashboard.",
      features: [
        isArabic ? "دردشة وحجز ذكي على مدار الساعة" : "24/7 Booking AI Chat",
        isArabic ? "جدولة ومواعيد تلقائية" : "Real-Time Scheduling",
        isArabic ? "تذكيرات تلقائية بالرسائل" : "Automated SMS Reminders",
        isArabic ? "تحليلات وتقارير أساسية" : "Basic Analytics",
      ],
      icon: <MessageCircle className="w-8 h-8" />,
      color: "blue",
    },
    {
      name: isArabic ? "باقة النمو الاحترافية" : "Professional Package",
      description: isArabic
        ? "للمشاريع المتنامية: أتمتة المتابعة، طلب تقييمات العملاء، حملات تكرار العملاء، وتحليلات متقدمة."
        : "For growing businesses: follow-up automation, review requests, repeat customer campaigns, and advanced analytics.",
      features: [
        isArabic ? "جميع ميزات الباقة الأساسية" : "All Essential features",
        isArabic
          ? "متابعة وتكرار العملاء تلقائياً"
          : "Repeat Customer Automation",
        isArabic ? "تحليلات متقدمة للأعمال" : "Service Analytics Dashboard",
      ],
      icon: <Phone className="w-8 h-8" />,
      color: "green",
      popular: true,
    },
    {
      name: isArabic ? "الباقة الكاملة الشاملة" : "Complete Suite Package",
      description: isArabic
        ? "للأعمال الجاهزة للأتمتة الكاملة: الرد الهاتفي الذكي، تقارير متقدمة، تكامل مع جوجل وفيسبوك، وجميع الميزات السابقة."
        : "For businesses ready for full automation: AI phone handling, advanced reports, Google/Facebook integration, and all previous features.",
      features: [
        isArabic ? "جميع ميزات الباقات السابقة" : "All Professional features",
        isArabic
          ? "الرد الهاتفي الذكي (24/7)"
          : "AI Phone Call Handling (24/7)",
        isArabic ? "تقارير وتحليلات متقدمة" : "Advanced Business Reports",
        isArabic ? "تكامل مع جوجل وفيسبوك" : "Google/Facebook Integration",
      ],
      icon: <Zap className="w-8 h-8" />,
      color: "purple",
    },
  ];

  return (
    <div
      className={`section-padding bg-transparent${
        isArabic ? " font-cairo" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground text-center">
            {isArabic
              ? "باقات الأتمتة بالذكاء الاصطناعي"
              : "AI Automation Packages"}
          </h2>
          <div className="w-24 h-1 bg-[#ffcf00] mx-auto mb-6 border-b-2 border-dashed border-[#ffcf00]"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {isArabic
              ? "اختر الحل الأمثل للأتمتة بالذكاء الاصطناعي لتحسين عملك"
              : "Choose the perfect AI solution to automate your business"}
          </p>
        </div>

        {/* Package Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <Card
              key={index}
              className={`relative p-8 hover:shadow-xl transition-all duration-300 border-2 ${
                pkg.popular ? "border-[#ffcf00] shadow-lg" : "border-border"
              }`}
            >
              <CardContent className="p-0">
                {/* Popular Badge */}
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-[#ffcf00] text-black font-bold px-2 py-1 text-xs rounded-full md:px-4 md:py-2 md:text-sm max-[375px]:px-1 max-[375px]:py-0.5 max-[375px]:text-[10px] max-[371px]:hidden">
                      <span className="whitespace-nowrap">Most Popular</span>
                    </div>
                  </div>
                )}

                {/* Package Icon */}
                <div
                  className={`w-16 h-16 bg-${pkg.color}-100 rounded-2xl flex items-center justify-center mx-auto mb-6`}
                >
                  <div className={`text-${pkg.color}-600`}>{pkg.icon}</div>
                </div>

                {/* Package Name */}
                <h3 className="text-2xl font-bold text-center mb-4 text-foreground">
                  <BrandText isArabic={isArabic}>{pkg.name}</BrandText>
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-center mb-6">
                  <BrandText isArabic={isArabic}>{pkg.description}</BrandText>
                </p>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="text-center">
                  <Link href="/packages">
                    <Button
                      className={`w-full bg-[#ffcf00] text-black font-bold hover:bg-yellow-300 transition-colors text-sm whitespace-nowrap flex items-center justify-center gap-2 ${
                        isArabic ? "flex-row-reverse" : ""
                      }`}
                    >
                      {isArabic ? (
                        <>
                          المزيد عن الباقة
                          <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4 rotate-180" />
                        </>
                      ) : (
                        <>
                          <ArrowRight className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                          Learn More
                        </>
                      )}
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center relative">
          <Card className="p-8 bg-gradient-to-r from-[hsl(217,69%,34%)] to-blue-800 text-white relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 z-0">
              <SparklesCore
                id="tsparticlescta"
                background="transparent"
                minSize={0.6}
                maxSize={1.4}
                particleDensity={50}
                className="w-full h-full"
                particleColor="#FFFFFF"
              />
            </div>
            <CardContent className="p-0 relative z-10">
              <h3 className="text-2xl font-bold mb-4">
                {isArabic ? "جاهز للبدء؟" : "Ready to Get Started?"}
              </h3>
              <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
                {isArabic
                  ? "احصل على أسعار مفصلة وابدأ رحلتك في الأتمتة الذكية اليوم."
                  : "Get detailed pricing and start your AI automation journey today"}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/packages">
                  <Button
                    className={`bg-[#ffcf00] text-black font-bold px-4 sm:px-8 py-3 hover:bg-yellow-300 transition-colors text-sm sm:text-base whitespace-nowrap flex items-center justify-center gap-2 ${
                      isArabic ? "flex-row-reverse" : ""
                    }`}
                  >
                    <span className="text-xs sm:text-sm">
                      {isArabic ? "عرض جميع الباقات" : "View All Packages"}
                    </span>
                    <ArrowRight
                      className={
                        isArabic
                          ? "ml-2 h-4 w-4 sm:h-5 sm:w-5 rotate-180"
                          : "mr-2 h-4 w-4 sm:h-5 sm:w-5"
                      }
                    />
                  </Button>
                </Link>
                <Button
                  className={`bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-black font-bold px-4 sm:px-8 py-3 transition-colors text-sm sm:text-base whitespace-nowrap flex items-center justify-center gap-2 ${
                    isArabic ? "flex-row-reverse" : ""
                  }`}
                  onClick={() =>
                    window.open(
                      "https://calendly.com/dashinfluence/new-meeting",
                      "_blank"
                    )
                  }
                >
                  <span className="text-xs sm:text-sm">
                    {isArabic ? "استشارة مجانية" : "Free Consultation"}
                  </span>
                  <ArrowRight
                    className={
                      isArabic
                        ? "ml-2 h-4 w-4 sm:h-5 sm:w-5 rotate-180"
                        : "mr-2 h-4 w-4 sm:h-5 sm:w-5"
                    }
                  />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
