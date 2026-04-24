/**
 * Shared course metadata — icons, descriptions, gradients, and sections.
 * Used by the homepage, /topics, navbar, footer, and anywhere courses are displayed.
 */
export const courseMeta: Record<
  string,
  { icon: string; description: string; gradient: string; section: string }
> = {
  'grade-4-math': { icon: '4️⃣', description: 'Multiplication, division, fractions, decimals', gradient: 'from-pink-500 to-rose-500', section: 'Middle School Math (Grades 4-8)' },
  'grade-5-math': { icon: '5️⃣', description: 'Place value, fractions, volume, coordinates', gradient: 'from-rose-500 to-red-500', section: 'Middle School Math (Grades 4-8)' },
  'grade-6-math': { icon: '6️⃣', description: 'Ratios, rates, integers, geometry basics', gradient: 'from-red-500 to-orange-500', section: 'Middle School Math (Grades 4-8)' },
  'grade-7-math': { icon: '7️⃣', description: 'Rational numbers, proportions, percents', gradient: 'from-orange-500 to-amber-500', section: 'Middle School Math (Grades 4-8)' },
  'grade-8-math': { icon: '8️⃣', description: 'Exponents, linear functions, geometry', gradient: 'from-amber-500 to-yellow-500', section: 'Middle School Math (Grades 4-8)' },
  'pre-algebra': { icon: '🔢', description: 'Integers, fractions, basic equations', gradient: 'from-yellow-500 to-lime-500', section: 'High School Math (Grades 9-12)' },
  'algebra-1': { icon: '📊', description: 'Linear equations, functions, quadratics', gradient: 'from-sky-600 to-blue-600', section: 'High School Math (Grades 9-12)' },
  'geometry': { icon: '📐', description: 'Shapes, angles, proofs, spatial reasoning', gradient: 'from-emerald-600 to-green-600', section: 'High School Math (Grades 9-12)' },
  'algebra-2': { icon: '🔣', description: 'Advanced functions, exponentials, logs', gradient: 'from-cyan-600 to-teal-600', section: 'High School Math (Grades 9-12)' },
  'ap-precalculus': { icon: '📈', description: 'Functions, trig, vectors, matrices', gradient: 'from-blue-600 to-indigo-600', section: 'High School Math (Grades 9-12)' },
  'ap-calculus-ab': { icon: '∫', description: 'Limits, derivatives, integrals, applications', gradient: 'from-purple-600 to-violet-600', section: 'High School Math (Grades 9-12)' },
  'ap-calculus-bc': { icon: '∬', description: 'Series, parametric, polar, advanced integration', gradient: 'from-violet-600 to-purple-600', section: 'High School Math (Grades 9-12)' },
  'ap-statistics': { icon: '📊', description: 'Data, probability, statistical inference', gradient: 'from-pink-600 to-rose-600', section: 'High School Math (Grades 9-12)' },
  'ap-physics-1': { icon: '⚛️', description: 'Mechanics, waves, basic circuits', gradient: 'from-green-600 to-emerald-600', section: 'AP Sciences' },
  'ap-physics-2': { icon: '🔬', description: 'Fluids, thermodynamics, E&M, modern', gradient: 'from-teal-600 to-cyan-600', section: 'AP Sciences' },
  'ap-physics-c-mechanics': { icon: '🎯', description: 'Calculus-based mechanics', gradient: 'from-indigo-600 to-purple-600', section: 'AP Sciences' },
  'ap-physics-c-em': { icon: '⚡', description: 'Electricity, magnetism, induction', gradient: 'from-violet-600 to-fuchsia-600', section: 'AP Sciences' },
  'ap-chemistry': { icon: '🧪', description: 'Atomic structure, bonding, equilibrium', gradient: 'from-orange-600 to-red-600', section: 'AP Sciences' },
  'ap-biology': { icon: '🧬', description: 'Cells, genetics, evolution, ecology', gradient: 'from-rose-600 to-pink-600', section: 'AP Sciences' },
  'ap-psychology': { icon: '🧠', description: 'Behavior, cognition, development, disorders', gradient: 'from-amber-600 to-orange-600', section: 'AP Sciences' },
  'organic-chemistry': { icon: '⚗️', description: 'Structure, reactions, synthesis, spectroscopy', gradient: 'from-lime-600 to-green-600', section: 'AP Sciences' },
  'ap-environmental-science': { icon: '🌍', description: 'Ecosystems, biodiversity, pollution, sustainability', gradient: 'from-green-600 to-teal-600', section: 'AP Sciences' },
  'ap-human-geography': { icon: '🗺️', description: 'Population, migration, culture, urbanization', gradient: 'from-sky-600 to-indigo-600', section: 'AP Social Sciences' },
  'ap-us-government': { icon: '🏛️', description: 'Constitution, branches, civil liberties, politics', gradient: 'from-red-600 to-blue-600', section: 'AP Social Sciences' },
  'ap-world-history': { icon: '🌏', description: 'Civilizations, trade, empires, revolutions', gradient: 'from-amber-600 to-red-600', section: 'AP Social Sciences' },
  'ap-us-history': { icon: '🇺🇸', description: 'Colonial era through modern America', gradient: 'from-blue-600 to-red-600', section: 'AP Social Sciences' },
  'ap-macroeconomics': { icon: '📈', description: 'GDP, inflation, fiscal & monetary policy', gradient: 'from-emerald-600 to-cyan-600', section: 'AP Social Sciences' },
  'ap-microeconomics': { icon: '📉', description: 'Supply, demand, market structures, trade', gradient: 'from-teal-600 to-blue-600', section: 'AP Social Sciences' },
  'ap-african-american-studies': { icon: '✊', description: 'History, culture, politics, movements', gradient: 'from-yellow-600 to-green-600', section: 'AP Social Sciences' },
  'ap-english-literature': { icon: '📖', description: 'Poetry, prose, drama, literary analysis', gradient: 'from-rose-600 to-purple-600', section: 'AP English' },
  'ap-english-language': { icon: '✍️', description: 'Rhetoric, argument, synthesis, composition', gradient: 'from-indigo-600 to-violet-600', section: 'AP English' },
  'ap-computer-science-a': { icon: '💻', description: 'Java programming, OOP, data structures', gradient: 'from-gray-600 to-blue-600', section: 'AP Computer Science' },
  'ap-computer-science-principles': { icon: '🖥️', description: 'Computing, internet, data, algorithms', gradient: 'from-cyan-600 to-purple-600', section: 'AP Computer Science' },
  'sat-prep': { icon: '📝', description: 'Math, Reading, Writing strategies', gradient: 'from-blue-600 to-cyan-600', section: 'Test Prep' },
  'act-prep': { icon: '📋', description: 'Math, English, Reading, Science', gradient: 'from-purple-600 to-pink-600', section: 'Test Prep' },
  'mcat-prep': { icon: '🏥', description: 'Chem/Phys, CARS, Bio/Biochem, Psych/Soc', gradient: 'from-emerald-600 to-teal-600', section: 'Test Prep' },
}

