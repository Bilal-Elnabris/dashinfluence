import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { SparklesCore } from "@/components/SparklesCore";
import { useIsMobile } from "@/hooks/useIsMobile";
import SEOHead from "@/components/SEOHead";
import FAQSection from "@/components/FAQSection";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { API_ENDPOINTS } from "@/config/api";

export default function Contact() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<string | null>(null);
  const isMobile = useIsMobile();

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitMessage(null);
    try {
      const res = await fetch(API_ENDPOINTS.contact, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "contact",
          ...formData,
        }),
      });
      if (res.ok) {
        setSubmitMessage(
          t("Thank you for contacting us! We'll be in touch soon.")
        );
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          company: "",
          message: "",
        });
      } else {
        setSubmitMessage(t("Something went wrong. Please try again later."));
      }
    } catch (err) {
      setSubmitMessage(t("Something went wrong. Please try again later."));
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden${
        isArabic ? " font-cairo" : ""
      }`}
      dir={isArabic ? "rtl" : "ltr"}
    >
      {/* SEO Head Component */}
      <SEOHead
        title={isArabic ? t("contact.seo.title") : t("contact.seo.title")}
        description={
          isArabic ? t("contact.seo.description") : t("contact.seo.description")
        }
        keywords={
          isArabic ? t("contact.seo.keywords") : t("contact.seo.keywords")
        }
        ogTitle={isArabic ? t("contact.seo.ogTitle") : t("contact.seo.ogTitle")}
        ogDescription={
          isArabic
            ? t("contact.seo.ogDescription")
            : t("contact.seo.ogDescription")
        }
        canonical="https://dashinfluence.com/contact"
      />
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <SparklesCore
          id="tsparticlescontact"
          background="transparent"
          minSize={isMobile ? 0.3 : 0.6}
          maxSize={isMobile ? 0.7 : 1.4}
          particleDensity={isMobile ? 10 : 18}
          className="w-full h-full"
          particleColor="#fff"
        />
      </div>
      {/* Hero Section */}
      <section className="text-white min-h-screen overflow-hidden pt-28 pb-2 relative z-10">
        <div className="absolute inset-0 z-0">
          <SparklesCore
            id="tsparticlesherocontact"
            background="transparent"
            minSize={isMobile ? 0.3 : 0.6}
            maxSize={isMobile ? 0.7 : 1.4}
            particleDensity={isMobile ? 10 : 18}
            className="w-full h-full"
            particleColor="#fff"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-2">
                {t("contact.hero.heading")}
              </h1>
              <p className="text-xl mb-2 opacity-90">
                {t("contact.hero.intro")}
              </p>
            </div>
            {/* Contact Content - form and info right below heading */}
            <div
              className={`section-padding grid grid-cols-1 lg:grid-cols-2 gap-12${
                isArabic ? " text-right" : ""
              }`}
            >
              {/* Contact Form */}
              <div>
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl text-foreground">
                      {t("contact.form.heading")}
                    </CardTitle>
                    <p className="text-muted-foreground">
                      {t("contact.form.intro")}
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            {t("contact.form.firstName")}
                          </label>
                          <Input
                            placeholder={t("contact.form.firstNamePlaceholder")}
                            value={formData.firstName}
                            onChange={(e) =>
                              handleInputChange("firstName", e.target.value)
                            }
                            autoComplete="given-name"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            {t("contact.form.lastName")}
                          </label>
                          <Input
                            placeholder={t("contact.form.lastNamePlaceholder")}
                            value={formData.lastName}
                            onChange={(e) =>
                              handleInputChange("lastName", e.target.value)
                            }
                            autoComplete="family-name"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          {t("contact.form.email")}
                        </label>
                        <Input
                          type="email"
                          placeholder={t("contact.form.emailPlaceholder")}
                          value={formData.email}
                          onChange={(e) =>
                            handleInputChange("email", e.target.value)
                          }
                          autoComplete="email"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          {t("contact.form.phone")}
                        </label>
                        <Input
                          type="tel"
                          placeholder={t("contact.form.phonePlaceholder")}
                          value={formData.phone}
                          onChange={(e) =>
                            handleInputChange("phone", e.target.value)
                          }
                          autoComplete="tel"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          {t("contact.form.company")}
                        </label>
                        <Input
                          placeholder={t("contact.form.companyPlaceholder")}
                          value={formData.company}
                          onChange={(e) =>
                            handleInputChange("company", e.target.value)
                          }
                          autoComplete="organization"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          {t("contact.form.message")}
                        </label>
                        <Textarea
                          placeholder={t("contact.form.messagePlaceholder")}
                          rows={4}
                          value={formData.message}
                          onChange={(e) =>
                            handleInputChange("message", e.target.value)
                          }
                          autoComplete="off"
                          required
                        />
                      </div>
                      <Button
                        type="submit"
                        className="w-full bg-[#ffcf00] text-foreground hover:bg-yellow-300 text-sm sm:text-lg py-3 whitespace-nowrap"
                        disabled={submitting}
                      >
                        <span className="text-sm sm:text-base">
                          {t("contact.form.button")}
                        </span>
                      </Button>
                      {submitMessage && (
                        <div className="mt-4 text-center text-base font-semibold text-green-600 dark:text-green-400">
                          {submitMessage}
                        </div>
                      )}
                    </form>
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
                    minSize={isMobile ? 0.3 : 0.6}
                    maxSize={isMobile ? 0.7 : 1.4}
                    particleDensity={isMobile ? 40 : 50}
                    className="w-full h-full"
                    particleColor="#fff"
                  />
                </div>
                <div className="relative z-10">
                  <h2 className="text-3xl font-bold text-white mb-6">
                    {t("contact.info.heading")}
                  </h2>
                  <p className="text-white mb-8">{t("contact.info.intro")}</p>
                </div>
                {/* Contact Cards */}
                <div className="space-y-4 relative z-10">
                  <Card className="p-6">
                    <div
                      className={`flex items-center ${
                        isArabic
                          ? "flex-row-reverse space-x-reverse"
                          : "space-x-4"
                      }`}
                    >
                      <div className="w-12 h-12 bg-[#ffcf00] rounded-full flex items-center justify-center">
                        <Mail className="w-6 h-6 text-foreground" />
                      </div>
                      <div
                        className={isArabic ? "text-right w-full" : "w-full"}
                      >
                        <h3 className="font-semibold text-foreground">
                          {t("contact.info.emailHeading")}
                        </h3>
                        <p className="text-muted-foreground">
                          hello@dashinfluence.com
                        </p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6">
                    <div
                      className={`flex items-center ${
                        isArabic
                          ? "flex-row-reverse space-x-reverse"
                          : "space-x-4"
                      }`}
                    >
                      <div className="w-12 h-12 bg-[#ffcf00] rounded-full flex items-center justify-center">
                        <Phone className="w-6 h-6 text-foreground" />
                      </div>
                      <div
                        className={isArabic ? "text-right w-full" : "w-full"}
                      >
                        <h3 className="font-semibold text-foreground">
                          {t("contact.info.phoneHeading")}
                        </h3>
                        <p className="text-muted-foreground">(825) 250-0262</p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6">
                    <div
                      className={`flex items-center ${
                        isArabic
                          ? "flex-row-reverse space-x-reverse"
                          : "space-x-4"
                      }`}
                    >
                      <div className="w-12 h-12 bg-[#ffcf00] rounded-full flex items-center justify-center">
                        <Clock className="w-6 h-6 text-foreground" />
                      </div>
                      <div
                        className={isArabic ? "text-right w-full" : "w-full"}
                      >
                        <h3 className="font-semibold text-foreground">
                          {t("contact.info.hoursHeading")}
                        </h3>
                        <p className="text-muted-foreground">
                          {t("contact.info.hours")}
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
                {/* CTA Section */}
                <Card className="p-6 bg-gradient-to-r from-[hsl(217,69%,34%)] to-[hsl(225,71%,53%)] text-white border-0 relative z-10">
                  <h3 className="text-xl font-bold mb-4">
                    {t("contact.cta.heading")}
                  </h3>
                  <p className="mb-6 opacity-90">{t("contact.cta.intro")}</p>
                  <Button
                    className="w-full bg-[#ffcf00] text-foreground hover:bg-yellow-300 font-bold py-3 text-sm sm:text-base whitespace-nowrap"
                    onClick={() =>
                      window.open(
                        "https://calendly.com/dashinfluence/new-meeting",
                        "_blank"
                      )
                    }
                  >
                    <span className="text-sm sm:text-base">
                      {t("contact.cta.button")}
                    </span>
                  </Button>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <FAQSection />
    </div>
  );
}
