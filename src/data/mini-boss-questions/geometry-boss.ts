// Mini-Boss Questions for Geometry
// Topics: angles, triangles, circles, area/perimeter, coordinate geometry

export interface MiniBossQuestion {
  id: string
  type: 'angles' | 'triangles' | 'circles' | 'area-perimeter' | 'coordinate' | 'similarity'
  question: string
  correctAnswer: string
  options: {
    label: 'A' | 'B' | 'C' | 'D'
    value: string
    isCorrect: boolean
    explanation?: string
  }[]
}

export const geometryBossQuestions: MiniBossQuestion[] = [
  {
    id: 'geo-1',
    type: 'triangles',
    question: 'In a right triangle, one leg is 5 and the hypotenuse is 13. What is the other leg?',
    correctAnswer: '12',
    options: [
      { label: 'A', value: '12', isCorrect: true },
      { label: 'B', value: '8', isCorrect: false, explanation: '$5^{2}$ + $b^{2}$ = $13^{2}$ → 25 + $b^{2}$ = 169 → $b^{2}$ = 144 → b = 12' },
      { label: 'C', value: '10', isCorrect: false, explanation: 'Use Pythagorean theorem: $a^{2}$ + $b^{2}$ = $c^{2}$' },
      { label: 'D', value: '$\\sqrt{194}$', isCorrect: false, explanation: 'You need to subtract, not add: 169 - 25 = 144' },
    ],
  },
  {
    id: 'geo-2',
    type: 'angles',
    question: 'Two angles of a triangle are 45° and 65°. What is the third angle?',
    correctAnswer: '70°',
    options: [
      { label: 'A', value: '70°', isCorrect: true },
      { label: 'B', value: '110°', isCorrect: false, explanation: 'Sum of angles = 180°: 180 - 45 - 65 = 70°' },
      { label: 'C', value: '80°', isCorrect: false, explanation: '45 + 65 = 110, so third = 180 - 110 = 70°' },
      { label: 'D', value: '90°', isCorrect: false, explanation: 'Triangle angles sum to 180°, not 200°' },
    ],
  },
  {
    id: 'geo-3',
    type: 'circles',
    question: 'A circle has radius 7. What is its area?',
    correctAnswer: '49π',
    options: [
      { label: 'A', value: '49π', isCorrect: true },
      { label: 'B', value: '14π', isCorrect: false, explanation: '14π is the circumference (2πr). Area = $\\pi r^{2}$ = 49π' },
      { label: 'C', value: '7π', isCorrect: false, explanation: 'Area = $\\pi r^{2}$ = $\\pi (7)^{2}$ = 49π' },
      { label: 'D', value: '49', isCorrect: false, explanation: 'Don\'t forget π! Area = $\\pi r^{2}$' },
    ],
  },
  {
    id: 'geo-4',
    type: 'area-perimeter',
    question: 'A trapezoid has parallel bases of 8 and 12 and height 5. What is its area?',
    correctAnswer: '50',
    options: [
      { label: 'A', value: '50', isCorrect: true },
      { label: 'B', value: '100', isCorrect: false, explanation: 'A = $\\tfrac{1}{2} (b_{1}+b_{2})h$ = ½(8+12)(5) = ½(20)(5) = 50' },
      { label: 'C', value: '40', isCorrect: false, explanation: 'Use both bases: ½(8+12)×5, not just 8×5' },
      { label: 'D', value: '60', isCorrect: false, explanation: 'A = ½ × (sum of bases) × height = 50' },
    ],
  },
  {
    id: 'geo-5',
    type: 'similarity',
    question: 'Triangles ABC and DEF are similar with AB/DE = 3/5. If the area of ABC is 27, what is the area of DEF?',
    correctAnswer: '75',
    options: [
      { label: 'A', value: '75', isCorrect: true },
      { label: 'B', value: '45', isCorrect: false, explanation: 'Area ratio = $(scale factor)^{2}$ = $(3/5)^{2}$ = 9/25. If ABC=27, DEF = 27×25/9 = 75' },
      { label: 'C', value: '135', isCorrect: false, explanation: 'Ratio of areas is square of ratio of sides: $(5/3)^{2}$ = 25/9' },
      { label: 'D', value: '15', isCorrect: false, explanation: '27 × (25/9) = 75, not 27 × (5/9)' },
    ],
  },
  {
    id: 'geo-6',
    type: 'coordinate',
    question: 'What is the distance between (1, 2) and (4, 6)?',
    correctAnswer: '5',
    options: [
      { label: 'A', value: '5', isCorrect: true },
      { label: 'B', value: '7', isCorrect: false, explanation: 'd = $\\sqrt{(4-1)^{2} + (6-2)^{2}}$ = $\\sqrt{9+16}$ = $\\sqrt{25}$ = 5' },
      { label: 'C', value: '$\\sqrt{7}$', isCorrect: false, explanation: '$(4-1)^{2}$ = 9, $(6-2)^{2}$ = 16, sum = 25, $\\sqrt{25}$ = 5' },
      { label: 'D', value: '25', isCorrect: false, explanation: '25 is $d^{2}$, not d. Take the square root' },
    ],
  },
  {
    id: 'geo-7',
    type: 'coordinate',
    question: 'What is the midpoint of (-2, 8) and (6, -4)?',
    correctAnswer: '(2, 2)',
    options: [
      { label: 'A', value: '(2, 2)', isCorrect: true },
      { label: 'B', value: '(4, 4)', isCorrect: false, explanation: 'Midpoint = ((−2+6)/2, (8+(−4))/2) = (4/2, 4/2) = (2, 2)' },
      { label: 'C', value: '(-4, 12)', isCorrect: false, explanation: 'Average the coordinates, don\'t subtract them' },
      { label: 'D', value: '(2, -2)', isCorrect: false, explanation: '(8 + (-4))/2 = 4/2 = 2, not -2' },
    ],
  },
  {
    id: 'geo-8',
    type: 'circles',
    question: 'An arc subtends a 60° central angle in a circle of radius 6. What is the arc length?',
    correctAnswer: '2π',
    options: [
      { label: 'A', value: '2π', isCorrect: true },
      { label: 'B', value: '6π', isCorrect: false, explanation: 'Arc = (θ/360)×2πr = (60/360)×12π = (1/6)×12π = 2π' },
      { label: 'C', value: '12π', isCorrect: false, explanation: '12π is the full circumference. 60° is 1/6 of 360°' },
      { label: 'D', value: 'π', isCorrect: false, explanation: '(60/360) × 2π(6) = (1/6)(12π) = 2π' },
    ],
  },
  {
    id: 'geo-9',
    type: 'triangles',
    question: 'In a 30-60-90 triangle, the side opposite 30° is 5. What is the hypotenuse?',
    correctAnswer: '10',
    options: [
      { label: 'A', value: '10', isCorrect: true },
      { label: 'B', value: '$5\\sqrt{3}$', isCorrect: false, explanation: '$5\\sqrt{3}$ is the side opposite 60°. Hypotenuse = 2 × short side = 10' },
      { label: 'C', value: '$5\\sqrt{2}$', isCorrect: false, explanation: '$5\\sqrt{2}$ is for 45-45-90. In 30-60-90: hyp = 2 × short side' },
      { label: 'D', value: '15', isCorrect: false, explanation: 'Ratio is 1:$\\sqrt{3}$:2, so hyp = 2×5 = 10' },
    ],
  },
  {
    id: 'geo-10',
    type: 'area-perimeter',
    question: 'A regular hexagon has side length 4. What is its area?',
    correctAnswer: '$24\\sqrt{3}$',
    options: [
      { label: 'A', value: '$24\\sqrt{3}$', isCorrect: true },
      { label: 'B', value: '$16\\sqrt{3}$', isCorrect: false, explanation: 'A = $(3\\sqrt{3}/2)s^{2}$ = $(3\\sqrt{3}/2)(16)$ = $24\\sqrt{3}$' },
      { label: 'C', value: '96', isCorrect: false, explanation: 'Regular hexagon area = $(3\\sqrt{3}/2)s^{2}$, not 6s' },
      { label: 'D', value: '48', isCorrect: false, explanation: 'The formula includes $\\sqrt{3}$: A = $(3\\sqrt{3}/2)(4^{2})$ = $24\\sqrt{3}$' },
    ],
  },
]
