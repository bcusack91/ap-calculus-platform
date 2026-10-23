import type { MCQItem } from '@/components/FullLengthPracticeExam'

/**
 * AP Precalculus practice exam, form 3: 42 MCQs (May 2027 Section I).
 *   Unit 1 Polynomial and Rational Functions 14 (Part A 10, Part B 4)
 *   Unit 2 Exponential and Logarithmic Functions 14 (Part A 9, Part B 5)
 *   Unit 3 Trigonometric and Polar Functions 14 (Part A 10, Part B 4)
 * Part A (Q1–Q29): no calculator, 65 minutes. Part B (Q30–Q42): graphing calculator
 * required, 40 minutes; every Part B item is calculator-active. The runner splits the
 * parts by position, so Part B items must stay in positions 30–42.
 * Sets that share a stimulus are consecutive: Q2–Q3 (graph of f), Q7–Q9 (rational h),
 * Q12–Q13 (table of f), Q15–Q16 (tables of f and g), Q22–Q23 (sinusoid), Q30–Q31 (fuel
 * economy), Q34–Q35 (collectible).
 * `topic` is the CED unit slug the checker and the review page read; `lesson`/`ced` name the
 * canonical lesson slug (precalc-final PLAN.md) and CED topic each item drills.
 */

const GRAPH_F =
  'The function $f$ is defined on the interval $0 \\le x \\le 8$. The graph of $f$ is increasing and concave down on $0 < x < 3$, decreasing and concave down on $3 < x < 5$, and decreasing and concave up on $5 < x < 8$.'

const RATIONAL_H = 'The function $h$ is given by $h(x) = \\dfrac{3x^2 - 12}{x^2 - 2x - 8}$.'

const TABLE_F =
  'The table gives values of the exponential function $f$ at selected values of $x$.\n\n' +
  '| $x$ | 0 | 3 | 6 | 9 |\n|---|---|---|---|---|\n' +
  '| $f(x)$ | 2 | 6 | 18 | 54 |'

const TABLES_FG =
  'The tables give values of the functions $f$ and $g$ at selected values of $x$. Each function is defined only at the four values of $x$ shown.\n\n' +
  '| $x$ | 1 | 2 | 3 | 4 |\n|---|---|---|---|---|\n' +
  '| $f(x)$ | 4 | 1 | 3 | 2 |\n| $g(x)$ | 2 | 4 | 1 | 3 |'

const SINUSOID =
  'The sinusoidal function $w$ has period $2\\pi$. Its graph passes through the point $(0, 2)$ on its midline, falls to a minimum at $\\left(\\dfrac{\\pi}{2}, -1\\right)$, and returns to the midline at $(\\pi, 2)$.'

const FUEL =
  'The table gives the fuel economy $E$ of a car, in miles per gallon, when it is driven at a constant speed $s$, in miles per hour.\n\n' +
  '| $s$ (mph) | 30 | 40 | 50 | 60 | 70 |\n|---|---|---|---|---|---|\n' +
  '| $E$ (mpg) | 26.4 | 30.1 | 31.8 | 31.2 | 28.3 |'

const COLLECTIBLE =
  'The table gives the value $V$, in dollars, of a collectible toy $t$ years after it was first sold.\n\n' +
  '| $t$ (years) | 0 | 5 | 10 | 15 | 20 |\n|---|---|---|---|---|---|\n' +
  '| $V$ (dollars) | 120 | 165 | 240 | 330 | 470 |'

