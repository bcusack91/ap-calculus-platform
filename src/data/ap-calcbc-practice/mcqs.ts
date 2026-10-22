import type { MCQItem } from '@/components/FullLengthPracticeExam'

/**
 * AP Calculus BC practice exam, form 1: 42 MCQs (May 2027 Section I).
 *   U1 3 · U2 3 · U3 2 · U4 3 · U5 4 · U6 8 · U7 3 · U8 3 · U9 5 · U10 8
 * (BC CED weighting: Units 1–8 are about 64% of the section, Units 9–10 the rest.)
 * Part A (Q1–Q29): no calculator, 62 minutes. Part B (Q30–Q42): graphing
 * calculator, 38 minutes; every Part B item is calculator-active. The runner
 * splits the parts by position, so Part B items must stay in positions 30–42.
 * Sets that share a stimulus are consecutive: Q4–Q6 (table of f and g),
 * Q12–Q14 (graph of f'), Q24–Q25 (power series), Q33–Q34 (storage tank),
 * Q38–Q40 (particle in the plane).
 */

const TABLE_FG =
  'The functions $f$ and $g$ are differentiable for all real numbers. Selected values of $f$, $f\'$, $g$ and $g\'$ are given in the table.\n\n' +
  '| $x$ | 1 | 2 | 3 | 4 |\n|---|---|---|---|---|\n' +
  '| $f(x)$ | 4 | 3 | 1 | 2 |\n' +
  '| $f\'(x)$ | $-2$ | $-1$ | 3 | 5 |\n' +
  '| $g(x)$ | 2 | 4 | 1 | 3 |\n' +
  '| $g\'(x)$ | 3 | $-2$ | 6 | 1 |'

const GRAPH_FPRIME =
  'The function $f$ is differentiable on the closed interval $-2 \\le x \\le 6$, and $f(0) = 3$. The graph of $f\'$, the derivative of $f$, consists of four line segments joining the points $(-2, -2)$, $(0, 2)$, $(2, 2)$, $(4, -2)$ and $(6, 0)$, in that order.'

const POWER_SERIES =
  'The function $f$ is defined by the power series\n\n$$f(x) = \\sum_{n=1}^{\\infty} \\frac{(x + 2)^n}{\\sqrt{n}\\cdot 3^n}$$\n\nfor all real numbers $x$ for which the series converges.'

const TANK =
  'Water flows into a storage tank at a rate modeled by $R(t) = 40 + 15\\sin\\left(\\dfrac{t^2}{10}\\right)$ gallons per hour, and water is pumped out of the tank at a rate modeled by $D(t) = 30 + 2t$ gallons per hour. Here $t$ is measured in hours, for $0 \\le t \\le 8$. At time $t = 0$ the tank holds 200 gallons of water.'

const PLANE_PARTICLE =
  'A particle moves in the $xy$-plane so that its velocity vector at time $t \\ge 0$ is $\\langle t\\cos t,\\ 1 + \\sin\\left(t^2\\right) \\rangle$. At time $t = 0$ the particle is at the point $(5, -2)$.'

