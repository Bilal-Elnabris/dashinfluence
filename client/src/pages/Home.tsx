import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart3, FileText, Workflow, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="smooth-scroll">
      {/* Hero Section */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-[hsl(217,69%,34%)]">
              Stop Losing Revenue to <br />
              <span className="text-[#ffcf00]">Manual Work</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              AI automation that books appointments while you sleep. Focus on growth while we handle the operations that drive real business results.
            </p>
            
            <Link href="/calculator">
              <Button className="px-8 py-4 bg-[#ffcf00] text-[hsl(217,69%,34%)] rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors card-hover">
                Calculate Your Revenue Losses
              </Button>
            </Link>
          </div>

          {/* Tools Overview Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Revenue Calculator Card */}
            <Card className="p-8 card-hover border border-gray-100">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-yellow-100 rounded-xl flex items-center justify-center mb-6">
                  <BarChart3 className="w-8 h-8 text-[#ffcf00]" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[hsl(217,69%,34%)]">Revenue Calculator</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Discover exactly how much revenue leaks from slow, manual processes in your business operations.
                </p>
                <Link href="/calculator" className="flex items-center text-[#ffcf00] font-semibold hover:text-yellow-500 transition-colors">
                  Try it now 
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </CardContent>
            </Card>

            {/* Automation Quiz Card */}
            <Card className="p-8 card-hover border border-gray-100">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-yellow-100 rounded-xl flex items-center justify-center mb-6">
                  <FileText className="w-8 h-8 text-[#ffcf00]" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[hsl(217,69%,34%)]">Automation Quiz</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Measure your automation readiness and identify priority areas in just 2 minutes.
                </p>
                <Link href="/quiz" className="flex items-center text-[#ffcf00] font-semibold hover:text-yellow-500 transition-colors">
                  Try it now 
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </CardContent>
            </Card>

            {/* Workflow Mapper Card */}
            <Card className="p-8 card-hover border border-gray-100">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-yellow-100 rounded-xl flex items-center justify-center mb-6">
                  <Workflow className="w-8 h-8 text-[#ffcf00]" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[hsl(217,69%,34%)]">Workflow Mapper</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Visualize exactly where automation can transform your business processes for maximum impact.
                </p>
                <Link href="/mapper" className="flex items-center text-[#ffcf00] font-semibold hover:text-yellow-500 transition-colors">
                  Try it now 
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="gradient-bg text-white rounded-xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-xl max-w-2xl mx-auto mb-8 opacity-90">
              Join 70+ real estate professionals who automate their operations with DashInfluence
            </p>
            <Button className="px-8 py-4 bg-[#ffcf00] text-[hsl(217,69%,34%)] rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors card-hover">
              Book Free Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