export const defaultCourseMeta = {
  icon: '📚',
  description: '',
  gradient: 'from-purple-600 to-blue-600',
  section: 'Other',
}

export const sectionOrder = [
  'Middle School Math (Grades 4-8)',
  'High School Math (Grades 9-12)',
  'AP Sciences',
  'AP Social Sciences',
  'AP English',
  'AP Computer Science',
  'Test Prep',
  'Other',
]

/**
 * Get metadata for a given course slug, falling back to defaults.
 */
export function getCourseMetadata(slug: string) {
  return courseMeta[slug] ?? defaultCourseMeta
}

/**
 * Maps course DB slugs to their dedicated hub page paths.
 * Courses listed here will link to their hub page instead of /courses/[slug].
 */
export const courseHubPaths: Record<string, string> = {
  // AP courses
  'ap-african-american-studies': '/ap-african-american-studies',
  'ap-biology': '/ap-biology',
  'ap-calculus-ab': '/ap-calculus-ab',
  'ap-calculus-bc': '/ap-calculus-bc',
  'ap-chemistry': '/ap-chemistry',
  'ap-computer-science-a': '/ap-computer-science-a',
  // NOTE: DB slug uses "principles" but the route folder is /ap-cs-principles
  'ap-computer-science-principles': '/ap-cs-principles',
  'ap-english-language': '/ap-english-language',
  'ap-english-literature': '/ap-english-literature',
  'ap-environmental-science': '/ap-environmental-science',
  'ap-human-geography': '/ap-human-geography',
  'ap-macroeconomics': '/ap-macroeconomics',
  'ap-microeconomics': '/ap-microeconomics',
  'ap-physics-1': '/ap-physics-1',
  'ap-physics-2': '/ap-physics-2',
  'ap-physics-c-em': '/ap-physics-c-em',
  'ap-physics-c-mechanics': '/ap-physics-c-mechanics',
  'ap-precalculus': '/ap-precalculus',
  'ap-psychology': '/ap-psychology',
  'ap-statistics': '/ap-statistics',
  'ap-us-government': '/ap-us-government',
  'ap-us-history': '/ap-us-history',
  'ap-world-history': '/ap-world-history',
  // Math courses
  'algebra-1': '/algebra-1',
  'algebra-2': '/algebra-2',
  'geometry': '/geometry',
  'pre-algebra': '/pre-algebra',
  'grade-4-math': '/grade-4-math',
  'grade-5-math': '/grade-5-math',
  'grade-6-math': '/grade-6-math',
  'grade-7-math': '/grade-7-math',
  'grade-8-math': '/grade-8-math',
  // Other
  'organic-chemistry': '/organic-chemistry',
  'sat-prep': '/sat',
  'act-prep': '/act',
  'mcat-prep': '/mcat',
}

/**
 * Returns the best link for a course: hub page if it has one, otherwise /courses/[slug].
 */
export function getCourseHref(slug: string): string {
  return courseHubPaths[slug] ?? `/courses/${slug}`
}
