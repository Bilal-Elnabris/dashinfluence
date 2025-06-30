import { motion } from 'framer-motion';
import { CheckCircle, Calendar, DollarSign } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ServicePackages() {
  const packages = [
    {
      name: "Starter AI Package",
      price: "$297",
      features: [
        "AI Phone Assistant", 
        "Automated Booking System", 
        "SMS Follow-ups",
        "Basic CRM Integration"
      ],
      bookings: "Handle 100+ calls/month",
      description: "Perfect for small detailing shops ready to automate customer interactions",
      popular: false
    },
    {
      name: "Growth AI Package", 
      price: "$497",
      features: [
        "AI Phone Assistant",
        "Advanced Booking System", 
        "SMS & Email Automation",
        "Customer Management AI",
        "Review Generation",
        "Lead Qualification"
      ],
      bookings: "Handle 300+ calls/month",
      description: "Ideal for growing detailing businesses ready to scale with AI",
      popular: true
    },
    {
      name: "Enterprise AI Suite",
      price: "$797", 
      features: [
        "Multi-location AI Assistant",
        "Advanced Booking & Scheduling",
        "Full Marketing Automation",
        "AI Customer Support",
        "Revenue Analytics AI",
        "Staff Management AI",
        "Inventory Tracking",
        "Custom AI Training"
      ],
      bookings: "Handle 1000+ calls/month",
      description: "Complete AI automation solution for established detailing operations",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="gradient-bg text-white section-padding">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">AI Automation Packages</h1>
          <p className="text-xl mb-8 opacity-90">
            Choose the perfect AI solution to automate your car detailing business
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
                <Card className={`h-full relative ${pkg.popular ? 'border-[#ffcf00] border-2 shadow-lg' : 'border-gray-200'}`}>
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-[#ffcf00] text-[hsl(217,69%,34%)] px-4 py-1 rounded-full text-sm font-bold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl font-bold text-[hsl(217,69%,34%)]">
                      {pkg.name}
                    </CardTitle>
                    <div className="text-4xl font-bold text-[#ffcf00] mb-2">
                      {pkg.price}
                      <span className="text-lg text-muted-foreground">/month</span>
                    </div>
                    <p className="text-muted-foreground">{pkg.description}</p>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <div className="flex items-center justify-center space-x-2 text-[hsl(217,69%,34%)]">
                      <Calendar className="w-5 h-5" />
                      <span className="font-semibold">{pkg.bookings}</span>
                    </div>
                    
                    <div className="space-y-3">
                      <h4 className="font-semibold text-[hsl(217,69%,34%)]">Features Included:</h4>
                      {pkg.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button 
                      className={`w-full py-3 font-bold transition-colors ${
                        pkg.popular 
                          ? 'bg-[#ffcf00] text-[hsl(217,69%,34%)] hover:bg-yellow-400' 
                          : 'bg-[hsl(217,69%,34%)] text-white hover:bg-[hsl(217,69%,40%)]'
                      }`}
                      onClick={() => window.open('https://calendly.com/dashinfluence/consultation', '_blank')}
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
              <h3 className="text-2xl font-bold mb-4">Not Sure Which Package Is Right?</h3>
              <p className="text-lg mb-6 opacity-90">
                Book a free consultation with our detailing automation experts. We'll analyze your business 
                and recommend the perfect package to maximize your efficiency and profits.
              </p>
              <Button 
                className="bg-[#ffcf00] text-[hsl(217,69%,34%)] hover:bg-yellow-400 font-bold px-8 py-3"
                onClick={() => window.open('https://calendly.com/dashinfluence/consultation', '_blank')}
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