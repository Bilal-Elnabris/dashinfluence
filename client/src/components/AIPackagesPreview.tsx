import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle,
  Phone,
  MessageCircle,
  Zap,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { SparklesCore } from "@/components/SparklesCore";

export default function AIPackagesPreview() {
  const packages = [
    {
      name: "Essential AI Package",
      description:
        "Perfect for small detailing shops starting with AI automation",
      features: [
        "Simple AI Chat Agent",
        "Basic Appointment Booking",
        "SMS Reminders",
        "Customer Contact Management",
      ],
      icon: <MessageCircle className="w-8 h-8" />,
      color: "blue",
    },
    {
      name: "Professional AI Package",
      description:
        "Ideal for growing detailing businesses ready to scale with AI",
      features: [
        "AI Phone Assistant",
        "Advanced Chat Agent",
        "Automated Booking System",
        "SMS & Email Follow-ups",
        "Review Generation",
        "Lead Qualification",
      ],
      icon: <Phone className="w-8 h-8" />,
      color: "green",
      popular: true,
    },
    {
      name: "Complete AI Suite",
      description:
        "Complete AI voice agents, chatbots, and full automation solution",
      features: [
        "AI Voice Agent (24/7 Phone)",
        "Advanced AI Chatbot",
        "Full Process Automation",
        "Customer Journey Mapping",
        "Revenue Analytics AI",
        "Multi-channel Communication",
        "Custom Workflow Design",
        "Priority Support & Training",
      ],
      icon: <Zap className="w-8 h-8" />,
      color: "purple",
    },
  ];

  return (
    <div className="section-padding bg-transparent">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            AI Automation Packages
          </h2>
          <div className="w-24 h-1 bg-[#ffcf00] mx-auto mb-6 border-b-2 border-dashed border-[#ffcf00]"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the perfect AI solution to automate your business
          </p>
        </div>

        {/* Package Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <Card
              key={index}
              className={`relative p-8 hover:shadow-xl transition-all duration-300 border-2 ${
                pkg.popular ? "border-[#ffcf00] shadow-lg" : "border-border"
              }`}
            >
              <CardContent className="p-0">
                {/* Popular Badge */}
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-[#ffcf00] text-black font-bold px-4 py-2 rounded-full text-sm">
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Package Icon */}
                <div
                  className={`w-16 h-16 bg-${pkg.color}-100 rounded-2xl flex items-center justify-center mx-auto mb-6`}
                >
                  <div className={`text-${pkg.color}-600`}>{pkg.icon}</div>
                </div>

                {/* Package Name */}
                <h3 className="text-2xl font-bold text-center mb-4 text-foreground">
                  {pkg.name}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-center mb-6">
                  {pkg.description}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="text-center">
                  <Link href="/packages">
                    <Button className="w-full bg-[#ffcf00] text-black font-bold hover:bg-yellow-300 transition-colors text-sm whitespace-nowrap">
                      <span className="text-xs sm:text-sm">Learn More</span>
                      <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center relative">
          <Card className="p-8 bg-gradient-to-r from-[hsl(217,69%,34%)] to-blue-800 text-white relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 z-0">
              <SparklesCore
                id="tsparticlescta"
                background="transparent"
                minSize={0.6}
                maxSize={1.4}
                particleDensity={50}
                className="w-full h-full"
                particleColor="#FFFFFF"
              />
            </div>
            <CardContent className="p-0 relative z-10">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
                Get detailed pricing and start your AI automation journey today
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/packages">
                  <Button className="bg-[#ffcf00] text-black font-bold px-4 sm:px-8 py-3 hover:bg-yellow-300 transition-colors text-sm sm:text-base whitespace-nowrap">
                    <span className="text-xs sm:text-sm">
                      View All Packages
                    </span>
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>
                </Link>
                <Button
                  className="bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-black font-bold px-4 sm:px-8 py-3 transition-colors text-sm sm:text-base whitespace-nowrap"
                  onClick={() =>
                    window.open(
                      "https://calendly.com/dashinfluence/new-meeting",
                      "_blank"
                    )
                  }
                >
                  <span className="text-xs sm:text-sm">Free Consultation</span>
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
