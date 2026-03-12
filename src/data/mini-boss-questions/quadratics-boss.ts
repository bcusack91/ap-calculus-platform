// Mini-Boss Questions for Quadratic Functions
// Topics: standard form, vertex form, factoring, completing the square, quadratic formula

export interface MiniBossQuestion {
  id: string
  type: 'standard-to-vertex' | 'vertex-form' | 'discriminant' | 'quadratic-formula' | 'complete-square' | 'applications'
  question: string
  correctAnswer: string
  options: {
    label: 'A' | 'B' | 'C' | 'D'
    value: string
    isCorrect: boolean
    explanation?: string
  }[]
}

export const quadraticsBossQuestions: MiniBossQuestion[] = [
  {
    id: 'quad-1',
    type: 'vertex-form',
    question: 'What is the vertex of y = 2(x - 3)² + 5?',
    correctAnswer: '(3, 5)',
    options: [
      { label: 'A', value: '(3, 5)', isCorrect: true },
      { label: 'B', value: '(-3, 5)', isCorrect: false, explanation: 'y = a(x - h)² + k has vertex (h, k). Since it\'s (x - 3), h = 3' },
      { label: 'C', value: '(3, -5)', isCorrect: false, explanation: 'k = 5, the constant added at the end' },
      { label: 'D', value: '(2, 3)', isCorrect: false, explanation: 'Vertex form y = a(x-h)²+k: vertex is (h, k) = (3, 5)' },
    ],
  },
  {
    id: 'quad-2',
    type: 'discriminant',
    question: 'How many real solutions does x² + 4x + 5 = 0 have?',
    correctAnswer: 'No real solutions',
    options: [
      { label: 'A', value: 'No real solutions', isCorrect: true },
      { label: 'B', value: 'One real solution', isCorrect: false, explanation: 'b² - 4ac = 16 - 20 = -4 < 0, so no real solutions' },
      { label: 'C', value: 'Two real solutions', isCorrect: false, explanation: 'Discriminant = 4² - 4(1)(5) = -4 < 0' },
      { label: 'D', value: 'Cannot determine', isCorrect: false, explanation: 'Discriminant tells us: negative = no real, zero = one, positive = two' },
    ],
  },
  {
    id: 'quad-3',
    type: 'quadratic-formula',
    question: 'Solve 2x² - 5x - 3 = 0 using the quadratic formula',
    correctAnswer: 'x = 3 or x = -1/2',
    options: [
      { label: 'A', value: 'x = 3 or x = -1/2', isCorrect: true },
      { label: 'B', value: 'x = -3 or x = 1/2', isCorrect: false, explanation: 'x = (5 ± √(25+24))/4 = (5±7)/4 → 12/4=3 or -2/4=-1/2' },
      { label: 'C', value: 'x = 5 or x = -3', isCorrect: false, explanation: 'a=2, b=-5, c=-3: x = (5 ± 7)/4' },
      { label: 'D', value: 'x = 3 or x = 1/2', isCorrect: false, explanation: '(5-7)/4 = -2/4 = -1/2, not +1/2' },
    ],
  },
  {
    id: 'quad-4',
    type: 'complete-square',
    question: 'Complete the square: x² + 6x + 2 = 0',
    correctAnswer: '(x + 3)² = 7',
    options: [
      { label: 'A', value: '(x + 3)² = 7', isCorrect: true },
      { label: 'B', value: '(x + 6)² = 34', isCorrect: false, explanation: 'Half of 6 is 3, so (x + 3)². Move 2: (x+3)² - 9 + 2 = 0, (x+3)² = 7' },
      { label: 'C', value: '(x + 3)² = 11', isCorrect: false, explanation: '(x+3)² = x²+6x+9. So x²+6x+2 = (x+3)²-9+2 = (x+3)²-7=0' },
      { label: 'D', value: '(x - 3)² = 7', isCorrect: false, explanation: 'Since b = +6, half is +3, so (x + 3)²' },
    ],
  },
  {
    id: 'quad-5',
    type: 'standard-to-vertex',
    question: 'Convert y = x² - 8x + 12 to vertex form',
    correctAnswer: 'y = (x - 4)² - 4',
    options: [
      { label: 'A', value: 'y = (x - 4)² - 4', isCorrect: true },
      { label: 'B', value: 'y = (x - 4)² + 12', isCorrect: false, explanation: 'Complete the square: (x-4)² = x²-8x+16, so x²-8x+12 = (x-4)²-4' },
      { label: 'C', value: 'y = (x + 4)² - 4', isCorrect: false, explanation: 'Half of -8 is -4, so it\'s (x - 4)²' },
      { label: 'D', value: 'y = (x - 8)² + 12', isCorrect: false, explanation: 'Take half the x-coefficient: -8/2 = -4' },
    ],
  },
  {
    id: 'quad-6',
    type: 'applications',
    question: 'A ball is thrown upward with h(t) = -16t² + 64t + 5. What is the maximum height?',
    correctAnswer: '69 feet',
    options: [
      { label: 'A', value: '69 feet', isCorrect: true },
      { label: 'B', value: '64 feet', isCorrect: false, explanation: 'Max at t = -b/(2a) = -64/-32 = 2. h(2) = -64 + 128 + 5 = 69' },
      { label: 'C', value: '2 seconds', isCorrect: false, explanation: '2 is the time of max height, not the height itself' },
      { label: 'D', value: '5 feet', isCorrect: false, explanation: '5 is the initial height (h(0)). Max height is h(2) = 69' },
    ],
  },
  {
    id: 'quad-7',
    type: 'discriminant',
    question: 'For what value of k does kx² + 6x + 1 = 0 have exactly one real solution?',
    correctAnswer: 'k = 9',
    options: [
      { label: 'A', value: 'k = 9', isCorrect: true },
      { label: 'B', value: 'k = 36', isCorrect: false, explanation: 'b²-4ac = 0: 36-4k = 0 → k = 9' },
      { label: 'C', value: 'k = 6', isCorrect: false, explanation: 'Set discriminant = 0: 6²-4(k)(1)=0, 36=4k, k=9' },
      { label: 'D', value: 'k = 3', isCorrect: false, explanation: '36 ÷ 4 = 9, not 3' },
    ],
  },
  {
    id: 'quad-8',
    type: 'vertex-form',
    question: 'Which parabola opens downward and has vertex at (1, -2)?',
    correctAnswer: 'y = -(x - 1)² - 2',
    options: [
      { label: 'A', value: 'y = -(x - 1)² - 2', isCorrect: true },
      { label: 'B', value: 'y = (x - 1)² - 2', isCorrect: false, explanation: 'a must be negative for "opens downward"' },
      { label: 'C', value: 'y = -(x + 1)² - 2', isCorrect: false, explanation: 'Vertex (h,k) = (1,-2) means (x - 1), not (x + 1)' },
      { label: 'D', value: 'y = -(x - 1)² + 2', isCorrect: false, explanation: 'k = -2, so the constant is -2' },
    ],
  },
  {
    id: 'quad-9',
    type: 'quadratic-formula',
    question: 'What is the sum of the solutions to 3x² - 12x + 9 = 0?',
    correctAnswer: '4',
    options: [
      { label: 'A', value: '4', isCorrect: true },
      { label: 'B', value: '3', isCorrect: false, explanation: 'By Vieta\'s: sum = -b/a = -(-12)/3 = 12/3 = 4' },
      { label: 'C', value: '-4', isCorrect: false, explanation: 'Sum = -b/a = 12/3 = 4 (positive because -(-12))' },
      { label: 'D', value: '12', isCorrect: false, explanation: 'Sum = -b/a, not just b: -(-12)/3 = 4' },
    ],
  },
  {
    id: 'quad-10',
    type: 'applications',
    question: 'A rectangle has perimeter 40. What dimensions maximize its area?',
    correctAnswer: '10 × 10 (square)',
    options: [
      { label: 'A', value: '10 × 10 (square)', isCorrect: true },
      { label: 'B', value: '5 × 15', isCorrect: false, explanation: 'P=40→ 2l+2w=40, A=w(20-w)=-w²+20w, max at w=10' },
      { label: 'C', value: '8 × 12', isCorrect: false, explanation: 'A square always maximizes area for a given perimeter' },
      { label: 'D', value: '1 × 19', isCorrect: false, explanation: 'This gives A=19, but 10×10 gives A=100' },
    ],
  },
]
