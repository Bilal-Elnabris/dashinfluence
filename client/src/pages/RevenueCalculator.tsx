import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCurrency } from "@/lib/utils";

interface CalculatorState {
  leads: number;
  conversion: number;
  dealSize: number;
  hours: number;
  hourlyCost: number;
}

export default function RevenueCalculator() {
  const [values, setValues] = useState<CalculatorState>({
    leads: 100,
    conversion: 10,
    dealSize: 2000,
    hours: 20,
    hourlyCost: 50,
  });

  const [results, setResults] = useState({
    currentRevenue: 0,
    potentialRevenue: 0,
    leakage: 0,
    annualLeakage: 0,
  });

  useEffect(() => {
    const currentRevenue = values.leads * (values.conversion / 100) * values.dealSize;
    const laborCost = values.hours * values.hourlyCost * 4; // monthly
    const potentialConversion = Math.min(values.conversion * 1.5, 35);
    const potentialRevenue = values.leads * (potentialConversion / 100) * values.dealSize;
    const netCurrent = currentRevenue - laborCost;
    const netPotential = potentialRevenue - (laborCost * 0.3); // 70% time savings
    const leakage = netPotential - netCurrent;

    setResults({
      currentRevenue: netCurrent,
      potentialRevenue: netPotential,
      leakage: leakage,
      annualLeakage: leakage * 12,
    });
  }, [values]);

  const handleSliderChange = (key: keyof CalculatorState, value: number) => {
    setValues(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="section-padding bg-[hsl(210,20%,97%)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-[hsl(217,69%,34%)]">
            Your Revenue Leakage Calculator
          </h1>
          <div className="w-24 h-1 bg-[hsl(36,95%,62%)] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how much revenue slips through manual processes and inefficient operations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Input Section */}
          <Card className="p-8">
            <CardHeader className="p-0 mb-8">
              <CardTitle className="text-2xl font-bold">Business Metrics</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="space-y-6">
                {/* Monthly Leads */}
                <div>
                  <label className="block text-sm font-semibold mb-3">Monthly Leads:</label>
                  <div className="flex items-center space-x-4">
                    <input
                      type="range"
                      min="10"
                      max="1000"
                      value={values.leads}
                      onChange={(e) => handleSliderChange('leads', parseInt(e.target.value))}
                      className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <span className="text-lg font-bold text-[hsl(217,69%,34%)] w-16">{values.leads}</span>
                  </div>
                </div>

                {/* Conversion Rate */}
                <div>
                  <label className="block text-sm font-semibold mb-3">Conversion Rate (%):</label>
                  <div className="flex items-center space-x-4">
                    <input
                      type="range"
                      min="1"
                      max="50"
                      value={values.conversion}
                      onChange={(e) => handleSliderChange('conversion', parseInt(e.target.value))}
                      className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <span className="text-lg font-bold text-[hsl(217,69%,34%)] w-16">{values.conversion}%</span>
                  </div>
                </div>

                {/* Average Deal Size */}
                <div>
                  <label className="block text-sm font-semibold mb-3">Average Deal Size ($):</label>
                  <div className="flex items-center space-x-4">
                    <input
                      type="range"
                      min="500"
                      max="10000"
                      value={values.dealSize}
                      step="100"
                      onChange={(e) => handleSliderChange('dealSize', parseInt(e.target.value))}
                      className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <span className="text-lg font-bold text-[hsl(217,69%,34%)] w-20">{formatCurrency(values.dealSize)}</span>
                  </div>
                </div>

                {/* Hours Spent Weekly */}
                <div>
                  <label className="block text-sm font-semibold mb-3">Hours Spent on Manual Tasks (Weekly):</label>
                  <div className="flex items-center space-x-4">
                    <input
                      type="range"
                      min="5"
                      max="40"
                      value={values.hours}
                      onChange={(e) => handleSliderChange('hours', parseInt(e.target.value))}
                      className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <span className="text-lg font-bold text-[hsl(217,69%,34%)] w-16">{values.hours}h</span>
                  </div>
                </div>

                {/* Hourly Cost */}
                <div>
                  <label className="block text-sm font-semibold mb-3">Hourly Cost ($):</label>
                  <div className="flex items-center space-x-4">
                    <input
                      type="range"
                      min="20"
                      max="100"
                      value={values.hourlyCost}
                      onChange={(e) => handleSliderChange('hourlyCost', parseInt(e.target.value))}
                      className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <span className="text-lg font-bold text-[hsl(217,69%,34%)] w-16">{formatCurrency(values.hourlyCost)}</span>
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
                  <div className="flex justify-between items-center p-4 bg-red-50 rounded-lg">
                    <span className="font-semibold">Current Monthly Revenue:</span>
                    <span className="text-2xl font-bold text-red-600">{formatCurrency(results.currentRevenue)}</span>
                  </div>
                  
                  <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                    <span className="font-semibold">Potential Monthly Revenue:</span>
                    <span className="text-2xl font-bold text-green-600">{formatCurrency(results.potentialRevenue)}</span>
                  </div>
                  
                  <div className="flex justify-between items-center p-4 bg-orange-50 rounded-lg">
                    <span className="font-semibold">Monthly Revenue Leakage:</span>
                    <span className="text-3xl font-bold text-[hsl(36,95%,62%)]">{formatCurrency(results.leakage)}</span>
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
                <Button className="w-full bg-[#ffe36a] px-6 py-3 text-white rounded-lg font-bold hover:bg-orange-500 transition-colors">
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
