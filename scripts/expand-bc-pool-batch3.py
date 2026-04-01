#!/usr/bin/env python3
"""Fix one incorrect answer and add ~31 more BC questions to reach ~300."""

import re, pathlib

FILE = pathlib.Path(__file__).resolve().parent.parent / "src" / "data" / "exit-quizzes" / "ap-calculus-bc.ts"

content = FILE.read_text()

# Fix the Euler's method question with wrong answer
old = """    question: 'Euler\\'s method with $h = 0.5$, starting at $(0, 1)$, $dy/dx = 2x$. Find $y(1)$:',
    options: ['$0.5$', '$1$', '$0.25$', '$1.5$'],
    correctAnswer: 0,
    explanation: 'y(0.5) ≈ 1 + 0.5·(0) = 1. y(1) ≈ 1 + 0.5·(1) = 1.5. Wait: dy/dx = 2x. At x=0: dy/dx=0. y(0.5)=1+0.5(0)=1. At x=0.5: dy/dx=1. y(1)=1+0.5(1)=1.5. Hmm, let me re-check answer choices. The answer should be 1.5, but that is option D. Let me re-read: options are 0.5, 1, 0.25, 1.5. So correctAnswer should be 3.',"""

new = """    question: 'Euler\\'s method with $h = 0.5$, starting at $(0, 1)$, $dy/dx = 2x$. Find $y(1)$:',
    options: ['$0.5$', '$1$', '$0.25$', '$1.5$'],
    correctAnswer: 3,
    explanation: 'At x = 0: dy/dx = 0. y(0.5) = 1 + 0.5(0) = 1. At x = 0.5: dy/dx = 1. y(1) = 1 + 0.5(1) = 1.5.',"""

content = content.replace(old, new)

# Also fix the partial fractions question with confusing explanation  
old2 = """    question: '$\\\\displaystyle\\\\int \\\\frac{x}{(x-1)(x+3)}\\\\,dx$ — using partial fractions, $\\\\frac{x}{(x-1)(x+3)} = \\\\frac{A}{x-1}+\\\\frac{B}{x+3}$. Find $B$:',
    options: ['$\\\\frac{3}{4}$', '$\\\\frac{1}{4}$', '$-\\\\frac{3}{4}$', '$\\\\frac{-1}{4}$'],
    correctAnswer: 2,
    explanation: 'x = A(x+3)+B(x−1). Set x = −3: −3 = B(−4), B = 3/4. Wait — let me recheck: x = −3 gives −3 = B(−3−1) = −4B, so B = 3/4. Hmm, that is positive 3/4. Actually: set x = −3: −3 = A(0) + B(−4), so B = −3/(−4) = 3/4.',"""

new2 = """    question: '$\\\\displaystyle\\\\int \\\\frac{x}{(x-1)(x+3)}\\\\,dx$ — using partial fractions, $\\\\frac{x}{(x-1)(x+3)} = \\\\frac{A}{x-1}+\\\\frac{B}{x+3}$. Find $B$:',
    options: ['$\\\\frac{3}{4}$', '$\\\\frac{1}{4}$', '$-\\\\frac{3}{4}$', '$\\\\frac{-1}{4}$'],
    correctAnswer: 0,
    explanation: 'x = A(x+3)+B(x−1). Set x = −3: −3 = B(−4), so B = 3/4.',"""

content = content.replace(old2, new2)

# Fix the e^x*sin(x) coefficient explanation
old3 = """    explanation: 'Multiply series: (1+x+x²/2+x³/6+…)(x−x³/6+…). x³ terms: x·(x²/2) + (x³/6)·1 + 1·(−x³/6) = x³/2+x³/6−x³/6 = x³/2. Hmm, let me recompute carefully. eˣ = 1+x+x²/2!+x³/3!. sin x = x−x³/3!. Product up to x³: x + x² + (1/2−1/6)x³ = x+x²+x³/3. So coeff of x³ = 1/3.',"""

