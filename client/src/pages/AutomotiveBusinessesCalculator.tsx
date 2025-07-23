import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatCurrency } from "@/lib/utils";
import {
  TrendingUp,
  DollarSign,
  Calendar,
  CheckCircle,
  Lightbulb,
  Target,
  Zap,
  Car,
} from "lucide-react";
import { SparklesCore } from "@/components/SparklesCore";
import { useTranslation } from "react-i18next";

interface CalculatorState {
  avgWashes: number;
  avgDetails: number;
  washPrice: number;
  detailPrice: number;
  missedCalls: number;
  businessSize: "essential" | "professional" | "complete";
}

export default function AutomotiveBusinessesCalculator() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  const [values, setValues] = useState<CalculatorState>({
    avgWashes: 15,
    avgDetails: 5,
    washPrice: 75,
    detailPrice: 250,
    missedCalls: 8,
    businessSize: "professional",
  });

  const [results, setResults] = useState({
    currentRevenue: 0,
    potentialRevenue: 0,
    monthlyLeakage: 0,
    annualLeakage: 0,
    implementationCost: 799,
    monthlyCost: 250,
    paybackPeriod: 0,
    roi: 0,
  });

  // Package costs based on business size
  const packageCosts = {
    essential: { setup: 400, monthly: 149 },
    professional: { setup: 900, monthly: 299 },
    complete: { setup: 1800, monthly: 499 },
  };

  useEffect(() => {
    // Simple current monthly revenue (4 weeks)
    const currentWashRevenue = values.avgWashes * values.washPrice * 4;
    const currentDetailRevenue = values.avgDetails * values.detailPrice * 4;
    const currentRevenue = currentWashRevenue + currentDetailRevenue;

    // Simple missed revenue calculation
    // Assume 20% of missed calls convert to bookings
    const missedCallConversion = 0.2;
    const recoveredCalls = values.missedCalls * missedCallConversion;

    // Assume 70% of recovered calls are washes, 30% are details
    const recoveredWashes = recoveredCalls * 0.7;
    const recoveredDetails = recoveredCalls * 0.3;

    const missedRevenue =
      (recoveredWashes * values.washPrice +
        recoveredDetails * values.detailPrice) *
      4;

    // Potential revenue = current + missed revenue
    const potentialRevenue = currentRevenue + missedRevenue;
    const monthlyLeakage = missedRevenue;
    const annualLeakage = monthlyLeakage * 12;

    // Get costs based on selected business size
    const costs = packageCosts[values.businessSize];
    const implementationCost = costs.setup;
    const monthlyCost = costs.monthly;
    const annualCost = monthlyCost * 12;
    const netAnnualBenefit = annualLeakage - annualCost;

    // Only calculate payback and ROI if there's a positive benefit
    const paybackPeriod =
      netAnnualBenefit > 0 ? implementationCost / (netAnnualBenefit / 12) : 0;
    const roi =
      netAnnualBenefit > 0 ? (netAnnualBenefit / implementationCost) * 100 : 0;

    setResults({
      currentRevenue,
      potentialRevenue,
      monthlyLeakage,
      annualLeakage,
      implementationCost,
      monthlyCost,
      paybackPeriod,
      roi,
    });
  }, [values]);

  const handleSliderChange = (key: keyof CalculatorState, value: number) => {
    setValues((prev) => ({ ...prev, [key]: value }));
  };

  const handleSelectChange = (key: keyof CalculatorState, value: string) => {
    setValues((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div
      className={`min-h-screen bg-background relative overflow-hidden pt-20 md:pt-28 pb-8 px-2 md:px-0${
        isArabic ? " font-cairo" : ""
      }`}
      dir={isArabic ? "rtl" : "ltr"}
    >
      {/* Stars Background - now covers the whole page */}
      <div className="absolute inset-0 z-0">
        <SparklesCore
          id="tsparticlescarcalc"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={80}
          className="w-full h-full"
          particleColor="#B0B3B8"
        />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8">
        {/* Hero Section with Icon */}
        <div className="text-center mb-12 relative">
          <div
            className="absolute left-1/2 top-0 -translate-x-1/2 opacity-10 pointer-events-none select-none"
            style={{ fontSize: 220, zIndex: 0 }}
          >
            <Car className="w-[220px] h-[220px] mx-auto text-blue-400" />
          </div>
          <h1 className="text-4xl font-bold mb-4 text-foreground">
            {isArabic ? t("carCalc.heading") : "Revenue Calculator"}
          </h1>
          <div className="w-24 h-1 bg-[#ffcf00] mx-auto mb-6 border-b-2 border-dashed border-[#ffcf00]"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            {isArabic
              ? t("carCalc.intro")
              : "Calculate how much revenue you're losing to manual processes"}
          </p>

          {/* Scientific Facts Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="p-4 bg-blue-50 dark:bg-blue-900/20 border-blue-200">
              <CardContent className="p-0 text-center">
                <Target className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <h3 className="font-bold text-blue-900 dark:text-blue-100 mb-1">
                  {isArabic ? t("carCalc.facts.industry") : "Industry Standard"}
                </h3>
                <p className="text-sm text-blue-700 dark:text-blue-200">
                  {isArabic
                    ? t("carCalc.facts.industryDesc")
                    : "78% of businesses lose revenue due to missed calls"}
                </p>
              </CardContent>
            </Card>

            <Card className="p-4 bg-green-50 dark:bg-green-900/20 border-green-200">
              <CardContent className="p-0 text-center">
                <Zap className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <h3 className="font-bold text-green-900 dark:text-green-100 mb-1">
                  {isArabic ? t("carCalc.facts.ai") : "AI Efficiency"}
                </h3>
                <p className="text-sm text-green-700 dark:text-green-200">
                  {isArabic
                    ? t("carCalc.facts.aiDesc")
                    : "AI automation increases booking rates by 40%"}
                </p>
              </CardContent>
            </Card>

            <Card className="p-4 bg-purple-50 dark:bg-purple-900/20 border-purple-200">
              <CardContent className="p-0 text-center">
                <TrendingUp className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <h3 className="font-bold text-purple-900 dark:text-purple-100 mb-1">
                  {isArabic ? t("carCalc.facts.roi") : "ROI Proven"}
                </h3>
                <p className="text-sm text-purple-700 dark:text-purple-200">
                  {isArabic
                    ? t("carCalc.facts.roiDesc")
                    : "Average 300% ROI within 18 months"}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Input Section */}
          <Card
            className={`p-8 bg-card border-border${
              isArabic ? " text-right" : ""
            }`}
          >
            <CardHeader className="p-0 mb-8">
              <CardTitle className="text-2xl font-bold text-card-foreground flex items-center">
                <Target className="w-6 h-6 mr-2" />
                {isArabic ? t("carCalc.metrics") : "Your Business Metrics"}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="space-y-6">
                {/* Business Size Selection */}
                <div>
                  <label className="block text-sm font-semibold mb-3 text-card-foreground">
                    {isArabic
                      ? t("carCalc.selectPackage")
                      : "Select Your Package:"}
                  </label>
                  <select
                    value={values.businessSize}
                    onChange={(e) =>
                      handleSelectChange("businessSize", e.target.value)
                    }
                    className="w-full p-3 border rounded-lg bg-background text-card-foreground"
                  >
                    <option value="essential">
                      {isArabic
                        ? t("carCalc.packages.essential")
                        : "Essential AI Package ($500 setup + $199/month)"}
                    </option>
                    <option value="professional">
                      {isArabic
                        ? t("carCalc.packages.professional")
                        : "Professional AI Package ($900 setup + $349/month)"}
                    </option>
                    <option value="complete">
                      {isArabic
                        ? t("carCalc.packages.complete")
                        : "Complete AI Suite ($1,800 setup + $599/month)"}
                    </option>
                  </select>
                </div>

                {/* Average Weekly Washes */}
                <div>
                  <label className="block text-sm font-semibold mb-3 text-card-foreground">
                    {isArabic
                      ? t("carCalc.avgWashes")
                      : "Average Weekly Washes:"}
                  </label>
                  <div className="flex items-center space-x-4">
                    <input
                      type="range"
                      min="1"
                      max="50"
                      value={values.avgWashes}
                      onChange={(e) =>
                        handleSliderChange(
                          "avgWashes",
                          parseInt(e.target.value)
                        )
                      }
                      className="flex-1 h-2 bg-gray-800 dark:bg-white rounded-lg appearance-none cursor-pointer custom-slider"
                    />
                    <span className="text-lg font-bold text-[hsl(217,69%,34%)] dark:text-white w-16">
                      {values.avgWashes}
                    </span>
                  </div>
                </div>

                {/* Average Weekly Details */}
                <div>
                  <label className="block text-sm font-semibold mb-3 text-card-foreground">
                    {isArabic
                      ? t("carCalc.avgDetails")
                      : "Average Weekly Details:"}
                  </label>
                  <div className="flex items-center space-x-4">
                    <input
                      type="range"
                      min="1"
                      max="20"
                      value={values.avgDetails}
                      onChange={(e) =>
                        handleSliderChange(
                          "avgDetails",
                          parseInt(e.target.value)
                        )
                      }
                      className="flex-1 h-2 bg-gray-800 dark:bg-white rounded-lg appearance-none cursor-pointer custom-slider"
                    />
                    <span className="text-lg font-bold text-[hsl(217,69%,34%)] dark:text-white w-16">
                      {values.avgDetails}
                    </span>
                  </div>
                </div>

                {/* Wash Price */}
                <div>
                  <label className="block text-sm font-semibold mb-3 text-card-foreground">
                    {isArabic ? t("carCalc.washPrice") : "Wash Price ($):"}
                  </label>
                  <div className="flex items-center space-x-4">
                    <input
                      type="range"
                      min="20"
                      max="150"
                      value={values.washPrice}
                      step="5"
                      onChange={(e) =>
                        handleSliderChange(
                          "washPrice",
                          parseInt(e.target.value)
                        )
                      }
                      className="flex-1 h-2 bg-gray-800 dark:bg-white rounded-lg appearance-none cursor-pointer custom-slider"
                    />
                    <span className="text-lg font-bold text-[hsl(217,69%,34%)] dark:text-white w-20">
                      {formatCurrency(values.washPrice)}
                    </span>
                  </div>
                </div>

                {/* Detail Price */}
                <div>
                  <label className="block text-sm font-semibold mb-3 text-card-foreground">
                    {isArabic ? t("carCalc.detailPrice") : "Detail Price ($):"}
                  </label>
                  <div className="flex items-center space-x-4">
                    <input
                      type="range"
                      min="100"
                      max="500"
                      value={values.detailPrice}
                      step="10"
                      onChange={(e) =>
                        handleSliderChange(
                          "detailPrice",
                          parseInt(e.target.value)
                        )
                      }
                      className="flex-1 h-2 bg-gray-800 dark:bg-white rounded-lg appearance-none cursor-pointer custom-slider"
                    />
                    <span className="text-lg font-bold text-[hsl(217,69%,34%)] dark:text-white w-20">
                      {formatCurrency(values.detailPrice)}
                    </span>
                  </div>
                </div>

                {/* Missed Calls Weekly */}
                <div>
                  <label className="block text-sm font-semibold mb-3 text-card-foreground">
                    {isArabic
                      ? t("carCalc.missedCalls")
                      : "Missed Calls (Weekly):"}
                  </label>
                  <div className="flex items-center space-x-4">
                    <input
                      type="range"
                      min="0"
                      max="25"
                      value={values.missedCalls}
                      onChange={(e) =>
                        handleSliderChange(
                          "missedCalls",
                          parseInt(e.target.value)
                        )
                      }
                      className="flex-1 h-2 bg-gray-800 dark:bg-white rounded-lg appearance-none cursor-pointer custom-slider"
                    />
                    <span className="text-lg font-bold text-[hsl(217,69%,34%)] dark:text-white w-16">
                      {values.missedCalls}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Results Section */}
          <div className="space-y-6">
            {/* Revenue Analysis */}
            <Card className="p-8 border border-gray-200 dark:border-gray-700 shadow-lg">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-2xl font-bold flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  {isArabic ? t("carCalc.revenueAnalysis") : "Revenue Analysis"}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-6">
                  <div className="flex justify-between items-center p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                    <span className="font-semibold text-card-foreground">
                      {isArabic
                        ? t("carCalc.currentRevenue")
                        : "Current Monthly Revenue:"}
                    </span>
                    <span className="text-2xl font-bold text-red-600 dark:text-red-400">
                      {formatCurrency(results.currentRevenue)}
                    </span>
                  </div>

                  <div className="flex justify-between items-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <span className="font-semibold text-card-foreground">
                      {isArabic
                        ? t("carCalc.potentialRevenue")
                        : "Potential Monthly Revenue:"}
                    </span>
                    <span className="text-2xl font-bold text-green-600 dark:text-green-400">
                      {formatCurrency(results.potentialRevenue)}
                    </span>
                  </div>

                  <div className="flex justify-between items-center p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                    <span className="font-semibold text-card-foreground">
                      {isArabic
                        ? t("carCalc.monthlyLeakage")
                        : "Monthly Revenue Lost:"}
                    </span>
                    <span className="text-3xl font-bold text-[#ffcf00]">
                      {formatCurrency(results.monthlyLeakage)}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* ROI Analysis */}
            <Card className="p-8 border border-gray-200 dark:border-gray-700 shadow-lg">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-2xl font-bold flex items-center">
                  <DollarSign className="w-5 h-5 mr-2" />
                  {isArabic
                    ? t("carCalc.investmentAnalysis")
                    : "Investment Analysis"}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-4">
                  {/* Removed repetitive package selection dropdown */}
                  <div className="flex justify-between items-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <span className="font-semibold text-card-foreground">
                      {isArabic ? t("carCalc.setupCost") : "Setup Cost:"}
                    </span>
                    <span className="text-lg font-bold text-blue-600 dark:text-blue-400">
                      {formatCurrency(results.implementationCost)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                    <span className="font-semibold text-card-foreground">
                      {isArabic
                        ? t("carCalc.monthlyRetainer")
                        : "Monthly Retainer:"}
                    </span>
                    <span className="text-lg font-bold text-purple-600 dark:text-purple-400">
                      {formatCurrency(results.monthlyCost)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <span className="font-semibold text-card-foreground">
                      {isArabic
                        ? t("carCalc.annualRevenueGain")
                        : "Annual Revenue Gain:"}
                    </span>
                    <span className="text-lg font-bold text-green-600 dark:text-green-400">
                      {formatCurrency(results.annualLeakage)}
                    </span>
                  </div>
                  {results.roi > 0 ? (
                    <>
                      <div className="flex justify-between items-center p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg">
                        <span className="font-semibold text-card-foreground">
                          {isArabic
                            ? t("carCalc.paybackPeriod")
                            : "Payback Period:"}
                        </span>
                        <span className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
                          {results.paybackPeriod > 24
                            ? isArabic
                              ? t("carCalc.paybackMoreThan24")
                              : "More than 24 months"
                            : `${results.paybackPeriod.toFixed(1)} ${
                                isArabic ? t("carCalc.months") : "months"
                              }`}
                        </span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-teal-50 dark:bg-teal-900/20 rounded-lg">
                        <span className="font-semibold text-card-foreground">
                          {isArabic ? t("carCalc.roi") : "ROI:"}
                        </span>
                        <span className="text-lg font-bold text-teal-600 dark:text-teal-400">
                          {results.roi.toFixed(1)}%
                        </span>
                      </div>
                    </>
                  ) : (
                    <div className="flex justify-between items-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                      <span className="font-semibold text-card-foreground">
                        {isArabic ? t("carCalc.note") : "Note:"}
                      </span>
                      <span className="text-lg font-bold text-yellow-600 dark:text-yellow-400">
                        {isArabic
                          ? t("carCalc.considerBenefits")
                          : "Low missed calls - consider other benefits"}
                      </span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Implementation Info */}
            <Card className="p-8 border border-gray-200 dark:border-gray-700 shadow-lg">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-2xl font-bold flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  {isArabic ? t("carCalc.implementation") : "Implementation"}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <div>
                      <span className="font-semibold">
                        {isArabic ? t("carCalc.setupTime") : "Setup Time:"}
                      </span>
                      <span className="ml-2 text-muted-foreground">
                        {isArabic ? t("carCalc.setupTimeDesc") : "2-3 weeks"}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <div>
                      <span className="font-semibold">
                        {isArabic ? t("carCalc.training") : "Training:"}
                      </span>
                      <span className="ml-2 text-muted-foreground">
                        {isArabic ? t("carCalc.trainingDesc") : "1 week"}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <div>
                      <span className="font-semibold">
                        {isArabic
                          ? t("carCalc.fullAutomation")
                          : "Full Automation:"}
                      </span>
                      <span className="ml-2 text-muted-foreground">
                        {isArabic ? t("carCalc.fullAutomationDesc") : "1 month"}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      {/* CTA with cloned background and button style from home page */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 mt-8">
        <div className="relative w-full">
          <Card className="p-8 text-center w-full relative z-10 bg-gradient-to-r from-[hsl(217,69%,34%)] to-blue-800 text-white rounded-2xl shadow-lg overflow-hidden">
            {/* Animated Stars Background */}
            <div className="absolute inset-0 z-0 pointer-events-none">
              <SparklesCore
                id="tsparticles-calc-cta"
                background="transparent"
                minSize={0.6}
                maxSize={1.4}
                particleDensity={50}
                className="w-full h-full"
                particleColor="#FFFFFF"
              />
            </div>
            <CardContent className="p-0 relative z-10">
              <h4 className="text-2xl font-bold mb-4">
                {isArabic
                  ? t("carCalc.cta.heading")
                  : "Ready to Stop Losing Revenue?"}
              </h4>
              <p className="mb-6 opacity-90">
                {isArabic
                  ? t("carCalc.cta.intro")
                  : "Get a personalized plan to capture your missed opportunities"}
              </p>
              <Button
                className="bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-black font-bold px-4 py-2.5 rounded-lg shadow-md hover:shadow-lg transition-colors text-sm"
                onClick={() =>
                  window.open(
                    "https://calendly.com/dashinfluence/new-meeting",
                    "_blank"
                  )
                }
              >
                {isArabic
                  ? t("carCalc.cta.button")
                  : "Schedule Free Consultation"}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
      {/* Methodology Note */}
      <div className="max-w-3xl mx-auto mt-8">
        <Card
          className={`p-8 border border-gray-200 dark:border-gray-700 shadow-lg bg-white dark:bg-zinc-900 ${
            isArabic ? "text-right" : "text-left"
          }`}
          dir={isArabic ? "rtl" : "ltr"}
        >
          <CardContent className="p-0">
            <div className="grid gap-2">
              <h3 className="text-xl font-bold mb-2 text-blue-700 dark:text-blue-300">
                {isArabic
                  ? "كيف تم بناء هذه الحاسبة؟"
                  : "How Was This Calculator Built?"}
              </h3>
              <p className="text-base text-muted-foreground">
                {isArabic
                  ? "تم تطوير هذه الحاسبة خصيصًا لمجال تلميع السيارات، بناءً على بيانات السوق، معدلات فقدان العملاء، وتجاربنا في أتمتة الأعمال. الأرقام المقدمة تستند إلى متوسطات الصناعة وتقديرات دقيقة لمساعدة أصحاب الأعمال على فهم تأثير الأتمتة وتقليل الفاقد في الإيرادات."
                  : "This calculator was developed specifically for the car detailing industry, using market data, missed call rates, and our experience automating businesses. The numbers are based on industry averages and careful estimates to help business owners understand the impact of automation and reduce revenue leakage."}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
