// Mini-Boss Questions for Limits
// Topics: algebraic evaluation, squeeze theorem, L'Hôpital's Rule, limits at infinity

export interface MiniBossQuestion {
  id: string
  type: 'direct-sub' | 'factoring' | 'rationalize' | 'infinity' | 'lhopital' | 'squeeze' | 'piecewise'
  question: string
  correctAnswer: string
  options: {
    label: 'A' | 'B' | 'C' | 'D'
    value: string
    isCorrect: boolean
    explanation?: string
  }[]
}

export const limitsBossQuestions: MiniBossQuestion[] = [
  {
    id: 'lim-1',
    type: 'factoring',
    question: 'Evaluate: lim(x→3) [(x² - 9)/(x - 3)]',
    correctAnswer: '6',
    options: [
      { label: 'A', value: '6', isCorrect: true },
      { label: 'B', value: '0', isCorrect: false, explanation: 'Factor: (x²-9)/(x-3) = (x+3)(x-3)/(x-3) = x+3 → 6' },
      { label: 'C', value: '3', isCorrect: false, explanation: 'After canceling, substitute x=3 into x+3 = 6' },
      { label: 'D', value: 'DNE', isCorrect: false, explanation: 'The limit exists after factoring — the hole is removable' },
    ],
  },
  {
    id: 'lim-2',
    type: 'factoring',
    question: 'Evaluate: lim(x→-2) [(x³ + 8)/(x + 2)]',
    correctAnswer: '12',
    options: [
      { label: 'A', value: '12', isCorrect: true },
      { label: 'B', value: '0', isCorrect: false, explanation: 'x³+8 = (x+2)(x²-2x+4), cancel (x+2), then sub x=-2: 4+4+4=12' },
      { label: 'C', value: '4', isCorrect: false, explanation: 'After canceling: x²-2x+4 at x=-2 = 4+4+4 = 12' },
      { label: 'D', value: '-8', isCorrect: false, explanation: 'Sum of cubes: a³+b³ = (a+b)(a²-ab+b²)' },
    ],
  },
  {
    id: 'lim-3',
    type: 'rationalize',
    question: 'Evaluate: lim(x→0) [(√(x+4) - 2)/x]',
    correctAnswer: '1/4',
    options: [
      { label: 'A', value: '1/4', isCorrect: true },
      { label: 'B', value: '0', isCorrect: false, explanation: 'Rationalize: multiply by (√(x+4)+2)/(√(x+4)+2), get x/(x(√(x+4)+2))=1/(√(x+4)+2)→1/4' },
      { label: 'C', value: '1/2', isCorrect: false, explanation: 'As x→0: 1/(√(0+4)+2) = 1/(2+2) = 1/4' },
      { label: 'D', value: 'DNE', isCorrect: false, explanation: 'The limit exists — rationalize the numerator' },
    ],
  },
  {
    id: 'lim-4',
    type: 'infinity',
    question: 'Evaluate: lim(x→∞) [(3x² + 2x)/(5x² - 1)]',
    correctAnswer: '3/5',
    options: [
      { label: 'A', value: '3/5', isCorrect: true },
      { label: 'B', value: '∞', isCorrect: false, explanation: 'Same degree polynomials: ratio of leading coefficients = 3/5' },
      { label: 'C', value: '0', isCorrect: false, explanation: 'Limit is 0 only when degree of numerator < denominator' },
      { label: 'D', value: '-3/5', isCorrect: false, explanation: 'Both leading coefficients are positive: 3/5' },
    ],
  },
  {
    id: 'lim-5',
    type: 'infinity',
    question: 'Evaluate: lim(x→∞) [(2x + 1)/(x³ + 4)]',
    correctAnswer: '0',
    options: [
      { label: 'A', value: '0', isCorrect: true },
      { label: 'B', value: '2', isCorrect: false, explanation: 'Numerator degree (1) < denominator degree (3), so limit is 0' },
      { label: 'C', value: '∞', isCorrect: false, explanation: 'When numerator grows slower than denominator, the ratio → 0' },
      { label: 'D', value: '1/2', isCorrect: false, explanation: 'Divide all terms by x³: (2/x²+1/x³)/(1+4/x³) → 0/1 = 0' },
    ],
  },
  {
    id: 'lim-6',
    type: 'lhopital',
    question: 'Evaluate: lim(x→0) [sin(x)/x]',
    correctAnswer: '1',
    options: [
      { label: 'A', value: '1', isCorrect: true },
      { label: 'B', value: '0', isCorrect: false, explanation: 'This is the fundamental trig limit: lim sin(x)/x = 1' },
      { label: 'C', value: 'DNE', isCorrect: false, explanation: 'By L\'Hôpital: lim cos(x)/1 = 1, or use the squeeze theorem' },
      { label: 'D', value: '∞', isCorrect: false, explanation: 'Despite 0/0 form, the limit exists and equals 1' },
    ],
  },
  {
    id: 'lim-7',
    type: 'lhopital',
    question: 'Evaluate: lim(x→0) [(e^x - 1)/x]',
    correctAnswer: '1',
    options: [
      { label: 'A', value: '1', isCorrect: true },
      { label: 'B', value: '0', isCorrect: false, explanation: 'L\'Hôpital: d/dx[e^x-1]/d/dx[x] = e^x/1 → e^0 = 1' },
      { label: 'C', value: 'e', isCorrect: false, explanation: 'At x=0: e^0/1 = 1/1 = 1' },
      { label: 'D', value: 'DNE', isCorrect: false, explanation: '0/0 indeterminate form — use L\'Hôpital\'s Rule' },
    ],
  },
  {
    id: 'lim-8',
    type: 'piecewise',
    question: 'For f(x) = {x² if x < 1, 2x-1 if x ≥ 1}, find lim(x→1) f(x)',
    correctAnswer: '1',
    options: [
      { label: 'A', value: '1', isCorrect: true },
      { label: 'B', value: 'DNE', isCorrect: false, explanation: 'Left limit: 1²=1, Right limit: 2(1)-1=1. Both equal, so limit = 1' },
      { label: 'C', value: '2', isCorrect: false, explanation: 'Right limit: 2(1)-1 = 1, not 2' },
      { label: 'D', value: '0', isCorrect: false, explanation: 'Evaluate both sides at x=1: both give 1' },
    ],
  },
  {
    id: 'lim-9',
    type: 'infinity',
    question: 'Evaluate: lim(x→-∞) [e^x]',
    correctAnswer: '0',
    options: [
      { label: 'A', value: '0', isCorrect: true },
      { label: 'B', value: '-∞', isCorrect: false, explanation: 'e^x > 0 for all x, so it cannot be negative' },
      { label: 'C', value: '1', isCorrect: false, explanation: 'e^0 = 1, but as x → -∞, e^x → 0' },
      { label: 'D', value: 'DNE', isCorrect: false, explanation: 'The limit exists: e^x approaches 0 from the positive side' },
    ],
  },
  {
    id: 'lim-10',
    type: 'lhopital',
    question: 'Evaluate: lim(x→∞) [ln(x)/x]',
    correctAnswer: '0',
    options: [
      { label: 'A', value: '0', isCorrect: true },
      { label: 'B', value: '1', isCorrect: false, explanation: 'L\'Hôpital: (1/x)/1 = 1/x → 0 as x → ∞' },
      { label: 'C', value: '∞', isCorrect: false, explanation: 'ln(x) grows slower than x, so ratio → 0' },
      { label: 'D', value: 'DNE', isCorrect: false, explanation: '∞/∞ form, use L\'Hôpital. Result: 0' },
    ],
  },
]
