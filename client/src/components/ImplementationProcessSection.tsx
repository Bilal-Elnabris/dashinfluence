import { Card, CardContent } from "@/components/ui/card";
import { Target, Lightbulb, Zap, TrendingUp, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { SparklesCore } from "@/components/SparklesCore";
import { useTranslation } from "react-i18next";
import { BrandText } from "./BrandText";

export default function ImplementationProcessSection() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  const processSteps = [
    {
      step: 1,
      title: isArabic ? t("home.implementation.steps.0.title") : "Discovery",
      description: isArabic
        ? t("home.implementation.steps.0.description")
        : "Deep dive into your current processes and pain points",
      icon: <Target className="w-6 h-6" />,
    },
    {
      step: 2,
      title: isArabic ? t("home.implementation.steps.1.title") : "Design",
      description: isArabic
        ? t("home.implementation.steps.1.description")
        : "Custom automation blueprint tailored to your business",
      icon: <Lightbulb className="w-6 h-6" />,
    },
    {
      step: 3,
      title: isArabic ? t("home.implementation.steps.2.title") : "Deploy",
      description: isArabic
        ? t("home.implementation.steps.2.description")
        : "Seamless integration with your existing systems",
      icon: <Zap className="w-6 h-6" />,
    },
    {
      step: 4,
      title: isArabic ? t("home.implementation.steps.3.title") : "Optimize",
      description: isArabic
        ? t("home.implementation.steps.3.description")
        : "Continuous monitoring and improvement for maximum ROI",
      icon: <TrendingUp className="w-6 h-6" />,
    },
  ];

  const [location, setLocation] = useLocation();

  return (
    <div
      className={`section-padding bg-transparent${
        isArabic ? " font-cairo" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Process Overview */}
        <div className="mb-16 mt-20 pt-16 pb-16 bg-transparent rounded-3xl">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-4xl font-bold mb-6 text-[hsl(217,69%,34%)]">
              <BrandText isArabic={isArabic}>
                {t("home.implementation.heading")}
              </BrandText>
            </h2>
            <div className="text-lg md:text-xl text-muted-foreground mb-4 max-w-3xl mx-auto leading-relaxed">
              {t("home.implementation.intro")}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {processSteps.map((step, index) => (
              <div key={step.step} className="relative text-center group">
                <div className="w-16 h-16 bg-[hsl(217,69%,34%)] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 relative z-10 shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl">
                  {isArabic ? `${index + 1}` : step.step}
                </div>
                <div className="w-12 h-12 bg-[#ffcf00]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  {step.icon}
                </div>
                <h4 className="font-bold mb-2 text-foreground">{step.title}</h4>
                <p className="text-sm text-muted-foreground">
                  {isArabic ? step.description : step.description}
                </p>
              </div>
            ))}

            {/* Connecting lines overlay */}
            <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 z-0">
              <div className="w-full h-full animated-gradient-line opacity-70 rounded-full"></div>
              <div
                className="absolute top-0 left-0 w-full h-full opacity-40"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(90deg, transparent 0, transparent 16px, rgba(255, 207, 0, 0.4) 16px, rgba(255, 207, 0, 0.4) 20px)",
                }}
              ></div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center relative">
          <Card className="p-8 bg-gradient-to-r from-[hsl(217,69%,34%)] to-blue-800 text-white relative overflow-hidden">
            {/* Stars Background */}
            <div className="absolute inset-0 z-0 pointer-events-none">
              <SparklesCore
                id="tsparticlescta"
                background="transparent"
                minSize={0.6}
                maxSize={1.4}
                particleDensity={50}
                className="w-full h-full"
                particleColor="#ffffff"
              />
            </div>
            <CardContent className="p-0 relative z-10">
              <h3 className="text-2xl font-bold mb-4">
                {t("home.implementation.ctaHeading")}
              </h3>
              <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
                {t("home.implementation.ctaIntro")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/packages">
                  <Button className="bg-[#ffcf00] text-black font-bold px-4 sm:px-8 py-3 hover:bg-yellow-300 transition-colors text-sm sm:text-base whitespace-nowrap">
                    <span className="text-xs sm:text-sm">
                      {t("home.implementation.viewPackages")}
                    </span>
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>
                </Link>
                <Button
                  className="bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-black font-bold px-4 sm:px-8 py-3 transition-colors text-sm sm:text-base whitespace-nowrap"
                  onClick={() => setLocation("/business-intake")}
                >
                  <span className="text-xs sm:text-sm">
                    {t("home.implementation.freeConsultation")}
                  </span>
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
