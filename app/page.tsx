import Link from "next/link";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { mockCourses } from "@/lib/mock/courses";

export default function Home() {
  const featuredCourses = mockCourses.slice(0, 3);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="container py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-accent-900">
          Earn College Credits Online
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          Take accredited courses, pass the exam, and earn official college
          credits that transfer to universities nationwide.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/signup">
            <Button size="lg">Create account free</Button>
          </Link>
          <Link href="/courses">
            <Button size="lg" variant="outline">
              Browse courses
            </Button>
          </Link>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50 py-20">
        <div className="container">
          <h2 className="section-title text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                number: "1",
                title: "Choose a course",
                description:
                  "Browse our catalog of university-accredited courses designed for credit transfer.",
              },
              {
                number: "2",
                title: "Learn & study",
                description:
                  "Complete course materials at your own pace with access to instructor support.",
              },
              {
                number: "3",
                title: "Pass the exam",
                description:
                  "Take a proctored exam and demonstrate your mastery of the subject.",
              },
              {
                number: "4",
                title: "Earn credits",
                description:
                  "Receive official college credits immediately upon passing.",
              },
              {
                number: "5",
                title: "Transfer",
                description:
                  "Send your transcript to your target university for credit transfer.",
              },
              {
                number: "6",
                title: "Graduate faster",
                description:
                  "Complete your degree on your timeline with credits from DAC.",
              },
            ].map((step, i) => (
              <div key={i} className="text-center">
                <div className="inline-block w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="container py-20">
        <h2 className="section-title text-center mb-12">Popular Courses</h2>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {featuredCourses.map((course) => (
            <Card key={course.id} hoverable>
              <div className="bg-gradient-to-br from-primary-100 to-primary-50 h-32 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-4xl font-bold text-primary-200">
                  {course.title.charAt(0)}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                {course.description}
              </p>
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-xs text-gray-500 mb-1">Credits</p>
                  <p className="text-2xl font-bold text-primary-600">
                    {course.creditsEarned}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-500 mb-1">Price</p>
                  <p className="text-lg font-semibold">
                    ${(course.priceCents / 100).toFixed(2)}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
        <div className="text-center">
          <Link href="/courses">
            <Button variant="outline">View all courses</Button>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-600 text-white py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to start?</h2>
          <p className="text-lg mb-6 opacity-90">
            Join thousands of students earning college credits online.
          </p>
          <Link href="/signup">
            <Button size="lg" className="bg-white text-primary-600 hover:bg-gray-100">
              Sign up now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}