export interface DiagnosticConfig {
  href: string
  icon: string
  description: string
  borderColor: string
  bgGradient: string
  btnGradient: string
}

export interface SimpleLinkConfig {
  href: string
  label: string
}

export const courseDiagnosticMap: Record<string, DiagnosticConfig> = {
  'act': { href: '/act-diagnostic', icon: '🎯', description: 'Take a diagnostic test to benchmark ACT performance and build a focused plan for your weakest domains.', borderColor: 'border-red-300 dark:border-red-700', bgGradient: 'from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20', btnGradient: 'from-red-600 to-orange-600' },
  'sat': { href: '/sat-diagnostic', icon: '📝', description: 'Take a SAT diagnostic to estimate your baseline score and identify the reading, writing, and math skills to prioritize.', borderColor: 'border-indigo-300 dark:border-indigo-700', bgGradient: 'from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20', btnGradient: 'from-indigo-600 to-blue-600' },
  'mcat': { href: '/mcat-diagnostic', icon: '🩺', description: 'Take an MCAT diagnostic to find your strongest and weakest content areas and target your prep efficiently.', borderColor: 'border-cyan-300 dark:border-cyan-700', bgGradient: 'from-cyan-50 to-sky-50 dark:from-cyan-900/20 dark:to-sky-900/20', btnGradient: 'from-cyan-600 to-sky-600' },
  'ap-chemistry': { href: '/ap-chem-diagnostic', icon: '🧪', description: 'Take a diagnostic test covering all 9 AP Chemistry units. Get a personalized study plan with 3-5 modules to focus on.', borderColor: 'border-orange-300 dark:border-orange-700', bgGradient: 'from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20', btnGradient: 'from-orange-600 to-red-600' },
  'ap-calculus-ab': { href: '/ap-calcab-diagnostic', icon: '∫', description: 'Take a diagnostic test covering all 7 AP Calculus AB units. Get a personalized study plan with 3-5 modules to focus on.', borderColor: 'border-purple-300 dark:border-purple-700', bgGradient: 'from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20', btnGradient: 'from-purple-600 to-violet-600' },
  'ap-calculus-bc': { href: '/ap-calcbc-diagnostic', icon: '∬', description: 'Take a diagnostic test covering AB foundations and BC-exclusive content. Get your BC score, AB subscore, and a personalized study plan.', borderColor: 'border-violet-300 dark:border-violet-700', bgGradient: 'from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20', btnGradient: 'from-violet-600 to-purple-600' },
  'ap-biology': { href: '/ap-bio-diagnostic', icon: '🧬', description: 'Take a diagnostic test covering all AP Biology units. Identify your strengths and get a personalized study plan.', borderColor: 'border-green-300 dark:border-green-700', bgGradient: 'from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20', btnGradient: 'from-green-600 to-emerald-600' },
  'ap-statistics': { href: '/ap-stats-diagnostic', icon: '📊', description: 'Take a diagnostic test covering all AP Statistics units. Find your weak areas and get a targeted study plan.', borderColor: 'border-blue-300 dark:border-blue-700', bgGradient: 'from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20', btnGradient: 'from-blue-600 to-cyan-600' },
  'ap-psychology': { href: '/ap-psych-diagnostic', icon: '🧠', description: 'Take a diagnostic test covering all AP Psychology units. Get a personalized study plan targeting your weak areas.', borderColor: 'border-pink-300 dark:border-pink-700', bgGradient: 'from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20', btnGradient: 'from-pink-600 to-rose-600' },
  'ap-physics-1': { href: '/ap-physics1-diagnostic', icon: '⚡', description: 'Take a diagnostic test covering all AP Physics 1 units. Identify your strengths and get a focused study plan.', borderColor: 'border-indigo-300 dark:border-indigo-700', bgGradient: 'from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20', btnGradient: 'from-indigo-600 to-blue-600' },
  'ap-physics-2': { href: '/ap-physics2-diagnostic', icon: '🔬', description: 'Take a diagnostic test covering all AP Physics 2 units. Find your weak areas and build a targeted study plan.', borderColor: 'border-teal-300 dark:border-teal-700', bgGradient: 'from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20', btnGradient: 'from-teal-600 to-cyan-600' },
  'ap-physics-c-mechanics': { href: '/ap-physics-c-mech-diagnostic', icon: '🔧', description: 'Take a diagnostic test covering all AP Physics C: Mechanics units. Get a personalized study plan.', borderColor: 'border-slate-300 dark:border-slate-700', bgGradient: 'from-slate-50 to-gray-50 dark:from-slate-900/20 dark:to-gray-900/20', btnGradient: 'from-slate-600 to-gray-600' },
  'ap-physics-c-em': { href: '/ap-physics-c-em-diagnostic', icon: '🧲', description: 'Take a diagnostic test covering all AP Physics C: E&M units. Identify gaps and get a targeted study plan.', borderColor: 'border-amber-300 dark:border-amber-700', bgGradient: 'from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20', btnGradient: 'from-amber-600 to-yellow-600' },
  'organic-chemistry': { href: '/ochem-diagnostic', icon: '⚗️', description: 'Take a diagnostic test covering all Organic Chemistry topics. Get a personalized study plan for your weak areas.', borderColor: 'border-emerald-300 dark:border-emerald-700', bgGradient: 'from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20', btnGradient: 'from-emerald-600 to-green-600' },
  'algebra-1': { href: '/algebra1-diagnostic', icon: '📐', description: 'Take a diagnostic test covering all Algebra 1 topics. Pinpoint areas to improve and get a study plan.', borderColor: 'border-sky-300 dark:border-sky-700', bgGradient: 'from-sky-50 to-blue-50 dark:from-sky-900/20 dark:to-blue-900/20', btnGradient: 'from-sky-600 to-blue-600' },
  'algebra-2': { href: '/algebra2-diagnostic', icon: '📏', description: 'Take a diagnostic test covering all Algebra 2 topics. Identify your strengths and areas to work on.', borderColor: 'border-cyan-300 dark:border-cyan-700', bgGradient: 'from-cyan-50 to-sky-50 dark:from-cyan-900/20 dark:to-sky-900/20', btnGradient: 'from-cyan-600 to-sky-600' },
  'geometry': { href: '/geometry-diagnostic', icon: '📐', description: 'Take a diagnostic test covering all Geometry topics. Build a targeted study plan for your weak areas.', borderColor: 'border-rose-300 dark:border-rose-700', bgGradient: 'from-rose-50 to-pink-50 dark:from-rose-900/20 dark:to-pink-900/20', btnGradient: 'from-rose-600 to-pink-600' },
  'pre-algebra': { href: '/prealgebra-diagnostic', icon: '🔢', description: 'Take a diagnostic test covering all Pre-Algebra topics. Find out what to focus on with a personalized plan.', borderColor: 'border-lime-300 dark:border-lime-700', bgGradient: 'from-lime-50 to-green-50 dark:from-lime-900/20 dark:to-green-900/20', btnGradient: 'from-lime-600 to-green-600' },
  'precalculus': { href: '/precalc-diagnostic', icon: '📈', description: 'Take a diagnostic test covering all Precalculus topics. Get a personalized plan to strengthen weak areas.', borderColor: 'border-fuchsia-300 dark:border-fuchsia-700', bgGradient: 'from-fuchsia-50 to-purple-50 dark:from-fuchsia-900/20 dark:to-purple-900/20', btnGradient: 'from-fuchsia-600 to-purple-600' },
  'ap-precalculus': { href: '/ap-precalculus-diagnostic', icon: '📉', description: 'Take a diagnostic test covering all AP Precalculus units. Identify gaps and get a targeted study plan.', borderColor: 'border-violet-300 dark:border-violet-700', bgGradient: 'from-violet-50 to-indigo-50 dark:from-violet-900/20 dark:to-indigo-900/20', btnGradient: 'from-violet-600 to-indigo-600' },
  'grade-8-math': { href: '/grade8-math-diagnostic', icon: '🎓', description: 'Take a diagnostic test covering all Grade 8 Math topics. Get a personalized study plan for improvement.', borderColor: 'border-yellow-300 dark:border-yellow-700', bgGradient: 'from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20', btnGradient: 'from-yellow-600 to-amber-600' },
}

