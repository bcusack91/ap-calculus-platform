/**
 * AP Calculus AB FRQ Practice Questions
 * Based on College Board AP Calculus AB FRQ format:
 * - 2 long FRQs (9 pts each, ~30 min each)
 * - 4 short FRQs (9 pts each, ~15 min each)
 * Topics span all 8 units
 */

export interface FRQRubricItem {
  points: number
  description: string
  keywords: string[]
}

export interface FRQPart {
  label: string
  prompt: string
  maxPoints: number
  rubric: FRQRubricItem[]
  sampleAnswer: string
}

export interface CalcABFRQ {
  id: string
  type: 'long' | 'short'
  unit: number
  title: string
  prompt: string
  parts: FRQPart[]
  totalPoints: number
  timeRecommendation: string
  calculatorAllowed: boolean
  dataTableHtml?: string
}

// ─── Long FRQs (9 points each, ~30 minutes) ─────────────────────────

const longFRQs: CalcABFRQ[] = [
  {
    id: 'calcab-long-1',
    type: 'long',
    unit: 6,
    title: 'Rate of Change & Accumulation',
    prompt: `Water flows into a storage tank at a rate modeled by $R(t)$ liters per minute, where $t$ is measured in minutes. Selected values of $R(t)$ are given in the table below. The tank contains 50 liters of water at time $t = 0$.

| $t$ (min) | 0 | 3 | 7 | 10 | 12 |
|:---:|:---:|:---:|:---:|:---:|:---:|
| $R(t)$ (L/min) | 8 | 6 | 4 | 3 | 1 |

Water is simultaneously drained from the tank at a constant rate of 2 liters per minute.`,
    totalPoints: 9,
    timeRecommendation: '~30 minutes',
    calculatorAllowed: true,
    parts: [
      {
        label: '(a)',
        prompt: 'Use a left Riemann sum with the four subintervals indicated by the table to approximate $\\int_0^{12} R(t)\\,dt$. Indicate units of measure.',
        maxPoints: 2,
        rubric: [
          { points: 1, description: 'Sets up the left Riemann sum correctly: R(0)·3 + R(3)·4 + R(7)·3 + R(10)·2', keywords: ['8(3)', '6(4)', '4(3)', '3(2)', 'left Riemann', 'left endpoint'] },
          { points: 1, description: 'Computes the sum as 66 liters and states units', keywords: ['66', 'liters', 'L'] },
        ],
        sampleAnswer: 'Using a left Riemann sum with subintervals $[0,3], [3,7], [7,10], [10,12]$:\n\n$$\\int_0^{12} R(t)\\,dt \\approx R(0)(3) + R(3)(4) + R(7)(3) + R(10)(2)$$\n$$= 8(3) + 6(4) + 4(3) + 3(2) = 24 + 24 + 12 + 6 = 66 \\text{ liters}$$',
      },
      {
        label: '(b)',
        prompt: 'Using your answer from part (a), approximate the total amount of water in the tank at time $t = 12$ minutes.',
        maxPoints: 3,
        rubric: [
          { points: 1, description: 'Accounts for the initial 50 liters in the tank', keywords: ['50', 'initial'] },
          { points: 1, description: 'Subtracts the water drained: 2 L/min × 12 min = 24 liters', keywords: ['2(12)', '24', 'drained', 'removed'] },
          { points: 1, description: 'Computes the total: 50 + 66 − 24 = 92 liters', keywords: ['92', '50 + 66', '66 - 24'] },
        ],
        sampleAnswer: 'Total water at $t = 12$:\n\n$$\\text{Water} = 50 + \\int_0^{12} R(t)\\,dt - 2(12)$$\n$$\\approx 50 + 66 - 24 = 92 \\text{ liters}$$\n\nThe tank contains approximately 92 liters at $t = 12$ minutes.',
      },
      {
        label: '(c)',
        prompt: 'Is the rate at which water flows into the tank increasing or decreasing at time $t = 5$? Give a reason for your answer.',
        maxPoints: 2,
        rubric: [
          { points: 1, description: 'States that R(t) is decreasing at t = 5', keywords: ['decreasing', 'negative'] },
          { points: 1, description: 'Justifies using a difference quotient or noting that R values decrease across the interval containing t = 5: (R(7)−R(3))/(7−3) = (4−6)/4 = −0.5 < 0', keywords: ['difference quotient', 'R(7)', 'R(3)', '-0.5', '-1/2', 'slope', 'negative'] },
        ],
        sampleAnswer: 'The rate of flow is decreasing at $t = 5$. Using values from the table to approximate $R\'(5)$:\n\n$$R\'(5) \\approx \\frac{R(7) - R(3)}{7 - 3} = \\frac{4 - 6}{4} = -0.5 \\text{ L/min}^2$$\n\nSince $R\'(5) < 0$, the rate of flow is decreasing at $t = 5$.',
      },
      {
        label: '(d)',
        prompt: 'For $0 \\le t \\le 12$, at what time $t$ is the amount of water in the tank a maximum? Justify your answer.',
        maxPoints: 2,
        rubric: [
          { points: 1, description: 'Sets up the net rate equation: R(t) − 2 = 0, so R(t) = 2, and identifies that this occurs between t = 10 and t = 12 based on table values', keywords: ['R(t) = 2', 'net rate', 'R(t) - 2', 'between 10 and 12'] },
          { points: 1, description: 'Justifies that the net rate changes from positive (R(t) > 2) to negative (R(t) < 2), so the amount is maximized at the time when R(t) = 2, and checks endpoints', keywords: ['positive to negative', 'changes sign', 'maximum', 'endpoint', 'R(10) = 3 > 2', 'R(12) = 1 < 2'] },
        ],
        sampleAnswer: 'The amount of water $W(t) = 50 + \\int_0^t R(s)\\,ds - 2t$, so $W\'(t) = R(t) - 2$.\n\nThe net rate is zero when $R(t) = 2$. From the table, $R(10) = 3 > 2$ and $R(12) = 1 < 2$, so $R(t) = 2$ for some $t$ in $(10, 12)$.\n\nSince $W\'(t) > 0$ for $t < $ this value (where $R(t) > 2$) and $W\'(t) < 0$ after (where $R(t) < 2$), $W(t)$ changes from increasing to decreasing. The maximum amount of water occurs at the time in $(10, 12)$ when $R(t) = 2$.',
      },
    ],
  },
  {
    id: 'calcab-long-2',
    type: 'long',
    unit: 4,
    title: 'Related Rates & Optimization',
    prompt: `A conical tank has a height of 10 meters and a top radius of 4 meters. Water is being pumped into the tank at a constant rate of $2$ cubic meters per minute. The volume of a cone is $V = \\frac{1}{3}\\pi r^2 h$.`,
    totalPoints: 9,
    timeRecommendation: '~30 minutes',
    calculatorAllowed: true,
    parts: [
      {
        label: '(a)',
        prompt: 'Express the radius $r$ of the water surface in terms of the water height $h$. Then write the volume of water as a function of $h$ only.',
        maxPoints: 2,
        rubric: [
          { points: 1, description: 'Uses similar triangles to find r/h = 4/10, so r = 2h/5', keywords: ['similar triangles', 'r/h = 4/10', 'r = 2h/5', '2h/5', 'r/h'] },
          { points: 1, description: 'Substitutes to get V = $(4\\pi h^{3})/75$ or equivalent', keywords: ['4π', 'h³', '75', 'V = (4/75)', 'πh³'] },
        ],
        sampleAnswer: 'By similar triangles, $\\frac{r}{h} = \\frac{4}{10} = \\frac{2}{5}$, so $r = \\frac{2h}{5}$.\n\nSubstituting into the volume formula:\n$$V = \\frac{1}{3}\\pi r^2 h = \\frac{1}{3}\\pi \\left(\\frac{2h}{5}\\right)^2 h = \\frac{1}{3}\\pi \\cdot \\frac{4h^2}{25} \\cdot h = \\frac{4\\pi h^3}{75}$$',
      },
      {
        label: '(b)',
        prompt: 'At the instant when the water height is $h = 5$ meters, find the rate at which the water level is rising. Include units.',
        maxPoints: 3,
        rubric: [
          { points: 1, description: 'Differentiates V = $(4\\pi h^{3})/75$ to get dV/dt = $(4\\pi h^{2}/25)(dh/dt)$', keywords: ['dV/dt', 'dh/dt', '4πh²', '12πh²', '/25', '/75'] },
          { points: 1, description: 'Substitutes dV/dt = 2 and h = 5', keywords: ['dV/dt = 2', 'h = 5'] },
          { points: 1, description: 'Solves dh/dt = 50/(100π) = 1/(2π) ≈ 0.159 m/min', keywords: ['1/(2π)', '1/2π', '0.159', 'm/min', 'meters per minute'] },
        ],
        sampleAnswer: 'Differentiating $V = \\frac{4\\pi h^3}{75}$ with respect to $t$:\n\n$$\\frac{dV}{dt} = \\frac{4\\pi (3h^2)}{75} \\cdot \\frac{dh}{dt} = \\frac{12\\pi h^2}{75} \\cdot \\frac{dh}{dt} = \\frac{4\\pi h^2}{25} \\cdot \\frac{dh}{dt}$$\n\nSubstituting $\\frac{dV}{dt} = 2$ and $h = 5$:\n\n$$2 = \\frac{4\\pi(25)}{25} \\cdot \\frac{dh}{dt} = 4\\pi \\cdot \\frac{dh}{dt}$$\n\n$$\\frac{dh}{dt} = \\frac{2}{4\\pi} = \\frac{1}{2\\pi} \\approx 0.159 \\text{ m/min}$$',
      },
      {
        label: '(c)',
        prompt: 'At the instant when $h = 5$ meters, find the rate at which the area of the water surface is changing. Include units.',
        maxPoints: 2,
        rubric: [
          { points: 1, description: 'Writes surface area A = $\\pi r^{2}$ = $\\pi (2h/5)^{2}$ = $4\\pi h^{2}/25$ and differentiates to get dA/dt = (8πh/25)(dh/dt)', keywords: ['A = πr²', '4πh²/25', 'dA/dt', '8πh/25'] },
          { points: 1, description: 'Substitutes h = 5 and dh/dt = 1/(2π) to get dA/dt = 8(5)/(25·2) = 4/5 = 0.8 $m^{2}/min$', keywords: ['0.8', '4/5', 'm²/min', 'square meters'] },
        ],
        sampleAnswer: 'The surface area is $A = \\pi r^2 = \\pi\\left(\\frac{2h}{5}\\right)^2 = \\frac{4\\pi h^2}{25}$.\n\nDifferentiating:\n$$\\frac{dA}{dt} = \\frac{8\\pi h}{25} \\cdot \\frac{dh}{dt}$$\n\nSubstituting $h = 5$ and $\\frac{dh}{dt} = \\frac{1}{2\\pi}$:\n\n$$\\frac{dA}{dt} = \\frac{8\\pi(5)}{25} \\cdot \\frac{1}{2\\pi} = \\frac{40\\pi}{25} \\cdot \\frac{1}{2\\pi} = \\frac{40}{50} = \\frac{4}{5} = 0.8 \\text{ m}^2\\text{/min}$$',
      },
      {
        label: '(d)',
        prompt: 'A rectangular storage building is to be constructed adjacent to the conical tank. The building must have a volume of 200 cubic meters and will have a square base. The material for the base costs \\$6 per $m^{2}$, the top costs \\$2 per $m^{2}$, and each side costs \\$4 per $m^{2}$. Find the dimensions that minimize the total cost.',
        maxPoints: 2,
        rubric: [
          { points: 1, description: 'Sets up cost function: C = $6s^{2}$ + $2s^{2}$ + 4(4sh) = $8s^{2}$ + 16sh, then uses h = $200/s^{2}$ to write C(s) = $8s^{2}$ + 3200/s', keywords: ['cost function', 'C =', '8s²', '3200/s', 'h = 200/s²'] },
          { points: 1, description: 'Differentiates and sets C\'(s) = 0: 16s − $3200/s^{2}$ = 0, solves $s^{3}$ = 200, s = ∛200 ≈ 5.848 m', keywords: ['C\'(s) = 0', '16s', '3200/s²', 's³ = 200', '∛200', '5.85'] },
        ],
        sampleAnswer: 'Let $s$ = side of square base and $h$ = height. Then $V = s^2h = 200$, so $h = \\frac{200}{s^2}$.\n\nCost: base costs $6s^2$, top costs $2s^2$, four sides cost $4(4sh) = 16sh$.\n\n$$C(s) = 6s^2 + 2s^2 + 16s \\cdot \\frac{200}{s^2} = 8s^2 + \\frac{3200}{s}$$\n\nSetting $C\'(s) = 0$:\n$$C\'(s) = 16s - \\frac{3200}{s^2} = 0$$\n$$16s^3 = 3200 \\implies s^3 = 200 \\implies s = \\sqrt[3]{200} \\approx 5.848 \\text{ m}$$\n$$h = \\frac{200}{(\\sqrt[3]{200})^2} = \\frac{200}{200^{2/3}} = 200^{1/3} \\approx 5.848 \\text{ m}$$\n\nSince $C\'\'(s) = 16 + 6400/s^3 > 0$, this is a minimum.',
      },
    ],
  },
  {
    id: 'calcab-long-3',
    type: 'long',
    unit: 7,
    title: 'Differential Equations & Slope Fields',
    prompt: `Consider the differential equation $\\frac{dy}{dx} = \\frac{x + 1}{y}$, where $y \\neq 0$.`,
    totalPoints: 9,
    timeRecommendation: '~30 minutes',
    calculatorAllowed: false,
    parts: [
      {
        label: '(a)',
        prompt: 'On the axes provided, sketch the slope field for the given differential equation at the twelve points indicated.\n\n$$(-1, -1),\\; (-1, 1),\\; (-1, 2),\\; (0, -1),\\; (0, 1),\\; (0, 2),$$\n$$\\;(1, -1),\\; (1, 1),\\; (1, 2),\\; (2, -1),\\; (2, 1),\\; (2, 2)$$',
        maxPoints: 2,
        rubric: [
          { points: 1, description: 'Correctly computes slopes for all 12 points, e.g., at (−1,1) slope = 0, at (0,1) slope = 1, at (1,1) slope = 2', keywords: ['slope = 0', 'slope = 1', 'slope = 2', 'horizontal', '(-1,1)'] },
          { points: 1, description: 'Sketches line segments with appropriate orientations: horizontal at x = −1, positive slopes increasing as x increases', keywords: ['line segment', 'slope field', 'orientation', 'horizontal'] },
        ],
        sampleAnswer: 'At each point $(x, y)$, the slope is $\\frac{x+1}{y}$:\n\n| Point | Slope |\n|-------|-------|\n| $(-1, -1)$ | $0/(-1) = 0$ |\n| $(-1, 1)$ | $0/1 = 0$ |\n| $(-1, 2)$ | $0/2 = 0$ |\n| $(0, -1)$ | $1/(-1) = -1$ |\n| $(0, 1)$ | $1/1 = 1$ |\n| $(0, 2)$ | $1/2$ |\n| $(1, -1)$ | $2/(-1) = -2$ |\n| $(1, 1)$ | $2/1 = 2$ |\n| $(1, 2)$ | $2/2 = 1$ |\n| $(2, -1)$ | $3/(-1) = -3$ |\n| $(2, 1)$ | $3/1 = 3$ |\n| $(2, 2)$ | $3/2$ |\n\nAll segments along $x = -1$ are horizontal. Slopes above the $x$-axis are positive for $x > -1$ and slopes below are negative for $x > -1$.',
      },
      {
        label: '(b)',
        prompt: 'Find the particular solution $y = f(x)$ to the differential equation with initial condition $f(0) = 4$.',
        maxPoints: 4,
        rubric: [
          { points: 1, description: 'Separates variables correctly: y dy = (x + 1) dx', keywords: ['y dy', '(x + 1) dx', 'separate', 'separation'] },
          { points: 1, description: 'Integrates both sides: $y^{2}/2$ = $x^{2}/2$ + x + C', keywords: ['y²/2', 'x²/2', '+ x + C', 'integrate'] },
          { points: 1, description: 'Applies initial condition f(0) = 4 to find C = 8', keywords: ['f(0) = 4', 'C = 8', '16/2 = 0 + 0 + C'] },
          { points: 1, description: 'Writes the particular solution: y = $\\sqrt{x^{2} + 2x + 16}$ (positive root since y(0) = 4 > 0)', keywords: ['y = √', 'x² + 2x + 16', 'positive', 'square root'] },
        ],
        sampleAnswer: 'Separating variables: $y\\,dy = (x + 1)\\,dx$\n\nIntegrating both sides:\n$$\\int y\\,dy = \\int (x + 1)\\,dx$$\n$$\\frac{y^2}{2} = \\frac{x^2}{2} + x + C$$\n\nApplying $f(0) = 4$:\n$$\\frac{16}{2} = 0 + 0 + C \\implies C = 8$$\n\nSo $\\frac{y^2}{2} = \\frac{x^2}{2} + x + 8$, giving $y^2 = x^2 + 2x + 16$.\n\nSince $f(0) = 4 > 0$, we take the positive root:\n$$y = \\sqrt{x^2 + 2x + 16}$$',
      },
      {
        label: '(c)',
        prompt: 'Determine the domain of the particular solution found in part (b).',
        maxPoints: 1,
        rubric: [
          { points: 1, description: 'Shows discriminant of $x^{2}$ + 2x + 16 is negative (4 − 64 = −60 < 0), so $x^{2}$ + 2x + 16 > 0 for all real x. Domain is all real numbers.', keywords: ['all real', 'discriminant', 'negative', '(-∞, ∞)', 'always positive'] },
        ],
        sampleAnswer: 'The expression under the square root is $x^2 + 2x + 16$. To determine when this is positive, compute the discriminant:\n\n$$\\Delta = (2)^2 - 4(1)(16) = 4 - 64 = -60 < 0$$\n\nSince the discriminant is negative and the leading coefficient is positive, $x^2 + 2x + 16 > 0$ for all real $x$.\n\nThe domain of $y = \\sqrt{x^2 + 2x + 16}$ is $(-\\infty, \\infty)$.',
      },
      {
        label: '(d)',
        prompt: 'For the particular solution in part (b), find the value of $x$ at which $y$ attains its minimum value. Justify that this is a minimum.',
        maxPoints: 2,
        rubric: [
          { points: 1, description: 'Sets dy/dx = 0: (x+1)/y = 0, so x = −1, giving y = $\\sqrt{1-2+16}$ = $\\sqrt{15}$', keywords: ['x = -1', 'dy/dx = 0', 'x + 1 = 0', '√15'] },
          { points: 1, description: 'Justifies minimum: dy/dx changes from negative to positive at x = −1, or uses second derivative test showing y\'\'(−1) > 0', keywords: ['negative to positive', 'minimum', 'second derivative', 'sign change', 'increasing'] },
        ],
        sampleAnswer: 'Setting $\\frac{dy}{dx} = \\frac{x+1}{y} = 0$ gives $x = -1$.\n\nAt $x = -1$: $y = \\sqrt{(-1)^2 + 2(-1) + 16} = \\sqrt{15}$.\n\nFor $x < -1$, $x + 1 < 0$ and $y > 0$, so $\\frac{dy}{dx} < 0$ (decreasing).\nFor $x > -1$, $x + 1 > 0$ and $y > 0$, so $\\frac{dy}{dx} > 0$ (increasing).\n\nSince $\\frac{dy}{dx}$ changes from negative to positive at $x = -1$, $y$ has a minimum at $x = -1$ with value $\\sqrt{15}$.',
      },
    ],
  },
]

