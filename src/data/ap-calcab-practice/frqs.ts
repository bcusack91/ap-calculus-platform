import type { SAQItem } from '@/components/FullLengthPracticeExam'

/**
 * AP Calculus AB — Section II Free-Response.
 * 6 FRQs total, 9 points each (54 points), 90 minutes:
 *   Part A (Calculator): Q1, Q2 (~30 min)
 *   Part B (No calculator): Q3, Q4, Q5, Q6 (~60 min)
 * Each rubric line is one point, split the way the College Board scoring guidelines
 * allocate them (setup / answer / justification / units are separate points).
 */

export const FRQS: SAQItem[] = [
  /* ============== Q1 — CALCULATOR ALLOWED ============== */
  {
    type: 'saq',
    topic: 'frq-rate-in-rate-out',
    stimulus: `**Q1 (Calculator allowed) — Rates In/Out (9 points)**

Water is flowing into a tank at the rate $R(t) = 8 + 5\\sin\\left(\\dfrac{t}{2}\\right)$ gallons per hour and is being pumped out at the rate $W(t) = 3 + 0.4t$ gallons per hour, both for $0 \\le t \\le 12$ hours. At time $t = 0$, the tank contains 50 gallons of water.`,
    parts: [
      {
        prompt: '**(a)** How many gallons of water flow INTO the tank during the time interval $0 \\le t \\le 12$? Use a calculator and give 3 decimal places.',
        rubric: [
          { id: 'a1', label: '1 pt — Definite integral of the inflow rate', description: '$\\int_0^{12} R(t)\\,dt = \\int_0^{12} \\left(8 + 5\\sin(t/2)\\right)dt$.' },
          { id: 'a2', label: '1 pt — Answer', description: 'Approximately **96.398** gallons (exact value $96 + 10(1 - \\cos 6)$). Must be accurate to three decimal places.' },
        ],
      },
      {
        prompt: '**(b)** Write an expression for $A(t)$, the amount of water in the tank at time $t$, for $0 \\le t \\le 12$.',
        rubric: [
          { id: 'b1', label: '1 pt — Integrand is the net rate $R - W$', description: 'Accumulates $R(x) - W(x) = 8 + 5\\sin(x/2) - 3 - 0.4x$ from $0$ to $t$.' },
          { id: 'b2', label: '1 pt — Uses the initial condition', description: '$A(t) = 50 + \\int_0^t \\left(R(x) - W(x)\\right)dx$. Any equivalent form with the 50 gallons at $t = 0$ earns the point.' },
        ],
      },
      {
        prompt: '**(c)** At what time $t$ in $[0, 12]$ is the amount of water in the tank a maximum? Justify your answer.',
        rubric: [
          { id: 'c1', label: '1 pt — Considers $A\'(t) = 0$', description: '$A\'(t) = R(t) - W(t) = 5 + 5\\sin(t/2) - 0.4t = 0$.' },
          { id: 'c2', label: '1 pt — Justification', description: 'Either a sign analysis ($A\' > 0$ on $[0, 7.165)$ and $A\' < 0$ on $(7.165, 12]$, so it is the only critical point and $A$ changes from increasing to decreasing there) or a candidates test: $A(0) = 50$, $A(7.165) \\approx 94.601$, $A(12) \\approx 81.598$.' },
          { id: 'c3', label: '1 pt — Answer', description: 'The amount of water is a maximum at $t \\approx 7.165$ hours.' },
        ],
      },
      {
        prompt: '**(d)** Find the rate at which the amount of water in the tank is changing at $t = 4$ hours. Indicate units.',
        rubric: [
          { id: 'd1', label: '1 pt — Value of $A\'(4)$', description: '$A\'(4) = R(4) - W(4) = (8 + 5\\sin 2) - (3 + 1.6) \\approx 7.946$ (positive, so the amount is increasing).' },
          { id: 'd2', label: '1 pt — Units', description: 'Gallons per hour.' },
        ],
      },
    ],
  },

  /* ============== Q2 — CALCULATOR ALLOWED ============== */
  {
    type: 'saq',
    topic: 'frq-particle-motion',
    stimulus: `**Q2 (Calculator allowed) — Particle Motion (9 points)**

A particle moves along the $x$-axis with velocity $v(t) = t^2 - 6t + 5$ for $0 \\le t \\le 8$. At time $t = 0$, the particle is at position $x(0) = 2$.`,
    parts: [
      {
        prompt: '**(a)** Find the times in the interval $0 \\le t \\le 8$ at which the particle is momentarily at rest.',
        rubric: [
          { id: 'a1', label: '1 pt — Both times', description: '$v(t) = (t-1)(t-5) = 0 \\Rightarrow t = 1$ and $t = 5$.' },
        ],
      },
      {
        prompt: '**(b)** Find the position $x(6)$ of the particle at time $t = 6$.',
        rubric: [
          { id: 'b1', label: '1 pt — Initial position plus a definite integral', description: '$x(6) = x(0) + \\int_0^6 v(t)\\,dt = 2 + \\int_0^6 (t^2 - 6t + 5)\\,dt$.' },
          { id: 'b2', label: '1 pt — Answer', description: '$2 + [t^3/3 - 3t^2 + 5t]_0^6 = 2 + (72 - 108 + 30) = -4$.' },
        ],
      },
      {
        prompt: '**(c)** Find the total distance traveled by the particle on $[0, 6]$.',
        rubric: [
          { id: 'c1', label: '1 pt — Integral of speed', description: 'Total distance $= \\int_0^6 |v(t)|\\,dt$.' },
          { id: 'c2', label: '1 pt — Accounts for the direction changes', description: '$v > 0$ on $(0, 1)$, $v < 0$ on $(1, 5)$, $v > 0$ on $(5, 6)$, so the distance is $\\int_0^1 v\\,dt - \\int_1^5 v\\,dt + \\int_5^6 v\\,dt$, with pieces $7/3$, $32/3$ and $7/3$ (or found directly with the calculator).' },
          { id: 'c3', label: '1 pt — Answer', description: 'Total distance $= 46/3 \\approx 15.333$.' },
        ],
      },
      {
        prompt: '**(d)** Is the particle speeding up or slowing down at $t = 2$? Justify your answer.',
        rubric: [
          { id: 'd1', label: '1 pt — Velocity at $t = 2$', description: '$v(2) = 4 - 12 + 5 = -3$.' },
          { id: 'd2', label: '1 pt — Acceleration at $t = 2$', description: '$a(t) = v\'(t) = 2t - 6$, so $a(2) = -2$.' },
          { id: 'd3', label: '1 pt — Speeding up, with reason', description: 'Velocity and acceleration have the same sign (both negative), so the particle is speeding up at $t = 2$.' },
        ],
      },
    ],
  },

  /* ============== Q3 — NO CALCULATOR ============== */
  {
    type: 'saq',
    topic: 'frq-area-volume',
    stimulus: `**Q3 (No calculator) — Area and Volume (9 points)**

Let $R$ be the region in the first quadrant bounded by $y = x^2$ and $y = 2x$.`,
    parts: [
      {
        prompt: '**(a)** Find the points of intersection and sketch the region $R$.',
        rubric: [
          { id: 'a1', label: '1 pt — Intersection points', description: '$x^2 = 2x \\Rightarrow x = 0$ or $x = 2$, giving $(0, 0)$ and $(2, 4)$; on $[0, 2]$ the line $y = 2x$ is above $y = x^2$.' },
        ],
      },
      {
        prompt: '**(b)** Find the area of region $R$.',
        rubric: [
          { id: 'b1', label: '1 pt — Integral with correct integrand and limits', description: '$A = \\int_0^2 (2x - x^2)\\,dx$.' },
          { id: 'b2', label: '1 pt — Answer', description: '$[x^2 - x^3/3]_0^2 = 4 - 8/3 = \\dfrac{4}{3}$.' },
        ],
      },
      {
        prompt: '**(c)** Find the volume of the solid generated when $R$ is rotated about the $x$-axis.',
        rubric: [
          { id: 'c1', label: '1 pt — Washer integrand', description: '$\\pi\\left[(2x)^2 - (x^2)^2\\right] = \\pi(4x^2 - x^4)$ (outer radius $2x$, inner radius $x^2$).' },
          { id: 'c2', label: '1 pt — Antiderivative', description: '$\\pi\\left[\\dfrac{4x^3}{3} - \\dfrac{x^5}{5}\\right]_0^2$.' },
          { id: 'c3', label: '1 pt — Answer', description: '$\\pi(32/3 - 32/5) = \\dfrac{64\\pi}{15}$.' },
        ],
      },
      {
        prompt: '**(d)** The region $R$ is the base of a solid whose cross sections perpendicular to the $x$-axis are squares. Find the volume of this solid.',
        rubric: [
          { id: 'd1', label: '1 pt — Area of a cross section', description: 'Side $= 2x - x^2$, so the area is $(2x - x^2)^2$.' },
          { id: 'd2', label: '1 pt — Definite integral with limits', description: '$V = \\int_0^2 (2x - x^2)^2\\,dx = \\int_0^2 (4x^2 - 4x^3 + x^4)\\,dx$.' },
          { id: 'd3', label: '1 pt — Answer', description: '$[4x^3/3 - x^4 + x^5/5]_0^2 = 32/3 - 16 + 32/5 = \\dfrac{16}{15}$.' },
        ],
      },
    ],
  },

  /* ============== Q4 — NO CALCULATOR (Table-based) ============== */
  {
    type: 'saq',
    topic: 'frq-table-based-analysis',
    stimulus: `**Q4 (No calculator) — Table of Values (9 points)**

Selected values of a twice-differentiable function $f$ are given in the table below.

| $x$ | 0 | 2 | 4 | 6 | 8 |
|---|---|---|---|---|---|
| $f(x)$ | 5 | 9 | 12 | 14 | 11 |

The function $f$ is continuous and differentiable on $[0, 8]$.`,
    parts: [
      {
        prompt: '**(a)** Use a left Riemann sum with the four subintervals indicated by the table to approximate $\\int_0^8 f(x)\\,dx$.',
        rubric: [
          { id: 'a1', label: '1 pt — Left Riemann sum set up', description: '$2[f(0) + f(2) + f(4) + f(6)] = 2(5 + 9 + 12 + 14)$.' },
          { id: 'a2', label: '1 pt — Answer', description: '$2(40) = 80$.' },
        ],
      },
      {
        prompt: '**(b)** Use the trapezoidal sum with the four subintervals indicated by the table to approximate $\\int_0^8 f(x)\\,dx$.',
        rubric: [
          { id: 'b1', label: '1 pt — Trapezoidal sum set up', description: '$\\dfrac{2}{2}[f(0) + 2f(2) + 2f(4) + 2f(6) + f(8)]$, or the sum of four trapezoid areas.' },
          { id: 'b2', label: '1 pt — Answer', description: '$5 + 18 + 24 + 28 + 11 = 86$.' },
        ],
      },
      {
        prompt: '**(c)** Using the Mean Value Theorem, explain why there must exist a value $c$ in $(2, 6)$ such that $f\'(c) = \\dfrac{5}{4}$.',
        rubric: [
          { id: 'c1', label: '1 pt — Average rate of change', description: '$\\dfrac{f(6) - f(2)}{6 - 2} = \\dfrac{14 - 9}{4} = \\dfrac{5}{4}$.' },
          { id: 'c2', label: '1 pt — Hypotheses of the MVT', description: '$f$ is continuous on $[2, 6]$ and differentiable on $(2, 6)$ (it is twice differentiable on $[0, 8]$).' },
          { id: 'c3', label: '1 pt — Conclusion', description: 'Therefore, by the Mean Value Theorem, there is a $c$ in $(2, 6)$ with $f\'(c) = 5/4$.' },
        ],
      },
      {
        prompt: '**(d)** Estimate $f\'(4)$ using the symmetric difference quotient.',
        rubric: [
          { id: 'd1', label: '1 pt — Difference quotient using $x = 2$ and $x = 6$', description: '$f\'(4) \\approx \\dfrac{f(6) - f(2)}{6 - 2}$.' },
          { id: 'd2', label: '1 pt — Answer', description: '$\\dfrac{14 - 9}{4} = \\dfrac{5}{4}$.' },
        ],
      },
    ],
  },

  /* ============== Q5 — NO CALCULATOR (Differential Equation) ============== */
  {
    type: 'saq',
    topic: 'frq-differential-equations',
    stimulus: `**Q5 (No calculator) — Differential Equations (9 points)**

Consider the differential equation $\\dfrac{dy}{dx} = \\dfrac{y}{x^2}$, with $y > 0$ and $x > 0$.`,
    parts: [
      {
        prompt: '**(a)** Sketch a slope field for the differential equation at the nine points indicated by the lattice $(x, y)$ with $x \\in \\{1, 2, 3\\}$ and $y \\in \\{1, 2, 3\\}$.',
        rubric: [
          { id: 'a1', label: '1 pt — Column $x = 1$', description: 'Positive slopes 1, 2, 3 at $(1,1)$, $(1,2)$, $(1,3)$: the segments get steeper as $y$ increases.' },
          { id: 'a2', label: '1 pt — Columns $x = 2$ and $x = 3$', description: 'Smaller positive slopes: $1/4, 1/2, 3/4$ at $x = 2$ and $1/9, 2/9, 1/3$ at $x = 3$ (flatter as $x$ increases, steeper as $y$ increases).' },
        ],
      },
      {
        prompt: '**(b)** Find the particular solution $y = f(x)$ to the differential equation that passes through the point $(1, 2)$.',
        rubric: [
          { id: 'b1', label: '1 pt — Separates variables', description: '$\\dfrac{dy}{y} = \\dfrac{dx}{x^2}$.' },
          { id: 'b2', label: '1 pt — Antiderivative of the $y$ side', description: '$\\ln|y|$.' },
          { id: 'b3', label: '1 pt — Antiderivative of the $x$ side', description: '$-\\dfrac{1}{x}$.' },
          { id: 'b4', label: '1 pt — Constant of integration and uses the initial condition', description: '$\\ln y = -1/x + C$; $\\ln 2 = -1 + C \\Rightarrow C = 1 + \\ln 2$.' },
          { id: 'b5', label: '1 pt — Solves for $y$', description: '$y = 2e^{1 - 1/x}$ (equivalently $\\ln y = -1/x + 1 + \\ln 2$ solved for $y$).' },
        ],
      },
      {
        prompt: '**(c)** Find $\\lim_{x \\to \\infty} f(x)$.',
        rubric: [
          { id: 'c1', label: '1 pt — Limit expression from the particular solution', description: '$\\lim_{x \\to \\infty} 2e^{1 - 1/x}$, with $1/x \\to 0$ so the exponent approaches 1.' },
          { id: 'c2', label: '1 pt — Value', description: '$2e$.' },
        ],
      },
    ],
  },

  /* ============== Q6 — NO CALCULATOR (Function Analysis) ============== */
  {
    type: 'saq',
    topic: 'frq-function-analysis',
    stimulus: `**Q6 (No calculator) — Function Analysis (9 points)**

Let $f(x) = x^3 - 6x^2 + 9x + 1$.`,
    parts: [
      {
        prompt: '**(a)** Find the critical numbers of $f$.',
        rubric: [
          { id: 'a1', label: '1 pt — Derivative', description: '$f\'(x) = 3x^2 - 12x + 9 = 3(x-1)(x-3)$.' },
          { id: 'a2', label: '1 pt — Critical numbers', description: '$x = 1$ and $x = 3$.' },
        ],
      },
      {
        prompt: '**(b)** Determine the open intervals on which $f$ is increasing or decreasing. Justify your answer.',
        rubric: [
          { id: 'b1', label: '1 pt — Intervals', description: 'Increasing on $(-\\infty, 1)$ and $(3, \\infty)$; decreasing on $(1, 3)$.' },
          { id: 'b2', label: '1 pt — Justification using the sign of $f\'$', description: '$f\' > 0$ on $(-\\infty, 1)$ and $(3, \\infty)$; $f\' < 0$ on $(1, 3)$.' },
        ],
      },
      {
        prompt: '**(c)** Identify the $x$-coordinates of any local extrema of $f$ and classify each. Justify.',
        rubric: [
          { id: 'c1', label: '1 pt — Local maximum at $x = 1$, with reason', description: '$f\'$ changes from positive to negative at $x = 1$ ($f(1) = 5$).' },
          { id: 'c2', label: '1 pt — Local minimum at $x = 3$, with reason', description: '$f\'$ changes from negative to positive at $x = 3$ ($f(3) = 1$).' },
        ],
      },
      {
        prompt: '**(d)** Find the $x$-coordinate of the inflection point of $f$ and the open intervals where $f$ is concave up.',
        rubric: [
          { id: 'd1', label: '1 pt — Second derivative', description: '$f\'\'(x) = 6x - 12$.' },
          { id: 'd2', label: '1 pt — Inflection point at $x = 2$, with reason', description: '$f\'\'$ changes sign at $x = 2$ (negative to positive).' },
          { id: 'd3', label: '1 pt — Concave up interval', description: '$(2, \\infty)$, because $f\'\'(x) > 0$ there (concave down on $(-\\infty, 2)$).' },
        ],
      },
    ],
  },
]
