// Mini-Boss Questions for Trigonometry
// Topics: unit circle, identities, equations, inverse trig, graphs
// (Law of Sines/Cosines items replaced Oct 2026: not in the AP Precalculus CED.)

export interface MiniBossQuestion {
  id: string
  type: 'unit-circle' | 'identities' | 'equations' | 'inverse-trig' | 'graphs'
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
      { label: 'B', value: '$\\sqrt{3}/2$', isCorrect: false, explanation: '$\\sqrt{3}/2$ is sin(π/3). sin(π/6) = sin(30°) = 1/2' },
      { label: 'C', value: '$\\sqrt{2}/2$', isCorrect: false, explanation: '$\\sqrt{2}/2$ is sin(π/4). sin(30°) = 1/2' },
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
      { label: 'C', value: '$\\sqrt{3}/2$', isCorrect: false, explanation: 'cos(π/3) = 1/2, and Q4 cosine is positive, so cos(5π/3) = 1/2' },
      { label: 'D', value: '$-\\sqrt{3}/2$', isCorrect: false, explanation: '5π/3 is in Q4 (cosine positive). cos = 1/2' },
    ],
  },
  {
    id: 'trig-3',
    type: 'identities',
    question: 'Simplify: $\\sin^{2}\\theta$ + $\\cos^{2}\\theta$',
    correctAnswer: '1',
    options: [
      { label: 'A', value: '1', isCorrect: true },
      { label: 'B', value: '2', isCorrect: false, explanation: 'The Pythagorean identity: $\\sin^{2}\\theta$ + $\\cos^{2}\\theta$ = 1 for all θ' },
      { label: 'C', value: 'sin(2θ)', isCorrect: false, explanation: 'sin(2θ) = 2sinθcosθ. $\\sin^{2}\\theta$ + $\\cos^{2}\\theta$ = 1' },
      { label: 'D', value: '$\\tan^{2}\\theta$', isCorrect: false, explanation: 'This is the fundamental Pythagorean identity = 1' },
    ],
  },
  {
    id: 'trig-4',
    type: 'identities',
    question: 'Which identity equals sin(2θ)?',
    correctAnswer: '2sinθcosθ',
    options: [
      { label: 'A', value: '2sinθcosθ', isCorrect: true },
      { label: 'B', value: '$\\sin^{2}\\theta$ - $\\cos^{2}\\theta$', isCorrect: false, explanation: '$\\sin^{2}\\theta$ - $\\cos^{2}\\theta$ = -cos(2θ). sin(2θ) = 2sinθcosθ' },
      { label: 'C', value: '$2\\sin^{2}\\theta$', isCorrect: false, explanation: 'Double angle: sin(2θ) = 2sinθcosθ' },
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
      { label: 'C', value: 'π/3', isCorrect: false, explanation: 'tan(π/3) = $\\sqrt{3}$, not 1. arctan(1) = π/4' },
      { label: 'D', value: '0', isCorrect: false, explanation: 'tan(0) = 0. tan(π/4) = 1, so arctan(1) = π/4' },
    ],
  },
  {
    id: 'trig-7',
    type: 'graphs',
    question: 'What are the amplitude and period of y = 3sin(2x)?',
    correctAnswer: 'Amplitude 3, period π',
    options: [
      { label: 'A', value: 'Amplitude 3, period π', isCorrect: true },
      { label: 'B', value: 'Amplitude 3, period 4π', isCorrect: false, explanation: 'Period = 2π/b = 2π/2 = π, not 2π·2' },
      { label: 'C', value: 'Amplitude 2, period 3π', isCorrect: false, explanation: 'The amplitude is |a| = 3 and the period is 2π/b = π' },
      { label: 'D', value: 'Amplitude 6, period 2π', isCorrect: false, explanation: 'Amplitude is |a| = 3; b = 2 halves the period to π' },
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
    question: 'Simplify: $(1 + \\tan^{2}\\theta )$',
    correctAnswer: '$\\sec^{2}\\theta$',
    options: [
      { label: 'A', value: '$\\sec^{2}\\theta$', isCorrect: true },
      { label: 'B', value: '$\\csc^{2}\\theta$', isCorrect: false, explanation: '1 + $\\cot^{2}\\theta$ = $\\csc^{2}\\theta$. 1 + $\\tan^{2}\\theta$ = $\\sec^{2}\\theta$' },
      { label: 'C', value: '2', isCorrect: false, explanation: 'This is a Pythagorean identity: 1 + $\\tan^{2}\\theta$ = $\\sec^{2}\\theta$' },
      { label: 'D', value: '$\\cos^{2}\\theta$', isCorrect: false, explanation: '$\\sec^{2}\\theta$ = $1/\\cos^{2}\\theta$. 1 + $\\tan^{2}\\theta$ = $\\sec^{2}\\theta$' },
    ],
  },
  {
    id: 'trig-10',
    type: 'unit-circle',
    question: 'What is the exact value of sin(5π/6)?',
    correctAnswer: '1/2',
    options: [
      { label: 'A', value: '1/2', isCorrect: true },
      { label: 'B', value: '−1/2', isCorrect: false, explanation: '5π/6 is in Quadrant II, where sine is positive' },
      { label: 'C', value: '$\\sqrt{3}/2$', isCorrect: false, explanation: 'The reference angle is π/6, and sin(π/6) = 1/2' },
      { label: 'D', value: '$-\\sqrt{3}/2$', isCorrect: false, explanation: 'That is cos(5π/6); sin(5π/6) = sin(π/6) = 1/2' },
    ],
  },
]
