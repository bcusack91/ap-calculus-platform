import type { SAQItem } from '@/components/FullLengthPracticeExam'

/**
 * AP Precalculus — 4 FRQs in 70 minutes total, in the May 2027 format.
 *   Part A (graphing calculator required, 35 min): Q1 Function Concepts, Q2 Modeling a Non-Periodic Context
 *   Part B (no calculator, 35 min): Q3 Modeling a Periodic Context, Q4 Symbolic Manipulations
 *
 * Each FRQ is worth 6 points, itemized below so the self-graded total matches the AP rubric.
 * Q2 follows the 2026–27 structure: Part B(iii) was removed, and Part C now asks students to write and solve
 * an equation for the input value at a stated threshold and use it to justify a domain restriction for the model.
 * Out of scope since the 2026–27 CED: whether an interval of increase/decrease is open or closed, so either earns credit.
 */

export const FRQS: SAQItem[] = [
  /* ---- Q1: Function Concepts (graphing calculator) ---- */
  {
    type: 'saq',
    topic: 'frq-function-concepts',
    prompt: `**Question 1 — Function Concepts (Graphing Calculator Required) (6 points)**

Let $f$ be an increasing function defined for $x \\geq 0$. The table gives values of $f(x)$ at selected values of $x$.

| $x$ | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|
| $f(x)$ | 3 | 6 | 12 | 24 | 48 |

The function $g$ is given by
$$g(x) = \\dfrac{2x^2 - 7x + 3}{x^2 - x - 6}.$$`,
    parts: [
      {
        letter: 'A',
        question: '(i) The function $h$ is defined by $h(x) = (g \\circ f)(x) = g(f(x))$. Find the value of $h(2)$, or indicate that it is not defined. Show the work that leads to your answer. (ii) Find the value of $f^{-1}(24)$, or indicate that it is not defined.',
        rubric: [
          { id: 'a1', label: '1 pt — (i) Value of $h(2)$', description: '$h(2) = g(f(2)) = g(6) = \\dfrac{2(36) - 42 + 3}{36 - 6 - 6} = \\dfrac{33}{24} = 1.375$.' },
          { id: 'a2', label: '1 pt — (ii) Value of $f^{-1}(24)$', description: 'Because $f$ is increasing, $f^{-1}$ exists, and $f(4) = 24$ in the table, so $f^{-1}(24) = 4$.' },
        ],
      },
      {
        letter: 'B',
        question: '(i) Find all values of $x$ for which $g(x) = 1$, or indicate that there are no such values. (ii) Determine the end behavior of $g$ as $x$ decreases without bound. Express your answer using the mathematical notation of a limit.',
        rubric: [
          { id: 'b1', label: '1 pt — (i) Answer with reasoning', description: 'Factoring gives $g(x) = \\dfrac{(2x - 1)(x - 3)}{(x - 3)(x + 2)}$. Setting $\\dfrac{2x - 1}{x + 2} = 1$ gives $x = 3$, but $g(3)$ is undefined (the graph has a hole at $(3, 1)$), so there are no values of $x$ for which $g(x) = 1$.' },
          { id: 'b2', label: '1 pt — (ii) End behavior in limit notation', description: 'The numerator and denominator both have degree 2 with leading coefficients 2 and 1, so $\\lim_{x \\to -\\infty} g(x) = 2$.' },
        ],
      },
      {
        letter: 'C',
        question: '(i) Based on the table, determine which of the following function types best models $f$: linear, quadratic, exponential, or logarithmic. (ii) Give a reason for your answer in part (i) based on the relationship between the change in the output values of $f$ and the change in the input values of $f$. Refer to the values in the table in your reasoning.',
        rubric: [
          { id: 'c1', label: '1 pt — (i) Function type', description: '$f$ is best modeled by an exponential function.' },
          { id: 'c2', label: '1 pt — (ii) Reason from the table', description: 'Over consecutive equal-length input intervals of length 1, the output values change proportionally: $6/3 = 12/6 = 24/12 = 48/24 = 2$. A constant ratio of outputs over equal-length input intervals is the signature of an exponential function.' },
        ],
      },
    ],
  },

  /* ---- Q2: Modeling a Non-Periodic Context (graphing calculator) ---- */
  {
    type: 'saq',
    topic: 'frq-modeling',
    prompt: `**Question 2 — Modeling a Non-Periodic Context (Graphing Calculator Required) (6 points)**

A small town's population was 1,800 people in 2010 ($t = 0$), 2,400 people in 2015 ($t = 5$), and 3,200 people in 2020 ($t = 10$), where $t$ is the number of years since 2010.

The town's population can be modeled by the function $P$ given by $P(t) = a \\cdot b^t$, where $P(t)$ is the population $t$ years after 2010.`,
    parts: [
      {
        letter: 'A',
        question: '(i) Use the given data for $t = 0$ and $t = 10$ to write two equations that can be used to find the values for constants $a$ and $b$ in the expression for $P(t)$. (ii) Find the values for $a$ and $b$ as decimal approximations.',
        rubric: [
          { id: 'a1', label: '1 pt — (i) Two equations', description: '$a \\cdot b^0 = 1800$ and $a \\cdot b^{10} = 3200$.' },
          { id: 'a2', label: '1 pt — (ii) Values of $a$ and $b$', description: '$a = 1800$, and $b^{10} = \\dfrac{3200}{1800} = \\dfrac{16}{9}$, so $b = (16/9)^{1/10} \\approx 1.059$ (1.0592). Model: $P(t) \\approx 1800(1.0592)^t$, which also gives $P(5) = 2400$.' },
        ],
      },
      {
        letter: 'B',
        question: '(i) Use the given data to find the average rate of change of the population, in people per year, from $t = 0$ to $t = 10$. Show the computations that lead to your answer. (ii) Interpret the meaning of your answer from part (i) in the context of the problem.',
        rubric: [
          { id: 'b1', label: '1 pt — (i) Average rate of change with units', description: '$\\dfrac{P(10) - P(0)}{10 - 0} = \\dfrac{3200 - 1800}{10} = 140$ people per year.' },
          { id: 'b2', label: '1 pt — (ii) Interpretation', description: 'From 2010 to 2020, the town\'s population increased, on average, by 140 people per year.' },
        ],
      },
      {
        letter: 'C',
        question: 'The town\'s planners decide to use model $P$ to make predictions about the population beyond 2020. The town\'s water system can serve at most 6,000 people, so they determine that the model is appropriate to use only until the predicted population reaches 6,000. Use model $P$ to respond to the following. (i) Write and solve an equation whose solution gives the time $t$, in years, when the predicted population is 6,000. Express your value for $t$ as a decimal approximation. (ii) Explain how the value of $t$ found in part (i) can be used to determine an appropriate domain restriction for the model $P$. Refer to the context of the problem in your explanation.',
        rubric: [
          { id: 'c1', label: '1 pt — (i) Equation with value of $t$', description: '$1800(1.0592)^t = 6000$, so $t = \\dfrac{\\ln(10/3)}{\\ln(1.0592)} \\approx 20.925$ years (accept 20.9 to 21.0).' },
          { id: 'c2', label: '1 pt — (ii) Explanation in context', description: 'The model is appropriate only while the predicted population is at most 6,000, which the model reaches at $t \\approx 20.925$ (late 2030). The data start at $t = 0$ (2010), so an appropriate domain for $P$ is $0 \\leq t \\leq 20.925$ years.' },
        ],
      },
    ],
  },

  /* ---- Q3: Modeling a Periodic Context (no calculator) ---- */
  {
    type: 'saq',
    topic: 'frq-periodic-modeling',
    prompt: `**Question 3 — Modeling a Periodic Context (No Calculator) (6 points)**

The temperature inside a greenhouse rises and falls in a daily pattern. The temperature is at its minimum of 54°F at midnight ($h = 0$) and at its maximum of 82°F at noon ($h = 12$), and the pattern repeats every 24 hours.

The sinusoidal function $T$ models the temperature, in degrees Fahrenheit, as a function of $h$, the number of hours after midnight.`,
    parts: [
      {
        letter: 'A',
        question: 'The graph of $T$ and its dashed midline are drawn for two full cycles, $0 \\leq h \\leq 48$. Reading from the left: $F$ is the first point of the graph (at $h = 0$), $G$ is the first point where the graph crosses the midline, $J$ is the first maximum, $K$ is the next point where the graph crosses the midline, and $P$ is the next minimum. Determine the coordinates $(h, T(h))$ for the five points $F$, $G$, $J$, $K$, and $P$.',
        rubric: [
          { id: 'a1', label: '1 pt — $T(h)$-coordinates', description: '$F$: 54, $G$: 68, $J$: 82, $K$: 68, $P$: 54 (the midline is $\\frac{54 + 82}{2} = 68$).' },
          { id: 'a2', label: '1 pt — $h$-coordinates', description: '$F = (0, 54)$, $G = (6, 68)$, $J = (12, 82)$, $K = (18, 68)$, $P = (24, 54)$.' },
        ],
      },
      {
        letter: 'B',
        question: 'The function $T$ can be written in the form $T(h) = a\\sin(b(h + c)) + d$. Find values of constants $a$, $b$, $c$, and $d$.',
        rubric: [
          { id: 'b1', label: '1 pt — Vertical transformations: $a$ and $d$', description: 'Amplitude $a = \\frac{82 - 54}{2} = 14$ and midline $d = 68$.' },
          { id: 'b2', label: '1 pt — Horizontal transformations: $b$ and $c$', description: 'Period 24 gives $b = \\frac{2\\pi}{24} = \\frac{\\pi}{12}$. The graph crosses the midline going up at $h = 6$, so $c = -6$: $T(h) = 14\\sin\\left(\\frac{\\pi}{12}(h - 6)\\right) + 68$. Other correct forms (for example $a = -14$, $c = 6$) earn the point.' },
        ],
      },
      {
        letter: 'C',
        question: 'Refer to the graph of $T$ in part A. The $h$-coordinate of $K$ is $h_1$, and the $h$-coordinate of $P$ is $h_2$. (i) On the interval $(h_1, h_2)$, which of the following is true about $T$? (a) $T$ is increasing and above its midline. (b) $T$ is decreasing and above its midline. (c) $T$ is increasing and below its midline. (d) $T$ is decreasing and below its midline. (ii) On the interval $(h_1, h_2)$, describe the concavity of the graph of $T$ and determine whether the rate of change of $T$ is increasing or decreasing.',
        rubric: [
          { id: 'c1', label: '1 pt — (i) Function behavior', description: 'Choice (d): from $K = (18, 68)$ to $P = (24, 54)$ the temperature falls from the midline to the minimum, so $T$ is decreasing and below its midline.' },
          { id: 'c2', label: '1 pt — (ii) Concavity and rate of change', description: 'The graph of $T$ is concave up on $(h_1, h_2)$, and the rate of change of $T$ is increasing there (it rises from its most negative value at $K$ to 0 at the minimum $P$).' },
        ],
      },
    ],
  },

  /* ---- Q4: Symbolic Manipulations (no calculator) ---- */
  {
    type: 'saq',
    topic: 'frq-symbolic',
    prompt: `**Question 4 — Symbolic Manipulations (No Calculator) (6 points)**

Angle measures are in radians. Solutions to equations must be real numbers. Determine the exact value of any expression that can be obtained without a calculator, combine terms using the rules for exponents and logarithms, and show the work that leads to each answer.`,
    parts: [
      {
        letter: 'A',
        question: 'The functions $g$ and $k$ are given by $g(x) = \\ln(x^2) - 5\\ln x + 2\\ln 2$ and $k(x) = \\dfrac{\\sec x - \\cos x}{\\tan x}$. (i) Rewrite $g(x)$ as a single natural logarithm without negative exponents in any part of the expression. Your result should be of the form $\\ln(\\text{expression})$. (ii) Rewrite $k(x)$ as an expression in which $\\sin x$ appears once and no other trigonometric functions are involved.',
        rubric: [
          { id: 'a1', label: '1 pt — (i) Expression for $g(x)$', description: '$g(x) = \\ln(x^2) - \\ln(x^5) + \\ln 4 = \\ln\\left(\\dfrac{4x^2}{x^5}\\right) = \\ln\\left(\\dfrac{4}{x^3}\\right)$, for $x > 0$.' },
          { id: 'a2', label: '1 pt — (ii) Expression for $k(x)$', description: '$\\sec x - \\cos x = \\dfrac{1 - \\cos^2 x}{\\cos x} = \\dfrac{\\sin^2 x}{\\cos x}$, and dividing by $\\tan x = \\dfrac{\\sin x}{\\cos x}$ gives $k(x) = \\sin x$, where $\\cos x \\neq 0$ and $\\sin x \\neq 0$.' },
        ],
      },
      {
        letter: 'B',
        question: 'The functions $j$ and $q$ are given by $j(\\theta) = 2\\sin^2\\theta + \\sin\\theta - 1$ and $q(x) = \\log_3(x + 8) + \\log_3 x$. (i) Solve $j(\\theta) = 0$ for values of $\\theta$ in the interval $[0, 2\\pi)$. (ii) Solve $q(x) = 2$ for values of $x$ in the domain of $q$.',
        rubric: [
          { id: 'b1', label: '1 pt — (i) Solutions to $j(\\theta) = 0$', description: '$(2\\sin\\theta - 1)(\\sin\\theta + 1) = 0$, so $\\sin\\theta = \\frac{1}{2}$ or $\\sin\\theta = -1$, giving $\\theta = \\frac{\\pi}{6}, \\frac{5\\pi}{6}, \\frac{3\\pi}{2}$.' },
          { id: 'b2', label: '1 pt — (ii) Solution to $q(x) = 2$', description: '$\\log_3(x(x + 8)) = 2$, so $x^2 + 8x - 9 = 0$ and $(x + 9)(x - 1) = 0$. The domain of $q$ is $x > 0$, so $x = -9$ is rejected and the only solution is $x = 1$.' },
        ],
      },
      {
        letter: 'C',
        question: 'The function $m$ is given by $m(x) = 2\\sin(3x) + 1$. Find all input values in the domain of $m$ that yield an output value of 2.',
        rubric: [
          { id: 'c1', label: '1 pt — Solutions in one period', description: '$2\\sin(3x) + 1 = 2$ gives $\\sin(3x) = \\frac{1}{2}$, so $3x = \\frac{\\pi}{6}$ or $3x = \\frac{5\\pi}{6}$ in one cycle, giving $x = \\frac{\\pi}{18}$ and $x = \\frac{5\\pi}{18}$.' },
          { id: 'c2', label: '1 pt — All solutions', description: 'The period of $m$ is $\\frac{2\\pi}{3}$, so all solutions are $x = \\frac{\\pi}{18} + \\frac{2\\pi}{3}k$ and $x = \\frac{5\\pi}{18} + \\frac{2\\pi}{3}k$ for any integer $k$.' },
        ],
      },
    ],
  },
]
