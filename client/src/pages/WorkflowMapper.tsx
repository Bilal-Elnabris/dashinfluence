import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, AlertCircle } from "lucide-react";

interface WorkflowStep {
  id: number;
  title: string;
  description: string;
  timeRequired: string;
  issues: string[];
}

interface AutomatedStep {
  id: number;
  title: string;
  description: string;
  benefits: string[];
}

const workflows = {
  "lead-generation": {
    name: "Lead Generation",
    current: [
      {
        id: 1,
        title: "Manual Research",
        description: "2-3 hours daily searching for leads",
        timeRequired: "2-3 hours",
        issues: ["High time cost", "Limited reach", "Inconsistent quality"],
      },
      {
        id: 2,
        title: "Data Entry",
        description: "Manual input into CRM system",
        timeRequired: "1-2 hours",
        issues: ["Error prone", "Tedious work", "Delayed follow-up"],
      },
      {
        id: 3,
        title: "Initial Outreach",
        description: "Individual emails/calls to prospects",
        timeRequired: "2-4 hours",
        issues: ["Inconsistent messaging", "Limited personalization", "Low response rates"],
      },
    ],
    automated: [
      {
        id: 1,
        title: "AI-Powered Lead Discovery",
        description: "Automated prospecting from multiple sources",
        benefits: ["24/7 operation", "Higher quality leads", "Consistent criteria"],
      },
      {
        id: 2,
        title: "Auto-Enrichment & Scoring",
        description: "Intelligent data completion and lead scoring",
        benefits: ["99% accuracy", "Instant updates", "Priority ranking"],
      },
      {
        id: 3,
        title: "Personalized Multi-Channel Outreach",
        description: "AI-crafted messages across email, SMS, social",
        benefits: ["3x higher response rates", "Perfect timing", "Brand consistency"],
      },
    ],
  },
  "lead-nurturing": {
    name: "Lead Nurturing",
    current: [
      {
        id: 1,
        title: "Manual Follow-ups",
        description: "Remembering to follow up with each lead",
        timeRequired: "3-4 hours",
        issues: ["Missed opportunities", "Inconsistent timing", "Generic messages"],
      },
      {
        id: 2,
        title: "Email Drafting",
        description: "Writing individual emails for each prospect",
        timeRequired: "2-3 hours",
        issues: ["Time consuming", "Lack of personalization", "Writer's block"],
      },
      {
        id: 3,
        title: "Progress Tracking",
        description: "Manually updating lead status and notes",
        timeRequired: "1-2 hours",
        issues: ["Forgotten updates", "Incomplete records", "Poor visibility"],
      },
    ],
    automated: [
      {
        id: 1,
        title: "Smart Drip Campaigns",
        description: "Triggered sequences based on lead behavior",
        benefits: ["Perfect timing", "Behavioral triggers", "Never miss follow-up"],
      },
      {
        id: 2,
        title: "AI Content Generation",
        description: "Personalized messages for each lead",
        benefits: ["Highly relevant", "Scalable personalization", "A/B tested"],
      },
      {
        id: 3,
        title: "Automated Tracking",
        description: "Real-time lead scoring and status updates",
        benefits: ["Complete visibility", "Predictive insights", "Automated reporting"],
      },
    ],
  },
  "appointment-booking": {
    name: "Appointment Booking",
    current: [
      {
        id: 1,
        title: "Phone Tag",
        description: "Back-and-forth calls to schedule meetings",
        timeRequired: "30-60 min per appointment",
        issues: ["Frustrating experience", "Time zone confusion", "No-shows"],
      },
      {
        id: 2,
        title: "Calendar Management",
        description: "Manually checking and updating availability",
        timeRequired: "1-2 hours daily",
        issues: ["Double bookings", "Schedule conflicts", "Poor optimization"],
      },
      {
        id: 3,
        title: "Confirmation & Reminders",
        description: "Manual appointment confirmations and reminders",
        timeRequired: "30-45 min daily",
        issues: ["Forgotten reminders", "High no-show rates", "Last-minute changes"],
      },
    ],
    automated: [
      {
        id: 1,
        title: "Intelligent Scheduling",
        description: "AI-powered appointment booking with preferences",
        benefits: ["Instant booking", "Optimal time slots", "Reduced no-shows"],
      },
      {
        id: 2,
        title: "Dynamic Calendar Sync",
        description: "Real-time availability across all platforms",
        benefits: ["Zero conflicts", "Buffer time included", "Team coordination"],
      },
      {
        id: 3,
        title: "Automated Communications",
        description: "Smart confirmations, reminders, and rescheduling",
        benefits: ["50% fewer no-shows", "Seamless rescheduling", "Professional experience"],
      },
    ],
  },
  "client-onboarding": {
    name: "Client Onboarding",
    current: [
      {
        id: 1,
        title: "Manual Document Collection",
        description: "Chasing clients for required paperwork",
        timeRequired: "2-3 hours per client",
        issues: ["Delays in process", "Incomplete submissions", "Poor experience"],
      },
      {
        id: 2,
        title: "Data Entry & Setup",
        description: "Manually entering client information into systems",
        timeRequired: "1-2 hours per client",
        issues: ["Data entry errors", "System inconsistencies", "Delayed setup"],
      },
      {
        id: 3,
        title: "Welcome Process",
        description: "Manual welcome calls and introductions",
        timeRequired: "30-60 min per client",
        issues: ["Inconsistent experience", "Missed steps", "Poor first impression"],
      },
    ],
    automated: [
      {
        id: 1,
        title: "Digital Document Portal",
        description: "Automated document requests and collection",
        benefits: ["Faster completion", "Secure storage", "Progress tracking"],
      },
      {
        id: 2,
        title: "System Integration",
        description: "Automatic data sync across all platforms",
        benefits: ["Zero errors", "Instant setup", "Complete integration"],
      },
      {
        id: 3,
        title: "Personalized Welcome Journey",
        description: "Tailored onboarding experience with smart touchpoints",
        benefits: ["Consistent excellence", "Automated check-ins", "Higher satisfaction"],
      },
    ],
  },
};

