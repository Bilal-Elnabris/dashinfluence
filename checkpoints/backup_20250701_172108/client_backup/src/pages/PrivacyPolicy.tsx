import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SparklesCore } from "@/components/SparklesCore";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <SparklesCore
          id="tsparticlesprivacy"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={50}
          className="w-full h-full"
          particleColor="#ffcf00"
        />
      </div>
      {/* Hero Section */}
      <div className="gradient-bg text-white section-padding relative z-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl opacity-90">
            Your privacy is important to us. Learn how we collect, use, and
            protect your information.
          </p>
          <p className="text-sm opacity-75 mt-4">
            Last Updated: January 1, 2025
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="section-padding relative z-10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-foreground">
                  Information We Collect
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Personal Information</h3>
                  <p className="text-muted-foreground">
                    We collect information you provide directly to us, such as
                    when you create an account, contact us, or use our services.
                    This may include your name, email address, phone number,
                    company information, and other contact details.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Usage Information</h3>
                  <p className="text-muted-foreground">
                    We collect information about how you use our website and
                    services, including pages visited, features used, and
                    interactions with our automation tools and calculators.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Technical Information</h3>
                  <p className="text-muted-foreground">
                    We automatically collect certain technical information,
                    including your IP address, browser type, device information,
                    and operating system.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-foreground">
                  How We Use Your Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send administrative information and updates</li>
                  <li>
                    Respond to your comments, questions, and customer service
                    requests
                  </li>
                  <li>Develop new products and services</li>
                  <li>Personalize your experience on our platform</li>
                  <li>Analyze usage patterns to improve our services</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-foreground">
                  Information Sharing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  We do not sell, trade, or otherwise transfer your personal
                  information to third parties, except as described in this
                  Privacy Policy:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>
                    With service providers who assist us in operating our
                    website and services
                  </li>
                  <li>
                    When required by law or to protect our rights and safety
                  </li>
                  <li>
                    In connection with a business transaction (merger,
                    acquisition, etc.)
                  </li>
                  <li>With your explicit consent</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-foreground">Data Security</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We implement appropriate technical and organizational security
                  measures to protect your personal information against
                  unauthorized access, alteration, disclosure, or destruction.
                  However, no internet transmission is completely secure, and we
                  cannot guarantee absolute security.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-foreground">Your Rights</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>
                    Access and receive a copy of your personal information
                  </li>
                  <li>Update or correct your personal information</li>
                  <li>Delete your personal information</li>
                  <li>
                    Object to or restrict certain processing of your information
                  </li>
                  <li>Data portability</li>
                  <li>Withdraw consent where processing is based on consent</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-foreground">Contact Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  If you have any questions about this Privacy Policy or our
                  data practices, please contact us at:
                </p>
                <div className="mt-4 space-y-1 text-muted-foreground">
                  <p>Email: privacy@dashinfluence.com</p>
                  <p>Phone: (555) 123-4567</p>
                  <p>Address: DashInfluence, Privacy Officer</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
