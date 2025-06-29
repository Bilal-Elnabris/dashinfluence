import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="gradient-bg text-white section-padding">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Cookie Policy</h1>
          <p className="text-xl opacity-90">
            Learn about how we use cookies and similar technologies on our website.
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
                <CardTitle className="text-[hsl(217,69%,34%)]">What Are Cookies?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Cookies are small text files that are stored on your device when you visit a website. 
                  They help websites remember information about your visit, such as your preferred language 
                  and other settings. This can make your next visit easier and the site more useful to you.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-[hsl(217,69%,34%)]">How We Use Cookies</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  We use cookies and similar technologies for several purposes:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
                  <li><strong>Performance Cookies:</strong> Help us understand how visitors interact with our site</li>
                  <li><strong>Functional Cookies:</strong> Remember your preferences and personalize your experience</li>
                  <li><strong>Analytics Cookies:</strong> Provide insights into website usage and performance</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-[hsl(217,69%,34%)]">Types of Cookies We Use</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold text-[hsl(217,69%,34%)] mb-2">Strictly Necessary Cookies</h3>
                  <p className="text-gray-600">
                    These cookies are essential for the website to function properly. They enable core functionality 
                    such as security, network management, and accessibility. Without these cookies, services you 
                    have asked for cannot be provided.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-[hsl(217,69%,34%)] mb-2">Performance Cookies</h3>
                  <p className="text-gray-600">
                    These cookies collect information about how visitors use our website, such as which pages are 
                    visited most often. This data helps us optimize our website and improve user experience. 
                    All information collected by these cookies is aggregated and anonymous.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-[hsl(217,69%,34%)] mb-2">Functional Cookies</h3>
                  <p className="text-gray-600">
                    These cookies allow our website to remember choices you make and provide enhanced, more 
                    personalized features. They may be set by us or by third-party providers whose services 
                    we have added to our pages.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-[hsl(217,69%,34%)] mb-2">Analytics Cookies</h3>
                  <p className="text-gray-600">
                    We use analytics services to help analyze how users interact with our website. These cookies 
                    collect information such as the number of visitors, bounce rate, traffic source, etc. 
                    This information helps us improve our website and services.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-[hsl(217,69%,34%)]">Third-Party Cookies</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  We may use third-party services that set cookies on our website, including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Google Analytics for website performance analysis</li>
                  <li>Social media platforms for content sharing</li>
                  <li>Customer support and chat services</li>
                  <li>Marketing and advertising platforms</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  These third parties have their own privacy policies and cookie policies, which we encourage you to review.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-[hsl(217,69%,34%)]">Managing Your Cookie Preferences</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  You have several options to manage cookies:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li><strong>Browser Settings:</strong> Most browsers allow you to control cookies through their settings</li>
                  <li><strong>Opt-Out Tools:</strong> Many advertising networks provide opt-out tools</li>
                  <li><strong>Cookie Preferences:</strong> You can adjust your preferences using our cookie banner</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  Please note that disabling certain cookies may affect website functionality and your user experience.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-[hsl(217,69%,34%)]">Updates to This Policy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We may update this Cookie Policy from time to time to reflect changes in our practices or 
                  applicable laws. We will notify you of any material changes by posting the updated policy 
                  on our website with a new "Last Updated" date.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-[hsl(217,69%,34%)]">Contact Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  If you have any questions about our use of cookies, please contact us at:
                </p>
                <div className="mt-4 space-y-1 text-gray-600">
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