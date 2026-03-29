/**
 * Pre-Calculus - Question of the Day
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
  { question: 'Evaluate: sin(pi/6)', options: ['1/2', 'sqrt(2)/2', 'sqrt(3)/2', '1'], correctAnswer: 0, explanation: 'sin(pi/6) = sin(30 degrees) = 1/2.' },
  { question: 'If f(x) = x^2 + 1 and g(x) = 2x, what is (f o g)(x)?', options: ['2x^2 + 1', '4x^2 + 1', '(x^2 + 1)2x', '2x + 1'], correctAnswer: 1, explanation: '(f o g)(x) = f(g(x)) = f(2x) = (2x)^2 + 1 = 4x^2 + 1.' },
  { question: 'What is the period of y = cos(3x)?', options: ['2pi', 'pi', '2pi/3', '3pi'], correctAnswer: 2, explanation: 'For cos(Bx), period is 2pi/|B| = 2pi/3.' },
  { question: 'Solve: 2^x = 8', options: ['x = 2', 'x = 3', 'x = 4', 'x = 8'], correctAnswer: 1, explanation: '8 = 2^3, so x = 3.' },
  { question: 'The inverse of f(x) = 5x - 10 is:', options: ['(x + 10)/5', '(x - 10)/5', '5x + 10', '1/(5x-10)'], correctAnswer: 0, explanation: 'Set y = 5x - 10, then x = (y + 10)/5.' },
  { question: 'If tan(theta) = 1 and theta is in Quadrant I, theta equals:', options: ['pi/6', 'pi/4', 'pi/3', 'pi/2'], correctAnswer: 1, explanation: 'tan(pi/4) = 1.' },
  { question: 'Convert polar to rectangular: r = 4, theta = pi/3. Find x.', options: ['2', '2sqrt(3)', '4', 'sqrt(3)'], correctAnswer: 0, explanation: 'x = r cos(theta) = 4 * cos(pi/3) = 4 * 1/2 = 2.' },
  { question: 'What is log_10(1000)?', options: ['2', '3', '10', '100'], correctAnswer: 1, explanation: '10^3 = 1000, so log_10(1000) = 3.' },
  { question: 'Which identity is always true?', options: ['sin^2(x) + cos^2(x) = 1', 'sin(x) + cos(x) = 1', 'tan(x) = cos(x)/sin(x)', 'sec(x) = 1/sin(x)'], correctAnswer: 0, explanation: 'The Pythagorean identity is sin^2(x) + cos^2(x) = 1.' },
  { question: 'Find the 6th term of arithmetic sequence 4, 7, 10, ...', options: ['16', '19', '22', '25'], correctAnswer: 1, explanation: 'Common difference is 3, so a6 = 4 + 5*3 = 19.' },
  { question: 'Solve for x: ln(x) = 0', options: ['0', '1', 'e', 'Cannot be solved'], correctAnswer: 1, explanation: 'ln(1) = 0, so x = 1.' },
  { question: 'If f(x) = (x - 1)/(x + 2), which x is excluded from domain?', options: ['x = -2', 'x = 2', 'x = 1', 'x = 0'], correctAnswer: 0, explanation: 'Denominator cannot be zero, so x + 2 != 0 and x != -2.' },
  { question: 'What is cos(0)?', options: ['0', '1', '-1', 'Undefined'], correctAnswer: 1, explanation: 'On the unit circle, cos(0) = 1.' },
  { question: 'A geometric sequence starts 5, 10, 20, ... What is the 5th term?', options: ['40', '60', '80', '160'], correctAnswer: 2, explanation: 'Ratio is 2. Terms: 5, 10, 20, 40, 80.' },
  { question: 'Solve: x^2 - 6x + 9 = 0', options: ['x = 3', 'x = -3', 'x = 0', 'x = 9'], correctAnswer: 0, explanation: 'x^2 - 6x + 9 = (x - 3)^2, so x = 3.' },
  { question: 'What is the amplitude of y = -4sin(x)?', options: ['-4', '4', '1/4', '0'], correctAnswer: 1, explanation: 'Amplitude is absolute value of coefficient: |-4| = 4.' },
  { question: 'If r = 2 and theta = pi/2 in polar form, what is y?', options: ['0', '1', '2', 'pi'], correctAnswer: 2, explanation: 'y = r sin(theta) = 2 * sin(pi/2) = 2.' },
  { question: 'Simplify: (x^3)^2', options: ['x^5', 'x^6', '2x^3', 'x^9'], correctAnswer: 1, explanation: 'Power of a power multiplies exponents: x^(3*2) = x^6.' },
  { question: 'The graph of y = f(x - 4) is shifted:', options: ['Left 4', 'Right 4', 'Up 4', 'Down 4'], correctAnswer: 1, explanation: 'Replacing x with x - h shifts the graph right by h.' },
  { question: 'Evaluate: sec(pi/3)', options: ['1/2', '2', 'sqrt(3)', '1'], correctAnswer: 1, explanation: 'sec(theta) = 1/cos(theta), and cos(pi/3) = 1/2, so sec(pi/3) = 2.' },
]

function dayOfYear(): number {
  const now = new Date()
  const start = new Date(now.getFullYear(), 0, 0)
  const diff = now.getTime() - start.getTime()
  return Math.floor(diff / (1000 * 60 * 60 * 24))
}

export interface PrecalcDailyQuestion {
  topicSlug: string
  question: Question
  dayNumber: number
}

export function getDailyQuestions(): PrecalcDailyQuestion[] {
  const day = dayOfYear()
  const q = QUESTION_POOL[day % QUESTION_POOL.length]
  return [{ topicSlug: 'precalculus', question: q, dayNumber: day }]
}
