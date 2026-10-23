import type { MCQItem } from '@/components/FullLengthPracticeExam'

/**
 * AP Precalculus practice exam, form 2: 42 MCQs (May 2027 Section I).
 *   Unit 1 Polynomial and Rational Functions 14 (Part A 10, Part B 4)
 *   Unit 2 Exponential and Logarithmic Functions 14 (Part A 9, Part B 5)
 *   Unit 3 Trigonometric and Polar Functions 14 (Part A 10, Part B 4)
 * Part A (Q1–Q29): no calculator, 65 minutes. Part B (Q30–Q42): graphing calculator
 * required, 40 minutes; every Part B item is calculator-active (regression, graphing to
 * solve, or decimal evaluation). The runner splits the parts by position, so Part B items
 * must stay in positions 30–42.
 * Sets that share a stimulus are consecutive: Q1–Q2 (table of g), Q7–Q9 (rational r),
 * Q12–Q13 (table of f), Q22–Q23 (sinusoid), Q30–Q31 (ball height), Q34–Q35 (app downloads).
 * `topic` is the CED unit slug the checker and the review page read; `lesson`/`ced` name the
 * canonical lesson slug (precalc-final PLAN.md) and CED topic each item drills.
 */

const TABLE_G =
  'The table gives values of the function $g$ at selected values of $x$.\n\n' +
  '| $x$ | 0 | 1 | 2 | 3 | 4 |\n|---|---|---|---|---|---|\n' +
  '| $g(x)$ | 5 | 8 | 13 | 20 | 29 |'

const RATIONAL_R = 'The function $r$ is given by $r(x) = \\dfrac{(x - 1)(x + 4)}{(x + 4)(x - 5)^2}$.'

const TABLE_F =
  'The table gives values of the function $f$ at selected values of $x$.\n\n' +
  '| $x$ | 2 | 4 | 6 | 8 |\n|---|---|---|---|---|\n' +
  '| $f(x)$ | 54 | 18 | 6 | 2 |'

const SINUSOID =
  'The graph of a sinusoidal function $s$ has a maximum at the point $(1, 7)$, and the next minimum to the right of that maximum is at the point $(4, -1)$.'

const BALL =
  'A ball is thrown upward from a balcony. The table gives the height $h$ of the ball, in meters above the ground, at selected times $t$, in seconds after it is thrown.\n\n' +
  '| $t$ (seconds) | 0 | 0.5 | 1 | 1.5 | 2 |\n|---|---|---|---|---|---|\n' +
  '| $h$ (meters) | 1.2 | 6.0 | 8.6 | 8.8 | 6.3 |'

const DOWNLOADS =
  'The table gives the total number of downloads $D$ of a new app, in thousands, $t$ weeks after its release.\n\n' +
  '| $t$ (weeks) | 0 | 2 | 4 | 6 | 8 |\n|---|---|---|---|---|---|\n' +
  '| $D$ (thousands) | 1.5 | 2.6 | 4.3 | 7.4 | 12.1 |'

