"use client";

import Link from "next/link";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { mockUser, mockCourses } from "@/lib/mock";

export default function DashboardPage() {
  const enrolledCourseIds = mockUser.enrollments.map((e) => e.courseId);
  const enrolledCourses = mockCourses.filter((c) =>
    enrolledCourseIds.includes(c.id)
  );

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Welcome back, {mockUser.fullName}</h1>
        <p className="text-gray-600">
          You've earned {mockUser.creditsEarned} credits so far
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-4 mb-8">
        <Card>
          <p className="text-gray-600 text-sm mb-1">Courses Enrolled</p>
          <p className="text-3xl font-bold text-blue-600">
            {enrolledCourses.length}
          </p>
        </Card>
        <Card>
          <p className="text-gray-600 text-sm mb-1">Credits Earned</p>
          <p className="text-3xl font-bold text-blue-600">
            {mockUser.creditsEarned}
          </p>
        </Card>
        <Card>
          <p className="text-gray-600 text-sm mb-1">In Progress</p>
          <p className="text-3xl font-bold text-blue-600">
            {mockUser.enrollments.filter((e) => e.status === "in-progress").length}
          </p>
        </Card>
        <Card>
          <p className="text-gray-600 text-sm mb-1">Completed</p>
          <p className="text-3xl font-bold text-blue-600">
            {mockUser.enrollments.filter((e) => e.status === "completed").length}
          </p>
        </Card>
      </div>

      <h2 className="text-2xl font-bold mb-4">My Courses</h2>
      <div className="space-y-4">
        {enrolledCourses.length === 0 ? (
          <Card>
            <p className="text-gray-600 mb-4">You haven't enrolled in any courses yet.</p>
            <Link href="/courses">
              <Button>Browse courses</Button>
            </Link>
          </Card>
        ) : (
          enrolledCourses.map((course) => {
            const enrollment = mockUser.enrollments.find(
              (e) => e.courseId === course.id
            );

            return (
              <Card key={course.id}>
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">
                      {course.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{course.description}</p>
                    <div className="flex gap-6 text-sm">
                      <div>
                        <p className="text-gray-500">Status</p>
                        <p className="font-semibold capitalize">
                          {enrollment?.status || "Not started"}
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-500">Credits</p>
                        <p className="font-semibold">{course.creditsEarned}</p>
                      </div>
                      {enrollment?.testScore && (
                        <div>
                          <p className="text-gray-500">Test Score</p>
                          <p className="font-semibold text-green-600">
                            {enrollment.testScore}%
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                  <div>
                    {enrollment?.status === "in-progress" ? (
                      <Link href={`/dashboard/course/${course.id}`}>
                        <Button>Continue</Button>
                      </Link>
                    ) : enrollment?.status === "completed" ? (
                      <span className="text-green-600 font-semibold">✓ Completed</span>
                    ) : (
                      <Link href={`/courses/${course.id}`}>
                        <Button variant="outline">View course</Button>
                      </Link>
                    )}
                  </div>
                </div>
              </Card>
            );
          })
        )}
      </div>

      <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-8 text-center">
        <h3 className="text-xl font-bold mb-2">Want to take another course?</h3>
        <p className="text-gray-600 mb-6">
          Browse our full catalog of university-accredited courses.
        </p>
        <Link href="/courses">
          <Button>Explore all courses</Button>
        </Link>
      </div>
    </div>
  );
}