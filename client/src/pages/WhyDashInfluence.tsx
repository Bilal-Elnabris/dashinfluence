import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, CheckCircle, Target, Users, Clock, Award } from "lucide-react";

export default function WhyDashInfluence() {
  const successStories = [
    {
      name: "Michael Thompson",
      company: "Re/Max Premier",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
      quote: "DashInfluence automated my lead nurturing completely. I went from converting 8% of leads to 24% in just 60 days. The AI handles follow-ups better than I ever could manually.",
      result: "+$180K additional revenue in first quarter",
    },
    {
      name: "Sarah Chen",
      company: "Keller Williams Team Lead",
      image: "https://images.unsplash.com/photo-1494790108755-2616b412f526?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
      quote: "Our team was drowning in administrative work. Now our AI handles appointment scheduling, follow-ups, and client communications. We focus purely on closing deals.",
      result: "Saved 30 hours/week across team",
    },
  ];

  const processSteps = [
    {
      step: 1,
      title: "Discovery",
      description: "Deep dive into your current processes and pain points",
    },
    {
      step: 2,
      title: "Design",
      description: "Custom automation blueprint tailored to your business",
    },
    {
      step: 3,
      title: "Deploy",
      description: "Seamless integration with your existing systems",
    },
    {
      step: 4,
      title: "Optimize",
      description: "Continuous monitoring and improvement for maximum ROI",
    },
  ];

  return (
    <div className="bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="section-padding">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4 text-[hsl(217,69%,34%)]">Why Choose DashInfluence?</h1>
            <div className="w-24 h-1 bg-[#ffcf00] mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We don't just automate processes – we transform businesses with AI that actually works
            </p>
          </div>

          {/* Key Differentiators */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-10 h-10 text-[#ffcf00]" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[hsl(217,69%,34%)]">Industry Expertise</h3>
              <p className="text-gray-600">
                Specialized in real estate automation with deep understanding of your unique challenges and opportunities.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-[#ffcf00]" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[hsl(217,69%,34%)]">Proven Results</h3>
              <p className="text-gray-600">
                70+ successful implementations with average 300% ROI within 90 days of deployment.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-10 h-10 text-[#ffcf00]" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[hsl(217,69%,34%)]">Custom Solutions</h3>
              <p className="text-gray-600">
                Tailored automation that fits your existing processes, not generic one-size-fits-all solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Success Stories */}
        <div className="section-padding bg-[hsl(210,20%,97%)] rounded-xl mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-[hsl(217,69%,34%)]">Success Stories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {successStories.map((story, index) => (
              <Card key={index} className="p-6 shadow-sm">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <img 
                      src={story.image} 
                      alt={`${story.name}, ${story.company}`} 
                      className="w-12 h-12 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <h4 className="font-bold text-[hsl(217,69%,34%)]">{story.name}</h4>
                      <p className="text-sm text-gray-600">{story.company}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{story.quote}"</p>
                  <div className="text-[#ffcf00] font-bold">{story.result}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="section-padding">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-[hsl(217,69%,34%)]" />
              </div>
              <div className="text-3xl font-bold text-[hsl(217,69%,34%)] mb-2">70+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-[#ffcf00]" />
              </div>
              <div className="text-3xl font-bold text-[hsl(217,69%,34%)] mb-2">500+</div>
              <div className="text-gray-600">Hours Saved Weekly</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-[hsl(217,69%,34%)] mb-2">300%</div>
              <div className="text-gray-600">Average ROI</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-[hsl(217,69%,34%)] mb-2">90</div>
              <div className="text-gray-600">Days to ROI</div>
            </div>
          </div>
        </div>

        {/* Process Overview */}
        <div className="section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[hsl(217,69%,34%)]">Our Implementation Process</h2>
            <p className="text-xl text-gray-600">From discovery to optimization, we ensure your success</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            {processSteps.map((step) => (
              <div key={step.step} className="relative text-center">
                <div className="w-16 h-16 bg-[hsl(217,69%,34%)] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h4 className="font-bold mb-2 text-[hsl(217,69%,34%)]">{step.title}</h4>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>

          {/* Final CTA */}
          <div className="gradient-bg text-white rounded-xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-xl max-w-2xl mx-auto mb-8 opacity-90">
              Join successful real estate professionals who've already automated their way to success
            </p>
            <Button className="px-8 py-4 bg-[#ffcf00] text-[hsl(217,69%,34%)] rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors card-hover">
              Schedule Your Free Consultation
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
