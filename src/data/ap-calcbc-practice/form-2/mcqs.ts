import type { MCQItem } from '@/components/FullLengthPracticeExam'

/**
 * AP Calculus BC practice exam, form 2: 42 MCQs (May 2027 Section I).
 *   U1 2 · U2 3 · U3 2 · U4 3 · U5 4 · U6 8 · U7 3 · U8 3 · U9 6 · U10 8
 * Part A (Q1–Q29): no calculator, 62 minutes. Part B (Q30–Q42): graphing
 * calculator, 38 minutes; every Part B item is calculator-active. The runner
 * splits the parts by position, so Part B items must stay in positions 30–42.
 * Sets that share a stimulus are consecutive: Q9–Q11 (derivatives of f at 2),
 * Q12–Q14 (graph of f), Q24–Q25 (limaçon), Q32–Q33 (bakery flour),
 * Q36–Q38 (particle in the plane).
 */

const TAYLOR_TABLE =
  'The function $f$ has derivatives of all orders for all real numbers, and $f\'\'(x) > 0$ for $2 \\le x \\le 2.5$. The values of $f$ and its first three derivatives at $x = 2$ are given in the table.\n\n' +
  '| $n$ | 0 | 1 | 2 | 3 |\n|---|---|---|---|---|\n' +
  '| $f^{(n)}(2)$ | 3 | $-2$ | 5 | 12 |'

const GRAPH_F =
  'The continuous function $f$ is defined on the closed interval $-4 \\le x \\le 4$. On $-4 \\le x \\le 0$, the graph of $f$ is the semicircle of radius 2 centered at $(-2, 0)$ that lies below the $x$-axis. On $0 \\le x \\le 4$, the graph consists of two line segments, from $(0, 0)$ to $(2, 3)$ and from $(2, 3)$ to $(4, -1)$; the second segment crosses the $x$-axis at $x = 3.5$.\n\nLet $g(x) = \\displaystyle\\int_0^x f(t)\\,dt$ for $-4 \\le x \\le 4$.'

const LIMACON = 'The polar curve $r = 3 - 2\\sin\\theta$, for $0 \\le \\theta \\le 2\\pi$, is a closed curve that encloses the origin.'

const FLOUR =
  'During a 12-hour shift, a bakery uses flour at a rate modeled by $F(t) = 40te^{-0.25t}$ kilograms per hour, where $t$ is the number of hours since the shift began, for $0 \\le t \\le 12$.'

const VELOCITY_PLANE =
  'A particle moves in the $xy$-plane so that, for $t \\ge 0$, $\\dfrac{dx}{dt} = \\cos\\left(t^2\\right)$ and $\\dfrac{dy}{dt} = 2te^{-t}$. At time $t = 0$ the particle is at the point $(1, 2)$.'

