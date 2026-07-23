'use client'

import { useState, useEffect }  from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import Link from 'next/link'

interface CourseOption {
  slug: string
  name: string
  icon: string
  description: string
}

const COURSE_GROUPS = [
  {
    label: 'Middle School',
    courses: [
      { slug: 'grade-4-math', name: 'Grade 4 Math', icon: '4️⃣', description: 'Multiplication, division, fractions' },
      { slug: 'grade-5-math', name: 'Grade 5 Math', icon: '5️⃣', description: 'Place value, fractions, volume' },
      { slug: 'grade-6-math', name: 'Grade 6 Math', icon: '6️⃣', description: 'Ratios, rates, integers' },
      { slug: 'grade-7-math', name: 'Grade 7 Math', icon: '7️⃣', description: 'Proportions, percents' },
      { slug: 'grade-8-math', name: 'Grade 8 Math', icon: '8️⃣', description: 'Exponents, linear functions' },
    ],
  },
  {
    label: 'High School',
    courses: [
      { slug: 'pre-algebra', name: 'Pre-Algebra', icon: '🔢', description: 'Integers, fractions, basic equations' },
      { slug: 'algebra-1', name: 'Algebra 1', icon: '📊', description: 'Linear equations, functions' },
      { slug: 'geometry', name: 'Geometry', icon: '📐', description: 'Shapes, angles, proofs' },
      { slug: 'algebra-2', name: 'Algebra 2', icon: '🔣', description: 'Advanced functions, logs' },
      { slug: 'ap-precalculus', name: 'AP Precalculus', icon: '📈', description: 'Functions, trig, vectors' },
    ],
  },
  {
    label: 'AP Math',
    courses: [
      { slug: 'ap-calculus-ab', name: 'AP Calculus AB', icon: '∫', description: 'Limits, derivatives, integrals' },
      { slug: 'ap-calculus-bc', name: 'AP Calculus BC', icon: '∬', description: 'Series, parametric, polar' },
      { slug: 'ap-statistics', name: 'AP Statistics', icon: '📊', description: 'Data, probability, inference' },
    ],
  },
  {
    label: 'AP Sciences',
    courses: [
      { slug: 'ap-physics-1', name: 'AP Physics 1', icon: '⚛️', description: 'Mechanics, waves' },
      { slug: 'ap-chemistry', name: 'AP Chemistry', icon: '🧪', description: 'Atomic structure, bonding' },
      { slug: 'ap-biology', name: 'AP Biology', icon: '🧬', description: 'Cells, genetics, evolution' },
      { slug: 'ap-psychology', name: 'AP Psychology', icon: '🧠', description: 'Behavior, cognition' },
    ],
  },
  {
    label: 'AP History & Social Science',
    courses: [
      { slug: 'ap-us-history', name: 'AP US History', icon: '🇺🇸', description: 'Colonial era to modern day' },
      { slug: 'ap-world-history', name: 'AP World History', icon: '🌍', description: '1200 CE to the present' },
      { slug: 'ap-us-government', name: 'AP US Government', icon: '🏛️', description: 'Constitution, institutions, rights' },
      { slug: 'ap-human-geography', name: 'AP Human Geography', icon: '🗺️', description: 'Population, culture, cities' },
      { slug: 'ap-macroeconomics', name: 'AP Macroeconomics', icon: '📉', description: 'GDP, inflation, policy' },
      { slug: 'ap-microeconomics', name: 'AP Microeconomics', icon: '💹', description: 'Markets, firms, elasticity' },
      { slug: 'ap-african-american-studies', name: 'AP African American Studies', icon: '✊', description: 'History, culture, movements' },
    ],
  },
  {
    label: 'AP English & Computer Science',
    courses: [
      { slug: 'ap-english-language', name: 'AP English Language', icon: '✒️', description: 'Rhetoric, argument, synthesis' },
      { slug: 'ap-english-literature', name: 'AP English Literature', icon: '📚', description: 'Fiction, poetry, drama' },
      { slug: 'ap-computer-science-a', name: 'AP Computer Science A', icon: '💻', description: 'Java, OOP, algorithms' },
      { slug: 'ap-computer-science-principles', name: 'AP CS Principles', icon: '🖥️', description: 'Computing ideas, impacts' },
    ],
  },
  {
    label: 'More AP Sciences',
    courses: [
      { slug: 'ap-physics-2', name: 'AP Physics 2', icon: '🧲', description: 'Fluids, thermo, E&M, optics' },
      { slug: 'ap-physics-c-mechanics', name: 'AP Physics C: Mechanics', icon: '🎯', description: 'Calculus-based mechanics' },
      { slug: 'ap-physics-c-em', name: 'AP Physics C: E&M', icon: '⚡', description: 'Calculus-based E&M' },
      { slug: 'ap-environmental-science', name: 'AP Environmental Science', icon: '🌱', description: 'Ecosystems, energy, pollution' },
    ],
  },
  {
    label: 'Test Prep',
    courses: [
      { slug: 'sat-prep', name: 'SAT Prep', icon: '📝', description: 'Math, Reading, Writing' },
      { slug: 'act-prep', name: 'ACT Prep', icon: '📋', description: 'Math, English, Reading, Science' },
      { slug: 'mcat-prep', name: 'MCAT Prep', icon: '🏥', description: 'Science sections' },
    ],
  },
]

const GOALS = [
  { id: 'just-browsing', label: 'Just exploring', icon: '🔍', description: "I want to look around" },
  { id: 'catch-up', label: 'Catch up', icon: '📚', description: "I'm behind and need to review" },
  { id: 'get-ahead', label: 'Get ahead', icon: '🚀', description: "I want to learn new material" },
  { id: 'exam-prep', label: 'Exam prep', icon: '📝', description: "I have a test coming up" },
]

