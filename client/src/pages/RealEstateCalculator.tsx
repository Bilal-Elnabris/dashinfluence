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
  Home as HomeIcon,
} from "lucide-react";
import { SparklesCore } from "@/components/SparklesCore";
import { useTranslation } from "react-i18next";

interface CalculatorState {
  avgLeads: number;
  avgDeals: number;
  avgCommission: number;
  missedLeads: number;
  followUpRate: number;
  businessSize: "solo" | "team" | "agency";
}

export default function RealEstateCalculator() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  const [values, setValues] = useState<CalculatorState>({
    avgLeads: 30,
    avgDeals: 2,
    avgCommission: 8000,
    missedLeads: 8,
    followUpRate: 60,
    businessSize: "team",
  });

  const [results, setResults] = useState({
    currentRevenue: 0,
    potentialRevenue: 0,
    monthlyLeakage: 0,
    annualLeakage: 0,
    implementationCost: 1500,
    monthlyCost: 400,
    paybackPeriod: 0,
    roi: 0,
  });

  // Package costs based on business size
  const packageCosts = {
    solo: { setup: 750, monthly: 199 },
    team: { setup: 1750, monthly: 499 },
    agency: { setup: 3500, monthly: 999 },
  };

  useEffect(() => {
    // Current monthly revenue (deals * commission)
    const currentRevenue = values.avgDeals * values.avgCommission;

    // Missed leads: assume 20% of missed leads could convert to deals
    const missedLeadConversion = 0.2;
    const recoveredDeals = values.missedLeads * missedLeadConversion;
    const missedRevenue = recoveredDeals * values.avgCommission;

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
          id="tsparticlesrealestatecalc"
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
            <HomeIcon className="w-[220px] h-[220px] mx-auto text-blue-400" />
          </div>
          <h1 className="text-4xl font-bold mb-4 text-foreground relative z-10">
            {isArabic
              ? t("realEstateCalc.heading")
              : "Real Estate Leakage Calculator"}
          </h1>
          <div className="w-24 h-1 bg-[#ffcf00] mx-auto mb-6 border-b-2 border-dashed border-[#ffcf00] relative z-10"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 relative z-10">
            {isArabic
              ? t("realEstateCalc.intro")
              : "Calculate how much revenue you're losing to missed leads and manual processes"}
          </p>
          {/* Scientific Facts Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 relative z-10">
            <Card className="p-4 bg-blue-50 dark:bg-blue-900/20 border-blue-200">
              <CardContent className="p-0 text-center">
                <Target className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <h3 className="font-bold text-blue-900 dark:text-blue-100 mb-1">
                  {isArabic
                    ? t("realEstateCalc.facts.industry")
                    : "Missed Opportunities"}
                </h3>
                <p className="text-sm text-blue-700 dark:text-blue-200">
                  {isArabic
                    ? t("realEstateCalc.facts.industryDesc")
                    : "40% of real estate leads are never followed up (NAR)"}
                </p>
              </CardContent>
            </Card>
            <Card className="p-4 bg-green-50 dark:bg-green-900/20 border-green-200">
              <CardContent className="p-0 text-center">
                <Zap className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <h3 className="font-bold text-green-900 dark:text-green-100 mb-1">
                  {isArabic ? t("realEstateCalc.facts.ai") : "AI Efficiency"}
                </h3>
                <p className="text-sm text-green-700 dark:text-green-200">
                  {isArabic
                    ? t("realEstateCalc.facts.aiDesc")
                    : "Automated follow-up increases conversion by 50%"}
                </p>
              </CardContent>
            </Card>
            <Card className="p-4 bg-purple-50 dark:bg-purple-900/20 border-purple-200">
              <CardContent className="p-0 text-center">
                <TrendingUp className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <h3 className="font-bold text-purple-900 dark:text-purple-100 mb-1">
                  {isArabic ? t("realEstateCalc.facts.roi") : "ROI Proven"}
                </h3>
                <p className="text-sm text-purple-700 dark:text-purple-200">
                  {isArabic
                    ? t("realEstateCalc.facts.roiDesc")
                    : "Teams using automation see 200%+ ROI in 12 months"}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
        {/* Input and Results Sections (identical to car detailer, but with real estate fields) */}
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
                  ? t("realEstateCalc.metrics")
                  : "Your Business Metrics"}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="space-y-6">
                {/* Business Size Selection */}
                <div>
                  <label className="block text-sm font-semibold mb-3 text-card-foreground">
                    {isArabic
                      ? t("realEstateCalc.selectPackage")
                      : "Select Your Package:"}
                  </label>
                  <select
                    value={values.businessSize}
                    onChange={(e) =>
                      handleSelectChange("businessSize", e.target.value)
                    }
                    className="w-full p-3 border rounded-lg bg-background text-card-foreground"
                  >
                    <option value="solo">
                      {isArabic
                        ? t("realEstateCalc.packages.solo")
                        : "Solo Agent ($750 setup + $199/month)"}
                    </option>
                    <option value="team">
                      {isArabic
                        ? t("realEstateCalc.packages.team")
                        : "Team ($1,750 setup + $499/month)"}
                    </option>
                    <option value="agency">
                      {isArabic
                        ? t("realEstateCalc.packages.agency")
                        : "Agency ($3,500 setup + $999/month)"}
                    </option>
                  </select>
                </div>
                {/* Average Monthly Leads */}
                <div>
                  <label className="block text-sm font-semibold mb-3 text-card-foreground">
                    {isArabic
                      ? t("realEstateCalc.avgLeads")
                      : "Average New Leads per Month:"}
                  </label>
                  <div className="flex items-center space-x-4">
                    <input
                      type="range"
                      min="5"
                      max="100"
                      value={values.avgLeads}
                      onChange={(e) =>
                        handleSliderChange("avgLeads", parseInt(e.target.value))
                      }
                      className="flex-1 h-2 bg-gray-800 dark:bg-white rounded-lg appearance-none cursor-pointer custom-slider"
                    />
                    <span className="text-lg font-bold text-[hsl(217,69%,34%)] dark:text-white w-16">
                      {values.avgLeads}
                    </span>
                  </div>
                </div>
                {/* Average Deals per Month */}
                <div>
                  <label className="block text-sm font-semibold mb-3 text-card-foreground">
                    {isArabic
                      ? t("realEstateCalc.avgDeals")
                      : "Average Closed Deals per Month:"}
                  </label>
                  <div className="flex items-center space-x-4">
                    <input
                      type="range"
                      min="0"
                      max="10"
                      value={values.avgDeals}
                      onChange={(e) =>
                        handleSliderChange("avgDeals", parseInt(e.target.value))
                      }
                      className="flex-1 h-2 bg-gray-800 dark:bg-white rounded-lg appearance-none cursor-pointer custom-slider"
                    />
                    <span className="text-lg font-bold text-[hsl(217,69%,34%)] dark:text-white w-16">
                      {values.avgDeals}
                    </span>
                  </div>
                </div>
                {/* Average Commission per Deal */}
                <div>
                  <label className="block text-sm font-semibold mb-3 text-card-foreground">
                    {isArabic
                      ? t("realEstateCalc.avgCommission")
                      : "Average Commission per Deal ($):"}
                  </label>
                  <div className="flex items-center space-x-4">
                    <input
                      type="range"
                      min="2000"
                      max="20000"
                      step="500"
                      value={values.avgCommission}
                      onChange={(e) =>
                        handleSliderChange(
                          "avgCommission",
                          parseInt(e.target.value)
                        )
                      }
                      className="flex-1 h-2 bg-gray-800 dark:bg-white rounded-lg appearance-none cursor-pointer custom-slider"
                    />
                    <span className="text-lg font-bold text-[hsl(217,69%,34%)] dark:text-white w-20">
                      {formatCurrency(values.avgCommission)}
                    </span>
                  </div>
                </div>
                {/* Missed Leads per Month */}
                <div>
                  <label className="block text-sm font-semibold mb-3 text-card-foreground">
                    {isArabic
                      ? t("realEstateCalc.missedLeads")
                      : "Missed Leads per Month:"}
                  </label>
                  <div className="flex items-center space-x-4">
                    <input
                      type="range"
                      min="0"
                      max="30"
                      value={values.missedLeads}
                      onChange={(e) =>
                        handleSliderChange(
                          "missedLeads",
                          parseInt(e.target.value)
                        )
                      }
                      className="flex-1 h-2 bg-gray-800 dark:bg-white rounded-lg appearance-none cursor-pointer custom-slider"
                    />
                    <span className="text-lg font-bold text-[hsl(217,69%,34%)] dark:text-white w-16">
                      {values.missedLeads}
                    </span>
                  </div>
                </div>
                {/* Follow-up Rate (%) */}
                <div>
                  <label className="block text-sm font-semibold mb-3 text-card-foreground">
                    {isArabic
                      ? t("realEstateCalc.followUpRate")
                      : "Follow-up Rate (%):"}
                  </label>
                  <div className="flex items-center space-x-4">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={values.followUpRate}
                      onChange={(e) =>
                        handleSliderChange(
                          "followUpRate",
                          parseInt(e.target.value)
                        )
                      }
                      className="flex-1 h-2 bg-gray-800 dark:bg-white rounded-lg appearance-none cursor-pointer custom-slider"
                    />
                    <span className="text-lg font-bold text-[hsl(217,69%,34%)] dark:text-white w-16">
                      {values.followUpRate}%
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          {/* Results Section (same as car detailer) */}
          <div className="space-y-6">
            <Card className="p-8">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-2xl font-bold flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  {isArabic
                    ? t("realEstateCalc.revenueAnalysis")
                    : "Revenue Analysis"}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-6">
                  <div className="flex justify-between items-center p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                    <span className="font-semibold text-card-foreground">
                      {isArabic
                        ? t("realEstateCalc.currentRevenue")
                        : "Current Monthly Revenue:"}
                    </span>
                    <span className="text-2xl font-bold text-red-600 dark:text-red-400">
                      {formatCurrency(results.currentRevenue)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <span className="font-semibold text-card-foreground">
                      {isArabic
                        ? t("realEstateCalc.potentialRevenue")
                        : "Potential Monthly Revenue:"}
                    </span>
                    <span className="text-2xl font-bold text-green-600 dark:text-green-400">
                      {formatCurrency(results.potentialRevenue)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                    <span className="font-semibold text-card-foreground">
                      {isArabic
                        ? t("realEstateCalc.monthlyLeakage")
                        : "Monthly Revenue Lost:"}
                    </span>
                    <span className="text-3xl font-bold text-[#ffcf00]">
                      {formatCurrency(results.monthlyLeakage)}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="p-8">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-2xl font-bold flex items-center">
                  <DollarSign className="w-5 h-5 mr-2" />
                  {isArabic
                    ? t("realEstateCalc.investmentAnalysis")
                    : "Investment Analysis"}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <span className="font-semibold text-card-foreground">
                      {isArabic ? t("realEstateCalc.setupCost") : "Setup Cost:"}
                    </span>
                    <span className="text-lg font-bold text-blue-600 dark:text-blue-400">
                      {formatCurrency(results.implementationCost)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                    <span className="font-semibold text-card-foreground">
                      {isArabic
                        ? t("realEstateCalc.monthlyRetainer")
                        : "Monthly Retainer:"}
                    </span>
                    <span className="text-lg font-bold text-purple-600 dark:text-purple-400">
                      {formatCurrency(results.monthlyCost)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <span className="font-semibold text-card-foreground">
                      {isArabic
                        ? t("realEstateCalc.annualRevenueGain")
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
                            ? t("realEstateCalc.paybackPeriod")
                            : "Payback Period:"}
                        </span>
                        <span className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
                          {results.paybackPeriod > 24
                            ? isArabic
                              ? t("realEstateCalc.moreThan24Months")
                              : "More than 24 months"
                            : isArabic
                            ? t("realEstateCalc.months", {
                                count: Number(results.paybackPeriod.toFixed(1)),
                              })
                            : `${results.paybackPeriod.toFixed(1)} months`}
                        </span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-teal-50 dark:bg-teal-900/20 rounded-lg">
                        <span className="font-semibold text-card-foreground">
                          {isArabic ? t("realEstateCalc.roi") : "ROI:"}
                        </span>
                        <span className="text-lg font-bold text-teal-600 dark:text-teal-400">
                          {results.roi.toFixed(1)}%
                        </span>
                      </div>
                    </>
                  ) : (
                    <div className="flex justify-between items-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                      <span className="font-semibold text-card-foreground">
                        {isArabic ? t("realEstateCalc.note") : "Note:"}
                      </span>
                      <span className="text-lg font-bold text-yellow-600 dark:text-yellow-400">
                        {isArabic
                          ? t("realEstateCalc.lowMissedLeads")
                          : "Low missed leads - consider other benefits"}
                      </span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
            <Card className="p-8">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-2xl font-bold flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  {isArabic
                    ? t("realEstateCalc.implementation")
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
                          ? t("realEstateCalc.setupTime")
                          : "Setup Time:"}
                      </span>
                      <span className="ml-2 text-muted-foreground">
                        {isArabic
                          ? t("realEstateCalc.setupTimeDesc")
                          : "2-3 weeks"}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <div>
                      <span className="font-semibold">
                        {isArabic ? t("realEstateCalc.training") : "Training:"}
                      </span>
                      <span className="ml-2 text-muted-foreground">
                        {isArabic ? t("realEstateCalc.trainingDesc") : "1 week"}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <div>
                      <span className="font-semibold">
                        {isArabic
                          ? t("realEstateCalc.fullAutomation")
                          : "Full Automation:"}
                      </span>
                      <span className="ml-2 text-muted-foreground">
                        {isArabic
                          ? t("realEstateCalc.fullAutomationDesc")
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
                  ? t("realEstateCalc.cta.heading")
                  : "Ready to Stop Losing Revenue?"}
              </h4>
              <p className="mb-6 opacity-90">
                {isArabic
                  ? t("realEstateCalc.cta.intro")
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
                  ? t("realEstateCalc.cta.button")
                  : "Schedule Free Consultation"}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
