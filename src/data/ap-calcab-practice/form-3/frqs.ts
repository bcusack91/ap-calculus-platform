import type { SAQItem } from '@/components/FullLengthPracticeExam'

/**
 * AP Calculus AB practice exam, form 3: 6 FRQs (May 2027 Section II), 9 points each.
 *   Part A (graphing calculator, Q1–Q2): reservoir outflow data with a model;
 *   area and volume.
 *   Part B (no calculator, Q3–Q6): analysis from the graph of f'; draining-tank
 *   differential equation; related rates in a trough; table of values for f and g.
 * One RubricPoint = one point.
 */

export const FRQS: SAQItem[] = [
  /* ---- Q1 (calculator): table of data plus a model ---- */
  {
    type: 'saq',
    topic: 'frq-table-and-model',
    prompt: `**FRQ 1 — Part A, graphing calculator (9 points): Reservoir Outflow**

Water is released from a reservoir through a dam. The rate of release is $F(t)$ thousand cubic meters per hour, where $t$ is the number of hours after midnight, for $0 \\le t \\le 12$. The function $F$ is differentiable. Selected values of $F(t)$ are given in the table.

| $t$ (hours) | 0 | 2 | 5 | 7 | 10 | 12 |
|---|---|---|---|---|---|---|
| $F(t)$ (thousand cubic meters per hour) | 30 | 47 | 49 | 39 | 36 | 50 |`,
    parts: [
      {
        letter: 'a',
        question: '(a) Use the data in the table to estimate $F\'(6)$. Show the computations that lead to your answer. Indicate units of measure.',
        rubric: [
          { id: 'a1', label: '1 pt — Estimate', description: '$F\'(6) \\approx \\dfrac{F(7) - F(5)}{7 - 5} = \\dfrac{39 - 49}{2} = -5$. A difference quotient must use values on both sides of $t = 6$.' },
          { id: 'a2', label: '1 pt — Units', description: 'Thousand cubic meters per hour per hour (thousand m³/hr²).' },
        ],
      },
      {
        letter: 'b',
        question: '(b) Use a trapezoidal sum with the five subintervals indicated by the table to approximate $\\displaystyle\\int_0^{12} F(t)\\,dt$. Using correct units, explain the meaning of $\\displaystyle\\int_0^{12} F(t)\\,dt$ in the context of the problem.',
        rubric: [
          { id: 'b1', label: '1 pt — Trapezoidal sum', description: '$\\frac{30+47}{2}(2) + \\frac{47+49}{2}(3) + \\frac{49+39}{2}(2) + \\frac{39+36}{2}(3) + \\frac{36+50}{2}(2) = 77 + 144 + 88 + 112.5 + 86 = 507.5$.' },
          { id: 'b2', label: '1 pt — Meaning with units', description: 'The total amount of water released from midnight to noon, about 507.5 **thousand cubic meters**. An answer about a rate does not earn the point.' },
        ],
      },
      {
        letter: 'c',
        question: '(c) For $0 \\le t \\le 12$, the rate of release is modeled by $G(t) = 30 + 2t + 15\\sin\\left(\\dfrac{t}{2}\\right)$. Use the model to find the average rate of release over the interval $0 \\le t \\le 12$.',
        rubric: [
          { id: 'c1', label: '1 pt — Average value integral', description: '$\\dfrac{1}{12}\\displaystyle\\int_0^{12} G(t)\\,dt$.' },
          { id: 'c2', label: '1 pt — Answer', description: 'About $42.100$ thousand cubic meters per hour (accept 42.099–42.100).' },
        ],
      },
      {
        letter: 'd',
        question: '(d) Using the model $G$, find the time $t$ in $0 \\le t \\le 12$ at which the rate of release is greatest. What is the greatest rate? Justify your answer.',
        rubric: [
          { id: 'd1', label: '1 pt — Sets G′(t) = 0', description: '$G\'(t) = 2 + 7.5\\cos\\left(\\frac{t}{2}\\right) = 0$ at $t \\approx 3.681$ and $t \\approx 8.885$ on the interval.' },
          { id: 'd2', label: '1 pt — Justification', description: 'Candidates: $G(0) = 30$, $G(3.681) \\approx 51.820$, $G(8.885) \\approx 33.313$, $G(12) \\approx 49.809$. Comparing only the critical points, without the endpoints, does not earn this point.' },
          { id: 'd3', label: '1 pt — Answer', description: 'The rate is greatest at $t \\approx 3.681$ hours, about $51.820$ thousand cubic meters per hour (accept 51.819–51.820).' },
        ],
      },
    ],
    sampleResponse:
      '(a) F′(6) ≈ (F(7) − F(5))/(7 − 5) = (39 − 49)/2 = −5 thousand cubic meters per hour per hour. (b) Trapezoidal sum = 77 + 144 + 88 + 112.5 + 86 = 507.5. ∫₀¹² F(t) dt is the total amount of water released from midnight to noon, about 507.5 thousand cubic meters. (c) (1/12)∫₀¹² G(t) dt ≈ 42.100 thousand cubic meters per hour. (d) G′(t) = 2 + 7.5 cos(t/2) = 0 at t ≈ 3.681 and t ≈ 8.885. G(0) = 30, G(3.681) ≈ 51.820, G(8.885) ≈ 33.313, G(12) ≈ 49.809. The rate is greatest at t ≈ 3.681 hours, about 51.820 thousand cubic meters per hour.',
  },

  /* ---- Q2 (calculator): area and volume ---- */
  {
    type: 'saq',
    topic: 'frq-area-volume',
    prompt: `**FRQ 2 — Part A, graphing calculator (9 points): Area and Volume**

Let $f(x) = 5 - x^2$ and $g(x) = e^{x/2}$. Let $R$ be the region in the first quadrant bounded by the graphs of $f$ and $g$ and the $y$-axis. The graphs of $f$ and $g$ intersect in the first quadrant at the point where $x = a$.`,
    parts: [
      {
        letter: 'a',
        question: '(a) Find the area of $R$.',
        rubric: [
          { id: 'a1', label: '1 pt — Integral', description: '$\\displaystyle\\int_0^{a}\\left(5 - x^2 - e^{x/2}\\right)dx$, with $a \\approx 1.649$ found from $5 - a^2 = e^{a/2}$.' },
          { id: 'a2', label: '1 pt — Answer', description: 'Area $\\approx 4.189$ (accept 4.188–4.189).' },
        ],
      },
      {
        letter: 'b',
        question: '(b) Find the volume of the solid generated when $R$ is revolved about the horizontal line $y = -1$.',
        rubric: [
          { id: 'b1', label: '1 pt — Washer integrand', description: '$\\left(6 - x^2\\right)^2 - \\left(e^{x/2} + 1\\right)^2$: outer radius $f(x) + 1$, inner radius $g(x) + 1$.' },
          { id: 'b2', label: '1 pt — Limits and constant', description: '$\\pi\\displaystyle\\int_0^{a}\\left[\\left(6 - x^2\\right)^2 - \\left(e^{x/2} + 1\\right)^2\\right]dx$.' },
          { id: 'b3', label: '1 pt — Answer', description: 'Volume $\\approx 103.336$ (accept 103.335–103.337). Revolving about the $x$-axis (about 77.017) does not earn this point.' },
        ],
      },
      {
        letter: 'c',
        question: '(c) The region $R$ is the base of a solid. For this solid, each cross section perpendicular to the $x$-axis is a semicircle whose diameter lies in $R$. Find the volume of the solid.',
        rubric: [
          { id: 'c1', label: '1 pt — Integral', description: 'A semicircle with diameter $f(x) - g(x)$ has area $\\frac{\\pi}{8}\\left(f(x) - g(x)\\right)^2$, so $V = \\dfrac{\\pi}{8}\\displaystyle\\int_0^{a}\\left(5 - x^2 - e^{x/2}\\right)^2dx$.' },
          { id: 'c2', label: '1 pt — Answer', description: 'Volume $\\approx 5.074$ (accept 5.073–5.074).' },
        ],
      },
      {
        letter: 'd',
        question: '(d) The vertical line $x = k$ divides $R$ into two regions of equal area. Write, but do not solve, an equation involving one or more integrals whose solution gives the value of $k$.',
        rubric: [
          { id: 'd1', label: '1 pt — Integral for one piece', description: '$\\displaystyle\\int_0^{k}\\left(f(x) - g(x)\\right)dx$ (or $\\int_k^a$), with the correct integrand.' },
          { id: 'd2', label: '1 pt — Equation', description: '$\\displaystyle\\int_0^{k}\\left(f(x) - g(x)\\right)dx = \\frac{1}{2}\\int_0^{a}\\left(f(x) - g(x)\\right)dx$, or $= \\int_k^{a}\\left(f(x) - g(x)\\right)dx$, or $= \\frac{1}{2}(4.189)$. (The solution is $k \\approx 0.560$, but solving is not required.)' },
        ],
      },
    ],
    sampleResponse:
      'Intersection: 5 − x² = e^(x/2) at a ≈ 1.649. (a) Area = ∫₀ᵃ (5 − x² − e^(x/2)) dx ≈ 4.189. (b) V = π∫₀ᵃ [(6 − x²)² − (e^(x/2) + 1)²] dx ≈ 103.336. (c) Each semicircle has diameter 5 − x² − e^(x/2) and area (π/8)(5 − x² − e^(x/2))², so V = (π/8)∫₀ᵃ (5 − x² − e^(x/2))² dx ≈ 5.074. (d) ∫₀ᵏ (5 − x² − e^(x/2)) dx = (1/2)∫₀ᵃ (5 − x² − e^(x/2)) dx.',
  },

  /* ---- Q3 (no calculator): analysis from the graph of f' ---- */
  {
    type: 'saq',
    topic: 'frq-graph-analysis',
    prompt: `**FRQ 3 — Part B, no calculator (9 points): Graph of f′**

The function $f$ is differentiable on the closed interval $-3 \\le x \\le 5$, and $f(0) = 3$. The graph of $f'$, the derivative of $f$, consists of three line segments joining the points $(-3, -2)$, $(0, 4)$, $(4, -4)$ and $(5, -1)$, in that order. The graph of $f'$ crosses the $x$-axis at $x = -2$ and $x = 2$.`,
    parts: [
      {
        letter: 'a',
        question: '(a) On the open interval $-3 < x < 5$, find all values of $x$ at which $f$ has a relative minimum or a relative maximum. Classify each and justify your answer.',
        rubric: [
          { id: 'a1', label: '1 pt — Relative minimum at x = −2', description: '$f\'$ changes from negative to positive at $x = -2$.' },
          { id: 'a2', label: '1 pt — Relative maximum at x = 2', description: '$f\'$ changes from positive to negative at $x = 2$. A correct classification without a sign-change reason earns no credit for that value.' },
        ],
      },
      {
        letter: 'b',
        question: '(b) Find the $x$-coordinate of each point of inflection of the graph of $f$ on the open interval $-3 < x < 5$. Justify your answer.',
        rubric: [
          { id: 'b1', label: '1 pt — Both x-values', description: '$x = 0$ and $x = 4$. Including $x = -2$ or $x = 2$ (zeros of $f\'$) loses this point.' },
          { id: 'b2', label: '1 pt — Justification', description: '$f\'$ changes from increasing to decreasing at $x = 0$ and from decreasing to increasing at $x = 4$ (so $f\'\'$ changes sign at each).' },
        ],
      },
      {
        letter: 'c',
        question: '(c) Find $f(-3)$ and $f(5)$.',
        rubric: [
          { id: 'c1', label: '1 pt — f(−3)', description: '$f(-3) = f(0) - \\int_{-3}^{0} f\'(x)\\,dx = 3 - (-1 + 4) = 0$.' },
          { id: 'c2', label: '1 pt — f(5)', description: '$f(5) = f(0) + \\int_0^5 f\'(x)\\,dx = 3 + (4 - 4 - 2.5) = \\frac{1}{2}$.' },
        ],
      },
      {
        letter: 'd',
        question: '(d) Write an equation for the line tangent to the graph of $f$ at $x = 4$. Use it to approximate $f(4.2)$. Is this approximation an overestimate or an underestimate of $f(4.2)$? Give a reason for your answer.',
        rubric: [
          { id: 'd1', label: '1 pt — Tangent line', description: '$f(4) = 3 + \\int_0^4 f\'(x)\\,dx = 3 + 4 - 4 = 3$ and $f\'(4) = -4$, so $y = 3 - 4(x - 4)$.' },
          { id: 'd2', label: '1 pt — Approximation', description: '$f(4.2) \\approx 3 - 4(0.2) = 2.2$.' },
          { id: 'd3', label: '1 pt — Underestimate, with reason', description: '$f\'$ is increasing on $(4, 5)$, so the graph of $f$ is concave up there and lies above its tangent line: **underestimate**.' },
        ],
      },
    ],
    sampleResponse:
      '(a) f′ changes from negative to positive at x = −2, so f has a relative minimum there; f′ changes from positive to negative at x = 2, so f has a relative maximum there. (b) f′ changes from increasing to decreasing at x = 0 and from decreasing to increasing at x = 4, so the graph of f has points of inflection at x = 0 and x = 4. (c) ∫₋₃⁰ f′ = −1 + 4 = 3, so f(−3) = 3 − 3 = 0. ∫₀⁵ f′ = 4 − 4 − 2.5 = −2.5, so f(5) = 0.5. (d) f(4) = 3 + 4 − 4 = 3 and f′(4) = −4, so y = 3 − 4(x − 4) and f(4.2) ≈ 2.2. f′ is increasing on (4, 5), so f is concave up there and the tangent line lies below the graph: an underestimate.',
  },

  /* ---- Q4 (no calculator): draining-tank differential equation ---- */
  {
    type: 'saq',
    topic: 'frq-differential-equations',
    prompt: `**FRQ 4 — Part B, no calculator (9 points): Draining Tank**

Water drains from a tank through a hole in its bottom. The depth of the water, $h$ feet, at time $t$ minutes satisfies the differential equation

$$\\frac{dh}{dt} = -\\frac{1}{5}\\sqrt{h}$$

for $h > 0$. At time $t = 0$ the water is 16 feet deep.`,
    parts: [
      {
        letter: 'a',
        question: '(a) Find the value of $\\dfrac{dh}{dt}$ when $h = 9$. Using correct units, explain its meaning in the context of the problem.',
        rubric: [
          { id: 'a1', label: '1 pt — Value', description: '$\\dfrac{dh}{dt} = -\\dfrac{1}{5}\\sqrt9 = -\\dfrac{3}{5}$.' },
          { id: 'a2', label: '1 pt — Meaning with units', description: 'When the water is 9 feet deep, its depth is decreasing at $0.6$ **feet per minute**.' },
        ],
      },
      {
        letter: 'b',
        question: '(b) Find $\\dfrac{d^2h}{dt^2}$. Is the graph of $h$ as a function of $t$ concave up or concave down? Give a reason for your answer.',
        rubric: [
          { id: 'b1', label: '1 pt — Second derivative', description: '$\\dfrac{d^2h}{dt^2} = -\\dfrac{1}{5}\\cdot\\dfrac{1}{2\\sqrt h}\\cdot\\dfrac{dh}{dt} = -\\dfrac{1}{10\\sqrt h}\\left(-\\dfrac{\\sqrt h}{5}\\right) = \\dfrac{1}{50}$. The factor $\\frac{dh}{dt}$ from the chain rule is required.' },
          { id: 'b2', label: '1 pt — Concave up, with reason', description: '$\\dfrac{d^2h}{dt^2} = \\dfrac{1}{50} > 0$, so the graph of $h$ is concave up (the depth decreases more and more slowly).' },
        ],
      },
      {
        letter: 'c',
        question: '(c) Find $h(t)$, the particular solution to the differential equation with $h(0) = 16$.',
        rubric: [
          { id: 'c1', label: '1 pt — Separates variables', description: '$h^{-1/2}\\,dh = -\\dfrac{1}{5}\\,dt$.' },
          { id: 'c2', label: '1 pt — Antiderivatives', description: '$2\\sqrt{h} = -\\dfrac{t}{5}$ (both sides correct).' },
          { id: 'c3', label: '1 pt — Constant and initial condition', description: '$2\\sqrt h = -\\dfrac{t}{5} + C$, and $2\\sqrt{16} = C$ gives $C = 8$. A response with no constant of integration earns at most c1 and c2.' },
          { id: 'c4', label: '1 pt — Solves for h', description: '$\\sqrt h = 4 - \\dfrac{t}{10}$, so $h(t) = \\left(4 - \\dfrac{t}{10}\\right)^2$ (for $0 \\le t < 40$).' },
        ],
      },
      {
        letter: 'd',
        question: '(d) At what time is the tank empty?',
        rubric: [
          { id: 'd1', label: '1 pt — Time', description: '$4 - \\dfrac{t}{10} = 0$ at $t = 40$ minutes (or a value consistent with the solution in part (c)).' },
        ],
      },
    ],
    sampleResponse:
      '(a) dh/dt = −(1/5)√9 = −3/5: when the water is 9 ft deep, the depth is decreasing at 0.6 ft per minute. (b) d²h/dt² = −(1/5)(1/(2√h))(dh/dt) = −(1/(10√h))(−√h/5) = 1/50 > 0, so h is concave up. (c) h^(−1/2) dh = −(1/5) dt, so 2√h = −t/5 + C. h(0) = 16 gives C = 8, so √h = 4 − t/10 and h(t) = (4 − t/10)². (d) √h = 0 when t = 40, so the tank is empty at t = 40 minutes.',
  },

  /* ---- Q5 (no calculator): related rates in a trough ---- */
  {
    type: 'saq',
    topic: 'frq-related-rates',
    prompt: `**FRQ 5 — Part B, no calculator (9 points): Water Trough**

A water trough is 10 feet long. Each end of the trough is an isosceles triangle with its vertex at the bottom; the triangle is 4 feet wide across the top and 2 feet deep. Water is pumped into the trough at a constant rate of 3 cubic feet per minute. At time $t$ minutes, the water in the trough is $h$ feet deep and its surface is $w$ feet wide.`,
    parts: [
      {
        letter: 'a',
        question: '(a) Show that the volume of water in the trough is $V = 10h^2$ cubic feet.',
        rubric: [
          { id: 'a1', label: '1 pt — Volume in terms of h', description: 'By similar triangles, $\\frac{w}{h} = \\frac{4}{2}$, so $w = 2h$. Then $V = 10\\cdot\\frac{1}{2}wh = 10\\cdot\\frac12(2h)h = 10h^2$.' },
        ],
      },
      {
        letter: 'b',
        question: '(b) How fast is the depth of the water changing at the instant the water is 1.5 feet deep? Indicate units of measure.',
        rubric: [
          { id: 'b1', label: '1 pt — Differentiates with respect to t', description: '$\\dfrac{dV}{dt} = 20h\\dfrac{dh}{dt}$.' },
          { id: 'b2', label: '1 pt — Value', description: '$3 = 20(1.5)\\dfrac{dh}{dt}$, so $\\dfrac{dh}{dt} = \\dfrac{1}{10}$.' },
          { id: 'b3', label: '1 pt — Units', description: 'Feet per minute.' },
        ],
      },
      {
        letter: 'c',
        question: '(c) The water\'s surface is a rectangle 10 feet long and $w$ feet wide. At what rate is the area of the water\'s surface changing at the instant the water is 1.5 feet deep?',
        rubric: [
          { id: 'c1', label: '1 pt — Area in terms of h, differentiated', description: '$A = 10w = 20h$, so $\\dfrac{dA}{dt} = 20\\dfrac{dh}{dt}$.' },
          { id: 'c2', label: '1 pt — Value', description: '$\\dfrac{dA}{dt} = 20\\left(\\dfrac{1}{10}\\right) = 2$ square feet per minute (or a value consistent with part (b)).' },
        ],
      },
      {
        letter: 'd',
        question: '(d) Find $\\dfrac{d^2h}{dt^2}$ in terms of $h$. Is the depth of the water increasing at an increasing rate or at a decreasing rate? Explain your reasoning.',
        rubric: [
          { id: 'd1', label: '1 pt — dh/dt in terms of h', description: '$\\dfrac{dh}{dt} = \\dfrac{3}{20h}$.' },
          { id: 'd2', label: '1 pt — Second derivative', description: '$\\dfrac{d^2h}{dt^2} = -\\dfrac{3}{20h^2}\\cdot\\dfrac{dh}{dt} = -\\dfrac{9}{400h^3}$. The chain-rule factor $\\frac{dh}{dt}$ is required.' },
          { id: 'd3', label: '1 pt — Decreasing rate, with reason', description: 'For $h > 0$, $\\dfrac{d^2h}{dt^2} < 0$, so $\\dfrac{dh}{dt}$ is decreasing: the depth is increasing at a **decreasing** rate.' },
        ],
      },
    ],
    sampleResponse:
      '(a) Similar triangles give w/h = 4/2, so w = 2h. Each cross section has area (1/2)(2h)(h) = h², so V = 10h². (b) dV/dt = 20h dh/dt, so 3 = 20(1.5) dh/dt and dh/dt = 1/10 foot per minute. (c) A = 10w = 20h, so dA/dt = 20 dh/dt = 2 square feet per minute. (d) dh/dt = 3/(20h), so d²h/dt² = −3/(20h²) · dh/dt = −9/(400h³) < 0. The rate dh/dt is decreasing, so the depth increases at a decreasing rate.',
  },

  /* ---- Q6 (no calculator): table of values for f and g ---- */
  {
    type: 'saq',
    topic: 'frq-table-of-values',
    prompt: `**FRQ 6 — Part B, no calculator (9 points): Table of Values**

The functions $f$ and $g$ are differentiable for all real numbers, and their derivatives $f'$ and $g'$ are continuous. The table gives values of $f$, $f'$, $g$ and $g'$ at selected values of $x$.

| $x$ | 0 | 1 | 2 | 3 |
|---|---|---|---|---|
| $f(x)$ | 2 | 5 | 3 | $-1$ |
| $f'(x)$ | 4 | 1 | $-3$ | $-2$ |
| $g(x)$ | 3 | 0 | 1 | 2 |
| $g'(x)$ | $-2$ | $-1$ | 2 | 1 |`,
    parts: [
      {
        letter: 'a',
        question: '(a) Let $h(x) = f(x)\\,g(x)$. Find $h\'(2)$.',
        rubric: [
          { id: 'a1', label: '1 pt — Product rule', description: '$h\'(2) = f\'(2)g(2) + f(2)g\'(2)$.' },
          { id: 'a2', label: '1 pt — Value', description: '$(-3)(1) + (3)(2) = 3$.' },
        ],
      },
      {
        letter: 'b',
        question: '(b) Find $\\displaystyle\\lim_{x \\to 3} \\frac{f(x) + 1}{g(x) - 2}$. Show the work that leads to your answer.',
        rubric: [
          { id: 'b1', label: '1 pt — Indeterminate form and L\'Hospital\'s Rule', description: 'Because $f$ and $g$ are continuous, $f(x) + 1 \\to f(3) + 1 = 0$ and $g(x) - 2 \\to g(3) - 2 = 0$; the limit has the form $\\frac{0}{0}$, so L\'Hospital\'s Rule gives $\\lim_{x\\to3}\\frac{f\'(x)}{g\'(x)}$. Both limits of 0 must be stated.' },
          { id: 'b2', label: '1 pt — Value', description: '$\\dfrac{f\'(3)}{g\'(3)} = \\dfrac{-2}{1} = -2$.' },
        ],
      },
      {
        letter: 'c',
        question: '(c) Evaluate $\\displaystyle\\int_0^3 f\'\\left(g(x)\\right)g\'(x)\\,dx$.',
        rubric: [
          { id: 'c1', label: '1 pt — Antiderivative', description: 'With $u = g(x)$, an antiderivative is $f(g(x))$, so the integral is $f(g(3)) - f(g(0))$.' },
          { id: 'c2', label: '1 pt — Value', description: '$f(2) - f(3) = 3 - (-1) = 4$.' },
        ],
      },
      {
        letter: 'd',
        question: '(d) Let $w(x) = \\displaystyle\\int_0^{g(x)} f(t)\\,dt$. Find $w\'(1)$. Is $w$ increasing or decreasing at $x = 1$? Give a reason for your answer.',
        rubric: [
          { id: 'd1', label: '1 pt — Fundamental Theorem with the chain rule', description: '$w\'(x) = f(g(x))\\,g\'(x)$.' },
          { id: 'd2', label: '1 pt — Value', description: '$w\'(1) = f(g(1))\\,g\'(1) = f(0)\\cdot(-1) = -2$.' },
          { id: 'd3', label: '1 pt — Decreasing, with reason', description: '$w\'(1) = -2 < 0$, so $w$ is decreasing at $x = 1$ (or a conclusion consistent with the value found).' },
        ],
      },
    ],
    sampleResponse:
      '(a) h′(2) = f′(2)g(2) + f(2)g′(2) = (−3)(1) + (3)(2) = 3. (b) As x → 3, f(x) + 1 → 0 and g(x) − 2 → 0, so by L\'Hospital\'s Rule the limit is f′(3)/g′(3) = −2/1 = −2. (c) ∫₀³ f′(g(x))g′(x) dx = f(g(3)) − f(g(0)) = f(2) − f(3) = 3 − (−1) = 4. (d) w′(x) = f(g(x))g′(x), so w′(1) = f(0)(−1) = −2 < 0: w is decreasing at x = 1.',
  },
]
