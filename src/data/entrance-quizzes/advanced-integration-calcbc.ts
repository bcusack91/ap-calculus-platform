/**
 * Entrance Quiz — Advanced Integration Techniques — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Choosing the Right Method
  {
    id: 'ai-ent-1a',
    question: 'What is $\\int \\frac{dx}{25 + 4x^2}$?',
    options: [
      '$\\frac{1}{5}\\arctan\\frac{2x}{5}+C$',
      '$\\frac{1}{10}\\arctan\\frac{2x}{5}+C$',
      '$\\frac{1}{2}\\arctan\\frac{2x}{5}+C$',
      '$\\frac{1}{10}\\arctan\\frac{x}{5}+C$',
    ],
    correctIndex: 1,
    explanation: 'Write the denominator as $5^2 + (2x)^2$ and let $u = 2x$, $du = 2\\,dx$: $\\frac{1}{2}\\int \\frac{du}{25 + u^2} = \\frac{1}{2} \\cdot \\frac{1}{5}\\arctan\\frac{u}{5} + C$. Each distractor drops one of the two factors or the $2$ inside the arctangent.',
    partNumber: 1,
    partTitle: 'Choosing the Right Method',
  },
  {
    id: 'ai-ent-1b',
    question: 'What is $\\int \\frac{dx}{x\\sqrt{1 - (\\ln x)^2}}$?',
    options: [
      '$\\arcsin(\\ln x)+C$',
      '$\\arctan(\\ln x)+C$',
      '$\\ln|\\arcsin x|+C$',
      '$\\sqrt{1-(\\ln x)^2}+C$',
    ],
    correctIndex: 0,
    explanation: 'With $u = \\ln x$, $du = \\frac{dx}{x}$, the integral becomes $\\int \\frac{du}{\\sqrt{1 - u^2}} = \\arcsin u + C$. The arctangent form needs $1 + u^2$ without a square root, and the other two options do not differentiate back to the integrand.',
    partNumber: 1,
    partTitle: 'Choosing the Right Method',
  },

  // Part 2 — Integration by Parts in Depth
  {
    id: 'ai-ent-2a',
    question: 'What is $\\int x^3\\ln x\\,dx$?',
    options: [
      '$\\frac{x^4}{4}\\ln x-\\frac{x^4}{4}+C$',
      '$\\frac{x^4}{4}\\ln x+C$',
      '$\\frac{x^4}{4}\\ln x-\\frac{x^4}{16}+C$',
      '$3x^2\\ln x+x^2+C$',
    ],
    correctIndex: 2,
    explanation: 'Take $u = \\ln x$ and $dv = x^3\\,dx$: $\\frac{x^4}{4}\\ln x - \\int \\frac{x^4}{4} \\cdot \\frac{1}{x}\\,dx = \\frac{x^4}{4}\\ln x - \\frac{x^4}{16} + C$. Forgetting to integrate $\\frac{x^3}{4}$ gives $\\frac{x^4}{4}$, and dropping the $\\int v\\,du$ term loses it entirely.',
    partNumber: 2,
    partTitle: 'Integration by Parts in Depth',
  },
  {
    id: 'ai-ent-2b',
    question: 'What is $\\int_0^{\\pi} x^2\\sin x\\,dx$?',
    options: ['$\\pi^2$', '$\\pi^2+4$', '$\\pi^2-2$', '$\\pi^2-4$'],
    correctIndex: 3,
    explanation: 'The tabular method gives $-x^2\\cos x + 2x\\sin x + 2\\cos x$, which is $\\pi^2 - 2$ at $\\pi$ and $2$ at $0$, so the value is $\\pi^2 - 4$. The value $\\pi^2 - 2$ forgets the lower limit, and $\\pi^2$ stops after the first row.',
    partNumber: 2,
    partTitle: 'Integration by Parts in Depth',
  },

  // Part 3 — Simplify First, Integrate Second
  {
    id: 'ai-ent-3a',
    question: 'What is $\\int \\frac{2x + 7}{x^2 + 9}\\,dx$?',
    options: [
      '$\\ln(x^2+9)+\\frac{7}{3}\\arctan\\frac{x}{3}+C$',
      '$\\ln(x^2+9)+7\\arctan\\frac{x}{3}+C$',
      '$\\ln(x^2+9)+C$',
      '$\\ln(x^2+9)+\\frac{7}{3}\\arctan x+C$',
    ],
    correctIndex: 0,
    explanation: 'Split the numerator: $\\int \\frac{2x}{x^2+9}\\,dx = \\ln(x^2 + 9)$ and $\\int \\frac{7}{x^2+9}\\,dx = \\frac{7}{3}\\arctan\\frac{x}{3}$. Leaving out the $\\frac{1}{3}$ or the $\\frac{x}{3}$ inside the arctangent are the usual slips, and the constant 7 cannot be dropped.',
    partNumber: 3,
    partTitle: 'Simplify First, Integrate Second',
  },
  {
    id: 'ai-ent-3b',
    question: 'What is $\\int \\frac{x + 2}{x + 1}\\,dx$?',
    options: [
      '$x+2\\ln|x+1|+C$',
      '$x+\\ln|x+1|+C$',
      '$(x+2)\\ln|x+1|+C$',
      '$x\\ln|x+1|+2x+C$',
    ],
    correctIndex: 1,
    explanation: 'Rewrite the numerator as $(x + 1) + 1$, so the integrand is $1 + \\frac{1}{x+1}$ and the integral is $x + \\ln|x + 1| + C$. The numerator cannot be pulled out as a factor of the logarithm.',
    partNumber: 3,
    partTitle: 'Simplify First, Integrate Second',
  },

  // Part 4 — FTC Applications at BC Level
  {
    id: 'ai-ent-4a',
    question: 'What is $\\frac{d}{dx}\\int_x^{x^2} \\sqrt{1 + t^3}\\,dt$?',
    options: [
      '$\\sqrt{1+x^6}-\\sqrt{1+x^3}$',
      '$2x\\sqrt{1+x^6}+\\sqrt{1+x^3}$',
      '$2x\\sqrt{1+x^6}-\\sqrt{1+x^3}$',
      '$2x\\sqrt{1+x^3}-\\sqrt{1+x^3}$',
    ],
    correctIndex: 2,
    explanation: 'With both limits variable, the derivative is $f(x^2) \\cdot 2x - f(x) \\cdot 1 = 2x\\sqrt{1 + x^6} - \\sqrt{1 + x^3}$. The upper limit needs the chain factor $2x$, the lower limit enters with a minus sign, and $f(x^2) = \\sqrt{1 + (x^2)^3}$.',
    partNumber: 4,
    partTitle: 'FTC Applications at BC Level',
  },
  {
    id: 'ai-ent-4b',
    question: 'Let $g(x) = \\int_0^x e^{-t^2}\\,dt$. What is $g\'\'(1)$?',
    options: ['$\\frac{1}{e}$', '$-\\frac{1}{e}$', '$-2e$', '$-\\frac{2}{e}$'],
    correctIndex: 3,
    explanation: 'By the Fundamental Theorem $g\'(x) = e^{-x^2}$, and the chain rule gives $g\'\'(x) = -2xe^{-x^2}$, so $g\'\'(1) = -\\frac{2}{e}$. The value $\\frac{1}{e}$ is $g\'(1)$, and $-\\frac{1}{e}$ forgets the chain factor $2x$.',
    partNumber: 4,
    partTitle: 'FTC Applications at BC Level',
  },

  // Part 5 — Scoring Maximum Points
  {
    id: 'ai-ent-5a',
    question: 'On a calculator-active free-response part, you need $\\int_0^2 e^{-x^2}\\,dx$. Which response earns full credit?',
    options: [
      'Write the integral and report $0.882$',
      'Find an antiderivative of $e^{-x^2}$ by substitution, then evaluate',
      'Report $0.88$, which is close enough for the answer point',
      'Give only the value $0.882$ with no setup shown',
    ],
    correctIndex: 0,
    explanation: 'On the calculator section you show the setup (the definite integral) and report the calculator value correct to three decimal places. $e^{-x^2}$ has no elementary antiderivative, two decimal places is not accurate enough, and a bare number without the setup loses the setup point.',
    partNumber: 5,
    partTitle: 'Scoring Maximum Points',
  },
  {
    id: 'ai-ent-5b',
    question: 'Which antiderivative of $\\frac{1}{3x - 2}$ is correct for every $x \\ne \\frac{2}{3}$?',
    options: [
      '$\\ln|3x-2|+C$',
      '$\\frac{1}{3}\\ln|3x-2|+C$',
      '$\\frac{1}{3}\\ln(3x-2)+C$',
      '$-\\frac{1}{3}\\ln|3x-2|+C$',
    ],
    correctIndex: 1,
    explanation: 'With $u = 3x - 2$, $du = 3\\,dx$, so the integral is $\\frac{1}{3}\\ln|3x - 2| + C$. Without the absolute value the formula fails for $x < \\frac{2}{3}$, and leaving out the $\\frac{1}{3}$ ignores the chain factor.',
    partNumber: 5,
    partTitle: 'Scoring Maximum Points',
  },

  // Part 6 — Timed Practice
  {
    id: 'ai-ent-6a',
    question: 'What is $\\int_0^3 |x^2 - 1|\\,dx$?',
    options: ['$6$', '$\\frac{20}{3}$', '$\\frac{22}{3}$', '$\\frac{2}{3}$'],
    correctIndex: 2,
    explanation: 'Split where $x^2 - 1$ changes sign: $\\int_0^1 (1 - x^2)\\,dx + \\int_1^3 (x^2 - 1)\\,dx = \\frac{2}{3} + \\frac{20}{3} = \\frac{22}{3}$. Ignoring the absolute value gives $6$, and each of the other options keeps only one piece.',
    partNumber: 6,
    partTitle: 'Timed Practice',
  },
  {
    id: 'ai-ent-6b',
    question: 'What is $\\int \\frac{x}{x^2 + 4x + 5}\\,dx$?',
    options: [
      '$\\frac{1}{2}\\ln(x^2+4x+5)+C$',
      '$\\frac{1}{2}\\ln(x^2+4x+5)-\\arctan(x+2)+C$',
      '$\\ln(x^2+4x+5)-2\\arctan(x+2)+C$',
      '$\\frac{1}{2}\\ln(x^2+4x+5)-2\\arctan(x+2)+C$',
    ],
    correctIndex: 3,
    explanation: 'Write $x = \\frac{1}{2}(2x + 4) - 2$. The first piece gives $\\frac{1}{2}\\ln(x^2 + 4x + 5)$, and the second is $-2\\int \\frac{dx}{(x+2)^2 + 1} = -2\\arctan(x + 2)$. Dropping the $-2$ correction, or the $\\frac{1}{2}$, are the usual slips.',
    partNumber: 6,
    partTitle: 'Timed Practice',
  },

  // Part 7 — Final Assessment
  {
    id: 'ai-ent-7a',
    question: 'What is $\\int \\sin^2 x\\,dx$?',
    options: [
      '$\\frac{x}{2}-\\frac{\\sin 2x}{4}+C$',
      '$\\frac{\\sin^3 x}{3}+C$',
      '$\\frac{x}{2}+\\frac{\\sin 2x}{4}+C$',
      '$-\\frac{\\cos^3 x}{3}+C$',
    ],
    correctIndex: 0,
    explanation: 'Use $\\sin^2 x = \\frac{1 - \\cos 2x}{2}$, which integrates to $\\frac{x}{2} - \\frac{\\sin 2x}{4} + C$. The plus sign belongs to $\\cos^2 x$, and the power rule cannot be applied to $\\sin x$ without its derivative present.',
    partNumber: 7,
    partTitle: 'Final Assessment',
  },
  {
    id: 'ai-ent-7b',
    question: 'What is $\\int \\frac{e^{2x}}{1 + e^x}\\,dx$?',
    options: [
      '$e^{2x}-\\ln(1+e^x)+C$',
      '$\\frac{e^{2x}}{2}\\ln(1+e^x)+C$',
      '$e^x-\\ln(1+e^x)+C$',
      '$e^x-2\\ln(1+e^x)+C$',
    ],
    correctIndex: 2,
    explanation: 'With $u = e^x$, $du = e^x\\,dx$, the integral becomes $\\int \\frac{u}{1 + u}\\,du = \\int \\left(1 - \\frac{1}{1+u}\\right)du = u - \\ln(1 + u) + C$. Keeping $e^{2x}$ after substituting skips the change of variable.',
    partNumber: 7,
    partTitle: 'Final Assessment',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Choosing the Right Method' },
    { partNumber: 2, partTitle: 'Integration by Parts in Depth' },
    { partNumber: 3, partTitle: 'Simplify First, Integrate Second' },
    { partNumber: 4, partTitle: 'FTC Applications at BC Level' },
    { partNumber: 5, partTitle: 'Scoring Maximum Points' },
    { partNumber: 6, partTitle: 'Timed Practice' },
    { partNumber: 7, partTitle: 'Final Assessment' },
  ]
}
