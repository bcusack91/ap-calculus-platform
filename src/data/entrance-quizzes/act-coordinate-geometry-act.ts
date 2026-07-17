/**
 * Entrance Quiz — Coordinate Geometry (ACT)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  { id: 'acg-ent-1a', question: 'What is the formula for the slope of a line through two points ($x_{1}$, $y_{1}$) and ($x_{2}$, $y_{2}$)?', options: ['$(x_{2} - x_{1})$ / $(y_{2} - y_{1})$', '$(y_{2} - y_{1})$ / $(x_{2} - x_{1})$', '$(y_{2} + y_{1})$ / $(x_{2} + x_{1})$', '$(x_{2} + x_{1})$ / $(y_{2} + y_{1})$'], correctIndex: 1, explanation: 'Slope = rise/run = $(y_{2} - y_{1})$ / $(x_{2} - x_{1})$.', partNumber: 1, partTitle: 'Graphing Lines' },
  { id: 'acg-ent-1b', question: 'To graph y = 2x − 3, you start at (0, −3). What do you do next?', options: ['Go down 2, right 1', 'Go up 2, right 1', 'Go up 3, right 2', 'Go right 2, up 3'], correctIndex: 1, explanation: 'The slope is 2 = 2/1, meaning go up 2 and right 1 from the y-intercept (0, −3).', partNumber: 1, partTitle: 'Graphing Lines' },
  { id: 'acg-ent-2a', question: 'What is the distance formula between two points ($x_{1}$, $y_{1}$) and ($x_{2}$, $y_{2}$)?', options: ['|$x_{2}$ − $x_{1}$| + |$y_{2}$ − $y_{1}$|', '√[$(x_{2} - x_{1})^{2}$ + $(y_{2} - y_{1})^{2}$]', '$(x_{2} - x_{1})^{2}$ + $(y_{2} - y_{1})^{2}$', '√[$(x_{2} + x_{1})^{2}$ + $(y_{2} + y_{1})^{2}$]'], correctIndex: 1, explanation: 'The distance formula d = √[$(x_{2} - x_{1})^{2}$ + $(y_{2} - y_{1})^{2}$] comes from the Pythagorean theorem.', partNumber: 2, partTitle: 'Distance & Midpoint' },
  { id: 'acg-ent-2b', question: 'What is the midpoint of the segment from (2, 4) to (8, 10)?', options: ['(4, 6)', '(5, 7)', '(6, 8)', '(10, 14)'], correctIndex: 1, explanation: 'Midpoint = ((2+8)/2, (4+10)/2) = (10/2, 14/2) = (5, 7).', partNumber: 2, partTitle: 'Distance & Midpoint' },
  { id: 'acg-ent-3a', question: 'Two lines have slopes of 3 and −1/3. What is their relationship?', options: ['Parallel', 'Perpendicular', 'Neither', 'Coincident'], correctIndex: 1, explanation: 'Perpendicular lines have slopes that are negative reciprocals. 3 × (−1/3) = −1, confirming perpendicularity.', partNumber: 3, partTitle: 'Slope Applications' },
  { id: 'acg-ent-3b', question: 'What is the slope of a horizontal line?', options: ['1', 'Undefined', '0', '−1'], correctIndex: 2, explanation: 'A horizontal line has slope 0 (no rise). A vertical line has undefined slope.', partNumber: 3, partTitle: 'Slope Applications' },
  { id: 'acg-ent-4a', question: 'Which equation represents a circle with center (3, −2) and radius 5?', options: ['$(x - 3)^{2}$ + $(y + 2)^{2}$ = 5', '$(x + 3)^{2}$ + $(y - 2)^{2}$ = 25', '$(x - 3)^{2}$ + $(y + 2)^{2}$ = 25', '$(x - 3)^{2}$ + $(y - 2)^{2}$ = 25'], correctIndex: 2, explanation: 'Circle equation: $(x - h)^{2}$ + $(y - k)^{2}$ = $r^{2}$. With center (3, −2) and radius 5: $(x - 3)^{2}$ + $(y + 2)^{2}$ = 25.', partNumber: 4, partTitle: 'Conic Sections Basics' },
  { id: 'acg-ent-4b', question: 'The parabola y = $-2x^{2}$ + 3x + 1 opens in which direction?', options: ['Up', 'Down', 'Left', 'Right'], correctIndex: 1, explanation: 'For y = $ax^{2}$ + bx + c, the parabola opens up if a > 0 and down if a < 0. Here a = −2 < 0, so it opens down.', partNumber: 4, partTitle: 'Conic Sections Basics' },
  { id: 'acg-ent-5a', question: 'Reflecting the point (3, −5) over the x-axis gives which point?', options: ['(−3, −5)', '(3, 5)', '(−3, 5)', '(5, −3)'], correctIndex: 1, explanation: 'Reflection over the x-axis: (x, y) → (x, −y). So (3, −5) → (3, 5).', partNumber: 5, partTitle: 'Transformations' },
  { id: 'acg-ent-5b', question: 'To translate a graph 3 units right and 2 units up, you replace x with (x − 3) and y with:', options: ['y + 2', 'y − 2', 'y − 3', 'y + 3'], correctIndex: 1, explanation: 'Translation h units right and k units up: replace x with (x − h) and y with (y − k). So y is replaced with (y − 2).', partNumber: 5, partTitle: 'Transformations' },
  { id: 'acg-ent-6a', question: 'What is the distance between (1, 2) and (4, 6)?', options: ['3', '4', '5', '7'], correctIndex: 2, explanation: 'd = √[$(4-1)^{2}$ + $(6-2)^{2}$] = √[9 + 16] = $\\sqrt{25}$ = 5.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'acg-ent-6b', question: 'Lines with slopes 2/3 and −3/2 are:', options: ['Parallel', 'Perpendicular', 'The same line', 'Neither parallel nor perpendicular'], correctIndex: 1, explanation: '(2/3) × (−3/2) = −1, so the lines are perpendicular.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'acg-ent-7a', question: 'What is the point-slope form of a line?', options: ['y = mx + b', 'Ax + By = C', 'y − $y_{1}$ = $m(x - x_{1})$', '$y_{2}$ − $y_{1}$ = $x_{2}$ − $x_{1}$'], correctIndex: 2, explanation: 'Point-slope form is y − $y_{1}$ = $m(x - x_{1})$, where m is the slope and ($x_{1}$, $y_{1}$) is a point on the line.', partNumber: 7, partTitle: 'Review & Applications' },
  { id: 'acg-ent-7b', question: 'Which formulas are essential for ACT coordinate geometry?', options: ['Only slope', 'Slope and midpoint only', 'Slope, distance, midpoint, and circle equations', 'Only the quadratic formula'], correctIndex: 2, explanation: 'For ACT coordinate geometry, you should know slope, distance, midpoint, and circle equations.', partNumber: 7, partTitle: 'Review & Applications' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Graphing Lines' },
    { partNumber: 2, partTitle: 'Distance & Midpoint' },
    { partNumber: 3, partTitle: 'Slope Applications' },
    { partNumber: 4, partTitle: 'Conic Sections Basics' },
    { partNumber: 5, partTitle: 'Transformations' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Review & Applications' },
  ]
}
