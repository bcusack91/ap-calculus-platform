// Mini-Boss Questions for Trigonometry
// Topics: unit circle, identities, equations, inverse trig, law of sines/cosines

export interface MiniBossQuestion {
  id: string
  type: 'unit-circle' | 'identities' | 'equations' | 'inverse-trig' | 'law-of-sines-cosines' | 'graphs'
  question: string
  correctAnswer: string
  options: {
    label: 'A' | 'B' | 'C' | 'D'
    value: string
    isCorrect: boolean
    explanation?: string
  }[]
}

export const trigonometryBossQuestions: MiniBossQuestion[] = [
  {
    id: 'trig-1',
    type: 'unit-circle',
    question: 'What is sin(π/6)?',
    correctAnswer: '1/2',
    options: [
      { label: 'A', value: '1/2', isCorrect: true },
      { label: 'B', value: '√3/2', isCorrect: false, explanation: '√3/2 is sin(π/3). sin(π/6) = sin(30°) = 1/2' },
      { label: 'C', value: '√2/2', isCorrect: false, explanation: '√2/2 is sin(π/4). sin(30°) = 1/2' },
      { label: 'D', value: '1', isCorrect: false, explanation: 'sin(π/2) = 1. sin(π/6) = 1/2' },
    ],
  },
  {
    id: 'trig-2',
    type: 'unit-circle',
    question: 'What is cos(5π/3)?',
    correctAnswer: '1/2',
    options: [
      { label: 'A', value: '1/2', isCorrect: true },
      { label: 'B', value: '-1/2', isCorrect: false, explanation: '5π/3 is in Q4 where cosine is positive. Reference angle = π/3' },
      { label: 'C', value: '√3/2', isCorrect: false, explanation: 'cos(π/3) = 1/2, and Q4 cosine is positive, so cos(5π/3) = 1/2' },
      { label: 'D', value: '-√3/2', isCorrect: false, explanation: '5π/3 is in Q4 (cosine positive). cos = 1/2' },
    ],
  },
  {
    id: 'trig-3',
    type: 'identities',
    question: 'Simplify: sin²θ + cos²θ',
    correctAnswer: '1',
    options: [
      { label: 'A', value: '1', isCorrect: true },
      { label: 'B', value: '2', isCorrect: false, explanation: 'The Pythagorean identity: sin²θ + cos²θ = 1 for all θ' },
      { label: 'C', value: 'sin(2θ)', isCorrect: false, explanation: 'sin(2θ) = 2sinθcosθ. sin²θ + cos²θ = 1' },
      { label: 'D', value: 'tan²θ', isCorrect: false, explanation: 'This is the fundamental Pythagorean identity = 1' },
    ],
  },
  {
    id: 'trig-4',
    type: 'identities',
    question: 'Which identity equals sin(2θ)?',
    correctAnswer: '2sinθcosθ',
    options: [
      { label: 'A', value: '2sinθcosθ', isCorrect: true },
      { label: 'B', value: 'sin²θ - cos²θ', isCorrect: false, explanation: 'sin²θ - cos²θ = -cos(2θ). sin(2θ) = 2sinθcosθ' },
      { label: 'C', value: '2sin²θ', isCorrect: false, explanation: 'Double angle: sin(2θ) = 2sinθcosθ' },
      { label: 'D', value: 'sinθ + cosθ', isCorrect: false, explanation: 'sin(2θ) ≠ sinθ + cosθ. It equals 2sinθcosθ' },
    ],
  },
  {
    id: 'trig-5',
    type: 'equations',
    question: 'Solve 2sinx - 1 = 0 for x in [0, 2π)',
    correctAnswer: 'x = π/6 and x = 5π/6',
    options: [
      { label: 'A', value: 'x = π/6 and x = 5π/6', isCorrect: true },
      { label: 'B', value: 'x = π/3 and x = 2π/3', isCorrect: false, explanation: 'sinx = 1/2 → x = π/6 (Q1) and x = 5π/6 (Q2)' },
      { label: 'C', value: 'x = π/6 only', isCorrect: false, explanation: 'sin is also positive in Q2: x = π - π/6 = 5π/6' },
      { label: 'D', value: 'x = π/6 and x = 7π/6', isCorrect: false, explanation: '7π/6 is in Q3 where sin is negative. Use Q2: 5π/6' },
    ],
  },
  {
    id: 'trig-6',
    type: 'inverse-trig',
    question: 'What is arctan(1)?',
    correctAnswer: 'π/4',
    options: [
      { label: 'A', value: 'π/4', isCorrect: true },
      { label: 'B', value: 'π/2', isCorrect: false, explanation: 'tan(π/4) = 1, so arctan(1) = π/4' },
      { label: 'C', value: 'π/3', isCorrect: false, explanation: 'tan(π/3) = √3, not 1. arctan(1) = π/4' },
      { label: 'D', value: '0', isCorrect: false, explanation: 'tan(0) = 0. tan(π/4) = 1, so arctan(1) = π/4' },
    ],
  },
  {
    id: 'trig-7',
    type: 'law-of-sines-cosines',
    question: 'In triangle ABC, a = 8, B = 30°, C = 45°. Find side b using the Law of Sines. (A = 105°)',
    correctAnswer: 'b = 8sin30°/sin105° ≈ 4.14',
    options: [
      { label: 'A', value: 'b = 8sin30°/sin105° ≈ 4.14', isCorrect: true },
      { label: 'B', value: 'b = 8sin105°/sin30° ≈ 15.45', isCorrect: false, explanation: 'a/sinA = b/sinB → b = a·sinB/sinA = 8·sin30°/sin105°' },
      { label: 'C', value: 'b = 8sin45°/sin30° ≈ 11.31', isCorrect: false, explanation: 'b corresponds to angle B (30°), not angle C' },
      { label: 'D', value: 'b = 4', isCorrect: false, explanation: 'b = 8 × (sin30°/sin105°) = 8 × (0.5/0.966) ≈ 4.14' },
    ],
  },
  {
    id: 'trig-8',
    type: 'graphs',
    question: 'What is the period of y = tan(x)?',
    correctAnswer: 'π',
    options: [
      { label: 'A', value: 'π', isCorrect: true },
      { label: 'B', value: '2π', isCorrect: false, explanation: '2π is the period of sin and cos. tan has period π' },
      { label: 'C', value: 'π/2', isCorrect: false, explanation: 'The tangent function repeats every π radians' },
      { label: 'D', value: '1', isCorrect: false, explanation: 'Period of tan(x) = π (about 3.14), not 1' },
    ],
  },
  {
    id: 'trig-9',
    type: 'identities',
    question: 'Simplify: (1 + tan²θ)',
    correctAnswer: 'sec²θ',
    options: [
      { label: 'A', value: 'sec²θ', isCorrect: true },
      { label: 'B', value: 'csc²θ', isCorrect: false, explanation: '1 + cot²θ = csc²θ. 1 + tan²θ = sec²θ' },
      { label: 'C', value: '2', isCorrect: false, explanation: 'This is a Pythagorean identity: 1 + tan²θ = sec²θ' },
      { label: 'D', value: 'cos²θ', isCorrect: false, explanation: 'sec²θ = 1/cos²θ. 1 + tan²θ = sec²θ' },
    ],
  },
  {
    id: 'trig-10',
    type: 'law-of-sines-cosines',
    question: 'In triangle with sides a=5, b=7, included angle C=60°. Find c using Law of Cosines.',
    correctAnswer: 'c = √(39) ≈ 6.24',
    options: [
      { label: 'A', value: 'c = √(39) ≈ 6.24', isCorrect: true },
      { label: 'B', value: 'c = √(74) ≈ 8.60', isCorrect: false, explanation: 'c² = 25 + 49 - 2(5)(7)cos60° = 74 - 70(0.5) = 74 - 35 = 39' },
      { label: 'C', value: 'c = √(109) ≈ 10.44', isCorrect: false, explanation: 'Don\'t forget to subtract: c² = a²+b² - 2ab·cosC' },
      { label: 'D', value: 'c = 6', isCorrect: false, explanation: 'c² = 25+49-70cos60° = 74-35 = 39, c = √39 ≈ 6.24' },
    ],
  },
]
