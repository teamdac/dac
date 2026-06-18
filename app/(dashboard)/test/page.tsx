"use client";

import { useState } from "react";
import Link from "next/link";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";

type Step = "checklist" | "instructions" | "test" | "results";

const mockQuestions = [
  {
    id: 1,
    question: "What is the capital of France?",
    options: ["London", "Paris", "Berlin", "Madrid"],
    correct: 1,
  },
  {
    id: 2,
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    correct: 1,
  },
  {
    id: 3,
    question: "Who wrote Romeo and Juliet?",
    options: ["Jane Austen", "William Shakespeare", "Mark Twain", "Charles Dickens"],
    correct: 1,
  },
];

export default function TestPage() {
  const [step, setStep] = useState<Step>("checklist");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [score, setScore] = useState(0);

  const handleStartTest = () => {
    setAnswers(new Array(mockQuestions.length).fill(-1));
    setStep("instructions");
  };

  const handleBeginTest = () => {
    setStep("test");
  };

  const handleAnswer = (optionIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = optionIndex;
    setAnswers(newAnswers);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < mockQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmitTest = () => {
    // Calculate score
    let correct = 0;
    answers.forEach((answer, index) => {
      if (answer === mockQuestions[index].correct) {
        correct++;
      }
    });
    const testScore = Math.round((correct / mockQuestions.length) * 100);
    setScore(testScore);
    setStep("results");
  };

  // STEP 1: Checklist
  if (step === "checklist") {
    return (
      <div className="max-w-2xl mx-auto px-8 py-12">
        <h1 className="text-3xl font-bold mb-8">College Algebra - Proctored Exam</h1>
        <Card>
          <h2 className="text-2xl font-bold mb-6">Pre-Exam Checklist</h2>
          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-3">
              <input type="checkbox" className="w-5 h-5 mt-1" defaultChecked />
              <div>
                <p className="font-semibold">Quiet Testing Environment</p>
                <p className="text-sm text-gray-600">Ensure you're in a quiet room with no distractions</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <input type="checkbox" className="w-5 h-5 mt-1" defaultChecked />
              <div>
                <p className="font-semibold">Camera & Microphone</p>
                <p className="text-sm text-gray-600">Test your webcam and microphone before starting</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <input type="checkbox" className="w-5 h-5 mt-1" defaultChecked />
              <div>
                <p className="font-semibold">Valid ID Ready</p>
                <p className="text-sm text-gray-600">Have your government-issued ID ready for verification</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <input type="checkbox" className="w-5 h-5 mt-1" defaultChecked />
              <div>
                <p className="font-semibold">Stable Internet Connection</p>
                <p className="text-sm text-gray-600">Ensure you have a reliable internet connection</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <input type="checkbox" className="w-5 h-5 mt-1" defaultChecked />
              <div>
                <p className="font-semibold">No External Resources</p>
                <p className="text-sm text-gray-600">You may not use books, notes, or other materials</p>
              </div>
            </div>
          </div>
          <Button fullWidth onClick={handleStartTest}>
            I Understand - Continue
          </Button>
        </Card>
      </div>
    );
  }

  // STEP 2: Instructions
  if (step === "instructions") {
    return (
      <div className="max-w-2xl mx-auto px-8 py-12">
        <h1 className="text-3xl font-bold mb-8">Exam Instructions</h1>
        <Card>
          <h2 className="text-2xl font-bold mb-6">Important Information</h2>
          <div className="space-y-6 mb-8">
            <div>
              <h3 className="font-semibold mb-2">Test Duration</h3>
              <p className="text-gray-700">You have 60 minutes to complete this exam.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Number of Questions</h3>
              <p className="text-gray-700">{mockQuestions.length} questions</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Passing Score</h3>
              <p className="text-gray-700">You must score 70% or higher to pass.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Proctoring</h3>
              <p className="text-gray-700">
                Your exam will be monitored via webcam. You must remain visible on camera at all times. Any suspicious
                activity may result in exam termination.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Review</h3>
              <p className="text-gray-700">You can review and change your answers before submitting.</p>
            </div>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8">
            <p className="text-sm font-semibold text-yellow-900">
              ⚠️ By clicking "Start Exam", you confirm you understand and agree to follow all exam rules.
            </p>
          </div>
          <Button fullWidth onClick={handleBeginTest}>
            Start Exam
          </Button>
        </Card>
      </div>
    );
  }

  // STEP 3: Test Questions
  if (step === "test") {
    const question = mockQuestions[currentQuestion];
    const answeredCount = answers.filter((a) => a !== -1).length;

    return (
      <div className="max-w-3xl mx-auto px-8 py-12">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold">
              Question {currentQuestion + 1} of {mockQuestions.length}
            </h1>
            <p className="text-gray-600">Time: 45:32</p>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-primary-500 h-2 rounded-full transition-all"
              style={{ width: `${((currentQuestion + 1) / mockQuestions.length) * 100}%` }}
            ></div>
          </div>
        </div>

        <Card className="mb-8">
          <h2 className="text-xl font-semibold mb-6">{question.question}</h2>
          <div className="space-y-3">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                  answers[currentQuestion] === index
                    ? "border-primary-500 bg-primary-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      answers[currentQuestion] === index
                        ? "border-primary-500 bg-primary-500"
                        : "border-gray-300"
                    }`}
                  >
                    {answers[currentQuestion] === index && <div className="w-2 h-2 bg-white rounded-full"></div>}
                  </div>
                  <p className="font-medium">{option}</p>
                </div>
              </button>
            ))}
          </div>
        </Card>

        <div className="flex gap-4 mb-8">
          <Button variant="secondary" onClick={handlePreviousQuestion} disabled={currentQuestion === 0}>
            Previous
          </Button>
          {currentQuestion === mockQuestions.length - 1 ? (
            <Button fullWidth onClick={handleSubmitTest}>
              Submit Exam
            </Button>
          ) : (
            <Button fullWidth onClick={handleNextQuestion}>
              Next
            </Button>
          )}
        </div>

        <Card>
          <p className="text-sm text-gray-600 mb-4">Question Summary</p>
          <div className="grid grid-cols-5 gap-2">
            {mockQuestions.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentQuestion(index)}
                className={`w-10 h-10 rounded flex items-center justify-center font-semibold transition-all ${
                  index === currentQuestion
                    ? "bg-primary-500 text-white"
                    : answers[index] !== -1
                    ? "bg-green-100 text-green-700 border border-green-300"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </Card>
      </div>
    );
  }

  // STEP 4: Results
  if (step === "results") {
    const passed = score >= 70;

    return (
      <div className="max-w-2xl mx-auto px-8 py-12">
        <Card className={`text-center p-12 ${passed ? "bg-green-50" : "bg-red-50"}`}>
          <h1 className={`text-4xl font-bold mb-4 ${passed ? "text-green-700" : "text-red-700"}`}>
            {passed ? "Exam Passed! 🎉" : "Exam Failed"}
          </h1>
          <p className={`text-lg mb-8 ${passed ? "text-green-600" : "text-red-600"}`}>
            {passed
              ? "Congratulations! You've earned your college credits."
              : "You did not meet the passing score. You may retake the exam."}
          </p>

          <div className="bg-white rounded-lg p-8 mb-8 text-left space-y-4">
            <div className="flex justify-between">
              <p className="text-gray-700">Your Score:</p>
              <p className="text-3xl font-bold text-primary-600">{score}%</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-700">Passing Score:</p>
              <p className="font-semibold">70%</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-700">Questions Correct:</p>
              <p className="font-semibold">
                {answers.filter((a, i) => a === mockQuestions[i].correct).length} / {mockQuestions.length}
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <Link href="/dashboard">
              <Button fullWidth>Go to Dashboard</Button>
            </Link>
            {!passed && (
              <Button variant="secondary" fullWidth onClick={() => setStep("checklist")}>
                Retake Exam
              </Button>
            )}
          </div>
        </Card>
      </div>
    );
  }
}