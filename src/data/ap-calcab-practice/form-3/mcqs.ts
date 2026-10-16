import type { MCQItem } from '@/components/FullLengthPracticeExam'

/**
 * AP Calculus AB practice exam, form 3: 42 MCQs (May 2027 Section I).
 *   U1 5 · U2 5 · U3 4 · U4 5 · U5 7 · U6 8 · U7 3 · U8 5
 * Part A (Q1–Q29): no calculator, 62 minutes. Part B (Q30–Q42): graphing
 * calculator, 38 minutes; every Part B item is calculator-active. The runner
 * splits the parts by position, so Part B items must stay in positions 30–42.
 * Sets that share a stimulus are consecutive: Q9–Q10 (graphs of f and g),
 * Q21–Q22 (pump-rate table), Q39–Q40 (particle velocity).
 */

const GRAPHS_FG =
  'The graphs of the functions $f$ and $g$ each consist of two line segments.\n\n' +
  '- The graph of $f$ joins the points $(0, 1)$, $(2, 5)$ and $(4, 8)$, in that order.\n' +
  '- The graph of $g$ joins the points $(0, 4)$, $(3, 1)$ and $(4, 3)$, in that order.'

const PUMP_TABLE =
  'Water is pumped into a tank at a rate of $r(t)$ gallons per minute, where $t$ is measured in minutes. The function $r$ is differentiable, and $r\'$ is continuous. Selected values of $r(t)$ are given in the table.\n\n' +
  '| $t$ (minutes) | 0 | 1 | 2 | 3 | 4 | 5 | 6 |\n|---|---|---|---|---|---|---|---|\n' +
  '| $r(t)$ (gallons per minute) | 5 | 8 | 10 | 11 | 10 | 7 | 3 |'

const PARTICLE =
  'A particle moves along the $x$-axis with velocity $v(t) = (t - 2)e^{t/4}$ meters per second for $0 \\le t \\le 4$ seconds. At time $t = 0$ the particle is at $x = 1$.'

