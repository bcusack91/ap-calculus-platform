/**
 * Entrance Quiz — Algebra & Equations (ACT)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  { id: 'aae-ent-1a', question: 'What is the value of x in 3x + 7 = 22?', options: ['3', '4', '5', '6'], correctIndex: 2, explanation: 'Subtract 7 from both sides: 3x = 15. Divide by 3: x = 5.', partNumber: 1, partTitle: 'Linear Equations' },
  { id: 'aae-ent-1b', question: 'In the equation y = mx + b, what does b represent?', options: ['The slope', 'The x-intercept', 'The y-intercept', 'The origin'], correctIndex: 2, explanation: 'In slope-intercept form y = mx + b, m is the slope and b is the y-intercept.', partNumber: 1, partTitle: 'Linear Equations' },
  { id: 'aae-ent-2a', question: 'What must you do when multiplying or dividing both sides of an inequality by a negative number?', options: ['Nothing changes', 'Flip the inequality sign', 'Change the variable', 'Square both sides'], correctIndex: 1, explanation: 'When multiplying or dividing an inequality by a negative number, you must flip (reverse) the inequality sign.', partNumber: 2, partTitle: 'Inequalities' },
  { id: 'aae-ent-2b', question: 'What is the solution to 2x − 5 > 9?', options: ['x > 2', 'x > 5', 'x > 7', 'x > 9'], correctIndex: 2, explanation: 'Add 5 to both sides: 2x > 14. Divide by 2: x > 7.', partNumber: 2, partTitle: 'Inequalities' },
  { id: 'aae-ent-3a', question: 'In the substitution method for solving systems, what do you do first?', options: ['Add the two equations', 'Graph both equations', 'Solve one equation for a variable and substitute into the other', 'Set both equations equal to zero'], correctIndex: 2, explanation: 'Substitution: solve one equation for a variable, then plug that expression into the other equation.', partNumber: 3, partTitle: 'Systems of Equations' },
  { id: 'aae-ent-3b', question: 'In the elimination method, what is the goal when you add or subtract equations?', options: ['To double both variables', 'To eliminate one variable', 'To find the y-intercept', 'To create a quadratic'], correctIndex: 1, explanation: 'Elimination works by adding or subtracting equations so that one variable cancels out, leaving a single-variable equation.', partNumber: 3, partTitle: 'Systems of Equations' },
  { id: 'aae-ent-4a', question: 'What are the solutions to |x − 3| = 7?', options: ['x = 10 only', 'x = −4 only', 'x = 10 or x = −4', 'x = 4 or x = −10'], correctIndex: 2, explanation: '|x − 3| = 7 means x − 3 = 7 or x − 3 = −7, so x = 10 or x = −4.', partNumber: 4, partTitle: 'Absolute Value' },
  { id: 'aae-ent-4b', question: 'Which inequality represents |x| > 5?', options: ['−5 < x < 5', 'x > 5', 'x < −5 or x > 5', 'x = 5 or x = −5'], correctIndex: 2, explanation: '|x| > 5 means the distance from zero is greater than 5, so x < −5 or x > 5.', partNumber: 4, partTitle: 'Absolute Value' },
  { id: 'aae-ent-5a', question: 'How do you translate "5 more than twice a number" into an algebraic expression?', options: ['5(2n)', '2n + 5', '2(n + 5)', '5n + 2'], correctIndex: 1, explanation: '"Twice a number" is 2n, and "5 more than" means add 5: 2n + 5.', partNumber: 5, partTitle: 'Word Problem Translation' },
  { id: 'aae-ent-5b', question: 'Which expression represents "the product of a number and 3, decreased by 7"?', options: ['3(n − 7)', '3n − 7', '7 − 3n', '3 + n − 7'], correctIndex: 1, explanation: '"The product of a number and 3" is 3n. "Decreased by 7" means subtract 7: 3n − 7.', partNumber: 5, partTitle: 'Word Problem Translation' },
  { id: 'aae-ent-6a', question: 'Two trains leave cities 300 miles apart heading toward each other at 50 mph and 70 mph. How long until they meet?', options: ['2 hours', '2.5 hours', '3 hours', '3.5 hours'], correctIndex: 1, explanation: 'Combined speed = 50 + 70 = 120 mph. Time = 300/120 = 2.5 hours.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'aae-ent-6b', question: 'Given the system x + y = 10 and 2x − y = 5, what is the value of x?', options: ['3', '4', '5', '6'], correctIndex: 2, explanation: 'Add the equations: (x + y) + (2x − y) = 10 + 5 → 3x = 15 → x = 5.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'aae-ent-7a', question: 'After solving an equation, what should you always do to verify your answer?', options: ['Graph the equation', 'Substitute the answer back into the original equation', 'Factor the equation', 'Take the derivative'], correctIndex: 1, explanation: 'Always check your answer by substituting it back into the original equation to confirm both sides are equal.', partNumber: 7, partTitle: 'Review & Applications' },
  { id: 'aae-ent-7b', question: 'ACT algebra word problems often contain equations in disguise. What is the best first step?', options: ['Guess and check', 'Translate the words into algebraic expressions carefully', 'Plug in answer choice C first', 'Skip the problem'], correctIndex: 1, explanation: 'ACT algebra problems often have "hidden" equations in word form. Carefully translating the words into algebraic expressions is the best approach.', partNumber: 7, partTitle: 'Review & Applications' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Linear Equations' },
    { partNumber: 2, partTitle: 'Inequalities' },
    { partNumber: 3, partTitle: 'Systems of Equations' },
    { partNumber: 4, partTitle: 'Absolute Value' },
    { partNumber: 5, partTitle: 'Word Problem Translation' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Review & Applications' },
  ]
}
