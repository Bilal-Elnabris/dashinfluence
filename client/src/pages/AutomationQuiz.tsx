import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { SparklesCore } from "@/components/SparklesCore";
import { useTranslation } from "react-i18next";
import { useLocation } from "wouter";

interface Question {
  id: number;
  question: string;
  options: { value: string; label: string; score: number }[];
}

const questions: Question[] = [
  {
    id: 1,
    question: "quiz.questions.1.question",
    options: [
      { value: "1-10", label: "quiz.questions.1.options.1", score: 1 },
      { value: "11-25", label: "quiz.questions.1.options.2", score: 2 },
      { value: "26-50", label: "quiz.questions.1.options.3", score: 3 },
      { value: "50+", label: "quiz.questions.1.options.4", score: 4 },
    ],
  },
  {
    id: 2,
    question: "quiz.questions.2.question",
    options: [
      { value: "0-1", label: "quiz.questions.2.options.1", score: 1 },
      { value: "2-3", label: "quiz.questions.2.options.2", score: 2 },
      { value: "4-6", label: "quiz.questions.2.options.3", score: 3 },
      { value: "6+", label: "quiz.questions.2.options.4", score: 4 },
    ],
  },
  {
    id: 3,
    question: "quiz.questions.3.question",
    options: [
      { value: "phone-only", label: "quiz.questions.3.options.1", score: 1 },
      { value: "phone-text", label: "quiz.questions.3.options.2", score: 2 },
      { value: "social", label: "quiz.questions.3.options.3", score: 3 },
      { value: "online", label: "quiz.questions.3.options.4", score: 4 },
    ],
  },
  {
    id: 4,
    question: "quiz.questions.4.question",
    options: [
      { value: "15-30min", label: "quiz.questions.4.options.1", score: 1 },
      { value: "30-60min", label: "quiz.questions.4.options.2", score: 2 },
      { value: "1-2h", label: "quiz.questions.4.options.3", score: 3 },
      { value: "2h+", label: "quiz.questions.4.options.4", score: 4 },
    ],
  },
  {
    id: 5,
    question: "quiz.questions.5.question",
    options: [
      { value: "never", label: "quiz.questions.5.options.1", score: 1 },
      { value: "manual", label: "quiz.questions.5.options.2", score: 2 },
      { value: "sometimes", label: "quiz.questions.5.options.3", score: 3 },
      { value: "automated", label: "quiz.questions.5.options.4", score: 4 },
    ],
  },
  {
    id: 6,
    question: "quiz.questions.6.question",
    options: [
      { value: "missing-calls", label: "quiz.questions.6.options.1", score: 4 },
      { value: "scheduling", label: "quiz.questions.6.options.2", score: 3 },
      { value: "no-shows", label: "quiz.questions.6.options.3", score: 2 },
      { value: "pricing", label: "quiz.questions.6.options.4", score: 1 },
    ],
  },
  {
    id: 7,
    question: "quiz.questions.7.question",
    options: [
      { value: "none", label: "quiz.questions.7.options.1", score: 1 },
      { value: "manual", label: "quiz.questions.7.options.2", score: 2 },
      { value: "scheduled", label: "quiz.questions.7.options.3", score: 3 },
      { value: "automated", label: "quiz.questions.7.options.4", score: 4 },
    ],
  },
  {
    id: 8,
    question: "quiz.questions.8.question",
    options: [
      { value: "5k", label: "quiz.questions.8.options.1", score: 1 },
      { value: "10k", label: "quiz.questions.8.options.2", score: 2 },
      { value: "20k", label: "quiz.questions.8.options.3", score: 3 },
      { value: "20k+", label: "quiz.questions.8.options.4", score: 4 },
    ],
  },
];

