/**
 * Algebra 1 — Question of the Day
 *
 * Self-contained question pool covering core Algebra 1 topics.
 * Deterministic per calendar day so every visitor sees the same question.
 */

interface Question {
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
}

const QUESTION_POOL: Question[] = [
  { question: 'Solve for x: 2x + 5 = 17', options: ['4', '6', '7', '12'], correctAnswer: 1, explanation: '2x + 5 = 17 → 2x = 12 → x = 6.' },
  { question: 'What is the slope of the line y = 3x − 7?', options: ['−7', '3', '7', '−3'], correctAnswer: 1, explanation: 'In slope-intercept form y = mx + b, the coefficient of x is the slope. Here m = 3.' },
  { question: 'Simplify: 3(2x − 4) + 5x', options: ['11x − 12', '6x − 12', '11x − 4', '6x + 5'], correctAnswer: 0, explanation: '3(2x − 4) + 5x = 6x − 12 + 5x = 11x − 12.' },
  { question: 'Factor: x² + 5x + 6', options: ['(x + 1)(x + 6)', '(x + 2)(x + 3)', '(x − 2)(x − 3)', '(x + 5)(x + 1)'], correctAnswer: 1, explanation: 'Find two numbers that multiply to 6 and add to 5: 2 and 3. So x² + 5x + 6 = (x + 2)(x + 3).' },
  { question: 'Solve: 5x − 3 = 2x + 9', options: ['2', '3', '4', '6'], correctAnswer: 2, explanation: '5x − 3 = 2x + 9 → 3x = 12 → x = 4.' },
  { question: 'What is the y-intercept of the equation 4x + 2y = 10?', options: ['(0, 5)', '(0, 10)', '(5, 0)', '(2.5, 0)'], correctAnswer: 0, explanation: 'Set x = 0: 2y = 10 → y = 5. The y-intercept is (0, 5).' },
  { question: 'Simplify: (−3)² × 2', options: ['−18', '18', '−12', '12'], correctAnswer: 1, explanation: '(−3)² = 9, then 9 × 2 = 18. The parentheses mean the entire (−3) is squared.' },
  { question: 'Which equation represents a line parallel to y = 2x + 1?', options: ['y = −2x + 5', 'y = 2x − 3', 'y = ½x + 1', 'y = −½x + 1'], correctAnswer: 1, explanation: 'Parallel lines have the same slope. The given line has slope 2, so y = 2x − 3 (slope = 2) is parallel.' },
  { question: 'Solve the inequality: 3x + 1 > 10', options: ['x > 3', 'x > 9', 'x < 3', 'x ≥ 3'], correctAnswer: 0, explanation: '3x + 1 > 10 → 3x > 9 → x > 3.' },
  { question: 'If f(x) = x² − 4, what is f(3)?', options: ['5', '−1', '13', '9'], correctAnswer: 0, explanation: 'f(3) = 3² − 4 = 9 − 4 = 5.' },
  { question: 'What is the solution to the system: x + y = 7 and x − y = 3?', options: ['(5, 2)', '(4, 3)', '(3, 4)', '(2, 5)'], correctAnswer: 0, explanation: 'Adding: 2x = 10 → x = 5. Then 5 + y = 7 → y = 2. Solution: (5, 2).' },
  { question: 'Simplify: √(36) + √(49)', options: ['13', '85', '11', '15'], correctAnswer: 0, explanation: '√36 = 6 and √49 = 7, so 6 + 7 = 13.' },
  { question: 'Which expression is equivalent to 2⁴ × 2³?', options: ['2⁷', '2¹²', '4⁷', '2¹'], correctAnswer: 0, explanation: 'When multiplying powers with the same base, add exponents: 2⁴ × 2³ = 2⁴⁺³ = 2⁷.' },
  { question: 'What is the domain of f(x) = 1/(x − 3)?', options: ['All real numbers', 'All real numbers except 3', 'x ≥ 3', 'x > 0'], correctAnswer: 1, explanation: 'The function is undefined when the denominator equals zero: x − 3 = 0 → x = 3. So the domain excludes x = 3.' },
  { question: 'Solve: |x − 4| = 7', options: ['x = 11 or x = −3', 'x = 11 only', 'x = 3 or x = −3', 'x = 7 or x = −7'], correctAnswer: 0, explanation: '|x − 4| = 7 means x − 4 = 7 or x − 4 = −7. So x = 11 or x = −3.' },
  { question: 'What type of number is √2?', options: ['Rational', 'Irrational', 'Integer', 'Natural'], correctAnswer: 1, explanation: '√2 cannot be expressed as a fraction p/q where p, q are integers. It is an irrational number (≈1.414...).' },
  { question: 'Solve: x² − 9 = 0', options: ['x = 3 only', 'x = −3 only', 'x = 3 or x = −3', 'x = 9'], correctAnswer: 2, explanation: 'x² − 9 = 0 → x² = 9 → x = ±3. This is a difference of squares: (x − 3)(x + 3) = 0.' },
  { question: 'What is the GCF of 12x³ and 18x²?', options: ['6x²', '6x³', '36x²', '3x'], correctAnswer: 0, explanation: 'GCF of 12 and 18 is 6. GCF of x³ and x² is x². So GCF = 6x².' },
  { question: 'Which graph represents a function?', options: ['A circle', 'A vertical line', 'A parabola opening upward', 'Two horizontal lines'], correctAnswer: 2, explanation: 'A parabola opening upward passes the vertical line test (each x has one y). A circle, vertical line, and two horizontal lines fail the vertical line test.' },
  { question: 'Evaluate: −2(3 − 5)² + 4', options: ['−4', '0', '−12', '12'], correctAnswer: 0, explanation: '−2(3 − 5)² + 4 = −2(−2)² + 4 = −2(4) + 4 = −8 + 4 = −4.' },
  { question: 'What is the slope between points (1, 2) and (4, 8)?', options: ['2', '3', '6', '1/2'], correctAnswer: 0, explanation: 'Slope = (8 − 2)/(4 − 1) = 6/3 = 2.' },
  { question: 'Solve: 2(x − 3) = x + 1', options: ['7', '5', '4', '1'], correctAnswer: 0, explanation: '2x − 6 = x + 1 → x = 7.' },
  { question: 'What is the range of f(x) = x² if the domain is all real numbers?', options: ['All real numbers', 'y ≥ 0', 'y > 0', 'y ≤ 0'], correctAnswer: 1, explanation: 'x² is always non-negative (≥ 0) for any real x. The minimum value is 0 (at x = 0), so the range is y ≥ 0.' },
  { question: 'Simplify: (2x³)²', options: ['2x⁶', '4x⁶', '4x⁵', '2x⁵'], correctAnswer: 1, explanation: '(2x³)² = 2² × (x³)² = 4x⁶. Raise both the coefficient and variable to the power.' },
  { question: 'Which equation has no solution?', options: ['x + 1 = x + 1', '2x = 2x + 3', 'x = 0', '3x = 9'], correctAnswer: 1, explanation: '2x = 2x + 3 → 0 = 3, which is a contradiction. No value of x satisfies this equation.' },
  { question: 'Convert to scientific notation: 0.00045', options: ['4.5 × 10⁻⁴', '45 × 10⁻⁵', '4.5 × 10⁻³', '0.45 × 10⁻³'], correctAnswer: 0, explanation: 'Move the decimal 4 places right: 0.00045 = 4.5 × 10⁻⁴.' },
  { question: 'Find the x-intercept of y = 3x − 9.', options: ['(3, 0)', '(−3, 0)', '(0, −9)', '(9, 0)'], correctAnswer: 0, explanation: 'Set y = 0: 0 = 3x − 9 → 3x = 9 → x = 3. The x-intercept is (3, 0).' },
  { question: 'Solve: x/3 + 2 = 5', options: ['1', '9', '7', '15'], correctAnswer: 1, explanation: 'x/3 + 2 = 5 → x/3 = 3 → x = 9.' },
  { question: 'What is the product of (x + 3)(x − 3)?', options: ['x² − 9', 'x² + 9', 'x² − 6x + 9', 'x² + 6x + 9'], correctAnswer: 0, explanation: 'This is a difference of squares: (x + 3)(x − 3) = x² − 9.' },
  { question: 'If a line has slope 0, it is:', options: ['Vertical', 'Horizontal', 'Diagonal', 'Undefined'], correctAnswer: 1, explanation: 'A slope of 0 means no rise (Δy = 0), so the line is horizontal (e.g., y = 5).' },
]

function dayOfYear(): number {
  const now = new Date()
  const start = new Date(now.getFullYear(), 0, 0)
  const diff = now.getTime() - start.getTime()
  return Math.floor(diff / (1000 * 60 * 60 * 24))
}

export interface Algebra1DailyQuestion {
  topicSlug: string
  question: Question
  dayNumber: number
}

export function getDailyQuestions(): Algebra1DailyQuestion[] {
  const day = dayOfYear()
  const q = QUESTION_POOL[day % QUESTION_POOL.length]
  return [{ topicSlug: 'algebra-1', question: q, dayNumber: day }]
}
