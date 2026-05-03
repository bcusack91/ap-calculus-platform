import type { SAQItem } from '@/components/FullLengthPracticeExam'

/**
 * AP Calculus BC — Section II Free-Response.
 * 6 FRQs, 9 points each, 90 minutes:
 *   Part A (Calculator): Q1 (rate-in/out), Q2 (parametric/vector motion)
 *   Part B (No calculator): Q3 (area/volume + arc length),
 *                            Q4 (function defined by integral),
 *                            Q5 (logistic differential equation),
 *                            Q6 (Taylor series)
 */

export const FRQS: SAQItem[] = [
  /* ============== Q1 — CALCULATOR ============== */
  {
    type: 'saq',
    topic: 'frq-rate-in-rate-out',
    stimulus: `**Q1 (Calculator allowed) — Rates In/Out**

People enter a museum at the rate $E(t) = 0.5t^2(7 - t)^{1/2}$ hundred people per hour and leave at the rate $L(t) = 0.3t^2 + 4$ hundred people per hour, for $0 \\le t \\le 7$ hours. At time $t = 0$, there are no people in the museum.`,
    parts: [
      {
        prompt: '**(a)** How many people enter the museum during the time interval $0 \\le t \\le 7$? Show the integral, then use a calculator. Round to nearest whole hundred.',
        rubric: '$\\int_0^7 E(t)\\,dt = \\int_0^7 0.5 t^2(7-t)^{1/2}\\,dt \\approx 60.65$ hundred people, i.e., approximately **6065 people**. (Score: 1 pt setup, 1 pt numerical answer.)',
      },
      {
        prompt: '**(b)** Write an expression for $N(t)$, the number of people in the museum at time $t$.',
        rubric: '$N(t) = \\int_0^t (E(x) - L(x))\\,dx$ (since $N(0) = 0$).',
      },
      {
        prompt: '**(c)** Find the time $t$ in $(0, 7)$ at which the number of people in the museum is greatest. Justify.',
        rubric: 'Set $N\'(t) = E(t) - L(t) = 0$. Numerical solver gives $t \\approx 5.79$ hours. Verify $N\'$ changes from + to − there (rate in exceeds rate out before; vice versa after) ⇒ MAX. Maximum at $t \\approx 5.79$ hours.',
      },
      {
        prompt: '**(d)** Find the rate at which the number of people is changing at $t = 6$ hours. Indicate units and interpret.',
        rubric: '$N\'(6) = E(6) - L(6) = 0.5(36)(1)^{1/2} - (0.3(36) + 4) = 18 - 14.8 = 3.2$ hundred people per hour. Sign positive ⇒ population still INCREASING. Units: hundred people per hour (or 320 people/hour).',
      },
    ],
  },

  /* ============== Q2 — CALCULATOR (Parametric/Vector) ============== */
  {
    type: 'saq',
    topic: 'frq-parametric-vector-motion',
    stimulus: `**Q2 (Calculator allowed) — Parametric/Vector Motion**

A particle moves in the $xy$-plane with position given by $x(t) = t^3 - 6t^2 + 9t$ and $y(t) = 2t^2 - 8$ for $0 \\le t \\le 5$.`,
    parts: [
      {
        prompt: '**(a)** Find the velocity vector and the speed of the particle at $t = 2$.',
        rubric: '$x\'(t) = 3t^2 - 12t + 9$, $y\'(t) = 4t$. At $t=2$: $x\'(2) = 12 - 24 + 9 = -3$, $y\'(2) = 8$. Velocity vector $\\langle -3, 8\\rangle$. Speed $= \\sqrt{9 + 64} = \\sqrt{73} \\approx 8.544$.',
      },
      {
        prompt: '**(b)** Find the time(s) at which the particle is at rest, or explain why none exist.',
        rubric: 'Particle is at rest when both $x\'(t)=0$ AND $y\'(t)=0$. $y\'(t) = 4t = 0 \\Rightarrow t = 0$. At $t=0$: $x\'(0) = 9 \\ne 0$. So the particle is NEVER at rest in $(0, 5]$. (At $t=0$ also moving since $x\' \\ne 0$.)',
      },
      {
        prompt: '**(c)** Find the total distance traveled by the particle on the interval $0 \\le t \\le 3$. Use a calculator.',
        rubric: 'Distance = $\\int_0^3 \\sqrt{(x\'(t))^2 + (y\'(t))^2}\\,dt = \\int_0^3 \\sqrt{(3t^2-12t+9)^2 + (4t)^2}\\,dt \\approx 16.687$. (Calculator numerical integration.)',
      },
      {
        prompt: '**(d)** Find the acceleration vector at $t = 2$ and indicate whether the particle is speeding up or slowing down at that instant.',
        rubric: '$x\'\'(t) = 6t - 12$, $y\'\'(t) = 4$. At $t=2$: $\\langle 0, 4\\rangle$. To determine speeding up/slowing down, compute $\\vec v \\cdot \\vec a = (-3)(0) + (8)(4) = 32 > 0$ ⇒ SPEEDING UP at $t = 2$.',
      },
    ],
  },

  /* ============== Q3 — NO CALCULATOR (Area/Volume) ============== */
  {
    type: 'saq',
    topic: 'frq-area-volume',
    stimulus: `**Q3 (No calculator) — Area, Volume, Arc Length**

Let $R$ be the region in the first quadrant bounded by $y = \\sqrt x$, $y = x/2$, and the $y$-axis.`,
    parts: [
      {
        prompt: '**(a)** Find the points of intersection and sketch $R$.',
        rubric: '$\\sqrt x = x/2 \\Rightarrow x = x^2/4 \\Rightarrow x^2 - 4x = 0 \\Rightarrow x = 0, 4$. Points: $(0,0)$ and $(4, 2)$. On $[0, 4]$, $\\sqrt x \\ge x/2$.',
      },
      {
        prompt: '**(b)** Find the area of $R$.',
        rubric: '$A = \\int_0^4 (\\sqrt x - x/2)\\,dx = [\\tfrac{2}{3}x^{3/2} - x^2/4]_0^4 = \\tfrac{2}{3}(8) - 4 = \\tfrac{16}{3} - 4 = \\dfrac{4}{3}$.',
      },
      {
        prompt: '**(c)** Find the volume of the solid generated when $R$ is revolved about the $x$-axis.',
        rubric: 'Washers: $V = \\pi\\int_0^4 [(\\sqrt x)^2 - (x/2)^2]\\,dx = \\pi\\int_0^4 (x - x^2/4)\\,dx = \\pi[x^2/2 - x^3/12]_0^4 = \\pi(8 - 16/3) = \\dfrac{8\\pi}{3}$.',
      },
      {
        prompt: '**(d)** Set up but do not evaluate an integral for the arc length of $y = \\sqrt x$ from $x = 0$ to $x = 4$.',
        rubric: '$y\' = 1/(2\\sqrt x)$. $L = \\int_0^4 \\sqrt{1 + 1/(4x)}\\,dx$. (Setup only.)',
      },
    ],
  },

  /* ============== Q4 — NO CALCULATOR (Function defined by integral) ============== */
  {
    type: 'saq',
    topic: 'frq-function-defined-by-integral',
    stimulus: `**Q4 (No calculator) — Function defined by an integral**

Let $g(x) = \\displaystyle\\int_0^x f(t)\\,dt$, where $f$ is the piecewise-linear function whose graph passes through these key points:

$(0, 2)$, $(2, 0)$ as a straight line; $(2, 0)$ to $(4, -2)$ as a straight line; $(4, -2)$ to $(6, 2)$ as a straight line; $(6, 2)$ to $(8, 2)$ horizontal.`,
    parts: [
      {
        prompt: '**(a)** Find $g(2)$, $g(4)$, $g(6)$, and $g(8)$.',
        rubric: '$g(2)$ = area under $f$ on $[0,2]$ = triangle with base 2, height 2 = $2$. $g(4) = g(2) + $ area on $[2,4]$ = $2 + (-2)$ (triangle below axis area $= -2$) $= 0$. $g(6) = g(4) + $ area on $[4,6]$. From $(4,-2)$ to $(6,2)$ crosses zero at $x=5$. Triangle below from $(4,-2)$ to $(5,0)$ area $= -1$. Triangle above from $(5,0)$ to $(6,2)$ area $= +1$. Net $= 0$. So $g(6) = 0$. $g(8) = g(6) + 2 \\cdot 2 = 4$.',
      },
      {
        prompt: '**(b)** On what open intervals is $g$ increasing? Justify.',
        rubric: '$g$ is increasing where $g\'(x) = f(x) > 0$. From the graph: $f > 0$ on $(0, 2)$ and on $(5, 8)$. Therefore $g$ is increasing on $(0, 2)$ and $(5, 8)$.',
      },
      {
        prompt: '**(c)** Find the $x$-coordinate of any local extrema of $g$ on $(0, 8)$ and classify each. Justify using $g\' = f$.',
        rubric: 'Critical numbers where $f(x) = 0$: $x = 2$ and $x = 5$ (and $f$ is constant on $(6,8)$ but doesn\'t cross zero there). At $x = 2$: $f$ changes from + to − ⇒ local MAX of $g$. At $x = 5$: $f$ changes from − to + ⇒ local MIN of $g$.',
      },
      {
        prompt: '**(d)** Find $g\'\'(3)$.',
        rubric: '$g\'\'(x) = f\'(x)$. On the segment from $(2,0)$ to $(4,-2)$, slope is $(-2 - 0)/(4 - 2) = -1$. So $g\'\'(3) = f\'(3) = -1$.',
      },
    ],
  },

  /* ============== Q5 — NO CALCULATOR (Logistic DE) ============== */
  {
    type: 'saq',
    topic: 'frq-logistic-differential-equation',
    stimulus: `**Q5 (No calculator) — Logistic Differential Equation**

A population $P(t)$ satisfies $\\dfrac{dP}{dt} = 0.04 P\\left(1 - \\dfrac{P}{500}\\right)$, where $t$ is in years. Initially $P(0) = 100$.`,
    parts: [
      {
        prompt: '**(a)** State the carrying capacity and find $\\displaystyle\\lim_{t \\to \\infty} P(t)$.',
        rubric: 'Logistic form $dP/dt = kP(1 - P/L)$ with $L = 500$. Carrying capacity is **500**. $\\lim_{t\\to\\infty} P(t) = 500$.',
      },
      {
        prompt: '**(b)** For what value of $P$ is the population growing fastest? Show your reasoning.',
        rubric: 'Growth rate $dP/dt$ is maximized at $P = L/2 = 250$. (Or: take $d/dP[kP(1-P/L)] = k - 2kP/L = 0 \\Rightarrow P = L/2$.)',
      },
      {
        prompt: '**(c)** Use Euler\'s method with two equal steps of size $\\Delta t = 5$ to approximate $P(10)$, given $P(0) = 100$.',
        rubric: 'Step 1: $P\'(0) = 0.04(100)(1 - 100/500) = 0.04(100)(0.8) = 3.2$. $P(5) \\approx 100 + 5(3.2) = 116$. Step 2: $P\'(5) \\approx 0.04(116)(1 - 116/500) = 0.04(116)(384/500) = 0.04(116)(0.768) \\approx 3.564$. $P(10) \\approx 116 + 5(3.564) \\approx 133.8$.',
      },
      {
        prompt: '**(d)** Is the Euler approximation in part (c) an underestimate or overestimate of the true value of $P(10)$? Explain.',
        rubric: 'Since $P < L/2 = 250$ throughout the interval, the population is in the concave-up phase of the logistic curve ($d^2P/dt^2 > 0$). Euler\'s method uses tangent lines, which lie below a concave-up curve, so the approximation is an UNDERESTIMATE.',
      },
    ],
  },

  /* ============== Q6 — NO CALCULATOR (Taylor Series) ============== */
  {
    type: 'saq',
    topic: 'frq-taylor-series',
    stimulus: `**Q6 (No calculator) — Taylor / Maclaurin Series**

Let $f(x) = \\ln(1 + x)$.`,
    parts: [
      {
        prompt: '**(a)** Find the first four nonzero terms and the general term of the Maclaurin series for $f(x)$.',
        rubric: '$f(x) = \\ln(1+x) = x - \\dfrac{x^2}{2} + \\dfrac{x^3}{3} - \\dfrac{x^4}{4} + \\cdots$. General term: $\\sum_{n=1}^{\\infty}\\dfrac{(-1)^{n+1}x^n}{n}$.',
      },
      {
        prompt: '**(b)** Find the interval of convergence of the Maclaurin series for $f$, including endpoint analysis.',
        rubric: 'Ratio test: $|a_{n+1}/a_n| = \\dfrac{|x|^{n+1}/(n+1)}{|x|^n/n} = |x| \\cdot \\dfrac{n}{n+1} \\to |x|$. Need $|x| < 1$. Endpoints: $x = 1$: $\\sum (-1)^{n+1}/n$ converges (alternating harmonic). $x = -1$: $\\sum (-1)^{n+1}(-1)^n/n = \\sum -1/n$ diverges (harmonic). Interval: $(-1, 1]$.',
      },
      {
        prompt: '**(c)** Use the third-degree Taylor polynomial $P_3(x) = x - x^2/2 + x^3/3$ to approximate $\\ln(1.2)$. Show your arithmetic.',
        rubric: '$P_3(0.2) = 0.2 - (0.2)^2/2 + (0.2)^3/3 = 0.2 - 0.02 + 0.008/3 = 0.18 + 0.00267 \\approx 0.1827$. (True value $\\approx 0.18232$.)',
      },
      {
        prompt: '**(d)** Use the alternating series error bound to give an upper bound for $|P_3(0.2) - \\ln(1.2)|$.',
        rubric: 'For an alternating series with decreasing magnitudes, the error is bounded by the magnitude of the first omitted term: $|R_3(0.2)| \\le |a_4| = (0.2)^4/4 = 0.0016/4 = 0.0004$.',
      },
    ],
  },
]
