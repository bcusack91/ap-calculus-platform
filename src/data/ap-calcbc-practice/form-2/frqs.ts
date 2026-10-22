import type { SAQItem } from '@/components/FullLengthPracticeExam'

/**
 * AP Calculus BC practice exam, form 2: 6 FRQs (May 2027 Section II), 9 points each.
 *   Part A (graphing calculator, Q1–Q2): rates in and out (snow on a ski slope); polar curve.
 *   Part B (no calculator, Q3–Q6): table of velocities with an improper-integral model;
 *   separable differential equation; partial fractions and improper integrals; power series.
 * One RubricPoint = one point.
 */

export const FRQS: SAQItem[] = [
  /* ---- Q1 (calculator): rates in and out ---- */
  {
    type: 'saq',
    topic: 'frq-rate-in-rate-out',
    prompt: `**FRQ 1 — Part A, graphing calculator (9 points): Snow on a Ski Slope**

At 6:00 a.m. ($t = 0$) a ski slope is covered with 500 cubic meters of snow. For $0 \\le t \\le 10$ hours, snow machines add snow at a rate modeled by $A(t) = 30\\sqrt{t}\\,e^{-0.2t}$ cubic meters per hour, and snow melts at a rate modeled by $M(t) = 0.6t^2$ cubic meters per hour.`,
    parts: [
      {
        letter: 'a',
        question: '(a) How many cubic meters of snow do the machines add during the time interval $0 \\le t \\le 10$?',
        rubric: [
          { id: 'a1', label: '1 pt — Definite integral of the adding rate', description: '$\\int_0^{10} A(t)\\,dt$, with the correct integrand and limits. Integrating $A(t) - M(t)$ does not earn this point.' },
          { id: 'a2', label: '1 pt — Answer', description: '$\\int_0^{10} A(t)\\,dt \\approx 219.529$ cubic meters (accept 219.529–219.530).' },
        ],
      },
      {
        letter: 'b',
        question: '(b) Is the amount of snow on the slope increasing or decreasing at time $t = 7$? Give a reason for your answer.',
        rubric: [
          { id: 'b1', label: '1 pt — Compares the two rates at t = 7', description: 'States that the amount changes at the rate $A(t) - M(t)$, or computes $A(7) \\approx 19.573$ and $M(7) = 29.4$.' },
          { id: 'b2', label: '1 pt — Decreasing, with reason', description: '$A(7) - M(7) \\approx -9.827 < 0$ (snow melts faster than it is added), so the amount is **decreasing**. A conclusion without the sign of $A(7) - M(7)$ does not earn the point.' },
        ],
      },
      {
        letter: 'c',
        question: '(c) At what time $t$, for $0 \\le t \\le 10$, is the amount of snow on the slope greatest? Find the greatest amount, and justify your answer.',
        rubric: [
          { id: 'c1', label: '1 pt — Sets the net rate equal to zero', description: 'Let $S(t) = 500 + \\int_0^t \\left(A(s) - M(s)\\right)ds$. Then $S\'(t) = A(t) - M(t) = 0$ at $t \\approx 6.054$, the only zero in $0 < t \\le 10$.' },
          { id: 'c2', label: '1 pt — Justification', description: 'Candidates test: $S(0) = 500$, $S(6.054) \\approx 607.331$, $S(10) \\approx 519.529$. Or a sign analysis: $S\' > 0$ on $(0, 6.054)$ and $S\' < 0$ on $(6.054, 10]$, so the only critical point is the absolute maximum.' },
          { id: 'c3', label: '1 pt — Answer', description: 'The amount is greatest at $t \\approx 6.054$ hours, about **607.331 cubic meters** (accept 607.33–607.332).' },
        ],
      },
      {
        letter: 'd',
        question: '(d) At $t = 10$ the snow machines are turned off, and from then on the snow melts at the constant rate $M(10) = 60$ cubic meters per hour. At what time $t$ will all the snow on the slope have melted?',
        rubric: [
          { id: 'd1', label: '1 pt — Amount at t = 10 divided by the melting rate', description: 'Uses $S(10) = 500 + \\int_0^{10}(A(t) - M(t))\\,dt \\approx 519.529$ cubic meters and divides by $60$: about $8.659$ more hours.' },
          { id: 'd2', label: '1 pt — Answer', description: '$t \\approx 10 + 8.659 = 18.659$ hours (about 12:40 a.m. the next day). Accept $18.658$–$18.659$. Reporting $8.659$ alone, without adding the 10 hours, does not earn this point.' },
        ],
      },
    ],
    sampleResponse:
      '(a) ∫₀¹⁰ A(t) dt ≈ 219.529 cubic meters. (b) A(7) − M(7) ≈ 19.573 − 29.4 = −9.827 < 0, so the amount of snow is decreasing at t = 7. (c) S(t) = 500 + ∫₀ᵗ (A(s) − M(s)) ds, and S′(t) = A(t) − M(t) = 0 at t ≈ 6.054. S(0) = 500, S(6.054) ≈ 607.331, S(10) ≈ 519.529, so the amount is greatest at t ≈ 6.054 hours, about 607.331 cubic meters. (d) At t = 10 there are S(10) ≈ 519.529 cubic meters, which melt at 60 cubic meters per hour in 519.529/60 ≈ 8.659 hours, so all the snow is gone at t ≈ 18.659.',
  },

  /* ---- Q2 (calculator): polar curve ---- */
  {
    type: 'saq',
    topic: 'frq-polar',
    prompt: `**FRQ 2 — Part A, graphing calculator (9 points): Polar Curve**

The curve $C$ is given by the polar equation $r = 2 + \\sin(3\\theta)$ for $0 \\le \\theta \\le 2\\pi$. The circle $r = 2$ is also drawn. The curve $C$ lies outside the circle where $\\sin(3\\theta) > 0$, that is, on the three intervals $0 < \\theta < \\frac{\\pi}{3}$, $\\frac{2\\pi}{3} < \\theta < \\pi$ and $\\frac{4\\pi}{3} < \\theta < \\frac{5\\pi}{3}$.`,
    parts: [
      {
        letter: 'a',
        question: '(a) Find the total area of the regions that lie inside $C$ and outside the circle $r = 2$.',
        rubric: [
          { id: 'a1', label: '1 pt — Integrand', description: 'Uses the polar area difference $\\frac{1}{2}\\left[(2 + \\sin 3\\theta)^2 - 2^2\\right]$.' },
          { id: 'a2', label: '1 pt — Limits for all three regions', description: 'Integrates over the three intervals listed, or uses symmetry: $3\\cdot\\frac{1}{2}\\int_0^{\\pi/3}\\left[(2 + \\sin 3\\theta)^2 - 4\\right]d\\theta$.' },
          { id: 'a3', label: '1 pt — Answer', description: 'Total area $\\approx 4.785$ (exactly $4 + \\frac{\\pi}{4}$; accept 4.785). One region alone, $\\approx 1.595$, does not earn this point.' },
        ],
      },
      {
        letter: 'b',
        question: '(b) Find the value of $\\dfrac{dr}{d\\theta}$ at $\\theta = \\dfrac{\\pi}{4}$. As $\\theta$ increases through $\\dfrac{\\pi}{4}$, is the point on $C$ moving toward the origin or away from the origin? Explain.',
        rubric: [
          { id: 'b1', label: '1 pt — Value', description: '$\\frac{dr}{d\\theta} = 3\\cos(3\\theta)$, which is $3\\cos\\frac{3\\pi}{4} \\approx -2.121$ at $\\theta = \\frac{\\pi}{4}$.' },
          { id: 'b2', label: '1 pt — Toward the origin, with reason', description: '$r\\left(\\frac{\\pi}{4}\\right) = 2 + \\sin\\frac{3\\pi}{4} \\approx 2.707 > 0$ and $\\frac{dr}{d\\theta} < 0$, so the distance $r$ from the origin is decreasing: the point moves **toward** the origin. Both signs must be used.' },
        ],
      },
      {
        letter: 'c',
        question: '(c) Find the slope of the line tangent to $C$ at the point where $\\theta = 1$.',
        rubric: [
          { id: 'c1', label: '1 pt — Slope formula', description: '$\\frac{dy}{dx} = \\frac{dy/d\\theta}{dx/d\\theta} = \\frac{r\'\\sin\\theta + r\\cos\\theta}{r\'\\cos\\theta - r\\sin\\theta}$, with $x = r\\cos\\theta$ and $y = r\\sin\\theta$.' },
          { id: 'c2', label: '1 pt — Answer', description: 'At $\\theta = 1$, $r = 2 + \\sin 3 \\approx 2.141$ and $r\' = 3\\cos 3 \\approx -2.970$, so $\\frac{dy}{d\\theta} \\approx -1.342$, $\\frac{dx}{d\\theta} \\approx -3.406$, and the slope is about $0.394$ (accept 0.394).' },
        ],
      },
      {
        letter: 'd',
        question: '(d) A particle moves along $C$ so that $\\dfrac{d\\theta}{dt} = 2$ for all times $t$. Find the rate at which the $y$-coordinate of the particle is changing at the instant when $\\theta = 1$. Is the $y$-coordinate increasing or decreasing at that instant?',
        rubric: [
          { id: 'd1', label: '1 pt — Chain rule', description: '$\\frac{dy}{dt} = \\frac{dy}{d\\theta}\\cdot\\frac{d\\theta}{dt}$, with $y = (2 + \\sin 3\\theta)\\sin\\theta$.' },
          { id: 'd2', label: '1 pt — Answer', description: '$\\frac{dy}{d\\theta} = 3\\cos(3\\theta)\\sin\\theta + (2 + \\sin 3\\theta)\\cos\\theta \\approx -1.342$ at $\\theta = 1$, so $\\frac{dy}{dt} \\approx -2.685$ (accept $-2.684$ to $-2.685$): the $y$-coordinate is **decreasing**. Both the value and the direction are needed for this point.' },
        ],
      },
    ],
    sampleResponse:
      '(a) Area = 3 · ½∫₀^(π/3) [(2 + sin 3θ)² − 4] dθ ≈ 4.785 (exactly 4 + π/4). (b) dr/dθ = 3cos(3θ) ≈ −2.121 at θ = π/4. Since r(π/4) ≈ 2.707 > 0 and dr/dθ < 0, the distance from the origin is decreasing, so the point is moving toward the origin. (c) At θ = 1, r = 2 + sin 3 ≈ 2.141 and dr/dθ = 3cos 3 ≈ −2.970, so dy/dθ = r′sin θ + r cos θ ≈ −1.342 and dx/dθ = r′cos θ − r sin θ ≈ −3.406. The slope is about −1.342/−3.406 ≈ 0.394. (d) dy/dt = (dy/dθ)(dθ/dt) ≈ (−1.342)(2) ≈ −2.685, so the y-coordinate is decreasing at that instant.',
  },

  /* ---- Q3 (no calculator): table of velocities ---- */
  {
    type: 'saq',
    topic: 'frq-table-riemann',
    prompt: `**FRQ 3 — Part B, no calculator (9 points): Delivery Drone**

A delivery drone flies along a straight path. Its velocity $v(t)$, in meters per minute, is a differentiable function of time $t$, in minutes. Selected values of $v(t)$ for $0 \\le t \\le 20$ are given in the table.

| $t$ (minutes) | 0 | 4 | 10 | 16 | 20 |
|---|---|---|---|---|---|
| $v(t)$ (meters per minute) | 0 | 120 | 210 | 150 | 90 |`,
    parts: [
      {
        letter: 'a',
        question: '(a) Use a right Riemann sum with the four subintervals indicated by the table to approximate $\\displaystyle\\int_0^{20} v(t)\\,dt$. Using correct units, explain the meaning of $\\displaystyle\\int_0^{20} v(t)\\,dt$ in the context of the problem.',
        rubric: [
          { id: 'a1', label: '1 pt — Right Riemann sum', description: '$4(120) + 6(210) + 6(150) + 4(90) = 3000$.' },
          { id: 'a2', label: '1 pt — Meaning with units', description: 'The integral is the drone\'s displacement, the change in its position, in **meters**, from $t = 0$ to $t = 20$ minutes. "Total distance traveled" also earns the point if the response notes that it assumes $v(t) \\ge 0$ throughout (the table alone does not guarantee this). "Velocity" or "meters per minute" does not earn the point.' },
        ],
      },
      {
        letter: 'b',
        question: '(b) Must there be a time $t$, for $4 < t < 10$, at which $v\'(t) = 15$? Justify your answer.',
        rubric: [
          { id: 'b1', label: '1 pt — Average rate of change', description: '$\\frac{v(10) - v(4)}{10 - 4} = \\frac{210 - 120}{6} = 15$.' },
          { id: 'b2', label: '1 pt — Yes, by the Mean Value Theorem', description: '$v$ is differentiable, so it is continuous on $[4, 10]$ and differentiable on $(4, 10)$; the Mean Value Theorem guarantees some $t$ in $(4, 10)$ with $v\'(t) = 15$. Naming the theorem without its hypotheses does not earn the point.' },
        ],
      },
      {
        letter: 'c',
        question: '(c) Use a trapezoidal sum with the two subintervals indicated by the table to approximate the average velocity of the drone over the time interval $4 \\le t \\le 16$.',
        rubric: [
          { id: 'c1', label: '1 pt — Trapezoidal sum', description: '$6\\cdot\\frac{120 + 210}{2} + 6\\cdot\\frac{210 + 150}{2} = 990 + 1080 = 2070$.' },
          { id: 'c2', label: '1 pt — Average value', description: '$\\frac{1}{16 - 4}(2070) = 172.5$ meters per minute. Averaging the three table values, $\\frac{120 + 210 + 150}{3} = 160$, does not earn this point.' },
        ],
      },
      {
        letter: 'd',
        question: '(d) After $t = 20$, the drone glides to a stop. For $t \\ge 20$ its velocity is modeled by $v(t) = 90e^{-(t - 20)/5}$ meters per minute. Find the total distance the drone travels for $t \\ge 20$, or show that it is infinite.',
        rubric: [
          { id: 'd1', label: '1 pt — Improper integral', description: '$\\int_{20}^{\\infty} 90e^{-(t - 20)/5}\\,dt = \\lim_{b \\to \\infty}\\int_{20}^{b} 90e^{-(t - 20)/5}\\,dt$. Limit notation (or an equivalent explicit limit) is required.' },
          { id: 'd2', label: '1 pt — Antiderivative', description: '$-450e^{-(t - 20)/5}$.' },
          { id: 'd3', label: '1 pt — Answer', description: '$\\lim_{b \\to \\infty}\\left(-450e^{-(b - 20)/5} + 450\\right) = 450$ meters. The distance is finite.' },
        ],
      },
    ],
    sampleResponse:
      '(a) Right Riemann sum: 4(120) + 6(210) + 6(150) + 4(90) = 3000. ∫₀²⁰ v(t) dt is the drone\'s displacement (change in position), in meters, from t = 0 to t = 20 minutes, about 3000 meters. (b) (v(10) − v(4))/(10 − 4) = 90/6 = 15. Since v is differentiable, it is continuous on [4, 10] and differentiable on (4, 10), so by the Mean Value Theorem there is a t in (4, 10) with v′(t) = 15. (c) Trapezoidal sum: 6(120 + 210)/2 + 6(210 + 150)/2 = 2070, so the average velocity is about 2070/12 = 172.5 meters per minute. (d) ∫₂₀^∞ 90e^(−(t−20)/5) dt = lim (b→∞) [−450e^(−(t−20)/5)] from 20 to b = lim (b→∞) (450 − 450e^(−(b−20)/5)) = 450 meters.',
  },

  /* ---- Q4 (no calculator): separable differential equation ---- */
  {
    type: 'saq',
    topic: 'frq-differential-equation',
    prompt: `**FRQ 4 — Part B, no calculator (9 points): Differential Equation**

Consider the differential equation $\\dfrac{dy}{dx} = (3 - y)\\cos x$. Let $y = f(x)$ be the particular solution to the differential equation with the initial condition $f(0) = 1$. The function $f$ is defined for all real numbers.`,
    parts: [
      {
        letter: 'a',
        question: '(a) Write an equation for the line tangent to the graph of $f$ at $x = 0$, and use it to approximate $f(0.1)$.',
        rubric: [
          { id: 'a1', label: '1 pt — Slope', description: '$\\frac{dy}{dx}$ at $(0, 1)$ is $(3 - 1)\\cos 0 = 2$.' },
          { id: 'a2', label: '1 pt — Tangent line and approximation', description: '$y = 1 + 2x$, so $f(0.1) \\approx 1.2$.' },
        ],
      },
      {
        letter: 'b',
        question: '(b) Find $\\dfrac{d^2y}{dx^2}$ in terms of $x$ and $y$. Is the approximation in part (a) an overestimate or an underestimate of $f(0.1)$? Give a reason for your answer.',
        rubric: [
          { id: 'b1', label: '1 pt — Second derivative', description: '$\\frac{d^2y}{dx^2} = -\\frac{dy}{dx}\\cos x - (3 - y)\\sin x = -(3 - y)\\cos^2 x - (3 - y)\\sin x$.' },
          { id: 'b2', label: '1 pt — Overestimate, with reason', description: 'At $(0, 1)$, $\\frac{d^2y}{dx^2} = -2 < 0$, so the graph of $f$ is concave down near $x = 0$ and lies below its tangent line: $1.2$ is an **overestimate**. The sign of the second derivative must be stated.' },
        ],
      },
      {
        letter: 'c',
        question: '(c) Solve the differential equation, using the condition $f(0) = 1$, to find an expression for $f(x)$.',
        rubric: [
          { id: 'c1', label: '1 pt — Separates variables', description: '$\\frac{dy}{3 - y} = \\cos x\\,dx$.' },
          { id: 'c2', label: '1 pt — Antiderivatives', description: '$-\\ln|3 - y| = \\sin x$ (the $y$-side antiderivative must include the minus sign from the chain rule).' },
          { id: 'c3', label: '1 pt — Constant of integration', description: '$-\\ln|3 - y| = \\sin x + C$.' },
          { id: 'c4', label: '1 pt — Uses the initial condition', description: '$-\\ln 2 = 0 + C$, so $C = -\\ln 2$ (or an equivalent constant after exponentiating).' },
          { id: 'c5', label: '1 pt — Solves for y', description: '$y = 3 - 2e^{-\\sin x}$. This point needs the first two points and a correctly used constant.' },
        ],
      },
    ],
    sampleResponse:
      '(a) At (0, 1), dy/dx = (3 − 1)cos 0 = 2, so the tangent line is y = 1 + 2x and f(0.1) ≈ 1.2. (b) d²y/dx² = −(dy/dx)cos x − (3 − y)sin x = −(3 − y)cos²x − (3 − y)sin x. At (0, 1) this is −2 < 0, so f is concave down near x = 0 and the tangent line lies above the graph: 1.2 is an overestimate. (c) dy/(3 − y) = cos x dx, so −ln|3 − y| = sin x + C. At (0, 1): −ln 2 = C. Then ln|3 − y| = ln 2 − sin x, so 3 − y = 2e^(−sin x) (3 − y > 0 near the initial point) and y = 3 − 2e^(−sin x).',
  },

  /* ---- Q5 (no calculator): partial fractions and improper integrals ---- */
  {
    type: 'saq',
    topic: 'frq-improper-integrals',
    prompt: `**FRQ 5 — Part B, no calculator (9 points): Improper Integrals**

Let $f(x) = \\dfrac{3}{(x + 1)(x + 4)}$ for $x \\ge 0$.`,
    parts: [
      {
        letter: 'a',
        question: '(a) Find the value of $\\displaystyle\\int_0^2 f(x)\\,dx$.',
        rubric: [
          { id: 'a1', label: '1 pt — Partial fractions', description: '$\\frac{3}{(x + 1)(x + 4)} = \\frac{1}{x + 1} - \\frac{1}{x + 4}$.' },
          { id: 'a2', label: '1 pt — Antiderivative', description: '$\\ln|x + 1| - \\ln|x + 4|$, or $\\ln\\left|\\frac{x + 1}{x + 4}\\right|$.' },
          { id: 'a3', label: '1 pt — Answer', description: '$\\ln\\frac{3}{6} - \\ln\\frac{1}{4} = \\ln 2$.' },
        ],
      },
      {
        letter: 'b',
        question: '(b) Determine whether $\\displaystyle\\int_0^{\\infty} f(x)\\,dx$ converges or diverges. If it converges, find its value.',
        rubric: [
          { id: 'b1', label: '1 pt — Limit expression', description: '$\\int_0^{\\infty} f(x)\\,dx = \\lim_{b \\to \\infty}\\left[\\ln\\frac{x + 1}{x + 4}\\right]_0^b$. Limit notation is required.' },
          { id: 'b2', label: '1 pt — Evaluates the limit', description: '$\\lim_{b \\to \\infty}\\ln\\frac{b + 1}{b + 4} = \\ln 1 = 0$. Splitting into $\\lim(\\ln(b + 1)) - \\lim(\\ln(b + 4))$ as $\\infty - \\infty$ does not earn this point.' },
          { id: 'b3', label: '1 pt — Converges, with value', description: 'The integral converges to $0 - \\ln\\frac{1}{4} = \\ln 4$.' },
        ],
      },
      {
        letter: 'c',
        question: '(c) Determine whether $\\displaystyle\\int_0^{\\infty} x\\,f(x)\\,dx$ converges or diverges. Justify your answer.',
        rubric: [
          { id: 'c1', label: '1 pt — Decomposition of the new integrand', description: '$\\frac{3x}{(x + 1)(x + 4)} = -\\frac{1}{x + 1} + \\frac{4}{x + 4}$. Comparison tests for improper integrals are not in the CED, but a complete and correct comparison argument (for example, $x f(x) \\ge \\frac{3}{2(x + 4)}$ for $x \\ge 2$, whose integral diverges) earns all three points of this part.' },
          { id: 'c2', label: '1 pt — Limit of the antiderivative', description: '$\\int_0^b x f(x)\\,dx = -\\ln(b + 1) + 4\\ln(b + 4) - 4\\ln 4 = \\ln\\frac{(b + 4)^4}{b + 1} - 4\\ln 4$.' },
          { id: 'c3', label: '1 pt — Diverges, with reason', description: '$\\frac{(b + 4)^4}{b + 1} \\to \\infty$ as $b \\to \\infty$, so the integral **diverges**. The integrand does approach $0$, so that alone settles nothing; the conclusion must come from the limit of the antiderivative.' },
        ],
      },
    ],
    sampleResponse:
      '(a) 3/((x + 1)(x + 4)) = 1/(x + 1) − 1/(x + 4), so ∫₀² f(x) dx = [ln((x + 1)/(x + 4))]₀² = ln(3/6) − ln(1/4) = ln 2. (b) ∫₀^∞ f(x) dx = lim (b→∞) [ln((x + 1)/(x + 4))]₀ᵇ = lim (b→∞) ln((b + 1)/(b + 4)) − ln(1/4) = 0 + ln 4 = ln 4, so the integral converges to ln 4. (c) 3x/((x + 1)(x + 4)) = −1/(x + 1) + 4/(x + 4), so ∫₀ᵇ x f(x) dx = −ln(b + 1) + 4ln(b + 4) − 4ln 4 = ln((b + 4)⁴/(b + 1)) − 4ln 4. As b → ∞, (b + 4)⁴/(b + 1) → ∞, so the integral diverges.',
  },

  /* ---- Q6 (no calculator): power series ---- */
  {
    type: 'saq',
    topic: 'frq-power-series',
    prompt: `**FRQ 6 — Part B, no calculator (9 points): Power Series**

The function $f$ is defined by the power series

$$f(x) = \\sum_{n=1}^{\\infty} \\frac{(x - 2)^n}{n^2\\cdot 3^n}$$

for all $x$ for which the series converges.`,
    parts: [
      {
        letter: 'a',
        question: '(a) Find the interval of convergence of the power series for $f$. Justify your answer.',
        rubric: [
          { id: 'a1', label: '1 pt — Ratio test', description: '$\\left|\\frac{a_{n+1}}{a_n}\\right| = \\frac{|x - 2|}{3}\\cdot\\frac{n^2}{(n + 1)^2} \\to \\frac{|x - 2|}{3}$, so the series converges for $|x - 2| < 3$, that is, $-1 < x < 5$.' },
          { id: 'a2', label: '1 pt — Endpoint x = 5', description: 'The series is $\\sum\\frac{1}{n^2}$, a $p$-series with $p = 2 > 1$, so it converges.' },
          { id: 'a3', label: '1 pt — Endpoint x = −1 and interval', description: 'The series is $\\sum\\frac{(-1)^n}{n^2}$, which converges absolutely (its absolute values form $\\sum\\frac{1}{n^2}$). Interval: $-1 \\le x \\le 5$.' },
        ],
      },
      {
        letter: 'b',
        question: '(b) Write the first three nonzero terms and the general term of the Taylor series for $f\'$ about $x = 2$.',
        rubric: [
          { id: 'b1', label: '1 pt — First three nonzero terms', description: '$\\frac{1}{3} + \\frac{x - 2}{18} + \\frac{(x - 2)^2}{81}$.' },
          { id: 'b2', label: '1 pt — General term', description: '$\\frac{(x - 2)^{n-1}}{n\\cdot 3^n}$ for $n \\ge 1$ (or an equivalent re-indexed form).' },
        ],
      },
      {
        letter: 'c',
        question: '(c) Use the first two nonzero terms of the series for $f$ to approximate $f(1.7)$. Use the alternating series error bound to show that this approximation differs from $f(1.7)$ by less than $0.0002$.',
        rubric: [
          { id: 'c1', label: '1 pt — Approximation', description: 'At $x = 1.7$, $x - 2 = -0.3$ and the terms are $\\frac{(-0.1)^n}{n^2}$: $f(1.7) \\approx -0.1 + \\frac{0.01}{4} = -0.0975$.' },
          { id: 'c2', label: '1 pt — Error bound', description: 'The series alternates with terms decreasing in absolute value to $0$, so the error is at most the first omitted term: $\\frac{0.001}{9} \\approx 0.000111 < 0.0002$.' },
        ],
      },
      {
        letter: 'd',
        question: '(d) Let $g(x) = \\displaystyle\\int_2^x f(t)\\,dt$. Write the first three nonzero terms of the Taylor series for $g$ about $x = 2$.',
        rubric: [
          { id: 'd1', label: '1 pt — Integrates term by term', description: 'Each term $\\frac{(t - 2)^n}{n^2 3^n}$ becomes $\\frac{(x - 2)^{n+1}}{(n + 1)n^2 3^n}$, with no constant term since $g(2) = 0$.' },
          { id: 'd2', label: '1 pt — Three terms', description: '$\\frac{(x - 2)^2}{6} + \\frac{(x - 2)^3}{108} + \\frac{(x - 2)^4}{972}$.' },
        ],
      },
    ],
    sampleResponse:
      '(a) |aₙ₊₁/aₙ| = (|x − 2|/3)·n²/(n + 1)² → |x − 2|/3 < 1, so −1 < x < 5. At x = 5 the series is Σ1/n², a convergent p-series (p = 2). At x = −1 it is Σ(−1)ⁿ/n², which converges absolutely. The interval of convergence is −1 ≤ x ≤ 5. (b) f′(x) = 1/3 + (x − 2)/18 + (x − 2)²/81 + ⋯ + (x − 2)^(n−1)/(n·3ⁿ) + ⋯. (c) At x = 1.7 the terms are (−0.1)ⁿ/n², so f(1.7) ≈ −0.1 + 0.0025 = −0.0975. The series alternates with terms decreasing to 0, so the error is at most 0.001/9 ≈ 0.000111 < 0.0002. (d) g(x) = (x − 2)²/6 + (x − 2)³/108 + (x − 2)⁴/972 + ⋯.',
  },
]
