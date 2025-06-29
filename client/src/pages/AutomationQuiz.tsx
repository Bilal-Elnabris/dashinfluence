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
    question: "How many leads do you handle monthly?",
    options: [
      { value: "1-50", label: "1-50 leads", score: 1 },
      { value: "51-100", label: "51-100 leads", score: 2 },
      { value: "101-200", label: "101-200 leads", score: 3 },
      { value: "200+", label: "200+ leads", score: 4 },
    ],
  },
  {
    id: 2,
    question: "How much time do you spend on manual lead follow-up daily?",
    options: [
      { value: "0-1h", label: "0-1 hours", score: 1 },
      { value: "1-2h", label: "1-2 hours", score: 2 },
      { value: "2-4h", label: "2-4 hours", score: 3 },
      { value: "4h+", label: "4+ hours", score: 4 },
    ],
  },
  {
    id: 3,
    question: "What's your current lead conversion rate?",
    options: [
      { value: "0-5%", label: "0-5%", score: 1 },
      { value: "5-10%", label: "5-10%", score: 2 },
      { value: "10-15%", label: "10-15%", score: 3 },
      { value: "15%+", label: "15%+", score: 4 },
    ],
  },
  {
    id: 4,
    question: "How do you currently manage appointment scheduling?",
    options: [
      { value: "manual", label: "Manual phone calls and emails", score: 1 },
      { value: "calendar", label: "Online calendar link", score: 2 },
      { value: "basic-auto", label: "Basic automation tools", score: 3 },
      { value: "advanced", label: "Advanced scheduling system", score: 4 },
    ],
  },
  {
    id: 5,
    question: "How often do qualified leads slip through the cracks?",
    options: [
      { value: "never", label: "Never", score: 4 },
      { value: "rarely", label: "Rarely", score: 3 },
      { value: "sometimes", label: "Sometimes", score: 2 },
      { value: "often", label: "Often", score: 1 },
    ],
  },
  {
    id: 6,
    question: "What's your biggest operational challenge?",
    options: [
      { value: "time", label: "Not enough time for follow-ups", score: 4 },
      { value: "organization", label: "Staying organized", score: 3 },
      { value: "consistency", label: "Consistent messaging", score: 2 },
      { value: "tracking", label: "Tracking lead progress", score: 1 },
    ],
  },
  {
    id: 7,
    question: "How do you handle lead nurturing?",
    options: [
      { value: "manual", label: "Manual emails and calls", score: 1 },
      { value: "templates", label: "Email templates", score: 2 },
      { value: "sequences", label: "Automated email sequences", score: 3 },
      { value: "ai", label: "AI-powered personalization", score: 4 },
    ],
  },
  {
    id: 8,
    question: "What's your annual revenue goal?",
    options: [
      { value: "100k", label: "Under $100K", score: 1 },
      { value: "500k", label: "$100K - $500K", score: 2 },
      { value: "1m", label: "$500K - $1M", score: 3 },
      { value: "1m+", label: "$1M+", score: 4 },
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
        recommendation: "Your business shows excellent automation potential. Key areas for immediate improvement include lead nurturing, appointment scheduling, and follow-up processes. You're ready for advanced AI automation solutions.",
      };
    } else if (score >= 60) {
      return {
        level: "Medium Automation Potential",
        color: "text-orange-600",
        recommendation: "You have good automation fundamentals but significant room for improvement. Focus on automating your most time-consuming manual processes first, then expand to advanced features.",
      };
    } else {
      return {
        level: "High Automation Need",
        color: "text-red-600",
        recommendation: "Your business would benefit tremendously from automation. Start with basic lead management and appointment scheduling, then gradually implement more sophisticated automation as you grow.",
      };
    }
  };

  if (showResults) {
    const score = calculateScore();
    const analysis = getScoreAnalysis(score);

    return (
      <div className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-[hsl(217,69%,34%)]">Quiz Results</h1>
            <div className="w-24 h-1 bg-[hsl(36,95%,62%)] mx-auto mb-6"></div>
          </div>

          <Card className="gradient-bg text-white p-8 text-center">
            <CardContent className="p-0">
              <h3 className="text-3xl font-bold mb-4">Your Automation Score</h3>
              <div className="text-6xl font-bold mb-2">{score}</div>
              <p className={`text-xl mb-6 ${analysis.color}`}>{analysis.level}</p>
              <div className="max-w-2xl mx-auto">
                <p className="mb-6 opacity-90">{analysis.recommendation}</p>
                <Button className="px-8 py-3 bg-[hsl(36,95%,62%)] text-white rounded-lg font-bold hover:bg-orange-500 transition-colors">
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
    <div className="section-padding bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-[hsl(217,69%,34%)]">Automation Readiness Quiz</h1>
          <div className="w-24 h-1 bg-[hsl(36,95%,62%)] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600">Assess your business automation potential in 2 minutes</p>
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
              <h3 className="text-2xl font-bold mb-6 text-[hsl(217,69%,34%)]">
                {questions[currentQuestion].question}
              </h3>
              <div className="space-y-3">
                {questions[currentQuestion].options.map((option) => (
                  <label
                    key={option.value}
                    className={`flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer transition-colors ${
                      selectedOption === option.value
                        ? 'bg-[hsl(36,95%,62%)] bg-opacity-10 border-[hsl(36,95%,62%)]'
                        : 'hover:bg-[hsl(210,20%,97%)]'
                    }`}
                  >
                    <input
                      type="radio"
                      name={`question-${currentQuestion}`}
                      value={option.value}
                      checked={selectedOption === option.value}
                      onChange={() => handleAnswer(option.score, option.value)}
                      className="w-4 h-4 text-[hsl(36,95%,62%)]"
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
                className="px-6 py-3 bg-[hsl(36,95%,62%)] text-white hover:bg-orange-500"
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
