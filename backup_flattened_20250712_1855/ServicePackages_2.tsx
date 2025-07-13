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
    key: "other",
    label: "Other",
    icon: Wrench,
    comingSoon: true,
  },
];

export default function ServicePackages() {
  const [selected, setSelected] = useState(INDUSTRIES[0].key);
  const industry = INDUSTRIES.find((i) => i.key === selected);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden relative">
      {/* SEO Head Component */}
      <SEOHead
        title="AI Automation Packages & Pricing | DashInfluence"
        description="Choose the perfect AI automation package for your business. Essential, Professional, and Complete packages for car detailers, real estate agents, and more. Start at $400."
        keywords="AI automation packages, automation pricing, car detailing automation, real estate automation, business automation packages"
        ogTitle="AI Automation Packages & Pricing | DashInfluence"
        ogDescription="Choose the perfect AI automation package for your business. Essential, Professional, and Complete packages starting at $400."
        canonical="https://dashinfluence.com/packages"
      />

      {/* Hero Section */}
      <div className="relative z-10 text-white section-padding relative overflow-hidden">
        {/* Stars Background for Hero */}
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
        {/* Icon Background */}
        <div
          className="absolute left-1/2 top-0 -translate-x-1/2 opacity-10 pointer-events-none select-none"
          style={{ fontSize: 220, zIndex: 0 }}
        >
          {industry && (
            <industry.icon className="w-[220px] h-[220px] mx-auto text-blue-400" />
          )}
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            AI Automation Packages
          </h1>
          <p className="text-xl mb-8 opacity-90">
            Choose the perfect AI solution to automate your{" "}
            {industry?.label.toLowerCase()} business
          </p>
        </div>
      </div>
      {/* Industry Tabs/Cards - moved here */}
      <div className="relative z-10 flex flex-wrap justify-center gap-4 pt-2 pb-2 max-w-6xl mx-auto w-full px-4 relative overflow-hidden">
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
        {INDUSTRIES.map((ind) => (
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
            {ind.comingSoon && (
              <div className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
                COMING SOON
              </div>
            )}
          </div>
        ))}
      </div>
      {/* Package Cards */}
      <div className="relative z-10 section-padding relative overflow-hidden">
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
          {industry?.comingSoon ? (
            <div className="text-center">
              <Card className="max-w-2xl mx-auto p-12 bg-gradient-to-r from-[hsl(217,69%,34%)] to-blue-800 text-white border-0">
                <CardContent className="p-0">
                  <div className="text-6xl mb-6">🚧</div>
                  <h3 className="text-3xl font-bold mb-4">Coming Soon!</h3>
                  <div className="text-xl mb-6 opacity-90 space-y-4">
                    <p>
                      We are currently{" "}
                      <span className="font-semibold text-[#ffcf00]">
                        expanding our team
                      </span>{" "}
                      to serve more niches.
                    </p>
                    <p>
                      Stay tuned for exciting packages tailored specifically for
                      your industry.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      className="bg-[#ffcf00] text-black font-bold px-6 py-3 hover:bg-yellow-300 transition-colors"
                      onClick={() => (window.location.href = "/early-access")}
                    >
                      Get Early Access
                    </Button>
                    <Button
                      className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 font-bold px-6 py-3 transition-colors"
                      onClick={() => setSelected("car-detailers")}
                    >
                      View Available Packages
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {industry?.packages?.map((pkg, index) => (
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
                      <industry.icon className="w-[120px] h-[120px] mx-auto text-blue-400" />
                    </div>
                    {pkg.popular && (
                      <div
                        className="absolute left-1/2 -translate-x-1/2 z-20 bg-[#ffcf00] text-blue-900 font-bold px-5 py-1 rounded-full shadow-lg pointer-events-none"
                        style={{
                          minWidth: 130,
                          textAlign: "center",
                          top: "-18px",
                        }}
                      >
                        Most Popular
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
                            {" "}
                            setup
                          </span>
                        </div>
                        <div className="text-2xl font-bold text-foreground mb-1">
                          {pkg.monthlyRetainer}
                          <span className="text-sm text-muted-foreground">
                            {" "}
                            /month
                          </span>
                        </div>
                        <div className="bg-green-500 text-white text-sm font-bold px-3 py-1 rounded-full inline-block mb-1">
                          {pkg.savings}
                        </div>
                        <div className="text-sm text-muted-foreground line-through">
                          Originally {pkg.originalMonthlyRetainer}/month
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6 relative z-10">
                      <div className="flex items-center justify-center space-x-2 text-foreground">
                        <Calendar className="w-5 h-5" />
                        <span className="font-semibold">{pkg.bookings}</span>
                      </div>
                      <div className="space-y-3">
                        <h4 className="font-semibold text-foreground">
                          Features Included:
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
                            Show More Details
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
                          Get Started
                        </span>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
