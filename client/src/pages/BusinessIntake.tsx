import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
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
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import { SparklesCore } from "@/components/SparklesCore";

export default function BusinessIntake() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  const [formData, setFormData] = useState({
    businessName: "",
    website: "",
    industry: "",
    businessSize: "",
    location: "",
    name: "",
    email: "",
    phone: "",
    activity: "",
    challenges: "",
    tools: "",
    goals: "",
    success: "",
    processes: [] as string[],
    timeline: "",
    budget: "",
    anythingElse: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<string | null>(null);
  const [step, setStep] = useState(0);

  const industries = [
    t("earlyAccess.form.industries", { returnObjects: true }) as string[],
  ].flat();
  const businessSizes = [
    t("earlyAccess.form.businessSizes", { returnObjects: true }) as string[],
  ].flat();
  const processesList = [
    t("intake.processesList", {
      returnObjects: true,
      defaultValue: [
        "Customer Communication",
        "Booking/Appointments",
        "Payments",
        "Lead Management",
        "Review Management",
        "Inventory Management",
        "Staff Scheduling",
        "Reporting/Analytics",
        "Other",
      ],
    }) as string[],
  ].flat();
  const timelines = [
    t("earlyAccess.form.timelines", { returnObjects: true }) as string[],
  ].flat();
  const budgets = [
    t("earlyAccess.form.budgets", { returnObjects: true }) as string[],
  ].flat();

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };
  const handleCheckboxChange = (process: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      processes: checked
        ? [...prev.processes, process]
        : prev.processes.filter((p) => p !== process),
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitMessage(null);
    try {
      const res = await fetch("/api/business-intake", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setSubmitMessage(
          t(
            "Thank you! Your information has been submitted. We'll review it before our call."
          )
        );
        setFormData({
          businessName: "",
          website: "",
          industry: "",
          businessSize: "",
          location: "",
          name: "",
          email: "",
          phone: "",
          activity: "",
          challenges: "",
          tools: "",
          goals: "",
          success: "",
          processes: [],
          timeline: "",
          budget: "",
          anythingElse: "",
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

  useEffect(() => {
    if (submitMessage && submitMessage.startsWith(t("Thank you!"))) {
      const timer = setTimeout(() => {
        window.location.href = "https://calendly.com/dashinfluence/new-meeting";
      }, 2000); // 2 seconds to show the message
      return () => clearTimeout(timer);
    }
  }, [submitMessage, t]);

  return (
    <div
      className={`relative min-h-screen w-full${isArabic ? " font-cairo" : ""}`}
      dir={isArabic ? "rtl" : "ltr"}
      style={{ background: "transparent" }}
    >
      {/* Stars background */}
      <div
        className="fixed inset-0 -z-20 pointer-events-none"
        style={{ background: "#fff" }}
      >
        <SparklesCore
          background="#fff"
          particleDensity={120}
          particleColor="#000"
          className="w-full h-full"
        />
      </div>
      {/* Blue Navbar */}
      <Navbar forceBlue />
      <div
        className="max-w-3xl mx-auto px-4 pt-28 pb-12"
        style={{ position: "relative", zIndex: 1 }}
      >
        <Card className="shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl text-foreground font-bold mb-2">
              {t("intake.heading", "Business Intake Form")}
            </CardTitle>
            <p className="text-muted-foreground">
              {t(
                "intake.intro",
                "Please fill out this form so we can best prepare for your call and understand your business needs."
              )}
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Multi-step form logic */}
              {step === 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Business Info fields */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {t("intake.businessName", "Business Name")}
                    </label>
                    <Input
                      value={formData.businessName}
                      onChange={(e) =>
                        handleInputChange("businessName", e.target.value)
                      }
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {t("intake.website", "Website (optional)")}
                    </label>
                    <Input
                      value={formData.website}
                      onChange={(e) =>
                        handleInputChange("website", e.target.value)
                      }
                      type="url"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {t("intake.industry", "Industry")}
                    </label>
                    <Select
                      value={formData.industry}
                      onValueChange={(v) => handleInputChange("industry", v)}
                    >
                      <SelectTrigger>
                        <SelectValue
                          placeholder={t(
                            "intake.industryPlaceholder",
                            "Select industry"
                          )}
                        />
                      </SelectTrigger>
                      <SelectContent>
                        {industries.map((industry, idx) => (
                          <SelectItem key={industry} value={industry}>
                            {industry}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {t("intake.businessSize", "Business Size")}
                    </label>
                    <Select
                      value={formData.businessSize}
                      onValueChange={(v) =>
                        handleInputChange("businessSize", v)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue
                          placeholder={t(
                            "intake.businessSizePlaceholder",
                            "Select size"
                          )}
                        />
                      </SelectTrigger>
                      <SelectContent>
                        {businessSizes.map((size, idx) => (
                          <SelectItem key={size} value={size}>
                            {size}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {t("intake.location", "Location (City/Country)")}
                    </label>
                    <Input
                      value={formData.location}
                      onChange={(e) =>
                        handleInputChange("location", e.target.value)
                      }
                      required
                    />
                  </div>
                </div>
              )}
              {step === 1 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Contact & Current State fields */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {t("intake.name", "Your Name")}
                    </label>
                    <Input
                      value={formData.name}
                      onChange={(e) =>
                        handleInputChange("name", e.target.value)
                      }
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {t("intake.email", "Email")}
                    </label>
                    <Input
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      type="email"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {t("intake.phone", "Phone")}
                    </label>
                    <Input
                      value={formData.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                      type="tel"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {t(
                        "intake.activity",
                        "Briefly describe your main business activity"
                      )}
                    </label>
                    <Textarea
                      value={formData.activity}
                      onChange={(e) =>
                        handleInputChange("activity", e.target.value)
                      }
                      required
                      rows={2}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {t(
                        "intake.challenges",
                        "What are your biggest challenges right now?"
                      )}
                    </label>
                    <Textarea
                      value={formData.challenges}
                      onChange={(e) =>
                        handleInputChange("challenges", e.target.value)
                      }
                      required
                      rows={2}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {t(
                        "intake.tools",
                        "What systems/tools do you currently use? (CRM, booking, etc.)"
                      )}
                    </label>
                    <Input
                      value={formData.tools}
                      onChange={(e) =>
                        handleInputChange("tools", e.target.value)
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {t(
                        "intake.processes",
                        "Are there specific processes you want to automate?"
                      )}
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
                      {processesList.map((proc) => (
                        <div key={proc} className="flex items-center space-x-2">
                          <Checkbox
                            id={proc}
                            checked={formData.processes.includes(proc)}
                            onCheckedChange={(checked) =>
                              handleCheckboxChange(proc, checked as boolean)
                            }
                          />
                          <label
                            htmlFor={proc}
                            className="text-sm text-muted-foreground"
                          >
                            {proc}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              {step === 2 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Goals & Logistics fields */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {t(
                        "intake.goals",
                        "What are your top 1-2 goals for automation or improvement?"
                      )}
                    </label>
                    <Textarea
                      value={formData.goals}
                      onChange={(e) =>
                        handleInputChange("goals", e.target.value)
                      }
                      required
                      rows={2}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {t(
                        "intake.success",
                        "What would success look like for you in 6 months?"
                      )}
                    </label>
                    <Textarea
                      value={formData.success}
                      onChange={(e) =>
                        handleInputChange("success", e.target.value)
                      }
                      required
                      rows={2}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {t("intake.timeline", "Preferred timeline for starting")}
                    </label>
                    <Select
                      value={formData.timeline}
                      onValueChange={(v) => handleInputChange("timeline", v)}
                    >
                      <SelectTrigger>
                        <SelectValue
                          placeholder={t(
                            "intake.timelinePlaceholder",
                            "Select timeline"
                          )}
                        />
                      </SelectTrigger>
                      <SelectContent>
                        {timelines.map((timeline, idx) => (
                          <SelectItem key={timeline} value={timeline}>
                            {timeline}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {t("intake.budget", "Budget range (optional)")}
                    </label>
                    <Select
                      value={formData.budget}
                      onValueChange={(v) => handleInputChange("budget", v)}
                    >
                      <SelectTrigger>
                        <SelectValue
                          placeholder={t(
                            "intake.budgetPlaceholder",
                            "Select budget"
                          )}
                        />
                      </SelectTrigger>
                      <SelectContent>
                        {budgets.map((budget, idx) => (
                          <SelectItem key={budget} value={budget}>
                            {budget}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {t(
                        "intake.anythingElse",
                        "Anything else you want us to know?"
                      )}
                    </label>
                    <Textarea
                      value={formData.anythingElse}
                      onChange={(e) =>
                        handleInputChange("anythingElse", e.target.value)
                      }
                      rows={2}
                    />
                  </div>
                </div>
              )}
              {/* Step navigation buttons */}
              <div
                className={`flex justify-between mt-8 ${
                  isArabic ? "flex-row-reverse" : ""
                }`}
              >
                {step > 0 && (
                  <Button type="button" onClick={() => setStep(step - 1)}>
                    {t("Back", "Back")}
                  </Button>
                )}
                <div className="flex-1" />
                {step < 2 && (
                  <Button type="button" onClick={() => setStep(step + 1)}>
                    {t("Next", "Next")}
                  </Button>
                )}
                {step === 2 && (
                  <Button type="submit" disabled={submitting}>
                    {submitting
                      ? t("Submitting...", "Submitting...")
                      : t("Submit", "Submit")}
                  </Button>
                )}
              </div>
              {submitMessage && (
                <div className="text-center text-green-600 font-semibold mt-4">
                  {submitMessage}
                </div>
              )}
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
