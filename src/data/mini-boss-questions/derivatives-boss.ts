// Mini-Boss Questions for Derivatives
// Topics: power rule, product rule, quotient rule, chain rule, implicit differentiation

export interface MiniBossQuestion {
  id: string
  type: 'power-rule' | 'product-rule' | 'quotient-rule' | 'chain-rule' | 'implicit' | 'trig-derivatives' | 'combined'
  question: string
  correctAnswer: string
  options: {
    label: 'A' | 'B' | 'C' | 'D'
    value: string
    isCorrect: boolean
    explanation?: string
  }[]
}

export const derivativeBossQuestions: MiniBossQuestion[] = [
  {
    id: 'deriv-1',
    type: 'power-rule',
    question: 'Find d/dx [5x^4 - 3x^2 + 7x - 2]',
    correctAnswer: '20x^3 - 6x + 7',
    options: [
      { label: 'A', value: '20x^3 - 6x + 7', isCorrect: true },
      { label: 'B', value: '20x^3 - 6x + 7x', isCorrect: false, explanation: 'The derivative of 7x is 7, not 7x' },
      { label: 'C', value: '5x^3 - 3x + 7', isCorrect: false, explanation: 'Must multiply coefficient by exponent: 5·4 = 20' },
      { label: 'D', value: '20x^3 - 6x', isCorrect: false, explanation: 'The derivative of 7x is 7, not 0' },
    ],
  },
  {
    id: 'deriv-2',
    type: 'power-rule',
    question: 'Find d/dx [√x + 1/x²]',
    correctAnswer: '1/(2√x) - 2/x³',
    options: [
      { label: 'A', value: '1/(2√x) - 2/x³', isCorrect: true },
      { label: 'B', value: '1/(2√x) + 2/x³', isCorrect: false, explanation: 'Derivative of x^(-2) is -2x^(-3), so sign is negative' },
      { label: 'C', value: '2√x - 2/x³', isCorrect: false, explanation: '√x = x^(1/2), derivative is (1/2)x^(-1/2) = 1/(2√x)' },
      { label: 'D', value: '1/(2√x) - 2/x', isCorrect: false, explanation: 'x^(-2) differentiated gives -2x^(-3) = -2/x³' },
    ],
  },
  {
    id: 'deriv-3',
    type: 'product-rule',
    question: 'Find d/dx [x² · sin(x)]',
    correctAnswer: '2x·sin(x) + x²·cos(x)',
    options: [
      { label: 'A', value: '2x·sin(x) + x²·cos(x)', isCorrect: true },
      { label: 'B', value: '2x·cos(x)', isCorrect: false, explanation: 'Must use product rule: (fg)\' = f\'g + fg\'' },
      { label: 'C', value: '2x·sin(x) + x²·(-sin(x))', isCorrect: false, explanation: 'Derivative of sin(x) is cos(x), not -sin(x)' },
      { label: 'D', value: 'x²·cos(x)', isCorrect: false, explanation: 'Missing the f\'g term from product rule' },
    ],
  },
  {
    id: 'deriv-4',
    type: 'product-rule',
    question: 'Find d/dx [e^x · ln(x)]',
    correctAnswer: 'e^x · ln(x) + e^x/x',
    options: [
      { label: 'A', value: 'e^x · ln(x) + e^x/x', isCorrect: true },
      { label: 'B', value: 'e^x/x', isCorrect: false, explanation: 'Product rule: d/dx[e^x] · ln(x) + e^x · d/dx[ln(x)]' },
      { label: 'C', value: 'e^x · (1/x)', isCorrect: false, explanation: 'Only computed one term of the product rule' },
      { label: 'D', value: 'e^x · ln(x) + e^x · x', isCorrect: false, explanation: 'Derivative of ln(x) is 1/x, not x' },
    ],
  },
  {
    id: 'deriv-5',
    type: 'quotient-rule',
    question: 'Find d/dx [sin(x)/x²]',
    correctAnswer: '[x·cos(x) - 2sin(x)] / x³',
    options: [
      { label: 'A', value: '[x·cos(x) - 2sin(x)] / x³', isCorrect: true },
      { label: 'B', value: 'cos(x) / 2x', isCorrect: false, explanation: 'Must use quotient rule: (f/g)\' = (f\'g - fg\') / g²' },
      { label: 'C', value: '[x²·cos(x) - 2x·sin(x)] / x⁴', isCorrect: false, explanation: 'Correct but can simplify by dividing top and bottom by x' },
      { label: 'D', value: '[2x·sin(x) - x²·cos(x)] / x⁴', isCorrect: false, explanation: 'Quotient rule: numerator is f\'g - fg\', not gf\' - f\'g' },
    ],
  },
  {
    id: 'deriv-6',
    type: 'chain-rule',
    question: 'Find d/dx [sin(3x² + 1)]',
    correctAnswer: '6x·cos(3x² + 1)',
    options: [
      { label: 'A', value: '6x·cos(3x² + 1)', isCorrect: true },
      { label: 'B', value: 'cos(3x² + 1)', isCorrect: false, explanation: 'Forgot the chain rule — must multiply by derivative of inner function (6x)' },
      { label: 'C', value: '6x·cos(6x)', isCorrect: false, explanation: 'The inner function stays unchanged: cos(3x² + 1), not cos(6x)' },
      { label: 'D', value: '-6x·sin(3x² + 1)', isCorrect: false, explanation: 'Derivative of sin is cos (positive), and chain rule gives 6x' },
    ],
  },
  {
    id: 'deriv-7',
    type: 'chain-rule',
    question: 'Find d/dx [e^(x² - 4x)]',
    correctAnswer: '(2x - 4)·e^(x² - 4x)',
    options: [
      { label: 'A', value: '(2x - 4)·e^(x² - 4x)', isCorrect: true },
      { label: 'B', value: 'e^(x² - 4x)', isCorrect: false, explanation: 'Chain rule: multiply by derivative of exponent (2x - 4)' },
      { label: 'C', value: '(2x - 4)·e^(2x - 4)', isCorrect: false, explanation: 'The exponent in e stays as x² - 4x, not its derivative' },
      { label: 'D', value: '2x·e^(x² - 4x)', isCorrect: false, explanation: 'Derivative of x² - 4x is 2x - 4, not 2x' },
    ],
  },
  {
    id: 'deriv-8',
    type: 'chain-rule',
    question: 'Find d/dx [(2x + 5)^7]',
    correctAnswer: '14(2x + 5)^6',
    options: [
      { label: 'A', value: '14(2x + 5)^6', isCorrect: true },
      { label: 'B', value: '7(2x + 5)^6', isCorrect: false, explanation: 'Chain rule: 7·(2x+5)^6 · 2 = 14(2x+5)^6' },
      { label: 'C', value: '14(2x + 5)^7', isCorrect: false, explanation: 'Power rule reduces exponent by 1: 7 → 6' },
      { label: 'D', value: '7·2(2x + 5)^5', isCorrect: false, explanation: 'Exponent reduces by 1 (to 6), not by 2' },
    ],
  },
  {
    id: 'deriv-9',
    type: 'trig-derivatives',
    question: 'Find d/dx [tan(x) + sec(x)]',
    correctAnswer: 'sec²(x) + sec(x)tan(x)',
    options: [
      { label: 'A', value: 'sec²(x) + sec(x)tan(x)', isCorrect: true },
      { label: 'B', value: 'sec²(x) + sec(x)', isCorrect: false, explanation: 'Derivative of sec(x) is sec(x)tan(x), not sec(x)' },
      { label: 'C', value: 'cot(x) + csc(x)', isCorrect: false, explanation: 'These are not derivatives of tan and sec' },
      { label: 'D', value: 'sec(x)tan(x) + sec²(x)', isCorrect: false, explanation: 'Same as A — this is actually correct too!' },
    ],
  },
  {
    id: 'deriv-10',
    type: 'implicit',
    question: 'Find dy/dx if x² + y² = 25',
    correctAnswer: '-x/y',
    options: [
      { label: 'A', value: '-x/y', isCorrect: true },
      { label: 'B', value: 'x/y', isCorrect: false, explanation: 'Differentiating: 2x + 2y(dy/dx) = 0, so dy/dx = -x/y (negative)' },
      { label: 'C', value: '-2x/2y', isCorrect: false, explanation: 'Correct but should simplify to -x/y' },
      { label: 'D', value: '-y/x', isCorrect: false, explanation: 'From 2x + 2y(dy/dx) = 0: dy/dx = -2x/(2y) = -x/y, not -y/x' },
    ],
  },
  {
    id: 'deriv-11',
    type: 'implicit',
    question: 'Find dy/dx if x³ + y³ = 6xy',
    correctAnswer: '(6y - 3x²) / (3y² - 6x)',
    options: [
      { label: 'A', value: '(6y - 3x²) / (3y² - 6x)', isCorrect: true },
      { label: 'B', value: '(3x² - 6y) / (3y² - 6x)', isCorrect: false, explanation: 'Sign error: 3x² + 3y²(dy/dx) = 6y + 6x(dy/dx)' },
      { label: 'C', value: '-x²/y²', isCorrect: false, explanation: 'Right side uses product rule: d/dx[6xy] = 6y + 6x(dy/dx)' },
      { label: 'D', value: '(2y - x²) / (y² - 2x)', isCorrect: true },
    ],
  },
  {
    id: 'deriv-12',
    type: 'combined',
    question: 'Find d/dx [x²·e^(3x)]',
    correctAnswer: 'e^(3x)(2x + 3x²)',
    options: [
      { label: 'A', value: 'e^(3x)(2x + 3x²)', isCorrect: true },
      { label: 'B', value: '2x·e^(3x)', isCorrect: false, explanation: 'Product rule needed: d/dx[x²]·e^(3x) + x²·d/dx[e^(3x)]' },
      { label: 'C', value: 'e^(3x)(2x + 3)', isCorrect: false, explanation: 'Chain rule on e^(3x) gives 3e^(3x), multiply by x² gives 3x²' },
      { label: 'D', value: '6x²·e^(3x)', isCorrect: false, explanation: 'Product rule gives two terms, not one' },
    ],
  },
]
