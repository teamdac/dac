"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import type { Course } from "@/lib/types";

export default function CoursePage() {
  const params = useParams();
  const courseId = String(params.id);
  const [course, setCourse] = useState<Course | null>(null);
  useEffect(() => {
    fetch("/api/courses")
      .then((r) => r.json())
      .then((all: Course[]) => setCourse(all.find((c) => c.id === courseId) ?? null));
  }, [courseId]);
  const enrollment = course ? { courseId, status: "active" } : null;

  if (!course || !enrollment) {
    return (
      <div className="max-w-4xl mx-auto px-8 py-12">
        <h1 className="text-3xl font-bold text-red-600">Course not found</h1>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-8 py-12 space-y-8">
      {/* Header */}
      <div className="bg-primary-50 p-8 rounded-lg">
        <Link href="/courses" className="text-primary-600 hover:text-primary-700 mb-4 block">
          ← Back to courses
        </Link>
        <h1 className="text-4xl font-bold mb-2">{course.title}</h1>
        <p className="text-lg text-gray-600">{course.description}</p>
      </div>

      {/* Main Content */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="md:col-span-2 space-y-6">
          <Card>
            <h2 className="text-2xl font-bold mb-4">Course Information</h2>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-600">Duration</p>
                <p className="text-lg font-semibold">{course.duration}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Credits Available</p>
                <p className="text-lg font-semibold">{course.creditsEarned} Credits</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Your Status</p>
                <p className="text-lg font-semibold capitalize">{enrollment.status}</p>
              </div>
            </div>
          </Card>

          <Card>
            <h2 className="text-2xl font-bold mb-4">What You'll Learn</h2>
            <p className="text-gray-700 leading-relaxed">
              This course provides comprehensive coverage of the subject matter. You'll gain
              practical knowledge and skills applicable to real-world scenarios. Upon
              successful completion and passing the proctored exam, you'll earn official
              college credits transferable to most universities.
            </p>
          </Card>

          <Card>
            <h2 className="text-2xl font-bold mb-4">Course Structure</h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-primary-500 text-white flex items-center justify-center font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <p className="font-semibold">Study Materials</p>
                  <p className="text-sm text-gray-600">Access comprehensive course materials</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-primary-500 text-white flex items-center justify-center font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <p className="font-semibold">Practice Exams</p>
                  <p className="text-sm text-gray-600">Take practice tests to prepare</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-primary-500 text-white flex items-center justify-center font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <p className="font-semibold">Proctored Exam</p>
                  <p className="text-sm text-gray-600">Take the official proctored exam</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-primary-500 text-white flex items-center justify-center font-bold flex-shrink-0">
                  4
                </div>
                <div>
                  <p className="font-semibold">Earn Credits</p>
                  <p className="text-sm text-gray-600">Receive official college credits</p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Right Column - Sidebar */}
        <div className="md:col-span-1 space-y-6">
         <Card>
  <Button fullWidth variant={enrollment.status === "completed" ? "secondary" : "primary"}>
    {enrollment.status === "completed" ? "View Results" : "Continue Course"}
  </Button>
</Card>

          <Card>
            <h3 className="font-semibold mb-4">Course Details</h3>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-gray-600">Credits</p>
                <p className="font-semibold">{course.creditsEarned}</p>
              </div>
              <div>
                <p className="text-gray-600">Duration</p>
                <p className="font-semibold">{course.duration}</p>
              </div>
              <div>
                <p className="text-gray-600">Passing Score</p>
                <p className="font-semibold">70%</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}