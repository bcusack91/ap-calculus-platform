import type { MCQItem } from '@/components/FullLengthPracticeExam'

/**
 * AP Calculus BC practice exam, form 3: 42 MCQs (May 2027 Section I).
 *   U1 3 · U2 2 · U3 3 · U4 3 · U5 4 · U6 7 · U7 3 · U8 3 · U9 6 · U10 8
 * Part A (Q1–Q29): no calculator, 62 minutes. Part B (Q30–Q42): graphing
 * calculator, 38 minutes; every Part B item is calculator-active. The runner
 * splits the parts by position, so Part B items must stay in positions 30–42.
 * Sets that share a stimulus are consecutive: Q9–Q12 (table of f and f'),
 * Q21–Q23 (particle in the plane), Q24–Q26 (Maclaurin series),
 * Q33–Q34 (town population density), Q37–Q39 (polar loop).
 */

const TABLE_F =
  'The table gives values of a function $f$ and its derivative $f\'$ at four values of $x$. The function $f$ has a continuous second derivative for all real numbers.\n\n' +
  '| $x$ | 0 | 2 | 4 | 7 |\n|---|---|---|---|---|\n' +
  '| $f(x)$ | 4 | 6 | 1 | 5 |\n' +
  '| $f\'(x)$ | 3 | 1 | $-3$ | $-2$ |'

const PLANE_POSITION =
  'A particle moves in the $xy$-plane so that its position at time $t \\ge 0$ is $\\left(t^3 - 6t,\\ 2t^2\\right)$.'

const SERIES_F =
  'The Maclaurin series for the function $f$ is\n\n$$f(x) = 1 - \\frac{x^2}{3!} + \\frac{x^4}{5!} - \\cdots + \\frac{(-1)^n x^{2n}}{(2n + 1)!} + \\cdots$$\n\nand it converges to $f(x)$ for all real numbers $x$.'

const DENSITY =
  'A circular town has a radius of 5 miles. Its population density $r$ miles from the center of town is modeled by $D(r) = 3000e^{-0.4r}$ people per square mile, for $0 \\le r \\le 5$.'

const POLAR_LOOP =
  'For $0 \\le \\theta \\le \\pi$, the polar curve $r = \\theta\\sin\\theta$ is a single loop that starts and ends at the origin.'

