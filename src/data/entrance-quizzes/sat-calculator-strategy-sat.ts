/**
 * Entrance Quiz — SAT Calculator Strategies (SAT)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  { id: 'scals-ent-1a', question: 'Which of these tasks is the Desmos graphing calculator most likely to speed up?', options: ['Solving $4(x - 2) + 9 = 3x + 15$', 'Finding $25\\%$ of $640$', 'Solving $1.3x^2 - 2.7x - 4.1 = 0$', 'Factoring $x^2 - 10x + 25$'], correctIndex: 2, explanation: 'The quadratic with decimal coefficients has irrational solutions, so graphing it and clicking its zeros beats the quadratic formula. The others only look busy: the linear equation simplifies to $x = 14$, $25\\%$ of 640 is 160, and $x^2 - 10x + 25 = (x - 5)^2$, all faster by hand than typing into Desmos.', partNumber: 1, partTitle: 'Knowing When the Calculator Helps' },
  { id: 'scals-ent-1b', question: 'If $5x + 3 = 18$, what is the value of $10x + 6$?', options: ['15', '30', '33', '36'], correctIndex: 3, explanation: 'No calculator needed: $10x + 6 = 2(5x + 3) = 2(18) = 36$. Solving for $x = 3$ first also works but takes longer. (15 is the value of $5x$; 33 doubles only $5x$.)', partNumber: 1, partTitle: 'Knowing When the Calculator Helps' },
  { id: 'scals-ent-2a', question: 'You graph $y = x^2 - 4x - 5$ in Desmos and click the points where the graph crosses the $x$-axis. Which points are marked?', options: ['$(-1, 0)$ and $(5, 0)$', '$(1, 0)$ and $(-5, 0)$', '$(0, -5)$ and $(2, -9)$', '$(-5, 0)$ and $(-1, 0)$'], correctIndex: 0, explanation: 'The $x$-intercepts are the zeros: $x^2 - 4x - 5 = (x - 5)(x + 1)$, so $x = 5$ and $x = -1$. $(0, -5)$ is the $y$-intercept and $(2, -9)$ is the vertex.', partNumber: 2, partTitle: 'Essential Desmos Skills' },
  { id: 'scals-ent-2b', question: 'You graph $y = -x^2 + 6x - 4$ in Desmos and click its highest point. What are the coordinates of that point?', options: ['$(3, 5)$', '$(-3, 5)$', '$(3, -4)$', '$(6, -4)$'], correctIndex: 0, explanation: 'The highest point is the vertex. Its $x$-coordinate is $-\\dfrac{6}{2(-1)} = 3$, and $y = -9 + 18 - 4 = 5$. ($(3, -4)$ reuses the constant term as the $y$-value.)', partNumber: 2, partTitle: 'Essential Desmos Skills' },
  { id: 'scals-ent-3a', question: 'To solve $|2x - 6| = 4$, you graph $y = |2x - 6|$ and $y = 4$ in Desmos. At which $x$-values do the two graphs intersect?', options: ['$x = 5$ only', '$x = -1$ and $x = 5$', '$x = 1$ and $x = 5$', '$x = 2$ and $x = 5$'], correctIndex: 2, explanation: 'The horizontal line $y = 4$ crosses both arms of the V: $2x - 6 = 4$ gives $x = 5$, and $2x - 6 = -4$ gives $x = 1$. Each intersection is a solution of the equation; stopping at $x = 5$ misses the second arm.', partNumber: 3, partTitle: 'Graphical Solutions to Systems' },
  { id: 'scals-ent-3b', question: 'How many solutions does the system $y = 2x + 3$ and $4x - 2y = 6$ have?', options: ['No solution', 'Exactly one solution', 'Exactly two', 'Infinitely many'], correctIndex: 0, explanation: 'Solve the second equation for $y$: $y = 2x - 3$. Both lines have slope 2 but different $y$-intercepts, so they are parallel and never meet: no solution. Desmos would show two parallel lines.', partNumber: 3, partTitle: 'Graphical Solutions to Systems' },
  { id: 'scals-ent-4a', question: 'How many integer values of $x$ satisfy both $x > -2$ and $3x - 1 \\leq 11$?', options: ['5', '6', '7', '8'], correctIndex: 1, explanation: '$3x - 1 \\leq 11$ gives $x \\leq 4$. Combined with $x > -2$: $-2 < x \\leq 4$, so the integers are $-1, 0, 1, 2, 3, 4$, which is 6 values. ($-2$ is excluded because the first inequality is strict.)', partNumber: 4, partTitle: 'Shading, Domains, and Constraints' },
  { id: 'scals-ent-4b', question: 'You enter $y \\geq x + 1$ and $y < -2x + 8$ in Desmos. Which point lies in the region where the two shadings overlap?', options: ['$(1, 3)$', '$(3, 2)$', '$(0, 0)$', '$(2, 4)$'], correctIndex: 0, explanation: 'Test each point in both: $(1, 3)$ gives $3 \\geq 2$ and $3 < 6$, both true. $(3, 2)$ fails $2 \\geq 4$; $(0, 0)$ fails $0 \\geq 1$; $(2, 4)$ lies on the dashed line $y = -2x + 8$, and $4 < 4$ is false.', partNumber: 4, partTitle: 'Shading, Domains, and Constraints' },
  { id: 'scals-ent-5a', question: 'A Desmos linear regression on a data table reports $m = 2.4$ and $b = 0.4$. What does the model predict for $x = 10$?', options: ['6.4', '24', '24.4', '28'], correctIndex: 2, explanation: 'The model is $y = 2.4x + 0.4$, so $y = 2.4(10) + 0.4 = 24.4$. (6.4 swaps the slope and intercept; 24 drops the intercept.)', partNumber: 5, partTitle: 'Tables, Regression, and Curve Fitting' },
  { id: 'scals-ent-5b', question: 'A data set increases by roughly the same percent from each $x$-value to the next. Which Desmos entry fits the best model to the table?', options: ['$y_1 \\sim mx_1 + b$', '$y_1 \\sim ax_1^2 + bx_1 + c$', '$y_1 \\sim ab^{x_1}$', '$y_1 = ab^{x_1}$'], correctIndex: 2, explanation: 'Constant percent change is exponential, and the tilde $\\sim$ tells Desmos to run a regression on the table columns. With an equals sign, Desmos tries to graph an equation with sliders instead of fitting the data.', partNumber: 5, partTitle: 'Tables, Regression, and Curve Fitting' },
  { id: 'scals-ent-6a', question: 'For $f(x) = x^3 - 2x^2 + 3$, which of the following values of $x$ gives $f(x) = 12$?', options: ['$-1$', '$1$', '$2$', '$3$'], correctIndex: 3, explanation: 'Backsolve by testing the choices (or read them from a Desmos table): $f(-1) = 0$, $f(1) = 2$, $f(2) = 3$, and $f(3) = 27 - 18 + 3 = 12$.', partNumber: 6, partTitle: 'Power Moves for the SAT' },
  { id: 'scals-ent-6b', question: 'Which expression is equivalent to $(x + 3)(x - 2) + 5$?', options: ['$x^2 + x - 1$', '$x^2 + x + 11$', '$x^2 - x - 1$', '$x^2 + 5x - 1$'], correctIndex: 0, explanation: 'Expand: $x^2 + x - 6 + 5 = x^2 + x - 1$. In Desmos, an equivalent expression graphs exactly on top of the original. ($x^2 + x + 11$ adds 6 instead of $-6$.)', partNumber: 6, partTitle: 'Power Moves for the SAT' },
  { id: 'scals-ent-7a', question: 'Desmos shows that the graph of $y = 3x^2 + 7x - 6$ crosses the $x$-axis at $x \\approx 0.667$ and at one other point. What are the exact solutions of $3x^2 + 7x - 6 = 0$?', options: ['$x = \\frac{2}{3}$ and $x = -3$', '$x = \\frac{2}{3}$ and $x = 3$', '$x = -\\frac{2}{3}$ and $x = 3$', '$x = \\frac{3}{2}$ and $x = -3$'], correctIndex: 0, explanation: 'Factor: $3x^2 + 7x - 6 = (3x - 2)(x + 3)$, so $x = \\frac{2}{3} \\approx 0.667$ and $x = -3$. Recognizing $0.667$ as $\\frac{2}{3}$ confirms the decimal Desmos reports.', partNumber: 7, partTitle: 'Putting It All Together' },
  { id: 'scals-ent-7b', question: 'The equation $2x^2 - 8x + c = 0$ has exactly one real solution. What is the value of $c$?', options: ['2', '4', '8', '16'], correctIndex: 2, explanation: 'One real solution means the discriminant is zero: $(-8)^2 - 4(2)(c) = 64 - 8c = 0$, so $c = 8$. Algebra is faster here than adjusting a Desmos slider until the parabola just touches the $x$-axis.', partNumber: 7, partTitle: 'Putting It All Together' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Knowing When the Calculator Helps' },
    { partNumber: 2, partTitle: 'Essential Desmos Skills' },
    { partNumber: 3, partTitle: 'Graphical Solutions to Systems' },
    { partNumber: 4, partTitle: 'Shading, Domains, and Constraints' },
    { partNumber: 5, partTitle: 'Tables, Regression, and Curve Fitting' },
    { partNumber: 6, partTitle: 'Power Moves for the SAT' },
    { partNumber: 7, partTitle: 'Putting It All Together' },
  ]
}
