/**
 * Pre-Algebra - Question of the Day
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
  { question: 'Simplify: 7 + 3 * 4', options: ['40', '19', '28', '34'], correctAnswer: 1, explanation: 'Use order of operations: 3*4 = 12, then 7+12 = 19.' },
  { question: 'Which fraction is equivalent to 18/24?', options: ['2/5', '3/4', '4/5', '5/6'], correctAnswer: 1, explanation: 'Divide numerator and denominator by 6: 18/24 = 3/4.' },
  { question: 'Solve: x/5 = 9', options: ['x = 4', 'x = 14', 'x = 45', 'x = 50'], correctAnswer: 2, explanation: 'Multiply both sides by 5: x = 45.' },
  { question: 'Write 0.06 as a percent.', options: ['0.6%', '6%', '60%', '600%'], correctAnswer: 1, explanation: 'Move decimal 2 places right: 0.06 = 6%.' },
  { question: 'A triangle has angles 50 and 60. The third angle is:', options: ['60', '70', '80', '90'], correctAnswer: 1, explanation: 'Triangle angles sum to 180. Third angle = 180 - 50 - 60 = 70.' },
  { question: 'What is |-12|?', options: ['-12', '12', '0', '24'], correctAnswer: 1, explanation: 'Absolute value is distance from zero, so |-12| = 12.' },
  { question: 'If a = 3 and b = 8, find a^2 + b.', options: ['11', '14', '17', '64'], correctAnswer: 2, explanation: 'a^2 + b = 3^2 + 8 = 9 + 8 = 17.' },
  { question: 'Ratio 6:9 simplifies to:', options: ['1:2', '2:3', '3:2', '4:5'], correctAnswer: 1, explanation: 'Divide both terms by 3 to get 2:3.' },
  { question: 'Which number is prime?', options: ['21', '35', '37', '39'], correctAnswer: 2, explanation: '37 has only factors 1 and 37, so it is prime.' },
  { question: 'Find the mean of 4, 8, 10, 14.', options: ['8', '9', '10', '12'], correctAnswer: 1, explanation: 'Sum is 36, divide by 4 values: mean = 9.' },
  { question: 'What is 15% of 200?', options: ['15', '20', '30', '40'], correctAnswer: 2, explanation: '0.15 * 200 = 30.' },
  { question: 'Solve: 2x + 3 = 17', options: ['x = 5', 'x = 6', 'x = 7', 'x = 10'], correctAnswer: 2, explanation: 'Subtract 3: 2x = 14. Divide by 2: x = 7.' },
]

function dayOfYear(): number {
  const now = new Date()
  const start = new Date(now.getFullYear(), 0, 0)
  const diff = now.getTime() - start.getTime()
  return Math.floor(diff / (1000 * 60 * 60 * 24))
}

export interface PreAlgebraDailyQuestion {
  topicSlug: string
  question: Question
  dayNumber: number
}

export function getDailyQuestions(): PreAlgebraDailyQuestion[] {
  const day = dayOfYear()
  const q = QUESTION_POOL[day % QUESTION_POOL.length]
  return [{ topicSlug: 'pre-algebra', question: q, dayNumber: day }]
}
