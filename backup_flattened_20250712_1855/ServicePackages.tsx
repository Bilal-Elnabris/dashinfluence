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
        name: "Essential AI Package",
        price: "$299",
        monthlyRetainer: "$99",
        features: [
          "AI Chat Agent for Website (answers FAQs, captures leads)",
          "Online Appointment Booking (real-time scheduling)",
          "Automated SMS Reminders for Appointments",
          "Customer Contact Management Dashboard",
        ],
        bookings: "Handle 50+ inquiries/month",
        description: `Designed for small or new car detailing businesses looking to automate their customer communication and booking process. Includes a website chatbot to answer common questions and capture leads, online booking to reduce phone tag, and automated SMS reminders to cut no-shows. All customer data is managed in a simple dashboard for easy follow-up.`,
        popular: false,
      },
      {
        name: "Professional AI Package",
        price: "$799",
        monthlyRetainer: "$249",
        features: [
          "All features in the Essential AI Package",
          "AI-Powered Review Request Automation (after service)",
          "Automated Follow-Up for Repeat Business",
          "Basic Analytics Dashboard (track bookings, leads, reviews)",
        ],
        bookings: "Handle 150+ inquiries/month",
        description: `Ideal for growing car detailers who want to boost repeat business and online reputation. Adds automated review requests after each job, follow-up messages to encourage repeat bookings, and a dashboard to track key business metrics. All features from Essential included.`,
        popular: true,
      },
      {
        name: "Complete AI Suite",
        price: "$1,499",
        monthlyRetainer: "$349",
        features: [
          "All features in the Professional AI Package",
          "AI Call Handling & Voicemail Transcription",
          "Advanced Analytics & Reporting",
          "Automated Upsell/Cross-Sell Campaigns",
          "Integration with Google My Business & Facebook Messenger",
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
        price: "$699",
        monthlyRetainer: "$149",
        features: [
          "AI Chat Agent for Listings & FAQs",
          "Automated Lead Capture & Routing",
          "Appointment Scheduling for Showings",
          "Client Contact Management Portal",
        ],
        bookings: "Handle 50+ leads/month",
        description: `Perfect for solo agents or small teams who want to automate lead capture and appointment scheduling. The AI chat agent answers property questions and books showings, while all client info is organized in a simple portal.`,
        popular: false,
      },
      {
        name: "Team",
        price: "$1,499",
        monthlyRetainer: "$399",
        features: [
          "All features in the Essential AI Package",
          "Automated Drip Email Campaigns for Buyers/Sellers",
          "AI-Powered Review & Testimonial Requests",
          "Basic Analytics Dashboard (track leads, showings, reviews)",
        ],
        bookings: "Handle 150+ leads/month",
        description: `For agents and teams looking to nurture leads and build reputation. Adds automated drip campaigns for buyers/sellers, review requests, and a dashboard to track performance. All features from Essential included.`,
        popular: true,
      },
      {
        name: "Agency",
        price: "$2,999",
        monthlyRetainer: "$899",
        features: [
          "All features in the Professional AI Package",
          "AI Call Handling & Voicemail Transcription",
          "Advanced Analytics & Reporting",
          "Automated Social Media Posting for Listings",
          "Integration with Zillow, Realtor.com, Facebook Messenger",
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
        price: "$399",
        monthlyRetainer: "$79",
        features: [
          "AI Chat Agent for Service Inquiries",
          "Online Booking for Estimates/Jobs",
          "Automated SMS Reminders for Appointments",
          "Customer Contact Management Portal",
        ],
        bookings: "Handle 50+ jobs/month",
        description: `Great for plumbers, electricians, cleaners, and other home service pros who want to automate customer communication and scheduling. AI chat agent answers service questions and books jobs, with reminders to reduce no-shows.`,
        popular: false,
      },
      {
        name: "Small Team",
        price: "$899",
        monthlyRetainer: "$199",
        features: [
          "All features in the Essential AI Package",
          "Automated Review Requests After Job Completion",
          "Automated Follow-Up for Maintenance/Recurring Jobs",
          "Basic Analytics Dashboard (track jobs, reviews, follow-ups)",
        ],
        bookings: "Handle 150+ jobs/month",
        description: `For growing home service businesses who want to boost reviews and repeat business. Adds automated review requests, follow-up for recurring jobs, and a dashboard to track performance. All features from Essential included.`,
        popular: true,
      },
      {
        name: "Company",
        price: "$1,799",
        monthlyRetainer: "$499",
        features: [
          "All features in the Professional AI Package",
          "AI Call Handling & Voicemail Transcription",
          "Advanced Analytics & Reporting",
          "Automated Upsell/Cross-Sell Campaigns",
          "Integration with Google My Business & Facebook Messenger",
        ],
        bookings: "Handle 500+ jobs/month",
        description: `For established home service companies ready to fully automate and scale. Includes AI call handling, advanced analytics, upsell/cross-sell campaigns, and integrations with Google and Facebook. All features from Professional and Essential included.`,
        popular: false,
      },
    ],
  },
  {
    key: "health-wellness",
    label: "Health & Wellness Clinics",
    icon: HeartPulse,
    packages: [
      {
        name: "Solo Practitioner",
        price: "$499",
        monthlyRetainer: "$99",
        features: [
          "AI Chat Agent for Patient Inquiries",
          "Online Appointment Scheduling",
          "Automated SMS Reminders for Appointments",
          "Patient Contact Management Portal",
        ],
        bookings: "Handle 50+ appointments/month",
        description: `Perfect for clinics and wellness centers looking to automate patient communication and scheduling. AI chat agent answers common questions and books appointments, with reminders to reduce no-shows.`,
        popular: false,
      },
      {
        name: "Clinic",
        price: "$1,199",
        monthlyRetainer: "$299",
        features: [
          "All features in the Essential AI Package",
          "Automated Review Requests After Visits",
          "Automated Follow-Up for Recurring Appointments",
          "Basic Analytics Dashboard (track appointments, reviews, follow-ups)",
        ],
        bookings: "Handle 150+ appointments/month",
        description: `For growing clinics and wellness practices who want to boost reviews and patient retention. Adds automated review requests, follow-up for recurring appointments, and a dashboard to track performance. All features from Essential included.`,
        popular: true,
      },
      {
        name: "Center",
        price: "$2,499",
        monthlyRetainer: "$699",
        features: [
          "All features in the Professional AI Package",
          "AI Call Handling & Voicemail Transcription",
          "Advanced Analytics & Reporting",
          "Automated Upsell/Cross-Sell Campaigns",
          "Integration with Google My Business & Facebook Messenger",
        ],
        bookings: "Handle 500+ appointments/month",
        description: `For established clinics and wellness centers ready to fully automate and scale. Includes AI call handling, advanced analytics, upsell/cross-sell campaigns, and integrations with Google and Facebook. All features from Professional and Essential included.`,
        popular: false,
      },
    ],
  },
  {
    key: "restaurants-cafes",
    label: "Restaurants & Cafes",
    icon: UtensilsCrossed,
    packages: [
      {
        name: "Small",
        price: "$399",
        monthlyRetainer: "$79",
        features: [
          "AI Chat Agent for Menu & Reservation Inquiries",
          "Online Reservation Booking",
          "Automated SMS Reminders for Reservations",
          "Customer Contact Management Portal",
        ],
        bookings: "Handle 50+ reservations/month",
        description: `Great for restaurants and cafes looking to automate reservation management and customer communication. AI chat agent answers menu and reservation questions, with reminders to reduce no-shows.`,
        popular: false,
      },
      {
        name: "Medium",
        price: "$999",
        monthlyRetainer: "$249",
        features: [
          "All features in the Essential AI Package",
          "Automated Review Requests After Dining",
          "Automated Follow-Up for Repeat Visits",
          "Basic Analytics Dashboard (track reservations, reviews, follow-ups)",
        ],
        bookings: "Handle 150+ reservations/month",
        description: `For growing restaurants and cafes who want to boost reviews and repeat visits. Adds automated review requests, follow-up for repeat guests, and a dashboard to track performance. All features from Essential included.`,
        popular: true,
      },
      {
        name: "Large",
        price: "$2,199",
        monthlyRetainer: "$599",
        features: [
          "All features in the Professional AI Package",
          "AI Call Handling & Voicemail Transcription",
          "Advanced Analytics & Reporting",
          "Automated Upsell/Cross-Sell Campaigns",
          "Integration with Google My Business & Facebook Messenger",
        ],
        bookings: "Handle 500+ reservations/month",
        description: `For established restaurants and cafes ready to fully automate and scale. Includes AI call handling, advanced analytics, upsell/cross-sell campaigns, and integrations with Google and Facebook. All features from Professional and Essential included.`,
        popular: false,
      },
    ],
  },
];

