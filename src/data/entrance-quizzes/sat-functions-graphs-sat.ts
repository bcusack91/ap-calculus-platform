/**
 * Entrance Quiz — Functions & Graphs (SAT)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  { id: 'sfg-ent-1a', question: 'If f(x) = $3x^{2}$ − 2x + 1, what is f(2)?', options: ['7', '9', '11', '13'], correctIndex: 1, explanation: 'f(2) = 3(4) − 2(2) + 1 = 12 − 4 + 1 = 9.', partNumber: 1, partTitle: 'Function Notation' },
  { id: 'sfg-ent-1b', question: 'Which notation correctly represents "the output of function f for input x"?', options: ['$f \\times x$', 'f(x)', 'f + x', 'x(f)'], correctIndex: 1, explanation: 'f(x) is function notation and means "the value of function f at input x". It does NOT mean multiplication.', partNumber: 1, partTitle: 'Function Notation' },
  { id: 'sfg-ent-2a', question: 'What is the domain of f(x) = $\\sqrt{x - 4}$?', options: ['x > 4', '$x \\ge 4$', '$x \\le 4$', 'all real numbers'], correctIndex: 1, explanation: 'The expression under a square root must be $\\ge 0$: $x - 4 \\ge 0$ → $x \\ge 4$.', partNumber: 2, partTitle: 'Domain & Range' },
  { id: 'sfg-ent-2b', question: 'What is the range of f(x) = $x^{2}$ + 3?', options: ['$y \\ge 0$', '$y \\ge 3$', 'all real numbers', '$y \\le 3$'], correctIndex: 1, explanation: '$x^{2}$ $\\ge 0$ for all real x, so $x^{2}$ + 3 $\\ge 3$. The range is $y \\ge 3$.', partNumber: 2, partTitle: 'Domain & Range' },
  { id: 'sfg-ent-3a', question: 'Given g(x) = 2x − 5, find g(−3).', options: ['−11', '−1', '1', '11'], correctIndex: 0, explanation: 'g(−3) = 2(−3) − 5 = −6 − 5 = −11.', partNumber: 3, partTitle: 'Evaluating Functions' },
  { id: 'sfg-ent-3b', question: 'If h(t) = $t^{2}$ − 4 and h(a) = 21, what is a positive value of a?', options: ['3', '4', '5', '6'], correctIndex: 2, explanation: '$a^{2}$ − 4 = 21 → $a^{2}$ = 25 → a = $\\pm 5$. The positive value is 5.', partNumber: 3, partTitle: 'Evaluating Functions' },
  { id: 'sfg-ent-4a', question: 'The graph of y = f(x) is shifted 3 units to the right. What is the new equation?', options: ['y = f(x + 3)', 'y = f(x − 3)', 'y = f(x) + 3', 'y = f(x) − 3'], correctIndex: 1, explanation: 'A shift right by h units replaces x with (x − h). Shifting 3 units right gives y = f(x − 3).', partNumber: 4, partTitle: 'Transformations' },
  { id: 'sfg-ent-4b', question: 'Compared to y = $x^{2}$, the graph of y = $-x^{2}$ is:', options: ['Shifted up by 1', 'Reflected over the x-axis', 'Reflected over the y-axis', 'Stretched horizontally'], correctIndex: 1, explanation: 'Multiplying by −1 reflects the graph over the x-axis, turning the parabola upside down.', partNumber: 4, partTitle: 'Transformations' },
  { id: 'sfg-ent-5a', question: 'If f(x) = 2x + 1 and g(x) = $x^{2}$, what is f(g(3))?', options: ['13', '19', '49', '7'], correctIndex: 1, explanation: 'First find g(3) = 9. Then f(9) = 2(9) + 1 = 19.', partNumber: 5, partTitle: 'Composite Functions' },
  { id: 'sfg-ent-5b', question: 'If f(x) = x + 4 and g(x) = 3x, what is g(f(x))?', options: ['3x + 4', '3x + 12', 'x + 12', '4x + 4'], correctIndex: 1, explanation: 'g(f(x)) = g(x + 4) = 3(x + 4) = 3x + 12.', partNumber: 5, partTitle: 'Composite Functions' },
  { id: 'sfg-ent-6a', question: 'A function is defined by the table below. What is f(3) − f(1)?\n\n| x | f(x) |\n| --- | --- |\n| 1 | 5 |\n| 2 | 3 |\n| 3 | 1 |\n| 4 | −1 |', options: ['−6', '−4', '4', '6'], correctIndex: 1, explanation: 'f(3) = 1 and f(1) = 5. So f(3) − f(1) = 1 − 5 = −4.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'sfg-ent-6b', question: 'If f(x) = $x^{2}$ + 1, for what value of x does f(x) = f(−x)?', options: ['Only x = 0', 'Only x = 1', 'All real values of x', 'No real values of x'], correctIndex: 2, explanation: 'f(x) = $x^{2}$ + 1 and f(−x) = $(-x)^{2}$ + 1 = $x^{2}$ + 1. They are equal for ALL real x. The function is even.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'sfg-ent-7a', question: 'Which set of ordered pairs does NOT represent a function?', options: ['{(1,2), (2,4), (3,6)}', '{(1,3), (2,3), (3,3)}', '{(1,2), (1,4), (2,3)}', '{(0,0), (1,1), (2,4)}'], correctIndex: 2, explanation: 'A function cannot have two different outputs for the same input. (1,2) and (1,4) both have input 1, so this is not a function.', partNumber: 7, partTitle: 'Review & Applications' },
  { id: 'sfg-ent-7b', question: 'The function f(x) = |x| has what kind of symmetry?', options: ['Rotational symmetry about the origin', 'Symmetry about the y-axis', 'Symmetry about the x-axis', 'No symmetry'], correctIndex: 1, explanation: '|x| = |−x|, so the graph is symmetric about the y-axis (it is an even function).', partNumber: 7, partTitle: 'Review & Applications' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Function Notation' },
    { partNumber: 2, partTitle: 'Domain & Range' },
    { partNumber: 3, partTitle: 'Evaluating Functions' },
    { partNumber: 4, partTitle: 'Transformations' },
    { partNumber: 5, partTitle: 'Composite Functions' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Review & Applications' },
  ]
}
