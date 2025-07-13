import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { SparklesCore } from "@/components/SparklesCore";
import { useState } from "react";
import { useLocation } from "wouter";

export default function EarlyAccess() {
  const [location, setLocation] = useLocation();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    industry: "",
    businessSize: "",
    currentChallenges: "",
    automationNeeds: [] as string[],
    timeline: "",
    budget: "",
    additionalInfo: "",
  });

  const industries = [
    "Home Services (Plumbing, Electrical, Cleaning, etc.)",
    "Health & Wellness Clinics",
    "Restaurants & Cafes",
    "Real Estate",
    "Automotive Services",
    "Other",
  ];

  const businessSizes = [
    "Solo/Single Owner",
    "Small Team (2-10 employees)",
    "Medium Business (11-50 employees)",
    "Large Business (50+ employees)",
  ];

  const automationNeeds = [
    "Customer Communication & Chat",
    "Appointment/Booking Management",
    "Lead Capture & Follow-up",
    "Review Management",
    "Phone Call Handling",
    "Social Media Management",
    "Analytics & Reporting",
    "Payment Processing",
    "Inventory Management",
    "Staff Scheduling",
  ];

  const timelines = [
    "Immediately (within 1 month)",
    "Soon (1-3 months)",
    "Planning phase (3-6 months)",
    "Future consideration (6+ months)",
  ];

  const budgets = [
    "Under $200/month",
    "$200-$500/month",
    "$500-$1000/month",
    "$1000+/month",
    "Not sure yet",
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleCheckboxChange = (need: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      automationNeeds: checked
        ? [...prev.automationNeeds, need]
        : prev.automationNeeds.filter((n) => n !== need),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log("Early Access Form Data:", formData);
    // Redirect to thank you page or show success message
    alert("Thank you for your interest! We'll be in touch soon.");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <SparklesCore
          id="tsparticlesearlyaccess"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={60}
          className="w-full h-full"
          particleColor="#ffcf00"
        />
      </div>

      {/* Hero Section */}
      <div className="text-white section-padding relative z-10 relative overflow-hidden">
        {/* Animated Background for Hero Section */}
        <div className="absolute inset-0 z-0">
          <SparklesCore
            id="tsparticlesheroearlyaccess"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={80}
            className="w-full h-full"
            particleColor="#ffcf00"
          />
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get Early Access to AI Automation
          </h1>
          <p className="text-xl mb-8 opacity-90">
            Be among the first to experience our cutting-edge AI solutions for
            your industry. Join our exclusive early access program and shape the
            future of business automation.
          </p>
        </div>
      </div>

      {/* Form Section */}
      <div className="section-padding relative z-10 relative overflow-hidden">
        {/* Animated Background for Form Section */}
        <div className="absolute inset-0 z-0">
          <SparklesCore
            id="tsparticlesformearlyaccess"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={60}
            className="w-full h-full"
            particleColor="#ffcf00"
          />
        </div>

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <Card className="shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl text-foreground">
                Early Access Application
              </CardTitle>
              <p className="text-muted-foreground">
                Tell us about your business and automation needs. We'll
                prioritize your access based on your requirements.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Basic Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      First Name *
                    </label>
                    <Input
                      placeholder="John"
                      value={formData.firstName}
                      onChange={(e) =>
                        handleInputChange("firstName", e.target.value)
                      }
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Last Name *
                    </label>
                    <Input
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={(e) =>
                        handleInputChange("lastName", e.target.value)
                      }
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <Input
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Phone
                    </label>
                    <Input
                      type="tel"
                      placeholder="+1 (825) 250-0262"
                      value={formData.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Company Name *
                    </label>
                    <Input
                      placeholder="Your Company Name"
                      value={formData.company}
                      onChange={(e) =>
                        handleInputChange("company", e.target.value)
                      }
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Industry *
                    </label>
                    <Select
                      value={formData.industry}
                      onValueChange={(value) =>
                        handleInputChange("industry", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select your industry" />
                      </SelectTrigger>
                      <SelectContent>
                        {industries.map((industry) => (
                          <SelectItem key={industry} value={industry}>
                            {industry}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Business Size *
                    </label>
                    <Select
                      value={formData.businessSize}
                      onValueChange={(value) =>
                        handleInputChange("businessSize", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select business size" />
                      </SelectTrigger>
                      <SelectContent>
                        {businessSizes.map((size) => (
                          <SelectItem key={size} value={size}>
                            {size}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Timeline for Implementation *
                    </label>
                    <Select
                      value={formData.timeline}
                      onValueChange={(value) =>
                        handleInputChange("timeline", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select timeline" />
                      </SelectTrigger>
                      <SelectContent>
                        {timelines.map((timeline) => (
                          <SelectItem key={timeline} value={timeline}>
                            {timeline}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Budget Range *
                  </label>
                  <Select
                    value={formData.budget}
                    onValueChange={(value) =>
                      handleInputChange("budget", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      {budgets.map((budget) => (
                        <SelectItem key={budget} value={budget}>
                          {budget}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Current Business Challenges *
                  </label>
                  <Textarea
                    placeholder="What are the biggest challenges your business faces today? (e.g., managing appointments, customer communication, lead generation, etc.)"
                    rows={3}
                    value={formData.currentChallenges}
                    onChange={(e) =>
                      handleInputChange("currentChallenges", e.target.value)
                    }
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Automation Needs (Select all that apply) *
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
                    {automationNeeds.map((need) => (
                      <div key={need} className="flex items-center space-x-2">
                        <Checkbox
                          id={need}
                          checked={formData.automationNeeds.includes(need)}
                          onCheckedChange={(checked) =>
                            handleCheckboxChange(need, checked as boolean)
                          }
                        />
                        <label
                          htmlFor={need}
                          className="text-sm text-muted-foreground"
                        >
                          {need}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Additional Information
                  </label>
                  <Textarea
                    placeholder="Tell us more about your business, specific requirements, or any questions you have..."
                    rows={3}
                    value={formData.additionalInfo}
                    onChange={(e) =>
                      handleInputChange("additionalInfo", e.target.value)
                    }
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    type="submit"
                    className="flex-1 bg-[#ffcf00] text-foreground hover:bg-yellow-300 text-sm sm:text-lg py-3 whitespace-nowrap"
                  >
                    <span className="text-sm sm:text-base">
                      Submit Early Access Request
                    </span>
                  </Button>
                  <Button
                    type="button"
                    className="flex-1 bg-transparent border border-white/20 text-white hover:bg-white/10"
                    onClick={() => setLocation("/packages")}
                  >
                    <span className="text-sm sm:text-base">
                      View Available Packages
                    </span>
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