export const courseScorePredictorMap: Record<string, SimpleLinkConfig> = {
  'act': { href: '/act-score-predictor', label: 'View Score Predictor' },
  'sat': { href: '/sat-score-predictor', label: 'View Score Predictor' },
  'mcat': { href: '/mcat-score-predictor', label: 'View Score Predictor' },
  'ap-chemistry': { href: '/ap-chem-score-predictor', label: 'View Score Predictor' },
  'ap-calculus-ab': { href: '/ap-calcab-score-predictor', label: 'View Score Predictor' },
  'ap-calculus-bc': { href: '/ap-calcbc-score-predictor', label: 'View Score Predictor' },
  'ap-biology': { href: '/ap-bio-score-predictor', label: 'View Score Predictor' },
  'ap-statistics': { href: '/ap-stats-score-predictor', label: 'View Score Predictor' },
  'ap-psychology': { href: '/ap-psych-score-predictor', label: 'View Score Predictor' },
  'ap-physics-1': { href: '/ap-physics1-score-predictor', label: 'View Score Predictor' },
  'ap-physics-2': { href: '/ap-physics2-score-predictor', label: 'View Score Predictor' },
  'algebra-1': { href: '/algebra1-score-predictor', label: 'View Score Predictor' },
  'algebra-2': { href: '/algebra2-score-predictor', label: 'View Score Predictor' },
  'geometry': { href: '/geometry-score-predictor', label: 'View Score Predictor' },
  'precalculus': { href: '/precalc-score-predictor', label: 'View Score Predictor' },
  'ap-precalculus': { href: '/ap-precalculus-score-predictor', label: 'View Score Predictor' },
  'ap-physics-c-mechanics': { href: '/ap-physics-c-mech-score-predictor', label: 'View Score Predictor' },
  'ap-physics-c-em': { href: '/ap-physics-c-em-score-predictor', label: 'View Score Predictor' },
  'grade-8-math': { href: '/grade8-math-score-predictor', label: 'View Score Predictor' },
  'pre-algebra': { href: '/prealgebra-score-predictor', label: 'View Score Predictor' },
  'organic-chemistry': { href: '/ochem-score-predictor', label: 'View Score Predictor' },
}

