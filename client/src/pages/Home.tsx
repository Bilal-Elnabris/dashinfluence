import NewHeroSection from "@/components/NewHeroSection";
import WhyChooseAISection from "@/components/WhyChooseAISection";
import ImplementationProcessSection from "@/components/ImplementationProcessSection";
import RevenueCalculator from "./RevenueCalculator";
import AIPackagesPreview from "@/components/AIPackagesPreview";
import SEOHead from "@/components/SEOHead";
import StructuredData, {
  organizationSchema,
  serviceSchema,
} from "@/components/StructuredData";
import { Button } from "../components/ui/button";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import {
  Brain,
  Target,
  Zap,
  Car,
  Home as HomeIcon,
  Wrench,
  HeartPulse,
  Coffee,
  Users,
} from "lucide-react";
import { SparklesCore } from "@/components/SparklesCore";
import { Progress } from "@/components/ui/progress";
import TestimonialsSection from "@/components/TestimonialsSection";
import { useTranslation } from "react-i18next";
import BackgroundPaths from "../components/BackgroundPaths";
import { useIsMobile } from "@/hooks/useIsMobile";

export default function Home() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  const isMobile = useIsMobile();
  const BUSINESS_TYPES = [
    {
      key: "consultants",
      label: isArabic
        ? "المستشارون والوكالات الاستشارية"
        : "Consultants & Consultancy Agencies",
      description: isArabic
        ? "المستشارون التجاريون، مستشارو التسويق، المدربون الصحيون، المستشارون الماليون والقانونيون"
        : "Business consultants, marketing consultants, health/wellness/life coaches, financial and legal advisors",
      icon: Users,
      link: "/calculator/consultants",
    },
    {
      key: "real-estate",
      label: t("home.businessTypes.realEstate.label"),
      description: t("home.businessTypes.realEstate.description"),
      icon: HomeIcon,
      link: "/calculator/real-estate",
    },
    {
      key: "home-services",
      label: t("home.businessTypes.homeServices.label"),
      description: t("home.businessTypes.homeServices.description"),
      icon: Wrench,
      link: "/calculator/home-services",
    },
    {
      key: "automotive-businesses",
      label: isArabic ? "أعمال السيارات" : "Automotive Businesses",
      description: isArabic
        ? "ورش السيارات، مراكز الصيانة، محلات قطع الغيار، وكل الأعمال المتعلقة بالسيارات"
        : "Auto repair shops, car washes, detailing, parts stores, and all car-related businesses",
      icon: Car,
      link: "/calculator/automotive-businesses",
    },
    {
      key: "health-wellness",
      label: t("home.businessTypes.healthWellness.label"),
      description: t("home.businessTypes.healthWellness.description"),
      icon: HeartPulse,
      link: "/calculator/health-wellness",
    },
    {
      key: "restaurants-cafes",
      label: t("home.businessTypes.restaurantsCafes.label"),
      description: t("home.businessTypes.restaurantsCafes.description"),
      icon: Coffee,
      link: "/calculator/restaurants-cafes",
    },
  ];
  return (
    <div
      className={`min-h-screen bg-background relative overflow-hidden${
        isArabic ? " font-cairo" : ""
      }`}
    >
      {/* SEO Head Component */}
      <SEOHead
        title={t("home.seo.title")}
        description={t("home.seo.description")}
        keywords={t("home.seo.keywords")}
        ogTitle={t("home.seo.ogTitle")}
        ogDescription={t("home.seo.ogDescription")}
        canonical="https://dashinfluence.com"
      />
      {/* Structured Data */}
      <StructuredData type="organization" data={organizationSchema} />
      <StructuredData type="service" data={serviceSchema} />
      <div className="relative z-10">
        {/* New Hero Section */}
        <NewHeroSection />

        {/* How AI Automation Transforms Your Business (moved up) */}
        <section className="section-padding bg-white dark:bg-slate-900 relative overflow-hidden">
          {/* Stars Background for How AI Automation Transforms Section */}
          <div className="absolute inset-0 z-0">
            <SparklesCore
              id="tsparticleshowai"
              background="transparent"
              minSize={isMobile ? 0.3 : 0.6}
              maxSize={isMobile ? 0.7 : 1.4}
              particleDensity={isMobile ? 40 : 100}
              className="w-full h-full"
              particleColor="#6b7280"
            />
          </div>
          <div className="max-w-4xl mx-auto px-6 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              {isArabic
                ? "كيف تُحدث أتمتة الذكاء الاصطناعي تحولاً في عملك"
                : "How AI Automation Transforms Your Business"}
            </h2>
            <p className="text-lg mb-6 opacity-90 text-center">
              {isArabic
                ? "هل ترغب في تطوير أعمالك وتحقيق نمو حقيقي وملموس؟ أتمتة الذكاء الاصطناعي هي المفتاح لتحقيق الكفاءة، وتوفير التكاليف، وزيادة رضا العملاء. إليك كيف يمكن للأبحاث والتجارب العملية أن تثبت لك ذلك:"
                : "AI automation isn't just a buzzword—it's a proven driver of business growth, efficiency, and innovation. Here's what the research shows:"}
            </p>
            <ul
              className={`text-base md:text-lg mx-auto max-w-2xl space-y-3 mb-6 ${
                isArabic ? "text-right pr-4" : "text-left pl-4"
              }`}
              style={{
                marginLeft: isArabic ? 0 : "auto",
                marginRight: isArabic ? "auto" : 0,
              }}
            >
              <li>
                •{" "}
                <span className="font-semibold">
                  {isArabic ? "زيادة الإنتاجية:" : "Productivity Boost:"}
                </span>{" "}
                {isArabic
                  ? "تشير دراسات ماكينزي إلى أن الشركات التي تعتمد أتمتة الذكاء الاصطناعي تحقق زيادة في الإنتاجية تصل إلى "
                  : "According to McKinsey, businesses that implement AI automation see up to a "}
                <span className="font-bold text-blue-700">
                  {isArabic ? "40%" : "40%"}
                </span>{" "}
                {isArabic
                  ? "، مع تقليل الأخطاء البشرية بشكل كبير، مما يتيح لك التركيز على تطوير أعمالك."
                  : " increase in productivity and a significant reduction in manual errors."}
              </li>
              <li>
                •{" "}
                <span className="font-semibold">
                  {isArabic ? "توفير التكاليف:" : "Cost Savings:"}
                </span>{" "}
                {isArabic
                  ? "تؤكد تقارير ديلويت أن الأتمتة الذكية تساعد في خفض التكاليف التشغيلية بنسبة تتراوح بين "
                  : "Deloitte reports that AI-driven automation can reduce operational costs by "}
                <span className="font-bold text-blue-700">
                  {isArabic ? "20% و30%" : "20-30%"}
                </span>{" "}
                {isArabic
                  ? "، مما يعزز ربحية عملك ويمنحك ميزة تنافسية."
                  : " on average."}
              </li>
              <li>
                •{" "}
                <span className="font-semibold">
                  {isArabic ? "تحسين تجربة العملاء:" : "Customer Experience:"}
                </span>{" "}
                {isArabic
                  ? "من خلال الذكاء الاصطناعي، يمكنك تقديم دعم متواصل وسريع لعملائك، مع خدمات مخصصة تزيد من رضاهم وولائهم لنشاطك التجاري."
                  : "AI enables 24/7 support, faster response times, and personalized service, leading to higher customer satisfaction and retention."}
              </li>
              <li>
                •{" "}
                <span className="font-semibold">
                  {isArabic
                    ? "قرارات مبنية على البيانات:"
                    : "Data-Driven Decisions:"}
                </span>{" "}
                {isArabic
                  ? "تمنحك أنظمة الذكاء الاصطناعي القدرة على تحليل كميات ضخمة من البيانات واكتشاف فرص جديدة للنمو لم تكن لتلاحظها بالطرق التقليدية."
                  : "AI systems analyze vast amounts of data to uncover insights and opportunities that humans might miss."}
              </li>
              <li>
                •{" "}
                <span className="font-semibold">
                  {isArabic ? "قابلية التوسع والنمو:" : "Scalability:"}
                </span>{" "}
                {isArabic
                  ? "مع الأتمتة، يمكنك توسيع أعمالك بسهولة دون الحاجة لزيادة التكاليف أو عدد الموظفين بنفس النسبة، مما يضمن لك نموًا مستدامًا."
                  : "Automation allows your business to grow without a linear increase in costs or headcount."}
              </li>
            </ul>
            <p className="text-base opacity-80 text-center">
              {isArabic
                ? "هذه النتائج ليست وعودًا نظرية، بل حقائق أثبتتها الشركات الرائدة حول العالم. نحن في داش إنفلونس نقدم لك حلولاً عملية مصممة خصيصًا لتناسب احتياجاتك وتحقق لك هذه الفوائد، مهما كان حجم عملك أو مجالك."
                : "These are not just claims—they're results seen by leading businesses worldwide. Our solutions are designed to bring these benefits to your business, no matter your size or industry."}
            </p>
          </div>
        </section>

        {/* Our Implementation Process */}
        <section className="relative overflow-hidden">
          {/* Stars Background */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <SparklesCore
              id="tsparticleswhy-choose"
              background="transparent"
              minSize={isMobile ? 0.3 : 0.6}
              maxSize={isMobile ? 0.7 : 1.4}
              particleDensity={isMobile ? 20 : 50}
              className="w-full h-full"
              particleColor="#6b7280"
            />
          </div>
          <div className="relative z-10">
            <WhyChooseAISection />
          </div>
        </section>

        {/* Implementation Process & CTA Section */}
        <section className="relative overflow-hidden bg-transparent">
          {/* Stars Background */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <SparklesCore
              id="tsparticlesimplementation"
              background="transparent"
              minSize={isMobile ? 0.3 : 0.6}
              maxSize={isMobile ? 0.7 : 1.4}
              particleDensity={isMobile ? 40 : 100}
              className="w-full h-full"
              particleColor="#6b7280"
            />
          </div>
          <div className="relative z-10">
            <ImplementationProcessSection />
          </div>
        </section>
        {/* Replace the wavy SVG transition so the straight line is at the bottom (no rotation) */}
        <div
          className="relative w-full"
          style={{
            overflow: "hidden",
            background: "transparent",
            border: "none",
            outline: "none",
            boxShadow: "none",
            margin: 0,
            padding: 0,
          }}
        >
          {/* Stars effect behind the top SVG wave */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <SparklesCore
              id="tsparticleswave-top"
              background="transparent"
              minSize={isMobile ? 0.9 : 1.6}
              maxSize={isMobile ? 1.6 : 2.4}
              particleDensity={isMobile ? 45 : 100}
              className="w-full h-full"
              particleColor="#fff"
            />
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 120"
            className="w-full h-auto block relative z-10"
            style={{
              display: "block",
              width: "100%",
              marginBottom: "-1px",
              border: "none",
              outline: "none",
              boxShadow: "none",
              background: "transparent",
              padding: 0,
            }}
          >
            <defs>
              <linearGradient
                id="blue-gradient"
                x1="0"
                y1="0"
                x2="1440"
                y2="0"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%" stopColor="#1e3a8a"></stop>
                <stop offset="50%" stopColor="#1e3a8a"></stop>
                <stop offset="100%" stopColor="#1e3a8a"></stop>
              </linearGradient>
            </defs>
            <path
              fill="url(#blue-gradient)"
              fillOpacity="1"
              d="M0,64L60,69.3C120,75,240,85,360,80C480,75,600,53,720,48C840,43,960,53,1080,58.7C1200,64,1320,64,1380,64L1440,64L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"
            ></path>
          </svg>
        </div>

        {/* Persuasive Calculator Section */}
        <section
          className="section-padding bg-gradient-to-br from-[#1e3a8a] via-[#1e3a8a] to-[#1e3a8a] relative overflow-visible backdrop-blur-md"
          style={{
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
            boxShadow: "none",
            marginTop: 0,
            paddingTop: 0,
            border: "none",
            outline: "none",
          }}
        >
          {/* Stars effect background for calculators section */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <SparklesCore
              id="tsparticlescalculators"
              background="transparent"
              minSize={isMobile ? 0.3 : 0.5}
              maxSize={isMobile ? 0.7 : 1.1}
              particleDensity={isMobile ? 16 : 28}
              className="w-full h-full"
              particleColor="#fff"
            />
          </div>
          <div className="max-w-5xl mx-auto px-6 text-center relative z-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white pt-8">
              {isArabic ? "حاسبة تسرب الإيرادات" : t("home.calculator.heading")}
            </h2>
          </div>
          <p className="text-lg mb-8 opacity-90 max-w-3xl mx-auto text-center text-white">
            {isArabic
              ? "اكتشف كم من الإيرادات تخسرها بسبب المكالمات الفائتة والعمليات اليدوية، وكيف يمكن للأتمتة بالذكاء الاصطناعي أن تزيد أرباحك وتطور عملك."
              : "Discover how much revenue you’re losing to missed calls and manual work, and how AI automation can boost your profits and grow your business."}
          </p>
          {/* Niche selection prompt */}
          <p className="text-base font-semibold mb-6 text-center text-white">
            {isArabic ? "اختر مجال عملك:" : "Choose your business niche:"}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto px-4 md:px-8 relative z-10">
            {BUSINESS_TYPES.map((type) => {
              const Icon = type.icon;
              return (
                <Link key={type.key} href={type.link}>
                  <Card className="relative p-8 cursor-pointer hover:shadow-xl transition-shadow group overflow-hidden min-h-[220px] h-full">
                    {/* Icon Background */}
                    <div
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 pointer-events-none select-none z-0"
                      style={{ fontSize: 120 }}
                    >
                      <Icon className="w-[120px] h-[120px] mx-auto text-blue-400" />
                    </div>
                    <CardContent className="relative z-10 flex flex-col h-full justify-between items-center text-center w-full">
                      <div>
                        <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-[#ffcf00] transition-colors flex items-center justify-center gap-2">
                          {type.label}
                        </h3>
                        <p className="text-muted-foreground mb-2">
                          {type.description}
                        </p>
                      </div>
                      <Button
                        className={`mt-4 bg-gradient-to-r from-[#ffcf00] to-yellow-400 text-[hsl(217,69%,34%)] font-bold px-6 py-2 rounded-lg border border-yellow-300 shadow-md hover:brightness-110 hover:scale-105 transition-all flex items-center justify-center gap-2 w-full ${
                          isArabic ? "flex-row-reverse" : ""
                        }`}
                      >
                        {isArabic ? (
                          <>
                            احسب الآن
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4 mr-1"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 8l4 4m0 0l-4 4m4-4h14"
                              />
                            </svg>
                          </>
                        ) : (
                          <>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4 mr-1"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                              />
                            </svg>
                            {t("home.calculator.button")}
                          </>
                        )}
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </section>
        {/* Seamless SVG merge at the bottom of the calculators section */}
        <div
          className="relative w-full"
          style={{
            overflow: "hidden",
            background: "transparent",
            border: "none",
            outline: "none",
            boxShadow: "none",
            margin: 0,
            padding: 0,
          }}
        >
          {/* Stars effect behind the bottom SVG wave */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <SparklesCore
              id="tsparticleswave-bottom"
              background="transparent"
              minSize={isMobile ? 0.9 : 1.6}
              maxSize={isMobile ? 1.6 : 2.4}
              particleDensity={isMobile ? 45 : 100}
              className="w-full h-full"
              particleColor="#fff"
            />
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 120"
            className="w-full h-auto block relative z-10"
            style={{
              display: "block",
              width: "100%",
              marginTop: "-1px",
              border: "none",
              outline: "none",
              boxShadow: "none",
              background: "transparent",
              padding: 0,
              transform: "rotate(180deg)",
            }}
          >
            <path
              fill="#1e3a8a"
              fillOpacity="1"
              d="M0,64L60,69.3C120,75,240,85,360,80C480,75,600,53,720,48C840,43,960,53,1080,58.7C1200,64,1320,64,1380,64L1440,64L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"
            ></path>
          </svg>
        </div>
        {/* AI Automation Packages Preview with lines animation only here */}
        <section className="relative overflow-visible pt-8 pb-0 bg-white dark:bg-slate-900">
          {/* Lines animation only for this section */}
          <div className="absolute inset-0 pointer-events-none z-0">
            <BackgroundPaths />
          </div>
          {/* Continuous Stars Background from Packages to Footer */}
          <div
            className="absolute inset-0 z-10 pointer-events-none h-[calc(100%+8rem)]"
            style={{ bottom: "-8rem" }}
          >
            <SparklesCore
              id="tsparticlespackages-continuous"
              background="transparent"
              minSize={isMobile ? 0.3 : 0.5}
              maxSize={isMobile ? 0.7 : 1.1}
              particleDensity={isMobile ? 16 : 28}
              className="w-full h-full"
              particleColor="#6b7280"
            />
          </div>
          <div className="relative z-20">
            <AIPackagesPreview />
          </div>
        </section>
      </div>
    </div>
  );
}
