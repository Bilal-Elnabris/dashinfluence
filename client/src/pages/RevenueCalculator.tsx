import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCurrency } from "@/lib/utils";

interface CalculatorState {
  avgWashes: number;
  avgDetails: number;
  washPrice: number;
  detailPrice: number;
  missedCalls: number;
}

export default function RevenueCalculator() {
  const [values, setValues] = useState<CalculatorState>({
    avgWashes: 15,
    avgDetails: 5,
    washPrice: 75,
    detailPrice: 250,
    missedCalls: 8,
  });

  const [results, setResults] = useState({
    currentRevenue: 0,
    potentialRevenue: 0,
    leakage: 0,
    annualLeakage: 0,
  });

  useEffect(() => {
    // Current monthly revenue
    const currentWashRevenue = values.avgWashes * values.washPrice * 4; // 4 weeks
    const currentDetailRevenue = values.avgDetails * values.detailPrice * 4;
    const currentRevenue = currentWashRevenue + currentDetailRevenue;
    
    // Lost revenue from missed calls
    const missedWashRevenue = values.missedCalls * values.washPrice * 4;
    const missedDetailRevenue = (values.missedCalls * 0.3) * values.detailPrice * 4; // 30% of missed calls would book details
    const missedRevenue = missedWashRevenue + missedDetailRevenue;
    
    // Potential with AI automation (capturing missed calls + improving booking rates)
    const potentialWashes = (values.avgWashes + values.missedCalls) * 1.2; // 20% improvement
    const potentialDetails = (values.avgDetails + values.missedCalls * 0.3) * 1.15; // 15% improvement
    const potentialRevenue = (potentialWashes * values.washPrice + potentialDetails * values.detailPrice) * 4;
    
    const leakage = potentialRevenue - currentRevenue;

    setResults({
      currentRevenue,
      potentialRevenue,
      leakage,
      annualLeakage: leakage * 12,
    });
  }, [values]);

  const handleSliderChange = (key: keyof CalculatorState, value: number) => {
    setValues(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="section-padding bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-foreground">
            Car Detailing Revenue Calculator
          </h1>
          <div className="w-24 h-1 bg-[#ffcf00] mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Calculate how much revenue you're losing from missed calls and manual booking processes
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Input Section */}
          <Card className="p-8 bg-card border-border">
            <CardHeader className="p-0 mb-8">
              <CardTitle className="text-2xl font-bold text-card-foreground">Business Metrics</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="space-y-6">
                {/* Average Weekly Washes */}
                <div>
                  <label className="block text-sm font-semibold mb-3 text-card-foreground">Average Weekly Washes:</label>
                  <div className="flex items-center space-x-4">
                    <input
                      type="range"
                      min="1"
                      max="50"
                      value={values.avgWashes}
                      onChange={(e) => handleSliderChange('avgWashes', parseInt(e.target.value))}
                      className="flex-1 h-2 bg-gray-800 dark:bg-white rounded-lg appearance-none cursor-pointer custom-slider"
                    />
                    <span className="text-lg font-bold text-[hsl(217,69%,34%)] dark:text-white w-16">{values.avgWashes}</span>
                  </div>
                </div>

                {/* Average Weekly Details */}
                <div>
                  <label className="block text-sm font-semibold mb-3 text-[hsl(217,69%,34%)] dark:text-white">Average Weekly Details:</label>
                  <div className="flex items-center space-x-4">
                    <input
                      type="range"
                      min="1"
                      max="20"
                      value={values.avgDetails}
                      onChange={(e) => handleSliderChange('avgDetails', parseInt(e.target.value))}
                      className="flex-1 h-2 bg-gray-800 dark:bg-white rounded-lg appearance-none cursor-pointer custom-slider"
                    />
                    <span className="text-lg font-bold text-[hsl(217,69%,34%)] dark:text-white w-16">{values.avgDetails}</span>
                  </div>
                </div>

                {/* Wash Price */}
                <div>
                  <label className="block text-sm font-semibold mb-3 text-[hsl(217,69%,34%)] dark:text-white">Wash Price ($):</label>
                  <div className="flex items-center space-x-4">
                    <input
                      type="range"
                      min="20"
                      max="150"
                      value={values.washPrice}
                      step="5"
                      onChange={(e) => handleSliderChange('washPrice', parseInt(e.target.value))}
                      className="flex-1 h-2 bg-gray-800 dark:bg-white rounded-lg appearance-none cursor-pointer custom-slider"
                    />
                    <span className="text-lg font-bold text-[hsl(217,69%,34%)] dark:text-white w-20">{formatCurrency(values.washPrice)}</span>
                  </div>
                </div>

                {/* Detail Price */}
                <div>
                  <label className="block text-sm font-semibold mb-3 text-[hsl(217,69%,34%)] dark:text-white">Detail Price ($):</label>
                  <div className="flex items-center space-x-4">
                    <input
                      type="range"
                      min="100"
                      max="500"
                      value={values.detailPrice}
                      step="10"
                      onChange={(e) => handleSliderChange('detailPrice', parseInt(e.target.value))}
                      className="flex-1 h-2 bg-gray-800 dark:bg-white rounded-lg appearance-none cursor-pointer custom-slider"
                    />
                    <span className="text-lg font-bold text-[hsl(217,69%,34%)] dark:text-white w-20">{formatCurrency(values.detailPrice)}</span>
                  </div>
                </div>

                {/* Missed Calls Weekly */}
                <div>
                  <label className="block text-sm font-semibold mb-3 text-[hsl(217,69%,34%)] dark:text-white">Missed Calls (Weekly):</label>
                  <div className="flex items-center space-x-4">
                    <input
                      type="range"
                      min="0"
                      max="25"
                      value={values.missedCalls}
                      onChange={(e) => handleSliderChange('missedCalls', parseInt(e.target.value))}
                      className="flex-1 h-2 bg-gray-800 dark:bg-white rounded-lg appearance-none cursor-pointer custom-slider"
                    />
                    <span className="text-lg font-bold text-[hsl(217,69%,34%)] dark:text-white w-16">{values.missedCalls}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Results Section */}
          <div className="space-y-6">
            {/* Current vs Potential Revenue */}
            <Card className="p-8">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-2xl font-bold">Revenue Analysis</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-6">
                  <div className="flex justify-between items-center p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                    <span className="font-semibold text-[hsl(217,69%,34%)] dark:text-white">Current Monthly Revenue:</span>
                    <span className="text-2xl font-bold text-red-600 dark:text-red-400">{formatCurrency(results.currentRevenue)}</span>
                  </div>
                  
                  <div className="flex justify-between items-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <span className="font-semibold text-[hsl(217,69%,34%)] dark:text-white">Potential Monthly Revenue:</span>
                    <span className="text-2xl font-bold text-green-600 dark:text-green-400">{formatCurrency(results.potentialRevenue)}</span>
                  </div>
                  
                  <div className="flex justify-between items-center p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                    <span className="font-semibold text-[hsl(217,69%,34%)] dark:text-white">Monthly Revenue Leakage:</span>
                    <span className="text-3xl font-bold text-[#ffcf00]">{formatCurrency(results.leakage)}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Annual Impact */}
            <Card className="gradient-bg text-white p-8">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-2xl font-bold">Annual Impact</CardTitle>
              </CardHeader>
              <CardContent className="p-0 text-center">
                <div className="text-5xl font-bold mb-2">{formatCurrency(results.annualLeakage)}</div>
                <p className="text-lg opacity-90">Revenue lost annually to manual processes</p>
              </CardContent>
            </Card>

            {/* CTA */}
            <Card className="p-8 text-center">
              <CardContent className="p-0">
                <h4 className="text-xl font-bold mb-4">Ready to Plug the Revenue Leak?</h4>
                <Button 
                  className="w-full bg-[#ffcf00] px-6 py-3 text-foreground rounded-lg font-bold hover:bg-yellow-300 transition-colors"
                  onClick={() => window.open('https://calendly.com/dashinfluence/consultation', '_blank')}
                >
                  Schedule Free Consultation
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
