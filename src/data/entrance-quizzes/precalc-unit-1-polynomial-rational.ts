/**
 * Entrance Quiz — AP Precalculus Unit 1: Polynomial & Rational Functions
 * 14 questions · 7 parts (2 per part).
 *
 * Used as the entrance quiz for every Unit 1 leaf topic.
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Polynomial Functions & End Behavior
  { id: 'pcu1-1a', question: 'What is the end behavior of $f(x) = -2x^4 + x^3 - 5$ as $x \\to \\pm\\infty$?', options: ['$f(x)\\to+\\infty$ both ends', '$f(x)\\to-\\infty$ both ends', 'Up on left, down on right', 'Down on left, up on right'], correctIndex: 1, explanation: 'Even degree, negative leading coefficient ⇒ both ends point down.', partNumber: 1, partTitle: 'Polynomial Functions & End Behavior' },
  { id: 'pcu1-1b', question: 'A degree-5 polynomial with real coefficients has at most how many real zeros?', options: ['3', '4', '5', '6'], correctIndex: 2, explanation: 'A polynomial of degree $n$ has at most $n$ real zeros.', partNumber: 1, partTitle: 'Polynomial Functions & End Behavior' },

  // Part 2: Zeros & Multiplicity
  { id: 'pcu1-2a', question: 'For $f(x) = (x-3)^2(x+1)$, what happens at $x=3$?', options: ['Crosses the x-axis transversally', 'Touches and turns (bounce)', 'Has a vertical asymptote', 'Is undefined'], correctIndex: 1, explanation: 'Even multiplicity ⇒ bounce off the x-axis.', partNumber: 2, partTitle: 'Zeros & Multiplicity' },
  { id: 'pcu1-2b', question: 'Solve $x^3 - 2x^2 - 5x + 6 = 0$ given $x=1$ is a zero.', options: ['$x = 1, 2, -3$', '$x = 1, -2, 3$', '$x = 1, 3, -2$', '$x = 1, 6, -1$'], correctIndex: 2, explanation: 'Factor out $(x-1)$ to get $x^2 - x - 6 = (x-3)(x+2)$. Zeros: $1, 3, -2$.', partNumber: 2, partTitle: 'Zeros & Multiplicity' },

  // Part 3: Rational Functions — Asymptotes
  { id: 'pcu1-3a', question: 'Find the vertical asymptotes of $f(x) = \\dfrac{x+2}{x^2-9}$.', options: ['$x = -2$', '$x = \\pm 3$', '$x = 3$ only', 'No vertical asymptote'], correctIndex: 1, explanation: '$x^2 - 9 = 0 \\Rightarrow x = \\pm 3$. Numerator nonzero at both.', partNumber: 3, partTitle: 'Rational Functions — Asymptotes' },
  { id: 'pcu1-3b', question: 'The horizontal asymptote of $f(x)=\\dfrac{4x^3+1}{2x^3-x}$ is:', options: ['$y=0$', '$y=2$', '$y=4$', 'No HA'], correctIndex: 1, explanation: 'Same degree ⇒ HA at ratio of leading coefficients $= 4/2 = 2$.', partNumber: 3, partTitle: 'Rational Functions — Asymptotes' },

  // Part 4: Holes & Slant Asymptotes
  { id: 'pcu1-4a', question: '$f(x) = \\dfrac{(x-2)(x+1)}{(x-2)(x-5)}$ has what feature at $x=2$?', options: ['Vertical asymptote', 'Hole (removable discontinuity)', 'x-intercept', 'Horizontal asymptote'], correctIndex: 1, explanation: 'A common factor cancels ⇒ removable discontinuity (hole).', partNumber: 4, partTitle: 'Holes & Slant Asymptotes' },
  { id: 'pcu1-4b', question: 'Which rational function has a slant (oblique) asymptote?', options: ['$\\dfrac{1}{x}$', '$\\dfrac{x^2+1}{x-2}$', '$\\dfrac{x}{x^2+3}$', '$\\dfrac{x+1}{x-1}$'], correctIndex: 1, explanation: 'Numerator degree exactly one greater than denominator ⇒ slant asymptote.', partNumber: 4, partTitle: 'Holes & Slant Asymptotes' },

  // Part 5: Composition & Inverses
  { id: 'pcu1-5a', question: 'If $f(x)=x^2+1$ and $g(x)=2x-3$, find $(f\\circ g)(2)$.', options: ['$0$', '$1$', '$2$', '$5$'], correctIndex: 2, explanation: '$g(2) = 1$, $f(1) = 2$.', partNumber: 5, partTitle: 'Composition & Inverses' },
  { id: 'pcu1-5b', question: 'Find $f^{-1}(x)$ for $f(x) = \\dfrac{x+5}{2}$.', options: ['$f^{-1}(x) = 2x - 5$', '$f^{-1}(x) = 2x + 5$', '$f^{-1}(x) = \\dfrac{x-5}{2}$', '$f^{-1}(x) = \\dfrac{2}{x+5}$'], correctIndex: 0, explanation: 'Swap and solve: $x = (y+5)/2 \\Rightarrow y = 2x-5$.', partNumber: 5, partTitle: 'Composition & Inverses' },

  // Part 6: Transformations
  { id: 'pcu1-6a', question: 'How does $g(x) = -f(x-2) + 4$ relate to $f(x)$?', options: ['Shift right 2, reflect over x-axis, shift up 4', 'Shift left 2, reflect over y-axis, shift down 4', 'Shift right 2, reflect over y-axis, shift down 4', 'Shift left 2, reflect over x-axis, shift up 4'], correctIndex: 0, explanation: '$x-2$: right 2. $-f$: reflect over x-axis. $+4$: up 4.', partNumber: 6, partTitle: 'Transformations' },
  { id: 'pcu1-6b', question: 'The graph of $g(x) = f(2x)$ relative to $f(x)$ is:', options: ['Horizontal stretch by 2', 'Horizontal compression by 1/2', 'Vertical stretch by 2', 'Shift right 2'], correctIndex: 1, explanation: 'Replacing $x$ by $bx$ ($b>1$) compresses horizontally by $1/b$.', partNumber: 6, partTitle: 'Transformations' },

  // Part 7: Sequences, Series & Systems
  { id: 'pcu1-7a', question: 'For the arithmetic sequence $a_n = 5 + 4(n-1)$, what is $a_{10}$?', options: ['$36$', '$41$', '$45$', '$50$'], correctIndex: 1, explanation: '$a_{10} = 5 + 4(9) = 41$.', partNumber: 7, partTitle: 'Sequences, Series & Systems' },
  { id: 'pcu1-7b', question: 'Solve the system $y = x^2 + 1$ and $y = 2x + 4$.', options: ['$(3, 10)$ and $(-1, 2)$', '$(2, 5)$ only', '$(0, 4)$ and $(4, 12)$', 'No solution'], correctIndex: 0, explanation: '$x^2 + 1 = 2x + 4 \\Rightarrow x^2 - 2x - 3 = 0 \\Rightarrow (x-3)(x+1) = 0$.', partNumber: 7, partTitle: 'Sequences, Series & Systems' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Polynomial Functions & End Behavior' },
    { partNumber: 2, partTitle: 'Zeros & Multiplicity' },
    { partNumber: 3, partTitle: 'Rational Functions — Asymptotes' },
    { partNumber: 4, partTitle: 'Holes & Slant Asymptotes' },
    { partNumber: 5, partTitle: 'Composition & Inverses' },
    { partNumber: 6, partTitle: 'Transformations' },
    { partNumber: 7, partTitle: 'Sequences, Series & Systems' },
  ]
}
