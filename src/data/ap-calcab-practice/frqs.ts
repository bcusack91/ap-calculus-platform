import type { SAQItem } from '@/components/FullLengthPracticeExam'

/**
 * AP Calculus AB — Section II Free-Response.
 * 6 FRQs total, 9 points each, 90 minutes:
 *   Part A (Calculator): Q1, Q2 (~30 min)
 *   Part B (No calculator): Q3, Q4, Q5, Q6 (~60 min)
 */

export const FRQS: SAQItem[] = [
  /* ============== Q1 — CALCULATOR ALLOWED ============== */
  {
    type: 'saq',
    topic: 'frq-rate-in-rate-out',
    stimulus: `**Q1 (Calculator allowed) — Rates In/Out**

Water is flowing into a tank at the rate $R(t) = 8 + 5\\sin\\left(\\dfrac{t}{2}\\right)$ gallons per hour and is being pumped out at the rate $W(t) = 3 + 0.4t$ gallons per hour, both for $0 \\le t \\le 12$ hours. At time $t = 0$, the tank contains 50 gallons of water.`,
    parts: [
      {
        prompt: '**(a)** How many gallons of water flow INTO the tank during the time interval $0 \\le t \\le 12$? Use a calculator and give 3 decimal places.',
        rubric: '$\\int_0^{12} R(t)\\,dt = \\int_0^{12} (8 + 5\\sin(t/2))\\,dt$. Numerical integration on calculator gives approximately **104.418** gallons. (Score: 1 pt setup with definite integral, 1 pt correct numerical answer rounded to 3 decimals.)',
      },
      {
        prompt: '**(b)** Write an expression for $A(t)$, the amount of water in the tank at time $t$, for $0 \\le t \\le 12$.',
        rubric: '$A(t) = 50 + \\int_0^t (R(x) - W(x))\\,dx = 50 + \\int_0^t (8 + 5\\sin(x/2) - 3 - 0.4x)\\,dx$. (Award credit for any equivalent form using initial condition + accumulation.)',
      },
      {
        prompt: '**(c)** At what time $t$ in $[0, 12]$ is the amount of water in the tank a maximum? Justify your answer.',
        rubric: 'Set $A\'(t) = R(t) - W(t) = 0$: $8 + 5\\sin(t/2) - 3 - 0.4t = 0$. Use calculator to solve: $t \\approx 6.494$. Verify $A\'$ changes from positive to negative there (rate in exceeds rate out before; rate out exceeds rate in after). Justify max via sign change in $A\'$ or via candidates test (compare $A(0)$, $A(6.494)$, $A(12)$). Maximum occurs at approximately $t \\approx 6.494$ hours.',
      },
      {
        prompt: '**(d)** Find the rate at which the amount of water in the tank is changing at $t = 4$ hours. Indicate units.',
        rubric: '$A\'(4) = R(4) - W(4) = (8 + 5\\sin 2) - (3 + 1.6) = 8 + 5(0.9093) - 4.6 \\approx 7.946$ gallons per hour. Sign positive ⇒ amount is INCREASING. Units: gallons per hour. (1 pt computation, 1 pt units/interpretation.)',
      },
    ],
  },

  /* ============== Q2 — CALCULATOR ALLOWED ============== */
  {
    type: 'saq',
    topic: 'frq-particle-motion',
    stimulus: `**Q2 (Calculator allowed) — Particle Motion**

A particle moves along the $x$-axis with velocity $v(t) = t^2 - 6t + 5$ for $0 \\le t \\le 8$. At time $t = 0$, the particle is at position $x(0) = 2$.`,
    parts: [
      {
        prompt: '**(a)** Find the times in the interval $0 \\le t \\le 8$ at which the particle is momentarily at rest.',
        rubric: '$v(t) = t^2 - 6t + 5 = (t-1)(t-5) = 0 \\Rightarrow t = 1$ and $t = 5$.',
      },
      {
        prompt: '**(b)** Find the position $x(6)$ of the particle at time $t = 6$.',
        rubric: '$x(6) = x(0) + \\int_0^6 v(t)\\,dt = 2 + \\int_0^6 (t^2 - 6t + 5)\\,dt = 2 + [t^3/3 - 3t^2 + 5t]_0^6 = 2 + (72 - 108 + 30) = 2 + (-6) = -4$.',
      },
      {
        prompt: '**(c)** Find the total distance traveled by the particle on $[0, 6]$.',
        rubric: '$\\int_0^6 |v(t)|\\,dt$. Velocity is positive on $[0,1]$, negative on $[1,5]$, positive on $[5,6]$. $\\int_0^1 v\\,dt = [t^3/3 - 3t^2 + 5t]_0^1 = 1/3 - 3 + 5 = 7/3$. $\\int_1^5 v\\,dt = [t^3/3 - 3t^2 + 5t]_1^5 = (125/3 - 75 + 25) - 7/3 = 25/3 - 50 - 7/3 = 18/3 - 50 + 50 + 18/3$... cleaner: use calculator. Numerical: $\\int_1^5 v\\,dt = -32/3 \\approx -10.667$, so $|...|=32/3$. $\\int_5^6 v\\,dt = (72-108+30) - (125/3-75+25) = -6 - 25/3 = -18/3 - 25/3 = -43/3$... cleaner: total distance $\\approx 14.667$. Acceptable: total distance $= 7/3 + 32/3 + 5/3 = 44/3 \\approx 14.667$.',
      },
      {
        prompt: '**(d)** Is the particle speeding up or slowing down at $t = 2$? Justify your answer.',
        rubric: '$v(2) = 4 - 12 + 5 = -3 < 0$. $a(t) = v\'(t) = 2t - 6 \\Rightarrow a(2) = -2 < 0$. Velocity and acceleration have the SAME sign (both negative) ⇒ particle is SPEEDING UP at $t = 2$.',
      },
    ],
  },

  /* ============== Q3 — NO CALCULATOR ============== */
  {
    type: 'saq',
    topic: 'frq-area-volume',
    stimulus: `**Q3 (No calculator) — Area and Volume**

Let $R$ be the region in the first quadrant bounded by $y = x^2$ and $y = 2x$.`,
    parts: [
      {
        prompt: '**(a)** Find the points of intersection and sketch the region $R$.',
        rubric: 'Set $x^2 = 2x \\Rightarrow x(x-2)=0 \\Rightarrow x = 0$ or $x = 2$. Points: $(0, 0)$ and $(2, 4)$. Region is bounded above by $y = 2x$ and below by $y = x^2$ on $[0, 2]$.',
      },
      {
        prompt: '**(b)** Find the area of region $R$.',
        rubric: '$A = \\int_0^2 (2x - x^2)\\,dx = [x^2 - x^3/3]_0^2 = 4 - 8/3 = 12/3 - 8/3 = \\dfrac{4}{3}$.',
      },
      {
        prompt: '**(c)** Find the volume of the solid generated when $R$ is rotated about the $x$-axis.',
        rubric: 'Washers: $V = \\pi \\int_0^2 [(2x)^2 - (x^2)^2]\\,dx = \\pi \\int_0^2 (4x^2 - x^4)\\,dx = \\pi[4x^3/3 - x^5/5]_0^2 = \\pi(32/3 - 32/5) = \\pi(160/15 - 96/15) = \\dfrac{64\\pi}{15}$.',
      },
      {
        prompt: '**(d)** The region $R$ is the base of a solid whose cross sections perpendicular to the $x$-axis are squares. Find the volume of this solid.',
        rubric: 'Side length of square at $x$ = $(2x - x^2)$. Area of square = $(2x - x^2)^2$. $V = \\int_0^2 (2x - x^2)^2\\,dx = \\int_0^2 (4x^2 - 4x^3 + x^4)\\,dx = [4x^3/3 - x^4 + x^5/5]_0^2 = 32/3 - 16 + 32/5 = 160/15 - 240/15 + 96/15 = \\dfrac{16}{15}$.',
      },
    ],
  },

  /* ============== Q4 — NO CALCULATOR (Table-based) ============== */
  {
    type: 'saq',
    topic: 'frq-table-based-analysis',
    stimulus: `**Q4 (No calculator) — Table of Values**

Selected values of a twice-differentiable function $f$ are given in the table below.

| $x$ | 0 | 2 | 4 | 6 | 8 |
|---|---|---|---|---|---|
| $f(x)$ | 5 | 9 | 12 | 14 | 11 |

The function $f$ is continuous and differentiable on $[0, 8]$.`,
    parts: [
      {
        prompt: '**(a)** Use a left Riemann sum with the four subintervals indicated by the table to approximate $\\int_0^8 f(x)\\,dx$.',
        rubric: 'Left Riemann sum $= 2[f(0) + f(2) + f(4) + f(6)] = 2[5 + 9 + 12 + 14] = 2(40) = 80$.',
      },
      {
        prompt: '**(b)** Use the trapezoidal sum with the four subintervals indicated by the table to approximate $\\int_0^8 f(x)\\,dx$.',
        rubric: '$T = \\frac{2}{2}[f(0) + 2f(2) + 2f(4) + 2f(6) + f(8)] = 1[5 + 18 + 24 + 28 + 11] = 86$.',
      },
      {
        prompt: '**(c)** Using the Mean Value Theorem, explain why there must exist a value $c$ in $(2, 6)$ such that $f\'(c) = \\dfrac{5}{4}$.',
        rubric: 'MVT applies because $f$ is continuous on $[2, 6]$ and differentiable on $(2, 6)$ (given twice differentiable on $[0, 8]$). $\\frac{f(6) - f(2)}{6 - 2} = \\frac{14 - 9}{4} = \\frac{5}{4}$. Therefore there exists $c \\in (2, 6)$ with $f\'(c) = 5/4$.',
      },
      {
        prompt: '**(d)** Estimate $f\'(4)$ using the symmetric difference quotient.',
        rubric: '$f\'(4) \\approx \\dfrac{f(6) - f(2)}{6 - 2} = \\dfrac{14 - 9}{4} = \\dfrac{5}{4}$.',
      },
    ],
  },

  /* ============== Q5 — NO CALCULATOR (Differential Equation) ============== */
  {
    type: 'saq',
    topic: 'frq-differential-equations',
    stimulus: `**Q5 (No calculator) — Differential Equations**

Consider the differential equation $\\dfrac{dy}{dx} = \\dfrac{y}{x^2}$, with $y > 0$ and $x > 0$.`,
    parts: [
      {
        prompt: '**(a)** Sketch a slope field for the differential equation at the nine points indicated by the lattice $(x, y)$ with $x \\in \\{1, 2, 3\\}$ and $y \\in \\{1, 2, 3\\}$.',
        rubric: 'Compute slopes at the 9 points: at $(1,1):1$; $(1,2):2$; $(1,3):3$; $(2,1):1/4$; $(2,2):1/2$; $(2,3):3/4$; $(3,1):1/9$; $(3,2):2/9$; $(3,3):1/3$. Sketch short tangent line segments with these slopes. (Award credit for accurate sketching.)',
      },
      {
        prompt: '**(b)** Find the particular solution $y = f(x)$ to the differential equation that passes through the point $(1, 2)$.',
        rubric: 'Separate: $\\dfrac{dy}{y} = \\dfrac{dx}{x^2} \\Rightarrow \\ln|y| = -1/x + C$. Initial condition: $\\ln 2 = -1 + C \\Rightarrow C = \\ln 2 + 1$. Solution: $\\ln y = -1/x + \\ln 2 + 1$, or equivalently $y = 2e^{1 - 1/x}$.',
      },
      {
        prompt: '**(c)** Find $\\lim_{x \\to \\infty} f(x)$.',
        rubric: 'As $x \\to \\infty$, $1/x \\to 0$, so $f(x) = 2e^{1 - 1/x} \\to 2e^1 = 2e$.',
      },
    ],
  },

  /* ============== Q6 — NO CALCULATOR (Function Analysis) ============== */
  {
    type: 'saq',
    topic: 'frq-function-analysis',
    stimulus: `**Q6 (No calculator) — Function Analysis**

Let $f(x) = x^3 - 6x^2 + 9x + 1$.`,
    parts: [
      {
        prompt: '**(a)** Find the critical numbers of $f$.',
        rubric: '$f\'(x) = 3x^2 - 12x + 9 = 3(x-1)(x-3) = 0 \\Rightarrow x = 1$ and $x = 3$.',
      },
      {
        prompt: '**(b)** Determine the open intervals on which $f$ is increasing or decreasing. Justify your answer.',
        rubric: '$f\'(x) = 3(x-1)(x-3)$. Sign analysis: positive on $(-\\infty, 1)$, negative on $(1, 3)$, positive on $(3, \\infty)$. Therefore $f$ is increasing on $(-\\infty, 1)$ and $(3, \\infty)$, decreasing on $(1, 3)$.',
      },
      {
        prompt: '**(c)** Identify the $x$-coordinates of any local extrema of $f$ and classify each. Justify.',
        rubric: 'At $x = 1$: $f\'$ changes from + to − ⇒ local MAXIMUM. $f(1) = 1 - 6 + 9 + 1 = 5$. At $x = 3$: $f\'$ changes from − to + ⇒ local MINIMUM. $f(3) = 27 - 54 + 27 + 1 = 1$.',
      },
      {
        prompt: '**(d)** Find the $x$-coordinate of the inflection point of $f$ and the open intervals where $f$ is concave up.',
        rubric: '$f\'\'(x) = 6x - 12 = 0 \\Rightarrow x = 2$. $f\'\'$ changes sign at $x = 2$ (from − to +) ⇒ inflection point at $x = 2$. $f$ is concave UP on $(2, \\infty)$ and concave DOWN on $(-\\infty, 2)$.',
      },
    ],
  },
]
