import { useLocation } from "wouter";
import { Car, Home, Wrench, HeartPulse, Coffee } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { SparklesCore } from "@/components/SparklesCore";
import { useTranslation } from "react-i18next";
import Navbar from "@/components/Navbar";

const niches = [
  {
    key: "car-detailing",
    title: "Car Detailers",
    description:
      "Calculate lost revenue and automation potential for your car detailing business.",
    link: "/calculator/car-detailing",
  },
  {
    key: "real-estate",
    title: "Real Estate Agents & Brokers",
    description:
      "See how much revenue slips through the cracks in your real estate business and how AI can help.",
    link: "/calculator/real-estate",
  },
  {
    key: "home-services",
    title: "Home Services",
    description:
      "For plumbers, HVAC, electricians, and contractors: discover your automation ROI.",
    link: "/calculator/home-services",
  },
  {
    key: "health-wellness",
    title: "Health & Wellness Clinics",
    description:
      "Dentists, massage therapists, and clinics: estimate your missed revenue and automation impact.",
    link: "/calculator/health-wellness",
  },
  {
    key: "restaurants-cafes",
    title: "Restaurants & Cafes",
    description:
      "Find out how much revenue you could recover with automation in your restaurant or cafe.",
    link: "/calculator/restaurants-cafes",
  },
];

const iconMap: Record<string, React.ComponentType<any>> = {
  "car-detailing": Car,
  "real-estate": Home,
  "home-services": Wrench,
  "health-wellness": HeartPulse,
  "restaurants-cafes": Coffee,
};

export default function RevenueCalculatorSelection() {
  const [, setLocation] = useLocation();
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center bg-background py-28 px-4 relative overflow-hidden${
        isArabic ? " font-cairo" : ""
      }`}
    >
      <Navbar />
      {/* Stars Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <SparklesCore
          id="tsparticles-revenue-selection"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={80}
          className="w-full h-full"
          particleColor="#B0B3B8"
        />
      </div>
      {/* SEO Head Component */}
      <SEOHead
        title="Revenue Calculator - Calculate Your Business Automation ROI | DashInfluence"
        description="Calculate how much revenue you're losing to missed calls and manual scheduling. See your automation ROI for automotive services, real estate, home services, health & wellness, and restaurants."
        keywords="revenue calculator, automation ROI, business automation calculator, missed revenue, automotive calculator, real estate automation"
        ogTitle="Revenue Calculator - Calculate Your Business Automation ROI | DashInfluence"
        ogDescription="Calculate how much revenue you're losing to missed calls and manual scheduling. See your automation ROI."
        canonical="https://dashinfluence.com/calculator"
      />

      <div className="max-w-2xl mx-auto text-center mb-8 relative z-10">
        <h1 className="text-4xl font-bold mb-4 text-foreground">
          {t("calculatorSelection.discover_missed_revenue_title")}
        </h1>
        <p className="text-lg text-muted-foreground mb-4">
          {t("calculatorSelection.discover_missed_revenue_description")}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl relative z-10">
        {niches.map((niche) => {
          const Icon = iconMap[niche.key];
          return (
            <div
              key={niche.key}
              className="relative rounded-2xl shadow-lg bg-white/90 border border-gray-100 p-8 flex flex-col items-start hover:shadow-2xl transition-shadow duration-300 h-full overflow-hidden"
            >
              {/* Icon Background */}
              <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 pointer-events-none select-none z-0"
                style={{ fontSize: 120 }}
              >
                <Icon className="w-[120px] h-[120px] mx-auto text-blue-400" />
              </div>
              <div className="flex flex-col h-full justify-between relative z-10 w-full">
                <div>
                  <h2 className="text-lg font-bold mb-2 text-blue-900 text-center">
                    {t(
                      `calculatorSelection.niches.${niche.key}.title`,
                      niche.title
                    )}
                  </h2>
                  <p className="mb-6 text-gray-700 text-center">
                    {t(
                      `calculatorSelection.niches.${niche.key}.description`,
                      niche.description
                    )}
                  </p>
                </div>
                <button
                  className="mt-4 bg-gradient-to-r from-[#ffcf00] to-yellow-400 text-[hsl(217,69%,34%)] font-bold px-6 py-2 rounded-lg border border-yellow-300 shadow-md hover:brightness-110 hover:scale-105 transition-all flex items-center justify-center gap-2 w-full"
                  onClick={() => setLocation(niche.link)}
                >
                  {t("calculatorSelection.calculate_my_leakage_button")}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
