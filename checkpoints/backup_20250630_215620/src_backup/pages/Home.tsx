import NewHeroSection from "@/components/NewHeroSection";
import WhyChooseAISection from "@/components/WhyChooseAISection";
import RevenueCalculator from "./RevenueCalculator";
import TestimonialsSection from "@/components/TestimonialsSection";
import AIPackagesPreview from "@/components/AIPackagesPreview";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* New Hero Section */}
      <NewHeroSection />

      {/* Why Leading Businesses Choose AI Automation */}
      <WhyChooseAISection />

      {/* Revenue Calculator Section */}
      <div className="section-padding">
        <div className="max-w-6xl mx-auto px-6">
          <RevenueCalculator />
        </div>
      </div>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* AI Automation Packages Preview */}
      <AIPackagesPreview />
    </div>
  );
}
