import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="gradient-bg text-white section-padding">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Transform Your Business Together
          </h1>
          <p className="text-xl mb-8 opacity-90">
            Ready to automate your way to success? Get in touch with our AI automation experts.
          </p>
        </div>
      </div>

      {/* Contact Content */}
      <div className="section-padding">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-[hsl(217,69%,34%)]">Send Us a Message</CardTitle>
                  <p className="text-muted-foreground">Fill out the form below and we'll get back to you within 24 hours.</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">First Name</label>
                      <Input placeholder="John" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Last Name</label>
                      <Input placeholder="Doe" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input type="email" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone</label>
                    <Input type="tel" placeholder="+1 (555) 123-4567" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Company</label>
                    <Input placeholder="Your Company Name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">How can we help you?</label>
                    <Textarea 
                      placeholder="Tell us about your business challenges and automation needs..."
                      rows={4}
                    />
                  </div>
                  <Button className="w-full bg-[#ffcf00] text-[hsl(217,69%,34%)] hover:bg-yellow-400 text-lg py-3">
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-[hsl(217,69%,34%)] mb-6">Get In Touch</h2>
                <p className="text-muted-foreground mb-8">
                  Ready to revolutionize your business with AI automation? Our experts are standing by to help you 
                  identify opportunities, design solutions, and implement systems that drive real results.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                <Card className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#ffcf00] rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-[hsl(217,69%,34%)]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[hsl(217,69%,34%)]">Email Us</h3>
                      <p className="text-muted-foreground">hello@dashinfluence.com</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#ffcf00] rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-[hsl(217,69%,34%)]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[hsl(217,69%,34%)]">Call Us</h3>
                      <p className="text-muted-foreground">(555) 123-4567</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#ffcf00] rounded-full flex items-center justify-center">
                      <Clock className="w-6 h-6 text-[hsl(217,69%,34%)]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[hsl(217,69%,34%)]">Business Hours</h3>
                      <p className="text-muted-foreground">Mon-Fri: 9:00 AM - 6:00 PM EST</p>
                    </div>
                  </div>
                </Card>
              </div>

              {/* CTA Section */}
              <Card className="p-6 bg-gradient-to-r from-[hsl(217,69%,34%)] to-[hsl(225,71%,53%)] text-white">
                <h3 className="text-xl font-bold mb-4">Ready to Get Started?</h3>
                <p className="mb-6 opacity-90">
                  Book a free 30-minute consultation to discuss your automation needs and see how we can help.
                </p>
                <Button 
                  className="bg-[#ffcf00] text-[hsl(217,69%,34%)] hover:bg-yellow-400 font-bold"
                  onClick={() => window.open('https://calendly.com/dashinfluence/consultation', '_blank')}
                >
                  Schedule Free Consultation
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}