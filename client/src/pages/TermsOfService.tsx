import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="gradient-bg text-white section-padding">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
          <p className="text-xl opacity-90">
            Please read these terms carefully before using our services.
          </p>
          <p className="text-sm opacity-75 mt-4">Last Updated: January 1, 2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="section-padding">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-[hsl(217,69%,34%)]">Acceptance of Terms</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  By accessing and using DashInfluence's website and services, you accept and agree to be 
                  bound by the terms and provision of this agreement. These Terms of Service govern your 
                  use of our website, services, and products.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-[hsl(217,69%,34%)]">Description of Services</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  DashInfluence provides AI automation solutions and consulting services for real estate 
                  professionals and businesses. Our services include:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>AI automation consulting and implementation</li>
                  <li>Revenue calculators and business assessment tools</li>
                  <li>Workflow mapping and optimization services</li>
                  <li>Custom automation solutions</li>
                  <li>Training and support services</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-[hsl(217,69%,34%)]">User Responsibilities</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">As a user of our services, you agree to:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Provide accurate and complete information when requested</li>
                  <li>Maintain the security of your account and password</li>
                  <li>Use our services in compliance with applicable laws and regulations</li>
                  <li>Not misuse or attempt to harm our systems or services</li>
                  <li>Respect intellectual property rights</li>
                  <li>Not engage in any prohibited activities as outlined in these terms</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-[hsl(217,69%,34%)]">Intellectual Property</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  All content, materials, and intellectual property on our website and services are owned by 
                  DashInfluence or our licensors. This includes but is not limited to text, graphics, logos, 
                  software, and methodologies. You may not reproduce, distribute, or create derivative works 
                  without our express written permission.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-[hsl(217,69%,34%)]">Service Availability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We strive to maintain high availability of our services, but we cannot guarantee uninterrupted 
                  access. We reserve the right to modify, suspend, or discontinue any part of our services at 
                  any time with or without notice. We are not liable for any loss or inconvenience caused by 
                  service interruptions.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-[hsl(217,69%,34%)]">Payment Terms</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  For paid services:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Payment is due according to the agreed-upon schedule</li>
                  <li>All fees are non-refundable unless otherwise specified</li>
                  <li>We reserve the right to change pricing with 30 days notice</li>
                  <li>Late payments may result in service suspension</li>
                  <li>You are responsible for all applicable taxes</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-[hsl(217,69%,34%)]">Limitation of Liability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To the maximum extent permitted by law, DashInfluence shall not be liable for any indirect, 
                  incidental, special, consequential, or punitive damages, including but not limited to loss of 
                  profits, data, or business opportunities. Our total liability shall not exceed the amount paid 
                  by you for our services in the 12 months preceding the claim.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-[hsl(217,69%,34%)]">Termination</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Either party may terminate this agreement at any time with written notice. Upon termination, 
                  your right to use our services will cease immediately. Provisions that by their nature should 
                  survive termination will remain in effect.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-[hsl(217,69%,34%)]">Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  For questions about these Terms of Service, please contact us at:
                </p>
                <div className="mt-4 space-y-1 text-muted-foreground">
                  <p>Email: legal@dashinfluence.com</p>
                  <p>Phone: (555) 123-4567</p>
                  <p>Address: DashInfluence, Legal Department</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}