export default function WorkflowMapper() {
  const [selectedWorkflow, setSelectedWorkflow] = useState<keyof typeof workflows>("lead-generation");

  const currentWorkflow = workflows[selectedWorkflow];

  return (
    <div className="section-padding bg-[hsl(210,20%,97%)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-[hsl(217,69%,34%)]">Workflow Automation Mapper</h1>
          <div className="w-24 h-1 bg-[hsl(36,95%,62%)] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600">Visualize your business processes and identify automation opportunities</p>
        </div>

        {/* Workflow Selection */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-6 text-[hsl(217,69%,34%)]">Select Your Primary Business Process</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {Object.entries(workflows).map(([key, workflow]) => (
              <Button
                key={key}
                onClick={() => setSelectedWorkflow(key as keyof typeof workflows)}
                variant={selectedWorkflow === key ? "default" : "outline"}
                className={`p-4 h-auto font-semibold transition-colors ${
                  selectedWorkflow === key
                    ? 'bg-[hsl(36,95%,62%)] text-white hover:bg-orange-500'
                    : 'border-gray-200 hover:bg-[hsl(36,95%,62%)] hover:text-white hover:border-[hsl(36,95%,62%)]'
                }`}
              >
                {workflow.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Workflow Visualization */}
        <Card className="p-8">
          <CardHeader className="p-0 mb-8">
            <CardTitle className="text-2xl font-bold text-[hsl(217,69%,34%)]">
              Current vs Automated Workflow: {currentWorkflow.name}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Current Workflow */}
              <div>
                <h4 className="text-xl font-bold mb-6 text-red-600">Current Manual Process</h4>
                <div className="space-y-4">
                  {currentWorkflow.current.map((step, index) => (
                    <div key={step.id} className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-red-600 font-bold text-sm">{index + 1}</span>
                      </div>
                      <div className="flex-1">
                        <div className="p-4 bg-red-50 rounded-lg">
                          <h5 className="font-semibold mb-1">{step.title}</h5>
                          <p className="text-sm text-gray-600 mb-2">{step.description}</p>
                          <div className="text-xs text-gray-500 mb-2">Time: {step.timeRequired}</div>
                          <div className="space-y-1">
                            {step.issues.map((issue, idx) => (
                              <div key={idx} className="flex items-center text-xs text-red-600">
                                <AlertCircle className="w-3 h-3 mr-1" />
                                {issue}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Automated Workflow */}
              <div>
                <h4 className="text-xl font-bold mb-6 text-green-600">Automated Smart Process</h4>
                <div className="space-y-4">
                  {currentWorkflow.automated.map((step, index) => (
                    <div key={step.id} className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-green-600 font-bold text-sm">{index + 1}</span>
                      </div>
                      <div className="flex-1">
                        <div className="p-4 bg-green-50 rounded-lg">
                          <h5 className="font-semibold mb-1">{step.title}</h5>
                          <p className="text-sm text-gray-600 mb-2">{step.description}</p>
                          <div className="space-y-1">
                            {step.benefits.map((benefit, idx) => (
                              <div key={idx} className="flex items-center text-xs text-green-600">
                                <CheckCircle className="w-3 h-3 mr-1" />
                                {benefit}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Impact Metrics */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-orange-50 rounded-lg">
                <div className="text-3xl font-bold text-[hsl(36,95%,62%)] mb-2">85%</div>
                <div className="text-sm font-semibold text-gray-700">Time Saved</div>
              </div>
              <div className="text-center p-6 bg-green-100 rounded-lg">
                <div className="text-3xl font-bold text-green-600 mb-2">3x</div>
                <div className="text-sm font-semibold text-gray-700">Lead Quality</div>
              </div>
              <div className="text-center p-6 bg-blue-100 rounded-lg">
                <div className="text-3xl font-bold text-[hsl(217,69%,34%)] mb-2">24/7</div>
                <div className="text-sm font-semibold text-gray-700">Operation</div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 text-center">
              <Button className="px-8 py-3 bg-[hsl(36,95%,62%)] text-white rounded-lg font-bold hover:bg-orange-500 transition-colors">
                Map My Specific Workflow
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
