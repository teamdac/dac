"use client";

import { useState } from "react";
import Link from "next/link";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";

interface PageProps {
  params: Promise<{ id: string }>;
}

type TestStep = "checklist" | "instructions" | "test" | "results";

export default async function TestPage({ params }: PageProps) {
  const { id } = await params;
  const [step, setStep] = useState<TestStep>("checklist");
  const [checklist, setChecklist] = useState({
    quiet: false,
    alone: false,
    webcam: false,
    id: false,
  });

  const allChecked = Object.values(checklist).every((v) => v);

  const handleStart = () => {
    if (allChecked) {
      setStep("instructions");
    }
  };

  const handleBeginTest = () => {
    setStep("test");
  };

  const handleComplete = () => {
    setStep("results");
  };

  // Step 1: Pre-test Checklist
  if (step === "checklist") {
    return (
      <div className="max-w-2xl mx-auto">
        <Card>
          <h1 className="text-4xl font-bold mb-2">Before You Start</h1>
          <p className="text-gray-600 mb-8">
            Please complete this checklist to ensure you meet proctoring requirements
          </p>

          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-4 p-4 border border-gray-200 rounded-lg">
              <input
                type="checkbox"
                checked={checklist.quiet}
                onChange={(e) => setChecklist({ ...checklist, quiet: e.target.checked })}
                className="mt-1 w-5 h-5"
              />
              <div>
                <h3 className="font-semibold">Quiet Environment</h3>
                <p className="text-sm text-gray-600">
                  You are in a quiet place with minimal distractions
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 border border-gray-200 rounded-lg">
              <input
                type="checkbox"
                checked={checklist.alone}
                onChange={(e) => setChecklist({ ...checklist, alone: e.target.checked })}
                className="mt-1 w-5 h-5"
              />
              <div>
                <h3 className="font-semibold">You Are Alone</h3>
                <p className="text-sm text-gray-600">
                  No one else is in the room with you
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 border border-gray-200 rounded-lg">
              <input
                type="checkbox"
                checked={checklist.webcam}
                onChange={(e) => setChecklist({ ...checklist, webcam: e.target.checked })}
                className="mt-1 w-5 h-5"
              />
              <div>
                <h3 className="font-semibold">Webcam & Microphone</h3>
                <p className="text-sm text-gray-600">
                  Your webcam and microphone are working and enabled
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 border border-gray-200 rounded-lg">
              <input
                type="checkbox"
                checked={checklist.id}
                onChange={(e) => setChecklist({ ...checklist, id: e.target.checked })}
                className="mt-1 w-5 h-5"
              />
              <div>
                <h3 className="font-semibold">Valid ID Ready</h3>
                <p className="text-sm text-gray-600">
                  You have a government-issued ID ready for verification
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <Link href="/dashboard">
              <Button variant="outline">Cancel</Button>
            </Link>
            <Button onClick={handleStart} disabled={!allChecked}>
              {allChecked ? "Continue to exam" : "Check all items to continue"}
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  // Step 2: Instructions
  if (step === "instructions") {
    return (
      <div className="max-w-2xl mx-auto">
        <Card>
          <h1 className="text-4xl font-bold mb-2">Exam Instructions</h1>
          <p className="text-gray-600 mb-8">
            Please read these instructions carefully before proceeding
          </p>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
            <h3 className="font-bold text-yellow-900 mb-2">⚠️ Important</h3>
            <p className="text-sm text-yellow-800">
              This is a proctored exam. Your webcam will be recording throughout the test. 
              Any suspicious activity may result in exam failure and account review.
            </p>
          </div>

          <div className="space-y-6 mb-8">
            <div>
              <h3 className="font-bold mb-2">Exam Details</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                <li>Total time: 2 hours</li>
                <li>Number of questions: 50</li>
                <li>Passing score: 70%</li>
                <li>Question types: Multiple choice, True/False, Short answer</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-2">Rules</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                <li>No external materials or notes allowed</li>
                <li>No phones, tablets, or other devices</li>
                <li>No leaving the exam room</li>
                <li>No talking or communication with others</li>
                <li>Keep your face visible to the webcam at all times</li>
              </ul>
            </div>
          </div>

          <div className="flex gap-4">
            <Button variant="outline" onClick={() => setStep("checklist")}>
              Back
            </Button>
            <Button onClick={handleBeginTest}>
              I understand. Begin exam
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  // Step 3: Test (Simulated)
  if (step === "test") {
    return (
      <div className="max-w-4xl mx-auto">
        <Card>
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Final Exam</h1>
            <div className="text-right">
              <p className="text-sm text-gray-600">Time remaining</p>
              <p className="text-2xl font-bold text-red-600">1:45:23</p>
            </div>
          </div>

          {/* Simulated exam questions */}
          <div className="space-y-8 mb-8">
            <div className="border-b pb-8">
              <div className="flex justify-between mb-4">
                <h3 className="font-bold">Question 1 of 50</h3>
                <span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded">Progress: 2%</span>
              </div>
              <p className="font-semibold mb-4 text-lg">
                What is the capital of France?
              </p>
              <div className="space-y-3">
                <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                  <input type="radio" name="q1" defaultChecked className="w-4 h-4" />
                  <span>Paris</span>
                </label>
                <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                  <input type="radio" name="q1" className="w-4 h-4" />
                  <span>London</span>
                </label>
                <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                  <input type="radio" name="q1" className="w-4 h-4" />
                  <span>Berlin</span>
                </label>
                <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                  <input type="radio" name="q1" className="w-4 h-4" />
                  <span>Madrid</span>
                </label>
              </div>
            </div>
          </div>

          {/* Note: In a real exam, there would be many more questions. 
              This is just a demo of the first question. */}

          <div className="flex gap-4">
            <Button variant="outline" disabled>
              ← Previous
            </Button>
            <Button onClick={handleComplete}>
              Submit exam
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  // Step 4: Results
  if (step === "results") {
    return (
      <div className="max-w-2xl mx-auto">
        <Card className="text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
              <span className="text-4xl">✓</span>
            </div>
            <h1 className="text-4xl font-bold mb-2 text-green-600">Exam Passed!</h1>
            <p className="text-2xl font-bold mb-6">Your score: 82%</p>
            <p className="text-lg text-gray-600">
              Congratulations! You have earned <span className="font-bold">3 college credits</span> for this course.
            </p>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <h3 className="font-bold text-green-900 mb-2">What happens next?</h3>
            <p className="text-sm text-green-800">
              Your official transcript with credits will be sent to the universities you select within 48 hours.
            </p>
          </div>

          <div className="space-y-4 mb-8">
            <div className="p-4 bg-gray-50 rounded-lg text-left">
              <p className="text-sm text-gray-600 mb-1">Exam Submitted</p>
              <p className="font-semibold">{new Date().toLocaleString()}</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg text-left">
              <p className="text-sm text-gray-600 mb-1">Credits Awarded</p>
              <p className="font-semibold">3 college credits</p>
            </div>
          </div>

          <div className="flex gap-4 justify-center">
            <Link href="/dashboard/credits">
              <Button>View transcript</Button>
            </Link>
            <Link href="/dashboard">
              <Button variant="outline">Back to dashboard</Button>
            </Link>
          </div>
        </Card>
      </div>
    );
  }
}