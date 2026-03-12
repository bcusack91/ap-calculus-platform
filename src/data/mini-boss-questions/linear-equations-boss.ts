// Mini-Boss Questions for Linear Equations and Inequalities
// Topics: solving equations, slope, graphing, systems, word problems

export interface MiniBossQuestion {
  id: string
  type: 'solve-equation' | 'slope' | 'graph-line' | 'systems' | 'inequality' | 'word-problem'
  question: string
  correctAnswer: string
  options: {
    label: 'A' | 'B' | 'C' | 'D'
    value: string
    isCorrect: boolean
    explanation?: string
  }[]
}

export const linearEquationsBossQuestions: MiniBossQuestion[] = [
  {
    id: 'lin-1',
    type: 'solve-equation',
    question: 'Solve for x: 3(2x - 4) = 18',
    correctAnswer: 'x = 5',
    options: [
      { label: 'A', value: 'x = 5', isCorrect: true },
      { label: 'B', value: 'x = 3', isCorrect: false, explanation: 'Distribute: 6x - 12 = 18, then 6x = 30, x = 5' },
      { label: 'C', value: 'x = 7', isCorrect: false, explanation: '6x - 12 = 18 → 6x = 30 → x = 5' },
      { label: 'D', value: 'x = 1', isCorrect: false, explanation: 'First distribute the 3: 3(2x) - 3(4) = 6x - 12' },
    ],
  },
  {
    id: 'lin-2',
    type: 'slope',
    question: 'Find the slope of the line passing through (2, 5) and (6, 13)',
    correctAnswer: '2',
    options: [
      { label: 'A', value: '2', isCorrect: true },
      { label: 'B', value: '1/2', isCorrect: false, explanation: 'Slope = (13-5)/(6-2) = 8/4 = 2, not 4/8' },
      { label: 'C', value: '8', isCorrect: false, explanation: '8 is the rise only — divide by the run: 8/4 = 2' },
      { label: 'D', value: '4', isCorrect: false, explanation: '4 is the run — slope = rise/run = 8/4 = 2' },
    ],
  },
  {
    id: 'lin-3',
    type: 'graph-line',
    question: 'What is the y-intercept of the line 2x + 3y = 12?',
    correctAnswer: '(0, 4)',
    options: [
      { label: 'A', value: '(0, 4)', isCorrect: true },
      { label: 'B', value: '(6, 0)', isCorrect: false, explanation: '(6, 0) is the x-intercept. For y-intercept, set x = 0: 3y = 12, y = 4' },
      { label: 'C', value: '(0, 12)', isCorrect: false, explanation: 'Set x = 0: 2(0) + 3y = 12, so 3y = 12, y = 4' },
      { label: 'D', value: '(0, -4)', isCorrect: false, explanation: '3y = 12, y = 4 (positive)' },
    ],
  },
  {
    id: 'lin-4',
    type: 'systems',
    question: 'Solve the system: x + y = 7, 2x - y = 5',
    correctAnswer: 'x = 4, y = 3',
    options: [
      { label: 'A', value: 'x = 4, y = 3', isCorrect: true },
      { label: 'B', value: 'x = 3, y = 4', isCorrect: false, explanation: 'Add equations: 3x = 12, x = 4. Then y = 7 - 4 = 3' },
      { label: 'C', value: 'x = 5, y = 2', isCorrect: false, explanation: 'Check: 5+2=7 ✓ but 2(5)-2=8≠5 ✗' },
      { label: 'D', value: 'x = 2, y = 5', isCorrect: false, explanation: 'Check: 2+5=7 ✓ but 2(2)-5=-1≠5 ✗' },
    ],
  },
  {
    id: 'lin-5',
    type: 'inequality',
    question: 'Solve: -2x + 6 > 10',
    correctAnswer: 'x < -2',
    options: [
      { label: 'A', value: 'x < -2', isCorrect: true },
      { label: 'B', value: 'x > -2', isCorrect: false, explanation: 'When dividing by negative number, flip the inequality sign' },
      { label: 'C', value: 'x < 2', isCorrect: false, explanation: '-2x > 4, divide by -2 (flip!): x < -2' },
      { label: 'D', value: 'x > 2', isCorrect: false, explanation: 'Two errors: wrong sign for both x and inequality direction' },
    ],
  },
  {
    id: 'lin-6',
    type: 'word-problem',
    question: 'A phone plan costs $30/month plus $0.05 per text. If the bill is $42.50, how many texts were sent?',
    correctAnswer: '250',
    options: [
      { label: 'A', value: '250', isCorrect: true },
      { label: 'B', value: '850', isCorrect: false, explanation: '30 + 0.05t = 42.50, 0.05t = 12.50, t = 250' },
      { label: 'C', value: '125', isCorrect: false, explanation: '12.50/0.05 = 250, not 125' },
      { label: 'D', value: '25', isCorrect: false, explanation: '12.50 ÷ 0.05 = 250 (move decimal 2 places)' },
    ],
  },
  {
    id: 'lin-7',
    type: 'slope',
    question: 'A line has equation y = -3x + 7. What is the slope of a parallel line?',
    correctAnswer: '-3',
    options: [
      { label: 'A', value: '-3', isCorrect: true },
      { label: 'B', value: '1/3', isCorrect: false, explanation: 'Parallel lines have the same slope, not the negative reciprocal' },
      { label: 'C', value: '3', isCorrect: false, explanation: 'Parallel = same slope = -3, perpendicular would be 1/3' },
      { label: 'D', value: '7', isCorrect: false, explanation: '7 is the y-intercept, not the slope' },
    ],
  },
  {
    id: 'lin-8',
    type: 'solve-equation',
    question: 'Solve for x: (x/3) + (x/6) = 5',
    correctAnswer: 'x = 10',
    options: [
      { label: 'A', value: 'x = 10', isCorrect: true },
      { label: 'B', value: 'x = 15', isCorrect: false, explanation: 'LCD is 6: 2x/6 + x/6 = 5, so 3x/6 = 5, x/2 = 5, x = 10' },
      { label: 'C', value: 'x = 30', isCorrect: false, explanation: 'x/3 + x/6 = 2x/6 + x/6 = 3x/6 = x/2 = 5, x = 10' },
      { label: 'D', value: 'x = 6', isCorrect: false, explanation: 'Check: 6/3 + 6/6 = 2 + 1 = 3 ≠ 5' },
    ],
  },
  {
    id: 'lin-9',
    type: 'systems',
    question: 'How many solutions does this system have? 2x + 4y = 8 and x + 2y = 4',
    correctAnswer: 'Infinitely many',
    options: [
      { label: 'A', value: 'Infinitely many', isCorrect: true },
      { label: 'B', value: 'One solution', isCorrect: false, explanation: 'The second equation ×2 gives the first — they are the same line' },
      { label: 'C', value: 'No solution', isCorrect: false, explanation: 'No solution means parallel different lines. These are the same line.' },
      { label: 'D', value: 'Two solutions', isCorrect: false, explanation: 'Linear systems never have exactly 2 solutions' },
    ],
  },
  {
    id: 'lin-10',
    type: 'graph-line',
    question: 'Write the equation of a line with slope 2/3 passing through (3, 1)',
    correctAnswer: 'y = (2/3)x - 1',
    options: [
      { label: 'A', value: 'y = (2/3)x - 1', isCorrect: true },
      { label: 'B', value: 'y = (2/3)x + 1', isCorrect: false, explanation: 'Point-slope: y - 1 = (2/3)(x - 3) → y = (2/3)x - 2 + 1 = (2/3)x - 1' },
      { label: 'C', value: 'y = (2/3)x + 3', isCorrect: false, explanation: 'Plug in (3,1): 1 = (2/3)(3) + b → 1 = 2 + b → b = -1' },
      { label: 'D', value: 'y = (3/2)x - 1', isCorrect: false, explanation: 'Slope is 2/3, not 3/2' },
    ],
  },
]
