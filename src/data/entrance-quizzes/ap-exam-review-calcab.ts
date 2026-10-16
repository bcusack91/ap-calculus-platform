/**
 * Entrance Quiz — AP Calculus AB Exam Review — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Limits & Continuity Review
  {
    id: 'rev-ent-1a',
    question: 'Let $f(x) = ax + 1$ for $x < 2$ and $f(x) = x^2 + a$ for $x \\ge 2$. For what value of $a$ is $f$ continuous at $x = 2$?',
    options: ['$\\frac{3}{2}$', '$-3$', '$\\frac{5}{2}$', '$3$'],
    correctIndex: 3,
    explanation: 'Continuity needs the one-sided limits to match $f(2)$: $2a + 1 = 4 + a$, so $a = 3$. Dropping the $a$ on the right side gives $\\frac{3}{2}$, and a sign slip gives $-3$.',
    partNumber: 1,
    partTitle: 'Limits & Continuity Review',
  },
  {
    id: 'rev-ent-1b',
    question: 'What is $\\lim_{x \\to -\\infty} \\frac{\\sqrt{9x^2 + 1}}{2x - 3}$?',
    options: ['$-\\frac{3}{2}$', '$\\frac{3}{2}$', '$\\frac{9}{2}$', '$0$'],
    correctIndex: 0,
    explanation: 'For large $|x|$, $\\sqrt{9x^2 + 1} \\approx 3|x|$, and $|x| = -x$ when $x < 0$, so the ratio approaches $\\frac{-3x}{2x} = -\\frac{3}{2}$. Treating $\\sqrt{x^2}$ as $x$ gives $\\frac{3}{2}$, and $\\frac{9}{2}$ forgets the square root.',
    partNumber: 1,
    partTitle: 'Limits & Continuity Review',
  },

  // Part 2 — Differentiation Rules
  {
    id: 'rev-ent-2a',
    question: 'What is $\\frac{d}{dx}\\left[\\cos^3(2x)\\right]$?',
    options: ['$6\\cos^2(2x)\\sin(2x)$', '$3\\cos^2(2x)$', '$-6\\cos^2(2x)\\sin(2x)$', '$-6\\cos^2(2x)$'],
    correctIndex: 2,
    explanation: 'The chain rule applies three times: $3\\cos^2(2x) \\cdot (-\\sin(2x)) \\cdot 2 = -6\\cos^2(2x)\\sin(2x)$. Dropping the minus sign from the derivative of cosine, or stopping after the power rule, are the usual slips.',
    partNumber: 2,
    partTitle: 'Differentiation Rules',
  },
  {
    id: 'rev-ent-2b',
    question: 'The curve $xy^2 - x^2 = 3$ passes through $(1, 2)$. What is $\\frac{dy}{dx}$ at that point?',
    options: ['$\\frac{1}{2}$', '$-\\frac{1}{2}$', '$-2$', '$\\frac{3}{2}$'],
    correctIndex: 1,
    explanation: 'Differentiating gives $y^2 + 2xy\\frac{dy}{dx} - 2x = 0$, so $\\frac{dy}{dx} = \\frac{2x - y^2}{2xy} = \\frac{2 - 4}{4} = -\\frac{1}{2}$. Skipping the product rule on $xy^2$ gives $\\frac{1}{2}$, and $-2$ is the reciprocal.',
    partNumber: 2,
    partTitle: 'Differentiation Rules',
  },

  // Part 3 — Applications of Derivatives
  {
    id: 'rev-ent-3a',
    question: 'The radius of a circle grows at 2 cm per second. How fast is the area growing, in square centimeters per second, at the moment the area is $36\\pi$ square centimeters?',
    options: ['$24\\pi$', '$12\\pi$', '$144\\pi$', '$72\\pi$'],
    correctIndex: 0,
    explanation: 'An area of $36\\pi$ means $r = 6$, and $\\frac{dA}{dt} = 2\\pi r\\frac{dr}{dt} = 2\\pi(6)(2) = 24\\pi$. Leaving out $\\frac{dr}{dt}$ gives $12\\pi$, and using $36$ as the radius gives $144\\pi$.',
    partNumber: 3,
    partTitle: 'Applications of Derivatives',
  },
  {
    id: 'rev-ent-3b',
    question: 'What is the absolute maximum value of $f(x) = x^3 - 6x^2 + 9x + 1$ on $[0, 5]$?',
    options: ['$5$', '$1$', '$9$', '$21$'],
    correctIndex: 3,
    explanation: 'The critical points are $x = 1$ and $x = 3$, with $f(1) = 5$ and $f(3) = 1$; the endpoints give $f(0) = 1$ and $f(5) = 21$. The largest value is $21$. The local maximum $5$ is not the absolute maximum, and $9$ is $f\'(0)$, a slope rather than a value of $f$.',
    partNumber: 3,
    partTitle: 'Applications of Derivatives',
  },

  // Part 4 — Integration Techniques
  {
    id: 'rev-ent-4a',
    question: 'What is $\\int_1^e \\frac{(\\ln x)^2}{x}\\,dx$?',
    options: ['$\\frac{e^3-1}{3}$', '$1$', '$\\frac{1}{3}$', '$\\frac{1}{2}$'],
    correctIndex: 2,
    explanation: 'With $u = \\ln x$ and $du = \\frac{dx}{x}$, the limits become $u = 0$ to $u = 1$, so the integral is $\\int_0^1 u^2\\,du = \\frac{1}{3}$. Keeping the $x$-limits after substituting gives $\\frac{e^3 - 1}{3}$.',
    partNumber: 4,
    partTitle: 'Integration Techniques',
  },
  {
    id: 'rev-ent-4b',
    question: 'What is $\\frac{d}{dx}\\int_x^4 e^{t^2}\\,dt$?',
    options: ['$e^{16}-e^{x^2}$', '$-e^{x^2}$', '$-2xe^{x^2}$', '$-\\frac{e^{x^2}}{2x}$'],
    correctIndex: 1,
    explanation: 'Reversing the limits gives $-\\int_4^x e^{t^2}\\,dt$, and the Fundamental Theorem gives $-e^{x^2}$. There is no chain factor because the variable limit is just $x$, and the answer is not an evaluated difference (the integrand has no elementary antiderivative).',
    partNumber: 4,
    partTitle: 'Integration Techniques',
  },

  // Part 5 — Applications of Integration
  {
    id: 'rev-ent-5a',
    question: 'Let $F(x) = 4 + \\int_2^x f(t)\\,dt$, where $\\int_0^2 f(t)\\,dt = 3$ and $\\int_2^5 f(t)\\,dt = 6$. What is $F(0)$?',
    options: ['$1$', '$7$', '$-3$', '$13$'],
    correctIndex: 0,
    explanation: '$F(0) = 4 + \\int_2^0 f(t)\\,dt = 4 - \\int_0^2 f(t)\\,dt = 4 - 3 = 1$. Forgetting that reversed limits change the sign gives $7$, and leaving out the starting value $4$ gives $-3$.',
    partNumber: 5,
    partTitle: 'Applications of Integration',
  },
  {
    id: 'rev-ent-5b',
    question: 'What is the area of the region bounded by $x = y^2$ and $x = 2y$?',
    options: ['$-\\frac{4}{3}$', '$\\frac{8}{3}$', '$4$', '$\\frac{4}{3}$'],
    correctIndex: 3,
    explanation: 'The curves meet at $y = 0$ and $y = 2$, and $x = 2y$ is on the right, so the area is $\\int_0^2 (2y - y^2)\\,dy = 4 - \\frac{8}{3} = \\frac{4}{3}$. Left minus right gives the negative value, and $4$ and $\\frac{8}{3}$ each use only one curve.',
    partNumber: 5,
    partTitle: 'Applications of Integration',
  },

  // Part 6 — Differential Equations & Modeling
  {
    id: 'rev-ent-6a',
    question: 'What is the solution of $\\frac{dy}{dx} = x(1 + y^2)$ with $y(0) = 0$?',
    options: ['$y = \\frac{x^2}{2}$', '$y = \\tan(\\frac{x^2}{2})$', '$y = e^{x^2/2}-1$', '$y = \\tan(x^2)$'],
    correctIndex: 1,
    explanation: 'Separating gives $\\int \\frac{dy}{1 + y^2} = \\int x\\,dx$, so $\\arctan y = \\frac{x^2}{2} + C$ with $C = 0$, and $y = \\tan\\left(\\frac{x^2}{2}\\right)$. Ignoring the $y$ factor gives $\\frac{x^2}{2}$, and $\\tan(x^2)$ drops the $\\frac{1}{2}$.',
    partNumber: 6,
    partTitle: 'Differential Equations & Modeling',
  },
  {
    id: 'rev-ent-6b',
    question: 'For $\\frac{dy}{dx} = x(y - 3)$, what is true of the solution curve through the point $(1, 1)$?',
    options: [
      'It is increasing at $x = 1$, rising toward $y = 3$',
      'It has a horizontal tangent line at $x = 1$',
      'It is decreasing at $x = 1$',
      'It is constant, since $y = 3$ is an equilibrium',
    ],
    correctIndex: 2,
    explanation: 'The slope at $(1, 1)$ is $1(1 - 3) = -2 < 0$, so the solution is decreasing there. The slope is not zero, and the curve through $(1, 1)$ is not the constant solution $y = 3$.',
    partNumber: 6,
    partTitle: 'Differential Equations & Modeling',
  },

  // Part 7 — Full Practice Exam
  {
    id: 'rev-ent-7a',
    question: 'What is $\\lim_{h \\to 0} \\frac{(2 + h)^4 - 16}{h}$?',
    options: ['$32$', '$16$', '$0$', '$8$'],
    correctIndex: 0,
    explanation: 'This is the definition of the derivative of $x^4$ at $x = 2$, which is $4(2)^3 = 32$. Substituting $h = 0$ only into the numerator gives $0$, and $16$ is the value of the function, not its slope.',
    partNumber: 7,
    partTitle: 'Full Practice Exam',
  },
  {
    id: 'rev-ent-7b',
    question: 'A particle\'s velocity is positive on $(0, 2)$ and negative on $(2, 5)$, and its acceleration is negative on all of $(0, 5)$. On what interval is its speed increasing?',
    options: ['On $(0, 2)$, while $v$ is positive', 'On all of $(0, 5)$', 'Never, since $a(t) < 0$ throughout', 'On $(2, 5)$'],
    correctIndex: 3,
    explanation: 'Speed increases when velocity and acceleration have the same sign, which happens on $(2, 5)$, where both are negative. On $(0, 2)$ they have opposite signs, so the particle is slowing down.',
    partNumber: 7,
    partTitle: 'Full Practice Exam',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Limits & Continuity Review' },
    { partNumber: 2, partTitle: 'Differentiation Rules' },
    { partNumber: 3, partTitle: 'Applications of Derivatives' },
    { partNumber: 4, partTitle: 'Integration Techniques' },
    { partNumber: 5, partTitle: 'Applications of Integration' },
    { partNumber: 6, partTitle: 'Differential Equations & Modeling' },
    { partNumber: 7, partTitle: 'Full Practice Exam' },
  ]
}
