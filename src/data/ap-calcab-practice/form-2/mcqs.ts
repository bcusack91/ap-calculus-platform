import type { MCQItem } from '@/components/FullLengthPracticeExam'

/**
 * AP Calculus AB practice exam, form 2: 42 MCQs (May 2027 Section I).
 *   U1 5 · U2 5 · U3 4 · U4 5 · U5 7 · U6 8 · U7 3 · U8 5
 * Part A (Q1–Q29): no calculator, 62 minutes. Part B (Q30–Q42): graphing
 * calculator, 38 minutes; every Part B item is calculator-active. The runner
 * splits the parts by position, so Part B items must stay in positions 30–42.
 * Sets that share a stimulus are consecutive: Q8–Q10 (table of f and g),
 * Q15–Q16 (graph of f'), Q21–Q22 (graph of f), Q39–Q40 (region R).
 */

const TABLE_FG =
  'The functions $f$ and $g$ are differentiable for all real numbers. Selected values of $f$, $f\'$, $g$ and $g\'$ are given in the table.\n\n' +
  '| $x$ | 1 | 2 | 3 | 4 |\n|---|---|---|---|---|\n' +
  '| $f(x)$ | 3 | 4 | 1 | 2 |\n' +
  '| $f\'(x)$ | 2 | $-1$ | 5 | 3 |\n' +
  '| $g(x)$ | 2 | 1 | 4 | $-3$ |\n' +
  '| $g\'(x)$ | $-3$ | 3 | 1 | 4 |'

const GRAPH_FPRIME =
  'The function $f$ is differentiable on the interval $-3 < x < 4$. The graph of its derivative $f\'$ consists of four line segments joining the points $(-3, 2)$, $(-1, -2)$, $(1, 0)$, $(2, 2)$ and $(4, -2)$, in that order. So $f\'$ crosses the $x$-axis at $x = -2$, $x = 1$ and $x = 3$.'

const GRAPH_F =
  'The graph of the continuous function $f$ on the closed interval $-1 \\le x \\le 5$ consists of three line segments: from $(-1, 0)$ up to $(1, 2)$, then horizontally from $(1, 2)$ to $(3, 2)$, then down from $(3, 2)$ to $(5, -2)$. This last segment crosses the $x$-axis at $x = 4$.\n\nLet $g(x) = \\displaystyle\\int_1^x f(t)\\,dt$ for $-1 \\le x \\le 5$.'

const REGION_R =
  'Let $R$ be the region in the first quadrant enclosed by the graphs of $y = 3\\sin x$ and $y = x$. The two graphs intersect at the origin and at a point where $x = a$, with $a > 0$.'

