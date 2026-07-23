// Catalog of courses that support competitive head-to-head play.
//
// SINGLE SOURCE OF TRUTH. /competitive (course grid) and
// /competitive/lobby/[code] (private lobby topic picker) both import this.
// It previously existed twice — an inline copy in /competitive/page.tsx and
// this file — and the copies drifted (the page had algebra-1 + geometry, this
// file had mcat, so MCAT never appeared on the hub). Add courses HERE only.
//
// Adding a course also requires a matching `categoryKey` entry in
// /api/competitive/unlock-check, or the card renders permanently locked.

export interface CompetitiveCourse {
  /** URL slug used by /competitive/{slug} and the course-topics API. */
  slug: string
  /** Category key for unlock-check membership. */
  categoryKey: string
  emoji: string
  name: string
  desc: string
  gradient: string
}

export interface CompetitiveCourseCategory {
  id: string
  label: string
  icon: string
  courses: CompetitiveCourse[]
}

export const COMPETITIVE_COURSE_CATEGORIES: CompetitiveCourseCategory[] = [
  {
    id: 'math',
    label: 'Math',
    icon: '📐',
    courses: [
      { slug: 'ap-calculus-ab', categoryKey: 'ap-calculus-ab', emoji: '∫', name: 'AP Calculus AB', desc: 'Limits, Derivatives & Integrals', gradient: 'from-indigo-500 to-accent' },
      { slug: 'ap-calculus-bc', categoryKey: 'ap-calculus-bc', emoji: '∑', name: 'AP Calculus BC', desc: 'Series, Parametric & Polar', gradient: 'from-accent to-pink-500' },
      { slug: 'ap-precalculus', categoryKey: 'ap-precalculus', emoji: '📊', name: 'AP Precalculus', desc: 'Functions & Modeling', gradient: 'from-blue-500 to-indigo-500' },
      { slug: 'algebra-1', categoryKey: 'algebra', emoji: '🧮', name: 'Algebra 1', desc: 'Equations, Functions & Polynomials', gradient: 'from-blue-500 to-cyan-500' },
      { slug: 'geometry', categoryKey: 'geometry', emoji: '📐', name: 'Geometry', desc: 'Angles, Triangles, Circles & Proofs', gradient: 'from-emerald-500 to-teal-500' },
    ],
  },
  {
    id: 'science',
    label: 'Science',
    icon: '🔬',
    courses: [
      { slug: 'ap-biology', categoryKey: 'ap-biology', emoji: '🧬', name: 'AP Biology', desc: 'Cells, Genetics & Evolution', gradient: 'from-green-500 to-emerald-500' },
      { slug: 'ap-chemistry', categoryKey: 'ap-chemistry', emoji: '⚗️', name: 'AP Chemistry', desc: 'Reactions, Bonding & Equilibrium', gradient: 'from-teal-500 to-cyan-500' },
      { slug: 'ap-physics1', categoryKey: 'ap-physics1', emoji: '🚀', name: 'AP Physics 1', desc: 'Kinematics, Forces & Energy', gradient: 'from-orange-500 to-red-500' },
      { slug: 'ap-physics2', categoryKey: 'ap-physics2', emoji: '⚡', name: 'AP Physics 2', desc: 'Electricity, Magnetism & Optics', gradient: 'from-yellow-500 to-orange-500' },
      { slug: 'ap-physics-c-mechanics', categoryKey: 'ap-physics-c-mech', emoji: '🔧', name: 'AP Physics C: Mech', desc: 'Calculus-Based Mechanics', gradient: 'from-amber-500 to-orange-500' },
      { slug: 'ap-physics-c-em', categoryKey: 'ap-physics-c-em', emoji: '🧲', name: 'AP Physics C: E&M', desc: 'Calculus-Based E&M', gradient: 'from-amber-500 to-yellow-500' },
      { slug: 'ap-enviro', categoryKey: 'ap-enviro', emoji: '🌱', name: 'AP Environmental Science', desc: 'Ecosystems, Climate & Sustainability', gradient: 'from-lime-500 to-green-500' },
    ],
  },
  {
    id: 'history',
    label: 'History & Social Science',
    icon: '🏛️',
    courses: [
      { slug: 'ap-world-history', categoryKey: 'ap-world-history', emoji: '🌐', name: 'AP World History', desc: 'Civilizations, Trade & Conflict', gradient: 'from-rose-500 to-red-500' },
      { slug: 'ap-us-history', categoryKey: 'ap-us-history', emoji: '🇺🇸', name: 'AP US History', desc: 'Colonial Era to Modern America', gradient: 'from-red-500 to-blue-600' },
      { slug: 'ap-african-american-studies', categoryKey: 'ap-african-american-studies', emoji: '✊', name: 'AP African American Studies', desc: 'Culture, Identity & Resistance', gradient: 'from-amber-600 to-yellow-600' },
      { slug: 'ap-human-geo', categoryKey: 'ap-human-geo', emoji: '🌍', name: 'AP Human Geography', desc: 'Population, Culture & Urbanization', gradient: 'from-emerald-500 to-teal-500' },
      { slug: 'ap-us-gov', categoryKey: 'ap-us-gov', emoji: '🏛️', name: 'AP US Government', desc: 'Constitution, Federalism & Elections', gradient: 'from-blue-600 to-indigo-600' },
      { slug: 'ap-macro', categoryKey: 'ap-macro', emoji: '📈', name: 'AP Macroeconomics', desc: 'GDP, Fiscal & Monetary Policy', gradient: 'from-emerald-600 to-green-600' },
      { slug: 'ap-micro', categoryKey: 'ap-micro', emoji: '💰', name: 'AP Microeconomics', desc: 'Supply, Demand & Markets', gradient: 'from-green-600 to-lime-600' },
    ],
  },
  {
    id: 'english',
    label: 'English',
    icon: '📚',
    courses: [
      { slug: 'ap-english-lit', categoryKey: 'ap-english-lit', emoji: '📖', name: 'AP English Literature', desc: 'Poetry, Prose & Drama Analysis', gradient: 'from-accent to-fuchsia-600' },
      { slug: 'ap-english-lang', categoryKey: 'ap-english-lang', emoji: '✍️', name: 'AP English Language', desc: 'Rhetoric, Argument & Synthesis', gradient: 'from-fuchsia-500 to-pink-500' },
    ],
  },
  {
    id: 'cs',
    label: 'Computer Science',
    icon: '💻',
    courses: [
      { slug: 'ap-csa', categoryKey: 'ap-csa', emoji: '☕', name: 'AP Computer Science A', desc: 'Java OOP, Arrays & Algorithms', gradient: 'from-slate-600 to-gray-700' },
      { slug: 'ap-csp', categoryKey: 'ap-csp', emoji: '🖥️', name: 'AP CS Principles', desc: 'Data, Internet & Cybersecurity', gradient: 'from-cyan-500 to-blue-500' },
    ],
  },
  {
    id: 'test-prep',
    label: 'Test Prep',
    icon: '📝',
    courses: [
      // 'sat' has no DB Course row — the course-topics API special-cases it and
      // returns the 4 SAT competitive banks as synthetic topics.
      { slug: 'sat', categoryKey: 'sat', emoji: '📝', name: 'SAT Prep', desc: 'Math, Reading & Punctuation', gradient: 'from-blue-600 to-cyan-600' },
      // MCAT has its own section → area → subtopic picker at /competitive/mcat
      // (no DB Course row needed — the hierarchy comes from the MCAT bank).
      { slug: 'mcat', categoryKey: 'mcat', emoji: '🩺', name: 'MCAT Prep', desc: 'All 4 sections · 55 subtopics', gradient: 'from-emerald-600 to-teal-600' },
    ],
  },
]

export const COMPETITIVE_COURSES: CompetitiveCourse[] = COMPETITIVE_COURSE_CATEGORIES.flatMap(c => c.courses)
