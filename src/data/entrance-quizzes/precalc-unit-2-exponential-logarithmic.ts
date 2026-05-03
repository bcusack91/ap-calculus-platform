/**
 * Entrance Quiz — AP Precalculus Unit 2: Exponential & Logarithmic Functions
 * 14 questions · 7 parts (2 per part).
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Exponential Functions — Basics
  { id: 'pcu2-1a', question: 'Which function represents exponential growth?', options: ['$f(x) = 5x + 1$', '$f(x) = 3 \\cdot 2^x$', '$f(x) = x^2$', '$f(x) = \\dfrac{1}{x}$'], correctIndex: 1, explanation: 'Exponential functions have the variable in the exponent: $a\\cdot b^x$ with $b>1$.', partNumber: 1, partTitle: 'Exponential Functions — Basics' },
  { id: 'pcu2-1b', question: 'For $f(x) = 4 \\cdot (1/2)^x$, the function:', options: ['Grows without bound', 'Decays toward 0 as $x\\to\\infty$', 'Is constant at 4', 'Has no horizontal asymptote'], correctIndex: 1, explanation: 'Base $0 < b < 1$ gives exponential decay; HA at $y=0$.', partNumber: 1, partTitle: 'Exponential Functions — Basics' },

  // Part 2: Growth, Decay & Modeling
  { id: 'pcu2-2a', question: 'A population doubles every 5 years. Starting at 200, the model is:', options: ['$P(t) = 200 \\cdot 2^t$', '$P(t) = 200 \\cdot 2^{t/5}$', '$P(t) = 200 \\cdot 5^t$', '$P(t) = 200 + 2t$'], correctIndex: 1, explanation: 'Each 5 years multiplies by 2 ⇒ exponent is $t/5$.', partNumber: 2, partTitle: 'Growth, Decay & Modeling' },
  { id: 'pcu2-2b', question: 'For $A = A_0 e^{-kt}$ with $k > 0$, the half-life is:', options: ['$\\ln 2 / k$', '$k / \\ln 2$', '$1/k$', '$2k$'], correctIndex: 0, explanation: 'Solve $e^{-kt} = 1/2 \\Rightarrow t = \\ln(2)/k$.', partNumber: 2, partTitle: 'Growth, Decay & Modeling' },

  // Part 3: Logarithmic Functions — Basics
  { id: 'pcu2-3a', question: 'Evaluate $\\log_3(81)$.', options: ['3', '4', '5', '9'], correctIndex: 1, explanation: '$3^4 = 81$.', partNumber: 3, partTitle: 'Logarithmic Functions — Basics' },
  { id: 'pcu2-3b', question: 'The graph of $y = \\log_b(x)$ for $b>1$ has:', options: ['Vertical asymptote $x=0$', 'Horizontal asymptote $y=0$', 'No asymptote', 'Two branches'], correctIndex: 0, explanation: 'Logarithmic functions have a vertical asymptote at $x=0$.', partNumber: 3, partTitle: 'Logarithmic Functions — Basics' },

  // Part 4: Logarithm Properties
  { id: 'pcu2-4a', question: '$\\log(MN)$ equals:', options: ['$\\log M \\cdot \\log N$', '$\\log M + \\log N$', '$\\log M - \\log N$', '$\\log(M+N)$'], correctIndex: 1, explanation: 'Product rule: $\\log(MN) = \\log M + \\log N$.', partNumber: 4, partTitle: 'Logarithm Properties' },
  { id: 'pcu2-4b', question: 'Rewrite $\\log_b(x^5)$ using a property:', options: ['$5\\log_b x$', '$x \\cdot \\log_b 5$', '$\\log_b x \\cdot \\log_b 5$', '$\\log_b 5 + \\log_b x$'], correctIndex: 0, explanation: 'Power rule: $\\log_b(x^p) = p\\log_b x$.', partNumber: 4, partTitle: 'Logarithm Properties' },

  // Part 5: Solving Exponential & Log Equations
  { id: 'pcu2-5a', question: 'Solve $2^x = 32$.', options: ['$x = 4$', '$x = 5$', '$x = 6$', '$x = 16$'], correctIndex: 1, explanation: '$2^5 = 32$.', partNumber: 5, partTitle: 'Solving Exponential & Log Equations' },
  { id: 'pcu2-5b', question: 'Solve $\\log_2(x) + \\log_2(x-2) = 3$.', options: ['$x = 2$', '$x = 4$', '$x = -2, 4$', '$x = 8$'], correctIndex: 1, explanation: '$\\log_2[x(x-2)] = 3 \\Rightarrow x^2 - 2x = 8 \\Rightarrow (x-4)(x+2)=0$. Domain ⇒ $x=4$.', partNumber: 5, partTitle: 'Solving Exponential & Log Equations' },

  // Part 6: Change of Base & Natural Logs
  { id: 'pcu2-6a', question: 'Use change-of-base: $\\log_4(50)$ ≈ ?', options: ['2.82', '3.91', '1.43', '5.00'], correctIndex: 0, explanation: '$\\log_4 50 = \\ln 50 / \\ln 4 \\approx 3.912/1.386 \\approx 2.82$.', partNumber: 6, partTitle: 'Change of Base & Natural Logs' },
  { id: 'pcu2-6b', question: 'Solve $e^{2x} = 7$.', options: ['$x = \\ln 7$', '$x = \\dfrac{\\ln 7}{2}$', '$x = \\dfrac{e^7}{2}$', '$x = e^{7/2}$'], correctIndex: 1, explanation: 'Take ln: $2x = \\ln 7 \\Rightarrow x = (\\ln 7)/2$.', partNumber: 6, partTitle: 'Change of Base & Natural Logs' },

  // Part 7: Modeling & Comparisons
  { id: 'pcu2-7a', question: '\\$1000 invested at 6% annual interest, compounded continuously, after 5 years grows to (use $A=Pe^{rt}$):', options: ['$\\$1300.00$', '$\\$1349.86$', '$\\$1338.23$', '$\\$1500.00$'], correctIndex: 1, explanation: '$A = 1000 \\cdot e^{0.30} \\approx 1000(1.3499) \\approx \\$1349.86$.', partNumber: 7, partTitle: 'Modeling & Comparisons' },
  { id: 'pcu2-7b', question: 'For large $x$, exponential functions $b^x$ ($b>1$) compared to polynomials $x^n$:', options: ['Always grow slower', 'Always grow at the same rate', 'Eventually grow faster than any polynomial', 'Are bounded'], correctIndex: 2, explanation: 'For sufficiently large $x$, $b^x$ outgrows any fixed-degree polynomial.', partNumber: 7, partTitle: 'Modeling & Comparisons' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Exponential Functions — Basics' },
    { partNumber: 2, partTitle: 'Growth, Decay & Modeling' },
    { partNumber: 3, partTitle: 'Logarithmic Functions — Basics' },
    { partNumber: 4, partTitle: 'Logarithm Properties' },
    { partNumber: 5, partTitle: 'Solving Exponential & Log Equations' },
    { partNumber: 6, partTitle: 'Change of Base & Natural Logs' },
    { partNumber: 7, partTitle: 'Modeling & Comparisons' },
  ]
}
