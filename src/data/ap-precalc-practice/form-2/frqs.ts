import type { SAQItem } from '@/components/FullLengthPracticeExam'
import { Q3_FIGURE } from './figures'

/**
 * AP Precalculus practice exam, form 2: 4 FRQs (May 2027 Section II), 6 points each.
 *   Part A (graphing calculator, 35 min): Q1 Function Concepts (quadratic table + rational g),
 *     Q2 Modeling a Non-Periodic Context (medication, exponential decay).
 *   Part B (no calculator, 35 min): Q3 Modeling a Periodic Context (paddle wheel, with the
 *     graph in Q3_FIGURE), Q4 Symbolic Manipulations.
 * One RubricPoint = one point. Wording and data are distinct from the FRQ bank
 * (src/data/ap-precalc-frq/questions.ts) and from forms 1 and 3.
 */

export const FRQS: SAQItem[] = [
  /* ---- Q1: Function Concepts (graphing calculator) ---- */
  {
    type: 'saq',
    topic: 'frq-function-concepts',
    lesson: 'function-composition-inverses-precalc',
    ced: '2.7',
    prompt: `**Question 1 — Function Concepts (Graphing Calculator Required) (6 points)**

The function $f$ is increasing for $x \\ge 0$. Selected values of $f(x)$ are shown in the table.

| $x$ | 2 | 4 | 6 | 8 | 10 |
|---|---|---|---|---|---|
| $f(x)$ | 1 | 7 | 17 | 31 | 49 |

Let $g$ be the function defined by
$$g(x) = \\dfrac{x^2 - 9}{x^2 - 4x + 3}.$$`,
    parts: [
      {
        letter: 'A',
        question: '(i) Let $h$ be the composite function defined by $h(x) = g(f(x))$. Evaluate $h(4)$, or explain why $h(4)$ does not exist. Show your work. (ii) Determine $f^{-1}(31)$, or explain why $f^{-1}(31)$ does not exist.',
        rubric: [
          { id: 'a1', label: '1 pt — (i) Value of $h(4)$ with work', description: '$h(4) = g(f(4)) = g(7) = \\dfrac{49 - 9}{49 - 28 + 3} = \\dfrac{40}{24} = \\dfrac{5}{3} \\approx 1.667$. Evaluating $g$ at $4$ instead of at $f(4) = 7$ does not earn the point.' },
          { id: 'a2', label: '1 pt — (ii) Value of $f^{-1}(31)$', description: 'Because $f$ is increasing it is one-to-one, so $f^{-1}$ exists; the table shows $f(8) = 31$, so $f^{-1}(31) = 8$. Answering $\\frac{1}{31}$ (the reciprocal) does not earn the point.' },
        ],
      },
      {
        letter: 'B',
        question: '(i) Solve the equation $g(x) = 2$. If the equation has no solution, say so and explain why. (ii) Describe the behavior of $g(x)$ as $x$ approaches $1$ from the left. Express your answer using limit notation.',
        rubric: [
          { id: 'b1', label: '1 pt — (i) Solution with the domain checked', description: 'Factoring, $g(x) = \\dfrac{(x - 3)(x + 3)}{(x - 1)(x - 3)} = \\dfrac{x + 3}{x - 1}$ for $x \\ne 1, 3$. Then $\\dfrac{x + 3}{x - 1} = 2$ gives $x + 3 = 2x - 2$, so $x = 5$. The point requires the solution $x = 5$ together with a check that it is in the domain (it is neither $1$ nor $3$, or $g(5) = \\frac{16}{8} = 2$).' },
          { id: 'b2', label: '1 pt — (ii) Limit from the left', description: 'Near $x = 1$, $g(x) = \\dfrac{x + 3}{x - 1}$ has numerator near $4 > 0$ and denominator approaching $0$ through negative values, so $\\displaystyle\\lim_{x \\to 1^-} g(x) = -\\infty$. Both the correct sign and limit notation are needed.' },
        ],
      },
      {
        letter: 'C',
        question: '(i) Which function type best fits the values of $f$ in the table: linear, quadratic, exponential, or logarithmic? (ii) Justify your choice in part (i) by describing how the output values of $f$ change as the input values increase by equal amounts. Use specific values from the table.',
        rubric: [
          { id: 'c1', label: '1 pt — (i) Function type', description: 'Quadratic.' },
          { id: 'c2', label: '1 pt — (ii) Justification from the table', description: 'As $x$ increases by $2$ each time, the outputs change by $7 - 1 = 6$, $17 - 7 = 10$, $31 - 17 = 14$ and $49 - 31 = 18$. These changes are not constant (so $f$ is not linear), but they increase by the constant amount $4$ each time: the rate of change of $f$ changes at a constant rate, which is the defining property of a quadratic function. (Ratios $7, \\frac{17}{7}, \\dots$ are not constant, so $f$ is not exponential.)' },
        ],
      },
    ],
    sampleResponse:
      '(A)(i) h(4) = g(f(4)) = g(7) = (49 − 9)/(49 − 28 + 3) = 40/24 = 5/3 ≈ 1.667. (ii) f is increasing, so it is one-to-one and f⁻¹ exists; f(8) = 31, so f⁻¹(31) = 8. (B)(i) g(x) = (x − 3)(x + 3)/((x − 1)(x − 3)) = (x + 3)/(x − 1) for x ≠ 3. Setting (x + 3)/(x − 1) = 2 gives x + 3 = 2x − 2, so x = 5; g(5) = 16/8 = 2, so x = 5 is the solution. (ii) As x → 1⁻, the numerator x + 3 → 4 and the denominator x − 1 → 0 through negative values, so lim_{x→1⁻} g(x) = −∞. (C)(i) Quadratic. (ii) For equal input steps of 2, the outputs change by 6, 10, 14, 18. The differences are not constant, so f is not linear, but each difference is 4 more than the previous one: the rate of change changes at a constant rate, so a quadratic model fits.',
  },

  /* ---- Q2: Modeling a Non-Periodic Context (graphing calculator) ---- */
  {
    type: 'saq',
    topic: 'frq-modeling',
    lesson: 'exponential-logarithmic-modeling-precalc',
    ced: '2.5',
    prompt: `**Question 2 — Modeling a Non-Periodic Context (Graphing Calculator Required) (6 points)**

A patient receives a single dose of a medication. The amount of the medication in the patient's bloodstream is $240$ milligrams immediately after the dose ($t = 0$), $190$ milligrams $1.5$ hours after the dose ($t = 1.5$), and $150$ milligrams $3$ hours after the dose ($t = 3$), where $t$ is the time in hours since the dose.

The amount of medication in the bloodstream, in milligrams, can be modeled by the function $M$ defined by $M(t) = a \\cdot b^{t}$.`,
    parts: [
      {
        letter: 'A',
        question: '(i) Using the amounts at $t = 0$ and $t = 3$, write a system of two equations that can be solved for the constants $a$ and $b$. (ii) Solve your system for $a$ and $b$. Give $b$ as a decimal to three places.',
        rubric: [
          { id: 'a1', label: '1 pt — (i) System of equations', description: '$a \\cdot b^0 = 240$ (or simply $a = 240$) and $a \\cdot b^3 = 150$.' },
          { id: 'a2', label: '1 pt — (ii) Values of $a$ and $b$', description: '$a = 240$; then $b^3 = \\dfrac{150}{240} = 0.625$, so $b = 0.625^{1/3} \\approx 0.855$. (The model $M(t) \\approx 240(0.855)^t$ gives $M(1.5) \\approx 189.7$, consistent with the third data value.)' },
        ],
      },
      {
        letter: 'B',
        question: '(i) Compute the average rate of change of the amount of medication in the bloodstream over the interval $0 \\le t \\le 3$. Include units. (ii) Explain what the number you found in part (i) tells you about the medication in this situation.',
        rubric: [
          { id: 'b1', label: '1 pt — (i) Average rate of change with units', description: '$\\dfrac{M(3) - M(0)}{3 - 0} = \\dfrac{150 - 240}{3} = -30$ milligrams per hour.' },
          { id: 'b2', label: '1 pt — (ii) Meaning in context', description: 'During the first $3$ hours after the dose, the amount of medication in the bloodstream decreased by an average of $30$ milligrams each hour. (The sign, the "on average" idea and the units or context are all needed.)' },
        ],
      },
      {
        letter: 'C',
        question: 'The medication is effective only while the amount in the bloodstream is at least $40$ milligrams, so the model $M$ is used only until the predicted amount falls to $40$ milligrams. (i) Write an equation whose solution is the time $t$, in hours, at which the model predicts $40$ milligrams, and solve it. Give $t$ as a decimal to three places. (ii) Using your answer to part (i), state a domain for $M$ that is appropriate in this situation, and explain your reasoning.',
        rubric: [
          { id: 'c1', label: '1 pt — (i) Equation and value of $t$', description: '$240(0.855)^t = 40$, so $(0.855)^t = \\dfrac{1}{6}$ and $t = \\dfrac{\\ln(1/6)}{\\ln 0.855} \\approx 11.44$ hours (accept $11.43$ to $11.45$; with the unrounded $b$, $t \\approx 11.437$).' },
          { id: 'c2', label: '1 pt — (ii) Domain with reasoning', description: '$M$ is decreasing, so the predicted amount is at least $40$ milligrams only from the dose until $t \\approx 11.44$. The dose is given at $t = 0$, so an appropriate domain is $0 \\le t \\le 11.44$ hours, the period during which the medication is effective. An upper endpoint that matches the student\'s own value from part (i) earns the point.' },
        ],
      },
    ],
    sampleResponse:
      '(A)(i) a·b⁰ = 240 and a·b³ = 150. (ii) a = 240, and b³ = 150/240 = 0.625, so b = 0.625^(1/3) ≈ 0.855. (B)(i) (150 − 240)/(3 − 0) = −30 milligrams per hour. (ii) Over the first 3 hours, the amount of medication in the bloodstream fell by 30 milligrams per hour on average. (C)(i) 240(0.855)^t = 40 ⇒ (0.855)^t = 1/6 ⇒ t = ln(1/6)/ln(0.855) ≈ 11.44 hours. (ii) The amount decreases over time, so it is at least 40 mg only up to t ≈ 11.44; the model starts at the dose (t = 0). An appropriate domain is 0 ≤ t ≤ 11.44 hours.',
  },

  /* ---- Q3: Modeling a Periodic Context (no calculator) ---- */
  {
    type: 'saq',
    topic: 'frq-periodic-modeling',
    lesson: 'graphing-trig-functions',
    ced: '3.7',
    figureHtml: Q3_FIGURE,
    prompt: `**Question 3 — Modeling a Periodic Context (No Calculator) (6 points)**

A point on the rim of a paddle wheel moves in a circle as the wheel turns at a constant rate. At time $t = 0$ seconds the point is at the height of the wheel's axle, $6$ meters above the water, and is moving upward. It reaches its highest point, $10$ meters above the water, at $t = 2$ seconds, and the wheel completes one full rotation every $8$ seconds.

The sinusoidal function $y$ gives the height of the point above the water, in meters, at time $t$ seconds. The figure shows the graph of $y$ for two full rotations, $0 \\le t \\le 16$, with its midline dashed.`,
    parts: [
      {
        letter: 'A',
        question: 'Five points on the graph of $y$ are labeled in the figure. From left to right they are $F$ (at $t = 0$), $G$ (the first maximum), $J$ (the next point on the midline), $K$ (the first minimum), and $P$ (the next point on the midline). Give the coordinates $(t, y(t))$ of each of the five points.',
        rubric: [
          { id: 'a1', label: '1 pt — $y$-coordinates of all five points', description: '$F$: $6$, $G$: $10$, $J$: $6$, $K$: $2$, $P$: $6$ (the midline is at the axle height $6$, and the minimum is $6 - 4 = 2$).' },
          { id: 'a2', label: '1 pt — $t$-coordinates of all five points', description: '$F = (0, 6)$, $G = (2, 10)$, $J = (4, 6)$, $K = (6, 2)$, $P = (8, 6)$: the points are a quarter-period, $2$ seconds, apart.' },
        ],
      },
      {
        letter: 'B',
        question: 'Write an expression for $y(t)$ in the form $y(t) = a\\sin\\big(b(t + c)\\big) + d$. Give values for the constants $a$, $b$, $c$, and $d$.',
        rubric: [
          { id: 'b1', label: '1 pt — Amplitude and midline ($a$ and $d$)', description: 'Amplitude $|a| = 10 - 6 = 4$ (so $a = 4$, or $a = -4$ when paired with a consistent $c$) and midline $d = 6$.' },
          { id: 'b2', label: '1 pt — Period and phase ($b$ and $c$)', description: 'Period $8$ gives $b = \\dfrac{2\\pi}{8} = \\dfrac{\\pi}{4}$. The graph crosses the midline going up at $t = 0$, exactly where a sine curve starts, so $c = 0$: $y(t) = 4\\sin\\left(\\dfrac{\\pi}{4}t\\right) + 6$. Equivalent forms earn the point (any $c = 8k$ with $a = 4$, or $a = -4$ with $c = 4 + 8k$).' },
        ],
      },
      {
        letter: 'C',
        question: 'Let $t_1$ be the $t$-coordinate of $G$ and $t_2$ the $t$-coordinate of $J$. (i) On the interval $t_1 < t < t_2$, is $y$ increasing or decreasing, and is the graph of $y$ above or below its midline? (ii) On the same interval, is the graph of $y$ concave up or concave down, and is the rate of change of $y$ increasing or decreasing? Explain your answer in terms of the motion of the point.',
        rubric: [
          { id: 'c1', label: '1 pt — (i) Decreasing and above the midline', description: 'From $G = (2, 10)$ to $J = (4, 6)$ the point falls from the top of the wheel back to axle height, so $y$ is decreasing and the graph is above the midline.' },
          { id: 'c2', label: '1 pt — (ii) Concave down; rate of change decreasing', description: 'The graph is concave down on $(2, 4)$. The point is momentarily not rising or falling at the top ($G$) and is falling fastest when it passes axle height ($J$), so the rate of change of $y$ goes from $0$ to its most negative value: it is decreasing. Both the concavity and the behavior of the rate of change, with the explanation in terms of the motion, are needed for the point.' },
        ],
      },
    ],
    sampleResponse:
      '(A) F = (0, 6), G = (2, 10), J = (4, 6), K = (6, 2), P = (8, 6). (B) a = 4 (amplitude 10 − 6), d = 6 (midline), b = 2π/8 = π/4 (period 8), c = 0 because the graph passes through the midline going up at t = 0: y(t) = 4 sin(πt/4) + 6. (C)(i) Between G and J the point drops from its highest position to axle height, so y is decreasing and the graph is above the midline. (ii) The graph is concave down there. The point is momentarily neither rising nor falling at the top and falls fastest as it passes the axle height, so the rate of change of y decreases from 0 to its most negative value.',
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
        question: 'The functions $g$ and $k$ are defined by $g(x) = 2\\log_5 x + \\log_5(25x) - \\log_5\\left(x^4\\right)$ for $x > 0$ and $k(x) = \\cos\\left(x - \\dfrac{\\pi}{3}\\right) - \\cos\\left(x + \\dfrac{\\pi}{3}\\right)$. (i) Write $g(x)$ as a single logarithm with base $5$ whose argument contains no negative exponents. (ii) Write $k(x)$ as a constant multiple of $\\sin x$.',
        rubric: [
          { id: 'a1', label: '1 pt — (i) Expression for $g(x)$', description: '$g(x) = \\log_5\\left(x^2\\right) + \\log_5(25x) - \\log_5\\left(x^4\\right) = \\log_5\\left(\\dfrac{25x^3}{x^4}\\right) = \\log_5\\left(\\dfrac{25}{x}\\right)$. Neither $2 - \\log_5 x$ (not a single logarithm) nor $\\log_5\\left(25x^{-1}\\right)$ (negative exponent) earns the point.' },
          { id: 'a2', label: '1 pt — (ii) Expression for $k(x)$', description: 'By the cosine difference and sum identities, $\\cos\\left(x - \\frac{\\pi}{3}\\right) = \\cos x\\cos\\frac{\\pi}{3} + \\sin x\\sin\\frac{\\pi}{3}$ and $\\cos\\left(x + \\frac{\\pi}{3}\\right) = \\cos x\\cos\\frac{\\pi}{3} - \\sin x\\sin\\frac{\\pi}{3}$. Subtracting, $k(x) = 2\\sin x\\sin\\frac{\\pi}{3} = \\sqrt{3}\\sin x$.' },
        ],
      },
      {
        letter: 'B',
        question: '(i) Solve $2\\sin\\theta\\cos\\theta - \\cos\\theta = 0$ for $\\theta$ in the interval $[0, 2\\pi)$. (ii) Solve $4^{x} - 2^{x + 1} - 8 = 0$ for all real values of $x$.',
        rubric: [
          { id: 'b1', label: '1 pt — (i) All four solutions', description: '$\\cos\\theta\\,(2\\sin\\theta - 1) = 0$, so $\\cos\\theta = 0$ or $\\sin\\theta = \\frac{1}{2}$: $\\theta = \\dfrac{\\pi}{6}, \\dfrac{\\pi}{2}, \\dfrac{5\\pi}{6}, \\dfrac{3\\pi}{2}$. Dividing by $\\cos\\theta$ and losing $\\frac{\\pi}{2}$ and $\\frac{3\\pi}{2}$ does not earn the point.' },
          { id: 'b2', label: '1 pt — (ii) Solution of the exponential equation', description: 'With $u = 2^x$: $4^x = u^2$ and $2^{x + 1} = 2u$, so $u^2 - 2u - 8 = (u - 4)(u + 2) = 0$. Since $2^x > 0$, $u = 4$ and $x = 2$ is the only solution ($u = -2$ is rejected).' },
        ],
      },
      {
        letter: 'C',
        question: 'The function $m$ is defined by $m(x) = 3\\cos(2x) + 1$. Determine all real values of $x$ for which $m(x) = -\\dfrac{1}{2}$.',
        rubric: [
          { id: 'c1', label: '1 pt — Base solutions', description: '$3\\cos(2x) + 1 = -\\frac{1}{2}$ gives $\\cos(2x) = -\\frac{1}{2}$, so $2x = \\dfrac{2\\pi}{3}$ or $2x = \\dfrac{4\\pi}{3}$ in one cycle, that is $x = \\dfrac{\\pi}{3}$ or $x = \\dfrac{2\\pi}{3}$.' },
          { id: 'c2', label: '1 pt — All solutions', description: 'Because $\\cos(2x)$ has period $\\pi$, all solutions are $x = \\dfrac{\\pi}{3} + k\\pi$ and $x = \\dfrac{2\\pi}{3} + k\\pi$ for all integers $k$ (equivalently $x = \\pm\\dfrac{\\pi}{3} + k\\pi$). A correct general solution written directly earns both points; writing a period of $2\\pi$ does not earn this point.' },
        ],
      },
    ],
    sampleResponse:
      '(A)(i) g(x) = log₅(x²) + log₅(25x) − log₅(x⁴) = log₅(25x³/x⁴) = log₅(25/x). (ii) cos(x − π/3) − cos(x + π/3) = [cos x cos(π/3) + sin x sin(π/3)] − [cos x cos(π/3) − sin x sin(π/3)] = 2 sin x sin(π/3) = √3 sin x. (B)(i) cos θ (2 sin θ − 1) = 0 ⇒ cos θ = 0 or sin θ = 1/2 ⇒ θ = π/6, π/2, 5π/6, 3π/2. (ii) Let u = 2ˣ: u² − 2u − 8 = (u − 4)(u + 2) = 0, so u = 4 (u = −2 is impossible since 2ˣ > 0), giving x = 2. (C) cos(2x) = −1/2 ⇒ 2x = 2π/3 + 2πk or 4π/3 + 2πk ⇒ x = π/3 + πk or x = 2π/3 + πk for all integers k.',
  },
]
