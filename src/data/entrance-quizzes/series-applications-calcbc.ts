/**
 * Entrance Quiz — Series Applications — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Approximating Functions
  {
    id: 'sa-ent-1a',
    question: 'Which expression is the approximation of $\\arctan(0.2)$ from the first two nonzero terms of its Maclaurin series?',
    options: [
      '$0.2-\\frac{0.008}{3}$',
      '$0.2+\\frac{0.008}{3}$',
      '$0.2-\\frac{0.008}{6}$',
      '$0.2-\\frac{0.04}{2}$',
    ],
    correctIndex: 0,
    explanation: 'Since $\\arctan x = x - \\frac{x^3}{3} + \\cdots$, the approximation is $0.2 - \\frac{(0.2)^3}{3}$. Dividing by $6$ uses the sine series, and $\\frac{0.04}{2}$ uses the series for $\\ln(1 + x)$.',
    partNumber: 1,
    partTitle: 'Approximating Functions',
  },
  {
    id: 'sa-ent-1b',
    question: 'The second-degree Maclaurin polynomial for $f(x) = \\frac{1}{1 - 3x}$ is used to approximate $f(0.1)$. What is the approximation?',
    options: ['$1.111$', '$1.429$', '$1.39$', '$1.309$'],
    correctIndex: 2,
    explanation: 'Substituting $3x$ into the geometric series gives $1 + 3x + 9x^2 + \\cdots$, so the approximation is $1 + 0.3 + 0.09 = 1.39$. Substituting $x$ instead of $3x$ gives $1.111$, and $1.429$ is the exact value $\\frac{1}{0.7}$, not the polynomial value.',
    partNumber: 1,
    partTitle: 'Approximating Functions',
  },

  // Part 2 — Integrating the "Unintegrable"
  {
    id: 'sa-ent-2a',
    question: 'Using the first two nonzero terms of the Maclaurin series for $e^{x^2}$, what is the approximation of $\\int_0^{0.5} e^{x^2}\\,dx$?',
    options: ['$\\frac{5}{8}$', '$\\frac{13}{24}$', '$\\frac{3}{4}$', '$\\frac{1}{2}$'],
    correctIndex: 1,
    explanation: 'With $e^{x^2} \\approx 1 + x^2$, the integral is about $\\left[x + \\frac{x^3}{3}\\right]_0^{0.5} = \\frac{1}{2} + \\frac{1}{24} = \\frac{13}{24}$. Forgetting to divide by $3$ gives $\\frac{5}{8}$, and $\\frac{1}{2}$ keeps only the first term.',
    partNumber: 2,
    partTitle: 'Integrating the "Unintegrable"',
  },
  {
    id: 'sa-ent-2b',
    question: 'Which are the first three nonzero terms of the Maclaurin series for $\\int_0^x \\frac{\\ln(1 + t)}{t}\\,dt$?',
    options: [
      '$x-\\frac{x^2}{2}+\\frac{x^3}{3}$',
      '$1-\\frac{x}{2}+\\frac{x^2}{3}$',
      '$\\frac{x^2}{2}-\\frac{x^3}{6}+\\frac{x^4}{12}$',
      '$x-\\frac{x^2}{4}+\\frac{x^3}{9}$',
    ],
    correctIndex: 3,
    explanation: 'Dividing $\\ln(1 + t) = t - \\frac{t^2}{2} + \\frac{t^3}{3} - \\cdots$ by $t$ gives $1 - \\frac{t}{2} + \\frac{t^2}{3}$, and integrating gives $x - \\frac{x^2}{4} + \\frac{x^3}{9}$. The first option is $\\ln(1 + x)$ itself, the second is the integrand, and the third integrates without dividing by $t$.',
    partNumber: 2,
    partTitle: 'Integrating the "Unintegrable"',
  },

  // Part 3 — An Alternative to L'Hôpital's Rule
  {
    id: 'sa-ent-3a',
    question: 'Using series, what is $\\lim_{x \\to 0} \\frac{\\arctan x - x}{x^3}$?',
    options: ['$-\\frac{1}{3}$', '$\\frac{1}{3}$', '$-\\frac{1}{6}$', '$0$'],
    correctIndex: 0,
    explanation: 'Since $\\arctan x = x - \\frac{x^3}{3} + \\cdots$, the numerator is $-\\frac{x^3}{3} + \\cdots$, and dividing by $x^3$ gives $-\\frac{1}{3}$. The value $-\\frac{1}{6}$ comes from using the sine series.',
    partNumber: 3,
    partTitle: 'An Alternative to L\'Hôpital\'s Rule',
  },
  {
    id: 'sa-ent-3b',
    question: 'Using series, what is $\\lim_{x \\to 0} \\frac{e^{x^2} - 1 - x^2}{x^4}$?',
    options: ['$1$', '$0$', '$\\frac{1}{2}$', '$2$'],
    correctIndex: 2,
    explanation: 'Substituting $x^2$ into the exponential series gives $e^{x^2} = 1 + x^2 + \\frac{x^4}{2} + \\cdots$, so the numerator is $\\frac{x^4}{2} + \\cdots$ and the limit is $\\frac{1}{2}$. Forgetting the $2!$ gives $1$.',
    partNumber: 3,
    partTitle: 'An Alternative to L\'Hôpital\'s Rule',
  },

  // Part 4 — Generating New Series from Old
  {
    id: 'sa-ent-4a',
    question: 'Let $f(x) = \\sum_{n=1}^{\\infty} \\frac{x^n}{n}$ for $|x| < 1$. Differentiating term by term, which closed form equals $f\'(x)$?',
    options: ['$-\\ln(1-x)$', '$\\frac{1}{1-x}$', '$\\frac{1}{(1-x)^2}$', '$\\frac{x}{1-x}$'],
    correctIndex: 1,
    explanation: 'Term by term, $f\'(x) = \\sum_{n=1}^{\\infty} x^{n-1} = 1 + x + x^2 + \\cdots = \\frac{1}{1-x}$. The function $-\\ln(1 - x)$ is $f$ itself, and $\\frac{x}{1-x}$ would start at $x$ rather than $1$.',
    partNumber: 4,
    partTitle: 'Generating New Series from Old',
  },
  {
    id: 'sa-ent-4b',
    question: 'Using $\\sum_{n=2}^{\\infty} n(n-1)x^n = \\frac{2x^2}{(1-x)^3}$ for $|x| < 1$, what is $\\sum_{n=2}^{\\infty} \\frac{n(n-1)}{2^n}$?',
    options: ['$2$', '$8$', '$16$', '$4$'],
    correctIndex: 3,
    explanation: 'Substitute $x = \\frac{1}{2}$: $\\frac{2 \\cdot \\frac{1}{4}}{\\left(\\frac{1}{2}\\right)^3} = \\frac{1/2}{1/8} = 4$. Leaving out the factor $x^2$ gives $16$.',
    partNumber: 4,
    partTitle: 'Generating New Series from Old',
  },

  // Part 5 — How Series Questions Appear on the BC Exam
  {
    id: 'sa-ent-5a',
    question: 'The Taylor series for $f$ about $x = 1$ is $\\sum_{n=0}^{\\infty} \\frac{(-1)^n (x - 1)^n}{n + 2}$. Using the first two terms to approximate $f(1.5)$, what are the approximation and its alternating series error bound?',
    options: [
      '$\\frac{1}{3}$, with error at most $\\frac{1}{16}$',
      '$\\frac{1}{3}$, with error at most $\\frac{1}{6}$',
      '$\\frac{2}{3}$, with error at most $\\frac{1}{16}$',
      '$\\frac{2}{3}$, with error at most $\\frac{1}{6}$',
    ],
    correctIndex: 0,
    explanation: 'The first two terms give $\\frac{1}{2} - \\frac{0.5}{3} = \\frac{1}{3}$, and the next term has size $\\frac{(0.5)^2}{4} = \\frac{1}{16}$, which bounds the error. Adding the second term gives $\\frac{2}{3}$, and $\\frac{1}{6}$ is the last term used.',
    partNumber: 5,
    partTitle: 'How Series Questions Appear on the BC Exam',
  },
  {
    id: 'sa-ent-5b',
    question: 'The approximation $\\int_0^1 \\cos(x^2)\\,dx \\approx 1 - \\frac{1}{10}$ uses the first two terms of the integrated series. Which statement justifies that the error is less than $0.005$?',
    options: [
      'The series alternates and its terms decrease, so the error equals the first omitted term, $\\frac{1}{216}$',
      'The series alternates and its terms decrease, so the error is at most the last term used, $\\frac{1}{10}$',
      'The series alternates and its terms decrease, so the error is at most the first omitted term, $\\frac{1}{216}$',
      'The series converges, so the error is at most the first omitted term, $\\frac{1}{216}$',
    ],
    correctIndex: 2,
    explanation: 'The integrated series alternates with terms decreasing to $0$, so the error is at most the first omitted term, $\\int_0^1 \\frac{x^8}{24}\\,dx = \\frac{1}{216}$. Since $\\frac{1}{216} < 0.005$, the bound is met; the error is bounded by that term, not equal to it, and convergence alone gives no such bound.',
    partNumber: 5,
    partTitle: 'How Series Questions Appear on the BC Exam',
  },

  // Part 6 — Guided Practice Problems
  {
    id: 'sa-ent-6a',
    question: 'What is the coefficient of $x^6$ in the Maclaurin series for $x^2\\cos x$?',
    options: ['$\\frac{1}{720}$', '$\\frac{1}{24}$', '$-\\frac{1}{2}$', '$\\frac{1}{120}$'],
    correctIndex: 1,
    explanation: 'Multiplying $\\cos x = 1 - \\frac{x^2}{2} + \\frac{x^4}{24} - \\cdots$ by $x^2$ makes the $x^6$ term come from $\\frac{x^4}{24}$, so the coefficient is $\\frac{1}{24}$. The value $\\frac{1}{720}$ is the $x^6$ coefficient of $\\cos x$ itself, before the shift.',
    partNumber: 6,
    partTitle: 'Guided Practice Problems',
  },
  {
    id: 'sa-ent-6b',
    question: 'Using series, what is $\\lim_{x \\to 0} \\frac{\\sin(3x) - 3x}{x^3}$?',
    options: ['$-\\frac{1}{6}$', '$-\\frac{1}{2}$', '$\\frac{9}{2}$', '$-\\frac{9}{2}$'],
    correctIndex: 3,
    explanation: 'Since $\\sin(3x) = 3x - \\frac{(3x)^3}{6} + \\cdots$, the numerator is $-\\frac{27x^3}{6} + \\cdots$, so the limit is $-\\frac{9}{2}$. Forgetting to cube the $3$ gives $-\\frac{1}{2}$, and $-\\frac{1}{6}$ ignores the $3$ entirely.',
    partNumber: 6,
    partTitle: 'Guided Practice Problems',
  },

  // Part 7 — Putting It All Together
  {
    id: 'sa-ent-7a',
    question: 'Which function equals $\\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n}}{(2n+1)!}$ for $x \\ne 0$?',
    options: ['$\\frac{\\sin x}{x}$', '$\\sin x$', '$x\\sin x$', '$\\frac{\\cos x}{x}$'],
    correctIndex: 0,
    explanation: 'The sine series is $\\sum \\frac{(-1)^n x^{2n+1}}{(2n+1)!}$; dividing every term by $x$ lowers each exponent by one, giving this series. Multiplying by $x$ would raise the exponents, and the cosine series has $(2n)!$ in the denominator.',
    partNumber: 7,
    partTitle: 'Putting It All Together',
  },
  {
    id: 'sa-ent-7b',
    question: 'Using series, what is $\\lim_{x \\to 0} \\frac{1 - \\cos(2x)}{x^2}$?',
    options: ['$\\frac{1}{2}$', '$-2$', '$2$', '$\\frac{1}{4}$'],
    correctIndex: 2,
    explanation: 'Since $\\cos(2x) = 1 - \\frac{(2x)^2}{2} + \\cdots = 1 - 2x^2 + \\cdots$, the numerator is $2x^2 + \\cdots$, so the limit is $2$. Using $\\cos x$ instead of $\\cos(2x)$ gives $\\frac{1}{2}$, and the sign is positive because $1 - \\cos(2x) \\ge 0$.',
    partNumber: 7,
    partTitle: 'Putting It All Together',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Approximating Functions' },
    { partNumber: 2, partTitle: 'Integrating the "Unintegrable"' },
    { partNumber: 3, partTitle: 'An Alternative to L\'Hôpital\'s Rule' },
    { partNumber: 4, partTitle: 'Generating New Series from Old' },
    { partNumber: 5, partTitle: 'How Series Questions Appear on the BC Exam' },
    { partNumber: 6, partTitle: 'Guided Practice Problems' },
    { partNumber: 7, partTitle: 'Putting It All Together' },
  ]
}