export const MCQS: MCQItem[] = [
  /* ============== PART A — NO CALCULATOR (Q1–Q29) ============== */

  // U1 (4)
  {
    type: 'mcq',
    topic: 'unit-1-limits-continuity',
    question: 'What is $\\displaystyle\\lim_{x \\to 4} \\frac{x^2 - 2x - 8}{x^2 - 16}$?',
    options: ['$\\dfrac{3}{4}$', '$0$', 'The limit does not exist.', '$1$'],
    correctAnswer: 0,
    explanation:
      'Factor: $\\frac{(x-4)(x+2)}{(x-4)(x+4)} = \\frac{x+2}{x+4}$ for $x \\ne 4$, so the limit is $\\frac{6}{8} = \\frac{3}{4}$. The value $1$ applies the leading-coefficient rule, which is only for limits as $x \\to \\infty$. Reading $\\frac{0}{0}$ as $0$, or as a sign that the limit does not exist, skips the cancellation; $\\frac{0}{0}$ is indeterminate.',
    optionExplanations: [
      'Factor: $\\frac{(x - 4)(x + 2)}{(x - 4)(x + 4)} = \\frac{x + 2}{x + 4}$ for $x \\ne 4$. Substituting $x = 4$ then gives $\\frac{6}{8} = \\frac{3}{4}$.',
      'Direct substitution gives $\\frac{0}{0}$, which is indeterminate, not $0$. Cancelling the common factor $x - 4$ shows that the limit is $\\frac{3}{4}$.',
      'The $\\frac{0}{0}$ form does not mean the limit fails to exist. The common factor $x - 4$ cancels, leaving $\\frac{x + 2}{x + 4}$, which is continuous at $x = 4$.',
      'This applies the ratio of leading coefficients, a rule for limits as $x \\to \\infty$. Here $x \\to 4$, so factor and cancel instead.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-1-limits-continuity',
    question: 'What is $\\displaystyle\\lim_{x \\to 0} \\frac{1 - \\cos(2x)}{x\\sin x}$?',
    options: ['$0$', '$\\dfrac{1}{2}$', '$4$', '$2$'],
    correctAnswer: 3,
    explanation:
      'Since $1 - \\cos(2x) = 2\\sin^2 x$, the expression is $\\frac{2\\sin^2 x}{x\\sin x} = 2\\cdot\\frac{\\sin x}{x} \\to 2$. The value $4$ uses $1-\\cos(2x) \\approx (2x)^2$ without the factor $\\frac{1}{2}$. The value $\\frac{1}{2}$ treats the numerator as $1-\\cos x$. The value $0$ comes from $\\lim \\frac{1-\\cos u}{u} = 0$, but the denominator here behaves like $x^2$, not $x$.',
    optionExplanations: [
      'This uses $\\lim\\frac{1 - \\cos u}{u} = 0$, but the denominator $x\\sin x$ behaves like $x^2$, not $x$, so the ratio does not go to $0$.',
      'This treats the numerator as $1 - \\cos x$, ignoring the $2x$ inside the cosine. With $1 - \\cos(2x) = 2\\sin^2 x$, the ratio is four times larger.',
      'This uses $1 - \\cos(2x) \\approx (2x)^2$ and forgets the factor $\\frac{1}{2}$. The identity $1 - \\cos(2x) = 2\\sin^2 x$ gives the exact numerator.',
      'Since $1 - \\cos(2x) = 2\\sin^2 x$, the expression equals $\\frac{2\\sin^2 x}{x\\sin x} = 2\\cdot\\frac{\\sin x}{x}$, which approaches $2$.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-1-limits-continuity',
    question: 'Let $f(x) = \\dfrac{x + 1}{x^2 - 2x - 3}$. Which of the following describes the discontinuities of $f$?',
    options: [
      'Vertical asymptotes at both $x = -1$ and $x = 3$',
      'A removable discontinuity at $x = -1$ and a vertical asymptote at $x = 3$',
      'A vertical asymptote at $x = 3$ and no other discontinuity',
      'A jump discontinuity at $x = -1$ and a vertical asymptote at $x = 3$',
    ],
    correctAnswer: 1,
    explanation:
      'The denominator factors as $(x-3)(x+1)$, so $f(x) = \\frac{1}{x-3}$ for $x \\ne -1$. At $x=-1$ the factor cancels and the limit is $-\\frac{1}{4}$, a removable discontinuity; at $x = 3$ the function is unbounded, a vertical asymptote. Calling both zeros of the denominator asymptotes ignores the cancellation. A jump would need different one-sided limits, but both sides approach $-\\frac{1}{4}$. And $f$ is undefined at $x=-1$, so that discontinuity cannot be ignored.',
    optionExplanations: [
      'At $x = -1$ the factor $x + 1$ cancels, so $f(x) = \\frac{1}{x - 3}$ nearby and the limit is $-\\frac{1}{4}$. That discontinuity is removable, not an asymptote.',
      'The denominator is $(x - 3)(x + 1)$, so $f(x) = \\frac{1}{x - 3}$ for $x \\ne -1$. The limit at $-1$ exists (removable), and $f$ is unbounded near $3$ (vertical asymptote).',
      '$f$ is undefined at $x = -1$, so it is discontinuous there even though the factor cancels. That point is a removable discontinuity.',
      'A jump needs unequal one-sided limits, but both sides of $x = -1$ approach $-\\frac{1}{4}$. The discontinuity at $-1$ is removable.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-1-limits-continuity',
    question: 'What is $\\displaystyle\\lim_{x \\to 1} \\ln\\left(\\frac{x^2 - 1}{x - 1}\\right)$?',
    options: ['$2$', '$\\ln 2$', 'The limit does not exist.', '$0$'],
    correctAnswer: 1,
    explanation:
      'For $x \\ne 1$, $\\frac{x^2 - 1}{x - 1} = x + 1$, which approaches $2$; since $\\ln$ is continuous at $2$, the limit is $\\ln 2$. The value $2$ is the limit of the inside alone, without the logarithm, and $0$ comes from substituting $x = 1$ into $\\ln x$ instead of into $x + 1$. The expression is undefined at $x = 1$, but the limit depends only on values near $1$, so it exists.',
    optionExplanations: [
      'This is the limit of the inside, $\\frac{x^2 - 1}{x - 1} = x + 1 \\to 2$, without applying the logarithm to it.',
      'For $x \\ne 1$, $\\frac{x^2 - 1}{x - 1} = x + 1$, which approaches $2$. Since $\\ln$ is continuous at $2$, the limit is $\\ln 2$.',
      'The expression is undefined at $x = 1$, but a limit depends only on values near $1$. There the inside approaches $2$, so the limit exists.',
      'This substitutes $x = 1$ into $\\ln x$, giving $\\ln 1 = 0$, instead of finding the limit of the inside, which is $x + 1 \\to 2$.',
    ],
  },

  // U2 (4)
  {
    type: 'mcq',
    topic: 'unit-2-differentiation-definition',
    question: 'Which of the following is an equation of the line tangent to the graph of $y = 3x^2 - \\ln x$ at $x = 1$?',
    options: ['$y = 6x - 3$', '$y = 5x - 3$', '$y = 7x - 4$', '$y = 5x - 2$'],
    correctAnswer: 3,
    explanation:
      'At $x=1$, $y = 3 - \\ln 1 = 3$ and $y\' = 6x - \\frac{1}{x} = 5$, so $y - 3 = 5(x - 1)$, or $y = 5x - 2$. The slope $6$ drops the derivative of $\\ln x$, and $7$ adds $\\frac{1}{x}$ instead of subtracting it. The line $y = 5x - 3$ has the right slope but passes through $(1, 2)$, which comes from taking $\\ln 1 = 1$.',
    optionExplanations: [
      'Slope $6$ differentiates $3x^2$ but drops the derivative of $-\\ln x$. The slope is $6(1) - \\frac{1}{1} = 5$.',
      'The slope $5$ is right, but this line passes through $(1, 2)$, which comes from taking $\\ln 1 = 1$. Since $\\ln 1 = 0$, the point is $(1, 3)$.',
      'This adds $\\frac{1}{x}$ instead of subtracting it, giving slope $7$. The derivative of $-\\ln x$ is $-\\frac{1}{x}$.',
      'At $x = 1$, $y = 3 - \\ln 1 = 3$ and $y\' = 6x - \\frac{1}{x} = 5$. So $y - 3 = 5(x - 1)$, which is $y = 5x - 2$.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-2-differentiation-definition',
    question: 'If $f(x) = x\\tan x$, what is $f\'\\left(\\dfrac{\\pi}{4}\\right)$?',
    options: ['$1 + \\dfrac{\\pi}{2}$', '$\\dfrac{4+\\pi}{4}$', '$2$', '$\\dfrac{\\pi}{2}$'],
    correctAnswer: 0,
    explanation:
      'By the product rule, $f\'(x) = \\tan x + x\\sec^2 x$, and at $\\frac{\\pi}{4}$ this is $1 + \\frac{\\pi}{4}\\cdot 2 = 1 + \\frac{\\pi}{2}$. The value $\\frac{4+\\pi}{4} = 1 + \\frac{\\pi}{4}$ uses $\\sec^2\\frac{\\pi}{4} = 1$ instead of $2$. The value $\\frac{\\pi}{2}$ keeps only the $x\\sec^2 x$ term, and $2$ multiplies the two derivatives, $1 \\cdot \\sec^2\\frac{\\pi}{4}$.',
    optionExplanations: [
      'By the product rule, $f\'(x) = \\tan x + x\\sec^2 x$. At $\\frac{\\pi}{4}$, $\\tan x = 1$ and $\\sec^2 x = 2$, so $f\' = 1 + \\frac{\\pi}{4}\\cdot2 = 1 + \\frac{\\pi}{2}$.',
      'This equals $1 + \\frac{\\pi}{4}$, which uses $\\sec^2\\frac{\\pi}{4} = 1$. Since $\\sec\\frac{\\pi}{4} = \\sqrt{2}$, $\\sec^2\\frac{\\pi}{4} = 2$.',
      'This multiplies the two derivatives, $1\\cdot\\sec^2\\frac{\\pi}{4} = 2$, which is not the product rule. The rule adds $\\tan x$ and $x\\sec^2 x$.',
      'This keeps only the $x\\sec^2 x$ term and drops $\\tan x$, the term that comes from differentiating the factor $x$.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-2-differentiation-definition',
    stimulus:
      'The line tangent to the graph of a differentiable function $f$ at $x = 3$ passes through the points $(1, 2)$ and $(5, 10)$. Also, $f(3) = 6$.',
    question: 'Let $g(x) = x\\,f(x)$. What is the value of $g\'(3)$?',
    options: ['$8$', '$6$', '$12$', '$2$'],
    correctAnswer: 2,
    explanation:
      'The tangent line has slope $\\frac{10-2}{5-1} = 2$, so $f\'(3) = 2$. Then $g\'(3) = f(3) + 3f\'(3) = 6 + 6 = 12$. The value $6$ keeps only $3f\'(3)$, $8$ adds $f(3)$ and $f\'(3)$ without the factor $3$, and $2$ is $f\'(3)$ alone, as if $g\' = f\'$.',
    optionExplanations: [
      'This adds $f(3) + f\'(3) = 6 + 2$ and leaves out the factor $3$ on $f\'(3)$. The product rule gives $f(3) + 3f\'(3)$.',
      'This keeps only $3f\'(3) = 6$ and drops $f(3)$, the term that comes from differentiating the factor $x$.',
      'The tangent line\'s slope is $\\frac{10 - 2}{5 - 1} = 2$, so $f\'(3) = 2$. By the product rule, $g\'(3) = f(3) + 3f\'(3) = 6 + 6 = 12$.',
      'This is $f\'(3)$ alone, as if $g\' = f\'$. The factor $x$ in $g(x) = x\\,f(x)$ requires the product rule.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-2-differentiation-definition',
    stimulus: TABLE_FG,
    question: 'Let $k(x) = \\dfrac{f(x)}{g(x)}$. What is the value of $k\'(2)$?',
    options: ['$-1$', '$12$', '$-13$', '$11$'],
    correctAnswer: 2,
    explanation:
      'The quotient rule gives $k\'(2) = \\frac{f\'(2)g(2) - f(2)g\'(2)}{[g(2)]^2} = \\frac{(-1)(1) - (4)(3)}{1^2} = -13$. The value $12$ is $f(2)g\'(2)$ alone, with its sign dropped, $-1$ keeps only the $f\'(2)g(2)$ term, and $11$ adds $(-1)(1)$ to $12$ instead of subtracting $12$.',
    optionExplanations: [
      'This keeps only the $f\'(2)g(2) = (-1)(1)$ term of the quotient rule and drops $-f(2)g\'(2) = -12$.',
      'This is $f(2)g\'(2) = 4\\cdot3$ alone, with its sign dropped. The quotient rule needs $f\'(2)g(2) - f(2)g\'(2)$, divided by $[g(2)]^2$.',
      'By the quotient rule with values from the table, $k\'(2) = \\frac{f\'(2)g(2) - f(2)g\'(2)}{[g(2)]^2} = \\frac{(-1)(1) - (4)(3)}{1^2} = -13$.',
      'This adds $f(2)g\'(2)$ instead of subtracting it, $(-1)(1) + 12$. The quotient rule subtracts the term containing $g\'$.',
    ],
  },

  // U3 (3)
  {
    type: 'mcq',
    topic: 'unit-3-composite-implicit-inverse',
    stimulus: TABLE_FG,
    question: 'Let $h(x) = f\\left(x^2\\right)$. What is the value of $h\'(2)$?',
    options: ['$12$', '$6$', '$3$', '$8$'],
    correctAnswer: 0,
    explanation:
      'By the chain rule, $h\'(x) = f\'(x^2)\\cdot 2x$, so $h\'(2) = f\'(4)\\cdot 4 = 3 \\cdot 4 = 12$. The value $3$ is $f\'(4)$ alone, with no inner derivative. The value $8$ uses $f(4)$ in place of $f\'(4)$, and $6$ uses $2$ instead of $2x$ for the derivative of $x^2$.',
    optionExplanations: [
      'By the chain rule, $h\'(x) = f\'(x^2)\\cdot2x$, so $h\'(2) = f\'(4)\\cdot4 = 3\\cdot4 = 12$. The inner function $x^2$ contributes the factor $2x$.',
      'This uses $2$ instead of $2x$ as the derivative of $x^2$, giving $f\'(4)\\cdot2$. At $x = 2$ the inner derivative is $4$.',
      'This is $f\'(4) = 3$ alone, without the chain-rule factor $2x = 4$ from the inner function $x^2$.',
      'This uses $f(4) = 2$ in place of $f\'(4) = 3$, so it multiplies a function value by the inner derivative $4$.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-3-composite-implicit-inverse',
    stimulus: TABLE_FG,
    question: 'Let $m(x) = g(f(x))$. What is the value of $m\'(1)$?',
    options: ['$-1$', '$10$', '$-6$', '$2$'],
    correctAnswer: 3,
    explanation:
      'The chain rule gives $m\'(1) = g\'(f(1))\\cdot f\'(1) = g\'(3)\\cdot 2 = 1 \\cdot 2 = 2$. The value $-6$ evaluates $g\'$ at $1$ instead of at $f(1) = 3$. The value $-1$ is $f\'(g(1)) = f\'(2)$, which composes in the wrong order and drops the inner derivative, and $10$ uses $f\'$ in place of $g\'$, $f\'(3)\\cdot f\'(1)$.',
    optionExplanations: [
      'This is $f\'(g(1)) = f\'(2) = -1$, which composes in the wrong order and leaves out the inner derivative.',
      'This uses $f\'$ in place of $g\'$ for the outer function: $f\'(3)\\cdot f\'(1) = 5\\cdot2$. The outer derivative is $g\'(3) = 1$.',
      'This evaluates $g\'$ at $1$ instead of at $f(1) = 3$: $g\'(1)\\cdot f\'(1) = (-3)(2)$. The outer derivative is taken at the inner function\'s value.',
      'The chain rule gives $m\'(1) = g\'(f(1))\\cdot f\'(1) = g\'(3)\\cdot2 = 1\\cdot2 = 2$, using $f(1) = 3$ from the table.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-3-composite-implicit-inverse',
    question: 'The point $(1, 3)$ lies on the curve $xy^2 + x^3 = 10$. What is the value of $\\dfrac{dy}{dx}$ at this point?',
    options: ['$\\dfrac{1}{2}$', '$-2$', '$-\\dfrac{3}{2}$', '$-\\dfrac{1}{2}$'],
    correctAnswer: 1,
    explanation:
      'Differentiating implicitly, $y^2 + 2xy\\,\\frac{dy}{dx} + 3x^2 = 0$. At $(1,3)$: $9 + 6\\frac{dy}{dx} + 3 = 0$, so $\\frac{dy}{dx} = -2$. The value $-\\frac{1}{2}$ drops the $y^2$ term from the product rule on $xy^2$, and $-\\frac{3}{2}$ drops the $3x^2$ term instead. The value $\\frac{1}{2}$ repeats the $-\\frac{1}{2}$ error with the sign also flipped.',
    optionExplanations: [
      'This repeats the $-\\frac{1}{2}$ slip, dropping the $y^2$ term from the product rule on $xy^2$, and then also flips the sign.',
      'Differentiating implicitly, $y^2 + 2xy\\frac{dy}{dx} + 3x^2 = 0$. At $(1, 3)$, $9 + 6\\frac{dy}{dx} + 3 = 0$, so $\\frac{dy}{dx} = -2$.',
      'This drops the $3x^2$ term, leaving $9 + 6\\frac{dy}{dx} = 0$. The derivative of $x^3$ must be included.',
      'This drops the $y^2$ term from the product rule on $xy^2$, leaving $6\\frac{dy}{dx} + 3 = 0$. Both factors of $xy^2$ must be differentiated.',
    ],
  },

  // U4 (3)
  {
    type: 'mcq',
    topic: 'unit-4-contextual-applications-differentiation',
    question: 'The cost, in dollars, of producing $x$ gallons of paint is $C(x)$. Which of the following is the best interpretation of $C\'(100) = 12$?',
    options: [
      'When 100 gallons have been produced, the total cost of production is 12 dollars.',
      'When 100 gallons have been produced, the cost is increasing at 12 dollars per gallon.',
      'The average cost of producing the first 100 gallons is 12 dollars per gallon.',
      'The total cost of producing the first 100 gallons of paint is 12 dollars.',
    ],
    correctAnswer: 1,
    explanation:
      '$C\'(100)$ is the instantaneous rate of change of cost with respect to gallons at $x = 100$, in dollars per gallon. A total cost of the first 100 gallons, or the cost at 100 gallons, would be $C(100)$, not $C\'(100)$. An average cost per gallon would be $\\frac{C(100)}{100}$ or an average rate of change, not the derivative at one point.',
    optionExplanations: [
      'A total cost at 100 gallons is $C(100)$, the function value. $C\'(100) = 12$ is a rate in dollars per gallon, not a cost in dollars.',
      '$C\'(100)$ is the instantaneous rate of change of cost with respect to gallons at $x = 100$, so the cost is increasing at $12$ dollars per gallon there.',
      'An average cost per gallon would be $\\frac{C(100)}{100}$, or an average rate of change over an interval. The derivative is a rate at a single point.',
      'The total cost of the first 100 gallons is $C(100)$, not $C\'(100)$, and it would be measured in dollars rather than dollars per gallon.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-4-contextual-applications-differentiation',
    question: 'The length of a rectangle is increasing at 3 centimeters per second, and its width is decreasing at 2 centimeters per second. At the instant the length is 8 centimeters and the width is 5 centimeters, how is the area of the rectangle changing?',
    options: [
      'Decreasing at 6 square centimeters per second',
      'Increasing at 31 square centimeters per second',
      'Increasing at 14 square centimeters per second',
      'Decreasing at 1 square centimeter per second',
    ],
    correctAnswer: 3,
    explanation:
      'With $A = LW$, $\\frac{dA}{dt} = L\\frac{dW}{dt} + W\\frac{dL}{dt} = 8(-2) + 5(3) = -1$, so the area is decreasing at $1$ cm² per second. The value $31$ treats both rates as positive, and $-6$ multiplies the two rates, $3(-2)$, which is not the product rule. Increasing at $14$ pairs each rate with the wrong side, $8(3) + 5(-2)$.',
    optionExplanations: [
      'This multiplies the two rates, $3(-2)$, which is not the product rule. The rate of change of the area is $L\\frac{dW}{dt} + W\\frac{dL}{dt}$.',
      'This treats both rates as positive, $8(2) + 5(3)$. The width is decreasing, so $\\frac{dW}{dt} = -2$.',
      'This pairs each rate with the wrong side, $8(3) + 5(-2)$. The length\'s rate goes with the width: $W\\frac{dL}{dt} = 5(3)$.',
      'With $A = LW$, $\\frac{dA}{dt} = L\\frac{dW}{dt} + W\\frac{dL}{dt} = 8(-2) + 5(3) = -1$, so the area decreases at $1$ cm² per second.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-4-contextual-applications-differentiation',
    question: 'What is $\\displaystyle\\lim_{x \\to 0} \\frac{e^{3x} - e^{x}}{x}$?',
    options: ['$2$', '$4$', '$0$', '$3$'],
    correctAnswer: 0,
    explanation:
      'The form is $\\frac{0}{0}$, so L\'Hospital\'s Rule gives $\\lim_{x\\to0}\\frac{3e^{3x} - e^x}{1} = 3 - 1 = 2$. The value $4$ adds the derivatives instead of subtracting, and $3$ differentiates only $e^{3x}$. The value $0$ treats the $\\frac{0}{0}$ form as $0$.',
    optionExplanations: [
      'The form is $\\frac{0}{0}$, so L\'Hospital\'s Rule gives $\\lim_{x\\to0}\\frac{3e^{3x} - e^x}{1} = 3 - 1 = 2$. Each exponential is differentiated with its chain-rule factor.',
      'This adds the derivatives, $3 + 1$, instead of subtracting. The numerator is $e^{3x} - e^x$, so its derivative is $3e^{3x} - e^x$.',
      'The $\\frac{0}{0}$ form is indeterminate, not $0$. L\'Hospital\'s Rule shows that the ratio approaches a nonzero value.',
      'This differentiates only $e^{3x}$ and drops the derivative of $-e^x$, which contributes $-1$ at $x = 0$.',
    ],
  },

  // U5 (6)
  {
    type: 'mcq',
    topic: 'unit-5-analytical-applications-differentiation',
    stimulus: GRAPH_FPRIME,
    question: 'At which values of $x$ in the interval $-3 < x < 4$ does $f$ have a relative minimum?',
    options: ['$x = -1$ only', '$x = -1$ and $x = 1$', '$x = 1$ only', '$x = -2$ and $x = 3$'],
    correctAnswer: 2,
    explanation:
      '$f$ has a relative minimum where $f\'$ changes from negative to positive, which happens only at $x = 1$. At $x = -2$ and $x = 3$, $f\'$ changes from positive to negative, so those are relative maxima. At $x = -1$ the graph of $f\'$ has its lowest point, but $f\'(-1) = -2 \\ne 0$, so $f$ is still decreasing there; that point marks a change in concavity, not an extremum.',
    optionExplanations: [
      'At $x = -1$ the graph of $f\'$ has its lowest point, but $f\'(-1) = -2 \\ne 0$, so $f$ is still decreasing there. That point marks a change in concavity.',
      '$x = 1$ is a minimum, but $x = -1$ is not: $f\'(-1) = -2$, so $f$ is decreasing through $x = -1$. A relative minimum needs $f\'$ to change sign.',
      '$f$ has a relative minimum where $f\'$ changes from negative to positive. On this graph that happens only at $x = 1$.',
      'At $x = -2$ and $x = 3$, $f\'$ changes from positive to negative, so these are relative maxima of $f$, not minima.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-5-analytical-applications-differentiation',
    stimulus: GRAPH_FPRIME,
    question: 'On which of the following intervals is the graph of $f$ concave down?',
    options: [
      '$-3 < x < -2$ and $1 < x < 3$',
      '$-2 < x < 1$ and $3 < x < 4$',
      '$-3 < x < -1$ and $2 < x < 4$',
      '$-1 < x < 2$ only',
    ],
    correctAnswer: 2,
    explanation:
      'The graph of $f$ is concave down where $f\'$ is decreasing, which is on $-3 < x < -1$ and $2 < x < 4$. The intervals $-2 < x < 1$ and $3 < x < 4$ are where $f\' < 0$, so $f$ is decreasing there. On $-1 < x < 2$, $f\'$ is increasing, so $f$ is concave up. The intervals $-3<x<-2$ and $1<x<3$ are where $f\' > 0$, which describes where $f$ increases.',
    optionExplanations: [
      'These are the intervals where $f\' > 0$, so they describe where $f$ is increasing. Concavity depends on whether $f\'$ is increasing or decreasing.',
      'These are the intervals where $f\' < 0$, so $f$ is decreasing there. Concave down requires $f\'$ to be decreasing, which is a different condition.',
      'The graph of $f$ is concave down where $f\'$ is decreasing. The segments of the graph of $f\'$ slope downward on $-3 < x < -1$ and $2 < x < 4$.',
      'On $-1 < x < 2$, $f\'$ is increasing, so $f$ is concave up there. This picks the interval with the opposite concavity.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-5-analytical-applications-differentiation',
    question: 'What is the absolute maximum value of $f(x) = x^4 - 2x^2$ on the closed interval $-1 \\le x \\le 2$?',
    options: ['$8$', '$24$', '$16$', '$-1$'],
    correctAnswer: 0,
    explanation:
      '$f\'(x) = 4x^3 - 4x = 4x(x-1)(x+1)$, so the critical points are $x = 0$ and $x = \\pm 1$. The candidates are $f(-1) = -1$, $f(0) = 0$, $f(1) = -1$ and $f(2) = 8$, so the maximum is $8$. The value $-1$ is the minimum, $16$ drops the $-2x^2$ term at $x = 2$, and $24$ is $f\'(2)$, a slope rather than a function value.',
    optionExplanations: [
      'The critical points are $x = 0$ and $x = \\pm1$. The candidates are $f(-1) = -1$, $f(0) = 0$, $f(1) = -1$ and $f(2) = 16 - 8 = 8$, so the maximum is $8$.',
      'This is $f\'(2) = 32 - 8 = 24$, a slope rather than a value of $f$. The maximum value comes from evaluating $f$ at critical points and endpoints.',
      'This is $2^4 = 16$, which drops the $-2x^2$ term when evaluating $f(2)$. Correctly, $f(2) = 16 - 8 = 8$.',
      'This is $f(\\pm1) = -1$, the absolute minimum value on the interval, not the maximum. The right endpoint gives the larger value $f(2) = 8$.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-5-analytical-applications-differentiation',
    question: 'Let $f(x) = \\sqrt{x}$. What value of $c$ satisfies the conclusion of the Mean Value Theorem for $f$ on the interval $[1, 9]$?',
    options: ['$c = 2$', '$c = \\dfrac{1}{4}$', '$c = 5$', '$c = 4$'],
    correctAnswer: 3,
    explanation:
      'The average rate of change is $\\frac{\\sqrt9 - \\sqrt1}{9 - 1} = \\frac{1}{4}$, and $f\'(c) = \\frac{1}{2\\sqrt c} = \\frac{1}{4}$ gives $\\sqrt c = 2$, so $c = 4$. The value $5$ is the midpoint of the interval, $\\frac{1}{4}$ is the slope itself rather than the input, and $2$ is $\\sqrt c$, one step short of $c$.',
    optionExplanations: [
      'This is $\\sqrt{c}$, one step short of $c$. From $\\frac{1}{2\\sqrt{c}} = \\frac{1}{4}$, $\\sqrt{c} = 2$, so $c = 4$.',
      'This is the average rate of change itself, $\\frac{3 - 1}{8} = \\frac{1}{4}$, not the input $c$ where $f\'\\left(c\\right)$ equals it. Also, $\\frac{1}{4}$ is not in $[1, 9]$.',
      'This is the midpoint of $[1, 9]$. The Mean Value Theorem\'s $c$ comes from solving $f\'\\left(c\\right) = \\frac{1}{4}$, not from averaging the endpoints.',
      'The average rate of change is $\\frac{\\sqrt{9} - \\sqrt{1}}{9 - 1} = \\frac{1}{4}$, and $f\'\\left(c\\right) = \\frac{1}{2\\sqrt{c}} = \\frac{1}{4}$ gives $\\sqrt{c} = 2$, so $c = 4$.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-5-analytical-applications-differentiation',
    question: 'Positive numbers $x$ and $y$ satisfy $x + 2y = 12$. What is the greatest possible value of the product $xy^2$?',
    options: ['$54$', '$64$', '$128$', '$32$'],
    correctAnswer: 1,
    explanation:
      'Substitute $x = 12 - 2y$: $P(y) = (12 - 2y)y^2 = 12y^2 - 2y^3$ for $0 < y < 6$. Then $P\'(y) = 24y - 6y^2 = 6y(4 - y)$, which changes from positive to negative at $y = 4$, so the maximum is $P(4) = 4 \\cdot 16 = 64$. The value $128$ maximizes $x^2y$ instead ($x = 8$, $y = 2$). The values $54$ and $32$ come from $y = 3$ and $y = 2$, which are not critical points of $P$.',
    optionExplanations: [
      'This is $P(3) = 6\\cdot9$, with $y = 3$. But $P\'(3) = 6(3)(1) > 0$, so the product is still increasing there.',
      'With $x = 12 - 2y$, $P(y) = 12y^2 - 2y^3$ and $P\'(y) = 6y(4 - y)$, which changes from positive to negative at $y = 4$. So the maximum is $P(4) = 4\\cdot16 = 64$.',
      'This maximizes $x^2y$ instead of $xy^2$, at $x = 8$ and $y = 2$. In the product $xy^2$, the square belongs on $y$.',
      'This is $P(2) = 8\\cdot4$, with $y = 2$. But $P\'(2) = 6(2)(2) > 0$, so $y = 2$ is not a critical point of $P$.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-5-analytical-applications-differentiation',
    question: 'On which interval is the graph of $f(x) = \\ln\\left(x^2 + 4\\right)$ concave up?',
    options: ['$-2\\sqrt{2} < x < 2\\sqrt{2}$', '$-2 < x < 2$', '$x < -2$ or $x > 2$', '$0 < x < 2$ only'],
    correctAnswer: 1,
    explanation:
      '$f\'(x) = \\frac{2x}{x^2+4}$ and $f\'\'(x) = \\frac{2(x^2+4) - 2x(2x)}{(x^2+4)^2} = \\frac{8 - 2x^2}{(x^2+4)^2}$, which is positive exactly when $x^2 < 4$. So $f$ is concave up on $-2 < x < 2$ and concave down outside it. The interval $0 < x < 2$ is only the part of that interval where $f$ is also increasing; concavity does not depend on the sign of $f\'$. The interval $-2\\sqrt2 < x < 2\\sqrt2$ solves $8 - x^2 > 0$, which drops the factor $2$ on $x^2$.',
    optionExplanations: [
      'This solves $8 - x^2 > 0$, dropping the factor $2$ on $x^2$. The numerator of $f\'\'$ is $8 - 2x^2$, which is positive when $x^2 < 4$.',
      '$f\'\'(x) = \\frac{8 - 2x^2}{(x^2 + 4)^2}$, which is positive exactly when $x^2 < 4$. So the graph is concave up on $-2 < x < 2$.',
      'These are the intervals where $8 - 2x^2 < 0$, so $f\'\' < 0$ and the graph is concave down there, not concave up.',
      'This is only the part of $-2 < x < 2$ where $f$ also increases. Concavity depends on the sign of $f\'\'$, not $f\'$, and $f\'\' > 0$ on $-2 < x < 0$ too.',
    ],
  },

  // U6 (6)
  {
    type: 'mcq',
    topic: 'unit-6-integration-accumulation',
    stimulus: GRAPH_F,
    question: 'What is the value of $g(5)$?',
    options: ['$3$', '$6$', '$5$', '$4$'],
    correctAnswer: 3,
    explanation:
      '$g(5) = \\int_1^5 f(t)\\,dt$ is the signed area: a rectangle of area $4$ on $[1,3]$, a triangle of area $1$ above the axis on $[3,4]$ and a triangle of area $1$ below it on $[4,5]$, for $4 + 1 - 1 = 4$. The value $6$ adds the region below the axis as positive area, and $5$ ignores it. The value $3$ drops the triangle on $[3,4]$.',
    optionExplanations: [
      'This drops the triangle of area $1$ above the axis on $[3, 4]$, using $4 - 1$. That piece adds to $g(5)$.',
      'This adds the triangle below the axis on $[4, 5]$ as positive area, $4 + 1 + 1$. Area below the axis counts as negative.',
      'This ignores the triangle below the axis on $[4, 5]$, stopping at $4 + 1$. That region subtracts $1$.',
      '$g(5) = \\int_1^5 f(t)\\,dt$ is a signed area: a rectangle of $4$ on $[1, 3]$, a triangle of $1$ above the axis on $[3, 4]$ and a triangle of $1$ below it on $[4, 5]$, totaling $4$.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-6-integration-accumulation',
    stimulus: GRAPH_F,
    question: 'At what value of $x$ in the interval $-1 \\le x \\le 5$ does $g$ attain its absolute maximum?',
    options: ['$x = 4$', '$x = 5$', '$x = 1$', '$x = 3$'],
    correctAnswer: 0,
    explanation:
      'By the Fundamental Theorem of Calculus, $g\'(x) = f(x)$, which is positive on $-1 < x < 4$ and negative on $4 < x < 5$, so $g$ increases up to $x = 4$ and then decreases; $g(4) = 5$ beats $g(-1) = -2$ and $g(5) = 4$. At $x = 5$, $g$ has already lost the area below the axis. At $x = 1$ and $x = 3$, $f$ reaches its largest value, which is where $g$ increases fastest, not where $g$ is largest.',
    optionExplanations: [
      '$g\'(x) = f(x)$ is positive on $-1 < x < 4$ and negative on $4 < x < 5$, so $g$ peaks at $x = 4$, where $g(4) = 5$ beats $g(-1) = -2$ and $g(5) = 4$.',
      'By $x = 5$, $g$ has lost the area below the axis on $[4, 5]$, so $g(5) = 4 < g(4) = 5$. The function $g$ decreases after $x = 4$.',
      'At $x = 1$, $f$ first reaches its largest value, so $g$ is increasing fastest there, but $g(1) = 0$ and $g$ keeps increasing until $x = 4$.',
      'At $x = 3$, $f = 2$ is still positive, so $g$ is still increasing, and $g(3) = 4 < g(4) = 5$. The maximum of $f$ is not the maximum of $g$.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-6-integration-accumulation',
    question: 'What is the value of $\\displaystyle\\lim_{n \\to \\infty} \\sum_{k=1}^{n} \\frac{\\pi}{4n}\\sec^2\\left(\\frac{\\pi k}{4n}\\right)$?',
    options: ['$\\dfrac{\\pi}{4}$', '$\\sqrt{2}$', '$1$', '$\\dfrac{\\pi}{2}$'],
    correctAnswer: 2,
    explanation:
      'This is a right Riemann sum with $\\Delta x = \\frac{\\pi}{4n}$ on $\\left[0, \\frac{\\pi}{4}\\right]$, so it equals $\\int_0^{\\pi/4}\\sec^2 x\\,dx = \\tan\\frac{\\pi}{4} - \\tan 0 = 1$. The value $\\frac{\\pi}{4}$ is only the length of the interval. The value $\\sqrt2$ is $\\sec\\frac{\\pi}{4}$, and $\\frac{\\pi}{2}$ is one rectangle of height $\\sec^2\\frac{\\pi}{4} = 2$ across the whole interval, not the limit of the sum.',
    optionExplanations: [
      'This is the sum of the widths $\\Delta x$ alone, the length of $\\left[0, \\frac{\\pi}{4}\\right]$, as if every rectangle had height $1$.',
      'This is $\\sec\\frac{\\pi}{4} = \\sqrt{2}$, a value of the secant at the right endpoint, not the limit of the sum.',
      'This is a right Riemann sum with $\\Delta x = \\frac{\\pi}{4n}$ on $\\left[0, \\frac{\\pi}{4}\\right]$, so its limit is $\\int_0^{\\pi/4}\\sec^2 x\\,dx = \\tan\\frac{\\pi}{4} - \\tan 0 = 1$.',
      'This is one rectangle of height $\\sec^2\\frac{\\pi}{4} = 2$ across the whole interval, $2\\cdot\\frac{\\pi}{4}$, not the limit of the sum.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-6-integration-accumulation',
    question: 'What is $\\displaystyle\\int_0^{\\pi/2} e^{\\sin x}\\cos x\\,dx$?',
    options: ['$-1$', '$e$', '$e - 1$', '$1$'],
    correctAnswer: 2,
    explanation:
      'With $u = \\sin x$, $du = \\cos x\\,dx$ and the limits become $0$ and $1$, so the integral is $\\int_0^1 e^u\\,du = e - 1$. The value $e$ forgets to subtract $e^0 = 1$. The value $-1$ evaluates the integrand $e^{\\sin x}\\cos x$ at the endpoints instead of an antiderivative, and $1$ drops the factor $e^{\\sin x}$ and integrates $\\cos x$ alone.',
    optionExplanations: [
      'This evaluates the integrand $e^{\\sin x}\\cos x$ at the endpoints, $0 - 1$, instead of evaluating an antiderivative.',
      'This forgets to subtract the antiderivative at the lower limit. The value $e^{\\sin 0} = e^0 = 1$ must be subtracted from $e^1$.',
      'With $u = \\sin x$, $du = \\cos x\\,dx$ and the limits become $0$ and $1$, so the integral is $\\int_0^1 e^u\\,du = e - 1$.',
      'This drops the factor $e^{\\sin x}$ and integrates $\\cos x$ alone, giving $\\sin\\frac{\\pi}{2} - \\sin 0 = 1$.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-6-integration-accumulation',
    question: 'What is $\\displaystyle\\int_0^1 \\frac{x^3 + x + 1}{x^2 + 1}\\,dx$?',
    options: ['$\\dfrac{1}{2} + \\dfrac{\\pi}{4}$', '$1 + \\dfrac{\\pi}{4}$', '$\\dfrac{1}{2} + \\dfrac{\\pi}{2}$', '$\\dfrac{1}{2} + \\dfrac{\\ln 2}{2}$'],
    correctAnswer: 0,
    explanation:
      'Long division gives $\\frac{x^3 + x + 1}{x^2 + 1} = x + \\frac{1}{x^2 + 1}$, so the integral is $\\left[\\frac{x^2}{2} + \\arctan x\\right]_0^1 = \\frac{1}{2} + \\frac{\\pi}{4}$. The choice with $\\frac{\\ln 2}{2}$ integrates $\\frac{1}{x^2+1}$ as if it were $\\frac{x}{x^2+1}$. The choice $1 + \\frac{\\pi}{4}$ integrates $x$ as $x$ instead of $\\frac{x^2}{2}$, and $\\frac{\\pi}{2}$ uses $\\arctan 1 = \\frac{\\pi}{2}$.',
    optionExplanations: [
      'Long division gives $x + \\frac{1}{x^2 + 1}$, so the integral is $\\left[\\frac{x^2}{2} + \\arctan x\\right]_0^1 = \\frac{1}{2} + \\frac{\\pi}{4}$.',
      'This integrates $x$ as $x$ instead of $\\frac{x^2}{2}$, giving $1$ for that part. The arctangent part, $\\frac{\\pi}{4}$, is right.',
      'This uses $\\arctan 1 = \\frac{\\pi}{2}$. Since $\\tan\\frac{\\pi}{4} = 1$, the correct value is $\\arctan 1 = \\frac{\\pi}{4}$.',
      'This integrates $\\frac{1}{x^2 + 1}$ as if it were $\\frac{x}{x^2 + 1}$, whose antiderivative is $\\frac{1}{2}\\ln(x^2 + 1)$. The correct antiderivative is $\\arctan x$.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-6-integration-accumulation',
    stimulus:
      'The function $f$ is differentiable, and $f\'$ is continuous. Selected values of $f$ are given in the table.\n\n| $x$ | 0 | 2 | 4 | 6 |\n|---|---|---|---|---|\n| $f(x)$ | 5 | 1 | 9 | 4 |',
    question: 'What is the value of $\\displaystyle\\int_1^2 f\'(2x)\\,dx$?',
    options: ['$16$', '$-2$', '$-4$', '$4$'],
    correctAnswer: 3,
    explanation:
      'With $u = 2x$, $\\int_1^2 f\'(2x)\\,dx = \\frac{1}{2}\\int_2^4 f\'(u)\\,du = \\frac{1}{2}[f(4) - f(2)] = \\frac{1}{2}(9 - 1) = 4$. The value $-4$ subtracts in the wrong order, $\\frac{1}{2}[f(2) - f(4)]$, and $16$ multiplies by $2$ instead of dividing. The value $-2$ is $\\frac{1}{2}[f(2) - f(0)]$, which changes the limits to $0$ and $2$ instead of $2$ and $4$.',
    optionExplanations: [
      'This multiplies by $2$ instead of dividing: $2[f(4) - f(2)]$. With $u = 2x$, $dx = \\frac{1}{2}du$, so the factor is $\\frac{1}{2}$.',
      'This is $\\frac{1}{2}[f(2) - f(0)]$, which uses the limits $0$ and $2$. Substituting $u = 2x$ changes $x = 1$ and $x = 2$ to $u = 2$ and $u = 4$.',
      'This subtracts in the wrong order, $\\frac{1}{2}[f(2) - f(4)]$. The value at the upper limit comes first.',
      'With $u = 2x$, $\\int_1^2 f\'(2x)\\,dx = \\frac{1}{2}\\int_2^4 f\'(u)\\,du = \\frac{1}{2}[f(4) - f(2)] = \\frac{1}{2}(9 - 1) = 4$.',
    ],
  },

  // U7 (2)
  {
    type: 'mcq',
    topic: 'unit-7-differential-equations',
    stimulus:
      'A slope field for a differential equation is drawn at points $(x, y)$ with integer coordinates from $-2$ to $2$, except points on the $x$-axis, where no segment is drawn. At the points on the $y$-axis (other than the origin) the segments are horizontal. The segments have positive slope in Quadrants I and III and negative slope in Quadrants II and IV. Along each line through the origin the segments are parallel: for example, the slope is $3$ at both $(1, 1)$ and $(2, 2)$, and $-3$ at $(-1, 1)$.',
    question: 'Which of the following differential equations could the slope field represent?',
    options: ['$\\dfrac{dy}{dx} = x + 2y$', '$\\dfrac{dy}{dx} = \\dfrac{3x}{y}$', '$\\dfrac{dy}{dx} = \\dfrac{3y}{x}$', '$\\dfrac{dy}{dx} = -\\dfrac{3x}{y}$'],
    correctAnswer: 1,
    explanation:
      'For $\\frac{dy}{dx} = \\frac{3x}{y}$ the slope is $0$ when $x = 0$, undefined when $y = 0$, and depends only on the ratio $\\frac{x}{y}$, with the sign pattern described. The equation $\\frac{dy}{dx} = \\frac{3y}{x}$ gives the same slopes at $(1,1)$, $(2,2)$ and $(-1,1)$, but it would be horizontal on the $x$-axis and undefined on the $y$-axis. The negative version has the opposite signs, and $x + 2y$ matches at $(1,1)$ but gives slope $6$ at $(2,2)$.',
    optionExplanations: [
      'This matches the slope $3$ at $(1, 1)$ but gives $2 + 4 = 6$ at $(2, 2)$, so it is not constant along lines through the origin.',
      'The slope is $0$ when $x = 0$, undefined when $y = 0$, and depends only on $\\frac{x}{y}$, giving $3$ at $(1, 1)$ and $(2, 2)$ and $-3$ at $(-1, 1)$.',
      'This gives the same slopes at $(1, 1)$, $(2, 2)$ and $(-1, 1)$, but it would be $0$ on the $x$-axis and undefined on the $y$-axis, the reverse of the field.',
      'This has the opposite signs: it gives $-3$ at $(1, 1)$, but the field has positive slopes in Quadrant I.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-7-differential-equations',
    question: 'Let $y = f(x)$ be the solution to the differential equation $\\dfrac{dy}{dx} = 2x\\sqrt{y}$ with $f(0) = 4$. What is $f(2)$?',
    options: ['$8$', '$16$', '$9$', '$36$'],
    correctAnswer: 1,
    explanation:
      'Separating gives $\\int y^{-1/2}\\,dy = \\int 2x\\,dx$, so $2\\sqrt y = x^2 + C$; $f(0) = 4$ gives $C = 4$. Then $\\sqrt y = \\frac{x^2}{2} + 2$, and $f(2) = (2 + 2)^2 = 16$. The value $36$ comes from writing the antiderivative of $y^{-1/2}$ as $\\sqrt y$ instead of $2\\sqrt y$. The value $9$ sets $C = \\sqrt 4 = 2$ in $2\\sqrt y = x^2 + C$, and $8$ ignores the $\\sqrt y$ factor and integrates $2x$ alone.',
    optionExplanations: [
      'This ignores the $\\sqrt{y}$ factor and integrates $2x$ alone, giving $y = x^2 + 4$. The equation must be separated first.',
      'Separating, $\\int y^{-1/2}\\,dy = \\int 2x\\,dx$ gives $2\\sqrt{y} = x^2 + C$, and $f(0) = 4$ gives $C = 4$. Then $\\sqrt{y} = 4$ at $x = 2$, so $f(2) = 16$.',
      'This sets $C = \\sqrt{4} = 2$ in $2\\sqrt{y} = x^2 + C$. At $x = 0$, $2\\sqrt{4} = 4$, so $C = 4$, not $2$.',
      'This writes the antiderivative of $y^{-1/2}$ as $\\sqrt{y}$ instead of $2\\sqrt{y}$, which leads to $\\sqrt{y} = x^2 + 2$ and $y = 36$ at $x = 2$.',
    ],
  },

  // U8 (1)
  {
    type: 'mcq',
    topic: 'unit-8-applications-integration',
    question: 'The region bounded by $y = x^2$, the $x$-axis and the line $x = 1$ is revolved about the line $y = -1$. What is the volume of the resulting solid?',
    options: ['$\\dfrac{28\\pi}{15}$', '$\\dfrac{\\pi}{5}$', '$\\dfrac{8\\pi}{15}$', '$\\dfrac{13\\pi}{15}$'],
    correctAnswer: 3,
    explanation:
      'Washers have outer radius $x^2 + 1$ and inner radius $1$, so $V = \\pi\\int_0^1\\left[(x^2+1)^2 - 1\\right]dx = \\pi\\int_0^1 (x^4 + 2x^2)\\,dx = \\pi\\left(\\frac{1}{5} + \\frac{2}{3}\\right) = \\frac{13\\pi}{15}$. The value $\\frac{28\\pi}{15}$ forgets to subtract the hole of radius $1$. The value $\\frac{8\\pi}{15}$ expands $(x^2 + 1)^2$ without the middle term\'s factor $2$, and $\\frac{\\pi}{5}$ revolves about the $x$-axis instead.',
    optionExplanations: [
      'This forgets to subtract the hole, using $\\pi\\int_0^1 (x^2 + 1)^2\\,dx$. The region stops at the $x$-axis, one unit from the axis of rotation, so each washer has inner radius $1$.',
      'This revolves the region about the $x$-axis, $\\pi\\int_0^1 x^4\\,dx$, instead of about the line $y = -1$.',
      'This expands $(x^2 + 1)^2$ as $x^4 + x^2 + 1$, dropping the factor $2$ on the middle term. The square is $x^4 + 2x^2 + 1$.',
      'Washers have outer radius $x^2 + 1$ and inner radius $1$, so $V = \\pi\\int_0^1 (x^4 + 2x^2)\\,dx = \\pi\\left(\\frac{1}{5} + \\frac{2}{3}\\right) = \\frac{13\\pi}{15}$.',
    ],
  },

  /* ============== PART B — GRAPHING CALCULATOR (Q30–Q42) ============== */

  {
    type: 'mcq',
    topic: 'unit-1-limits-continuity',
    question: 'For $x \\ne 0$, $f(x) = \\dfrac{4^x - 2^x}{x}$. What value must be assigned to $f(0)$ to make $f$ continuous at $x = 0$?',
    options: ['$0.693$', '$1.386$', '$0.500$', '$2.000$'],
    correctAnswer: 0,
    explanation:
      'By L\'Hospital\'s Rule (or a table of values near $0$), $\\lim_{x\\to0}\\frac{4^x - 2^x}{x} = \\ln 4 - \\ln 2 = \\ln 2 \\approx 0.693$. The value $1.386$ is $\\ln 4$ alone, and $2.000$ divides the bases, $\\frac{4}{2}$. The value $0.500$ is $\\frac{\\ln 2}{\\ln 4}$, a ratio of the two logarithms instead of their difference.',
    optionExplanations: [
      'By L\'Hospital\'s Rule, the limit is $\\ln 4 - \\ln 2 = \\ln 2 \\approx 0.693$. A calculator table of values of $f$ near $x = 0$ confirms it.',
      'This is $\\ln 4 \\approx 1.386$, the derivative of $4^x$ at $0$ alone. The $-2^x$ term contributes $-\\ln 2$.',
      'This is $\\frac{\\ln 2}{\\ln 4}$, a ratio of the two logarithms. The derivatives are subtracted, giving $\\ln 4 - \\ln 2$.',
      'This divides the bases, $\\frac{4}{2}$. The limit is a derivative value, $\\ln 4 - \\ln 2$, not a ratio of the bases.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-2-differentiation-definition',
    question: 'Let $f(x) = 2^x$ and $g(x) = x^2$. At which values of $x$ in the interval $0 < x < 5$ are the lines tangent to the graphs of $f$ and $g$ parallel?',
    options: [
      '$x \\approx 0.485$ only',
      '$x = 2$ and $x = 4$ only',
      '$x \\approx 0.485$ and $x \\approx 3.212$',
      '$x = 1$ and $x = 2$ only',
    ],
    correctAnswer: 2,
    explanation:
      'Parallel tangents need $f\'(x) = g\'(x)$, that is, $2^x\\ln 2 = 2x$. Graphing $y = 2^x \\ln 2 - 2x$ on $0 < x < 5$ shows zeros at $x \\approx 0.485$ and $x \\approx 3.212$. The values $2$ and $4$ are where the graphs themselves meet ($2^x = x^2$), and $1$ and $2$ solve $2^x = 2x$, which drops the factor $\\ln 2$. Stopping at $0.485$ misses the second zero.',
    optionExplanations: [
      '$x \\approx 0.485$ is one zero of $2^x\\ln 2 - 2x$, but the calculator graph on $0 < x < 5$ crosses zero again at $x \\approx 3.212$.',
      'These are where the graphs themselves meet, $2^x = x^2$. Parallel tangents need equal slopes, $f\'(x) = g\'(x)$, not equal values.',
      'Parallel tangents need $2^x\\ln 2 = 2x$. Graphing $y = 2^x\\ln 2 - 2x$ on $0 < x < 5$ shows zeros at $x \\approx 0.485$ and $x \\approx 3.212$.',
      'These solve $2^x = 2x$, which drops the factor $\\ln 2$ from the derivative of $2^x$.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-3-composite-implicit-inverse',
    question: 'Let $f(x) = e^x + x^3$, and let $g$ be the inverse function of $f$. What is the value of $g\'(3)$?',
    options: ['$0.021$', '$0.860$', '$0.218$', '$4.583$'],
    correctAnswer: 2,
    explanation:
      'First solve $f(a) = 3$: $e^a + a^3 = 3$ gives $a \\approx 0.860$. Then $g\'(3) = \\frac{1}{f\'(a)} = \\frac{1}{e^a + 3a^2} \\approx \\frac{1}{4.583} \\approx 0.218$. The value $0.021$ is $\\frac{1}{f\'(3)}$, which evaluates $f\'$ at the wrong input. The value $4.583$ is $f\'(a)$ without the reciprocal, and $0.860$ is $g(3)$, not $g\'(3)$.',
    optionExplanations: [
      'This is $\\frac{1}{f\'(3)} = \\frac{1}{e^3 + 27}$, which evaluates $f\'$ at $3$ instead of at $g(3) \\approx 0.860$.',
      'This is $g(3) \\approx 0.860$, the solution of $e^a + a^3 = 3$, a value of the inverse rather than its derivative.',
      'The calculator solves $e^a + a^3 = 3$ for $a \\approx 0.860$. Then $g\'(3) = \\frac{1}{f\'\\left(a\\right)} = \\frac{1}{e^a + 3a^2} \\approx \\frac{1}{4.583} \\approx 0.218$.',
      'This is $f\'\\left(a\\right) \\approx 4.583$ without the reciprocal. The derivative of the inverse is $\\frac{1}{f\'(g(3))}$.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-4-contextual-applications-differentiation',
    stimulus: 'A point moves along the curve $y = e^x\\sin x$ so that its $x$-coordinate increases at a constant rate of 2 units per second.',
    question: 'At the instant the point has $x$-coordinate $1$, at what rate is its $y$-coordinate changing?',
    options: ['$7.512$ units per second', '$3.756$ units per second', '$2.937$ units per second', '$4.575$ units per second'],
    correctAnswer: 0,
    explanation:
      '$\\frac{dy}{dt} = \\frac{dy}{dx}\\cdot\\frac{dx}{dt} = e^x(\\sin x + \\cos x)\\cdot 2$, which is about $7.512$ at $x = 1$. The value $3.756$ is $\\frac{dy}{dx}$ alone, without $\\frac{dx}{dt} = 2$. The values $4.575$ and $2.937$ each keep only one term of the product rule: $2e\\sin 1$ and $2e\\cos 1$.',
    optionExplanations: [
      '$\\frac{dy}{dt} = \\frac{dy}{dx}\\cdot\\frac{dx}{dt} = e^x(\\sin x + \\cos x)\\cdot2$, which the calculator evaluates as about $7.512$ at $x = 1$.',
      'This is $\\frac{dy}{dx} \\approx 3.756$ at $x = 1$, without multiplying by $\\frac{dx}{dt} = 2$.',
      'This is $2e\\cos 1 \\approx 2.937$, which keeps only the $e^x\\cos x$ term of the product rule and drops $e^x\\sin x$.',
      'This is $2e\\sin 1 \\approx 4.575$, which keeps only the $e^x\\sin x$ term of the product rule and drops $e^x\\cos x$.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-4-contextual-applications-differentiation',
    stimulus: 'The depth of water in a river, in feet, is modeled by $D(t) = 4 + \\sqrt{t}\\,\\sin\\left(\\dfrac{t}{2}\\right)$, where $t$ is measured in hours and $0 \\le t \\le 6$.',
    question: 'At what time $t$ is the depth of the water increasing most rapidly?',
    options: ['$t \\approx 0.726$', '$t = 6.000$', '$t \\approx 3.673$', '$t \\approx 1.493$'],
    correctAnswer: 3,
    explanation:
      'The depth increases most rapidly where $D\'(t)$ is greatest. Graphing $D\'$ on $[0, 6]$ shows its maximum at $t \\approx 1.493$, where $D\' \\approx 0.726$ ft per hour. The time $t \\approx 3.673$ is where $D\' = 0$ and the water is deepest. At $t = 6$ the depth is decreasing most rapidly, and $0.726$ is the greatest rate itself, not the time at which it occurs.',
    optionExplanations: [
      'This is the greatest rate of increase, $D\'(1.493) \\approx 0.726$ feet per hour, not the time at which it occurs.',
      'At $t = 6$, $D\'(6) \\approx -1.18$, the least value of $D\'$ on $[0, 6]$, so the depth is decreasing most rapidly there.',
      'At $t \\approx 3.673$, $D\' = 0$, so the depth stops increasing. This is where the water is deepest, not where it rises fastest.',
      'The depth increases most rapidly where $D\'(t)$ is greatest. Graphing $D\'$ on $[0, 6]$ shows its maximum at $t \\approx 1.493$, where $D\' \\approx 0.726$ ft per hour.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-5-analytical-applications-differentiation',
    question: 'The derivative of a function $f$ is $f\'(x) = x\\cos\\left(x^2\\right)$. How many relative maxima does $f$ have on the interval $0 < x < 3$?',
    options: ['Three', 'Two', 'One', 'Four'],
    correctAnswer: 1,
    explanation:
      'On $0 < x < 3$, $f\'(x) = 0$ where $x^2 = \\frac{\\pi}{2}, \\frac{3\\pi}{2}, \\frac{5\\pi}{2}$, that is, $x \\approx 1.253$, $2.171$ and $2.802$. A graph of $f\'$ shows it changes from positive to negative at $1.253$ and $2.802$ (relative maxima) and from negative to positive at $2.171$ (a relative minimum). Three counts every critical point, and one or four miscounts the sign changes.',
    optionExplanations: [
      'This counts all three critical points, $x \\approx 1.253$, $2.171$ and $2.802$. At $2.171$, $f\'$ changes from negative to positive, which is a relative minimum.',
      '$f\' = 0$ where $x^2 = \\frac{\\pi}{2}, \\frac{3\\pi}{2}, \\frac{5\\pi}{2}$. The calculator graph of $f\'$ goes from positive to negative at $x \\approx 1.253$ and $2.802$, so there are two relative maxima.',
      'This finds only the first sign change, at $x \\approx 1.253$. The graph of $f\'$ also changes from positive to negative at $x \\approx 2.802$.',
      '$f\'$ has only three zeros on $0 < x < 3$, so four extrema is impossible, and only the two positive-to-negative crossings are relative maxima.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-6-integration-accumulation',
    question: 'A differentiable function $f$ has $f(1) = 3$ and $f\'(x) = \\sqrt{1 + x^3}$. What is the value of $f(4)$?',
    options: ['$16.983$', '$15.871$', '$11.062$', '$12.871$'],
    correctAnswer: 1,
    explanation:
      'By the Fundamental Theorem, $f(4) = f(1) + \\int_1^4\\sqrt{1 + x^3}\\,dx \\approx 3 + 12.871 = 15.871$. The value $12.871$ is the integral alone, without $f(1)$. The value $11.062$ is $3 + f\'(4) = 3 + \\sqrt{65}$, which uses a slope in place of an accumulated change, and $16.983$ integrates from $0$ instead of from $1$.',
    optionExplanations: [
      'This integrates from $0$ instead of from $1$, computing $3 + \\int_0^4\\sqrt{1 + x^3}\\,dx$. The known value is at $x = 1$, so the accumulation starts there.',
      'By the Fundamental Theorem, $f(4) = f(1) + \\int_1^4\\sqrt{1 + x^3}\\,dx$, and the calculator gives $3 + 12.871 = 15.871$.',
      'This is $3 + f\'(4) = 3 + \\sqrt{65}$, which adds a slope instead of the accumulated change $\\int_1^4 f\'(x)\\,dx$.',
      'This is $\\int_1^4\\sqrt{1 + x^3}\\,dx \\approx 12.871$, the change in $f$, without adding the starting value $f(1) = 3$.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-6-integration-accumulation',
    question: 'Let $L$ be the left Riemann sum with four subintervals of equal length that approximates $\\displaystyle\\int_0^2 \\frac{1}{1 + x^3}\\,dx$. What is $L - \\displaystyle\\int_0^2 \\frac{1}{1 + x^3}\\,dx$?',
    options: ['$1.309$', '$-0.226$', '$0.445$', '$0.219$'],
    correctAnswer: 3,
    explanation:
      'With $\\Delta x = 0.5$, $L = 0.5\\left[h(0) + h(0.5) + h(1) + h(1.5)\\right] \\approx 1.309$, where $h(x) = \\frac{1}{1+x^3}$, and the integral is about $1.090$, so the difference is about $0.219$. It is positive because $h$ is decreasing on $[0,2]$, so left sums overestimate. The value $1.309$ is $L$ itself rather than the difference, $0.445$ is the left sum minus the right sum, and $-0.226$ is the right sum minus the integral.',
    optionExplanations: [
      'This is $L \\approx 1.309$ itself. The question asks for $L$ minus the integral, about $1.309 - 1.090$.',
      'This is the right sum minus the integral, about $0.864 - 1.090$. The left sum is required, and it overestimates because the integrand is decreasing.',
      'This is the left sum minus the right sum, $1.309 - 0.864 \\approx 0.445$, rather than the left sum minus the integral.',
      '$L = 0.5[h(0) + h(0.5) + h(1) + h(1.5)] \\approx 1.309$ with $h(x) = \\frac{1}{1 + x^3}$, and the calculator gives the integral as about $1.090$, so the difference is about $0.219$.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-7-differential-equations',
    question: 'The population $P$ of a town grows at a rate proportional to its size. The population is 1200 at time $t = 0$ and 1500 at $t = 5$ years. At what time will the population reach 3000?',
    options: ['$t \\approx 20.531$ years', '$t = 10.000$ years', '$t \\approx 4.106$ years', '$t = 30.000$ years'],
    correctAnswer: 0,
    explanation:
      'From $\\frac{dP}{dt} = kP$, $P = 1200e^{kt}$ with $e^{5k} = 1.25$, so $k = \\frac{\\ln 1.25}{5}$. Setting $1200e^{kt} = 3000$ gives $t = \\frac{5\\ln 2.5}{\\ln 1.25} \\approx 20.531$. The value $30$ assumes linear growth of 60 people per year, and $10$ treats the ratio $2.5 \\div 1.25 = 2$ as two more 5-year periods. The value $4.106$ is $\\frac{\\ln 2.5}{\\ln 1.25}$ without the factor $5$.',
    optionExplanations: [
      '$P = 1200e^{kt}$ with $e^{5k} = 1.25$, so $k = \\frac{\\ln 1.25}{5}$. Solving $1200e^{kt} = 3000$ on the calculator gives $t = \\frac{5\\ln 2.5}{\\ln 1.25} \\approx 20.531$ years.',
      'This divides $2.5$ by $1.25$ and treats the result, $2$, as the number of 5-year periods. Growth by a factor of $1.25$ per period means solving $1.25^{t/5} = 2.5$.',
      'This is $\\frac{\\ln 2.5}{\\ln 1.25} \\approx 4.106$, the number of 5-year periods, without multiplying by $5$ to convert to years.',
      'This assumes linear growth of $60$ people per year. A rate proportional to size gives exponential growth, which reaches $3000$ sooner.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-8-applications-integration',
    stimulus: REGION_R,
    question: 'What is the area of $R$?',
    options: ['$3.644$', '$2.279$', '$2.354$', '$1.065$'],
    correctAnswer: 2,
    explanation:
      'Solve $3\\sin x = x$ with a calculator to get $a \\approx 2.279$. On $[0, a]$, $3\\sin x \\ge x$, so the area is $\\int_0^{a}(3\\sin x - x)\\,dx \\approx 2.354$. The value $2.279$ is $a$ itself, and $1.065$ integrates to $\\pi$, where $\\sin x$ returns to $0$, which subtracts area beyond the intersection. The value $3.644$ is $\\int_0^{\\pi}|3\\sin x - x|\\,dx$, which adds a region outside $R$.',
    optionExplanations: [
      'This is $\\int_0^{\\pi}|3\\sin x - x|\\,dx$, which adds the region between $x = a$ and $x = \\pi$ where $y = x$ is above $y = 3\\sin x$, outside $R$.',
      'This is $a \\approx 2.279$, the $x$-coordinate of the intersection, a bound of the integral rather than the area.',
      'The calculator solves $3\\sin x = x$ for $a \\approx 2.279$. Since $3\\sin x \\ge x$ on $[0, a]$, the area is $\\int_0^{a}(3\\sin x - x)\\,dx \\approx 2.354$.',
      'This integrates up to $\\pi$, where $\\sin x$ returns to $0$, instead of up to $a$. Beyond $a$ the integrand is negative, so area is subtracted.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-8-applications-integration',
    stimulus: REGION_R,
    question: 'The region $R$ is the base of a solid. Each cross section of the solid perpendicular to the $x$-axis is a square. What is the volume of the solid?',
    options: ['$9.339$', '$26.808$', '$2.973$', '$1.167$'],
    correctAnswer: 2,
    explanation:
      'Each square has side $3\\sin x - x$, so $V = \\int_0^{a}(3\\sin x - x)^2\\,dx \\approx 2.973$, with $a \\approx 2.279$. The value $9.339$ multiplies that integral by $\\pi$, as if the cross sections were disks, and $1.167$ is the volume for semicircular cross sections. The value $26.808$ is the volume of revolution about the $x$-axis, $\\pi\\int_0^a(9\\sin^2 x - x^2)\\,dx$.',
    optionExplanations: [
      'This multiplies the integral of the squared side by $\\pi$, as if the cross sections were disks. A square cross section has area $s^2$, with no $\\pi$.',
      'This is the volume of revolution about the $x$-axis, $\\pi\\int_0^a(9\\sin^2 x - x^2)\\,dx$, not a solid with square cross sections.',
      'Each square has side $3\\sin x - x$, so the calculator gives $V = \\int_0^{a}(3\\sin x - x)^2\\,dx \\approx 2.973$, with $a \\approx 2.279$.',
      'This is $\\frac{\\pi}{8}\\int_0^a(3\\sin x - x)^2\\,dx$, the volume for semicircular cross sections with the same diameters.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-8-applications-integration',
    stimulus: 'Sand is delivered to a construction site at a rate of $S(t) = 12 + 4\\cos\\left(\\dfrac{t}{2}\\right)$ tons per hour, where $t$ is measured in hours, for $0 \\le t \\le 8$. No sand is on the site at $t = 0$.',
    question: 'At what time $T$ have exactly 50 tons of sand been delivered?',
    options: ['$T \\approx 3.511$', '$T \\approx 4.167$', '$T \\approx 3.854$', '$T = 3.125$'],
    correctAnswer: 0,
    explanation:
      'Solve $\\int_0^T S(t)\\,dt = 12T + 8\\sin\\left(\\frac{T}{2}\\right) = 50$ (or use the calculator\'s numerical integral) to get $T \\approx 3.511$. The value $3.854$ comes from $12T + 4\\sin\\frac{T}{2} = 50$, which drops the factor $2$ from the antiderivative of $\\cos\\frac{t}{2}$. The value $4.167$ ignores the cosine term ($50 \\div 12$), and $3.125$ assumes the maximum rate of 16 tons per hour for the whole time.',
    optionExplanations: [
      'The amount delivered by time $T$ is $\\int_0^T S(t)\\,dt = 12T + 8\\sin\\left(\\frac{T}{2}\\right)$. Setting it equal to $50$ and solving with the calculator gives $T \\approx 3.511$.',
      'This ignores the cosine term, computing $50 \\div 12$. The rate is above $12$ tons per hour at first, so $50$ tons arrive sooner.',
      'This solves $12T + 4\\sin\\frac{T}{2} = 50$, dropping the factor $2$ from the antiderivative of $\\cos\\frac{t}{2}$, which is $2\\sin\\frac{t}{2}$.',
      'This is $50 \\div 16$, which assumes the maximum rate of $16$ tons per hour lasts the whole time, but $S(t)$ decreases from that value.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-8-applications-integration',
    stimulus: 'After a dose of medicine, its concentration in a patient\'s blood is $C(t) = 20te^{-0.4t}$ milligrams per liter, where $t$ is measured in hours.',
    question: 'What is the average concentration, in milligrams per liter, over the first 6 hours?',
    options: ['$86.445$', '$5.443$', '$18.072$', '$14.407$'],
    correctAnswer: 3,
    explanation:
      'The average value is $\\frac{1}{6}\\int_0^6 20te^{-0.4t}\\,dt \\approx \\frac{86.445}{6} \\approx 14.407$ mg/L. The value $86.445$ is the integral without dividing by the length of the interval, and $18.072$ is $C(3)$, the concentration at the midpoint time. The value $5.443$ averages only the endpoint values $C(0)$ and $C(6)$.',
    optionExplanations: [
      'This is $\\int_0^6 C(t)\\,dt \\approx 86.445$, without dividing by the length of the interval, $6$.',
      'This averages only the endpoint values, $\\frac{C(0) + C(6)}{2}$, instead of finding the average value of the function over the whole interval.',
      'This is $C(3) \\approx 18.072$, the concentration at the midpoint time. The average value of $C$ is not its value at the midpoint.',
      'The average value is $\\frac{1}{6}\\int_0^6 20te^{-0.4t}\\,dt$, and the calculator gives $\\frac{86.445}{6} \\approx 14.407$ mg/L.',
    ],
  },
]