export default function ServicePackages() {
  const [selected, setSelected] = useState(INDUSTRIES[0].key);
  const industry = INDUSTRIES.find((i) => i.key === selected);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden relative">
      {/* Stars Background */}
      <div className="h-full w-full absolute inset-0 z-0">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#B0B3B8"
        />
      </div>
      {/* Hero Section */}
      <div className="relative z-10 text-white section-padding relative overflow-hidden">
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
      <div className="relative z-10 flex flex-wrap justify-center gap-4 pt-2 pb-2 max-w-6xl mx-auto w-full px-4">
        {INDUSTRIES.map((ind) => (
          <button
            key={ind.key}
            onClick={() => setSelected(ind.key)}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-base transition-all border shadow-sm backdrop-blur-md
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
        ))}
      </div>
      {/* Package Cards */}
      <div className="relative z-10 section-padding relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {industry?.packages.map((pkg, index) => (
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
                    <div className="text-4xl font-bold text-[#ffcf00] mb-2">
                      {pkg.price}
                      <span className="text-lg text-muted-foreground">
                        {" "}
                        setup
                      </span>
                    </div>
                    <div className="text-lg font-semibold text-foreground mb-2">
                      {pkg.monthlyRetainer}
                      <span className="text-sm text-muted-foreground">
                        {" "}
                        /month retainer
                      </span>
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
                        <div key={idx} className="flex items-center space-x-3">
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
                      <span className="text-sm sm:text-base">Get Started</span>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
