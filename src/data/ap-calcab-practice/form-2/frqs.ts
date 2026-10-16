import type { SAQItem } from '@/components/FullLengthPracticeExam'

/**
 * AP Calculus AB practice exam, form 2: 6 FRQs (May 2027 Section II), 9 points each.
 *   Part A (graphing calculator, Q1–Q2): rate in/out (parking garage); particle motion.
 *   Part B (no calculator, Q3–Q6): accumulation function from a graph; separable
 *   differential equation; implicitly defined curve; piecewise-defined function.
 * One RubricPoint = one point.
 */

export const FRQS: SAQItem[] = [
  /* ---- Q1 (calculator): rate in, rate out ---- */
  {
    type: 'saq',
    topic: 'frq-rate-in-rate-out',
    prompt: `**FRQ 1 — Part A, graphing calculator (9 points): Parking Garage**

Cars enter a parking garage at a rate modeled by $E(t) = 20 + 120te^{-t/2}$ cars per hour, and cars leave the garage at a rate modeled by $L(t) = 8t + 10$ cars per hour. Here $t$ is the number of hours after 7:00 a.m., for $0 \\le t \\le 10$. At time $t = 0$ there are 30 cars in the garage.`,
    parts: [
      {
        letter: 'a',
        question: '(a) How many cars enter the garage during the time interval $0 \\le t \\le 10$? Give your answer to the nearest whole number.',
        rubric: [
          { id: 'a1', label: '1 pt — Definite integral of the entering rate', description: '$\\int_0^{10} E(t)\\,dt$, with the correct integrand and limits. Integrating $E(t) - L(t)$ does not earn this point.' },
          { id: 'a2', label: '1 pt — Answer', description: '$\\int_0^{10} E(t)\\,dt \\approx 660.595$, so about **661 cars** (accept 661, or a decimal 660.59–660.60; 660 is a truncation and does not earn the point).' },
        ],
      },
      {
        letter: 'b',
        question: '(b) Is the number of cars in the garage increasing or decreasing at time $t = 6$? Give a reason for your answer.',
        rubric: [
          { id: 'b1', label: '1 pt — Compares the two rates at t = 6', description: 'Computes $E(6) - L(6)$, or $E(6) \\approx 55.847$ and $L(6) = 58$, or states that the rate of change of the number of cars is $E(6) - L(6)$.' },
          { id: 'b2', label: '1 pt — Decreasing, with reason', description: '$E(6) - L(6) \\approx -2.153 < 0$ (cars leave faster than they enter), so the number of cars is **decreasing**. A conclusion without the sign of $E(6) - L(6)$ does not earn the point.' },
        ],
      },
      {
        letter: 'c',
        question: '(c) At what time $t$, for $0 \\le t \\le 10$, is the number of cars in the garage greatest? How many cars are in the garage at that time? Justify your answer.',
        rubric: [
          { id: 'c1', label: '1 pt — Sets the net rate equal to zero', description: 'Let $A(t) = 30 + \\int_0^t \\left(E(s) - L(s)\\right)ds$. Then $A\'(t) = E(t) - L(t) = 0$ at $t \\approx 5.893$, the only zero on $[0, 10]$.' },
          { id: 'c2', label: '1 pt — Justification', description: 'Either a candidates test, $A(0) = 30$, $A(5.893) \\approx 330.524$, $A(10) \\approx 190.595$; or a sign analysis, $A\' > 0$ on $[0, 5.893)$ and $A\' < 0$ on $(5.893, 10]$, so $A$ has its absolute maximum at the only critical point.' },
          { id: 'c3', label: '1 pt — Answer', description: 'The number of cars is greatest at $t \\approx 5.893$ hours (about 12:54 p.m.), with about **330 cars** (accept 330 or 331, or 330.52–330.53).' },
        ],
      },
      {
        letter: 'd',
        question: '(d) Find the value of $E\'(3)$. Using correct units, explain the meaning of $E\'(3)$ in the context of the problem.',
        rubric: [
          { id: 'd1', label: '1 pt — Value', description: '$E\'(3) \\approx -13.388$ (accept $-13.387$ to $-13.388$).' },
          { id: 'd2', label: '1 pt — Meaning with units', description: 'At 10:00 a.m. ($t = 3$), the rate at which cars enter the garage is decreasing at about 13.388 **cars per hour per hour**. An interpretation about the number of cars in the garage, rather than the entering rate, does not earn the point.' },
        ],
      },
    ],
    sampleResponse:
      '(a) ∫₀¹⁰ E(t) dt ≈ 660.595, so about 661 cars enter. (b) E(6) − L(6) ≈ 55.847 − 58 = −2.153 < 0, so the number of cars is decreasing at t = 6. (c) A(t) = 30 + ∫₀ᵗ (E(s) − L(s)) ds, and A′(t) = E(t) − L(t) = 0 only at t ≈ 5.893. A(0) = 30, A(5.893) ≈ 330.524, A(10) ≈ 190.595, so the number of cars is greatest at t ≈ 5.893 hours, with about 330 cars. (d) E′(3) ≈ −13.388: at 10:00 a.m. the rate at which cars enter is decreasing at about 13.388 cars per hour per hour.',
  },

  /* ---- Q2 (calculator): particle motion ---- */
  {
    type: 'saq',
    topic: 'frq-particle-motion',
    prompt: `**FRQ 2 — Part A, graphing calculator (9 points): Particle Motion**

A particle moves along the $x$-axis. Its velocity is $v(t) = \\left(t^2 - 4t + 2\\right)e^{-t/3}$ for $0 \\le t \\le 5$, where $t$ is measured in seconds and $v(t)$ in meters per second. At time $t = 0$ the particle is at position $x = 3$.`,
    parts: [
      {
        letter: 'a',
        question: '(a) Find the acceleration of the particle at time $t = 2$. Is the speed of the particle increasing or decreasing at $t = 2$? Give a reason for your answer.',
        rubric: [
          { id: 'a1', label: '1 pt — Acceleration', description: '$a(2) = v\'(2) \\approx 0.342$ m/s² (accept 0.342–0.343).' },
          { id: 'a2', label: '1 pt — Speed decreasing, with reason', description: '$v(2) \\approx -1.027 < 0$ and $a(2) > 0$; velocity and acceleration have opposite signs, so the speed is **decreasing**. Both signs must be stated.' },
        ],
      },
      {
        letter: 'b',
        question: '(b) Find all times $t$ in the interval $0 < t < 5$ at which the particle changes direction. Justify your answer.',
        rubric: [
          { id: 'b1', label: '1 pt — Both times', description: '$v(t) = 0$ when $t^2 - 4t + 2 = 0$: $t = 2 - \\sqrt2 \\approx 0.586$ and $t = 2 + \\sqrt2 \\approx 3.414$.' },
          { id: 'b2', label: '1 pt — Justification', description: '$v(t)$ changes sign at each of these times (positive on $(0, 0.586)$, negative on $(0.586, 3.414)$, positive on $(3.414, 5)$). Saying only "$v(t) = 0$" does not earn this point.' },
        ],
      },
      {
        letter: 'c',
        question: '(c) Find the position of the particle at the time when it is farthest to the left for $0 \\le t \\le 5$. Justify your answer.',
        rubric: [
          { id: 'c1', label: '1 pt — Position as an integral', description: '$x(t) = 3 + \\int_0^t v(s)\\,ds$.' },
          { id: 'c2', label: '1 pt — Justification', description: 'The particle moves left only on $(0.586, 3.414)$, so the leftmost position occurs at $t = 0$ or $t = 3.414$. Candidates: $x(0) = 3$, $x(0.586) \\approx 3.519$, $x(3.414) \\approx 1.539$, $x(5) \\approx 2.635$.' },
          { id: 'c3', label: '1 pt — Answer', description: 'The particle is farthest left at $t = 2 + \\sqrt2 \\approx 3.414$ s, at position $x \\approx 1.539$ m (accept 1.539–1.540).' },
        ],
      },
      {
        letter: 'd',
        question: '(d) Find the total distance traveled by the particle over the time interval $0 \\le t \\le 5$.',
        rubric: [
          { id: 'd1', label: '1 pt — Integral of speed', description: '$\\int_0^5 |v(t)|\\,dt$, or the sum of the distances on $[0, 0.586]$, $[0.586, 3.414]$ and $[3.414, 5]$.' },
          { id: 'd2', label: '1 pt — Answer', description: 'Total distance $\\approx 3.594$ m (accept 3.594–3.595). The displacement $\\int_0^5 v(t)\\,dt \\approx -0.365$ does not earn this point.' },
        ],
      },
    ],
    sampleResponse:
      '(a) a(2) = v′(2) ≈ 0.342 m/s². v(2) ≈ −1.027 < 0 while a(2) > 0, so the speed is decreasing. (b) e^(−t/3) > 0, so v has the sign of t² − 4t + 2, which is 0 at t = 2 ± √2. v changes sign at t ≈ 0.586 and t ≈ 3.414, so the particle changes direction at both times. (c) x(t) = 3 + ∫₀ᵗ v(s) ds. The particle moves left only on (0.586, 3.414), so the candidates are x(0) = 3 and x(3.414) ≈ 1.539 (also x(0.586) ≈ 3.519, x(5) ≈ 2.635). The particle is farthest left at t ≈ 3.414 s, at x ≈ 1.539 m. (d) ∫₀⁵ |v(t)| dt ≈ 3.594 m.',
  },

  /* ---- Q3 (no calculator): accumulation function from a graph ---- */
  {
    type: 'saq',
    topic: 'frq-graph-accumulation',
    prompt: `**FRQ 3 — Part B, no calculator (9 points): Graph of f**

The continuous function $f$ is defined on the closed interval $-2 \\le x \\le 4$. Its graph consists of three pieces:

- on $-2 \\le x \\le 0$, the quarter of the circle $x^2 + y^2 = 4$ that lies in the second quadrant, rising from $(-2, 0)$ to $(0, 2)$;
- on $0 \\le x \\le 2$, the line segment from $(0, 2)$ to $(2, -2)$, which crosses the $x$-axis at $x = 1$;
- on $2 \\le x \\le 4$, the line segment from $(2, -2)$ to $(4, 0)$.

Let $g(x) = \\displaystyle\\int_0^x f(t)\\,dt$ for $-2 \\le x \\le 4$.`,
    parts: [
      {
        letter: 'a',
        question: '(a) Find $g(-2)$ and $g(4)$.',
        rubric: [
          { id: 'a1', label: '1 pt — g(−2)', description: '$g(-2) = \\int_0^{-2} f(t)\\,dt = -\\int_{-2}^0 f(t)\\,dt = -\\pi$ (a quarter disk of radius 2 has area $\\pi$). The value $\\pi$ does not earn the point.' },
          { id: 'a2', label: '1 pt — g(4)', description: '$g(4) = 1 - 1 - 2 = -2$ (triangle of area 1 above the axis on $[0, 1]$, triangles of area 1 and 2 below it on $[1, 2]$ and $[2, 4]$).' },
        ],
      },
      {
        letter: 'b',
        question: '(b) Find $g\'(-1)$ and $g\'\'(3)$.',
        rubric: [
          { id: 'b1', label: '1 pt — g′(−1)', description: '$g\'(-1) = f(-1) = \\sqrt{4 - 1} = \\sqrt3$, by the Fundamental Theorem of Calculus.' },
          { id: 'b2', label: '1 pt — g″(3)', description: '$g\'\'(3) = f\'(3) = 1$, the slope of the segment from $(2, -2)$ to $(4, 0)$.' },
        ],
      },
      {
        letter: 'c',
        question: '(c) Find the $x$-coordinate of each point of inflection of the graph of $g$ on the open interval $-2 < x < 4$. Justify your answer.',
        rubric: [
          { id: 'c1', label: '1 pt — Both x-values', description: '$x = 0$ and $x = 2$. Listing $x = 1$ (where $f = 0$) as an inflection point loses this point.' },
          { id: 'c2', label: '1 pt — Justification', description: '$g\' = f$ changes from increasing to decreasing at $x = 0$ and from decreasing to increasing at $x = 2$ (equivalently, $g\'\' = f\'$ changes sign at each), so the concavity of $g$ changes there.' },
        ],
      },
      {
        letter: 'd',
        question: '(d) Find the absolute minimum value of $g$ on the closed interval $-2 \\le x \\le 4$. Justify your answer.',
        rubric: [
          { id: 'd1', label: '1 pt — Critical point', description: '$g\'(x) = f(x) = 0$ on the open interval only at $x = 1$; $g\' > 0$ on $(-2, 1)$ and $g\' < 0$ on $(1, 4)$.' },
          { id: 'd2', label: '1 pt — Candidates', description: '$g(-2) = -\\pi$, $g(1) = 1$, $g(4) = -2$ (or the sign argument that the minimum must be at an endpoint, followed by comparing $g(-2)$ and $g(4)$).' },
          { id: 'd3', label: '1 pt — Answer', description: 'Since $-\\pi < -2$, the absolute minimum value of $g$ is $-\\pi$, at $x = -2$.' },
        ],
      },
    ],
    sampleResponse:
      '(a) g(−2) = −∫₋₂⁰ f(t) dt = −(area of a quarter disk of radius 2) = −π. g(4) = 1 − 1 − 2 = −2. (b) g′(−1) = f(−1) = √(4 − 1) = √3. g″(3) = f′(3) = 1. (c) g′ = f increases on (−2, 0), decreases on (0, 2) and increases on (2, 4), so g″ changes sign at x = 0 and x = 2: those are the inflection points. (d) g′ = f is positive on (−2, 1) and negative on (1, 4), so g rises to x = 1 and then falls; the minimum is at an endpoint. g(−2) = −π ≈ −3.14 and g(4) = −2, so the absolute minimum value is −π, at x = −2.',
  },

  /* ---- Q4 (no calculator): separable differential equation ---- */
  {
    type: 'saq',
    topic: 'frq-differential-equations',
    prompt: `**FRQ 4 — Part B, no calculator (9 points): Differential Equation**

Consider the differential equation $\\dfrac{dy}{dx} = x^2(y - 2)$.`,
    parts: [
      {
        letter: 'a',
        question: '(a) Find $\\dfrac{dy}{dx}$ at each of the six points $(-1, 1)$, $(0, 1)$, $(1, 1)$, $(-1, 3)$, $(0, 3)$ and $(1, 3)$, and describe the slope-field segments you would draw there.',
        rubric: [
          { id: 'a1', label: '1 pt — Zero slopes', description: 'Slope $0$ at $(0, 1)$ and $(0, 3)$: horizontal segments on the $y$-axis.' },
          { id: 'a2', label: '1 pt — Nonzero slopes', description: 'Slope $-1$ at $(-1, 1)$ and $(1, 1)$ and slope $1$ at $(-1, 3)$ and $(1, 3)$: segments falling below the line $y = 2$ and rising above it.' },
        ],
      },
      {
        letter: 'b',
        question: '(b) Let $y = f(x)$ be the particular solution to the differential equation with $f(0) = 3$. Find $\\dfrac{d^2y}{dx^2}$ in terms of $x$ and $y$. Does $f$ have a relative minimum, a relative maximum, or neither at $x = 0$? Justify your answer.',
        rubric: [
          { id: 'b1', label: '1 pt — Second derivative', description: '$\\dfrac{d^2y}{dx^2} = 2x(y - 2) + x^2\\dfrac{dy}{dx} = 2x(y - 2) + x^4(y - 2)$. The term $x^2\\frac{dy}{dx}$ is required.' },
          { id: 'b2', label: '1 pt — Neither, with reason', description: 'At $(0, 3)$, $\\frac{dy}{dx} = 0$ and $\\frac{d^2y}{dx^2} = 0$, so the Second Derivative Test gives no conclusion. Near $(0, 3)$, $y > 2$, so $\\frac{dy}{dx} = x^2(y - 2) > 0$ for $x \\ne 0$: $f$ is increasing on both sides of $x = 0$, so it has **neither** a minimum nor a maximum there.' },
        ],
      },
      {
        letter: 'c',
        question: '(c) Find $y = f(x)$, the particular solution to the differential equation with the initial condition $f(0) = 3$.',
        rubric: [
          { id: 'c1', label: '1 pt — Separates variables', description: '$\\dfrac{dy}{y - 2} = x^2\\,dx$.' },
          { id: 'c2', label: '1 pt — Antiderivative of the y side', description: '$\\ln|y - 2|$.' },
          { id: 'c3', label: '1 pt — Antiderivative of the x side', description: '$\\dfrac{x^3}{3}$.' },
          { id: 'c4', label: '1 pt — Constant of integration and uses the initial condition', description: '$\\ln|y - 2| = \\dfrac{x^3}{3} + C$, and $\\ln|3 - 2| = 0 + C$ gives $C = 0$.' },
          { id: 'c5', label: '1 pt — Solves for y', description: '$y = 2 + e^{x^3/3}$ (since $y - 2 > 0$ at the initial point). Responses with no constant of integration earn at most c1, c2 and c3.' },
        ],
      },
    ],
    sampleResponse:
      '(a) At (0, 1) and (0, 3) the slope is 0 (horizontal segments). At (−1, 1) and (1, 1) the slope is (1)(−1) = −1; at (−1, 3) and (1, 3) it is (1)(1) = 1. (b) d²y/dx² = 2x(y − 2) + x²(dy/dx) = 2x(y − 2) + x⁴(y − 2). At (0, 3) both derivatives are 0, so the Second Derivative Test is inconclusive. Near (0, 3), y > 2, so dy/dx = x²(y − 2) > 0 for x ≠ 0 and f is increasing on both sides of 0: neither a minimum nor a maximum. (c) dy/(y − 2) = x² dx, so ln|y − 2| = x³/3 + C. With (0, 3): ln 1 = C, so C = 0. Then y − 2 = e^(x³/3), so y = 2 + e^(x³/3).',
  },

  /* ---- Q5 (no calculator): implicitly defined curve ---- */
  {
    type: 'saq',
    topic: 'frq-implicit-differentiation',
    prompt: `**FRQ 5 — Part B, no calculator (9 points): Implicitly Defined Curve**

Consider the curve given by the equation $y^3 - xy = 2$. The point $(-1, 1)$ lies on the curve.`,
    parts: [
      {
        letter: 'a',
        question: '(a) Show that $\\dfrac{dy}{dx} = \\dfrac{y}{3y^2 - x}$.',
        rubric: [
          { id: 'a1', label: '1 pt — Implicit differentiation', description: '$3y^2\\dfrac{dy}{dx} - \\left(y + x\\dfrac{dy}{dx}\\right) = 0$, with the product rule on $xy$.' },
          { id: 'a2', label: '1 pt — Solves for dy/dx', description: '$\\dfrac{dy}{dx}\\left(3y^2 - x\\right) = y$, so $\\dfrac{dy}{dx} = \\dfrac{y}{3y^2 - x}$. A response that starts from the given answer earns no points.' },
        ],
      },
      {
        letter: 'b',
        question: '(b) Write an equation for the line tangent to the curve at the point $(-1, 1)$. Use it to approximate the $y$-coordinate of the point on the curve near $(-1, 1)$ whose $x$-coordinate is $-0.8$.',
        rubric: [
          { id: 'b1', label: '1 pt — Tangent line', description: 'Slope $\\dfrac{1}{3(1)^2 - (-1)} = \\dfrac{1}{4}$, so $y = 1 + \\dfrac{1}{4}(x + 1)$.' },
          { id: 'b2', label: '1 pt — Approximation', description: '$y \\approx 1 + \\dfrac{1}{4}(0.2) = 1.05$.' },
        ],
      },
      {
        letter: 'c',
        question: '(c) Find the coordinates of the point on the curve at which the line tangent to the curve is vertical.',
        rubric: [
          { id: 'c1', label: '1 pt — Denominator equal to zero', description: 'A vertical tangent needs $3y^2 - x = 0$ with $y \\ne 0$, so $x = 3y^2$.' },
          { id: 'c2', label: '1 pt — Point', description: 'Substituting, $y^3 - 3y^3 = 2$, so $y^3 = -1$, $y = -1$ and $x = 3$: the point is $(3, -1)$. Check: $(-1)^3 - (3)(-1) = 2$.' },
        ],
      },
      {
        letter: 'd',
        question: '(d) Find the value of $\\dfrac{d^2y}{dx^2}$ at the point $(-1, 1)$. Is the approximation in part (b) an overestimate or an underestimate? Give a reason for your answer.',
        rubric: [
          { id: 'd1', label: '1 pt — Quotient rule', description: '$\\dfrac{d^2y}{dx^2} = \\dfrac{\\frac{dy}{dx}\\left(3y^2 - x\\right) - y\\left(6y\\frac{dy}{dx} - 1\\right)}{\\left(3y^2 - x\\right)^2}$, with the chain rule on $3y^2$.' },
          { id: 'd2', label: '1 pt — Value', description: 'At $(-1, 1)$ with $\\frac{dy}{dx} = \\frac{1}{4}$: $\\dfrac{\\frac14(4) - 1\\left(\\frac32 - 1\\right)}{16} = \\dfrac{1/2}{16} = \\dfrac{1}{32}$.' },
          { id: 'd3', label: '1 pt — Underestimate, with reason', description: '$\\frac{d^2y}{dx^2} > 0$, so the curve is concave up near $(-1, 1)$ and lies above its tangent line: the approximation 1.05 is an **underestimate**.' },
        ],
      },
    ],
    sampleResponse:
      '(a) 3y²y′ − (y + xy′) = 0, so y′(3y² − x) = y and dy/dx = y/(3y² − x). (b) At (−1, 1), dy/dx = 1/(3 + 1) = 1/4, so the tangent line is y = 1 + (1/4)(x + 1). At x = −0.8, y ≈ 1 + (1/4)(0.2) = 1.05. (c) Vertical tangent where 3y² − x = 0, so x = 3y². Then y³ − 3y³ = 2 gives y³ = −1, y = −1, x = 3: the point (3, −1). (d) y″ = [y′(3y² − x) − y(6yy′ − 1)]/(3y² − x)². At (−1, 1): [(1/4)(4) − (3/2 − 1)]/16 = (1/2)/16 = 1/32. Since y″ > 0 the curve is concave up there, so the tangent-line estimate 1.05 is an underestimate.',
  },

  /* ---- Q6 (no calculator): piecewise-defined function ---- */
  {
    type: 'saq',
    topic: 'frq-function-analysis',
    prompt: `**FRQ 6 — Part B, no calculator (9 points): Piecewise-Defined Function**

Let $f$ be the function defined by

$$f(x) = \\begin{cases} 2 + 3x - x^2, & x \\le 2 \\\\ a + b\\ln(x - 1), & x > 2 \\end{cases}$$

where $a$ and $b$ are constants.`,
    parts: [
      {
        letter: 'a',
        question: '(a) Find the value of $a$ for which $f$ is continuous at $x = 2$. Justify your answer.',
        rubric: [
          { id: 'a1', label: '1 pt — One-sided limits', description: '$\\lim_{x\\to2^-} f(x) = 2 + 6 - 4 = 4 = f(2)$ and $\\lim_{x\\to2^+} f(x) = a + b\\ln 1 = a$.' },
          { id: 'a2', label: '1 pt — Value of a', description: 'Continuity requires the limits to agree with $f(2)$, so $a = 4$.' },
        ],
      },
      {
        letter: 'b',
        question: '(b) Using the value of $a$ from part (a), find the value of $b$ for which $f$ is differentiable at $x = 2$.',
        rubric: [
          { id: 'b1', label: '1 pt — Derivatives of both pieces', description: 'For $x < 2$, $f\'(x) = 3 - 2x$, which approaches $-1$; for $x > 2$, $f\'(x) = \\dfrac{b}{x - 1}$, which approaches $b$.' },
          { id: 'b2', label: '1 pt — Value of b', description: 'The one-sided derivatives must agree (and $f$ is continuous), so $b = -1$.' },
        ],
      },
      {
        letter: 'c',
        question: '(c) Find the average value of $f$ on the interval $0 \\le x \\le 2$.',
        rubric: [
          { id: 'c1', label: '1 pt — Average value integral', description: '$\\dfrac{1}{2 - 0}\\displaystyle\\int_0^2 \\left(2 + 3x - x^2\\right)dx$.' },
          { id: 'c2', label: '1 pt — Answer', description: '$\\dfrac{1}{2}\\left[2x + \\dfrac{3x^2}{2} - \\dfrac{x^3}{3}\\right]_0^2 = \\dfrac{1}{2}\\left(4 + 6 - \\dfrac{8}{3}\\right) = \\dfrac{11}{3}$.' },
        ],
      },
      {
        letter: 'd',
        question: '(d) Using the values of $a$ and $b$ from parts (a) and (b), find the absolute maximum value of $f$ on the closed interval $0 \\le x \\le 4$. Justify your answer.',
        rubric: [
          { id: 'd1', label: '1 pt — Critical points', description: 'On $(0, 2)$, $f\'(x) = 3 - 2x = 0$ at $x = \\frac{3}{2}$. On $(2, 4)$, $f\'(x) = -\\frac{1}{x - 1} < 0$, so there is no critical point there, and $f\'(2) = -1 \\ne 0$.' },
          { id: 'd2', label: '1 pt — Candidates', description: '$f(0) = 2$, $f\\left(\\frac32\\right) = 2 + \\frac92 - \\frac94 = \\frac{17}{4}$, $f(4) = 4 - \\ln 3$.' },
          { id: 'd3', label: '1 pt — Answer', description: 'Since $\\ln 3 > 0$, $f(4) < 4 < \\frac{17}{4}$, so the absolute maximum value is $\\frac{17}{4}$, at $x = \\frac{3}{2}$.' },
        ],
      },
    ],
    sampleResponse:
      '(a) From the left, f(x) → 2 + 6 − 4 = 4 = f(2); from the right, f(x) → a + b ln 1 = a. Continuity at 2 needs a = 4. (b) Left of 2, f′(x) = 3 − 2x → −1; right of 2, f′(x) = b/(x − 1) → b. Differentiability needs b = −1. (c) Average value = (1/2)∫₀² (2 + 3x − x²) dx = (1/2)(4 + 6 − 8/3) = 11/3. (d) On (0, 2), f′(x) = 3 − 2x = 0 at x = 3/2; on (2, 4), f′(x) = −1/(x − 1) < 0. Candidates: f(0) = 2, f(3/2) = 17/4, f(4) = 4 − ln 3 < 4. The absolute maximum value is 17/4, at x = 3/2.',
  },
]
