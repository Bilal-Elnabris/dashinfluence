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
import { SparklesCore } from "@/components/SparklesCore";

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
      description: "Trusted by 150+ businesses across North America",
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
    <div className="section-padding bg-transparent">
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

        {/* Key Differentiators */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Zap className="w-10 h-10 text-[#ffcf00]" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-foreground">
              Industry Expertise
            </h3>
            <p className="text-muted-foreground">
              Specialized in business automation with deep understanding of your
              unique challenges and opportunities.
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
      </div>
    </div>
  );
}
