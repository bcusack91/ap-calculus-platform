import type { SAQItem } from '@/components/FullLengthPracticeExam'

/**
 * AP Precalculus — 4 FRQs in 60 minutes total.
 *   Part A (calculator): Q1 Function Concepts, Q2 Modeling
 *   Part B (no calculator): Q3 Function Manipulation, Q4 Symbolic Manipulation
 *
 * Each FRQ is scored out of 6 points per the College Board AP Precalculus rubric.
 */

export const FRQS: SAQItem[] = [
  /* ---- Q1: Function Concepts (calculator) ---- */
  {
    type: 'saq',
    topic: 'frq-function-concepts',
    stimulus: `**FRQ #1 — Function Concepts (Calculator) (6 points)**

The temperature in a greenhouse, in degrees Fahrenheit, is modeled by
$$T(h) = 68 + 14\\sin\\left(\\dfrac{\\pi(h - 6)}{12}\\right)$$
where $h$ is the number of hours after midnight, $0 \\leq h \\leq 24$.`,
    parts: [
      {
        prompt: '(a) Determine the period of $T$, and interpret the period in the context of the greenhouse temperature. (2 pts)',
        rubric: 'Period $= \\dfrac{2\\pi}{\\pi/12} = 24$ hours. Interpretation: the temperature pattern repeats every 24 hours (one full day). +1 correct period · +1 correct contextual interpretation.',
      },
      {
        prompt: '(b) Find $T(15)$. Round to the nearest tenth of a degree, and explain what this value represents in context. (2 pts)',
        rubric: '$T(15) = 68 + 14\\sin(\\pi \\cdot 9/12) = 68 + 14\\sin(3\\pi/4) = 68 + 14(\\sqrt{2}/2) \\approx 68 + 9.9 \\approx 77.9°$F. Interpretation: at 3:00 p.m. (15 hours after midnight) the greenhouse temperature is about 77.9°F. +1 correct numerical value · +1 correct contextual meaning.',
      },
      {
        prompt: '(c) The plants begin to wilt when the temperature exceeds 80°F. Find one interval, accurate to the nearest tenth of an hour, on $0 \\leq h \\leq 24$ during which $T(h) > 80$. Justify by referring to a graph or solving an inequality. (2 pts)',
        rubric: 'Solve $14\\sin(\\pi(h-6)/12) > 12$ ⇒ $\\sin(\\pi(h-6)/12) > 6/7 \\approx 0.857$. The sine reaches 0.857 at $\\arcsin(6/7) \\approx 1.029$ radians and at $\\pi - 1.029 \\approx 2.113$ radians. So $\\pi(h-6)/12 \\in (1.029, 2.113)$ ⇒ $h - 6 \\in (3.93, 8.07)$ ⇒ $h \\in (9.9, 14.1)$ approximately. +1 correct setup of inequality · +1 correct interval.',
      },
    ],
  },

  /* ---- Q2: Modeling (calculator) ---- */
  {
    type: 'saq',
    topic: 'frq-modeling',
    stimulus: `**FRQ #2 — Modeling a Non-Periodic Context (Calculator) (6 points)**

A small town has a population $P(t)$, where $t$ is years since 2010. Census data are:
| $t$ (years since 2010) | 0 | 5 | 10 |
|---|---|---|---|
| Population | 1,800 | 2,400 | 3,200 |
`,
    parts: [
      {
        prompt: '(a) The population appears to grow roughly exponentially. Use the data points $(0, 1800)$ and $(10, 3200)$ to write an exponential model $P(t) = a \\cdot b^t$. Round $b$ to four decimal places. (2 pts)',
        rubric: '$a = P(0) = 1800$. From $1800 \\cdot b^{10} = 3200$: $b^{10} = 16/9$ ⇒ $b = (16/9)^{1/10} \\approx 1.0584$. Model: $P(t) \\approx 1800 \\cdot (1.0584)^t$. +1 correct $a$ · +1 correct $b$.',
      },
      {
        prompt: '(b) Use your model to estimate the population in 2025 (i.e., $t = 15$). (2 pts)',
        rubric: '$P(15) = 1800 \\cdot 1.0584^{15} \\approx 1800 \\cdot 2.354 \\approx 4{,}238$. Accept 4,200–4,300. +1 correct substitution · +1 correct numerical value.',
      },
      {
        prompt: '(c) Use the model to determine, to the nearest tenth of a year, when the population first exceeds 5,000. (2 pts)',
        rubric: '$1800 \\cdot 1.0584^t = 5000$ ⇒ $1.0584^t = 25/9 \\approx 2.778$. $t = \\ln(2.778)/\\ln(1.0584) \\approx 1.0217 / 0.05675 \\approx 18.0$ years. Population first exceeds 5,000 around $t \\approx 18.0$ (year 2028). +1 correct equation/setup · +1 correct value.',
      },
    ],
  },

  /* ---- Q3: Symbolic Manipulation — Polynomial / Rational (no calculator) ---- */
  {
    type: 'saq',
    topic: 'frq-symbolic',
    stimulus: `**FRQ #3 — Polynomial & Rational Functions (No Calculator) (6 points)**

Let $f(x) = \\dfrac{2x^2 - 7x + 3}{x^2 - x - 6}$.`,
    parts: [
      {
        prompt: '(a) Factor the numerator and denominator of $f(x)$ completely, and identify the value(s) of $x$ for which $f$ is undefined. (2 pts)',
        rubric: 'Numerator: $2x^2 - 7x + 3 = (2x - 1)(x - 3)$. Denominator: $x^2 - x - 6 = (x - 3)(x + 2)$. So $f(x) = \\dfrac{(2x-1)(x-3)}{(x-3)(x+2)}$. $f$ is undefined where the denominator is zero: $x = 3$ and $x = -2$. +1 correct factoring · +1 correct values where undefined.',
      },
      {
        prompt: '(b) Identify the location and type of all discontinuities (vertical asymptotes vs. removable holes) of $f$. (2 pts)',
        rubric: '$x = 3$: factor cancels ⇒ removable discontinuity (hole) at $x = 3$. The y-coordinate of the hole is the limit: $\\lim_{x \\to 3}\\dfrac{2x-1}{x+2} = \\dfrac{5}{5} = 1$, so the hole is at $(3, 1)$. $x = -2$: factor does not cancel ⇒ vertical asymptote at $x = -2$. +1 correctly identifies hole · +1 correctly identifies vertical asymptote (location of each).',
      },
      {
        prompt: '(c) Determine the horizontal asymptote of $f$, with justification. (2 pts)',
        rubric: 'Numerator and denominator have the same degree (both 2). Horizontal asymptote is the ratio of leading coefficients: $y = 2/1 = 2$. +1 correct value · +1 valid reasoning (compares degrees / leading coefficients).',
      },
    ],
  },

  /* ---- Q4: Symbolic Manipulation — Trig (no calculator) ---- */
  {
    type: 'saq',
    topic: 'frq-trig-symbolic',
    stimulus: `**FRQ #4 — Trigonometric & Symbolic Manipulation (No Calculator) (6 points)**

Consider $g(\\theta) = 2\\sin^2\\theta + \\sin\\theta - 1$.`,
    parts: [
      {
        prompt: '(a) Solve $g(\\theta) = 0$ on $[0, 2\\pi)$. Show your factoring step. (3 pts)',
        rubric: 'Let $u = \\sin\\theta$: $2u^2 + u - 1 = (2u - 1)(u + 1) = 0$ ⇒ $u = 1/2$ or $u = -1$. \n$\\sin\\theta = 1/2$ ⇒ $\\theta = \\pi/6, 5\\pi/6$. \n$\\sin\\theta = -1$ ⇒ $\\theta = 3\\pi/2$. \nFinal: $\\theta = \\pi/6, 5\\pi/6, 3\\pi/2$. +1 correct factoring · +1 correct $\\sin\\theta = 1/2$ solutions · +1 correct $\\sin\\theta = -1$ solution.',
      },
      {
        prompt: '(b) Use the Pythagorean identity to rewrite $g(\\theta)$ in terms of $\\cos\\theta$ alone. (No simplification beyond a polynomial in $\\cos\\theta$ is required.) Write your answer; you do NOT need to solve. (1 pt)',
        rubric: '$\\sin^2\\theta = 1 - \\cos^2\\theta$, so $g(\\theta) = 2(1 - \\cos^2\\theta) + \\sin\\theta - 1 = 1 - 2\\cos^2\\theta + \\sin\\theta$. (Note: $\\sin\\theta$ remains, since the question asked only to use the Pythagorean identity to remove $\\sin^2\\theta$.) +1 correct substitution and simplification.',
      },
      {
        prompt: '(c) Use a sum identity to evaluate $\\sin\\left(\\dfrac{\\pi}{6} + \\dfrac{\\pi}{4}\\right)$ exactly. (2 pts)',
        rubric: '$\\sin(A+B) = \\sin A\\cos B + \\cos A\\sin B$.\n$= \\sin(\\pi/6)\\cos(\\pi/4) + \\cos(\\pi/6)\\sin(\\pi/4)$\n$= \\dfrac{1}{2} \\cdot \\dfrac{\\sqrt{2}}{2} + \\dfrac{\\sqrt{3}}{2} \\cdot \\dfrac{\\sqrt{2}}{2}$\n$= \\dfrac{\\sqrt{2} + \\sqrt{6}}{4}$.\n+1 correct identity setup · +1 correct simplified value.',
      },
    ],
  },
]
