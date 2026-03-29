/**
 * Algebra 2 - Question of the Day
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
  { question: 'Solve for x: x^2 - 9 = 0', options: ['x = 3 only', 'x = -3 only', 'x = 3 or x = -3', 'x = 9'], correctAnswer: 2, explanation: 'x^2 - 9 = (x - 3)(x + 3) = 0, so x = 3 or x = -3.' },
  { question: 'For f(x) = x^2 - 4x + 1, what is the x-coordinate of the vertex?', options: ['-2', '2', '4', '-4'], correctAnswer: 1, explanation: 'For ax^2 + bx + c, vertex x-coordinate is -b/(2a). Here that is -(-4)/(2*1) = 2.' },
  { question: 'Simplify: (x^3)(x^5)', options: ['x^8', 'x^15', 'x^2', 'x^7'], correctAnswer: 0, explanation: 'Multiply like bases by adding exponents: x^(3+5) = x^8.' },
  { question: 'What is the discriminant of 2x^2 + 3x - 2 = 0?', options: ['1', '9', '25', '-7'], correctAnswer: 2, explanation: 'Discriminant b^2 - 4ac = 3^2 - 4(2)(-2) = 9 + 16 = 25.' },
  { question: 'If log_10(x) = 2, then x = ?', options: ['20', '100', '2', '10'], correctAnswer: 1, explanation: 'log_10(x) = 2 means 10^2 = x, so x = 100.' },
  { question: 'Solve: 2^(x+1) = 16', options: ['x = 5', 'x = 4', 'x = 3', 'x = 2'], correctAnswer: 2, explanation: '16 = 2^4, so x + 1 = 4 and x = 3.' },
  { question: 'Factor completely: x^2 + 7x + 12', options: ['(x + 3)(x + 4)', '(x - 3)(x - 4)', '(x + 2)(x + 6)', '(x + 1)(x + 12)'], correctAnswer: 0, explanation: 'Find two numbers that multiply to 12 and add to 7: 3 and 4.' },
  { question: 'What is the inverse of f(x) = 3x - 5?', options: ['f^(-1)(x) = (x + 5)/3', 'f^(-1)(x) = 3x + 5', 'f^(-1)(x) = (x - 5)/3', 'f^(-1)(x) = 1/(3x-5)'], correctAnswer: 0, explanation: 'Set y = 3x - 5 and solve for x: x = (y + 5)/3.' },
  { question: 'Simplify: (x^2 - 16)/(x - 4)', options: ['x - 4', 'x + 4', 'x^2 + 4', 'x^2 - 4'], correctAnswer: 1, explanation: 'x^2 - 16 = (x - 4)(x + 4), so expression simplifies to x + 4 for x != 4.' },
  { question: 'i^2 equals:', options: ['1', '-1', 'i', '-i'], correctAnswer: 1, explanation: 'By definition, i = sqrt(-1), so i^2 = -1.' },
  { question: 'Which is equivalent to sqrt(50)?', options: ['5sqrt(2)', '25sqrt(2)', '10sqrt(5)', '2sqrt(5)'], correctAnswer: 0, explanation: 'sqrt(50) = sqrt(25*2) = 5sqrt(2).' },
  { question: 'A geometric sequence has first term 3 and ratio 2. What is the 4th term?', options: ['12', '16', '24', '48'], correctAnswer: 2, explanation: 'Terms are 3, 6, 12, 24. So the 4th term is 24.' },
  { question: 'What is the domain of f(x) = 1/(x - 6)?', options: ['All real numbers', 'x != 0', 'x != 6', 'x > 6'], correctAnswer: 2, explanation: 'Denominator cannot be zero, so x cannot equal 6.' },
  { question: 'Solve: |2x - 1| = 7', options: ['x = 4 or x = -3', 'x = 3 or x = -4', 'x = 4 only', 'x = -3 only'], correctAnswer: 0, explanation: '2x - 1 = 7 or 2x - 1 = -7 gives x = 4 or x = -3.' },
  { question: 'If f(x) = x^3, then f(2) = ?', options: ['6', '8', '9', '4'], correctAnswer: 1, explanation: 'f(2) = 2^3 = 8.' },
  { question: 'The solution set of x^2 < 16 is:', options: ['x < -4 or x > 4', '-4 < x < 4', 'x <= 4', 'x >= -4'], correctAnswer: 1, explanation: 'x^2 < 16 means x lies between the roots -4 and 4.' },
  { question: 'Expand: (x - 5)^2', options: ['x^2 - 10x + 25', 'x^2 - 25', 'x^2 + 10x + 25', 'x^2 - 5x + 25'], correctAnswer: 0, explanation: '(x - 5)^2 = x^2 - 10x + 25.' },
  { question: 'Solve the system: y = 2x + 1 and y = x + 4', options: ['(3, 7)', '(2, 5)', '(1, 3)', '(4, 9)'], correctAnswer: 0, explanation: 'Set equations equal: 2x + 1 = x + 4 gives x = 3, then y = 7.' },
  { question: 'What is the horizontal asymptote of f(x) = (3x + 1)/(x - 2)?', options: ['y = 0', 'y = 3', 'y = -2', 'No horizontal asymptote'], correctAnswer: 1, explanation: 'Degrees are equal, so asymptote is ratio of leading coefficients: 3/1 = 3.' },
  { question: 'Solve: log_2(x) = 5', options: ['x = 10', 'x = 25', 'x = 32', 'x = 64'], correctAnswer: 2, explanation: 'log_2(x) = 5 means x = 2^5 = 32.' },
]

function dayOfYear(): number {
  const now = new Date()
  const start = new Date(now.getFullYear(), 0, 0)
  const diff = now.getTime() - start.getTime()
  return Math.floor(diff / (1000 * 60 * 60 * 24))
}

export interface Algebra2DailyQuestion {
  topicSlug: string
  question: Question
  dayNumber: number
}

export function getDailyQuestions(): Algebra2DailyQuestion[] {
  const day = dayOfYear()
  const q = QUESTION_POOL[day % QUESTION_POOL.length]
  return [{ topicSlug: 'algebra-2', question: q, dayNumber: day }]
}
