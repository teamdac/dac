import { getCourseById } from "@/lib/mock/courses";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import Link from "next/link";
import { notFound } from "next/navigation";

interface PageProps {
  params: { id: string };
}

export default function CoursePage({ params }: PageProps) {
  const course = getCourseById(params.id);

  if (!course) {
    notFound();
  }

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
        <div className="container">
          <Link href="/courses" className="text-blue-100 hover:text-white mb-4 inline-block">
            ← Back to courses
          </Link>
          <h1 className="text-5xl font-bold mb-4">{course.title}</h1>
          <p className="text-xl opacity-90 max-w-2xl">{course.description}</p>
        </div>
      </section>

      <div className="container py-12 grid md:grid-cols-3 gap-8">
        {/* Main content */}
        <div className="md:col-span-2">
          <Card className="mb-8">
            <h2 className="text-2xl font-bold mb-6">About this course</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">What you'll learn</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Master core concepts and principles</li>
                  <li>Apply knowledge to real-world scenarios</li>
                  <li>Develop critical thinking and analysis skills</li>
                  <li>Prepare for university-level coursework</li>
                </ul>
              </div>

              <div className="pt-6 border-t">
                <h3 className="font-semibold mb-2">Requirements</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>High school diploma or equivalent</li>
                  <li>Computer with internet connection</li>
                  <li>Basic proficiency with word processing</li>
                </ul>
              </div>

              <div className="pt-6 border-t">
                <h3 className="font-semibold mb-2">Course structure</h3>
                <p className="text-gray-700 mb-3">
                  This {course.duration} course includes:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Weekly video lectures</li>
                  <li>Interactive quizzes and assignments</li>
                  <li>Discussion forums with instructors</li>
                  <li>Comprehensive final exam</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card>
            <h2 className="text-2xl font-bold mb-6">How to get started</h2>
            <ol className="list-decimal list-inside space-y-3 text-gray-700">
              <li><strong>Create your account</strong> - Sign up in 2 minutes</li>
              <li><strong>Pay for the course</strong> - Secure payment via Stripe</li>
              <li><strong>Access materials</strong> - Start learning immediately</li>
              <li><strong>Complete assignments</strong> - Progress through course content</li>
              <li><strong>Take the exam</strong> - Proctored test when ready</li>
              <li><strong>Earn credits</strong> - Official transcript issued</li>
            </ol>
          </Card>
        </div>

        {/* Sidebar */}
        <div>
          <Card className="sticky top-20">
            <div className="text-center mb-6">
              <p className="text-4xl font-bold text-blue-600 mb-2">
                ${(course.priceCents / 100).toFixed(2)}
              </p>
              <p className="text-gray-600 text-sm">One-time payment</p>
            </div>

            <hr className="my-6" />

            <div className="space-y-4 mb-6">
              <div>
                <p className="text-sm text-gray-500 mb-1">Course duration</p>
                <p className="font-semibold">{course.duration}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Credits earned</p>
                <p className="font-semibold text-lg text-blue-600">
                  {course.creditsEarned} credits
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Passing score</p>
                <p className="font-semibold">{course.passingScore}%</p>
              </div>
            </div>

            <Link href="/signup" className="block">
              <Button fullWidth>Enroll now</Button>
            </Link>

            <p className="text-xs text-gray-500 text-center mt-4">
              Questions? <a href="#" className="text-blue-600 hover:underline">Contact support</a>
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}