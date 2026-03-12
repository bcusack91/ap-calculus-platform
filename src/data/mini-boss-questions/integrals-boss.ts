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
    question: 'Evaluate: ∫(3x² + 4x - 1) dx',
    correctAnswer: 'x³ + 2x² - x + C',
    options: [
      { label: 'A', value: 'x³ + 2x² - x + C', isCorrect: true },
      { label: 'B', value: '6x + 4 + C', isCorrect: false, explanation: 'That is the derivative, not the antiderivative' },
      { label: 'C', value: 'x³ + 2x² - x', isCorrect: false, explanation: 'Don\'t forget the constant of integration +C' },
      { label: 'D', value: '3x³ + 4x² - x + C', isCorrect: false, explanation: 'Power rule for integrals: add 1 to exponent, divide by new exponent' },
    ],
  },
  {
    id: 'int-2',
    type: 'basic',
    question: 'Evaluate: ∫(1/x + e^x) dx',
    correctAnswer: 'ln|x| + e^x + C',
    options: [
      { label: 'A', value: 'ln|x| + e^x + C', isCorrect: true },
      { label: 'B', value: 'ln(x) + e^x + C', isCorrect: false, explanation: 'Need absolute value: ln|x| for negative x values' },
      { label: 'C', value: '-1/x² + e^x + C', isCorrect: false, explanation: '∫(1/x)dx = ln|x|, not -1/x²' },
      { label: 'D', value: 'ln|x| + x·e^x + C', isCorrect: false, explanation: '∫e^x dx = e^x, not x·e^x' },
    ],
  },
  {
    id: 'int-3',
    type: 'u-sub',
    question: 'Evaluate: ∫2x·cos(x²) dx',
    correctAnswer: 'sin(x²) + C',
    options: [
      { label: 'A', value: 'sin(x²) + C', isCorrect: true },
      { label: 'B', value: 'x²·sin(x²) + C', isCorrect: false, explanation: 'Let u = x², du = 2x dx. ∫cos(u) du = sin(u) = sin(x²)' },
      { label: 'C', value: '-sin(x²) + C', isCorrect: false, explanation: '∫cos(u) du = sin(u), positive sign' },
      { label: 'D', value: '2sin(x²) + C', isCorrect: false, explanation: 'The 2x is exactly du, so no extra coefficient' },
    ],
  },
  {
    id: 'int-4',
    type: 'u-sub',
    question: 'Evaluate: ∫x·e^(x²) dx',
    correctAnswer: '(1/2)e^(x²) + C',
    options: [
      { label: 'A', value: '(1/2)e^(x²) + C', isCorrect: true },
      { label: 'B', value: 'e^(x²) + C', isCorrect: false, explanation: 'u = x², du = 2x dx, so x dx = du/2. Need the 1/2 factor.' },
      { label: 'C', value: '2e^(x²) + C', isCorrect: false, explanation: 'We divide by 2, not multiply: ∫(1/2)e^u du = (1/2)e^u' },
      { label: 'D', value: 'x²·e^(x²) + C', isCorrect: false, explanation: 'Use u-substitution with u = x²' },
    ],
  },
  {
    id: 'int-5',
    type: 'definite',
    question: 'Evaluate: ∫₀² (3x²) dx',
    correctAnswer: '8',
    options: [
      { label: 'A', value: '8', isCorrect: true },
      { label: 'B', value: '12', isCorrect: false, explanation: 'Antiderivative is x³. Evaluate: 2³ - 0³ = 8 - 0 = 8' },
      { label: 'C', value: '6', isCorrect: false, explanation: '∫3x² dx = x³. Then x³ evaluated from 0 to 2 = 8' },
      { label: 'D', value: '24', isCorrect: false, explanation: 'Don\'t multiply by 3 again — antiderivative of 3x² is x³' },
    ],
  },
  {
    id: 'int-6',
    type: 'definite',
    question: 'Evaluate: ∫₁ᵉ (1/x) dx',
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
    question: 'If F(x) = ∫₀ˣ (t² + 1) dt, find F\'(x)',
    correctAnswer: 'x² + 1',
    options: [
      { label: 'A', value: 'x² + 1', isCorrect: true },
      { label: 'B', value: 'x³/3 + x', isCorrect: false, explanation: 'FTC Part 1: F\'(x) = f(x). Just replace t with x in the integrand.' },
      { label: 'C', value: '2x', isCorrect: false, explanation: 'F\'(x) = the integrand evaluated at x, not its derivative' },
      { label: 'D', value: 't² + 1', isCorrect: false, explanation: 'Replace the dummy variable t with x: F\'(x) = x² + 1' },
    ],
  },
  {
    id: 'int-8',
    type: 'area',
    question: 'Find the area between y = x² and y = x from x = 0 to x = 1',
    correctAnswer: '1/6',
    options: [
      { label: 'A', value: '1/6', isCorrect: true },
      { label: 'B', value: '1/3', isCorrect: false, explanation: '∫₀¹(x - x²)dx = [x²/2 - x³/3]₀¹ = 1/2 - 1/3 = 1/6' },
      { label: 'C', value: '1/2', isCorrect: false, explanation: 'Subtract lower from upper: ∫(x - x²)dx, not just ∫x dx' },
      { label: 'D', value: '2/3', isCorrect: false, explanation: 'Area = ∫(top - bottom) = ∫(x - x²)dx = 1/6' },
    ],
  },
  {
    id: 'int-9',
    type: 'trig-integrals',
    question: 'Evaluate: ∫cos²(x) dx',
    correctAnswer: 'x/2 + sin(2x)/4 + C',
    options: [
      { label: 'A', value: 'x/2 + sin(2x)/4 + C', isCorrect: true },
      { label: 'B', value: 'cos³(x)/3 + C', isCorrect: false, explanation: 'Use power-reducing formula: cos²(x) = (1 + cos(2x))/2' },
      { label: 'C', value: 'sin(x)cos(x) + C', isCorrect: false, explanation: 'sin(x)cos(x) = sin(2x)/2, which is only part of the answer' },
      { label: 'D', value: 'x/2 + cos(2x)/4 + C', isCorrect: false, explanation: '∫cos(2x)dx = sin(2x)/2, so with the 1/2 factor: sin(2x)/4' },
    ],
  },
  {
    id: 'int-10',
    type: 'basic',
    question: 'Evaluate: ∫sec²(x) dx',
    correctAnswer: 'tan(x) + C',
    options: [
      { label: 'A', value: 'tan(x) + C', isCorrect: true },
      { label: 'B', value: 'sec(x)tan(x) + C', isCorrect: false, explanation: 'sec(x)tan(x) is the derivative of sec(x), not the integral of sec²(x)' },
      { label: 'C', value: '2sec(x)tan(x) + C', isCorrect: false, explanation: 'Since d/dx[tan(x)] = sec²(x), the antiderivative of sec²(x) is tan(x)' },
      { label: 'D', value: '-cot(x) + C', isCorrect: false, explanation: '-cot(x) is the antiderivative of csc²(x), not sec²(x)' },
    ],
  },
]
