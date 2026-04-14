/**
 * AP Calculus BC FRQ Practice Questions
 * Based on College Board AP Calculus BC FRQ format:
 * - 2 long FRQs (9 pts each, ~30 min each)
 * - 4 short FRQs (9 pts each, ~15 min each)
 * Topics span BC-specific content: series, parametric/polar, advanced integration
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

export interface CalcBCFRQ {
  id: string
  type: 'long' | 'short'
  unit: number
  title: string
  prompt: string
  parts: FRQPart[]
  totalPoints: number
  timeRecommendation: string
  calculatorAllowed: boolean
}

// ─── Long FRQs (9 points each, ~30 minutes) ─────────────────────────

const longFRQs: CalcBCFRQ[] = [
  {
    id: 'calcbc-long-1',
    type: 'long',
    unit: 10,
    title: 'Taylor & Maclaurin Series',
    prompt: `Let $f$ be a function with $f(0) = 1$ and derivatives of all orders. The Maclaurin series for $f$ is given by

$$\\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n}}{(2n)!}$$

which converges for all real numbers $x$.`,
    totalPoints: 9,
    timeRecommendation: '~30 minutes',
    calculatorAllowed: false,
    parts: [
      {
        label: '(a)',
        prompt: 'Write the first four nonzero terms of the Maclaurin series for $f$ and identify the function.',
        maxPoints: 2,
        rubric: [
          { points: 1, description: 'Writes first four terms: 1 − x²/2! + x⁴/4! − x⁶/6!', keywords: ['1 -', 'x^2/2', 'x^4/24', 'x^4/4!', 'x^6/720', 'x^6/6!'] },
          { points: 1, description: 'Identifies the function as cos(x)', keywords: ['cos', 'cosine'] },
        ],
        sampleAnswer: 'The first four nonzero terms:\n\n$$f(x) = 1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - \\frac{x^6}{6!} + \\cdots = 1 - \\frac{x^2}{2} + \\frac{x^4}{24} - \\frac{x^6}{720} + \\cdots$$\n\nThis is the Maclaurin series for $f(x) = \\cos(x)$.',
      },
      {
        label: '(b)',
        prompt: 'Write the first four nonzero terms of the Maclaurin series for $f\'(x)$.',
        maxPoints: 2,
        rubric: [
          { points: 1, description: 'Differentiates term by term correctly', keywords: ['term by term', 'differentiate'] },
          { points: 1, description: 'Obtains −x + x³/3! − x⁵/5! + x⁷/7! = −sin(x)', keywords: ['-x +', 'x^3/6', 'x^3/3!', 'x^5/120', 'x^5/5!', '-sin'] },
        ],
        sampleAnswer: 'Differentiating term by term:\n\n$$f\'(x) = -\\frac{2x}{2!} + \\frac{4x^3}{4!} - \\frac{6x^5}{6!} + \\frac{8x^7}{8!} - \\cdots$$\n\n$$= -x + \\frac{x^3}{3!} - \\frac{x^5}{5!} + \\frac{x^7}{7!} - \\cdots = -\\sin(x)$$',
      },
      {
        label: '(c)',
        prompt: 'Write the first four nonzero terms of the Maclaurin series for $g(x) = x\\,f(x)$.',
        maxPoints: 2,
        rubric: [
          { points: 1, description: 'Multiplies each term by x correctly', keywords: ['multiply by x', 'x \\cdot'] },
          { points: 1, description: 'Obtains x − x³/2! + x⁵/4! − x⁷/6!', keywords: ['x -', 'x^3/2', 'x^3/2!', 'x^5/24', 'x^5/4!', 'x^7/720', 'x^7/6!'] },
        ],
        sampleAnswer: 'Multiplying the series by $x$:\n\n$$g(x) = x \\cdot f(x) = x - \\frac{x^3}{2!} + \\frac{x^5}{4!} - \\frac{x^7}{6!} + \\cdots$$\n\n$$= x - \\frac{x^3}{2} + \\frac{x^5}{24} - \\frac{x^7}{720} + \\cdots$$',
      },
      {
        label: '(d)',
        prompt: 'Use the alternating series error bound to show that $|f(1) - P_4(1)| < 0.05$, where $P_4(x)$ is the fourth-degree Taylor polynomial for $f$ about $x = 0$.',
        maxPoints: 3,
        rubric: [
          { points: 1, description: 'Identifies the first omitted term of the alternating series at x = 1', keywords: ['first omitted', 'next term', 'a_{n+1}'] },
          { points: 1, description: 'Computes |(-1)³ · 1⁶/6!| = 1/720 ≈ 0.00139', keywords: ['1/720', '0.00139', '6!', '720'] },
          { points: 1, description: 'Concludes 1/720 < 0.05, so the error bound is satisfied', keywords: ['< 0.05', 'less than', 'error bound', 'alternating series'] },
        ],
        sampleAnswer: 'The alternating series error bound states that the error is bounded by the absolute value of the first omitted term.\n\n$P_4(x) = 1 - \\frac{x^2}{2} + \\frac{x^4}{24}$. The first omitted term at $x = 1$ is:\n\n$$\\left|\\frac{(-1)^3 \\cdot 1^6}{6!}\\right| = \\frac{1}{720} \\approx 0.00139$$\n\nSince $\\frac{1}{720} < 0.05$, by the alternating series error bound, $|f(1) - P_4(1)| \\le \\frac{1}{720} < 0.05$.',
      },
    ],
  },
  {
    id: 'calcbc-long-2',
    type: 'long',
    unit: 9,
    title: 'Parametric Motion & Arc Length',
    prompt: `A particle moves in the $xy$-plane so that its position at time $t$ is given by $x(t) = 3\\cos(t)$ and $y(t) = 2\\sin(t)$ for $0 \\le t \\le 2\\pi$.`,
    totalPoints: 9,
    timeRecommendation: '~30 minutes',
    calculatorAllowed: true,
    parts: [
      {
        label: '(a)',
        prompt: 'Find $\\frac{dy}{dx}$ in terms of $t$. Find all values of $t$ in $[0, 2\\pi)$ where the tangent line is horizontal.',
        maxPoints: 3,
        rubric: [
          { points: 1, description: 'Computes dy/dt = 2cos(t) and dx/dt = −3sin(t)', keywords: ['2cos', '-3sin', 'dy/dt', 'dx/dt'] },
          { points: 1, description: 'Finds dy/dx = (2cos t)/(−3sin t) = −(2/3)cot(t)', keywords: ['dy/dx', '2cos', '-3sin', 'cot', '-2/3'] },
          { points: 1, description: 'Horizontal tangent when dy/dt = 0: cos(t) = 0 → t = π/2, 3π/2', keywords: ['π/2', '3π/2', 'cos(t) = 0', 'horizontal'] },
        ],
        sampleAnswer: '$$\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt} = \\frac{2\\cos(t)}{-3\\sin(t)} = -\\frac{2}{3}\\cot(t)$$\n\nHorizontal tangent when $\\frac{dy}{dt} = 0$ and $\\frac{dx}{dt} \\ne 0$:\n\n$2\\cos(t) = 0 \\implies t = \\frac{\\pi}{2},\\ \\frac{3\\pi}{2}$\n\nAt both values, $\\frac{dx}{dt} = -3\\sin(t) \\ne 0$, so the tangent is horizontal at $t = \\frac{\\pi}{2}$ and $t = \\frac{3\\pi}{2}$.',
      },
      {
        label: '(b)',
        prompt: 'Find the speed of the particle at time $t = \\pi/4$.',
        maxPoints: 2,
        rubric: [
          { points: 1, description: 'Sets up speed formula: √[(dx/dt)² + (dy/dt)²]', keywords: ['speed', 'sqrt', '√', 'dx/dt', 'dy/dt'] },
          { points: 1, description: 'Evaluates at t = π/4: √[9sin²(π/4) + 4cos²(π/4)] = √[9/2 + 4/2] = √(13/2) ≈ 2.550', keywords: ['√(13/2)', '13/2', '2.55', 'sqrt(6.5)'] },
        ],
        sampleAnswer: '$$\\text{Speed} = \\sqrt{\\left(\\frac{dx}{dt}\\right)^2 + \\left(\\frac{dy}{dt}\\right)^2} = \\sqrt{9\\sin^2(t) + 4\\cos^2(t)}$$\n\nAt $t = \\frac{\\pi}{4}$:\n\n$$= \\sqrt{9 \\cdot \\frac{1}{2} + 4 \\cdot \\frac{1}{2}} = \\sqrt{\\frac{13}{2}} \\approx 2.550$$',
      },
      {
        label: '(c)',
        prompt: 'Set up, but do not evaluate, an integral expression for the total distance traveled by the particle for $0 \\le t \\le 2\\pi$.',
        maxPoints: 2,
        rubric: [
          { points: 1, description: 'Uses the arc length formula with correct integrand √[(dx/dt)² + (dy/dt)²]', keywords: ['arc length', '∫', 'sqrt', '√'] },
          { points: 1, description: 'Writes ∫₀²π √(9sin²t + 4cos²t) dt with correct limits', keywords: ['0', '2π', '9sin', '4cos', '2\\pi'] },
        ],
        sampleAnswer: '$$\\text{Distance} = \\int_0^{2\\pi} \\sqrt{\\left(\\frac{dx}{dt}\\right)^2 + \\left(\\frac{dy}{dt}\\right)^2}\\,dt = \\int_0^{2\\pi} \\sqrt{9\\sin^2(t) + 4\\cos^2(t)}\\,dt$$',
      },
      {
        label: '(d)',
        prompt: 'Find an equation of the tangent line to the curve at the point where $t = \\pi/6$.',
        maxPoints: 2,
        rubric: [
          { points: 1, description: 'Finds the point: x(π/6) = 3cos(π/6) = 3√3/2, y(π/6) = 2sin(π/6) = 1, and the slope dy/dx = −(2/3)cot(π/6) = −(2/3)√3', keywords: ['3√3/2', 'y = 1', 'cot(π/6)', '-2√3/3'] },
          { points: 1, description: 'Writes the tangent line equation: y − 1 = −(2√3/3)(x − 3√3/2)', keywords: ['y - 1', 'y − 1', 'tangent line'] },
        ],
        sampleAnswer: 'At $t = \\frac{\\pi}{6}$:\n- $x = 3\\cos\\frac{\\pi}{6} = \\frac{3\\sqrt{3}}{2}$\n- $y = 2\\sin\\frac{\\pi}{6} = 1$\n- Slope $= -\\frac{2}{3}\\cot\\frac{\\pi}{6} = -\\frac{2}{3} \\cdot \\sqrt{3} = -\\frac{2\\sqrt{3}}{3}$\n\nTangent line: $y - 1 = -\\frac{2\\sqrt{3}}{3}\\left(x - \\frac{3\\sqrt{3}}{2}\\right)$',
      },
    ],
  },
  {
    id: 'calcbc-long-3',
    type: 'long',
    unit: 10,
    title: 'Power Series & Interval of Convergence',
    prompt: `Consider the power series $\\displaystyle\\sum_{n=1}^{\\infty} \\frac{(x - 3)^n}{n \\cdot 2^n}$.`,
    totalPoints: 9,
    timeRecommendation: '~30 minutes',
    calculatorAllowed: false,
    parts: [
      {
        label: '(a)',
        prompt: 'Find the radius of convergence.',
        maxPoints: 3,
        rubric: [
          { points: 1, description: 'Applies the Ratio Test: |a_{n+1}/a_n| with the general term correctly', keywords: ['ratio test', 'a_{n+1}', '|a_{n+1}/a_n|'] },
          { points: 1, description: 'Simplifies the ratio to |x − 3|/2 · n/(n+1)', keywords: ['|x - 3|/2', '|x − 3|/2', 'n/(n+1)'] },
          { points: 1, description: 'Takes the limit as n → ∞ to get |x − 3|/2 < 1, so R = 2', keywords: ['R = 2', 'radius = 2', '|x - 3| < 2'] },
        ],
        sampleAnswer: 'Using the Ratio Test:\n\n$$\\lim_{n \\to \\infty} \\left|\\frac{a_{n+1}}{a_n}\\right| = \\lim_{n \\to \\infty} \\left|\\frac{(x-3)^{n+1}}{(n+1) \\cdot 2^{n+1}} \\cdot \\frac{n \\cdot 2^n}{(x-3)^n}\\right| = \\frac{|x-3|}{2} \\cdot \\lim_{n \\to \\infty} \\frac{n}{n+1} = \\frac{|x-3|}{2}$$\n\nConverges when $\\frac{|x-3|}{2} < 1$, so $|x-3| < 2$. The radius of convergence is $R = 2$.',
      },
      {
        label: '(b)',
        prompt: 'Determine the interval of convergence, including a check of the endpoints.',
        maxPoints: 3,
        rubric: [
          { points: 1, description: 'Identifies the open interval (1, 5) from |x − 3| < 2', keywords: ['(1, 5)', '1 < x < 5'] },
          { points: 1, description: 'At x = 1: series becomes Σ(−1)ⁿ/n which converges by Alternating Series Test', keywords: ['x = 1', '(-1)^n/n', 'alternating', 'converges'] },
          { points: 1, description: 'At x = 5: series becomes Σ 1/n (harmonic) which diverges', keywords: ['x = 5', '1/n', 'harmonic', 'diverges'] },
        ],
        sampleAnswer: 'Open interval: $1 < x < 5$.\n\nAt $x = 1$: $\\sum \\frac{(-2)^n}{n \\cdot 2^n} = \\sum \\frac{(-1)^n}{n}$. This converges by the Alternating Series Test.\n\nAt $x = 5$: $\\sum \\frac{2^n}{n \\cdot 2^n} = \\sum \\frac{1}{n}$. This is the harmonic series, which diverges.\n\nInterval of convergence: $[1, 5)$.',
      },
      {
        label: '(c)',
        prompt: 'Find a closed-form expression for the function represented by this series.',
        maxPoints: 3,
        rubric: [
          { points: 1, description: 'Recognizes the series as related to −ln(1 − u) = Σ uⁿ/n with u = (x−3)/2', keywords: ['ln', '-ln(1-u)', 'u = (x-3)/2'] },
          { points: 1, description: 'Writes f(x) = −ln(1 − (x−3)/2)', keywords: ['-ln', '1 - (x-3)/2'] },
          { points: 1, description: 'Simplifies to −ln((5−x)/2) or equivalently ln(2/(5−x))', keywords: ['ln(2/(5-x))', '-ln((5-x)/2)', 'simplif'] },
        ],
        sampleAnswer: 'Recall that $-\\ln(1 - u) = \\sum_{n=1}^{\\infty} \\frac{u^n}{n}$ for $|u| < 1$.\n\nLet $u = \\frac{x-3}{2}$:\n\n$$f(x) = \\sum_{n=1}^{\\infty} \\frac{\\left(\\frac{x-3}{2}\\right)^n}{n} = -\\ln\\left(1 - \\frac{x-3}{2}\\right) = -\\ln\\left(\\frac{5-x}{2}\\right) = \\ln\\left(\\frac{2}{5-x}\\right)$$',
      },
    ],
  },
]

// ─── Short FRQs (9 points each, ~15 minutes) ────────────────────────

const shortFRQs: CalcBCFRQ[] = [
  {
    id: 'calcbc-short-1',
    type: 'short',
    unit: 9,
    title: 'Polar Area',
    prompt: `The curve $r = 2 + 2\\cos(\\theta)$ is a cardioid in polar coordinates.`,
    totalPoints: 9,
    timeRecommendation: '~15 minutes',
    calculatorAllowed: true,
    parts: [
      {
        label: '(a)',
        prompt: 'Find the area enclosed by the cardioid.',
        maxPoints: 5,
        rubric: [
          { points: 1, description: 'Sets up the polar area formula: A = ½∫₀²π r² dθ', keywords: ['1/2', '∫', 'r²', 'polar area'] },
          { points: 1, description: 'Expands r² = (2 + 2cosθ)² = 4 + 8cosθ + 4cos²θ', keywords: ['4 + 8cos', '4cos²', '(2 + 2cos)²'] },
          { points: 1, description: 'Uses cos²θ = (1 + cos2θ)/2 to simplify', keywords: ['cos²', '(1 + cos2θ)/2', 'half-angle', 'double angle'] },
          { points: 1, description: 'Integrates: ½∫₀²π (6 + 8cosθ + 2cos2θ) dθ', keywords: ['6 + 8cos', '2cos2θ', 'integrate'] },
          { points: 1, description: 'Evaluates to 6π', keywords: ['6π', '6\\pi'] },
        ],
        sampleAnswer: '$$A = \\frac{1}{2}\\int_0^{2\\pi} (2 + 2\\cos\\theta)^2\\,d\\theta = \\frac{1}{2}\\int_0^{2\\pi} (4 + 8\\cos\\theta + 4\\cos^2\\theta)\\,d\\theta$$\n\nUsing $\\cos^2\\theta = \\frac{1 + \\cos 2\\theta}{2}$:\n\n$$= \\frac{1}{2}\\int_0^{2\\pi} (6 + 8\\cos\\theta + 2\\cos 2\\theta)\\,d\\theta = \\frac{1}{2}[6\\theta + 8\\sin\\theta + \\sin 2\\theta]_0^{2\\pi}$$\n\n$$= \\frac{1}{2}(12\\pi) = 6\\pi$$',
      },
      {
        label: '(b)',
        prompt: 'Find the slope of the tangent line to the cardioid at $\\theta = \\pi/3$.',
        maxPoints: 4,
        rubric: [
          { points: 1, description: 'Converts to parametric: x = rcosθ, y = rsinθ', keywords: ['x = rcos', 'y = rsin', 'parametric'] },
          { points: 1, description: 'Computes dy/dθ and dx/dθ using the product rule', keywords: ['dy/dθ', 'dx/dθ', 'product rule'] },
          { points: 1, description: 'Uses dy/dx = (dy/dθ)/(dx/dθ) = (r\'sinθ + rcosθ)/(r\'cosθ − rsinθ)', keywords: ["r'sin", "r'cos", 'dy/dx'] },
          { points: 1, description: 'Evaluates at θ = π/3 with r = 3 and r\' = −2sin(π/3) = −√3', keywords: ['θ = π/3', 'r = 3', '-√3', 'slope'] },
        ],
        sampleAnswer: 'With $r = 2 + 2\\cos\\theta$ and $r\'= -2\\sin\\theta$:\n\n$$\\frac{dy}{dx} = \\frac{r\'\\sin\\theta + r\\cos\\theta}{r\'\\cos\\theta - r\\sin\\theta}$$\n\nAt $\\theta = \\frac{\\pi}{3}$: $r = 2 + 2\\cos\\frac{\\pi}{3} = 3$, $r\' = -2\\sin\\frac{\\pi}{3} = -\\sqrt{3}$\n\n$$\\frac{dy}{dx} = \\frac{(-\\sqrt{3})\\frac{\\sqrt{3}}{2} + 3 \\cdot \\frac{1}{2}}{(-\\sqrt{3})\\frac{1}{2} - 3 \\cdot \\frac{\\sqrt{3}}{2}} = \\frac{-\\frac{3}{2} + \\frac{3}{2}}{-\\frac{\\sqrt{3}}{2} - \\frac{3\\sqrt{3}}{2}} = \\frac{0}{-2\\sqrt{3}} = 0$$\n\nThe tangent line is horizontal at $\\theta = \\frac{\\pi}{3}$.',
      },
    ],
  },
  {
    id: 'calcbc-short-2',
    type: 'short',
    unit: 6,
    title: 'Integration by Parts & Improper Integrals',
    prompt: `Consider the integral $\\displaystyle\\int_0^{\\infty} x e^{-x}\\,dx$.`,
    totalPoints: 9,
    timeRecommendation: '~15 minutes',
    calculatorAllowed: false,
    parts: [
      {
        label: '(a)',
        prompt: 'Find $\\int x e^{-x}\\,dx$ using integration by parts.',
        maxPoints: 4,
        rubric: [
          { points: 1, description: 'Chooses u = x, dv = e^{-x} dx correctly', keywords: ['u = x', 'dv = e^{-x}'] },
          { points: 1, description: 'Computes du = dx and v = −e^{-x}', keywords: ['du = dx', 'v = -e^{-x}'] },
          { points: 1, description: 'Applies IBP formula: uv − ∫v du = −xe^{-x} + ∫e^{-x} dx', keywords: ['uv', '-xe^{-x}', '∫e^{-x}'] },
          { points: 1, description: 'Obtains −xe^{-x} − e^{-x} + C = −(x+1)e^{-x} + C', keywords: ['-xe^{-x} - e^{-x}', '-(x+1)e^{-x}', '+ C'] },
        ],
        sampleAnswer: 'Let $u = x$, $dv = e^{-x}\\,dx$. Then $du = dx$, $v = -e^{-x}$.\n\n$$\\int xe^{-x}\\,dx = -xe^{-x} - \\int (-e^{-x})\\,dx = -xe^{-x} + \\int e^{-x}\\,dx$$\n\n$$= -xe^{-x} - e^{-x} + C = -(x+1)e^{-x} + C$$',
      },
      {
        label: '(b)',
        prompt: 'Evaluate $\\displaystyle\\int_0^{\\infty} x e^{-x}\\,dx$ or show that it diverges.',
        maxPoints: 3,
        rubric: [
          { points: 1, description: 'Rewrites as a limit: lim_{b→∞} ∫₀ᵇ xe^{-x} dx', keywords: ['lim', 'b → ∞', 'b→∞'] },
          { points: 1, description: 'Evaluates: [−(x+1)e^{-x}]₀ᵇ = −(b+1)e^{-b} + 1', keywords: ['-(b+1)e^{-b}', '+ 1', 'evaluate'] },
          { points: 1, description: 'Concludes: lim_{b→∞} −(b+1)e^{-b} = 0 (by L\'Hôpital or dominance), so integral = 1', keywords: ['= 1', 'converges to 1', "L'Hôpital", 'e^{-b} → 0'] },
        ],
        sampleAnswer: '$$\\int_0^{\\infty} xe^{-x}\\,dx = \\lim_{b \\to \\infty} \\left[-(x+1)e^{-x}\\right]_0^{b}$$\n\n$$= \\lim_{b \\to \\infty} \\left[-(b+1)e^{-b} + (0+1)e^{0}\\right] = \\lim_{b \\to \\infty} \\left[-(b+1)e^{-b} + 1\\right]$$\n\nSince $\\lim_{b \\to \\infty} (b+1)e^{-b} = 0$ (exponential dominates polynomial), the integral converges to $\\boxed{1}$.',
      },
      {
        label: '(c)',
        prompt: 'Does $\\displaystyle\\int_0^{\\infty} x^2 e^{-x}\\,dx$ converge? If so, find its value using integration by parts and your result from part (b).',
        maxPoints: 2,
        rubric: [
          { points: 1, description: 'Applies IBP with u = x², dv = e^{-x} dx to get −x²e^{-x} + 2∫xe^{-x} dx', keywords: ['u = x²', '2∫xe^{-x}', 'integration by parts'] },
          { points: 1, description: 'Evaluates: [−x²e^{-x}]₀^∞ + 2(1) = 0 + 2 = 2', keywords: ['= 2', 'converges to 2'] },
        ],
        sampleAnswer: 'Let $u = x^2$, $dv = e^{-x}\\,dx$:\n\n$$\\int_0^{\\infty} x^2 e^{-x}\\,dx = \\left[-x^2 e^{-x}\\right]_0^{\\infty} + 2\\int_0^{\\infty} xe^{-x}\\,dx = 0 + 2(1) = 2$$\n\nThe integral converges to $2$.',
      },
    ],
  },
  {
    id: 'calcbc-short-3',
    type: 'short',
    unit: 7,
    title: 'Euler\'s Method & Logistic Growth',
    prompt: `A population $P$ (in thousands) satisfies the logistic differential equation $\\frac{dP}{dt} = 0.5P\\left(1 - \\frac{P}{10}\\right)$, with $P(0) = 2$.`,
    totalPoints: 9,
    timeRecommendation: '~15 minutes',
    calculatorAllowed: true,
    parts: [
      {
        label: '(a)',
        prompt: 'Use Euler\'s method with two steps of size $\\Delta t = 1$ to approximate $P(2)$.',
        maxPoints: 4,
        rubric: [
          { points: 1, description: 'Computes dP/dt at t = 0: 0.5(2)(1 − 2/10) = 0.5(2)(0.8) = 0.8', keywords: ['0.8', 'dP/dt = 0.8'] },
          { points: 1, description: 'Finds P(1) ≈ 2 + 0.8(1) = 2.8', keywords: ['P(1)', '2.8'] },
          { points: 1, description: 'Computes dP/dt at t = 1: 0.5(2.8)(1 − 2.8/10) = 0.5(2.8)(0.72) = 1.008', keywords: ['1.008', 'dP/dt'] },
          { points: 1, description: 'Finds P(2) ≈ 2.8 + 1.008(1) = 3.808', keywords: ['3.808', 'P(2)'] },
        ],
        sampleAnswer: 'Step 1 ($t = 0$ to $t = 1$):\n- $\\frac{dP}{dt}\\bigg|_{t=0} = 0.5(2)(1 - 0.2) = 0.8$\n- $P(1) \\approx 2 + 0.8(1) = 2.8$\n\nStep 2 ($t = 1$ to $t = 2$):\n- $\\frac{dP}{dt}\\bigg|_{t=1} = 0.5(2.8)(1 - 0.28) = 1.008$\n- $P(2) \\approx 2.8 + 1.008(1) = 3.808$\n\n$P(2) \\approx 3.808$ thousand.',
      },
      {
        label: '(b)',
        prompt: 'Find the carrying capacity and the value of $P$ at which the population is growing fastest.',
        maxPoints: 2,
        rubric: [
          { points: 1, description: 'Identifies carrying capacity K = 10', keywords: ['K = 10', 'carrying capacity = 10', 'carrying capacity is 10'] },
          { points: 1, description: 'Population grows fastest at P = K/2 = 5', keywords: ['P = 5', 'K/2 = 5', 'halfway', 'inflection'] },
        ],
        sampleAnswer: 'The logistic equation $\\frac{dP}{dt} = 0.5P(1 - P/10)$ has carrying capacity $K = 10$ (thousands).\n\nThe population grows fastest at $P = K/2 = 5$ thousand (the inflection point of the logistic curve).',
      },
      {
        label: '(c)',
        prompt: 'Solve the differential equation to find $P(t)$ explicitly.',
        maxPoints: 3,
        rubric: [
          { points: 1, description: 'Uses the logistic solution formula P(t) = K/(1 + Ae^{-rt}) with K = 10, r = 0.5', keywords: ['P(t) = 10/(1 + Ae^{-0.5t})', 'logistic solution', 'K/(1+Ae'] },
          { points: 1, description: 'Applies P(0) = 2 to find A: 2 = 10/(1+A) → A = 4', keywords: ['A = 4', 'P(0) = 2', '10/(1+4)'] },
          { points: 1, description: 'Writes final answer: P(t) = 10/(1 + 4e^{-0.5t})', keywords: ['10/(1 + 4e^{-0.5t})', 'P(t) = 10'] },
        ],
        sampleAnswer: 'The logistic equation has solution:\n\n$$P(t) = \\frac{K}{1 + Ae^{-rt}} = \\frac{10}{1 + Ae^{-0.5t}}$$\n\nUsing $P(0) = 2$:\n\n$$2 = \\frac{10}{1 + A} \\implies 1 + A = 5 \\implies A = 4$$\n\n$$P(t) = \\frac{10}{1 + 4e^{-0.5t}}$$',
      },
    ],
  },
  {
    id: 'calcbc-short-4',
    type: 'short',
    unit: 10,
    title: 'Convergence Tests',
    prompt: `Determine whether each of the following series converges or diverges. Justify your answer.`,
    totalPoints: 9,
    timeRecommendation: '~15 minutes',
    calculatorAllowed: false,
    parts: [
      {
        label: '(a)',
        prompt: '$\\displaystyle\\sum_{n=1}^{\\infty} \\frac{n^2}{3^n}$',
        maxPoints: 3,
        rubric: [
          { points: 1, description: 'Applies the Ratio Test', keywords: ['ratio test'] },
          { points: 1, description: 'Computes limit: |(n+1)²/3^{n+1} · 3ⁿ/n²| = ((n+1)/n)² · 1/3 → 1/3', keywords: ['1/3', '(n+1)²/n²', 'limit'] },
          { points: 1, description: 'Since 1/3 < 1, the series converges by the Ratio Test', keywords: ['< 1', 'converges', '1/3 < 1'] },
        ],
        sampleAnswer: 'By the Ratio Test:\n\n$$\\lim_{n \\to \\infty} \\frac{a_{n+1}}{a_n} = \\lim_{n \\to \\infty} \\frac{(n+1)^2}{3^{n+1}} \\cdot \\frac{3^n}{n^2} = \\frac{1}{3} \\lim_{n \\to \\infty} \\frac{(n+1)^2}{n^2} = \\frac{1}{3}$$\n\nSince $\\frac{1}{3} < 1$, the series **converges** by the Ratio Test.',
      },
      {
        label: '(b)',
        prompt: '$\\displaystyle\\sum_{n=1}^{\\infty} \\frac{\\ln n}{n}$',
        maxPoints: 3,
        rubric: [
          { points: 1, description: 'Uses comparison or the Integral Test', keywords: ['comparison', 'integral test', 'compare'] },
          { points: 1, description: 'Notes ln(n)/n ≥ 1/n for n ≥ 3 or evaluates the integral ∫₁^∞ (ln x)/x dx = [½(ln x)²]₁^∞ = ∞', keywords: ['≥ 1/n', '∫ (ln x)/x', '(ln x)²/2', '→ ∞'] },
          { points: 1, description: 'Concludes the series diverges', keywords: ['diverges'] },
        ],
        sampleAnswer: 'By the Integral Test, consider $\\int_1^{\\infty} \\frac{\\ln x}{x}\\,dx$.\n\nLet $u = \\ln x$, $du = \\frac{1}{x}dx$:\n\n$$\\int_1^{\\infty} \\frac{\\ln x}{x}\\,dx = \\left[\\frac{(\\ln x)^2}{2}\\right]_1^{\\infty} = \\infty$$\n\nSince the integral diverges, the series $\\sum \\frac{\\ln n}{n}$ **diverges** by the Integral Test.',
      },
      {
        label: '(c)',
        prompt: '$\\displaystyle\\sum_{n=1}^{\\infty} \\frac{(-1)^n}{\\sqrt{n}}$',
        maxPoints: 3,
        rubric: [
          { points: 1, description: 'Applies the Alternating Series Test', keywords: ['alternating series test', 'AST', 'Leibniz'] },
          { points: 1, description: 'Verifies: bₙ = 1/√n is decreasing and lim bₙ = 0', keywords: ['decreasing', 'lim', '= 0', '1/√n'] },
          { points: 1, description: 'Concludes the series converges (conditionally, not absolutely since Σ1/√n = Σ1/n^{1/2} diverges as p = 1/2 ≤ 1)', keywords: ['converges', 'conditionally', 'p = 1/2'] },
        ],
        sampleAnswer: 'This is an alternating series with $b_n = \\frac{1}{\\sqrt{n}}$.\n\n1. $b_n > 0$ for all $n \\ge 1$ ✓\n2. $b_{n+1} < b_n$ (decreasing) ✓\n3. $\\lim_{n \\to \\infty} b_n = 0$ ✓\n\nBy the Alternating Series Test, the series **converges conditionally**.\n\n(It converges conditionally, not absolutely, since $\\sum \\frac{1}{\\sqrt{n}}$ is a $p$-series with $p = \\frac{1}{2} \\le 1$, which diverges.)',
      },
    ],
  },
  {
    id: 'calcbc-short-5',
    type: 'short',
    unit: 6,
    title: 'Partial Fractions',
    prompt: `Evaluate $\\displaystyle\\int \\frac{3x + 5}{(x+1)(x+2)}\\,dx$.`,
    totalPoints: 9,
    timeRecommendation: '~15 minutes',
    calculatorAllowed: false,
    parts: [
      {
        label: '(a)',
        prompt: 'Decompose $\\frac{3x + 5}{(x+1)(x+2)}$ into partial fractions.',
        maxPoints: 4,
        rubric: [
          { points: 1, description: 'Sets up A/(x+1) + B/(x+2)', keywords: ['A/(x+1)', 'B/(x+2)', 'partial fraction'] },
          { points: 1, description: 'Multiplies both sides by (x+1)(x+2): 3x + 5 = A(x+2) + B(x+1)', keywords: ['3x + 5 = A(x+2) + B(x+1)', 'multiply'] },
          { points: 1, description: 'Finds A = 2 (set x = −1: 2 = A(1))', keywords: ['A = 2', 'x = -1'] },
          { points: 1, description: 'Finds B = 1 (set x = −2: −1 = B(−1))', keywords: ['B = 1', 'x = -2'] },
        ],
        sampleAnswer: 'Set $\\frac{3x+5}{(x+1)(x+2)} = \\frac{A}{x+1} + \\frac{B}{x+2}$.\n\nMultiply by $(x+1)(x+2)$: $3x + 5 = A(x+2) + B(x+1)$.\n\n- $x = -1$: $2 = A(1) \\implies A = 2$\n- $x = -2$: $-1 = B(-1) \\implies B = 1$\n\n$$\\frac{3x+5}{(x+1)(x+2)} = \\frac{2}{x+1} + \\frac{1}{x+2}$$',
      },
      {
        label: '(b)',
        prompt: 'Evaluate the integral.',
        maxPoints: 3,
        rubric: [
          { points: 1, description: 'Integrates ∫2/(x+1) dx = 2ln|x+1|', keywords: ['2ln|x+1|', '2\\ln|x+1|'] },
          { points: 1, description: 'Integrates ∫1/(x+2) dx = ln|x+2|', keywords: ['ln|x+2|', '\\ln|x+2|'] },
          { points: 1, description: 'Combines with + C: 2ln|x+1| + ln|x+2| + C', keywords: ['+ C', '2ln|x+1| + ln|x+2|'] },
        ],
        sampleAnswer: '$$\\int \\frac{3x+5}{(x+1)(x+2)}\\,dx = \\int \\frac{2}{x+1}\\,dx + \\int \\frac{1}{x+2}\\,dx$$\n\n$$= 2\\ln|x+1| + \\ln|x+2| + C$$',
      },
      {
        label: '(c)',
        prompt: 'Evaluate $\\displaystyle\\int_0^1 \\frac{3x + 5}{(x+1)(x+2)}\\,dx$. Express your answer in exact form.',
        maxPoints: 2,
        rubric: [
          { points: 1, description: 'Substitutes bounds: [2ln|x+1| + ln|x+2|]₀¹ = (2ln2 + ln3) − (2ln1 + ln2)', keywords: ['2ln2 + ln3', 'ln2', 'bounds'] },
          { points: 1, description: 'Simplifies to 2ln2 + ln3 − ln2 = ln2 + ln3 = ln6', keywords: ['ln6', 'ln 6', 'ln2 + ln3'] },
        ],
        sampleAnswer: '$$\\left[2\\ln|x+1| + \\ln|x+2|\\right]_0^1 = (2\\ln 2 + \\ln 3) - (0 + \\ln 2)$$\n\n$$= 2\\ln 2 + \\ln 3 - \\ln 2 = \\ln 2 + \\ln 3 = \\ln 6$$',
      },
    ],
  },
  {
    id: 'calcbc-short-6',
    type: 'short',
    unit: 10,
    title: 'Taylor Polynomial Error & Lagrange',
    prompt: `Let $f(x) = e^x$.`,
    totalPoints: 9,
    timeRecommendation: '~15 minutes',
    calculatorAllowed: false,
    parts: [
      {
        label: '(a)',
        prompt: 'Write the third-degree Taylor polynomial $P_3(x)$ for $f(x) = e^x$ centered at $x = 0$.',
        maxPoints: 2,
        rubric: [
          { points: 1, description: 'Identifies f(0) = 1, f\'(0) = 1, f\'\'(0) = 1, f\'\'\'(0) = 1', keywords: ['f(0) = 1', 'all derivatives equal 1'] },
          { points: 1, description: 'Writes P₃(x) = 1 + x + x²/2 + x³/6', keywords: ['1 + x + x²/2', 'x³/6', 'x^3/6'] },
        ],
        sampleAnswer: 'Since all derivatives of $e^x$ equal $e^x$, and $e^0 = 1$:\n\n$$P_3(x) = 1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} = 1 + x + \\frac{x^2}{2} + \\frac{x^3}{6}$$',
      },
      {
        label: '(b)',
        prompt: 'Use the Lagrange error bound to find the maximum error in approximating $e^{0.5}$ by $P_3(0.5)$.',
        maxPoints: 4,
        rubric: [
          { points: 1, description: 'States the Lagrange error bound formula: |R_n(x)| ≤ M|x−c|^{n+1}/(n+1)!', keywords: ['Lagrange', 'R_n', 'M|x-c|^{n+1}', '(n+1)!'] },
          { points: 1, description: 'Identifies n = 3, c = 0, x = 0.5, so need the 4th derivative bound', keywords: ['n = 3', 'x = 0.5', 'f^{(4)}'] },
          { points: 1, description: 'Finds M = max|f^{(4)}(z)| on [0, 0.5] = e^{0.5} ≤ 2 (or uses exact e^{0.5})', keywords: ['f^{(4)}', 'e^{0.5}', 'M = e^{0.5}', 'M ≤ 2'] },
          { points: 1, description: 'Computes error bound: 2(0.5)⁴/4! = 2(1/16)/24 = 1/192 ≈ 0.0052', keywords: ['1/192', '0.0052', '(0.5)^4/4!', '0.005'] },
        ],
        sampleAnswer: 'The Lagrange error bound:\n\n$$|R_3(0.5)| \\le \\frac{M \\cdot |0.5|^4}{4!}$$\n\nwhere $M = \\max_{0 \\le z \\le 0.5} |f^{(4)}(z)| = e^{0.5} < 2$.\n\n$$|R_3(0.5)| \\le \\frac{2 \\cdot (0.5)^4}{24} = \\frac{2 \\cdot 0.0625}{24} = \\frac{0.125}{24} \\approx 0.0052$$',
      },
      {
        label: '(c)',
        prompt: 'Compare $P_3(0.5)$ to the actual value of $e^{0.5}$. Is the actual error within the Lagrange bound?',
        maxPoints: 3,
        rubric: [
          { points: 1, description: 'Computes P₃(0.5) = 1 + 0.5 + 0.125 + 0.0208… = 1.6458…', keywords: ['1.6458', 'P₃(0.5)', '1.625'] },
          { points: 1, description: 'States e^{0.5} ≈ 1.6487', keywords: ['1.6487', 'e^{0.5}'] },
          { points: 1, description: 'Actual error ≈ |1.6487 − 1.6458| ≈ 0.0029, which is less than 0.0052', keywords: ['0.0029', 'within', 'less than', '< 0.0052'] },
        ],
        sampleAnswer: '$P_3(0.5) = 1 + 0.5 + \\frac{0.25}{2} + \\frac{0.125}{6} = 1 + 0.5 + 0.125 + 0.02083 \\approx 1.6458$\n\n$e^{0.5} \\approx 1.6487$\n\nActual error: $|1.6487 - 1.6458| \\approx 0.0029$\n\nSince $0.0029 < 0.0052$ (our Lagrange bound), yes, the actual error is well within the bound.',
      },
    ],
  },
]

// ─── Combined export ───────────────────────────────────────────────

export const apCalcBCFRQs: CalcBCFRQ[] = [...longFRQs, ...shortFRQs]

export function getCalcBCFRQs(): CalcBCFRQ[] {
  return apCalcBCFRQs
}

export function getLongFRQs(): CalcBCFRQ[] {
  return longFRQs
}

export function getShortFRQs(): CalcBCFRQ[] {
  return shortFRQs
}

export function generateFullExamFRQs(): {
  long: CalcBCFRQ[]
  short: CalcBCFRQ[]
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

  const selectedLong = shuffle(longFRQs).slice(0, 2)
  const selectedShort = shuffle(shortFRQs).slice(0, 4)

  const totalPoints =
    selectedLong.reduce((s, q) => s + q.totalPoints, 0) +
    selectedShort.reduce((s, q) => s + q.totalPoints, 0)

  return { long: selectedLong, short: selectedShort, totalPoints, totalTime: '90 min' }
}
