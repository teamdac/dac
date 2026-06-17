"use client";

import { useState } from "react";
import Link from "next/link";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { mockCourses } from "@/lib/mock/courses";

export default function CoursesPage() {
  const [selectedCredit, setSelectedCredit] = useState<number | null>(null);

  const filtered = selectedCredit
    ? mockCourses.filter((c) => c.creditsEarned === selectedCredit)
    : mockCourses;

  const creditOptions = [...new Set(mockCourses.map((c) => c.creditsEarned))].sort();

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container py-12">
        <h1 className="text-4xl font-bold mb-2">All Courses</h1>
        <p className="text-gray-600 mb-8">
          Choose from {mockCourses.length} accredited courses
        </p>

        {/* Filters */}
        <div className="bg-white p-6 rounded-lg mb-8 border border-gray-200">
          <h3 className="font-semibold mb-4">Filter by credits</h3>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setSelectedCredit(null)}
              className={`px-4 py-2 rounded-lg transition ${
                selectedCredit === null
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              All
            </button>
            {creditOptions.map((credit) => (
              <button
                key={credit}
                onClick={() => setSelectedCredit(credit)}
                className={`px-4 py-2 rounded-lg transition ${
                  selectedCredit === credit
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {credit} credits
              </button>
            ))}
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((course) => (
            <Link key={course.id} href={`/courses/${course.id}`}>
              <Card hoverable className="h-full flex flex-col">
                <div className="bg-gradient-to-br from-blue-100 to-blue-50 h-40 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-5xl font-bold text-blue-200">
                    {course.title.charAt(0)}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-2 flex-grow">
                  {course.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {course.description}
                </p>
                <div className="flex justify-between items-end pt-4 border-t border-gray-100">
                  <div>
                    <p className="text-xs text-gray-500">Credits</p>
                    <p className="text-2xl font-bold text-blue-600">
                      {course.creditsEarned}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500">Price</p>
                    <p className="font-semibold">
                      ${(course.priceCents / 100).toFixed(2)}
                    </p>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}