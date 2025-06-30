import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface Question {
  id: number;
  question: string;
  options: { value: string; label: string; score: number }[];
}

const questions: Question[] = [
  {
    id: 1,
    question: "How many car wash/detail appointments do you book weekly?",
    options: [
      { value: "1-10", label: "1-10 appointments", score: 1 },
      { value: "11-25", label: "11-25 appointments", score: 2 },
      { value: "26-50", label: "26-50 appointments", score: 3 },
      { value: "50+", label: "50+ appointments", score: 4 },
    ],
  },
  {
    id: 2,
    question: "How many customer calls do you miss daily while working on cars?",
    options: [
      { value: "0-1", label: "0-1 calls", score: 1 },
      { value: "2-3", label: "2-3 calls", score: 2 },
      { value: "4-6", label: "4-6 calls", score: 3 },
      { value: "6+", label: "6+ calls", score: 4 },
    ],
  },
  {
    id: 3,
    question: "How do customers typically book with you?",
    options: [
      { value: "phone-only", label: "Phone calls only", score: 1 },
      { value: "phone-text", label: "Phone and text messages", score: 2 },
      { value: "social", label: "Social media + phone", score: 3 },
      { value: "online", label: "Online booking system", score: 4 },
    ],
  },
  {
    id: 4,
    question: "How much time do you spend daily on booking and scheduling?",
    options: [
      { value: "15-30min", label: "15-30 minutes", score: 1 },
      { value: "30-60min", label: "30-60 minutes", score: 2 },
      { value: "1-2h", label: "1-2 hours", score: 3 },
      { value: "2h+", label: "2+ hours", score: 4 },
    ],
  },
  {
    id: 5,
    question: "Do you send appointment reminders to customers?",
    options: [
      { value: "never", label: "Never", score: 1 },
      { value: "manual", label: "Manual texts/calls", score: 2 },
      { value: "sometimes", label: "Sometimes automated", score: 3 },
      { value: "automated", label: "Fully automated system", score: 4 },
    ],
  },
  {
    id: 6,
    question: "What's your biggest challenge running your car detailing business?",
    options: [
      { value: "missing-calls", label: "Missing customer calls while working", score: 4 },
      { value: "scheduling", label: "Managing appointment scheduling", score: 3 },
      { value: "no-shows", label: "Dealing with no-shows", score: 2 },
      { value: "pricing", label: "Pricing my services competitively", score: 1 },
    ],
  },
  {
    id: 7,
    question: "How do you currently follow up with potential customers?",
    options: [
      { value: "none", label: "No follow-up system", score: 1 },
      { value: "manual", label: "Manual calls when I remember", score: 2 },
      { value: "scheduled", label: "Scheduled reminder system", score: 3 },
      { value: "automated", label: "Automated follow-up messages", score: 4 },
    ],
  },
  {
    id: 8,
    question: "What's your monthly revenue target for your detailing business?",
    options: [
      { value: "5k", label: "Under $5K", score: 1 },
      { value: "10k", label: "$5K - $10K", score: 2 },
      { value: "20k", label: "$10K - $20K", score: 3 },
      { value: "20k+", label: "$20K+", score: 4 },
    ],
  },
];

export default function AutomationQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string>("");

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleAnswer = (score: number, value: string) => {
    setSelectedOption(value);
    setAnswers(prev => ({ ...prev, [questions[currentQuestion].id]: score }));
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedOption("");
    } else {
      setShowResults(true);
    }
  };

  const previousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
      setSelectedOption("");
    }
  };

  const calculateScore = () => {
    const totalScore = Object.values(answers).reduce((sum, score) => sum + score, 0);
    const maxScore = questions.length * 4;
    return Math.round((totalScore / maxScore) * 100);
  };

  const getScoreAnalysis = (score: number) => {
    if (score >= 80) {
      return {
        level: "High Automation Potential",
        color: "text-green-600",
        recommendation: "Your car detailing business is ready for advanced automation! You're missing significant revenue from manual processes. Our AI can immediately help with appointment booking, customer follow-up, and reducing missed calls.",
      };
    } else if (score >= 60) {
      return {
        level: "Medium Automation Potential", 
        color: "text-orange-600",
        recommendation: "Your detailing business has good fundamentals but you're losing money to inefficient processes. Start with automated booking and SMS reminders to capture more customers while you're working on cars.",
      };
    } else {
      return {
        level: "High Automation Need",
        color: "text-red-600",
        recommendation: "Your car detailing business would see immediate ROI from automation. You're likely missing 30-50% of potential bookings. Start with basic automated booking and appointment reminders to stop revenue leakage.",
      };
    }
  };

  if (showResults) {
    const score = calculateScore();
    const analysis = getScoreAnalysis(score);

    return (
      <div className="section-padding bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-foreground">Quiz Results</h1>
            <div className="w-24 h-1 bg-[#ffcf00] mx-auto mb-6"></div>
          </div>

          <Card className="gradient-bg text-white p-8 text-center">
            <CardContent className="p-0">
              <h3 className="text-3xl font-bold mb-4">Your Automation Score</h3>
              <div className="text-6xl font-bold mb-2">{score}</div>
              <p className={`text-xl mb-6 ${analysis.color}`}>{analysis.level}</p>
              <div className="max-w-2xl mx-auto">
                <p className="mb-6 opacity-90">{analysis.recommendation}</p>
                <Button 
                  className="px-8 py-3 bg-[#ffcf00] text-foreground rounded-lg font-bold hover:bg-orange-400 transition-colors"
                  onClick={() => window.open('https://calendly.com/dashinfluence/consultation', '_blank')}
                >
                  Get Detailed Analysis
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="section-padding bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-foreground">Automation Readiness Quiz</h1>
          <div className="w-24 h-1 bg-[#ffcf00] mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground">Assess your business automation potential in 2 minutes</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm font-medium mb-2">
            <span>Question {currentQuestion + 1} of {questions.length}</span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Quiz Card */}
        <Card className="border-2 border-gray-100 p-8">
          <CardContent className="p-0">
            <div className="quiz-question">
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                {questions[currentQuestion].question}
              </h3>
              <div className="space-y-3">
                {questions[currentQuestion].options.map((option) => (
                  <label
                    key={option.value}
                    className={`flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer transition-colors ${
                      selectedOption === option.value
                        ? 'bg-[#ffcf00] bg-opacity-10 border-[#ffcf00]'
                        : 'hover:bg-[hsl(210,20%,97%)]'
                    }`}
                  >
                    <input
                      type="radio"
                      name={`question-${currentQuestion}`}
                      value={option.value}
                      checked={selectedOption === option.value}
                      onChange={() => handleAnswer(option.score, option.value)}
                      className="w-4 h-4 text-[#ffcf00]"
                    />
                    <span className="ml-3 text-lg">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <Button
                onClick={previousQuestion}
                variant="outline"
                className={`px-6 py-3 ${currentQuestion === 0 ? 'invisible' : ''}`}
              >
                Previous
              </Button>
              <Button
                onClick={nextQuestion}
                disabled={!selectedOption}
                className="px-6 py-3 bg-[#ffcf00] text-foreground hover:bg-orange-400"
              >
                {currentQuestion === questions.length - 1 ? 'Get Results' : 'Next Question'}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