export const MCQS: MCQItem[] = [
  /* ============== PART A — NO CALCULATOR (Q1–Q29) ============== */

  // U1 (4)
  {
    type: 'mcq',
    topic: 'unit-1-limits-continuity',
    question: 'What is $\\displaystyle\\lim_{x \\to 0} \\frac{x^2 - 3x}{\\sin x}$?',
    options: ['$-3$', '$0$', 'The limit does not exist.', '$3$'],
    correctAnswer: 0,
    explanation:
      'Write $\\frac{x^2 - 3x}{\\sin x} = (x - 3)\\cdot\\frac{x}{\\sin x}$. As $x \\to 0$, $\\frac{x}{\\sin x} \\to 1$, so the limit is $-3$. The value $3$ drops the sign of $-3x$, and $0$ treats the numerator\'s limit as the answer. The $\\frac{0}{0}$ form is indeterminate, not a sign that the limit fails to exist.',
  },
  {
    type: 'mcq',
    topic: 'unit-1-limits-continuity',
    question: 'For $x \\ne 2$, $f(x) = \\dfrac{2x^2 - 5x + 2}{x - 2}$. What value should be assigned to $f(2)$ to make $f$ continuous at $x = 2$?',
    options: ['None; this discontinuity cannot be removed.', '$\\dfrac{1}{2}$', '$\\dfrac{3}{2}$', '$3$'],
    correctAnswer: 3,
    explanation:
      'The numerator factors as $(2x - 1)(x - 2)$, so $f(x) = 2x - 1$ for $x \\ne 2$ and the limit at $2$ is $3$; defining $f(2) = 3$ removes the discontinuity. The value $\\frac{3}{2}$ comes from factoring as $\\left(x - \\frac12\\right)(x - 2)$ and losing the leading $2$. The value $\\frac{1}{2}$ is where the remaining factor $2x - 1$ equals $0$, not the value of the limit. The discontinuity is removable because the limit exists.',
  },
  {
    type: 'mcq',
    topic: 'unit-1-limits-continuity',
    stimulus:
      'The graph of the function $f$ on the interval $0 \\le x \\le 6$ is described below.\n\n' +
      '- A line segment rises from $(0, 1)$ to an open circle at $(2, 3)$, and another segment falls from that open circle to a filled point at $(4, 1)$.\n' +
      '- The point $(2, 5)$ is a filled point, so $f(2) = 5$.\n' +
      '- A line segment falls from an open circle at $(4, 3)$ to the filled point $(6, 0)$.',
    question: 'For which values of $a$ in the open interval $0 < a < 6$ does $\\displaystyle\\lim_{x \\to a} f(x)$ exist but $f$ fails to be continuous at $x = a$?',
    options: ['$a = 4$ only', '$a = 2$ only', 'There is no such value of $a$.', '$a = 2$ and $a = 4$'],
    correctAnswer: 1,
    explanation:
      'At $x = 2$ both one-sided limits equal $3$, so the limit exists, but $f(2) = 5 \\ne 3$, so $f$ is not continuous there (a removable discontinuity). At $x = 4$ the left-hand limit is $1$ and the right-hand limit is $3$, so the limit does not exist; that is a jump. Listing $a = 4$ alone picks the jump instead. Listing both $2$ and $4$ also counts the jump, and $x = 2$ does satisfy the condition, so the last choice is wrong.',
  },
  {
    type: 'mcq',
    topic: 'unit-1-limits-continuity',
    question: 'Which of the following functions has a vertical asymptote at $x = 0$ and a horizontal asymptote at $y = 1$?',
    options: ['$y = \\dfrac{x^2 + 1}{x}$', '$y = \\dfrac{x + 1}{x}$', '$y = \\dfrac{x + 1}{x^2}$', '$y = \\dfrac{2x}{2x + 1}$'],
    correctAnswer: 1,
    explanation:
      'For $\\frac{x + 1}{x}$, the denominator is $0$ at $x = 0$ while the numerator is not, and the degrees are equal with leading coefficients $1$ and $1$, so the horizontal asymptote is $y = 1$. $\\frac{x^2 + 1}{x}$ has the vertical asymptote but grows without bound, so it has no horizontal asymptote. $\\frac{2x}{2x+1}$ has $y = 1$ but its vertical asymptote is $x = -\\frac{1}{2}$, and $\\frac{x+1}{x^2}$ has horizontal asymptote $y = 0$.',
  },

  // U2 (4)
  {
    type: 'mcq',
    topic: 'unit-2-differentiation-definition',
    question: 'What is $\\displaystyle\\lim_{h \\to 0} \\frac{\\ln(e + h) - 1}{h}$?',
    options: ['$1$', '$0$', '$e$', '$\\dfrac{1}{e}$'],
    correctAnswer: 3,
    explanation:
      'Since $\\ln e = 1$, this is $\\lim_{h\\to0}\\frac{\\ln(e + h) - \\ln e}{h}$, the derivative of $\\ln x$ at $x = e$, which is $\\frac{1}{e}$. The value $1$ is $\\ln e$, a function value rather than the derivative, and $e$ inverts $\\frac{1}{x}$. The value $0$ treats the $\\frac{0}{0}$ form as $0$.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-differentiation-definition',
    question: 'The line $y = 4x - 3$ is tangent to the graph of $y = x^2 + c$, where $c$ is a constant. What is the value of $c$?',
    options: ['$c = 1$', '$c = -3$', '$c = 4$', '$c = 5$'],
    correctAnswer: 0,
    explanation:
      'The slopes must match: $2x = 4$, so the point of tangency has $x = 2$, where the line gives $y = 5$. Then $2^2 + c = 5$, so $c = 1$. The value $-3$ just matches the $y$-intercepts, $5$ is the $y$-coordinate of the point of tangency, and $4$ is the slope.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-differentiation-definition',
    question: 'Let $f(x) = \\sqrt[3]{x - 1}$. Which of the following statements about $f$ at $x = 1$ is true?',
    options: [
      '$f$ is neither continuous nor differentiable at $x = 1$.',
      '$f$ is differentiable at $x = 1$, and $f\'(1) = 0$.',
      '$f$ is continuous at $x = 1$ but not differentiable there.',
      '$f$ is differentiable but not continuous at $x = 1$.',
    ],
    correctAnswer: 2,
    explanation:
      '$f(1) = 0 = \\lim_{x\\to1}\\sqrt[3]{x - 1}$, so $f$ is continuous at $1$. But $f\'(x) = \\frac{1}{3}(x - 1)^{-2/3}$ grows without bound as $x \\to 1$, so the graph has a vertical tangent there and $f\'(1)$ does not exist. Substituting $x = 1$ into $f\'$ divides by zero rather than giving $0$, so $f\'(1) = 0$ is wrong, and a cube root has no break, so $f$ is continuous. Differentiability implies continuity, so the last choice is impossible.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-differentiation-definition',
    question: 'At which values of $x$ does the graph of $f(x) = e^x\\left(x^2 - 3\\right)$ have a horizontal tangent line?',
    options: ['$x = -1$ and $x = 3$', '$x = \\sqrt{3}$ and $x = -\\sqrt{3}$', '$x = 1$ and $x = -3$', '$x = 0$ only'],
    correctAnswer: 2,
    explanation:
      'By the product rule, $f\'(x) = e^x(x^2 - 3) + e^x(2x) = e^x(x^2 + 2x - 3) = e^x(x + 3)(x - 1)$, which is $0$ at $x = 1$ and $x = -3$. The values $\\pm\\sqrt3$ are where $f(x) = 0$, not $f\'(x)$, and $-1$ and $3$ come from a sign error in the factoring. The value $x = 0$ comes from differentiating only the factor $x^2 - 3$.',
  },

  // U3 (3)
  {
    type: 'mcq',
    topic: 'unit-3-composite-implicit-inverse',
    stimulus: GRAPHS_FG,
    question: 'Let $h(x) = f(g(x))$. What is the value of $h\'(1)$?',
    options: ['$-\\dfrac{3}{2}$', '$-1$', '$-2$', '$\\dfrac{3}{2}$'],
    correctAnswer: 0,
    explanation:
      'On $0 < x < 3$, $g$ has slope $-1$, so $g(1) = 3$ and $g\'(1) = -1$. On $2 < x < 4$, $f$ has slope $\\frac{3}{2}$, so $f\'(3) = \\frac{3}{2}$. Then $h\'(1) = f\'(g(1))\\,g\'(1) = \\frac{3}{2}(-1) = -\\frac{3}{2}$. The value $-2$ uses $f\'(1) = 2$ instead of $f\'(g(1))$, $\\frac{3}{2}$ drops the factor $g\'(1)$, and $-1$ is $g\'(1)$ alone.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-composite-implicit-inverse',
    stimulus: GRAPHS_FG,
    question: 'The function $f$ is increasing, so it has an inverse function $w = f^{-1}$. What is the value of $w\'(3)$?',
    options: ['$\\dfrac{2}{3}$', '$\\dfrac{3}{2}$', '$2$', '$\\dfrac{1}{2}$'],
    correctAnswer: 3,
    explanation:
      'From the graph, $f(1) = 3$ (on the first segment, which has slope $2$), so $w\'(3) = \\frac{1}{f\'(w(3))} = \\frac{1}{f\'(1)} = \\frac{1}{2}$. The value $2$ is $f\'(1)$ without the reciprocal. The values $\\frac{2}{3}$ and $\\frac{3}{2}$ use the slope of $f$ at $x = 3$, which evaluates $f\'$ at the output $3$ instead of at the input $1$.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-composite-implicit-inverse',
    question: 'If $y = \\arctan\\left(\\sqrt{x}\\right)$ for $x > 0$, then $\\dfrac{dy}{dx} =$',
    options: ['$\\dfrac{1}{1 + x^2}$', '$\\dfrac{1}{2\\sqrt{x}\\,(1 + x)}$', '$\\dfrac{2\\sqrt{x}}{1 + x}$', '$\\dfrac{1}{1 + x}$'],
    correctAnswer: 1,
    explanation:
      'With $u = \\sqrt x$, $\\frac{dy}{dx} = \\frac{1}{1 + u^2}\\cdot\\frac{du}{dx} = \\frac{1}{1 + x}\\cdot\\frac{1}{2\\sqrt x}$. The choice $\\frac{1}{1+x}$ omits the derivative of the inner function, and $\\frac{1}{1+x^2}$ is the derivative of $\\arctan x$, ignoring the square root entirely. The choice $\\frac{2\\sqrt x}{1 + x}$ multiplies by $2\\sqrt x$ instead of dividing by it.',
  },

  // U4 (3)
  {
    type: 'mcq',
    topic: 'unit-4-contextual-applications-differentiation',
    question: 'The volume of a cube is decreasing at a rate of 12 cubic centimeters per second. At the instant each edge is 2 centimeters long, how is the surface area of the cube changing?',
    options: [
      'Decreasing at 6 square centimeters per second',
      'Decreasing at 24 square centimeters per second',
      'Decreasing at 72 square centimeters per second',
      'Decreasing at 12 square centimeters per second',
    ],
    correctAnswer: 1,
    explanation:
      'From $V = s^3$, $\\frac{dV}{dt} = 3s^2\\frac{ds}{dt}$, so $-12 = 12\\frac{ds}{dt}$ and $\\frac{ds}{dt} = -1$. Then $S = 6s^2$ gives $\\frac{dS}{dt} = 12s\\frac{ds}{dt} = 24(-1) = -24$. Assuming the two rates are equal gives $12$. The value $72$ uses $\\frac{dV}{dt} = s^2\\frac{ds}{dt}$, which makes $\\frac{ds}{dt} = -3$, and $6$ treats $S = 6s^2$ as if $\\frac{dS}{dt} = 6\\frac{ds}{dt}$.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-contextual-applications-differentiation',
    question: 'What is $\\displaystyle\\lim_{x \\to 0} \\frac{e^{x^2} - 1}{1 - \\cos x}$?',
    options: ['$0$', '$1$', '$\\dfrac{1}{2}$', '$2$'],
    correctAnswer: 3,
    explanation:
      'The form is $\\frac{0}{0}$. L\'Hospital\'s Rule gives $\\lim_{x\\to0}\\frac{2xe^{x^2}}{\\sin x} = \\lim_{x\\to0} 2e^{x^2}\\cdot\\frac{x}{\\sin x} = 2$. The value $1$ drops the factor $2$ from the chain rule on $e^{x^2}$, and $\\frac{1}{2}$ inverts the ratio. The value $0$ stops after one differentiation and reads $\\frac{0}{0}$ as $0$.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-contextual-applications-differentiation',
    stimulus:
      'One end of a metal rod is heated. The temperature of the rod, in degrees Celsius, at a distance of $x$ centimeters from the heated end is $T(x)$, where $T$ is differentiable. Selected values of $T(x)$ are given in the table.\n\n' +
      '| $x$ (centimeters) | 0 | 2 | 3 | 5 | 8 |\n|---|---|---|---|---|---|\n' +
      '| $T(x)$ (degrees Celsius) | 90 | 76 | 70 | 61 | 52 |',
    question: 'Using the data in the table, what is the best estimate of $T\'(4)$?',
    options: [
      '$-4.5$ degrees Celsius per centimeter',
      '$-9$ degrees Celsius per centimeter',
      '$-3$ degrees Celsius per centimeter',
      '$-4.5$ degrees Celsius',
    ],
    correctAnswer: 0,
    explanation:
      'The data on either side of $x = 4$ give $T\'(4) \\approx \\frac{T(5) - T(3)}{5 - 3} = \\frac{61 - 70}{2} = -4.5$ degrees Celsius per centimeter. The value $-9$ is the change in temperature without dividing by the change in distance, and the same number in degrees Celsius alone has the units of $T$, not of $T\'$. The value $-3$ uses the interval from $5$ to $8$, which does not contain $x = 4$.',
  },

  // U5 (6)
  {
    type: 'mcq',
    topic: 'unit-5-analytical-applications-differentiation',
    question: 'For $f(x) = \\dfrac{1}{x}$, at what number $c$ between $1$ and $4$ does the instantaneous rate of change of $f$ equal its average rate of change over the closed interval $[1, 4]$?',
    options: ['$c = \\dfrac{5}{2}$', '$c = \\dfrac{4}{\\sqrt{3}}$', '$c = 2$', '$c = \\sqrt{3}$'],
    correctAnswer: 2,
    explanation:
      'The average rate of change is $\\frac{\\frac14 - 1}{4 - 1} = -\\frac{1}{4}$, and $f\'(c) = -\\frac{1}{c^2} = -\\frac{1}{4}$ gives $c^2 = 4$, so $c = 2$ in $(1, 4)$. The value $\\frac{5}{2}$ is the midpoint of the interval. The value $\\sqrt3$ uses $\\frac{1}{4 - 1}$ as the average rate, skipping $f(4) - f(1)$, and $\\frac{4}{\\sqrt3}$ divides the change in $f$ by $4$ instead of by the interval length $3$.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-analytical-applications-differentiation',
    question: 'On which interval is $f(x) = x + 2\\cos x$ decreasing, for $0 \\le x \\le 2\\pi$?',
    options: [
      '$\\dfrac{7\\pi}{6} < x < \\dfrac{11\\pi}{6}$',
      '$0 < x < \\dfrac{\\pi}{6}$ and $\\dfrac{5\\pi}{6} < x < 2\\pi$',
      '$\\dfrac{\\pi}{6} < x < \\dfrac{5\\pi}{6}$',
      '$0 < x < \\dfrac{\\pi}{3}$ and $\\dfrac{5\\pi}{3} < x < 2\\pi$',
    ],
    correctAnswer: 2,
    explanation:
      '$f\'(x) = 1 - 2\\sin x$, which is negative when $\\sin x > \\frac{1}{2}$, that is, on $\\frac{\\pi}{6} < x < \\frac{5\\pi}{6}$. The pair $0<x<\\frac{\\pi}{6}$ and $\\frac{5\\pi}{6}<x<2\\pi$ is where $f$ is increasing. The pair ending at $\\frac{\\pi}{3}$ and starting at $\\frac{5\\pi}{3}$ solves $1 - 2\\cos x < 0$, which mixes up sine and cosine, and $\\frac{7\\pi}{6}<x<\\frac{11\\pi}{6}$ solves $\\sin x < -\\frac{1}{2}$, a sign error.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-analytical-applications-differentiation',
    question: 'At which values of $x$ does the graph of $f(x) = e^{-x^2/2}$ have a point of inflection?',
    options: ['$x = -1$ and $x = 1$', '$x = -\\dfrac{1}{\\sqrt{2}}$ and $x = \\dfrac{1}{\\sqrt{2}}$', '$x = -\\sqrt{2}$ and $x = \\sqrt{2}$', '$x = -1$, $x = 0$ and $x = 1$'],
    correctAnswer: 0,
    explanation:
      '$f\'(x) = -xe^{-x^2/2}$ and $f\'\'(x) = (x^2 - 1)e^{-x^2/2}$, which changes sign at $x = \\pm1$. Adding $x = 0$ includes the critical point, where $f$ has its maximum and $f\'\'(0) = -1 \\ne 0$. The values $\\pm\\sqrt2$ and $\\pm\\frac{1}{\\sqrt2}$ come from mishandling the factor $\\frac{1}{2}$ in the exponent: the second is the answer for $e^{-x^2}$.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-analytical-applications-differentiation',
    question: 'A line through the point $(2, 1)$ meets the positive $x$-axis and the positive $y$-axis, forming a right triangle with the coordinate axes. What is the least possible area of such a triangle?',
    options: ['$2$', '$\\dfrac{9}{2}$', '$8$', '$4$'],
    correctAnswer: 3,
    explanation:
      'With intercepts $a$ and $b$, $\\frac{2}{a} + \\frac{1}{b} = 1$, so $b = \\frac{a}{a - 2}$ for $a > 2$, and the area is $A(a) = \\frac{a^2}{2(a - 2)}$. Then $A\'(a) = \\frac{a(a - 4)}{2(a - 2)^2}$, which changes from negative to positive at $a = 4$; there $b = 2$ and $A = 4$. The value $8$ forgets the $\\frac{1}{2}$ in the triangle\'s area, $\\frac{9}{2}$ is the area for the line $x + y = 3$, which is not the minimum, and $2$ halves the area a second time.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-analytical-applications-differentiation',
    stimulus:
      'The function $f$ is twice differentiable for all real numbers. Its graph is increasing for $x < 1$, decreasing for $1 < x < 3$ and increasing for $x > 3$. It is concave down for $x < 2$ and concave up for $x > 2$.',
    question: 'Which of the following must be true?',
    options: [
      '$f\'(2) > 0$ and $f\'\'(2) = 0$',
      '$f\'(2) < 0$ and $f\'\'(2) = 0$',
      '$f\'(2) = 0$ and $f\'\'(2) < 0$',
      '$f\'(2) < 0$ and $f\'\'(2) > 0$',
    ],
    correctAnswer: 1,
    explanation:
      'At $x = 2$, $f$ is decreasing, so $f\'(2) < 0$. Because $f$ changes from concave down to concave up at $x = 2$, $f\'$ changes from decreasing to increasing there; so $f\'$ has a relative minimum at $x = 2$, and since $f\'$ is differentiable, $f\'\'(2) = 0$. $f\'(2) = 0$ would need a horizontal tangent, which occurs at $x = 1$ and $x = 3$ instead. $f\'(2) > 0$ contradicts the decreasing interval, and $f\'\'(2) > 0$ describes a point inside a concave-up interval.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-analytical-applications-differentiation',
    question: 'The derivative of a function $f$ is $f\'(x) = x^3 - 4x$. At which values of $x$ does $f$ have a relative minimum?',
    options: ['$x = -\\dfrac{2}{\\sqrt3}$ and $x = \\dfrac{2}{\\sqrt3}$', '$x = -2$ and $x = 2$', '$x = 0$ only', '$x = -2$, $x = 0$ and $x = 2$'],
    correctAnswer: 1,
    explanation:
      '$f\'(x) = x(x - 2)(x + 2)$ is negative for $x < -2$, positive on $(-2, 0)$, negative on $(0, 2)$ and positive for $x > 2$, so $f\'$ changes from negative to positive at $x = -2$ and $x = 2$. At $x = 0$ it changes from positive to negative, a relative maximum, so listing all three critical points is wrong. The values $\\pm\\frac{2}{\\sqrt3}$ are the zeros of $f\'\'(x) = 3x^2 - 4$.',
  },

  // U6 (6)
  {
    type: 'mcq',
    topic: 'unit-6-integration-accumulation',
    stimulus: PUMP_TABLE,
    question: 'Using a midpoint Riemann sum with three subintervals of equal length, what is the approximation of $\\displaystyle\\int_0^6 r(t)\\,dt$?',
    options: ['$46$ gallons', '$26$ gallons', '$50$ gallons', '$52$ gallons'],
    correctAnswer: 3,
    explanation:
      'The subintervals are $[0,2]$, $[2,4]$ and $[4,6]$, with midpoints $1$, $3$ and $5$, so the sum is $2\\left[r(1) + r(3) + r(5)\\right] = 2(8 + 11 + 7) = 52$ gallons. The value $26$ leaves out the width $2$. The values $50$ and $46$ are the left and right Riemann sums on the same three subintervals.',
  },
  {
    type: 'mcq',
    topic: 'unit-6-integration-accumulation',
    stimulus: PUMP_TABLE,
    question: 'What is the value of $\\displaystyle\\int_2^5 r\'(t)\\,dt$?',
    options: ['$-3$', '$3$', '$7$', '$29.5$'],
    correctAnswer: 0,
    explanation:
      'By the Fundamental Theorem of Calculus, $\\int_2^5 r\'(t)\\,dt = r(5) - r(2) = 7 - 10 = -3$ gallons per minute. The value $3$ subtracts in the wrong order. The value $29.5$ is a trapezoidal estimate of $\\int_2^5 r(t)\\,dt$, which integrates $r$ instead of $r\'$, and $7$ is $r(5)$ alone.',
  },
  {
    type: 'mcq',
    topic: 'unit-6-integration-accumulation',
    question: 'What is $\\displaystyle\\int_0^4 \\frac{x}{\\sqrt{x^2 + 9}}\\,dx$?',
    options: ['$4$', '$5$', '$2$', '$1$'],
    correctAnswer: 2,
    explanation:
      'With $u = x^2 + 9$, $du = 2x\\,dx$, the antiderivative is $\\sqrt{x^2 + 9}$, so the integral is $\\sqrt{25} - \\sqrt{9} = 2$. The value $4$ uses $2\\sqrt{x^2+9}$, forgetting the $\\frac{1}{2}$ from $du$. The value $5$ forgets to subtract the value at $x = 0$, and $1$ applies the $\\frac{1}{2}$ twice.',
  },
  {
    type: 'mcq',
    topic: 'unit-6-integration-accumulation',
    question: 'What is $\\displaystyle\\int_{\\pi/6}^{\\pi/2} \\csc^2 x\\,dx$?',
    options: ['$\\dfrac{\\sqrt{3}}{3}$', '$-\\sqrt{3}$', '$\\sqrt{3}$', 'The integral does not exist.'],
    correctAnswer: 2,
    explanation:
      'An antiderivative of $\\csc^2 x$ is $-\\cot x$, so the integral is $-\\cot\\frac{\\pi}{2} + \\cot\\frac{\\pi}{6} = 0 + \\sqrt3 = \\sqrt3$. The value $-\\sqrt3$ uses $+\\cot x$ as the antiderivative, and $\\frac{\\sqrt3}{3}$ uses $\\tan$ in place of $\\cot$. The integral does exist: $\\csc^2 x$ is continuous on $\\left[\\frac{\\pi}{6}, \\frac{\\pi}{2}\\right]$, and $\\cot\\frac{\\pi}{2} = 0$ is defined.',
  },
  {
    type: 'mcq',
    topic: 'unit-6-integration-accumulation',
    question: 'A continuous function $f$ satisfies $\\displaystyle\\int_0^x f(t)\\,dt = x^2\\cos x$ for all $x$. What is $f\\left(\\dfrac{\\pi}{2}\\right)$?',
    options: ['$-\\dfrac{\\pi^2}{4}$', '$0$', '$-\\pi$', '$\\dfrac{\\pi^2}{4}$'],
    correctAnswer: 0,
    explanation:
      'Differentiating both sides gives $f(x) = 2x\\cos x - x^2\\sin x$, so $f\\left(\\frac{\\pi}{2}\\right) = 0 - \\frac{\\pi^2}{4}(1) = -\\frac{\\pi^2}{4}$. The value $\\frac{\\pi^2}{4}$ uses $+\\sin x$ as the derivative of $\\cos x$, and $0$ evaluates $x^2\\cos x$ itself at $\\frac{\\pi}{2}$ instead of its derivative. The value $-\\pi$ comes from differentiating $x^2\\cos x$ as $2x(-\\sin x)$, the product of the two derivatives.',
  },
  {
    type: 'mcq',
    topic: 'unit-6-integration-accumulation',
    question: 'Let $F$ be an antiderivative of $f(x) = \\dfrac{x^3 + 1}{x^2}$ with $F(1) = 2$. What is $F(2)$?',
    options: ['$3$', '$\\dfrac{9}{4}$', '$2$', '$4$'],
    correctAnswer: 3,
    explanation:
      'Since $f(x) = x + x^{-2}$, $F(2) = F(1) + \\int_1^2\\left(x + x^{-2}\\right)dx = 2 + \\left[\\frac{x^2}{2} - \\frac{1}{x}\\right]_1^2 = 2 + \\left(\\frac{3}{2} + \\frac{1}{2}\\right) = 4$. The value $2$ is the integral alone, without $F(1)$. The value $3$ uses $+\\frac{1}{x}$ as an antiderivative of $x^{-2}$, and $\\frac{9}{4}$ adds $f(2) - f(1)$ to $F(1)$, which uses $f$ in place of its antiderivative.',
  },

  // U7 (2)
  {
    type: 'mcq',
    topic: 'unit-7-differential-equations',
    question: 'Which of the following functions is a solution of the differential equation $\\dfrac{dy}{dx} = \\dfrac{2y}{x}$ for $x > 0$?',
    options: ['$y = 2\\ln x$', '$y = 5x^2$', '$y = x^2 + 5$', '$y = e^{2x}$'],
    correctAnswer: 1,
    explanation:
      'For $y = 5x^2$, $\\frac{dy}{dx} = 10x$ and $\\frac{2y}{x} = \\frac{10x^2}{x} = 10x$, so it is a solution. For $y = x^2 + 5$, $\\frac{2y}{x} = 2x + \\frac{10}{x}$, which is not $2x$. For $y = e^{2x}$, $y\' = 2y$, which solves $\\frac{dy}{dx} = 2y$, not $\\frac{2y}{x}$. For $y = 2\\ln x$, $y\' = \\frac{2}{x}$ but $\\frac{2y}{x} = \\frac{4\\ln x}{x}$; it comes from misreading $\\ln y = 2\\ln x$ as $y = 2\\ln x$.',
  },
  {
    type: 'mcq',
    topic: 'unit-7-differential-equations',
    question: 'Let $y = f(x)$ be the solution to $\\dfrac{dy}{dx} = \\dfrac{e^x}{y}$ with $f(0) = 2$. What is $f(\\ln 3)$?',
    options: ['$3$', '$2\\sqrt{2}$', '$\\sqrt{7}$', '$\\sqrt{6}$'],
    correctAnswer: 1,
    explanation:
      'Separate: $y\\,dy = e^x\\,dx$, so $\\frac{y^2}{2} = e^x + C$. With $f(0) = 2$, $2 = 1 + C$ and $C = 1$, so $y^2 = 2e^x + 2$ and $f(\\ln 3) = \\sqrt{6 + 2} = 2\\sqrt2$ (positive, since $f(0) > 0$). The value $\\sqrt6$ leaves out the constant, $\\sqrt7$ multiplies only $e^x$ by $2$ when clearing the fraction ($y^2 = 2e^x + 1$), and $3$ treats $y$ as the constant $2$ while integrating.',
  },

  // U8 (1)
  {
    type: 'mcq',
    topic: 'unit-8-applications-integration',
    question: 'What is the average value of $f(x) = e^{2x}$ on the interval $0 \\le x \\le \\ln 2$?',
    options: ['$\\dfrac{3}{2}$', '$\\dfrac{2}{\\ln 2}$', '$\\dfrac{3}{\\ln 2}$', '$\\dfrac{3}{2\\ln 2}$'],
    correctAnswer: 3,
    explanation:
      'The average value is $\\frac{1}{\\ln 2}\\int_0^{\\ln 2}e^{2x}\\,dx = \\frac{1}{\\ln 2}\\left[\\frac{e^{2x}}{2}\\right]_0^{\\ln 2} = \\frac{1}{\\ln 2}\\left(2 - \\frac{1}{2}\\right) = \\frac{3}{2\\ln 2}$. The value $\\frac{3}{2}$ is the integral without dividing by the interval length. The value $\\frac{3}{\\ln 2}$ forgets the $\\frac{1}{2}$ in the antiderivative, and $\\frac{2}{\\ln 2}$ forgets to subtract the value at $x = 0$.',
  },

  /* ============== PART B — GRAPHING CALCULATOR (Q30–Q42) ============== */

  {
    type: 'mcq',
    topic: 'unit-1-limits-continuity',
    question: 'On which of the following intervals does the Intermediate Value Theorem guarantee a solution of the equation $e^x = 3x$?',
    options: ['$[0.5, 1]$', '$[-1, -0.5]$', '$[2.5, 3.5]$', '$[0.25, 0.5]$'],
    correctAnswer: 0,
    explanation:
      'Let $g(x) = e^x - 3x$, which is continuous. With a calculator, $g(0.5) \\approx 0.149 > 0$ and $g(1) \\approx -0.282 < 0$, so $g$ has a zero in $[0.5, 1]$. On each other interval $g$ is positive at both endpoints ($g(-1) \\approx 3.368$, $g(-0.5) \\approx 2.107$, $g(0.25) \\approx 0.534$, $g(2.5) \\approx 4.682$, $g(3.5) \\approx 22.615$), so the theorem guarantees nothing there.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-differentiation-definition',
    question: 'Let $f(x) = x\\sin x$. At what value of $x$ in the interval $0 < x < \\pi$ does the line tangent to the graph of $f$ have slope $-1$?',
    options: ['$x \\approx 3.142$', '$x \\approx 2.029$', '$x \\approx 2.370$', '$x \\approx 1.571$'],
    correctAnswer: 2,
    explanation:
      'Solve $f\'(x) = \\sin x + x\\cos x = -1$ with a calculator: on $(0, \\pi)$ the only solution is $x \\approx 2.370$. The value $2.029$ solves $f\'(x) = 0$, where the tangent is horizontal, and $1.571 = \\frac{\\pi}{2}$ is where the slope is $+1$. The value $3.142$ is where $f(x) = 0$, a zero of the function rather than a slope.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-composite-implicit-inverse',
    question: 'A curve is defined by $y^3 + y = x$. What is the value of $\\dfrac{dy}{dx}$ at the point on the curve where $x = 3$?',
    options: ['$1.213$', '$0.036$', '$0.185$', '$5.417$'],
    correctAnswer: 2,
    explanation:
      'First solve $y^3 + y = 3$ with a calculator: $y \\approx 1.213$. Differentiating implicitly, $(3y^2 + 1)\\frac{dy}{dx} = 1$, so $\\frac{dy}{dx} = \\frac{1}{3y^2 + 1} \\approx \\frac{1}{5.417} \\approx 0.185$. The value $1.213$ is $y$ itself, and $5.417$ is $3y^2 + 1$ without the reciprocal. The value $0.036$ substitutes $x = 3$ for $y$.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-contextual-applications-differentiation',
    stimulus: 'A cake is removed from an oven and placed in a 70°F room. Its temperature, in degrees Fahrenheit, is modeled by $H(t) = 70 + 280e^{-0.08t}$, where $t$ is the number of minutes since it was removed.',
    question: 'At what time is the temperature of the cake decreasing at a rate of 10°F per minute?',
    options: ['$t \\approx 10.081$ minutes', '$t \\approx 41.653$ minutes', '$t \\approx 23.843$ minutes', '$t = 12.500$ minutes'],
    correctAnswer: 0,
    explanation:
      '$H\'(t) = -22.4e^{-0.08t}$, and $H\'(t) = -10$ gives $t = \\frac{\\ln 2.24}{0.08} \\approx 10.081$ minutes. The value $41.653$ forgets the factor $-0.08$ from the chain rule (solving $280e^{-0.08t} = 10$). The value $12.5$ is $\\frac{1}{0.08}$, and $23.843$ is when the average rate of change since $t = 0$ reaches $-10$°F per minute, not the instantaneous rate.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-contextual-applications-differentiation',
    stimulus: 'Let $g(x) = \\sqrt{x^3 + 3}$. The line tangent to the graph of $g$ at $x = 1$ is used to approximate $g(1.2)$.',
    question: 'Which of the following gives the approximation and correctly describes it?',
    options: [
      '$2.300$, an overestimate of $g(1.2)$',
      '$2.174$, an underestimate of $g(1.2)$',
      '$2.075$, an underestimate of $g(1.2)$',
      '$2.150$, an underestimate of $g(1.2)$',
    ],
    correctAnswer: 3,
    explanation:
      'Here $g(1) = 2$ and $g\'(x) = \\frac{3x^2}{2\\sqrt{x^3 + 3}}$, so $g\'(1) = \\frac{3}{4}$ and $g(1.2) \\approx 2 + 0.75(0.2) = 2.150$. A calculator gives $g(1.2) \\approx 2.174$, so the tangent line lies below the curve (the graph is concave up there) and $2.150$ is an underestimate. The value $2.174$ is the actual value, not the approximation, $2.300$ uses slope $\\frac{3}{2}$, forgetting the $\\frac{1}{2}$ from the square root, and $2.075$ uses slope $\\frac{3}{8}$, which drops the square root from the denominator of $g\'(1)$.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-analytical-applications-differentiation',
    question: 'What is the absolute minimum value of $f(x) = e^x - 4\\sin x$ on the closed interval $0 \\le x \\le 2$?',
    options: ['$1.000$', '$-0.674$', '$0.905$', '$3.752$'],
    correctAnswer: 1,
    explanation:
      '$f\'(x) = e^x - 4\\cos x$, and a calculator shows its only zero on $(0, 2)$ is $x \\approx 0.905$, where $f\'$ changes from negative to positive. The candidates are $f(0) = 1$, $f(0.905) \\approx -0.674$ and $f(2) \\approx 3.752$, so the minimum value is $-0.674$. The value $0.905$ is where the minimum occurs, not the minimum value; $1.000$ and $3.752$ are the endpoint values, and $3.752$ is the maximum.',
  },
  {
    type: 'mcq',
    topic: 'unit-6-integration-accumulation',
    question: 'Let $g(x) = \\displaystyle\\int_1^x \\sqrt{1 + t^4}\\,dt$. For what value of $x$ is $g(x) = 3$?',
    options: ['$x = 4.000$', '$x \\approx 2.101$', '$x \\approx 1.682$', '$x \\approx 1.828$'],
    correctAnswer: 1,
    explanation:
      'Solve $\\int_1^x\\sqrt{1 + t^4}\\,dt = 3$ with the calculator (for example, by graphing $y = \\int_1^x \\sqrt{1+t^4}\\,dt - 3$): $x \\approx 2.101$. The value $1.828$ starts the integral at $0$ instead of $1$. The value $1.682$ solves $\\sqrt{1 + x^4} = 3$, setting the integrand rather than the integral equal to $3$, and $4$ treats the integrand as the constant $1$.',
  },
  {
    type: 'mcq',
    topic: 'unit-6-integration-accumulation',
    question: 'Let $g(x) = \\displaystyle\\int_0^x \\sin\\left(t^2\\right)dt$. What is the absolute maximum value of $g$ on the closed interval $0 \\le x \\le 3$?',
    options: ['$0.774$', '$0.430$', '$1.772$', '$0.895$'],
    correctAnswer: 3,
    explanation:
      '$g\'(x) = \\sin(x^2)$ is zero on $(0, 3)$ at $x = \\sqrt\\pi \\approx 1.772$ (where $g\'$ changes from positive to negative) and at $x = \\sqrt{2\\pi} \\approx 2.507$ (negative to positive). The candidates are $g(0) = 0$, $g(\\sqrt\\pi) \\approx 0.895$ and $g(3) \\approx 0.774$, so the maximum value is $0.895$. The value $0.774$ is the endpoint value, $1.772$ is where the maximum occurs, and $0.430$ is the relative minimum value $g(\\sqrt{2\\pi})$.',
  },
  {
    type: 'mcq',
    topic: 'unit-7-differential-equations',
    question: 'A quantity $y$ satisfies $\\dfrac{dy}{dt} = 0.2(100 - y)$ with $y(0) = 20$. At what time $t$ is $y = 60$?',
    options: ['$t \\approx 3.466$', '$t = 2.500$', '$t \\approx 1.438$', '$t \\approx 5.493$'],
    correctAnswer: 0,
    explanation:
      'Separating, $\\ln|100 - y| = -0.2t + C$, so $y = 100 - 80e^{-0.2t}$. Setting $y = 60$ gives $e^{-0.2t} = \\frac{1}{2}$ and $t = 5\\ln 2 \\approx 3.466$. The value $5.493$ uses exponential growth, $20e^{0.2t} = 60$. The value $2.5$ assumes the initial rate of $16$ per unit time continues, and $1.438$ solves $80e^{-0.2t} = 60$, setting the wrong quantity equal to $60$.',
  },
  {
    type: 'mcq',
    topic: 'unit-8-applications-integration',
    stimulus: PARTICLE,
    question: 'What is the total distance traveled by the particle over the time interval $0 \\le t \\le 4$?',
    options: ['$2.380$ meters', '$2.254$ meters', '$7.013$ meters', '$4.633$ meters'],
    correctAnswer: 2,
    explanation:
      'The velocity is negative on $[0, 2)$ and positive on $(2, 4]$, so the distance is $\\int_0^4 |v(t)|\\,dt \\approx 2.380 + 4.633 = 7.013$ meters. The value $2.254$ is the displacement $\\int_0^4 v(t)\\,dt$, which lets the backward motion cancel. The values $4.633$ and $2.380$ each count only one of the two pieces.',
  },
  {
    type: 'mcq',
    topic: 'unit-8-applications-integration',
    stimulus: PARTICLE,
    question: 'What is the position of the particle at time $t = 4$?',
    options: ['$x \\approx 2.254$', '$x \\approx -1.380$', '$x \\approx 3.254$', '$x \\approx 8.013$'],
    correctAnswer: 2,
    explanation:
      '$x(4) = x(0) + \\int_0^4 v(t)\\,dt \\approx 1 + 2.254 = 3.254$. The value $2.254$ is the displacement without the starting position. The value $8.013$ adds the total distance instead of the displacement, and $-1.380$ is the position at $t = 2$, where the particle turns around.',
  },
  {
    type: 'mcq',
    topic: 'unit-8-applications-integration',
    stimulus: 'Rainwater flows into a barrel at a rate of $R(t) = 3 + 2\\sin\\left(\\dfrac{t^2}{6}\\right)$ gallons per hour, and water leaks out of the barrel at a constant rate of 2.5 gallons per hour, where $t$ is measured in hours. At time $t = 0$ the barrel holds 12 gallons.',
    question: 'How many gallons of water are in the barrel at time $t = 5$ hours?',
    options: ['$18.279$', '$6.279$', '$30.779$', '$5.952$'],
    correctAnswer: 0,
    explanation:
      'The amount is $12 + \\int_0^5\\left(R(t) - 2.5\\right)dt \\approx 12 + 6.279 = 18.279$ gallons. The value $30.779$ adds the inflow but ignores the leak, and $6.279$ is the net change without the initial 12 gallons. The value $5.952$ is $12 + 5\\left(R(5) - 2.5\\right)$, which treats the net rate at $t = 5$ as if it held for all five hours.',
  },
  {
    type: 'mcq',
    topic: 'unit-8-applications-integration',
    question: 'Let $f(x) = \\ln\\left(1 + x^2\\right)$. For what value of $c$ in the interval $0 < c < 3$ is $f(c)$ equal to the average value of $f$ on $[0, 3]$?',
    options: ['$c = 1.500$', '$c \\approx 2.138$', '$c \\approx 1.135$', '$c \\approx 1.453$'],
    correctAnswer: 3,
    explanation:
      'The average value is $\\frac{1}{3}\\int_0^3\\ln(1 + x^2)\\,dx \\approx 1.135$, and solving $\\ln(1 + c^2) = 1.135$ gives $c = \\sqrt{e^{1.135} - 1} \\approx 1.453$. The value $1.5$ is the midpoint, and $1.135$ is the average value itself rather than the input $c$. The value $2.138$ solves $f\'(c) = \\frac{f(3) - f(0)}{3}$, the Mean Value Theorem for derivatives instead of the average value of $f$.',
  },
]