export const courseDailyQuestionMap: Record<string, SimpleLinkConfig> = {
  'act': { href: '/act-daily-question', label: 'Today\'s Question' },
  'sat': { href: '/sat-daily-question', label: 'Today\'s Question' },
  'mcat': { href: '/mcat-daily-question', label: 'Today\'s Question' },
  'ap-chemistry': { href: '/ap-chem-daily-question', label: 'Today\'s Question' },
  'ap-calculus-ab': { href: '/ap-calcab-daily-question', label: 'Today\'s Question' },
  'ap-calculus-bc': { href: '/ap-calcbc-daily-question', label: 'Today\'s Question' },
  'ap-biology': { href: '/ap-bio-daily-question', label: 'Today\'s Question' },
  'ap-statistics': { href: '/ap-stats-daily-question', label: 'Today\'s Question' },
  'ap-psychology': { href: '/ap-psych-daily-question', label: 'Today\'s Question' },
  'ap-physics-1': { href: '/ap-physics1-daily-question', label: 'Today\'s Question' },
  'ap-physics-2': { href: '/ap-physics2-daily-question', label: 'Today\'s Question' },
  'algebra-1': { href: '/algebra1-daily-question', label: 'Today\'s Question' },
  'algebra-2': { href: '/algebra2-daily-question', label: 'Today\'s Question' },
  'geometry': { href: '/geometry-daily-question', label: 'Today\'s Question' },
  'precalculus': { href: '/precalc-daily-question', label: 'Today\'s Question' },
  'ap-precalculus': { href: '/ap-precalculus-daily-question', label: 'Today\'s Question' },
  'ap-physics-c-mechanics': { href: '/ap-physics-c-mech-daily-question', label: 'Today\'s Question' },
  'ap-physics-c-em': { href: '/ap-physics-c-em-daily-question', label: 'Today\'s Question' },
  'grade-8-math': { href: '/grade8-math-daily-question', label: 'Today\'s Question' },
  'pre-algebra': { href: '/prealgebra-daily-question', label: 'Today\'s Question' },
  'organic-chemistry': { href: '/ochem-daily-question', label: 'Today\'s Question' },
}
