/**
 * AP Calculus AB FRQ Practice Questions
 * Based on College Board AP Calculus AB FRQ format:
 * - Part A: 2 FRQs, graphing calculator required (30 min)
 * - Part B: 4 FRQs, no calculator (60 min)
 * - Every FRQ is worth 9 points (~15 min each); 54 points in 90 minutes.
 * The `type` field ('long' | 'short') is a legacy grouping kept for the content store;
 * the page groups and times questions by `calculatorAllowed` (Part A vs Part B).
 * Topics span all 8 units. The ext group (2027 expansion) balances the bank to the
 * exam mix: 6 calculator-active and 10 no-calculator FRQs in total.
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

// ─── Legacy "long" group (9 points each, ~15 minutes) ──────────────

const longFRQs: CalcABFRQ[] = [
  {
    id: 'calcab-long-1',
    type: 'long',
    unit: 6,
    title: 'Rate of Change & Accumulation',
    prompt: `Water flows into a storage tank at a rate modeled by $R(t)$ liters per minute, where $t$ is measured in minutes. Selected values of $R(t)$ are given in the table below. The tank contains 50 liters of water at time $t = 0$.

$$\\begin{array}{c|c|c|c|c|c} t \\text{ (min)} & 0 & 3 & 7 & 10 & 12 \\\\ \\hline R(t) \\text{ (L/min)} & 8 & 6 & 4 & 3 & 1 \\end{array}$$

Water is simultaneously drained from the tank at a constant rate of 2 liters per minute.`,
    totalPoints: 9,
    timeRecommendation: '~15 minutes',
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
    timeRecommendation: '~15 minutes',
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
    timeRecommendation: '~15 minutes',
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
        sampleAnswer: 'At each point $(x, y)$, the slope is $\\frac{x+1}{y}$:\n\n$$\\begin{array}{c|cccc} & x = -1 & x = 0 & x = 1 & x = 2 \\\\ \\hline y = 2 & 0 & \\tfrac{1}{2} & 1 & \\tfrac{3}{2} \\\\ y = 1 & 0 & 1 & 2 & 3 \\\\ y = -1 & 0 & -1 & -2 & -3 \\end{array}$$\n\nAll segments along $x = -1$ are horizontal. Slopes above the $x$-axis are positive for $x > -1$ and slopes below are negative for $x > -1$.',
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

// ─── Legacy "short" group (9 points each, ~15 minutes) ─────────────

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

$$\\begin{array}{c|c|c|c|c|c} x & -2 & 0 & 2 & 4 & 6 \\\\ \\hline f(x) & 5 & 1 & -1 & 3 & 7 \\end{array}$$`,
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
    title: 'L\'Hôpital\'s Rule & Integration by Substitution',
    prompt: `Use L'Hôpital's Rule where appropriate to evaluate the following limits, then evaluate a definite integral using substitution.`,
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
        prompt: 'Evaluate $\\displaystyle\\int_0^1 \\frac{x}{x^2 + 1}\\,dx$.',
        maxPoints: 3,
        rubric: [
          { points: 1, description: 'Chooses the substitution u = $x^{2}$ + 1, du = 2x dx (so x dx = du/2), with new bounds u = 1 to u = 2', keywords: ['u = x^2 + 1', 'du = 2x', 'du/2', 'bounds', 'u = 1', 'u = 2'] },
          { points: 1, description: 'Antidifferentiates: (1/2)∫ du/u = (1/2)ln|u|', keywords: ['(1/2)ln', 'ln|u|', 'ln u'] },
          { points: 1, description: 'Evaluates: (1/2)(ln 2 − ln 1) = (1/2)ln 2', keywords: ['(1/2)ln 2', 'ln 2 / 2', '0.347'] },
        ],
        sampleAnswer: 'Let $u = x^2 + 1$, so $du = 2x\\,dx$ and $x\\,dx = \\tfrac{1}{2}\\,du$. When $x = 0$, $u = 1$; when $x = 1$, $u = 2$.\n\n$$\\int_0^1 \\frac{x}{x^2 + 1}\\,dx = \\frac{1}{2}\\int_1^{2} \\frac{du}{u} = \\frac{1}{2}\\Big[\\ln|u|\\Big]_1^{2} = \\frac{1}{2}(\\ln 2 - \\ln 1) = \\frac{\\ln 2}{2}$$',
      },
    ],
  },
]

// ─── 2027 bank expansion (9 points each, ~15 minutes) ──────────────
// Eight exam-mix FRQs: Part A families (rate in/out with a table, particle motion,
// area/volume) are calculator-active; the rest are no-calculator, matching Q3–Q6.
// Tables are KaTeX arrays because this page renders Markdown without GFM tables.

const extFRQs: CalcABFRQ[] = [
  {
    id: 'calcab-ext-1',
    type: 'long',
    unit: 8,
    title: 'Rates In and Out: Ride Queue',
    prompt: `A ride at an amusement park opens at 10:00 a.m. ($t = 0$) with 40 people already waiting in line. For $0 \\le t \\le 60$ minutes, people join the line at a rate of $J(t)$ people per minute, where $J$ is a differentiable function. Selected values of $J(t)$ are given in the table.

$$\\begin{array}{c|c|c|c|c|c|c} t \\text{ (minutes)} & 0 & 10 & 25 & 40 & 50 & 60 \\\\ \\hline J(t) \\text{ (people per minute)} & 18 & 24 & 30 & 26 & 21 & 14 \\end{array}$$

People leave the line to board the ride at a rate modeled by $L(t) = 15 + 10\\sin\\left(\\dfrac{\\pi t}{60}\\right)$ people per minute for $0 \\le t \\le 60$.`,
    totalPoints: 9,
    timeRecommendation: '~15 minutes',
    calculatorAllowed: true,
    parts: [
      {
        label: '(a)',
        prompt: `Approximate $\\displaystyle\\int_0^{60} J(t)\\,dt$ with a trapezoidal sum over the five subintervals of the table. Then explain, with units, what $\\displaystyle\\int_0^{60} J(t)\\,dt$ tells you about the ride line.`,
        maxPoints: 2,
        rubric: [
          { points: 1, description: `Trapezoidal sum: $\\tfrac{18+24}{2}(10) + \\tfrac{24+30}{2}(15) + \\tfrac{30+26}{2}(15) + \\tfrac{26+21}{2}(10) + \\tfrac{21+14}{2}(10) = 1445$`, keywords: ['1445', '1,445'] },
          { points: 1, description: `Meaning with units: the total number of people who join the line from $t = 0$ to $t = 60$ minutes (about 1445 people)`, keywords: ['people who join', 'people joined', 'number of people', 'total people', 'join the line'] },
        ],
        sampleAnswer: `$$\\int_0^{60} J(t)\\,dt \\approx \\frac{18+24}{2}(10) + \\frac{24+30}{2}(15) + \\frac{30+26}{2}(15) + \\frac{26+21}{2}(10) + \\frac{21+14}{2}(10)$$
$$= 210 + 405 + 420 + 235 + 175 = 1445$$

$\\int_0^{60} J(t)\\,dt$ is the total number of people who join the line during the first 60 minutes after the ride opens, about 1445 people.`,
      },
      {
        label: '(b)',
        prompt: `Is the number of people in line increasing or decreasing at time $t = 40$? Give a reason for your answer.`,
        maxPoints: 2,
        rubric: [
          { points: 1, description: `Considers $J(40) - L(40) = 26 - \\left(15 + 10\\sin\\tfrac{2\\pi}{3}\\right) \\approx 26 - 23.660 = 2.340$`, keywords: ['2.34', '23.66', 'j(40) - l(40)', 'J(40) - L(40)', '26 - 23'] },
          { points: 1, description: `Increasing, because $J(40) - L(40) > 0$ (people join faster than they leave)`, keywords: ['increasing'] },
        ],
        sampleAnswer: `The number of people in line changes at the rate $J(t) - L(t)$.

$$J(40) - L(40) = 26 - \\left(15 + 10\\sin\\frac{2\\pi}{3}\\right) \\approx 26 - 23.660 = 2.340$$

Since $J(40) - L(40) > 0$, the number of people in line is **increasing** at $t = 40$.`,
      },
      {
        label: '(c)',
        prompt: `Use your answer from part (a) and the model $L$ to approximate the number of people in line at time $t = 60$.`,
        maxPoints: 3,
        rubric: [
          { points: 1, description: `Integral of the leaving rate: $\\int_0^{60} L(t)\\,dt \\approx 1281.972$ (exactly $900 + \\tfrac{1200}{\\pi}$)`, keywords: ['1281.97', '1281.972', '1200/π', '1200/pi', '∫l', 'integral of l'] },
          { points: 1, description: `Expression: $40 + \\int_0^{60} J(t)\\,dt - \\int_0^{60} L(t)\\,dt$, with the 40 people at $t = 0$`, keywords: ['40 +', '40 + 1445', '1445 - 1281'] },
          { points: 1, description: `Answer: about 203 people ($203.028$)`, keywords: ['203'] },
        ],
        sampleAnswer: `$$\\int_0^{60} L(t)\\,dt \\approx 1281.972$$

Number of people in line at $t = 60$:
$$40 + \\int_0^{60} J(t)\\,dt - \\int_0^{60} L(t)\\,dt \\approx 40 + 1445 - 1281.972 = 203.028$$

There are about 203 people in line at $t = 60$.`,
      },
      {
        label: '(d)',
        prompt: `Must there be a time $t$, for $50 < t < 60$, at which $J(t) = L(t)$? Justify your answer.`,
        maxPoints: 2,
        rubric: [
          { points: 1, description: `Evaluates $J - L$ at both ends: $J(50) - L(50) = 21 - 20 = 1 > 0$ and $J(60) - L(60) = 14 - 15 = -1 < 0$`, keywords: ['21 - 20', '14 - 15', 'l(50) = 20', 'l(60) = 15', 'j(50) - l(50)', 'j(60) - l(60)'] },
          { points: 1, description: `Yes: $J - L$ is continuous ($J$ is differentiable, so continuous, and $L$ is continuous), so by the Intermediate Value Theorem $J(t) - L(t) = 0$ for some $t$ in $(50, 60)$`, keywords: ['intermediate value', 'ivt'] },
        ],
        sampleAnswer: `Let $D(t) = J(t) - L(t)$. Because $J$ is differentiable, it is continuous, and $L$ is continuous, so $D$ is continuous on $[50, 60]$.

$D(50) = 21 - \\left(15 + 10\\sin\\frac{5\\pi}{6}\\right) = 21 - 20 = 1 > 0$ and $D(60) = 14 - (15 + 10\\sin\\pi) = -1 < 0$.

**Yes.** By the Intermediate Value Theorem, $D(t) = 0$, that is, $J(t) = L(t)$, for some $t$ with $50 < t < 60$.`,
      },
    ],
  },
  {
    id: 'calcab-ext-2',
    type: 'long',
    unit: 8,
    title: 'Particle Motion: Two Particles',
    prompt: `Particle $P$ moves along the $x$-axis with velocity $v_P(t) = (t - 1)\\cos\\left(\\dfrac{t}{2}\\right)$ meters per second for $0 \\le t \\le 5$ seconds. At time $t = 0$, particle $P$ is at $x = 2$.

A second particle, $Q$, moves along the same axis. Its position at time $t$ is $x_Q(t) = 3 - 4e^{-t/2}$ meters for $0 \\le t \\le 5$.`,
    totalPoints: 9,
    timeRecommendation: '~15 minutes',
    calculatorAllowed: true,
    parts: [
      {
        label: '(a)',
        prompt: `Is the speed of particle $P$ increasing or decreasing at time $t = 2$? Give a reason for your answer.`,
        maxPoints: 2,
        rubric: [
          { points: 1, description: `Acceleration: $a_P(2) = v_P'(2) \\approx 0.120$ (with $v_P(2) \\approx 0.540$)`, keywords: ['0.119', '0.120', '0.12', "v_p'(2)", "v'(2)", 'a(2)'] },
          { points: 1, description: `Increasing, because $v_P(2)$ and $a_P(2)$ are both positive (same sign)`, keywords: ['increasing'] },
        ],
        sampleAnswer: `$v_P(2) = (1)\\cos(1) \\approx 0.540$ and $a_P(2) = v_P'(2) \\approx 0.120$ (calculator).

The speed of particle $P$ is **increasing** at $t = 2$ because $v_P(2)$ and $a_P(2)$ have the same sign.`,
      },
      {
        label: '(b)',
        prompt: `Find the position of particle $P$ at time $t = 4$.`,
        maxPoints: 2,
        rubric: [
          { points: 1, description: `Uses the initial position with a definite integral: $x_P(4) = 2 + \\int_0^4 v_P(t)\\,dt$`, keywords: ['2 + ∫_0^4', '2 + integral from 0 to 4', '2 + int_0^4', '2 + ∫₀⁴', '2 + \\int_0^4', 'x(0) +'] },
          { points: 1, description: `Answer: $x_P(4) \\approx 1.791$`, keywords: ['1.791', '1.79'] },
        ],
        sampleAnswer: `$$x_P(4) = 2 + \\int_0^4 (t - 1)\\cos\\left(\\frac{t}{2}\\right)dt \\approx 2 + (-0.209) = 1.791$$

Particle $P$ is at $x \\approx 1.791$ meters at $t = 4$.`,
      },
      {
        label: '(c)',
        prompt: `Find the total distance traveled by particle $P$ over the time interval $0 \\le t \\le 5$.`,
        maxPoints: 2,
        rubric: [
          { points: 1, description: `Integral of speed: $\\int_0^5 |v_P(t)|\\,dt$ (or the sum of the integrals over $[0,1]$, $[1,\\pi]$, $[\\pi,5]$ with signs fixed)`, keywords: ['|v', '(t - 1)cos(t/2)|', 'absolute value', 'abs('] },
          { points: 1, description: `Answer: approximately $3.963$ meters (3.962 truncated is also accepted)`, keywords: ['3.962', '3.963', '3.96'] },
        ],
        sampleAnswer: `$$\\text{Distance} = \\int_0^5 \\left|(t - 1)\\cos\\left(\\frac{t}{2}\\right)\\right|dt \\approx 3.963 \\text{ meters}$$

($v_P$ changes sign at $t = 1$ and $t = \\pi$, so the absolute value is needed.)`,
      },
      {
        label: '(d)',
        prompt: `At time $t = 4$, are particles $P$ and $Q$ moving toward each other or away from each other? Explain your reasoning.`,
        maxPoints: 3,
        rubric: [
          { points: 1, description: `Positions: $x_P(4) \\approx 1.791$ and $x_Q(4) = 3 - 4e^{-2} \\approx 2.459$, so $P$ is to the left of $Q$`, keywords: ['2.459', '2.458', '3 - 4e^{-2}', '3 - 4e^(-2)', 'left of q'] },
          { points: 1, description: `Velocities: $v_P(4) = 3\\cos 2 \\approx -1.248 < 0$ and $v_Q(4) = x_Q'(4) = 2e^{-2} \\approx 0.271 > 0$`, keywords: ['-1.248', '0.271', '0.270', '2e^{-2}', '2e^(-2)'] },
          { points: 1, description: `Conclusion: moving away from each other ($P$, on the left, moves left; $Q$, on the right, moves right)`, keywords: ['away'] },
        ],
        sampleAnswer: `Positions at $t = 4$: $x_P(4) \\approx 1.791$ (part (b)) and $x_Q(4) = 3 - 4e^{-2} \\approx 2.459$, so $P$ is to the left of $Q$.

Velocities at $t = 4$: $v_P(4) = 3\\cos 2 \\approx -1.248$ (moving left) and $v_Q(4) = 2e^{-2} \\approx 0.271$ (moving right).

Particle $P$ is on the left and moving left while particle $Q$ is on the right and moving right, so the particles are moving **away from each other**.`,
      },
    ],
  },
  {
    id: 'calcab-ext-3',
    type: 'long',
    unit: 8,
    title: 'Area, Volume & Cross Sections',
    prompt: `Let $f(x) = 4\\sin\\left(\\dfrac{x}{2}\\right)$ and $g(x) = x^2 - 3x$. The graphs of $f$ and $g$ intersect at $x = 0$ and at $x = k$, where $k > 0$. Let $R$ be the region enclosed by the graphs of $f$ and $g$ for $0 \\le x \\le k$.`,
    totalPoints: 9,
    timeRecommendation: '~15 minutes',
    calculatorAllowed: true,
    parts: [
      {
        label: '(a)',
        prompt: `Find the area of $R$.`,
        maxPoints: 2,
        rubric: [
          { points: 1, description: `Integral: $\\int_0^k \\left(f(x) - g(x)\\right)dx$ with $k \\approx 3.937$ from the calculator ($k$ may appear as a stored value)`, keywords: ['3.937', '3.936', 'f(x) - g(x)', '4sin(x/2) - (x^2 - 3x)', '4sin(x/2) - x^2 + 3x'] },
          { points: 1, description: `Answer: area $\\approx 14.007$`, keywords: ['14.007', '14.00'] },
        ],
        sampleAnswer: `Solving $4\\sin(x/2) = x^2 - 3x$ with a calculator gives $k \\approx 3.937$. On $[0, k]$, $f(x) \\ge g(x)$.

$$\\text{Area} = \\int_0^{k} \\left(4\\sin\\frac{x}{2} - (x^2 - 3x)\\right)dx \\approx 14.007$$`,
      },
      {
        label: '(b)',
        prompt: `Region $R$ is rotated about the line $y = -3$. What is the volume of the resulting solid?`,
        maxPoints: 3,
        rubric: [
          { points: 1, description: `Constant $\\pi$ and limits $0$ to $k$`, keywords: ['pi*integral from 0 to', 'π∫_0', 'pi ∫_0', 'π*integral', 'pi int_0', '\\pi\\int_0', 'π ∫ from 0'] },
          { points: 1, description: `Washer integrand: $(f(x) + 3)^2 - (g(x) + 3)^2$ (both graphs lie above $y = -3$ since $g \\ge -2.25$)`, keywords: ['f(x) + 3', 'g(x) + 3', '(f + 3)', '(g + 3)', '+ 3)^2', '+3)^2'] },
          { points: 1, description: `Answer: volume $\\approx 343.640$`, keywords: ['343.64', '343.639'] },
        ],
        sampleAnswer: `The minimum of $g$ is $g(1.5) = -2.25 > -3$, so $R$ lies above $y = -3$. Outer radius $f(x) + 3$, inner radius $g(x) + 3$:

$$V = \\pi\\int_0^{k} \\left[(f(x) + 3)^2 - (g(x) + 3)^2\\right]dx \\approx 343.640$$`,
      },
      {
        label: '(c)',
        prompt: `A solid has $R$ as its base, and every slice of it taken perpendicular to the $x$-axis is an equilateral triangle. What is the volume of this solid?`,
        maxPoints: 2,
        rubric: [
          { points: 1, description: `Integral: $\\dfrac{\\sqrt{3}}{4}\\int_0^k \\left(f(x) - g(x)\\right)^2 dx$`, keywords: ['√3/4', 'sqrt(3)/4', 'sqrt3/4', '\\sqrt{3}'] },
          { points: 1, description: `Answer: volume $\\approx 25.980$ (25.979 truncated is also accepted)`, keywords: ['25.979', '25.980', '25.98'] },
        ],
        sampleAnswer: `An equilateral triangle with side $s = f(x) - g(x)$ has area $\\frac{\\sqrt{3}}{4}s^2$.

$$V = \\frac{\\sqrt{3}}{4}\\int_0^{k} \\left(f(x) - g(x)\\right)^2 dx \\approx 25.980$$`,
      },
      {
        label: '(d)',
        prompt: `For $0 \\le x \\le k$, at what value of $x$ is the vertical distance between the graphs of $f$ and $g$ greatest? Justify your answer.`,
        maxPoints: 2,
        rubric: [
          { points: 1, description: `Sets $d'(x) = 0$ for $d(x) = f(x) - g(x)$: $2\\cos(x/2) - 2x + 3 = 0$ at $x \\approx 2.028$`, keywords: ['2.028', '2cos(x/2) - 2x + 3', "d'(x) = 0", "f'(x) = g'(x)"] },
          { points: 1, description: `Justification: $d(0) = 0$, $d(k) = 0$, $d(2.028) \\approx 5.367$, so the greatest distance is at $x \\approx 2.028$ (or: $d'$ changes from positive to negative at its only zero)`, keywords: ['5.367', '5.36', 'positive to negative', 'candidates', 'endpoints'] },
        ],
        sampleAnswer: `Let $d(x) = f(x) - g(x) = 4\\sin\\frac{x}{2} - x^2 + 3x$, the vertical distance on $[0, k]$.

$d'(x) = 2\\cos\\frac{x}{2} - 2x + 3 = 0$ at $x \\approx 2.028$ (calculator).

Candidates: $d(0) = 0$, $d(2.028) \\approx 5.367$, $d(k) = 0$. The vertical distance is greatest at $x \\approx 2.028$.`,
      },
    ],
  },
  {
    id: 'calcab-ext-4',
    type: 'long',
    unit: 5,
    title: 'Analyzing the Graph of f′',
    prompt: `The function $f$ is differentiable on the closed interval $0 \\le x \\le 8$, and $f(4) = 5$. The graph of $f'$, the derivative of $f$, consists of four line segments joining, in order, the points $(0, -2)$, $(2, 2)$, $(4, 0)$, $(6, 2)$ and $(8, -2)$.

The graph of $f'$ crosses the $x$-axis at $x = 1$ and at $x = 7$, and it touches the $x$-axis (without crossing) at $x = 4$.`,
    totalPoints: 9,
    timeRecommendation: '~15 minutes',
    calculatorAllowed: false,
    parts: [
      {
        label: '(a)',
        prompt: `On the open interval $0 < x < 8$, find the $x$-coordinate of each point at which $f$ has a relative minimum or a relative maximum. Classify each one and justify your answers. Explain why $f$ does not have a relative extremum at $x = 4$.`,
        maxPoints: 3,
        rubric: [
          { points: 1, description: `Relative minimum at $x = 1$, because $f'$ changes from negative to positive there`, keywords: ['minimum at x = 1', 'min at x = 1', 'relative minimum at 1', 'minimum at 1', 'min at 1', 'x = 1 is a relative minimum', 'x = 1 is a minimum', 'minimum at x=1'] },
          { points: 1, description: `Relative maximum at $x = 7$, because $f'$ changes from positive to negative there`, keywords: ['maximum at x = 7', 'max at x = 7', 'relative maximum at 7', 'maximum at 7', 'max at 7', 'x = 7 is a relative maximum', 'x = 7 is a maximum', 'maximum at x=7'] },
          { points: 1, description: `No extremum at $x = 4$: $f'(4) = 0$, but $f' \\ge 0$ on both sides, so $f'$ does not change sign`, keywords: ['does not change sign', "doesn't change sign", 'no sign change', 'positive on both sides', 'does not change'] },
        ],
        sampleAnswer: `$f'(x) = 0$ at $x = 1$, $x = 4$ and $x = 7$.

- At $x = 1$, $f'$ changes from negative to positive, so $f$ has a **relative minimum** at $x = 1$.
- At $x = 7$, $f'$ changes from positive to negative, so $f$ has a **relative maximum** at $x = 7$.
- At $x = 4$, $f'(4) = 0$, but $f'(x) > 0$ on both $(1, 4)$ and $(4, 7)$. Because $f'$ does not change sign at $x = 4$, $f$ has no relative extremum there.`,
      },
      {
        label: '(b)',
        prompt: `Find the $x$-coordinate of each point of inflection of the graph of $f$ on the open interval $0 < x < 8$. Justify your answer.`,
        maxPoints: 2,
        rubric: [
          { points: 1, description: `Answer: $x = 2$, $x = 4$ and $x = 6$`, keywords: ['2, 4', '2, 4, and 6', '2, 4 and 6', 'x = 2, 4, 6', '2,4,6', 'x = 2, x = 4', '2, x = 4'] },
          { points: 1, description: `Justification: $f'$ changes from increasing to decreasing (or decreasing to increasing) at each, so $f''$ changes sign`, keywords: ['increasing to decreasing', 'decreasing to increasing', "f'' changes sign", 'changes sign', 'concavity changes'] },
        ],
        sampleAnswer: `$f'$ is increasing on $(0, 2)$, decreasing on $(2, 4)$, increasing on $(4, 6)$ and decreasing on $(6, 8)$.

So $f''$ changes sign at $x = 2$, $x = 4$ and $x = 6$, and the graph of $f$ has points of inflection at **$x = 2$, $x = 4$ and $x = 6$**.`,
      },
      {
        label: '(c)',
        prompt: `What is the absolute maximum value of $f$ for $0 \\le x \\le 8$? Justify your answer.`,
        maxPoints: 2,
        rubric: [
          { points: 1, description: `Uses $f(4) = 5$ and areas: $f(7) = 5 + \\int_4^7 f'(x)\\,dx = 8$ and $f(0) = 5 - \\int_0^4 f'(x)\\,dx = 3$ (and $f(8) = 7$, or a note that $f$ decreases on $(7, 8)$)`, keywords: ['f(7) = 8', 'f(0) = 3', 'f(8) = 7', 'f(7)=8', 'f(0)=3', 'f(8)=7', '5 - 2', '5 + 3', '5 + (2 + 1)'] },
          { points: 1, description: `Answer with justification: the absolute maximum value is $8$ (at $x = 7$), by comparing the endpoints with the only critical point where $f'$ changes from positive to negative`, keywords: ['maximum value is 8', 'absolute maximum is 8', 'max is 8', 'maximum of 8', 'max value 8', 'value of 8', 'is 8'] },
        ],
        sampleAnswer: `The only critical point where $f$ can have an absolute maximum in the interior is $x = 7$ ($x = 1$ is a minimum and $x = 4$ is not an extremum). Using $f(4) = 5$ and the areas under the graph of $f'$:

- $f(0) = 5 - \\int_0^4 f'(x)\\,dx = 5 - (-1 + 1 + 2) = 3$
- $f(7) = 5 + \\int_4^7 f'(x)\\,dx = 5 + (2 + 1) = 8$
- $f(8) = f(7) + \\int_7^8 f'(x)\\,dx = 8 - 1 = 7$

The absolute maximum value of $f$ on $[0, 8]$ is **8**, at $x = 7$.`,
      },
      {
        label: '(d)',
        prompt: `Let $g$ be the function defined by $g(x) = f\\left(\\dfrac{x^2}{2}\\right)$. Write an equation for the line tangent to the graph of $g$ at $x = 2$.`,
        maxPoints: 2,
        rubric: [
          { points: 1, description: `Chain rule: $g'(x) = x\\,f'\\left(\\tfrac{x^2}{2}\\right)$, so $g'(2) = 2f'(2) = 4$`, keywords: ["g'(2) = 4", "g'(2)=4", 'slope 4', 'slope is 4', "2f'(2)", "2·f'(2)", "2 f'(2)", "f'(2)·2", "f'(2)(2)", "f'(2)*2", '2·2', '2(2)'] },
          { points: 1, description: `Tangent line: $g(2) = f(2) = 3$, so $y = 3 + 4(x - 2)$`, keywords: ['y = 3 + 4(x - 2)', 'y - 3 = 4(x - 2)', 'y = 4x - 5', '3 + 4(x-2)', 'y-3=4(x-2)'] },
        ],
        sampleAnswer: `$g(2) = f(2) = f(4) - \\int_2^4 f'(x)\\,dx = 5 - 2 = 3$.

By the chain rule, $g'(x) = f'\\left(\\frac{x^2}{2}\\right)\\cdot x$, so $g'(2) = f'(2)\\cdot 2 = 2 \\cdot 2 = 4$.

Tangent line: $y = 3 + 4(x - 2)$.`,
      },
    ],
  },
  {
    id: 'calcab-ext-5',
    type: 'long',
    unit: 7,
    title: 'Differential Equation: Slope Field, Tangent Line & Separation',
    prompt: `Consider the differential equation $\\dfrac{dy}{dx} = x\\cos^2 y$. Let $y = f(x)$ be the particular solution to the differential equation with the initial condition $f(2) = \\dfrac{\\pi}{4}$.`,
    totalPoints: 9,
    timeRecommendation: '~15 minutes',
    calculatorAllowed: false,
    parts: [
      {
        label: '(a)',
        prompt: `Find $\\dfrac{dy}{dx}$ at each of the six points $(-1, 0)$, $(0, 0)$, $(1, 0)$, $\\left(-1, \\tfrac{\\pi}{4}\\right)$, $\\left(0, \\tfrac{\\pi}{4}\\right)$ and $\\left(1, \\tfrac{\\pi}{4}\\right)$, and describe the slope-field segments you would draw there.`,
        maxPoints: 2,
        rubric: [
          { points: 1, description: `Slopes: $-1, 0, 1$ at $y = 0$ and $-\\tfrac{1}{2}, 0, \\tfrac{1}{2}$ at $y = \\tfrac{\\pi}{4}$`, keywords: ['-1/2', '1/2', '-0.5', '0.5'] },
          { points: 1, description: `Segments: horizontal at $x = 0$; negative slopes for $x = -1$, positive for $x = 1$; less steep at $y = \\tfrac{\\pi}{4}$ than at $y = 0$`, keywords: ['horizontal', 'less steep', 'flatter', 'shallower', 'gentler', 'half as steep'] },
        ],
        sampleAnswer: `$\\cos^2 0 = 1$ and $\\cos^2\\frac{\\pi}{4} = \\frac{1}{2}$, so

- at $(-1, 0), (0, 0), (1, 0)$: slopes $-1, 0, 1$;
- at $\\left(-1, \\frac{\\pi}{4}\\right), \\left(0, \\frac{\\pi}{4}\\right), \\left(1, \\frac{\\pi}{4}\\right)$: slopes $-\\frac{1}{2}, 0, \\frac{1}{2}$.

The segments at $x = 0$ are horizontal; at $x = -1$ they slant down and at $x = 1$ they slant up, and the segments in the row $y = \\frac{\\pi}{4}$ are flatter than those in the row $y = 0$.`,
      },
      {
        label: '(b)',
        prompt: `Use the line tangent to the graph of $f$ at the point $\\left(2, \\tfrac{\\pi}{4}\\right)$ to estimate $f(2.1)$. Give the equation of that line.`,
        maxPoints: 2,
        rubric: [
          { points: 1, description: `Slope $\\left.\\tfrac{dy}{dx}\\right|_{(2, \\pi/4)} = 2\\cos^2\\tfrac{\\pi}{4} = 1$ and tangent line $y = \\tfrac{\\pi}{4} + (x - 2)$`, keywords: ['y = π/4 + (x - 2)', 'y = pi/4 + (x - 2)', 'y - π/4 = x - 2', 'y - pi/4 = x - 2', 'y=π/4+(x-2)', 'y=pi/4+(x-2)', 'y = x - 2 + π/4', 'y = x - 2 + pi/4', 'slope 1', 'slope is 1', 'slope = 1', 'slope of 1'] },
          { points: 1, description: `Approximation: $f(2.1) \\approx \\tfrac{\\pi}{4} + 0.1$`, keywords: ['π/4 + 0.1', 'pi/4 + 0.1', 'π/4+0.1', 'pi/4+0.1', '0.885', '0.1 + π/4', '0.1 + pi/4'] },
        ],
        sampleAnswer: `At $(2, \\frac{\\pi}{4})$: $\\frac{dy}{dx} = 2\\cos^2\\frac{\\pi}{4} = 2 \\cdot \\frac{1}{2} = 1$.

Tangent line: $y = \\frac{\\pi}{4} + (x - 2)$.

$$f(2.1) \\approx \\frac{\\pi}{4} + 0.1$$`,
      },
      {
        label: '(c)',
        prompt: `Use separation of variables to find $y = f(x)$, the solution that satisfies $f(2) = \\dfrac{\\pi}{4}$.`,
        maxPoints: 5,
        rubric: [
          { points: 1, description: `Separates variables: $\\sec^2 y\\,dy = x\\,dx$ (a response with no separation of variables earns none of the 5 points)`, keywords: ['sec^2', 'sec²', '1/cos^2', '1/cos²', 'dy/cos'] },
          { points: 1, description: `Antiderivative of the $y$ side: $\\tan y$`, keywords: ['tan y', 'tan(y)'] },
          { points: 1, description: `Antiderivative of the $x$ side: $\\tfrac{x^2}{2}$`, keywords: ['x^2/2', 'x²/2', '(1/2)x^2', '½x²', 'x^2 / 2', '\\frac{x^2}{2}'] },
          { points: 1, description: `Uses the initial condition: $\\tan\\tfrac{\\pi}{4} = 2 + C$, so $C = -1$`, keywords: ['c = -1', 'C = -1', '1 = 2 + c'] },
          { points: 1, description: `Solves for $y$: $y = \\arctan\\left(\\tfrac{x^2}{2} - 1\\right)$`, keywords: ['arctan', 'tan^-1', 'tan⁻¹', 'tan^{-1}'] },
        ],
        sampleAnswer: `Separate variables: $\\dfrac{dy}{\\cos^2 y} = x\\,dx$, that is, $\\sec^2 y\\,dy = x\\,dx$.

Integrate: $\\tan y = \\dfrac{x^2}{2} + C$.

Initial condition: $\\tan\\dfrac{\\pi}{4} = \\dfrac{4}{2} + C \\implies 1 = 2 + C \\implies C = -1$.

$$y = f(x) = \\arctan\\left(\\frac{x^2}{2} - 1\\right)$$

(The arctangent branch is the right one because $f(2) = \\frac{\\pi}{4}$ lies in $\\left(-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right)$.)`,
      },
    ],
  },
  {
    id: 'calcab-ext-6',
    type: 'long',
    unit: 6,
    title: 'Table of Values: Cooling Bread',
    prompt: `A loaf of bread is taken out of an oven at time $t = 0$. The internal temperature of the bread, in degrees Celsius, is modeled by a differentiable, decreasing function $B$ of time $t$, measured in minutes. Selected values of $B(t)$ are given in the table.

$$\\begin{array}{c|c|c|c|c|c|c|c} t \\text{ (minutes)} & 0 & 2 & 4 & 6 & 8 & 10 & 12 \\\\ \\hline B(t) \\text{ (}^\\circ\\text{C)} & 180 & 150 & 128 & 112 & 100 & 91 & 85 \\end{array}$$`,
    totalPoints: 9,
    timeRecommendation: '~15 minutes',
    calculatorAllowed: false,
    parts: [
      {
        label: '(a)',
        prompt: `Use the data in the table to estimate $B'(5)$. Using correct units, interpret the meaning of $B'(5)$ in the context of the problem.`,
        maxPoints: 2,
        rubric: [
          { points: 1, description: `Estimate: $B'(5) \\approx \\dfrac{B(6) - B(4)}{6 - 4} = \\dfrac{112 - 128}{2} = -8$`, keywords: ['-8', '(112 - 128)/2', '-16/2'] },
          { points: 1, description: `Interpretation with units: at $t = 5$ minutes the temperature of the bread is decreasing at about 8 degrees Celsius per minute`, keywords: ['per minute', '°c/min', 'degrees celsius per minute', 'degrees per minute'] },
        ],
        sampleAnswer: `$$B'(5) \\approx \\frac{B(6) - B(4)}{6 - 4} = \\frac{112 - 128}{2} = -8$$

At time $t = 5$ minutes, the temperature of the bread is decreasing at a rate of about 8 degrees Celsius per minute.`,
      },
      {
        label: '(b)',
        prompt: `Use a midpoint sum with three subintervals of equal length indicated by the data in the table to approximate $\\dfrac{1}{12}\\displaystyle\\int_0^{12} B(t)\\,dt$. Using correct units, explain the meaning of $\\dfrac{1}{12}\\displaystyle\\int_0^{12} B(t)\\,dt$ in the context of the problem.`,
        maxPoints: 3,
        rubric: [
          { points: 1, description: `Midpoint sum on $[0,4]$, $[4,8]$, $[8,12]$: $4\\left(B(2) + B(6) + B(10)\\right) = 4(150 + 112 + 91) = 1412$`, keywords: ['1412', '4(150 + 112 + 91)', '150 + 112 + 91', '353'] },
          { points: 1, description: `Average: $\\tfrac{1}{12}(1412) = \\tfrac{353}{3} \\approx 117.667$`, keywords: ['117.66', '117.67', '353/3', '1412/12'] },
          { points: 1, description: `Meaning with units: the average temperature of the bread, in degrees Celsius, over the first 12 minutes`, keywords: ['average temperature', 'mean temperature', 'average internal temperature', 'average temp', 'average value of the temperature'] },
        ],
        sampleAnswer: `The three subintervals $[0, 4]$, $[4, 8]$, $[8, 12]$ have midpoints $2$, $6$ and $10$:

$$\\int_0^{12} B(t)\\,dt \\approx 4\\left(B(2) + B(6) + B(10)\\right) = 4(150 + 112 + 91) = 1412$$

$$\\frac{1}{12}\\int_0^{12} B(t)\\,dt \\approx \\frac{1412}{12} = \\frac{353}{3} \\approx 117.667$$

$\\frac{1}{12}\\int_0^{12} B(t)\\,dt$ is the average temperature of the bread, in degrees Celsius, over the time interval $0 \\le t \\le 12$ minutes.`,
      },
      {
        label: '(c)',
        prompt: `Evaluate $\\displaystyle\\int_0^{12} B'(t)\\,dt$. Using correct units, explain the meaning of this integral in the context of the problem.`,
        maxPoints: 2,
        rubric: [
          { points: 1, description: `Fundamental Theorem of Calculus: $\\int_0^{12} B'(t)\\,dt = B(12) - B(0) = 85 - 180 = -95$`, keywords: ['-95', '85 - 180'] },
          { points: 1, description: `Meaning with units: the temperature of the bread decreased by 95 degrees Celsius over the 12 minutes (the net change in temperature)`, keywords: ['change in temperature', 'decreased by 95', 'dropped by 95', 'drops 95', 'net change', 'decrease of 95'] },
        ],
        sampleAnswer: `$$\\int_0^{12} B'(t)\\,dt = B(12) - B(0) = 85 - 180 = -95$$

The temperature of the bread decreased by 95 degrees Celsius during the first 12 minutes after it left the oven.`,
      },
      {
        label: '(d)',
        prompt: `Must there be a time $t$, for $4 < t < 8$, at which $B'(t) = -7$? Justify your answer.`,
        maxPoints: 2,
        rubric: [
          { points: 1, description: `Average rate of change on $[4, 8]$: $\\dfrac{B(8) - B(4)}{8 - 4} = \\dfrac{100 - 128}{4} = -7$`, keywords: ['(100 - 128)/4', '-28/4', '(b(8) - b(4))/4', '(b(8) - b(4))/(8 - 4)', '100 - 128'] },
          { points: 1, description: `Yes, by the Mean Value Theorem, because $B$ is differentiable (and therefore continuous) on $[4, 8]$`, keywords: ['mean value theorem', 'mvt'] },
        ],
        sampleAnswer: `$B$ is differentiable, so it is continuous on $[4, 8]$ and differentiable on $(4, 8)$.

$$\\frac{B(8) - B(4)}{8 - 4} = \\frac{100 - 128}{4} = -7$$

**Yes.** By the Mean Value Theorem, there is a time $t$ with $4 < t < 8$ at which $B'(t) = -7$.`,
      },
    ],
  },
  {
    id: 'calcab-ext-7',
    type: 'long',
    unit: 4,
    title: 'Related Rates: Rising Balloon',
    prompt: `A hot-air balloon rises straight up from a point $P$ on level ground at a constant rate of 5 meters per second. An observer stands on the ground 300 meters from $P$ and watches the balloon. Let $h$ be the height of the balloon, in meters, and let $\\theta$ be the angle of elevation, in radians, from the observer to the balloon.`,
    totalPoints: 9,
    timeRecommendation: '~15 minutes',
    calculatorAllowed: false,
    parts: [
      {
        label: '(a)',
        prompt: `Find the rate at which $\\theta$ is changing at the instant the balloon is 400 meters high. Indicate units of measure.`,
        maxPoints: 3,
        rubric: [
          { points: 1, description: `Relates the variables: $\\tan\\theta = \\dfrac{h}{300}$ (or $\\theta = \\arctan\\dfrac{h}{300}$, or an equivalent sine/cosine relation)`, keywords: ['tan θ = h/300', 'tanθ = h/300', 'tan(θ) = h/300', 'tan theta = h/300', 'tanθ=h/300', 'h/300', 'h / 300', '\\frac{h}{300}', 'arctan(h/300)', 'tan^-1(h/300)'] },
          { points: 1, description: `Differentiates with respect to $t$: $\\sec^2\\theta\\,\\dfrac{d\\theta}{dt} = \\dfrac{1}{300}\\dfrac{dh}{dt}$ (or $\\dfrac{d\\theta}{dt} = \\dfrac{1}{1 + (h/300)^2}\\cdot\\dfrac{1}{300}\\dfrac{dh}{dt}$)`, keywords: ['sec^2', 'sec²', 'dθ/dt', 'dtheta/dt', '1/(1 + (h/300)^2)', '1/(1+(h/300)^2)'] },
          { points: 1, description: `Answer with units: $\\sec^2\\theta = \\tfrac{25}{9}$ at $h = 400$, so $\\dfrac{d\\theta}{dt} = \\dfrac{3}{500} = 0.006$ radian per second`, keywords: ['3/500', '0.006', '9/1500', '45/7500'] },
        ],
        sampleAnswer: `$\\tan\\theta = \\dfrac{h}{300}$. Differentiating with respect to $t$:
$$\\sec^2\\theta\\,\\frac{d\\theta}{dt} = \\frac{1}{300}\\frac{dh}{dt}$$

When $h = 400$, the distance from the observer to the balloon is $\\sqrt{300^2 + 400^2} = 500$, so $\\sec\\theta = \\frac{500}{300} = \\frac{5}{3}$ and $\\sec^2\\theta = \\frac{25}{9}$.

$$\\frac{25}{9}\\cdot\\frac{d\\theta}{dt} = \\frac{5}{300} \\implies \\frac{d\\theta}{dt} = \\frac{9}{25}\\cdot\\frac{1}{60} = \\frac{3}{500} = 0.006 \\text{ radian per second}$$`,
      },
      {
        label: '(b)',
        prompt: `Find the rate at which the distance between the observer and the balloon is changing at that same instant.`,
        maxPoints: 2,
        rubric: [
          { points: 1, description: `Relates and differentiates: $s^2 = h^2 + 300^2$, so $2s\\,\\dfrac{ds}{dt} = 2h\\,\\dfrac{dh}{dt}$`, keywords: ['s^2 = h^2', 's² = h²', '2s', 'ds/dt', 'h dh/dt', '2h dh/dt', '300^2 + h^2', '300² + h²', 'h^2 + 300^2', '400(5)'] },
          { points: 1, description: `Answer: $\\dfrac{ds}{dt} = \\dfrac{400 \\cdot 5}{500} = 4$ meters per second`, keywords: ['ds/dt = 4', 'dd/dt = 4', 'rate is 4', '4 m/s', '4 meters per second', '2000/500'] },
        ],
        sampleAnswer: `Let $s$ be the distance from the observer to the balloon: $s^2 = h^2 + 300^2$.

$$2s\\frac{ds}{dt} = 2h\\frac{dh}{dt} \\implies \\frac{ds}{dt} = \\frac{h}{s}\\cdot\\frac{dh}{dt} = \\frac{400}{500}(5) = 4 \\text{ meters per second}$$`,
      },
      {
        label: '(c)',
        prompt: `Suppose instead that, at the instant the balloon is 400 meters high, the observer is 300 meters from $P$ and is walking toward $P$ at 2 meters per second, while the balloon still rises at 5 meters per second. Find the rate at which the distance between the observer and the balloon is changing at that instant.`,
        maxPoints: 2,
        rubric: [
          { points: 1, description: `Uses $s^2 = x^2 + h^2$ with $x$ the observer's distance from $P$ and $\\dfrac{dx}{dt} = -2$: $s\\,\\dfrac{ds}{dt} = x\\,\\dfrac{dx}{dt} + h\\,\\dfrac{dh}{dt}$`, keywords: ['dx/dt = -2', 'x dx/dt', '300(-2)', '-600', 'h dh/dt', '2h dh/dt', '300^2 + h^2', '300² + h²', 'h^2 + 300^2', '400(5)'] },
          { points: 1, description: `Answer: $\\dfrac{ds}{dt} = \\dfrac{300(-2) + 400(5)}{500} = 2.8$ meters per second`, keywords: ['2.8', '1400/500', '14/5'] },
        ],
        sampleAnswer: `Let $x$ be the observer's distance from $P$. Then $s^2 = x^2 + h^2$, and
$$s\\frac{ds}{dt} = x\\frac{dx}{dt} + h\\frac{dh}{dt}$$

With $x = 300$, $\\frac{dx}{dt} = -2$ (the distance to $P$ is shrinking), $h = 400$, $\\frac{dh}{dt} = 5$ and $s = 500$:
$$\\frac{ds}{dt} = \\frac{300(-2) + 400(5)}{500} = \\frac{1400}{500} = 2.8 \\text{ meters per second}$$`,
      },
      {
        label: '(d)',
        prompt: `Return to the stationary observer of parts (a) and (b). As the balloon rises, is the angle of elevation $\\theta$ increasing at an increasing rate or at a decreasing rate? Justify your answer.`,
        maxPoints: 2,
        rubric: [
          { points: 1, description: `Expresses $\\dfrac{d\\theta}{dt}$ as a function of $h$ or $\\theta$: $\\dfrac{d\\theta}{dt} = \\dfrac{1500}{90000 + h^2}$, or $\\dfrac{d\\theta}{dt} = \\dfrac{1}{60}\\cos^2\\theta$`, keywords: ['1500/(90000 + h^2)', '1500/(90000+h^2)', '90000 + h^2', '90000 + h²', '300² + h²', 'cos^2', 'cos²', '1/60'] },
          { points: 1, description: `Conclusion: as $h$ increases the denominator increases (or, as $\\theta$ increases on $\\left(0, \\tfrac{\\pi}{2}\\right)$, $\\cos^2\\theta$ decreases), so $\\dfrac{d\\theta}{dt}$ decreases (equivalently $\\dfrac{d^2\\theta}{dt^2} < 0$); $\\theta$ increases at a decreasing rate`, keywords: ['decreasing rate'] },
        ],
        sampleAnswer: `From $\\theta = \\arctan\\frac{h}{300}$ (or from part (a)):
$$\\frac{d\\theta}{dt} = \\frac{1}{1 + (h/300)^2}\\cdot\\frac{1}{300}\\cdot 5 = \\frac{1500}{90000 + h^2}$$

This is positive, so $\\theta$ is increasing. As the balloon rises, $h$ increases, so the denominator $90000 + h^2$ increases and $\\frac{d\\theta}{dt}$ decreases. (Equivalently, $\\frac{d^2\\theta}{dt^2} = -\\frac{1500 \\cdot 2h \\cdot 5}{(90000 + h^2)^2} < 0$ for $h > 0$.)

The angle of elevation is increasing **at a decreasing rate**.`,
      },
    ],
  },
  {
    id: 'calcab-ext-8',
    type: 'long',
    unit: 6,
    title: 'Accumulation Function from a Graph',
    prompt: `The continuous function $f$ is defined on the closed interval $-4 \\le x \\le 4$. The graph of $f$ consists of three line segments joining, in order, the points $(-4, 0)$, $(-2, 2)$, $(1, -1)$ and $(4, 2)$. The graph of $f$ crosses the $x$-axis at $x = 0$ and at $x = 2$.

Let $g$ be the function defined by $g(x) = \\displaystyle\\int_1^x f(t)\\,dt$ for $-4 \\le x \\le 4$.`,
    totalPoints: 9,
    timeRecommendation: '~15 minutes',
    calculatorAllowed: false,
    parts: [
      {
        label: '(a)',
        prompt: `Find $g(-4)$ and $g(4)$.`,
        maxPoints: 2,
        rubric: [
          { points: 1, description: `$g(-4) = -\\int_{-4}^{1} f(t)\\,dt = -\\left(2 + 2 - \\tfrac{1}{2}\\right) = -\\tfrac{7}{2}$`, keywords: ['-7/2', '-3.5'] },
          { points: 1, description: `$g(4) = \\int_1^4 f(t)\\,dt = -\\tfrac{1}{2} + 2 = \\tfrac{3}{2}$`, keywords: ['3/2', '1.5'] },
        ],
        sampleAnswer: `Areas between the graph of $f$ and the $x$-axis: on $[-4, -2]$, $2$; on $[-2, 0]$, $2$; on $[0, 1]$, $\\frac{1}{2}$ (below); on $[1, 2]$, $\\frac{1}{2}$ (below); on $[2, 4]$, $2$.

$$g(-4) = \\int_1^{-4} f(t)\\,dt = -\\int_{-4}^{1} f(t)\\,dt = -\\left(2 + 2 - \\frac{1}{2}\\right) = -\\frac{7}{2}$$

$$g(4) = \\int_1^4 f(t)\\,dt = -\\frac{1}{2} + 2 = \\frac{3}{2}$$`,
      },
      {
        label: '(b)',
        prompt: `Find the absolute maximum value and the absolute minimum value of $g$ on the closed interval $-4 \\le x \\le 4$. Justify your answers.`,
        maxPoints: 3,
        rubric: [
          { points: 1, description: `Uses $g'(x) = f(x)$: critical points where $f$ changes sign, $x = 0$ and $x = 2$`, keywords: ["g' = f", "g'(x) = f(x)", 'x = 0 and x = 2', 'x = 0 and 2'] },
          { points: 1, description: `Candidate values: $g(-4) = -\\tfrac{7}{2}$, $g(0) = \\tfrac{1}{2}$, $g(2) = -\\tfrac{1}{2}$, $g(4) = \\tfrac{3}{2}$`, keywords: ['g(0) = 1/2', 'g(2) = -1/2', 'g(0) = 0.5', 'g(2) = -0.5', 'g(0)=1/2', 'g(2)=-1/2', 'g(0)=0.5', 'g(2)=-0.5', 'g(0)', 'g(2)'] },
          { points: 1, description: `Answers: absolute maximum $\\tfrac{3}{2}$ (at $x = 4$) and absolute minimum $-\\tfrac{7}{2}$ (at $x = -4$)`, keywords: ['maximum value is 3/2', 'maximum is 3/2', 'max is 3/2', 'absolute maximum 3/2', 'maximum of 3/2', 'max of 3/2', 'minimum value is -7/2', 'minimum is -7/2', 'min is -7/2', 'minimum of -7/2', 'min of -7/2'] },
        ],
        sampleAnswer: `$g'(x) = f(x)$, which changes sign at $x = 0$ (positive to negative) and $x = 2$ (negative to positive). Candidates test:

- $g(-4) = -\\frac{7}{2}$
- $g(0) = \\int_1^0 f(t)\\,dt = -\\left(-\\frac{1}{2}\\right) = \\frac{1}{2}$
- $g(2) = \\int_1^2 f(t)\\,dt = -\\frac{1}{2}$
- $g(4) = \\frac{3}{2}$

The absolute maximum value of $g$ is $\\frac{3}{2}$ (at $x = 4$) and the absolute minimum value is $-\\frac{7}{2}$ (at $x = -4$).`,
      },
      {
        label: '(c)',
        prompt: `Let $h$ be the function defined by $h(x) = x\\,g(x)$. Find $h'(-2)$.`,
        maxPoints: 2,
        rubric: [
          { points: 1, description: `Product rule with $g' = f$: $h'(x) = g(x) + x\\,f(x)$, and $g(-2) = -\\tfrac{3}{2}$, $f(-2) = 2$`, keywords: ['g(x) + x f(x)', 'g(x) + xf(x)', 'g(-2) + (-2)f(-2)', 'g(-2) - 2f(-2)', 'g(-2) = -3/2'] },
          { points: 1, description: `Answer: $h'(-2) = -\\tfrac{3}{2} + (-2)(2) = -\\tfrac{11}{2}$`, keywords: ['-11/2', '-5.5'] },
        ],
        sampleAnswer: `By the product rule and the Fundamental Theorem of Calculus, $h'(x) = g(x) + x\\,g'(x) = g(x) + x\\,f(x)$.

$g(-2) = -\\int_{-2}^{1} f(t)\\,dt = -\\left(2 - \\frac{1}{2}\\right) = -\\frac{3}{2}$ and $f(-2) = 2$.

$$h'(-2) = -\\frac{3}{2} + (-2)(2) = -\\frac{11}{2}$$`,
      },
      {
        label: '(d)',
        prompt: `Where on $-4 < x < 4$ does the graph of $g$ have a point of inflection? Give each $x$-coordinate and a reason.`,
        maxPoints: 2,
        rubric: [
          { points: 1, description: `Answer: $x = -2$ and $x = 1$`, keywords: ['x = -2 and x = 1', '-2 and 1', 'x = -2, x = 1', '-2, 1'] },
          { points: 1, description: `Justification: $g'' = f'$ changes sign there ($f$ changes from increasing to decreasing at $x = -2$ and from decreasing to increasing at $x = 1$)`, keywords: ["g'' = f'", 'increasing to decreasing', 'decreasing to increasing', 'changes sign', "f' changes sign", 'positive to negative', 'negative to positive', 'increasing on', 'decreasing on'] },
        ],
        sampleAnswer: `$g''(x) = f'(x)$. The graph of $f$ is increasing on $(-4, -2)$, decreasing on $(-2, 1)$ and increasing on $(1, 4)$, so $g''$ changes sign at $x = -2$ and at $x = 1$.

The graph of $g$ has points of inflection at **$x = -2$ and $x = 1$**.`,
      },
    ],
  },
]

// ─── Combined export ───────────────────────────────────────────────

export const apCalcABFRQs: CalcABFRQ[] = [...longFRQs, ...shortFRQs, ...extFRQs]

export function getCalcABFRQs(): CalcABFRQ[] {
  return apCalcABFRQs
}

export function getLongFRQs(): CalcABFRQ[] {
  return longFRQs
}

export function getShortFRQs(): CalcABFRQ[] {
  return shortFRQs
}

export function getCalculatorFRQs(pool: CalcABFRQ[] = apCalcABFRQs): CalcABFRQ[] {
  return pool.filter((q) => q.calculatorAllowed)
}

export function getNoCalculatorFRQs(pool: CalcABFRQ[] = apCalcABFRQs): CalcABFRQ[] {
  return pool.filter((q) => !q.calculatorAllowed)
}

/**
 * Timed simulation that respects the calculator split: Part A is 2 calculator-active
 * FRQs (30 min), Part B is 4 no-calculator FRQs (60 min). 54 points in 90 minutes.
 */
export function generateFullExamFRQs(pool: CalcABFRQ[] = apCalcABFRQs): {
  partA: CalcABFRQ[]
  partB: CalcABFRQ[]
  totalPoints: number
  totalMinutes: number
} {
  const shuffle = <U,>(arr: U[]): U[] => {
    const copy = [...arr]
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[copy[i], copy[j]] = [copy[j], copy[i]]
    }
    return copy
  }

  const partA = shuffle(getCalculatorFRQs(pool)).slice(0, 2)
  const partB = shuffle(getNoCalculatorFRQs(pool)).slice(0, 4)
  const totalPoints = [...partA, ...partB].reduce((s, q) => s + q.totalPoints, 0)

  return { partA, partB, totalPoints, totalMinutes: 90 }
}
