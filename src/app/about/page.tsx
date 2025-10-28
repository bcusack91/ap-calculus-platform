import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Free AP Study Platform",
  description: "Learn about our mission to provide free, high-quality study resources for AP students",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600">
              About Our Platform
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Empowering students with free, comprehensive study materials for AP success
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
                regardless of their financial situation. That's why we created this completely free platform 
                to help AP students master challenging science and math courses.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our comprehensive study materials cover 8 AP courses with hundreds of topics, thousands of flashcards, 
                and detailed explanations—all created by educators who understand what it takes to succeed on AP exams.
              </p>
            </div>

            {/* What We Offer */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What We Offer</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
                  <div className="text-3xl mb-4">📚</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Comprehensive Notes
                  </h3>
                  <p className="text-gray-600">
                    Detailed explanations covering every topic in 8 AP courses, from Calculus to Biology
                  </p>
                </div>

                <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
                  <div className="text-3xl mb-4">🎯</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Practice Flashcards
                  </h3>
                  <p className="text-gray-600">
                    Thousands of flashcards to reinforce key concepts and prepare for exams
                  </p>
                </div>

                <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
                  <div className="text-3xl mb-4">📝</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Example Problems
                  </h3>
                  <p className="text-gray-600">
                    Step-by-step solutions to help you understand problem-solving techniques
                  </p>
                </div>

                <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
                  <div className="text-3xl mb-4">✨</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Quality Content
                  </h3>
                  <p className="text-gray-600">
                    Comprehensive study materials with clear explanations and practice problems
                  </p>
                </div>
              </div>
            </div>

            {/* Courses Covered */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Courses We Cover</h2>
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8">
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { name: "AP Calculus AB/BC", icon: "∫" },
                    { name: "AP Precalculus", icon: "📐" },
                    { name: "AP Physics 1", icon: "⚛️" },
                    { name: "AP Physics 2", icon: "🔬" },
                    { name: "AP Physics C: Mechanics", icon: "🎯" },
                    { name: "AP Physics C: E&M", icon: "⚡" },
                    { name: "AP Chemistry", icon: "🧪" },
                    { name: "AP Biology", icon: "🧬" },
                  ].map((course) => (
                    <div key={course.name} className="flex items-center gap-3 text-gray-700">
                      <span className="text-2xl">{course.icon}</span>
                      <span className="font-medium">{course.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* How It Works */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">How It Works</h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Choose Your Course</h3>
                    <p className="text-gray-600">
                      Select from 8 AP courses in science and math
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Study the Material</h3>
                    <p className="text-gray-600">
                      Read comprehensive notes, watch examples, and understand key concepts
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Practice with Flashcards</h3>
                    <p className="text-gray-600">
                      Reinforce your learning with interactive flashcards
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Ace Your Exam</h3>
                    <p className="text-gray-600">
                      Walk into test day confident and prepared
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Funding Model */}
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                How We Stay Free
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our platform is supported by non-intrusive advertisements. We carefully select 
                ad partners to ensure they don't disrupt your learning experience. These ads allow 
                us to maintain and improve the platform without charging students.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We're committed to keeping all educational content free forever. No hidden fees, 
                no premium tiers—just free, quality education for everyone.
              </p>
            </div>

            {/* Content Disclaimer */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Important Notice
              </h2>
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
                study tool. We recommend using it alongside official College Board materials, textbooks, 
                and guidance from qualified teachers.
              </p>
            </div>

            {/* Contact CTA */}
            <div className="text-center py-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Have Questions or Feedback?
              </h2>
              <p className="text-gray-600 mb-6">
                We'd love to hear from you! Whether you found a typo, have a suggestion, 
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
            <div className="grid sm:grid-cols-3 gap-6 text-center">
              <div className="p-6">
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                  225+
                </div>
                <div className="text-gray-600 mt-2">Topics Covered</div>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                  8
                </div>
                <div className="text-gray-600 mt-2">AP Courses</div>
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
