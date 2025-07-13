import { Card, CardContent } from "@/components/ui/card";
import {
  Lightbulb,
  TrendingUp,
  Zap,
  Target,
  Clock,
  Users,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function WhyChooseAISection() {
  const benefits = [
    {
      icon: <Lightbulb className="w-12 h-12 text-blue-600" />,
      title: "Smart Automation",
      description:
        "AI handles 24/7 customer interactions, never missing a call or opportunity",
      color: "blue",
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-green-600" />,
      title: "Proven Results",
      description:
        "Average 40% increase in booking rates and 300% ROI within 18 months",
      color: "green",
    },
    {
      icon: <Zap className="w-12 h-12 text-purple-600" />,
      title: "Instant Setup",
      description:
        "Get started in 2-3 weeks with minimal disruption to your current operations",
      color: "purple",
    },
    {
      icon: <Target className="w-12 h-12 text-orange-600" />,
      title: "Industry Leader",
      description:
        "Trusted by 500+ car detailing businesses across North America",
      color: "orange",
    },
  ];

  const processSteps = [
    {
      step: 1,
      title: "Discovery",
      description: "Deep dive into your current processes and pain points",
      icon: <Target className="w-6 h-6" />,
    },
    {
      step: 2,
      title: "Design",
      description: "Custom automation blueprint tailored to your business",
      icon: <Lightbulb className="w-6 h-6" />,
    },
    {
      step: 3,
      title: "Deploy",
      description: "Seamless integration with your existing systems",
      icon: <Zap className="w-6 h-6" />,
    },
    {
      step: 4,
      title: "Optimize",
      description: "Continuous monitoring and improvement for maximum ROI",
      icon: <TrendingUp className="w-6 h-6" />,
    },
  ];

  return (
    <div className="section-padding bg-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Why Leading Businesses Choose AI Automation
          </h2>
          <div className="w-24 h-1 bg-[#ffcf00] mx-auto mb-6 border-b-2 border-dashed border-[#ffcf00]"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of successful businesses that have transformed their
            operations with AI
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className={`p-6 text-center border-2 border-${benefit.color}-200 bg-${benefit.color}-50 dark:bg-${benefit.color}-900/20 hover:shadow-lg transition-shadow duration-300`}
            >
              <CardContent className="p-0">
                <div className="flex justify-center mb-4">{benefit.icon}</div>
                <h3
                  className={`font-bold text-lg mb-2 text-${benefit.color}-900 dark:text-${benefit.color}-100`}
                >
                  {benefit.title}
                </h3>
                <p
                  className={`text-sm text-${benefit.color}-700 dark:text-${benefit.color}-200`}
                >
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Overview */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 text-foreground">
              Our Implementation Process
            </h3>
            <p className="text-xl text-muted-foreground">
              From discovery to optimization, we ensure your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {processSteps.map((step, index) => (
              <div key={step.step} className="relative text-center group">
                <div className="w-16 h-16 bg-[hsl(217,69%,34%)] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 relative z-10 shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl">
                  {step.step}
                </div>
                <div className="w-12 h-12 bg-[#ffcf00]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  {step.icon}
                </div>
                <h4 className="font-bold mb-2 text-foreground">{step.title}</h4>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}

            {/* Connecting lines overlay */}
            <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 z-0">
              <div className="w-full h-full bg-gradient-to-r from-[hsl(217,69%,34%)] via-[#ffcf00] to-[hsl(217,69%,34%)] opacity-70 rounded-full"></div>
              <div
                className="absolute top-0 left-0 w-full h-full opacity-40"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(90deg, transparent 0, transparent 16px, rgba(255, 207, 0, 0.4) 16px, rgba(255, 207, 0, 0.4) 20px)",
                }}
              ></div>
            </div>
          </div>
        </div>

        {/* Key Differentiators */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Zap className="w-10 h-10 text-[#ffcf00]" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-foreground">
              Industry Expertise
            </h3>
            <p className="text-muted-foreground">
              Specialized in car detailing automation with deep understanding of
              your unique challenges and opportunities.
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-[#ffcf00]" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-foreground">
              Proven Results
            </h3>
            <p className="text-muted-foreground">
              70+ successful implementations with average 300% ROI within 90
              days of deployment.
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Target className="w-10 h-10 text-[#ffcf00]" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-foreground">
              Custom Solutions
            </h3>
            <p className="text-muted-foreground">
              Tailored automation that fits your existing processes, not generic
              one-size-fits-all solutions.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="p-8 bg-gradient-to-r from-[hsl(217,69%,34%)] to-blue-800 text-white">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
                Join hundreds of car detailing businesses that have already
                automated their operations and increased their revenue
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/packages">
                  <Button className="bg-[#ffcf00] text-black font-bold px-8 py-3 hover:bg-yellow-300 transition-colors">
                    View Service Packages
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Button
                  className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 font-bold px-8 py-3 transition-colors"
                  onClick={() =>
                    window.open(
                      "https://calendly.com/dashinfluence/consultation",
                      "_blank"
                    )
                  }
                >
                  Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