export default function OnboardingPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [step, setStep] = useState(1) // 1: goal, 2: course pick, 3: confirm
  const [selectedGoal, setSelectedGoal] = useState('')
  const [selectedCourse, setSelectedCourse] = useState<CourseOption | null>(null)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin?callbackUrl=/onboarding')
    }
  }, [status, router])

  const handleComplete = async () => {
    if (!selectedCourse) return
    setSaving(true)
    // The onboarding wizard IS the walkthrough — mark the dashboard tutorial
    // as seen (same localStorage key DashboardTutorial checks) so new users
    // don't get a second back-to-back walkthrough modal.
    localStorage.setItem('dashboard-tutorial-completed', 'true')
    try {
      const res = await fetch('/api/onboarding', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          courseSlug: selectedCourse.slug,
          goalType: selectedGoal,
        }),
      })
      const data = await res.json()
      if (data.firstTopic) {
        router.push(`/topics/${data.firstTopic}`)
      } else {
        router.push(`/courses/${selectedCourse.slug}`)
      }
    } catch {
      router.push('/dashboard')
    } finally {
      setSaving(false)
    }
  }

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-accent-subtle via-white to-blue-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      <div className="container max-w-3xl py-12 px-4">
        {/* Progress Indicator */}
        <div className="flex items-center justify-center gap-2 mb-12">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center gap-2">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all ${
                  step >= s
                    ? 'bg-gradient-to-r from-accent to-accent-secondary text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-500'
                }`}
              >
                {step > s ? '✓' : s}
              </div>
              {s < 3 && (
                <div className={`w-16 h-1 rounded-full ${step > s ? 'bg-accent' : 'bg-gray-200 dark:bg-gray-700'}`} />
              )}
            </div>
          ))}
        </div>

        {/* Step 1: What's your goal? */}
        {step === 1 && (
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3">
              Welcome to Study Mondo, {session?.user?.name?.split(' ')[0] || 'there'}!
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-10">
              What brings you here today?
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto">
              {GOALS.map((goal) => (
                <button
                  key={goal.id}
                  onClick={() => {
                    setSelectedGoal(goal.id)
                    setStep(2)
                  }}
                  className={`p-6 rounded-2xl border-2 text-left transition-all hover:shadow-lg hover:scale-[1.02] ${
                    selectedGoal === goal.id
                      ? 'border-accent bg-accent-subtle dark:bg-accent-light/20'
                      : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-accent-muted'
                  }`}
                >
                  <div className="text-3xl mb-3">{goal.icon}</div>
                  <div className="font-bold text-gray-900 dark:text-white">{goal.label}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">{goal.description}</div>
                </button>
              ))}
            </div>
            <Link href="/dashboard" className="inline-block mt-8 text-sm text-gray-500 dark:text-gray-400 hover:text-accent">
              Skip for now →
            </Link>
          </div>
        )}

        {/* Step 2: Pick your course */}
        {step === 2 && (
          <div>
            <button onClick={() => setStep(1)} className="text-sm text-accent hover:underline mb-6 flex items-center gap-1">
              ← Back
            </button>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3 text-center">
              Which course are you studying?
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-center mb-8">
              We&apos;ll create a personalized study path for you
            </p>
            <div className="space-y-8">
              {COURSE_GROUPS.map((group) => (
                <div key={group.label}>
                  <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                    {group.label}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {group.courses.map((course) => (
                      <button
                        key={course.slug}
                        onClick={() => {
                          setSelectedCourse(course)
                          setStep(3)
                        }}
                        className={`p-4 rounded-xl border-2 text-left transition-all hover:shadow-md ${
                          selectedCourse?.slug === course.slug
                            ? 'border-accent bg-accent-subtle dark:bg-accent-light/20'
                            : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-accent-muted'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{course.icon}</span>
                          <div>
                            <div className="font-semibold text-gray-900 dark:text-white text-sm">{course.name}</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">{course.description}</div>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-6">
              <Link href="/dashboard" className="text-sm text-gray-500 dark:text-gray-400 hover:text-accent">
                Skip for now →
              </Link>
            </div>
          </div>
        )}

        {/* Step 3: Confirm & Go */}
        {step === 3 && selectedCourse && (
          <div className="text-center">
            <button onClick={() => setStep(2)} className="text-sm text-accent hover:underline mb-6 flex items-center gap-1 mx-auto">
              ← Change course
            </button>
            <div className="text-6xl mb-6">{selectedCourse.icon}</div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
              You&apos;re all set!
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-2">
              Starting with <span className="font-semibold text-accent">{selectedCourse.name}</span>
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-10">
              We&apos;ll guide you through the material step by step.
              {selectedGoal === 'exam-prep' && " Focus on practice problems and flashcards for exam prep."}
              {selectedGoal === 'catch-up' && " We'll start from the fundamentals and build up."}
              {selectedGoal === 'get-ahead' && " Let's jump into new concepts!"}
            </p>
            <button
              onClick={handleComplete}
              disabled={saving}
              className="px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-accent to-accent-secondary rounded-xl hover:from-accent-hover hover:to-accent-secondary-hover transition-all shadow-lg hover:shadow-xl disabled:opacity-50"
            >
              {saving ? 'Setting up...' : 'Start Learning →'}
            </button>
            <p className="mt-6 text-xs text-gray-400">
              You can explore any other course anytime from the Courses menu.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