export default function AutomationQuiz() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [location, setLocation] = useLocation();

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleAnswer = (score: number, value: string) => {
    setSelectedOption(value);
    setAnswers((prev) => ({ ...prev, [questions[currentQuestion].id]: score }));
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedOption("");
    } else {
      setShowResults(true);
    }
  };

  const previousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
      setSelectedOption("");
    }
  };

  const calculateScore = () => {
    const totalScore = Object.values(answers).reduce(
      (sum, score) => sum + score,
      0
    );
    const maxScore = questions.length * 4;
    return Math.round((totalScore / maxScore) * 100);
  };

  const getScoreAnalysis = (score: number) => {
    if (score >= 80) {
      return {
        levelKey: "high",
        color: "text-green-600",
      };
    } else if (score >= 60) {
      return {
        levelKey: "medium",
        color: "text-orange-600",
      };
    } else {
      return {
        levelKey: "need",
        color: "text-red-600",
      };
    }
  };

  if (showResults) {
    const score = calculateScore();
    const analysis = getScoreAnalysis(score);
    return (
      <div className="section-padding bg-background relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <SparklesCore
            id="tsparticlesquizresults"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={50}
            className="w-full h-full"
            particleColor="#6b7280"
          />
        </div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12 mt-10 md:mt-16">
            <h1 className="text-4xl font-bold mb-4 text-black">
              {t("quiz.results.heading")}
            </h1>
            <div className="w-24 h-1 bg-[#ffcf00] mx-auto mb-6 border-b-2 border-dashed border-[#ffcf00]"></div>
          </div>
          <Card className="bg-black text-white p-8 text-center">
            <CardContent className="p-0">
              <h3 className="text-3xl font-bold mb-4">
                {t("quiz.results.scoreHeading")}
              </h3>
              <div className="text-6xl font-bold mb-2">{score}</div>
              <p className={`text-xl mb-6 ${analysis.color}`}>
                {t(`quiz.results.levels.${analysis.levelKey}`)}
              </p>
              <div className="max-w-2xl mx-auto">
                <p className="mb-6 opacity-90">
                  {t(`quiz.results.recommendations.${analysis.levelKey}`)}
                </p>
                <Button
                  className="px-8 py-3 bg-gray-100 text-black rounded-lg font-bold hover:bg-gray-200 transition-colors"
                  onClick={() => setLocation("/business-intake")}
                >
                  {t("quiz.results.cta")}
                </Button>
                <p className="mt-4 text-sm opacity-75">
                  {t("quiz.results.ctaSub")}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }
  return (
    <div
      className={`min-h-screen bg-background relative overflow-hidden pt-20 md:pt-28 pb-8 px-2 md:px-0${
        isArabic ? " font-cairo" : ""
      } text-black`}
      dir={isArabic ? "rtl" : "ltr"}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <SparklesCore
          id="tsparticlesquiz"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={50}
          className="w-full h-full"
          particleColor="#6b7280"
        />
      </div>
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12 mt-10 md:mt-16">
          <h1 className="text-4xl font-bold mb-4 text-black">
            {t("quiz.heading")}
          </h1>
          <div className="w-24 h-1 bg-[#ffcf00] mx-auto mb-6 border-b-2 border-dashed border-[#ffcf00]"></div>
          <p className="text-xl text-black max-w-3xl mx-auto">
            {t("quiz.intro")}
          </p>
        </div>
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm font-medium mb-2">
            <span>
              {t("quiz.progress", {
                current: currentQuestion + 1,
                total: questions.length,
              })}
            </span>
            <span>
              {t("quiz.percentComplete", { percent: Math.round(progress) })}
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
        {/* Quiz Card */}
        <Card className="border-2 border-gray-100 p-8">
          <CardContent className="p-0">
            <div className="quiz-question">
              <h3 className="text-2xl font-bold mb-6 text-black">
                {t(`quiz.questions.${questions[currentQuestion].id}.question`)}
              </h3>
              <div className="space-y-3">
                {questions[currentQuestion].options.map((option, idx) => (
                  <label
                    key={option.value}
                    className={`flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer transition-colors ${
                      selectedOption === option.value
                        ? "bg-[#ffcf00] bg-opacity-10 border-[#ffcf00]"
                        : "hover:bg-[hsl(210,20%,97%)]"
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
                    <span className="ml-3 text-lg text-black">
                      {t(
                        `quiz.questions.${
                          questions[currentQuestion].id
                        }.options.${idx + 1}`
                      )}
                    </span>
                  </label>
                ))}
              </div>
            </div>
            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <Button
                onClick={previousQuestion}
                className={`px-6 py-3 ${
                  currentQuestion === 0 ? "invisible" : ""
                }`}
              >
                {t("quiz.previous")}
              </Button>
              <Button
                onClick={nextQuestion}
                disabled={!selectedOption}
                className="px-6 py-3 bg-[#ffcf00] text-foreground hover:bg-yellow-300"
              >
                {currentQuestion === questions.length - 1
                  ? t("quiz.getResults")
                  : t("quiz.nextQuestion")}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
