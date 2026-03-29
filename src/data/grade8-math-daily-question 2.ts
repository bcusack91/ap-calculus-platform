/**
 * Grade 8 Math - Question of the Day
 *
 * Deterministic per calendar day so every visitor sees the same question.
 */

interface Question {
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
}

const QUESTION_POOL: Question[] = [
  { question: 'Solve: 3x - 5 = 16', options: ['x = 11', 'x = 7', 'x = 6', 'x = 5'], correctAnswer: 1, explanation: 'Add 5 to both sides: 3x = 21. Divide by 3: x = 7.' },
  { question: 'What is 25% of 84?', options: ['18', '20', '21', '24'], correctAnswer: 2, explanation: '25% is 1/4, and 84 divided by 4 is 21.' },
  { question: 'A recipe needs 3/4 cup sugar. You make half the recipe. How much sugar?', options: ['3/8 cup', '1/2 cup', '1/4 cup', '6/8 cup'], correctAnswer: 0, explanation: 'Half of 3/4 is (1/2)*(3/4) = 3/8.' },
  { question: 'What is the slope of the line through (2, 3) and (6, 11)?', options: ['1', '2', '3', '4'], correctAnswer: 1, explanation: 'Slope = (11-3)/(6-2) = 8/4 = 2.' },
  { question: 'The square root of 144 is:', options: ['10', '11', '12', '14'], correctAnswer: 2, explanation: '12 * 12 = 144.' },
  { question: 'Simplify: -4 + 9 - 3', options: ['2', '1', '-2', '-4'], correctAnswer: 0, explanation: '-4 + 9 = 5, and 5 - 3 = 2.' },
  { question: 'A box has length 5, width 3, height 2. Its volume is:', options: ['10', '20', '30', '40'], correctAnswer: 2, explanation: 'Volume of rectangular prism = l*w*h = 5*3*2 = 30.' },
  { question: 'Which is equivalent to 0.375?', options: ['3/5', '3/8', '5/8', '7/8'], correctAnswer: 1, explanation: '0.375 = 375/1000 = 3/8.' },
  { question: 'If y = 2x + 1, what is y when x = 4?', options: ['7', '8', '9', '10'], correctAnswer: 2, explanation: 'y = 2(4)+1 = 9.' },
  { question: 'What is the circumference of a circle with radius 4? (Use pi)', options: ['4pi', '8pi', '12pi', '16pi'], correctAnswer: 1, explanation: 'Circumference = 2pi*r = 2pi*4 = 8pi.' },
  { question: 'Solve inequality: x + 6 > 10', options: ['x > 16', 'x > 4', 'x < 4', 'x < 16'], correctAnswer: 1, explanation: 'Subtract 6 from both sides to get x > 4.' },
  { question: 'A discount changes $80 to $68. The percent discount is:', options: ['10%', '12%', '15%', '20%'], correctAnswer: 2, explanation: 'Discount is 12. 12/80 = 0.15 = 15%.' },
]

function dayOfYear(): number {
  const now = new Date()
  const start = new Date(now.getFullYear(), 0, 0)
  const diff = now.getTime() - start.getTime()
  return Math.floor(diff / (1000 * 60 * 60 * 24))
}

export interface Grade8MathDailyQuestion {
  topicSlug: string
  question: Question
  dayNumber: number
}

export function getDailyQuestions(): Grade8MathDailyQuestion[] {
  const day = dayOfYear()
  const q = QUESTION_POOL[day % QUESTION_POOL.length]
  return [{ topicSlug: 'grade-8-math', question: q, dayNumber: day }]
}