export const MCQS: MCQItem[] = [
  /* ============== PART A — NO CALCULATOR (Q1–Q29) ============== */

  /* ---- Unit 1 (10) ---- */
  {
    type: 'mcq',
    topic: 'polynomial-rational-functions',
    lesson: 'rates-of-change-precalc',
    ced: '1.3',
    question: 'The function $f$ is given by $f(x) = 3x^2 - 2x$. For any real number $a$, which of the following is the average rate of change of $f$ over the interval $[a, a + 1]$?',
    options: ['$6a + 1$', '$6a - 2$', '$3a + 1$', '$6a + 3$'],
    correctAnswer: 0,
    explanation:
      'The average rate of change is $\\dfrac{f(a + 1) - f(a)}{1}$. Since $f(a + 1) = 3(a^2 + 2a + 1) - 2a - 2 = 3a^2 + 4a + 1$, the difference is $(3a^2 + 4a + 1) - (3a^2 - 2a) = 6a + 1$. The result is linear in $a$: over equal-length intervals, the average rate of change of a quadratic function changes at a constant rate.',
    optionExplanations: [
      '$f(a + 1) - f(a) = (3a^2 + 4a + 1) - (3a^2 - 2a) = 6a + 1$, and the interval has length $1$.',
      'This is $f(a + 1) - f(a)$ with the $-2$ from $-2(a + 1)$ kept but the $+3$ from $3(a + 1)^2$ dropped: the constant terms are $3 - 2 = 1$, not $-2$.',
      'This takes the rate of change of $3x^2$ as $3a$ rather than $3(2a + 1)$. Expanding $3(a + 1)^2$ gives $3a^2 + 6a + 3$.',
      'This forgets the $-2x$ term: $3(a + 1)^2 - 3a^2 = 6a + 3$, but the $-2$ from $-2(a + 1) + 2a$ brings the constant down to $1$.',
    ],
  },
  {
    type: 'mcq',
    topic: 'polynomial-rational-functions',
    lesson: 'rates-of-change-precalc',
    ced: '1.2',
    stimulus: GRAPH_F,
    question: 'On which of the following intervals is the rate of change of $f$ negative and increasing?',
    options: ['$0 < x < 3$', '$3 < x < 5$', '$5 < x < 8$', '$3 < x < 8$'],
    correctAnswer: 2,
    explanation:
      'The rate of change of $f$ is negative where $f$ is decreasing, on $3 < x < 8$. It is increasing where the graph is concave up, on $5 < x < 8$. Both conditions hold on $5 < x < 8$: $f$ is still falling, but less and less steeply.',
    optionExplanations: [
      'On $0 < x < 3$ the function is increasing, so its rate of change is positive (and decreasing, since the graph is concave down).',
      'On $3 < x < 5$ the rate of change is negative, but the graph is concave down there, so the rate of change is decreasing (the graph gets steeper).',
      'Decreasing (negative rate of change) and concave up (increasing rate of change) together describe $5 < x < 8$.',
      'The rate of change is negative on all of $3 < x < 8$, but it is increasing only on the concave-up part, $5 < x < 8$.',
    ],
  },
  {
    type: 'mcq',
    topic: 'polynomial-rational-functions',
    lesson: 'rates-of-change-precalc',
    ced: '1.4',
    stimulus: GRAPH_F,
    question: 'Which of the following statements about the graph of $f$ at $x = 5$ is true?',
    options: [
      'The graph has a relative minimum at $x = 5$, because $f$ changes from decreasing to increasing there.',
      'The graph has a point of inflection at $x = 5$, because the rate of change of $f$ changes from decreasing to increasing there.',
      'The graph has a relative maximum at $x = 5$, because the rate of change of $f$ changes sign there.',
      'The graph has a point of inflection at $x = 5$, because $f$ changes from increasing to decreasing there.',
    ],
    correctAnswer: 1,
    explanation:
      'At $x = 5$ the concavity changes from down to up, which means the rate of change of $f$ stops decreasing and starts increasing; that is a point of inflection. The function itself is decreasing on both sides of $x = 5$, so there is no relative extremum there. The relative maximum is at $x = 3$, where $f$ changes from increasing to decreasing.',
    optionExplanations: [
      '$f$ is decreasing on both $3 < x < 5$ and $5 < x < 8$, so it does not change from decreasing to increasing at $x = 5$; there is no relative minimum.',
      'Concave down then concave up means the rate of change of $f$ is decreasing then increasing, so $x = 5$ is a point of inflection.',
      'A relative maximum needs $f$ to change from increasing to decreasing, which happens at $x = 3$, not at $x = 5$.',
      'The classification is right but the reason is wrong: $f$ does not change from increasing to decreasing at $x = 5$ (that is $x = 3$). An inflection point is where the concavity, that is the direction of change of the rate of change, switches.',
    ],
  },
  {
    type: 'mcq',
    topic: 'polynomial-rational-functions',
    lesson: 'function-modeling-precalc',
    ced: '1.14',
    question: 'A group charters a bus for a trip. The bus company charges a fixed fee of $500$ dollars plus $20$ dollars per passenger, and the total cost is shared equally by the $n$ passengers. The cost per passenger, in dollars, is modeled by $C(n) = \\dfrac{500 + 20n}{n}$ for $n \\ge 1$. Which of the following best describes the behavior of $C$ as $n$ increases without bound, and its meaning in context?',
    options: [
      '$\\displaystyle\\lim_{n \\to \\infty} C(n) = 0$; with enough passengers, the trip becomes free for each passenger.',
      '$\\displaystyle\\lim_{n \\to \\infty} C(n) = 500$; the cost per passenger approaches the fixed fee.',
      '$\\displaystyle\\lim_{n \\to \\infty} C(n) = 20$; the cost per passenger decreases toward, but stays above, $20$ dollars.',
      '$\\displaystyle\\lim_{n \\to \\infty} C(n) = \\infty$; the cost per passenger grows as more passengers join.',
    ],
    correctAnswer: 2,
    explanation:
      '$C(n) = \\dfrac{500}{n} + 20$. As $n$ grows, the shared fixed fee $\\frac{500}{n}$ shrinks toward $0$, so $C(n)$ decreases toward the horizontal asymptote $y = 20$, the per-passenger charge. The cost per passenger is always more than $20$ dollars because the fixed fee is always shared among finitely many people.',
    optionExplanations: [
      'Only the fixed-fee share $\\frac{500}{n}$ goes to $0$. Each passenger still pays the $20$-dollar per-passenger charge, so the cost cannot approach $0$.',
      'The fixed fee is divided among the passengers, so its share per passenger goes to $0$, not to $500$. The limit is the ratio of leading coefficients, $\\frac{20}{1} = 20$.',
      'Numerator and denominator have the same degree, so $C(n) \\to \\frac{20}{1} = 20$; since $\\frac{500}{n} > 0$, $C(n)$ stays above $20$ while decreasing toward it.',
      'The numerator and denominator have equal degree, so $C$ has a horizontal asymptote rather than growing without bound; in context, more passengers share the fixed fee, lowering the cost each.',
    ],
  },
  {
    type: 'mcq',
    topic: 'polynomial-rational-functions',
    lesson: 'fundamental-theorem-algebra',
    ced: '1.5',
    question: 'The polynomial function $p$ is given by $p(x) = (x^2 + 4)(x - 1)^2(x + 3)$. Which of the following is true about $p$?',
    options: [
      '$p$ has degree $5$, two distinct real zeros, and two non-real zeros.',
      '$p$ has degree $4$, three distinct real zeros, and two non-real zeros.',
      '$p$ has degree $5$, three distinct real zeros, and no non-real zeros.',
      '$p$ has degree $5$, two distinct real zeros, and no non-real zeros.',
    ],
    correctAnswer: 0,
    explanation:
      'The degree is $2 + 2 + 1 = 5$. The real zeros are $x = 1$ (multiplicity $2$) and $x = -3$, which are two distinct real zeros, and $x^2 + 4 = 0$ gives the non-real pair $\\pm 2i$. Counting multiplicity, $2 + 2 + 1 = 5$ zeros in all, as the degree requires.',
    optionExplanations: [
      'Degree $2 + 2 + 1 = 5$; real zeros $1$ (double) and $-3$; non-real zeros $\\pm 2i$ from $x^2 + 4 = 0$.',
      'The degree is $5$, not $4$, and the factor $(x - 1)^2$ contributes one distinct real zero (with multiplicity $2$), not two.',
      '$x^2 + 4$ has no real zeros, since $x^2 = -4$ has no real solutions; its zeros are $\\pm 2i$.',
      'The factor $x^2 + 4$ is never zero for real $x$, so it contributes two non-real zeros, $2i$ and $-2i$.',
    ],
  },
  {
    type: 'mcq',
    topic: 'polynomial-rational-functions',
    lesson: 'polynomial-division-remainder-theorem',
    ced: '1.11',
    question: 'The polynomial $p$ is given by $p(x) = x^3 + kx^2 - 5x - 6$, where $k$ is a constant. If $x - 2$ is a factor of $p(x)$, what is the value of $k$?',
    options: ['$-2$', '$\\dfrac{3}{2}$', '$2$', '$-\\dfrac{3}{2}$'],
    correctAnswer: 2,
    explanation:
      'If $x - 2$ is a factor, then $p(2) = 0$: $8 + 4k - 10 - 6 = 0$, so $4k = 8$ and $k = 2$. Check: $x^3 + 2x^2 - 5x - 6 = (x - 2)(x^2 + 4x + 3) = (x - 2)(x + 1)(x + 3)$.',
    optionExplanations: [
      'With $k = -2$, $p(2) = 8 - 8 - 10 - 6 = -16 \\ne 0$. This sign comes from solving $4k = -8$, that is, from $8 - 10 - 6 = -8$ moved to the wrong side.',
      'With $k = \\frac{3}{2}$, $p(2) = 8 + 6 - 10 - 6 = -2 \\ne 0$. This comes from the arithmetic slip $8 - 10 - 6 = -6$, giving $4k = 6$; the correct sum is $-8$, so $4k = 8$.',
      '$x - 2$ is a factor exactly when $p(2) = 0$: $8 + 4k - 16 = 0$ gives $k = 2$, and then $p(x) = (x - 2)(x + 1)(x + 3)$.',
      'This comes from testing $x = -2$ instead of $x = 2$ with a sign slip; the factor $x - 2$ corresponds to the zero $x = 2$, and $p(2) = 0$ gives $k = 2$.',
    ],
  },
  {
    type: 'mcq',
    topic: 'polynomial-rational-functions',
    lesson: 'rational-functions-precalc',
    ced: '1.10',
    stimulus: RATIONAL_H,
    question: 'The graph of $h$ has a hole. What are the coordinates of the hole?',
    options: ['$(-2, 2)$', '$(-2, 0)$', '$(2, 0)$', '$(4, 2)$'],
    correctAnswer: 0,
    explanation:
      'Factoring, $h(x) = \\dfrac{3(x - 2)(x + 2)}{(x - 4)(x + 2)}$. The common factor $x + 2$ makes a hole at $x = -2$. Its $y$-coordinate comes from the reduced form $\\dfrac{3(x - 2)}{x - 4}$ at $x = -2$: $\\dfrac{3(-4)}{-6} = 2$.',
    optionExplanations: [
      'The common factor $x + 2$ gives the hole at $x = -2$, and the reduced expression $\\frac{3(x - 2)}{x - 4}$ evaluates to $\\frac{-12}{-6} = 2$ there.',
      'The hole is at $x = -2$, but its height is the value of the reduced function there, $2$, not $0$. The numerator being zero at $x = -2$ is cancelled by the denominator being zero.',
      '$x = 2$ is a zero of $h$ (the graph crosses the $x$-axis), since $x - 2$ is a numerator factor that does not cancel.',
      '$x = 4$ makes the denominator zero with no matching numerator factor, so it is a vertical asymptote, not a hole.',
    ],
  },
  {
    type: 'mcq',
    topic: 'polynomial-rational-functions',
    lesson: 'rational-functions-precalc',
    ced: '1.9',
    stimulus: RATIONAL_H,
    question: 'Which of the following is true about $h$ as $x$ approaches $4$ from the left?',
    options: [
      '$\\displaystyle\\lim_{x \\to 4^-} h(x) = \\infty$',
      '$\\displaystyle\\lim_{x \\to 4^-} h(x) = -\\infty$',
      '$\\displaystyle\\lim_{x \\to 4^-} h(x) = 3$',
      '$\\displaystyle\\lim_{x \\to 4^-} h(x) = 0$',
    ],
    correctAnswer: 1,
    explanation:
      'For $x$ slightly less than $4$ (and not $-2$), $h(x) = \\dfrac{3(x - 2)}{x - 4}$. The numerator is near $3(2) = 6$, positive, while $x - 4$ is a small negative number, so the quotient is large and negative: $h(x) \\to -\\infty$.',
    optionExplanations: [
      'From the right of $4$, $x - 4$ is a small positive number and $h(x) \\to \\infty$; from the left, $x - 4 < 0$, so the sign is negative.',
      'Just left of $4$ the reduced form $\\frac{3(x - 2)}{x - 4}$ has a positive numerator (about $6$) over a small negative denominator, so $h(x) \\to -\\infty$.',
      '$3$ is the horizontal asymptote, the limit as $x \\to \\pm\\infty$, not the behavior near the vertical asymptote $x = 4$.',
      'A limit of $0$ would require the numerator to approach $0$; at $x = 4$ the numerator $3x^2 - 12$ equals $36$, not $0$.',
    ],
  },
  {
    type: 'mcq',
    topic: 'polynomial-rational-functions',
    lesson: 'rational-functions-precalc',
    ced: '1.7',
    stimulus: RATIONAL_H,
    question: 'The line $y = 3$ is the horizontal asymptote of the graph of $h$. At which of the following values of $x$ does the graph of $h$ intersect this line?',
    options: ['$x = -2$', '$x = 2$', '$x = 0$', 'There is no such value of $x$.'],
    correctAnswer: 3,
    explanation:
      'Setting $h(x) = 3$: $3x^2 - 12 = 3(x^2 - 2x - 8)$ gives $-12 = -6x - 24$, so $x = -2$. But $x = -2$ is not in the domain of $h$ (it is the hole), so the equation has no solution and the graph never meets $y = 3$. In the reduced form $\\dfrac{3(x - 2)}{x - 4} = 3$ leads to $-6 = -12$, which is impossible.',
    optionExplanations: [
      'Algebra gives $x = -2$, but $h(-2)$ is undefined: the graph has a hole there, which happens to lie on the line $y = 3$ but is not a point of the graph.',
      'At $x = 2$, $h(2) = 0$ (it is the zero of $h$), not $3$.',
      'At $x = 0$, $h(0) = \\frac{-12}{-8} = \\frac{3}{2} \\ne 3$.',
      'The only candidate from $h(x) = 3$ is $x = -2$, which is excluded from the domain, so the graph of $h$ never intersects its horizontal asymptote.',
    ],
  },
  {
    type: 'mcq',
    topic: 'polynomial-rational-functions',
    lesson: 'transformations-precalc',
    ced: '1.12',
    question: 'The graph of $g$ is obtained from the graph of $f(x) = x^2$ by a vertical dilation by a factor of $3$, a reflection over the $x$-axis, a horizontal translation of $2$ units to the left, and a vertical translation of $5$ units up. Which of the following is an expression for $g(x)$?',
    options: [
      '$g(x) = -3(x - 2)^2 + 5$',
      '$g(x) = -3(x + 2)^2 + 5$',
      '$g(x) = 3(x + 2)^2 - 5$',
      '$g(x) = -3(x + 2)^2 - 5$',
    ],
    correctAnswer: 1,
    explanation:
      'The vertical dilation by $3$ and the reflection over the $x$-axis multiply the output by $-3$; translating $2$ units left replaces $x$ with $x + 2$; translating $5$ units up adds $5$. So $g(x) = -3(x + 2)^2 + 5$, a parabola opening downward with vertex $(-2, 5)$.',
    optionExplanations: [
      'A translation to the left replaces $x$ with $x + 2$, not $x - 2$; $(x - 2)^2$ moves the vertex to $x = 2$, to the right.',
      'Output multiplied by $-3$ (dilation and reflection), input replaced by $x + 2$ (left $2$), then $+5$ (up $5$): $g(x) = -3(x + 2)^2 + 5$.',
      'The reflection over the $x$-axis is missing (the leading coefficient must be negative), and the vertical translation is up $5$, so the constant is $+5$.',
      'The vertical translation is $5$ units up, which adds $5$ to the output; $-5$ would move the vertex down.',
    ],
  },

  /* ---- Unit 2 (9) ---- */
  {
    type: 'mcq',
    topic: 'exponential-logarithmic',
    lesson: 'sequences-series-precalc',
    ced: '2.1',
    question: 'A geometric sequence has $g_1 = 80$ and $g_4 = 10$. Which of the following is an expression for the $n$th term $g_n$?',
    options: [
      '$g_n = 80\\left(\\dfrac{1}{2}\\right)^{n}$',
      '$g_n = 80\\left(\\dfrac{1}{8}\\right)^{n - 1}$',
      '$g_n = 80\\left(\\dfrac{1}{2}\\right)^{n - 1}$',
      '$g_n = 80 - \\dfrac{70}{3}(n - 1)$',
    ],
    correctAnswer: 2,
    explanation:
      'From $g_1$ to $g_4$ the common ratio is applied three times: $80r^3 = 10$, so $r^3 = \\frac{1}{8}$ and $r = \\frac{1}{2}$. Then $g_n = g_1 r^{n - 1} = 80\\left(\\frac{1}{2}\\right)^{n - 1}$. Check: $g_4 = 80 \\cdot \\frac{1}{8} = 10$.',
    optionExplanations: [
      'With exponent $n$ the first term would be $80 \\cdot \\frac{1}{2} = 40$, not $80$. The exponent in the explicit form is $n - 1$.',
      '$\\frac{1}{8}$ is $r^3$, the total factor over the three steps from $g_1$ to $g_4$; the common ratio per step is its cube root, $\\frac{1}{2}$.',
      '$r^3 = \\frac{10}{80} = \\frac{1}{8}$ gives $r = \\frac{1}{2}$, and $g_n = 80\\left(\\frac{1}{2}\\right)^{n - 1}$ satisfies $g_1 = 80$ and $g_4 = 10$.',
      'This is an arithmetic sequence (constant difference $-\\frac{70}{3}$), which fits $g_1$ and $g_4$ but not a geometric sequence, whose consecutive terms have a constant ratio.',
    ],
  },
  {
    type: 'mcq',
    topic: 'exponential-logarithmic',
    lesson: 'exponential-functions-precalc',
    ced: '2.3',
    stimulus: TABLE_F,
    question: 'Which of the following is an expression for $f(x)$?',
    options: ['$f(x) = 2 \\cdot 3^{x}$', '$f(x) = 2 \\cdot 3^{x/3}$', '$f(x) = 2 \\cdot 3^{3x}$', '$f(x) = 3 \\cdot 2^{x/3}$'],
    correctAnswer: 1,
    explanation:
      'The initial value is $f(0) = 2$. Each increase of $3$ in $x$ multiplies the output by $3$, so the growth factor per unit of $x$ is $3^{1/3}$ and $f(x) = 2\\left(3^{1/3}\\right)^x = 2 \\cdot 3^{x/3}$. Check: $f(9) = 2 \\cdot 3^3 = 54$.',
    optionExplanations: [
      '$2 \\cdot 3^x$ triples every $1$ unit of $x$, giving $f(3) = 54$; the table triples only every $3$ units.',
      'The output triples every $3$ units of $x$, so the exponent counts groups of $3$: $f(x) = 2 \\cdot 3^{x/3}$, with $f(3) = 6$, $f(6) = 18$, $f(9) = 54$.',
      '$3^{3x}$ triples three times per unit of $x$, far too fast: it would give $f(3) = 2 \\cdot 3^9$.',
      'This swaps the roles of $2$ and $3$: the initial value is $2$ and the factor is $3$, so $3 \\cdot 2^{x/3}$ gives $f(0) = 3$, not $2$.',
    ],
  },
  {
    type: 'mcq',
    topic: 'exponential-logarithmic',
    lesson: 'exponential-functions-precalc',
    ced: '2.2',
    stimulus: TABLE_F,
    question: 'What is the average rate of change of $f$ over the interval $3 \\le x \\le 9$?',
    options: ['$48$', '$\\dfrac{8}{3}$', '$16$', '$8$'],
    correctAnswer: 3,
    explanation:
      '$\\dfrac{f(9) - f(3)}{9 - 3} = \\dfrac{54 - 6}{6} = 8$. The average rate of change of an exponential function over an interval grows as the interval moves right: over $[0, 6]$ it is only $\\frac{18 - 2}{6} = \\frac{8}{3}$.',
    optionExplanations: [
      '$48$ is $f(9) - f(3)$, the change in output, not divided by the length $6$ of the interval.',
      '$\\frac{8}{3}$ is the average rate of change over $0 \\le x \\le 6$, $\\frac{18 - 2}{6}$, not over the interval $3 \\le x \\le 9$.',
      '$16$ divides the change $48$ by $3$ (the table step) rather than by the interval length $6$.',
      '$\\frac{54 - 6}{9 - 3} = \\frac{48}{6} = 8$.',
    ],
  },
  {
    type: 'mcq',
    topic: 'exponential-logarithmic',
    lesson: 'exponential-functions-precalc',
    ced: '2.4',
    question: 'Which of the following is equivalent to $\\left(\\dfrac{1}{4}\\right)^{x - 1} \\cdot 2^{3x}$ for all real $x$?',
    options: ['$2^{x - 2}$', '$8 \\cdot 2^{x}$', '$4 \\cdot 2^{x}$', '$2^{5x - 2}$'],
    correctAnswer: 2,
    explanation:
      'Write everything with base $2$: $\\left(\\frac{1}{4}\\right)^{x - 1} = \\left(2^{-2}\\right)^{x - 1} = 2^{-2x + 2}$. Then $2^{-2x + 2} \\cdot 2^{3x} = 2^{x + 2} = 4 \\cdot 2^x$. Check at $x = 1$: $\\left(\\frac{1}{4}\\right)^0 \\cdot 2^3 = 8$ and $4 \\cdot 2^1 = 8$.',
    optionExplanations: [
      'This has the sign of the constant exponent wrong: $\\left(\\frac{1}{4}\\right)^{x - 1} = 2^{-2(x - 1)} = 2^{-2x + 2}$, so the total exponent is $x + 2$, not $x - 2$.',
      'This uses $2^{3x} = 8 \\cdot 2^x$, but $2^{3x} = (2^x)^3$, not $2^3 \\cdot 2^x$. Checking at $x = 1$: $8 \\cdot 2 = 16 \\ne 8$.',
      '$2^{-2x + 2} \\cdot 2^{3x} = 2^{x + 2} = 4 \\cdot 2^x$, which equals $8$ at $x = 1$, as the original expression does.',
      'This adds exponents as if the first factor were $2^{2x - 2}$, but $\\frac{1}{4} = 2^{-2}$ gives $2^{-2x + 2}$; the $x$-exponents combine to $-2x + 3x = x$.',
    ],
  },
  {
    type: 'mcq',
    topic: 'exponential-logarithmic',
    lesson: 'function-composition-inverses-precalc',
    ced: '2.7',
    stimulus: TABLES_FG,
    question: 'What is the value of $f(g(3))$?',
    options: ['$1$', '$3$', '$4$', '$2$'],
    correctAnswer: 2,
    explanation:
      'Work from the inside out: $g(3) = 1$, and then $f(1) = 4$. So $f(g(3)) = 4$. Reading the tables in the other order gives $g(f(3)) = g(3) = 1$.',
    optionExplanations: [
      '$1$ is $g(3)$, the inner value, or $g(f(3))$; the outer function $f$ still has to be applied: $f(1) = 4$.',
      '$3$ is $f(3)$, which evaluates $f$ at the input $3$ instead of at $g(3)$.',
      '$g(3) = 1$ and $f(1) = 4$, so $f(g(3)) = 4$.',
      '$2$ is $g(1)$ or $f(4)$; neither is the composition $f(g(3))$, which uses $g(3) = 1$ as the input to $f$.',
    ],
  },
  {
    type: 'mcq',
    topic: 'exponential-logarithmic',
    lesson: 'function-composition-inverses-precalc',
    ced: '2.8',
    stimulus: TABLES_FG,
    question: 'The function $h$ is defined by $h(x) = f(g(x))$. What is the value of $h^{-1}(4)$?',
    options: ['$3$', '$1$', '$4$', '$2$'],
    correctAnswer: 0,
    explanation:
      '$h^{-1}(4)$ is the input $x$ for which $h(x) = 4$. Computing $h$ at each input: $h(1) = f(2) = 1$, $h(2) = f(4) = 2$, $h(3) = f(1) = 4$, $h(4) = f(3) = 3$. Since $h(3) = 4$ and $h$ is one-to-one, $h^{-1}(4) = 3$.',
    optionExplanations: [
      '$h(3) = f(g(3)) = f(1) = 4$, so the inverse sends $4$ back to $3$.',
      '$1$ is $g(3)$, an intermediate value, or $h(1)$; the inverse asks which input gives the output $4$.',
      '$4$ is the output, not the input. $h(4) = f(3) = 3$, so $h^{-1}(3) = 4$, not $h^{-1}(4)$.',
      '$h(2) = f(4) = 2$, so $2$ is $h^{-1}(2)$, not $h^{-1}(4)$.',
    ],
  },
  {
    type: 'mcq',
    topic: 'exponential-logarithmic',
    lesson: 'logarithmic-functions-precalc',
    ced: '2.10',
    question: 'What is the value of $x$ for which $\\log_x 27 = \\dfrac{3}{2}$?',
    options: ['$18$', '$3\\sqrt{3}$', '$81$', '$9$'],
    correctAnswer: 3,
    explanation:
      'In exponential form, $x^{3/2} = 27$. Raising both sides to the $\\frac{2}{3}$ power, $x = 27^{2/3} = \\left(27^{1/3}\\right)^2 = 3^2 = 9$. Check: $9^{3/2} = \\left(\\sqrt{9}\\right)^3 = 27$.',
    optionExplanations: [
      '$18 = 27 \\cdot \\frac{2}{3}$ treats the logarithm as division. The equation means $x^{3/2} = 27$.',
      '$3\\sqrt{3} = 27^{1/2}$ takes a square root of $27$ instead of raising it to the $\\frac{2}{3}$ power; checking, $\\log_{3\\sqrt{3}} 27 = 2$.',
      '$81 = 27^{4/3}$ or $9^2$; checking, $\\log_{81} 27 = \\frac{3}{4}$, because $81^{3/4} = 27$.',
      '$x^{3/2} = 27$ gives $x = 27^{2/3} = 9$, and indeed $9^{3/2} = 27$.',
    ],
  },
  {
    type: 'mcq',
    topic: 'exponential-logarithmic',
    lesson: 'logarithmic-functions-precalc',
    ced: '2.13',
    question: 'What are all values of $x$ for which $2 \\cdot 5^{x} > 250$?',
    options: ['$x \\ge 3$', '$x > \\dfrac{3}{2}$', '$x > 3$', '$x > \\log_5 250$'],
    correctAnswer: 2,
    explanation:
      'Divide by $2$: $5^x > 125 = 5^3$. Because $5^x$ is an increasing function, $5^x > 5^3$ exactly when $x > 3$. At $x = 3$ the two sides are equal, so $3$ itself is not a solution.',
    optionExplanations: [
      'At $x = 3$, $2 \\cdot 5^3 = 250$ exactly, so the strict inequality fails there; $3$ is not a solution.',
      'This divides the exponent $3$ by $2$ instead of dividing the whole left side by $2$. $2 \\cdot 5^x > 250$ means $5^x > 125$, not $5^{2x} > 125$.',
      '$5^x > 125 = 5^3$, and since the base $5$ is greater than $1$, the inequality in the exponents keeps the same direction: $x > 3$.',
      'This forgets to divide by $2$ first. $\\log_5 250$ is about $3.43$, but the solution is $x > \\log_5 125 = 3$.',
    ],
  },
  {
    type: 'mcq',
    topic: 'exponential-logarithmic',
    lesson: 'exponential-logarithmic-modeling-precalc',
    ced: '2.15',
    question: 'A set of data $(x, y)$ with $y > 0$ is plotted on a semi-log plot with $\\ln y$ on the vertical axis. The points lie on a line that passes through $(0, 2)$ and $(4, 6)$. Which of the following is a model for $y$ as a function of $x$?',
    options: ['$y = 2e^{x}$', '$y = e^{2x}$', '$y = 2 + e^{x}$', '$y = e^{x + 2}$'],
    correctAnswer: 3,
    explanation:
      'The line has slope $\\frac{6 - 2}{4 - 0} = 1$ and vertical intercept $2$, so $\\ln y = x + 2$. Therefore $y = e^{x + 2} = e^2 \\cdot e^x$: an exponential model with initial value $e^2$ and growth factor $e$.',
    optionExplanations: [
      '$y = 2e^x$ gives $\\ln y = \\ln 2 + x$, whose intercept is $\\ln 2 \\approx 0.69$, not $2$. The intercept $2$ on the $\\ln y$ axis means the initial value is $e^2$.',
      '$y = e^{2x}$ gives $\\ln y = 2x$, a line through the origin with slope $2$; the data line has slope $1$ and intercept $2$.',
      'Adding $2$ to $e^x$ does not produce a straight line on a semi-log plot; the line $\\ln y = x + 2$ comes from a purely exponential $y$.',
      '$\\ln y = x + 2$ (slope $1$, intercept $2$) exponentiates to $y = e^{x + 2}$.',
    ],
  },

  /* ---- Unit 3 (10) ---- */
  {
    type: 'mcq',
    topic: 'trigonometric-functions',
    lesson: 'trigonometric-functions-precalc',
    ced: '3.1',
    question: 'The function $h$ is periodic with period $5$, and $h(2) = 7$. Which of the following must be true?',
    options: ['$h(7) = 12$', '$h(-3) = -7$', '$h(2.5) = -7$', '$h(7) = 7$'],
    correctAnswer: 3,
    explanation:
      'A function with period $5$ satisfies $h(x + 5) = h(x)$ for every $x$ in its domain, so $h(7) = h(2 + 5) = h(2) = 7$. The period also gives $h(-3) = h(2) = 7$, and nothing is known about $h$ at $2.5$ from the period alone.',
    optionExplanations: [
      'The period shifts the input, not the output; $h(7)$ equals $h(2)$, it is not $h(2)$ plus the period.',
      'Moving back one period keeps the output: $h(-3) = h(2) = 7$, not $-7$. A negative input does not change the sign of the output.',
      'Half a period does not reverse the sign of a periodic function in general; that holds for sinusoids with midline $0$, but $h$ is not known to be one.',
      'Periodicity means the outputs repeat every $5$ units of input: $h(7) = h(2) = 7$.',
    ],
  },
  {
    type: 'mcq',
    topic: 'trigonometric-functions',
    lesson: 'the-unit-circle',
    ced: '3.3',
    question: 'What is the exact value of $\\cos\\left(\\dfrac{11\\pi}{6}\\right) - \\sin\\left(\\dfrac{4\\pi}{3}\\right)$?',
    options: ['$\\dfrac{\\sqrt{3}}{2}$', '$-\\sqrt{3}$', '$\\sqrt{3}$', '$\\dfrac{\\sqrt{3}}{2} + \\dfrac{1}{2}$'],
    correctAnswer: 2,
    explanation:
      '$\\frac{11\\pi}{6}$ is in Quadrant IV with reference angle $\\frac{\\pi}{6}$, so $\\cos\\frac{11\\pi}{6} = \\frac{\\sqrt{3}}{2}$. $\\frac{4\\pi}{3}$ is in Quadrant III with reference angle $\\frac{\\pi}{3}$, so $\\sin\\frac{4\\pi}{3} = -\\frac{\\sqrt{3}}{2}$. The difference is $\\frac{\\sqrt{3}}{2} - \\left(-\\frac{\\sqrt{3}}{2}\\right) = \\sqrt{3}$.',
    optionExplanations: [
      '$\\frac{\\sqrt{3}}{2}$ is $\\cos\\frac{11\\pi}{6}$ alone, as if $\\sin\\frac{4\\pi}{3}$ were $0$. Sine is $0$ only at multiples of $\\pi$; at $\\frac{4\\pi}{3}$ it is $-\\frac{\\sqrt{3}}{2}$.',
      'This subtracts $\\frac{\\sqrt{3}}{2}$ from $-\\frac{\\sqrt{3}}{2}$, swapping the signs of both terms.',
      '$\\cos\\frac{11\\pi}{6} = \\frac{\\sqrt{3}}{2}$ and $\\sin\\frac{4\\pi}{3} = -\\frac{\\sqrt{3}}{2}$, so the difference is $\\frac{\\sqrt{3}}{2} + \\frac{\\sqrt{3}}{2} = \\sqrt{3}$.',
      'This uses $\\sin\\frac{4\\pi}{3} = -\\frac{1}{2}$, mixing up the sine and cosine of the reference angle $\\frac{\\pi}{3}$; $\\sin\\frac{\\pi}{3} = \\frac{\\sqrt{3}}{2}$, so the sine at $\\frac{4\\pi}{3}$ is $-\\frac{\\sqrt{3}}{2}$.',
    ],
  },
  {
    type: 'mcq',
    topic: 'trigonometric-functions',
    lesson: 'graphing-trig-functions',
    ced: '3.6',
    stimulus: SINUSOID,
    question: 'Which of the following is an expression for $w(x)$?',
    options: [
      '$w(x) = 3\\sin x + 2$',
      '$w(x) = -3\\sin x + 2$',
      '$w(x) = 3\\cos x + 2$',
      '$w(x) = 3\\sin x - 1$',
    ],
    correctAnswer: 1,
    explanation:
      'The midline is $y = 2$ and the minimum is $-1$, so the amplitude is $2 - (-1) = 3$. The graph starts on the midline at $x = 0$, which is where a sine curve starts, but it goes down first, so it is a reflected sine: $w(x) = -3\\sin x + 2$. Check: $w\\left(\\frac{\\pi}{2}\\right) = -3 + 2 = -1$.',
    optionExplanations: [
      '$3\\sin x + 2$ rises from the midline at $x = 0$ and reaches its maximum $5$ at $\\frac{\\pi}{2}$; the graph described falls to a minimum there.',
      'Midline $2$, amplitude $3$, starting on the midline and decreasing: $w(x) = -3\\sin x + 2$, which gives $w\\left(\\frac{\\pi}{2}\\right) = -1$ and $w(\\pi) = 2$.',
      '$3\\cos x + 2$ equals $5$ at $x = 0$, a maximum at the start, but the graph passes through the midline point $(0, 2)$ and falls to a minimum at $\\frac{\\pi}{2}$.',
      'The midline is $y = 2$, so the constant must be $2$; $-1$ is the minimum value, not the midline.',
    ],
  },
  {
    type: 'mcq',
    topic: 'trigonometric-functions',
    lesson: 'graphing-trig-functions',
    ced: '3.4',
    stimulus: SINUSOID,
    question: 'On which of the following intervals is $w$ increasing and the graph of $w$ concave down?',
    options: ['$0 < x < \\dfrac{\\pi}{2}$', '$\\dfrac{\\pi}{2} < x < \\pi$', '$\\pi < x < \\dfrac{3\\pi}{2}$', '$\\dfrac{3\\pi}{2} < x < 2\\pi$'],
    correctAnswer: 2,
    explanation:
      'After the minimum at $x = \\frac{\\pi}{2}$, $w$ increases until its maximum at $x = \\frac{3\\pi}{2}$. The graph is concave up near the minimum and concave down near the maximum, switching at the midline crossing $x = \\pi$. So $w$ is increasing and concave down on $\\pi < x < \\frac{3\\pi}{2}$.',
    optionExplanations: [
      'On $0 < x < \\frac{\\pi}{2}$ the graph falls from the midline to the minimum: decreasing and concave up.',
      'On $\\frac{\\pi}{2} < x < \\pi$ the graph rises from the minimum to the midline: increasing, but concave up (still bending up away from the minimum).',
      'Between the midline crossing at $\\pi$ and the maximum at $\\frac{3\\pi}{2}$, the graph is rising and bending downward toward the maximum.',
      'On $\\frac{3\\pi}{2} < x < 2\\pi$ the graph is past its maximum: decreasing and concave down.',
    ],
  },
  {
    type: 'mcq',
    topic: 'trigonometric-functions',
    lesson: 'trigonometric-functions-precalc',
    ced: '3.8',
    question: 'What are all vertical asymptotes of the graph of $y = \\tan\\left(x - \\dfrac{\\pi}{4}\\right)$ on the interval $0 < x < 2\\pi$?',
    options: [
      '$x = \\dfrac{\\pi}{4}$ and $x = \\dfrac{5\\pi}{4}$',
      '$x = \\dfrac{3\\pi}{4}$ and $x = \\dfrac{7\\pi}{4}$',
      '$x = \\dfrac{\\pi}{2}$ and $x = \\dfrac{3\\pi}{2}$',
      '$x = \\dfrac{3\\pi}{4}$ only',
    ],
    correctAnswer: 1,
    explanation:
      'The tangent function has vertical asymptotes where its argument equals $\\frac{\\pi}{2} + k\\pi$. Setting $x - \\frac{\\pi}{4} = \\frac{\\pi}{2} + k\\pi$ gives $x = \\frac{3\\pi}{4} + k\\pi$; in $0 < x < 2\\pi$ that is $x = \\frac{3\\pi}{4}$ and $x = \\frac{7\\pi}{4}$. The graph of $\\tan x$ is translated $\\frac{\\pi}{4}$ to the right.',
    optionExplanations: [
      'These are where the argument $x - \\frac{\\pi}{4}$ equals $0$ and $\\pi$, the zeros of the shifted tangent, not its asymptotes.',
      'Asymptotes where $x - \\frac{\\pi}{4} = \\frac{\\pi}{2}$ and $\\frac{3\\pi}{2}$: $x = \\frac{3\\pi}{4}$ and $x = \\frac{7\\pi}{4}$.',
      'These are the asymptotes of $y = \\tan x$ without the translation; subtracting $\\frac{\\pi}{4}$ inside shifts every asymptote $\\frac{\\pi}{4}$ to the right.',
      'Tangent has period $\\pi$, so there is a second asymptote one period later, at $\\frac{3\\pi}{4} + \\pi = \\frac{7\\pi}{4}$, still inside $0 < x < 2\\pi$.',
    ],
  },
  {
    type: 'mcq',
    topic: 'trigonometric-functions',
    lesson: 'inverse-trig-functions-precalc',
    ced: '3.9',
    question: 'What is the exact value of $\\sin\\left(\\arctan\\dfrac{2}{3}\\right)$?',
    options: ['$\\dfrac{2}{3}$', '$\\dfrac{3\\sqrt{13}}{13}$', '$\\dfrac{\\sqrt{13}}{2}$', '$\\dfrac{2\\sqrt{13}}{13}$'],
    correctAnswer: 3,
    explanation:
      'Let $\\theta = \\arctan\\frac{2}{3}$, an angle in Quadrant I with $\\tan\\theta = \\frac{2}{3}$. In a right triangle with opposite side $2$ and adjacent side $3$, the hypotenuse is $\\sqrt{4 + 9} = \\sqrt{13}$, so $\\sin\\theta = \\dfrac{2}{\\sqrt{13}} = \\dfrac{2\\sqrt{13}}{13}$.',
    optionExplanations: [
      '$\\frac{2}{3}$ is $\\tan\\theta$, the ratio of opposite to adjacent. Sine is opposite over the hypotenuse, which is $\\sqrt{13}$.',
      '$\\frac{3}{\\sqrt{13}}$ is $\\cos\\theta$ (adjacent over hypotenuse), not $\\sin\\theta$.',
      '$\\frac{\\sqrt{13}}{2}$ is the cosecant, hypotenuse over opposite; the sine is its reciprocal.',
      'With $\\tan\\theta = \\frac{2}{3}$, the hypotenuse is $\\sqrt{13}$ and $\\sin\\theta = \\frac{2}{\\sqrt{13}} = \\frac{2\\sqrt{13}}{13}$; the value is positive because $\\arctan$ of a positive number is in Quadrant I.',
    ],
  },
  {
    type: 'mcq',
    topic: 'trigonometric-functions',
    lesson: 'solving-trig-equations',
    ced: '3.10',
    question: 'What are all real solutions of the equation $\\cos(2x) = \\dfrac{\\sqrt{3}}{2}$?',
    options: [
      '$x = \\dfrac{\\pi}{12} + k\\pi$ and $x = -\\dfrac{\\pi}{12} + k\\pi$ for all integers $k$',
      '$x = \\dfrac{\\pi}{6} + 2k\\pi$ and $x = -\\dfrac{\\pi}{6} + 2k\\pi$ for all integers $k$',
      '$x = \\dfrac{\\pi}{12} + 2k\\pi$ and $x = -\\dfrac{\\pi}{12} + 2k\\pi$ for all integers $k$',
      '$x = \\dfrac{\\pi}{3} + k\\pi$ and $x = -\\dfrac{\\pi}{3} + k\\pi$ for all integers $k$',
    ],
    correctAnswer: 0,
    explanation:
      '$\\cos u = \\frac{\\sqrt{3}}{2}$ when $u = \\pm\\frac{\\pi}{6} + 2k\\pi$. With $u = 2x$: $2x = \\pm\\frac{\\pi}{6} + 2k\\pi$, so $x = \\pm\\frac{\\pi}{12} + k\\pi$. Dividing by $2$ halves both the base angles and the period, from $2\\pi$ to $\\pi$.',
    optionExplanations: [
      '$2x = \\pm\\frac{\\pi}{6} + 2k\\pi$ divided by $2$ gives $x = \\pm\\frac{\\pi}{12} + k\\pi$; the solutions repeat every $\\pi$ because $\\cos(2x)$ has period $\\pi$.',
      'These are the solutions of $\\cos x = \\frac{\\sqrt{3}}{2}$, the values of $2x$ rather than of $x$. Every solution must still be divided by $2$.',
      'The base angles are right, but the period was not halved: when $2x$ advances by $2\\pi$, $x$ advances by $\\pi$, so the solutions repeat every $\\pi$.',
      '$\\frac{\\pi}{3}$ is where cosine equals $\\frac{1}{2}$, not $\\frac{\\sqrt{3}}{2}$, and it was not divided by $2$.',
    ],
  },
  {
    type: 'mcq',
    topic: 'trigonometric-functions',
    lesson: 'trigonometric-identities-precalc',
    ced: '3.12',
    question: 'If $\\sin\\theta = \\dfrac{1}{3}$ and $\\dfrac{\\pi}{2} < \\theta < \\pi$, what is the value of $\\cos(2\\theta)$?',
    options: ['$-\\dfrac{7}{9}$', '$\\dfrac{7}{9}$', '$-\\dfrac{4\\sqrt{2}}{9}$', '$\\dfrac{17}{9}$'],
    correctAnswer: 1,
    explanation:
      'Use the form of the double-angle identity that needs only the sine: $\\cos(2\\theta) = 1 - 2\\sin^2\\theta = 1 - 2\\cdot\\frac{1}{9} = \\frac{7}{9}$. The quadrant does not affect this computation, because $\\sin^2\\theta$ is the same either way; it would matter for $\\sin(2\\theta)$, which is $-\\frac{4\\sqrt{2}}{9}$ here.',
    optionExplanations: [
      'The sign is wrong: $1 - 2\\sin^2\\theta = 1 - \\frac{2}{9} = \\frac{7}{9}$. Using $2\\cos^2\\theta - 1 = 2\\cdot\\frac{8}{9} - 1$ also gives $\\frac{7}{9}$.',
      '$\\cos(2\\theta) = 1 - 2\\sin^2\\theta = 1 - \\frac{2}{9} = \\frac{7}{9}$.',
      '$-\\frac{4\\sqrt{2}}{9}$ is $\\sin(2\\theta) = 2\\sin\\theta\\cos\\theta$ with $\\cos\\theta = -\\frac{2\\sqrt{2}}{3}$ in Quadrant II, not $\\cos(2\\theta)$.',
      '$\\frac{17}{9} = 1 + 2\\sin^2\\theta$ adds the $2\\sin^2\\theta$ term instead of subtracting it; the identity is $\\cos(2\\theta) = 1 - 2\\sin^2\\theta$.',
    ],
  },
  {
    type: 'mcq',
    topic: 'trigonometric-functions',
    lesson: 'polar-coordinates-precalc',
    ced: '3.13',
    question: 'Which of the following polar coordinates represents the same point as $\\left(3, \\dfrac{\\pi}{4}\\right)$?',
    options: [
      '$\\left(-3, \\dfrac{\\pi}{4}\\right)$',
      '$\\left(3, \\dfrac{5\\pi}{4}\\right)$',
      '$\\left(-3, \\dfrac{5\\pi}{4}\\right)$',
      '$\\left(3, -\\dfrac{\\pi}{4}\\right)$',
    ],
    correctAnswer: 2,
    explanation:
      'A negative $r$ places the point $|r|$ units in the direction opposite to $\\theta$. The direction opposite to $\\frac{5\\pi}{4}$ is $\\frac{5\\pi}{4} - \\pi = \\frac{\\pi}{4}$, so $\\left(-3, \\frac{5\\pi}{4}\\right)$ is $3$ units along the ray at $\\frac{\\pi}{4}$: the same point. In rectangular coordinates both give $\\left(\\frac{3\\sqrt{2}}{2}, \\frac{3\\sqrt{2}}{2}\\right)$.',
    optionExplanations: [
      '$\\left(-3, \\frac{\\pi}{4}\\right)$ is $3$ units in the direction opposite to $\\frac{\\pi}{4}$, which is the point $\\left(3, \\frac{5\\pi}{4}\\right)$ in Quadrant III.',
      '$\\left(3, \\frac{5\\pi}{4}\\right)$ is the reflection of the given point through the origin, in Quadrant III.',
      'Negative $r$ reverses the direction: $\\frac{5\\pi}{4}$ reversed is $\\frac{\\pi}{4}$, so $\\left(-3, \\frac{5\\pi}{4}\\right)$ coincides with $\\left(3, \\frac{\\pi}{4}\\right)$.',
      '$\\left(3, -\\frac{\\pi}{4}\\right)$ is in Quadrant IV, the reflection of the given point over the $x$-axis.',
    ],
  },
  {
    type: 'mcq',
    topic: 'trigonometric-functions',
    lesson: 'polar-coordinates-precalc',
    ced: '3.14',
    question: 'Which of the following is true about the graph of the polar function $r = 2 - 2\\sin\\theta$ for $0 \\le \\theta \\le 2\\pi$?',
    options: [
      'The graph passes through the origin when $\\theta = \\dfrac{\\pi}{2}$, and its greatest distance from the origin is $4$, at $\\theta = \\dfrac{3\\pi}{2}$.',
      'The graph passes through the origin when $\\theta = \\dfrac{3\\pi}{2}$, and its greatest distance from the origin is $4$.',
      'The graph never passes through the origin, and its greatest distance from the origin is $2$.',
      'The graph passes through the origin when $\\theta = 0$ and $\\theta = \\pi$, and its greatest distance from the origin is $2$.',
    ],
    correctAnswer: 0,
    explanation:
      '$r = 0$ when $\\sin\\theta = 1$, at $\\theta = \\frac{\\pi}{2}$, so the graph passes through the origin there. $r$ is largest when $\\sin\\theta = -1$, at $\\theta = \\frac{3\\pi}{2}$, where $r = 4$. Since $r = 2 - 2\\sin\\theta \\ge 0$ for all $\\theta$, the distance to the origin is $r$ itself; the graph is a cardioid.',
    optionExplanations: [
      '$r = 2 - 2\\sin\\theta$ is $0$ at $\\theta = \\frac{\\pi}{2}$ (where $\\sin\\theta = 1$) and reaches its maximum $4$ at $\\theta = \\frac{3\\pi}{2}$ (where $\\sin\\theta = -1$).',
      'This swaps the two angles: at $\\theta = \\frac{3\\pi}{2}$, $\\sin\\theta = -1$ and $r = 2 + 2 = 4$, the farthest point; at $\\theta = \\frac{\\pi}{2}$, $r = 0$.',
      'The graph does reach the origin, at $\\theta = \\frac{\\pi}{2}$, and $r$ reaches $4$, not $2$, when $\\sin\\theta = -1$.',
      'At $\\theta = 0$ and $\\theta = \\pi$, $\\sin\\theta = 0$ and $r = 2$, so the graph is $2$ units from the origin there, not at the origin.',
    ],
  },

  /* ============== PART B — GRAPHING CALCULATOR (Q30–Q42) ============== */

  /* ---- Unit 1 (4) ---- */
  {
    type: 'mcq',
    topic: 'polynomial-rational-functions',
    lesson: 'function-modeling-precalc',
    ced: '1.14',
    stimulus: FUEL,
    question: 'A quadratic regression $E(s) = as^2 + bs + c$ is fit to the data. According to the model, at what speed is the fuel economy greatest?',
    options: ['$50.0$ mph', '$52.2$ mph', '$31.8$ mph', '$55.0$ mph'],
    correctAnswer: 1,
    explanation:
      'The calculator\'s quadratic regression gives $E(s) \\approx -0.01107s^2 + 1.1561s + 1.6457$. The maximum of a downward-opening parabola is at its vertex, $s = -\\dfrac{b}{2a} \\approx 52.2$ mph, where the model gives about $31.8$ mpg. The best table value is at $50$ mph, but the model peaks a little to the right of it.',
    optionExplanations: [
      '$50$ mph has the largest fuel economy in the table, but the question asks where the regression model is greatest, and the model\'s vertex is at about $52.2$ mph.',
      'The regression $E(s) \\approx -0.01107s^2 + 1.1561s + 1.6457$ has its vertex at $s = -\\frac{b}{2a} \\approx 52.2$ mph.',
      '$31.8$ is a fuel economy (the maximum value of the model, in mpg, and also the table value at $50$ mph), not a speed.',
      '$55$ is the midpoint of the two table speeds with the highest values, $50$ and $60$; the model\'s vertex is at $52.2$, closer to $50$ because $31.8 > 31.2$.',
    ],
  },
  {
    type: 'mcq',
    topic: 'polynomial-rational-functions',
    lesson: 'function-modeling-precalc',
    ced: '1.13',
    stimulus: FUEL,
    question: 'According to the quadratic regression model, what is the fuel economy of the car when it is driven at $65$ miles per hour?',
    options: ['$29.8$ mpg', '$31.8$ mpg', '$28.3$ mpg', '$30.0$ mpg'],
    correctAnswer: 3,
    explanation:
      'Evaluating the regression model at $s = 65$: $E(65) \\approx -0.01107(65)^2 + 1.1561(65) + 1.6457 \\approx 30.0$ mpg. The midpoint of the table values at $60$ and $70$, $\\frac{31.2 + 28.3}{2} = 29.75$, is a linear interpolation that ignores the curvature.',
    optionExplanations: [
      '$29.8$ is the average of the table values at $60$ and $70$ mph (linear interpolation). The quadratic model, which bends, gives a slightly higher value at $65$.',
      '$31.8$ is the model\'s maximum value (at about $52$ mph), not its value at $65$ mph.',
      '$28.3$ is the table value at $70$ mph.',
      'Substituting $s = 65$ into $E(s) \\approx -0.01107s^2 + 1.1561s + 1.6457$ gives about $30.0$ mpg.',
    ],
  },
  {
    type: 'mcq',
    topic: 'polynomial-rational-functions',
    lesson: 'polynomial-functions-precalc',
    ced: '1.4',
    question: 'The function $f$ is given by $f(x) = x^4 - 3x^3 + x$. What is the least value of $f$ on the closed interval $0 \\le x \\le 3$?',
    options: ['$0$', '$-6.318$', '$2.198$', '$3$'],
    correctAnswer: 1,
    explanation:
      'Graphing $f$ on $[0, 3]$ shows a relative maximum near $x \\approx 0.364$ ($f \\approx 0.237$) and a relative minimum near $x \\approx 2.198$, where $f \\approx -6.318$. The endpoints give $f(0) = 0$ and $f(3) = 3$, so the least value on the interval is $-6.318$.',
    optionExplanations: [
      '$f(0) = 0$ is the value at the left endpoint, but the graph dips well below $0$ between $x = 1$ and $x = 3$.',
      'The minimum on $[0, 3]$ occurs at the interior point $x \\approx 2.198$, where $f \\approx -6.318$, lower than either endpoint value.',
      '$2.198$ is the input where the minimum occurs, not the minimum value.',
      '$f(3) = 81 - 81 + 3 = 3$ is the value at the right endpoint, the greatest value on the interval, not the least.',
    ],
  },
  {
    type: 'mcq',
    topic: 'polynomial-rational-functions',
    lesson: 'rational-functions-precalc',
    ced: '1.14',
    question: 'A company\'s daily revenue, in thousands of dollars, from selling a product at $x$ dollars per unit is modeled by $R(x) = \\dfrac{40x}{x^2 + 9}$ for $x > 0$. For which prices is the daily revenue greater than $5$ thousand dollars?',
    options: [
      '$x > 1.354$',
      '$1.354 < x < 6.646$',
      '$x > 6.646$',
      '$x < 1.354$ or $x > 6.646$',
    ],
    correctAnswer: 1,
    explanation:
      'Graph $y = R(x)$ and $y = 5$. The curve rises from $0$, peaks at $R(3) = \\frac{120}{18} \\approx 6.67$, and falls back toward $0$; it is above $5$ between the intersections at $x \\approx 1.354$ and $x \\approx 6.646$. Algebraically, $40x > 5(x^2 + 9)$ gives $x^2 - 8x + 9 < 0$, whose solution is $4 - \\sqrt{7} < x < 4 + \\sqrt{7}$.',
    optionExplanations: [
      'Revenue exceeds $5$ thousand only until the price reaches about $6.646$; at higher prices $R(x) \\to 0$ and the revenue drops below $5$ again.',
      'Between the two intersections of $R(x) = 5$, at $x \\approx 1.354$ and $x \\approx 6.646$, the graph of $R$ is above $y = 5$.',
      'For $x > 6.646$ the revenue has fallen below $5$ thousand; for example $R(10) = \\frac{400}{109} \\approx 3.67$.',
      'These are the prices where the revenue is less than $5$ thousand (and $R(0) = 0$), the complement of the answer.',
    ],
  },

  /* ---- Unit 2 (5) ---- */
  {
    type: 'mcq',
    topic: 'exponential-logarithmic',
    lesson: 'exponential-logarithmic-modeling-precalc',
    ced: '2.5',
    stimulus: COLLECTIBLE,
    question: 'An exponential regression $V(t) = ab^t$ is fit to the data. According to the model, by approximately what percent does the value of the toy increase each year?',
    options: ['$17.3\\%$', '$107.1\\%$', '$40.8\\%$', '$7.1\\%$'],
    correctAnswer: 3,
    explanation:
      'The calculator\'s exponential regression gives $V(t) \\approx 119.16(1.0709)^t$. The yearly growth factor is $b \\approx 1.0709$, so the value increases by about $7.1\\%$ per year. The five-year factor is $b^5 \\approx 1.408$, a $40.8\\%$ increase per table step; $107.1\\%$ reads the factor $b$ itself as the percent increase, and $17.3$ is the slope of a linear regression in dollars per year.',
    optionExplanations: [
      '$17.3$ is the slope of a linear regression, in dollars per year, not a percent change; the data grow by a roughly constant factor, not a constant amount.',
      '$107.1\\%$ is the growth factor $b \\approx 1.071$ written as a percent. The percent increase is $b - 1 = 0.071$, that is $7.1\\%$.',
      '$40.8\\%$ is the increase over each five-year table step ($b^5 - 1$), not per year.',
      'The regression base $b \\approx 1.0709$ means each year the value is multiplied by $1.0709$: a $7.1\\%$ annual increase.',
    ],
  },
  {
    type: 'mcq',
    topic: 'exponential-logarithmic',
    lesson: 'exponential-logarithmic-modeling-precalc',
    ced: '2.6',
    stimulus: COLLECTIBLE,
    question: 'According to the exponential regression model, what is the predicted value of the toy $25$ years after it was first sold?',
    options: ['$\\$524.50$', '$\\$660.02$', '$\\$610.00$', '$\\$1000.00$'],
    correctAnswer: 1,
    explanation:
      'With $V(t) \\approx 119.16(1.0709)^t$, $V(25) \\approx 119.16(1.0709)^{25} \\approx 660.02$ dollars. A linear regression ($V \\approx 17.3t + 92.0$) predicts only about $524.50$, because it cannot keep up with the growing rate of change in the data; $610$ extends the last table difference ($140$) once more.',
    optionExplanations: [
      '$524.50$ is the linear regression prediction. The differences in the table ($45, 75, 90, 140$) grow, so a linear model underestimates future values.',
      'The exponential regression evaluated at $t = 25$ gives about $660.02$ dollars.',
      '$610 = 470 + 140$ repeats the last five-year increase; the exponential model multiplies by $b^5 \\approx 1.408$ instead, giving about $660$.',
      'The model reaches $1000$ dollars at $t \\approx 31$, not at $t = 25$.',
    ],
  },
  {
    type: 'mcq',
    topic: 'exponential-logarithmic',
    lesson: 'exponential-logarithmic-modeling-precalc',
    ced: '2.14',
    question: 'The time, in minutes, that a worker takes to assemble one unit after having assembled $n$ units is modeled by $T(n) = 48 - 9.5\\ln n$ for $1 \\le n \\le 100$. According to the model, after approximately how many units does the assembly time first drop to $20$ minutes?',
    options: ['$n \\approx 19.1$', '$n \\approx 2.9$', '$n \\approx 7.2$', '$n \\approx 155.6$'],
    correctAnswer: 0,
    explanation:
      'Solve $48 - 9.5\\ln n = 20$: $\\ln n = \\dfrac{28}{9.5} \\approx 2.947$, so $n = e^{2.947} \\approx 19.1$ units. The value $2.9$ is $\\ln n$, not $n$; $155.6$ comes from solving $9.5\\ln n = 48$, as if the target time were $0$.',
    optionExplanations: [
      '$\\ln n = \\frac{48 - 20}{9.5} \\approx 2.947$ and $n = e^{2.947} \\approx 19.1$; graphing $y = T(n)$ with $y = 20$ confirms.',
      '$2.9$ is approximately $\\ln n$; the model asks for $n$, which is $e^{2.947}$.',
      '$7.2$ is about $48 \\div 9.5 - \\ln$-free arithmetic ($\\frac{68}{9.5}$): it does not undo the logarithm.',
      '$155.6 = e^{48/9.5}$ solves $T(n) = 0$, not $T(n) = 20$.',
    ],
  },
  {
    type: 'mcq',
    topic: 'exponential-logarithmic',
    lesson: 'exponential-functions-precalc',
    ced: '2.5',
    question: 'A radioactive isotope has a half-life of $5730$ years. To the nearest tenth of a percent, what percent of a sample of the isotope remains after $2000$ years?',
    options: ['$34.9\\%$', '$21.5\\%$', '$65.1\\%$', '$78.5\\%$'],
    correctAnswer: 3,
    explanation:
      'With half-life $5730$ years, the fraction remaining after $t$ years is $\\left(\\frac{1}{2}\\right)^{t/5730}$. At $t = 2000$: $\\left(\\frac{1}{2}\\right)^{2000/5730} \\approx 0.785$, so about $78.5\\%$ remains. The exponent $\\frac{2000}{5730} \\approx 0.349$ is the number of half-lives elapsed, not the fraction remaining, and $21.5\\%$ is the fraction that has decayed.',
    optionExplanations: [
      '$34.9\\%$ is $\\frac{2000}{5730}$, the number of half-lives that have elapsed, not the fraction of the sample remaining.',
      '$21.5\\%$ is the percent that has decayed, $100\\% - 78.5\\%$.',
      '$65.1\\%$ assumes a linear loss of $\\frac{2000}{5730}$ of the sample; exponential decay loses less than that in the first part of a half-life.',
      '$\\left(\\frac{1}{2}\\right)^{2000/5730} \\approx 0.785$: about $78.5\\%$ of the sample remains.',
    ],
  },
  {
    type: 'mcq',
    topic: 'exponential-logarithmic',
    lesson: 'logarithmic-functions-precalc',
    ced: '2.13',
    question: 'What is the greatest solution of the equation $2^{x} = 6x$?',
    options: ['$x \\approx 4.868$', '$x \\approx 0.190$', '$x \\approx 2.585$', '$x \\approx 5.000$'],
    correctAnswer: 0,
    explanation:
      'Graph $y = 2^x$ and $y = 6x$. They intersect twice: near $x \\approx 0.190$, where the line first overtakes the curve, and near $x \\approx 4.868$, where the exponential catches up and passes the line for good. The greatest solution is $4.868$. The value $2.585 = \\log_2 6$ solves $2^x = 6$, not $2^x = 6x$.',
    optionExplanations: [
      'The second intersection of $y = 2^x$ and $y = 6x$ is at $x \\approx 4.868$ (check: $2^{4.868} \\approx 29.2 \\approx 6 \\cdot 4.868$).',
      '$0.190$ is the smaller solution, where the line $y = 6x$ first crosses above the curve.',
      '$2.585 = \\log_2 6$ solves $2^x = 6$; the right side here is $6x$, not $6$.',
      'At $x = 5$, $2^5 = 32$ but $6 \\cdot 5 = 30$; the curve is already above the line, so the crossing is a little before $5$.',
    ],
  },

  /* ---- Unit 3 (4) ---- */
  {
    type: 'mcq',
    topic: 'trigonometric-functions',
    lesson: 'graphing-trig-functions',
    ced: '3.7',
    question: 'The average monthly temperature, in degrees Fahrenheit, in a city is modeled by $T(m) = 61 - 23\\cos\\left(\\dfrac{\\pi}{6}(m - 1)\\right)$, where $m = 1$ is January. What is the average rate of change of $T$, in degrees Fahrenheit per month, from $m = 2$ to $m = 5$?',
    options: ['$31.42$', '$10.47$', '$7.67$', '$24.17$'],
    correctAnswer: 1,
    explanation:
      '$T(2) = 61 - 23\\cos\\frac{\\pi}{6} \\approx 41.08$ and $T(5) = 61 - 23\\cos\\frac{2\\pi}{3} = 61 + 11.5 = 72.5$. The average rate of change is $\\dfrac{72.5 - 41.08}{5 - 2} \\approx 10.47$ degrees per month. The value $31.42$ is the change in temperature without dividing by $3$ months.',
    optionExplanations: [
      '$31.42$ is $T(5) - T(2)$, the total change; the average rate of change divides it by the $3$ months elapsed.',
      '$\\frac{T(5) - T(2)}{5 - 2} = \\frac{72.5 - 41.08}{3} \\approx 10.47$ °F per month.',
      '$7.67 = 23 \\div 3$ divides the amplitude by the number of months, which is not a rate of change of $T$.',
      '$24.17$ comes from a degree-mode evaluation of the cosines; the model uses radians.',
    ],
  },
  {
    type: 'mcq',
    topic: 'trigonometric-functions',
    lesson: 'solving-trig-equations',
    ced: '3.10',
    question: 'What is the least positive solution of the equation $\\sin x = x - 1$?',
    options: ['$x \\approx 1.935$', '$x \\approx 0.841$', '$x \\approx 1.000$', '$x \\approx 2.571$'],
    correctAnswer: 0,
    explanation:
      'Graph $y = \\sin x$ and $y = x - 1$ in radian mode. The line, which passes through $(1, 0)$ with slope $1$, crosses the sine curve exactly once, at $x \\approx 1.935$ (check: $\\sin 1.935 \\approx 0.935 = 1.935 - 1$). There are no other solutions because the line exceeds $1$ for $x > 2$ and is below $-1$ for $x < 0$.',
    optionExplanations: [
      'The only intersection of $y = \\sin x$ and $y = x - 1$ is at $x \\approx 1.935$.',
      '$0.841 = \\sin 1$ is the value of the sine at $x = 1$, not a solution; at $x = 1$ the right side is $0$.',
      'At $x = 1$, $\\sin 1 \\approx 0.841$ while $x - 1 = 0$. The line is below the curve there, and crosses it later.',
      '$2.571$ comes from a degree-mode or an $\\arcsin$ misuse; at $x = 2.571$, $\\sin x \\approx 0.540$ but $x - 1 = 1.571$.',
    ],
  },
  {
    type: 'mcq',
    topic: 'trigonometric-functions',
    lesson: 'polar-coordinates-precalc',
    ced: '3.13',
    question: 'The polar function $r = f(\\theta)$ is given by $f(\\theta) = 3 + 2\\cos\\theta$. What is the $x$-coordinate of the point on the graph of $f$ at $\\theta = 2.5$ radians?',
    options: ['$0.836$', '$1.398$', '$-1.120$', '$-2.403$'],
    correctAnswer: 2,
    explanation:
      'At $\\theta = 2.5$, $r = 3 + 2\\cos 2.5 \\approx 3 - 1.602 = 1.398$. The $x$-coordinate is $r\\cos\\theta \\approx 1.398 \\cdot (-0.801) \\approx -1.120$; the $y$-coordinate is $r\\sin\\theta \\approx 0.836$. The point is in Quadrant II, as expected for $\\frac{\\pi}{2} < 2.5 < \\pi$ with $r > 0$.',
    optionExplanations: [
      '$0.836$ is the $y$-coordinate, $r\\sin\\theta$.',
      '$1.398$ is the value of $r$ itself, the distance from the origin, not the $x$-coordinate.',
      '$x = r\\cos\\theta = (3 + 2\\cos 2.5)\\cos 2.5 \\approx -1.120$.',
      '$-2.403 = 3\\cos 2.5$ leaves out the $2\\cos\\theta$ part of $r$ when converting.',
    ],
  },
  {
    type: 'mcq',
    topic: 'trigonometric-functions',
    lesson: 'inverse-trig-functions-precalc',
    ced: '3.9',
    question: 'A camera on the ground is $40$ feet from the base of a vertical launch tower. When a model rocket is $95$ feet above the ground, what is the angle of elevation, in radians, from the camera to the rocket?',
    options: ['$0.399$', '$1.172$', '$0.435$', '$67.166$'],
    correctAnswer: 1,
    explanation:
      'The height $95$ is opposite the angle of elevation $\\theta$ and the ground distance $40$ is adjacent, so $\\tan\\theta = \\dfrac{95}{40}$ and $\\theta = \\arctan\\left(\\dfrac{95}{40}\\right) \\approx 1.172$ radians (about $67.2°$). Inverting the ratio gives $\\arctan\\left(\\frac{40}{95}\\right) \\approx 0.399$, the angle at the rocket, not at the camera.',
    optionExplanations: [
      '$0.399 = \\arctan\\left(\\frac{40}{95}\\right)$ is the angle between the line of sight and the vertical at the rocket, the complement of the angle of elevation.',
      'Opposite $95$, adjacent $40$: $\\theta = \\arctan\\left(\\frac{95}{40}\\right) \\approx 1.172$ radians.',
      '$0.435 = \\arcsin\\left(\\frac{40}{95}\\right)$ treats $95$ as the hypotenuse, but $95$ feet is the vertical height, a leg of the triangle.',
      '$67.166$ is the angle in degrees; the question asks for radians.',
    ],
  },
]
