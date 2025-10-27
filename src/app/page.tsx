import Link from "next/link";
import { AdBanner } from "@/components/ad-banner";

const courses = [
  {
    slug: 'ap-calculus-ab-bc',
    name: 'AP Calculus AB/BC',
    icon: '∫',
    description: 'Limits, derivatives, integrals, series, and more',
    gradient: 'from-purple-600 to-blue-600'
  },
  {
    slug: 'ap-precalculus',
    name: 'AP Precalculus',
    icon: '📐',
    description: 'Functions, trigonometry, vectors, and complex numbers',
    gradient: 'from-blue-600 to-cyan-600'
  },
  {
    slug: 'ap-physics-1',
    name: 'AP Physics 1',
    icon: '⚛️',
    description: 'Mechanics, waves, and basic circuits',
    gradient: 'from-green-600 to-emerald-600'
  },
  {
    slug: 'ap-physics-2',
    name: 'AP Physics 2',
    icon: '🔬',
    description: 'Fluids, thermodynamics, E&M, and modern physics',
    gradient: 'from-teal-600 to-cyan-600'
  },
  {
    slug: 'ap-physics-c-mechanics',
    name: 'AP Physics C: Mechanics',
    icon: '🎯',
    description: 'Calculus-based mechanics and kinematics',
    gradient: 'from-indigo-600 to-purple-600'
  },
  {
    slug: 'ap-physics-c-em',
    name: 'AP Physics C: E&M',
    icon: '⚡',
    description: 'Electricity, magnetism, and electromagnetic induction',
    gradient: 'from-violet-600 to-fuchsia-600'
  },
  {
    slug: 'ap-chemistry',
    name: 'AP Chemistry',
    icon: '🧪',
    description: 'Atomic structure, bonding, reactions, and equilibrium',
    gradient: 'from-orange-600 to-red-600'
  },
  {
    slug: 'ap-biology',
    name: 'AP Biology',
    icon: '🧬',
    description: 'Cells, genetics, evolution, and ecology',
    gradient: 'from-rose-600 to-pink-600'
  }
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 py-20 sm:py-32">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600">
              Master AP Science & Math
            </h1>
            <p className="mt-4 text-base font-semibold tracking-wide uppercase text-purple-700">
              Daily bites. Big Wins.
            </p>
            <p className="mt-3 text-lg leading-8 text-gray-600">
              Free notes, flashcards, and practice problems for AP Calculus, Physics, Chemistry, and Biology.
            </p>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Choose Your Course
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Select a course to explore comprehensive study materials
            </p>
          </div>
          
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {courses.map((course) => (
                <Link
                  key={course.slug}
                  href={`/courses/${course.slug}`}
                  className="group relative flex flex-col rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:shadow-xl hover:scale-105 hover:border-transparent"
                >
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${course.gradient} opacity-0 transition-opacity group-hover:opacity-5`}></div>
                  <div className="relative">
                    <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${course.gradient} text-white text-3xl font-bold`}>
                      {course.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {course.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {course.description}
                    </p>
                    <div className="mt-4 flex items-center text-sm font-semibold">
                      <span className={`bg-gradient-to-r ${course.gradient} bg-clip-text text-transparent`}>
                        Explore Course →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ad Banner */}
      <div className="container py-8">
        <AdBanner slot="homepage-banner" />
      </div>

      {/* Features Section */}
      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to succeed
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Whether you&apos;re just starting or preparing for the AP exam, we&apos;ve got you covered.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-5xl">
            <dl className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3">
              <div className="flex flex-col">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-purple-600">
                    <span className="text-white text-xl">📝</span>
                  </div>
                  Comprehensive Notes
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">Clear, detailed text explanations for every topic. Concise, easy to understand, and always free.</p>
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
    </div>
  );
}
