/**
 * Visual / Graphical Questions Data
 * Item #161: Pre-made graphing questions for the GraphingQuestion component
 * Covers: parabolas, linear equations, trig functions, circles, absolute value
 */

export interface GraphicalQuestionData {
  id: string
  subject: string
  topic: string
  question: string
  type: 'identify-graph' | 'plot-points' | 'match-equation' | 'sketch-function'
  equation?: string
  correctAnswer: string
  options?: { label: string; value: string; isCorrect: boolean }[]
  keyPoints?: { x: number; y: number; label?: string }[]
  xRange?: [number, number]
  yRange?: [number, number]
}

export const GRAPHICAL_QUESTIONS: GraphicalQuestionData[] = [
  // --- Linear ---
  {
    id: 'graph-linear-1',
    subject: 'Algebra',
    topic: 'Linear Equations',
    question: 'Which equation represents a line with slope 2 and y-intercept -3?',
    type: 'match-equation',
    correctAnswer: 'y = 2x - 3',
    options: [
      { label: 'A', value: 'y = 2x - 3', isCorrect: true },
      { label: 'B', value: 'y = -3x + 2', isCorrect: false },
      { label: 'C', value: 'y = 2x + 3', isCorrect: false },
      { label: 'D', value: 'y = -2x - 3', isCorrect: false },
    ],
    keyPoints: [{ x: 0, y: -3, label: 'y-int' }, { x: 1, y: -1 }, { x: 2, y: 1 }],
    xRange: [-5, 5],
    yRange: [-6, 4],
  },
  {
    id: 'graph-linear-2',
    subject: 'Algebra',
    topic: 'Linear Equations',
    question: 'A line passes through (0, 4) and (2, 0). What is the slope?',
    type: 'identify-graph',
    correctAnswer: '-2',
    options: [
      { label: 'A', value: '-2', isCorrect: true },
      { label: 'B', value: '2', isCorrect: false },
      { label: 'C', value: '-1/2', isCorrect: false },
      { label: 'D', value: '1/2', isCorrect: false },
    ],
    keyPoints: [{ x: 0, y: 4, label: '(0,4)' }, { x: 2, y: 0, label: '(2,0)' }],
  },
  // --- Quadratic ---
  {
    id: 'graph-quad-1',
    subject: 'Algebra',
    topic: 'Quadratics',
    question: 'Which graph represents y = x² - 4?',
    type: 'identify-graph',
    equation: 'y = x² - 4',
    correctAnswer: 'Parabola opening up with vertex at (0, -4)',
    options: [
      { label: 'A', value: 'Parabola opening up with vertex at (0, -4)', isCorrect: true },
      { label: 'B', value: 'Parabola opening down with vertex at (0, 4)', isCorrect: false },
      { label: 'C', value: 'Parabola opening up with vertex at (0, 4)', isCorrect: false },
      { label: 'D', value: 'Parabola opening up with vertex at (-4, 0)', isCorrect: false },
    ],
    keyPoints: [{ x: 0, y: -4, label: 'vertex' }, { x: 2, y: 0 }, { x: -2, y: 0 }],
    xRange: [-5, 5],
    yRange: [-6, 6],
  },
  {
    id: 'graph-quad-2',
    subject: 'Algebra',
    topic: 'Quadratics',
    question: 'The vertex of y = -(x - 3)² + 1 is at what point?',
    type: 'identify-graph',
    equation: 'y = -(x-3)² + 1',
    correctAnswer: '(3, 1)',
    options: [
      { label: 'A', value: '(3, 1)', isCorrect: true },
      { label: 'B', value: '(-3, 1)', isCorrect: false },
      { label: 'C', value: '(3, -1)', isCorrect: false },
      { label: 'D', value: '(1, 3)', isCorrect: false },
    ],
    keyPoints: [{ x: 3, y: 1, label: 'vertex' }],
  },
  // --- Absolute Value ---
  {
    id: 'graph-abs-1',
    subject: 'Algebra',
    topic: 'Absolute Value',
    question: 'What is the vertex of y = |x + 2| - 3?',
    type: 'identify-graph',
    equation: 'y = |x + 2| - 3',
    correctAnswer: '(-2, -3)',
    options: [
      { label: 'A', value: '(-2, -3)', isCorrect: true },
      { label: 'B', value: '(2, -3)', isCorrect: false },
      { label: 'C', value: '(-2, 3)', isCorrect: false },
      { label: 'D', value: '(2, 3)', isCorrect: false },
    ],
    keyPoints: [{ x: -2, y: -3, label: 'vertex' }, { x: 1, y: 0 }, { x: -5, y: 0 }],
  },
  // --- Trigonometric ---
  {
    id: 'graph-trig-1',
    subject: 'Pre-Calculus',
    topic: 'Trig Functions',
    question: 'What is the period of y = sin(2x)?',
    type: 'identify-graph',
    equation: 'y = sin(2x)',
    correctAnswer: 'π',
    options: [
      { label: 'A', value: 'π', isCorrect: true },
      { label: 'B', value: '2π', isCorrect: false },
      { label: 'C', value: 'π/2', isCorrect: false },
      { label: 'D', value: '4π', isCorrect: false },
    ],
    keyPoints: [{ x: 0, y: 0 }, { x: Math.PI / 4, y: 1 }, { x: Math.PI / 2, y: 0 }, { x: (3 * Math.PI) / 4, y: -1 }, { x: Math.PI, y: 0 }],
  },
  {
    id: 'graph-trig-2',
    subject: 'Pre-Calculus',
    topic: 'Trig Functions',
    question: 'What is the amplitude of y = 3cos(x) - 1?',
    type: 'identify-graph',
    equation: 'y = 3cos(x) - 1',
    correctAnswer: '3',
    options: [
      { label: 'A', value: '3', isCorrect: true },
      { label: 'B', value: '1', isCorrect: false },
      { label: 'C', value: '-1', isCorrect: false },
      { label: 'D', value: '6', isCorrect: false },
    ],
  },
  // --- Calculus Graphs ---
  {
    id: 'graph-calc-1',
    subject: 'AP Calculus',
    topic: 'Derivatives',
    question: 'If f(x) = x³ - 3x, at what x-values does f have a local maximum or minimum?',
    type: 'identify-graph',
    equation: 'f(x) = x³ - 3x',
    correctAnswer: 'x = -1 (local max), x = 1 (local min)',
    options: [
      { label: 'A', value: 'x = -1 (local max), x = 1 (local min)', isCorrect: true },
      { label: 'B', value: 'x = 0 (local max)', isCorrect: false },
      { label: 'C', value: 'x = 1 (local max), x = -1 (local min)', isCorrect: false },
      { label: 'D', value: 'x = 3 (local min)', isCorrect: false },
    ],
    keyPoints: [{ x: -1, y: 2, label: 'local max' }, { x: 1, y: -2, label: 'local min' }],
  },
  {
    id: 'graph-calc-2',
    subject: 'AP Calculus',
    topic: 'Integrals',
    question: 'The shaded area under y = x from x = 0 to x = 4 represents what integral value?',
    type: 'identify-graph',
    equation: 'y = x',
    correctAnswer: '8',
    options: [
      { label: 'A', value: '8', isCorrect: true },
      { label: 'B', value: '4', isCorrect: false },
      { label: 'C', value: '16', isCorrect: false },
      { label: 'D', value: '2', isCorrect: false },
    ],
    keyPoints: [{ x: 0, y: 0 }, { x: 4, y: 4 }],
    xRange: [0, 5],
    yRange: [0, 5],
  },
  // --- Circle ---
  {
    id: 'graph-circle-1',
    subject: 'Geometry',
    topic: 'Circles',
    question: 'What is the center and radius of (x - 2)² + (y + 1)² = 9?',
    type: 'identify-graph',
    equation: '(x-2)² + (y+1)² = 9',
    correctAnswer: 'Center (2, -1), radius 3',
    options: [
      { label: 'A', value: 'Center (2, -1), radius 3', isCorrect: true },
      { label: 'B', value: 'Center (-2, 1), radius 9', isCorrect: false },
      { label: 'C', value: 'Center (2, -1), radius 9', isCorrect: false },
      { label: 'D', value: 'Center (-2, 1), radius 3', isCorrect: false },
    ],
    keyPoints: [{ x: 2, y: -1, label: 'center' }],
  },
  // --- Exponential ---
  {
    id: 'graph-exp-1',
    subject: 'Pre-Calculus',
    topic: 'Exponential Functions',
    question: 'Which best describes the graph of y = 2^x?',
    type: 'identify-graph',
    equation: 'y = 2^x',
    correctAnswer: 'Increasing curve through (0,1), asymptote at y=0',
    options: [
      { label: 'A', value: 'Increasing curve through (0,1), asymptote at y=0', isCorrect: true },
      { label: 'B', value: 'Decreasing curve through (0,1), asymptote at y=0', isCorrect: false },
      { label: 'C', value: 'Increasing line through (0,2)', isCorrect: false },
      { label: 'D', value: 'Parabola opening upward', isCorrect: false },
    ],
    keyPoints: [{ x: 0, y: 1, label: '(0,1)' }, { x: 1, y: 2 }, { x: 2, y: 4 }, { x: -1, y: 0.5 }],
  },
  {
    id: 'graph-log-1',
    subject: 'Pre-Calculus',
    topic: 'Logarithmic Functions',
    question: 'The graph of y = log₂(x) has a vertical asymptote at:',
    type: 'identify-graph',
    equation: 'y = log₂(x)',
    correctAnswer: 'x = 0',
    options: [
      { label: 'A', value: 'x = 0', isCorrect: true },
      { label: 'B', value: 'y = 0', isCorrect: false },
      { label: 'C', value: 'x = 1', isCorrect: false },
      { label: 'D', value: 'x = 2', isCorrect: false },
    ],
    keyPoints: [{ x: 1, y: 0, label: '(1,0)' }, { x: 2, y: 1 }, { x: 4, y: 2 }],
  },
]