// ─── Short FRQs (9 points each, ~15 minutes) ────────────────────────

const shortFRQs: CalcABFRQ[] = [
  {
    id: 'calcab-short-1',
    type: 'short',
    unit: 1,
    title: 'Limits & Continuity',
    prompt: `Let $f$ be the function defined by

$$f(x) = \\begin{cases} \\dfrac{x^2 - 4}{x - 2} & \\text{if } x \\neq 2 \\\\[6pt] k & \\text{if } x = 2 \\end{cases}$$`,
    totalPoints: 9,
    timeRecommendation: '~15 minutes',
    calculatorAllowed: false,
    parts: [
      {
        label: '(a)',
        prompt: 'Find $\\displaystyle\\lim_{x \\to 2} f(x)$. Show the algebraic work that leads to your answer.',
        maxPoints: 3,
        rubric: [
          { points: 1, description: 'Factors numerator: $x^{2}$ − 4 = (x − 2)(x + 2)', keywords: ['(x-2)(x+2)', 'factor', 'difference of squares'] },
          { points: 1, description: 'Simplifies the expression by canceling (x − 2)', keywords: ['cancel', 'simplify', 'x + 2'] },
          { points: 1, description: 'Evaluates the limit: lim = 2 + 2 = 4', keywords: ['= 4', 'limit is 4', 'lim = 4'] },
        ],
        sampleAnswer: '$$\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2} = \\lim_{x \\to 2} \\frac{(x-2)(x+2)}{x-2} = \\lim_{x \\to 2} (x + 2) = 4$$',
      },
      {
        label: '(b)',
        prompt: 'Find the value of $k$ that makes $f$ continuous at $x = 2$. Justify your answer using the definition of continuity.',
        maxPoints: 3,
        rubric: [
          { points: 1, description: 'States the three conditions for continuity: f(2) is defined, limit exists, f(2) = limit', keywords: ['f(2) defined', 'limit exists', 'f(2) = lim', 'three conditions', 'definition of continuity'] },
          { points: 1, description: 'Sets f(2) = k equal to the limit: k = 4', keywords: ['k = 4', 'f(2) = 4'] },
          { points: 1, description: 'Concludes that f is continuous at x = 2 when k = 4 because all three conditions are satisfied', keywords: ['continuous', 'satisfied', 'k = 4'] },
        ],
        sampleAnswer: 'For $f$ to be continuous at $x = 2$, three conditions must hold:\n\n1. $f(2)$ must be defined: $f(2) = k$ ✓\n2. $\\lim_{x \\to 2} f(x)$ must exist: from part (a), the limit is 4 ✓\n3. $\\lim_{x \\to 2} f(x) = f(2)$: We need $k = 4$\n\nTherefore $k = 4$ makes $f$ continuous at $x = 2$.',
      },
      {
        label: '(c)',
        prompt: 'Let $g(x) = f(x) \\cdot \\cos(\\pi x)$. Using the value of $k$ from part (b), explain why the Intermediate Value Theorem guarantees that $g(c) = 0$ for some $c$ in the interval $[1, 2]$.',
        maxPoints: 3,
        rubric: [
          { points: 1, description: 'Evaluates g(1) = f(1)·cos(π) = (1+2)(−1) = −3 and g(2) = f(2)·cos(2π) = 4(1) = 4', keywords: ['g(1) = -3', 'g(2) = 4', 'cos(π) = -1', 'cos(2π) = 1'] },
          { points: 1, description: 'States that g is continuous on [1,2] because f and cos are continuous', keywords: ['continuous on [1,2]', 'product of continuous', 'g is continuous'] },
          { points: 1, description: 'Since g(1) = −3 < 0 < 4 = g(2), IVT guarantees g(c) = 0 for some c in (1,2)', keywords: ['IVT', 'Intermediate Value', 'between', 'g(1) < 0 < g(2)', 'sign change'] },
        ],
        sampleAnswer: 'With $k = 4$, $f$ is continuous everywhere. Since $\\cos(\\pi x)$ is also continuous, $g(x) = f(x)\\cos(\\pi x)$ is continuous on $[1,2]$.\n\n$g(1) = f(1) \\cdot \\cos(\\pi) = (1 + 2)(-1) = -3$\n$g(2) = f(2) \\cdot \\cos(2\\pi) = 4(1) = 4$\n\nSince $g$ is continuous on $[1, 2]$ and $g(1) = -3 < 0 < 4 = g(2)$, the Intermediate Value Theorem guarantees that $g(c) = 0$ for at least one value $c$ in $(1, 2)$.',
      },
    ],
  },
  {
    id: 'calcab-short-2',
    type: 'short',
    unit: 5,
    title: 'Derivative Applications',
    prompt: `Let $f$ be a function that is continuous on $[-2, 6]$ and differentiable on $(-2, 6)$, with selected values given below.

| $x$ | $-2$ | $0$ | $2$ | $4$ | $6$ |
|:---:|:---:|:---:|:---:|:---:|:---:|
| $f(x)$ | $5$ | $1$ | $-1$ | $3$ | $7$ |`,
    totalPoints: 9,
    timeRecommendation: '~15 minutes',
    calculatorAllowed: false,
    parts: [
      {
        label: '(a)',
        prompt: 'Does the Mean Value Theorem guarantee a value $c$ in $(-2, 6)$ such that $f\'(c) = \\frac{1}{4}$? Justify your answer.',
        maxPoints: 3,
        rubric: [
          { points: 1, description: 'States MVT hypotheses: f is continuous on [−2, 6] and differentiable on (−2, 6)', keywords: ['continuous', 'differentiable', 'hypotheses', 'conditions'] },
          { points: 1, description: 'Computes the MVT slope: (f(6)−f(−2))/(6−(−2)) = (7−5)/8 = 2/8 = 1/4', keywords: ['(7-5)/8', '2/8', '1/4', 'average rate'] },
          { points: 1, description: 'Concludes MVT guarantees f\'(c) = 1/4 for some c in (−2, 6)', keywords: ['MVT guarantees', 'yes', 'some c', 'f\'(c) = 1/4'] },
        ],
        sampleAnswer: 'Since $f$ is continuous on $[-2, 6]$ and differentiable on $(-2, 6)$, the Mean Value Theorem applies.\n\n$$\\frac{f(6) - f(-2)}{6 - (-2)} = \\frac{7 - 5}{8} = \\frac{1}{4}$$\n\nBy MVT, there exists at least one $c \\in (-2, 6)$ such that $f\'(c) = \\frac{1}{4}$.',
      },
      {
        label: '(b)',
        prompt: 'Must there be a value $c$ in $(0, 4)$ such that $f(c) = 0$? Justify your answer.',
        maxPoints: 3,
        rubric: [
          { points: 1, description: 'Identifies that f(0) = 1 > 0 and f(2) = −1 < 0', keywords: ['f(0) = 1', 'f(2) = -1', 'positive', 'negative'] },
          { points: 1, description: 'States that f is continuous on [0, 2] ⊂ [0, 4]', keywords: ['continuous', '[0, 2]'] },
          { points: 1, description: 'Applies IVT: since f changes sign on [0, 2], there exists c in (0, 2) ⊂ (0, 4) with f(c) = 0', keywords: ['IVT', 'Intermediate Value', 'f(c) = 0', 'sign change', 'yes'] },
        ],
        sampleAnswer: 'Yes. Since $f$ is continuous on $[0, 4]$ (given continuous on $[-2,6]$), and $f(0) = 1 > 0$ while $f(2) = -1 < 0$, the Intermediate Value Theorem guarantees that $f(c) = 0$ for some $c \\in (0, 2) \\subset (0, 4)$.',
      },
      {
        label: '(c)',
        prompt: 'Estimate $f\'(3)$ using data from the table. Based on this estimate, is $f$ increasing or decreasing at $x = 3$? Is the graph of $f$ concave up or concave down at $x = 3$? Justify.',
        maxPoints: 3,
        rubric: [
          { points: 1, description: 'Estimates f\'(3) ≈ (f(4) − f(2))/(4 − 2) = (3 − (−1))/2 = 2', keywords: ['f\'(3)', '(3-(-1))/2', '4/2', '= 2'] },
          { points: 1, description: 'Since f\'(3) ≈ 2 > 0, f is increasing at x = 3', keywords: ['increasing', 'positive', 'f\'(3) > 0'] },
          { points: 1, description: 'Estimates f\'\'(3) by comparing slopes of adjacent intervals: slope on [0,2] = −1, slope on [2,4] = 2, slope on [4,6] = 2; f\'\' ≈ (2−(−1))/2 = 3/2 > 0, so concave up', keywords: ['concave up', 'f\'\' > 0', 'second derivative', 'slopes increasing'] },
        ],
        sampleAnswer: '$f\'(3) \\approx \\frac{f(4) - f(2)}{4 - 2} = \\frac{3 - (-1)}{2} = \\frac{4}{2} = 2$\n\nSince $f\'(3) \\approx 2 > 0$, $f$ is **increasing** at $x = 3$.\n\nTo estimate concavity, compare slopes of adjacent intervals:\n- Slope on $[0, 2]$: $\\frac{-1 - 1}{2} = -1$\n- Slope on $[2, 4]$: $\\frac{3 - (-1)}{2} = 2$\n\n$$f\'\'(3) \\approx \\frac{2 - (-1)}{4 - 0} = \\frac{3}{4} > 0$$\n\nSince $f\'\' > 0$, the graph is **concave up** at $x = 3$.',
      },
    ],
  },
  {
    id: 'calcab-short-3',
    type: 'short',
    unit: 6,
    title: 'Integration Techniques',
    prompt: `Let $R$ be the region enclosed by $y = \\sqrt{x}$, $y = 0$, and $x = 4$.`,
    totalPoints: 9,
    timeRecommendation: '~15 minutes',
    calculatorAllowed: true,
    parts: [
      {
        label: '(a)',
        prompt: 'Find the area of region $R$.',
        maxPoints: 3,
        rubric: [
          { points: 1, description: 'Sets up the integral: $\\int_{0}^{4}$ $\\sqrt{x}$ dx', keywords: ['∫', '0', '4', '√x', 'x^{1/2}'] },
          { points: 1, description: 'Applies the power rule: $(2/3)x^{3/2}$', keywords: ['2/3', 'x^{3/2}', '(2/3)x'] },
          { points: 1, description: 'Evaluates: $(2/3)(4)^{3/2}$ − 0 = (2/3)(8) = 16/3', keywords: ['16/3', '8', '(2/3)(8)'] },
        ],
        sampleAnswer: '$$A = \\int_0^4 \\sqrt{x}\\,dx = \\int_0^4 x^{1/2}\\,dx = \\left[\\frac{2}{3}x^{3/2}\\right]_0^4 = \\frac{2}{3}(4)^{3/2} - 0 = \\frac{2}{3}(8) = \\frac{16}{3}$$',
      },
      {
        label: '(b)',
        prompt: 'Find the average value of $f(x) = \\sqrt{x}$ on the interval $[0, 4]$.',
        maxPoints: 3,
        rubric: [
          { points: 1, description: 'Writes the average value formula: $(1/(b-a))\\int_{a}^{b}$ f(x) dx', keywords: ['1/(b-a)', 'average value', '1/4', 'formula'] },
          { points: 1, description: 'Substitutes the integral from part (a): (1/4)(16/3)', keywords: ['1/4', '16/3'] },
          { points: 1, description: 'Computes the average value: 4/3', keywords: ['4/3', '1.333'] },
        ],
        sampleAnswer: '$$f_{\\text{avg}} = \\frac{1}{b - a}\\int_a^b f(x)\\,dx = \\frac{1}{4 - 0}\\int_0^4 \\sqrt{x}\\,dx = \\frac{1}{4} \\cdot \\frac{16}{3} = \\frac{4}{3}$$',
      },
      {
        label: '(c)',
        prompt: 'Evaluate $\\displaystyle\\int_0^4 x\\sqrt{4 - x}\\,dx$ using the substitution $u = 4 - x$.',
        maxPoints: 3,
        rubric: [
          { points: 1, description: 'Correctly sets up substitution: u = 4 − x, du = −dx, x = 4 − u; changes limits: x=0→u=4, x=4→u=0', keywords: ['u = 4 - x', 'du = -dx', 'x = 4 - u', 'limits'] },
          { points: 1, description: 'Rewrites integral: $-\\int_{4}^{0}$ $(4-u)\\sqrt{u}$ du = $\\int_{0}^{4}$ $(4u^{1/2} - u^{3/2})$ du', keywords: ['(4-u)√u', '4u^{1/2}', 'u^{3/2}', '∫₀⁴'] },
          { points: 1, description: 'Evaluates: [$8u^{3/2}/3$ − $2u^{5/2}/5$]$ {}_{0}^{4}$ = 64/3 − 64/5 = 128/15', keywords: ['128/15', '64/3', '64/5', '8.533'] },
        ],
        sampleAnswer: 'Let $u = 4 - x$, so $du = -dx$ and $x = 4 - u$.\nWhen $x = 0$: $u = 4$; when $x = 4$: $u = 0$.\n\n$$\\int_0^4 x\\sqrt{4-x}\\,dx = -\\int_4^0 (4-u)\\sqrt{u}\\,du = \\int_0^4 (4-u)u^{1/2}\\,du$$\n\n$$= \\int_0^4 \\left(4u^{1/2} - u^{3/2}\\right)du = \\left[\\frac{8}{3}u^{3/2} - \\frac{2}{5}u^{5/2}\\right]_0^4$$\n\n$$= \\frac{8}{3}(8) - \\frac{2}{5}(32) = \\frac{64}{3} - \\frac{64}{5} = \\frac{320 - 192}{15} = \\frac{128}{15}$$',
      },
    ],
  },
  {
    id: 'calcab-short-4',
    type: 'short',
    unit: 6,
    title: 'Fundamental Theorem of Calculus',
    prompt: `The graph of a function $f$ consists of a semicircle and two line segments, as shown. Let $g(x) = \\int_0^x f(t)\\,dt$.

The semicircle has center $(2, 0)$ and radius 2, lying below the $x$-axis (from $x = 0$ to $x = 4$). From $x = 4$ to $x = 6$, $f$ is a line segment from $(4, 0)$ to $(6, 3)$. From $x = 6$ to $x = 8$, $f$ is a line segment from $(6, 3)$ to $(8, 0)$.`,
    totalPoints: 9,
    timeRecommendation: '~15 minutes',
    calculatorAllowed: false,
    parts: [
      {
        label: '(a)',
        prompt: 'Find $g(4)$ and $g(8)$.',
        maxPoints: 3,
        rubric: [
          { points: 1, description: 'Recognizes g(4) = $\\int_{0}^{4}$ f(t) dt = −(area of semicircle below axis) = $-(1/2)\\pi (2^{2})$ = −2π', keywords: ['-2π', '−2π', 'semicircle', 'area below', '-½π(4)'] },
          { points: 1, description: 'Computes $\\int_{4}^{8}$ f(t) dt as area of triangle with base 4 and height 3: (1/2)(4)(3) = 6', keywords: ['triangle', '(1/2)(4)(3)', '= 6'] },
          { points: 1, description: 'Finds g(8) = g(4) + $\\int_{4}^{8}$ f(t) dt = −2π + 6', keywords: ['-2π + 6', '6 - 2π', 'g(8)'] },
        ],
        sampleAnswer: '$g(4) = \\int_0^4 f(t)\\,dt$. The semicircle from 0 to 4 lies below the $x$-axis with radius 2:\n$$g(4) = -\\frac{1}{2}\\pi(2)^2 = -2\\pi$$\n\n$g(8) = \\int_0^8 f(t)\\,dt = g(4) + \\int_4^8 f(t)\\,dt$\n\nThe region from 4 to 8 is a triangle with base 4 and height 3:\n$$\\int_4^8 f(t)\\,dt = \\frac{1}{2}(4)(3) = 6$$\n\n$$g(8) = -2\\pi + 6$$',
      },
      {
        label: '(b)',
        prompt: 'Find $g\'(3)$ and $g\'(6)$.',
        maxPoints: 3,
        rubric: [
          { points: 1, description: 'Applies FTC: g\'(x) = f(x)', keywords: ['g\'(x) = f(x)', 'FTC', 'Fundamental Theorem'] },
          { points: 1, description: 'Finds g\'(3) = f(3). The semicircle equation is y = $-\\sqrt{4-(x-2)^{2}}$, so f(3) = $-\\sqrt{4-1}$ = $-\\sqrt{3}$', keywords: ['f(3)', '-√3', '−√3', 'semicircle'] },
          { points: 1, description: 'Finds g\'(6) = f(6) = 3 from the graph', keywords: ['f(6) = 3', 'g\'(6) = 3'] },
        ],
        sampleAnswer: 'By the Fundamental Theorem of Calculus, $g\'(x) = f(x)$.\n\n$g\'(3) = f(3)$: The semicircle has equation $y = -\\sqrt{4 - (x-2)^2}$.\n$$f(3) = -\\sqrt{4 - (3-2)^2} = -\\sqrt{4-1} = -\\sqrt{3}$$\n\n$g\'(6) = f(6) = 3$ (from the graph, the line segment passes through $(6, 3)$).',
      },
      {
        label: '(c)',
        prompt: 'On what intervals is $g$ concave up? Justify your answer.',
        maxPoints: 3,
        rubric: [
          { points: 1, description: 'States that g is concave up when g\'\'(x) > 0, equivalently when f\'(x) > 0 (since g\' = f, g\'\' = f\')', keywords: ['g\'\'(x) > 0', 'f\'(x) > 0', 'g\'\' = f\''] },
          { points: 1, description: 'Identifies f increasing on (0, 2) (semicircle increasing from y = 0 down and back) — actually f increases on (0, 2) is wrong since semicircle is below. f is decreasing on (0,2) and increasing on (2,4). Plus f is increasing on (4,6).', keywords: ['f increasing', 'f\'(x) > 0'] },
          { points: 1, description: 'Correctly identifies intervals: (2, 4) and (4, 6) where f is increasing, so g is concave up on (2, 6)', keywords: ['(2, 4)', '(4, 6)', '(2, 6)', 'concave up'] },
        ],
        sampleAnswer: '$g$ is concave up when $g\'\'(x) > 0$. Since $g\'(x) = f(x)$, we have $g\'\'(x) = f\'(x)$.\n\nSo $g$ is concave up where $f$ is increasing.\n\nOn $(0, 2)$: the semicircle descends from $f(0) = 0$ to its minimum at $x = 2$ ($f$ decreasing, $f\' < 0$).\nOn $(2, 4)$: the semicircle rises from its minimum back to $f(4) = 0$ ($f$ increasing, $f\' > 0$).\nOn $(4, 6)$: the line rises from $(4, 0)$ to $(6, 3)$ ($f$ increasing, $f\' > 0$).\nOn $(6, 8)$: the line falls from $(6, 3)$ to $(8, 0)$ ($f$ decreasing, $f\' < 0$).\n\n$g$ is concave up on $(2, 6)$.',
      },
    ],
  },
  {
    id: 'calcab-short-5',
    type: 'short',
    unit: 4,
    title: 'L\'Hôpital\'s Rule & Improper Integrals',
    prompt: `Use L'Hôpital's Rule where appropriate to evaluate the following limits, and determine the convergence of a related improper integral.`,
    totalPoints: 9,
    timeRecommendation: '~15 minutes',
    calculatorAllowed: false,
    parts: [
      {
        label: '(a)',
        prompt: 'Evaluate $\\displaystyle\\lim_{x \\to 0} \\frac{e^{3x} - 1 - 3x}{x^2}$.',
        maxPoints: 3,
        rubric: [
          { points: 1, description: 'Verifies indeterminate form 0/0 at x = 0, then applies L\'Hôpital\'s Rule: differentiate to get $(3e^{3x} - 3)/(2x)$', keywords: ['0/0', 'indeterminate', '3e^{3x} - 3', '2x', 'L\'Hôpital'] },
          { points: 1, description: 'Recognizes still 0/0, applies L\'Hôpital again: $(9e^{3x})/2$', keywords: ['0/0 again', '9e^{3x}', '/2', 'second application'] },
          { points: 1, description: 'Evaluates the limit: $9e^{0}/2$ = 9/2', keywords: ['9/2', '4.5', '9e^0'] },
        ],
        sampleAnswer: 'As $x \\to 0$: numerator $\\to e^0 - 1 - 0 = 0$ and denominator $\\to 0$. This is $\\frac{0}{0}$, so apply L\'Hôpital\'s Rule:\n\n$$\\lim_{x \\to 0} \\frac{3e^{3x} - 3}{2x}$$\n\nStill $\\frac{0}{0}$ at $x = 0$, so apply L\'Hôpital\'s Rule again:\n\n$$\\lim_{x \\to 0} \\frac{9e^{3x}}{2} = \\frac{9e^0}{2} = \\frac{9}{2}$$',
      },
      {
        label: '(b)',
        prompt: 'Evaluate $\\displaystyle\\lim_{x \\to \\infty} \\frac{\\ln x}{\\sqrt{x}}$.',
        maxPoints: 3,
        rubric: [
          { points: 1, description: 'Identifies the form as ∞/∞, so L\'Hôpital\'s Rule applies', keywords: ['∞/∞', 'infinity over infinity', 'indeterminate'] },
          { points: 1, description: 'Differentiates: $(1/x)/(1/(2\\sqrt{x}))$ = $2\\sqrt{x}/x$ = $2/\\sqrt{x}$', keywords: ['1/x', '1/(2√x)', '2/√x', '2x^{-1/2}'] },
          { points: 1, description: 'Evaluates: lim x→∞ $2/\\sqrt{x}$ = 0', keywords: ['= 0', 'limit is 0', '2/√x → 0'] },
        ],
        sampleAnswer: 'As $x \\to \\infty$: $\\ln x \\to \\infty$ and $\\sqrt{x} \\to \\infty$. This is $\\frac{\\infty}{\\infty}$.\n\nApplying L\'Hôpital\'s Rule:\n\n$$\\lim_{x \\to \\infty} \\frac{\\ln x}{\\sqrt{x}} = \\lim_{x \\to \\infty} \\frac{1/x}{1/(2\\sqrt{x})} = \\lim_{x \\to \\infty} \\frac{2\\sqrt{x}}{x} = \\lim_{x \\to \\infty} \\frac{2}{\\sqrt{x}} = 0$$',
      },
      {
        label: '(c)',
        prompt: 'Determine whether $\\displaystyle\\int_1^{\\infty} \\frac{1}{x^2}\\,dx$ converges or diverges. If it converges, find its value.',
        maxPoints: 3,
        rubric: [
          { points: 1, description: 'Rewrites as a limit: lim b→∞ $\\int_{1}^{b}$ $x^{-2}$ dx', keywords: ['lim', 'b → ∞', 'b→∞', '∫₁ᵇ', 'x^{-2}'] },
          { points: 1, description: 'Antidifferentiates: ∫ $x^{-2}$ dx = $-x^{-1}$ = −1/x', keywords: ['-1/x', '-x^{-1}', 'antiderivative'] },
          { points: 1, description: 'Evaluates: lim b→∞ [−1/b + 1/1] = 0 + 1 = 1. The integral converges to 1.', keywords: ['converges', '= 1', '-1/b → 0'] },
        ],
        sampleAnswer: '$$\\int_1^{\\infty} \\frac{1}{x^2}\\,dx = \\lim_{b \\to \\infty} \\int_1^{b} x^{-2}\\,dx = \\lim_{b \\to \\infty} \\left[-\\frac{1}{x}\\right]_1^{b}$$\n\n$$= \\lim_{b \\to \\infty} \\left(-\\frac{1}{b} + \\frac{1}{1}\\right) = 0 + 1 = 1$$\n\nThe integral **converges** to $1$.',
      },
    ],
  },
]

