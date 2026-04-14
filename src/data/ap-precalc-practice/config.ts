import type { PracticeExamConfig, PracticeQuestion } from '@/components/PracticeExam'

const POOL: PracticeQuestion[] = [
  // ── Polynomial & Rational Functions ──
  { question: 'What is the degree of f(x) = 3x⁵ − 2x³ + x − 7?', options: ['3', '5', '7', '1'], correctAnswer: 1, explanation: 'The degree is the highest power of x, which is 5.', topic: 'polynomials' },
  { question: 'Which describes the end behavior of f(x) = −x⁴ + 2x²?', options: ['Up left, up right', 'Down left, down right', 'Down left, up right', 'Up left, down right'], correctAnswer: 1, explanation: 'Even degree with negative leading coefficient → both ends go down.', topic: 'polynomials' },
  { question: 'A polynomial f(x) has zeros at x = 1 (mult. 2) and x = −3. Which could be f(x)?', options: ['(x−1)²(x+3)', '(x+1)²(x−3)', '(x−1)(x+3)²', '(x+1)(x−3)'], correctAnswer: 0, explanation: 'Zero at x = 1 with multiplicity 2 → (x−1)², zero at x = −3 → (x+3).', topic: 'polynomials' },
  { question: 'Find the vertical asymptote(s) of f(x) = (x+2) / (x²−4).', options: ['x = 2 and x = −2', 'x = 2 only', 'x = −2 only', 'No vertical asymptotes'], correctAnswer: 1, explanation: 'x²−4 = (x−2)(x+2). The (x+2) cancels → hole at x = −2, vertical asymptote at x = 2.', topic: 'rational-functions' },
  { question: 'What is the horizontal asymptote of f(x) = (3x² + 1) / (x² − 5)?', options: ['y = 0', 'y = 3', 'y = −5', 'No horizontal asymptote'], correctAnswer: 1, explanation: 'Same degree → ratio of leading coefficients: y = 3/1 = 3.', topic: 'rational-functions' },
  { question: 'Using the Remainder Theorem, what is the remainder when f(x) = x³ − 2x + 1 is divided by (x − 2)?', options: ['5', '3', '1', '−3'], correctAnswer: 0, explanation: 'f(2) = 8 − 4 + 1 = 5.', topic: 'polynomials' },
  { question: 'The graph of a degree-4 polynomial has at most how many turning points?', options: ['3', '4', '5', '2'], correctAnswer: 0, explanation: 'A degree-n polynomial has at most n − 1 turning points: 4 − 1 = 3.', topic: 'polynomials' },

  // ── Exponential & Logarithmic Functions ──
  { question: 'Solve: 3ˣ = 81.', options: ['x = 3', 'x = 4', 'x = 27', 'x = 5'], correctAnswer: 1, explanation: '81 = 3⁴, so x = 4.', topic: 'exponentials' },
  { question: 'Evaluate log₂(32).', options: ['4', '5', '6', '8'], correctAnswer: 1, explanation: '2⁵ = 32, so log₂(32) = 5.', topic: 'logarithms' },
  { question: 'Which is equivalent to ln(e³)?', options: ['3', 'e³', '3e', '1/3'], correctAnswer: 0, explanation: 'ln(e³) = 3 because ln and e are inverse functions.', topic: 'logarithms' },
  { question: 'Simplify: log(a²b) using log rules.', options: ['2log(a) + log(b)', 'log(2a) + log(b)', '2log(ab)', 'log(a²) · log(b)'], correctAnswer: 0, explanation: 'log(a²b) = log(a²) + log(b) = 2log(a) + log(b).', topic: 'logarithms' },
  { question: 'A population doubles every 5 years from an initial 100. What is the model?', options: ['P(t) = 100(2)^(t/5)', 'P(t) = 100(2)^(5t)', 'P(t) = 200t', 'P(t) = 100e^(2t)'], correctAnswer: 0, explanation: 'Doubling every 5 years: multiply by 2 each 5-year interval → P(t) = 100(2)^(t/5).', topic: 'exponentials' },
  { question: 'What is the domain of f(x) = log(x − 3)?', options: ['x > 3', 'x ≥ 3', 'x > 0', 'All real numbers'], correctAnswer: 0, explanation: 'The argument of log must be positive: x − 3 > 0 → x > 3.', topic: 'logarithms' },
  { question: 'Solve: log₃(x) + log₃(x − 2) = 1.', options: ['x = 3', 'x = −1', 'x = 3 only', 'x = 3 or x = −1'], correctAnswer: 2, explanation: 'log₃(x(x−2)) = 1 → x²−2x = 3 → x²−2x−3 = 0 → (x−3)(x+1) = 0. x = 3 (x = −1 is extraneous).', topic: 'logarithms' },

  // ── Trigonometric Functions ──
  { question: 'Convert 150° to radians.', options: ['5π/6', '2π/3', '3π/4', '5π/4'], correctAnswer: 0, explanation: '150° × (π/180°) = 5π/6.', topic: 'trig' },
  { question: 'What is sin(π/3)?', options: ['1/2', '√3/2', '√2/2', '1'], correctAnswer: 1, explanation: 'sin(60°) = √3/2.', topic: 'trig' },
  { question: 'What is cos(5π/4)?', options: ['−√2/2', '√2/2', '−1/2', '−√3/2'], correctAnswer: 0, explanation: '5π/4 is in Quadrant III where cosine is negative. Reference angle π/4 → cos = −√2/2.', topic: 'trig' },
  { question: 'The period of y = 3sin(2x) is:', options: ['π', '2π', '4π', '3π'], correctAnswer: 0, explanation: 'Period = 2π/|B| = 2π/2 = π.', topic: 'trig' },
  { question: 'The amplitude of y = −5cos(x) + 2 is:', options: ['5', '−5', '2', '7'], correctAnswer: 0, explanation: 'Amplitude = |A| = |−5| = 5.', topic: 'trig' },
  { question: 'Which function has vertical asymptotes at x = π/2 + nπ?', options: ['y = sin x', 'y = cos x', 'y = tan x', 'y = csc x'], correctAnswer: 2, explanation: 'tan x = sin x / cos x; cos x = 0 at x = π/2 + nπ, creating vertical asymptotes.', topic: 'trig' },
  { question: 'Simplify: (1 − cos²θ) / sinθ.', options: ['sinθ', 'cosθ', 'tanθ', '1'], correctAnswer: 0, explanation: '1 − cos²θ = sin²θ. So sin²θ/sinθ = sinθ.', topic: 'trig-identities' },
  { question: 'sin(2θ) = ?', options: ['2sinθ', '2sinθcosθ', 'sin²θ + cos²θ', '2cos²θ − 1'], correctAnswer: 1, explanation: 'The double angle formula: sin(2θ) = 2sinθcosθ.', topic: 'trig-identities' },

  // ── Inverse Trigonometry ──
  { question: 'Evaluate arcsin(√3/2).', options: ['π/3', 'π/6', 'π/4', '2π/3'], correctAnswer: 0, explanation: 'sin(π/3) = √3/2, and π/3 is in [−π/2, π/2].', topic: 'inverse-trig' },
  { question: 'The range of y = arccos(x) is:', options: ['[0, π]', '[−π/2, π/2]', '[0, 2π]', '(−∞, ∞)'], correctAnswer: 0, explanation: 'arccos has range [0, π] to ensure it is a function.', topic: 'inverse-trig' },
  { question: 'Evaluate arctan(1).', options: ['π/4', 'π/2', 'π/3', 'π/6'], correctAnswer: 0, explanation: 'tan(π/4) = 1, and π/4 is in (−π/2, π/2).', topic: 'inverse-trig' },

  // ── Law of Sines / Cosines ──
  { question: 'In triangle ABC, A = 30°, a = 5, B = 45°. Find b using the Law of Sines.', options: ['5√2/1 ≈ 7.07', '5/√2 ≈ 3.54', '5sin45°/sin30° ≈ 7.07', '10'], correctAnswer: 2, explanation: 'a/sinA = b/sinB → b = 5sin45°/sin30° = 5(√2/2)/(1/2) = 5√2 ≈ 7.07.', topic: 'law-sines-cosines' },
  { question: 'When should you use the Law of Cosines instead of Law of Sines?', options: ['When you know AAS', 'When you know SAS or SSS', 'When you know ASA', 'Always'], correctAnswer: 1, explanation: 'Law of Cosines is used for SAS (two sides + included angle) or SSS (all three sides).', topic: 'law-sines-cosines' },

  // ── Polar Coordinates ──
  { question: 'Convert (3, π/6) from polar to rectangular coordinates.', options: ['(3√3/2, 3/2)', '(3/2, 3√3/2)', '(3, 3)', '(√3, 1)'], correctAnswer: 0, explanation: 'x = 3cos(π/6) = 3(√3/2) = 3√3/2. y = 3sin(π/6) = 3(1/2) = 3/2.', topic: 'polar' },
  { question: 'Convert (1, 1) from rectangular to polar coordinates.', options: ['(√2, π/4)', '(2, π/4)', '(1, π/4)', '(√2, π/2)'], correctAnswer: 0, explanation: 'r = √(1² + 1²) = √2. θ = arctan(1/1) = π/4.', topic: 'polar' },
  { question: 'The graph of r = 3cos(2θ) is a:', options: ['Circle', 'Cardioid', 'Rose with 4 petals', 'Limaçon'], correctAnswer: 2, explanation: 'r = acos(nθ) with n = 2 (even) gives 2n = 4 petals.', topic: 'polar' },
  { question: 'What is the rectangular equation for r = 4sinθ?', options: ['x² + (y−2)² = 4', 'x² + y² = 4y', '(x−2)² + y² = 4', 'y = 4x'], correctAnswer: 0, explanation: 'r = 4sinθ → r² = 4rsinθ → x² + y² = 4y → x² + (y−2)² = 4. A circle centered at (0,2) with r = 2.', topic: 'polar' },

  // ── Sequences & Series ──
  { question: 'Find the 10th term of the arithmetic sequence: 3, 7, 11, 15, …', options: ['39', '43', '35', '41'], correctAnswer: 0, explanation: 'a₁ = 3, d = 4. a₁₀ = 3 + 9(4) = 39.', topic: 'sequences' },
  { question: 'Find the sum of the first 5 terms of the geometric series: 2, 6, 18, 54, …', options: ['242', '162', '80', '363'], correctAnswer: 0, explanation: 'a₁ = 2, r = 3. S₅ = 2(3⁵ − 1)/(3 − 1) = 2(242)/2 = 242.', topic: 'sequences' },
  { question: 'Does the infinite series 1 + 1/2 + 1/4 + 1/8 + … converge?', options: ['Yes, to 2', 'Yes, to 1', 'No, diverges', 'Yes, to ∞'], correctAnswer: 0, explanation: 'Geometric with |r| = 1/2 < 1. Sum = a₁/(1−r) = 1/(1−1/2) = 2.', topic: 'sequences' },

  // ── Mixed / Transformations ──
  { question: 'If f(x) = x², what is f(x − 3) + 2?', options: ['(x−3)² + 2', 'x² − 1', '(x+3)² + 2', 'x² + 2'], correctAnswer: 0, explanation: 'Replace x with (x−3): shift 3 right. Add 2: shift up 2.', topic: 'transformations' },
  { question: 'The function f(x) = x⁴ − x² is:', options: ['Even', 'Odd', 'Neither', 'Both'], correctAnswer: 0, explanation: 'f(−x) = (−x)⁴ − (−x)² = x⁴ − x² = f(x). Even.', topic: 'transformations' },
]

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]] }
  return a
}

