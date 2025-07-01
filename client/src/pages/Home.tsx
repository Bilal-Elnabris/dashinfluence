import RevenueCalculator from "./RevenueCalculator";
import ServicePackages from "./ServicePackages";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="gradient-bg text-white section-padding">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Unlock Revenue with{" "}
            <span className="text-[#ffcf00]">AI Automation</span>
          </h1>
          <p className="text-2xl mb-8 opacity-90">
            Discover how our AI and automation services can transform your car
            detailing business. Calculate your potential revenue and explore our
            tailored AI service packages—all in one place.
          </p>
        </div>
      </div>

      {/* Revenue Calculator Section */}
      <div className="section-padding">
        <div className="max-w-6xl mx-auto px-6">
          <RevenueCalculator />
        </div>
      </div>

      {/* Service Packages Section */}
      <div className="section-padding">
        <div className="max-w-6xl mx-auto px-6">
          <ServicePackages />
        </div>
      </div>
    </div>
  );
}