new3 = """    explanation: 'eˣ = 1+x+x²/2+x³/6+… sin x = x−x³/6+… Product up to x³: x + x² + (1/2−1/6)x³ = x+x²+x³/3. Coefficient of x³ = 1/3.',"""

content = content.replace(old3, new3)

# Now add 31 more questions
NEW_QUESTIONS = r"""
  // ── BATCH 3 EXPANSION: mixed domains to reach ~300 ───────────────
  {
    question: '$\\displaystyle\\int \\frac{dx}{\\sqrt{4-x^2}} =$',
    options: ['$\\arcsin(x/2)+C$', '$\\arctan(x/2)+C$', '$\\frac{1}{2}\\arcsin x + C$', '$\\ln|x+\\sqrt{4-x^2}|+C$'],
    correctAnswer: 0,
    explanation: '∫dx/√(a²−x²) = arcsin(x/a)+C. Here a = 2.',
    difficulty: 'easy',
    domain: 'advanced-integration',
    topicSlug: 'advanced-integration-calcbc',
    formSet: 'both',
  },
  {
    question: '$\\displaystyle\\int \\tan x\\,dx =$',
    options: ['$-\\ln|\\cos x|+C$', '$\\ln|\\cos x|+C$', '$\\sec^2 x + C$', '$-\\cot x + C$'],
    correctAnswer: 0,
    explanation: '∫tan x dx = ∫sin x/cos x dx. Let u = cos x: −∫du/u = −ln|cos x| + C = ln|sec x| + C.',
    difficulty: 'easy',
    domain: 'advanced-integration',
    topicSlug: 'advanced-integration-calcbc',
    formSet: 'both',
  },
  {
    question: '$\\displaystyle\\int_0^{\\infty}\\frac{dx}{(x+1)(x+2)} =$',
    options: ['$\\ln 2$', '$1$', '$\\frac{1}{2}$', 'Diverges'],
    correctAnswer: 0,
    explanation: 'PF: 1/[(x+1)(x+2)] = 1/(x+1)−1/(x+2). [ln|(x+1)/(x+2)|]₀^∞ = 0−ln(1/2) = ln 2.',
    difficulty: 'hard',
    domain: 'advanced-integration',
    topicSlug: 'improper-integrals-calcbc',
    formSet: 'both',
  },
  {
    question: 'For the parametric curve $x = e^t$, $y = e^{-t}$, eliminating $t$ gives:',
    options: ['$xy = 1$', '$x + y = 1$', '$x^2 + y^2 = 1$', '$y = x$'],
    correctAnswer: 0,
    explanation: 'x = eᵗ, y = e⁻ᵗ. xy = eᵗ·e⁻ᵗ = 1. The curve is a hyperbola.',
    difficulty: 'easy',
    domain: 'parametric-polar-vector',
    topicSlug: 'parametric-curves-calculus-calcbc',
    formSet: 'both',
  },
  {
    question: 'The curvature of a curve at a point measures:',
    options: [
      'How sharply the curve bends',
      'The slope of the tangent',
      'The arc length',
      'The speed of a particle'
    ],
    correctAnswer: 0,
    explanation: 'Curvature κ measures the rate at which the tangent direction changes per unit arc length — i.e., how sharply the curve bends.',
    difficulty: 'easy',
    domain: 'parametric-polar-vector',
    topicSlug: 'vector-valued-functions-calcbc',
    formSet: 'both',
  },
  {
    question: 'The polar curve $r = 4\\sin 2\\theta$ has how many petals?',
    options: ['$2$', '$4$', '$8$', '$1$'],
    correctAnswer: 1,
    explanation: 'r = a sin(nθ) with n = 2: has 2n = 4 petals.',
    difficulty: 'easy',
    domain: 'parametric-polar-vector',
    topicSlug: 'polar-calculus-calcbc',
    formSet: 'both',
  },
  {
    question: '$\\displaystyle\\sum_{n=1}^{\\infty}\\frac{(-1)^{n+1}}{2n-1} = 1 - \\frac{1}{3} + \\frac{1}{5} - \\cdots$ converges to:',
    options: ['$\\frac{\\pi}{4}$', '$\\frac{\\pi}{2}$', '$1$', '$\\ln 2$'],
    correctAnswer: 0,
    explanation: 'This is arctan(1) = π/4 via the arctan series at x = 1 (Leibniz formula).',
    difficulty: 'medium',
    domain: 'sequences-series',
    topicSlug: 'infinite-series-calcbc',
    formSet: 'both',
  },
  {
    question: 'The series $\\displaystyle\\sum_{n=0}^{\\infty}\\frac{(x-1)^n}{2^n}$ has radius of convergence:',
    options: ['$1$', '$2$', '$\\frac{1}{2}$', '$\\infty$'],
    correctAnswer: 1,
    explanation: 'Geometric with ratio (x−1)/2. |r| < 1: |x−1| < 2. R = 2.',
    difficulty: 'easy',
    domain: 'taylor-series',
    topicSlug: 'power-series-calcbc',
    formSet: 'both',
  },
  {
    question: 'The first three terms of the Taylor series for $e^x$ centered at $a = 1$ are:',
    options: [
      '$e + e(x-1) + \\frac{e}{2}(x-1)^2$',
      '$1 + x + \\frac{x^2}{2}$',
      '$e + e(x-1) + e(x-1)^2$',
      '$1 + (x-1) + \\frac{(x-1)^2}{2}$'
    ],
    correctAnswer: 0,
    explanation: 'f(x) = eˣ: f⁽ⁿ⁾(1) = e for all n. P₂(x) = e + e(x−1) + (e/2)(x−1)².',
    difficulty: 'medium',
    domain: 'taylor-series',
    topicSlug: 'taylor-maclaurin-series-calcbc',
    formSet: 'both',
  },
  {
    question: '$\\displaystyle\\sum_{n=0}^{\\infty}\\frac{(-1)^n x^{2n+1}}{2n+1}$ represents:',
    options: ['$\\arctan x$', '$\\sin x$', '$\\ln(1+x)$', '$\\tanh x$'],
    correctAnswer: 0,
    explanation: 'arctan x = Σ(−1)ⁿx²ⁿ⁺¹/(2n+1) for |x| ≤ 1.',
    difficulty: 'easy',
    domain: 'taylor-series',
    topicSlug: 'taylor-maclaurin-series-calcbc',
    formSet: 'both',
  },
  {
    question: 'Euler\'s method with $h = 0.5$: $dy/dx = xy$, $(0, 2)$. Find $y(0.5)$:',
    options: ['$2$', '$2.5$', '$3$', '$1.5$'],
    correctAnswer: 0,
    explanation: 'y(0.5) = 2 + 0.5·(0·2) = 2 + 0 = 2.',
    difficulty: 'easy',
    domain: 'advanced-diffeq',
    topicSlug: 'euler-method-advanced-calcbc',
    formSet: 'both',
  },
  {
    question: 'The logistic solution $P(t) = L/(1+Ce^{-kt})$ is:',
    options: [
      'An S-shaped (sigmoid) curve',
      'An exponential curve',
      'A parabola',
      'A cosine curve'
    ],
    correctAnswer: 0,
    explanation: 'The logistic function produces a characteristic S-shaped (sigmoid) curve.',
    difficulty: 'easy',
    domain: 'advanced-diffeq',
    topicSlug: 'logistic-models-calcbc',
    formSet: 'both',
  },
  {
    question: '$\\displaystyle\\int \\frac{x}{\\sqrt{1-x^2}}\\,dx =$',
    options: ['$-\\sqrt{1-x^2}+C$', '$\\arcsin x + C$', '$\\sqrt{1-x^2}+C$', '$x\\arcsin x + C$'],
    correctAnswer: 0,
    explanation: 'Let u = 1−x², du = −2x dx. ∫x/√(1−x²)dx = −(1/2)∫u⁻¹/²du = −√u + C = −√(1−x²) + C.',
    difficulty: 'easy',
    domain: 'advanced-integration',
    topicSlug: 'advanced-integration-calcbc',
    formSet: 'both',
  },
  {
    question: 'The series $\\displaystyle\\sum_{n=0}^{\\infty}\\frac{3^n}{n!}$ equals:',
    options: ['$e^3$', '$3e$', '$e$', '$3^e$'],
    correctAnswer: 0,
    explanation: 'Σ3ⁿ/n! = e³ by the Maclaurin series for eˣ at x = 3.',
    difficulty: 'easy',
    domain: 'sequences-series',
    topicSlug: 'infinite-series-calcbc',
    formSet: 'both',
  },
  {
    question: 'If $\\mathbf{v}(t) = \\langle 2t, 3t^2 \\rangle$ and $\\mathbf{r}(0) = \\langle 1, 0 \\rangle$, then $\\mathbf{r}(1) =$',
    options: ['$\\langle 2, 1 \\rangle$', '$\\langle 1, 1 \\rangle$', '$\\langle 3, 1 \\rangle$', '$\\langle 2, 0 \\rangle$'],
    correctAnswer: 0,
    explanation: 'r(t) = ⟨t²+1, t³⟩ (integrate and use IC). r(1) = ⟨2, 1⟩.',
    difficulty: 'medium',
    domain: 'parametric-polar-vector',
    topicSlug: 'vector-valued-functions-calcbc',
    formSet: 'both',
  },
  {
    question: 'The integral $\\displaystyle\\int \\sin x \\cos x\\,dx =$',
    options: ['$\\frac{\\sin^2 x}{2}+C$', '$-\\cos^2 x + C$', '$\\sin x + C$', '$\\frac{-\\cos 2x}{4}+C$'],
    correctAnswer: 0,
    explanation: 'Let u = sin x: ∫u du = u²/2 + C = sin²x/2 + C. (Or use sin 2x/2 identity.)',
    difficulty: 'easy',
    domain: 'advanced-integration',
    topicSlug: 'advanced-integration-calcbc',
    formSet: 'both',
  },
  {
    question: 'For $\\displaystyle\\sum_{n=1}^{\\infty}\\frac{(-1)^n n}{n+1}$, the $n$th term test shows:',
    options: [
      'The series diverges because $\\lim a_n \\neq 0$',
      'The series converges',
      'The test is inconclusive',
      'The series converges absolutely'
    ],
    correctAnswer: 0,
    explanation: 'lim (−1)ⁿn/(n+1) does not equal 0 (oscillates between ±1). By the nth-term test, the series diverges.',
    difficulty: 'medium',
    domain: 'sequences-series',
    topicSlug: 'convergence-tests-summary-calcbc',
    formSet: 'both',
  },
  {
    question: 'The interval of convergence for $\\displaystyle\\sum_{n=0}^{\\infty}\\frac{x^{2n}}{n!}$ is:',
    options: ['$(-\\infty, \\infty)$', '$(-1, 1)$', '$[0, 1]$', '$(-e, e)$'],
    correctAnswer: 0,
    explanation: 'This is e^{x²}. Ratio: x²/(n+1) → 0 for all x. Converges everywhere. IOC = (−∞, ∞).',
    difficulty: 'medium',
    domain: 'taylor-series',
    topicSlug: 'power-series-calcbc',
    formSet: 'both',
  },
  {
    question: 'For $x = 4\\cos t + 2$, $y = 3\\sin t - 1$, the center of the ellipse is:',
    options: ['$(2, -1)$', '$(4, 3)$', '$(0, 0)$', '$(2, 1)$'],
    correctAnswer: 0,
    explanation: 'The center is at (h, k) where x = h + a cos t, y = k + b sin t. Center = (2, −1).',
    difficulty: 'easy',
    domain: 'parametric-polar-vector',
    topicSlug: 'parametric-curves-calculus-calcbc',
    formSet: 'both',
  },
  {
    question: '$\\displaystyle\\int_0^{\\pi}\\int_0^{r} r\\,dr\\,d\\theta$ represents the area of:',
    options: [
      'A semicircle in polar coordinates',
      'A full circle',
      'A rectangle',
      'A triangle'
    ],
    correctAnswer: 0,
    explanation: 'The double integral ∫₀^π∫₀^R r dr dθ computes the area of a semicircle (half rotation in θ).',
    difficulty: 'medium',
    domain: 'parametric-polar-vector',
    topicSlug: 'polar-calculus-calcbc',
    formSet: 'both',
  },
  {
    question: 'The Ratio Test for $\\displaystyle\\sum_{n=1}^{\\infty}\\frac{n^{10}}{10^n}$ gives $L =$',
    options: ['$\\frac{1}{10}$', '$1$', '$10$', '$0$'],
    correctAnswer: 0,
    explanation: 'aₙ₊₁/aₙ = [(n+1)¹⁰/10ⁿ⁺¹]·[10ⁿ/n¹⁰] = (1+1/n)¹⁰/10 → 1/10. Converges.',
    difficulty: 'medium',
    domain: 'sequences-series',
    topicSlug: 'convergence-tests-summary-calcbc',
    formSet: 'both',
  },
  {
    question: 'The coefficient of $x^4$ in the Maclaurin series for $\\frac{1}{1+x^2}$ is:',
    options: ['$1$', '$-1$', '$\\frac{1}{4!}$', '$0$'],
    correctAnswer: 0,
    explanation: '1/(1+x²) = 1 − x² + x⁴ − x⁶ + … The coefficient of x⁴ is 1 (from (−1)²).',
    difficulty: 'easy',
    domain: 'taylor-series',
    topicSlug: 'taylor-maclaurin-series-calcbc',
    formSet: 'both',
  },
  {
    question: 'For $dy/dx = y(2-y)$ with $y(0) = 1$, the carrying capacity is:',
    options: ['$2$', '$1$', '$4$', '$0.5$'],
    correctAnswer: 0,
    explanation: 'dy/dx = y(2−y) is logistic with L = 2 and k = 2. Carrying capacity = 2.',
    difficulty: 'easy',
    domain: 'advanced-diffeq',
    topicSlug: 'logistic-models-calcbc',
    formSet: 'both',
  },
  {
    question: '$\\displaystyle\\int \\frac{1}{\\sqrt{x^2+1}}\\,dx =$',
    options: [
      '$\\ln|x+\\sqrt{x^2+1}|+C$',
      '$\\arctan x + C$',
      '$\\arcsin x + C$',
      '$\\sqrt{x^2+1}+C$'
    ],
    correctAnswer: 0,
    explanation: 'Standard form: ∫dx/√(x²+a²) = ln|x+√(x²+a²)|+C, here a = 1.',
    difficulty: 'medium',
    domain: 'advanced-integration',
    topicSlug: 'advanced-integration-calcbc',
    formSet: 'both',
  },
  {
    question: 'The series $\\displaystyle\\sum_{n=0}^{\\infty}\\frac{x^{2n+1}}{(2n+1)!}$ represents:',
    options: ['$\\sinh x$', '$\\sin x$', '$\\cos x$', '$e^x$'],
    correctAnswer: 0,
    explanation: 'Σx²ⁿ⁺¹/(2n+1)! = sinh x = (eˣ−e⁻ˣ)/2 (no alternating signs, unlike sin x).',
    difficulty: 'medium',
    domain: 'taylor-series',
    topicSlug: 'taylor-maclaurin-series-calcbc',
    formSet: 'both',
  },
  {
    question: 'Euler\'s method with $h = 0.1$: $dy/dx = 3x^2$, $y(0) = 0$. The exact solution at $x = 1$ is $1$. Euler gives $y(1) =$',
    options: ['$0.855$', '$1$', '$1.5$', '$0.5$'],
    correctAnswer: 0,
    explanation: 'Sum of 0.1·3(ih)² for i = 0..9 = 0.3·Σi²·0.01 = 0.003·(0+1+4+9+16+25+36+49+64+81) = 0.003·285 = 0.855.',
    difficulty: 'hard',
    domain: 'advanced-diffeq',
    topicSlug: 'euler-method-advanced-calcbc',
    formSet: 'both',
  },
  {
    question: 'For a polar curve, the formula for area is $A = \\frac{1}{2}\\int_\\alpha^\\beta r^2\\,d\\theta$ because:',
    options: [
      'It sums the areas of infinitesimally thin circular sectors',
      'It is derived from the rectangular formula $\\int y\\,dx$',
      'The $r^2$ accounts for the Jacobian of the transform',
      'All of the above are valid reasons'
    ],
    correctAnswer: 0,
    explanation: 'The polar area formula comes from summing thin sectors of angle dθ, each with area (1/2)r²dθ.',
    difficulty: 'easy',
    domain: 'parametric-polar-vector',
    topicSlug: 'polar-calculus-calcbc',
    formSet: 'both',
  },
  {
    question: 'The series $\\displaystyle\\sum_{n=1}^{\\infty}\\frac{1}{n2^n}$ has radius of convergence $R = 2$ and at $x = 2$ gives:',
    options: ['$\\ln 2$', '$1$', '$\\frac{1}{2}$', 'Diverges'],
    correctAnswer: 0,
    explanation: 'Σxⁿ/(n) = −ln(1−x) for |x| < 1. At x = 1/2 (substituting back): Σ(1/2)ⁿ/n = −ln(1/2) = ln 2. Actually Σxⁿ/n for the power series centered at 0 with x = 1/2.',
    difficulty: 'hard',
    domain: 'sequences-series',
    topicSlug: 'infinite-series-calcbc',
    formSet: 'both',
  },
  {
    question: 'The Maclaurin series for $\\frac{x}{1+x}$ is:',
    options: [
      '$\\displaystyle\\sum_{n=0}^{\\infty}(-1)^n x^{n+1}$, $|x| < 1$',
      '$\\displaystyle\\sum_{n=0}^{\\infty}x^{n+1}$',
      '$\\displaystyle\\sum_{n=1}^{\\infty}\\frac{x^n}{n}$',
      '$x - x^2/2 + x^3/3 - \\cdots$'
    ],
    correctAnswer: 0,
    explanation: '1/(1+x) = Σ(−1)ⁿxⁿ. Multiply by x: x/(1+x) = Σ(−1)ⁿxⁿ⁺¹ for |x| < 1.',
    difficulty: 'easy',
    domain: 'taylor-series',
    topicSlug: 'power-series-calcbc',
    formSet: 'both',
  },
  {
    question: '$\\displaystyle\\int \\frac{x+3}{(x+1)(x+2)}\\,dx$ — find $A$ where $\\frac{x+3}{(x+1)(x+2)} = \\frac{A}{x+1}+\\frac{B}{x+2}$:',
    options: ['$2$', '$1$', '$-2$', '$3$'],
    correctAnswer: 0,
    explanation: 'Set x = −1: (−1+3) = A(1) → A = 2.',
    difficulty: 'easy',
    domain: 'advanced-integration',
    topicSlug: 'partial-fractions-calcbc',
    formSet: 'both',
  },
"""

marker = "\n]\n\n/** Generate an exit quiz"
content = content.replace(marker, NEW_QUESTIONS + marker)

FILE.write_text(content)

count = len(__import__('re').findall(r"correctAnswer:", content))
print(f"✅ BC pool now has {count} questions total")
