import type { SAQItem } from '@/components/FullLengthPracticeExam'

/**
 * AP Calculus BC practice exam, form 3: 6 FRQs (May 2027 Section II), 9 points each.
 *   Part A (graphing calculator, Q1–Q2): table of rates with a model (storm drain);
 *   motion in the plane from velocity components.
 *   Part B (no calculator, Q3–Q6): graph of f'; separable differential equation with
 *   Euler's method and a domain; parametric curve with arc length; Taylor series from
 *   a derivative formula.
 * One RubricPoint = one point.
 */

export const FRQS: SAQItem[] = [
  /* ---- Q1 (calculator): table of rates and a model ---- */
  {
    type: 'saq',
    topic: 'frq-table-and-model',
    prompt: `**FRQ 1 — Part A, graphing calculator (9 points): Storm Drain**

During a 12-hour storm, rainwater flows into a storm drain at a rate $R(t)$ cubic feet per hour, where $t$ is measured in hours and $R$ is a differentiable function. Selected values of $R(t)$ are given in the table.

| $t$ (hours) | 0 | 2 | 5 | 9 | 12 |
|---|---|---|---|---|---|
| $R(t)$ (cubic feet per hour) | 30 | 46 | 58 | 40 | 24 |

An engineer also models the rate with the function $M(t) = 30 + 9te^{-t/5}$ cubic feet per hour, for $0 \\le t \\le 12$.`,
    parts: [
      {
        letter: 'a',
        question: '(a) Use the data in the table to estimate $R\'(7)$. Using correct units, explain the meaning of $R\'(7)$ in the context of the problem.',
        rubric: [
          { id: 'a1', label: '1 pt — Estimate', description: '$R\'(7) \\approx \\frac{R(9) - R(5)}{9 - 5} = \\frac{40 - 58}{4} = -4.5$.' },
          { id: 'a2', label: '1 pt — Meaning with units', description: 'At $t = 7$ hours, the rate at which water flows into the drain is decreasing by about 4.5 **cubic feet per hour per hour**. An interpretation about the amount of water, rather than the rate, does not earn the point.' },
        ],
      },
      {
        letter: 'b',
        question: '(b) Use a trapezoidal sum with the four subintervals indicated by the table to approximate $\\displaystyle\\int_0^{12} R(t)\\,dt$.',
        rubric: [
          { id: 'b1', label: '1 pt — Trapezoidal form', description: 'Uses each subinterval\'s own width: $2\\cdot\\frac{30 + 46}{2} + 3\\cdot\\frac{46 + 58}{2} + 4\\cdot\\frac{58 + 40}{2} + 3\\cdot\\frac{40 + 24}{2}$.' },
          { id: 'b2', label: '1 pt — Answer', description: '$76 + 156 + 196 + 96 = 524$ cubic feet.' },
        ],
      },
      {
        letter: 'c',
        question: '(c) Use the model $M$ to find the average rate at which water flows into the drain over the time interval $0 \\le t \\le 12$.',
        rubric: [
          { id: 'c1', label: '1 pt — Average-value integral', description: '$\\frac{1}{12}\\int_0^{12} M(t)\\,dt$. The integral alone, about $515.601$, does not earn this point without the factor $\\frac{1}{12}$.' },
          { id: 'c2', label: '1 pt — Answer', description: 'About $42.967$ cubic feet per hour (accept 42.966–42.967).' },
        ],
      },
      {
        letter: 'd',
        question: '(d) According to the model $M$, water backs up in the drain whenever the inflow rate is greater than 45 cubic feet per hour. For how many hours during $0 \\le t \\le 12$ does the model predict that water backs up?',
        rubric: [
          { id: 'd1', label: '1 pt — Sets up the inequality', description: 'Considers $M(t) = 45$ or $M(t) > 45$ (for example, by graphing $M$ and the line $y = 45$).' },
          { id: 'd2', label: '1 pt — Endpoints', description: '$M(t) = 45$ at $t \\approx 3.095$ and $t \\approx 7.561$, with $M(t) > 45$ between them.' },
          { id: 'd3', label: '1 pt — Answer', description: '$7.561 - 3.095 \\approx 4.465$ hours (accept 4.465–4.466).' },
        ],
      },
    ],
    sampleResponse:
      '(a) R′(7) ≈ (R(9) − R(5))/(9 − 5) = (40 − 58)/4 = −4.5. At t = 7 hours the inflow rate is decreasing at about 4.5 cubic feet per hour per hour. (b) 2(30 + 46)/2 + 3(46 + 58)/2 + 4(58 + 40)/2 + 3(40 + 24)/2 = 76 + 156 + 196 + 96 = 524 cubic feet. (c) (1/12)∫₀¹² M(t) dt ≈ 515.601/12 ≈ 42.967 cubic feet per hour. (d) Graphing M with y = 45 shows M(t) > 45 for 3.095 < t < 7.561, so the model predicts water backs up for about 7.561 − 3.095 ≈ 4.465 hours.',
  },

  /* ---- Q2 (calculator): motion in the plane ---- */
  {
    type: 'saq',
    topic: 'frq-parametric-vector-motion',
    prompt: `**FRQ 2 — Part A, graphing calculator (9 points): Motion in the Plane**

A particle moves in the $xy$-plane so that, for $0 \\le t \\le 4$,
$$\\frac{dx}{dt} = 3\\cos\\left(\\frac{t^2}{4}\\right) \\quad\\text{and}\\quad \\frac{dy}{dt} = 2 - \\sqrt{t + 1}.$$
At time $t = 0$ the particle is at the point $(2, -1)$.`,
    parts: [
      {
        letter: 'a',
        question: '(a) Find the speed of the particle at time $t = 2$, and find its acceleration vector at time $t = 2$.',
        rubric: [
          { id: 'a1', label: '1 pt — Speed', description: '$\\sqrt{(x\'(2))^2 + (y\'(2))^2} \\approx \\sqrt{1.621^2 + 0.268^2} \\approx 1.643$.' },
          { id: 'a2', label: '1 pt — Acceleration vector', description: '$\\langle x\'\'(2), y\'\'(2)\\rangle \\approx \\langle -2.524, -0.289\\rangle$ (calculator derivatives; exactly $\\langle -3\\sin 1, -\\frac{1}{2\\sqrt{3}}\\rangle$).' },
        ],
      },
      {
        letter: 'b',
        question: '(b) At what time $t$, for $0 < t < 4$, is the particle moving vertically? Justify your answer.',
        rubric: [
          { id: 'b1', label: '1 pt — Sets dx/dt = 0', description: '$3\\cos\\left(\\frac{t^2}{4}\\right) = 0$ when $\\frac{t^2}{4} = \\frac{\\pi}{2}$, so $t = \\sqrt{2\\pi} \\approx 2.507$ (the only solution in $0 < t < 4$).' },
          { id: 'b2', label: '1 pt — Checks dy/dt', description: '$\\frac{dy}{dt} = 2 - \\sqrt{3.507} \\approx 0.127 \\ne 0$ at that time, so the motion is vertical (not a stop).' },
        ],
      },
      {
        letter: 'c',
        question: '(c) Find the position of the particle at time $t = 4$.',
        rubric: [
          { id: 'c1', label: '1 pt — Position as initial value plus integral', description: '$x(4) = 2 + \\int_0^4 x\'(t)\\,dt$ and $y(4) = -1 + \\int_0^4 y\'(t)\\,dt$.' },
          { id: 'c2', label: '1 pt — x-coordinate', description: '$x(4) \\approx 4.769$ (accept 4.768–4.769).' },
          { id: 'c3', label: '1 pt — y-coordinate', description: '$y(4) \\approx 0.213$ (accept 0.213).' },
        ],
      },
      {
        letter: 'd',
        question: '(d) How far does the particle travel along its path from $t = 0$ to $t = 4$?',
        rubric: [
          { id: 'd1', label: '1 pt — Integral of speed', description: '$\\int_0^4\\sqrt{(x\'(t))^2 + (y\'(t))^2}\\,dt$.' },
          { id: 'd2', label: '1 pt — Answer', description: 'About $9.123$ (accept 9.123). The straight-line distance between $(2, -1)$ and the final position does not earn this point.' },
        ],
      },
    ],
    sampleResponse:
      '(a) x′(2) = 3cos(1) ≈ 1.621 and y′(2) = 2 − √3 ≈ 0.268, so the speed is √(1.621² + 0.268²) ≈ 1.643. The acceleration is ⟨x″(2), y″(2)⟩ ≈ ⟨−2.524, −0.289⟩. (b) dx/dt = 0 when t²/4 = π/2, so t = √(2π) ≈ 2.507. There dy/dt = 2 − √3.507 ≈ 0.127 ≠ 0, so the particle is moving vertically at t ≈ 2.507. (c) x(4) = 2 + ∫₀⁴ 3cos(t²/4) dt ≈ 4.769 and y(4) = −1 + ∫₀⁴ (2 − √(t + 1)) dt ≈ 0.213, so the position is about (4.769, 0.213). (d) ∫₀⁴ √((x′(t))² + (y′(t))²) dt ≈ 9.123.',
  },

  /* ---- Q3 (no calculator): graph of f' ---- */
  {
    type: 'saq',
    topic: 'frq-graph-of-derivative',
    prompt: `**FRQ 3 — Part B, no calculator (9 points): Graph of f′**

The function $f$ is differentiable on the closed interval $-3 \\le x \\le 5$, and $f(1) = 4$. The graph of $f'$, the derivative of $f$, consists of a semicircle and three line segments:
- on $-3 \\le x \\le -1$, the upper half of the circle of radius 1 centered at $(-2, 0)$;
- a segment from $(-1, 0)$ to $(1, -2)$;
- a segment from $(1, -2)$ to $(3, 2)$, which crosses the $x$-axis at $x = 2$;
- a horizontal segment from $(3, 2)$ to $(5, 2)$.`,
    parts: [
      {
        letter: 'a',
        question: '(a) Find $f(-3)$ and $f(5)$.',
        rubric: [
          { id: 'a1', label: '1 pt — f(−3)', description: '$f(-3) = f(1) - \\int_{-3}^{1} f\'(x)\\,dx = 4 - \\left(\\frac{\\pi}{2} - 2\\right) = 6 - \\frac{\\pi}{2}$.' },
          { id: 'a2', label: '1 pt — f(5)', description: '$f(5) = f(1) + \\int_1^5 f\'(x)\\,dx = 4 + (-1 + 1 + 4) = 8$.' },
        ],
      },
      {
        letter: 'b',
        question: '(b) Find the $x$-coordinate of each point at which $f$ has a relative extremum on the open interval $-3 < x < 5$. Classify each one, and justify your answers.',
        rubric: [
          { id: 'b1', label: '1 pt — Both points', description: '$x = -1$ and $x = 2$ (where $f\'$ changes sign).' },
          { id: 'b2', label: '1 pt — Relative maximum at x = −1, with reason', description: '$f\'$ changes from positive to negative at $x = -1$.' },
          { id: 'b3', label: '1 pt — Relative minimum at x = 2, with reason', description: '$f\'$ changes from negative to positive at $x = 2$. Stating "$f\' = 0$" alone does not earn either justification point.' },
        ],
      },
      {
        letter: 'c',
        question: '(c) Find the absolute minimum value of $f$ on the closed interval $-3 \\le x \\le 5$. Justify your answer.',
        rubric: [
          { id: 'c1', label: '1 pt — Candidates', description: 'Considers the endpoints and the critical point: $f(-3) = 6 - \\frac{\\pi}{2}$, $f(2) = f(1) + \\int_1^2 f\'(x)\\,dx = 4 - 1 = 3$, $f(5) = 8$.' },
          { id: 'c2', label: '1 pt — Answer', description: 'The absolute minimum value is $3$, at $x = 2$ (since $6 - \\frac{\\pi}{2} > 4 > 3$).' },
        ],
      },
      {
        letter: 'd',
        question: '(d) Find $\\displaystyle\\lim_{x \\to 1} \\frac{f(x) - 4}{x^2 - 1}$, or show that it does not exist.',
        rubric: [
          { id: 'd1', label: '1 pt — Indeterminate form and L\'Hospital\'s rule', description: '$f(x) - 4 \\to 0$ (since $f$ is continuous and $f(1) = 4$) and $x^2 - 1 \\to 0$, so L\'Hospital\'s rule gives $\\lim_{x \\to 1}\\frac{f\'(x)}{2x}$. The $\\frac{0}{0}$ form must be stated. Also accept the derivative-definition route: $\\frac{f(x) - f(1)}{x - 1}\\cdot\\frac{1}{x + 1} \\to f\'(1)\\cdot\\frac{1}{2}$.' },
          { id: 'd2', label: '1 pt — Answer', description: '$\\frac{f\'(1)}{2} = \\frac{-2}{2} = -1$.' },
        ],
      },
    ],
    sampleResponse:
      '(a) On [−3, −1] the semicircle above the axis has area π/2, and on [−1, 1] the triangle below the axis has area 2, so ∫₋₃¹ f′(x) dx = π/2 − 2 and f(−3) = 4 − (π/2 − 2) = 6 − π/2. On [1, 5]: triangle below on [1, 2] (−1), triangle above on [2, 3] (+1), rectangle on [3, 5] (+4), so f(5) = 4 + 4 = 8. (b) f′ changes from positive to negative at x = −1, a relative maximum, and from negative to positive at x = 2, a relative minimum. (c) Candidates: f(−3) = 6 − π/2 ≈ 4.43, f(2) = 4 − 1 = 3, f(5) = 8. The absolute minimum value is 3, at x = 2. (d) f(x) − 4 → 0 and x² − 1 → 0, so by L\'Hospital\'s rule the limit is lim f′(x)/(2x) = f′(1)/2 = −2/2 = −1.',
  },

  /* ---- Q4 (no calculator): differential equation ---- */
  {
    type: 'saq',
    topic: 'frq-differential-equation',
    prompt: `**FRQ 4 — Part B, no calculator (9 points): Differential Equation**

Let $y = f(x)$ be the particular solution to the differential equation $\\dfrac{dy}{dx} = 2x(y - 1)^2$ with the initial condition $f(0) = 2$.`,
    parts: [
      {
        letter: 'a',
        question: '(a) Use Euler\'s method, starting at $x = 0$ with two steps of equal size, to approximate $f(0.5)$. Show the work that leads to your answer.',
        rubric: [
          { id: 'a1', label: '1 pt — First step', description: 'Slope at $(0, 2)$ is $0$, so $f(0.25) \\approx 2$.' },
          { id: 'a2', label: '1 pt — Second step and answer', description: 'Slope at $(0.25, 2)$ is $2(0.25)(1)^2 = 0.5$, so $f(0.5) \\approx 2 + 0.25(0.5) = 2.125$.' },
        ],
      },
      {
        letter: 'b',
        question: '(b) Express the second derivative of $y$ with respect to $x$ using $x$ and $y$. Then classify the critical point of $f$ at $x = 0$ as a local maximum, a local minimum, or neither, and justify the classification.',
        rubric: [
          { id: 'b1', label: '1 pt — Second derivative', description: '$\\frac{d^2y}{dx^2} = 2(y - 1)^2 + 4x(y - 1)\\frac{dy}{dx} = 2(y - 1)^2 + 8x^2(y - 1)^3$.' },
          { id: 'b2', label: '1 pt — Relative minimum, with reason', description: 'At $(0, 2)$, $\\frac{dy}{dx} = 0$ and $\\frac{d^2y}{dx^2} = 2 > 0$, so by the Second Derivative Test $f$ has a **relative minimum** at $x = 0$. Both facts must be stated.' },
        ],
      },
      {
        letter: 'c',
        question: '(c) Find $y = f(x)$, and state the domain on which the solution is defined.',
        rubric: [
          { id: 'c1', label: '1 pt — Separates variables', description: '$\\frac{dy}{(y - 1)^2} = 2x\\,dx$.' },
          { id: 'c2', label: '1 pt — Antiderivatives', description: '$-\\frac{1}{y - 1} = x^2$ (both sides correct).' },
          { id: 'c3', label: '1 pt — Constant and initial condition', description: '$-\\frac{1}{y - 1} = x^2 + C$ with $-1 = 0 + C$, so $C = -1$.' },
          { id: 'c4', label: '1 pt — Solves for y', description: '$y = 1 + \\frac{1}{1 - x^2}$. Requires the first two points and a correctly used constant.' },
          { id: 'c5', label: '1 pt — Domain', description: '$-1 < x < 1$: the solution through $(0, 2)$ cannot cross the vertical asymptotes at $x = \\pm1$.' },
        ],
      },
    ],
    sampleResponse:
      '(a) At (0, 2) the slope is 2(0)(1)² = 0, so f(0.25) ≈ 2. At (0.25, 2) the slope is 2(0.25)(1)² = 0.5, so f(0.5) ≈ 2 + 0.25(0.5) = 2.125. (b) d²y/dx² = 2(y − 1)² + 4x(y − 1)(dy/dx) = 2(y − 1)² + 8x²(y − 1)³. At (0, 2), dy/dx = 0 and d²y/dx² = 2 > 0, so f has a relative minimum at x = 0. (c) dy/(y − 1)² = 2x dx, so −1/(y − 1) = x² + C. At (0, 2): −1 = C. Then 1/(y − 1) = 1 − x², so y = 1 + 1/(1 − x²). The solution is defined for −1 < x < 1.',
  },

  /* ---- Q5 (no calculator): parametric curve ---- */
  {
    type: 'saq',
    topic: 'frq-parametric-curve',
    prompt: `**FRQ 5 — Part B, no calculator (9 points): Parametric Curve**

A curve $C$ is defined by the parametric equations $x = t^2$ and $y = \\dfrac{t^3}{3} - t$, for all real numbers $t$.`,
    parts: [
      {
        letter: 'a',
        question: '(a) Find $\\dfrac{dy}{dx}$ in terms of $t$, and find the slope of the line tangent to $C$ at the point where $t = 2$.',
        rubric: [
          { id: 'a1', label: '1 pt — dy/dx', description: '$\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt} = \\frac{t^2 - 1}{2t}$.' },
          { id: 'a2', label: '1 pt — Slope at t = 2', description: '$\\frac{4 - 1}{4} = \\frac{3}{4}$.' },
        ],
      },
      {
        letter: 'b',
        question: '(b) Find the coordinates of each point on $C$ at which the tangent line is horizontal, and of each point at which it is vertical.',
        rubric: [
          { id: 'b1', label: '1 pt — Horizontal tangents', description: '$\\frac{dy}{dt} = t^2 - 1 = 0$ with $\\frac{dx}{dt} = 2t \\ne 0$: $t = 1$ gives $\\left(1, -\\frac{2}{3}\\right)$ and $t = -1$ gives $\\left(1, \\frac{2}{3}\\right)$.' },
          { id: 'b2', label: '1 pt — Vertical tangent', description: '$\\frac{dx}{dt} = 2t = 0$ at $t = 0$, where $\\frac{dy}{dt} = -1 \\ne 0$: the point $(0, 0)$.' },
        ],
      },
      {
        letter: 'c',
        question: '(c) Find $\\dfrac{d^2y}{dx^2}$ at the point where $t = 2$. Is $C$ concave up or concave down there? Give a reason for your answer.',
        rubric: [
          { id: 'c1', label: '1 pt — Second derivative', description: '$\\frac{d}{dt}\\left(\\frac{t^2 - 1}{2t}\\right) = \\frac{t^2 + 1}{2t^2}$, and dividing by $\\frac{dx}{dt} = 2t$ gives $\\frac{d^2y}{dx^2} = \\frac{t^2 + 1}{4t^3}$, which is $\\frac{5}{32}$ at $t = 2$.' },
          { id: 'c2', label: '1 pt — Concave up, with reason', description: '$\\frac{d^2y}{dx^2} = \\frac{5}{32} > 0$, so $C$ is concave up at $t = 2$. Not dividing by $\\frac{dx}{dt}$ does not earn the first point but can earn this one if the sign argument is consistent.' },
        ],
      },
      {
        letter: 'd',
        question: '(d) Find the length of the arc of $C$ from $t = 0$ to $t = 2$.',
        rubric: [
          { id: 'd1', label: '1 pt — Arc length integral', description: '$\\int_0^2\\sqrt{(2t)^2 + (t^2 - 1)^2}\\,dt$.' },
          { id: 'd2', label: '1 pt — Simplifies the integrand', description: '$(2t)^2 + (t^2 - 1)^2 = t^4 + 2t^2 + 1 = (t^2 + 1)^2$, so the integrand is $t^2 + 1$.' },
          { id: 'd3', label: '1 pt — Answer', description: '$\\int_0^2(t^2 + 1)\\,dt = \\frac{8}{3} + 2 = \\frac{14}{3}$.' },
        ],
      },
    ],
    sampleResponse:
      '(a) dx/dt = 2t and dy/dt = t² − 1, so dy/dx = (t² − 1)/(2t). At t = 2 the slope is 3/4. (b) Horizontal: t² − 1 = 0 with 2t ≠ 0, so t = ±1, at the points (1, −2/3) and (1, 2/3). Vertical: 2t = 0 at t = 0, where dy/dt = −1 ≠ 0, at the point (0, 0). (c) d/dt[(t² − 1)/(2t)] = (t² + 1)/(2t²), so d²y/dx² = (t² + 1)/(4t³) = 5/32 at t = 2. Since 5/32 > 0, C is concave up there. (d) (2t)² + (t² − 1)² = (t² + 1)², so the length is ∫₀² (t² + 1) dt = 8/3 + 2 = 14/3.',
  },

  /* ---- Q6 (no calculator): Taylor series ---- */
  {
    type: 'saq',
    topic: 'frq-taylor-series',
    prompt: `**FRQ 6 — Part B, no calculator (9 points): Taylor Series**

A function $f$ has derivatives of all orders for $-3 < x < 3$. It satisfies $f(0) = 2$ and
$$f^{(n)}(0) = \\frac{(-1)^n (n + 1)!}{3^n} \\quad\\text{for } n \\ge 1,$$
and its Maclaurin series converges to $f(x)$ on its interval of convergence.`,
    parts: [
      {
        letter: 'a',
        question: '(a) Find the Maclaurin series for $f$: give its four lowest-degree nonzero terms and its general term.',
        rubric: [
          { id: 'a1', label: '1 pt — First four terms', description: '$2 - \\frac{2}{3}x + \\frac{1}{3}x^2 - \\frac{4}{27}x^3$ (coefficients $\\frac{f^{(n)}(0)}{n!} = \\frac{(-1)^n(n + 1)}{3^n}$ for $n \\ge 1$).' },
          { id: 'a2', label: '1 pt — General term', description: '$\\frac{(-1)^n(n + 1)x^n}{3^n}$ for $n \\ge 1$ (the constant term is $2$).' },
        ],
      },
      {
        letter: 'b',
        question: '(b) Find the interval of convergence of the Maclaurin series for $f$. Justify your answer.',
        rubric: [
          { id: 'b1', label: '1 pt — Ratio test', description: '$\\left|\\frac{a_{n+1}}{a_n}\\right| = \\frac{n + 2}{n + 1}\\cdot\\frac{|x|}{3} \\to \\frac{|x|}{3}$, so the series converges for $|x| < 3$.' },
          { id: 'b2', label: '1 pt — Endpoints', description: 'At $x = 3$ the terms are $(-1)^n(n + 1)$ and at $x = -3$ they are $n + 1$; in both cases the terms do not approach $0$, so the series diverges by the $n$th term test.' },
          { id: 'b3', label: '1 pt — Interval', description: '$-3 < x < 3$.' },
        ],
      },
      {
        letter: 'c',
        question: '(c) Let $g(x) = \\displaystyle\\int_0^x f(t)\\,dt$. Find the three lowest-degree nonzero terms in the power-series expansion of $g$ about $x = 0$.',
        rubric: [
          { id: 'c1', label: '1 pt — Integrates term by term', description: 'Each term $a_n t^n$ becomes $\\frac{a_n x^{n+1}}{n + 1}$, with no constant term because $g(0) = 0$.' },
          { id: 'c2', label: '1 pt — Three terms', description: '$2x - \\frac{1}{3}x^2 + \\frac{1}{9}x^3$.' },
        ],
      },
      {
        letter: 'd',
        question: '(d) The series for $g(1)$ is $2 - \\dfrac{1}{3} + \\dfrac{1}{9} - \\dfrac{1}{27} + \\cdots$. Use the first two terms to approximate $g(1)$, and use the alternating series error bound to show that this approximation differs from $g(1)$ by at most $\\dfrac{1}{9}$.',
        rubric: [
          { id: 'd1', label: '1 pt — Approximation', description: '$g(1) \\approx 2 - \\frac{1}{3} = \\frac{5}{3}$.' },
          { id: 'd2', label: '1 pt — Error bound', description: 'The series alternates in sign, and the absolute values of its terms, $2, \\frac{1}{3}, \\frac{1}{9}, \\ldots$, decrease to $0$, so the error is at most the first omitted term, $\\frac{1}{9}$. The conditions (alternating, decreasing in absolute value, limit $0$) must be stated.' },
        ],
      },
    ],
    sampleResponse:
      '(a) The coefficients are f⁽ⁿ⁾(0)/n! = (−1)ⁿ(n + 1)/3ⁿ for n ≥ 1, so f(x) = 2 − (2/3)x + (1/3)x² − (4/27)x³ + ⋯ + (−1)ⁿ(n + 1)xⁿ/3ⁿ + ⋯. (b) |aₙ₊₁/aₙ| = ((n + 2)/(n + 1))·|x|/3 → |x|/3 < 1, so |x| < 3. At x = ±3 the terms are ±(n + 1) in absolute value n + 1, which does not approach 0, so the series diverges at both endpoints. The interval of convergence is −3 < x < 3. (c) g(x) = 2x − (1/3)x² + (1/9)x³ − ⋯. (d) g(1) ≈ 2 − 1/3 = 5/3. The series alternates in sign, and the absolute values of its terms (2, 1/3, 1/9, …) decrease to 0, so |g(1) − 5/3| is at most the first omitted term, 1/9.',
  },
]
