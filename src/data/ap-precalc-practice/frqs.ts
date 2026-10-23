import type { SAQItem } from '@/components/FullLengthPracticeExam'
import { Q3_FIGURE } from './figures'

/**
 * AP Precalculus practice exam, form 1: 4 FRQs in 70 minutes total, in the May 2027 format.
 *   Part A (graphing calculator required, 35 min): Q1 Function Concepts, Q2 Modeling a Non-Periodic Context
 *   Part B (no calculator, 35 min): Q3 Modeling a Periodic Context, Q4 Symbolic Manipulations
 *
 * Each FRQ is worth 6 points, itemized below so the self-graded total matches the AP rubric.
 * Q2 follows the 2026–27 structure: Part B(iii) was removed, and Part C now asks students to write and solve
 * an equation for the input value at a stated threshold and use it to justify a domain restriction for the model.
 * Out of scope since the 2026–27 CED: whether an interval of increase/decrease is open or closed, so either earns credit.
 * Oct 2026 (Wave 3 G2): Q1, Q2 and Q4 reworded so they no longer repeat the FRQ bank's phrasing (the data
 * were already distinct); Q3 now renders the graph its Part A reads from (Q3_FIGURE, SAQItem.figureHtml).
 */

export const FRQS: SAQItem[] = [
  /* ---- Q1: Function Concepts (graphing calculator) ---- */
  {
    type: 'saq',
    topic: 'frq-function-concepts',
    lesson: 'function-composition-inverses-precalc',
    ced: '2.7',
    prompt: `**Question 1 — Function Concepts (Graphing Calculator Required) (6 points)**

Selected values of an increasing function $f$, defined for $x \\geq 0$, are given in the table.

| $x$ | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|
| $f(x)$ | 3 | 6 | 12 | 24 | 48 |

Let $g$ be the rational function
$$g(x) = \\dfrac{2x^2 - 7x + 3}{x^2 - x - 6}.$$`,
    parts: [
      {
        letter: 'A',
        question: '(i) Define $h$ by $h(x) = g(f(x))$. Compute $h(2)$, or state that $h(2)$ is undefined and say why. Show your work. (ii) Give the value of $f^{-1}(24)$, or state that it is undefined and say why.',
        rubric: [
          { id: 'a1', label: '1 pt — (i) Value of $h(2)$ with work', description: '$h(2) = g(f(2)) = g(6) = \\dfrac{2(36) - 42 + 3}{36 - 6 - 6} = \\dfrac{33}{24} = \\dfrac{11}{8} = 1.375$ (either form). Evaluating $g$ at $2$ instead of at $f(2) = 6$ does not earn the point.' },
          { id: 'a2', label: '1 pt — (ii) Value of $f^{-1}(24)$', description: 'Because $f$ is increasing it is one-to-one, so $f^{-1}$ exists; the table gives $f(4) = 24$, so $f^{-1}(24) = 4$.' },
        ],
      },
      {
        letter: 'B',
        question: '(i) For what values of $x$, if any, is $g(x) = 1$? If there are none, explain why. (ii) Use limit notation to state what happens to $g(x)$ as $x$ decreases without bound.',
        rubric: [
          { id: 'b1', label: '1 pt — (i) Conclusion with reasoning', description: 'Factoring gives $g(x) = \\dfrac{(2x - 1)(x - 3)}{(x - 3)(x + 2)}$. Setting $\\dfrac{2x - 1}{x + 2} = 1$ gives $x = 3$, but $g(3)$ is undefined (the graph has a hole at $(3, 1)$), so there is no value of $x$ for which $g(x) = 1$. Answering $x = 3$ without rejecting it does not earn the point.' },
          { id: 'b2', label: '1 pt — (ii) End behavior in limit notation', description: 'The numerator and denominator both have degree 2 with leading coefficients 2 and 1, so $\\displaystyle\\lim_{x \\to -\\infty} g(x) = 2$.' },
        ],
      },
      {
        letter: 'C',
        question: '(i) Which family of functions, linear, quadratic, exponential, or logarithmic, best fits the values of $f$? (ii) Support your answer by describing how the output values in the table change as the input increases by equal steps. Cite specific values.',
        rubric: [
          { id: 'c1', label: '1 pt — (i) Function type', description: '$f$ is best modeled by an exponential function.' },
          { id: 'c2', label: '1 pt — (ii) Reason from the table', description: 'Over consecutive input intervals of length $1$, the output values change proportionally: $\\frac{6}{3} = \\frac{12}{6} = \\frac{24}{12} = \\frac{48}{24} = 2$. A constant ratio of outputs over equal-length input intervals is the signature of an exponential function. (The differences $3, 6, 12, 24$ are neither constant nor changing by a constant amount, so $f$ is neither linear nor quadratic.)' },
        ],
      },
    ],
    sampleResponse:
      '(A)(i) h(2) = g(f(2)) = g(6) = (72 − 42 + 3)/(36 − 6 − 6) = 33/24 = 1.375. (ii) f is increasing, so it is one-to-one and f⁻¹ exists; f(4) = 24, so f⁻¹(24) = 4. (B)(i) g(x) = (2x − 1)(x − 3)/((x − 3)(x + 2)) = (2x − 1)/(x + 2) for x ≠ 3. Setting (2x − 1)/(x + 2) = 1 gives 2x − 1 = x + 2, so x = 3, but g(3) is undefined (hole at (3, 1)). There is no x with g(x) = 1. (ii) Equal degrees with leading coefficients 2 and 1: lim_{x→−∞} g(x) = 2. (C)(i) Exponential. (ii) Each time x increases by 1, the output doubles: 3 → 6 → 12 → 24 → 48, a constant ratio of 2, which is how an exponential function changes.',
  },

  /* ---- Q2: Modeling a Non-Periodic Context (graphing calculator) ---- */
  {
    type: 'saq',
    topic: 'frq-modeling',
    lesson: 'exponential-logarithmic-modeling-precalc',
    ced: '2.5',
    prompt: `**Question 2 — Modeling a Non-Periodic Context (Graphing Calculator Required) (6 points)**

The population of a small town was 1,800 in 2010, 2,400 in 2015, and 3,200 in 2020. Let $t$ be the number of years after 2010, so these values correspond to $t = 0$, $t = 5$, and $t = 10$.

The population $t$ years after 2010 is modeled by the function $P$ defined by $P(t) = a \\cdot b^t$.`,
    parts: [
      {
        letter: 'A',
        question: '(i) From the populations in 2010 and 2020, write two equations in the constants $a$ and $b$. (ii) Solve the equations for $a$ and $b$. Give $b$ as a decimal to three places.',
        rubric: [
          { id: 'a1', label: '1 pt — (i) Two equations', description: '$a \\cdot b^0 = 1800$ and $a \\cdot b^{10} = 3200$.' },
          { id: 'a2', label: '1 pt — (ii) Values of $a$ and $b$', description: '$a = 1800$, and $b^{10} = \\dfrac{3200}{1800} = \\dfrac{16}{9}$, so $b = (16/9)^{1/10} \\approx 1.059$. Model: $P(t) \\approx 1800(1.059)^t$, which also gives $P(5) \\approx 2400$. (Keep the unrounded $b$ for part (c).)' },
        ],
      },
      {
        letter: 'B',
        question: '(i) Find the average rate of change of the population over $0 \\le t \\le 10$. Include units and show the computation. (ii) State what this value tells you about the town during that decade.',
        rubric: [
          { id: 'b1', label: '1 pt — (i) Average rate of change with units', description: '$\\dfrac{P(10) - P(0)}{10 - 0} = \\dfrac{3200 - 1800}{10} = 140$ people per year.' },
          { id: 'b2', label: '1 pt — (ii) Meaning in context', description: 'From 2010 to 2020, the town\'s population increased, on average, by 140 people per year.' },
        ],
      },
      {
        letter: 'C',
        question: 'The town\'s water system can serve at most 6,000 people, so the planners rely on the model $P$ only until the predicted population reaches 6,000. (i) Write an equation whose solution is the time $t$, in years, at which the model predicts 6,000 people, and solve it. Give $t$ as a decimal to three places. (ii) Use the value from part (i) to state an appropriate domain for $P$, and explain your reasoning in context.',
        rubric: [
          { id: 'c1', label: '1 pt — (i) Equation with value of $t$', description: '$1800\\,b^t = 6000$ with $b = (16/9)^{1/10}$, so $b^t = \\dfrac{10}{3}$ and $t = \\dfrac{10\\ln(10/3)}{\\ln(16/9)} \\approx 20.925$ years. Accept $20.92$ to $21.01$ (the rounded $b = 1.059$ gives $21.003$).' },
          { id: 'c2', label: '1 pt — (ii) Domain with reasoning', description: 'The model is appropriate only while the predicted population is at most 6,000, which the model reaches at $t \\approx 20.925$ (late 2030). The data start at $t = 0$ (2010), so an appropriate domain for $P$ is $0 \\leq t \\leq 20.925$ years (an upper endpoint that matches the student\'s own value from part (i) earns the point).' },
        ],
      },
    ],
    sampleResponse:
      '(A)(i) a·b⁰ = 1800 and a·b¹⁰ = 3200. (ii) a = 1800; b¹⁰ = 3200/1800 = 16/9, so b = (16/9)^(1/10) ≈ 1.059. (B)(i) (3200 − 1800)/(10 − 0) = 140 people per year. (ii) Between 2010 and 2020 the population grew by an average of 140 people each year. (C)(i) 1800(1.059)^t = 6000 ⇒ (1.059)^t = 10/3 ⇒ t = ln(10/3)/ln(1.0592) ≈ 20.925 years. (ii) P is increasing, so the predicted population stays at or below 6,000 only until t ≈ 20.925; the data begin at t = 0. An appropriate domain is 0 ≤ t ≤ 20.925 years.',
  },

  /* ---- Q3: Modeling a Periodic Context (no calculator) ---- */
  {
    type: 'saq',
    topic: 'frq-periodic-modeling',
    lesson: 'graphing-trig-functions',
    ced: '3.7',
    figureHtml: Q3_FIGURE,
    prompt: `**Question 3 — Modeling a Periodic Context (No Calculator) (6 points)**

The temperature inside a greenhouse rises and falls in a daily pattern. The temperature is at its minimum of 54°F at midnight ($h = 0$) and at its maximum of 82°F at noon ($h = 12$), and the pattern repeats every 24 hours.

The sinusoidal function $T$ models the temperature, in degrees Fahrenheit, as a function of $h$, the number of hours after midnight. The figure shows the graph of $T$ for two full days, $0 \\leq h \\leq 48$, with its midline dashed.`,
    parts: [
      {
        letter: 'A',
        question: 'Five points on the graph of $T$ are labeled in the figure. From left to right they are $F$ (at $h = 0$), $G$ (the first point on the midline), $J$ (the first maximum), $K$ (the next point on the midline), and $P$ (the next minimum). Give the coordinates $(h, T(h))$ of each of the five points.',
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
          { id: 'b2', label: '1 pt — Horizontal transformations: $b$ and $c$', description: 'Period 24 gives $b = \\frac{2\\pi}{24} = \\frac{\\pi}{12}$. The graph crosses the midline going up at $h = 6$, so $c = -6$: $T(h) = 14\\sin\\left(\\frac{\\pi}{12}(h - 6)\\right) + 68$. Other correct forms earn the point (for example $c = 18$, any $c = -6 + 24n$, or $a = -14$ with $c = 6 + 24n$).' },
        ],
      },
      {
        letter: 'C',
        question: 'Let $h_1$ be the $h$-coordinate of $K$ and $h_2$ the $h$-coordinate of $P$. (i) On the interval $h_1 < h < h_2$, is $T$ increasing or decreasing, and is the graph of $T$ above or below its midline? (ii) On the same interval, is the graph of $T$ concave up or concave down, and is the rate of change of $T$ increasing or decreasing? Explain in terms of the temperature.',
        rubric: [
          { id: 'c1', label: '1 pt — (i) Decreasing and below the midline', description: 'From $K = (18, 68)$ to $P = (24, 54)$ the temperature falls from the midline to the minimum, so $T$ is decreasing and the graph is below its midline.' },
          { id: 'c2', label: '1 pt — (ii) Concave up; rate of change increasing', description: 'The graph of $T$ is concave up on $(h_1, h_2)$. The temperature is falling fastest at $K$ (the midline crossing) and stops falling at the minimum $P$, so the rate of change of $T$ rises from its most negative value to $0$: it is increasing. Both the concavity and the behavior of the rate of change, with the explanation in context, are needed for the point.' },
        ],
      },
    ],
    sampleResponse:
      '(A) F = (0, 54), G = (6, 68), J = (12, 82), K = (18, 68), P = (24, 54). (B) a = 14 (half of 82 − 54), d = 68 (midline), b = 2π/24 = π/12 (period 24), c = −6 because the graph crosses the midline going up at h = 6: T(h) = 14 sin(π(h − 6)/12) + 68. (C)(i) Between K and P the temperature drops from the midline value to the daily minimum, so T is decreasing and the graph is below the midline. (ii) The graph is concave up there. The temperature falls fastest at K and levels off at the minimum P, so the rate of change of T increases from its most negative value toward 0.',
  },

  /* ---- Q4: Symbolic Manipulations (no calculator) ---- */
  {
    type: 'saq',
    topic: 'frq-symbolic',
    lesson: 'trigonometric-identities-precalc',
    ced: '3.12',
    prompt: `**Question 4 — Symbolic Manipulations (No Calculator) (6 points)**

Angle measures are in radians. Solutions to equations must be real numbers. Give exact values wherever an exact value can be found without a calculator, and show the work that leads to each answer.`,
    parts: [
      {
        letter: 'A',
        question: 'Let $g(x) = \\ln(x^2) - 5\\ln x + 2\\ln 2$ for $x > 0$, and let $k(x) = \\dfrac{\\sec x - \\cos x}{\\tan x}$. (i) Express $g(x)$ as one natural logarithm, $\\ln(\\text{expression})$, with no negative exponents inside the logarithm. (ii) Simplify $k(x)$ to an expression that contains $\\sin x$ exactly once and no other trigonometric function.',
        rubric: [
          { id: 'a1', label: '1 pt — (i) Expression for $g(x)$', description: '$g(x) = \\ln(x^2) - \\ln(x^5) + \\ln 4 = \\ln\\left(\\dfrac{4x^2}{x^5}\\right) = \\ln\\left(\\dfrac{4}{x^3}\\right)$, for $x > 0$.' },
          { id: 'a2', label: '1 pt — (ii) Expression for $k(x)$', description: '$\\sec x - \\cos x = \\dfrac{1 - \\cos^2 x}{\\cos x} = \\dfrac{\\sin^2 x}{\\cos x}$, and dividing by $\\tan x = \\dfrac{\\sin x}{\\cos x}$ gives $k(x) = \\sin x$, where $\\cos x \\neq 0$ and $\\sin x \\neq 0$.' },
        ],
      },
      {
        letter: 'B',
        question: 'Let $j(\\theta) = 2\\sin^2\\theta + \\sin\\theta - 1$ and $q(x) = \\log_3(x + 8) + \\log_3 x$. (i) Find every $\\theta$ in $[0, 2\\pi)$ for which $j(\\theta) = 0$. (ii) Find every $x$ in the domain of $q$ for which $q(x) = 2$.',
        rubric: [
          { id: 'b1', label: '1 pt — (i) Solutions to $j(\\theta) = 0$', description: '$(2\\sin\\theta - 1)(\\sin\\theta + 1) = 0$, so $\\sin\\theta = \\frac{1}{2}$ or $\\sin\\theta = -1$, giving $\\theta = \\frac{\\pi}{6}, \\frac{5\\pi}{6}, \\frac{3\\pi}{2}$.' },
          { id: 'b2', label: '1 pt — (ii) Solution to $q(x) = 2$', description: '$\\log_3(x(x + 8)) = 2$, so $x^2 + 8x - 9 = 0$ and $(x + 9)(x - 1) = 0$. The domain of $q$ is $x > 0$, so $x = -9$ is rejected and the only solution is $x = 1$.' },
        ],
      },
      {
        letter: 'C',
        question: 'Let $m(x) = 2\\sin(3x) + 1$. Find all real values of $x$ for which $m(x) = 2$.',
        rubric: [
          { id: 'c1', label: '1 pt — Solutions in one period', description: '$2\\sin(3x) + 1 = 2$ gives $\\sin(3x) = \\frac{1}{2}$, so $3x = \\frac{\\pi}{6}$ or $3x = \\frac{5\\pi}{6}$ in one cycle, giving $x = \\frac{\\pi}{18}$ and $x = \\frac{5\\pi}{18}$.' },
          { id: 'c2', label: '1 pt — All solutions', description: 'The period of $m$ is $\\frac{2\\pi}{3}$, so all solutions are $x = \\frac{\\pi}{18} + \\frac{2\\pi}{3}k$ and $x = \\frac{5\\pi}{18} + \\frac{2\\pi}{3}k$ for any integer $k$. A correct general solution written directly earns both points.' },
        ],
      },
    ],
    sampleResponse:
      '(A)(i) g(x) = ln(x²) − ln(x⁵) + ln 4 = ln(4x²/x⁵) = ln(4/x³). (ii) sec x − cos x = (1 − cos²x)/cos x = sin²x/cos x; dividing by tan x = sin x/cos x gives k(x) = sin x. (B)(i) (2 sin θ − 1)(sin θ + 1) = 0 ⇒ sin θ = 1/2 or sin θ = −1 ⇒ θ = π/6, 5π/6, 3π/2. (ii) log₃(x(x + 8)) = 2 ⇒ x² + 8x − 9 = 0 ⇒ (x + 9)(x − 1) = 0; x must be positive, so x = 1. (C) sin(3x) = 1/2 ⇒ 3x = π/6 + 2πk or 5π/6 + 2πk ⇒ x = π/18 + 2πk/3 or x = 5π/18 + 2πk/3 for all integers k.',
  },
]