export const config: PracticeExamConfig = {
  subject: 'AP Precalculus',
  description: 'Timed practice exam covering polynomial, rational, exponential, logarithmic, and trigonometric functions plus polar coordinates and sequences.',
  backLink: { href: '/ap-precalculus', label: 'AP Precalculus' },
  ctaLinks: [
    { href: '/ap-precalculus-diagnostic', label: 'Diagnostic Test' },
    { href: '/ap-precalculus-daily-question', label: 'Daily Question' },
  ],
  accent: 'emerald',
  sections: [{
    id: 'mc', name: 'Multiple Choice', description: 'AP-style MC covering all AP Precalculus topics: functions, trig, polar, and sequences.',
    questionCount: 30, timeLimitMinutes: 45,
  }],
  getQuestions: async () => shuffle(POOL).slice(0, 30),
  aboutInfo: {
    title: 'About the AP Precalculus Exam',
    columns: [
      { heading: 'Exam Structure', items: ['Section I: 40 MC questions (no calc: 28 Qs / 80 min, calculator: 12 Qs / 40 min)', 'Section II: 4 Free Response (calculator: 2 Qs / 30 min, no calc: 2 Qs / 30 min)', 'Total: 3 hours'] },
      { heading: 'Scoring', items: ['Score range: 1–5', 'MC: ~62.5% of score', 'FRQ: ~37.5% of score', 'Graphing calculator permitted on some sections'] },
    ],
  },
}
