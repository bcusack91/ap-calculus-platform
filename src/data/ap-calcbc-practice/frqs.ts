import type { SAQItem } from '@/components/FullLengthPracticeExam'

/**
 * AP Calculus BC — Section II Free-Response.
 * 6 FRQs, 9 points each (54 points), 90 minutes:
 *   Part A (Calculator): Q1 (rate-in/out), Q2 (parametric/vector motion)
 *   Part B (No calculator): Q3 (area/volume + arc length),
 *                            Q4 (function defined by integral),
 *                            Q5 (logistic differential equation),
 *                            Q6 (Taylor series)
 * Each rubric line is one point, split the way the College Board scoring guidelines
 * allocate them (setup / answer / justification / units are separate points).
 */

export const FRQS: SAQItem[] = [
  /* ============== Q1 — CALCULATOR ============== */
  {
    type: 'saq',
    topic: 'frq-rate-in-rate-out',
    stimulus: `**Q1 (Calculator allowed) — Rates In/Out (9 points)**

People enter a museum at the rate $E(t) = 0.5t^2(7 - t)^{1/2}$ hundred people per hour and leave at the rate $L(t) = 0.3t^2 + 4$ hundred people per hour, for $0 \\le t \\le 7$ hours. At time $t = 0$, there are 600 people in the museum.`,
    parts: [
      {
        prompt: '**(a)** How many people enter the museum during the time interval $0 \\le t \\le 7$? Show the integral, then use a calculator. Round to nearest whole hundred.',
        rubric: [
          { id: 'a1', label: '1 pt — Definite integral of the entry rate', description: '$\\int_0^7 E(t)\\,dt = \\int_0^7 0.5t^2(7 - t)^{1/2}\\,dt$.' },
          { id: 'a2', label: '1 pt — Answer', description: '$\\approx 69.142$ hundred people, so about **6900 people** (6914) enter the museum.' },
        ],
      },
      {
        prompt: '**(b)** Write an expression for $N(t)$, the number of people in the museum at time $t$.',
        rubric: [
          { id: 'b1', label: '1 pt — Integrand is the net rate $E - L$', description: 'Accumulates $E(x) - L(x)$, in hundreds of people.' },
          { id: 'b2', label: '1 pt — Limits and initial condition', description: '$N(t) = 6 + \\int_0^t \\left(E(x) - L(x)\\right)dx$ hundred people, using $N(0) = 6$.' },
        ],
      },
      {
        prompt: '**(c)** Find the time $t$ in $(0, 7)$ at which the number of people in the museum is greatest. Justify.',
        rubric: [
          { id: 'c1', label: '1 pt — Considers $N\'(t) = 0$', description: '$N\'(t) = E(t) - L(t) = 0$ at $t \\approx 2.251$ and $t \\approx 6.364$.' },
          { id: 'c2', label: '1 pt — Justification', description: 'Candidates test: $N(0) = 6$, $N(2.251) \\approx 0.233$, $N(6.364) \\approx 16.501$, $N(7) \\approx 12.842$ (hundreds). Or a sign analysis: $N\' < 0$ on $(0, 2.251)$, $N\' > 0$ on $(2.251, 6.364)$, $N\' < 0$ on $(6.364, 7)$, and $N(6.364) > N(0)$. Because there are two critical points, a sign change at $6.364$ alone is not enough to show it is the absolute maximum.' },
          { id: 'c3', label: '1 pt — Answer', description: 'The number of people is greatest at $t \\approx 6.364$ hours.' },
        ],
      },
      {
        prompt: '**(d)** Find the rate at which the number of people is changing at $t = 6$ hours. Indicate units and interpret.',
        rubric: [
          { id: 'd1', label: '1 pt — Value of $N\'(6)$', description: '$N\'(6) = E(6) - L(6) = 0.5(36)(1)^{1/2} - (0.3(36) + 4) = 18 - 14.8 = 3.2$.' },
          { id: 'd2', label: '1 pt — Units and interpretation', description: 'Hundred people per hour (320 people per hour); positive, so the number of people in the museum is increasing at $t = 6$.' },
        ],
      },
    ],
  },

  /* ============== Q2 — CALCULATOR (Parametric/Vector) ============== */
  {
    type: 'saq',
    topic: 'frq-parametric-vector-motion',
    stimulus: `**Q2 (Calculator allowed) — Parametric/Vector Motion (9 points)**

A particle moves in the $xy$-plane with position given by $x(t) = t^3 - 6t^2 + 9t$ and $y(t) = 2t^2 - 8$ for $0 \\le t \\le 5$.`,
    parts: [
      {
        prompt: '**(a)** Find the velocity vector and the speed of the particle at $t = 2$.',
        rubric: [
          { id: 'a1', label: '1 pt — Velocity vector', description: '$x\'(t) = 3t^2 - 12t + 9$, $y\'(t) = 4t$, so $\\langle x\'(2), y\'(2)\\rangle = \\langle -3, 8\\rangle$.' },
          { id: 'a2', label: '1 pt — Speed', description: '$\\sqrt{(-3)^2 + 8^2} = \\sqrt{73} \\approx 8.544$.' },
        ],
      },
      {
        prompt: '**(b)** Find the time(s) at which the particle is at rest, or explain why none exist.',
        rubric: [
          { id: 'b1', label: '1 pt — Condition for rest', description: 'At rest requires $x\'(t) = 0$ and $y\'(t) = 0$ at the same time; $y\'(t) = 4t = 0$ only at $t = 0$.' },
          { id: 'b2', label: '1 pt — Conclusion with reason', description: '$x\'(0) = 9 \\ne 0$, so the particle is never at rest on $0 \\le t \\le 5$.' },
        ],
      },
      {
        prompt: '**(c)** Find the total distance traveled by the particle on the interval $0 \\le t \\le 3$. Use a calculator.',
        rubric: [
          { id: 'c1', label: '1 pt — Integral of speed', description: '$\\int_0^3 \\sqrt{(x\'(t))^2 + (y\'(t))^2}\\,dt = \\int_0^3 \\sqrt{(3t^2 - 12t + 9)^2 + (4t)^2}\\,dt$.' },
          { id: 'c2', label: '1 pt — Answer', description: '$\\approx 21.637$.' },
        ],
      },
      {
        prompt: '**(d)** Find the acceleration vector at $t = 2$ and indicate whether the particle is speeding up or slowing down at that instant.',
        rubric: [
          { id: 'd1', label: '1 pt — Acceleration vector', description: '$x\'\'(t) = 6t - 12$, $y\'\'(t) = 4$, so $\\vec a(2) = \\langle 0, 4\\rangle$.' },
          { id: 'd2', label: '1 pt — Compares velocity and acceleration', description: '$\\vec v \\cdot \\vec a = (-3)(0) + (8)(4) = 32$ (or shows $\\frac{d}{dt}(\\text{speed}) > 0$ at $t = 2$).' },
          { id: 'd3', label: '1 pt — Speeding up, with reason', description: 'The dot product is positive, so the particle is speeding up at $t = 2$.' },
        ],
      },
    ],
  },

  /* ============== Q3 — NO CALCULATOR (Area/Volume) ============== */
  {
    type: 'saq',
    topic: 'frq-area-volume',
    stimulus: `**Q3 (No calculator) — Area, Volume, Arc Length (9 points)**

Let $R$ be the region in the first quadrant bounded by $y = \\sqrt x$, $y = x/2$, and the $y$-axis.`,
    parts: [
      {
        prompt: '**(a)** Find the points of intersection and sketch $R$.',
        rubric: [
          { id: 'a1', label: '1 pt — Intersection points', description: '$\\sqrt x = x/2 \\Rightarrow x^2 - 4x = 0 \\Rightarrow x = 0, 4$, giving $(0, 0)$ and $(4, 2)$; on $[0, 4]$, $\\sqrt x \\ge x/2$.' },
        ],
      },
      {
        prompt: '**(b)** Find the area of $R$.',
        rubric: [
          { id: 'b1', label: '1 pt — Integrand and limits', description: '$A = \\int_0^4 \\left(\\sqrt x - x/2\\right)dx$.' },
          { id: 'b2', label: '1 pt — Antiderivative', description: '$\\left[\\tfrac{2}{3}x^{3/2} - \\tfrac{x^2}{4}\\right]_0^4$.' },
          { id: 'b3', label: '1 pt — Answer', description: '$\\tfrac{16}{3} - 4 = \\dfrac{4}{3}$.' },
        ],
      },
      {
        prompt: '**(c)** Find the volume of the solid generated when $R$ is revolved about the $x$-axis.',
        rubric: [
          { id: 'c1', label: '1 pt — Washer integrand', description: '$\\pi\\left[(\\sqrt x)^2 - (x/2)^2\\right] = \\pi(x - x^2/4)$ on $[0, 4]$.' },
          { id: 'c2', label: '1 pt — Antiderivative', description: '$\\pi\\left[\\tfrac{x^2}{2} - \\tfrac{x^3}{12}\\right]_0^4$.' },
          { id: 'c3', label: '1 pt — Answer', description: '$\\pi(8 - 16/3) = \\dfrac{8\\pi}{3}$.' },
        ],
      },
      {
        prompt: '**(d)** Set up but do not evaluate an integral for the arc length of $y = \\sqrt x$ from $x = 0$ to $x = 4$.',
        rubric: [
          { id: 'd1', label: '1 pt — Derivative', description: '$y\' = \\dfrac{1}{2\\sqrt x}$.' },
          { id: 'd2', label: '1 pt — Arc length integral', description: '$L = \\int_0^4 \\sqrt{1 + \\dfrac{1}{4x}}\\,dx$ (setup only).' },
        ],
      },
    ],
  },

  /* ============== Q4 — NO CALCULATOR (Function defined by integral) ============== */
  {
    type: 'saq',
    topic: 'frq-function-defined-by-integral',
    stimulus: `**Q4 (No calculator) — Function defined by an integral (9 points)**

Let $g(x) = \\displaystyle\\int_0^x f(t)\\,dt$, where $f$ is the piecewise-linear function whose graph passes through these key points:

$(0, 2)$, $(2, 0)$ as a straight line; $(2, 0)$ to $(4, -2)$ as a straight line; $(4, -2)$ to $(6, 2)$ as a straight line; $(6, 2)$ to $(8, 2)$ horizontal.`,
    parts: [
      {
        prompt: '**(a)** Find $g(2)$, $g(4)$, $g(6)$, and $g(8)$.',
        rubric: [
          { id: 'a1', label: '1 pt — $g(2)$ and $g(4)$', description: '$g(2) = \\tfrac{1}{2}(2)(2) = 2$; the triangle on $[2, 4]$ is below the axis with area 2, so $g(4) = 2 - 2 = 0$.' },
          { id: 'a2', label: '1 pt — $g(6)$ and $g(8)$', description: 'On $[4, 6]$, $f$ crosses zero at $x = 5$: areas $-1$ and $+1$ cancel, so $g(6) = 0$. Then $g(8) = 0 + 2 \\cdot 2 = 4$.' },
        ],
      },
      {
        prompt: '**(b)** On what open intervals is $g$ increasing? Justify.',
        rubric: [
          { id: 'b1', label: '1 pt — Intervals', description: '$(0, 2)$ and $(5, 8)$.' },
          { id: 'b2', label: '1 pt — Reason', description: '$g\'(x) = f(x)$ by the Fundamental Theorem of Calculus, and $f(x) > 0$ on those intervals.' },
        ],
      },
      {
        prompt: '**(c)** Find the $x$-coordinate of any local extrema of $g$ on $(0, 8)$ and classify each. Justify using $g\' = f$.',
        rubric: [
          { id: 'c1', label: '1 pt — Critical points', description: '$g\'(x) = f(x) = 0$ at $x = 2$ and $x = 5$ ($f$ is constant at 2 on $(6, 8)$, so there are no others).' },
          { id: 'c2', label: '1 pt — Local maximum at $x = 2$, with reason', description: '$g\' = f$ changes from positive to negative at $x = 2$.' },
          { id: 'c3', label: '1 pt — Local minimum at $x = 5$, with reason', description: '$g\' = f$ changes from negative to positive at $x = 5$.' },
        ],
      },
      {
        prompt: '**(d)** Find $g\'\'(3)$.',
        rubric: [
          { id: 'd1', label: '1 pt — Uses $g\'\' = f\'$', description: '$g\'\'(3) = f\'(3)$, the slope of the segment from $(2, 0)$ to $(4, -2)$.' },
          { id: 'd2', label: '1 pt — Answer', description: '$\\dfrac{-2 - 0}{4 - 2} = -1$.' },
        ],
      },
    ],
  },

  /* ============== Q5 — NO CALCULATOR (Logistic DE) ============== */
  {
    type: 'saq',
    topic: 'frq-logistic-differential-equation',
    stimulus: `**Q5 (No calculator) — Logistic Differential Equation (9 points)**

A population $P(t)$ satisfies $\\dfrac{dP}{dt} = 0.04 P\\left(1 - \\dfrac{P}{500}\\right)$, where $t$ is in years. Initially $P(0) = 100$.`,
    parts: [
      {
        prompt: '**(a)** State the carrying capacity and find $\\displaystyle\\lim_{t \\to \\infty} P(t)$.',
        rubric: [
          { id: 'a1', label: '1 pt — Carrying capacity', description: 'Logistic form $dP/dt = kP(1 - P/L)$ with $L = 500$.' },
          { id: 'a2', label: '1 pt — Limit, with reason', description: '$\\lim_{t \\to \\infty} P(t) = 500$, because $0 < P(0) = 100 < 500$ so $P$ increases toward the carrying capacity.' },
        ],
      },
      {
        prompt: '**(b)** For what value of $P$ is the population growing fastest? Show your reasoning.',
        rubric: [
          { id: 'b1', label: '1 pt — Reasoning', description: '$dP/dt = 0.04P - 0.04P^2/500$ is a downward parabola in $P$; $\\frac{d}{dP}\\left[0.04P(1 - P/500)\\right] = 0.04 - 0.08P/500 = 0 \\Rightarrow P = L/2$.' },
          { id: 'b2', label: '1 pt — Answer', description: '$P = 250$.' },
        ],
      },
      {
        prompt: '**(c)** Use Euler\'s method with two equal steps of size $\\Delta t = 5$ to approximate $P(10)$, given $P(0) = 100$.',
        rubric: [
          { id: 'c1', label: '1 pt — First Euler step', description: '$P\'(0) = 0.04(100)(0.8) = 3.2$, so $P(5) \\approx 100 + 5(3.2) = 116$.' },
          { id: 'c2', label: '1 pt — Slope at the new point', description: '$0.04(116)(1 - 116/500) = 0.04(116)(0.768) \\approx 3.564$.' },
          { id: 'c3', label: '1 pt — Answer', description: '$P(10) \\approx 116 + 5(3.564) \\approx 133.8$.' },
        ],
      },
      {
        prompt: '**(d)** Is the Euler approximation in part (c) an underestimate or overestimate of the true value of $P(10)$? Explain.',
        rubric: [
          { id: 'd1', label: '1 pt — Underestimate', description: 'The Euler approximation is an underestimate.' },
          { id: 'd2', label: '1 pt — Reason based on concavity', description: 'For $100 \\le P < 250$ the solution is concave up ($d^2P/dt^2 > 0$), so the tangent-line steps lie below the solution curve.' },
        ],
      },
    ],
  },

  /* ============== Q6 — NO CALCULATOR (Taylor Series) ============== */
  {
    type: 'saq',
    topic: 'frq-taylor-series',
    stimulus: `**Q6 (No calculator) — Taylor / Maclaurin Series (9 points)**

Let $f(x) = \\ln(1 + x)$.`,
    parts: [
      {
        prompt: '**(a)** Find the first four nonzero terms and the general term of the Maclaurin series for $f(x)$.',
        rubric: [
          { id: 'a1', label: '1 pt — First four nonzero terms', description: '$x - \\dfrac{x^2}{2} + \\dfrac{x^3}{3} - \\dfrac{x^4}{4}$.' },
          { id: 'a2', label: '1 pt — General term', description: '$\\dfrac{(-1)^{n+1}x^n}{n}$, for $n \\ge 1$.' },
        ],
      },
      {
        prompt: '**(b)** Find the interval of convergence of the Maclaurin series for $f$, including endpoint analysis.',
        rubric: [
          { id: 'b1', label: '1 pt — Ratio test gives the radius', description: '$\\left|\\dfrac{a_{n+1}}{a_n}\\right| = |x|\\dfrac{n}{n+1} \\to |x|$, so the series converges for $|x| < 1$.' },
          { id: 'b2', label: '1 pt — Endpoint $x = 1$', description: '$\\sum (-1)^{n+1}/n$ is the alternating harmonic series, which converges (terms decrease to 0).' },
          { id: 'b3', label: '1 pt — Endpoint $x = -1$ and interval', description: 'The series becomes $-\\sum 1/n$, the harmonic series, which diverges. Interval of convergence: $(-1, 1]$.' },
        ],
      },
      {
        prompt: '**(c)** Use the third-degree Taylor polynomial $P_3(x) = x - x^2/2 + x^3/3$ to approximate $\\ln(1.2)$. Show your arithmetic.',
        rubric: [
          { id: 'c1', label: '1 pt — Uses $x = 0.2$', description: '$P_3(0.2) = 0.2 - \\dfrac{(0.2)^2}{2} + \\dfrac{(0.2)^3}{3}$.' },
          { id: 'c2', label: '1 pt — Answer', description: '$0.2 - 0.02 + 0.00267 \\approx 0.1827$.' },
        ],
      },
      {
        prompt: '**(d)** Use the alternating series error bound to give an upper bound for $|P_3(0.2) - \\ln(1.2)|$.',
        rubric: [
          { id: 'd1', label: '1 pt — Uses the first omitted term', description: 'The series at $x = 0.2$ alternates with terms decreasing in magnitude to 0, so the error is at most $|a_4| = \\dfrac{(0.2)^4}{4}$.' },
          { id: 'd2', label: '1 pt — Bound', description: '$\\dfrac{0.0016}{4} = 0.0004$.' },
        ],
      },
    ],
  },
]
