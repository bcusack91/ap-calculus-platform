/**
 * AP Calculus BC FRQ Practice Questions
 * Based on College Board AP Calculus BC FRQ format:
 * - Part A: 2 FRQs, graphing calculator required (30 min)
 * - Part B: 4 FRQs, no calculator (60 min)
 * - Every FRQ is worth 9 points (~15 min each); 54 points in 90 minutes.
 * The `type` field ('long' | 'short') is a legacy grouping kept for the content store;
 * the page groups and times questions by `calculatorAllowed` (Part A vs Part B).
 * The legacy long/short groups span BC-only content (series, parametric/polar, advanced
 * integration). The ext group (2027 expansion) adds six AB-type FRQs in BC-level settings,
 * since about 60% of the BC exam is AB content, plus one vector-motion and one series FRQ.
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

// ─── Legacy "long" group (9 points each, ~15 minutes) ──────────────

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
    timeRecommendation: '~15 minutes',
    calculatorAllowed: false,
    parts: [
      {
        label: '(a)',
        prompt: 'Write the first four nonzero terms of the Maclaurin series for $f$ and identify the function.',
        maxPoints: 2,
        rubric: [
          { points: 1, description: 'Writes first four terms: 1 − $x^{2}/2$! + $x^{4}/4$! − $x^{6}/6$!', keywords: ['1 -', 'x^2/2', 'x^4/24', 'x^4/4!', 'x^6/720', 'x^6/6!'] },
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
          { points: 1, description: 'Obtains −x + $x^{3}/3$! − $x^{5}/5$! + $x^{7}/7$! = −sin(x)', keywords: ['-x +', 'x^3/6', 'x^3/3!', 'x^5/120', 'x^5/5!', '-sin'] },
        ],
        sampleAnswer: 'Differentiating term by term:\n\n$$f\'(x) = -\\frac{2x}{2!} + \\frac{4x^3}{4!} - \\frac{6x^5}{6!} + \\frac{8x^7}{8!} - \\cdots$$\n\n$$= -x + \\frac{x^3}{3!} - \\frac{x^5}{5!} + \\frac{x^7}{7!} - \\cdots = -\\sin(x)$$',
      },
      {
        label: '(c)',
        prompt: 'Write the first four nonzero terms of the Maclaurin series for $g(x) = x\\,f(x)$.',
        maxPoints: 2,
        rubric: [
          { points: 1, description: 'Multiplies each term by x correctly', keywords: ['multiply by x', 'x \\cdot'] },
          { points: 1, description: 'Obtains x − $x^{3}/2$! + $x^{5}/4$! − $x^{7}/6$!', keywords: ['x -', 'x^3/2', 'x^3/2!', 'x^5/24', 'x^5/4!', 'x^7/720', 'x^7/6!'] },
        ],
        sampleAnswer: 'Multiplying the series by $x$:\n\n$$g(x) = x \\cdot f(x) = x - \\frac{x^3}{2!} + \\frac{x^5}{4!} - \\frac{x^7}{6!} + \\cdots$$\n\n$$= x - \\frac{x^3}{2} + \\frac{x^5}{24} - \\frac{x^7}{720} + \\cdots$$',
      },
      {
        label: '(d)',
        prompt: 'Use the alternating series error bound to show that $|f(1) - P_4(1)| < 0.05$, where $P_4(x)$ is the fourth-degree Taylor polynomial for $f$ about $x = 0$.',
        maxPoints: 3,
        rubric: [
          { points: 1, description: 'Identifies the first omitted term of the alternating series at x = 1', keywords: ['first omitted', 'next term', 'a_{n+1}'] },
          { points: 1, description: 'Computes |$(-1)^{3}$ · $1^{6}/6$!| = 1/720 ≈ 0.00139', keywords: ['1/720', '0.00139', '6!', '720'] },
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
    timeRecommendation: '~15 minutes',
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
          { points: 1, description: 'Sets up speed formula: √[$(dx/dt)^{2}$ + $(dy/dt)^{2}$]', keywords: ['speed', 'sqrt', '√', 'dx/dt', 'dy/dt'] },
          { points: 1, description: 'Evaluates at t = π/4: √[$9\\sin^{2}(\\pi /4)$ + $4\\cos^{2}(\\pi /4)$] = √[9/2 + 4/2] = $\\sqrt{13/2}$ ≈ 2.550', keywords: ['√(13/2)', '13/2', '2.55', 'sqrt(6.5)'] },
        ],
        sampleAnswer: '$$\\text{Speed} = \\sqrt{\\left(\\frac{dx}{dt}\\right)^2 + \\left(\\frac{dy}{dt}\\right)^2} = \\sqrt{9\\sin^2(t) + 4\\cos^2(t)}$$\n\nAt $t = \\frac{\\pi}{4}$:\n\n$$= \\sqrt{9 \\cdot \\frac{1}{2} + 4 \\cdot \\frac{1}{2}} = \\sqrt{\\frac{13}{2}} \\approx 2.550$$',
      },
      {
        label: '(c)',
        prompt: 'Set up, but do not evaluate, an integral expression for the total distance traveled by the particle for $0 \\le t \\le 2\\pi$.',
        maxPoints: 2,
        rubric: [
          { points: 1, description: 'Uses the arc length formula with correct integrand √[$(dx/dt)^{2}$ + $(dy/dt)^{2}$]', keywords: ['arc length', '∫', 'sqrt', '√'] },
          { points: 1, description: 'Writes $\\int_{0}^{2}\\pi$ $\\sqrt{9\\sin^{2}t + 4\\cos^{2}t}$ dt with correct limits', keywords: ['0', '2π', '9sin', '4cos', '2\\pi'] },
        ],
        sampleAnswer: '$$\\text{Distance} = \\int_0^{2\\pi} \\sqrt{\\left(\\frac{dx}{dt}\\right)^2 + \\left(\\frac{dy}{dt}\\right)^2}\\,dt = \\int_0^{2\\pi} \\sqrt{9\\sin^2(t) + 4\\cos^2(t)}\\,dt$$',
      },
      {
        label: '(d)',
        prompt: 'Find an equation of the tangent line to the curve at the point where $t = \\pi/6$.',
        maxPoints: 2,
        rubric: [
          { points: 1, description: 'Finds the point: x(π/6) = 3cos(π/6) = $3\\sqrt{3}/2$, y(π/6) = 2sin(π/6) = 1, and the slope dy/dx = −(2/3)cot(π/6) = $-(2/3)\\sqrt{3}$', keywords: ['3√3/2', 'y = 1', 'cot(π/6)', '-2√3/3'] },
          { points: 1, description: 'Writes the tangent line equation: y − 1 = $-(2\\sqrt{3}/3)(x - 3\\sqrt{3}/2)$', keywords: ['y - 1', 'y − 1', 'tangent line'] },
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
    timeRecommendation: '~15 minutes',
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
          { points: 1, description: 'At x = 1: series becomes $\\Sigma (-1)^{n}/n$ which converges by Alternating Series Test', keywords: ['x = 1', '(-1)^n/n', 'alternating', 'converges'] },
          { points: 1, description: 'At x = 5: series becomes Σ 1/n (harmonic) which diverges', keywords: ['x = 5', '1/n', 'harmonic', 'diverges'] },
        ],
        sampleAnswer: 'Open interval: $1 < x < 5$.\n\nAt $x = 1$: $\\sum \\frac{(-2)^n}{n \\cdot 2^n} = \\sum \\frac{(-1)^n}{n}$. This converges by the Alternating Series Test.\n\nAt $x = 5$: $\\sum \\frac{2^n}{n \\cdot 2^n} = \\sum \\frac{1}{n}$. This is the harmonic series, which diverges.\n\nInterval of convergence: $[1, 5)$.',
      },
      {
        label: '(c)',
        prompt: 'Find a closed-form expression for the function represented by this series.',
        maxPoints: 3,
        rubric: [
          { points: 1, description: 'Recognizes the series as related to −ln(1 − u) = Σ $u^{n}/n$ with u = (x−3)/2', keywords: ['ln', '-ln(1-u)', 'u = (x-3)/2'] },
          { points: 1, description: 'Writes f(x) = −ln(1 − (x−3)/2)', keywords: ['-ln', '1 - (x-3)/2'] },
          { points: 1, description: 'Simplifies to −ln((5−x)/2) or equivalently ln(2/(5−x))', keywords: ['ln(2/(5-x))', '-ln((5-x)/2)', 'simplif'] },
        ],
        sampleAnswer: 'Recall that $-\\ln(1 - u) = \\sum_{n=1}^{\\infty} \\frac{u^n}{n}$ for $|u| < 1$.\n\nLet $u = \\frac{x-3}{2}$:\n\n$$f(x) = \\sum_{n=1}^{\\infty} \\frac{\\left(\\frac{x-3}{2}\\right)^n}{n} = -\\ln\\left(1 - \\frac{x-3}{2}\\right) = -\\ln\\left(\\frac{5-x}{2}\\right) = \\ln\\left(\\frac{2}{5-x}\\right)$$',
      },
    ],
  },
]

// ─── Legacy "short" group (9 points each, ~15 minutes) ─────────────

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
          { points: 1, description: 'Sets up the polar area formula: A = $\\tfrac{1}{2} \\int_{0}^{2}\\pi$ $r^{2}$ dθ', keywords: ['1/2', '∫', 'r²', 'polar area'] },
          { points: 1, description: 'Expands $r^{2}$ = $(2 + 2\\cos \\theta )^{2}$ = 4 + 8cosθ + $4\\cos^{2}\\theta$', keywords: ['4 + 8cos', '4cos²', '(2 + 2cos)²'] },
          { points: 1, description: 'Uses $\\cos^{2}\\theta$ = (1 + cos2θ)/2 to simplify', keywords: ['cos²', '(1 + cos2θ)/2', 'half-angle', 'double angle'] },
          { points: 1, description: 'Integrates: $\\tfrac{1}{2} \\int_{0}^{2}\\pi$ (6 + 8cosθ + 2cos2θ) dθ', keywords: ['6 + 8cos', '2cos2θ', 'integrate'] },
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
          { points: 1, description: 'Evaluates at θ = π/3 with r = 3 and r\' = −2sin(π/3) = $-\\sqrt{3}$', keywords: ['θ = π/3', 'r = 3', '-√3', 'slope'] },
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
          { points: 1, description: 'Chooses u = x, dv = $e^{-x}$ dx correctly', keywords: ['u = x', 'dv = e^{-x}'] },
          { points: 1, description: 'Computes du = dx and v = $-e^{-x}$', keywords: ['du = dx', 'v = -e^{-x}'] },
          { points: 1, description: 'Applies IBP formula: uv − ∫v du = $-xe^{-x}$ + $\\int e^{-x}$ dx', keywords: ['uv', '-xe^{-x}', '∫e^{-x}'] },
          { points: 1, description: 'Obtains $-xe^{-x}$ − $e^{-x}$ + C = $-(x+1)e^{-x}$ + C', keywords: ['-xe^{-x} - e^{-x}', '-(x+1)e^{-x}', '+ C'] },
        ],
        sampleAnswer: 'Let $u = x$, $dv = e^{-x}\\,dx$. Then $du = dx$, $v = -e^{-x}$.\n\n$$\\int xe^{-x}\\,dx = -xe^{-x} - \\int (-e^{-x})\\,dx = -xe^{-x} + \\int e^{-x}\\,dx$$\n\n$$= -xe^{-x} - e^{-x} + C = -(x+1)e^{-x} + C$$',
      },
      {
        label: '(b)',
        prompt: 'Evaluate $\\displaystyle\\int_0^{\\infty} x e^{-x}\\,dx$ or show that it diverges.',
        maxPoints: 3,
        rubric: [
          { points: 1, description: 'Rewrites as a limit: lim_{b→∞} $\\int_{0}^{b}$ $xe^{-x}$ dx', keywords: ['lim', 'b → ∞', 'b→∞'] },
          { points: 1, description: 'Evaluates: [$-(x+1)e^{-x}$]$ {}_{0}^{b}$ = $-(b+1)e^{-b}$ + 1', keywords: ['-(b+1)e^{-b}', '+ 1', 'evaluate'] },
          { points: 1, description: 'Concludes: lim_{b→∞} $-(b+1)e^{-b}$ = 0 (by L\'Hôpital or dominance), so integral = 1', keywords: ['= 1', 'converges to 1', "L'Hôpital", 'e^{-b} → 0'] },
        ],
        sampleAnswer: '$$\\int_0^{\\infty} xe^{-x}\\,dx = \\lim_{b \\to \\infty} \\left[-(x+1)e^{-x}\\right]_0^{b}$$\n\n$$= \\lim_{b \\to \\infty} \\left[-(b+1)e^{-b} + (0+1)e^{0}\\right] = \\lim_{b \\to \\infty} \\left[-(b+1)e^{-b} + 1\\right]$$\n\nSince $\\lim_{b \\to \\infty} (b+1)e^{-b} = 0$ (exponential dominates polynomial), the integral converges to $\\boxed{1}$.',
      },
      {
        label: '(c)',
        prompt: 'Does $\\displaystyle\\int_0^{\\infty} x^2 e^{-x}\\,dx$ converge? If so, find its value using integration by parts and your result from part (b).',
        maxPoints: 2,
        rubric: [
          { points: 1, description: 'Applies IBP with u = $x^{2}$, dv = $e^{-x}$ dx to get $-x^{2}e^{-x}$ + $2\\int xe^{-x}$ dx', keywords: ['u = x²', '2∫xe^{-x}', 'integration by parts'] },
          { points: 1, description: 'Evaluates: [$-x^{2}e^{-x}$]$ {}_{0}^{\\infty}$ + 2(1) = 0 + 2 = 2', keywords: ['= 2', 'converges to 2'] },
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
        prompt: 'Find $\\lim_{t \\to \\infty} P(t)$. Is the graph of $P$ concave up or concave down at $t = 0$? Justify your answer.',
        maxPoints: 3,
        rubric: [
          { points: 1, description: 'Limit is 10: P(0) = 2 is between the equilibria 0 and 10, so P increases toward the carrying capacity 10', keywords: ['10', 'carrying capacity', 'approaches 10'] },
          { points: 1, description: 'Finds the second derivative: d²P/dt² = (0.5 − 0.1P) dP/dt, which is (0.5 − 0.2)(0.8) = 0.24 at t = 0', keywords: ['0.24', 'second derivative', '(0.5 - 0.1P)'] },
          { points: 1, description: 'Concludes concave up at t = 0 because d²P/dt² > 0 (equivalently P(0) = 2 < K/2 = 5 with P increasing)', keywords: ['concave up', '> 0', 'below 5'] },
        ],
        sampleAnswer: 'Since $0 < P(0) = 2 < 10$, $\\frac{dP}{dt} > 0$ and $P$ increases toward the carrying capacity, so $\\lim_{t \\to \\infty} P(t) = 10$.\n\nDifferentiate $\\frac{dP}{dt} = 0.5P - 0.05P^2$ with respect to $t$:\n\n$$\\frac{d^2P}{dt^2} = (0.5 - 0.1P)\\frac{dP}{dt}$$\n\nAt $t = 0$: $\\frac{dP}{dt} = 0.8$, so $\\frac{d^2P}{dt^2} = (0.5 - 0.2)(0.8) = 0.24 > 0$. The graph of $P$ is concave up at $t = 0$ (the population is still below $\\frac{K}{2} = 5$, where growth is fastest).',
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
          { points: 1, description: 'Computes limit: |$(n+1)^{2}/3^{n+1}$ · $3^{n}/n^{2}$| = $((n+1)/n)^{2}$ · 1/3 → 1/3', keywords: ['1/3', '(n+1)²/n²', 'limit'] },
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
          { points: 1, description: 'Notes ln(n)/n ≥ 1/n for n ≥ 3 or evaluates the integral $\\int_{1}^{\\infty}$ (ln x)/x dx = [$\\tfrac{1}{2} (\\ln x)^{2}$]$ {}_{1}^{\\infty}$ = ∞', keywords: ['≥ 1/n', '∫ (ln x)/x', '(ln x)²/2', '→ ∞'] },
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
          { points: 1, description: 'Verifies: $b_{n}$ = $1/\\sqrt{n}$ is decreasing and lim $b_{n}$ = 0', keywords: ['decreasing', 'lim', '= 0', '1/√n'] },
          { points: 1, description: 'Concludes the series converges (conditionally, not absolutely since $\\Sigma 1/\\sqrt{n}$ = $\\Sigma 1/n^{1/2}$ diverges as p = 1/2 ≤ 1)', keywords: ['converges', 'conditionally', 'p = 1/2'] },
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
          { points: 1, description: 'Substitutes bounds: [2ln|x+1| + ln|x+2|]$ {}_{0}^{1}$ = (2ln2 + ln3) − (2ln1 + ln2)', keywords: ['2ln2 + ln3', 'ln2', 'bounds'] },
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
          { points: 1, description: 'Writes $P_{3}(x)$ = 1 + x + $x^{2}/2$ + $x^{3}/6$', keywords: ['1 + x + x²/2', 'x³/6', 'x^3/6'] },
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
          { points: 1, description: 'Finds M = max|$f^{(4)}(z)$| on [0, 0.5] = $e^{0.5}$ ≤ 2 (or uses exact $e^{0.5}$)', keywords: ['f^{(4)}', 'e^{0.5}', 'M = e^{0.5}', 'M ≤ 2'] },
          { points: 1, description: 'Computes error bound: $2(0.5)^{4}/4$! = 2(1/16)/24 = 1/192 ≈ 0.0052', keywords: ['1/192', '0.0052', '(0.5)^4/4!', '0.005'] },
        ],
        sampleAnswer: 'The Lagrange error bound:\n\n$$|R_3(0.5)| \\le \\frac{M \\cdot |0.5|^4}{4!}$$\n\nwhere $M = \\max_{0 \\le z \\le 0.5} |f^{(4)}(z)| = e^{0.5} < 2$.\n\n$$|R_3(0.5)| \\le \\frac{2 \\cdot (0.5)^4}{24} = \\frac{2 \\cdot 0.0625}{24} = \\frac{0.125}{24} \\approx 0.0052$$',
      },
      {
        label: '(c)',
        prompt: 'Compare $P_3(0.5)$ to the actual value of $e^{0.5}$. Is the actual error within the Lagrange bound?',
        maxPoints: 3,
        rubric: [
          { points: 1, description: 'Computes $P_{3}(0.5)$ = 1 + 0.5 + 0.125 + 0.0208… = 1.6458…', keywords: ['1.6458', 'P₃(0.5)', '1.625'] },
          { points: 1, description: 'States $e^{0.5}$ ≈ 1.6487', keywords: ['1.6487', 'e^{0.5}'] },
          { points: 1, description: 'Actual error ≈ |1.6487 − 1.6458| ≈ 0.0029, which is less than 0.0052', keywords: ['0.0029', 'within', 'less than', '< 0.0052'] },
        ],
        sampleAnswer: '$P_3(0.5) = 1 + 0.5 + \\frac{0.25}{2} + \\frac{0.125}{6} = 1 + 0.5 + 0.125 + 0.02083 \\approx 1.6458$\n\n$e^{0.5} \\approx 1.6487$\n\nActual error: $|1.6487 - 1.6458| \\approx 0.0029$\n\nSince $0.0029 < 0.0052$ (our Lagrange bound), yes, the actual error is well within the bound.',
      },
    ],
  },
]

// ─── 2027 bank expansion (9 points each, ~15 minutes) ──────────────
// About 60% of the BC exam is AB content and real BC Section II includes AB-type
// questions, so six of these eight are AB families in a BC-level setting (ext-1 to
// ext-6); ext-7 (vector motion) and ext-8 (series) are BC-only. Part A families are
// calculator-active. Tables are KaTeX arrays (the page has no GFM table support).

const extFRQs: CalcBCFRQ[] = [
  {
    id: 'calcbc-ext-1',
    type: 'long',
    unit: 8,
    title: 'Rates In and Out: Home Battery',
    prompt: `A house has rooftop solar panels and a home battery. For $0 \\le t \\le 12$, where $t$ is the number of hours after 6:00 a.m., the panels charge the battery at a rate of $S(t)$ kilowatts (kilowatt-hours per hour), where $S$ is a differentiable function that is increasing on $0 \\le t \\le 7$. Selected values of $S(t)$ are given in the table.

$$\\begin{array}{c|c|c|c|c|c|c} t \\text{ (hours)} & 0 & 2 & 5 & 7 & 10 & 12 \\\\ \\hline S(t) \\text{ (kilowatts)} & 0 & 1.6 & 2.8 & 3.0 & 1.6 & 0.2 \\end{array}$$

Over the same period the house draws energy from the battery at a rate modeled by $C(t) = 0.9 + 0.3\\sin(0.6t)$ kilowatts. At time $t = 0$ the battery holds 5 kilowatt-hours of energy.`,
    totalPoints: 9,
    timeRecommendation: '~15 minutes',
    calculatorAllowed: true,
    parts: [
      {
        label: '(a)',
        prompt: `Use a left Riemann sum with the three subintervals indicated by the table to approximate $\\displaystyle\\int_0^{7} S(t)\\,dt$. Is this approximation an overestimate or an underestimate of $\\displaystyle\\int_0^{7} S(t)\\,dt$? Give a reason for your answer.`,
        maxPoints: 2,
        rubric: [
          { points: 1, description: `Left Riemann sum: $0(2) + 1.6(3) + 2.8(2) = 10.4$ kilowatt-hours`, keywords: ['10.4'] },
          { points: 1, description: `Underestimate, because $S$ is increasing on $[0, 7]$ (each left endpoint is the smallest value on its subinterval)`, keywords: ['underestimate', 'under estimate'] },
        ],
        sampleAnswer: `$$\\int_0^7 S(t)\\,dt \\approx S(0)(2) + S(2)(3) + S(5)(2) = 0 + 4.8 + 5.6 = 10.4 \\text{ kilowatt-hours}$$

Because $S$ is increasing on $0 \\le t \\le 7$, the left endpoint of each subinterval gives the smallest value of $S$ there, so the left Riemann sum is an **underestimate**.`,
      },
      {
        label: '(b)',
        prompt: `Must there be a time $t$, for $2 < t < 10$, at which $S'(t) = 0$? Justify your answer.`,
        maxPoints: 2,
        rubric: [
          { points: 1, description: `Uses the equal values $S(2) = S(10) = 1.6$, so the average rate of change on $[2, 10]$ is $0$`, keywords: ['s(2) = s(10)', 's(2)=s(10)', '(1.6 - 1.6)', '1.6 - 1.6', '= 0/8', 'both 1.6', 'both equal 1.6'] },
          { points: 1, description: `Yes, by the Mean Value Theorem (or Rolle's Theorem), because $S$ is differentiable and therefore continuous`, keywords: ['mean value theorem', 'mvt', "rolle"] },
        ],
        sampleAnswer: `$S$ is differentiable, so it is continuous on $[2, 10]$ and differentiable on $(2, 10)$.

$$\\frac{S(10) - S(2)}{10 - 2} = \\frac{1.6 - 1.6}{8} = 0$$

**Yes.** By the Mean Value Theorem, $S'(t) = 0$ for some $t$ with $2 < t < 10$.`,
      },
      {
        label: '(c)',
        prompt: `Use a trapezoidal sum with the five subintervals indicated by the table to approximate $\\displaystyle\\int_0^{12} S(t)\\,dt$. Use this approximation and the model $C$ to approximate the amount of energy in the battery at time $t = 12$.`,
        maxPoints: 3,
        rubric: [
          { points: 1, description: `Trapezoidal sum: $\\int_0^{12} S(t)\\,dt \\approx 1.6 + 6.6 + 5.8 + 6.9 + 1.8 = 22.7$`, keywords: ['22.7'] },
          { points: 1, description: `Integral of the model: $\\int_0^{12} C(t)\\,dt \\approx 10.996$`, keywords: ['10.996', '10.995'] },
          { points: 1, description: `Answer: $5 + 22.7 - 10.996 \\approx 16.704$ kilowatt-hours`, keywords: ['16.704', '16.70'] },
        ],
        sampleAnswer: `$$\\int_0^{12} S(t)\\,dt \\approx \\frac{0 + 1.6}{2}(2) + \\frac{1.6 + 2.8}{2}(3) + \\frac{2.8 + 3.0}{2}(2) + \\frac{3.0 + 1.6}{2}(3) + \\frac{1.6 + 0.2}{2}(2) = 22.7$$

$$\\int_0^{12} C(t)\\,dt \\approx 10.996$$

Energy in the battery at $t = 12$:
$$5 + \\int_0^{12} S(t)\\,dt - \\int_0^{12} C(t)\\,dt \\approx 5 + 22.7 - 10.996 = 16.704 \\text{ kilowatt-hours}$$`,
      },
      {
        label: '(d)',
        prompt: `Find $C'(9)$. Using correct units, interpret the meaning of $C'(9)$ in the context of the problem.`,
        maxPoints: 2,
        rubric: [
          { points: 1, description: `$C'(9) = 0.18\\cos(5.4) \\approx 0.114$`, keywords: ['0.114', '0.18cos(5.4)', '0.18 cos(5.4)'] },
          { points: 1, description: `Interpretation with units: at 3:00 p.m. ($t = 9$) the rate at which the house draws energy is increasing at about 0.114 kilowatt per hour`, keywords: ['kilowatts per hour', 'kilowatt per hour', 'kw per hour', 'kw/hr', 'kw/h'] },
        ],
        sampleAnswer: `$$C'(t) = 0.3(0.6)\\cos(0.6t) = 0.18\\cos(0.6t), \\qquad C'(9) = 0.18\\cos(5.4) \\approx 0.114$$

At 3:00 p.m. ($t = 9$), the rate at which the house draws energy from the battery is increasing at about 0.114 kilowatt per hour.`,
      },
    ],
  },
  {
    id: 'calcbc-ext-2',
    type: 'long',
    unit: 8,
    title: 'Particle Motion with Integration by Parts',
    prompt: `A particle moves along the $x$-axis so that its velocity at time $t \\ge 0$ is $v(t) = (1 - t)e^{-t/2}$. At time $t = 0$, the particle is at position $x = 1$.`,
    totalPoints: 9,
    timeRecommendation: '~15 minutes',
    calculatorAllowed: false,
    parts: [
      {
        label: '(a)',
        prompt: `At $t = 2$, is the particle speeding up or slowing down? Explain your reasoning using $v(2)$ and $a(2)$.`,
        maxPoints: 2,
        rubric: [
          { points: 1, description: `Acceleration: $a(t) = v'(t) = \\tfrac{1}{2}(t - 3)e^{-t/2}$, so $a(2) = -\\tfrac{1}{2e}$; and $v(2) = -\\tfrac{1}{e}$`, keywords: ['-1/(2e)', '-1/2e', '(t - 3)', '(t-3)', '-e^{-1}/2', 'a(2) = -1/(2e)'] },
          { points: 1, description: `Increasing, because $v(2)$ and $a(2)$ are both negative`, keywords: ['increasing'] },
        ],
        sampleAnswer: `$$a(t) = v'(t) = -e^{-t/2} - \\frac{1}{2}(1 - t)e^{-t/2} = \\frac{1}{2}(t - 3)e^{-t/2}$$

$v(2) = -e^{-1} < 0$ and $a(2) = -\\frac{1}{2}e^{-1} < 0$. Since velocity and acceleration have the same sign, the speed is **increasing** at $t = 2$.`,
      },
      {
        label: '(b)',
        prompt: `Find the position $x(t)$ of the particle for $t \\ge 0$.`,
        maxPoints: 3,
        rubric: [
          { points: 1, description: `Uses the initial condition: $x(t) = 1 + \\int_0^t (1 - s)e^{-s/2}\\,ds$`, keywords: ['1 + int', '1 + ∫', 'x(0) +', '1 + \\int'] },
          { points: 1, description: `Integration by parts ($u = 1 - s$, $dv = e^{-s/2}\\,ds$) gives the antiderivative $2(s + 1)e^{-s/2}$`, keywords: ['2(t + 1)e', '2(t+1)e', '2(s + 1)e', 'by parts', 'u = 1 - t', '(2t + 2)e', '(2s + 2)e', '(2t+2)e'] },
          { points: 1, description: `Answer: $x(t) = 2(t + 1)e^{-t/2} - 1$`, keywords: ['2(t + 1)e^{-t/2} - 1', '2(t+1)e^(-t/2) - 1', '2(t+1)e^{-t/2}-1', '2(t+1)e^(-t/2)-1', '(2t + 2)e', '(2t+2)e', '2te^(-t/2) + 2e^(-t/2) - 1'] },
        ],
        sampleAnswer: `Integration by parts with $u = 1 - t$, $dv = e^{-t/2}\\,dt$, so $du = -dt$ and $v = -2e^{-t/2}$:
$$\\int (1 - t)e^{-t/2}\\,dt = -2(1 - t)e^{-t/2} - \\int 2e^{-t/2}\\,dt = -2(1 - t)e^{-t/2} + 4e^{-t/2} + C = 2(t + 1)e^{-t/2} + C$$

$$x(t) = 1 + \\Big[2(s + 1)e^{-s/2}\\Big]_0^t = 1 + 2(t + 1)e^{-t/2} - 2 = 2(t + 1)e^{-t/2} - 1$$`,
      },
      {
        label: '(c)',
        prompt: `For $t \\ge 0$, find the greatest position of the particle (its rightmost point). Justify your answer.`,
        maxPoints: 2,
        rubric: [
          { points: 1, description: `$v(t) > 0$ for $0 \\le t < 1$ and $v(t) < 0$ for $t > 1$, so the particle is farthest right at $t = 1$`, keywords: ['t = 1', 'positive to negative', 'changes sign'] },
          { points: 1, description: `Answer: $x(1) = 4e^{-1/2} - 1$`, keywords: ['4e^{-1/2} - 1', '4e^(-1/2) - 1', '4/√e - 1', '4/sqrt(e) - 1', '1.426'] },
        ],
        sampleAnswer: `$v(t) = (1 - t)e^{-t/2}$ is positive for $0 \\le t < 1$ and negative for $t > 1$. The particle moves right until $t = 1$ and moves left for all $t > 1$, so its greatest position occurs at $t = 1$:
$$x(1) = 2(2)e^{-1/2} - 1 = 4e^{-1/2} - 1$$`,
      },
      {
        label: '(d)',
        prompt: `Find the total distance the particle travels for $t \\ge 0$.`,
        maxPoints: 2,
        rubric: [
          { points: 1, description: `Improper limit: $\\lim_{t \\to \\infty} x(t) = -1$ (or $\\int_1^{\\infty} v(t)\\,dt = -4e^{-1/2}$ as a limit)`, keywords: ['lim', '→ ∞', '->∞', 'infinity', 'approaches -1'] },
          { points: 1, description: `Answer: $\\left(x(1) - x(0)\\right) + \\left(x(1) - (-1)\\right) = 8e^{-1/2} - 2$`, keywords: ['8e^{-1/2} - 2', '8e^(-1/2) - 2', '8/√e - 2', '8/sqrt(e) - 2', '2.852', '2.85'] },
        ],
        sampleAnswer: `The particle moves right on $[0, 1]$ and left for $t > 1$.

Distance on $[0, 1]$: $x(1) - x(0) = (4e^{-1/2} - 1) - 1 = 4e^{-1/2} - 2$.

For $t \\ge 1$: $\\displaystyle\\lim_{b \\to \\infty} x(b) = \\lim_{b \\to \\infty}\\left(2(b + 1)e^{-b/2} - 1\\right) = -1$, so the particle moves left a distance $x(1) - (-1) = 4e^{-1/2}$.

$$\\text{Total distance} = (4e^{-1/2} - 2) + 4e^{-1/2} = 8e^{-1/2} - 2$$`,
      },
    ],
  },
  {
    id: 'calcbc-ext-3',
    type: 'long',
    unit: 8,
    title: 'Area, Volume & an Unbounded Region',
    prompt: `Let $f(x) = 2xe^{-x^2/4}$. Let $R$ be the region in the first quadrant bounded by the graph of $f$, the $x$-axis and the vertical line $x = 2$.`,
    totalPoints: 9,
    timeRecommendation: '~15 minutes',
    calculatorAllowed: true,
    parts: [
      {
        label: '(a)',
        prompt: `Find the area of $R$.`,
        maxPoints: 2,
        rubric: [
          { points: 1, description: `Integral: $\\int_0^2 2xe^{-x^2/4}\\,dx$`, keywords: ['int_0^2', '∫_0^2', '∫₀²', 'from 0 to 2', '\\int_0^2'] },
          { points: 1, description: `Answer: $4 - 4e^{-1} \\approx 2.528$`, keywords: ['2.528', '4 - 4/e', '4 - 4e^{-1}', '4 - 4e^(-1)'] },
        ],
        sampleAnswer: `$$\\text{Area} = \\int_0^2 2xe^{-x^2/4}\\,dx = \\Big[-4e^{-x^2/4}\\Big]_0^2 = 4 - 4e^{-1} \\approx 2.528$$`,
      },
      {
        label: '(b)',
        prompt: `Region $R$ is rotated about the line $y = 2$. What is the volume of the resulting solid?`,
        maxPoints: 3,
        rubric: [
          { points: 1, description: `Constant $\\pi$ and limits $0$ to $2$`, keywords: ['pi*integral from 0 to 2', 'π∫_0^2', 'pi ∫_0^2', 'π*integral', 'pi int_0^2', '\\pi\\int_0^2', 'π ∫ from 0 to 2'] },
          { points: 1, description: `Washer integrand: $2^2 - \\left(2 - f(x)\\right)^2$ (outer radius $2$, inner radius $2 - f(x)$; $f \\le f(\\sqrt{2}) \\approx 1.716 < 2$)`, keywords: ['2 - f(x)', '(2 - f', '4 - (2 -', '2^2 - (2'] },
          { points: 1, description: `Answer: volume $\\approx 20.142$`, keywords: ['20.142', '20.14'] },
        ],
        sampleAnswer: `On $[0, 2]$, $0 \\le f(x) < 2$, so the region lies below $y = 2$. Outer radius $2 - 0 = 2$, inner radius $2 - f(x)$:

$$V = \\pi\\int_0^2 \\left[2^2 - \\left(2 - f(x)\\right)^2\\right]dx \\approx 20.142$$`,
      },
      {
        label: '(c)',
        prompt: `The region $R$ is the base of a solid. For this solid, each cross section perpendicular to the $x$-axis is an isosceles right triangle with one leg in $R$. Find the volume of the solid.`,
        maxPoints: 2,
        rubric: [
          { points: 1, description: `Integral: $\\int_0^2 \\tfrac{1}{2}\\left(f(x)\\right)^2 dx$`, keywords: ['(1/2)(f(x))^2', '1/2 f(x)^2', '(1/2)f(x)^2', '½f(x)²', '(1/2)(2xe', 'f(x)^2/2'] },
          { points: 1, description: `Answer: volume $\\approx 1.851$`, keywords: ['1.851', '1.85'] },
        ],
        sampleAnswer: `An isosceles right triangle with legs of length $f(x)$ has area $\\frac{1}{2}f(x)^2$.

$$V = \\int_0^2 \\frac{1}{2}\\left(2xe^{-x^2/4}\\right)^2 dx \\approx 1.851$$`,
      },
      {
        label: '(d)',
        prompt: `Let $S$ be the unbounded region between the graph of $f$ and the $x$-axis for $x \\ge 0$. Is the area of $S$ finite? If so, find it. Show the work that leads to your answer.`,
        maxPoints: 2,
        rubric: [
          { points: 1, description: `Writes the improper integral as a limit: $\\lim_{b \\to \\infty}\\int_0^b 2xe^{-x^2/4}\\,dx = \\lim_{b \\to \\infty}\\left(4 - 4e^{-b^2/4}\\right)$`, keywords: ['lim', 'b → ∞', 'b->∞', 'b→∞', 'infinity'] },
          { points: 1, description: `Answer: finite, area $= 4$`, keywords: ['area is 4', 'area = 4', 'area of s is 4', 'equals 4', 'converges to 4', '= 4 square'] },
        ],
        sampleAnswer: `$$\\int_0^{\\infty} 2xe^{-x^2/4}\\,dx = \\lim_{b \\to \\infty}\\Big[-4e^{-x^2/4}\\Big]_0^b = \\lim_{b \\to \\infty}\\left(4 - 4e^{-b^2/4}\\right) = 4$$

Yes, the area of $S$ is finite: it equals $4$.`,
      },
    ],
  },
  {
    id: 'calcbc-ext-4',
    type: 'long',
    unit: 5,
    title: 'Graph of f′ with an Improper Tail',
    prompt: `The function $f$ is differentiable for $x \\ge -2$, and $f(2) = 1$. On the interval $-2 \\le x \\le 6$, the graph of $f'$, the derivative of $f$, consists of three pieces:

- a line segment from $(-2, -2)$ to $(0, 2)$, which crosses the $x$-axis at $x = -1$;
- for $0 \\le x \\le 4$, the upper half of the circle $(x - 2)^2 + (y - 2)^2 = 4$, which rises from $(0, 2)$ to $(2, 4)$ and falls back to $(4, 2)$;
- a line segment from $(4, 2)$ to $(6, -2)$, which crosses the $x$-axis at $x = 5$.

For $x \\ge 6$, $f'(x) = -2e^{6 - x}$.`,
    totalPoints: 9,
    timeRecommendation: '~15 minutes',
    calculatorAllowed: false,
    parts: [
      {
        label: '(a)',
        prompt: `On the open interval $-2 < x < 6$, find the $x$-coordinate of each point at which $f$ has a relative minimum or a relative maximum. Classify each one and justify your answers.`,
        maxPoints: 2,
        rubric: [
          { points: 1, description: `Relative minimum at $x = -1$, because $f'$ changes from negative to positive there`, keywords: ['minimum at -1', 'min at -1', 'minimum at x = -1', 'min at x = -1', 'x = -1 is a relative minimum', 'x = -1 is a minimum', 'minimum at x=-1'] },
          { points: 1, description: `Relative maximum at $x = 5$, because $f'$ changes from positive to negative there`, keywords: ['maximum at 5', 'max at 5', 'maximum at x = 5', 'max at x = 5', 'x = 5 is a relative maximum', 'x = 5 is a maximum', 'maximum at x=5'] },
        ],
        sampleAnswer: `$f'(x) = 0$ only at $x = -1$ and $x = 5$ on $(-2, 6)$ (on $[0, 4]$, $f' \\ge 2$).

- $f'$ changes from negative to positive at $x = -1$, so $f$ has a **relative minimum** at $x = -1$.
- $f'$ changes from positive to negative at $x = 5$, so $f$ has a **relative maximum** at $x = 5$.`,
      },
      {
        label: '(b)',
        prompt: `Find $f(6)$ and $f(-2)$.`,
        maxPoints: 3,
        rubric: [
          { points: 1, description: `Uses $f(2) = 1$ with definite integrals of $f'$: $f(6) = 1 + \\int_2^6 f'(x)\\,dx$ and $f(-2) = 1 - \\int_{-2}^{2} f'(x)\\,dx$`, keywords: ['f(2) +', 'f(2) -', '1 + (4 + π)', '1 - (4 + π)', '1 + 4 + π', '1 + 4 + pi', '1 - (0 + 4 + π)'] },
          { points: 1, description: `$f(6) = 1 + (4 + \\pi) + 0 = 5 + \\pi$`, keywords: ['5 + π', '5 + pi', 'π + 5', 'pi + 5', '5+π', '5+pi'] },
          { points: 1, description: `$f(-2) = 1 - \\left(0 + 4 + \\pi\\right) = -3 - \\pi$`, keywords: ['-3 - π', '-3 - pi', '-π - 3', '-pi - 3', '-3-π', '-3-pi'] },
        ],
        sampleAnswer: `On $[2, 4]$ the region under the graph of $f'$ is a $2 \\times 2$ rectangle plus a quarter circle of radius 2: $\\int_2^4 f'(x)\\,dx = 4 + \\pi$. By symmetry $\\int_0^2 f'(x)\\,dx = 4 + \\pi$. The triangles on $[4, 6]$ cancel ($1 - 1 = 0$), as do those on $[-2, 0]$ ($-1 + 1 = 0$).

$$f(6) = f(2) + \\int_2^6 f'(x)\\,dx = 1 + (4 + \\pi) + 0 = 5 + \\pi$$

$$f(-2) = f(2) - \\int_{-2}^{2} f'(x)\\,dx = 1 - (0 + 4 + \\pi) = -3 - \\pi$$`,
      },
      {
        label: '(c)',
        prompt: `Where on $-2 < x < 6$ does the graph of $f$ have a point of inflection? Give each $x$-coordinate and a reason.`,
        maxPoints: 2,
        rubric: [
          { points: 1, description: `Answer: $x = 2$ only`, keywords: ['x = 2', 'only at 2', 'only x = 2'] },
          { points: 1, description: `Justification: $f'$ changes from increasing to decreasing at $x = 2$; at $x = 0$ it is increasing on both sides and at $x = 4$ decreasing on both sides ($f''$ does not exist there, since the semicircle has vertical tangents), so there is no inflection point at either`, keywords: ['increasing to decreasing', "f'' changes sign", 'changes from increasing', "f' changes sign", 'positive to negative', 'increasing on', 'decreasing on'] },
        ],
        sampleAnswer: `$f'$ is increasing on $(-2, 0)$ and on $(0, 2)$, and decreasing on $(2, 4)$ and on $(4, 6)$.

The graph of $f$ changes concavity only where $f'$ changes from increasing to decreasing, at **$x = 2$**. At $x = 0$ and $x = 4$, $f''$ does not exist (the semicircle has vertical tangents there), but $f'$ is increasing on both sides of $x = 0$ and decreasing on both sides of $x = 4$, so the concavity of $f$ does not change there.`,
      },
      {
        label: '(d)',
        prompt: `Find $\\displaystyle\\lim_{x \\to \\infty} f(x)$. Show the work that leads to your answer.`,
        maxPoints: 2,
        rubric: [
          { points: 1, description: `Improper integral as a limit: $\\int_6^{\\infty} -2e^{6 - x}\\,dx = \\lim_{b \\to \\infty}\\left(2e^{6 - b} - 2\\right) = -2$`, keywords: ['lim', 'b → ∞', 'b→∞', '2e^{6', '2e^(6'] },
          { points: 1, description: `Answer: $\\lim_{x \\to \\infty} f(x) = f(6) - 2 = 3 + \\pi$`, keywords: ['3 + π', '3 + pi', 'π + 3', 'pi + 3', '3+π', '3+pi'] },
        ],
        sampleAnswer: `For $x \\ge 6$, $f(x) = f(6) + \\int_6^x -2e^{6 - t}\\,dt = 5 + \\pi + \\Big[2e^{6 - t}\\Big]_6^x = 5 + \\pi + 2e^{6 - x} - 2$.

$$\\lim_{x \\to \\infty} f(x) = 5 + \\pi - 2 + \\lim_{x \\to \\infty} 2e^{6 - x} = 3 + \\pi$$`,
      },
    ],
  },
  {
    id: 'calcbc-ext-5',
    type: 'long',
    unit: 7,
    title: 'Differential Equation: Slope Field, Euler\'s Method & Separation',
    prompt: `The function $y = f(x)$ is a solution of $\\dfrac{dy}{dx} = 2xe^{y}$ whose graph passes through the origin, so $f(0) = 0$.`,
    totalPoints: 9,
    timeRecommendation: '~15 minutes',
    calculatorAllowed: false,
    parts: [
      {
        label: '(a)',
        prompt: `Compute the slope $\\dfrac{dy}{dx}$ at $(-1, 0)$, $(0, 0)$, $(1, 0)$, $(-1, 1)$, $(0, 1)$ and $(1, 1)$. How would the slope-field segments at these six points look?`,
        maxPoints: 2,
        rubric: [
          { points: 1, description: `Slopes: $-2, 0, 2$ at $y = 0$ and $-2e, 0, 2e$ at $y = 1$`, keywords: ['2e', '-2e'] },
          { points: 1, description: `Segments: horizontal along $x = 0$; negative slopes at $x = -1$, positive at $x = 1$; steeper at $y = 1$ than at $y = 0$`, keywords: ['horizontal', 'steeper', 'shallower', 'gentler', 'half as steep'] },
        ],
        sampleAnswer: `- At $(-1, 0), (0, 0), (1, 0)$: slopes $-2, 0, 2$.
- At $(-1, 1), (0, 1), (1, 1)$: slopes $-2e, 0, 2e$ (about $-5.4, 0, 5.4$).

The segments at $x = 0$ are horizontal; at $x = -1$ they slant down and at $x = 1$ they slant up, and in the row $y = 1$ they are steeper (by a factor of $e$) than in the row $y = 0$.`,
      },
      {
        label: '(b)',
        prompt: `Approximate $f(0.5)$ by Euler's method with two equal steps beginning at the origin. Show each step.`,
        maxPoints: 2,
        rubric: [
          { points: 1, description: `First step ($\\Delta x = 0.25$): slope $0$ at $(0, 0)$, so $f(0.25) \\approx 0$`, keywords: ['f(0.25) ≈ 0', 'f(0.25) = 0', 'y(0.25) = 0', 'slope 0', '0 + 0(0.25)'] },
          { points: 1, description: `Second step: slope $2(0.25)e^{0} = 0.5$ at $(0.25, 0)$, so $f(0.5) \\approx 0 + 0.5(0.25) = 0.125$`, keywords: ['0.125', '1/8'] },
        ],
        sampleAnswer: `Step size $\\Delta x = 0.25$.

- At $(0, 0)$: $\\frac{dy}{dx} = 0$, so $f(0.25) \\approx 0 + 0(0.25) = 0$.
- At $(0.25, 0)$: $\\frac{dy}{dx} = 2(0.25)e^0 = 0.5$, so $f(0.5) \\approx 0 + 0.5(0.25) = 0.125$.

$$f(0.5) \\approx 0.125$$`,
      },
      {
        label: '(c)',
        prompt: `Use separation of variables to find $y = f(x)$, the solution with $f(0) = 0$.`,
        maxPoints: 4,
        rubric: [
          { points: 1, description: `Separates variables: $e^{-y}\\,dy = 2x\\,dx$ (a response with no separation of variables earns none of the points in (c) and (d))`, keywords: ['e^{-y} dy', 'e^(-y) dy', 'e^-y dy', 'e^(-y)dy', 'e^-ydy', 'dy/e^y', 'e^{-y}\\,dy'] },
          { points: 1, description: `Antiderivatives: $-e^{-y} = x^2 + C$`, keywords: ['-e^{-y}', '-e^(-y)', '-e^-y'] },
          { points: 1, description: `Uses the initial condition: $-e^{0} = 0 + C$, so $C = -1$`, keywords: ['c = -1', 'C = -1', '-1 = c', '-1 = 0 + c'] },
          { points: 1, description: `Solves for $y$: $y = -\\ln(1 - x^2)$`, keywords: ['-ln(1 - x^2)', '-ln(1-x^2)', '-ln(1 - x²)', '-ln(1-x²)', 'ln(1/(1 - x^2))', '-\\ln(1 - x^2)'] },
        ],
        sampleAnswer: `Separate variables: $e^{-y}\\,dy = 2x\\,dx$.

Integrate: $-e^{-y} = x^2 + C$.

Initial condition $f(0) = 0$: $-1 = 0 + C$, so $C = -1$ and $-e^{-y} = x^2 - 1$, that is, $e^{-y} = 1 - x^2$.

$$y = f(x) = -\\ln(1 - x^2)$$`,
      },
      {
        label: '(d)',
        prompt: `State the domain of the particular solution found in part (c).`,
        maxPoints: 1,
        rubric: [
          { points: 1, description: `Domain: $-1 < x < 1$ (or the domain consistent with the solution found in (c), which must contain $x = 0$)`, keywords: ['-1 < x < 1', '(-1, 1)', '(-1,1)', '|x| < 1'] },
        ],
        sampleAnswer: `The solution requires $1 - x^2 > 0$, and it must contain the initial point $x = 0$. The domain is $-1 < x < 1$.`,
      },
    ],
  },
  {
    id: 'calcbc-ext-6',
    type: 'long',
    unit: 6,
    title: 'Table of Values: Trapezoids, Parts & the MVT',
    prompt: `The function $f$ is twice differentiable for all real numbers. Selected values of $f$ and its derivative $f'$ are given in the table.

$$\\begin{array}{c|c|c|c|c|c} x & 1 & 3 & 4 & 7 & 9 \\\\ \\hline f(x) & 2 & 6 & 5 & 11 & 14 \\\\ \\hline f'(x) & 3 & 1 & -2 & 3 & 1 \\end{array}$$`,
    totalPoints: 9,
    timeRecommendation: '~15 minutes',
    calculatorAllowed: false,
    parts: [
      {
        label: '(a)',
        prompt: `Use a trapezoidal sum with the four subintervals indicated by the table to approximate $\\displaystyle\\int_1^9 f(x)\\,dx$.`,
        maxPoints: 2,
        rubric: [
          { points: 1, description: `Trapezoidal sum set up with the unequal widths $2, 1, 3, 2$: $\\tfrac{2+6}{2}(2) + \\tfrac{6+5}{2}(1) + \\tfrac{5+11}{2}(3) + \\tfrac{11+14}{2}(2)$`, keywords: ['(2+6)/2', '(2 + 6)/2', '8 + 5.5 + 24 + 25'] },
          { points: 1, description: `Answer: $62.5$`, keywords: ['62.5', '125/2'] },
        ],
        sampleAnswer: `$$\\int_1^9 f(x)\\,dx \\approx \\frac{2 + 6}{2}(2) + \\frac{6 + 5}{2}(1) + \\frac{5 + 11}{2}(3) + \\frac{11 + 14}{2}(2) = 8 + 5.5 + 24 + 25 = 62.5$$`,
      },
      {
        label: '(b)',
        prompt: `Evaluate $\\displaystyle\\int_1^9 x\\,f''(x)\\,dx$. Show the work that leads to your answer.`,
        maxPoints: 3,
        rubric: [
          { points: 1, description: `Integration by parts with $u = x$, $dv = f''(x)\\,dx$: $\\Big[x\\,f'(x)\\Big]_1^9 - \\int_1^9 f'(x)\\,dx$`, keywords: ["xf'(x)", "x f'(x)", 'by parts', 'u = x'] },
          { points: 1, description: `Evaluates both pieces from the table: $9f'(9) - 1f'(1) = 6$ and $\\int_1^9 f'(x)\\,dx = f(9) - f(1) = 12$`, keywords: ['9(1) - 1(3)', '9 - 3', 'f(9) - f(1)', '14 - 2', '= 12'] },
          { points: 1, description: `Answer: $6 - 12 = -6$`, keywords: ['-6'] },
        ],
        sampleAnswer: `Let $u = x$ and $dv = f''(x)\\,dx$, so $du = dx$ and $v = f'(x)$:

$$\\int_1^9 x\\,f''(x)\\,dx = \\Big[x\\,f'(x)\\Big]_1^9 - \\int_1^9 f'(x)\\,dx = \\left(9f'(9) - 1\\cdot f'(1)\\right) - \\left(f(9) - f(1)\\right)$$

$$= (9 - 3) - (14 - 2) = 6 - 12 = -6$$`,
      },
      {
        label: '(c)',
        prompt: `Evaluate $\\displaystyle\\int_1^2 f'(3x - 2)\\,dx$. Show the work that leads to your answer.`,
        maxPoints: 2,
        rubric: [
          { points: 1, description: `Substitution $u = 3x - 2$, $du = 3\\,dx$, limits $u = 1$ to $u = 4$: $\\tfrac{1}{3}\\int_1^4 f'(u)\\,du$`, keywords: ['u = 3x - 2', '1/3', 'du = 3'] },
          { points: 1, description: `Answer: $\\tfrac{1}{3}\\left(f(4) - f(1)\\right) = \\tfrac{1}{3}(5 - 2) = 1$`, keywords: ['(5 - 2)/3', '1/3(5 - 2)', '(1/3)(5 - 2)', '(1/3)(3)', 'equals 1', 'integral = 1', 'integral is 1'] },
        ],
        sampleAnswer: `Let $u = 3x - 2$, so $du = 3\\,dx$; $x = 1 \\Rightarrow u = 1$ and $x = 2 \\Rightarrow u = 4$.

$$\\int_1^2 f'(3x - 2)\\,dx = \\frac{1}{3}\\int_1^4 f'(u)\\,du = \\frac{1}{3}\\left(f(4) - f(1)\\right) = \\frac{1}{3}(5 - 2) = 1$$`,
      },
      {
        label: '(d)',
        prompt: `Explain why there must be a value $c$, for $1 < c < 7$, such that $f''(c) = 0$.`,
        maxPoints: 2,
        rubric: [
          { points: 1, description: `Applies the reasoning to $f'$: $f'$ is differentiable (so continuous) because $f$ is twice differentiable, and $f'(1) = f'(7) = 3$`, keywords: ["f'(1) = f'(7)", "f'(7) = f'(1)", "f'(1)=f'(7)", '(3 - 3)', '3 - 3', 'both equal 3', 'both 3', "= f'(7)", "f'(1) = 3", "f'(7) = 3"] },
          { points: 1, description: `Concludes by the Mean Value Theorem (or Rolle's Theorem) applied to $f'$: $f''(c) = \\dfrac{f'(7) - f'(1)}{7 - 1} = 0$ for some $c$ in $(1, 7)$`, keywords: ['mean value theorem', 'mvt', 'rolle'] },
        ],
        sampleAnswer: `Because $f$ is twice differentiable, $f'$ is differentiable, and therefore continuous, on $[1, 7]$.

$$\\frac{f'(7) - f'(1)}{7 - 1} = \\frac{3 - 3}{6} = 0$$

By the Mean Value Theorem applied to $f'$, there is a value $c$ with $1 < c < 7$ such that $f''(c) = 0$.`,
      },
    ],
  },
  {
    id: 'calcbc-ext-7',
    type: 'long',
    unit: 9,
    title: 'Motion in the Plane: Least x-Coordinate',
    prompt: `A particle moves in the $xy$-plane so that, for $0 \\le t \\le 4$,
$$\\frac{dx}{dt} = \\ln(t^2 + 1) - 1 \\quad\\text{and}\\quad \\frac{dy}{dt} = 2\\sin(1.5t).$$
At time $t = 0$ the particle is at the point $(2, -1)$.`,
    totalPoints: 9,
    timeRecommendation: '~15 minutes',
    calculatorAllowed: true,
    parts: [
      {
        label: '(a)',
        prompt: `At $t = 2$, what is the slope of the tangent line to the particle's path? Also state whether the particle is heading left or right and whether it is heading up or down at that moment, with a reason for each.`,
        maxPoints: 2,
        rubric: [
          { points: 1, description: `Slope: $\\dfrac{dy/dt}{dx/dt}\\Big|_{t=2} = \\dfrac{2\\sin 3}{\\ln 5 - 1} \\approx 0.463$`, keywords: ['0.463', '0.4631', '2sin3/(ln5 - 1)', '2sin(3)/(ln(5) - 1)'] },
          { points: 1, description: `Directions with reasons: $x'(2) = \\ln 5 - 1 \\approx 0.609 > 0$, so moving right; $y'(2) = 2\\sin 3 \\approx 0.282 > 0$, so moving up`, keywords: ["x'(2) > 0", "y'(2) > 0", '0.609', '0.282', 'right and up', 'moving right and moving up'] },
        ],
        sampleAnswer: `$x'(2) = \\ln 5 - 1 \\approx 0.609$ and $y'(2) = 2\\sin 3 \\approx 0.282$.

$$\\frac{dy}{dx}\\Big|_{t=2} = \\frac{0.282}{0.609} \\approx 0.463$$

Since $x'(2) > 0$ the particle is moving to the right, and since $y'(2) > 0$ it is moving up.`,
      },
      {
        label: '(b)',
        prompt: `Find the least $x$-coordinate of the particle for $0 \\le t \\le 4$. Justify your answer.`,
        maxPoints: 3,
        rubric: [
          { points: 1, description: `Sets $x'(t) = 0$: $\\ln(t^2 + 1) = 1$, so $t = \\sqrt{e - 1} \\approx 1.311$`, keywords: ['1.311', '1.310', 'sqrt(e - 1)', '√(e - 1)', '√(e-1)'] },
          { points: 1, description: `Position there: $x(1.311) = 2 + \\int_0^{1.311} x'(t)\\,dt \\approx 1.217$ (and $x(4) \\approx 3.984$)`, keywords: ['1.217', '1.216', '2 + ∫'] },
          { points: 1, description: `Justification and answer: $x' < 0$ on $(0, 1.311)$ and $x' > 0$ on $(1.311, 4)$ (or candidates $x(0) = 2$, $x(1.311) \\approx 1.217$, $x(4) \\approx 3.984$), so the least $x$-coordinate is about $1.217$`, keywords: ['negative to positive', 'candidates', '3.984', '3.98', 'least'] },
        ],
        sampleAnswer: `$x'(t) = \\ln(t^2 + 1) - 1 = 0$ when $t^2 + 1 = e$, that is, $t = \\sqrt{e - 1} \\approx 1.311$. $x'(t) < 0$ for $0 \\le t < 1.311$ and $x'(t) > 0$ for $1.311 < t \\le 4$.

$$x(1.311) = 2 + \\int_0^{1.311}\\left(\\ln(t^2 + 1) - 1\\right)dt \\approx 1.217$$

Candidates: $x(0) = 2$, $x(1.311) \\approx 1.217$, $x(4) = 2 + \\int_0^4 x'(t)\\,dt \\approx 3.984$.

The least $x$-coordinate is about $1.217$.`,
      },
      {
        label: '(c)',
        prompt: `Compute the total distance the particle covers during $0 \\le t \\le 4$.`,
        maxPoints: 2,
        rubric: [
          { points: 1, description: `Integral of speed: $\\int_0^4 \\sqrt{\\left(x'(t)\\right)^2 + \\left(y'(t)\\right)^2}\\,dt$`, keywords: ['(ln(t^2 + 1) - 1)^2', '(ln(t^2+1) - 1)^2', '(ln(t²+1)-1)²', '(2sin(1.5t))^2', '4sin^2(1.5t)', 'sqrt((x'] },
          { points: 1, description: `Answer: approximately $6.760$ (6.759 truncated is also accepted)`, keywords: ['6.759', '6.760', '6.76'] },
        ],
        sampleAnswer: `$$\\text{Distance} = \\int_0^4 \\sqrt{\\left(\\ln(t^2 + 1) - 1\\right)^2 + \\left(2\\sin(1.5t)\\right)^2}\\,dt \\approx 6.760$$`,
      },
      {
        label: '(d)',
        prompt: `At $t = 3$, is the particle speeding up or slowing down? Explain using its velocity and acceleration vectors.`,
        maxPoints: 2,
        rubric: [
          { points: 1, description: `Velocity $\\langle 1.303, -1.955\\rangle$ and acceleration $\\langle x''(3), y''(3)\\rangle = \\langle 0.6, -0.632\\rangle$ at $t = 3$ (or the derivative of speed at $t = 3 \\approx 0.859$)`, keywords: ["x''(3)", "y''(3)", '3cos(4.5)', '-0.632', '0.859', '2.018'] },
          { points: 1, description: `Increasing, because $v(3)\\cdot a(3) \\approx 2.018 > 0$ (equivalently, the derivative of speed is positive)`, keywords: ['increasing'] },
        ],
        sampleAnswer: `At $t = 3$: velocity $\\langle x'(3), y'(3)\\rangle = \\langle \\ln 10 - 1, 2\\sin 4.5\\rangle \\approx \\langle 1.303, -1.955\\rangle$ and acceleration $\\langle x''(3), y''(3)\\rangle = \\left\\langle \\frac{6}{10}, 3\\cos 4.5\\right\\rangle \\approx \\langle 0.6, -0.632\\rangle$.

$$\\frac{d}{dt}(\\text{speed})\\Big|_{t=3} = \\frac{x'(3)x''(3) + y'(3)y''(3)}{\\text{speed}(3)} \\approx \\frac{2.018}{2.349} \\approx 0.859 > 0$$

The speed is **increasing** at $t = 3$.`,
      },
    ],
  },
  {
    id: 'calcbc-ext-8',
    type: 'long',
    unit: 10,
    title: 'Maclaurin Series from a Geometric Series',
    prompt: `The function $f$ satisfies $f(0) = 0$, and its derivative is $f'(x) = \\dfrac{3}{3 + x^2}$ for all real numbers $x$. The Maclaurin series for $f$ converges to $f(x)$ on its interval of convergence.`,
    totalPoints: 9,
    timeRecommendation: '~15 minutes',
    calculatorAllowed: false,
    parts: [
      {
        label: '(a)',
        prompt: `Give the first four nonzero terms of the Maclaurin series for $f'(x)$, together with its general term.`,
        maxPoints: 2,
        rubric: [
          { points: 1, description: `First four terms: $1 - \\dfrac{x^2}{3} + \\dfrac{x^4}{9} - \\dfrac{x^6}{27}$`, keywords: ['x^2/3', 'x^4/9', 'x^6/27', 'x²/3'] },
          { points: 1, description: `General term: $\\dfrac{(-1)^n x^{2n}}{3^n}$`, keywords: ['(-1)^n x^{2n}/3^n', '(-1)^n x^(2n)/3^n', '(-1)^n x^(2n)', '(-x^2/3)^n', '(-x²/3)^n', '(-1)^n x^{2n}'] },
        ],
        sampleAnswer: `$f'(x) = \\dfrac{3}{3 + x^2} = \\dfrac{1}{1 - \\left(-\\frac{x^2}{3}\\right)}$, a geometric series with ratio $-\\dfrac{x^2}{3}$:

$$f'(x) = 1 - \\frac{x^2}{3} + \\frac{x^4}{9} - \\frac{x^6}{27} + \\cdots + \\frac{(-1)^n x^{2n}}{3^n} + \\cdots$$`,
      },
      {
        label: '(b)',
        prompt: `Integrate your series from part (a) to give the first four nonzero terms of the Maclaurin series for $f(x)$, together with its general term.`,
        maxPoints: 2,
        rubric: [
          { points: 1, description: `First four terms (integrating term by term with $f(0) = 0$): $x - \\dfrac{x^3}{9} + \\dfrac{x^5}{45} - \\dfrac{x^7}{189}$`, keywords: ['x^3/9', 'x^5/45', 'x^7/189', 'x³/9'] },
          { points: 1, description: `General term: $\\dfrac{(-1)^n x^{2n+1}}{(2n+1)3^n}$`, keywords: ['(2n+1)3^n', '(2n + 1)3^n', '(2n+1)·3^n', '(2n+1) 3^n', 'x^{2n+1}', 'x^(2n+1)'] },
        ],
        sampleAnswer: `Integrate term by term from $0$ to $x$ (the constant is $0$ because $f(0) = 0$):

$$f(x) = x - \\frac{x^3}{9} + \\frac{x^5}{45} - \\frac{x^7}{189} + \\cdots + \\frac{(-1)^n x^{2n+1}}{(2n+1)3^n} + \\cdots$$`,
      },
      {
        label: '(c)',
        prompt: `For which values of $x$ does the Maclaurin series for $f$ converge? Determine its interval of convergence, checking both endpoints.`,
        maxPoints: 3,
        rubric: [
          { points: 1, description: `Ratio test: $\\lim_{n\\to\\infty}\\left|\\dfrac{x^{2n+3}}{(2n+3)3^{n+1}}\\cdot\\dfrac{(2n+1)3^n}{x^{2n+1}}\\right| = \\dfrac{x^2}{3} < 1$, so $|x| < \\sqrt{3}$`, keywords: ['ratio test', 'x^2/3', 'x²/3', '√3', 'sqrt(3)', 'sqrt3'] },
          { points: 1, description: `Endpoints: at $x = \\pm\\sqrt{3}$ the series is $\\pm\\sqrt{3}\\sum \\dfrac{(-1)^n}{2n+1}$, which converges by the Alternating Series Test (terms decrease to $0$)`, keywords: ['alternating series test', 'alternating series', 'ast', '1/(2n+1)'] },
          { points: 1, description: `Interval of convergence: $-\\sqrt{3} \\le x \\le \\sqrt{3}$`, keywords: ['[-√3, √3]', '[-sqrt(3), sqrt(3)]', '-√3 ≤ x ≤ √3', '-sqrt3 <= x <= sqrt3', '[-sqrt3, sqrt3]'] },
        ],
        sampleAnswer: `Ratio test:
$$\\lim_{n \\to \\infty}\\left|\\frac{x^{2n+3}}{(2n+3)3^{n+1}}\\cdot\\frac{(2n+1)3^n}{x^{2n+1}}\\right| = \\frac{x^2}{3}\\lim_{n \\to \\infty}\\frac{2n+1}{2n+3} = \\frac{x^2}{3}$$
The series converges when $\\frac{x^2}{3} < 1$, that is, $-\\sqrt{3} < x < \\sqrt{3}$.

At $x = \\sqrt{3}$: $\\dfrac{(-1)^n(\\sqrt{3})^{2n+1}}{(2n+1)3^n} = \\dfrac{(-1)^n\\sqrt{3}}{2n+1}$, so the series is $\\sqrt{3}\\sum\\frac{(-1)^n}{2n+1}$. The terms alternate in sign, decrease in absolute value and approach $0$, so it converges by the Alternating Series Test. At $x = -\\sqrt{3}$ the series is the negative of this one, so it also converges.

Interval of convergence: $-\\sqrt{3} \\le x \\le \\sqrt{3}$.`,
      },
      {
        label: '(d)',
        prompt: `Use the first two nonzero terms of the Maclaurin series for $f$ to approximate $f(1)$. Use the alternating series error bound to show that this approximation differs from $f(1)$ by less than $\\dfrac{1}{40}$.`,
        maxPoints: 2,
        rubric: [
          { points: 1, description: `Approximation: $f(1) \\approx 1 - \\tfrac{1}{9} = \\tfrac{8}{9}$`, keywords: ['8/9', '0.888', '0.889', '1 - 1/9'] },
          { points: 1, description: `Error bound: the series for $f(1)$ alternates with terms decreasing to $0$, so the error is at most the first omitted term, $\\tfrac{1}{45} < \\tfrac{1}{40}$`, keywords: ['1/45', '0.022'] },
        ],
        sampleAnswer: `$$f(1) \\approx 1 - \\frac{1}{9} = \\frac{8}{9}$$

The series $f(1) = 1 - \\frac{1}{9} + \\frac{1}{45} - \\frac{1}{189} + \\cdots$ alternates, and its terms $\\frac{1}{(2n+1)3^n}$ decrease in absolute value to $0$. By the alternating series error bound,
$$\\left|f(1) - \\frac{8}{9}\\right| \\le \\frac{1}{45} < \\frac{1}{40}$$`,
      },
    ],
  },
]

// ─── Combined export ───────────────────────────────────────────────

export const apCalcBCFRQs: CalcBCFRQ[] = [...longFRQs, ...shortFRQs, ...extFRQs]

export function getCalcBCFRQs(): CalcBCFRQ[] {
  return apCalcBCFRQs
}

export function getLongFRQs(): CalcBCFRQ[] {
  return longFRQs
}

export function getShortFRQs(): CalcBCFRQ[] {
  return shortFRQs
}

export function getCalculatorFRQs(pool: CalcBCFRQ[] = apCalcBCFRQs): CalcBCFRQ[] {
  return pool.filter((q) => q.calculatorAllowed)
}

export function getNoCalculatorFRQs(pool: CalcBCFRQ[] = apCalcBCFRQs): CalcBCFRQ[] {
  return pool.filter((q) => !q.calculatorAllowed)
}

/**
 * Timed simulation that respects the calculator split: Part A is 2 calculator-active
 * FRQs (30 min), Part B is 4 no-calculator FRQs (60 min). 54 points in 90 minutes.
 */
export function generateFullExamFRQs(pool: CalcBCFRQ[] = apCalcBCFRQs): {
  partA: CalcBCFRQ[]
  partB: CalcBCFRQ[]
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
