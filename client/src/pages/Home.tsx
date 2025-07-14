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
} from "lucide-react";
import { SparklesCore } from "@/components/SparklesCore";
import { Progress } from "@/components/ui/progress";
import TestimonialsSection from "@/components/TestimonialsSection";

const BUSINESS_TYPES = [
  {
    key: "car-detailing",
    label: "Car Detailers",
    description:
      "For car detailing businesses looking to automate bookings and follow-ups.",
    icon: Car,
    link: "/calculator/car-detailing",
  },
  {
    key: "real-estate",
    label: "Real Estate Agents & Brokers",
    description:
      "For agents and brokers who want to capture more leads and automate client communication.",
    icon: HomeIcon,
    link: "/calculator/real-estate",
  },
  {
    key: "home-services",
    label: "Home Services",
    description:
      "For plumbing, HVAC, electrical, and other home service contractors ready for automation.",
    icon: Wrench,
    link: "/calculator/home-services",
  },
  {
    key: "health-wellness",
    label: "Health & Wellness Clinics",
    description:
      "For clinics, dentists, and therapists seeking to reduce no-shows and automate reminders.",
    icon: HeartPulse,
    link: "/calculator/health-wellness",
  },
  {
    key: "restaurants-cafes",
    label: "Restaurants & Cafes",
    description:
      "For venues wanting to automate reservations, reminders, and guest communication.",
    icon: Coffee,
    link: "/calculator/restaurants-cafes",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* SEO Head Component */}
      <SEOHead
        title="AI Business Automation Solutions | DashInfluence"
        description="Transform your business with AI automation. Stop losing revenue to missed calls and manual scheduling. 24/7 automated booking, smart call handling, and revenue optimization for businesses across all industries."
        keywords="AI automation, business automation, automation solutions, automated booking, AI voice agent, revenue optimization, 24/7 booking, smart call handling"
        ogTitle="AI Business Automation Solutions | DashInfluence"
        ogDescription="Transform your business with AI automation. Stop losing revenue to missed calls and manual scheduling. 24/7 automated booking and smart call handling."
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
              minSize={0.6}
              maxSize={1.4}
              particleDensity={100}
              className="w-full h-full"
              particleColor="#6b7280"
            />
          </div>
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How AI Automation Transforms Your Business
            </h2>
            <p className="text-lg mb-6 opacity-90">
              AI automation isn't just a buzzword—it's a proven driver of
              business growth, efficiency, and innovation. Here's what the
              research shows:
            </p>
            <ul className="text-left text-base md:text-lg mx-auto max-w-2xl space-y-3 mb-6">
              <li>
                • <span className="font-semibold">Productivity Boost:</span>{" "}
                According to McKinsey, businesses that implement AI automation
                see up to a{" "}
                <span className="font-bold text-blue-700">
                  40% increase in productivity
                </span>{" "}
                and a significant reduction in manual errors.
              </li>
              <li>
                • <span className="font-semibold">Cost Savings:</span> Deloitte
                reports that AI-driven automation can reduce operational costs
                by <span className="font-bold text-blue-700">20-30%</span> on
                average.
              </li>
              <li>
                • <span className="font-semibold">Customer Experience:</span> AI
                enables 24/7 support, faster response times, and personalized
                service, leading to higher customer satisfaction and retention.
              </li>
              <li>
                • <span className="font-semibold">Data-Driven Decisions:</span>{" "}
                AI systems analyze vast amounts of data to uncover insights and
                opportunities that humans might miss.
              </li>
              <li>
                • <span className="font-semibold">Scalability:</span> Automation
                allows your business to grow without a linear increase in costs
                or headcount.
              </li>
            </ul>
            <p className="text-base opacity-80">
              These are not just claims—they're results seen by leading
              businesses worldwide. Our solutions are designed to bring these
              benefits to your business, no matter your size or industry.
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
              minSize={0.6}
              maxSize={1.4}
              particleDensity={50}
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
              minSize={0.6}
              maxSize={1.4}
              particleDensity={50}
              className="w-full h-full"
              particleColor="#6b7280"
            />
          </div>
          <div className="relative z-10">
            <ImplementationProcessSection />
          </div>
        </section>

        {/* Persuasive Calculator Section */}
        <section className="section-padding bg-gradient-to-r from-slate-100 to-gray-100 dark:from-slate-800 dark:to-gray-800 relative overflow-hidden">
          {/* Stars Background */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <SparklesCore
              id="tsparticlescalculator"
              background="transparent"
              minSize={0.6}
              maxSize={1.4}
              particleDensity={50}
              className="w-full h-full"
              particleColor="#6b7280"
            />
          </div>
          <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Are You Leaving Money on the Table? Find Out How Much You're
              Losing Without AI
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-3xl mx-auto">
              Every day, businesses lose revenue to missed calls, slow
              follow-ups, and manual processes. Without AI automation, these
              losses add up—impacting your bottom line and growth potential.
              Curious how much you could be losing? Use our calculator below to
              see your potential leakage and discover how AI can help you
              recover it.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
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
                        <Button className="mt-4 bg-gradient-to-r from-[#ffcf00] to-yellow-400 text-[hsl(217,69%,34%)] font-bold px-6 py-2 rounded-lg border border-yellow-300 shadow-md hover:brightness-110 hover:scale-105 transition-all flex items-center justify-center gap-2 w-full">
                          Calculate My Leakage
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
                        </Button>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* AI Automation Packages Preview */}
        <section className="relative overflow-visible bg-transparent pt-8 pb-0">
          {/* Continuous Stars Background from Packages to Footer */}
          <div
            className="absolute inset-0 z-0 pointer-events-none h-[calc(100%+8rem)]"
            style={{ bottom: "-8rem" }}
          >
            <SparklesCore
              id="tsparticlespackages-continuous"
              background="transparent"
              minSize={0.6}
              maxSize={1.4}
              particleDensity={80}
              className="w-full h-full"
              particleColor="#6b7280"
            />
          </div>
          <div className="relative z-10">
            <AIPackagesPreview />
          </div>
        </section>
      </div>
    </div>
  );
}
