import type { SAQItem } from '@/components/FullLengthPracticeExam'
import { Q3_FIGURE } from './figures'

/**
 * AP Precalculus practice exam, form 3: 4 FRQs (May 2027 Section II), 6 points each.
 *   Part A (graphing calculator, 35 min): Q1 Function Concepts (exponential-decay table +
 *     cubic g), Q2 Modeling a Non-Periodic Context (tree height, logarithmic model).
 *   Part B (no calculator, 35 min): Q3 Modeling a Periodic Context (engine piston, with the
 *     graph in Q3_FIGURE), Q4 Symbolic Manipulations.
 * One RubricPoint = one point. Wording and data are distinct from the FRQ bank
 * (src/data/ap-precalc-frq/questions.ts) and from forms 1 and 2.
 */

export const FRQS: SAQItem[] = [
  /* ---- Q1: Function Concepts (graphing calculator) ---- */
  {
    type: 'saq',
    topic: 'frq-function-concepts',
    lesson: 'function-composition-inverses-precalc',
    ced: '2.7',
    prompt: `**Question 1 — Function Concepts (Graphing Calculator Required) (6 points)**

The function $f$ is defined and decreasing for $x \\ge 0$. The table shows $f(x)$ for selected values of $x$.

| $x$ | 0 | 1 | 2 | 3 | 4 |
|---|---|---|---|---|---|
| $f(x)$ | 80 | 40 | 20 | 10 | 5 |

The polynomial function $g$ is defined by $g(x) = x^3 - 7x + 6$.`,
    parts: [
      {
        letter: 'A',
        question: '(i) Let $h(x) = g(f(x))$. Find $h(3)$, or explain why $h(3)$ is undefined. Show the computation that leads to your answer. (ii) Find $f^{-1}(20)$, or explain why $f^{-1}(20)$ is undefined.',
        rubric: [
          { id: 'a1', label: '1 pt — (i) Value of $h(3)$ with work', description: '$h(3) = g(f(3)) = g(10) = 1000 - 70 + 6 = 936$. Computing $f(g(3)) = f(12)$, which the table does not give, does not earn the point.' },
          { id: 'a2', label: '1 pt — (ii) Value of $f^{-1}(20)$', description: 'A decreasing function is one-to-one, so $f^{-1}$ exists. The table gives $f(2) = 20$, so $f^{-1}(20) = 2$.' },
        ],
      },
      {
        letter: 'B',
        question: '(i) Find all real values of $x$ for which $g(x) = 2$. Give decimal approximations to three places. (ii) State the end behavior of $g$ as $x$ increases without bound, using limit notation.',
        rubric: [
          { id: 'b1', label: '1 pt — (i) All three solutions', description: 'Graphing $y = g(x)$ with $y = 2$ (or finding the zeros of $x^3 - 7x + 4$) gives three intersections: $x \\approx -2.895$, $x \\approx 0.603$ and $x \\approx 2.292$. All three are required (accept $\\pm 0.001$).' },
          { id: 'b2', label: '1 pt — (ii) End behavior in limit notation', description: '$g$ has odd degree and a positive leading coefficient, so $\\displaystyle\\lim_{x \\to \\infty} g(x) = \\infty$.' },
        ],
      },
      {
        letter: 'C',
        question: '(i) Decide which type of function best fits the values of $f$ in the table: linear, quadratic, exponential, or logarithmic. (ii) Support your choice in part (i) with a statement about how the output values change as the input increases by equal steps, citing values from the table.',
        rubric: [
          { id: 'c1', label: '1 pt — (i) Function type', description: 'Exponential.' },
          { id: 'c2', label: '1 pt — (ii) Justification from the table', description: 'Each time $x$ increases by $1$, the output is multiplied by the same factor, $\\frac{1}{2}$: $\\frac{40}{80} = \\frac{20}{40} = \\frac{10}{20} = \\frac{5}{10} = \\frac{1}{2}$. Outputs that change proportionally over equal-length input intervals are the defining property of an exponential function. (The differences $-40, -20, -10, -5$ are not constant and do not change by a constant amount, so $f$ is neither linear nor quadratic.)' },
        ],
      },
    ],
    sampleResponse:
      '(A)(i) h(3) = g(f(3)) = g(10) = 10³ − 7(10) + 6 = 1000 − 70 + 6 = 936. (ii) f is decreasing, hence one-to-one, so f⁻¹ exists; since f(2) = 20, f⁻¹(20) = 2. (B)(i) x³ − 7x + 6 = 2 ⇒ x³ − 7x + 4 = 0; graphing gives x ≈ −2.895, x ≈ 0.603, x ≈ 2.292. (ii) lim_{x→∞} g(x) = ∞ (odd degree, positive leading coefficient). (C)(i) Exponential. (ii) For each increase of 1 in x, the output is halved: 80 → 40 → 20 → 10 → 5, a constant ratio of 1/2 over equal input intervals, which is how an exponential function changes.',
  },

  /* ---- Q2: Modeling a Non-Periodic Context (graphing calculator) ---- */
  {
    type: 'saq',
    topic: 'frq-modeling',
    lesson: 'exponential-logarithmic-modeling-precalc',
    ced: '2.14',
    prompt: `**Question 2 — Modeling a Non-Periodic Context (Graphing Calculator Required) (6 points)**

A nursery plants a young tree and records its height. The tree is $2.0$ meters tall one year after planting ($t = 1$), $4.5$ meters tall four years after planting ($t = 4$), and $6.0$ meters tall nine years after planting ($t = 9$), where $t$ is the number of years since planting.

The height of the tree, in meters, can be modeled by the function $H$ defined by $H(t) = a + b\\ln t$ for $t \\ge 1$.`,
    parts: [
      {
        letter: 'A',
        question: '(i) Using the heights at $t = 1$ and $t = 9$, write a system of two equations that can be solved for the constants $a$ and $b$. (ii) Solve your system for $a$ and $b$. Give $b$ as a decimal to three places.',
        rubric: [
          { id: 'a1', label: '1 pt — (i) System of equations', description: '$a + b\\ln 1 = 2.0$ and $a + b\\ln 9 = 6.0$.' },
          { id: 'a2', label: '1 pt — (ii) Values of $a$ and $b$', description: 'Since $\\ln 1 = 0$, $a = 2.0$. Then $b\\ln 9 = 4.0$, so $b = \\dfrac{4.0}{\\ln 9} \\approx 1.820$. (The model $H(t) \\approx 2.0 + 1.820\\ln t$ gives $H(4) \\approx 4.52$, consistent with the middle data value.)' },
        ],
      },
      {
        letter: 'B',
        question: '(i) Compute the average rate of change of the height of the tree over the interval $1 \\le t \\le 9$. Include units. (ii) Explain what the number you found in part (i) tells you about the tree in this situation.',
        rubric: [
          { id: 'b1', label: '1 pt — (i) Average rate of change with units', description: '$\\dfrac{H(9) - H(1)}{9 - 1} = \\dfrac{6.0 - 2.0}{8} = 0.5$ meter per year.' },
          { id: 'b2', label: '1 pt — (ii) Meaning in context', description: 'Between one and nine years after planting, the tree grew an average of $0.5$ meter (half a meter) in height each year.' },
        ],
      },
      {
        letter: 'C',
        question: 'The nursery moves a tree to a permanent site once it is $7$ meters tall, so the model $H$ is used only until the predicted height reaches $7$ meters. (i) Write an equation whose solution is the time $t$, in years, at which the model predicts a height of $7$ meters, and solve it. Give $t$ as a decimal to one place. (ii) Using your answer to part (i), state a domain for $H$ that is appropriate in this situation, and explain your reasoning.',
        rubric: [
          { id: 'c1', label: '1 pt — (i) Equation and value of $t$', description: '$2.0 + 1.820\\ln t = 7$, so $\\ln t = \\dfrac{5}{1.820} \\approx 2.747$ and $t = e^{2.747} \\approx 15.6$ years (accept $15.5$ to $15.7$; exactly $t = 9^{5/4}$).' },
          { id: 'c2', label: '1 pt — (ii) Domain with reasoning', description: '$H$ is increasing, so the predicted height is at most $7$ meters only until $t \\approx 15.6$. The first measurement is at $t = 1$ (and $\\ln t$ is not defined for $t \\le 0$), so an appropriate domain is $1 \\le t \\le 15.6$ years. The lower endpoint must be $1$, not $0$; an upper endpoint that matches the student\'s own value from part (i) earns the point.' },
        ],
      },
    ],
    sampleResponse:
      '(A)(i) a + b ln 1 = 2.0 and a + b ln 9 = 6.0. (ii) ln 1 = 0 gives a = 2.0; then b = 4.0/ln 9 ≈ 1.820. (B)(i) (6.0 − 2.0)/(9 − 1) = 0.5 meter per year. (ii) From year 1 to year 9 the tree grew half a meter per year on average. (C)(i) 2.0 + 1.820 ln t = 7 ⇒ ln t = 5/1.820 ≈ 2.747 ⇒ t = e^{2.747} ≈ 15.6 years. (ii) The model is increasing, so the predicted height stays at or below 7 meters only until t ≈ 15.6; the data begin at t = 1. An appropriate domain is 1 ≤ t ≤ 15.6 years.',
  },

  /* ---- Q3: Modeling a Periodic Context (no calculator) ---- */
  {
    type: 'saq',
    topic: 'frq-periodic-modeling',
    lesson: 'graphing-trig-functions',
    ced: '3.7',
    figureHtml: Q3_FIGURE,
    prompt: `**Question 3 — Modeling a Periodic Context (No Calculator) (6 points)**

The top of a piston in an engine moves up and down. Its distance above the crankshaft is greatest, $30$ centimeters, at time $t = 0$ milliseconds, and least, $10$ centimeters, at $t = 20$ milliseconds, and the motion repeats every $40$ milliseconds.

The sinusoidal function $D$ gives the distance of the top of the piston above the crankshaft, in centimeters, at time $t$ milliseconds. The figure shows the graph of $D$ for two full cycles, $0 \\le t \\le 80$, with its midline dashed.`,
    parts: [
      {
        letter: 'A',
        question: 'Five points on the graph of $D$ are labeled in the figure. From left to right they are $F$ (at $t = 0$), $G$ (the first point on the midline), $J$ (the first minimum), $K$ (the next point on the midline), and $P$ (the next maximum). Give the coordinates $(t, D(t))$ of each of the five points.',
        rubric: [
          { id: 'a1', label: '1 pt — $D(t)$-coordinates of all five points', description: '$F$: $30$, $G$: $20$, $J$: $10$, $K$: $20$, $P$: $30$ (the midline is $\\frac{30 + 10}{2} = 20$).' },
          { id: 'a2', label: '1 pt — $t$-coordinates of all five points', description: '$F = (0, 30)$, $G = (10, 20)$, $J = (20, 10)$, $K = (30, 20)$, $P = (40, 30)$: the points are a quarter-period, $10$ milliseconds, apart.' },
        ],
      },
      {
        letter: 'B',
        question: 'Write an expression for $D(t)$ in the form $D(t) = a\\sin\\big(b(t + c)\\big) + d$. Give values for the constants $a$, $b$, $c$, and $d$.',
        rubric: [
          { id: 'b1', label: '1 pt — Amplitude and midline ($a$ and $d$)', description: 'Amplitude $a = \\frac{30 - 10}{2} = 10$ and midline $d = 20$.' },
          { id: 'b2', label: '1 pt — Period and phase ($b$ and $c$)', description: 'Period $40$ gives $b = \\dfrac{2\\pi}{40} = \\dfrac{\\pi}{20}$. A sine curve reaches its maximum a quarter-period after it crosses its midline going up, so the maximum at $t = 0$ means the midline crossing is at $t = -10$ and $c = 10$: $D(t) = 10\\sin\\left(\\dfrac{\\pi}{20}(t + 10)\\right) + 20$. Equivalent forms earn the point (for example $a = -10$ with $c = -10$, or $c = 10 - 40k$).' },
        ],
      },
      {
        letter: 'C',
        question: 'Let $t_1$ be the $t$-coordinate of $K$ and $t_2$ the $t$-coordinate of $P$. (i) On the interval $t_1 < t < t_2$, is $D$ increasing or decreasing, and is the graph of $D$ above or below its midline? (ii) On the same interval, is the graph of $D$ concave up or concave down, and is the rate of change of $D$ increasing or decreasing? Explain your answer in terms of the motion of the piston.',
        rubric: [
          { id: 'c1', label: '1 pt — (i) Increasing and above the midline', description: 'From $K = (30, 20)$ to $P = (40, 30)$ the piston rises from its middle position to its highest position, so $D$ is increasing and the graph is above the midline.' },
          { id: 'c2', label: '1 pt — (ii) Concave down; rate of change decreasing', description: 'The graph is concave down on $(30, 40)$. The piston moves upward fastest as it passes its middle position ($K$) and slows to a momentary stop at the top ($P$), so the rate of change of $D$ falls from its greatest value to $0$: it is decreasing. Both the concavity and the behavior of the rate of change, with the explanation in terms of the motion, are needed for the point.' },
        ],
      },
    ],
    sampleResponse:
      '(A) F = (0, 30), G = (10, 20), J = (20, 10), K = (30, 20), P = (40, 30). (B) a = 10, d = 20, b = 2π/40 = π/20, and c = 10 so that the sine reaches its maximum at t = 0: D(t) = 10 sin(π(t + 10)/20) + 20. (C)(i) Between K and P the piston rises from its middle position to its highest position, so D is increasing and the graph is above the midline. (ii) The graph is concave down there. The piston rises fastest as it passes the middle position and slows to a stop at the top, so the rate of change of D decreases from its largest value to 0.',
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
        question: 'The functions $g$ and $k$ are defined by $g(x) = 3\\ln x - \\ln(9x) + 2\\ln 3$ for $x > 0$ and $k(x) = \\dfrac{\\cos(2x)}{\\cos x - \\sin x}$. (i) Write $g(x)$ as a single natural logarithm, $\\ln(\\text{expression})$. (ii) Write $k(x)$ as an expression with no fraction and no double angle.',
        rubric: [
          { id: 'a1', label: '1 pt — (i) Expression for $g(x)$', description: '$g(x) = \\ln\\left(x^3\\right) - \\ln(9x) + \\ln 9 = \\ln\\left(\\dfrac{9x^3}{9x}\\right) = \\ln\\left(x^2\\right)$. The equivalent $2\\ln x$ is not a single logarithm and does not earn the point.' },
          { id: 'a2', label: '1 pt — (ii) Expression for $k(x)$', description: 'Using $\\cos(2x) = \\cos^2 x - \\sin^2 x = (\\cos x - \\sin x)(\\cos x + \\sin x)$, $k(x) = \\cos x + \\sin x$ wherever $\\cos x \\ne \\sin x$.' },
        ],
      },
      {
        letter: 'B',
        question: '(i) Solve $\\tan^2\\theta - 3 = 0$ for $\\theta$ in the interval $[0, 2\\pi)$. (ii) Solve $\\ln(x + 4) + \\ln(x - 2) = \\ln 16$ for all values of $x$ in the domain of the left-hand side.',
        rubric: [
          { id: 'b1', label: '1 pt — (i) All four solutions', description: '$\\tan\\theta = \\pm\\sqrt{3}$, so the reference angle is $\\frac{\\pi}{3}$ and $\\theta = \\dfrac{\\pi}{3}, \\dfrac{2\\pi}{3}, \\dfrac{4\\pi}{3}, \\dfrac{5\\pi}{3}$. Keeping only $\\tan\\theta = \\sqrt{3}$ (two solutions) does not earn the point.' },
          { id: 'b2', label: '1 pt — (ii) Solution with the extraneous value rejected', description: '$\\ln\\big((x + 4)(x - 2)\\big) = \\ln 16$ gives $x^2 + 2x - 8 = 16$, so $x^2 + 2x - 24 = (x + 6)(x - 4) = 0$. The domain requires $x > 2$, so $x = -6$ is rejected and the only solution is $x = 4$.' },
        ],
      },
      {
        letter: 'C',
        question: 'The function $m$ is defined by $m(x) = 4\\sin\\left(\\dfrac{x}{2}\\right) - 2$. Determine all real values of $x$ for which $m(x) = 0$.',
        rubric: [
          { id: 'c1', label: '1 pt — Base solutions', description: '$4\\sin\\left(\\frac{x}{2}\\right) - 2 = 0$ gives $\\sin\\left(\\frac{x}{2}\\right) = \\frac{1}{2}$, so $\\frac{x}{2} = \\dfrac{\\pi}{6}$ or $\\frac{x}{2} = \\dfrac{5\\pi}{6}$ in one cycle, that is $x = \\dfrac{\\pi}{3}$ or $x = \\dfrac{5\\pi}{3}$.' },
          { id: 'c2', label: '1 pt — All solutions', description: 'Because $\\sin\\left(\\frac{x}{2}\\right)$ has period $4\\pi$, all solutions are $x = \\dfrac{\\pi}{3} + 4k\\pi$ and $x = \\dfrac{5\\pi}{3} + 4k\\pi$ for all integers $k$. A correct general solution written directly earns both points; writing a period of $2\\pi$ does not earn this point.' },
        ],
      },
    ],
    sampleResponse:
      '(A)(i) g(x) = ln(x³) − ln(9x) + ln 9 = ln(9x³/(9x)) = ln(x²). (ii) cos(2x) = cos²x − sin²x = (cos x − sin x)(cos x + sin x), so k(x) = cos x + sin x (for cos x ≠ sin x). (B)(i) tan θ = ±√3 ⇒ θ = π/3, 2π/3, 4π/3, 5π/3. (ii) ln((x + 4)(x − 2)) = ln 16 ⇒ x² + 2x − 8 = 16 ⇒ (x + 6)(x − 4) = 0; x must exceed 2, so x = 4. (C) sin(x/2) = 1/2 ⇒ x/2 = π/6 + 2πk or 5π/6 + 2πk ⇒ x = π/3 + 4πk or x = 5π/3 + 4πk for all integers k.',
  },
]
