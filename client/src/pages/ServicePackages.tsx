import { motion } from "framer-motion";
import {
  CheckCircle,
  Calendar,
  DollarSign,
  Car,
  Home,
  Wrench,
  HeartPulse,
  Coffee,
  UtensilsCrossed,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SparklesCore } from "@/components/SparklesCore";
import SEOHead from "@/components/SEOHead";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const INDUSTRIES = [
  {
    key: "car-detailers",
    label: "Car Detailers",
    icon: Car,
    packages: [
      {
        name: "Essential",
        price: "$400",
        originalPrice: "$499",
        monthlyRetainer: "$149",
        originalMonthlyRetainer: "$199",
        savings: "SAVE $50/month",
        features: [
          "24/7 Booking AI Chat",
          "Real-Time Scheduling",
          "Automated SMS Reminders",
          "Customer Preference Tracker",
          "Review Generation System",
        ],
        bookings: "Handle 50+ inquiries/month",
        description: `Designed for small or new car detailing businesses looking to automate their customer communication and booking process. Includes a website chatbot to answer common questions and capture leads, online booking to reduce phone tag, and automated SMS reminders to cut no-shows. All customer data is managed in a simple dashboard for easy follow-up.`,
        popular: false,
      },
      {
        name: "Professional",
        price: "$900",
        originalPrice: "$1099",
        monthlyRetainer: "$299",
        originalMonthlyRetainer: "$349",
        savings: "SAVE $50/month",
        features: [
          "All Essential features",
          "Repeat Customer Automation",
          "Service Analytics Dashboard",
          "Supply Inventory Alerts",
        ],
        bookings: "Handle 150+ inquiries/month",
        description: `Ideal for growing car detailers who want to boost repeat business and online reputation. Adds automated review requests after each job, follow-up messages to encourage repeat bookings, and a dashboard to track key business metrics. All features from Essential included.`,
        popular: true,
      },
      {
        name: "Complete",
        price: "$1800",
        originalPrice: "$1999",
        monthlyRetainer: "$499",
        originalMonthlyRetainer: "$599",
        savings: "SAVE $100/month",
        features: [
          "All Professional features",
          "AI Phone Call Handling",
          "Advanced Business Reports",
          "Loyalty Reward Program",
          "Google/Facebook Integration",
        ],
        bookings: "Handle 500+ inquiries/month",
        description: `For established car detailing businesses ready to fully automate and scale. Includes AI-powered call handling, voicemail transcription, advanced analytics, automated upsell/cross-sell campaigns, and integration with Google My Business and Facebook Messenger. All features from Professional and Essential included.`,
        popular: false,
      },
    ],
  },
  {
    key: "real-estate",
    label: "Real Estate Agents & Brokers",
    icon: Home,
    packages: [
      {
        name: "Solo Agent",
        price: "$750",
        originalPrice: "$750",
        monthlyRetainer: "$199",
        originalMonthlyRetainer: "$199",
        savings: "SAVE $50/month",
        features: [
          "24/7 AI Lead Capture Chat",
          "Automated Showing Scheduler",
          "SMS Appointment Reminders",
          "Client Management Dashboard",
          "Video Tour Booking System",
        ],
        bookings: "Handle 50+ leads/month",
        description: `Perfect for solo agents or small teams who want to automate lead capture and appointment scheduling. The AI chat agent answers property questions and books showings, while all client info is organized in a simple portal.`,
        popular: false,
      },
      {
        name: "Team",
        price: "$1,750",
        originalPrice: "$1,750",
        monthlyRetainer: "$499",
        originalMonthlyRetainer: "$499",
        savings: "SAVE $50/month",
        features: [
          "All Solo Agent features",
          "Automated Email Campaigns",
          "AI Review Generation",
          "Lead Performance Analytics",
          "Transaction Tracker",
        ],
        bookings: "Handle 150+ leads/month",
        description: `For agents and teams looking to nurture leads and build reputation. Adds automated drip campaigns for buyers/sellers, review requests, and a dashboard to track performance. All features from Essential included.`,
        popular: true,
      },
      {
        name: "Agency",
        price: "$3,500",
        originalPrice: "$3,500",
        monthlyRetainer: "$999",
        originalMonthlyRetainer: "$999",
        savings: "SAVE $100/month",
        features: [
          "All Team features",
          "AI Call Answering Service",
          "Advanced Business Reports",
          "Automated Social Posting",
          "Zillow/Realtor.com Sync",
        ],
        bookings: "Handle 500+ leads/month",
        description: `For brokerages and top producers ready to automate every touchpoint. Includes AI call handling, advanced analytics, automated social posting, and integrations with major real estate platforms. All features from Professional and Essential included.`,
        popular: false,
      },
    ],
  },
  {
    key: "home-services",
    label: "Home Services",
    icon: Wrench,
    packages: [
      {
        name: "Solo Operator",
        price: "$400",
        originalPrice: "$499",
        monthlyRetainer: "$79",
        originalMonthlyRetainer: "$99",
        savings: "SAVE $20/month",
        features: [
          "24/7 AI Booking & Call Handling",
          "Automated Job Scheduling",
          "SMS/Email Reminders",
          "Customer Database & CRM",
          "Review Generation System",
          "Service Analytics Dashboard",
        ],
        bookings: "Handle 40+ jobs/month",
        description: `Perfect for solo home service operators (plumbers, electricians, cleaners, etc.) who want to automate bookings and reminders. Includes AI-powered call handling, online scheduling, and customer management dashboard.`,
        popular: false,
        relatedServices: [
          "Plumbing",
          "Electrical",
          "Cleaning",
          "Landscaping",
          "Pest Control",
          "Appliance Repair",
        ],
      },
      {
        name: "Small Team",
        price: "$900",
        originalPrice: "$1099",
        monthlyRetainer: "$199",
        originalMonthlyRetainer: "$249",
        savings: "SAVE $50/month",
        features: [
          "All Solo Operator features",
          "Team Scheduling & Dispatch",
          "Upsell/Cross-sell Campaigns",
          "Advanced Analytics & Reporting",
        ],
        bookings: "Handle 120+ jobs/month",
        description: `Ideal for small home service teams looking to boost efficiency and customer retention. Adds team scheduling, upsell campaigns, and advanced analytics.`,
        popular: true,
        relatedServices: [
          "Plumbing",
          "Electrical",
          "Cleaning",
          "Landscaping",
          "Pest Control",
          "Appliance Repair",
        ],
      },
      {
        name: "Company",
        price: "$1,800",
        originalPrice: "$1,999",
        monthlyRetainer: "$499",
        originalMonthlyRetainer: "$599",
        savings: "SAVE $100/month",
        features: [
          "All Small Team features",
          "Custom Integrations (GMB, QuickBooks, etc.)",
          "Multi-location Management",
          "Loyalty & Referral Programs",
        ],
        bookings: "Handle 300+ jobs/month",
        description: `For established home service companies ready to scale. Includes custom integrations, multi-location management, and loyalty programs.`,
        popular: false,
        relatedServices: [
          "Plumbing",
          "Electrical",
          "Cleaning",
          "Landscaping",
          "Pest Control",
          "Appliance Repair",
        ],
      },
    ],
  },
];

