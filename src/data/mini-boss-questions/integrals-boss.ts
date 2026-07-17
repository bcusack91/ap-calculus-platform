// Mini-Boss Questions for Integrals
// Topics: basic antiderivatives, u-substitution, definite integrals, area, FTC

export interface MiniBossQuestion {
  id: string
  type: 'basic' | 'u-sub' | 'definite' | 'area' | 'ftc' | 'trig-integrals'
  question: string
  correctAnswer: string
  options: {
    label: 'A' | 'B' | 'C' | 'D'
    value: string
    isCorrect: boolean
    explanation?: string
  }[]
}

export const integralsBossQuestions: MiniBossQuestion[] = [
  {
    id: 'int-1',
    type: 'basic',
    question: 'Evaluate: $\\int (3x^{2} + 4x - 1)$ dx',
    correctAnswer: '$x^{3}$ + $2x^{2}$ - x + C',
    options: [
      { label: 'A', value: '$x^{3}$ + $2x^{2}$ - x + C', isCorrect: true },
      { label: 'B', value: '6x + 4 + C', isCorrect: false, explanation: 'That is the derivative, not the antiderivative' },
      { label: 'C', value: '$x^{3}$ + $2x^{2}$ - x', isCorrect: false, explanation: 'Don\'t forget the constant of integration +C' },
      { label: 'D', value: '$3x^{3}$ + $4x^{2}$ - x + C', isCorrect: false, explanation: 'Power rule for integrals: add 1 to exponent, divide by new exponent' },
    ],
  },
  {
    id: 'int-2',
    type: 'basic',
    question: 'Evaluate: $\\int (1/x + e^{x})$ dx',
    correctAnswer: 'ln|x| + $e^{x}$ + C',
    options: [
      { label: 'A', value: 'ln|x| + $e^{x}$ + C', isCorrect: true },
      { label: 'B', value: 'ln(x) + $e^{x}$ + C', isCorrect: false, explanation: 'Need absolute value: ln|x| for negative x values' },
      { label: 'C', value: '$-1/x^{2}$ + $e^{x}$ + C', isCorrect: false, explanation: '∫(1/x)dx = ln|x|, not $-1/x^{2}$' },
      { label: 'D', value: 'ln|x| + $x\\cdot e^{x}$ + C', isCorrect: false, explanation: '$\\int e^{x}$ dx = $e^{x}$, not $x\\cdot e^{x}$' },
    ],
  },
  {
    id: 'int-3',
    type: 'u-sub',
    question: 'Evaluate: $\\int 2x\\cdot \\cos (x^{2})$ dx',
    correctAnswer: '$\\sin (x^{2})$ + C',
    options: [
      { label: 'A', value: '$\\sin (x^{2})$ + C', isCorrect: true },
      { label: 'B', value: '$x^{2}\\cdot \\sin (x^{2})$ + C', isCorrect: false, explanation: 'Let u = $x^{2}$, du = 2x dx. ∫cos(u) du = sin(u) = $\\sin (x^{2})$' },
      { label: 'C', value: '$-\\sin (x^{2})$ + C', isCorrect: false, explanation: '∫cos(u) du = sin(u), positive sign' },
      { label: 'D', value: '$2\\sin (x^{2})$ + C', isCorrect: false, explanation: 'The 2x is exactly du, so no extra coefficient' },
    ],
  },
  {
    id: 'int-4',
    type: 'u-sub',
    question: 'Evaluate: $\\int x\\cdot e^{x^{2}}$ dx',
    correctAnswer: '$(1/2)e^{x^{2}}$ + C',
    options: [
      { label: 'A', value: '$(1/2)e^{x^{2}}$ + C', isCorrect: true },
      { label: 'B', value: '$e^{x^{2}}$ + C', isCorrect: false, explanation: 'u = $x^{2}$, du = 2x dx, so x dx = du/2. Need the 1/2 factor.' },
      { label: 'C', value: '$2e^{x^{2}}$ + C', isCorrect: false, explanation: 'We divide by 2, not multiply: $\\int (1/2)e^{u}$ du = $(1/2)e^{u}$' },
      { label: 'D', value: '$x^{2}\\cdot e^{x^{2}}$ + C', isCorrect: false, explanation: 'Use u-substitution with u = $x^{2}$' },
    ],
  },
  {
    id: 'int-5',
    type: 'definite',
    question: 'Evaluate: $\\int_{0}^{2}$ $(3x^{2})$ dx',
    correctAnswer: '8',
    options: [
      { label: 'A', value: '8', isCorrect: true },
      { label: 'B', value: '12', isCorrect: false, explanation: 'Antiderivative is $x^{3}$. Evaluate: $2^{3}$ - $0^{3}$ = 8 - 0 = 8' },
      { label: 'C', value: '6', isCorrect: false, explanation: '$\\int 3x^{2}$ dx = $x^{3}$. Then $x^{3}$ evaluated from 0 to 2 = 8' },
      { label: 'D', value: '24', isCorrect: false, explanation: 'Don\'t multiply by 3 again — antiderivative of $3x^{2}$ is $x^{3}$' },
    ],
  },
  {
    id: 'int-6',
    type: 'definite',
    question: 'Evaluate: $\\int_{1}^{e}$ (1/x) dx',
    correctAnswer: '1',
    options: [
      { label: 'A', value: '1', isCorrect: true },
      { label: 'B', value: 'e', isCorrect: false, explanation: 'ln|x| from 1 to e = ln(e) - ln(1) = 1 - 0 = 1' },
      { label: 'C', value: 'e - 1', isCorrect: false, explanation: 'ln(e) = 1, ln(1) = 0, so the answer is 1' },
      { label: 'D', value: '0', isCorrect: false, explanation: 'ln(e) = 1, not 0' },
    ],
  },
  {
    id: 'int-7',
    type: 'ftc',
    question: 'If F(x) = $\\int_{0}^{x}$ $(t^{2} + 1)$ dt, find F\'(x)',
    correctAnswer: '$x^{2}$ + 1',
    options: [
      { label: 'A', value: '$x^{2}$ + 1', isCorrect: true },
      { label: 'B', value: '$x^{3}/3$ + x', isCorrect: false, explanation: 'FTC Part 1: F\'(x) = f(x). Just replace t with x in the integrand.' },
      { label: 'C', value: '2x', isCorrect: false, explanation: 'F\'(x) = the integrand evaluated at x, not its derivative' },
      { label: 'D', value: '$t^{2}$ + 1', isCorrect: false, explanation: 'Replace the dummy variable t with x: F\'(x) = $x^{2}$ + 1' },
    ],
  },
  {
    id: 'int-8',
    type: 'area',
    question: 'Find the area between y = $x^{2}$ and y = x from x = 0 to x = 1',
    correctAnswer: '1/6',
    options: [
      { label: 'A', value: '1/6', isCorrect: true },
      { label: 'B', value: '1/3', isCorrect: false, explanation: '$\\int_{0}^{1}(x - x^{2})dx$ = [$x^{2}/2$ - $x^{3}/3$]$ {}_{0}^{1}$ = 1/2 - 1/3 = 1/6' },
      { label: 'C', value: '1/2', isCorrect: false, explanation: 'Subtract lower from upper: $\\int (x - x^{2})dx$, not just ∫x dx' },
      { label: 'D', value: '2/3', isCorrect: false, explanation: 'Area = ∫(top - bottom) = $\\int (x - x^{2})dx$ = 1/6' },
    ],
  },
  {
    id: 'int-9',
    type: 'trig-integrals',
    question: 'Evaluate: $\\int \\cos^{2}(x)$ dx',
    correctAnswer: 'x/2 + sin(2x)/4 + C',
    options: [
      { label: 'A', value: 'x/2 + sin(2x)/4 + C', isCorrect: true },
      { label: 'B', value: '$\\cos^{3}(x)/3$ + C', isCorrect: false, explanation: 'Use power-reducing formula: $\\cos^{2}(x)$ = (1 + cos(2x))/2' },
      { label: 'C', value: 'sin(x)cos(x) + C', isCorrect: false, explanation: 'sin(x)cos(x) = sin(2x)/2, which is only part of the answer' },
      { label: 'D', value: 'x/2 + cos(2x)/4 + C', isCorrect: false, explanation: '∫cos(2x)dx = sin(2x)/2, so with the 1/2 factor: sin(2x)/4' },
    ],
  },
  {
    id: 'int-10',
    type: 'basic',
    question: 'Evaluate: $\\int \\sec^{2}(x)$ dx',
    correctAnswer: 'tan(x) + C',
    options: [
      { label: 'A', value: 'tan(x) + C', isCorrect: true },
      { label: 'B', value: 'sec(x)tan(x) + C', isCorrect: false, explanation: 'sec(x)tan(x) is the derivative of sec(x), not the integral of $\\sec^{2}(x)$' },
      { label: 'C', value: '2sec(x)tan(x) + C', isCorrect: false, explanation: 'Since d/dx[tan(x)] = $\\sec^{2}(x)$, the antiderivative of $\\sec^{2}(x)$ is tan(x)' },
      { label: 'D', value: '-cot(x) + C', isCorrect: false, explanation: '-cot(x) is the antiderivative of $\\csc^{2}(x)$, not $\\sec^{2}(x)$' },
    ],
  },
]
