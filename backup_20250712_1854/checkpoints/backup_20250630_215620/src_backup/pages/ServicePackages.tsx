import { motion } from "framer-motion";
import { CheckCircle, Calendar, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ServicePackages() {
  const packages = [
    {
      name: "Essential AI Package",
      price: "$299",
      monthlyRetainer: "$100",
      features: [
        "Simple AI Chat Agent",
        "Basic Appointment Booking",
        "SMS Reminders",
        "Customer Contact Management",
      ],
      bookings: "Handle 50+ inquiries/month",
      description:
        "Perfect for small detailing shops starting with AI automation",
      popular: false,
    },
    {
      name: "Professional AI Package",
      price: "$799",
      monthlyRetainer: "$250",
      features: [
        "AI Phone Assistant",
        "Advanced Chat Agent",
        "Automated Booking System",
        "SMS & Email Follow-ups",
        "Review Generation",
        "Lead Qualification",
      ],
      bookings: "Handle 200+ calls/month",
      description:
        "Ideal for growing detailing businesses ready to scale with AI",
      popular: true,
    },
    {
      name: "Complete AI Suite",
      price: "$1,499",
      monthlyRetainer: "$350",
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
      bookings: "Handle 500+ calls/month",
      description:
        "Complete AI voice agents, chatbots, and full automation solution",
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="gradient-bg text-white section-padding">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            AI Automation Packages
          </h1>
          <p className="text-xl mb-8 opacity-90">
            Choose the perfect AI solution to automate your car detailing
            business
          </p>
        </div>
      </div>

      {/* Package Cards */}
      <div className="section-padding">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  className={`h-full relative ${
                    pkg.popular
                      ? "border-[#ffcf00] border-2 shadow-lg"
                      : "border-gray-200"
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-[#ffcf00] text-foreground px-4 py-1 rounded-full text-sm font-bold">
                        Most Popular
                      </div>
                    </div>
                  )}

                  <CardHeader className="text-center">
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
                    <p className="text-muted-foreground">{pkg.description}</p>
                  </CardHeader>

                  <CardContent className="space-y-6">
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

                    <Button
                      className={`w-full py-3 font-bold transition-colors ${
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
                      Get Started
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <Card className="p-8 bg-gradient-to-r from-[hsl(217,69%,34%)] to-[hsl(225,71%,53%)] text-white">
              <h3 className="text-2xl font-bold mb-4">
                Not Sure Which Package Is Right?
              </h3>
              <p className="text-lg mb-6 opacity-90">
                Book a free consultation with our detailing automation experts.
                We'll analyze your business and recommend the perfect package to
                maximize your efficiency and profits.
              </p>
              <Button
                className="bg-[#ffcf00] text-foreground hover:bg-yellow-300 font-bold px-8 py-3"
                onClick={() =>
                  window.open(
                    "https://calendly.com/dashinfluence/new-meeting",
                    "_blank"
                  )
                }
              >
                Schedule Free Consultation
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
