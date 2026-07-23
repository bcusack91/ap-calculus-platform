/**
 * SAT competitive questions — Math / Advanced Math domain.
 * Brings all 3 official College Board Advanced Math skills to full match depth.
 */
import type { SatBankQuestion } from './sat-question-types'

const S = {
  eq: 'sat-skill-equivalent-expressions',
  nleq: 'sat-skill-nonlinear-equations',
  nlfn: 'sat-skill-nonlinear-functions',
}

export const satMathAdvancedQuestions: SatBankQuestion[] = [
  // ===== Equivalent expressions (16) =====
  { skillSlug: S.eq, difficulty: 'easy', question: 'Which is equivalent to $(x + 3)(x - 3)$?', options: ['$x^2 - 9$', '$x^2 + 9$', '$x^2 - 6x + 9$', '$x^2 - 3x$'], correctAnswer: 0, explanation: 'Difference of squares: $(a+b)(a-b) = a^2 - b^2$.' },
  { skillSlug: S.eq, difficulty: 'easy', question: 'Expand $(x + 4)^2$.', options: ['$x^2 + 8x + 16$', '$x^2 + 16$', '$x^2 + 4x + 16$', '$x^2 + 8x + 8$'], correctAnswer: 0, explanation: '$(a+b)^2 = a^2 + 2ab + b^2$.' },
  { skillSlug: S.eq, difficulty: 'easy', question: 'Simplify $\\frac{x^5}{x^2}$.', options: ['$x^3$', '$x^7$', '$x^{2.5}$', '$x^{10}$'], correctAnswer: 0, explanation: 'Subtract exponents when dividing like bases.' },
  { skillSlug: S.eq, difficulty: 'medium', question: 'Factor $x^2 - 5x + 6$.', options: ['$(x - 2)(x - 3)$', '$(x + 2)(x + 3)$', '$(x - 1)(x - 6)$', '$(x - 6)(x + 1)$'], correctAnswer: 0, explanation: 'Two numbers multiplying to $6$ and summing to $-5$ are $-2$ and $-3$.' },
  { skillSlug: S.eq, difficulty: 'medium', question: 'Factor $2x^2 + 7x + 3$.', options: ['$(2x + 1)(x + 3)$', '$(2x + 3)(x + 1)$', '$(x + 7)(2x + 3)$', '$(2x - 1)(x - 3)$'], correctAnswer: 0, explanation: 'Expanding gives $2x^2 + 6x + x + 3 = 2x^2 + 7x + 3$. ✓' },
  { skillSlug: S.eq, difficulty: 'medium', question: 'Simplify $(3x^2)(4x^5)$.', options: ['$12x^7$', '$12x^{10}$', '$7x^7$', '$12x^3$'], correctAnswer: 0, explanation: 'Multiply coefficients, add exponents.' },
  { skillSlug: S.eq, difficulty: 'medium', question: 'Simplify $\\frac{x^2 - 16}{x - 4}$ for $x \\neq 4$.', options: ['$x + 4$', '$x - 4$', '$x^2 - 4$', '$4$'], correctAnswer: 0, explanation: 'Factor the numerator as $(x-4)(x+4)$ and cancel.' },
  { skillSlug: S.eq, difficulty: 'medium', question: 'Which is equivalent to $x^{-3}$?', options: ['$\\frac{1}{x^3}$', '$-x^3$', '$\\frac{1}{x^{-3}}$', '$-3x$'], correctAnswer: 0, explanation: 'A negative exponent means the reciprocal.' },
  { skillSlug: S.eq, difficulty: 'medium', question: 'Which is equivalent to $x^{1/2}$?', options: ['$\\sqrt{x}$', '$\\frac{x}{2}$', '$x^2$', '$\\frac{1}{x^2}$'], correctAnswer: 0, explanation: 'A fractional exponent denotes a root.' },
  { skillSlug: S.eq, difficulty: 'hard', question: 'Simplify $(2x + 3)(x^2 - x + 1)$.', options: ['$2x^3 + x^2 - x + 3$', '$2x^3 - 2x^2 + 2x$', '$2x^3 + 3x^2 + 3$', '$2x^3 + x^2 + x + 3$'], correctAnswer: 0, explanation: '$2x^3 - 2x^2 + 2x + 3x^2 - 3x + 3 = 2x^3 + x^2 - x + 3$.' },
  { skillSlug: S.eq, difficulty: 'hard', question: 'Simplify $\\frac{6x^3 - 9x^2}{3x^2}$ for $x \\neq 0$.', options: ['$2x - 3$', '$2x^2 - 3$', '$2x - 3x$', '$6x - 9$'], correctAnswer: 0, explanation: 'Divide each term: $\\frac{6x^3}{3x^2} - \\frac{9x^2}{3x^2} = 2x - 3$.' },
  { skillSlug: S.eq, difficulty: 'hard', question: 'Which is equivalent to $\\frac{1}{x} + \\frac{1}{y}$?', options: ['$\\frac{x + y}{xy}$', '$\\frac{1}{x + y}$', '$\\frac{2}{xy}$', '$\\frac{xy}{x + y}$'], correctAnswer: 0, explanation: 'Use the common denominator $xy$.' },
  { skillSlug: S.eq, difficulty: 'hard', question: 'Factor completely: $x^3 - 4x$.', options: ['$x(x - 2)(x + 2)$', '$x(x^2 - 4x)$', '$(x - 2)(x + 2)$', '$x^2(x - 4)$'], correctAnswer: 0, explanation: 'Factor out $x$, then apply the difference of squares.' },
  { skillSlug: S.eq, difficulty: 'hard', question: 'If $a^2 - b^2 = 36$ and $a - b = 4$, what is $a + b$?', options: ['$9$', '$4$', '$32$', '$6$'], correctAnswer: 0, explanation: '$a^2 - b^2 = (a-b)(a+b)$, so $4(a+b) = 36$ and $a + b = 9$.' },
  { skillSlug: S.eq, difficulty: 'medium', question: 'Simplify $\\sqrt{50}$.', options: ['$5\\sqrt{2}$', '$25\\sqrt{2}$', '$2\\sqrt{5}$', '$10\\sqrt{5}$'], correctAnswer: 0, explanation: '$\\sqrt{25 \\cdot 2} = 5\\sqrt{2}$.' },
  { skillSlug: S.eq, difficulty: 'hard', question: 'Which is equivalent to $(x^2)^3 \\cdot x^{-4}$?', options: ['$x^2$', '$x^{10}$', '$x^{-24}$', '$x^5$'], correctAnswer: 0, explanation: '$(x^2)^3 = x^6$, and $x^6 \\cdot x^{-4} = x^2$.' },

  // ===== Nonlinear equations & systems (6) =====
  { skillSlug: S.nleq, difficulty: 'medium', question: 'Solve $x^2 = 49$.', options: ['$x = 7$ or $x = -7$', '$x = 7$', '$x = 24.5$', '$x = \\pm\\sqrt{7}$'], correctAnswer: 0, explanation: 'A square root yields both a positive and a negative solution.' },
  { skillSlug: S.nleq, difficulty: 'medium', question: 'Solve $x^2 - 7x + 12 = 0$.', options: ['$x = 3$ or $x = 4$', '$x = -3$ or $x = -4$', '$x = 2$ or $x = 6$', '$x = 12$'], correctAnswer: 0, explanation: 'Factor: $(x-3)(x-4) = 0$.' },
  { skillSlug: S.nleq, difficulty: 'hard', question: 'What is the discriminant of $2x^2 + 3x - 5 = 0$?', options: ['$49$', '$-31$', '$9$', '$29$'], correctAnswer: 0, explanation: '$b^2 - 4ac = 9 - 4(2)(-5) = 9 + 40 = 49$.' },
  { skillSlug: S.nleq, difficulty: 'hard', question: 'A quadratic has discriminant $-8$. How many real solutions does it have?', options: ['None', 'One', 'Two', 'Infinitely many'], correctAnswer: 0, explanation: 'A negative discriminant means the solutions are complex.' },
  { skillSlug: S.nleq, difficulty: 'hard', question: 'Solve the system $y = x^2$ and $y = 4x - 3$.', options: ['$x = 1$ or $x = 3$', '$x = 2$ only', '$x = -1$ or $x = 3$', 'No solution'], correctAnswer: 0, explanation: '$x^2 = 4x - 3$ gives $x^2 - 4x + 3 = 0$, so $(x-1)(x-3) = 0$.' },
  { skillSlug: S.nleq, difficulty: 'hard', question: 'Solve $\\sqrt{x + 5} = 4$.', options: ['$x = 11$', '$x = 16$', '$x = 21$', '$x = -1$'], correctAnswer: 0, explanation: 'Square both sides: $x + 5 = 16$, so $x = 11$. Checking confirms it is valid.' },

  // ===== Nonlinear functions (10) =====
  { skillSlug: S.nlfn, difficulty: 'medium', question: 'What is the vertex of $y = (x - 3)^2 + 5$?', options: ['$(3, 5)$', '$(-3, 5)$', '$(3, -5)$', '$(5, 3)$'], correctAnswer: 0, explanation: 'In vertex form $y = a(x-h)^2 + k$, the vertex is $(h, k)$.' },
  { skillSlug: S.nlfn, difficulty: 'medium', question: 'What is the axis of symmetry of $y = x^2 - 6x + 8$?', options: ['$x = 3$', '$x = -3$', '$x = 6$', '$x = 8$'], correctAnswer: 0, explanation: '$x = -\\frac{b}{2a} = \\frac{6}{2} = 3$.' },
  { skillSlug: S.nlfn, difficulty: 'medium', question: 'The parabola $y = -2x^2 + 4$ opens:', options: ['Downward, since $a < 0$', 'Upward', 'Leftward', 'Rightward'], correctAnswer: 0, explanation: 'A negative leading coefficient opens the parabola downward.' },
  { skillSlug: S.nlfn, difficulty: 'medium', question: 'What are the $x$-intercepts of $y = (x + 1)(x - 5)$?', options: ['$x = -1$ and $x = 5$', '$x = 1$ and $x = -5$', '$x = 5$ only', '$x = -5$ only'], correctAnswer: 0, explanation: 'Set each factor to zero.' },
  { skillSlug: S.nlfn, difficulty: 'hard', question: 'A quadratic has $x$-intercepts $2$ and $8$. What is its axis of symmetry?', options: ['$x = 5$', '$x = 3$', '$x = 10$', '$x = 6$'], correctAnswer: 0, explanation: 'The axis lies midway between the roots: $\\frac{2 + 8}{2} = 5$.' },
  { skillSlug: S.nlfn, difficulty: 'hard', question: 'For $f(x) = 3(2)^x$, what is $f(0)$?', options: ['$3$', '$6$', '$1$', '$0$'], correctAnswer: 0, explanation: 'Any nonzero base to the zero power is $1$, so $f(0) = 3$.' },
  { skillSlug: S.nlfn, difficulty: 'hard', question: 'The function $y = 500(0.85)^t$ models a quantity that is:', options: ['Decaying by 15% per period', 'Growing by 85%', 'Decaying by 85%', 'Growing by 15%'], correctAnswer: 0, explanation: 'A base of $0.85$ retains 85% each period, a 15% loss.' },
  { skillSlug: S.nlfn, difficulty: 'medium', question: 'A quantity grows by 6% per year from an initial value of $200$. Which models it?', options: ['$y = 200(1.06)^t$', '$y = 200(0.06)^t$', '$y = 200 + 6t$', '$y = 200(6)^t$'], correctAnswer: 0, explanation: 'The growth factor is $1 + r$.' },
  { skillSlug: S.nlfn, difficulty: 'hard', question: 'What is the minimum value of $y = x^2 - 4x + 7$?', options: ['$3$', '$7$', '$2$', '$-3$'], correctAnswer: 0, explanation: 'Vertex at $x = 2$; $y = 4 - 8 + 7 = 3$.' },
  { skillSlug: S.nlfn, difficulty: 'hard', question: 'Which function has a horizontal asymptote at $y = 0$?', options: ['$y = 4(0.5)^x$', '$y = x^2$', '$y = 2x + 1$', '$y = \\sqrt{x}$'], correctAnswer: 0, explanation: 'Decaying exponentials approach zero without reaching it.' },
]
