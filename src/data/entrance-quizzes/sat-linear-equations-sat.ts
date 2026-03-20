/**
 * Entrance Quiz — Linear Equations (SAT)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  { id: 'sle-ent-1a', question: 'What is the slope of the line given by 4x − 2y = 8?', options: ['−2', '2', '4', '−4'], correctIndex: 1, explanation: 'Rewrite in slope-intercept form: −2y = −4x + 8 → y = 2x − 4. The slope is 2.', partNumber: 1, partTitle: 'Linear Equation Basics' },
  { id: 'sle-ent-1b', question: 'Which of the following is the equation of a horizontal line passing through (0, −3)?', options: ['x = −3', 'y = −3', 'y = 3x', 'x = 3'], correctIndex: 1, explanation: 'A horizontal line has the form y = c. The line through (0, −3) is y = −3.', partNumber: 1, partTitle: 'Linear Equation Basics' },
  { id: 'sle-ent-2a', question: 'Solve for x: 5(x − 2) = 3x + 4', options: ['x = 3', 'x = 5', 'x = 7', 'x = 9'], correctIndex: 2, explanation: 'Expand: 5x − 10 = 3x + 4 → 2x = 14 → x = 7.', partNumber: 2, partTitle: 'Solving for Variables' },
  { id: 'sle-ent-2b', question: 'If 3x + 4y = 24 and x = 0, what is y?', options: ['3', '4', '6', '8'], correctIndex: 2, explanation: 'Substitute x = 0: 4y = 24 → y = 6.', partNumber: 2, partTitle: 'Solving for Variables' },
  { id: 'sle-ent-3a', question: 'A store sells notebooks for $3 each and pens for $1 each. Maria buys a total of 12 items and spends $28. How many notebooks did she buy?', options: ['6', '7', '8', '9'], correctIndex: 2, explanation: 'Let n = notebooks, p = pens. n + p = 12 and 3n + p = 28. Subtracting: 2n = 16 → n = 8.', partNumber: 3, partTitle: 'Word Problems' },
  { id: 'sle-ent-3b', question: 'A taxi charges $2.50 plus $0.75 per mile. If a ride costs $11.50, how many miles was the ride?', options: ['9', '10', '11', '12'], correctIndex: 3, explanation: '2.50 + 0.75m = 11.50 → 0.75m = 9 → m = 12 miles.', partNumber: 3, partTitle: 'Word Problems' },
  { id: 'sle-ent-4a', question: 'What is the solution to the system: y = 2x + 1 and y = −x + 7?', options: ['(2, 5)', '(3, 4)', '(1, 3)', '(4, 3)'], correctIndex: 0, explanation: 'Set equal: 2x + 1 = −x + 7 → 3x = 6 → x = 2; y = 2(2)+1 = 5. Solution: (2, 5).', partNumber: 4, partTitle: 'Systems of Equations' },
  { id: 'sle-ent-4b', question: 'How many solutions does the system y = 3x − 2 and 6x − 2y = 4 have?', options: ['Zero', 'Exactly one', 'Exactly two', 'Infinitely many'], correctIndex: 3, explanation: 'Rewrite the second equation: 6x − 2y = 4 → y = 3x − 2. Both equations are identical, so there are infinitely many solutions.', partNumber: 4, partTitle: 'Systems of Equations' },
  { id: 'sle-ent-5a', question: 'A line models the cost C (in dollars) of producing n items: C = 4n + 50. What does 50 represent?', options: ['Cost per item', 'Number of items', 'Fixed starting cost', 'Total revenue'], correctIndex: 2, explanation: 'In C = 4n + 50, the constant 50 is the y-intercept, representing the fixed (starting) cost before any items are made.', partNumber: 5, partTitle: 'Modeling' },
  { id: 'sle-ent-5b', question: 'The table shows x: 1, 2, 3 and y: 5, 8, 11. Which linear equation models this data?', options: ['y = 2x + 3', 'y = 3x + 2', 'y = x + 4', 'y = 4x + 1'], correctIndex: 1, explanation: 'Slope = (8−5)/(2−1) = 3. Using point (1, 5): 5 = 3(1) + b → b = 2. Equation: y = 3x + 2.', partNumber: 5, partTitle: 'Modeling' },
  { id: 'sle-ent-6a', question: 'Two lines are perpendicular. One has slope 2/3. What is the slope of the other line?', options: ['2/3', '3/2', '−3/2', '−2/3'], correctIndex: 2, explanation: 'Perpendicular slopes are negative reciprocals. The negative reciprocal of 2/3 is −3/2.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'sle-ent-6b', question: 'Line ℓ passes through (1, 4) and (3, 10). What is the equation of line ℓ?', options: ['y = 2x + 2', 'y = 3x + 1', 'y = 3x − 1', 'y = 2x + 4'], correctIndex: 1, explanation: 'Slope = (10 − 4)/(3 − 1) = 3. Using (1, 4): 4 = 3(1) + b → b = 1. Equation: y = 3x + 1.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'sle-ent-7a', question: 'If 2x − 3 = k and x = 5, what is the value of k?', options: ['4', '6', '7', '13'], correctIndex: 2, explanation: 'Substitute x = 5: 2(5) − 3 = 10 − 3 = 7.', partNumber: 7, partTitle: 'Review & Applications' },
  { id: 'sle-ent-7b', question: 'Which graph represents a line with a negative slope and a positive y-intercept?', options: ['Falls left to right, crosses y-axis below origin', 'Falls left to right, crosses y-axis above origin', 'Rises left to right, crosses y-axis above origin', 'Rises left to right, crosses y-axis below origin'], correctIndex: 1, explanation: 'A negative slope means the line falls from left to right. A positive y-intercept means it crosses the y-axis above the origin.', partNumber: 7, partTitle: 'Review & Applications' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Linear Equation Basics' },
    { partNumber: 2, partTitle: 'Solving for Variables' },
    { partNumber: 3, partTitle: 'Word Problems' },
    { partNumber: 4, partTitle: 'Systems of Equations' },
    { partNumber: 5, partTitle: 'Modeling' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Review & Applications' },
  ]
}
