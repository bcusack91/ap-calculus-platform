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
  /**
   * The curriculum Course row's slug when it differs from `slug` (the
   * competitive section predates the curriculum's naming: 'ap-physics1' vs
   * 'ap-physics-1'). Lookups by course — the lobby's topic picker — must use
   * this, or they find no course and show "No topics available".
   */
  dbCourseSlug?: string
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
      { slug: 'ap-physics1', categoryKey: 'ap-physics1', dbCourseSlug: 'ap-physics-1', emoji: '🚀', name: 'AP Physics 1', desc: 'Kinematics, Forces & Energy', gradient: 'from-orange-500 to-red-500' },
      { slug: 'ap-physics2', categoryKey: 'ap-physics2', dbCourseSlug: 'ap-physics-2', emoji: '⚡', name: 'AP Physics 2', desc: 'Electricity, Magnetism & Optics', gradient: 'from-yellow-500 to-orange-500' },
      { slug: 'ap-physics-c-mechanics', categoryKey: 'ap-physics-c-mech', emoji: '🔧', name: 'AP Physics C: Mech', desc: 'Calculus-Based Mechanics', gradient: 'from-amber-500 to-orange-500' },
      { slug: 'ap-physics-c-em', categoryKey: 'ap-physics-c-em', emoji: '🧲', name: 'AP Physics C: E&M', desc: 'Calculus-Based E&M', gradient: 'from-amber-500 to-yellow-500' },
      { slug: 'ap-enviro', categoryKey: 'ap-enviro', dbCourseSlug: 'ap-environmental-science', emoji: '🌱', name: 'AP Environmental Science', desc: 'Ecosystems, Climate & Sustainability', gradient: 'from-lime-500 to-green-500' },
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
      { slug: 'ap-human-geo', categoryKey: 'ap-human-geo', dbCourseSlug: 'ap-human-geography', emoji: '🌍', name: 'AP Human Geography', desc: 'Population, Culture & Urbanization', gradient: 'from-emerald-500 to-teal-500' },
      { slug: 'ap-us-gov', categoryKey: 'ap-us-gov', dbCourseSlug: 'ap-us-government', emoji: '🏛️', name: 'AP US Government', desc: 'Constitution, Federalism & Elections', gradient: 'from-blue-600 to-indigo-600' },
      { slug: 'ap-macro', categoryKey: 'ap-macro', dbCourseSlug: 'ap-macroeconomics', emoji: '📈', name: 'AP Macroeconomics', desc: 'GDP, Fiscal & Monetary Policy', gradient: 'from-emerald-600 to-green-600' },
      { slug: 'ap-micro', categoryKey: 'ap-micro', dbCourseSlug: 'ap-microeconomics', emoji: '💰', name: 'AP Microeconomics', desc: 'Supply, Demand & Markets', gradient: 'from-green-600 to-lime-600' },
    ],
  },
  {
    id: 'english',
    label: 'English',
    icon: '📚',
    courses: [
      { slug: 'ap-english-lit', categoryKey: 'ap-english-lit', dbCourseSlug: 'ap-english-literature', emoji: '📖', name: 'AP English Literature', desc: 'Poetry, Prose & Drama Analysis', gradient: 'from-accent to-fuchsia-600' },
      { slug: 'ap-english-lang', categoryKey: 'ap-english-lang', dbCourseSlug: 'ap-english-language', emoji: '✍️', name: 'AP English Language', desc: 'Rhetoric, Argument & Synthesis', gradient: 'from-fuchsia-500 to-pink-500' },
    ],
  },
  {
    id: 'cs',
    label: 'Computer Science',
    icon: '💻',
    courses: [
      { slug: 'ap-csa', categoryKey: 'ap-csa', dbCourseSlug: 'ap-computer-science-a', emoji: '☕', name: 'AP Computer Science A', desc: 'Java OOP, Arrays & Algorithms', gradient: 'from-slate-600 to-gray-700' },
      { slug: 'ap-csp', categoryKey: 'ap-csp', dbCourseSlug: 'ap-computer-science-principles', emoji: '🖥️', name: 'AP CS Principles', desc: 'Data, Internet & Cybersecurity', gradient: 'from-cyan-500 to-blue-500' },
    ],
  },
  {
    id: 'test-prep',
    label: 'Test Prep',
    icon: '📝',
    courses: [
      // SAT has its own section → domain → skill picker at /competitive/sat
      // (no DB Course row needed — the hierarchy comes from the SAT bank).
      { slug: 'sat', categoryKey: 'sat', emoji: '📝', name: 'SAT Prep', desc: 'Both sections · 37 skills', gradient: 'from-blue-600 to-cyan-600' },
      // MCAT has its own section → area → subtopic picker at /competitive/mcat
      // (no DB Course row needed — the hierarchy comes from the MCAT bank).
      { slug: 'mcat', categoryKey: 'mcat', emoji: '🩺', name: 'MCAT Prep', desc: 'All 4 sections · 58 subtopics', gradient: 'from-emerald-600 to-teal-600' },
    ],
  },
]

export const COMPETITIVE_COURSES: CompetitiveCourse[] = COMPETITIVE_COURSE_CATEGORIES.flatMap(c => c.courses)

/** The curriculum Course slug for a competitive course slug (unknown slugs pass through). */
export function curriculumCourseSlug(competitiveSlug: string): string {
  return COMPETITIVE_COURSES.find((c) => c.slug === competitiveSlug)?.dbCourseSlug ?? competitiveSlug
}