export const MCQS: MCQItem[] = [
  /* ============== PART A — NO CALCULATOR (Q1–Q29) ============== */

  /* ---- Unit 1 (10) ---- */
  {
    type: 'mcq',
    topic: 'polynomial-rational-functions',
    lesson: 'rates-of-change-precalc',
    ced: '1.2',
    stimulus: TABLE_G,
    question: 'What is the average rate of change of $g$ over the interval $1 \\le x \\le 4$?',
    options: ['$21$', '$\\dfrac{21}{4}$', '$\\dfrac{29}{4}$', '$7$'],
    correctAnswer: 3,
    explanation:
      'The average rate of change over $[1, 4]$ is $\\dfrac{g(4) - g(1)}{4 - 1} = \\dfrac{29 - 8}{3} = 7$. The value $21$ is the change in $g$ without dividing by the length of the interval, $\\frac{21}{4}$ divides by the right endpoint $4$ instead of by the interval length $3$, and $\\frac{29}{4}$ divides an output by an input.',
    optionExplanations: [
      'This is $g(4) - g(1) = 21$, the total change in $g$. An average rate of change divides that change by the length of the interval, $3$.',
      'This divides the change $21$ by $4$, the right endpoint, instead of by the length of the interval, $4 - 1 = 3$.',
      'This divides the output $g(4) = 29$ by the input $4$. A rate of change compares the change in output to the change in input, not an output to an input.',
      '$\\dfrac{g(4) - g(1)}{4 - 1} = \\dfrac{29 - 8}{3} = 7$: the change in output divided by the change in input over the interval.',
    ],
  },
  {
    type: 'mcq',
    topic: 'polynomial-rational-functions',
    lesson: 'function-modeling-precalc',
    ced: '1.3',
    stimulus: TABLE_G,
    question: 'Based on the table, which type of function best models $g$, and why?',
    options: [
      'Linear, because the input values increase by the same amount each time',
      'Quadratic, because the differences between consecutive output values are themselves increasing by a constant amount',
      'Exponential, because the output values increase over every interval',
      'Quadratic, because the output values are all odd numbers that increase',
    ],
    correctAnswer: 1,
    explanation:
      'Over equal input steps of $1$ the outputs change by $3, 5, 7, 9$, so the average rates of change are not constant (not linear) but change by a constant $2$ each step, which is the signature of a quadratic function. The ratios $\\frac{8}{5}, \\frac{13}{8}, \\dots$ are not constant, so $g$ is not exponential.',
    optionExplanations: [
      'Equal input steps are a property of how the table was built, not of $g$. A linear function would need equal output changes, and the changes $3, 5, 7, 9$ are not equal.',
      'The successive differences $3, 5, 7, 9$ grow by the constant $2$: the rate of change changes at a constant rate, which is exactly how a quadratic function behaves.',
      'Increasing outputs do not identify a function type; linear, quadratic and exponential functions can all increase. Exponential growth needs constant ratios, and $\\frac{8}{5} \\ne \\frac{13}{8}$.',
      'The parity of the outputs is a coincidence of these values and says nothing about the type of function. The reason must describe how the rate of change behaves.',
    ],
  },
  {
    type: 'mcq',
    topic: 'polynomial-rational-functions',
    lesson: 'polynomial-functions-precalc',
    ced: '1.6',
    question: 'The polynomial function $p$ is given by $p(x) = -2(x + 1)^2(x - 3)(x^2 + 1)$. Which of the following describes the end behavior of $p$?',
    options: [
      '$\\displaystyle\\lim_{x \\to -\\infty} p(x) = -\\infty$ and $\\displaystyle\\lim_{x \\to \\infty} p(x) = -\\infty$',
      '$\\displaystyle\\lim_{x \\to -\\infty} p(x) = -\\infty$ and $\\displaystyle\\lim_{x \\to \\infty} p(x) = \\infty$',
      '$\\displaystyle\\lim_{x \\to -\\infty} p(x) = \\infty$ and $\\displaystyle\\lim_{x \\to \\infty} p(x) = -\\infty$',
      '$\\displaystyle\\lim_{x \\to -\\infty} p(x) = \\infty$ and $\\displaystyle\\lim_{x \\to \\infty} p(x) = \\infty$',
    ],
    correctAnswer: 2,
    explanation:
      'The degrees of the factors add to $2 + 1 + 2 = 5$, so $p$ has odd degree, and the leading coefficient is $-2 \\cdot 1 \\cdot 1 \\cdot 1 = -2 < 0$. An odd-degree polynomial with a negative leading coefficient rises to the left and falls to the right: $p(x) \\to \\infty$ as $x \\to -\\infty$ and $p(x) \\to -\\infty$ as $x \\to \\infty$.',
    optionExplanations: [
      'Both ends falling is the end behavior of an even-degree polynomial with a negative leading coefficient. Here the degree is $2 + 1 + 2 = 5$, which is odd, so the two ends go in opposite directions.',
      'This is the end behavior of an odd-degree polynomial with a positive leading coefficient, such as $x^5$. The factor $-2$ reflects it: the right end falls.',
      'Degree $5$ (odd) with leading coefficient $-2$ (negative): the graph behaves like $-2x^5$, rising to the left and falling to the right.',
      'Both ends rising is the end behavior of an even-degree polynomial with a positive leading coefficient. The degree here is odd and the leading coefficient is negative.',
    ],
  },
  {
    type: 'mcq',
    topic: 'polynomial-rational-functions',
    lesson: 'polynomial-functions-precalc',
    ced: '1.5',
    question: 'The graph of a polynomial function $p$ has exactly three distinct $x$-intercepts, and $p(x) \\to \\infty$ as $x \\to -\\infty$ and as $x \\to \\infty$. What is the least possible degree of $p$?',
    options: ['$3$', '$4$', '$2$', '$6$'],
    correctAnswer: 1,
    explanation:
      'Matching end behavior in both directions requires even degree, and three distinct real zeros require degree at least $3$, so the degree is at least $4$. Degree $4$ is possible when one of the three zeros has multiplicity $2$, for example $p(x) = (x + 1)^2(x - 1)(x - 2)$.',
    optionExplanations: [
      'A degree-$3$ polynomial can have three real zeros, but its two ends always go in opposite directions, so it cannot have $p(x) \\to \\infty$ on both sides.',
      'Even degree gives matching ends, and three distinct zeros need at least three linear factors; degree $4$ works when one zero is a double zero, as in $(x + 1)^2(x - 1)(x - 2)$.',
      'A quadratic has the right end behavior when its leading coefficient is positive, but it has at most two real zeros, not three.',
      'Degree $6$ is possible but not the least: a degree-$4$ polynomial with one double zero already has three distinct $x$-intercepts and both ends rising.',
    ],
  },
  {
    type: 'mcq',
    topic: 'polynomial-rational-functions',
    lesson: 'fundamental-theorem-algebra',
    ced: '1.5',
    question: 'The polynomial function $p$ has degree $3$, real coefficients, and leading coefficient $1$. If $p(1 + i) = 0$ and $p(2) = 0$, which of the following is an expression for $p(x)$?',
    options: [
      '$(x - 2)(x^2 + 2x + 2)$',
      '$(x - 2)(x^2 - 2x - 2)$',
      '$(x - 2)(x^2 + 2)$',
      '$(x - 2)(x^2 - 2x + 2)$',
    ],
    correctAnswer: 3,
    explanation:
      'Because the coefficients are real, non-real zeros come in conjugate pairs, so $1 - i$ is also a zero. The quadratic factor is $(x - (1 + i))(x - (1 - i)) = (x - 1)^2 - i^2 = x^2 - 2x + 2$, and the real zero $2$ gives the factor $x - 2$.',
    optionExplanations: [
      'The quadratic $x^2 + 2x + 2 = (x + 1)^2 + 1$ has zeros $-1 \\pm i$, not $1 \\pm i$. The sign of the middle term comes from $-(\\text{sum of the zeros}) = -2$.',
      'The quadratic $x^2 - 2x - 2$ has real zeros $1 \\pm \\sqrt{3}$, because its constant term is the product $(1 + i)(1 - i) = 2$, not $-2$.',
      'The quadratic $x^2 + 2$ has zeros $\\pm i\\sqrt{2}$. It would be right if the given non-real zero were $i\\sqrt{2}$, but $1 + i$ has a real part, so the quadratic needs a middle term.',
      'The conjugate $1 - i$ is also a zero, and $(x - (1 + i))(x - (1 - i)) = (x - 1)^2 + 1 = x^2 - 2x + 2$; with the factor $x - 2$ this has degree $3$ and leading coefficient $1$.',
    ],
  },
  {
    type: 'mcq',
    topic: 'polynomial-rational-functions',
    lesson: 'polynomial-division-remainder-theorem',
    ced: '1.11',
    question: 'Which of the following expressions is equivalent to $\\dfrac{2x^3 - 3x^2 + 4x - 5}{x^2 + 1}$ for all $x$?',
    options: [
      '$2x - 3 + \\dfrac{2x - 2}{x^2 + 1}$',
      '$2x - 3 + \\dfrac{2x - 8}{x^2 + 1}$',
      '$2x + 3 + \\dfrac{2x - 2}{x^2 + 1}$',
      '$2x - 3 - \\dfrac{2}{x^2 + 1}$',
    ],
    correctAnswer: 0,
    explanation:
      'Dividing: $2x(x^2 + 1) = 2x^3 + 2x$, leaving $-3x^2 + 2x - 5$; then $-3(x^2 + 1) = -3x^2 - 3$, leaving $2x - 2$. So the quotient is $2x - 3$ and the remainder is $2x - 2$: $\\dfrac{2x^3 - 3x^2 + 4x - 5}{x^2 + 1} = 2x - 3 + \\dfrac{2x - 2}{x^2 + 1}$. Check: $(2x - 3)(x^2 + 1) + 2x - 2 = 2x^3 - 3x^2 + 4x - 5$.',
    optionExplanations: [
      'Quotient $2x - 3$, remainder $2x - 2$: multiplying back, $(2x - 3)(x^2 + 1) + (2x - 2) = 2x^3 - 3x^2 + 2x - 3 + 2x - 2 = 2x^3 - 3x^2 + 4x - 5$.',
      'A remainder of $2x - 8$ comes from subtracting $-3$ from $-5$ as $-5 - 3 = -8$; the second subtraction is $-5 - (-3) = -2$.',
      'A quotient of $2x + 3$ would require $+3x^2$ after the first subtraction, but $2x^3 - 3x^2 - (2x^3 + 2x)$ leaves $-3x^2$, so the next term is $-3$.',
      'This drops the $x$ term of the remainder. The remainder has degree less than $2$ but need not be a constant; here it is $2x - 2$.',
    ],
  },
  {
    type: 'mcq',
    topic: 'polynomial-rational-functions',
    lesson: 'rational-functions-precalc',
    ced: '1.9',
    stimulus: RATIONAL_R,
    question: 'At which of the following values of $x$ does the graph of $r$ have a vertical asymptote?',
    options: ['$x = -4$ and $x = 5$', '$x = 5$ only', '$x = -4$ only', '$x = 1$ and $x = 5$'],
    correctAnswer: 1,
    explanation:
      'The factor $x + 4$ appears once in the numerator and once in the denominator, so $x = -4$ is a hole, not an asymptote. The factor $(x - 5)^2$ appears only in the denominator, so the graph has a vertical asymptote at $x = 5$. The zero $x = 1$ comes from the numerator.',
    optionExplanations: [
      'At $x = -4$ the numerator and denominator are both zero and the common factor $x + 4$ has the same multiplicity in each, so the graph has a hole there, not an asymptote.',
      'Only $x = 5$ makes the denominator zero without a matching numerator factor, so it is the only vertical asymptote; $x = -4$ is a hole.',
      'The common factor $x + 4$ produces a hole at $x = -4$, while $(x - 5)^2$ remains in the denominator and produces the asymptote at $x = 5$.',
      'The factor $x - 1$ is in the numerator, so $x = 1$ is a zero of $r$ (the graph crosses the $x$-axis there), not a vertical asymptote.',
    ],
  },
  {
    type: 'mcq',
    topic: 'polynomial-rational-functions',
    lesson: 'rational-functions-precalc',
    ced: '1.9',
    stimulus: RATIONAL_R,
    question: 'Which of the following describes the behavior of $r$ near $x = 5$?',
    options: [
      '$\\displaystyle\\lim_{x \\to 5^-} r(x) = -\\infty$ and $\\displaystyle\\lim_{x \\to 5^+} r(x) = \\infty$',
      '$\\displaystyle\\lim_{x \\to 5^-} r(x) = \\infty$ and $\\displaystyle\\lim_{x \\to 5^+} r(x) = -\\infty$',
      '$\\displaystyle\\lim_{x \\to 5^-} r(x) = -\\infty$ and $\\displaystyle\\lim_{x \\to 5^+} r(x) = -\\infty$',
      '$\\displaystyle\\lim_{x \\to 5^-} r(x) = \\infty$ and $\\displaystyle\\lim_{x \\to 5^+} r(x) = \\infty$',
    ],
    correctAnswer: 3,
    explanation:
      'For $x \\ne -4$, $r(x) = \\dfrac{x - 1}{(x - 5)^2}$. Near $x = 5$ the numerator is close to $4$, which is positive, and $(x - 5)^2$ is positive on both sides of $5$ and approaches $0$. A positive quantity divided by a small positive quantity grows without bound, so $r(x) \\to \\infty$ from both sides.',
    optionExplanations: [
      'A sign change across the asymptote happens when the denominator factor has odd multiplicity. Here $(x - 5)^2$ is positive on both sides of $5$, so the two one-sided limits agree.',
      'The squared factor $(x - 5)^2$ never changes sign, so $r$ cannot go to $\\infty$ on one side and $-\\infty$ on the other.',
      'Near $x = 5$ the numerator $x - 1$ is about $4 > 0$ and $(x - 5)^2 > 0$, so $r$ is positive on both sides; it goes to $+\\infty$, not $-\\infty$.',
      'With $r(x) = \\frac{x - 1}{(x - 5)^2}$ near $5$, the numerator is near $4$ and the denominator is a small positive number on both sides, so both one-sided limits are $\\infty$.',
    ],
  },
  {
    type: 'mcq',
    topic: 'polynomial-rational-functions',
    lesson: 'rational-functions-precalc',
    ced: '1.7',
    stimulus: RATIONAL_R,
    question: 'Which of the following statements about the horizontal asymptote of the graph of $r$ is true?',
    options: [
      'The horizontal asymptote is $y = 0$, and the graph crosses it at $x = 1$.',
      'The horizontal asymptote is $y = 0$, and the graph never crosses or touches it.',
      'The horizontal asymptote is $y = 1$, and the graph crosses it at $x = -4$.',
      'There is no horizontal asymptote, because the numerator has degree $2$ before the expression is simplified.',
    ],
    correctAnswer: 0,
    explanation:
      'After the common factor cancels, $r(x) = \\dfrac{x - 1}{(x - 5)^2}$ has numerator degree $1$ and denominator degree $2$, so $r(x) \\to 0$ as $x \\to \\pm\\infty$ and $y = 0$ is the horizontal asymptote. A graph may cross its horizontal asymptote: $r(1) = 0$, so it crosses at $x = 1$.',
    optionExplanations: [
      'Denominator degree exceeds numerator degree, so $y = 0$ is the horizontal asymptote; and $r(1) = 0$, so the graph meets that line at $x = 1$ before approaching it again as $x \\to \\pm\\infty$.',
      'A horizontal asymptote describes end behavior only; the graph is free to cross it for finite $x$, and it does so at the zero $x = 1$.',
      'The horizontal asymptote is the ratio of leading coefficients only when the degrees are equal. In lowest terms the numerator has degree $1$ and the denominator degree $2$, so the asymptote is $y = 0$.',
      'A rational function has no horizontal asymptote when the numerator degree exceeds the denominator degree. Here the denominator has the greater degree ($3$ versus $2$ before cancelling, $2$ versus $1$ after).',
    ],
  },
  {
    type: 'mcq',
    topic: 'polynomial-rational-functions',
    lesson: 'transformations-precalc',
    ced: '1.12',
    question: 'The function $g$ is given by $g(x) = -f(2x) - 3$. Which of the following sequences of transformations maps the graph of $f$ onto the graph of $g$?',
    options: [
      'A horizontal dilation by a factor of $2$, a reflection over the $x$-axis, and a vertical translation of $3$ units down',
      'A horizontal dilation by a factor of $\\frac{1}{2}$, a reflection over the $y$-axis, and a vertical translation of $3$ units down',
      'A horizontal dilation by a factor of $\\frac{1}{2}$, a vertical translation of $3$ units down, and then a reflection over the $x$-axis',
      'A horizontal dilation by a factor of $\\frac{1}{2}$, a reflection over the $x$-axis, and then a vertical translation of $3$ units down',
    ],
    correctAnswer: 3,
    explanation:
      'Replacing $x$ with $2x$ compresses the graph horizontally by a factor of $\\frac{1}{2}$; the leading minus sign reflects the output over the $x$-axis; subtracting $3$ afterward moves the graph down $3$. Reflecting after the translation would give $-(f(2x) - 3) = -f(2x) + 3$ instead.',
    optionExplanations: [
      'Multiplying the input by $2$ halves every $x$-coordinate (a compression by $\\frac{1}{2}$), it does not double them. $f\\left(\\frac{x}{2}\\right)$ would be the dilation by $2$.',
      'The minus sign is applied to the output $f(2x)$, so the reflection is over the $x$-axis. A reflection over the $y$-axis would come from $f(-2x)$.',
      'Order matters: translating down $3$ and then reflecting over the $x$-axis gives $-(f(2x) - 3) = -f(2x) + 3$, which is a translation up, not down.',
      '$f(2x)$ is the compression by $\\frac{1}{2}$, $-f(2x)$ reflects over the $x$-axis, and $-f(2x) - 3$ then translates down $3$ units.',
    ],
  },

  /* ---- Unit 2 (9) ---- */
  {
    type: 'mcq',
    topic: 'exponential-logarithmic',
    lesson: 'sequences-series-precalc',
    ced: '2.1',
    question: 'In an arithmetic sequence, $a_3 = 11$ and $a_7 = 27$. Which of the following is an expression for the $n$th term $a_n$?',
    options: ['$a_n = 11 + 4(n - 1)$', '$a_n = 11 + \\dfrac{16}{3}(n - 3)$', '$a_n = 4n - 1$', '$a_n = -1 + 4(n - 1)$'],
    correctAnswer: 2,
    explanation:
      'From $a_3$ to $a_7$ is four steps of the common difference $d$: $4d = 27 - 11 = 16$, so $d = 4$. Then $a_n = a_3 + d(n - 3) = 11 + 4(n - 3) = 4n - 1$. Check: $a_3 = 11$ and $a_7 = 27$.',
    optionExplanations: [
      'This treats $11$ as the first term. It is $a_3$, so the formula built from it is $11 + 4(n - 3)$; this expression gives $a_3 = 19$, not $11$.',
      'This divides the change $16$ by $3$, the number of terms strictly between $a_3$ and $a_7$. There are $7 - 3 = 4$ steps between them, so $d = 4$.',
      '$d = \\frac{27 - 11}{7 - 3} = 4$ and $a_n = 11 + 4(n - 3) = 4n - 1$, which gives $a_3 = 11$ and $a_7 = 27$.',
      'This takes $a_1 = -1$ by subtracting $d$ three times from $a_3$; two steps back from $a_3 = 11$ gives $a_1 = 3$, so the formula should be $3 + 4(n - 1) = 4n - 1$.',
    ],
  },
  {
    type: 'mcq',
    topic: 'exponential-logarithmic',
    lesson: 'exponential-functions-precalc',
    ced: '2.2',
    stimulus: TABLE_F,
    question: 'Based on the table, which type of function best models $f$, and why?',
    options: [
      'Linear, because the output decreases over every interval of equal length',
      'Logarithmic, because the output values decrease more slowly as $x$ increases',
      'Exponential, because over consecutive input intervals of equal length the output is multiplied by the same factor',
      'Quadratic, because the differences between consecutive outputs, $-36$, $-12$ and $-4$, are not constant',
    ],
    correctAnswer: 2,
    explanation:
      'Each time $x$ increases by $2$, the output is multiplied by $\\frac{1}{3}$: $54 \\to 18 \\to 6 \\to 2$. A constant ratio over equal-length input intervals is the defining property of an exponential function. Linear needs constant differences, quadratic needs differences that change by a constant amount, and here the differences $-36, -12, -4$ do neither.',
    optionExplanations: [
      'Decreasing outputs do not make a function linear. A linear function changes by the same amount over equal intervals, but these outputs change by $-36$, then $-12$, then $-4$.',
      'Slowing decrease is also what exponential decay looks like. The deciding feature is the constant ratio $\\frac{1}{3}$ over equal input steps, which is exponential, not logarithmic.',
      'Over each input step of $2$, the output is multiplied by $\\frac{18}{54} = \\frac{6}{18} = \\frac{2}{6} = \\frac{1}{3}$. Proportional change over equal intervals is the signature of an exponential function.',
      'Non-constant differences rule out a linear model, but a quadratic would need those differences to change by a constant amount; $-36 \\to -12 \\to -4$ changes by $24$ and then $8$.',
    ],
  },
  {
    type: 'mcq',
    topic: 'exponential-logarithmic',
    lesson: 'exponential-functions-precalc',
    ced: '2.5',
    stimulus: TABLE_F,
    question: 'If the pattern in the table continues, what is the value of $f(10)$?',
    options: ['$\\dfrac{2}{3}$', '$0$', '$-2$', '$\\dfrac{1}{3}$'],
    correctAnswer: 0,
    explanation:
      'Every increase of $2$ in $x$ multiplies the output by $\\frac{1}{3}$, so $f(10) = f(8) \\cdot \\frac{1}{3} = \\frac{2}{3}$. Subtracting the last difference again would give $-2$, but the outputs change proportionally, not by a constant amount.',
    optionExplanations: [
      'Continuing the constant ratio: $f(10) = 2 \\cdot \\frac{1}{3} = \\frac{2}{3}$.',
      'An exponential function with a positive initial value never reaches $0$; the outputs keep shrinking by the factor $\\frac{1}{3}$ but stay positive.',
      'This subtracts the last difference, $-4$, again. The table changes by a constant factor, not a constant difference, so the next output is $2 \\cdot \\frac{1}{3}$, not $2 - 4$.',
      'This applies the factor $\\frac{1}{3}$ but forgets to multiply it by the current value $f(8) = 2$; the next output is $2 \\cdot \\frac{1}{3} = \\frac{2}{3}$.',
    ],
  },
  {
    type: 'mcq',
    topic: 'exponential-logarithmic',
    lesson: 'exponential-functions-precalc',
    ced: '2.4',
    question: 'Which of the following expressions is equivalent to $3 \\cdot 2^{x + 3}$?',
    options: ['$6 \\cdot 2^x$', '$24 \\cdot 2^x$', '$3 \\cdot 8^x$', '$9 \\cdot 2^x$'],
    correctAnswer: 1,
    explanation:
      'By the product property of exponents, $2^{x + 3} = 2^x \\cdot 2^3 = 8 \\cdot 2^x$, so $3 \\cdot 2^{x + 3} = 24 \\cdot 2^x$. A horizontal translation of an exponential function is equivalent to a vertical dilation.',
    optionExplanations: [
      'This treats the $+3$ in the exponent as adding $3$ to the coefficient. The exponent rule gives a factor of $2^3 = 8$, not of $2$.',
      '$2^{x + 3} = 2^x \\cdot 2^3$, so $3 \\cdot 2^{x + 3} = 3 \\cdot 8 \\cdot 2^x = 24 \\cdot 2^x$.',
      '$8^x = 2^{3x}$, which is not $2^{x + 3}$. Adding to the exponent multiplies by a constant; multiplying the exponent changes the base.',
      'This multiplies the coefficient $3$ by $3$ instead of by $2^3 = 8$. The factor that comes out of the exponent is the base raised to the $3$.',
    ],
  },
  {
    type: 'mcq',
    topic: 'exponential-logarithmic',
    lesson: 'function-composition-inverses-precalc',
    ced: '2.7',
    question: 'The functions $f$ and $g$ are given by $f(x) = \\sqrt{x - 1}$ and $g(x) = x^2 + 3$. What is the domain of the composite function $f \\circ g$, where $(f \\circ g)(x) = f(g(x))$?',
    options: [
      'All real numbers greater than or equal to $1$',
      'All real numbers greater than or equal to $\\sqrt{2}$',
      'All real numbers greater than or equal to $-2$',
      'All real numbers',
    ],
    correctAnswer: 3,
    explanation:
      '$(f \\circ g)(x) = \\sqrt{(x^2 + 3) - 1} = \\sqrt{x^2 + 2}$. The domain of $g$ is all real numbers, and every output $g(x) = x^2 + 3 \\ge 3$ lies in the domain of $f$ (which needs an input of at least $1$), so $f \\circ g$ is defined for every real $x$.',
    optionExplanations: [
      '$x \\ge 1$ is the domain of $f$ itself, and of $g \\circ f$. In $f \\circ g$ the input to $f$ is $g(x) = x^2 + 3$, which is always at least $3$, so no restriction on $x$ is needed.',
      'This solves $x^2 + 2 \\ge 4$ or misreads the radicand. The radicand $x^2 + 2$ is positive for every $x$, so there is no restriction.',
      'This solves $x + 3 \\ge 1$, treating $g$ as if it were $x + 3$. With $g(x) = x^2 + 3$ the radicand is $x^2 + 2$, which is never negative.',
      'Every real $x$ is in the domain of $g$, and $g(x) = x^2 + 3 \\ge 3 \\ge 1$ is always in the domain of $f$, so $(f \\circ g)(x) = \\sqrt{x^2 + 2}$ is defined for all real $x$.',
    ],
  },
  {
    type: 'mcq',
    topic: 'exponential-logarithmic',
    lesson: 'function-composition-inverses-precalc',
    ced: '2.8',
    question: 'The function $f$ is given by $f(x) = \\dfrac{2x + 1}{x - 3}$ for $x \\ne 3$. Which of the following is an expression for $f^{-1}(x)$?',
    options: [
      '$f^{-1}(x) = \\dfrac{x - 3}{2x + 1}$',
      '$f^{-1}(x) = \\dfrac{3x + 1}{x - 2}$',
      '$f^{-1}(x) = \\dfrac{3x - 1}{x + 2}$',
      '$f^{-1}(x) = \\dfrac{x + 1}{2x - 3}$',
    ],
    correctAnswer: 1,
    explanation:
      'Set $y = \\dfrac{2x + 1}{x - 3}$ and solve for $x$: $y(x - 3) = 2x + 1$, so $xy - 2x = 3y + 1$, $x(y - 2) = 3y + 1$, and $x = \\dfrac{3y + 1}{y - 2}$. Swapping the variable names gives $f^{-1}(x) = \\dfrac{3x + 1}{x - 2}$. Check: $f(4) = 9$ and $f^{-1}(9) = \\frac{28}{7} = 4$.',
    optionExplanations: [
      'This is the reciprocal $\\frac{1}{f(x)}$, not the inverse function. An inverse undoes the input-output pairs; the reciprocal just flips the fraction.',
      'Solving $y = \\frac{2x + 1}{x - 3}$ for $x$ gives $x = \\frac{3y + 1}{y - 2}$, so $f^{-1}(x) = \\frac{3x + 1}{x - 2}$; it sends $f(4) = 9$ back to $4$.',
      'The signs are wrong: this comes from $y(x - 3) = 2x + 1 \\Rightarrow x(y + 2) = 3y - 1$, an error in moving the $2x$ and $3y$ terms. Checking $f(4) = 9$: $\\frac{27 - 1}{11} \\ne 4$.',
      'This swaps the numbers in the wrong places rather than solving for $x$. Checking with $f(4) = 9$: $\\frac{9 + 1}{18 - 3} = \\frac{2}{3} \\ne 4$.',
    ],
  },
  {
    type: 'mcq',
    topic: 'exponential-logarithmic',
    lesson: 'logarithmic-functions-precalc',
    ced: '2.12',
    question: 'For positive $x$, $y$ and $z$, which of the following is equivalent to $\\log_b\\left(\\dfrac{x^3\\sqrt{y}}{z^2}\\right)$?',
    options: [
      '$3\\log_b x + \\frac{1}{2}\\log_b y - 2\\log_b z$',
      '$3\\log_b x + 2\\log_b y - 2\\log_b z$',
      '$\\dfrac{3\\log_b x \\cdot \\frac{1}{2}\\log_b y}{2\\log_b z}$',
      '$3\\log_b x + \\frac{1}{2}\\log_b y + 2\\log_b z$',
    ],
    correctAnswer: 0,
    explanation:
      'The logarithm of a product is the sum of the logarithms, the logarithm of a quotient is the difference, and $\\log_b(u^n) = n\\log_b u$. With $\\sqrt{y} = y^{1/2}$: $\\log_b(x^3) + \\log_b(y^{1/2}) - \\log_b(z^2) = 3\\log_b x + \\frac{1}{2}\\log_b y - 2\\log_b z$.',
    optionExplanations: [
      'Product $\\to$ sum, quotient $\\to$ difference, and the exponents $3$, $\\frac{1}{2}$ (from the square root) and $2$ become coefficients.',
      'A square root is the power $\\frac{1}{2}$, so $\\log_b\\sqrt{y} = \\frac{1}{2}\\log_b y$, not $2\\log_b y$.',
      'The properties turn products into sums and quotients into differences of logarithms; they never produce a product or quotient of logarithms.',
      'Dividing by $z^2$ subtracts $\\log_b(z^2) = 2\\log_b z$; it does not add it.',
    ],
  },
  {
    type: 'mcq',
    topic: 'exponential-logarithmic',
    lesson: 'logarithmic-functions-precalc',
    ced: '2.13',
    question: 'What are all real solutions of the equation $e^{2x} - 5e^{x} + 6 = 0$?',
    options: ['$x = 2$ and $x = 3$', '$x = \\ln 6$ only', '$x = \\ln 2$ only', '$x = \\ln 2$ and $x = \\ln 3$'],
    correctAnswer: 3,
    explanation:
      'Because $e^{2x} = (e^x)^2$, the equation is quadratic in $u = e^x$: $u^2 - 5u + 6 = (u - 2)(u - 3) = 0$, so $e^x = 2$ or $e^x = 3$. Both are positive, so both give solutions: $x = \\ln 2$ and $x = \\ln 3$.',
    optionExplanations: [
      '$2$ and $3$ are the values of $e^x$, not of $x$. Solving $e^x = 2$ and $e^x = 3$ requires a logarithm: $x = \\ln 2$ and $x = \\ln 3$.',
      'This adds the two values of $e^x$, or uses $\\ln 2 + \\ln 3 = \\ln 6$. The two solutions are separate values of $x$; $e^{\\ln 6} = 6$ does not satisfy $u^2 - 5u + 6 = 0$.',
      'Both factors of $(e^x - 2)(e^x - 3)$ give valid solutions, since $2$ and $3$ are both positive values for $e^x$. Dropping $e^x = 3$ loses the solution $x = \\ln 3$.',
      'With $u = e^x$, $u^2 - 5u + 6 = (u - 2)(u - 3) = 0$ gives $e^x = 2$ or $e^x = 3$, so $x = \\ln 2$ or $x = \\ln 3$.',
    ],
  },
  {
    type: 'mcq',
    topic: 'exponential-logarithmic',
    lesson: 'exponential-logarithmic-modeling-precalc',
    ced: '2.15',
    question: 'A set of data $(x, y)$ is plotted on a semi-log plot with $\\log_{10} y$ on the vertical axis. The points lie on a line with slope $0.3$ and vertical intercept $1.2$. Which of the following is a model for $y$ as a function of $x$?',
    options: [
      '$y = 1.2 + 0.3x$',
      '$y = 1.2 \\cdot \\left(10^{0.3}\\right)^x$',
      '$y = 10^{1.2} \\cdot \\left(10^{0.3}\\right)^x$',
      '$y = 1.2 \\cdot (0.3)^x$',
    ],
    correctAnswer: 2,
    explanation:
      'The line is $\\log_{10} y = 0.3x + 1.2$. Rewriting in exponential form, $y = 10^{0.3x + 1.2} = 10^{1.2} \\cdot 10^{0.3x} = 10^{1.2}\\left(10^{0.3}\\right)^x$, an exponential model with initial value $10^{1.2} \\approx 15.8$ and growth factor $10^{0.3} \\approx 2$.',
    optionExplanations: [
      'This is the equation of the line in the transformed variables, $\\log_{10} y = 0.3x + 1.2$, not a model for $y$ itself. Undoing the logarithm turns the line into an exponential function.',
      'The vertical intercept $1.2$ is a value of $\\log_{10} y$, so the initial value of $y$ is $10^{1.2}$, not $1.2$.',
      'From $\\log_{10} y = 0.3x + 1.2$, $y = 10^{0.3x + 1.2} = 10^{1.2}\\cdot\\left(10^{0.3}\\right)^x$: a linear semi-log plot means $y$ is exponential in $x$.',
      'The slope $0.3$ is the exponent added per unit of $x$, so the growth factor is $10^{0.3}$, not $0.3$; and the initial value is $10^{1.2}$.',
    ],
  },

  /* ---- Unit 3 (10) ---- */
  {
    type: 'mcq',
    topic: 'trigonometric-functions',
    lesson: 'the-unit-circle',
    ced: '3.3',
    question: 'The angle $\\theta = \\dfrac{4\\pi}{3}$ is drawn in standard position. Using the coordinates of the point where its terminal ray meets the unit circle, what is $\\tan\\theta$?',
    options: ['$-\\sqrt{3}$', '$\\dfrac{\\sqrt{3}}{3}$', '$\\sqrt{3}$', '$-\\dfrac{\\sqrt{3}}{3}$'],
    correctAnswer: 2,
    explanation:
      '$\\frac{4\\pi}{3}$ is in Quadrant III with reference angle $\\frac{\\pi}{3}$. There $\\sin = -\\frac{\\sqrt{3}}{2}$ and $\\cos = -\\frac{1}{2}$, so $\\tan = \\dfrac{-\\sqrt{3}/2}{-1/2} = \\sqrt{3}$. Tangent is positive in Quadrant III because sine and cosine are both negative.',
    optionExplanations: [
      'Tangent is negative in Quadrants II and IV. In Quadrant III both $\\sin$ and $\\cos$ are negative, so their ratio is positive.',
      '$\\frac{\\sqrt{3}}{3}$ is $\\tan\\frac{\\pi}{6}$. The reference angle of $\\frac{4\\pi}{3}$ is $\\frac{\\pi}{3}$, whose tangent is $\\sqrt{3}$.',
      'Reference angle $\\frac{\\pi}{3}$ gives $\\tan = \\sqrt{3}$ in size, and Quadrant III (both coordinates negative) makes the tangent positive.',
      'This has the wrong reference angle and the wrong sign: $\\frac{4\\pi}{3}$ reduces to $\\frac{\\pi}{3}$, not $\\frac{\\pi}{6}$, and tangent is positive in Quadrant III.',
    ],
  },
  {
    type: 'mcq',
    topic: 'trigonometric-functions',
    lesson: 'trigonometric-functions-precalc',
    ced: '3.2',
    question: 'A point starts at $(3, 0)$ and moves counterclockwise along the circle $x^2 + y^2 = 9$ through an angle of $\\dfrac{5\\pi}{4}$ radians about the origin. What are the coordinates of the point\'s final position?',
    options: [
      '$\\left(-\\dfrac{3\\sqrt{2}}{2}, -\\dfrac{3\\sqrt{2}}{2}\\right)$',
      '$\\left(-\\dfrac{\\sqrt{2}}{2}, -\\dfrac{\\sqrt{2}}{2}\\right)$',
      '$\\left(\\dfrac{3\\sqrt{2}}{2}, -\\dfrac{3\\sqrt{2}}{2}\\right)$',
      '$\\left(-\\dfrac{3\\sqrt{2}}{2}, \\dfrac{3\\sqrt{2}}{2}\\right)$',
    ],
    correctAnswer: 0,
    explanation:
      'On a circle of radius $r$, an angle $\\theta$ in standard position ends at $(r\\cos\\theta, r\\sin\\theta)$. With $r = 3$ and $\\theta = \\frac{5\\pi}{4}$ (Quadrant III), $\\cos\\theta = \\sin\\theta = -\\frac{\\sqrt{2}}{2}$, so the point is $\\left(-\\frac{3\\sqrt{2}}{2}, -\\frac{3\\sqrt{2}}{2}\\right)$.',
    optionExplanations: [
      '$(3\\cos\\frac{5\\pi}{4}, 3\\sin\\frac{5\\pi}{4})$ with both cosine and sine equal to $-\\frac{\\sqrt{2}}{2}$ in Quadrant III.',
      'These are the unit-circle coordinates. The circle has radius $3$, so each coordinate must be multiplied by $3$.',
      'A positive $x$-coordinate with a negative $y$-coordinate is Quadrant IV, which is the angle $\\frac{7\\pi}{4}$. The angle $\\frac{5\\pi}{4}$ is in Quadrant III.',
      'A negative $x$ with a positive $y$ is Quadrant II, the angle $\\frac{3\\pi}{4}$. At $\\frac{5\\pi}{4}$, past $\\pi$, both coordinates are negative.',
    ],
  },
  {
    type: 'mcq',
    topic: 'trigonometric-functions',
    lesson: 'graphing-trig-functions',
    ced: '3.6',
    stimulus: SINUSOID,
    question: 'Which of the following could be an expression for $s(x)$?',
    options: [
      '$s(x) = 4\\cos\\left(\\dfrac{\\pi}{3}(x - 1)\\right) + 3$',
      '$s(x) = 4\\cos\\left(\\dfrac{\\pi}{6}(x - 1)\\right) + 3$',
      '$s(x) = 8\\cos\\left(\\dfrac{\\pi}{3}(x - 1)\\right) + 3$',
      '$s(x) = 4\\cos\\left(\\dfrac{\\pi}{3}(x - 1)\\right) - 1$',
    ],
    correctAnswer: 0,
    explanation:
      'The maximum $7$ and minimum $-1$ give amplitude $\\frac{7 - (-1)}{2} = 4$ and midline $y = \\frac{7 + (-1)}{2} = 3$. A maximum and the next minimum are half a period apart, so the period is $2(4 - 1) = 6$ and $b = \\frac{2\\pi}{6} = \\frac{\\pi}{3}$. A cosine reaches its maximum at the start of its cycle, so shifting it to $x = 1$ gives $4\\cos\\left(\\frac{\\pi}{3}(x - 1)\\right) + 3$.',
    optionExplanations: [
      'Amplitude $4$, midline $3$, period $6$ (so $b = \\frac{\\pi}{3}$), and a cosine shifted right $1$ places the maximum at $(1, 7)$; three units later it is at its minimum $(4, -1)$.',
      'Taking the distance from the maximum to the minimum, $3$, as the whole period gives $b = \\frac{2\\pi}{3}$; treating it as the period over two gives $\\frac{\\pi}{6}$ from a period of $12$. The max-to-min distance is half a period, so the period is $6$ and $b = \\frac{\\pi}{3}$.',
      '$8$ is the full distance from minimum to maximum. The amplitude is half of that, $4$.',
      'The midline is the average of the maximum and minimum, $\\frac{7 + (-1)}{2} = 3$, not the minimum value $-1$.',
    ],
  },
  {
    type: 'mcq',
    topic: 'trigonometric-functions',
    lesson: 'graphing-trig-functions',
    ced: '3.4',
    stimulus: SINUSOID,
    question: 'On which of the following intervals is $s$ decreasing and the graph of $s$ concave up?',
    options: ['$1 < x < 2.5$', '$4 < x < 5.5$', '$2.5 < x < 4$', '$5.5 < x < 7$'],
    correctAnswer: 2,
    explanation:
      'From the maximum at $x = 1$ to the minimum at $x = 4$, $s$ is decreasing. A sinusoid is concave down near a maximum and concave up near a minimum, changing concavity where it crosses the midline, halfway between them at $x = 2.5$. So $s$ is decreasing and concave up on $2.5 < x < 4$.',
    optionExplanations: [
      'On $1 < x < 2.5$ the function is decreasing, but it is just past its maximum and above the midline, where a sinusoid is concave down.',
      'On $4 < x < 5.5$ the graph is concave up (near the minimum), but $s$ is increasing there, rising from the minimum toward the midline.',
      'Between the midline crossing at $x = 2.5$ and the minimum at $x = 4$, $s$ is still falling and the graph bends upward toward the minimum: decreasing and concave up.',
      'On $5.5 < x < 7$ the graph is above the midline approaching the next maximum at $x = 7$: increasing and concave down.',
    ],
  },
  {
    type: 'mcq',
    topic: 'trigonometric-functions',
    lesson: 'trigonometric-functions-precalc',
    ced: '3.8',
    question: 'Which of the following is true about the graph of $y = \\tan(2x)$?',
    options: [
      'The period is $\\pi$, and there are vertical asymptotes at $x = \\dfrac{\\pi}{2} + k\\pi$ for all integers $k$.',
      'The period is $\\dfrac{\\pi}{2}$, and there are vertical asymptotes at $x = \\dfrac{\\pi}{4} + \\dfrac{k\\pi}{2}$ for all integers $k$.',
      'The period is $2\\pi$, and there are vertical asymptotes at $x = \\pi + 2k\\pi$ for all integers $k$.',
      'The period is $\\dfrac{\\pi}{2}$, and there are vertical asymptotes at $x = \\dfrac{\\pi}{2} + k\\pi$ for all integers $k$.',
    ],
    correctAnswer: 1,
    explanation:
      'The tangent function has period $\\pi$ and asymptotes where its cosine is zero, at $\\frac{\\pi}{2} + k\\pi$. Replacing $x$ with $2x$ compresses the graph horizontally by $\\frac{1}{2}$: the period becomes $\\frac{\\pi}{2}$, and the asymptotes occur where $2x = \\frac{\\pi}{2} + k\\pi$, that is, $x = \\frac{\\pi}{4} + \\frac{k\\pi}{2}$.',
    optionExplanations: [
      'These are the period and asymptotes of $y = \\tan x$. The factor $2$ halves both the period and the positions of the asymptotes.',
      'Period $\\frac{\\pi}{2}$ (half of $\\pi$), and $\\cos(2x) = 0$ when $2x = \\frac{\\pi}{2} + k\\pi$, giving $x = \\frac{\\pi}{4} + \\frac{k\\pi}{2}$.',
      'Tangent has period $\\pi$, not $2\\pi$, and the factor $2$ shortens the period rather than doubling it.',
      'The period is right, but these are the asymptotes of $y = \\tan x$. For $\\tan(2x)$ they come from $2x = \\frac{\\pi}{2} + k\\pi$, so the first positive one is at $x = \\frac{\\pi}{4}$, not $\\frac{\\pi}{2}$ (where $\\tan(2x) = \\tan\\pi = 0$), and they repeat every $\\frac{\\pi}{2}$.',
    ],
  },
  {
    type: 'mcq',
    topic: 'trigonometric-functions',
    lesson: 'inverse-trig-functions-precalc',
    ced: '3.9',
    question: 'What is the value of $\\arccos\\left(\\cos\\dfrac{5\\pi}{4}\\right)$?',
    options: ['$\\dfrac{5\\pi}{4}$', '$\\dfrac{\\pi}{4}$', '$-\\dfrac{\\pi}{4}$', '$\\dfrac{3\\pi}{4}$'],
    correctAnswer: 3,
    explanation:
      '$\\cos\\frac{5\\pi}{4} = -\\frac{\\sqrt{2}}{2}$, and $\\arccos$ returns the angle in $[0, \\pi]$ with that cosine. The angle in $[0, \\pi]$ whose cosine is $-\\frac{\\sqrt{2}}{2}$ is $\\frac{3\\pi}{4}$. The composition $\\arccos(\\cos\\theta)$ equals $\\theta$ only when $\\theta$ is already in $[0, \\pi]$.',
    optionExplanations: [
      '$\\frac{5\\pi}{4}$ is outside the range $[0, \\pi]$ of $\\arccos$, so $\\arccos(\\cos\\theta) = \\theta$ does not apply; $\\arccos$ returns the angle in $[0, \\pi]$ with the same cosine.',
      '$\\frac{\\pi}{4}$ has cosine $+\\frac{\\sqrt{2}}{2}$, but $\\cos\\frac{5\\pi}{4}$ is negative, so the output must be in the second quadrant of the range.',
      'Negative outputs belong to $\\arcsin$ and $\\arctan$, whose ranges include negative angles. The range of $\\arccos$ is $[0, \\pi]$.',
      '$\\cos\\frac{5\\pi}{4} = -\\frac{\\sqrt{2}}{2}$, and the unique angle in $[0, \\pi]$ with cosine $-\\frac{\\sqrt{2}}{2}$ is $\\frac{3\\pi}{4}$.',
    ],
  },
  {
    type: 'mcq',
    topic: 'trigonometric-functions',
    lesson: 'solving-trig-equations',
    ced: '3.10',
    question: 'What are all solutions of $\\sqrt{3}\\tan x + 1 = 0$ in the interval $0 \\le x < 2\\pi$?',
    options: [
      '$x = \\dfrac{\\pi}{6}$ and $x = \\dfrac{7\\pi}{6}$',
      '$x = \\dfrac{5\\pi}{6}$ and $x = \\dfrac{11\\pi}{6}$',
      '$x = \\dfrac{2\\pi}{3}$ and $x = \\dfrac{5\\pi}{3}$',
      '$x = \\dfrac{5\\pi}{6}$ only',
    ],
    correctAnswer: 1,
    explanation:
      '$\\tan x = -\\dfrac{1}{\\sqrt{3}} = -\\dfrac{\\sqrt{3}}{3}$, so the reference angle is $\\frac{\\pi}{6}$ and $x$ lies in Quadrant II or IV, where tangent is negative: $x = \\pi - \\frac{\\pi}{6} = \\frac{5\\pi}{6}$ and $x = 2\\pi - \\frac{\\pi}{6} = \\frac{11\\pi}{6}$. Tangent has period $\\pi$, so the two solutions are $\\pi$ apart.',
    optionExplanations: [
      'These angles have $\\tan x = +\\frac{\\sqrt{3}}{3}$ (Quadrants I and III). The equation needs a negative tangent.',
      '$\\tan x = -\\frac{\\sqrt{3}}{3}$ with reference angle $\\frac{\\pi}{6}$ in Quadrants II and IV: $\\frac{5\\pi}{6}$ and $\\frac{11\\pi}{6}$.',
      'These have reference angle $\\frac{\\pi}{3}$, where $\\tan = \\pm\\sqrt{3}$. The equation gives $\\tan x = -\\frac{1}{\\sqrt{3}}$, whose reference angle is $\\frac{\\pi}{6}$.',
      'Tangent repeats every $\\pi$, so $\\frac{5\\pi}{6} + \\pi = \\frac{11\\pi}{6}$ is also a solution in $[0, 2\\pi)$.',
    ],
  },
  {
    type: 'mcq',
    topic: 'trigonometric-functions',
    lesson: 'trigonometric-identities-precalc',
    ced: '3.12',
    question: 'Which of the following expressions is equivalent to $\\sin(2\\theta)\\sec\\theta$ wherever it is defined?',
    options: ['$2\\sin\\theta\\cos^2\\theta$', '$\\dfrac{2\\sin\\theta}{\\cos^2\\theta}$', '$\\tan(2\\theta)$', '$2\\sin\\theta$'],
    correctAnswer: 3,
    explanation:
      'Using $\\sin(2\\theta) = 2\\sin\\theta\\cos\\theta$ and $\\sec\\theta = \\dfrac{1}{\\cos\\theta}$: $\\sin(2\\theta)\\sec\\theta = \\dfrac{2\\sin\\theta\\cos\\theta}{\\cos\\theta} = 2\\sin\\theta$, for $\\cos\\theta \\ne 0$.',
    optionExplanations: [
      'This multiplies by $\\cos\\theta$ instead of dividing by it: $\\sec\\theta$ is $\\frac{1}{\\cos\\theta}$, not $\\cos\\theta$.',
      'This divides $2\\sin\\theta\\cos\\theta$ by $\\cos^2\\theta$, as if $\\sec\\theta$ were $\\frac{1}{\\cos^2\\theta}$. One factor of $\\cos\\theta$ cancels, leaving $2\\sin\\theta$.',
      '$\\sin(2\\theta)\\sec\\theta$ is not $\\frac{\\sin(2\\theta)}{\\cos(2\\theta)}$; the secant is of $\\theta$, not of $2\\theta$, so it cancels only one $\\cos\\theta$.',
      '$\\sin(2\\theta)\\sec\\theta = 2\\sin\\theta\\cos\\theta \\cdot \\frac{1}{\\cos\\theta} = 2\\sin\\theta$.',
    ],
  },
  {
    type: 'mcq',
    topic: 'trigonometric-functions',
    lesson: 'polar-coordinates-precalc',
    ced: '3.13',
    question: 'The point with rectangular coordinates $(-3, 3)$ has polar coordinates $(r, \\theta)$ with $r > 0$ and $0 \\le \\theta < 2\\pi$. What are $r$ and $\\theta$?',
    options: [
      '$r = 3\\sqrt{2}$ and $\\theta = \\dfrac{3\\pi}{4}$',
      '$r = 3\\sqrt{2}$ and $\\theta = \\dfrac{7\\pi}{4}$',
      '$r = 18$ and $\\theta = \\dfrac{3\\pi}{4}$',
      '$r = 3\\sqrt{2}$ and $\\theta = -\\dfrac{\\pi}{4}$',
    ],
    correctAnswer: 0,
    explanation:
      '$r = \\sqrt{(-3)^2 + 3^2} = \\sqrt{18} = 3\\sqrt{2}$. The point is in Quadrant II with $\\tan\\theta = \\dfrac{3}{-3} = -1$, so $\\theta = \\pi - \\frac{\\pi}{4} = \\frac{3\\pi}{4}$. The angle $-\\frac{\\pi}{4}$ from a calculator\'s $\\arctan(-1)$ points into Quadrant IV and must be corrected by adding $\\pi$.',
    optionExplanations: [
      '$r = \\sqrt{9 + 9} = 3\\sqrt{2}$, and the Quadrant II angle with reference angle $\\frac{\\pi}{4}$ is $\\frac{3\\pi}{4}$.',
      '$\\frac{7\\pi}{4}$ is in Quadrant IV, where $x > 0$ and $y < 0$; the point $(-3, 3)$ is in Quadrant II.',
      '$r$ is the distance to the origin, $\\sqrt{18} = 3\\sqrt{2}$; $18$ is $r^2$.',
      '$-\\frac{\\pi}{4}$ is what $\\arctan(-1)$ returns, but it describes a Quadrant IV direction and is outside $0 \\le \\theta < 2\\pi$. For a Quadrant II point, add $\\pi$ to get $\\frac{3\\pi}{4}$.',
    ],
  },
  {
    type: 'mcq',
    topic: 'trigonometric-functions',
    lesson: 'polar-coordinates-precalc',
    ced: '3.15',
    question: 'The polar function $r = f(\\theta)$ is given by $f(\\theta) = 4\\sin(3\\theta)$. On the interval $\\dfrac{\\pi}{6} < \\theta < \\dfrac{\\pi}{3}$, which of the following describes the distance between the point $(f(\\theta), \\theta)$ and the origin?',
    options: [
      'The distance is increasing, because $r$ is positive and increasing.',
      'The distance is decreasing, because $r$ is negative and increasing.',
      'The distance is increasing, because $r$ is negative and decreasing.',
      'The distance is decreasing, because $r$ is positive and decreasing.',
    ],
    correctAnswer: 3,
    explanation:
      'For $\\frac{\\pi}{6} < \\theta < \\frac{\\pi}{3}$, the argument $3\\theta$ runs from $\\frac{\\pi}{2}$ to $\\pi$, where sine is positive and decreasing from $1$ to $0$. So $r = 4\\sin(3\\theta)$ is positive and decreasing from $4$ to $0$, and the point moves closer to the origin, finishing the first petal of the rose.',
    optionExplanations: [
      '$r$ is positive and increasing on $0 < \\theta < \\frac{\\pi}{6}$, where $3\\theta$ goes from $0$ to $\\frac{\\pi}{2}$; that is the first half of the petal, not this interval.',
      'On this interval $3\\theta$ is between $\\frac{\\pi}{2}$ and $\\pi$, where $\\sin(3\\theta) > 0$; $r$ does not become negative until $\\theta > \\frac{\\pi}{3}$.',
      '$r$ is positive here, not negative. A negative, decreasing $r$ does move the point away from the origin, but that happens on $\\frac{\\pi}{3} < \\theta < \\frac{\\pi}{2}$.',
      'With $3\\theta$ in $\\left(\\frac{\\pi}{2}, \\pi\\right)$, $r = 4\\sin(3\\theta)$ falls from $4$ toward $0$ while staying positive, so the distance $|r|$ decreases.',
    ],
  },

  /* ============== PART B — GRAPHING CALCULATOR (Q30–Q42) ============== */

  /* ---- Unit 1 (4) ---- */
  {
    type: 'mcq',
    topic: 'polynomial-rational-functions',
    lesson: 'function-modeling-precalc',
    ced: '1.14',
    stimulus: BALL,
    question: 'A quadratic regression $h(t) = at^2 + bt + c$ is fit to the data. According to the regression model, what is the height of the ball at $t = 2.3$ seconds?',
    options: ['$7.07$ meters', '$3.78$ meters', '$2.63$ meters', '$8.96$ meters'],
    correctAnswer: 1,
    explanation:
      'The calculator\'s quadratic regression gives $h(t) \\approx -4.857t^2 + 12.314t + 1.151$ (coefficients to three decimals), and $h(2.3) \\approx 3.78$ meters. A linear model through the first and last points would predict about $7.07$ meters at $t = 2.3$, which ignores the downward turn; $8.96$ is the model\'s maximum height, and $2.63$ is the time at which the model gives a height of $0$.',
    optionExplanations: [
      'This extends a straight line through $(0, 1.2)$ and $(2, 6.3)$. The ball is already falling at $t = 2$, so a linear model misses the curvature.',
      'Quadratic regression gives $h(t) \\approx -4.857t^2 + 12.314t + 1.151$, and evaluating at $t = 2.3$ yields about $3.78$ meters.',
      '$2.63$ is the positive zero of the regression model, the time when the height is $0$, not the height at $t = 2.3$.',
      '$8.96$ is the maximum value of the model, reached near $t = 1.27$. By $t = 2.3$ the ball has fallen well below that.',
    ],
  },
  {
    type: 'mcq',
    topic: 'polynomial-rational-functions',
    lesson: 'function-modeling-precalc',
    ced: '1.13',
    stimulus: BALL,
    question: 'According to the quadratic regression model, at what time does the ball reach the ground?',
    options: ['$t \\approx 2.54$ seconds', '$t \\approx 2.63$ seconds', '$t \\approx 1.27$ seconds', '$t \\approx 0.09$ seconds'],
    correctAnswer: 1,
    explanation:
      'The ball reaches the ground when the model gives $h(t) = 0$. Graphing $y = -4.857t^2 + 12.314t + 1.151$ shows zeros at $t \\approx -0.090$ and $t \\approx 2.626$; the positive zero, about $2.63$ seconds, is the answer. The time $1.27$ is the vertex, and $2.54$ is twice the vertex time (where the height returns to about $1.15$ m, the balcony height, not the ground).',
    optionExplanations: [
      'Twice the vertex time, $2(1.268) \\approx 2.54$, is when the ball returns to its starting height of about $1.15$ meters, not to the ground.',
      'Setting the regression model equal to $0$ and solving graphically gives the positive zero $t \\approx 2.63$ seconds.',
      '$1.27$ is the time of the maximum height (the vertex), where the model is about $8.96$ meters, not $0$.',
      '$0.09$ is the absolute value of the model\'s negative zero, which is before the ball was thrown and not meaningful in context.',
    ],
  },
  {
    type: 'mcq',
    topic: 'polynomial-rational-functions',
    lesson: 'polynomial-functions-precalc',
    ced: '1.4',
    question: 'The function $f$ is given by $f(x) = x^3 - 4x^2 + x + 6$. What is the relative minimum value of $f$?',
    options: ['$-0.879$', '$2.535$', '$6.065$', '$0.131$'],
    correctAnswer: 0,
    explanation:
      'Graphing $f$ shows a relative maximum near $x \\approx 0.131$, where $f \\approx 6.065$, and a relative minimum near $x \\approx 2.535$, where $f \\approx -0.879$. The relative minimum value is the output, $-0.879$; $2.535$ is the input at which it occurs.',
    optionExplanations: [
      'The calculator\'s minimum finder gives the point $(2.535, -0.879)$; the relative minimum value is the $y$-coordinate, $-0.879$.',
      '$2.535$ is the $x$-coordinate of the relative minimum, the input where it occurs, not the minimum value.',
      '$6.065$ is the relative maximum value, at $x \\approx 0.131$.',
      '$0.131$ is the $x$-coordinate of the relative maximum.',
    ],
  },
  {
    type: 'mcq',
    topic: 'polynomial-rational-functions',
    lesson: 'rational-functions-precalc',
    ced: '1.5',
    question: 'For which of the following values of $x$ is $2x^3 - 7x^2 + 3x + 2 < 0$?',
    options: [
      '$-0.351 < x < 1$ or $x > 2.851$',
      '$x < -0.351$ or $1 < x < 2.851$',
      '$x < 1$ or $x > 2.851$',
      '$1 < x < 2.851$ only',
    ],
    correctAnswer: 1,
    explanation:
      'Graphing shows zeros at $x \\approx -0.351$, $x = 1$ and $x \\approx 2.851$ (indeed $2(1) - 7 + 3 + 2 = 0$). The cubic has a positive leading coefficient, so it is negative to the left of its least zero and between the second and third zeros: $x < -0.351$ or $1 < x < 2.851$.',
    optionExplanations: [
      'These are the intervals where the cubic is positive: it is above the $x$-axis between the first two zeros and to the right of the last one.',
      'A positive-leading-coefficient cubic with three simple zeros is negative on $(-\\infty, -0.351)$ and on $(1, 2.851)$, which a graph confirms.',
      'The cubic is positive on $(-0.351, 1)$, so "$x < 1$" is too much; and it is positive, not negative, for $x > 2.851$.',
      'The interval $1 < x < 2.851$ is correct but incomplete: the cubic is also negative for all $x < -0.351$, where it heads toward $-\\infty$.',
    ],
  },

  /* ---- Unit 2 (5) ---- */
  {
    type: 'mcq',
    topic: 'exponential-logarithmic',
    lesson: 'exponential-logarithmic-modeling-precalc',
    ced: '2.5',
    stimulus: DOWNLOADS,
    question: 'An exponential regression $D(t) = ab^t$ is fit to the data. According to the model, by approximately what percent do the total downloads increase each week?',
    options: ['$29.8\\%$', '$68.6\\%$', '$13.3\\%$', '$2.6\\%$'],
    correctAnswer: 0,
    explanation:
      'The calculator\'s exponential regression gives $D(t) \\approx 1.520(1.298)^t$. The growth factor per week is $b \\approx 1.298$, so the downloads increase by about $29.8\\%$ each week. The factor per two weeks is $b^2 \\approx 1.686$, a $68.6\\%$ increase, and $13.3$ is the model\'s time, in weeks, to reach $50$ thousand.',
    optionExplanations: [
      'The regression base is $b \\approx 1.298$, so each week the model multiplies the total by $1.298$: a $29.8\\%$ increase.',
      'This is the increase per two-week table step, $b^2 - 1 \\approx 0.686$. The question asks about one week.',
      'This is not a percent increase from the model; $13.3$ is about how many weeks the model takes to reach $50$ thousand downloads.',
      'This reads the second table value, $2.6$, as a percent. The weekly percent change comes from the base $b$ of the regression.',
    ],
  },
  {
    type: 'mcq',
    topic: 'exponential-logarithmic',
    lesson: 'exponential-logarithmic-modeling-precalc',
    ced: '2.6',
    stimulus: DOWNLOADS,
    question: 'What is the residual, in thousands of downloads, for the data point at $t = 6$ when the exponential regression model is used?',
    options: ['$-0.121$', '$7.279$', '$0.121$', '$0.000$'],
    correctAnswer: 2,
    explanation:
      'A residual is the actual value minus the value predicted by the model. The model predicts $D(6) \\approx 1.520(1.298)^6 \\approx 7.279$ thousand, and the actual value is $7.4$ thousand, so the residual is $7.4 - 7.279 \\approx 0.121$ thousand. A positive residual means the model underestimates this data point.',
    optionExplanations: [
      'This subtracts in the wrong order (predicted minus actual). Residual $=$ actual $-$ predicted $= 7.4 - 7.279 > 0$.',
      '$7.279$ is the model\'s predicted value at $t = 6$, not the residual.',
      'Actual minus predicted: $7.4 - 7.279 \\approx 0.121$ thousand downloads.',
      'A residual of $0$ would mean the model passes exactly through $(6, 7.4)$. A regression curve rarely passes exactly through a data point; here the prediction is $7.279$.',
    ],
  },
  {
    type: 'mcq',
    topic: 'exponential-logarithmic',
    lesson: 'exponential-logarithmic-modeling-precalc',
    ced: '2.14',
    question: 'The reading level $L$ of a student after $x$ months in a program is modeled by $L(x) = 12.4 + 5.8\\ln x$ for $x \\ge 1$. According to the model, after how many months does the student\'s reading level first reach $30$?',
    options: ['$3.0$ months', '$1082.6$ months', '$176.3$ months', '$20.8$ months'],
    correctAnswer: 3,
    explanation:
      'Solve $12.4 + 5.8\\ln x = 30$: $\\ln x = \\dfrac{17.6}{5.8} \\approx 3.034$, so $x = e^{3.034} \\approx 20.8$ months. Stopping at $\\ln x \\approx 3.0$ gives the logarithm, not $x$; using base $10$ instead of $e$ gives $10^{3.034} \\approx 1082.6$; ignoring the $12.4$ gives $e^{30/5.8} \\approx 176.3$.',
    optionExplanations: [
      '$3.0$ is approximately $\\ln x$, the value of the logarithm. The model asks for $x$ itself, which is $e^{3.034}$.',
      'This undoes the natural logarithm with base $10$: $10^{3.034} \\approx 1082.6$. The model uses $\\ln$, so the base is $e$.',
      '$176.3 = e^{30/5.8}$ ignores the $12.4$: the equation is $5.8\\ln x = 30 - 12.4$, not $5.8\\ln x = 30$.',
      '$\\ln x = \\frac{30 - 12.4}{5.8} \\approx 3.034$, and $x = e^{3.034} \\approx 20.8$ months; graphing $y = L(x)$ with $y = 30$ confirms the intersection.',
    ],
  },
  {
    type: 'mcq',
    topic: 'exponential-logarithmic',
    lesson: 'exponential-functions-precalc',
    ced: '2.13',
    question: 'The mass of a radioactive sample decreases by $3.5\\%$ each year. To the nearest hundredth of a year, how long does it take for the mass to decrease to half of its initial value?',
    options: ['$14.29$ years', '$19.80$ years', '$19.46$ years', '$28.57$ years'],
    correctAnswer: 2,
    explanation:
      'Each year the mass is multiplied by $1 - 0.035 = 0.965$, so the model is $M(t) = M_0(0.965)^t$. Solving $(0.965)^t = 0.5$ gives $t = \\dfrac{\\ln 0.5}{\\ln 0.965} \\approx 19.46$ years. Using $e^{-0.035t}$ instead treats $3.5\\%$ as a continuous rate and gives $19.80$; dividing $50$ by $3.5$ assumes a constant loss of $3.5\\%$ of the original mass per year, which is linear, not exponential.',
    optionExplanations: [
      '$50 \\div 3.5 \\approx 14.29$ assumes the sample loses $3.5\\%$ of its original mass every year (a linear model). The loss is $3.5\\%$ of the current mass, which shrinks.',
      '$\\frac{\\ln 2}{0.035} \\approx 19.80$ treats $3.5\\%$ as a continuous rate ($e^{-0.035t}$). A $3.5\\%$ decrease per year means the yearly factor is exactly $0.965$.',
      'With yearly factor $0.965$, $(0.965)^t = 0.5$ gives $t = \\frac{\\ln 0.5}{\\ln 0.965} \\approx 19.46$ years.',
      '$100 \\div 3.5 \\approx 28.57$ is the time for a linear model to lose all of the mass, not half of it under exponential decay.',
    ],
  },
  {
    type: 'mcq',
    topic: 'exponential-logarithmic',
    lesson: 'logarithmic-functions-precalc',
    ced: '2.13',
    question: 'What is the solution of the equation $\\ln(x + 2) = 3 - x$?',
    options: ['$x \\approx 1.693$', '$x \\approx 2.000$', '$x \\approx 1.386$', '$x \\approx 18.086$'],
    correctAnswer: 0,
    explanation:
      'The equation cannot be solved algebraically, so graph $y = \\ln(x + 2)$ and $y = 3 - x$ and find the intersection: $x \\approx 1.693$. Check: $\\ln(3.693) \\approx 1.306$ and $3 - 1.693 = 1.307$. The left side is increasing and the right side decreasing, so there is exactly one solution.',
    optionExplanations: [
      'Graphing both sides gives one intersection, at $x \\approx 1.693$, where both sides are about $1.307$.',
      'At $x = 2$, $\\ln 4 \\approx 1.386$ but $3 - 2 = 1$; the sides are not equal. This guess comes from forcing $x + 2 = 4$.',
      '$1.386 = \\ln 4$ is the value of the left side at $x = 2$, not a solution of the equation.',
      'This is $e^3 - 2$, which solves $\\ln(x + 2) = 3$ and ignores the $-x$ on the right side.',
    ],
  },

  /* ---- Unit 3 (4) ---- */
  {
    type: 'mcq',
    topic: 'trigonometric-functions',
    lesson: 'graphing-trig-functions',
    ced: '3.7',
    question: 'The number of hours of daylight in a city on day $t$ of the year is modeled by $D(t) = 12.2 + 2.9\\sin\\left(\\dfrac{2\\pi}{365}(t - 80)\\right)$. According to the model, on which day of the year does the city first have $14$ hours of daylight?',
    options: ['Day $119$', 'Day $224$', 'Day $39$', 'Day $171$'],
    correctAnswer: 0,
    explanation:
      'Solve $12.2 + 2.9\\sin\\left(\\frac{2\\pi}{365}(t - 80)\\right) = 14$, that is $\\sin\\left(\\frac{2\\pi}{365}(t - 80)\\right) = \\frac{1.8}{2.9} \\approx 0.621$. Graphing $D$ with $y = 14$ shows the first intersection at $t \\approx 118.9$, so day $119$. The second intersection, near day $224$, is when the daylight falls back to $14$ hours; day $171$ is the maximum.',
    optionExplanations: [
      'The first time $D(t) = 14$ is at $t \\approx 118.9$: the graph rises through $14$ hours on day $119$.',
      'Day $224$ is the second solution, when the daylight is decreasing back through $14$ hours after the summer maximum.',
      'Day $39$ comes from using $\\arcsin(0.621) \\approx 0.670$ with the wrong sign, $80 - 0.670 \\cdot \\frac{365}{2\\pi} \\approx 41$, or from a degree-mode calculation; the model is below its midline before day $80$.',
      'Day $171$ is when the model reaches its maximum of $15.1$ hours ($t - 80 = \\frac{365}{4}$), not when it first equals $14$.',
    ],
  },
  {
    type: 'mcq',
    topic: 'trigonometric-functions',
    lesson: 'solving-trig-equations',
    ced: '3.10',
    question: 'What is the least positive solution of the equation $\\cos x = 0.3x$?',
    options: ['$x \\approx 3.328$', '$x \\approx 1.202$', '$x \\approx 1.266$', '$x \\approx 0.955$'],
    correctAnswer: 1,
    explanation:
      'Graph $y = \\cos x$ and $y = 0.3x$ in radian mode. The line rises from the origin and meets the falling cosine curve once, at $x \\approx 1.202$; for $x > \\frac{10}{3}$ the line exceeds $1$, so there are no other solutions. Degree mode gives the spurious intersection $x \\approx 3.328$.',
    optionExplanations: [
      'This intersection appears only when the calculator is in degree mode. Angle measures on the exam are in radians unless stated otherwise.',
      'In radian mode, $\\cos x$ and $0.3x$ intersect at $x \\approx 1.202$ (check: $\\cos 1.202 \\approx 0.361 \\approx 0.3 \\cdot 1.202$).',
      '$1.266 = \\arccos(0.3)$ solves $\\cos x = 0.3$, not $\\cos x = 0.3x$.',
      '$0.955 = \\cos(0.3)$ evaluates the cosine at $0.3$ instead of solving the equation; at $x = 0.955$, $\\cos x \\approx 0.578$ while $0.3x \\approx 0.287$.',
    ],
  },
  {
    type: 'mcq',
    topic: 'trigonometric-functions',
    lesson: 'polar-coordinates-precalc',
    ced: '3.14',
    question: 'The polar function $r = f(\\theta)$ is given by $f(\\theta) = 4\\cos(2\\theta)$. For what value of $\\theta$ in the interval $0 < \\theta < \\dfrac{\\pi}{4}$ is the point $(f(\\theta), \\theta)$ exactly $1.5$ units from the origin?',
    options: ['$\\theta \\approx 1.186$', '$\\theta \\approx 0.593$', '$\\theta \\approx 1.186$ and $\\theta \\approx 1.955$', '$\\theta \\approx 0.384$'],
    correctAnswer: 1,
    explanation:
      'On $0 < \\theta < \\frac{\\pi}{4}$, $2\\theta$ is in $\\left(0, \\frac{\\pi}{2}\\right)$ so $r > 0$ and the distance to the origin is $r$ itself. Solve $4\\cos(2\\theta) = 1.5$: $2\\theta = \\arccos(0.375) \\approx 1.186$, so $\\theta \\approx 0.593$. Forgetting to divide by $2$ gives $1.186$, which is outside the interval.',
    optionExplanations: [
      '$1.186$ is $\\arccos(0.375)$, the value of $2\\theta$, not $\\theta$; it is also outside the interval $0 < \\theta < \\frac{\\pi}{4} \\approx 0.785$.',
      '$4\\cos(2\\theta) = 1.5 \\Rightarrow 2\\theta = \\arccos(0.375) \\approx 1.186 \\Rightarrow \\theta \\approx 0.593$, which lies in $\\left(0, \\frac{\\pi}{4}\\right)$.',
      'These are the two values of $2\\theta$ in $(0, 2\\pi)$ with cosine $0.375$. Neither is a value of $\\theta$ in the stated interval.',
      '$0.384 \\approx \\arccos(0.375) \\div \\pi$ or a degree-mode slip; at $\\theta = 0.384$, $r = 4\\cos(0.768) \\approx 2.88$, not $1.5$.',
    ],
  },
  {
    type: 'mcq',
    topic: 'trigonometric-functions',
    lesson: 'inverse-trig-functions-precalc',
    ced: '3.9',
    question: 'A $12$-foot ladder leans against a vertical wall so that its top is $9.5$ feet above the ground. What is the angle, in radians, that the ladder makes with the ground?',
    options: ['$0.657$', '$0.670$', '$0.914$', '$52.342$'],
    correctAnswer: 2,
    explanation:
      'The ladder is the hypotenuse and the height on the wall is the side opposite the angle $\\theta$ with the ground, so $\\sin\\theta = \\dfrac{9.5}{12}$ and $\\theta = \\arcsin\\left(\\dfrac{9.5}{12}\\right) \\approx 0.914$ radians (about $52.3°$). Using arccosine gives the angle with the wall, $0.657$, and $0.670$ is $\\arctan\\left(\\frac{9.5}{12}\\right)$, which treats $12$ as the horizontal distance instead of the ladder.',
    optionExplanations: [
      '$0.657 = \\arccos\\left(\\frac{9.5}{12}\\right)$ is the angle between the ladder and the wall, the complement of the angle asked for.',
      '$0.670 = \\arctan\\left(\\frac{9.5}{12}\\right)$ would be right if $12$ feet were the distance along the ground, but $12$ feet is the ladder, the hypotenuse.',
      'The height $9.5$ is opposite the angle with the ground and the ladder $12$ is the hypotenuse, so $\\theta = \\arcsin\\left(\\frac{9.5}{12}\\right) \\approx 0.914$ radians.',
      '$52.342$ is the angle in degrees. The question asks for radians.',
    ],
  },
]
