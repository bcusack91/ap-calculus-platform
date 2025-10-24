import Link from "next/link";
import { AdBanner } from "@/components/ad-banner";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 to-blue-50 py-20 sm:py-32">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
              Master AP Calculus with Confidence
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Free comprehensive notes, example problems, and flashcards. Upgrade to Premium for adaptive learning, video explanations, and spaced-repetition study tools.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/topics"
                className="rounded-md bg-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-purple-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
              >
                Start Learning for Free
              </Link>
              <Link
                href="/premium"
                className="text-sm font-semibold leading-6 text-gray-900 hover:text-purple-600"
              >
                View Premium Features <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to succeed
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Whether you're just starting or preparing for the AP exam, we've got you covered.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-5xl">
            <dl className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3">
              {/* Free Features */}
              <div className="flex flex-col">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-purple-600">
                    <span className="text-white text-xl">📝</span>
                  </div>
                  Comprehensive Notes
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">Clear, detailed text explanations for every AP Calculus topic. Concise, easy to understand, and always free.</p>
                </dd>
              </div>

              <div className="flex flex-col">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-purple-600">
                    <span className="text-white text-xl">🎯</span>
                  </div>
                  Practice Problems
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">Hundreds of example problems with detailed step-by-step solutions to build your skills.</p>
                </dd>
              </div>

              <div className="flex flex-col">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-purple-600">
                    <span className="text-white text-xl">🎴</span>
                  </div>
                  Flashcards
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">Quick review flashcards for every topic. Perfect for exam prep.</p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Ad Banner - Free Tier */}
      <div className="container py-8">
        <AdBanner slot="homepage-banner" />
      </div>

      {/* Premium Features Section */}
      <section className="py-24 sm:py-32 bg-purple-50">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              🌟 Unlock Premium Features
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Take your learning to the next level with adaptive study tools
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-5xl">
            <dl className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3">
              <div className="flex flex-col">
                <dt className="text-base font-semibold leading-7 text-purple-900">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-purple-600">
                    <span className="text-white text-xl">🎥</span>
                  </div>
                  Video Explanations
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-700">
                  <p className="flex-auto">Visual learners rejoice! Watch detailed video explanations for every topic.</p>
                </dd>
              </div>

              <div className="flex flex-col">
                <dt className="text-base font-semibold leading-7 text-purple-900">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-purple-600">
                    <span className="text-white text-xl">🧠</span>
                  </div>
                  Spaced Repetition
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-700">
                  <p className="flex-auto">Anki-style flashcards that adapt to your memory. Never forget what you've learned.</p>
                </dd>
              </div>

              <div className="flex flex-col">
                <dt className="text-base font-semibold leading-7 text-purple-900">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-purple-600">
                    <span className="text-white text-xl">📊</span>
                  </div>
                  Adaptive Learning
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-700">
                  <p className="flex-auto">Take a diagnostic test and get a personalized learning path based on your strengths and weaknesses.</p>
                </dd>
              </div>
            </dl>

            <div className="mt-16 text-center">
              <Link
                href="/premium"
                className="inline-flex items-center justify-center rounded-md bg-purple-600 px-8 py-4 text-base font-semibold text-white shadow-sm hover:bg-purple-700"
              >
                Get Premium for $9.99/month
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Topics Overview */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Calculus Topics Covered
            </h2>
          </div>
          
          <div className="mx-auto mt-16 max-w-5xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Limits and Continuity',
              'Derivatives',
              'Applications of Derivatives',
              'Integrals',
              'Applications of Integrals',
              'Differential Equations',
              'Sequences and Series',
              'Parametric and Polar',
              'Vector Functions'
            ].map((topic) => (
              <div key={topic} className="rounded-lg border p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-gray-900">{topic}</h3>
                <p className="mt-2 text-sm text-gray-600">Complete coverage with examples and practice</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/topics"
              className="text-purple-600 font-semibold hover:text-purple-700"
            >
              Browse all topics →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
