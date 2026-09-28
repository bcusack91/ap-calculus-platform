/**
 * Entrance Quiz — Linear Equations (SAT)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  { id: 'sle-ent-1a', question: 'What is the slope of the line $4x - 2y = 8$?', options: ['$-2$', '$2$', '$4$', '$-4$'], correctIndex: 1, explanation: 'Solve for $y$: $-2y = -4x + 8$, so $y = 2x - 4$ and the slope is 2. (For $Ax + By = C$, the slope is $-\\frac{A}{B} = -\\frac{4}{-2} = 2$.)', partNumber: 1, partTitle: 'Slope-Intercept and Standard Form' },
  { id: 'sle-ent-1b', question: 'A line passes through the points $(1, 4)$ and $(3, 10)$. Which equation represents the line?', options: ['$y = 2x + 2$', '$y = 3x + 1$', '$y = 3x - 1$', '$y = 2x + 4$'], correctIndex: 1, explanation: 'Slope $= \\dfrac{10 - 4}{3 - 1} = 3$. Using $(1, 4)$: $4 = 3(1) + b$, so $b = 1$ and $y = 3x + 1$.', partNumber: 1, partTitle: 'Slope-Intercept and Standard Form' },
  { id: 'sle-ent-2a', question: 'What is the solution $(x, y)$ to the system $y = 2x + 1$ and $y = -x + 7$?', options: ['$(2, 5)$', '$(3, 4)$', '$(1, 3)$', '$(4, 3)$'], correctIndex: 0, explanation: 'Set the expressions equal: $2x + 1 = -x + 7$, so $3x = 6$ and $x = 2$. Then $y = 2(2) + 1 = 5$. ($(1, 3)$ satisfies only the first equation.)', partNumber: 2, partTitle: 'Systems of Linear Equations' },
  { id: 'sle-ent-2b', question: 'How many solutions does the system $y = 3x - 2$ and $6x - 2y = 4$ have?', options: ['No solution at all', 'Exactly one', 'Exactly two', 'Infinitely many'], correctIndex: 3, explanation: 'Solve the second equation for $y$: $-2y = -6x + 4$, so $y = 3x - 2$. The equations describe the same line, so every point on it is a solution.', partNumber: 2, partTitle: 'Systems of Linear Equations' },
  { id: 'sle-ent-3a', question: 'Which of the following is the solution to $-3x + 5 > 17$?', options: ['$x < -4$', '$x > -4$', '$x < 4$', '$x > 4$'], correctIndex: 0, explanation: 'Subtract 5: $-3x > 12$. Divide by $-3$ and flip the inequality: $x < -4$. (Forgetting to flip gives $x > -4$.)', partNumber: 3, partTitle: 'Linear Inequalities' },
  { id: 'sle-ent-3b', question: 'Which of the following points lies in the solution region of $y > 2x - 3$?', options: ['$(0, 0)$', '$(2, 1)$', '$(3, 2)$', '$(4, 4)$'], correctIndex: 0, explanation: 'Test each point: $(0, 0)$ gives $0 > -3$, true. $(2, 1)$ gives $1 > 1$, false (a point on a dashed boundary is not included); $(3, 2)$ gives $2 > 3$, false; $(4, 4)$ gives $4 > 5$, false.', partNumber: 3, partTitle: 'Linear Inequalities' },
  { id: 'sle-ent-4a', question: 'Two lines are perpendicular. One has slope $\\dfrac{2}{3}$. What is the slope of the other line?', options: ['$\\dfrac{2}{3}$', '$\\dfrac{3}{2}$', '$-\\dfrac{3}{2}$', '$-\\dfrac{2}{3}$'], correctIndex: 2, explanation: 'Perpendicular slopes are negative reciprocals (their product is $-1$): the negative reciprocal of $\\dfrac{2}{3}$ is $-\\dfrac{3}{2}$.', partNumber: 4, partTitle: 'Parallel and Perpendicular Lines' },
  { id: 'sle-ent-4b', question: 'Which equation describes the line that passes through $(2, 5)$ and is parallel to $y = -3x + 1$?', options: ['$y = -3x + 11$', '$y = -3x + 5$', '$y = \\frac{1}{3}x + \\frac{13}{3}$', '$y = -3x - 1$'], correctIndex: 0, explanation: 'Parallel lines share the slope $-3$. Using $(2, 5)$: $5 = -3(2) + b$, so $b = 11$. ($y = -3x + 5$ uses the $y$-coordinate as the intercept; the $\\frac{1}{3}$ slope is perpendicular.)', partNumber: 4, partTitle: 'Parallel and Perpendicular Lines' },
  { id: 'sle-ent-5a', question: 'The cost $C$, in dollars, of producing $n$ items is $C = 4n + 50$. What does 50 represent?', options: ['The cost to produce each additional item', 'The number of items produced each day', 'The fixed cost before any items are made', 'The total revenue from selling the items'], correctIndex: 2, explanation: 'When $n = 0$, $C = 50$, so 50 is the starting (fixed) cost. The 4 is the cost per additional item.', partNumber: 5, partTitle: 'Word Problems with Linear Models' },
  { id: 'sle-ent-5b', question: 'A taxi charges a fee of $\\$2.50$ plus $\\$0.75$ per mile. If a ride costs $\\$11.50$, how many miles long was the ride?', options: ['9', '10', '11', '12'], correctIndex: 3, explanation: '$2.50 + 0.75m = 11.50$, so $0.75m = 9$ and $m = 12$. (Dividing 11.50 by 0.75 without removing the fee gives about 15.3.)', partNumber: 5, partTitle: 'Word Problems with Linear Models' },
  { id: 'sle-ent-6a', question: 'What are all the solutions to $|2x - 3| = 7$?', options: ['$x = 5$ or $x = -2$', '$x = 5$ only', '$x = 5$ or $x = 2$', '$x = -5$ or $x = 2$'], correctIndex: 0, explanation: 'Split into two cases: $2x - 3 = 7$ gives $x = 5$, and $2x - 3 = -7$ gives $x = -2$. Both check in the original equation.', partNumber: 6, partTitle: 'Absolute Value and Literal Equations' },
  { id: 'sle-ent-6b', question: 'The perimeter of a rectangle is $P = 2l + 2w$. Which equation gives $w$ in terms of $P$ and $l$?', options: ['$w = \\dfrac{P - 2l}{2}$', '$w = P - 2l$', '$w = \\dfrac{P}{2} - 2l$', '$w = \\dfrac{P + 2l}{2}$'], correctIndex: 0, explanation: 'Subtract $2l$ from both sides: $P - 2l = 2w$. Divide both sides by 2: $w = \\dfrac{P - 2l}{2}$. ($\\dfrac{P}{2} - 2l$ divides only one term by 2.)', partNumber: 6, partTitle: 'Absolute Value and Literal Equations' },
  { id: 'sle-ent-7a', question: 'A store sells notebooks for $\\$3$ each and pens for $\\$1$ each. Maria buys 12 items in total and spends $\\$28$. How many notebooks did she buy?', options: ['6', '7', '8', '9'], correctIndex: 2, explanation: 'Let $n$ be notebooks and $p$ be pens: $n + p = 12$ and $3n + p = 28$. Subtracting gives $2n = 16$, so $n = 8$ (and $p = 4$).', partNumber: 7, partTitle: 'SAT Mixed Practice & Review' },
  { id: 'sle-ent-7b', question: 'Which linear equation models the data in the table?\n\n| $x$ | 1 | 2 | 3 |\n| --- | --- | --- | --- |\n| $y$ | 5 | 8 | 11 |', options: ['$y = 2x + 3$', '$y = 3x + 2$', '$y = x + 4$', '$y = 4x + 1$'], correctIndex: 1, explanation: 'Each time $x$ increases by 1, $y$ increases by 3, so the slope is 3. Using $(1, 5)$: $5 = 3 + b$, so $b = 2$ and $y = 3x + 2$. ($y = 2x + 3$ fits only the first row.)', partNumber: 7, partTitle: 'SAT Mixed Practice & Review' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Slope-Intercept and Standard Form' },
    { partNumber: 2, partTitle: 'Systems of Linear Equations' },
    { partNumber: 3, partTitle: 'Linear Inequalities' },
    { partNumber: 4, partTitle: 'Parallel and Perpendicular Lines' },
    { partNumber: 5, partTitle: 'Word Problems with Linear Models' },
    { partNumber: 6, partTitle: 'Absolute Value and Literal Equations' },
    { partNumber: 7, partTitle: 'SAT Mixed Practice & Review' },
  ]
}
