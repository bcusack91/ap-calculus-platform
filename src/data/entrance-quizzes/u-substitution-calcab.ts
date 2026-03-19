/**
 * Entrance Quiz — u-Substitution (AP Calculus AB)
 * 14 questions covering all 7 lesson parts (2 per part).
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Recognizing Composite Functions
  {
    id: 'us-ent-1a',
    question: 'u-substitution is the reverse of:',
    options: ['The power rule', 'The chain rule', 'The product rule', 'The quotient rule'],
    correctIndex: 1,
    explanation: 'u-substitution reverses the chain rule for differentiation.',
    partNumber: 1,
    partTitle: 'Recognizing Composite Functions',
  },
  {
    id: 'us-ent-1b',
    question: 'In $\\int 2x \\cos(x^2)\\,dx$, the inner function (good choice for $u$) is:',
    options: ['$2x$', '$x^2$', '$\\cos(x^2)$', '$2x\\cos(x^2)$'],
    correctIndex: 1,
    explanation: 'Set $u = x^2$, then $du = 2x\\,dx$.',
    partNumber: 1,
    partTitle: 'Recognizing Composite Functions',
  },

  // Part 2: Setting Up u-Substitution
  {
    id: 'us-ent-2a',
    question: 'If $u = 3x + 1$, then $du =$',
    options: ['$3\\,dx$', '$dx$', '$3x\\,dx$', '$(3x+1)\\,dx$'],
    correctIndex: 0,
    explanation: '$\\frac{du}{dx} = 3$, so $du = 3\\,dx$.',
    partNumber: 2,
    partTitle: 'Setting Up u-Substitution',
  },
  {
    id: 'us-ent-2b',
    question: '$\\int 2x(x^2+1)^5\\,dx$: with $u = x^2+1$, this becomes:',
    options: ['$\\int u^5\\,du$', '$\\int 2u^5\\,du$', '$\\int u^5\\,dx$', '$\\int (x^2+1)^5\\,du$'],
    correctIndex: 0,
    explanation: '$du = 2x\\,dx$, so the integral becomes $\\int u^5\\,du$.',
    partNumber: 2,
    partTitle: 'Setting Up u-Substitution',
  },

  // Part 3: Adjusting for Constants
  {
    id: 'us-ent-3a',
    question: '$\\int x e^{x^2}\\,dx$: with $u = x^2$, $du = 2x\\,dx$, so $x\\,dx =$',
    options: ['$du$', '$\\frac{du}{2}$', '$2\\,du$', '$\\frac{du}{x}$'],
    correctIndex: 1,
    explanation: 'Divide both sides of $du = 2x\\,dx$ by 2.',
    partNumber: 3,
    partTitle: 'Adjusting for Constants',
  },
  {
    id: 'us-ent-3b',
    question: '$\\int \\cos(5x)\\,dx =$',
    options: ['$\\sin(5x) + C$', '$\\frac{\\sin(5x)}{5} + C$', '$5\\sin(5x) + C$', '$-\\sin(5x) + C$'],
    correctIndex: 1,
    explanation: '$u=5x$, $du=5dx$, so $\\int \\frac{\\cos u}{5}\\,du = \\frac{\\sin u}{5} + C$.',
    partNumber: 3,
    partTitle: 'Adjusting for Constants',
  },

  // Part 4: Definite Integrals with Substitution
  {
    id: 'us-ent-4a',
    question: 'When using substitution in a definite integral, you should:',
    options: ['Always convert back to $x$', 'Change the limits to $u$-values or convert back at the end', 'Leave the limits unchanged', 'Ignore the limits'],
    correctIndex: 1,
    explanation: 'Either change limits to $u$-values or substitute back to $x$ before evaluating.',
    partNumber: 4,
    partTitle: 'Definite Integrals with Substitution',
  },
  {
    id: 'us-ent-4b',
    question: '$\\int_0^1 2x(x^2+1)^3\\,dx$ with $u=x^2+1$: new limits are:',
    options: ['$u=0$ to $u=1$', '$u=1$ to $u=2$', '$u=1$ to $u=1$', '$u=0$ to $u=2$'],
    correctIndex: 1,
    explanation: 'At $x=0$: $u=1$. At $x=1$: $u=2$.',
    partNumber: 4,
    partTitle: 'Definite Integrals with Substitution',
  },

  // Part 5: Common Patterns
  {
    id: 'us-ent-5a',
    question: '$\\int \\frac{f\'(x)}{f(x)}\\,dx =$',
    options: ['$\\ln|f(x)| + C$', '$\\frac{1}{f(x)} + C$', '$f(x)\\ln x + C$', '$e^{f(x)} + C$'],
    correctIndex: 0,
    explanation: 'With $u=f(x)$: $\\int \\frac{du}{u} = \\ln|u| + C$.',
    partNumber: 5,
    partTitle: 'Common Patterns',
  },
  {
    id: 'us-ent-5b',
    question: '$\\int \\tan x\\,dx =$',
    options: ['$\\ln|\\sec x| + C$', '$\\sec^2 x + C$', '$-\\ln|\\cos x| + C$', 'Both A and C'],
    correctIndex: 3,
    explanation: '$\\int \\frac{\\sin x}{\\cos x}\\,dx = -\\ln|\\cos x| + C = \\ln|\\sec x| + C$.',
    partNumber: 5,
    partTitle: 'Common Patterns',
  },

  // Part 6: Problem-Solving Workshop
  {
    id: 'us-ent-6a',
    question: '$\\int_0^{\\pi/2} \\sin x \\cos x\\,dx$ with $u = \\sin x$:',
    options: ['$\\frac{1}{2}$', '$1$', '$0$', '$\\frac{\\pi}{4}$'],
    correctIndex: 0,
    explanation: '$du = \\cos x\\,dx$. $\\int_0^1 u\\,du = \\frac{1}{2}$.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'us-ent-6b',
    question: '$\\int x\\sqrt{x+1}\\,dx$: a good substitution is:',
    options: ['$u = x$', '$u = x+1$', '$u = \\sqrt{x+1}$', '$u = x\\sqrt{x+1}$'],
    correctIndex: 1,
    explanation: '$u = x+1$ simplifies the square root; then $x = u - 1$.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },

  // Part 7: Review & AP Exam Applications
  {
    id: 'us-ent-7a',
    question: '$\\int e^{\\sin x} \\cos x\\,dx =$',
    options: ['$e^{\\sin x} + C$', '$e^{\\cos x} + C$', '$\\sin(e^x) + C$', '$e^{\\sin x} \\sin x + C$'],
    correctIndex: 0,
    explanation: '$u = \\sin x$, $du = \\cos x\\,dx$. $\\int e^u\\,du = e^u + C$.',
    partNumber: 7,
    partTitle: 'Review & AP Exam Applications',
  },
  {
    id: 'us-ent-7b',
    question: 'After performing u-substitution, if there are still $x$-terms remaining, you should:',
    options: ['Ignore them', 'Solve $u = g(x)$ for $x$ and substitute', 'Set them to zero', 'Apply integration by parts'],
    correctIndex: 1,
    explanation: 'Express remaining $x$-terms in terms of $u$ using the substitution equation.',
    partNumber: 7,
    partTitle: 'Review & AP Exam Applications',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Recognizing Composite Functions' },
    { partNumber: 2, partTitle: 'Setting Up u-Substitution' },
    { partNumber: 3, partTitle: 'Adjusting for Constants' },
    { partNumber: 4, partTitle: 'Definite Integrals with Substitution' },
    { partNumber: 5, partTitle: 'Common Patterns' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Review & AP Exam Applications' },
  ]
}
