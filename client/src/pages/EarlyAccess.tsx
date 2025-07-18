import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { SparklesCore } from "@/components/SparklesCore";
import { useState } from "react";
import { useLocation } from "wouter";
import { useTranslation } from "react-i18next";

export default function EarlyAccess() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  const [location, setLocation] = useLocation();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    industry: "",
    businessSize: "",
    currentChallenges: "",
    automationNeeds: [] as string[],
    timeline: "",
    budget: "",
    additionalInfo: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<string | null>(null);

  // Prepare translated arrays with fallback
  const industriesList = Array.isArray(
    t("earlyAccess.form.industries", { returnObjects: true }) as string[]
  )
    ? (t("earlyAccess.form.industries", { returnObjects: true }) as string[])
    : [
        "Home Services (Plumbing, Electrical, Cleaning, etc.)",
        "Health & Wellness Clinics",
        "Restaurants & Cafes",
        "Real Estate",
        "Automotive Services",
        "Other",
      ];
  const businessSizesList = Array.isArray(
    t("earlyAccess.form.businessSizes", { returnObjects: true }) as string[]
  )
    ? (t("earlyAccess.form.businessSizes", { returnObjects: true }) as string[])
    : [
        "Solo/Single Owner",
        "Small Team (2-10 employees)",
        "Medium Business (11-50 employees)",
        "Large Business (50+ employees)",
      ];
  const automationNeedsList = Array.isArray(
    t("earlyAccess.form.automationNeedsList", {
      returnObjects: true,
    }) as string[]
  )
    ? (t("earlyAccess.form.automationNeedsList", {
        returnObjects: true,
      }) as string[])
    : [
        "Customer Communication & Chat",
        "Appointment/Booking Management",
        "Lead Capture & Follow-up",
        "Review Management",
        "Phone Call Handling",
        "Social Media Management",
        "Analytics & Reporting",
        "Payment Processing",
        "Inventory Management",
        "Staff Scheduling",
      ];
  const timelinesList = Array.isArray(
    t("earlyAccess.form.timelines", { returnObjects: true }) as string[]
  )
    ? (t("earlyAccess.form.timelines", { returnObjects: true }) as string[])
    : [
        "Immediately (within 1 month)",
        "Soon (1-3 months)",
        "Planning phase (3-6 months)",
        "Future consideration (6+ months)",
      ];
  const budgetsList = Array.isArray(
    t("earlyAccess.form.budgets", { returnObjects: true }) as string[]
  )
    ? (t("earlyAccess.form.budgets", { returnObjects: true }) as string[])
    : [
        "Under $200/month",
        "$200-$500/month",
        "$500-$1000/month",
        "$1000+/month",
        "Not sure yet",
      ];

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleCheckboxChange = (need: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      automationNeeds: checked
        ? [...prev.automationNeeds, need]
        : prev.automationNeeds.filter((n) => n !== need),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitMessage(null);
    try {
      const res = await fetch("/api/early-access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setSubmitMessage(
          t("Thank you for your interest! We'll be in touch soon.")
        );
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          company: "",
          industry: "",
          businessSize: "",
          currentChallenges: "",
          automationNeeds: [],
          timeline: "",
          budget: "",
          additionalInfo: "",
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
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <SparklesCore
          id="tsparticlesearlyaccess"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={60}
          className="w-full h-full"
          particleColor="#ffcf00"
        />
      </div>
      {/* Hero Section */}
      <div className="text-white section-padding relative z-10 relative overflow-hidden pt-28">
        <div className="absolute inset-0 z-0">
          <SparklesCore
            id="tsparticlesheroearlyaccess"
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
            {t("earlyAccess.hero.heading")}
          </h1>
          <p className="text-xl mb-8 opacity-90">
            {t("earlyAccess.hero.intro")}
          </p>
        </div>
      </div>
      {/* Form Section */}
      <div className="section-padding relative z-10 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <SparklesCore
            id="tsparticlesformearlyaccess"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={60}
            className="w-full h-full"
            particleColor="#ffcf00"
          />
        </div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <Card className="shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl text-foreground">
                {t("earlyAccess.form.heading")}
              </CardTitle>
              <p className="text-muted-foreground">
                {t("earlyAccess.form.intro")}
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Basic Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {t("earlyAccess.form.firstName")}
                    </label>
                    <Input
                      placeholder={t("earlyAccess.form.firstNamePlaceholder")}
                      value={formData.firstName}
                      onChange={(e) =>
                        handleInputChange("firstName", e.target.value)
                      }
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {t("earlyAccess.form.lastName")}
                    </label>
                    <Input
                      placeholder={t("earlyAccess.form.lastNamePlaceholder")}
                      value={formData.lastName}
                      onChange={(e) =>
                        handleInputChange("lastName", e.target.value)
                      }
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {t("earlyAccess.form.email")}
                    </label>
                    <Input
                      type="email"
                      placeholder={t("earlyAccess.form.emailPlaceholder")}
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {t("earlyAccess.form.phone")}
                    </label>
                    <Input
                      type="tel"
                      placeholder={t("earlyAccess.form.phonePlaceholder")}
                      value={formData.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {t("earlyAccess.form.company")}
                    </label>
                    <Input
                      placeholder={t("earlyAccess.form.companyPlaceholder")}
                      value={formData.company}
                      onChange={(e) =>
                        handleInputChange("company", e.target.value)
                      }
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {t("earlyAccess.form.industry")}
                    </label>
                    <Select
                      value={formData.industry}
                      onValueChange={(value) =>
                        handleInputChange("industry", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue
                          placeholder={t(
                            "earlyAccess.form.industryPlaceholder"
                          )}
                        />
                      </SelectTrigger>
                      <SelectContent>
                        {industriesList.map((industry: string, idx: number) => (
                          <SelectItem key={industry} value={industry}>
                            {industry}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {t("earlyAccess.form.businessSize")}
                    </label>
                    <Select
                      value={formData.businessSize}
                      onValueChange={(value) =>
                        handleInputChange("businessSize", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue
                          placeholder={t(
                            "earlyAccess.form.businessSizePlaceholder"
                          )}
                        />
                      </SelectTrigger>
                      <SelectContent>
                        {businessSizesList.map((size: string, idx: number) => (
                          <SelectItem key={size} value={size}>
                            {size}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {t("earlyAccess.form.timeline")}
                    </label>
                    <Select
                      value={formData.timeline}
                      onValueChange={(value) =>
                        handleInputChange("timeline", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue
                          placeholder={t(
                            "earlyAccess.form.timelinePlaceholder"
                          )}
                        />
                      </SelectTrigger>
                      <SelectContent>
                        {timelinesList.map((timeline: string, idx: number) => (
                          <SelectItem key={timeline} value={timeline}>
                            {timeline}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    {t("earlyAccess.form.budget")}
                  </label>
                  <Select
                    value={formData.budget}
                    onValueChange={(value) =>
                      handleInputChange("budget", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue
                        placeholder={t("earlyAccess.form.budgetPlaceholder")}
                      />
                    </SelectTrigger>
                    <SelectContent>
                      {budgetsList.map((budget: string, idx: number) => (
                        <SelectItem key={budget} value={budget}>
                          {budget}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    {t("earlyAccess.form.currentChallenges")}
                  </label>
                  <Textarea
                    placeholder={t(
                      "earlyAccess.form.currentChallengesPlaceholder"
                    )}
                    rows={3}
                    value={formData.currentChallenges}
                    onChange={(e) =>
                      handleInputChange("currentChallenges", e.target.value)
                    }
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    {t("earlyAccess.form.automationNeeds")}
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
                    {automationNeedsList.map((need: string, idx: number) => (
                      <div key={need} className="flex items-center space-x-2">
                        <Checkbox
                          id={need}
                          checked={formData.automationNeeds.includes(need)}
                          onCheckedChange={(checked) =>
                            handleCheckboxChange(need, checked as boolean)
                          }
                        />
                        <label
                          htmlFor={need}
                          className="text-sm text-muted-foreground"
                        >
                          {need}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    {t("earlyAccess.form.additionalInfo")}
                  </label>
                  <Textarea
                    placeholder={t(
                      "earlyAccess.form.additionalInfoPlaceholder"
                    )}
                    rows={3}
                    value={formData.additionalInfo}
                    onChange={(e) =>
                      handleInputChange("additionalInfo", e.target.value)
                    }
                  />
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    type="submit"
                    className="flex-1 bg-[#ffcf00] text-foreground hover:bg-yellow-300 text-sm sm:text-lg py-3 whitespace-nowrap"
                    disabled={submitting}
                  >
                    <span className="text-sm sm:text-base">
                      {t("earlyAccess.form.submit")}
                    </span>
                  </Button>
                  <Button
                    type="button"
                    className="flex-1 bg-transparent border border-white/20 text-white hover:bg-white/10"
                    onClick={() => setLocation("/packages")}
                  >
                    <span className="text-sm sm:text-base">
                      {t("earlyAccess.form.viewPackages")}
                    </span>
                  </Button>
                </div>
              </form>
              {submitMessage && (
                <div className="mt-4 text-center text-base font-semibold text-green-600 dark:text-green-400">
                  {submitMessage}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
