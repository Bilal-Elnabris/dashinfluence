import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  BarChart3,
  FileText,
  Bot,
  MessageCircle,
  Phone,
  Zap,
  ArrowRight,
} from "lucide-react";

export default function LegacyHome() {
  return (
    <div className="smooth-scroll">
      {/* Hero Section */}
      <section className="section-padding bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-foreground">
              <span className="text-[hsl(217,69%,34%)] dark:text-[#ffcf00] static-underline">
                Automated Booking
              </span>
              <br />
              <span className="text-foreground">For Car Detailers</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              AI automation that books wash and detail appointments while you
              sleep. Never miss another customer call or lose revenue to manual
              scheduling again.
            </p>

            <Link href="/calculator">
              <Button className="px-8 py-4 bg-[#ffcf00] text-foreground rounded-lg font-bold text-lg hover:bg-yellow-300 btn-hover">
                Calculate Your Revenue Losses
              </Button>
            </Link>
          </div>

          {/* Tools Overview Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Revenue Calculator Card */}
            <Card className="p-8 card-hover border border-border bg-card">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-muted rounded-xl flex items-center justify-center mb-6">
                  <BarChart3 className="w-8 h-8 text-[#ffcf00]" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-card-foreground">
                  Revenue Calculator
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Discover exactly how much revenue leaks from slow, manual
                  processes in your business operations.
                </p>
                <Link
                  href="/calculator"
                  className="flex items-center text-[#ffcf00] font-semibold hover:text-yellow-300 transition-colors"
                >
                  Try it now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </CardContent>
            </Card>

            {/* Automation Quiz Card */}
            <Card className="p-8 card-hover border border-border bg-card">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-muted rounded-xl flex items-center justify-center mb-6">
                  <FileText className="w-8 h-8 text-[#ffcf00]" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-card-foreground">
                  Automation Quiz
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Measure your automation readiness and identify priority areas
                  in just 2 minutes.
                </p>
                <Link
                  href="/quiz"
                  className="flex items-center text-[#ffcf00] font-semibold hover:text-yellow-300 transition-colors"
                >
                  Try it now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </CardContent>
            </Card>

            {/* AI Services Card */}
            <Card className="p-8 card-hover border border-border bg-card">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-muted rounded-xl flex items-center justify-center mb-6">
                  <Bot className="w-8 h-8 text-[#ffcf00]" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-card-foreground">
                  AI Services
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Complete AI automation suite including voice agents, chat
                  bots, and workflow analysis.
                </p>
                <Link
                  href="/packages"
                  className="flex items-center text-[#ffcf00] font-semibold hover:text-yellow-300 transition-colors"
                >
                  View Services
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* AI Services Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-foreground">
                Our AI Automation Services
              </h2>
              <div className="w-24 h-1 bg-[#ffcf00] mx-auto mb-6 border-b-2 border-dashed border-[#ffcf00]"></div>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Complete suite of AI-powered solutions to transform your car
                detailing business operations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Voice AI Agents */}
              <Card className="p-6 bg-card border-border">
                <CardContent className="p-0 text-center">
                  <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-6 h-6 text-[#ffcf00]" />
                  </div>
                  <h4 className="font-bold text-card-foreground mb-2">
                    Voice AI Agents
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    24/7 phone answering and appointment booking
                  </p>
                </CardContent>
              </Card>

              {/* Chat AI Agents */}
              <Card className="p-6 bg-card border-border">
                <CardContent className="p-0 text-center">
                  <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="w-6 h-6 text-[#ffcf00]" />
                  </div>
                  <h4 className="font-bold text-card-foreground mb-2">
                    Chat AI Agents
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Website chatbots and SMS automation
                  </p>
                </CardContent>
              </Card>

              {/* Workflow Automation */}
              <Card className="p-6 bg-card border-border">
                <CardContent className="p-0 text-center">
                  <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-6 h-6 text-[#ffcf00]" />
                  </div>
                  <h4 className="font-bold text-card-foreground mb-2">
                    Automation Systems
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Customer follow-ups and review generation
                  </p>
                </CardContent>
              </Card>

              {/* Analysis & Feedback */}
              <Card className="p-6 bg-card border-border">
                <CardContent className="p-0 text-center">
                  <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="w-6 h-6 text-[#ffcf00]" />
                  </div>
                  <h4 className="font-bold text-card-foreground mb-2">
                    Analytics & Insights
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Performance tracking and optimization
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA Section */}
          <div className="gradient-bg text-white rounded-xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl max-w-2xl mx-auto mb-8 opacity-90">
              Join 70+ real estate professionals who automate their operations
              with DashInfluence
            </p>
            <Button
              className="px-8 py-4 bg-[#ffcf00] text-foreground rounded-lg font-bold text-lg hover:bg-yellow-300 btn-hover"
              onClick={() =>
                window.open(
                  "https://calendly.com/dashinfluence/consultation",
                  "_blank"
                )
              }
            >
              Book Free Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