export default function ServicePackages() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  const [selected, setSelected] = useState(INDUSTRIES[0].key);
  const industry = INDUSTRIES.find((i) => i.key === selected);

  // Arabic translations for industries, packages, features, etc.
  const INDUSTRIES_AR = [
    {
      key: "car-detailers",
      label: "مراكز تلميع السيارات",
      icon: Car,
      packages: [
        {
          name: "الباقة الأساسية",
          price: "$500",
          originalPrice: "$600", // Increased for compelling savings
          monthlyRetainer: "$199",
          originalMonthlyRetainer: "$249", // Increased for compelling savings
          savings: "وفر $50/شهريًا",
          features: [
            "دردشة وحجز ذكي على مدار الساعة",
            "جدولة ومواعيد تلقائية",
            "تذكيرات تلقائية بالرسائل",
            "تحليلات وتقارير أساسية",
          ],
          bookings: "تعامل مع أكثر من 50 استفسار شهريًا",
          description:
            "مصممة للأعمال الصغيرة أو الجديدة التي ترغب في أتمتة التواصل مع العملاء والحجوزات. تشمل روبوت دردشة للإجابة على الأسئلة الشائعة وجمع العملاء المحتملين، وحجز إلكتروني لتقليل المكالمات، وتذكيرات تلقائية لتقليل الغياب. كل بيانات العملاء تدار في لوحة تحكم مبسطة.",
          popular: false,
        },
        {
          name: "باقة النمو الاحترافية",
          price: "$900",
          originalPrice: "$1200", // Increased for compelling savings
          monthlyRetainer: "$349",
          originalMonthlyRetainer: "$449", // Increased for compelling savings
          savings: "وفر $100/شهريًا",
          features: [
            "جميع ميزات الباقة الأساسية",
            "متابعة وتكرار العملاء تلقائياً",
            "تحليلات متقدمة للأعمال",
          ],
          bookings: "تعامل مع أكثر من 150 استفسار شهريًا",
          description:
            "مثالية للأعمال المتنامية التي ترغب في زيادة العملاء المتكررين وتحسين السمعة. تضيف طلب تقييمات تلقائي، رسائل متابعة، ولوحة تحكم لمتابعة الأداء. تشمل جميع ميزات الباقة الأساسية.",
          popular: true,
        },
        {
          name: "الباقة الكاملة الشاملة",
          price: "$1800",
          originalPrice: "$2200", // Increased for compelling savings
          monthlyRetainer: "$599",
          originalMonthlyRetainer: "$799", // Increased for compelling savings
          savings: "وفر $200/شهريًا",
          features: [
            "جميع ميزات الباقات السابقة",
            "الرد الهاتفي الذكي (24/7)",
            "تقارير وتحليلات متقدمة",
            "تكامل مع جوجل وفيسبوك",
          ],
          bookings: "تعامل مع أكثر من 500 استفسار شهريًا",
          description:
            "للأعمال الجاهزة للأتمتة الكاملة. تشمل الرد الهاتفي الذكي، تقارير متقدمة، تكامل مع جوجل وفيسبوك، وجميع الميزات السابقة.",
          popular: false,
        },
      ],
    },
    {
      key: "real-estate",
      label: "الوكلاء والوسطاء في العقارات",
      icon: Home,
      packages: [
        {
          name: "الوكيل المستقل",
          price: "$800",
          originalPrice: "$950", // Increased for compelling savings
          monthlyRetainer: "$249",
          originalMonthlyRetainer: "$299", // Increased for compelling savings
          savings: "وفر $50/شهريًا",
          features: [
            "دردشة ذكية للإحصائيات 24/7",
            "جدولة إظهار تلقائية",
            "تذكيرات إظهار بالرسائل",
            "سجل CRM أساسي",
          ],
          bookings: "تعامل مع أكثر من 50 إستفسار شهريًا",
          description:
            "مثالي للوكلاء المستقلين أو الفرق الصغيرة التي ترغب في أتمتة جمع الإحصائيات وجدولة المواعيد. عبر الدردشة الذكي يجيب عن أسئلة العقارات ويحجز الإظهارات، بينما يتم تنظيم جميع معلومات العملاء في بوابة بسيطة.",
          popular: false,
        },
        {
          name: "الفريق",
          price: "$1,750",
          originalPrice: "$2,000", // Increased for compelling savings
          monthlyRetainer: "$599",
          originalMonthlyRetainer: "$749", // Increased for compelling savings
          savings: "وفر $150/شهريًا",
          features: [
            "جميع ميزات الوكيل المستقل",
            "حملات بريد إلكتروني تلقائية",
            "طلب إنتاج مراجع تلقائي",
            "تحليل أداء العملاء",
            "متبع المعاملات",
          ],
          bookings: "تعامل مع أكثر من 150 إستفسار شهريًا",
          description:
            "مثالي للوكلاء والفرق التي ترغب في تربية الإحصائيات وإنشاء السمعة. يضيف حملات تدريبية تلقائية للمشترين/البائعين، طلبات إنتاج المراجع، ولوحة تحكم لمتابعة الأداء. تشمل جميع ميزات الباقة الأساسية.",
          popular: true,
        },
        {
          name: "الوكالة",
          price: "$3,500",
          originalPrice: "$4,000", // Increased for compelling savings
          monthlyRetainer: "$1,200",
          originalMonthlyRetainer: "$1,500", // Increased for compelling savings
          savings: "وفر $300/شهريًا",
          features: [
            "جميع ميزات الفريق",
            "خدمة إجابة هاتف تلقائية",
            "تقارير أعمال تلقائية",
            "نشر اجتماعي تلقائي",
          ],
          bookings: "تعامل مع أكثر من 500 إستفسار شهريًا",
          description:
            "للوكالات والوسطاء الكبار الجاهزين لأتمتة كل نقطة تواصل. تشمل الرد الهاتفي الذكي، تحليلات متقدمة، نشر اجتماعي تلقائي، وتكامل مع منصات العقارات الكبرى. تشمل جميع ميزات الباقات السابقة.",
          popular: false,
        },
      ],
    },
    {
      key: "home-services",
      label: "الخدمات المنزلية",
      icon: Wrench,
      packages: [
        {
          name: "المشغل المستقل",
          price: "$500",
          originalPrice: "$650", // Increased for compelling savings
          monthlyRetainer: "$149",
          originalMonthlyRetainer: "$199", // Increased for compelling savings
          savings: "وفر $50/شهريًا",
          features: [
            "حجز ذكي على مدار الساعة",
            "جدولة وظائف تلقائية",
            "تذكيرات بالرسائل/البريد",
            "تحليلات وتقارير أساسية",
          ],
          bookings: "تعامل مع أكثر من 40 وظيفة شهريًا",
          description:
            "مثالي للمشغلين المستقلين في الخدمات المنزلية (سباكة، كهرباء، تنظيف، إلخ) الذين يرغبون في أتمتة الحجوزات والتذكيرات. يشمل الرد الهاتفي الذكي، الجدولة الإلكترونية، ولوحة إدارة العملاء.",
          popular: false,
          relatedServices: [
            "السباكة",
            "الكهرباء",
            "النظافة",
            "الحدائق",
            "مكافحة الآفات",
            "إصلاح الأجهزة",
          ],
        },
        {
          name: "الفريق الصغير",
          price: "$900",
          originalPrice: "$1,200", // Increased for compelling savings
          monthlyRetainer: "$299",
          originalMonthlyRetainer: "$399", // Increased for compelling savings
          savings: "وفر $100/شهريًا",
          features: [
            "جميع ميزات المشغل المستقل",
            "جدولة وتوجيه الفريق",
            "حملات ترويجية/تحويل عبر البيع",
            "تحليلات وتقارير متقدمة",
          ],
          bookings: "تعامل مع أكثر من 120 وظيفة شهريًا",
          description:
            "مثالي لفرق الخدمات المنزلية الصغيرة التي ترغب في تحسين الكفاءة والحفاظ على العملاء. يضيف الجدولة الفريقية، حملات الترويج، والتحليلات المتقدمة.",
          popular: true,
          relatedServices: [
            "السباكة",
            "الكهرباء",
            "النظافة",
            "الحدائق",
            "مكافحة الآفات",
            "إصلاح الأجهزة",
          ],
        },
      ],
    },
  ];
  const industriesToUse = isArabic ? INDUSTRIES_AR : INDUSTRIES;
  const industryToShow = industriesToUse.find((i) => i.key === selected);

  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden relative${
        isArabic ? " font-cairo" : ""
      }`}
    >
      {/* SEO Head Component */}
      <SEOHead
        title={
          isArabic
            ? "باقات وخطط الأتمتة بالذكاء الاصطناعي | داش إنفلونس"
            : "AI Automation Packages & Pricing | DashInfluence"
        }
        description={
          isArabic
            ? "اختر الباقة المثالية لأتمتة عملك بالذكاء الاصطناعي. باقات أساسية واحترافية وكاملة لمراكز السيارات، العقارات، الخدمات المنزلية وأكثر. تبدأ من $400."
            : "Choose the perfect AI automation package for your business. Essential, Professional, and Complete packages for automotive services, real estate agents, and more. Start at $400."
        }
        keywords={
          isArabic
            ? "باقات الأتمتة، أسعار الأتمتة، أتمتة السيارات، أتمتة العقارات، باقات الأعمال"
            : "AI automation packages, automation pricing, automotive automation, real estate automation, business automation packages"
        }
        ogTitle={
          isArabic
            ? "باقات وخطط الأتمتة بالذكاء الاصطناعي | داش إنفلونس"
            : "AI Automation Packages & Pricing | DashInfluence"
        }
        ogDescription={
          isArabic
            ? "اختر الباقة المثالية لأتمتة عملك بالذكاء الاصطناعي. باقات أساسية واحترافية وكاملة تبدأ من $400."
            : "Choose the perfect AI automation package for your business. Essential, Professional, and Complete packages starting at $400."
        }
        canonical="https://dashinfluence.com/packages"
      />
      {/* Hero Section */}
      <section className="relative z-10 text-white min-h-screen overflow-hidden pt-28 pb-2">
        <div className="absolute inset-0 z-0">
          <SparklesCore
            id="tsparticleshero"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={80}
            className="w-full h-full"
            particleColor="#B0B3B8"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-2">
                {isArabic
                  ? "باقات الأتمتة بالذكاء الاصطناعي"
                  : "AI Automation Packages"}
              </h1>
              <p className="text-xl mb-2 opacity-90">
                {isArabic
                  ? `اختر الحل الأمثل لأتمتة ${industryToShow?.label || ""}`
                  : `Choose the perfect AI solution to automate your ${industry?.label.toLowerCase()} business`}
              </p>
            </div>
            {/* Industry Tabs/Cards */}
            <div className="flex flex-wrap justify-center gap-4 pt-2 pb-2 w-full overflow-hidden">
              {/* Stars Background for Industry Tabs */}
              <div className="absolute inset-0 z-0">
                <SparklesCore
                  id="tsparticlesindustrytabs"
                  background="transparent"
                  minSize={0.6}
                  maxSize={1.4}
                  particleDensity={60}
                  className="w-full h-full"
                  particleColor="#B0B3B8"
                />
              </div>
              {industriesToUse.map((ind) => (
                <div key={ind.key} className="relative">
                  <button
                    onClick={() => setSelected(ind.key)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-base transition-all border shadow-sm backdrop-blur-md relative
                      ${
                        selected === ind.key
                          ? "bg-[#ffcf00] text-black border-[#ffcf00] scale-105"
                          : "bg-white/10 text-white border-white/20 hover:bg-white/20"
                      }`}
                  >
                    <span className="opacity-80">
                      <ind.icon className="w-5 h-5" />
                    </span>
                    {ind.label}
                  </button>
                </div>
              ))}
            </div>
            {/* Package Cards */}
            <div className="section-padding relative overflow-hidden">
              {/* Stars Background for Package Cards */}
              <div className="absolute inset-0 z-0">
                <SparklesCore
                  id="tsparticlespackagecards"
                  background="transparent"
                  minSize={0.6}
                  maxSize={1.4}
                  particleDensity={80}
                  className="w-full h-full"
                  particleColor="#B0B3B8"
                />
              </div>
              <div className="max-w-6xl mx-auto px-6 relative z-10">
                {industryToShow ? (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {industryToShow.packages?.map((pkg, index) => (
                      <motion.div
                        key={pkg.name}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <Card
                          className={`h-full relative overflow-visible ${
                            pkg.popular
                              ? "border-[#ffcf00] border-2 shadow-lg"
                              : "border-gray-200"
                          }`}
                        >
                          {/* Icon Background for Card */}
                          <div
                            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 pointer-events-none select-none"
                            style={{ fontSize: 120, zIndex: 0 }}
                          >
                            <industryToShow.icon className="w-[120px] h-[120px] mx-auto text-blue-400" />
                          </div>
                          {pkg.popular && (
                            <div
                              className="absolute left-1/2 -translate-x-1/2 z-20 bg-[#ffcf00] text-blue-900 font-bold px-4 py-1 rounded-full shadow-lg pointer-events-none text-sm sm:text-base whitespace-nowrap min-w-[110px] text-center"
                              style={{
                                top: "-16px",
                              }}
                            >
                              {isArabic ? "الأكثر شهرة" : "Most Popular"}
                            </div>
                          )}
                          <CardHeader className="text-center relative z-10">
                            <CardTitle className="text-2xl font-bold text-foreground">
                              {pkg.name}
                            </CardTitle>
                            <div className="price-display mb-4">
                              <div className="text-4xl font-bold text-[#ffcf00] mb-1">
                                {pkg.price}
                                <span className="text-lg text-muted-foreground">
                                  {isArabic ? " رسوم تأسيس" : " setup"}
                                </span>
                              </div>
                              <div className="text-2xl font-bold text-foreground mb-1">
                                {pkg.monthlyRetainer}
                                <span className="text-sm text-muted-foreground">
                                  {isArabic ? " /شهريًا" : " /month"}
                                </span>
                              </div>
                              <div className="bg-green-500 text-white text-sm font-bold px-3 py-1 rounded-full inline-block mb-1">
                                {pkg.savings}
                              </div>
                              <div className="text-sm text-muted-foreground line-through">
                                {isArabic
                                  ? `سابقًا ${pkg.originalMonthlyRetainer}/شهريًا`
                                  : `Originally ${pkg.originalMonthlyRetainer}/month`}
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent className="space-y-6 relative z-10">
                            <div className="flex items-center justify-center space-x-2 text-foreground">
                              <Calendar className="w-5 h-5" />
                              <span className="font-semibold">
                                {pkg.bookings}
                              </span>
                            </div>
                            <div className="space-y-3">
                              <h4 className="font-semibold text-foreground">
                                {isArabic
                                  ? "المزايا المشمولة:"
                                  : "Features Included:"}
                              </h4>
                              {pkg.features.map((feature, idx) => (
                                <div
                                  key={idx}
                                  className="flex items-center space-x-3"
                                >
                                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                                  <span className="text-muted-foreground">
                                    {feature}
                                  </span>
                                </div>
                              ))}
                            </div>
                            <Accordion type="single" collapsible>
                              <AccordionItem value="desc">
                                <AccordionTrigger className="w-full text-left px-0 py-2 font-semibold text-blue-700 hover:underline">
                                  {isArabic
                                    ? "عرض المزيد من التفاصيل"
                                    : "Show More Details"}
                                </AccordionTrigger>
                                <AccordionContent>
                                  <div className="text-sm text-foreground/90 whitespace-pre-line">
                                    {pkg.description}
                                  </div>
                                </AccordionContent>
                              </AccordionItem>
                            </Accordion>
                            <Button
                              className={`w-full py-3 font-bold transition-colors text-sm sm:text-base whitespace-nowrap ${
                                pkg.popular
                                  ? "bg-[#ffcf00] text-foreground hover:bg-yellow-300"
                                  : "bg-[hsl(217,69%,34%)] text-white hover:bg-[hsl(217,69%,40%)]"
                              }`}
                              onClick={() =>
                                window.open(
                                  "https://calendly.com/dashinfluence/new-meeting",
                                  "_blank"
                                )
                              }
                            >
                              <span className="text-sm sm:text-base">
                                {isArabic ? "ابدأ الآن" : "Get Started"}
                              </span>
                            </Button>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
