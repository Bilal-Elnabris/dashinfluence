import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCurrency } from "@/lib/utils";
import {
  TrendingUp,
  DollarSign,
  Calendar,
  CheckCircle,
  Lightbulb,
  Target,
  Zap,
  Coffee,
} from "lucide-react";
import { SparklesCore } from "@/components/SparklesCore";
import { useTranslation } from "react-i18next";

interface CalculatorState {
  avgOrders: number;
  avgOrderValue: number;
  missedCalls: number;
  noShowRate: number;
  businessSize: "small" | "medium" | "large";
}

export default function RestaurantsCafesCalculator() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  const [values, setValues] = useState<CalculatorState>({
    avgOrders: 60,
    avgOrderValue: 25,
    missedCalls: 4,
    noShowRate: 8,
    businessSize: "medium",
  });

  const [results, setResults] = useState({
    currentRevenue: 0,
    potentialRevenue: 0,
    monthlyLeakage: 0,
    annualLeakage: 0,
    implementationCost: 1000,
    monthlyCost: 250,
    paybackPeriod: 0,
    roi: 0,
  });

  // Package costs based on business size
  const packageCosts = {
    small: { setup: 400, monthly: 79 },
    medium: { setup: 1000, monthly: 249 },
    large: { setup: 2200, monthly: 599 },
  };

  useEffect(() => {
    // Current monthly revenue (orders * order value * 30 days)
    const currentRevenue = values.avgOrders * values.avgOrderValue * 30;

    // Missed calls: assume 15% of missed calls could convert to orders
    const missedCallConversion = 0.15;
    const recoveredOrders = values.missedCalls * missedCallConversion * 30;
    const missedRevenue = recoveredOrders * values.avgOrderValue;

    // No-shows: assume no-shows are 100% lost revenue
    const noShowLoss = (values.noShowRate / 100) * currentRevenue;

    // Potential revenue = current + missed revenue + no-show recovery
    const potentialRevenue = currentRevenue + missedRevenue + noShowLoss;
    const monthlyLeakage = missedRevenue + noShowLoss / 12;
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
          id="tsparticlesrestaurantscafescalc"
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
            <Coffee className="w-[220px] h-[220px] mx-auto text-blue-400" />
          </div>
          <h1 className="text-4xl font-bold mb-4 text-foreground relative z-10">
            {isArabic
              ? t("restaurantsCalc.heading")
              : "Restaurants & Cafes Leakage Calculator"}
          </h1>
          <div className="w-24 h-1 bg-[#ffcf00] mx-auto mb-6 border-b-2 border-dashed border-[#ffcf00] relative z-10"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 relative z-10">
            {isArabic
              ? t("restaurantsCalc.intro")
              : "Calculate how much revenue you're losing to missed calls, no-shows, and manual processes"}
          </p>
          {/* Scientific Facts Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 relative z-10">
            <Card className="p-4 bg-blue-50 dark:bg-blue-900/20 border-blue-200">
              <CardContent className="p-0 text-center">
                <Target className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <h3 className="font-bold text-blue-900 dark:text-blue-100 mb-1">
                  {isArabic
                    ? t("restaurantsCalc.facts.industry")
                    : "Missed Opportunities"}
                </h3>
                <p className="text-sm text-blue-700 dark:text-blue-200">
                  {isArabic
                    ? t("restaurantsCalc.facts.industryDesc")
                    : "20% of restaurant calls go unanswered (Toast POS)"}
                </p>
              </CardContent>
            </Card>
            <Card className="p-4 bg-green-50 dark:bg-green-900/20 border-green-200">
              <CardContent className="p-0 text-center">
                <Zap className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <h3 className="font-bold text-green-900 dark:text-green-100 mb-1">
                  {isArabic ? t("restaurantsCalc.facts.ai") : "AI Efficiency"}
                </h3>
                <p className="text-sm text-green-700 dark:text-green-200">
                  {isArabic
                    ? t("restaurantsCalc.facts.aiDesc")
                    : "Automated booking reduces no-shows by 30%"}
                </p>
              </CardContent>
            </Card>
            <Card className="p-4 bg-purple-50 dark:bg-purple-900/20 border-purple-200">
              <CardContent className="p-0 text-center">
                <TrendingUp className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <h3 className="font-bold text-purple-900 dark:text-purple-100 mb-1">
                  {isArabic ? t("restaurantsCalc.facts.roi") : "ROI Proven"}
                </h3>
                <p className="text-sm text-purple-700 dark:text-purple-200">
                  {isArabic
                    ? t("restaurantsCalc.facts.roiDesc")
                    : "Restaurants using automation see 100%+ ROI in 12 months"}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
        {/* Input and Results Sections (identical to car detailer, but with restaurant fields) */}
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
                {isArabic
                  ? t("restaurantsCalc.metrics")
                  : "Your Business Metrics"}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="space-y-6">
                {/* Business Size Selection */}
                <div>
                  <label className="block text-sm font-semibold mb-3 text-card-foreground">
                    {isArabic
                      ? t("restaurantsCalc.selectPackage")
                      : "Select Your Package:"}
                  </label>
                  <select
                    value={values.businessSize}
                    onChange={(e) =>
                      handleSelectChange("businessSize", e.target.value)
                    }
                    className="w-full p-3 border rounded-lg bg-background text-card-foreground"
                  >
                    <option value="small">
                      {isArabic
                        ? t("restaurantsCalc.packages.small")
                        : "Small ($500 setup + $149/month)"}
                    </option>
                    <option value="medium">
                      {isArabic
                        ? t("restaurantsCalc.packages.medium")
                        : "Medium ($1,000 setup + $299/month)"}
                    </option>
                    <option value="large">
                      {isArabic
                        ? t("restaurantsCalc.packages.large")
                        : "Large ($2,200 setup + $599/month)"}
                    </option>
                  </select>
                </div>
                {/* Average Covers per Day */}
                <div>
                  <label className="block text-sm font-semibold mb-3 text-card-foreground">
                    {isArabic
                      ? t("restaurantsCalc.avgOrders")
                      : "Average Orders per Day:"}
                  </label>
                  <div className="flex items-center space-x-4">
                    <input
                      type="range"
                      min="10"
                      max="300"
                      value={values.avgOrders}
                      onChange={(e) =>
                        handleSliderChange(
                          "avgOrders",
                          parseInt(e.target.value)
                        )
                      }
                      className="flex-1 h-2 bg-gray-800 dark:bg-white rounded-lg appearance-none cursor-pointer custom-slider"
                    />
                    <span className="text-lg font-bold text-[hsl(217,69%,34%)] dark:text-white w-16">
                      {values.avgOrders}
                    </span>
                  </div>
                </div>
                {/* Average Ticket Size */}
                <div>
                  <label className="block text-sm font-semibold mb-3 text-card-foreground">
                    {isArabic
                      ? t("restaurantsCalc.avgOrderValue")
                      : "Average Order Value ($):"}
                  </label>
                  <div className="flex items-center space-x-4">
                    <input
                      type="range"
                      min="5"
                      max="100"
                      step="1"
                      value={values.avgOrderValue}
                      onChange={(e) =>
                        handleSliderChange(
                          "avgOrderValue",
                          parseInt(e.target.value)
                        )
                      }
                      className="flex-1 h-2 bg-gray-800 dark:bg-white rounded-lg appearance-none cursor-pointer custom-slider"
                    />
                    <span className="text-lg font-bold text-[hsl(217,69%,34%)] dark:text-white w-20">
                      {formatCurrency(values.avgOrderValue)}
                    </span>
                  </div>
                </div>
                {/* Missed Calls per Day */}
                <div>
                  <label className="block text-sm font-semibold mb-3 text-card-foreground">
                    {isArabic
                      ? t("restaurantsCalc.missedCalls")
                      : "Missed Calls per Day:"}
                  </label>
                  <div className="flex items-center space-x-4">
                    <input
                      type="range"
                      min="0"
                      max="20"
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
                {/* No-show Rate (%) */}
                <div>
                  <label className="block text-sm font-semibold mb-3 text-card-foreground">
                    {isArabic
                      ? t("restaurantsCalc.noShowRate")
                      : "No-show Rate (%):"}
                  </label>
                  <div className="flex items-center space-x-4">
                    <input
                      type="range"
                      min="0"
                      max="50"
                      value={values.noShowRate}
                      onChange={(e) =>
                        handleSliderChange(
                          "noShowRate",
                          parseInt(e.target.value)
                        )
                      }
                      className="flex-1 h-2 bg-gray-800 dark:bg-white rounded-lg appearance-none cursor-pointer custom-slider"
                    />
                    <span className="text-lg font-bold text-[hsl(217,69%,34%)] dark:text-white w-16">
                      {values.noShowRate}%
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          {/* Results Section */}
          <div className="space-y-6">
            <Card className="p-8 border border-gray-200 dark:border-gray-700 shadow-lg">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-2xl font-bold flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  {isArabic
                    ? t("restaurantsCalc.revenueAnalysis")
                    : "Revenue Analysis"}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-6">
                  <div className="flex justify-between items-center p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                    <span className="font-semibold text-card-foreground">
                      {isArabic
                        ? t("restaurantsCalc.currentRevenue")
                        : "Current Monthly Revenue:"}
                    </span>
                    <span className="text-2xl font-bold text-red-600 dark:text-red-400">
                      {formatCurrency(results.currentRevenue)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <span className="font-semibold text-card-foreground">
                      {isArabic
                        ? t("restaurantsCalc.potentialRevenue")
                        : "Potential Monthly Revenue:"}
                    </span>
                    <span className="text-2xl font-bold text-green-600 dark:text-green-400">
                      {formatCurrency(results.potentialRevenue)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                    <span className="font-semibold text-card-foreground">
                      {isArabic
                        ? t("restaurantsCalc.monthlyLeakage")
                        : "Monthly Revenue Lost:"}
                    </span>
                    <span className="text-3xl font-bold text-[#ffcf00]">
                      {formatCurrency(results.monthlyLeakage)}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="p-8 border border-gray-200 dark:border-gray-700 shadow-lg">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-2xl font-bold flex items-center">
                  <DollarSign className="w-5 h-5 mr-2" />
                  {isArabic
                    ? t("restaurantsCalc.investmentAnalysis")
                    : "Investment Analysis"}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <span className="font-semibold text-card-foreground">
                      {isArabic
                        ? t("restaurantsCalc.setupCost")
                        : "Setup Cost:"}
                    </span>
                    <span className="text-lg font-bold text-blue-600 dark:text-blue-400">
                      {formatCurrency(results.implementationCost)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                    <span className="font-semibold text-card-foreground">
                      {isArabic
                        ? t("restaurantsCalc.monthlyRetainer")
                        : "Monthly Retainer:"}
                    </span>
                    <span className="text-lg font-bold text-purple-600 dark:text-purple-400">
                      {formatCurrency(results.monthlyCost)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <span className="font-semibold text-card-foreground">
                      {isArabic
                        ? t("restaurantsCalc.annualRevenueGain")
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
                            ? t("restaurantsCalc.paybackPeriod")
                            : "Payback Period:"}
                        </span>
                        <span className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
                          {results.paybackPeriod > 24
                            ? isArabic
                              ? t("restaurantsCalc.moreThan24Months")
                              : "More than 24 months"
                            : isArabic
                            ? t("restaurantsCalc.months", {
                                count: Number(results.paybackPeriod.toFixed(1)),
                              })
                            : `${results.paybackPeriod.toFixed(1)} months`}
                        </span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-teal-50 dark:bg-teal-900/20 rounded-lg">
                        <span className="font-semibold text-card-foreground">
                          {isArabic ? t("restaurantsCalc.roi") : "ROI:"}
                        </span>
                        <span className="text-lg font-bold text-teal-600 dark:text-teal-400">
                          {results.roi.toFixed(1)}%
                        </span>
                      </div>
                    </>
                  ) : (
                    <div className="flex justify-between items-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                      <span className="font-semibold text-card-foreground">
                        {isArabic ? t("restaurantsCalc.note") : "Note:"}
                      </span>
                      <span className="text-lg font-bold text-yellow-600 dark:text-yellow-400">
                        {isArabic
                          ? t("restaurantsCalc.lowMissedCalls")
                          : "Low missed calls - consider other benefits"}
                      </span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
            <Card className="p-8 border border-gray-200 dark:border-gray-700 shadow-lg">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-2xl font-bold flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  {isArabic
                    ? t("restaurantsCalc.implementation")
                    : "Implementation"}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <div>
                      <span className="font-semibold">
                        {isArabic
                          ? t("restaurantsCalc.setupTime")
                          : "Setup Time:"}
                      </span>
                      <span className="ml-2 text-muted-foreground">
                        {isArabic
                          ? t("restaurantsCalc.setupTimeDesc")
                          : "2-3 weeks"}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <div>
                      <span className="font-semibold">
                        {isArabic ? t("restaurantsCalc.training") : "Training:"}
                      </span>
                      <span className="ml-2 text-muted-foreground">
                        {isArabic
                          ? t("restaurantsCalc.trainingDesc")
                          : "1 week"}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <div>
                      <span className="font-semibold">
                        {isArabic
                          ? t("restaurantsCalc.fullAutomation")
                          : "Full Automation:"}
                      </span>
                      <span className="ml-2 text-muted-foreground">
                        {isArabic
                          ? t("restaurantsCalc.fullAutomationDesc")
                          : "1 month"}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>{" "}
      {/* End of max-w-6xl container */}
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
                  ? t("restaurantsCalc.cta.heading")
                  : "Restaurants & Cafes AI Automation Coming Soon!"}
              </h4>
              <p className="mb-6 opacity-90">
                {isArabic
                  ? t("restaurantsCalc.cta.intro")
                  : "We're expanding our team to serve restaurants and cafes. Get early access and be the first to know when we launch."}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  className="bg-[#ffcf00] text-black font-bold px-6 py-3 hover:bg-yellow-300 transition-colors"
                  onClick={() => (window.location.href = "/early-access")}
                >
                  {isArabic
                    ? t("restaurantsCalc.cta.earlyAccess")
                    : "Get Early Access"}
                </Button>
                <Button
                  className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 font-bold px-6 py-3 transition-colors"
                  onClick={() => (window.location.href = "/packages")}
                >
                  {isArabic
                    ? t("restaurantsCalc.cta.viewPackages")
                    : "View Available Packages"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      {/* Methodology Note */}
      <div className="max-w-3xl mx-auto mt-8">
        <Card className="p-8 border border-gray-200 dark:border-gray-700 shadow-lg bg-white dark:bg-zinc-900 text-left">
          <CardContent className="p-0">
            <div className="grid gap-2">
              <h3 className="text-xl font-bold mb-2 text-blue-700 dark:text-blue-300">
                {isArabic
                  ? "كيف تم بناء هذه الحاسبة؟"
                  : "How Was This Calculator Built?"}
              </h3>
              <p className="text-base text-muted-foreground">
                {isArabic
                  ? "تم تطوير هذه الحاسبة خصيصًا لقطاع المطاعم والمقاهي، بناءً على بيانات السوق، معدلات فقدان الحجوزات، وتجاربنا في أتمتة الأعمال. الأرقام المقدمة تستند إلى متوسطات الصناعة وتقديرات دقيقة لمساعدة أصحاب المطاعم على فهم تأثير الأتمتة وزيادة الإيرادات."
                  : "This calculator was developed specifically for the restaurants & cafes sector, using market data, missed reservation rates, and our experience automating businesses. The numbers are based on industry averages and careful estimates to help restaurant owners understand the impact of automation and increase revenue."}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