export const MCQS: MCQItem[] = [
  /* ============== PART A — NO CALCULATOR (Q1–Q29) ============== */

  // U1 (2)
  {
    type: 'mcq',
    topic: 'unit-1-limits-continuity',
    question: 'What is $\\displaystyle\\lim_{x \\to \\infty} \\frac{2^x + x^{10}}{3^x}$?',
    options: ['$\\dfrac{2}{3}$', '$\\dfrac{\\ln 2}{\\ln 3}$', '$\\infty$', '$0$'],
    correctAnswer: 3,
    explanation:
      'Split the quotient: $\\left(\\frac{2}{3}\\right)^x \\to 0$, and $\\frac{x^{10}}{3^x} \\to 0$ because an exponential with base greater than $1$ grows faster than any power of $x$. So the limit is $0$. The value $\\frac{2}{3}$ compares the bases instead of the functions, $\\frac{\\ln 2}{\\ln 3}$ stops after one application of L\'Hospital\'s rule and keeps only the exponential coefficients, and $\\infty$ lets $x^{10}$ dominate.',
    optionExplanations: [
      'This is the ratio of the bases. The term $\\frac{2^x}{3^x} = \\left(\\frac{2}{3}\\right)^x$ approaches $0$, not $\\frac{2}{3}$, because $\\frac{2}{3} < 1$.',
      'This differentiates once and compares the coefficients $\\ln 2$ and $\\ln 3$, but $\\frac{2^x\\ln 2}{3^x\\ln 3}$ still contains $\\left(\\frac{2}{3}\\right)^x \\to 0$.',
      'This assumes $x^{10}$ dominates. Any exponential $b^x$ with $b > 1$ eventually outgrows every power of $x$, so $\\frac{x^{10}}{3^x} \\to 0$.',
      'Writing the quotient as $\\left(\\frac{2}{3}\\right)^x + \\frac{x^{10}}{3^x}$, both terms approach $0$: the first because $\\frac{2}{3} < 1$, the second because $3^x$ outgrows $x^{10}$.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-1-limits-continuity',
    stimulus:
      'The function $f$ is continuous on the closed interval $1 \\le x \\le 5$. Selected values of $f$ are given in the table.\n\n' +
      '| $x$ | 1 | 2 | 3 | 4 | 5 |\n|---|---|---|---|---|---|\n' +
      '| $f(x)$ | 3 | $-1$ | 2 | $-2$ | 1 |',
    question: 'What is the least number of solutions that the equation $f(x) = 0$ must have on the interval $1 \\le x \\le 5$?',
    options: ['$2$', '$4$', '$1$', '$5$'],
    correctAnswer: 1,
    explanation:
      'By the Intermediate Value Theorem, $f$ has a zero in each interval where it changes sign: $(1, 2)$, $(2, 3)$, $(3, 4)$ and $(4, 5)$, so at least $4$ solutions. The value $2$ counts the negative entries, $1$ applies the theorem only to the whole interval $[1, 5]$, and $5$ counts the table entries.',
    optionExplanations: [
      'This counts the two negative values in the table. Each sign change between consecutive entries guarantees its own zero, and there are four sign changes.',
      'The function changes sign on $(1, 2)$, $(2, 3)$, $(3, 4)$ and $(4, 5)$. By the Intermediate Value Theorem, each of these four intervals contains a solution.',
      'This applies the Intermediate Value Theorem to $[1, 5]$ as a whole, where $f(1)$ and $f(5)$ are both positive. Checking consecutive entries shows four sign changes.',
      'This counts the five table entries. None of them is a zero; the zeros come from the four sign changes between consecutive entries.',
    ],
  },

  // U2 (3)
  {
    type: 'mcq',
    topic: 'unit-2-differentiation-definition',
    question: 'What is $\\displaystyle\\lim_{h \\to 0} \\frac{\\arcsin\\left(\\frac{1}{2} + h\\right) - \\frac{\\pi}{6}}{h}$?',
    options: ['$\\dfrac{\\sqrt{3}}{2}$', '$\\dfrac{4}{3}$', '$\\dfrac{2\\sqrt{3}}{3}$', '$0$'],
    correctAnswer: 2,
    explanation:
      'The limit is the derivative of $\\arcsin x$ at $x = \\frac{1}{2}$, which is $\\frac{1}{\\sqrt{1 - 1/4}} = \\frac{2}{\\sqrt{3}} = \\frac{2\\sqrt{3}}{3}$. The value $\\frac{\\sqrt{3}}{2}$ is the reciprocal, $\\frac{4}{3}$ leaves out the square root, and $0$ substitutes $h = 0$ into the numerator only.',
    optionExplanations: [
      'This is $\\sqrt{1 - \\frac{1}{4}}$, the reciprocal of the derivative. The derivative of $\\arcsin x$ is $\\frac{1}{\\sqrt{1 - x^2}}$.',
      'This is $\\frac{1}{1 - \\frac{1}{4}}$, which leaves out the square root in the derivative $\\frac{1}{\\sqrt{1 - x^2}}$.',
      'The limit is the derivative of $\\arcsin x$ at $\\frac{1}{2}$: $\\frac{1}{\\sqrt{1 - (1/2)^2}} = \\frac{2}{\\sqrt{3}} = \\frac{2\\sqrt{3}}{3}$.',
      'This substitutes $h = 0$ into the numerator only. The quotient has the form $\\frac{0}{0}$, and its limit is a derivative.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-2-differentiation-definition',
    question: 'Let $f(x) = ae^x + b$ for $x \\le 0$ and $f(x) = x^2 + 3x + 5$ for $x > 0$, where $a$ and $b$ are constants. If $f$ is differentiable at $x = 0$, what are the values of $a$ and $b$?',
    options: ['$a = 5$ and $b = 0$', '$a = 2$ and $b = 3$', '$a = 3$ and $b = 2$', '$a = 3$ and $b = 5$'],
    correctAnswer: 2,
    explanation:
      'Differentiability needs matching one-sided derivatives, $ae^0 = 2(0) + 3$, so $a = 3$, and continuity, $a + b = 5$, so $b = 2$. The pair $a = 5$, $b = 0$ satisfies continuity only, $a = 2$, $b = 3$ swaps the values, and $b = 5$ forgets that the left piece at $0$ is $a + b$.',
    optionExplanations: [
      'This satisfies continuity, $a + b = 5$, but the left-hand derivative $ae^0 = 5$ does not match the right-hand derivative $3$.',
      'This swaps the values. The derivative condition $ae^0 = 3$ fixes $a = 3$, and then continuity gives $b = 2$.',
      'Matching derivatives at $0$: $ae^0 = 2(0) + 3$, so $a = 3$. Matching values (continuity): $a + b = 5$, so $b = 2$.',
      'This sets $b$ equal to the right-hand value $5$, forgetting that the left piece at $0$ is $ae^0 + b = a + b$.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-2-differentiation-definition',
    question: 'The line tangent to the graph of $y = x^3 - 2x$ at the point where $x = -1$ intersects the graph again at another point. What is the $x$-coordinate of that point?',
    options: ['$-2$', '$\\sqrt{3}$', '$-1$', '$2$'],
    correctAnswer: 3,
    explanation:
      'At $x = -1$, $y = 1$ and $y\' = 3x^2 - 2 = 1$, so the tangent line is $y = x + 2$. Setting $x^3 - 2x = x + 2$ gives $x^3 - 3x - 2 = (x + 1)^2(x - 2) = 0$, so the other intersection is at $x = 2$. The value $-2$ is where the tangent line crosses the $x$-axis, $\\sqrt{3}$ drops the constant $-2$ from the cubic, and $-1$ is the point of tangency.',
    optionExplanations: [
      'This is where the tangent line $y = x + 2$ crosses the $x$-axis. The question asks where the line meets the curve again.',
      'This solves $x^3 - 3x = 0$, dropping the $-2$ that comes from the line\'s intercept. The equation is $x^3 - 2x = x + 2$.',
      'This is the point of tangency itself, a double root of $x^3 - 3x - 2 = 0$. The other root gives the second intersection.',
      'The tangent line is $y = x + 2$. Then $x^3 - 2x = x + 2$ gives $(x + 1)^2(x - 2) = 0$, so the line meets the curve again at $x = 2$.',
    ],
  },

  // U3 (2)
  {
    type: 'mcq',
    topic: 'unit-3-composite-implicit-inverse',
    question: 'Let $f(x) = x^5 + 3x - 2$, and let $g$ be the inverse function of $f$. What is the value of $g\'(2)$?',
    options: ['$\\dfrac{1}{83}$', '$8$', '$1$', '$\\dfrac{1}{8}$'],
    correctAnswer: 3,
    explanation:
      'Since $f(1) = 2$, $g(2) = 1$, and $g\'(2) = \\frac{1}{f\'(1)} = \\frac{1}{5 + 3} = \\frac{1}{8}$. The value $\\frac{1}{83}$ evaluates $f\'$ at $2$ instead of at $g(2) = 1$, $8$ forgets the reciprocal, and $1$ is $g(2)$.',
    optionExplanations: [
      'This is $\\frac{1}{f\'(2)} = \\frac{1}{80 + 3}$, which evaluates $f\'$ at $2$. The derivative of the inverse uses $f\'(g(2)) = f\'(1)$.',
      'This is $f\'(1) = 8$ without the reciprocal. The inverse function\'s derivative is $\\frac{1}{f\'(g(2))}$.',
      'This is $g(2) = 1$, the value of the inverse function, not its derivative.',
      'Since $f(1) = 2$, $g(2) = 1$. Then $g\'(2) = \\frac{1}{f\'(1)} = \\frac{1}{5(1)^4 + 3} = \\frac{1}{8}$.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-3-composite-implicit-inverse',
    question: 'If $y = x\\sin x$, what is the value of $\\dfrac{d^2y}{dx^2}$ at $x = \\dfrac{\\pi}{2}$?',
    options: ['$\\dfrac{\\pi}{2}$', '$1$', '$-\\dfrac{\\pi}{2}$', '$-1$'],
    correctAnswer: 2,
    explanation:
      'Here $y\' = \\sin x + x\\cos x$ and $y\'\' = 2\\cos x - x\\sin x$, which is $0 - \\frac{\\pi}{2}$ at $x = \\frac{\\pi}{2}$. The positive value differentiates $x\\cos x$ with the wrong sign on $x\\sin x$, $1$ is $y\'\\left(\\frac{\\pi}{2}\\right)$, and $-1$ differentiates $x\\cos x$ as $-\\sin x$ without the product rule.',
    optionExplanations: [
      'This differentiates $x\\cos x$ as $\\cos x + x\\sin x$. The derivative of $\\cos x$ is $-\\sin x$, so the term is $-x\\sin x$.',
      'This is $y\'\\left(\\frac{\\pi}{2}\\right) = \\sin\\frac{\\pi}{2} + \\frac{\\pi}{2}\\cos\\frac{\\pi}{2} = 1$, the first derivative rather than the second.',
      '$y\' = \\sin x + x\\cos x$, so $y\'\' = \\cos x + \\cos x - x\\sin x = 2\\cos x - x\\sin x$, which equals $-\\frac{\\pi}{2}$ at $x = \\frac{\\pi}{2}$.',
      'This differentiates $x\\cos x$ as $-\\sin x$, skipping the product rule, so $y\'\' = \\cos x - \\sin x$, which is $-1$ at $\\frac{\\pi}{2}$.',
    ],
  },

  // U4 (1)
  {
    type: 'mcq',
    topic: 'unit-4-contextual-applications-differentiation',
    question: 'What is $\\displaystyle\\lim_{x \\to 0} \\frac{1 - \\cos(3x)}{x\\tan x}$?',
    options: ['$\\dfrac{3}{2}$', '$9$', '$\\dfrac{9}{2}$', '$0$'],
    correctAnswer: 2,
    explanation:
      'The form is $\\frac{0}{0}$. Applying L\'Hospital\'s rule twice, or using $1 - \\cos(3x) \\approx \\frac{9x^2}{2}$ and $x\\tan x \\approx x^2$, gives $\\frac{9}{2}$. The value $\\frac{3}{2}$ squares only $x$ and not the $3$, $9$ leaves out the $\\frac{1}{2}$, and $0$ reads $\\frac{0}{0}$ as $0$.',
    optionExplanations: [
      'This uses $1 - \\cos(3x) \\approx \\frac{3x^2}{2}$, squaring only $x$. The inner function is $3x$, so the numerator behaves like $\\frac{(3x)^2}{2}$.',
      'This uses $1 - \\cos(3x) \\approx (3x)^2$, leaving out the factor $\\frac{1}{2}$ in $1 - \\cos u \\approx \\frac{u^2}{2}$.',
      'L\'Hospital\'s rule twice gives $\\frac{9\\cos(3x)}{2\\sec^2 x + 2x\\sec^2 x\\tan x} \\to \\frac{9}{2}$, matching $\\frac{(3x)^2/2}{x^2}$.',
      'Direct substitution gives $\\frac{0}{0}$, which is indeterminate, not $0$. Both numerator and denominator behave like multiples of $x^2$.',
    ],
  },

  // Taylor-table set: U4, U10, U10
  {
    type: 'mcq',
    topic: 'unit-4-contextual-applications-differentiation',
    stimulus: TAYLOR_TABLE,
    question: 'The tangent line to the graph of $f$ at $x = 2$ is used to estimate $f(2.2)$. What is the estimate, and how does it compare with the actual value of $f(2.2)$?',
    options: ['$2.6$, an overestimate', '$2.6$, an underestimate', '$3.4$, an overestimate', '$2.7$, an overestimate'],
    correctAnswer: 1,
    explanation:
      'The tangent line gives $f(2.2) \\approx 3 + (-2)(0.2) = 2.6$. Since $f\'\' > 0$ on $[2, 2.5]$, the graph is concave up there and lies above its tangent line, so $2.6$ is an underestimate. The value $3.4$ has a sign error in the slope, and $2.7$ adds the second-degree term, which is no longer the tangent line.',
    optionExplanations: [
      'The estimate $2.6$ is right, but the graph is concave up on $[2, 2.5]$, so it lies above the tangent line and the estimate is too small.',
      'The tangent line gives $3 + (-2)(0.2) = 2.6$. Because $f\'\' > 0$ on $[2, 2.5]$, the graph is concave up and lies above the tangent line, so $2.6$ underestimates $f(2.2)$.',
      'This adds $2(0.2)$ instead of subtracting it. The slope $f\'(2) = -2$ is negative, so the line decreases from $3$.',
      'This adds the second-degree term $\\frac{5}{2}(0.2)^2 = 0.1$, giving the quadratic Taylor estimate rather than the tangent-line estimate.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-10-infinite-series',
    stimulus: TAYLOR_TABLE,
    question: 'What is the value at $x = 2.5$ of the third-degree Taylor polynomial for $f$ about $x = 2$?',
    options: ['$4.750$', '$2.875$', '$2.625$', '$4.375$'],
    correctAnswer: 1,
    explanation:
      '$P_3(x) = 3 - 2(x - 2) + \\frac{5}{2!}(x - 2)^2 + \\frac{12}{3!}(x - 2)^3$, so $P_3(2.5) = 3 - 1 + 0.625 + 0.25 = 2.875$. The value $4.750$ leaves out the factorials, $2.625$ stops at the second-degree term, and $4.375$ uses $x - 2 = -0.5$.',
    optionExplanations: [
      'This uses the derivatives as coefficients without dividing by $n!$: $3 - 1 + 5(0.25) + 12(0.125)$. The coefficient of $(x - 2)^n$ is $\\frac{f^{(n)}(2)}{n!}$.',
      '$P_3(2.5) = 3 - 2(0.5) + \\frac{5}{2}(0.5)^2 + \\frac{12}{6}(0.5)^3 = 3 - 1 + 0.625 + 0.25 = 2.875$.',
      'This is the second-degree polynomial, $3 - 1 + 0.625$. The third-degree term $\\frac{12}{3!}(0.5)^3 = 0.25$ is missing.',
      'This uses $x - 2 = -0.5$, which flips the signs of the odd-degree terms: $3 + 1 + 0.625 - 0.25$. At $x = 2.5$, $x - 2 = 0.5$.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-10-infinite-series',
    stimulus: TAYLOR_TABLE,
    question: 'Let $g(x) = \\displaystyle\\int_2^x f(t)\\,dt$. What is the coefficient of $(x - 2)^3$ in the Taylor series for $g$ about $x = 2$?',
    options: ['$\\dfrac{5}{6}$', '$2$', '$\\dfrac{5}{2}$', '$-\\dfrac{1}{3}$'],
    correctAnswer: 0,
    explanation:
      'By the Fundamental Theorem, $g\' = f$, so $g\'\'\'(2) = f\'\'(2) = 5$ and the coefficient is $\\frac{g\'\'\'(2)}{3!} = \\frac{5}{6}$. The value $2$ is $\\frac{f\'\'\'(2)}{3!}$, the coefficient for $f$, $\\frac{5}{2}$ divides by $2!$ instead of $3!$, and $-\\frac{1}{3}$ uses $f\'(2)$.',
    optionExplanations: [
      'Since $g\' = f$, $g\'\'\'(2) = f\'\'(2) = 5$. The coefficient of $(x - 2)^3$ is $\\frac{g\'\'\'(2)}{3!} = \\frac{5}{6}$.',
      'This is $\\frac{f\'\'\'(2)}{3!}$, the coefficient for $f$ itself. For $g$, each derivative shifts down one order: $g\'\'\' = f\'\'$.',
      'This is $\\frac{f\'\'(2)}{2!}$. The right derivative, $g\'\'\'(2) = f\'\'(2)$, must be divided by $3!$ for the cubic term.',
      'This is $\\frac{f\'(2)}{3!}$, which shifts the derivative order by two. Since $g\' = f$, $g\'\'\' = f\'\'$, not $f\'$.',
    ],
  },

  // Graph-of-f set: U6, U5, U5
  {
    type: 'mcq',
    topic: 'unit-6-integration-accumulation',
    stimulus: GRAPH_F,
    question: 'What is the value of $g(-4)$?',
    options: ['$-2\\pi$', '$4\\pi$', '$2\\pi$', '$-4\\pi$'],
    correctAnswer: 2,
    explanation:
      'The semicircle lies below the axis, so $\\int_{-4}^0 f(t)\\,dt = -\\frac{1}{2}\\pi(2)^2 = -2\\pi$, and $g(-4) = -\\int_{-4}^0 f(t)\\,dt = 2\\pi$. The value $-2\\pi$ ignores the reversed limits, and $\\pm4\\pi$ use the area of a full circle.',
    optionExplanations: [
      'This is $\\int_{-4}^{0} f(t)\\,dt$. Since $g(-4) = \\int_0^{-4} f(t)\\,dt$ runs from right to left, its sign is reversed.',
      'This uses $\\pi r^2 = 4\\pi$, the area of a whole circle. The graph is only a semicircle, with area $2\\pi$.',
      'The semicircle lies below the axis, so $\\int_{-4}^0 f(t)\\,dt = -2\\pi$. Reversing the limits gives $g(-4) = \\int_0^{-4} f(t)\\,dt = 2\\pi$.',
      'This uses the full-circle area $4\\pi$ and also ignores the reversed limits. The semicircle has area $2\\pi$, and the reversal makes $g(-4)$ positive.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-5-analytical-applications-differentiation',
    stimulus: GRAPH_F,
    question: 'At what value of $x$ does $g$ attain its absolute minimum on the closed interval $-4 \\le x \\le 4$?',
    options: ['$x = -2$', '$x = 0$', '$x = -4$', '$x = 3.5$'],
    correctAnswer: 1,
    explanation:
      'Since $g\' = f$, $g$ decreases on $(-4, 0)$, increases on $(0, 3.5)$ and decreases on $(3.5, 4)$. The candidates are $g(-4) = 2\\pi$, $g(0) = 0$, $g(3.5) = 5.25$ and $g(4) = 5$, so the minimum is at $x = 0$. The point $x = -2$ is where $f$ is least, $x = -4$ comes from taking $g(-4) = -2\\pi$, and $x = 3.5$ is the absolute maximum on $[0, 4]$.',
    optionExplanations: [
      'This is where $f$ itself is least. $g$ is still decreasing there, because $f < 0$ on all of $(-4, 0)$.',
      '$g\' = f < 0$ on $(-4, 0)$ and $f > 0$ on $(0, 3.5)$, so $g$ has its smallest value at $x = 0$: $g(0) = 0$, while $g(-4) = 2\\pi$, $g(3.5) = 5.25$ and $g(4) = 5$.',
      'This takes $g(-4)$ as $-2\\pi$. With the limits reversed, $g(-4) = 2\\pi > 0$, so the left endpoint is the highest point, not the lowest.',
      'At $x = 3.5$, $f$ changes from positive to negative, so $g$ has a relative maximum there, with $g(3.5) = 5.25$.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-5-analytical-applications-differentiation',
    stimulus: GRAPH_F,
    question: 'At which values of $x$ in the open interval $-4 < x < 4$ does the graph of $g$ have a point of inflection?',
    options: ['$x = -2$ and $x = 2$', '$x = 0$ and $x = 3.5$', '$x = -2$, $x = 2$ and $x = 3.5$', '$x = -2$, $x = 0$ and $x = 2$'],
    correctAnswer: 0,
    explanation:
      'The graph of $g$ has an inflection point where $g\' = f$ changes from decreasing to increasing or back. That happens at $x = -2$ (bottom of the semicircle) and $x = 2$ (peak of the segments). The values $0$ and $3.5$ are zeros of $f$, which give extrema of $g$. At $x = 0$, $f$ is increasing on both sides, so there is no inflection point there.',
    optionExplanations: [
      '$f = g\'$ decreases on $(-4, -2)$, increases on $(-2, 2)$, and decreases on $(2, 4)$. The concavity of $g$ changes exactly at $x = -2$ and $x = 2$.',
      'These are the zeros of $f = g\'$ in the interior, where $g$ has relative extrema. Inflection points come from changes in the direction of $f$, not its sign.',
      'This adds $x = 3.5$, where $f$ crosses the $x$-axis while still decreasing. A zero of $f = g\'$ gives an extremum of $g$, not a change in concavity.',
      'At $x = 0$, $f$ is increasing on both sides (up the semicircle, then up the first segment), so the concavity of $g$ does not change there.',
    ],
  },

  // U5 (1 more)
  {
    type: 'mcq',
    topic: 'unit-5-analytical-applications-differentiation',
    question: 'A function $f$ is differentiable for all real numbers, and $f\'(x) = (x - 1)^2(x + 2)e^x$. Which of the following describes all the relative extrema of $f$?',
    options: [
      'Relative minima at $x = -2$ and $x = 1$',
      'A relative minimum at $x = -2$ only',
      'A relative minimum at $x = -2$ and a relative maximum at $x = 1$',
      'A relative maximum at $x = -2$ and a relative minimum at $x = 1$',
    ],
    correctAnswer: 1,
    explanation:
      'Since $(x - 1)^2 \\ge 0$ and $e^x > 0$, $f\'$ has the sign of $x + 2$ except at $x = 1$. It changes from negative to positive at $x = -2$, a relative minimum, and stays positive on both sides of $x = 1$, so there is no extremum there. The other choices treat $x = 1$ as an extremum or reverse the sign change at $x = -2$.',
    optionExplanations: [
      'At $x = 1$ the squared factor makes $f\' = 0$, but $f\'$ is positive on both sides, so $f$ has no extremum there.',
      '$f\'$ has the sign of $x + 2$ (the other factors are nonnegative): negative for $x < -2$, positive for $x > -2$ apart from $f\'(1) = 0$. Only $x = -2$ is an extremum, a relative minimum.',
      'The minimum at $x = -2$ is right, but $f\'$ does not change sign at $x = 1$, because $(x - 1)^2 \\ge 0$. So $x = 1$ is not a maximum.',
      'This reverses the sign change at $x = -2$, where $f\'$ goes from negative to positive, and treats $x = 1$, where $f\'$ keeps its sign, as an extremum.',
    ],
  },

  // U6 (5 more)
  {
    type: 'mcq',
    topic: 'unit-6-integration-accumulation',
    question: 'What is $\\displaystyle\\int_1^4 \\sqrt{x}\\,\\ln x\\,dx$?',
    options: [
      '$\\dfrac{16}{3}\\ln 4 - \\dfrac{32}{9}$',
      '$\\dfrac{16}{3}\\ln 4 - \\dfrac{14}{3}$',
      '$\\dfrac{16}{3}\\ln 4$',
      '$\\dfrac{16}{3}\\ln 4 - \\dfrac{28}{9}$',
    ],
    correctAnswer: 3,
    explanation:
      'With $u = \\ln x$ and $dv = \\sqrt{x}\\,dx$, parts gives $\\frac{2}{3}x^{3/2}\\ln x - \\frac{4}{9}x^{3/2}$. At $4$ this is $\\frac{16}{3}\\ln 4 - \\frac{32}{9}$, and at $1$ it is $-\\frac{4}{9}$, so the integral is $\\frac{16}{3}\\ln 4 - \\frac{28}{9}$. The other choices drop the lower limit, forget to integrate $\\frac{2}{3}x^{1/2}$, or omit the second term of the parts formula.',
    optionExplanations: [
      'This evaluates the antiderivative only at $x = 4$. At $x = 1$ it equals $0 - \\frac{4}{9}$, which must be subtracted, adding $\\frac{4}{9}$.',
      'This subtracts $\\frac{2}{3}x^{3/2}$ from $1$ to $4$ instead of $\\frac{4}{9}x^{3/2}$, forgetting to integrate $\\frac{2}{3}x^{1/2}$ in $\\int v\\,du$.',
      'This keeps only the $uv$ term, $\\left[\\frac{2}{3}x^{3/2}\\ln x\\right]_1^4$, and leaves out $-\\int v\\,du$.',
      'Parts with $u = \\ln x$ and $dv = \\sqrt{x}\\,dx$ gives $\\frac{2}{3}x^{3/2}\\ln x - \\frac{4}{9}x^{3/2}$. From $1$ to $4$ this is $\\left(\\frac{16}{3}\\ln 4 - \\frac{32}{9}\\right) - \\left(-\\frac{4}{9}\\right)$.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-6-integration-accumulation',
    question: 'Which of the following is $\\displaystyle\\int \\frac{4x + 3}{x^2 - x - 6}\\,dx$?',
    options: [
      '$\\ln|x - 3| + 3\\ln|x + 2| + C$',
      '$3\\ln|x - 3| + \\ln|x + 2| + C$',
      '$3\\ln|x - 3| - \\ln|x + 2| + C$',
      '$2\\ln\\left|x^2 - x - 6\\right| + C$',
    ],
    correctAnswer: 1,
    explanation:
      'Write $\\frac{4x + 3}{(x - 3)(x + 2)} = \\frac{A}{x - 3} + \\frac{B}{x + 2}$. Then $4x + 3 = A(x + 2) + B(x - 3)$: $x = 3$ gives $A = 3$ and $x = -2$ gives $B = 1$. The swapped coefficients mismatch the factors, the minus sign comes from $-5 = 5B$, and $2\\ln|x^2 - x - 6|$ treats the numerator as a multiple of $2x - 1$, which it is not.',
    optionExplanations: [
      'This swaps the coefficients. Setting $x = 3$ in $4x + 3 = A(x + 2) + B(x - 3)$ gives $15 = 5A$, so the factor $x - 3$ gets $3$.',
      'From $4x + 3 = A(x + 2) + B(x - 3)$: $x = 3$ gives $A = 3$ and $x = -2$ gives $B = 1$. So the integral is $3\\ln|x - 3| + \\ln|x + 2| + C$.',
      'This takes $B = -1$. At $x = -2$, $4x + 3 = -5$ and $B(x - 3) = -5B$, so $B = 1$.',
      'This treats $4x + 3$ as $2(2x - 1)$, twice the derivative of the denominator. Since $4x + 3 \\ne 2(2x - 1)$, partial fractions are needed.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-6-integration-accumulation',
    question: 'What is $\\displaystyle\\int_e^{\\infty} \\frac{1}{x(\\ln x)^3}\\,dx$?',
    options: ['$-\\dfrac{1}{2}$', '$\\dfrac{1}{2e^2}$', 'The integral diverges.', '$\\dfrac{1}{2}$'],
    correctAnswer: 3,
    explanation:
      'With $u = \\ln x$, the integral is $\\int_1^{\\infty} u^{-3}\\,du = \\lim_{b \\to \\infty}\\left[-\\frac{1}{2u^2}\\right]_1^b = \\frac{1}{2}$. The value $-\\frac{1}{2}$ drops the negative sign of the antiderivative, $\\frac{1}{2e^2}$ keeps the $x$-limits $e$ and $\\infty$ after substituting $u = \\ln x$, and the integral converges because the power of $\\ln x$ is greater than $1$.',
    optionExplanations: [
      'This uses $\\frac{1}{2u^2}$ as the antiderivative of $u^{-3}$. The power rule gives $\\frac{u^{-2}}{-2} = -\\frac{1}{2u^2}$.',
      'This evaluates $-\\frac{1}{2u^2}$ from $u = e$ to $\\infty$, keeping the original $x$-limits. When $x = e$, $u = \\ln e = 1$, so the lower limit for $u$ is $1$.',
      'With $u = \\ln x$, the integrand becomes $u^{-3}$, and $\\int_1^{\\infty}\\frac{du}{u^3}$ converges because the power $3$ is greater than $1$.',
      'With $u = \\ln x$ and $du = \\frac{dx}{x}$, the integral is $\\int_1^{\\infty}u^{-3}\\,du = \\lim_{b \\to \\infty}\\left[-\\frac{1}{2u^2}\\right]_1^b = 0 + \\frac{1}{2}$.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-6-integration-accumulation',
    question: 'Let $F(x) = \\displaystyle\\int_{2x}^{x^3} \\sqrt{1 + t^4}\\,dt$. What is the value of $F\'(1)$?',
    options: ['$\\sqrt{2} - \\sqrt{17}$', '$3\\sqrt{2} - 2\\sqrt{17}$', '$3\\sqrt{2}$', '$\\sqrt{17} - \\sqrt{2}$'],
    correctAnswer: 1,
    explanation:
      'By the Fundamental Theorem with the chain rule, $F\'(x) = \\sqrt{1 + x^{12}}\\cdot 3x^2 - \\sqrt{1 + 16x^4}\\cdot 2$, so $F\'(1) = 3\\sqrt{2} - 2\\sqrt{17}$. The value $\\sqrt{2} - \\sqrt{17}$ leaves out the chain-rule factors, $3\\sqrt{2}$ ignores the variable lower limit, and $\\sqrt{17} - \\sqrt{2}$ also reverses the order of subtraction.',
    optionExplanations: [
      'This evaluates the integrand at the limits $1$ and $2$ but leaves out the chain-rule factors $3x^2$ and $2$.',
      '$F\'(x) = \\sqrt{1 + (x^3)^4}\\cdot3x^2 - \\sqrt{1 + (2x)^4}\\cdot2$. At $x = 1$ this is $3\\sqrt{2} - 2\\sqrt{17}$.',
      'This keeps only the upper-limit term. The lower limit $2x$ also varies, so it contributes $-\\sqrt{1 + (2x)^4}\\cdot2$.',
      'This subtracts in the wrong order and also drops the chain-rule factors. The upper limit contributes $+\\sqrt{2}\\cdot3$ and the lower limit $-\\sqrt{17}\\cdot2$.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-6-integration-accumulation',
    stimulus:
      'The function $h$ is continuous on the closed interval $0 \\le x \\le 10$. Selected values of $h$ are given in the table.\n\n' +
      '| $x$ | 0 | 2 | 5 | 6 | 10 |\n|---|---|---|---|---|---|\n' +
      '| $h(x)$ | 4 | 7 | 9 | 6 | 3 |',
    question: 'Using a trapezoidal sum with the four subintervals indicated by the table, what is the approximation of $\\displaystyle\\int_0^{10} h(x)\\,dx$?',
    options: ['$62$', '$59$', '$63.75$', '$60.5$'],
    correctAnswer: 3,
    explanation:
      'The trapezoidal sum is $2\\cdot\\frac{4 + 7}{2} + 3\\cdot\\frac{7 + 9}{2} + 1\\cdot\\frac{9 + 6}{2} + 4\\cdot\\frac{6 + 3}{2} = 11 + 24 + 7.5 + 18 = 60.5$. The value $62$ is the left Riemann sum, $59$ is the right Riemann sum, and $63.75$ treats the four subintervals as if each had width $2.5$.',
    optionExplanations: [
      'This is the left Riemann sum, $2(4) + 3(7) + 1(9) + 4(6)$, which uses only the left height of each subinterval.',
      'This is the right Riemann sum, $2(7) + 3(9) + 1(6) + 4(3)$, which uses only the right height of each subinterval.',
      'This uses the equal-width trapezoidal formula with $\\Delta x = 2.5$, but the subintervals have widths $2$, $3$, $1$ and $4$.',
      'Each trapezoid uses its own width: $2\\cdot\\frac{11}{2} + 3\\cdot\\frac{16}{2} + 1\\cdot\\frac{15}{2} + 4\\cdot\\frac{9}{2} = 11 + 24 + 7.5 + 18 = 60.5$.',
    ],
  },

  // U7 (2)
  {
    type: 'mcq',
    topic: 'unit-7-differential-equations',
    question: 'Let $y = f(x)$ be the solution to the differential equation $\\dfrac{dy}{dx} = 2xe^{-y}$ with $f(0) = 0$. What is the value of $f(2)$?',
    options: ['$\\ln 4$', '$4$', '$-\\ln 5$', '$\\ln 5$'],
    correctAnswer: 3,
    explanation:
      'Separating, $e^y\\,dy = 2x\\,dx$, so $e^y = x^2 + C$. With $f(0) = 0$, $C = 1$, so $y = \\ln(x^2 + 1)$ and $f(2) = \\ln 5$. The value $\\ln 4$ drops the constant, $4$ is $x^2$ itself, and $-\\ln 5$ integrates $e^y$ as $-e^{-y}$.',
    optionExplanations: [
      'This takes $C = 0$, so $e^y = x^2$. The initial condition $e^0 = 0 + C$ gives $C = 1$.',
      'This is $x^2$ at $x = 2$, the value of $e^y - C$, not $y$. The solution is $y = \\ln(x^2 + 1)$.',
      'This separates as $e^{-y}\\,dy = 2x\\,dx$. Dividing by $e^{-y}$ moves $e^{y}$ to the left side, not $e^{-y}$.',
      'Separating gives $e^y\\,dy = 2x\\,dx$, so $e^y = x^2 + C$. Since $f(0) = 0$, $C = 1$, and $f(2) = \\ln(4 + 1) = \\ln 5$.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-7-differential-equations',
    question: 'Let $y = f(x)$ be the solution to the differential equation $\\dfrac{dy}{dx} = x - y^2$ with $f(1) = 2$. What is the approximation for $f(2)$ obtained by using Euler\'s method with two steps of equal size, starting at $x = 1$?',
    options: ['$0.5$', '$1.125$', '$-1$', '$1.375$'],
    correctAnswer: 1,
    explanation:
      'With $\\Delta x = 0.5$: the slope at $(1, 2)$ is $1 - 4 = -3$, so $y(1.5) \\approx 2 - 1.5 = 0.5$. The slope at $(1.5, 0.5)$ is $1.5 - 0.25 = 1.25$, so $y(2) \\approx 0.5 + 0.625 = 1.125$. The value $0.5$ stops after one step, $-1$ takes one step of size $1$, and $1.375$ uses $x = 2$ in the second slope.',
    optionExplanations: [
      'This is the result after one step, the approximation for $f(1.5)$. A second step of size $0.5$ is needed to reach $x = 2$.',
      'Step 1: slope $1 - 2^2 = -3$, so $y \\approx 2 + 0.5(-3) = 0.5$ at $x = 1.5$. Step 2: slope $1.5 - 0.5^2 = 1.25$, so $y \\approx 0.5 + 0.5(1.25) = 1.125$.',
      'This takes a single step of size $1$ with slope $-3$. The question calls for two steps of size $0.5$.',
      'This evaluates the second slope at $x = 2$ instead of $x = 1.5$. Euler\'s method uses the slope at the start of each step.',
    ],
  },

  // U8 (1)
  {
    type: 'mcq',
    topic: 'unit-8-applications-integration',
    question: 'The region bounded by the graph of $y = \\sec x$, the $x$-axis, and the lines $x = 0$ and $x = \\dfrac{\\pi}{3}$ is revolved about the $x$-axis. What is the volume of the resulting solid?',
    options: ['$\\pi\\sqrt{3}$', '$\\sqrt{3}$', '$\\pi$', '$\\pi\\ln\\left(2 + \\sqrt{3}\\right)$'],
    correctAnswer: 0,
    explanation:
      'Using disks, $V = \\pi\\int_0^{\\pi/3}\\sec^2 x\\,dx = \\pi\\left[\\tan x\\right]_0^{\\pi/3} = \\pi\\sqrt{3}$. The value $\\sqrt{3}$ leaves out $\\pi$, $\\pi$ uses $\\sec x$ as the antiderivative of $\\sec^2 x$, and $\\pi\\ln(2 + \\sqrt{3})$ integrates the radius without squaring it.',
    optionExplanations: [
      'Each disk has area $\\pi\\sec^2 x$, so $V = \\pi\\int_0^{\\pi/3}\\sec^2 x\\,dx = \\pi(\\tan\\frac{\\pi}{3} - \\tan 0) = \\pi\\sqrt{3}$.',
      'This is $\\int_0^{\\pi/3}\\sec^2 x\\,dx$ without the factor $\\pi$ in the disk area $\\pi r^2$.',
      'This antidifferentiates $\\sec^2 x$ as $\\sec x$, giving $\\pi(2 - 1)$. The antiderivative of $\\sec^2 x$ is $\\tan x$.',
      'This is $\\pi\\int_0^{\\pi/3}\\sec x\\,dx$, which uses the radius $\\sec x$ without squaring it.',
    ],
  },

  // Limaçon set: U9, U9
  {
    type: 'mcq',
    topic: 'unit-9-parametric-polar-vector',
    stimulus: LIMACON,
    question: 'What is the area of the region enclosed by the curve?',
    options: ['$22\\pi$', '$9\\pi$', '$11\\pi$', '$13\\pi$'],
    correctAnswer: 2,
    explanation:
      'The area is $\\frac{1}{2}\\int_0^{2\\pi}(3 - 2\\sin\\theta)^2\\,d\\theta = \\frac{1}{2}\\int_0^{2\\pi}\\left(9 - 12\\sin\\theta + 4\\sin^2\\theta\\right)d\\theta = \\frac{1}{2}(18\\pi + 4\\pi) = 11\\pi$. The value $22\\pi$ leaves out the $\\frac{1}{2}$, $9\\pi$ drops the $4\\sin^2\\theta$ term, and $13\\pi$ uses $\\int_0^{2\\pi}\\sin^2\\theta\\,d\\theta = 2\\pi$ instead of $\\pi$.',
    optionExplanations: [
      'This is $\\int_0^{2\\pi}r^2\\,d\\theta$ without the factor $\\frac{1}{2}$ in the polar area formula.',
      'This keeps only $\\frac{1}{2}\\int_0^{2\\pi}9\\,d\\theta$. The term $4\\sin^2\\theta$ in $r^2$ adds $2\\pi$ more area.',
      '$\\frac{1}{2}\\int_0^{2\\pi}(9 - 12\\sin\\theta + 4\\sin^2\\theta)\\,d\\theta = \\frac{1}{2}(18\\pi - 0 + 4\\pi) = 11\\pi$.',
      'This uses $\\int_0^{2\\pi}\\sin^2\\theta\\,d\\theta = 2\\pi$. Since $\\sin^2\\theta = \\frac{1 - \\cos 2\\theta}{2}$, that integral is $\\pi$.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-9-parametric-polar-vector',
    stimulus: LIMACON,
    question: 'As $\\theta$ increases through $\\dfrac{\\pi}{6}$, is the point on the curve moving toward the origin or away from it, and why?',
    options: [
      'Away from the origin, because $\\dfrac{d^2r}{d\\theta^2} > 0$',
      'Toward the origin, because $\\dfrac{dx}{d\\theta} < 0$',
      'Toward the origin, because $r > 0$ and $\\dfrac{dr}{d\\theta} < 0$',
      'Away from the origin, because $\\dfrac{dr}{d\\theta} > 0$',
    ],
    correctAnswer: 2,
    explanation:
      'At $\\theta = \\frac{\\pi}{6}$, $r = 3 - 1 = 2 > 0$ and $\\frac{dr}{d\\theta} = -2\\cos\\theta = -\\sqrt{3} < 0$, so the distance $r$ from the origin is decreasing. The claim $\\frac{dr}{d\\theta} > 0$ has a sign error, $\\frac{dx}{d\\theta} < 0$ is true but describes the $x$-coordinate rather than the distance, and $\\frac{d^2r}{d\\theta^2}$ describes how $\\frac{dr}{d\\theta}$ changes.',
    optionExplanations: [
      'The sign of $\\frac{d^2r}{d\\theta^2} = 2\\sin\\theta$ tells how $\\frac{dr}{d\\theta}$ is changing, not whether $r$ is growing. At $\\frac{\\pi}{6}$, $\\frac{dr}{d\\theta} < 0$.',
      'The conclusion is right, but the reason is not: $\\frac{dx}{d\\theta} \\approx -2.5 < 0$ says the $x$-coordinate is decreasing. Distance from the origin is $r$, so the sign of $\\frac{dr}{d\\theta}$ decides.',
      'At $\\theta = \\frac{\\pi}{6}$, $r = 2 > 0$ and $\\frac{dr}{d\\theta} = -2\\cos\\frac{\\pi}{6} = -\\sqrt{3} < 0$, so the distance $r$ is decreasing.',
      'This uses $\\frac{dr}{d\\theta} = 2\\cos\\theta$. The derivative of $-2\\sin\\theta$ is $-2\\cos\\theta$, which is negative at $\\frac{\\pi}{6}$.',
    ],
  },

  // U9 (1 more)
  {
    type: 'mcq',
    topic: 'unit-9-parametric-polar-vector',
    question: 'A curve is defined by the parametric equations $x = t^2 - 2t$ and $y = t^3 - 12t$. At which point on the curve is the tangent line vertical?',
    options: ['$(0, -16)$', '$(-1, -11)$', '$(8, 16)$', '$(3, 11)$'],
    correctAnswer: 1,
    explanation:
      'A vertical tangent needs $\\frac{dx}{dt} = 2t - 2 = 0$ with $\\frac{dy}{dt} \\ne 0$. At $t = 1$, $\\frac{dy}{dt} = 3 - 12 = -9 \\ne 0$, and the point is $(-1, -11)$. The points $(0, -16)$ and $(8, 16)$ come from $t = \\pm 2$, where $\\frac{dy}{dt} = 0$ and the tangent is horizontal, and $(3, 11)$ uses $t = -1$.',
    optionExplanations: [
      'This is the point for $t = 2$, where $\\frac{dy}{dt} = 3t^2 - 12 = 0$. That gives a horizontal tangent, not a vertical one.',
      'A vertical tangent needs $\\frac{dx}{dt} = 2t - 2 = 0$ and $\\frac{dy}{dt} \\ne 0$. At $t = 1$, $\\frac{dy}{dt} = -9$, and the point is $(1 - 2, 1 - 12) = (-1, -11)$.',
      'This is the point for $t = -2$, where $\\frac{dy}{dt} = 0$. Setting $\\frac{dy}{dt} = 0$ finds horizontal tangents.',
      'This uses $t = -1$, a sign error in solving $2t - 2 = 0$. The solution is $t = 1$.',
    ],
  },

  // U10 (3 more)
  {
    type: 'mcq',
    topic: 'unit-10-infinite-series',
    question: 'What is the interval of convergence of the power series $\\displaystyle\\sum_{n=1}^{\\infty} \\frac{x^{2n}}{9^n\\, n}$?',
    options: ['$-9 \\le x < 9$', '$-3 \\le x \\le 3$', '$-3 < x < 3$', '$-3 \\le x < 3$'],
    correctAnswer: 2,
    explanation:
      'The ratio test gives $\\frac{x^2}{9}\\cdot\\frac{n}{n + 1} \\to \\frac{x^2}{9} < 1$, so $|x| < 3$. At $x = \\pm 3$, $x^{2n} = 9^n$ and the series is $\\sum\\frac{1}{n}$, which diverges at both endpoints. The interval $-9 \\le x < 9$ treats $x^{2n}$ as $x^n$, and the other two choices include divergent endpoints.',
    optionExplanations: [
      'This is the interval for $\\sum\\frac{x^n}{9^n n}$, which treats $x^{2n}$ as $x^n$. The ratio of consecutive terms is $\\frac{x^2}{9}$, so convergence needs $x^2 < 9$.',
      'At $x = \\pm3$, $x^{2n} = 9^n$, so the series becomes the harmonic series $\\sum\\frac{1}{n}$, which diverges. Neither endpoint is included.',
      'The ratio test gives $\\frac{x^2}{9} < 1$, so $-3 < x < 3$. At both $x = 3$ and $x = -3$, the even power makes the series $\\sum\\frac{1}{n}$, which diverges.',
      'This includes $x = -3$ as if the series alternated there. Because the power $2n$ is even, $x = -3$ gives the same divergent series as $x = 3$.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-10-infinite-series',
    question: 'For which values of the constant $p$ is the series $\\displaystyle\\sum_{k=1}^{\\infty} \\frac{(-1)^k}{k^p}$ conditionally convergent?',
    options: ['$p > 1$', '$0 < p \\le 1$', '$p > 0$', '$0 < p < 1$'],
    correctAnswer: 1,
    explanation:
      'For $p > 0$ the terms decrease to $0$, so the series converges by the alternating series test. The series of absolute values, $\\sum\\frac{1}{n^p}$, converges only for $p > 1$. Conditional convergence is convergence without absolute convergence, so $0 < p \\le 1$. The interval $p > 1$ is absolute convergence, $p > 0$ is all convergence, and $0 < p < 1$ omits $p = 1$.',
    optionExplanations: [
      'For $p > 1$ the series of absolute values $\\sum\\frac{1}{n^p}$ converges, so the convergence is absolute, not conditional.',
      'The alternating series test gives convergence for all $p > 0$, and $\\sum\\frac{1}{n^p}$ diverges for $p \\le 1$. Convergent but not absolutely convergent means $0 < p \\le 1$.',
      'This is every $p$ for which the series converges, including $p > 1$, where the convergence is absolute.',
      'This leaves out $p = 1$, the alternating harmonic series, which converges while $\\sum\\frac{1}{n}$ diverges.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-10-infinite-series',
    question: 'What are the first three nonzero terms of the Maclaurin series for $f(x) = \\dfrac{x}{1 + x^3}$?',
    options: ['$x - x^4 + \\dfrac{x^7}{2}$', '$x - x^4 + x^7$', '$x^{-1} - x^2 + x^5$', '$x - \\dfrac{x^4}{4} + \\dfrac{x^7}{7}$'],
    correctAnswer: 1,
    explanation:
      'Replacing $u$ with $-x^3$ in $\\frac{1}{1 - u} = 1 + u + u^2 + \\cdots$ gives $\\frac{1}{1 + x^3} = 1 - x^3 + x^6 - \\cdots$, and multiplying by $x$ gives $x - x^4 + x^7 - \\cdots$. The version with $\\frac{x^7}{2}$ is the series for $xe^{-x^3}$, $x^{-1} - x^2 + x^5$ divides by $x$ instead of multiplying, and the version with $\\frac{x^4}{4}$ and $\\frac{x^7}{7}$ is the series for an antiderivative of $\\frac{1}{1 + x^3}$.',
    optionExplanations: [
      'This is the series for $xe^{-x^3}$, which uses $e^u = 1 + u + \\frac{u^2}{2!} + \\cdots$. The function here is geometric, with every coefficient $\\pm1$.',
      '$\\frac{1}{1 + x^3} = 1 - x^3 + x^6 - \\cdots$ from the geometric series with ratio $-x^3$. Multiplying by $x$ gives $x - x^4 + x^7 - \\cdots$.',
      'This divides $1 - x^3 + x^6$ by $x$. Since $f(x) = x\\cdot\\frac{1}{1 + x^3}$, each term is multiplied by $x$, raising its exponent by $1$.',
      'This integrates $1 - x^3 + x^6$ term by term, giving a series for an antiderivative of $\\frac{1}{1 + x^3}$. Here the series is multiplied by $x$, not integrated.',
    ],
  },

  /* ============== PART B — GRAPHING CALCULATOR (Q30–Q42) ============== */

  {
    type: 'mcq',
    topic: 'unit-4-contextual-applications-differentiation',
    question: 'A particle moves along the $x$-axis so that its position at time $t \\ge 0$ is $x(t) = t^{3/2} - 3\\sin t$. What is the acceleration of the particle at time $t = 2$?',
    options: ['$3.370$', '$-2.198$', '$0.101$', '$3.258$'],
    correctAnswer: 3,
    explanation:
      'Here $a(t) = x\'\'(t) = \\frac{3}{4}t^{-1/2} + 3\\sin t$, so $a(2) \\approx 0.530 + 2.728 = 3.258$. The value $3.370$ is the velocity $x\'(2)$, $-2.198$ has a sign error in the second derivative of $-3\\sin t$, and $0.101$ is the position $x(2)$.',
    optionExplanations: [
      'This is $x\'(2) = \\frac{3}{2}\\sqrt{2} - 3\\cos 2 \\approx 3.370$, the velocity. Acceleration is the second derivative of position.',
      'This uses $-3\\sin t$ as the second derivative of $-3\\sin t$. Differentiating twice gives $+3\\sin t$.',
      'This is $x(2) = 2^{3/2} - 3\\sin 2 \\approx 0.101$, the position itself.',
      '$x\'\'(t) = \\frac{3}{4}t^{-1/2} + 3\\sin t$, which the calculator evaluates at $t = 2$ as $0.530 + 2.728 \\approx 3.258$.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-5-analytical-applications-differentiation',
    question: 'Let $F(x) = \\displaystyle\\int_1^x \\frac{\\sin t}{t}\\,dt$ for $1 \\le x \\le 10$. What is the absolute maximum value of $F$ on this interval?',
    options: ['$1.852$', '$3.142$', '$0.729$', '$0.906$'],
    correctAnswer: 3,
    explanation:
      '$F\'(x) = \\frac{\\sin x}{x}$ changes from positive to negative at $x = \\pi$ and $x = 3\\pi$. Comparing $F(1) = 0$, $F(\\pi) \\approx 0.906$, $F(3\\pi) \\approx 0.729$ and $F(10) \\approx 0.712$ shows the absolute maximum is about $0.906$. The value $1.852$ integrates from $0$, $3.142$ is the location $x = \\pi$, and $0.729$ is the relative maximum at $3\\pi$.',
    optionExplanations: [
      'This is $\\int_0^{\\pi}\\frac{\\sin t}{t}\\,dt$, which starts the accumulation at $0$. $F$ starts at $1$, so the area on $[0, 1]$ is not included.',
      'This is $x = \\pi$, where the maximum occurs, not the maximum value of $F$.',
      'This is $F(3\\pi)$, a relative maximum. Between $\\pi$ and $2\\pi$, $F$ loses more than it regains on $(2\\pi, 3\\pi)$, so $F(\\pi)$ is larger.',
      'Candidates: $F(1) = 0$, $F(\\pi) \\approx 0.906$, $F(3\\pi) \\approx 0.729$ and $F(10) \\approx 0.712$, from the calculator. The largest is $F(\\pi) \\approx 0.906$.',
    ],
  },

  // Flour set: U6, U8
  {
    type: 'mcq',
    topic: 'unit-6-integration-accumulation',
    stimulus: FLOUR,
    question: 'To the nearest kilogram, how much flour does the bakery use during the 12-hour shift?',
    options: ['$24$ kilograms', '$43$ kilograms', '$513$ kilograms', '$59$ kilograms'],
    correctAnswer: 2,
    explanation:
      'The total is $\\int_0^{12} F(t)\\,dt \\approx 512.545$, about 513 kilograms. The value $24$ is the rate $F(12)$ at the end of the shift, $43$ is the average rate in kilograms per hour, and $59$ is the greatest rate, $F(4)$.',
    optionExplanations: [
      'This is $F(12) \\approx 23.9$, the rate of use in kilograms per hour at the end of the shift. The total amount is the integral of the rate.',
      'This is the average rate, $\\frac{1}{12}\\int_0^{12}F(t)\\,dt \\approx 42.7$ kilograms per hour, not the total amount.',
      'The total amount is $\\int_0^{12} 40te^{-0.25t}\\,dt$, which the calculator gives as about $512.545$, or 513 kilograms.',
      'This is $F(4) \\approx 58.9$, the greatest rate of use, in kilograms per hour. It is a rate, not an amount.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-8-applications-integration',
    stimulus: FLOUR,
    question: 'At what time $T$ has the bakery used exactly 200 kilograms of flour since the start of the shift?',
    options: ['$T \\approx 4.683$', '$T \\approx 4.526$', '$T \\approx 3.398$', '$T = 4$'],
    correctAnswer: 1,
    explanation:
      'Solve $\\int_0^T 40te^{-0.25t}\\,dt = 200$ with the calculator to get $T \\approx 4.526$ hours. The value $4.683$ assumes the average rate for the whole shift, $3.398$ assumes the greatest rate $F(4)$ throughout, and $4$ is when the rate is greatest.',
    optionExplanations: [
      'This is $200 \\div 42.71$, which uses the average rate for the whole shift. Early in the shift the rate is above average, so 200 kilograms are used sooner.',
      'The amount used by time $T$ is $\\int_0^T F(t)\\,dt$. Setting it equal to $200$ and solving with the calculator gives $T \\approx 4.526$ hours.',
      'This is $200 \\div F(4)$, which assumes the greatest rate held from the start. The rate begins at $0$, so it takes longer.',
      'This is when the rate $F(t)$ is greatest. By $t = 4$ only about $169$ kilograms have been used.',
    ],
  },

  {
    type: 'mcq',
    topic: 'unit-6-integration-accumulation',
    question: 'A function $F$ satisfies $F\'(x) = e^{-x}\\sqrt{x + 4}$ and $F(2) = -1$. What is the value of $F(0)$?',
    options: ['$0.869$', '$-2.869$', '$1.869$', '$2.000$'],
    correctAnswer: 1,
    explanation:
      'By the Fundamental Theorem, $F(2) - F(0) = \\int_0^2 F\'(x)\\,dx \\approx 1.869$, so $F(0) = -1 - 1.869 = -2.869$. The value $0.869$ adds the integral instead of subtracting it, $1.869$ is the integral alone, and $2$ is $F\'(0)$, a rate rather than a value of $F$.',
    optionExplanations: [
      'This adds the change, $-1 + 1.869$. Moving from $x = 2$ back to $x = 0$ subtracts $\\int_0^2 F\'(x)\\,dx$.',
      '$F(0) = F(2) - \\int_0^2 e^{-x}\\sqrt{x + 4}\\,dx$. The calculator gives the integral as about $1.869$, so $F(0) \\approx -1 - 1.869 = -2.869$.',
      'This is $\\int_0^2 F\'(x)\\,dx \\approx 1.869$, the change in $F$ from $0$ to $2$, without using $F(2) = -1$.',
      'This is $F\'(0) = e^0\\sqrt{4} = 2$, the derivative at $x = 0$. The value $F(0)$ comes from $F(2)$ and the accumulated change.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-7-differential-equations',
    question: 'Let $y = f(x)$ be the solution to the differential equation $\\dfrac{dy}{dx} = y(x - 1)$ with $f(0) = 2$. For what positive value of $x$ is $f(x) = 5$?',
    options: ['$x \\approx 2.683$', '$x \\approx 1.580$', '$x \\approx 3.054$', '$x \\approx 1.354$'],
    correctAnswer: 0,
    explanation:
      'Separating, $\\ln|y| = \\frac{x^2}{2} - x + C$, and $f(0) = 2$ gives $y = 2e^{x^2/2 - x}$. Then $2e^{x^2/2 - x} = 5$ means $\\frac{x^2}{2} - x = \\ln 2.5$, so $x = 1 + \\sqrt{1 + 2\\ln 2.5} \\approx 2.683$. The value $1.580$ integrates $x$ as $x^2$, $3.054$ sets the exponent equal to $\\ln 5$, and $1.354$ drops the $-x$.',
    optionExplanations: [
      'The solution is $y = 2e^{x^2/2 - x}$. Setting it equal to $5$ gives $\\frac{x^2}{2} - x = \\ln 2.5$, and the calculator gives the positive solution $x \\approx 2.683$.',
      'This solves $x^2 - x = \\ln 2.5$, integrating $x$ as $x^2$ instead of $\\frac{x^2}{2}$.',
      'This solves $\\frac{x^2}{2} - x = \\ln 5$, ignoring the initial value $2$, which divides $5$ to give $e^{x^2/2 - x} = 2.5$.',
      'This solves $\\frac{x^2}{2} = \\ln 2.5$, dropping the $-x$ that comes from integrating $-1$.',
    ],
  },

  // Plane-velocity set: U9 ×3
  {
    type: 'mcq',
    topic: 'unit-9-parametric-polar-vector',
    stimulus: VELOCITY_PLANE,
    question: 'What is the slope of the line tangent to the path of the particle at time $t = 1$?',
    options: ['$0.734$', '$1.362$', '$0.736$', '$0.584$'],
    correctAnswer: 1,
    explanation:
      'The slope is $\\frac{dy/dt}{dx/dt} = \\frac{2e^{-1}}{\\cos 1} \\approx \\frac{0.736}{0.540} \\approx 1.362$. The value $0.734$ divides in the other order, $0.736$ is $\\frac{dy}{dt}$ alone, and $0.584$ is the average slope $\\frac{y(1) - y(0)}{x(1) - x(0)}$ over $0 \\le t \\le 1$.',
    optionExplanations: [
      'This is $\\frac{dx/dt}{dy/dt}$, the reciprocal. The slope of the path is $\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt}$.',
      'The slope of the path is $\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt}$. At $t = 1$ this is $\\frac{2(1)e^{-1}}{\\cos(1^2)} \\approx \\frac{0.736}{0.540} \\approx 1.362$.',
      'This is $\\frac{dy}{dt}$ at $t = 1$, the vertical rate. It still has to be divided by $\\frac{dx}{dt} = \\cos 1$.',
      'This is $\\frac{\\int_0^1 2te^{-t}\\,dt}{\\int_0^1\\cos(t^2)\\,dt} \\approx \\frac{0.528}{0.905}$, the slope of the segment joining the positions at $t = 0$ and $t = 1$. The tangent slope uses the derivatives at $t = 1$.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-9-parametric-polar-vector',
    stimulus: VELOCITY_PLANE,
    question: 'At the first time $t > 0$ when the particle is moving vertically, what is the $y$-coordinate of its position?',
    options: ['$0.713$', '$1.253$', '$2.713$', '$1.977$'],
    correctAnswer: 2,
    explanation:
      'The particle moves vertically when $\\frac{dx}{dt} = \\cos(t^2) = 0$ and $\\frac{dy}{dt} \\ne 0$, first at $t = \\sqrt{\\pi/2} \\approx 1.253$. Then $y = 2 + \\int_0^{1.253} 2te^{-t}\\,dt \\approx 2.713$. The value $0.713$ leaves out the starting value, $1.253$ is the time, and $1.977$ is the $x$-coordinate.',
    optionExplanations: [
      'This is $\\int_0^{1.253} 2te^{-t}\\,dt$, the change in $y$, without the starting $y$-coordinate $2$.',
      'This is the time $t = \\sqrt{\\pi/2} \\approx 1.253$ at which $\\frac{dx}{dt}$ first equals $0$, not the $y$-coordinate.',
      'Vertical motion first occurs when $\\cos(t^2) = 0$, at $t = \\sqrt{\\pi/2}$. Then $y = 2 + \\int_0^{\\sqrt{\\pi/2}} 2te^{-t}\\,dt \\approx 2 + 0.713 = 2.713$.',
      'This is the $x$-coordinate at that time, $1 + \\int_0^{1.253}\\cos(t^2)\\,dt \\approx 1.977$, not the $y$-coordinate.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-9-parametric-polar-vector',
    stimulus: VELOCITY_PLANE,
    question: 'How far does the particle travel along its path during the time interval $0 \\le t \\le 2$?',
    options: ['$2.003$', '$1.274$', '$2.681$', '$1.074$'],
    correctAnswer: 0,
    explanation:
      'The distance is $\\int_0^2\\sqrt{\\cos^2(t^2) + (2te^{-t})^2}\\,dt \\approx 2.003$. The value $1.274$ is the straight-line distance between the starting and ending points, $2.681$ adds the horizontal and vertical distances, and $1.074$ integrates the speed only up to $t = 1$.',
    optionExplanations: [
      'Distance along the path is the integral of speed: $\\int_0^2\\sqrt{\\cos^2(t^2) + 4t^2e^{-2t}}\\,dt$, which the calculator gives as about $2.003$.',
      'This is the magnitude of the displacement, the straight-line distance from the start to the end. The path curves, so it is longer.',
      'This adds $\\int_0^2\\left|\\frac{dx}{dt}\\right|dt$ and $\\int_0^2\\left|\\frac{dy}{dt}\\right|dt$. Distance in the plane uses $\\sqrt{(x\')^2 + (y\')^2}$.',
      'This integrates the speed over $0 \\le t \\le 1$ only. The interval in the question runs to $t = 2$.',
    ],
  },

  {
    type: 'mcq',
    topic: 'unit-8-applications-integration',
    question: 'What is the area of the region enclosed by the graphs of $y = 2\\cos x$ and $y = x^2 - 1$?',
    options: ['$2.497$', '$2.464$', '$1.265$', '$4.995$'],
    correctAnswer: 3,
    explanation:
      'The graphs meet at $x = \\pm a$ with $a \\approx 1.265$, and $2\\cos x \\ge x^2 - 1$ between them, so the area is $\\int_{-a}^{a}(2\\cos x - x^2 + 1)\\,dx \\approx 4.995$. The value $2.497$ is the part with $x \\ge 0$ only, $2.464$ drops the $+1$, and $1.265$ is the intersection value $a$.',
    optionExplanations: [
      'This is $\\int_0^a(2\\cos x - x^2 + 1)\\,dx$, the half of the region with $x \\ge 0$. The region is symmetric about the $y$-axis, so the total is twice this.',
      'This is $\\int_{-a}^{a}(2\\cos x - x^2)\\,dx$, which subtracts $x^2$ instead of $x^2 - 1$ and so drops the $+1$.',
      'This is $a \\approx 1.265$, the positive solution of $2\\cos x = x^2 - 1$, a limit of integration rather than the area.',
      'The calculator gives intersections at $x = \\pm1.265$. Since $2\\cos x \\ge x^2 - 1$ between them, the area is $\\int_{-1.265}^{1.265}(2\\cos x - x^2 + 1)\\,dx \\approx 4.995$.',
    ],
  },

  // U10 (3)
  {
    type: 'mcq',
    topic: 'unit-10-infinite-series',
    question: 'The first three nonzero terms of the Maclaurin series for $e^{-x^3}$ are integrated term by term to approximate $\\displaystyle\\int_0^{0.7} e^{-x^3}\\,dx$. By how much does this approximation exceed the value of the integral given by a calculator?',
    options: ['$0.00047$', '$0.00544$', '$0.00044$', '$0.00620$'],
    correctAnswer: 2,
    explanation:
      'Integrating $1 - x^3 + \\frac{x^6}{2}$ from $0$ to $0.7$ gives $0.7 - \\frac{0.7^4}{4} + \\frac{0.7^7}{14} \\approx 0.645857$, and the calculator gives $\\int_0^{0.7}e^{-x^3}\\,dx \\approx 0.645416$, a difference of about $0.00044$. The value $0.00047$ is the alternating series error bound, $0.00544$ uses only two terms, and $0.00620$ compares the polynomial with $e^{-x^3}$ at $x = 0.7$ instead of integrating.',
    optionExplanations: [
      'This is the next term, $\\frac{0.7^{10}}{60}$, which bounds the error by the alternating series error bound. The question asks for the actual difference.',
      'This is the size of the error from the first two terms only, $0.7 - \\frac{0.7^4}{4}$. The question uses three nonzero terms.',
      'The three-term approximation is $0.7 - \\frac{0.7^4}{4} + \\frac{0.7^7}{14} \\approx 0.645857$, and the calculator gives the integral as about $0.645416$, so the difference is about $0.00044$.',
      'This compares $1 - x^3 + \\frac{x^6}{2}$ with $e^{-x^3}$ at $x = 0.7$, without integrating either one.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-10-infinite-series',
    question: 'The function $f$ is defined by $f(x) = \\displaystyle\\sum_{n=1}^{\\infty} \\frac{x^n}{n\\cdot n!}$ for all real numbers $x$. What is the value of $f(1)$?',
    options: ['$1.250$', '$1.318$', '$1.718$', '$1.306$'],
    correctAnswer: 1,
    explanation:
      'The series equals $\\int_0^x\\frac{e^t - 1}{t}\\,dt$, since $\\frac{e^t - 1}{t} = \\sum_{n=1}^{\\infty}\\frac{t^{n-1}}{n!}$ integrates term by term to $\\sum\\frac{x^n}{n\\cdot n!}$. A calculator gives $f(1) = \\int_0^1\\frac{e^t - 1}{t}\\,dt \\approx 1.318$ (the partial sums agree). The value $1.718$ is $e - 1$, which drops the factor $\\frac{1}{n}$, and $1.250$ and $1.306$ are the sums of the first two and three terms.',
    optionExplanations: [
      'This is $1 + \\frac{1}{4}$, the sum of the first two terms. The remaining terms add about $0.068$ more.',
      'Term-by-term integration of $\\frac{e^t - 1}{t} = \\sum\\frac{t^{n-1}}{n!}$ gives $f(x) = \\int_0^x\\frac{e^t - 1}{t}\\,dt$. The calculator gives $f(1) \\approx 1.318$.',
      'This is $e - 1 = \\sum\\frac{1}{n!}$, which leaves out the factor $\\frac{1}{n}$ in each term.',
      'This is $1 + \\frac{1}{4} + \\frac{1}{18}$, the first three terms only. The series has infinitely many positive terms, so the sum is larger.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-10-infinite-series',
    question: 'The third-degree Maclaurin polynomial for $f(x) = e^x\\cos x$ is $P_3(x) = 1 + x - \\dfrac{x^3}{3}$, and $f^{(4)}(x) = -4e^x\\cos x$. Using the maximum of $\\left|f^{(4)}(x)\\right|$ on $0 \\le x \\le 0.5$, what is the Lagrange error bound for the approximation $f(0.5) \\approx P_3(0.5)$?',
    options: ['$0.0104$', '$0.0151$', '$0.0015$', '$0.0114$'],
    correctAnswer: 1,
    explanation:
      'On $[0, 0.5]$, $|f^{(4)}(x)| = 4e^x\\cos x$ is increasing, so $M = 4e^{0.5}\\cos 0.5 \\approx 5.788$, and the bound is $\\frac{M}{4!}(0.5)^4 \\approx \\frac{5.788(0.0625)}{24} \\approx 0.0151$. The value $0.0104$ takes $M$ at $x = 0$, $0.0015$ uses $(0.5)^5$ and $5!$, and $0.0114$ is the actual error, which the bound must be at least as large as.',
    optionExplanations: [
      'This uses $M = 4$, the value at $x = 0$. Since $4e^x\\cos x$ increases on $[0, 0.5]$, its maximum there is at $x = 0.5$.',
      'With $M = 4e^{0.5}\\cos 0.5 \\approx 5.788$, the maximum of $|f^{(4)}|$ on $[0, 0.5]$, the bound is $\\frac{M}{4!}(0.5)^4 \\approx \\frac{5.788\\cdot0.0625}{24} \\approx 0.0151$.',
      'This uses $\\frac{M}{5!}(0.5)^5$. For a third-degree polynomial the Lagrange bound uses the fourth derivative, $4!$, and $(0.5)^4$.',
      'This is the actual error, $|f(0.5) - P_3(0.5)| \\approx 0.0114$, computed with the calculator. The Lagrange bound is an upper bound on it.',
    ],
  },
]
