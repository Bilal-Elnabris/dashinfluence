import { Card, CardContent } from "@/components/ui/card";
import {
  Lightbulb,
  TrendingUp,
  Zap,
  Target,
  Clock,
  Users,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { SparklesCore } from "@/components/SparklesCore";
import { useTranslation } from "react-i18next";
import { BrandText } from "./BrandText";

export default function WhyChooseAISection() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  const benefits = [
    {
      icon: <Lightbulb className="w-12 h-12 text-blue-600" />,
      title: isArabic
        ? t("home.why.benefits.0.title")
        : "Diverse Industry Experience",
      description: isArabic
        ? t("home.why.benefits.0.description")
        : "Years of working with companies across industries gives us deep insight into your challenges and needs.",
      color: "blue",
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-green-600" />,
      title: isArabic
        ? t("home.why.benefits.1.title")
        : "Real, Measurable Results",
      description: isArabic
        ? t("home.why.benefits.1.description")
        : "Our successful projects speak for themselves, delivering high ROI for our clients in record time.",
      color: "green",
    },
    {
      icon: <Zap className="w-12 h-12 text-purple-600" />,
      title: isArabic
        ? t("home.why.benefits.2.title")
        : "Solutions Tailored to You",
      description: isArabic
        ? t("home.why.benefits.2.description")
        : "We create solutions that fit your business and goals—never one-size-fits-all.",
      color: "purple",
    },
    {
      icon: <Target className="w-12 h-12 text-orange-600" />,
      title: isArabic
        ? t("home.why.benefits.3.title")
        : "Ongoing Support & True Partnership",
      description: isArabic
        ? t("home.why.benefits.3.description")
        : "We’re with you every step, from launch to success, and stay by your side to ensure continuous improvement.",
      color: "orange",
    },
  ];

  const processSteps = [
    {
      step: 1,
      title: "Discovery",
      description: "Deep dive into your current processes and pain points",
      icon: <Target className="w-6 h-6" />,
    },
    {
      step: 2,
      title: "Design",
      description: "Custom automation blueprint tailored to your business",
      icon: <Lightbulb className="w-6 h-6" />,
    },
    {
      step: 3,
      title: "Deploy",
      description: "Seamless integration with your existing systems",
      icon: <Zap className="w-6 h-6" />,
    },
    {
      step: 4,
      title: "Optimize",
      description: "Continuous monitoring and improvement for maximum ROI",
      icon: <TrendingUp className="w-6 h-6" />,
    },
  ];

  return (
    <div className="section-padding bg-transparent">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className={`text-center mb-16 ${isArabic ? "font-cairo" : ""}`}>
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            <BrandText isArabic={isArabic}>
              {isArabic ? t("home.why.heading") : "Why Choose DashInfluence?"}
            </BrandText>
          </h2>
          <div className="w-24 h-1 bg-[#ffcf00] mx-auto mb-6 border-b-2 border-dashed border-[#ffcf00]"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {isArabic
              ? t("home.why.intro")
              : "We don’t offer cookie-cutter solutions—we craft a custom strategy for every client, ensuring real results and sustainable growth. Our deep expertise, proven track record, and ongoing support make us the top choice for ambitious business owners."}
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className={`p-6 text-center border-2 border-${benefit.color}-200 bg-${benefit.color}-50 dark:bg-${benefit.color}-900/20 hover:shadow-lg transition-shadow duration-300`}
            >
              <CardContent className="p-0">
                <div className="flex justify-center mb-4">{benefit.icon}</div>
                <h3
                  className={`font-bold text-lg mb-2 text-${benefit.color}-900 dark:text-${benefit.color}-100`}
                >
                  <BrandText isArabic={isArabic}>{benefit.title}</BrandText>
                </h3>
                <p
                  className={`text-sm text-${benefit.color}-700 dark:text-${benefit.color}-200`}
                >
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Key Differentiators */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8 ${
            isArabic ? "font-cairo" : ""
          }`}
        >
          <div className="text-center">
            <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Zap className="w-10 h-10 text-[#ffcf00]" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-foreground">
              <BrandText isArabic={isArabic}>
                {isArabic
                  ? t("home.why.diff.0.title")
                  : "Advanced AI Technology"}
              </BrandText>
            </h3>
            <p className="text-muted-foreground">
              {isArabic
                ? t("home.why.diff.0.description")
                : "We use the latest AI technology to deliver the best results."}
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-[#ffcf00]" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-foreground">
              <BrandText isArabic={isArabic}>
                {isArabic
                  ? t("home.why.diff.1.title")
                  : "Exceptional Client Experience"}
              </BrandText>
            </h3>
            <p className="text-muted-foreground">
              {isArabic
                ? t("home.why.diff.1.description")
                : "We focus on providing a seamless, professional experience for every client."}
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Target className="w-10 h-10 text-[#ffcf00]" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-foreground">
              <BrandText isArabic={isArabic}>
                {isArabic
                  ? t("home.why.diff.2.title")
                  : "Continuous Improvement"}
              </BrandText>
            </h3>
            <p className="text-muted-foreground">
              {isArabic
                ? t("home.why.diff.2.description")
                : "We monitor performance and continually enhance your solution for the best possible results."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