export const MCQS: MCQItem[] = [
  /* ============== PART A — NO CALCULATOR (Q1–Q29) ============== */

  // U1 (3)
  {
    type: 'mcq',
    topic: 'unit-1-limits-continuity',
    question: 'What is $\\displaystyle\\lim_{x \\to 3^+} \\frac{|x - 3|}{x^2 - 9}$?',
    options: ['$-\\dfrac{1}{6}$', '$\\dfrac{1}{6}$', '$0$', 'The limit does not exist.'],
    correctAnswer: 1,
    explanation:
      'For $x > 3$, $|x - 3| = x - 3$, so the quotient is $\\frac{x - 3}{(x - 3)(x + 3)} = \\frac{1}{x + 3} \\to \\frac{1}{6}$. The value $-\\frac{1}{6}$ is the left-hand limit, where $|x - 3| = 3 - x$, and $0$ reads $\\frac{0}{0}$ as $0$. The two-sided limit does not exist, but the question asks only for the limit from the right, which does.',
    optionExplanations: [
      'This uses $|x - 3| = 3 - x$, which holds for $x < 3$. Approaching from the right, $x > 3$, so $|x - 3| = x - 3$.',
      'For $x > 3$, $|x - 3| = x - 3$, so the expression is $\\frac{x - 3}{(x - 3)(x + 3)} = \\frac{1}{x + 3}$, which approaches $\\frac{1}{6}$.',
      'Substitution gives $\\frac{0}{0}$, which is indeterminate, not $0$. Cancelling $x - 3$ for $x > 3$ leaves $\\frac{1}{x + 3}$.',
      'The two-sided limit fails to exist because the one-sided limits are $\\frac{1}{6}$ and $-\\frac{1}{6}$. The right-hand limit alone exists.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-1-limits-continuity',
    question: 'Let $f(x) = \\dfrac{x^2 + kx - 12}{x - 2}$ for $x \\ne 2$, and let $f(2) = m$, where $k$ and $m$ are constants. For what values of $k$ and $m$ is $f$ continuous at $x = 2$?',
    options: ['$k = 4$ and $m = 12$', '$k = -4$ and $m = 8$', '$k = 4$ and $m = 8$', 'No values of $k$ and $m$ work.'],
    correctAnswer: 2,
    explanation:
      'For the limit at $2$ to exist, the numerator must be $0$ there: $4 + 2k - 12 = 0$, so $k = 4$. Then $\\frac{x^2 + 4x - 12}{x - 2} = x + 6$ for $x \\ne 2$, and the limit is $8$, so $m = 8$. The value $k = -4$ comes from a sign error, $m = 12$ substitutes into $x^2 + 4x$ without dividing, and a removable discontinuity can always be filled.',
    optionExplanations: [
      'The value $k = 4$ is right, but $12$ is $x^2 + 4x$ at $x = 2$, computed without the $-12$ or the division. The limit of $x + 6$ at $2$ is $8$.',
      'This solves $4 + 2k - 12 = 0$ with a sign error. Then $2k = 8$, so $k = 4$, not $-4$.',
      'The numerator must vanish at $x = 2$: $4 + 2k - 12 = 0$ gives $k = 4$. Then $\\frac{(x - 2)(x + 6)}{x - 2} = x + 6 \\to 8$, so $m = 8$.',
      'This assumes the denominator forces an asymptote. With $k = 4$ the factor $x - 2$ cancels, so the discontinuity is removable and $m = 8$ fills it.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-1-limits-continuity',
    question: 'What is $\\displaystyle\\lim_{x \\to \\infty} x\\sin\\left(\\frac{1}{x}\\right)$?',
    options: ['$0$', '$1$', '$\\infty$', 'The limit does not exist.'],
    correctAnswer: 1,
    explanation:
      'With $u = \\frac{1}{x}$, $u \\to 0^+$ and the expression is $\\frac{\\sin u}{u} \\to 1$. The value $0$ uses only $\\sin\\frac{1}{x} \\to 0$, and $\\infty$ uses only $x \\to \\infty$; the product of the two is an indeterminate form that must be rewritten. The expression does not oscillate, because $\\frac{1}{x}$ approaches $0$ steadily, so the limit exists.',
    optionExplanations: [
      'This uses only $\\sin\\frac{1}{x} \\to 0$. The factor $x$ grows at the same rate, and rewriting as $\\frac{\\sin u}{u}$ with $u = \\frac{1}{x}$ gives $1$.',
      'With $u = \\frac{1}{x} \\to 0^+$, $x\\sin\\frac{1}{x} = \\frac{\\sin u}{u}$, which approaches $1$.',
      'This uses only $x \\to \\infty$. The factor $\\sin\\frac{1}{x}$ shrinks like $\\frac{1}{x}$, so the product stays bounded and approaches $1$.',
      'Unlike $\\sin x$ as $x \\to \\infty$, $\\sin\\frac{1}{x}$ does not oscillate: its input $\\frac{1}{x}$ approaches $0$. The limit exists and equals $1$.',
    ],
  },

  // U2 (1)
  {
    type: 'mcq',
    topic: 'unit-2-differentiation-definition',
    question: 'If $f(x) = \\sqrt{x}\\,\\ln x$, what is the value of $f\'\\left(e^2\\right)$?',
    options: ['$\\dfrac{1}{e}$', '$\\dfrac{1}{2e^3}$', '$\\dfrac{e + 1}{e^2}$', '$\\dfrac{2}{e}$'],
    correctAnswer: 3,
    explanation:
      'The product rule gives $f\'(x) = \\frac{\\ln x}{2\\sqrt{x}} + \\frac{\\sqrt{x}}{x}$. At $x = e^2$, $\\sqrt{x} = e$ and $\\ln x = 2$, so $f\'(e^2) = \\frac{2}{2e} + \\frac{1}{e} = \\frac{2}{e}$. The value $\\frac{1}{e}$ keeps only one term, $\\frac{1}{2e^3}$ multiplies the two derivatives, and $\\frac{e + 1}{e^2}$ evaluates $\\frac{\\sqrt{x}}{x}$ as $\\frac{1}{x}$.',
    optionExplanations: [
      'This keeps only one of the two product-rule terms. At $x = e^2$ each term, $\\frac{\\ln x}{2\\sqrt{x}}$ and $\\frac{\\sqrt{x}}{x}$, equals $\\frac{1}{e}$.',
      'This multiplies the derivatives, $\\frac{1}{2\\sqrt{x}}\\cdot\\frac{1}{x}$, at $x = e^2$. The product rule adds two terms instead.',
      'This simplifies $\\sqrt{x}\\cdot\\frac{1}{x}$ as $\\frac{1}{x}$ instead of $\\frac{1}{\\sqrt{x}}$, giving $\\frac{1}{e} + \\frac{1}{e^2}$.',
      '$f\'(x) = \\frac{\\ln x}{2\\sqrt{x}} + \\frac{1}{\\sqrt{x}}$. With $\\sqrt{e^2} = e$ and $\\ln e^2 = 2$, $f\'(e^2) = \\frac{2}{2e} + \\frac{1}{e} = \\frac{2}{e}$.',
    ],
  },

  // U3 (2)
  {
    type: 'mcq',
    topic: 'unit-3-composite-implicit-inverse',
    question: 'The point $(0, 1)$ lies on the curve $e^y + xy = e$. What is the value of $\\dfrac{dy}{dx}$ at this point?',
    options: ['$-e$', '$-\\dfrac{1}{e}$', '$\\dfrac{1}{e}$', '$-1$'],
    correctAnswer: 1,
    explanation:
      'Differentiating implicitly, $e^y\\frac{dy}{dx} + y + x\\frac{dy}{dx} = 0$. At $(0, 1)$, $e\\frac{dy}{dx} + 1 = 0$, so $\\frac{dy}{dx} = -\\frac{1}{e}$. The value $-e$ inverts the ratio, $\\frac{1}{e}$ has a sign error, and $-1$ evaluates $e^y$ as $e^0$ by using the $x$-coordinate.',
    optionExplanations: [
      'This inverts the ratio. From $e\\frac{dy}{dx} + 1 = 0$, $\\frac{dy}{dx} = -\\frac{1}{e}$, not $-\\frac{e}{1}$.',
      'Implicit differentiation gives $e^y y\' + y + xy\' = 0$. At $(0, 1)$: $e\\,y\' + 1 + 0 = 0$, so $y\' = -\\frac{1}{e}$.',
      'This drops the negative sign when solving $e\\frac{dy}{dx} + 1 = 0$. Moving the $1$ across gives $e\\frac{dy}{dx} = -1$.',
      'This evaluates $e^y$ at $y = 0$, using the $x$-coordinate. At $(0, 1)$, $e^y = e^1 = e$.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-3-composite-implicit-inverse',
    question: 'If $g(x) = \\arctan\\left(e^{2x}\\right)$, what is the value of $g\'(0)$?',
    options: ['$\\dfrac{1}{2}$', '$2$', '$\\dfrac{\\pi}{4}$', '$1$'],
    correctAnswer: 3,
    explanation:
      'The chain rule gives $g\'(x) = \\frac{2e^{2x}}{1 + e^{4x}}$, so $g\'(0) = \\frac{2}{2} = 1$. The value $\\frac{1}{2}$ leaves out the factor $2$ from $e^{2x}$, $2$ leaves out the denominator $1 + u^2$, and $\\frac{\\pi}{4}$ is $g(0) = \\arctan 1$.',
    optionExplanations: [
      'This differentiates $e^{2x}$ as $e^{2x}$, leaving out the chain-rule factor $2$, so it gets $\\frac{1}{1 + 1}$.',
      'This is $2e^{2x}$ at $x = 0$, the derivative of the inner function alone. The derivative of $\\arctan u$ also divides by $1 + u^2 = 2$.',
      'This is $g(0) = \\arctan(e^0) = \\arctan 1$, the function value rather than the derivative.',
      '$g\'(x) = \\frac{1}{1 + (e^{2x})^2}\\cdot2e^{2x}$, so $g\'(0) = \\frac{2}{1 + 1} = 1$.',
    ],
  },

  // U4 (2)
  {
    type: 'mcq',
    topic: 'unit-4-contextual-applications-differentiation',
    question: 'What is $\\displaystyle\\lim_{x \\to 2} \\frac{\\ln(x - 1)}{x^2 - 4}$?',
    options: ['$\\dfrac{1}{2}$', '$4$', '$\\dfrac{1}{4}$', '$0$'],
    correctAnswer: 2,
    explanation:
      'The form is $\\frac{0}{0}$, so L\'Hospital\'s rule gives $\\lim_{x \\to 2}\\frac{1/(x - 1)}{2x} = \\frac{1}{4}$. The value $\\frac{1}{2}$ differentiates $x^2 - 4$ as $2$, $4$ inverts the ratio, and $0$ reads $\\frac{0}{0}$ as $0$.',
    optionExplanations: [
      'This differentiates the denominator $x^2 - 4$ as $2$ instead of $2x$, so it gets $\\frac{1}{2}$ instead of $\\frac{1}{4}$.',
      'This inverts the ratio of the derivatives. L\'Hospital\'s rule keeps the derivative of the numerator on top: $\\frac{1/(x - 1)}{2x}$.',
      'Both parts approach $0$, so L\'Hospital\'s rule applies: $\\lim_{x \\to 2}\\frac{1/(x - 1)}{2x} = \\frac{1}{4}$.',
      'Substitution gives $\\frac{0}{0}$, which is indeterminate, not $0$. L\'Hospital\'s rule gives a nonzero limit.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-4-contextual-applications-differentiation',
    question: 'A point moves along the curve $y = \\sqrt{x}$ so that its $x$-coordinate increases at a constant rate of 3 units per second. At the instant $x = 4$, how fast is the distance between the point and the origin increasing?',
    options: ['$\\dfrac{27\\sqrt{5}}{20}$ units per second', '$\\dfrac{9\\sqrt{5}}{20}$ units per second', '$27$ units per second', '$\\dfrac{15}{4}$ units per second'],
    correctAnswer: 0,
    explanation:
      'The distance satisfies $D^2 = x^2 + y^2 = x^2 + x$, so $2D\\frac{dD}{dt} = (2x + 1)\\frac{dx}{dt}$. At $x = 4$, $D = \\sqrt{20} = 2\\sqrt{5}$, so $\\frac{dD}{dt} = \\frac{9\\cdot3}{4\\sqrt{5}} = \\frac{27\\sqrt{5}}{20}$. The value $\\frac{9\\sqrt{5}}{20}$ leaves out $\\frac{dx}{dt} = 3$, $27$ is $\\frac{d}{dt}(D^2)$ without dividing by $2D$, and $\\frac{15}{4}$ adds $\\frac{dx}{dt}$ and $\\frac{dy}{dt}$.',
    optionExplanations: [
      'From $D^2 = x^2 + x$, $2D\\,D\' = (2x + 1)x\'$. At $x = 4$, $D = 2\\sqrt{5}$ and $x\' = 3$, so $D\' = \\frac{27}{4\\sqrt{5}} = \\frac{27\\sqrt{5}}{20}$.',
      'This is $\\frac{dD}{dx}$ at $x = 4$, without multiplying by $\\frac{dx}{dt} = 3$.',
      'This is $(2x + 1)\\frac{dx}{dt} = 9\\cdot3$, the rate of change of $D^2$. It still has to be divided by $2D = 4\\sqrt{5}$.',
      'This adds $\\frac{dx}{dt} = 3$ and $\\frac{dy}{dt} = \\frac{3}{4}$. Distance changes at a rate that combines them through $D^2 = x^2 + y^2$, not by addition.',
    ],
  },

  // Table set: U2, U5, U6, U6
  {
    type: 'mcq',
    topic: 'unit-2-differentiation-definition',
    stimulus: TABLE_F,
    question: 'Based on the values of $f\'$ in the table, which of the following is the best estimate of the second derivative $f\'\'(3)$?',
    options: ['$-4$', '$-\\dfrac{5}{2}$', '$-2$', '$2$'],
    correctAnswer: 2,
    explanation:
      'The best estimate uses the values of $f\'$ on either side of $3$: $f\'\'(3) \\approx \\frac{f\'(4) - f\'(2)}{4 - 2} = \\frac{-3 - 1}{2} = -2$. The value $-4$ leaves out the division by $2$, $2$ reverses the subtraction, and $-\\frac{5}{2}$ is the slope of $f$ itself, $\\frac{f(4) - f(2)}{4 - 2}$, which estimates $f\'(3)$.',
    optionExplanations: [
      'This is $f\'(4) - f\'(2)$, the change in $f\'$, without dividing by the change in $x$, which is $2$.',
      'This is $\\frac{f(4) - f(2)}{4 - 2} = \\frac{1 - 6}{2}$, which estimates $f\'(3)$. The second derivative uses the values of $f\'$.',
      'The difference quotient of $f\'$ across $x = 3$ is $\\frac{f\'(4) - f\'(2)}{4 - 2} = \\frac{-3 - 1}{2} = -2$.',
      'This subtracts in the wrong order, $\\frac{f\'(2) - f\'(4)}{4 - 2}$. The estimate is (later value minus earlier value) over $2$.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-5-analytical-applications-differentiation',
    stimulus: TABLE_F,
    question: 'Based on the table, which of the following statements must be true?',
    options: [
      '$f\'(c) = 0$ for some $c$ in $(2, 4)$',
      '$f$ has a relative maximum at $x = 2$',
      '$f\'(c) = -4$ for some $c$ in $(2, 4)$',
      '$f(c) = 0.5$ for some $c$ in $(0, 7)$',
    ],
    correctAnswer: 0,
    explanation:
      'Because $f\'\'$ exists, $f\'$ is continuous, and $f\'(2) = 1 > 0 > -3 = f\'(4)$, so by the Intermediate Value Theorem $f\'(c) = 0$ for some $c$ in $(2, 4)$. A relative maximum at $2$ is impossible because $f\'(2) \\ne 0$. Nothing forces $f\'$ down to $-4$ on $(2, 4)$, and nothing forces $f$ as low as $0.5$, since every table value is at least $1$.',
    optionExplanations: [
      'Since $f\'\'$ exists, $f\'$ is continuous. With $f\'(2) = 1$ and $f\'(4) = -3$, the Intermediate Value Theorem says $f\'$ equals $0$ somewhere in $(2, 4)$.',
      'A differentiable function can have a relative maximum only where $f\' = 0$. Here $f\'(2) = 1 \\ne 0$, so $x = 2$ is not an extremum.',
      'The Intermediate Value Theorem guarantees values between $f\'(2) = 1$ and $f\'(4) = -3$. The value $-4$ is outside that range, so it is not guaranteed.',
      'Every listed value of $f$ is at least $1$. The theorems guarantee only values between the table entries, so $f$ need not reach $0.5$.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-6-integration-accumulation',
    stimulus: TABLE_F,
    question: 'Using a trapezoidal sum with the three subintervals indicated by the table, what is the approximation of $\\displaystyle\\int_0^7 f(x)\\,dx$?',
    options: ['$23$', '$26$', '$29$', '$\\dfrac{161}{6}$'],
    correctAnswer: 1,
    explanation:
      'The trapezoidal sum is $2\\cdot\\frac{4 + 6}{2} + 2\\cdot\\frac{6 + 1}{2} + 3\\cdot\\frac{1 + 5}{2} = 10 + 7 + 9 = 26$. The value $23$ is the left Riemann sum, $29$ is the right Riemann sum, and $\\frac{161}{6}$ treats the three subintervals as if each had width $\\frac{7}{3}$.',
    optionExplanations: [
      'This is the left Riemann sum, $2(4) + 2(6) + 3(1)$, which uses only the left height on each subinterval.',
      'Each trapezoid uses its own width: $2\\cdot\\frac{4 + 6}{2} + 2\\cdot\\frac{6 + 1}{2} + 3\\cdot\\frac{1 + 5}{2} = 10 + 7 + 9 = 26$.',
      'This is the right Riemann sum, $2(6) + 2(1) + 3(5)$, which uses only the right height on each subinterval.',
      'This uses the equal-width trapezoidal formula with width $\\frac{7}{3}$, but the subintervals have widths $2$, $2$ and $3$.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-6-integration-accumulation',
    stimulus: TABLE_F,
    question: 'What is the value of $\\displaystyle\\int_0^4 \\left(2f\'(x) + 1\\right)dx$?',
    options: ['$1$', '$-5$', '$-2$', '$-8$'],
    correctAnswer: 2,
    explanation:
      'By the Fundamental Theorem, $\\int_0^4 2f\'(x)\\,dx = 2(f(4) - f(0)) = 2(1 - 4) = -6$, and $\\int_0^4 1\\,dx = 4$, so the value is $-2$. The value $1$ leaves out the factor $2$, $-5$ integrates the constant $1$ as $1$ instead of $4$, and $-8$ uses $f\'$ in place of $f$ at the limits.',
    optionExplanations: [
      'This drops the factor $2$: $(f(4) - f(0)) + 4 = -3 + 4$. The constant multiple doubles the change in $f$.',
      'This adds $1$ instead of $\\int_0^4 1\\,dx = 4$. A constant integrated over an interval of length $4$ contributes $4$.',
      '$\\int_0^4 2f\'(x)\\,dx = 2\\left(f(4) - f(0)\\right) = 2(1 - 4) = -6$, and $\\int_0^4 1\\,dx = 4$, for a total of $-2$.',
      'This evaluates $2(f\'(4) - f\'(0)) + 4 = 2(-6) + 4$, using the derivative at the limits. The antiderivative of $f\'$ is $f$.',
    ],
  },

  // U5 (2 more)
  {
    type: 'mcq',
    topic: 'unit-5-analytical-applications-differentiation',
    question: 'What point on the graph of $y = \\sqrt{x}$ is closest to the point $(3, 0)$?',
    options: [
      '$\\left(\\dfrac{3}{2}, \\sqrt{\\dfrac{3}{2}}\\right)$',
      '$\\left(\\dfrac{7}{2}, \\sqrt{\\dfrac{7}{2}}\\right)$',
      '$\\left(\\dfrac{5}{2}, \\sqrt{\\dfrac{5}{2}}\\right)$',
      '$\\left(3, \\sqrt{3}\\right)$',
    ],
    correctAnswer: 2,
    explanation:
      'Minimize the squared distance $S(x) = (x - 3)^2 + (\\sqrt{x})^2 = (x - 3)^2 + x$. Then $S\'(x) = 2(x - 3) + 1 = 0$ gives $x = \\frac{5}{2}$, a minimum because $S\'\' = 2 > 0$. The point with $x = \\frac{3}{2}$ squares $y$ as $x^2$ instead of $x$, $\\frac{7}{2}$ comes from a sign error in $S\'$, and $(3, \\sqrt{3})$ is the point directly above $(3, 0)$.',
    optionExplanations: [
      'This uses $(x - 3)^2 + x^2$, squaring $x$ instead of $y = \\sqrt{x}$. Since $y^2 = x$, the squared distance is $(x - 3)^2 + x$.',
      'This solves $2(x - 3) - 1 = 0$, a sign error in differentiating $+x$. The derivative of $(x - 3)^2 + x$ is $2(x - 3) + 1$.',
      'The squared distance is $(x - 3)^2 + x$, with derivative $2(x - 3) + 1$, which is $0$ at $x = \\frac{5}{2}$. The closest point is $\\left(\\frac{5}{2}, \\sqrt{5/2}\\right)$.',
      'This is the point of the curve directly above $(3, 0)$. The shortest segment is perpendicular to the curve, which is not vertical here.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-5-analytical-applications-differentiation',
    question: 'What is the absolute maximum value of $f(x) = x^2e^{-x}$ on the closed interval $0 \\le x \\le 4$?',
    options: ['$\\dfrac{16}{e^4}$', '$2$', '$\\dfrac{4}{e^2}$', '$\\dfrac{1}{e}$'],
    correctAnswer: 2,
    explanation:
      '$f\'(x) = e^{-x}(2x - x^2) = xe^{-x}(2 - x)$ is $0$ at $x = 0$ and $x = 2$. Comparing $f(0) = 0$, $f(2) = \\frac{4}{e^2}$ and $f(4) = \\frac{16}{e^4}$ shows the maximum value is $\\frac{4}{e^2}$. The value $2$ is where the maximum occurs, $\\frac{16}{e^4}$ is the right endpoint, and $\\frac{1}{e}$ is $f(1)$, where the factor $2x - x^2$ is largest.',
    optionExplanations: [
      'This is $f(4)$, the value at the right endpoint. Since $f$ decreases on $(2, 4)$, it is smaller than $f(2)$.',
      'This is $x = 2$, where the maximum occurs, not the maximum value of $f$.',
      '$f\'(x) = xe^{-x}(2 - x)$ is $0$ at $x = 0$ and $x = 2$. Comparing $f(0) = 0$, $f(2) = \\frac{4}{e^2}$ and $f(4) = \\frac{16}{e^4}$, the maximum is $\\frac{4}{e^2}$.',
      'This is $f(1)$, where the factor $2x - x^2$ of $f\'$ is largest. That is where $f$ rises fastest relative to $e^{-x}$, not where $f$ is greatest.',
    ],
  },

  // U6 (3 more)
  {
    type: 'mcq',
    topic: 'unit-6-integration-accumulation',
    question: 'What is $\\displaystyle\\int_0^{\\pi} x^2\\sin x\\,dx$?',
    options: ['$\\pi^2 - 4$', '$\\pi^2$', '$\\pi^2 + 4$', '$\\pi^2 - 2$'],
    correctAnswer: 0,
    explanation:
      'Integrating by parts twice gives the antiderivative $-x^2\\cos x + 2x\\sin x + 2\\cos x$. Its value is $\\pi^2 - 2$ at $\\pi$ and $2$ at $0$, so the integral is $\\pi^2 - 4$. The value $\\pi^2$ stops after one application of parts, $\\pi^2 + 4$ has a sign error in the last term, and $\\pi^2 - 2$ drops the lower limit.',
    optionExplanations: [
      'Two applications of parts give $-x^2\\cos x + 2x\\sin x + 2\\cos x$. At $\\pi$ this is $\\pi^2 - 2$, and at $0$ it is $2$, so the integral is $\\pi^2 - 4$.',
      'This keeps only $\\left[-x^2\\cos x\\right]_0^{\\pi}$, stopping after one application of parts and leaving out $\\int 2x\\cos x\\,dx$.',
      'This uses $-2\\cos x$ for the last term. Integrating $2\\sin x$ in the second application of parts gives $+2\\cos x$ after the signs combine.',
      'This evaluates the antiderivative at $\\pi$ only. At $0$ it equals $2\\cos 0 = 2$, which must be subtracted.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-6-integration-accumulation',
    question: 'What is $\\displaystyle\\int_0^{\\ln 2} \\frac{e^x}{1 + e^x}\\,dx$?',
    options: ['$\\ln 3$', '$\\ln\\dfrac{3}{2}$', '$\\ln\\dfrac{2}{3}$', '$\\ln\\left(1 + \\ln 2\\right)$'],
    correctAnswer: 1,
    explanation:
      'With $u = 1 + e^x$, the integral is $\\left[\\ln(1 + e^x)\\right]_0^{\\ln 2} = \\ln 3 - \\ln 2 = \\ln\\frac{3}{2}$. The value $\\ln 3$ drops the lower limit, $\\ln\\frac{2}{3}$ subtracts in the wrong order, and $\\ln(1 + \\ln 2)$ substitutes the limit $\\ln 2$ for $e^x$ instead of for $x$.',
    optionExplanations: [
      'This evaluates $\\ln(1 + e^x)$ only at $x = \\ln 2$. At $x = 0$ it equals $\\ln 2$, which must be subtracted.',
      'An antiderivative is $\\ln(1 + e^x)$. From $0$ to $\\ln 2$ this gives $\\ln(1 + 2) - \\ln(1 + 1) = \\ln\\frac{3}{2}$.',
      'This subtracts the upper value from the lower, $\\ln 2 - \\ln 3$. A positive integrand on $[0, \\ln 2]$ gives a positive integral.',
      'This substitutes $\\ln 2$ in place of $e^x$ rather than in place of $x$. At $x = \\ln 2$, $e^x = 2$.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-6-integration-accumulation',
    question: 'Which of the following improper integrals converges?',
    options: [
      '$\\displaystyle\\int_0^1 \\frac{dx}{x^{2/3}}$',
      '$\\displaystyle\\int_1^{\\infty} \\frac{dx}{x^{2/3}}$',
      '$\\displaystyle\\int_0^{2} \\frac{dx}{(x - 1)^2}$',
      '$\\displaystyle\\int_0^{\\infty} \\cos(2x)\\,dx$',
    ],
    correctAnswer: 0,
    explanation:
      '$\\int_0^1 x^{-2/3}\\,dx = \\lim_{a \\to 0^+}\\left[3x^{1/3}\\right]_a^1 = 3$, so it converges. On $[1, \\infty)$ the antiderivative $3x^{1/3}$ grows without bound. The integrand $\\frac{1}{(x - 1)^2}$ is unbounded at $x = 1$ and $\\int_1^2\\frac{dx}{(x - 1)^2}$ diverges, so ignoring the asymptote and getting $-2$ is wrong. And $\\frac{1}{2}\\sin 2b$ has no limit as $b \\to \\infty$.',
    optionExplanations: [
      'The integral is improper at $0$: $\\lim_{a \\to 0^+}\\left[3x^{1/3}\\right]_a^1 = 3 - 0 = 3$. Because the power $\\frac{2}{3}$ is less than $1$, the area near $0$ is finite.',
      'On $[1, \\infty)$, $\\int_1^b x^{-2/3}\\,dx = 3b^{1/3} - 3$, which grows without bound. With power $\\frac{2}{3} \\le 1$, the tail is infinite.',
      'The integrand has a vertical asymptote at $x = 1$ inside $[0, 2]$, and $\\lim_{b \\to 1^-}\\left[-\\frac{1}{x - 1}\\right]_0^b$ is infinite. Evaluating straight through gives a false value of $-2$.',
      'Here $\\int_0^b\\cos(2x)\\,dx = \\frac{1}{2}\\sin 2b$, which oscillates between $-\\frac{1}{2}$ and $\\frac{1}{2}$ as $b \\to \\infty$ and has no limit.',
    ],
  },

  // U7 (2)
  {
    type: 'mcq',
    topic: 'unit-7-differential-equations',
    question: 'A population $P(t)$ satisfies the logistic differential equation $\\dfrac{dP}{dt} = 0.02P(800 - P)$, with $P(0) = 200$, so this solution increases from 200 toward 800 and never exceeds 800. For which values of $P$ is the graph of this solution, $P$ as a function of $t$, concave up?',
    options: ['$0 < P < 800$', '$400 < P < 800$', '$P = 400$ only', '$0 < P < 400$'],
    correctAnswer: 3,
    explanation:
      'Differentiating, $\\frac{d^2P}{dt^2} = 0.02(800 - 2P)\\frac{dP}{dt}$. For $0 < P < 800$, $\\frac{dP}{dt} > 0$, so the graph is concave up exactly when $800 - 2P > 0$, that is, $P < 400$. The interval $0 < P < 800$ is where $P$ increases, $400 < P < 800$ is where it is concave down, and at $P = 400$ the second derivative is $0$, so that is the point of inflection.',
    optionExplanations: [
      'This is where $\\frac{dP}{dt} > 0$, so $P$ is increasing. Concavity depends on $\\frac{d^2P}{dt^2}$, which changes sign at $P = 400$.',
      'Above $P = 400$, $\\frac{d^2P}{dt^2} = 0.02(800 - 2P)\\frac{dP}{dt}$ is negative, so the graph is concave down there.',
      'At $P = 400$, $\\frac{d^2P}{dt^2} = 0$: that is the point of inflection, where $P$ grows fastest. The graph is concave up below it, not at it alone.',
      '$\\frac{d^2P}{dt^2} = 0.02(800 - 2P)\\frac{dP}{dt}$. With $\\frac{dP}{dt} > 0$, it is positive exactly when $P < 400$, half the carrying capacity.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-7-differential-equations',
    question: 'The amount $y$ of a substance decreases at a rate proportional to the amount present, so $\\dfrac{dy}{dt} = ky$. If $y = 50$ at $t = 0$ and $y = 20$ at $t = 3$, what is the value of $k$?',
    options: ['$\\ln\\dfrac{2}{5}$', '$\\dfrac{1}{3}\\ln\\dfrac{2}{5}$', '$-10$', '$3\\ln\\dfrac{2}{5}$'],
    correctAnswer: 1,
    explanation:
      'The solution is $y = 50e^{kt}$, so $50e^{3k} = 20$, $e^{3k} = \\frac{2}{5}$, and $k = \\frac{1}{3}\\ln\\frac{2}{5}$. The value $\\ln\\frac{2}{5}$ forgets to divide by $3$, $3\\ln\\frac{2}{5}$ multiplies instead, and $-10$ is the average rate of change per unit time, which assumes linear decrease.',
    optionExplanations: [
      'This solves $e^{k} = \\frac{2}{5}$, as if $3$ time units were $1$. From $e^{3k} = \\frac{2}{5}$, $k$ is one third of $\\ln\\frac{2}{5}$.',
      'Since $y = 50e^{kt}$, $50e^{3k} = 20$, so $3k = \\ln\\frac{2}{5}$ and $k = \\frac{1}{3}\\ln\\frac{2}{5}$, which is negative, as decay requires.',
      'This is $\\frac{20 - 50}{3}$, the average rate of change. In $\\frac{dy}{dt} = ky$ the rate is proportional to $y$, so $k$ is a relative rate, not a constant change.',
      'This multiplies $\\ln\\frac{2}{5}$ by $3$ instead of dividing. From $e^{3k} = \\frac{2}{5}$, $k = \\frac{\\ln(2/5)}{3}$.',
    ],
  },

  // U8 (1)
  {
    type: 'mcq',
    topic: 'unit-8-applications-integration',
    question: 'What is the average value of $f(x) = \\dfrac{1}{\\sqrt{4 - x^2}}$ on the closed interval $0 \\le x \\le \\sqrt{2}$?',
    options: ['$\\dfrac{\\pi}{4}$', '$\\dfrac{\\pi\\sqrt{2}}{8}$', '$\\dfrac{1 + \\sqrt{2}}{4}$', '$\\dfrac{\\pi\\sqrt{2}}{4}$'],
    correctAnswer: 1,
    explanation:
      'Since $\\int\\frac{dx}{\\sqrt{4 - x^2}} = \\arcsin\\frac{x}{2}$, the integral is $\\arcsin\\frac{\\sqrt{2}}{2} - 0 = \\frac{\\pi}{4}$, and the average value is $\\frac{1}{\\sqrt{2}}\\cdot\\frac{\\pi}{4} = \\frac{\\pi\\sqrt{2}}{8}$. The value $\\frac{\\pi}{4}$ forgets to divide by the length $\\sqrt{2}$, $\\frac{\\pi\\sqrt{2}}{4}$ multiplies by it instead, and $\\frac{1 + \\sqrt{2}}{4}$ averages the endpoint values.',
    optionExplanations: [
      'This is $\\int_0^{\\sqrt{2}}\\frac{dx}{\\sqrt{4 - x^2}} = \\frac{\\pi}{4}$, without dividing by the length of the interval, $\\sqrt{2}$.',
      'The integral is $\\left[\\arcsin\\frac{x}{2}\\right]_0^{\\sqrt{2}} = \\frac{\\pi}{4}$. Dividing by the interval length $\\sqrt{2}$ gives $\\frac{\\pi}{4\\sqrt{2}} = \\frac{\\pi\\sqrt{2}}{8}$.',
      'This averages $f(0) = \\frac{1}{2}$ and $f(\\sqrt{2}) = \\frac{1}{\\sqrt{2}}$. The average value of a function uses its integral over the interval.',
      'This multiplies the integral $\\frac{\\pi}{4}$ by the interval length $\\sqrt{2}$. The average value divides by the length.',
    ],
  },

  // Plane-position set: U9 ×3
  {
    type: 'mcq',
    topic: 'unit-9-parametric-polar-vector',
    stimulus: PLANE_POSITION,
    question: 'What is the speed of the particle at time $t = 2$?',
    options: ['$100$', '$4\\sqrt{5}$', '$4\\sqrt{10}$', '$10$'],
    correctAnswer: 3,
    explanation:
      'The velocity is $\\langle 3t^2 - 6, 4t\\rangle$, which is $\\langle 6, 8\\rangle$ at $t = 2$, so the speed is $\\sqrt{36 + 64} = 10$. The value $100$ is the square of the speed, $4\\sqrt{5}$ is the distance of the position $(-4, 8)$ from the origin, and $4\\sqrt{10}$ is the magnitude of the acceleration $\\langle 12, 4\\rangle$.',
    optionExplanations: [
      'This is $36 + 64$, the square of the speed, without taking the square root.',
      'This is the magnitude of the position $(-4, 8)$, its distance from the origin. Speed is the magnitude of the velocity.',
      'This is the magnitude of the acceleration, $\\langle 6t, 4\\rangle = \\langle 12, 4\\rangle$ at $t = 2$, rather than of the velocity.',
      'The velocity is $\\langle 3t^2 - 6, 4t\\rangle = \\langle 6, 8\\rangle$ at $t = 2$, so the speed is $\\sqrt{6^2 + 8^2} = 10$.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-9-parametric-polar-vector',
    stimulus: PLANE_POSITION,
    question: 'For which values of $t > 0$ is the particle moving to the left and upward at the same time?',
    options: ['$t > \\sqrt{2}$', '$0 < t < 2$', '$0 < t < \\sqrt{2}$', '$t > 0$'],
    correctAnswer: 2,
    explanation:
      'Moving left requires $\\frac{dx}{dt} = 3t^2 - 6 < 0$, so $t < \\sqrt{2}$, and moving up requires $\\frac{dy}{dt} = 4t > 0$, true for all $t > 0$. Together, $0 < t < \\sqrt{2}$. The interval $t > \\sqrt{2}$ is where the particle moves right, $0 < t < 2$ solves $3t^2 - 6 < 0$ incorrectly, and $t > 0$ checks only the vertical direction.',
    optionExplanations: [
      'For $t > \\sqrt{2}$, $\\frac{dx}{dt} = 3t^2 - 6 > 0$, so the particle moves to the right there.',
      'This solves $3t^2 < 6$ as $t < 2$. Dividing by $3$ gives $t^2 < 2$, so $t < \\sqrt{2}$.',
      'Left needs $\\frac{dx}{dt} = 3t^2 - 6 < 0$, so $0 < t < \\sqrt{2}$; up needs $\\frac{dy}{dt} = 4t > 0$, which holds for every $t > 0$.',
      'This checks only $\\frac{dy}{dt} = 4t > 0$. The particle also has to move left, which requires $\\frac{dx}{dt} < 0$.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-9-parametric-polar-vector',
    stimulus: PLANE_POSITION,
    question: 'What is the acceleration vector of the particle at time $t = 1$?',
    options: ['$\\langle -3, 4\\rangle$', '$\\langle 6, 4\\rangle$', '$\\langle -5, 2\\rangle$', '$2\\sqrt{13}$'],
    correctAnswer: 1,
    explanation:
      'Differentiating the velocity $\\langle 3t^2 - 6, 4t\\rangle$ gives the acceleration $\\langle 6t, 4\\rangle$, which is $\\langle 6, 4\\rangle$ at $t = 1$. The vector $\\langle -3, 4\\rangle$ is the velocity, $\\langle -5, 2\\rangle$ is the position, and $2\\sqrt{13}$ is the magnitude of the acceleration, a number rather than a vector.',
    optionExplanations: [
      'This is the velocity $\\langle 3t^2 - 6, 4t\\rangle$ at $t = 1$. Acceleration is the derivative of the velocity.',
      'The velocity is $\\langle 3t^2 - 6, 4t\\rangle$, so the acceleration is $\\langle 6t, 4\\rangle$, which equals $\\langle 6, 4\\rangle$ at $t = 1$.',
      'This is the position $\\left(1 - 6, 2\\right)$ at $t = 1$. Acceleration is the second derivative of the position.',
      'This is $|\\langle 6, 4\\rangle| = \\sqrt{52}$, the magnitude of the acceleration. The question asks for the vector itself.',
    ],
  },

  // Series set: U10 ×3
  {
    type: 'mcq',
    topic: 'unit-10-infinite-series',
    stimulus: SERIES_F,
    question: 'What is the value of $f^{(4)}(0)$?',
    options: ['$\\dfrac{1}{120}$', '$-\\dfrac{1}{3}$', '$-\\dfrac{1}{5}$', '$\\dfrac{1}{5}$'],
    correctAnswer: 3,
    explanation:
      'The coefficient of $x^4$ is $\\frac{1}{5!} = \\frac{1}{120}$, and it equals $\\frac{f^{(4)}(0)}{4!}$, so $f^{(4)}(0) = \\frac{24}{120} = \\frac{1}{5}$. The value $\\frac{1}{120}$ is the coefficient itself, $-\\frac{1}{3}$ is $f\'\'(0)$, and $-\\frac{1}{5}$ has a sign error, since the $x^4$ term is positive.',
    optionExplanations: [
      'This is the coefficient of $x^4$. The coefficient equals $\\frac{f^{(4)}(0)}{4!}$, so it must be multiplied by $4! = 24$.',
      'This is $f\'\'(0) = 2!\\cdot\\left(-\\frac{1}{6}\\right)$, from the $x^2$ term. The fourth derivative comes from the $x^4$ term.',
      'This has the wrong sign. The term $\\frac{(-1)^n x^{2n}}{(2n + 1)!}$ with $n = 2$ is $+\\frac{x^4}{120}$.',
      'The $x^4$ coefficient is $\\frac{1}{5!}$, and it equals $\\frac{f^{(4)}(0)}{4!}$. So $f^{(4)}(0) = \\frac{4!}{5!} = \\frac{1}{5}$.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-10-infinite-series',
    stimulus: SERIES_F,
    question: 'What is $\\displaystyle\\lim_{x \\to 0} \\frac{f(x) - 1}{x^2}$?',
    options: ['$0$', '$-\\dfrac{1}{6}$', '$\\dfrac{1}{120}$', '$-\\dfrac{1}{3}$'],
    correctAnswer: 1,
    explanation:
      'From the series, $\\frac{f(x) - 1}{x^2} = -\\frac{1}{3!} + \\frac{x^2}{5!} - \\cdots$, which approaches $-\\frac{1}{6}$. The value $0$ reads the form $\\frac{0}{0}$ as $0$, $\\frac{1}{120}$ is the next coefficient, and $-\\frac{1}{3}$ is $f\'\'(0)$ rather than the $x^2$ coefficient.',
    optionExplanations: [
      'The form is $\\frac{0}{0}$, not $0$. Dividing the series for $f(x) - 1$ by $x^2$ leaves a nonzero constant term.',
      '$f(x) - 1 = -\\frac{x^2}{6} + \\frac{x^4}{120} - \\cdots$, so dividing by $x^2$ gives $-\\frac{1}{6} + \\frac{x^2}{120} - \\cdots$, which approaches $-\\frac{1}{6}$.',
      'This is the coefficient of $x^4$. After dividing by $x^2$, that term becomes $\\frac{x^2}{120}$, which approaches $0$.',
      'This is $f\'\'(0) = 2!\\left(-\\frac{1}{6}\\right)$. The limit equals the $x^2$ coefficient, $-\\frac{1}{6}$, which is $\\frac{f\'\'(0)}{2}$.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-10-infinite-series',
    stimulus: SERIES_F,
    question: 'The first two nonzero terms of the series are integrated to approximate $\\displaystyle\\int_0^1 f(x)\\,dx$. What is the alternating series error bound for this approximation?',
    options: ['$\\dfrac{1}{18}$', '$\\dfrac{1}{120}$', '$\\dfrac{1}{600}$', '$\\dfrac{1}{5040}$'],
    correctAnswer: 2,
    explanation:
      'Integrating term by term, $\\int_0^1 f(x)\\,dx = 1 - \\frac{1}{18} + \\frac{1}{600} - \\cdots$, an alternating series with decreasing terms. Using the first two terms, the error is at most the first omitted term, $\\frac{1}{5\\cdot5!} = \\frac{1}{600}$. The value $\\frac{1}{18}$ is the last term used, $\\frac{1}{120}$ is the coefficient of $x^4$ before integrating, and $\\frac{1}{5040}$ is a later coefficient.',
    optionExplanations: [
      'This is the second term of the integrated series, the last one used. The bound is the first term left out.',
      'This is the coefficient $\\frac{1}{5!}$ of $x^4$ in $f$, before integrating. Integrating $\\frac{x^4}{120}$ from $0$ to $1$ gives $\\frac{1}{600}$.',
      'The integrated series is $1 - \\frac{1}{18} + \\frac{1}{600} - \\cdots$, alternating with decreasing terms, so the error after two terms is at most $\\frac{1}{600}$.',
      'This is $\\frac{1}{7!}$, the coefficient of $x^6$. The first omitted term of the integrated series comes from the $x^4$ term.',
    ],
  },

  // U10 (3 more)
  {
    type: 'mcq',
    topic: 'unit-10-infinite-series',
    question: 'What is the interval of convergence of the power series $\\displaystyle\\sum_{n=1}^{\\infty} \\frac{(2x - 1)^n}{n}$?',
    options: ['$0 < x \\le 1$', '$0 \\le x < 1$', '$0 < x < 1$', '$-1 \\le x < 1$'],
    correctAnswer: 1,
    explanation:
      'The ratio test gives $|2x - 1| < 1$, so $0 < x < 1$. At $x = 0$ the series is $\\sum\\frac{(-1)^n}{n}$, which converges by the alternating series test, and at $x = 1$ it is $\\sum\\frac{1}{n}$, which diverges. So the interval is $0 \\le x < 1$. The other choices reverse or omit the endpoints, or ignore the $2x - 1$.',
    optionExplanations: [
      'This reverses the endpoints. At $x = 1$, $2x - 1 = 1$ and the series is the divergent harmonic series; at $x = 0$ it alternates and converges.',
      'The ratio test gives $|2x - 1| < 1$, or $0 < x < 1$. At $x = 0$ the series $\\sum\\frac{(-1)^n}{n}$ converges, and at $x = 1$ the series $\\sum\\frac{1}{n}$ diverges.',
      'This is the open interval from the ratio test. At $x = 0$ the series becomes the alternating harmonic series, which converges.',
      'This is the interval for $\\sum\\frac{x^n}{n}$. Here the variable is $2x - 1$, so the series is centered at $\\frac{1}{2}$ with radius $\\frac{1}{2}$.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-10-infinite-series',
    question: 'What is the sum of the series $\\displaystyle\\sum_{n=2}^{\\infty} 3\\left(-\\frac{1}{2}\\right)^n$?',
    options: ['$2$', '$\\dfrac{3}{2}$', '$\\dfrac{1}{2}$', '$-1$'],
    correctAnswer: 2,
    explanation:
      'The first term ($n = 2$) is $3\\cdot\\frac{1}{4} = \\frac{3}{4}$ and the ratio is $-\\frac{1}{2}$, so the sum is $\\frac{3/4}{1 + 1/2} = \\frac{1}{2}$. The value $2$ starts at $n = 0$, $-1$ starts at $n = 1$, and $\\frac{3}{2}$ uses the ratio $+\\frac{1}{2}$.',
    optionExplanations: [
      'This is $\\frac{3}{1 + 1/2}$, the sum starting at $n = 0$ with first term $3$. The series starts at $n = 2$, with first term $\\frac{3}{4}$.',
      'This uses the ratio $+\\frac{1}{2}$: $\\frac{3/4}{1 - 1/2}$. The ratio is $-\\frac{1}{2}$, so the denominator is $1 + \\frac{1}{2}$.',
      'The first term is $3\\left(-\\frac{1}{2}\\right)^2 = \\frac{3}{4}$ and the ratio is $-\\frac{1}{2}$, so the sum is $\\frac{3/4}{1 - (-1/2)} = \\frac{1}{2}$.',
      'This starts at $n = 1$, with first term $-\\frac{3}{2}$, giving $\\frac{-3/2}{3/2}$. The series starts at $n = 2$.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-10-infinite-series',
    question: 'What is the coefficient of $(x - 2)^3$ in the Taylor series for $f(x) = \\dfrac{1}{x}$ about $x = 2$?',
    options: ['$-\\dfrac{3}{8}$', '$\\dfrac{1}{16}$', '$-\\dfrac{1}{8}$', '$-\\dfrac{1}{16}$'],
    correctAnswer: 3,
    explanation:
      'Here $f\'\'\'(x) = -\\frac{6}{x^4}$, so $f\'\'\'(2) = -\\frac{6}{16}$ and the coefficient is $\\frac{f\'\'\'(2)}{3!} = -\\frac{1}{16}$. The value $-\\frac{3}{8}$ forgets to divide by $3!$, $\\frac{1}{16}$ has a sign error, and $-\\frac{1}{8}$ uses $x^3$ instead of $x^4$ in $f\'\'\'$.',
    optionExplanations: [
      'This is $f\'\'\'(2) = -\\frac{6}{16}$ itself. The Taylor coefficient divides it by $3! = 6$.',
      'This has the wrong sign. Each derivative of $x^{-1}$ alternates sign, and the third derivative $-6x^{-4}$ is negative.',
      'This uses $f\'\'\'(x) = -\\frac{6}{x^3}$. Differentiating $x^{-1}$ three times gives $-6x^{-4}$, so the denominator is $2^4 = 16$.',
      '$f\'\'\'(x) = -6x^{-4}$, so $f\'\'\'(2) = -\\frac{6}{16}$, and the coefficient is $\\frac{f\'\'\'(2)}{3!} = -\\frac{6}{16\\cdot6} = -\\frac{1}{16}$.',
    ],
  },

  /* ============== PART B — GRAPHING CALCULATOR (Q30–Q42) ============== */

  {
    type: 'mcq',
    topic: 'unit-3-composite-implicit-inverse',
    question: 'Let $f(x) = x + \\ln x$ for $x > 0$, and let $g$ be the inverse function of $f$. What is the value of $g\'(3)$?',
    options: ['$0.750$', '$1.453$', '$0.688$', '$2.208$'],
    correctAnswer: 2,
    explanation:
      'First solve $f(a) = a + \\ln a = 3$ with a calculator: $a \\approx 2.208$. Then $g\'(3) = \\frac{1}{f\'(a)} = \\frac{1}{1 + 1/a} \\approx \\frac{1}{1.453} \\approx 0.688$. The value $0.750$ is $\\frac{1}{f\'(3)}$, $1.453$ is $f\'(a)$ without the reciprocal, and $2.208$ is $g(3)$.',
    optionExplanations: [
      'This is $\\frac{1}{f\'(3)} = \\frac{1}{1 + 1/3}$, which evaluates $f\'$ at $3$ instead of at $g(3) \\approx 2.208$.',
      'This is $f\'(g(3)) \\approx 1.453$ without taking the reciprocal. The derivative of the inverse is $\\frac{1}{f\'(g(3))}$.',
      'Solving $a + \\ln a = 3$ on the calculator gives $a = g(3) \\approx 2.208$, so $g\'(3) = \\frac{1}{1 + 1/a} \\approx 0.688$.',
      'This is $g(3) \\approx 2.208$, the value of the inverse function, not its derivative.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-4-contextual-applications-differentiation',
    question: 'A particle moves along the $x$-axis with velocity $v(t) = t\\sin\\left(t^2\\right) - 1$ for $0 \\le t \\le 3$. At what times in the interval $0 < t < 3$ does the particle change direction?',
    options: [
      '$t \\approx 1.772$ and $t \\approx 2.507$',
      '$t \\approx 1.084$ and $t \\approx 2.585$',
      '$t \\approx 1.084$, $t \\approx 1.565$ and $t \\approx 2.585$',
      '$t \\approx 1.565$ only',
    ],
    correctAnswer: 2,
    explanation:
      'The particle changes direction where $v(t)$ changes sign. Graphing $v$ shows sign changes at $t \\approx 1.084$, $1.565$ and $2.585$. The times $1.772$ and $2.507$ are zeros of $\\sin(t^2)$, not of $v$, and the other two choices list only the changes from left to right or only the change from right to left.',
    optionExplanations: [
      'These are where $\\sin(t^2) = 0$, at $t = \\sqrt{\\pi}$ and $t = \\sqrt{2\\pi}$. There $v = -1$, so the particle is moving left, not turning.',
      'These are only the times when $v$ changes from negative to positive. At $t \\approx 1.565$, $v$ changes from positive to negative, which is also a change of direction.',
      'Graphing $v(t) = t\\sin(t^2) - 1$ on $0 < t < 3$ shows that it changes sign at $t \\approx 1.084$, $1.565$ and $2.585$, so the particle changes direction three times.',
      'This finds only the time when $v$ changes from positive to negative. The velocity also changes sign at $t \\approx 1.084$ and $t \\approx 2.585$.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-5-analytical-applications-differentiation',
    question: 'The derivative of a function $f$ is $f\'(x) = 2^x - x^2 - 1$. At what value of $x$ in the open interval $0 < x < 6$ does $f$ have a relative minimum?',
    options: ['$x \\approx 3.212$', '$x \\approx 4.257$', '$x = 1$', '$x = 1$ and $x \\approx 4.257$'],
    correctAnswer: 1,
    explanation:
      'Graphing $f\'$ shows zeros at $x = 1$ and $x \\approx 4.257$ in $(0, 6)$. $f\'$ changes from positive to negative at $x = 1$ (a relative maximum) and from negative to positive at $x \\approx 4.257$ (a relative minimum). The value $3.212$ is where $f\'$ is least, a point of inflection of $f$, and listing both zeros counts the maximum as a minimum.',
    optionExplanations: [
      'This is where $f\'$ reaches its minimum, so $f\'\' = 0$ there. That is a point of inflection of $f$, not an extremum.',
      'The calculator shows $f\' = 0$ at $x = 1$ and $x \\approx 4.257$. Only at $4.257$ does $f\'$ change from negative to positive, so that is the relative minimum.',
      'At $x = 1$, $f\'$ changes from positive to negative, so $f$ has a relative maximum there, not a minimum.',
      'This counts both zeros of $f\'$. At $x = 1$ the sign change is from positive to negative, which is a relative maximum.',
    ],
  },

  // Density set: U8, U6
  {
    type: 'mcq',
    topic: 'unit-8-applications-integration',
    stimulus: DENSITY,
    question: 'To the nearest whole number, how many people live within 3 miles of the center of town?',
    options: ['$5{,}241$', '$6{,}326$', '$904$', '$39{,}746$'],
    correctAnswer: 3,
    explanation:
      'A thin ring of radius $r$ and width $dr$ has area about $2\\pi r\\,dr$, so the population is $\\int_0^3 2\\pi r\\,D(r)\\,dr \\approx 39{,}746$. The value $5{,}241$ integrates the density alone, $6{,}326$ leaves out the $2\\pi$, and $904$ is the density $D(3)$ in people per square mile, not a number of people.',
    optionExplanations: [
      'This is $\\int_0^3 D(r)\\,dr$, which treats density per square mile as people per mile. Each ring has area $2\\pi r\\,dr$.',
      'This is $\\int_0^3 r\\,D(r)\\,dr$, which leaves out the factor $2\\pi$ from the circumference of each ring.',
      'This is $D(3) \\approx 904$, the density at the edge of the 3-mile circle, in people per square mile. It is not a population.',
      'The population is $\\int_0^3 2\\pi r\\,D(r)\\,dr = \\int_0^3 6000\\pi re^{-0.4r}\\,dr$, which the calculator gives as about $39{,}746$ people.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-6-integration-accumulation',
    stimulus: DENSITY,
    question: 'Let $P(x) = \\displaystyle\\int_0^x 2\\pi r\\,D(r)\\,dr$ be the number of people who live within $x$ miles of the center. What is the value of $P\'(2)$, in people per mile?',
    options: ['$1{,}348$', '$16{,}939$', '$8{,}470$', '$5{,}392$'],
    correctAnswer: 1,
    explanation:
      'By the Fundamental Theorem, $P\'(x) = 2\\pi x\\,D(x)$, so $P\'(2) = 4\\pi D(2) = 4\\pi\\cdot3000e^{-0.8} \\approx 16{,}939$ people per mile. The value $1{,}348$ is $D(2)$, $8{,}470$ is $2\\pi D(2)$ without the factor $x = 2$, and $5{,}392$ is $2r\\,D(r)$ at $r = 2$ without the $\\pi$.',
    optionExplanations: [
      'This is $D(2)$, the density in people per square mile. $P\'(2)$ is the integrand $2\\pi r\\,D(r)$ evaluated at $r = 2$.',
      'By the Fundamental Theorem, $P\'(x) = 2\\pi x\\,D(x)$. At $x = 2$ the calculator gives $4\\pi\\cdot3000e^{-0.8} \\approx 16{,}939$ people per mile.',
      'This is $2\\pi D(2)$, which leaves out the factor $r = 2$ in the circumference $2\\pi r$.',
      'This is $2\\cdot2\\cdot D(2) = 4D(2)$, which leaves out the $\\pi$ in the circumference $2\\pi r$ of each ring.',
    ],
  },

  {
    type: 'mcq',
    topic: 'unit-6-integration-accumulation',
    question: 'Let $M$ be the midpoint Riemann sum with three subintervals of equal length that approximates $\\displaystyle\\int_1^4 \\sqrt{x^3 + 1}\\,dx$. Which of the following is true?',
    options: [
      '$M \\approx 12.793$, which is greater than the integral',
      '$M \\approx 12.793$, which is less than the integral',
      '$M \\approx 13.030$, which is greater than the integral',
      '$M \\approx 16.354$, which is greater than the integral',
    ],
    correctAnswer: 1,
    explanation:
      'With midpoints $1.5$, $2.5$ and $3.5$ and width $1$, $M = \\sqrt{4.375} + \\sqrt{16.625} + \\sqrt{43.875} \\approx 12.793$, and the calculator gives $\\int_1^4\\sqrt{x^3 + 1}\\,dx \\approx 12.871$. So $M$ is less than the integral, as expected for a concave-up integrand. The value $13.030$ is the trapezoidal sum and $16.354$ is the right Riemann sum.',
    optionExplanations: [
      'The value of $M$ is right, but the calculator gives the integral as about $12.871$, which is larger. A midpoint sum underestimates a concave-up function.',
      '$M = f(1.5) + f(2.5) + f(3.5) \\approx 12.793$ with $f(x) = \\sqrt{x^3 + 1}$, and the integral is about $12.871$, so $M$ is less than the integral.',
      'This is the trapezoidal sum, $\\frac{1}{2}\\left[f(1) + 2f(2) + 2f(3) + f(4)\\right]$, which uses endpoints rather than midpoints.',
      'This is the right Riemann sum, $f(2) + f(3) + f(4)$. The midpoint sum uses $x = 1.5$, $2.5$ and $3.5$.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-7-differential-equations',
    question: 'Let $y = f(x)$ be the solution to the differential equation $\\dfrac{dy}{dx} = y^2\\sin\\left(x^2\\right)$ with $f(0) = \\dfrac{1}{2}$. What is the value of $f(2)$?',
    options: ['$0.357$', '$0.837$', '$1.364$', '$0.500$'],
    correctAnswer: 1,
    explanation:
      'Separating, $\\frac{dy}{y^2} = \\sin(x^2)\\,dx$, so $-\\frac{1}{y} = \\int_0^x\\sin(t^2)\\,dt - 2$, using $f(0) = \\frac{1}{2}$. Then $f(2) = \\frac{1}{2 - \\int_0^2\\sin(t^2)\\,dt} \\approx \\frac{1}{2 - 0.805} \\approx 0.837$. The value $0.357$ integrates $y^{-2}$ as $+\\frac{1}{y}$, $1.364$ separates as $y^2\\,dy = \\sin(x^2)\\,dx$, and $0.500$ uses the tangent line at $x = 0$, where the slope is $0$.',
    optionExplanations: [
      'This uses $\\int y^{-2}\\,dy = \\frac{1}{y}$, which drops the negative sign and leads to $f(2) = \\frac{1}{2 + \\int_0^2\\sin(t^2)\\,dt}$.',
      'Separating gives $-\\frac{1}{y} = \\int_0^x\\sin(t^2)\\,dt - 2$. The calculator gives $\\int_0^2\\sin(t^2)\\,dt \\approx 0.805$, so $f(2) = \\frac{1}{2 - 0.805} \\approx 0.837$.',
      'This separates as $y^2\\,dy = \\sin(x^2)\\,dx$, multiplying by $y^2$ instead of dividing, which gives $\\frac{y^3}{3} = \\int_0^x\\sin(t^2)\\,dt + \\frac{1}{24}$.',
      'This is the tangent-line estimate from $(0, \\frac{1}{2})$, where $\\frac{dy}{dx} = 0$. The slope becomes positive for $x > 0$, so the solution rises above $\\frac{1}{2}$.',
    ],
  },

  // Polar-loop set: U9 ×3
  {
    type: 'mcq',
    topic: 'unit-9-parametric-polar-vector',
    stimulus: POLAR_LOOP,
    question: 'What is the area of the region enclosed by the loop?',
    options: ['$4.382$', '$3.142$', '$0.519$', '$2.191$'],
    correctAnswer: 3,
    explanation:
      'The area is $\\frac{1}{2}\\int_0^{\\pi}(\\theta\\sin\\theta)^2\\,d\\theta \\approx 2.191$. The value $4.382$ leaves out the $\\frac{1}{2}$, $3.142$ integrates $r$ instead of $\\frac{1}{2}r^2$, and $0.519$ integrates only from $0$ to $\\frac{\\pi}{2}$.',
    optionExplanations: [
      'This is $\\int_0^{\\pi} r^2\\,d\\theta$ without the factor $\\frac{1}{2}$ in the polar area formula.',
      'This is $\\int_0^{\\pi}\\theta\\sin\\theta\\,d\\theta = \\pi$, which integrates $r$ itself instead of $\\frac{1}{2}r^2$, the polar area integrand.',
      'This integrates only over $0 \\le \\theta \\le \\frac{\\pi}{2}$. The loop is traced for all of $0 \\le \\theta \\le \\pi$.',
      'The polar area formula gives $\\frac{1}{2}\\int_0^{\\pi}\\theta^2\\sin^2\\theta\\,d\\theta$, which the calculator evaluates as about $2.191$.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-9-parametric-polar-vector',
    stimulus: POLAR_LOOP,
    question: 'What is the greatest distance from the origin to a point on the loop?',
    options: ['$2.029$', '$1.820$', '$1.571$', '$1.710$'],
    correctAnswer: 1,
    explanation:
      'The distance from the origin is $r = \\theta\\sin\\theta$. Setting $\\frac{dr}{d\\theta} = \\sin\\theta + \\theta\\cos\\theta = 0$ gives $\\theta \\approx 2.029$, where $r \\approx 1.820$. The value $2.029$ is the angle, $1.571$ is $r$ at $\\theta = \\frac{\\pi}{2}$, and $1.710$ is the greatest $y$-coordinate, which maximizes $r\\sin\\theta$ instead of $r$.',
    optionExplanations: [
      'This is the angle $\\theta \\approx 2.029$ at which the maximum occurs, not the distance $r$ there.',
      'Solving $\\frac{dr}{d\\theta} = \\sin\\theta + \\theta\\cos\\theta = 0$ on the calculator gives $\\theta \\approx 2.029$, where $r = \\theta\\sin\\theta \\approx 1.820$.',
      'This is $r\\left(\\frac{\\pi}{2}\\right) = \\frac{\\pi}{2}$. Beyond $\\frac{\\pi}{2}$, $r$ keeps increasing until $\\frac{dr}{d\\theta} = 0$ near $2.029$.',
      'This is the greatest value of $y = r\\sin\\theta$, the height of the loop. Distance from the origin is $r$ itself.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-9-parametric-polar-vector',
    stimulus: POLAR_LOOP,
    question: 'What is the slope of the line tangent to the loop at the point where $\\theta = 2$?',
    options: ['$-0.687$', '$-1.686$', '$-2.185$', '$0.407$'],
    correctAnswer: 3,
    explanation:
      'With $x = r\\cos\\theta$ and $y = r\\sin\\theta$, $\\frac{dy}{dx} = \\frac{r\'\\sin\\theta + r\\cos\\theta}{r\'\\cos\\theta - r\\sin\\theta}$. At $\\theta = 2$ this is $\\frac{-0.687}{-1.686} \\approx 0.407$. The values $-0.687$ and $-1.686$ are $\\frac{dy}{d\\theta}$ and $\\frac{dx}{d\\theta}$ alone, and $-2.185$ is $\\tan 2$, the slope of the segment from the origin to the point.',
    optionExplanations: [
      'This is $\\frac{dy}{d\\theta} \\approx -0.687$ at $\\theta = 2$. The slope divides it by $\\frac{dx}{d\\theta}$.',
      'This is $\\frac{dx}{d\\theta} \\approx -1.686$ at $\\theta = 2$, the denominator of the slope, not the slope itself.',
      'This is $\\tan 2$, the slope of the line from the origin through the point. The tangent line has a different slope unless $\\frac{dr}{d\\theta} = 0$.',
      '$\\frac{dy}{dx} = \\frac{dy/d\\theta}{dx/d\\theta} = \\frac{r\'\\sin\\theta + r\\cos\\theta}{r\'\\cos\\theta - r\\sin\\theta}$, which the calculator evaluates at $\\theta = 2$ as $\\frac{-0.687}{-1.686} \\approx 0.407$.',
    ],
  },

  {
    type: 'mcq',
    topic: 'unit-8-applications-integration',
    stimulus: 'Let $R$ be the region enclosed by the graphs of $y = 3 - e^x$ and $y = x^2$.',
    question: 'A solid has base $R$, and its cross sections perpendicular to the $x$-axis are squares. Find the volume of this solid.',
    options: ['$19.975$', '$13.337$', '$11.473$', '$6.358$'],
    correctAnswer: 3,
    explanation:
      'The graphs meet at $x = a \\approx -1.677$ and $x = b \\approx 0.834$, with $3 - e^x$ on top. Each square has side $3 - e^x - x^2$, so $V = \\int_a^b\\left(3 - e^x - x^2\\right)^2dx \\approx 6.358$. The value $19.975$ multiplies by $\\pi$ as if the cross sections were disks, $13.337$ squares the area of $R$ instead of integrating squared sides, and $11.473$ is $\\pi$ times the area.',
    optionExplanations: [
      'This is $\\pi\\int_a^b(3 - e^x - x^2)^2\\,dx$, which treats the cross sections as disks. A square of side $s$ has area $s^2$, with no $\\pi$.',
      'This is $(3.652)^2$, the square of the area of $R$. The volume integrates the area of each square cross section, $s^2$, across the base.',
      'This is $\\pi$ times the area of $R$, about $\\pi(3.652)$. Neither the factor $\\pi$ nor the area alone gives the volume of square cross sections.',
      'The calculator gives intersections at $x \\approx -1.677$ and $x \\approx 0.834$. Each square has side $3 - e^x - x^2$, so $V = \\int_{-1.677}^{0.834}(3 - e^x - x^2)^2\\,dx \\approx 6.358$.',
    ],
  },

  // U10 (2)
  {
    type: 'mcq',
    topic: 'unit-10-infinite-series',
    question: 'The polynomial $P(x) = x - \\dfrac{x^3}{3} + \\dfrac{x^5}{5}$, made of the first three nonzero terms of the Maclaurin series for $\\arctan x$, is used to approximate $\\arctan x$ for $0 \\le x \\le b$, where $b < 1$. What is the greatest value of $b$ for which the alternating series error bound guarantees $\\left|\\arctan x - P(x)\\right| < 0.001$?',
    options: ['$0.347$', '$1.260$', '$0.492$', '$0.373$'],
    correctAnswer: 2,
    explanation:
      'For $0 \\le x < 1$ the series $x - \\frac{x^3}{3} + \\frac{x^5}{5} - \\frac{x^7}{7} + \\cdots$ alternates with terms decreasing to $0$, so the error is at most the first omitted term, $\\frac{x^7}{7}$. Solving $\\frac{b^7}{7} = 0.001$ gives $b = 0.007^{1/7} \\approx 0.492$. The value $0.347$ uses the last term kept, $1.260$ divides by $7!$ as in the sine series, and $0.373$ drops the $7$.',
    optionExplanations: [
      'This solves $\\frac{b^5}{5} = 0.001$, using the last term of $P$. The bound is the first term left out, $\\frac{x^7}{7}$.',
      'This solves $\\frac{b^7}{7!} = 0.001$, using the factorial denominators of the sine series. The arctangent series divides by $2n + 1$, not $(2n + 1)!$.',
      'The first omitted term is $\\frac{x^7}{7}$, and the series alternates with decreasing terms for $0 \\le x < 1$. Solving $\\frac{b^7}{7} = 0.001$ on the calculator gives $b \\approx 0.492$.',
      'This solves $b^7 = 0.001$, dropping the denominator $7$ of the first omitted term $\\frac{x^7}{7}$.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-10-infinite-series',
    question: 'Let $S_N = \\displaystyle\\sum_{n=0}^{N} \\frac{2^n}{n!}$, a partial sum of the Maclaurin series for $e^x$ at $x = 2$. What is the least value of $N$ for which $\\left|e^2 - S_N\\right| < 0.01$?',
    options: ['$N = 9$', '$N = 6$', '$N = 8$', '$N = 7$'],
    correctAnswer: 3,
    explanation:
      'A calculator gives $S_6 \\approx 7.35556$ (error about $0.0335$) and $S_7 \\approx 7.38095$ (error about $0.0081$), so the least $N$ is $7$. The value $9$ is what the Lagrange bound with $M = e^2$ guarantees, which is enough but not the least, $8$ waits until the last included term is below $0.01$, and $6$ counts the seven terms of $S_6$ as if they were $S_7$.',
    optionExplanations: [
      'This is the least $N$ for which the Lagrange bound $\\frac{e^2\\cdot2^{N+1}}{(N + 1)!}$ is below $0.01$. That bound is larger than the actual error, so a smaller $N$ already works.',
      'With $N = 6$ the actual error is about $e^2 - 7.35556 \\approx 0.0335$, which is more than $0.01$. This miscounts terms against the index $N$.',
      'This waits until the last included term $\\frac{2^N}{N!}$ is below $0.01$. The actual error drops below $0.01$ one step earlier.',
      'The calculator gives $S_7 \\approx 7.38095$, so $e^2 - S_7 \\approx 0.0081 < 0.01$, while $e^2 - S_6 \\approx 0.0335$. So $N = 7$ is the least.',
    ],
  },
]