export const MCQS: MCQItem[] = [
  /* ============== PART A — NO CALCULATOR (Q1–Q29) ============== */

  // U1 (3)
  {
    type: 'mcq',
    topic: 'unit-1-limits-continuity',
    question: 'What is $\\displaystyle\\lim_{x \\to 3} \\frac{x^2 - 9}{\\sqrt{x + 1} - 2}$?',
    options: ['$6$', '$24$', '$12$', 'The limit does not exist.'],
    correctAnswer: 1,
    explanation:
      'Multiply by the conjugate: $\\frac{(x - 3)(x + 3)(\\sqrt{x + 1} + 2)}{(x + 1) - 4} = (x + 3)(\\sqrt{x + 1} + 2)$ for $x \\ne 3$, which approaches $6 \\cdot 4 = 24$. The value $6$ cancels $x - 3$ but drops the conjugate factor, and $12$ uses $\\sqrt{x+1}$ alone in place of $\\sqrt{x+1} + 2$. The form $\\frac{0}{0}$ is indeterminate, so it does not mean the limit fails to exist.',
    optionExplanations: [
      'This keeps only the factor $x + 3 \\to 6$ and drops the conjugate factor $\\sqrt{x + 1} + 2 \\to 4$ that rationalizing the denominator produces.',
      'Multiplying by the conjugate gives $\\frac{(x - 3)(x + 3)(\\sqrt{x + 1} + 2)}{x - 3} = (x + 3)(\\sqrt{x + 1} + 2)$ for $x \\ne 3$, which approaches $6\\cdot4 = 24$.',
      'This uses $\\sqrt{x + 1} \\to 2$ in place of the full conjugate $\\sqrt{x + 1} + 2 \\to 4$, so it is half the limit.',
      'Substitution gives $\\frac{0}{0}$, which is indeterminate, not a sign that the limit fails to exist. After rationalizing, the factor $x - 3$ cancels and the limit is $24$.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-1-limits-continuity',
    question: 'Let $f(x) = \\dfrac{\\sin(kx)}{3x}$ for $x \\ne 0$, and let $f(0) = 2$, where $k$ is a constant. For what value of $k$ is $f$ continuous at $x = 0$?',
    options: ['$k = 6$', '$k = \\dfrac{2}{3}$', 'No value of $k$ works.', '$k = \\dfrac{3}{2}$'],
    correctAnswer: 0,
    explanation:
      'Since $\\lim_{x \\to 0}\\frac{\\sin(kx)}{kx} = 1$, $\\lim_{x \\to 0}\\frac{\\sin(kx)}{3x} = \\frac{k}{3}$, and continuity needs $\\frac{k}{3} = 2$, so $k = 6$. The value $\\frac{2}{3}$ divides $2$ by $3$ instead of multiplying, and $\\frac{3}{2}$ inverts the ratio $\\frac{k}{3}$. Concluding that no $k$ works treats the limit as $\\frac{1}{3}$ for every $k$, ignoring the $k$ inside the sine.',
    optionExplanations: [
      'Because $\\frac{\\sin(kx)}{kx} \\to 1$, the limit is $\\frac{k}{3}$. Continuity at $0$ requires $\\frac{k}{3} = f(0) = 2$, so $k = 6$.',
      'This solves $3k = 2$, which treats the limit as $3k$. The limit of $\\frac{\\sin(kx)}{3x}$ is $\\frac{k}{3}$, so $\\frac{k}{3} = 2$.',
      'This uses $\\frac{\\sin(kx)}{x} \\to 1$, so the limit would be $\\frac{1}{3}$ for every $k$. In fact $\\frac{\\sin(kx)}{x} \\to k$, and $\\frac{k}{3} = 2$ has the solution $k = 6$.',
      'This inverts the limit to $\\frac{3}{k}$ and then solves $\\frac{3}{k} = 2$. The constant $k$ belongs in the numerator: the limit is $\\frac{k}{3}$.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-1-limits-continuity',
    question: 'Which of the following lists every horizontal asymptote of the graph of $f(x) = \\dfrac{3x}{\\sqrt{x^2 + 4}}$?',
    options: ['$y = 3$ only', '$y = 0$ only', '$y = -3$ and $y = 3$', 'The graph has no horizontal asymptote.'],
    correctAnswer: 2,
    explanation:
      'For large $|x|$, $\\sqrt{x^2 + 4} \\approx |x|$, so $f(x) \\to 3$ as $x \\to \\infty$ and $f(x) \\to -3$ as $x \\to -\\infty$. Listing only $y = 3$ treats $\\sqrt{x^2}$ as $x$ for negative $x$. The value $y = 0$ compares the degree $1$ of the numerator with the degree $2$ under the root, and a horizontal asymptote does exist because the degrees effectively match.',
    optionExplanations: [
      'This handles $x \\to \\infty$ only. For negative $x$, $\\sqrt{x^2 + 4} \\approx |x| = -x$, so $f(x) \\to -3$ as $x \\to -\\infty$, a second asymptote.',
      'This compares the degree of $3x$ with the $x^2$ under the root. The root behaves like $|x|$, degree $1$, so the ratio approaches $\\pm3$, not $0$.',
      'Since $\\sqrt{x^2 + 4} \\approx |x|$ for large $|x|$, $f(x) \\to \\frac{3x}{|x|}$, which is $3$ as $x \\to \\infty$ and $-3$ as $x \\to -\\infty$.',
      'The numerator and the root both grow like $|x|$, so $f(x)$ approaches finite limits, $3$ and $-3$, as $x \\to \\pm\\infty$. Those are horizontal asymptotes.',
    ],
  },

  // Table set: U2, U3, U6
  {
    type: 'mcq',
    topic: 'unit-2-differentiation-definition',
    stimulus: TABLE_FG,
    question: 'Let $h(x) = f(x)\\,g(x)$. What is the value of $h\'(2)$?',
    options: ['$-4$', '$2$', '$-10$', '$-6$'],
    correctAnswer: 2,
    explanation:
      'The product rule gives $h\'(2) = f\'(2)g(2) + f(2)g\'(2) = (-1)(4) + (3)(-2) = -10$. The value $-4$ keeps only the first term and $-6$ only the second, while $2$ multiplies the two derivatives, $f\'(2)g\'(2)$.',
    optionExplanations: [
      'This keeps only $f\'(2)g(2) = (-1)(4)$ and drops the second product-rule term, $f(2)g\'(2) = (3)(-2)$.',
      'This multiplies the two derivatives, $f\'(2)g\'(2) = (-1)(-2)$. The derivative of a product is not the product of the derivatives.',
      'By the product rule, $h\'(2) = f\'(2)g(2) + f(2)g\'(2) = (-1)(4) + (3)(-2) = -10$.',
      'This keeps only $f(2)g\'(2) = (3)(-2)$ and drops the first product-rule term, $f\'(2)g(2) = (-1)(4)$.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-3-composite-implicit-inverse',
    stimulus: TABLE_FG,
    question: 'Let $p(x) = f(g(x))$. What is the value of $p\'(1)$?',
    options: ['$-6$', '$9$', '$-1$', '$-3$'],
    correctAnswer: 3,
    explanation:
      'The chain rule gives $p\'(1) = f\'(g(1))\\,g\'(1) = f\'(2)\\cdot 3 = -3$. The value $-6$ evaluates $f\'$ at $1$ instead of at $g(1) = 2$, $-1$ is $f\'(2)$ without the inner derivative, and $9$ evaluates $f\'$ at $g\'(1) = 3$ instead of at $g(1)$.',
    optionExplanations: [
      'This is $f\'(1)\\cdot g\'(1) = (-2)(3)$, which evaluates the outer derivative at $x = 1$ instead of at the inner value $g(1) = 2$.',
      'This is $f\'(3)\\cdot g\'(1) = 3\\cdot3$, which evaluates $f\'$ at $g\'(1) = 3$. The outer derivative is evaluated at $g(1) = 2$.',
      'This is $f\'(g(1)) = f\'(2) = -1$ alone, without multiplying by the inner derivative $g\'(1) = 3$.',
      'By the chain rule, $p\'(1) = f\'(g(1))\\cdot g\'(1) = f\'(2)\\cdot3 = (-1)(3) = -3$.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-6-integration-accumulation',
    stimulus: TABLE_FG,
    question: 'What is the value of $\\displaystyle\\int_1^3 f\'(g(x))\\,g\'(x)\\,dx$?',
    options: ['$1$', '$-1$', '$-3$', '$-9$'],
    correctAnswer: 0,
    explanation:
      'With $u = g(x)$, the integral is $f(g(3)) - f(g(1)) = f(1) - f(2) = 4 - 3 = 1$. The value $-1$ subtracts in the wrong order, and $-3$ is $f(3) - f(1)$, which ignores the inner function. The value $-9$ evaluates the integrand at the endpoints, $f\'(g(3))g\'(3) - f\'(g(1))g\'(1)$, instead of its antiderivative.',
    optionExplanations: [
      'With $u = g(x)$, an antiderivative is $f(g(x))$, so the integral is $f(g(3)) - f(g(1)) = f(1) - f(2) = 4 - 3 = 1$.',
      'This is $f(g(1)) - f(g(3)) = 3 - 4$, which subtracts the antiderivative values in the wrong order.',
      'This is $f(3) - f(1) = 1 - 4$, which ignores the inner function. After the substitution $u = g(x)$, the limits become $g(1) = 2$ and $g(3) = 1$.',
      'This subtracts the integrand\'s values at the endpoints, $f\'(1)\\cdot6 - f\'(2)\\cdot3$, instead of evaluating an antiderivative, $f(g(x))$.',
    ],
  },

  // U2 (2 more)
  {
    type: 'mcq',
    topic: 'unit-2-differentiation-definition',
    question: 'What is $\\displaystyle\\lim_{h \\to 0} \\frac{\\cos\\left(\\frac{\\pi}{3} + h\\right) - \\frac{1}{2}}{h}$?',
    options: ['$\\dfrac{\\sqrt{3}}{2}$', '$-\\dfrac{\\sqrt{3}}{2}$', '$\\dfrac{1}{2}$', '$0$'],
    correctAnswer: 1,
    explanation:
      'The limit is the derivative of $\\cos x$ at $x = \\frac{\\pi}{3}$, which is $-\\sin\\frac{\\pi}{3} = -\\frac{\\sqrt{3}}{2}$. The positive value drops the negative sign of the derivative of cosine, $\\frac{1}{2}$ is $\\cos\\frac{\\pi}{3}$ itself, and $0$ comes from substituting $h = 0$ into the numerator only.',
    optionExplanations: [
      'This uses $\\frac{d}{dx}\\cos x = \\sin x$. The derivative of cosine is $-\\sin x$, so the limit is negative.',
      'The limit is the definition of the derivative of $\\cos x$ at $\\frac{\\pi}{3}$, which is $-\\sin\\frac{\\pi}{3} = -\\frac{\\sqrt{3}}{2}$.',
      'This is $\\cos\\frac{\\pi}{3}$, the function value. The difference quotient describes the slope of $\\cos x$ at $\\frac{\\pi}{3}$, not its value.',
      'This substitutes $h = 0$ into the numerator only. The quotient has the form $\\frac{0}{0}$, and its limit is the derivative of $\\cos x$ at $\\frac{\\pi}{3}$.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-2-differentiation-definition',
    question: 'If $f(x) = \\dfrac{e^{2x}}{x + 1}$, what is $f\'(0)$?',
    options: ['$-1$', '$2$', '$3$', '$1$'],
    correctAnswer: 3,
    explanation:
      'The quotient rule gives $f\'(x) = \\frac{2e^{2x}(x + 1) - e^{2x}}{(x + 1)^2}$, so $f\'(0) = \\frac{2 - 1}{1} = 1$. The value $3$ adds the two terms of the numerator, $-1$ subtracts them in the wrong order, and $2$ differentiates only the numerator.',
    optionExplanations: [
      'This reverses the quotient-rule numerator, computing $e^{2x}\\cdot1 - 2e^{2x}(x + 1)$ at $0$. The correct order is (bottom)(derivative of top) minus (top)(derivative of bottom).',
      'This differentiates only the numerator, $2e^{2x}$, and divides by $x + 1$, ignoring the derivative of the denominator.',
      'This adds the quotient-rule terms, $\\frac{2 + 1}{1}$, instead of subtracting $e^{2x}\\cdot1$ from $2e^{2x}(x + 1)$.',
      'By the quotient rule, $f\'(x) = \\frac{2e^{2x}(x + 1) - e^{2x}}{(x + 1)^2}$, so $f\'(0) = \\frac{2 - 1}{1} = 1$.',
    ],
  },

  // U3 (1 more)
  {
    type: 'mcq',
    topic: 'unit-3-composite-implicit-inverse',
    question: 'The point $(1, 1)$ lies on the curve $x^2 + xy + y^3 = 3$. What is the value of $\\dfrac{dy}{dx}$ at this point?',
    options: ['$-\\dfrac{3}{4}$', '$-\\dfrac{1}{2}$', '$\\dfrac{3}{4}$', '$-6$'],
    correctAnswer: 0,
    explanation:
      'Differentiating implicitly, $2x + y + x\\frac{dy}{dx} + 3y^2\\frac{dy}{dx} = 0$. At $(1, 1)$, $3 + 4\\frac{dy}{dx} = 0$, so $\\frac{dy}{dx} = -\\frac{3}{4}$. The value $-\\frac{1}{2}$ drops the $y$ term from the product rule on $xy$, $-6$ leaves out $\\frac{dy}{dx}$ on the derivative of $y^3$, and $\\frac{3}{4}$ has a sign error.',
    optionExplanations: [
      'Implicit differentiation gives $2x + y + x\\frac{dy}{dx} + 3y^2\\frac{dy}{dx} = 0$. At $(1, 1)$ this is $3 + 4\\frac{dy}{dx} = 0$, so $\\frac{dy}{dx} = -\\frac{3}{4}$.',
      'This differentiates $xy$ as $x\\frac{dy}{dx}$ only, dropping the $y$ term of the product rule, so the equation becomes $2 + 4\\frac{dy}{dx} = 0$.',
      'This moves the constant terms to the other side without changing their sign. From $3 + 4\\frac{dy}{dx} = 0$, the slope is negative.',
      'This differentiates $y^3$ as $3y^2$ without the factor $\\frac{dy}{dx}$, giving $2 + 1 + \\frac{dy}{dx} + 3 = 0$.',
    ],
  },

  // U4 (2)
  {
    type: 'mcq',
    topic: 'unit-4-contextual-applications-differentiation',
    question: 'What is $\\displaystyle\\lim_{x \\to 0} \\frac{\\arctan(2x)}{e^x - 1}$?',
    options: ['$\\dfrac{1}{2}$', '$2$', '$1$', '$0$'],
    correctAnswer: 1,
    explanation:
      'The form is $\\frac{0}{0}$, so L\'Hospital\'s rule applies: $\\lim_{x \\to 0}\\frac{2/(1 + 4x^2)}{e^x} = \\frac{2}{1} = 2$. The value $\\frac{1}{2}$ inverts the ratio, $1$ drops the chain-rule factor $2$, and $0$ reads $\\frac{0}{0}$ as $0$.',
    optionExplanations: [
      'This inverts the ratio of the derivatives, computing $\\frac{e^x}{2/(1 + 4x^2)}$. L\'Hospital\'s rule keeps the numerator\'s derivative on top.',
      'The form is $\\frac{0}{0}$. By L\'Hospital\'s rule the limit is $\\lim_{x \\to 0}\\frac{2/(1 + 4x^2)}{e^x} = \\frac{2}{1} = 2$.',
      'This differentiates $\\arctan(2x)$ as $\\frac{1}{1 + 4x^2}$, leaving out the chain-rule factor $2$ from the inner function $2x$.',
      'Direct substitution gives $\\frac{0}{0}$, which is indeterminate, not $0$. L\'Hospital\'s rule is needed to find the limit.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-4-contextual-applications-differentiation',
    question: 'A particle moves along the $x$-axis with velocity $v(t) = t^2 - 7t + 10$ for $t \\ge 0$. For which values of $t$ is the speed of the particle increasing?',
    options: ['$t > 3.5$ only', '$2 < t < 5$ only', '$t > 5$ only', '$2 < t < 3.5$ and $t > 5$'],
    correctAnswer: 3,
    explanation:
      'Speed increases when $v(t) = (t - 2)(t - 5)$ and $a(t) = 2t - 7$ have the same sign. Both are negative on $2 < t < 3.5$ and both are positive for $t > 5$. The interval $t > 3.5$ is where $a > 0$ (velocity increasing), $2 < t < 5$ is where $v < 0$ (moving left), and $t > 5$ alone misses the interval where both are negative.',
    optionExplanations: [
      'This is where $a(t) = 2t - 7 > 0$, so the velocity is increasing. On $3.5 < t < 5$, $v < 0$ while $a > 0$, so the speed is decreasing there.',
      'This is where $v(t) < 0$, when the particle moves left. On $3.5 < t < 5$ the velocity and acceleration have opposite signs, so the speed decreases.',
      'This requires both $v$ and $a$ to be positive. Speed also increases when both are negative, which happens on $2 < t < 3.5$.',
      'Speed increases when $v(t) = (t - 2)(t - 5)$ and $a(t) = 2t - 7$ share a sign: both negative on $2 < t < 3.5$ and both positive for $t > 5$.',
    ],
  },

  // Graph-of-f' set: U5, U5, U6
  {
    type: 'mcq',
    topic: 'unit-5-analytical-applications-differentiation',
    stimulus: GRAPH_FPRIME,
    question: 'At which values of $x$ in the open interval $-2 < x < 6$ does $f$ have a relative maximum?',
    options: ['$x = -1$ only', '$x = 3$ only', '$x = -1$ and $x = 3$', '$x = 2$ and $x = 4$'],
    correctAnswer: 1,
    explanation:
      'A relative maximum occurs where $f\'$ changes from positive to negative, which happens only at $x = 3$. At $x = -1$, $f\'$ changes from negative to positive (a relative minimum). At $x = 2$ and $x = 4$, $f\'$ has corners where it changes from increasing to decreasing or back, which mark changes in concavity, not extrema.',
    optionExplanations: [
      'At $x = -1$, $f\'$ changes from negative to positive, so $f$ has a relative minimum there, not a maximum.',
      '$f\'$ changes from positive to negative only at $x = 3$, so by the First Derivative Test that is the only relative maximum.',
      'This counts both zeros of $f\'$. At $x = -1$ the sign change is from negative to positive, which gives a relative minimum.',
      'These are the turning points of the graph of $f\'$, where $f\'$ changes between increasing and decreasing. They are points of inflection of $f$; $f\'$ does not change sign at either one.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-5-analytical-applications-differentiation',
    stimulus: GRAPH_FPRIME,
    question: 'Based on the graph of $f\'$, on which interval or intervals is the graph of $f$ itself concave down?',
    options: ['$2 < x < 4$', '$-2 < x < 0$ and $4 < x < 6$', '$0 < x < 2$ and $2 < x < 4$', '$-2 < x < -1$ and $3 < x < 6$'],
    correctAnswer: 0,
    explanation:
      'The graph of $f$ is concave down where $f\'$ is decreasing, which is only on $2 < x < 4$. On $-2 < x < 0$ and $4 < x < 6$, $f\'$ is increasing, so $f$ is concave up there. On $0 < x < 2$, $f\'$ is constant, so $f$ is linear there. The intervals where $f\' < 0$ are where $f$ is decreasing, a different property.',
    optionExplanations: [
      'The graph of $f$ is concave down exactly where $f\'$ is decreasing. The segment of $f\'$ from $(2, 2)$ to $(4, -2)$ is the only one that slopes downward.',
      'On these intervals the segments of $f\'$ slope upward, so $f\'$ is increasing and $f$ is concave up, the opposite of what is asked.',
      'On $0 < x < 2$, $f\'$ is constant, so $f$ is linear there, not concave down. Only the decreasing segment of $f\'$, on $2 < x < 4$, counts.',
      'These are the intervals where $f\' < 0$, so $f$ is decreasing there. Concavity depends on whether $f\'$ is increasing or decreasing, not on its sign.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-6-integration-accumulation',
    stimulus: GRAPH_FPRIME,
    question: 'What is the value of $f(4)$?',
    options: ['$4$', '$9$', '$7$', '$1$'],
    correctAnswer: 2,
    explanation:
      'By the Fundamental Theorem, $f(4) = f(0) + \\int_0^4 f\'(x)\\,dx$. The area is $4$ on $[0, 2]$, then $+1$ on $[2, 3]$ and $-1$ on $[3, 4]$, so $f(4) = 3 + 4 = 7$. The value $4$ omits $f(0)$, $9$ counts the region below the axis as positive, and $1$ adds $f\'(4) = -2$ to $f(0)$.',
    optionExplanations: [
      'This is $\\int_0^4 f\'(x)\\,dx = 4$, the change in $f$, without adding the starting value $f(0) = 3$.',
      'This adds the triangle on $[3, 4]$ as $+1$, but $f\' < 0$ there, so that area counts as $-1$. The net change is $4$, not $6$.',
      '$f(4) = f(0) + \\int_0^4 f\'(x)\\,dx$. The signed area is $4$ on $[0, 2]$, $+1$ on $[2, 3]$ and $-1$ on $[3, 4]$, so $f(4) = 3 + 4 = 7$.',
      'This adds the slope $f\'(4) = -2$ to $f(0)$. The change in $f$ is the accumulated area under $f\'$, not one value of $f\'$.',
    ],
  },

  // U6 (4 more)
  {
    type: 'mcq',
    topic: 'unit-6-integration-accumulation',
    question: 'What is $\\displaystyle\\int_1^e x\\ln x\\,dx$?',
    options: ['$\\dfrac{e^2 - 1}{4}$', '$\\dfrac{e^2}{4}$', '$\\dfrac{e^2}{2}$', '$\\dfrac{e^2 + 1}{4}$'],
    correctAnswer: 3,
    explanation:
      'Integration by parts with $u = \\ln x$ and $dv = x\\,dx$ gives $\\frac{x^2}{2}\\ln x - \\frac{x^2}{4}$, so the integral is $\\left(\\frac{e^2}{2} - \\frac{e^2}{4}\\right) - \\left(0 - \\frac{1}{4}\\right) = \\frac{e^2 + 1}{4}$. The value $\\frac{e^2 - 1}{4}$ mishandles the sign at the lower limit, $\\frac{e^2}{4}$ drops the lower limit, and $\\frac{e^2}{2}$ omits the integral $\\int\\frac{x}{2}\\,dx$.',
    optionExplanations: [
      'This subtracts $\\frac{1}{4}$ at the end. At $x = 1$ the antiderivative is $0 - \\frac{1}{4}$, and subtracting a negative value adds $\\frac{1}{4}$.',
      'This evaluates the antiderivative at $x = e$ only. At $x = 1$ it equals $-\\frac{1}{4}$, which must also be subtracted.',
      'This keeps only the $uv$ term, $\\left[\\frac{x^2}{2}\\ln x\\right]_1^e$, and leaves out the integral $\\int \\frac{x^2}{2}\\cdot\\frac{1}{x}\\,dx$ from the parts formula.',
      'With $u = \\ln x$ and $dv = x\\,dx$, an antiderivative is $\\frac{x^2}{2}\\ln x - \\frac{x^2}{4}$. Evaluating gives $\\frac{e^2}{4} - \\left(-\\frac{1}{4}\\right) = \\frac{e^2 + 1}{4}$.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-6-integration-accumulation',
    question: 'What is $\\displaystyle\\int_2^3 \\frac{5}{(x - 1)(x + 4)}\\,dx$?',
    options: ['$-\\ln\\dfrac{12}{7}$', '$\\ln\\dfrac{12}{7}$', '$5\\ln\\dfrac{12}{7}$', '$\\dfrac{1}{5}\\ln\\dfrac{12}{7}$'],
    correctAnswer: 1,
    explanation:
      'Partial fractions give $\\frac{5}{(x - 1)(x + 4)} = \\frac{1}{x - 1} - \\frac{1}{x + 4}$, so the integral is $\\left[\\ln\\frac{x - 1}{x + 4}\\right]_2^3 = \\ln\\frac{2}{7} - \\ln\\frac{1}{6} = \\ln\\frac{12}{7}$. The negative value reverses the signs of the decomposition, $5\\ln\\frac{12}{7}$ multiplies by $5$ again after the coefficients already absorbed it, and $\\frac{1}{5}\\ln\\frac{12}{7}$ decomposes $\\frac{1}{(x - 1)(x + 4)}$ and then drops the numerator $5$.',
    optionExplanations: [
      'This reverses the signs of the decomposition, using $-\\frac{1}{x - 1} + \\frac{1}{x + 4}$. From $5 = A(x + 4) + B(x - 1)$, $A = 1$ and $B = -1$.',
      'Since $\\frac{5}{(x - 1)(x + 4)} = \\frac{1}{x - 1} - \\frac{1}{x + 4}$, the integral is $\\left[\\ln\\frac{x - 1}{x + 4}\\right]_2^3 = \\ln\\frac{2}{7} - \\ln\\frac{1}{6} = \\ln\\frac{12}{7}$.',
      'The coefficients $A = 1$ and $B = -1$ already include the numerator $5$. Multiplying the result by $5$ again counts it twice.',
      'This uses $\\frac{1}{(x - 1)(x + 4)} = \\frac{1}{5}\\left(\\frac{1}{x - 1} - \\frac{1}{x + 4}\\right)$ but forgets to multiply by the numerator $5$, which cancels the $\\frac{1}{5}$.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-6-integration-accumulation',
    question: 'What is $\\displaystyle\\int_0^4 \\frac{1}{\\sqrt{4 - x}}\\,dx$?',
    options: ['$-4$', '$\\dfrac{16}{3}$', 'The integral diverges.', '$4$'],
    correctAnswer: 3,
    explanation:
      'The integrand is unbounded at $x = 4$, so $\\int_0^4 \\frac{dx}{\\sqrt{4 - x}} = \\lim_{b \\to 4^-}\\left[-2\\sqrt{4 - x}\\right]_0^b = 0 + 2\\cdot2 = 4$. The value $-4$ drops the negative sign from the chain rule, $\\frac{16}{3}$ integrates $\\sqrt{4 - x}$ instead of its reciprocal, and the integral converges because the power of $4 - x$ is less than $1$.',
    optionExplanations: [
      'This uses $2\\sqrt{4 - x}$ as the antiderivative, dropping the factor $-1$ from the chain rule. A positive integrand on $[0, 4]$ cannot give a negative value.',
      'This is $\\int_0^4\\sqrt{4 - x}\\,dx = \\left[-\\frac{2}{3}(4 - x)^{3/2}\\right]_0^4$, which raises the power to $\\frac{3}{2}$. The integrand has power $-\\frac{1}{2}$, so the antiderivative has power $\\frac{1}{2}$.',
      'The integrand is unbounded at $x = 4$, but $\\frac{1}{(4 - x)^{1/2}}$ has power less than $1$, so the limit of the antiderivative is finite.',
      'The integral is improper at $x = 4$: $\\lim_{b \\to 4^-}\\left[-2\\sqrt{4 - x}\\right]_0^b = 0 - (-2\\cdot2) = 4$.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-6-integration-accumulation',
    question: 'What is $\\displaystyle\\lim_{n \\to \\infty} \\sum_{k=1}^{n} \\frac{1}{n}\\sqrt{1 + \\frac{3k}{n}}$?',
    options: ['$\\dfrac{14}{3}$', '$\\dfrac{14}{9}$', '$\\dfrac{16}{9}$', '$2$'],
    correctAnswer: 1,
    explanation:
      'The sum is a right Riemann sum for $\\int_0^1\\sqrt{1 + 3x}\\,dx = \\left[\\frac{2}{9}(1 + 3x)^{3/2}\\right]_0^1 = \\frac{2}{9}(8 - 1) = \\frac{14}{9}$. The value $\\frac{14}{3}$ leaves out the factor $\\frac{1}{3}$ from the inner function, $\\frac{16}{9}$ drops the lower limit, and $2$ is the integrand\'s value at $x = 1$.',
    optionExplanations: [
      'This integrates $\\sqrt{1 + 3x}$ as $\\frac{2}{3}(1 + 3x)^{3/2}$, leaving out the factor $\\frac{1}{3}$ that the inner function $3x$ requires.',
      'With $\\Delta x = \\frac{1}{n}$ and $x_k = \\frac{k}{n}$, the limit is $\\int_0^1\\sqrt{1 + 3x}\\,dx = \\frac{2}{9}\\left[(1 + 3x)^{3/2}\\right]_0^1 = \\frac{2}{9}(8 - 1) = \\frac{14}{9}$.',
      'This evaluates $\\frac{2}{9}(1 + 3x)^{3/2}$ only at $x = 1$. At $x = 0$ it equals $\\frac{2}{9}$, which must be subtracted.',
      'This is $\\sqrt{1 + 3\\cdot1}$, the value of the integrand at the right end. The limit of the sum is the integral over $[0, 1]$, not one height.',
    ],
  },

  // U7 (2)
  {
    type: 'mcq',
    topic: 'unit-7-differential-equations',
    question: 'Let $y = f(x)$ be the solution to the differential equation $\\dfrac{dy}{dx} = x\\left(1 + y^2\\right)$ with $f(0) = 1$. Which of the following is an expression for $f(x)$?',
    options: [
      '$\\tan\\left(\\dfrac{x^2}{2} + \\dfrac{\\pi}{4}\\right)$',
      '$\\tan\\left(\\dfrac{x^2}{2}\\right) + 1$',
      '$\\tan\\left(x^2 + \\dfrac{\\pi}{4}\\right)$',
      '$\\arctan\\left(\\dfrac{x^2}{2}\\right) + 1$',
    ],
    correctAnswer: 0,
    explanation:
      'Separating, $\\frac{dy}{1 + y^2} = x\\,dx$, so $\\arctan y = \\frac{x^2}{2} + C$. With $y = 1$ at $x = 0$, $C = \\arctan 1 = \\frac{\\pi}{4}$, so $y = \\tan\\left(\\frac{x^2}{2} + \\frac{\\pi}{4}\\right)$. Adding $1$ outside the tangent applies the initial condition after solving instead of finding $C$, $x^2$ in place of $\\frac{x^2}{2}$ misintegrates $x$, and the arctangent form inverts the wrong side.',
    optionExplanations: [
      'Separating gives $\\int\\frac{dy}{1 + y^2} = \\int x\\,dx$, so $\\arctan y = \\frac{x^2}{2} + C$. Then $C = \\arctan 1 = \\frac{\\pi}{4}$, and $y = \\tan\\left(\\frac{x^2}{2} + \\frac{\\pi}{4}\\right)$.',
      'This adds the initial value $1$ outside the tangent instead of finding the constant inside it. Its derivative does not equal $x(1 + y^2)$.',
      'This integrates $x$ as $x^2$ instead of $\\frac{x^2}{2}$. Differentiating gives $2x(1 + y^2)$, twice the required rate.',
      'This takes the arctangent of the $x$-side. Separating gives $\\arctan y = \\frac{x^2}{2} + C$, so $y$ is a tangent, not an arctangent.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-7-differential-equations',
    question: 'A slope field has horizontal segments at every point on the lines $y = -1$ and $y = 3$, positive slopes at every point with $-1 < y < 3$, and negative slopes at every point with $y > 3$. Which differential equation could have produced this slope field?',
    options: [
      '$\\dfrac{dy}{dx} = -(y + 1)(3 - y)$',
      '$\\dfrac{dy}{dx} = x(y + 1)(3 - y)$',
      '$\\dfrac{dy}{dx} = (y + 1)(3 - y)^2$',
      '$\\dfrac{dy}{dx} = (y + 1)(3 - y)$',
    ],
    correctAnswer: 3,
    explanation:
      'For $\\frac{dy}{dx} = (y + 1)(3 - y)$, the slope is $0$ when $y = -1$ or $y = 3$, positive for $-1 < y < 3$ and negative for $y > 3$. The equation $-(y + 1)(3 - y)$ has the same zeros but the opposite signs, $x(y + 1)(3 - y)$ changes sign across the $y$-axis, and $(y + 1)(3 - y)^2$ stays positive above $y = 3$.',
    optionExplanations: [
      'This has horizontal segments on $y = -1$ and $y = 3$, but its slopes are negative for $-1 < y < 3$ and positive for $y > 3$, the reverse of the description.',
      'This is $0$ on $y = -1$ and $y = 3$, but the factor $x$ makes the slopes negative at points with $x < 0$ and $-1 < y < 3$, and $0$ along the $y$-axis.',
      'This is $0$ on both lines, but the squared factor $(3 - y)^2$ is never negative, so the slopes above $y = 3$ are positive, not negative.',
      'The slope $(y + 1)(3 - y)$ is $0$ when $y = -1$ or $y = 3$, positive for $-1 < y < 3$, and negative for $y > 3$, matching every feature described.',
    ],
  },

  // U8 (1)
  {
    type: 'mcq',
    topic: 'unit-8-applications-integration',
    question: 'What is the length of the curve $y = \\dfrac{1}{3}\\left(x^2 + 2\\right)^{3/2}$ from $x = 0$ to $x = 3$?',
    options: ['$9$', '$15$', '$\\dfrac{348}{5}$', '$12$'],
    correctAnswer: 3,
    explanation:
      'Here $y\' = x\\sqrt{x^2 + 2}$, so $1 + (y\')^2 = x^4 + 2x^2 + 1 = (x^2 + 1)^2$ and the length is $\\int_0^3 (x^2 + 1)\\,dx = 9 + 3 = 12$. The value $9$ drops the $+1$, $15$ integrates $x^2 + 2$ instead of the square root of $1 + (y\')^2$, and $\\frac{348}{5}$ integrates $(x^2 + 1)^2$ without taking the square root.',
    optionExplanations: [
      'This integrates $x^2$ alone. Since $1 + (y\')^2 = (x^2 + 1)^2$, the integrand is $x^2 + 1$, and the $+1$ adds $3$ to the length.',
      'This integrates $x^2 + 2$, the expression under the original root. The arc-length integrand is $\\sqrt{1 + (y\')^2} = x^2 + 1$.',
      'This integrates $1 + (y\')^2 = (x^2 + 1)^2$ without taking its square root. Arc length uses $\\sqrt{1 + (y\')^2}$.',
      'Since $y\' = x\\sqrt{x^2 + 2}$, $1 + (y\')^2 = (x^2 + 1)^2$. The length is $\\int_0^3 (x^2 + 1)\\,dx = 9 + 3 = 12$.',
    ],
  },

  // U9 (2)
  {
    type: 'mcq',
    topic: 'unit-9-parametric-polar-vector',
    question: 'A curve is defined by the parametric equations $x = e^{2t}$ and $y = t^2 - 4t$. What is the value of $\\dfrac{d^2y}{dx^2}$ at the point where $t = 0$?',
    options: ['$5$', '$-2$', '$\\dfrac{5}{2}$', '$\\dfrac{1}{2}$'],
    correctAnswer: 2,
    explanation:
      'First, $\\frac{dy}{dx} = \\frac{2t - 4}{2e^{2t}} = (t - 2)e^{-2t}$. Then $\\frac{d^2y}{dx^2} = \\frac{\\frac{d}{dt}\\left[(t - 2)e^{-2t}\\right]}{dx/dt} = \\frac{(5 - 2t)e^{-2t}}{2e^{2t}}$, which is $\\frac{5}{2}$ at $t = 0$. The value $5$ forgets to divide by $\\frac{dx}{dt}$, $-2$ is $\\frac{dy}{dx}$, and $\\frac{1}{2}$ divides $\\frac{d^2y}{dt^2}$ by $\\frac{d^2x}{dt^2}$.',
    optionExplanations: [
      'This is $\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) = (5 - 2t)e^{-2t}$ at $t = 0$. It still has to be divided by $\\frac{dx}{dt} = 2$.',
      'This is $\\frac{dy}{dx} = (t - 2)e^{-2t}$ at $t = 0$, the first derivative, not the second.',
      '$\\frac{dy}{dx} = (t - 2)e^{-2t}$. Its $t$-derivative is $(5 - 2t)e^{-2t}$, and dividing by $\\frac{dx}{dt} = 2e^{2t}$ gives $\\frac{5}{2}$ at $t = 0$.',
      'This divides $\\frac{d^2y}{dt^2} = 2$ by $\\frac{d^2x}{dt^2} = 4$. The second derivative is $\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right)$ divided by $\\frac{dx}{dt}$.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-9-parametric-polar-vector',
    question: 'What is the area of the region that lies inside both the circle $r = 2$ and the circle $r = 4\\cos\\theta$?',
    options: ['$\\dfrac{4\\pi}{3} - \\sqrt{3}$', '$\\dfrac{8\\pi}{3} - 2\\sqrt{3}$', '$\\dfrac{8\\pi}{3} - \\sqrt{3}$', '$\\dfrac{4\\pi}{3}$'],
    correctAnswer: 1,
    explanation:
      'The circles meet where $4\\cos\\theta = 2$, at $\\theta = \\pm\\frac{\\pi}{3}$. By symmetry the area is $2\\left[\\frac{1}{2}\\int_0^{\\pi/3} 4\\,d\\theta + \\frac{1}{2}\\int_{\\pi/3}^{\\pi/2} 16\\cos^2\\theta\\,d\\theta\\right] = 2\\left[\\frac{2\\pi}{3} + \\frac{2\\pi}{3} - \\sqrt{3}\\right] = \\frac{8\\pi}{3} - 2\\sqrt{3}$. The value $\\frac{4\\pi}{3} - \\sqrt{3}$ is the upper half only, $\\frac{8\\pi}{3} - \\sqrt{3}$ doubles only the $\\pi$ terms, and $\\frac{4\\pi}{3}$ counts only the part bounded by $r = 2$.',
    optionExplanations: [
      'This is the area of the part above the $x$-axis only. The region is symmetric about the $x$-axis, so this value must be doubled.',
      'The circles meet at $\\theta = \\pm\\frac{\\pi}{3}$. The area is $2\\left[\\frac{1}{2}\\int_0^{\\pi/3} 4\\,d\\theta + \\frac{1}{2}\\int_{\\pi/3}^{\\pi/2} 16\\cos^2\\theta\\,d\\theta\\right] = \\frac{8\\pi}{3} - 2\\sqrt{3}$.',
      'This doubles the $\\pi$ terms of the upper-half area but not the $-\\sqrt{3}$. By symmetry the whole upper-half value, $\\frac{4\\pi}{3} - \\sqrt{3}$, is doubled.',
      'This is only the sector of $r = 2$ for $-\\frac{\\pi}{3} \\le \\theta \\le \\frac{\\pi}{3}$. Beyond those angles the region is bounded by $r = 4\\cos\\theta$, which adds more area.',
    ],
  },

  // Power-series set: U10, U10
  {
    type: 'mcq',
    topic: 'unit-10-infinite-series',
    stimulus: POWER_SERIES,
    question: 'What is the interval of convergence of the power series for $f$?',
    options: ['$-5 < x \\le 1$', '$-5 \\le x < 1$', '$-5 < x < 1$', '$-1 \\le x < 5$'],
    correctAnswer: 1,
    explanation:
      'The ratio test gives $\\frac{|x + 2|}{3}\\sqrt{\\frac{n}{n + 1}} \\to \\frac{|x + 2|}{3} < 1$, so $-5 < x < 1$. At $x = 1$ the series is $\\sum\\frac{1}{\\sqrt{n}}$, a divergent $p$-series, and at $x = -5$ it is $\\sum\\frac{(-1)^n}{\\sqrt{n}}$, which converges by the alternating series test. The interval is $-5 \\le x < 1$. The other choices mishandle the endpoints or use center $2$ instead of $-2$.',
    optionExplanations: [
      'This reverses the endpoints. At $x = 1$ the series is $\\sum\\frac{1}{\\sqrt{n}}$, which diverges, and at $x = -5$ it alternates and converges.',
      'The ratio test gives $|x + 2| < 3$. At $x = -5$ the series $\\sum\\frac{(-1)^n}{\\sqrt{n}}$ converges by the alternating series test, and at $x = 1$ the $p$-series $\\sum\\frac{1}{\\sqrt{n}}$ diverges.',
      'This is the open interval from the ratio test. The endpoints must be checked separately, and the series converges at $x = -5$.',
      'This uses center $2$ instead of $-2$. The series is in powers of $x + 2$, so it is centered at $x = -2$.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-10-infinite-series',
    stimulus: POWER_SERIES,
    question: 'What is the value of $f\'(-2)$?',
    options: ['$0$', '$\\dfrac{1}{3}$', '$\\dfrac{\\sqrt{2}}{9}$', '$1$'],
    correctAnswer: 1,
    explanation:
      'Differentiating term by term, $f\'(x) = \\sum_{n=1}^{\\infty}\\frac{n(x + 2)^{n - 1}}{\\sqrt{n}\\cdot3^n}$. At $x = -2$ only the $n = 1$ term is nonzero, so $f\'(-2) = \\frac{1}{3}$. The value $0$ is $f(-2)$, $\\frac{\\sqrt{2}}{9}$ is the coefficient from the $n = 2$ term, and $1$ ignores the factor $3^n$.',
    optionExplanations: [
      'This is $f(-2)$: every term of $f$ contains a positive power of $x + 2$. In $f\'$, the $n = 1$ term becomes a constant.',
      'In $f\'(x) = \\sum\\frac{n(x + 2)^{n - 1}}{\\sqrt{n}\\cdot3^n}$, every term with $n \\ge 2$ is $0$ at $x = -2$. The $n = 1$ term is $\\frac{1}{1\\cdot3} = \\frac{1}{3}$.',
      'This is the coefficient of $(x + 2)$ in $f\'$, from the $n = 2$ term. At $x = -2$ that term is $0$; only the constant $n = 1$ term remains.',
      'This uses $\\frac{n}{\\sqrt{n}}$ at $n = 1$ but drops the factor $3^n = 3$ in the denominator.',
    ],
  },

  // U10 (4 more)
  {
    type: 'mcq',
    topic: 'unit-10-infinite-series',
    question: 'Which of the following series converges?',
    options: [
      '$\\displaystyle\\sum_{n=1}^{\\infty} \\frac{1}{\\sqrt{n} + 1}$',
      '$\\displaystyle\\sum_{n=1}^{\\infty} \\frac{n^2}{3n^2 - 2}$',
      '$\\displaystyle\\sum_{n=1}^{\\infty} \\frac{\\sqrt{n}}{n^2 + 1}$',
      '$\\displaystyle\\sum_{n=1}^{\\infty} \\frac{3^n}{2^n + n}$',
    ],
    correctAnswer: 2,
    explanation:
      'Comparing $\\frac{\\sqrt{n}}{n^2 + 1}$ with $\\frac{1}{n^{3/2}}$ gives a limit of $1$, and $\\sum\\frac{1}{n^{3/2}}$ is a convergent $p$-series, so this series converges by the limit comparison test. The series with $\\sqrt{n} + 1$ behaves like $\\sum\\frac{1}{\\sqrt{n}}$, which diverges. The terms $\\frac{n^2}{3n^2 - 2} \\to \\frac{1}{3}$ and $\\frac{3^n}{2^n + n} \\to \\infty$ do not approach $0$.',
    optionExplanations: [
      'By limit comparison with $\\frac{1}{\\sqrt{n}}$ (limit $1$), this behaves like a $p$-series with $p = \\frac{1}{2} \\le 1$, so it diverges.',
      'The terms approach $\\frac{1}{3}$, not $0$, so the series diverges by the $n$th term test.',
      'Limit comparison with $\\frac{1}{n^{3/2}}$ gives $\\lim\\frac{n^2}{n^2 + 1} = 1$. Since $\\sum\\frac{1}{n^{3/2}}$ converges ($p = \\frac{3}{2} > 1$), this series converges.',
      'The terms grow like $\\left(\\frac{3}{2}\\right)^n$, so they do not approach $0$, and the series diverges by the $n$th term test.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-10-infinite-series',
    question: 'What is the coefficient of $x^4$ in the Maclaurin series for $x\\sin(2x)$?',
    options: ['$\\dfrac{4}{3}$', '$-\\dfrac{8}{3}$', '$-\\dfrac{1}{6}$', '$-\\dfrac{4}{3}$'],
    correctAnswer: 3,
    explanation:
      'Since $\\sin u = u - \\frac{u^3}{6} + \\cdots$, $\\sin(2x) = 2x - \\frac{8x^3}{6} + \\cdots$, and multiplying by $x$ gives $2x^2 - \\frac{4}{3}x^4 + \\cdots$. The positive value drops the alternating sign, $-\\frac{8}{3}$ divides $2^3$ by $3$ instead of $3!$, and $-\\frac{1}{6}$ leaves out the factor $2^3$.',
    optionExplanations: [
      'This drops the alternating sign of the sine series. The $x^3$ term of $\\sin u$ is $-\\frac{u^3}{3!}$, so the coefficient is negative.',
      'This divides $(2x)^3 = 8x^3$ by $3$ instead of $3! = 6$, giving $-\\frac{8}{3}$ in place of $-\\frac{8}{6}$.',
      'This uses $2x - \\frac{x^3}{6}$ for $\\sin(2x)$, cubing only the $x$ and forgetting that $(2x)^3 = 8x^3$ in the second term.',
      '$\\sin(2x) = 2x - \\frac{(2x)^3}{3!} + \\cdots = 2x - \\frac{4}{3}x^3 + \\cdots$. Multiplying by $x$ gives $2x^2 - \\frac{4}{3}x^4 + \\cdots$.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-10-infinite-series',
    question: 'The infinite series $\\displaystyle\\sum_{n=1}^{\\infty} \\frac{(-1)^{n+1}\\,2^n}{n\\cdot 3^n}$ converges. To what value does it converge?',
    options: ['$\\ln\\dfrac{5}{3}$', '$\\ln 3$', '$\\dfrac{2}{5}$', '$e^{2/3} - 1$'],
    correctAnswer: 0,
    explanation:
      'The Maclaurin series $\\ln(1 + x) = \\sum_{n=1}^{\\infty}\\frac{(-1)^{n+1}x^n}{n}$ holds for $-1 < x \\le 1$. With $x = \\frac{2}{3}$ the sum is $\\ln\\frac{5}{3}$. The value $\\ln 3 = -\\ln\\left(1 - \\frac{2}{3}\\right)$ uses the series without alternating signs, $\\frac{2}{5}$ drops the factor $\\frac{1}{n}$ and sums a geometric series, and $e^{2/3} - 1$ uses $n!$ in place of $n$.',
    optionExplanations: [
      'This is the series $\\ln(1 + x) = \\sum\\frac{(-1)^{n+1}x^n}{n}$ at $x = \\frac{2}{3}$, which is within the interval of convergence. The sum is $\\ln\\left(1 + \\frac{2}{3}\\right) = \\ln\\frac{5}{3}$.',
      'This is $-\\ln\\left(1 - \\frac{2}{3}\\right) = \\sum\\frac{x^n}{n}$ at $x = \\frac{2}{3}$, a series without the alternating factor $(-1)^{n+1}$.',
      'This drops the $\\frac{1}{n}$ and sums the geometric series $\\sum(-1)^{n+1}\\left(\\frac{2}{3}\\right)^n = \\frac{2/3}{1 + 2/3}$.',
      'This treats the series as $\\sum\\frac{x^n}{n!}$, the series for $e^x - 1$. The denominators here are $n$, not $n!$, and the signs alternate.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-10-infinite-series',
    question: 'A function $f$ has derivatives of all orders, and $\\left|f^{(5)}(x)\\right| \\le 40$ for $2 \\le x \\le 2.5$. The fourth-degree Taylor polynomial for $f$ about $x = 2$ is used to approximate $f(2.5)$. What is the Lagrange error bound for this approximation?',
    options: ['$\\dfrac{5}{48}$', '$\\dfrac{1}{96}$', '$\\dfrac{5}{4}$', '$\\dfrac{1}{3840}$'],
    correctAnswer: 1,
    explanation:
      'The Lagrange bound for a fourth-degree polynomial is $\\frac{M}{5!}|x - 2|^5 = \\frac{40}{120}(0.5)^5 = \\frac{1}{3}\\cdot\\frac{1}{32} = \\frac{1}{96}$. The value $\\frac{5}{48}$ uses the fourth power and $4!$, $\\frac{5}{4}$ leaves out the factorial, and $\\frac{1}{3840}$ leaves out $M = 40$.',
    optionExplanations: [
      'This is $\\frac{40}{4!}(0.5)^4$, which uses the degree $4$ instead of the next power, $5$, in both the exponent and the factorial.',
      'For a fourth-degree polynomial the bound is $\\frac{M}{5!}|x - 2|^5 = \\frac{40}{120}\\cdot\\frac{1}{32} = \\frac{1}{96}$.',
      'This is $40(0.5)^5$, which leaves out the $5!$ in the denominator of the Lagrange bound.',
      'This is $\\frac{(0.5)^5}{5!}$, which leaves out the derivative bound $M = 40$.',
    ],
  },

  /* ============== PART B — GRAPHING CALCULATOR (Q30–Q42) ============== */

  {
    type: 'mcq',
    topic: 'unit-4-contextual-applications-differentiation',
    question: 'A spherical balloon is being inflated so that its volume increases at a constant rate of 25 cubic centimeters per second. At the instant the volume of the balloon is 300 cubic centimeters, how fast is its radius increasing?',
    options: ['$0.479$ cm per second', '$0.346$ cm per second', '$0.115$ cm per second', '$1.450$ cm per second'],
    correctAnswer: 2,
    explanation:
      'From $V = \\frac{4}{3}\\pi r^3 = 300$, $r = \\left(\\frac{225}{\\pi}\\right)^{1/3} \\approx 4.153$ cm. Then $\\frac{dV}{dt} = 4\\pi r^2\\frac{dr}{dt}$ gives $\\frac{dr}{dt} = \\frac{25}{4\\pi r^2} \\approx 0.115$ cm/s. The value $0.479$ divides by $4\\pi r$ instead of $4\\pi r^2$, $0.346$ differentiates $V$ as $\\frac{4}{3}\\pi r^2$, and $1.450$ leaves out the $4\\pi$.',
    optionExplanations: [
      'This divides by $4\\pi r \\approx 52.19$ instead of $4\\pi r^2 \\approx 216.7$. The derivative of $\\frac{4}{3}\\pi r^3$ has $r^2$.',
      'This uses $\\frac{dV}{dt} = \\frac{4}{3}\\pi r^2\\frac{dr}{dt}$, forgetting the factor $3$ from the power rule on $r^3$.',
      'Solving $\\frac{4}{3}\\pi r^3 = 300$ gives $r \\approx 4.153$. Then $\\frac{dr}{dt} = \\frac{25}{4\\pi r^2} \\approx \\frac{25}{216.7} \\approx 0.115$ cm per second.',
      'This is $\\frac{25}{r^2}$, which leaves out the factor $4\\pi$ in $\\frac{dV}{dt} = 4\\pi r^2\\frac{dr}{dt}$.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-5-analytical-applications-differentiation',
    question: 'What is the absolute maximum value of $f(x) = 4\\sin x - \\dfrac{x^2}{2}$ on the closed interval $0 \\le x \\le 4$?',
    options: ['$1.252$', '$3.799$', '$4.000$', '$3.015$'],
    correctAnswer: 3,
    explanation:
      'Solving $f\'(x) = 4\\cos x - x = 0$ with a calculator gives $x \\approx 1.252$, where $f \\approx 3.015$. The endpoints give $f(0) = 0$ and $f(4) \\approx -11.027$, so the absolute maximum is about $3.015$. The value $1.252$ is where the maximum occurs, $3.799$ is $4\\sin(1.252)$ without subtracting $\\frac{x^2}{2}$, and $4$ is the largest value of $4\\sin x$ alone.',
    optionExplanations: [
      'This is the $x$-value of the critical point, where $4\\cos x = x$. The question asks for the maximum value of $f$ there.',
      'This is $4\\sin(1.252)$, which leaves out the term $-\\frac{x^2}{2} \\approx -0.784$ at the critical point.',
      'This is the largest value of $4\\sin x$ alone. Where $\\sin x = 1$, at $x = \\frac{\\pi}{2}$, $f$ is only $4 - \\frac{\\pi^2}{8} \\approx 2.766$.',
      'The calculator solves $4\\cos x = x$ for $x \\approx 1.252$, where $f \\approx 3.015$. Since $f(0) = 0$ and $f(4) \\approx -11.027$, the absolute maximum is $3.015$.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-5-analytical-applications-differentiation',
    question: 'Let $f(x) = e^{x/2} + x^2$. What value of $c$ satisfies the conclusion of the Mean Value Theorem for $f$ on the closed interval $[0, 2]$?',
    options: ['$c \\approx 1.014$', '$c \\approx 1.072$', '$c = 1.000$', '$c \\approx 2.859$'],
    correctAnswer: 0,
    explanation:
      'The average rate of change is $\\frac{f(2) - f(0)}{2} = \\frac{(e + 4) - 1}{2} \\approx 2.859$. Solving $f\'(c) = \\frac{1}{2}e^{c/2} + 2c = 2.859$ with a calculator gives $c \\approx 1.014$. The value $1.072$ solves $f(c) = 2.859$, $1$ is the midpoint of the interval, and $2.859$ is the average rate of change itself.',
    optionExplanations: [
      'The average rate of change is $\\frac{f(2) - f(0)}{2} = \\frac{e + 3}{2} \\approx 2.859$. Solving $\\frac{1}{2}e^{c/2} + 2c = 2.859$ on the calculator gives $c \\approx 1.014$.',
      'This solves $e^{x/2} + x^2 = 2.859$, setting the function value equal to the average rate of change. The theorem uses the derivative instead.',
      'This is the midpoint of $[0, 2]$. The guaranteed point is where $\\frac{1}{2}e^{x/2} + 2x = 2.859$, which is not the midpoint for this nonlinear derivative.',
      'This is the average rate of change, $\\frac{f(2) - f(0)}{2}$, not the value of $c$. It also lies outside the interval $(0, 2)$.',
    ],
  },

  // Tank set: U6, U8
  {
    type: 'mcq',
    topic: 'unit-6-integration-accumulation',
    stimulus: TANK,
    question: 'How many gallons of water flow into the tank during the time interval $0 \\le t \\le 8$?',
    options: ['$36.480$', '$340.480$', '$304$', '$41.748$'],
    correctAnswer: 1,
    explanation:
      'The amount that flows in is $\\int_0^8 R(t)\\,dt \\approx 340.480$ gallons. The value $36.480$ is the net change $\\int_0^8 (R(t) - D(t))\\,dt$, $304$ is the amount pumped out, $\\int_0^8 D(t)\\,dt$, and $41.748$ is the inflow rate $R(8)$, not an amount.',
    optionExplanations: [
      'This is $\\int_0^8 \\left(R(t) - D(t)\\right)dt$, the net change in the water. The question asks only for the water that flows in.',
      'The water that flows in is $\\int_0^8 R(t)\\,dt$, which the calculator gives as about $340.480$ gallons.',
      'This is $\\int_0^8 D(t)\\,dt = 240 + 64$, the water pumped out, not the water that flows in.',
      'This is $R(8)$, the rate in gallons per hour at the end of the interval. The amount that flows in is the integral of the rate.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-8-applications-integration',
    stimulus: TANK,
    question: 'At what time $t$, for $0 \\le t \\le 8$, is the amount of water in the tank greatest?',
    options: ['$t \\approx 3.963$', '$t \\approx 3.730$', '$t \\approx 5.540$', '$t = 8$'],
    correctAnswer: 2,
    explanation:
      'The amount changes at the rate $R(t) - D(t)$, which is positive from $t = 0$ until it changes sign at $t \\approx 5.540$ and negative afterward, so the amount is greatest there (about 267.1 gallons, more than 200 at $t = 0$ and 236.5 at $t = 8$). The time $3.963$ is when $R$ is greatest, $3.730$ is when $R - D$ is greatest, and the amount is decreasing at $t = 8$.',
    optionExplanations: [
      'This is when the inflow rate $R(t)$ is greatest. The amount keeps rising after that, as long as $R(t) > D(t)$.',
      'This is when the net rate $R(t) - D(t)$ is greatest, where the amount increases fastest. The amount is still increasing then.',
      'The amount $A(t) = 200 + \\int_0^t (R - D)\\,ds$ has $A\' = R - D$, which changes from positive to negative only at $t \\approx 5.540$. $A(5.540) \\approx 267.1$ beats $A(0) = 200$ and $A(8) \\approx 236.5$.',
      'At $t = 8$, $R(8) - D(8) \\approx -4.252 < 0$, so the amount is decreasing at the end of the interval. Its maximum comes earlier.',
    ],
  },

  {
    type: 'mcq',
    topic: 'unit-6-integration-accumulation',
    question: 'For some constant $b > 1$, $\\displaystyle\\int_1^b \\ln\\left(1 + x^2\\right)dx = 3$. What is the value of $b$?',
    options: ['$b \\approx 2.938$', '$b \\approx 4.369$', '$b \\approx 2.819$', '$b \\approx 1.938$'],
    correctAnswer: 0,
    explanation:
      'Graph $y = \\int_1^x \\ln(1 + t^2)\\,dt - 3$ (or use the calculator\'s solver with numerical integration) to get $b \\approx 2.938$. The value $4.369$ solves $\\ln(1 + b^2) = 3$, which sets the integrand equal to $3$, $2.819$ starts the integral at $0$ instead of $1$, and $1.938$ is $b - 1$, the length of the interval.',
    optionExplanations: [
      'Solving $\\int_1^b \\ln(1 + x^2)\\,dx = 3$ with the calculator\'s numerical integration gives $b \\approx 2.938$.',
      'This solves $\\ln(1 + b^2) = 3$, which sets the integrand, not the integral, equal to $3$.',
      'This solves $\\int_0^b \\ln(1 + x^2)\\,dx = 3$, starting the accumulation at $0$ instead of $1$.',
      'This is $b - 1 \\approx 1.938$, the length of the interval of integration, not the upper limit $b$.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-7-differential-equations',
    question: 'Let $y = f(x)$ be the solution to the differential equation $\\dfrac{dy}{dx} = x + \\sin y$ with $f(0) = 1$. What is the approximation for $f(1.5)$ obtained by using Euler\'s method with three steps of equal size, starting at $x = 0$?',
    options: ['$2.165$', '$2.262$', '$3.646$', '$3.079$'],
    correctAnswer: 3,
    explanation:
      'With $\\Delta x = 0.5$: $y_1 = 1 + 0.5(0 + \\sin 1) \\approx 1.421$, $y_2 = 1.421 + 0.5(0.5 + \\sin 1.421) \\approx 2.165$, and $y_3 = 2.165 + 0.5(1 + \\sin 2.165) \\approx 3.079$. The value $2.165$ stops after two steps, $2.262$ takes one step of size $1.5$, and $3.646$ evaluates each slope at the right end of its step.',
    optionExplanations: [
      'This is $y_2 \\approx 2.165$, the approximation for $f(1)$. A third step, $2.165 + 0.5(1 + \\sin 2.165)$, is needed to reach $x = 1.5$.',
      'This takes a single step of size $1.5$ using the slope at $(0, 1)$: $1 + 1.5\\sin 1$. The question calls for three steps of size $0.5$.',
      'This evaluates each slope with the $x$-value at the end of its step instead of the start. Euler\'s method uses the slope at the current point.',
      'With $\\Delta x = 0.5$, the calculator gives $y_1 \\approx 1.421$, $y_2 \\approx 2.165$ and $y_3 = 2.165 + 0.5(1 + \\sin 2.165) \\approx 3.079$.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-8-applications-integration',
    stimulus: 'Let $R$ be the region enclosed by the graphs of $y = 4 - x^2$ and $y = e^x$.',
    question: 'The region $R$ is rotated about the line $y = -1$. Find the volume of the resulting solid.',
    options: ['$84.705$', '$39.818$', '$125.091$', '$51.374$'],
    correctAnswer: 2,
    explanation:
      'The graphs meet at $x = a \\approx -1.965$ and $x = b \\approx 1.058$, with $4 - x^2$ on top. Washers about $y = -1$ have radii $5 - x^2$ and $e^x + 1$, so $V = \\pi\\int_a^b\\left[(5 - x^2)^2 - (e^x + 1)^2\\right]dx \\approx 125.091$. The value $84.705$ revolves about the $x$-axis, $39.818$ leaves out $\\pi$, and $51.374$ squares the difference of the radii.',
    optionExplanations: [
      'This revolves $R$ about the $x$-axis, using radii $4 - x^2$ and $e^x$. About $y = -1$, each radius is $1$ unit longer.',
      'This is $\\int_a^b\\left[(5 - x^2)^2 - (e^x + 1)^2\\right]dx$ without the factor $\\pi$ that turns each washer\'s radii into an area.',
      'The calculator gives intersections $a \\approx -1.965$ and $b \\approx 1.058$. With radii $5 - x^2$ and $e^x + 1$, $V = \\pi\\int_a^b\\left[(5 - x^2)^2 - (e^x + 1)^2\\right]dx \\approx 125.091$.',
      'This is $\\pi\\int_a^b(4 - x^2 - e^x)^2\\,dx$, the square of the difference of the radii. A washer\'s area is $\\pi(R^2 - r^2)$, not $\\pi(R - r)^2$.',
    ],
  },

  // Plane-particle set: U9 ×3
  {
    type: 'mcq',
    topic: 'unit-9-parametric-polar-vector',
    stimulus: PLANE_PARTICLE,
    question: 'What is the speed of the particle at time $t = 2$?',
    options: ['$0.867$', '$1.075$', '$0.752$', '$0.832$'],
    correctAnswer: 0,
    explanation:
      'At $t = 2$ the velocity is $\\langle 2\\cos 2,\\ 1 + \\sin 4\\rangle \\approx \\langle -0.832, 0.243\\rangle$, so the speed is $\\sqrt{(-0.832)^2 + 0.243^2} \\approx 0.867$. The value $1.075$ adds the absolute values of the components, $0.752$ is the square of the speed, and $0.832$ is the horizontal component alone.',
    optionExplanations: [
      'The velocity at $t = 2$ is $\\langle 2\\cos 2, 1 + \\sin 4\\rangle \\approx \\langle -0.832, 0.243\\rangle$, so the speed is $\\sqrt{0.832^2 + 0.243^2} \\approx 0.867$.',
      'This adds $|x\'(2)| + |y\'(2)| \\approx 0.832 + 0.243$. Speed is the magnitude of the velocity vector, $\\sqrt{(x\')^2 + (y\')^2}$.',
      'This is $(x\')^2 + (y\')^2 \\approx 0.752$, the square of the speed, without the square root.',
      'This is $|x\'(2)| \\approx 0.832$, the horizontal component alone. The particle also moves vertically, with $y\'(2) \\approx 0.243$.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-9-parametric-polar-vector',
    stimulus: PLANE_PARTICLE,
    question: 'How far does the particle travel along its path from $t = 0$ to $t = 3$?',
    options: ['$4.086$', '$6.482$', '$2.950$', '$5.196$'],
    correctAnswer: 3,
    explanation:
      'The distance traveled is $\\int_0^3\\sqrt{(t\\cos t)^2 + \\left(1 + \\sin(t^2)\\right)^2}\\,dt \\approx 5.196$. The value $4.086$ is the straight-line distance between the starting and ending points, $6.482$ adds $\\int|x\'|\\,dt$ and $\\int|y\'|\\,dt$, and $2.950$ integrates the speed only up to $t = 2$.',
    optionExplanations: [
      'This is the magnitude of the displacement, $\\sqrt{(-1.567)^2 + 3.774^2}$. The path is not straight, so the distance traveled is longer.',
      'This adds the horizontal and vertical distances, $\\int_0^3|x\'|\\,dt + \\int_0^3|y\'|\\,dt$. Distance in the plane integrates the speed, $\\sqrt{(x\')^2 + (y\')^2}$.',
      'This integrates the speed over $0 \\le t \\le 2$. The interval in the question runs to $t = 3$.',
      'Distance traveled is the integral of speed: $\\int_0^3\\sqrt{(t\\cos t)^2 + \\left(1 + \\sin(t^2)\\right)^2}\\,dt$, which the calculator gives as about $5.196$.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-9-parametric-polar-vector',
    stimulus: PLANE_PARTICLE,
    question: 'What is the $x$-coordinate of the position of the particle at time $t = 3$?',
    options: ['$3.433$', '$-1.567$', '$-2.970$', '$-3.567$'],
    correctAnswer: 0,
    explanation:
      'The $x$-coordinate is $x(3) = 5 + \\int_0^3 t\\cos t\\,dt \\approx 5 - 1.567 = 3.433$. The value $-1.567$ is the change in $x$ without the starting value, $-2.970$ is the horizontal velocity $x\'(3) = 3\\cos 3$, and $-3.567$ adds the change in $x$ to the starting $y$-coordinate, $-2$.',
    optionExplanations: [
      'Position is the starting value plus the accumulated change: $x(3) = 5 + \\int_0^3 t\\cos t\\,dt \\approx 5 + (-1.567) = 3.433$.',
      'This is $\\int_0^3 t\\cos t\\,dt$, the change in $x$, without the starting $x$-coordinate $5$.',
      'This is $x\'(3) = 3\\cos 3$, the horizontal component of the velocity at $t = 3$, not the $x$-coordinate of the position.',
      'This adds the change in $x$, about $-1.567$, to $-2$, the starting $y$-coordinate. The $x$-coordinate starts at $5$.',
    ],
  },

  // U10 (2)
  {
    type: 'mcq',
    topic: 'unit-10-infinite-series',
    question: 'The second-degree Maclaurin polynomial for $f(x) = xe^x$ is $P_2(x) = x + x^2$. What is the greatest number $b$ such that $\\left|f(x) - P_2(x)\\right| < 0.01$ for all $x$ in the interval $0 \\le x < b$?',
    options: ['$0.271$', '$0.263$', '$0.215$', '$0.100$'],
    correctAnswer: 1,
    explanation:
      'For $x > 0$ the error $xe^x - x - x^2 = \\frac{x^3}{2} + \\frac{x^4}{6} + \\cdots$ is positive and increasing, so graph $y = xe^x - x - x^2$ and find where it equals $0.01$: $x \\approx 0.263$. The value $0.271$ solves $\\frac{x^3}{2} = 0.01$ using only the first omitted term, which underestimates the error because every omitted term is positive. The value $0.215$ solves $x^3 = 0.01$, dropping the coefficient $\\frac{1}{2}$, and $0.100$ uses the last term of $P_2$, $x^2$, as the error.',
    optionExplanations: [
      'This solves $\\frac{x^3}{2} = 0.01$, using only the first omitted term. For $x > 0$ every omitted term of $xe^x = x + x^2 + \\frac{x^3}{2} + \\frac{x^4}{6} + \\cdots$ is positive, so the actual error reaches $0.01$ sooner.',
      'Graphing $y = xe^x - x - x^2$, which is positive and increasing for $x > 0$, shows that it equals $0.01$ at $x \\approx 0.263$.',
      'This solves $x^3 = 0.01$, dropping the coefficient $\\frac{1}{2!}$ of the first omitted term $\\frac{x^3}{2}$, and it still ignores the later terms.',
      'This solves $x^2 = 0.01$, treating the last term of $P_2$ as the error. The error comes from the terms after $P_2$, starting with $\\frac{x^3}{2}$.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-10-infinite-series',
    question: 'The fourth-degree Maclaurin polynomial for $f(x) = e^{2x}$ is used to approximate $f(0.3)$. Using the maximum of $\\left|f^{(5)}(x)\\right|$ on the interval $0 \\le x \\le 0.3$, what is the Lagrange error bound for this approximation?',
    options: ['$0.00065$', '$0.00984$', '$0.00004$', '$0.00118$'],
    correctAnswer: 3,
    explanation:
      'Here $f^{(5)}(x) = 32e^{2x}$, whose maximum on $[0, 0.3]$ is $M = 32e^{0.6} \\approx 58.31$. The bound is $\\frac{M}{5!}(0.3)^5 \\approx \\frac{58.31(0.00243)}{120} \\approx 0.00118$. The value $0.00065$ takes $M$ at $x = 0$, $0.00984$ uses the fourth derivative and $4!$, and $0.00004$ leaves out the factor $2^5$ in $f^{(5)}$.',
    optionExplanations: [
      'This uses $M = 32$, the value of $f^{(5)}$ at $x = 0$. Since $32e^{2x}$ is increasing, its maximum on $[0, 0.3]$ is at $x = 0.3$.',
      'This uses $f^{(4)}(0.3) = 16e^{0.6}$, $(0.3)^4$ and $4!$. A degree-4 polynomial\'s Lagrange bound uses the fifth derivative and $5!$.',
      'This uses $M = e^{0.6}$, forgetting that each derivative of $e^{2x}$ multiplies by $2$, so $f^{(5)}(x) = 32e^{2x}$.',
      '$f^{(5)}(x) = 32e^{2x}$, so $M = 32e^{0.6} \\approx 58.31$. The bound is $\\frac{M}{5!}(0.3)^5 \\approx \\frac{58.31\\cdot0.00243}{120} \\approx 0.00118$.',
    ],
  },
]
