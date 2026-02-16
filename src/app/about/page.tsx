import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Study Mondo — Free Study Platform",
  description:
    "Learn about Study Mondo's mission to provide free, high-quality study resources for students from Grade 4 through AP and test prep.",
};

const courseList = [
  { section: "Middle School Math", courses: [
    { name: "Grade 4 Math", icon: "4️⃣" },
    { name: "Grade 5 Math", icon: "5️⃣" },
    { name: "Grade 6 Math", icon: "6️⃣" },
    { name: "Grade 7 Math", icon: "7️⃣" },
    { name: "Grade 8 Math", icon: "8️⃣" },
  ]},
  { section: "High School Math", courses: [
    { name: "Pre-Algebra", icon: "🔢" },
    { name: "Algebra 1", icon: "📊" },
    { name: "Geometry", icon: "📐" },
    { name: "Algebra 2", icon: "🔣" },
    { name: "AP Precalculus", icon: "📈" },
    { name: "AP Calculus AB", icon: "∫" },
    { name: "AP Calculus BC", icon: "∬" },
    { name: "AP Statistics", icon: "📊" },
  ]},
  { section: "AP Sciences", courses: [
    { name: "AP Physics 1", icon: "⚛️" },
    { name: "AP Physics 2", icon: "🔬" },
    { name: "AP Physics C: Mechanics", icon: "🎯" },
    { name: "AP Physics C: E&M", icon: "⚡" },
    { name: "AP Chemistry", icon: "🧪" },
    { name: "AP Biology", icon: "🧬" },
    { name: "AP Psychology", icon: "🧠" },
    { name: "Organic Chemistry", icon: "⚗️" },
  ]},
  { section: "Test Prep", courses: [
    { name: "SAT Prep", icon: "📝" },
    { name: "ACT Prep", icon: "📋" },
    { name: "MCAT Prep", icon: "🏥" },
  ]},
];

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600">
              About Study Mondo
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Empowering students with free, comprehensive study materials — from 4th grade through college
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container max-w-4xl">
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                We believe that high-quality educational resources should be accessible to every student,
                regardless of their financial situation. That&apos;s why we created this completely free platform
                to help students master challenging math and science courses.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our comprehensive study materials span 24 courses with 700+ topics, thousands of flashcards,
                interactive lessons, and detailed explanations — all created by educators who understand what
                it takes to succeed.
              </p>
            </div>

            {/* What We Offer */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What We Offer</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
                  <div className="text-3xl mb-4">📚</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Comprehensive Notes</h3>
                  <p className="text-gray-600">
                    Detailed explanations covering every topic across 24 courses, from Grade 4 math to AP sciences
                  </p>
                </div>

                <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
                  <div className="text-3xl mb-4">🎯</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Interactive Lessons</h3>
                  <p className="text-gray-600">
                    Step-by-step interactive lessons with built-in practice exercises and instant feedback
                  </p>
                </div>

                <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
                  <div className="text-3xl mb-4">🎴</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Spaced Repetition Flashcards</h3>
                  <p className="text-gray-600">
                    Thousands of flashcards powered by the SM-2 algorithm to optimize your review schedule
                  </p>
                </div>

                <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
                  <div className="text-3xl mb-4">📝</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Practice Problems</h3>
                  <p className="text-gray-600">
                    Hundreds of example problems with detailed step-by-step solutions
                  </p>
                </div>

                <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
                  <div className="text-3xl mb-4">🎮</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Competitive Mode</h3>
                  <p className="text-gray-600">
                    Challenge AI opponents or other students to test your skills under pressure
                  </p>
                </div>

                <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
                  <div className="text-3xl mb-4">📊</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Progress Tracking</h3>
                  <p className="text-gray-600">
                    Track your mastery across topics, maintain study streaks, and view your learning dashboard
                  </p>
                </div>
              </div>
            </div>

            {/* Courses Covered */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">24 Courses We Cover</h2>
              <div className="space-y-6">
                {courseList.map((section) => (
                  <div key={section.section} className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-6">
                    <h3 className="text-lg font-bold text-purple-900 mb-3">{section.section}</h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {section.courses.map((course) => (
                        <div key={course.name} className="flex items-center gap-3 text-gray-700">
                          <span className="text-xl">{course.icon}</span>
                          <span className="font-medium">{course.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* How It Works */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">How It Works</h2>
              <div className="space-y-4">
                {[
                  { step: 1, title: "Choose Your Course", desc: "Select from 24 courses spanning middle school, high school, AP, and test prep" },
                  { step: 2, title: "Study the Material", desc: "Read comprehensive notes, try interactive lessons, and understand key concepts" },
                  { step: 3, title: "Practice & Review", desc: "Reinforce your learning with flashcards, practice problems, and competitive challenges" },
                  { step: 4, title: "Track Your Progress", desc: "Monitor your mastery, maintain streaks, and watch your understanding grow" },
                ].map(({ step, title, desc }) => (
                  <div key={step} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                      {step}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
                      <p className="text-gray-600">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Funding Model */}
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Stay Free</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our platform is supported by non-intrusive advertisements. We carefully select
                ad partners to ensure they don&apos;t disrupt your learning experience. These ads allow
                us to maintain and improve the platform without charging students.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We&apos;re committed to keeping all educational content free. No hidden fees — just
                free, quality education for everyone.
              </p>
            </div>

            {/* Content Disclaimer */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Important Notice</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Original Content:</strong> All study materials, explanations, and practice problems
                on this platform are original works created by our team of educators. We are not affiliated
                with the College Board.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Trademark Notice:</strong> AP® is a trademark registered by the College Board,
                which is not affiliated with, and does not endorse, this website.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>Supplementary Resource:</strong> This platform is designed as a supplementary
                study tool. We recommend using it alongside official course materials, textbooks,
                and guidance from qualified teachers.
              </p>
            </div>

            {/* Contact CTA */}
            <div className="text-center py-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Have Questions or Feedback?
              </h2>
              <p className="text-gray-600 mb-6">
                We&apos;d love to hear from you! Whether you found a typo, have a suggestion,
                or just want to say thanks, reach out to us.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-lg shadow-lg transition-all"
              >
                Contact Us
              </Link>
            </div>

            {/* Stats */}
            <div className="grid sm:grid-cols-4 gap-6 text-center">
              <div className="p-6">
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                  24
                </div>
                <div className="text-gray-600 mt-2">Courses</div>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                  700+
                </div>
                <div className="text-gray-600 mt-2">Topics</div>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                  1000+
                </div>
                <div className="text-gray-600 mt-2">Practice Problems</div>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                  100%
                </div>
                <div className="text-gray-600 mt-2">Free Forever</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
