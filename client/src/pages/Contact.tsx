import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { SparklesCore } from "@/components/SparklesCore";
import SEOHead from "@/components/SEOHead";
import FAQSection from "@/components/FAQSection";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* SEO Head Component */}
      <SEOHead
        title="Contact Us & FAQ - AI Automation Experts | DashInfluence"
        description="Ready to transform your business with AI automation? Contact our experts for a free consultation. Find answers to frequently asked questions about AI automation, pricing, and implementation."
        keywords="contact us, AI automation FAQ, business automation experts, free consultation, automation support, AI automation questions, automation pricing"
        ogTitle="Contact Us & FAQ - AI Automation Experts | DashInfluence"
        ogDescription="Ready to transform your business with AI automation? Contact our experts for a free consultation. Find answers to frequently asked questions."
        canonical="https://dashinfluence.com/contact"
      />

      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <SparklesCore
          id="tsparticlescontact"
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
            id="tsparticlesherocontact"
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
            Let's Transform Your Business Together
          </h1>
          <p className="text-xl mb-8 opacity-90">
            Ready to automate your way to success? Get in touch with our AI
            automation experts.
          </p>
        </div>
      </div>

      {/* Contact Content */}
      <div className="section-padding relative z-10 relative overflow-hidden">
        {/* Animated Background for Contact Content Section */}
        <div className="absolute inset-0 z-0">
          <SparklesCore
            id="tsparticlescontactcontent"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={60}
            className="w-full h-full"
            particleColor="#ffcf00"
          />
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground">
                    Send Us a Message
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24
                    hours.
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        First Name
                      </label>
                      <Input placeholder="John" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Last Name
                      </label>
                      <Input placeholder="Doe" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input type="email" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Phone
                    </label>
                    <Input type="tel" placeholder="+1 (555) 123-4567" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Company
                    </label>
                    <Input placeholder="Your Company Name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      How can we help you?
                    </label>
                    <Textarea
                      placeholder="Tell us about your business challenges and automation needs..."
                      rows={4}
                    />
                  </div>
                  <Button className="w-full bg-[#ffcf00] text-foreground hover:bg-yellow-300 text-sm sm:text-lg py-3 whitespace-nowrap">
                    <span className="text-sm sm:text-base">Send Message</span>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8 relative overflow-hidden">
              {/* Animated Background for Contact Info */}
              <div className="absolute inset-0 z-0">
                <SparklesCore
                  id="tsparticlescontactinfo"
                  background="transparent"
                  minSize={0.6}
                  maxSize={1.4}
                  particleDensity={50}
                  className="w-full h-full"
                  particleColor="#ffcf00"
                />
              </div>

              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-white mb-6">
                  Get In Touch
                </h2>
                <p className="text-white mb-8">
                  Ready to revolutionize your business with AI automation? Our
                  experts are standing by to help you identify opportunities,
                  design solutions, and implement systems that drive real
                  results.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4 relative z-10">
                <Card className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#ffcf00] rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">
                        Email Us
                      </h3>
                      <p className="text-muted-foreground">
                        hello@dashinfluence.com
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#ffcf00] rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Call Us</h3>
                      <p className="text-muted-foreground">(555) 123-4567</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#ffcf00] rounded-full flex items-center justify-center">
                      <Clock className="w-6 h-6 text-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">
                        Business Hours
                      </h3>
                      <p className="text-muted-foreground">
                        Mon-Fri: 9:00 AM - 6:00 PM MST
                      </p>
                    </div>
                  </div>
                </Card>
              </div>

              {/* CTA Section */}
              <Card className="p-6 bg-gradient-to-r from-[hsl(217,69%,34%)] to-[hsl(225,71%,53%)] text-white border-0 relative z-10">
                <h3 className="text-xl font-bold mb-4">
                  Ready to Get Started?
                </h3>
                <p className="mb-6 opacity-90">
                  Book a free 30-minute consultation to discuss your automation
                  needs and see how we can help.
                </p>
                <Button
                  className="w-full bg-[#ffcf00] text-foreground hover:bg-yellow-300 font-bold py-3 text-sm sm:text-base whitespace-nowrap"
                  onClick={() =>
                    window.open(
                      "https://calendly.com/dashinfluence/new-meeting",
                      "_blank"
                    )
                  }
                >
                  <span className="text-sm sm:text-base">Schedule a Call</span>
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <FAQSection />
    </div>
  );
}