// ─── Combined export ───────────────────────────────────────────────

export const apCalcABFRQs: CalcABFRQ[] = [...longFRQs, ...shortFRQs]

export function getCalcABFRQs(): CalcABFRQ[] {
  return apCalcABFRQs
}

export function getLongFRQs(): CalcABFRQ[] {
  return longFRQs
}

export function getShortFRQs(): CalcABFRQ[] {
  return shortFRQs
}

export function generateFullExamFRQs(pool: CalcABFRQ[] = apCalcABFRQs): {
  long: CalcABFRQ[]
  short: CalcABFRQ[]
  totalPoints: number
  totalTime: string
} {
  const shuffle = <T>(arr: T[]): T[] => {
    const copy = [...arr]
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[copy[i], copy[j]] = [copy[j], copy[i]]
    }
    return copy
  }

  const selectedLong = shuffle(pool.filter((f) => f.type === 'long')).slice(0, 2)
  const selectedShort = shuffle(pool.filter((f) => f.type === 'short')).slice(0, 4)

  const totalPoints =
    selectedLong.reduce((s, q) => s + q.totalPoints, 0) +
    selectedShort.reduce((s, q) => s + q.totalPoints, 0)

  return { long: selectedLong, short: selectedShort, totalPoints, totalTime: '90 min' }
}
