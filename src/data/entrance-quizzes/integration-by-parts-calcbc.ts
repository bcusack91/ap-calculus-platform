/**
 * Entrance Quiz — Integration by Parts (AP Calculus BC)
 * 14 questions covering all 7 lesson parts (2 per part).
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: The Integration by Parts Formula
  { id: 'ibp-ent-1a', question: 'Integration by parts states $\\int u\\,dv =$', options: ['$uv + \\int v\\,du$', '$uv - \\int v\\,du$', '$\\int u\\,du \\cdot \\int dv$', '$u \\cdot v$'], correctIndex: 1, explanation: '$\\int u\\,dv = uv - \\int v\\,du$.', partNumber: 1, partTitle: 'The Integration by Parts Formula' },
  { id: 'ibp-ent-1b', question: 'Integration by parts is the reverse of:', options: ['The chain rule', 'The product rule', 'The quotient rule', 'The power rule'], correctIndex: 1, explanation: 'IBP undoes the product rule for differentiation.', partNumber: 1, partTitle: 'The Integration by Parts Formula' },
  // Part 2: Choosing u and dv (LIATE)
  { id: 'ibp-ent-2a', question: 'In LIATE, the \'L\' stands for:', options: ['Logarithmic', 'Linear', 'Limit', 'Laplace'], correctIndex: 0, explanation: 'LIATE: Logarithmic, Inverse trig, Algebraic, Trigonometric, Exponential.', partNumber: 2, partTitle: 'Choosing u and dv (LIATE)' },
  { id: 'ibp-ent-2b', question: 'For $\\int x e^x\\,dx$, the best choice for $u$ is:', options: ['$e^x$', '$x$', '$xe^x$', '$dx$'], correctIndex: 1, explanation: 'Let $u = x$ (algebraic) and $dv = e^x\\,dx$.', partNumber: 2, partTitle: 'Choosing u and dv (LIATE)' },
  // Part 3: Definite Integrals with IBP
  { id: 'ibp-ent-3a', question: '$\\int_0^1 x e^x\\,dx$ equals:', options: ['$1$', '$e - 1$', '$e$', '$2e - 1$'], correctIndex: 0, explanation: 'IBP: $[xe^x]_0^1 - \\int_0^1 e^x\\,dx = e - (e-1) = 1$.', partNumber: 3, partTitle: 'Definite Integrals with IBP' },
  { id: 'ibp-ent-3b', question: 'When using IBP with definite integrals, evaluate the $[uv]$ part:', options: ['Before integrating $\\int v\\,du$', 'At the limits $a$ and $b$', 'At $x = 0$ only', 'Nowhere'], correctIndex: 1, explanation: 'Apply the limits to $uv$ as $[uv]_a^b$.', partNumber: 3, partTitle: 'Definite Integrals with IBP' },
  // Part 4: Repeated Integration by Parts
  { id: 'ibp-ent-4a', question: '$\\int e^x \\sin x\\,dx$ requires IBP:', options: ['Once', 'Twice (then solve for the integral)', 'Three times', 'Never — use substitution'], correctIndex: 1, explanation: 'Apply IBP twice; the original integral reappears, then solve algebraically.', partNumber: 4, partTitle: 'Repeated Integration by Parts' },
  { id: 'ibp-ent-4b', question: 'After two applications of IBP to $\\int e^x \\cos x\\,dx$, you get $I = e^x \\sin x + e^x \\cos x - I$. So $I =$', options: ['$\\frac{e^x(\\sin x + \\cos x)}{2} + C$', '$e^x \\sin x + C$', '$e^x \\cos x + C$', '$\\frac{e^x}{2} + C$'], correctIndex: 0, explanation: '$2I = e^x(\\sin x + \\cos x)$, so $I = \\frac{e^x(\\sin x + \\cos x)}{2} + C$.', partNumber: 4, partTitle: 'Repeated Integration by Parts' },
  // Part 5: Tabular Method
  { id: 'ibp-ent-5a', question: 'The tabular method is efficient when one factor:', options: ['Is a polynomial that eventually differentiates to zero', 'Is always exponential', 'Cannot be integrated', 'Is a constant'], correctIndex: 0, explanation: 'Polynomials differentiate to zero in finitely many steps.', partNumber: 5, partTitle: 'Tabular Method' },
  { id: 'ibp-ent-5b', question: 'In the tabular method, alternate signs follow the pattern:', options: ['$+, -, +, -, ...$', '$+, +, +, ...$', '$-, -, -, ...$', '$-, +, -, +, ...$'], correctIndex: 0, explanation: 'Signs alternate: $+, -, +, -, \\ldots$.', partNumber: 5, partTitle: 'Tabular Method' },
  // Part 6: Problem-Solving Workshop
  { id: 'ibp-ent-6a', question: '$\\int x^2 \\sin x\\,dx$ using tabular method requires how many rows?', options: ['$2$', '$3$', '$4$', '$5$'], correctIndex: 2, explanation: '$x^2 \\to 2x \\to 2 \\to 0$: three differentiations, so 4 rows.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'ibp-ent-6b', question: '$\\int \\ln x\\,dx =$', options: ['$x \\ln x - x + C$', '$\\frac{1}{x} + C$', '$x \\ln x + C$', '$\\frac{\\ln x}{x} + C$'], correctIndex: 0, explanation: 'IBP: $u = \\ln x$, $dv = dx$. $= x\\ln x - \\int 1\\,dx = x\\ln x - x + C$.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  // Part 7: Review & AP Exam Applications
  { id: 'ibp-ent-7a', question: '$\\int \\arctan x\\,dx$ uses IBP with $u =$', options: ['$\\arctan x$', '$x$', '$\\frac{1}{1+x^2}$', '$dx$'], correctIndex: 0, explanation: 'Let $u = \\arctan x$, $dv = dx$.', partNumber: 7, partTitle: 'Review & AP Exam Applications' },
  { id: 'ibp-ent-7b', question: 'On the AP BC exam, IBP problems often involve:', options: ['Only polynomials', 'Products of unlike function types', 'Single functions', 'Constants'], correctIndex: 1, explanation: 'IBP is used when the integrand is a product of different types of functions.', partNumber: 7, partTitle: 'Review & AP Exam Applications' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'The Integration by Parts Formula' },
    { partNumber: 2, partTitle: 'Choosing u and dv (LIATE)' },
    { partNumber: 3, partTitle: 'Definite Integrals with IBP' },
    { partNumber: 4, partTitle: 'Repeated Integration by Parts' },
    { partNumber: 5, partTitle: 'Tabular Method' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Review & AP Exam Applications' },
  ]
}
