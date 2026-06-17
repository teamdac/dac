"use client";

import { Card } from "@/components/Card";
import { mockUser, mockCourses } from "@/lib/mock";
import { Button } from "@/components/Button";

export default function CreditsPage() {
  const completedEnrollments = mockUser.enrollments.filter(
    (e) => e.status === "completed"
  );

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">My Credits</h1>

      <Card className="mb-8 bg-blue-50 border-blue-200">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <p className="text-gray-600 text-sm mb-1">Total Credits Earned</p>
            <p className="text-4xl font-bold text-blue-600">
              {mockUser.creditsEarned}
            </p>
          </div>
          <div>
            <p className="text-gray-600 text-sm mb-1">Exams Passed</p>
            <p className="text-4xl font-bold text-blue-600">
              {completedEnrollments.length}
            </p>
          </div>
          <div>
            <p className="text-gray-600 text-sm mb-1">Universities</p>
            <p className="text-4xl font-bold text-blue-600">—</p>
            <p className="text-xs text-gray-500 mt-2">No universities yet</p>
          </div>
        </div>
      </Card>

      <h2 className="text-2xl font-bold mb-4">Your Transcript</h2>
      <Card className="mb-8">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-4 font-semibold text-gray-700">
                Course
              </th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700">
                Grade
              </th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700">
                Credits
              </th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700">
                Date
              </th>
            </tr>
          </thead>
          <tbody>
            {completedEnrollments.map((enrollment) => {
              const course = mockCourses.find((c) => c.id === enrollment.courseId);
              return (
                <tr key={enrollment.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4">{course?.title}</td>
                  <td className="py-3 px-4">
                    <span className="text-green-600 font-semibold">
                      {enrollment.testScore}%
                    </span>
                  </td>
                  <td className="py-3 px-4">{course?.creditsEarned}</td>
                  <td className="py-3 px-4 text-gray-600">
                    {new Date(enrollment.completedDate!).toLocaleDateString()}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>

      <h2 className="text-2xl font-bold mb-4">Send to University</h2>
      <Card>
        <p className="text-gray-600 mb-6">
          Ready to transfer your credits? Select a university and we'll send your official transcript.
        </p>
        <div className="space-y-3">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select university
            </label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Choose a university...</option>
              <option>University of California</option>
              <option>Harvard University</option>
              <option>NYU</option>
              <option>Stanford University</option>
              <option>Other...</option>
            </select>
          </div>
          <div className="flex gap-4">
            <Button>Send transcript</Button>
            <Button variant="outline">Print PDF</Button>
          </div>
        </div>
      </Card>
    </div>
  );
}