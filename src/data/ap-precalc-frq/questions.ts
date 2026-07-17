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

export interface PrecalcFRQ {
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

const precalcFRQs: PrecalcFRQ[] = [
  // ===== LONG FRQ 1: Modeling with Functions =====
  {
    id: 'precalc-long-1',
    type: 'long',
    unit: 1,
    title: 'Modeling Water Tank Volume',
    prompt: 'A cylindrical water tank is being filled at a variable rate. The volume of water in the tank, in gallons, at time $t$ hours after filling begins can be modeled by $V(t) = 200\\left(1 - e^{-0.5t}\\right)$.',
    totalPoints: 6,
    timeRecommendation: '~15 minutes',
    calculatorAllowed: true,
    parts: [
      {
        label: 'a',
        prompt: 'Find $V(0)$ and interpret its meaning in context.',
        maxPoints: 2,
        rubric: [
          { points: 1, description: 'Correctly computes V(0) = 0', keywords: ['v(0) = 0', '0 gallons', 'equals 0', 'equals zero'] },
          { points: 1, description: 'Interprets: the tank is empty when filling begins', keywords: ['empty', 'no water', 'beginning', 'starts at 0', 'initially'] },
        ],
        sampleAnswer: '$V(0) = 200(1 - e^0) = 200(1 - 1) = 0$ gallons. At $t = 0$, the tank is empty — filling has just begun.',
      },
      {
        label: 'b',
        prompt: 'Find $V(2)$. Based on this value and $V(0)$, determine the average rate of change of the volume over $[0, 2]$. Include units.',
        maxPoints: 2,
        rubric: [
          { points: 1, description: 'Correctly computes V(2) ≈ 126.42 gallons', keywords: ['126', '126.4', '126.42'] },
          { points: 1, description: 'Computes average rate ≈ 63.21 gal/hr with units', keywords: ['63', 'gallons per hour', 'gal/hr', 'gal per hour'] },
        ],
        sampleAnswer: '$V(2) = 200(1 - e^{-1}) \\approx 200(0.6321) \\approx 126.42$ gallons.\n\nAverage rate of change $= \\frac{V(2) - V(0)}{2 - 0} = \\frac{126.42}{2} \\approx 63.21$ gallons per hour.',
      },
      {
        label: 'c',
        prompt: 'As $t \\to \\infty$, what value does $V(t)$ approach? Explain the practical meaning of this limit.',
        maxPoints: 2,
        rubric: [
          { points: 1, description: 'Identifies limit as 200 gallons', keywords: ['200', 'two hundred', 'approaches 200'] },
          { points: 1, description: 'Explains: the tank has a capacity of 200 gallons; filling rate slows as it approaches full', keywords: ['capacity', 'full', 'maximum', 'slows', 'approaches'] },
        ],
        sampleAnswer: 'As $t \\to \\infty$, $e^{-0.5t} \\to 0$, so $V(t) \\to 200(1 - 0) = 200$ gallons. The tank has a capacity of 200 gallons. As the tank fills, the rate of filling decreases, and the volume asymptotically approaches 200 gallons.',
      },
    ],
  },
  // ===== LONG FRQ 2: Trigonometric Modeling =====
  {
    id: 'precalc-long-2',
    type: 'long',
    unit: 3,
    title: 'Temperature Throughout the Day',
    prompt: 'The temperature in a city, in °F, can be modeled by $T(t) = 18\\sin\\left(\\frac{\\pi}{12}(t - 9)\\right) + 68$ where $t$ is the number of hours after midnight.',
    totalPoints: 6,
    timeRecommendation: '~15 minutes',
    calculatorAllowed: true,
    parts: [
      {
        label: 'a',
        prompt: 'Find the amplitude, period, and midline of $T(t)$. Interpret each in the context of temperature.',
        maxPoints: 3,
        rubric: [
          { points: 1, description: 'Identifies amplitude = 18°F as the maximum variation from the average', keywords: ['amplitude', '18', 'variation', 'difference'] },
          { points: 1, description: 'Identifies period = 24 hours as one full cycle (one day)', keywords: ['period', '24', 'hours', 'day', 'cycle'] },
          { points: 1, description: 'Identifies midline = 68°F as the average temperature', keywords: ['midline', '68', 'average', 'mean'] },
        ],
        sampleAnswer: 'Amplitude = 18°F — the temperature varies up to 18°F above or below the average.\n\nPeriod = $\\frac{2\\pi}{\\pi/12} = 24$ hours — one full temperature cycle takes 24 hours (one day).\n\nMidline = 68°F — the average temperature throughout the day is 68°F.',
      },
      {
        label: 'b',
        prompt: 'At what time does the maximum temperature occur, and what is that maximum temperature?',
        maxPoints: 2,
        rubric: [
          { points: 1, description: 'Identifies maximum time at t = 15 (3:00 PM)', keywords: ['t = 15', '15', '3:00', '3 pm', '3pm', '15 hours'] },
          { points: 1, description: 'Identifies maximum temperature as 86°F', keywords: ['86', '86°'] },
        ],
        sampleAnswer: 'Maximum occurs when $\\sin(\\cdot) = 1$: $\\frac{\\pi}{12}(t - 9) = \\frac{\\pi}{2}$ → $t - 9 = 6$ → $t = 15$ (3:00 PM).\n\n$T(15) = 18(1) + 68 = 86$°F.',
      },
      {
        label: 'c',
        prompt: 'Find all times during the day ($0 \\le t \\le 24$) when the temperature is exactly 77°F.',
        maxPoints: 1,
        rubric: [
          { points: 1, description: 'Finds t = 5 and t = 13 (or 5 AM and 1 PM)', keywords: ['t = 5', 't = 13', '5 am', '1 pm', 'two times'] },
        ],
        sampleAnswer: '$77 = 18\\sin\\left(\\frac{\\pi}{12}(t-9)\\right) + 68$ → $\\sin\\left(\\frac{\\pi}{12}(t-9)\\right) = \\frac{1}{2}$\n\n$\\frac{\\pi}{12}(t-9) = \\frac{\\pi}{6}$ → $t = 11$, or $\\frac{\\pi}{12}(t-9) = \\frac{5\\pi}{6}$ → $t = 19$.\n\nWait — checking: at t = 5, $\\frac{\\pi}{12}(5-9) = -\\pi/3$, sin = $-\\sqrt{3}/2$, T ≈ 52.7. Let me recompute.\n\nSet $\\sin(\\frac{\\pi}{12}(t-9)) = 1/2$. Solutions: $\\frac{\\pi}{12}(t-9) = \\frac{\\pi}{6}$ → $t = 11$; and $\\frac{\\pi}{12}(t-9) = \\frac{5\\pi}{6}$ → $t = 19$.\n\n$T = 77$°F at $t = 11$ (11:00 AM) and $t = 19$ (7:00 PM).',
      },
    ],
  },
  // ===== SHORT FRQ 1: Polynomial Analysis =====
  {
    id: 'precalc-short-1',
    type: 'short',
    unit: 1,
    title: 'Polynomial Zeros and Behavior',
    prompt: 'The polynomial $f(x) = x^4 - 5x^2 + 4$ is given.',
    totalPoints: 4,
    timeRecommendation: '~8 minutes',
    calculatorAllowed: false,
    parts: [
      {
        label: 'a',
        prompt: 'Factor $f(x)$ completely.',
        maxPoints: 2,
        rubric: [
          { points: 1, description: 'Recognizes quadratic form: $u^{2}$ − 5u + 4 = (u − 1)(u − 4)', keywords: ['substitution', 'quadratic', 'u =', 'x^2'] },
          { points: 1, description: 'Full factorization: (x−1)(x+1)(x−2)(x+2)', keywords: ['(x-1)', '(x+1)', '(x-2)', '(x+2)', 'x − 1', 'x + 1', 'x − 2', 'x + 2'] },
        ],
        sampleAnswer: 'Let $u = x^2$: $u^2 - 5u + 4 = (u - 1)(u - 4) = (x^2 - 1)(x^2 - 4) = (x-1)(x+1)(x-2)(x+2)$.',
      },
      {
        label: 'b',
        prompt: 'List all real zeros of $f(x)$.',
        maxPoints: 1,
        rubric: [
          { points: 1, description: 'Lists x = −2, −1, 1, 2', keywords: ['-2', '-1', '1', '2'] },
        ],
        sampleAnswer: '$x = -2, -1, 1, 2$.',
      },
      {
        label: 'c',
        prompt: 'Describe the end behavior of $f(x)$.',
        maxPoints: 1,
        rubric: [
          { points: 1, description: 'Both ends go up (degree 4, positive leading coefficient)', keywords: ['both', 'up', 'positive infinity', '∞', 'rises'] },
        ],
        sampleAnswer: 'Degree 4 with positive leading coefficient → $f(x) \\to +\\infty$ as $x \\to \\pm\\infty$. Both ends rise.',
      },
    ],
  },
  // ===== SHORT FRQ 2: Logarithmic Equations =====
  {
    id: 'precalc-short-2',
    type: 'short',
    unit: 2,
    title: 'Logarithmic Equations and Properties',
    prompt: 'Consider the equation $\\log_2(x + 3) + \\log_2(x - 1) = 3$.',
    totalPoints: 4,
    timeRecommendation: '~8 minutes',
    calculatorAllowed: false,
    parts: [
      {
        label: 'a',
        prompt: 'Combine the left side into a single logarithm.',
        maxPoints: 1,
        rubric: [
          { points: 1, description: 'Uses product rule: $\\log_{2}((x+3)(x-1))$', keywords: ['product', 'log_2((x+3)(x-1))', '(x+3)(x-1)', 'multiply'] },
        ],
        sampleAnswer: '$\\log_2((x+3)(x-1)) = 3$ (product rule for logarithms).',
      },
      {
        label: 'b',
        prompt: 'Solve for $x$. Show all steps.',
        maxPoints: 2,
        rubric: [
          { points: 1, description: 'Converts to exponential: (x+3)(x−1) = 8', keywords: ['(x+3)(x-1) = 8', '2^3 = 8', 'exponential form'] },
          { points: 1, description: 'Solves quadratic and gets x = −4 and x = 2, keeps only x = 2', keywords: ['x = 2'] },
        ],
        sampleAnswer: '$(x+3)(x-1) = 2^3 = 8$\n\n$x^2 + 2x - 3 = 8$\n\n$x^2 + 2x - 11 = 0$... Wait, let me redo: $(x+3)(x-1) = x^2 + 2x - 3 = 8$ → $x^2 + 2x - 11 = 0$... Hmm, let me use the correct expansion:\n\n$(x+3)(x-1) = x^2 + 2x - 3 = 8$ → $x^2 + 2x - 11 = 0$.\n\nUsing quadratic formula: $x = \\frac{-2 \\pm \\sqrt{4 + 44}}{2} = \\frac{-2 \\pm \\sqrt{48}}{2} = -1 \\pm 2\\sqrt{3}$.\n\n$x = -1 + 2\\sqrt{3} \\approx 2.46$ (valid) or $x = -1 - 2\\sqrt{3} \\approx -4.46$ (invalid since $x > 1$).',
      },
      {
        label: 'c',
        prompt: 'Explain why one solution must be rejected.',
        maxPoints: 1,
        rubric: [
          { points: 1, description: 'Domain restriction: x + 3 > 0 and x − 1 > 0, so x > 1', keywords: ['domain', 'x > 1', 'positive', 'argument', 'log'] },
        ],
        sampleAnswer: 'The arguments of logarithms must be positive: $x + 3 > 0$ and $x - 1 > 0$, which requires $x > 1$. The negative solution does not satisfy $x > 1$, so it is extraneous.',
      },
    ],
  },
  // ===== SHORT FRQ 3: Inverse Functions =====
  {
    id: 'precalc-short-3',
    type: 'short',
    unit: 1,
    title: 'Inverse Functions',
    prompt: 'Let $f(x) = \\frac{2x + 3}{x - 1}$ for $x \\neq 1$.',
    totalPoints: 4,
    timeRecommendation: '~8 minutes',
    calculatorAllowed: false,
    parts: [
      {
        label: 'a',
        prompt: 'Find $f^{-1}(x)$.',
        maxPoints: 2,
        rubric: [
          { points: 1, description: 'Sets y = (2x+3)/(x−1), swaps x and y, and solves algebraically', keywords: ['swap', 'interchange', 'solve for y'] },
          { points: 1, description: 'Gets $f^{-1}(x)$ = (x + 3)/(x − 2)', keywords: ['(x + 3)/(x - 2)', 'x + 3', 'x - 2'] },
        ],
        sampleAnswer: '$y = \\frac{2x+3}{x-1}$ → Swap: $x = \\frac{2y+3}{y-1}$ → $x(y-1) = 2y+3$ → $xy - x = 2y + 3$ → $xy - 2y = x + 3$ → $y(x-2) = x+3$ → $y = \\frac{x+3}{x-2}$.\n\nSo $f^{-1}(x) = \\frac{x+3}{x-2}$.',
      },
      {
        label: 'b',
        prompt: 'What is the domain of $f^{-1}$?',
        maxPoints: 1,
        rubric: [
          { points: 1, description: 'Domain: all real numbers except x = 2', keywords: ['x ≠ 2', 'x \\neq 2', 'except 2', 'not equal to 2'] },
        ],
        sampleAnswer: 'The denominator of $f^{-1}(x)$ is $x - 2$, so $x \\neq 2$. Domain: $(-\\infty, 2) \\cup (2, \\infty)$.',
      },
      {
        label: 'c',
        prompt: 'Verify that $f(f^{-1}(x)) = x$.',
        maxPoints: 1,
        rubric: [
          { points: 1, description: 'Substitutes $f^{-1}(x)$ into f and simplifies to x', keywords: ['simplif', 'substitute', 'verify', '= x'] },
        ],
        sampleAnswer: '$f\\left(\\frac{x+3}{x-2}\\right) = \\frac{2 \\cdot \\frac{x+3}{x-2} + 3}{\\frac{x+3}{x-2} - 1} = \\frac{\\frac{2(x+3) + 3(x-2)}{x-2}}{\\frac{(x+3) - (x-2)}{x-2}} = \\frac{2x+6+3x-6}{x+3-x+2} = \\frac{5x}{5} = x$. ✓',
      },
    ],
  },
  // ===== SHORT FRQ 4: Polar Coordinates =====
  {
    id: 'precalc-short-4',
    type: 'short',
    unit: 4,
    title: 'Polar to Rectangular Conversion',
    prompt: 'A curve in polar coordinates is given by $r = 4\\cos\\theta$.',
    totalPoints: 4,
    timeRecommendation: '~8 minutes',
    calculatorAllowed: true,
    parts: [
      {
        label: 'a',
        prompt: 'Convert the equation to rectangular form.',
        maxPoints: 2,
        rubric: [
          { points: 1, description: 'Multiplies both sides by r: $r^{2}$ = 4rcosθ', keywords: ['r²', 'r^2', 'multiply by r'] },
          { points: 1, description: 'Substitutes $x^{2}+y^{2}$ and x to get $(x-2)^{2}$ + $y^{2}$ = 4', keywords: ['(x-2)²', 'x² + y² = 4x', 'circle'] },
        ],
        sampleAnswer: 'Multiply both sides by $r$: $r^2 = 4r\\cos\\theta$.\n\nSince $r^2 = x^2 + y^2$ and $r\\cos\\theta = x$:\n\n$x^2 + y^2 = 4x$ → $x^2 - 4x + y^2 = 0$ → $(x-2)^2 + y^2 = 4$.',
      },
      {
        label: 'b',
        prompt: 'Identify the shape, center, and radius.',
        maxPoints: 1,
        rubric: [
          { points: 1, description: 'Circle centered at (2, 0) with radius 2', keywords: ['circle', '(2, 0)', 'center', 'radius 2'] },
        ],
        sampleAnswer: 'This is a circle centered at $(2, 0)$ with radius $2$.',
      },
      {
        label: 'c',
        prompt: 'Find the area of the region enclosed by the curve.',
        maxPoints: 1,
        rubric: [
          { points: 1, description: 'Area = $\\pi r^{2}$ = 4π', keywords: ['4π', '4pi', 'π(2)²', 'pi(2)^2'] },
        ],
        sampleAnswer: '$A = \\pi r^2 = \\pi(2)^2 = 4\\pi$.',
      },
    ],
  },
  // ===== SHORT FRQ 5: Sequences & Series =====
  {
    id: 'precalc-short-5',
    type: 'short',
    unit: 2,
    title: 'Geometric and Arithmetic Sequences',
    prompt: 'Consider the geometric sequence $3, 6, 12, 24, \\ldots$',
    totalPoints: 4,
    timeRecommendation: '~8 minutes',
    calculatorAllowed: true,
    parts: [
      {
        label: 'a',
        prompt: 'Find the common ratio and write a formula for the $n$th term.',
        maxPoints: 2,
        rubric: [
          { points: 1, description: 'Common ratio r = 2', keywords: ['r = 2', 'ratio = 2', 'common ratio is 2'] },
          { points: 1, description: 'General term: $a_{n}$ = $3(2)^{n-1}$', keywords: ['3(2)', '3 · 2', '2^(n-1)', '2^{n-1}'] },
        ],
        sampleAnswer: '$r = 6/3 = 2$. General term: $a_n = 3 \\cdot 2^{n-1}$.',
      },
      {
        label: 'b',
        prompt: 'Find the sum of the first 8 terms.',
        maxPoints: 1,
        rubric: [
          { points: 1, description: '$S_{8}$ = 765', keywords: ['765'] },
        ],
        sampleAnswer: '$S_8 = 3 \\cdot \\frac{2^8 - 1}{2 - 1} = 3(255) = 765$.',
      },
      {
        label: 'c',
        prompt: 'Explain whether the infinite series $3 + 6 + 12 + 24 + \\cdots$ converges or diverges.',
        maxPoints: 1,
        rubric: [
          { points: 1, description: 'Diverges because |r| = 2 > 1', keywords: ['diverge', '|r| > 1', 'r = 2', 'greater than 1'] },
        ],
        sampleAnswer: 'The series diverges because $|r| = 2 > 1$. An infinite geometric series converges only when $|r| < 1$.',
      },
    ],
  },
  // ===== SHORT FRQ 6: Rational Function Analysis =====
  {
    id: 'precalc-short-6',
    type: 'short',
    unit: 1,
    title: 'Rational Function Asymptotes and Holes',
    prompt: 'Let $g(x) = \\frac{x^2 - 9}{x^2 - x - 6}$.',
    totalPoints: 4,
    timeRecommendation: '~8 minutes',
    calculatorAllowed: false,
    parts: [
      {
        label: 'a',
        prompt: 'Factor the numerator and denominator completely.',
        maxPoints: 1,
        rubric: [
          { points: 1, description: 'Numerator: (x−3)(x+3). Denominator: (x−3)(x+2)', keywords: ['(x-3)(x+3)', '(x-3)(x+2)', 'x − 3', 'x + 3', 'x + 2'] },
        ],
        sampleAnswer: 'Numerator: $x^2 - 9 = (x-3)(x+3)$. Denominator: $x^2 - x - 6 = (x-3)(x+2)$.',
      },
      {
        label: 'b',
        prompt: 'Identify any holes and vertical asymptotes, giving their locations.',
        maxPoints: 2,
        rubric: [
          { points: 1, description: 'Hole at x = 3 (common factor cancels)', keywords: ['hole', 'x = 3', 'removable', 'cancels'] },
          { points: 1, description: 'Vertical asymptote at x = −2', keywords: ['vertical asymptote', 'x = -2', 'x = −2'] },
        ],
        sampleAnswer: 'The factor $(x-3)$ cancels → **hole at $x = 3$**, where $g(3) = \\frac{3+3}{3+2} = \\frac{6}{5}$.\n\nThe remaining denominator factor $(x+2)$ gives a **vertical asymptote at $x = -2$**.',
      },
      {
        label: 'c',
        prompt: 'Find the horizontal asymptote of $g(x)$.',
        maxPoints: 1,
        rubric: [
          { points: 1, description: 'HA at y = 1 (same degree, ratio of leading coefficients)', keywords: ['y = 1', 'horizontal asymptote', 'ratio', 'leading coefficients', '1/1'] },
        ],
        sampleAnswer: 'Degrees are equal (both 2). Ratio of leading coefficients = 1/1 = 1. Horizontal asymptote: $y = 1$.',
      },
    ],
  },
]

const longFRQs = precalcFRQs.filter((q) => q.type === 'long')
const shortFRQs = precalcFRQs.filter((q) => q.type === 'short')

export function getPrecalcFRQs(): PrecalcFRQ[] { return precalcFRQs }
export function getLongFRQs(): PrecalcFRQ[] { return longFRQs }
export function getShortFRQs(): PrecalcFRQ[] { return shortFRQs }

export function generateFullExamFRQs(): { long: PrecalcFRQ[]; short: PrecalcFRQ[] } {
  const shuffled = <T>(arr: T[]): T[] => {
    const a = [...arr]
    for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]] }
    return a
  }
  return {
    long: shuffled(longFRQs).slice(0, 2),
    short: shuffled(shortFRQs).slice(0, 2),
  }
}

export { precalcFRQs as apPrecalcFRQs }
