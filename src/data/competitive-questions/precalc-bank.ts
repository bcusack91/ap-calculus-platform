// Pre-Calculus question bank for competitive mode
// ~7-8 questions per topic across AP Precalculus topics

export interface PreCalcQuestion {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  difficulty: 'easy' | 'medium' | 'hard'
  topicSlug: string
}

const allQuestions: PreCalcQuestion[] = [
  // ============ POLYNOMIAL FUNCTIONS & END BEHAVIOR ============
  { id: 1, question: 'What is the end behavior of $f(x) = x^3$?', options: ['$x→-∞, f→-∞;\\; x→∞, f→∞$', '$x→±∞, f→∞$', '$x→±∞, f→-∞$', '$x→-∞, f→∞;\\; x→∞, f→-∞$'], correctAnswer: 0, explanation: 'Odd degree, positive leading coefficient → rises right, falls left.', difficulty: 'easy', topicSlug: 'polynomial-functions-end-behavior' },
  { id: 2, question: 'What is the end behavior of $f(x) = -2x^4 + x$?', options: ['$f→-∞$ as $x→±∞$', '$f→∞$ as $x→±∞$', 'Falls left, rises right', 'Rises left, falls right'], correctAnswer: 0, explanation: 'Even degree, negative leading coefficient → both ends down.', difficulty: 'medium', topicSlug: 'polynomial-functions-end-behavior' },
  { id: 3, question: 'A polynomial of degree 5 has at most how many turning points?', options: ['4', '5', '6', '3'], correctAnswer: 0, explanation: 'At most $n-1$ turning points for degree $n$.', difficulty: 'easy', topicSlug: 'polynomial-functions-end-behavior' },
  { id: 4, question: 'The graph of $f(x) = 2x^6 - x^2$ rises to the ___:', options: ['Left and right', 'Left only', 'Right only', 'Neither'], correctAnswer: 0, explanation: 'Even degree, positive leading coefficient → both ends up.', difficulty: 'medium', topicSlug: 'polynomial-functions-end-behavior' },
  { id: 5, question: 'If $\\lim_{x→∞} f(x) = -∞$ and $\\lim_{x→-∞} f(x) = ∞$, the degree is:', options: ['Odd with negative leading coefficient', 'Even with positive', 'Odd with positive', 'Even with negative'], correctAnswer: 0, explanation: 'Odd degree, negative LC → rises left, falls right.', difficulty: 'hard', topicSlug: 'polynomial-functions-end-behavior' },

  // ============ POLYNOMIAL ZEROS & MULTIPLICITY ============
  { id: 6, question: 'If $f(x)=(x-2)^3(x+1)$, what is the multiplicity of $x=2$?', options: ['3', '1', '2', '4'], correctAnswer: 0, explanation: 'Exponent on $(x-2)$ is 3.', difficulty: 'easy', topicSlug: 'polynomial-zeros-multiplicity' },
  { id: 7, question: 'At a zero of even multiplicity, the graph:', options: ['Touches and turns around', 'Crosses the x-axis', 'Has a vertical asymptote', 'Is undefined'], correctAnswer: 0, explanation: 'Even multiplicity → bounce, no crossing.', difficulty: 'easy', topicSlug: 'polynomial-zeros-multiplicity' },
  { id: 8, question: 'How many real zeros can $f(x) = x^4 - 1$ have?', options: ['2', '4', '1', '0'], correctAnswer: 0, explanation: '$(x^2-1)(x^2+1) = (x-1)(x+1)(x^2+1)$ → 2 real zeros.', difficulty: 'medium', topicSlug: 'polynomial-zeros-multiplicity' },
  { id: 9, question: 'By the Rational Root Theorem, possible rational roots of $x^3 - 6x + 4$ are:', options: ['$±1, ±2, ±4$', '$±1, ±6$', '$±1, ±2, ±3, ±6$', '$±4$ only'], correctAnswer: 0, explanation: 'Factors of constant / factors of leading coefficient.', difficulty: 'medium', topicSlug: 'polynomial-zeros-multiplicity' },
  { id: 10, question: 'At a zero of odd multiplicity, the graph:', options: ['Crosses the x-axis', 'Touches and turns', 'Has a hole', 'Is discontinuous'], correctAnswer: 0, explanation: 'Odd multiplicity → crosses through.', difficulty: 'easy', topicSlug: 'polynomial-zeros-multiplicity' },

  // ============ RATIONAL FUNCTIONS & ASYMPTOTES ============
  { id: 11, question: 'Vertical asymptote of $f(x) = \\frac{1}{x-3}$:', options: ['$x = 3$', '$x = -3$', '$x = 0$', '$x = 1$'], correctAnswer: 0, explanation: 'Denominator = 0 at $x = 3$.', difficulty: 'easy', topicSlug: 'rational-functions-asymptotes' },
  { id: 12, question: 'Horizontal asymptote of $\\frac{2x+1}{x-3}$:', options: ['$y = 2$', '$y = 0$', '$y = -3$', 'None'], correctAnswer: 0, explanation: 'Same degree → ratio of leading coefficients.', difficulty: 'easy', topicSlug: 'rational-functions-asymptotes' },
  { id: 13, question: 'If degree of numerator > degree of denominator:', options: ['No horizontal asymptote (slant possible)', 'HA at $y=0$', 'HA at $y=1$', 'VA only'], correctAnswer: 0, explanation: 'Higher numerator degree → no HA; may have oblique.', difficulty: 'medium', topicSlug: 'rational-functions-asymptotes' },
  { id: 14, question: 'Horizontal asymptote when numerator degree < denominator degree:', options: ['$y = 0$', '$y = 1$', 'No HA', 'Depends on coefficients'], correctAnswer: 0, explanation: 'Lower numerator degree → HA at $y = 0$.', difficulty: 'easy', topicSlug: 'rational-functions-asymptotes' },
  { id: 15, question: 'A hole occurs in a rational function when:', options: ['A factor cancels from both numerator & denominator', 'Denominator is zero', 'Numerator is zero', 'Function is undefined'], correctAnswer: 0, explanation: 'Common factor cancels → removable discontinuity.', difficulty: 'medium', topicSlug: 'rational-functions-asymptotes' },

  // ============ EXPONENTIAL FUNCTIONS ============
  { id: 16, question: 'Which is exponential growth?', options: ['$y = 2^x$', '$y = (0.5)^x$', '$y = x^2$', '$y = \\log(x)$'], correctAnswer: 0, explanation: 'Base > 1 → growth.', difficulty: 'easy', topicSlug: 'exponential-functions-growth-decay' },
  { id: 17, question: 'Half-life means the quantity:', options: ['Halves each period', 'Doubles each period', 'Stays constant', 'Triples'], correctAnswer: 0, explanation: 'Exponential decay: $Q = Q_0(1/2)^{t/h}$.', difficulty: 'easy', topicSlug: 'exponential-functions-growth-decay' },
  { id: 18, question: '$y = 5(1.08)^t$ represents ___ at ___% per period:', options: ['Growth at 8%', 'Decay at 8%', 'Growth at 108%', 'Decay at 92%'], correctAnswer: 0, explanation: '$r = 0.08 → 8\\%$ growth.', difficulty: 'easy', topicSlug: 'exponential-functions-growth-decay' },
  { id: 19, question: 'The graph $y = a \\cdot b^x$ always passes through:', options: ['$(0, a)$', '$(1, 0)$', '$(a, 0)$', '$(0, b)$'], correctAnswer: 0, explanation: 'At $x=0$: $y = a \\cdot b^0 = a$.', difficulty: 'medium', topicSlug: 'exponential-functions-growth-decay' },
  { id: 20, question: 'Doubling time for $P = P_0 \\cdot 2^{t/d}$:', options: ['$d$', '$2d$', '$P_0$', '$t$'], correctAnswer: 0, explanation: 'Each increment of $d$ doubles the quantity.', difficulty: 'medium', topicSlug: 'exponential-functions-growth-decay' },

  // ============ LOGARITHMIC FUNCTIONS ============
  { id: 21, question: '$\\log_2(8) = $?', options: ['$3$', '$4$', '$2$', '$8$'], correctAnswer: 0, explanation: '$2^3 = 8$.', difficulty: 'easy', topicSlug: 'logarithmic-functions-properties' },
  { id: 22, question: '$\\log_b(MN) = $?', options: ['$\\log_b M + \\log_b N$', '$\\log_b M \\cdot \\log_b N$', '$\\log_b M - \\log_b N$', '$\\log_b(M+N)$'], correctAnswer: 0, explanation: 'Product rule of logarithms.', difficulty: 'easy', topicSlug: 'logarithmic-functions-properties' },
  { id: 23, question: '$\\log_b(M/N) = $?', options: ['$\\log_b M - \\log_b N$', '$\\log_b M / \\log_b N$', '$\\log_b M + \\log_b N$', '$\\log_b(M-N)$'], correctAnswer: 0, explanation: 'Quotient rule of logarithms.', difficulty: 'easy', topicSlug: 'logarithmic-functions-properties' },
  { id: 24, question: 'Change of base: $\\log_a b = $?', options: ['$\\frac{\\ln b}{\\ln a}$', '$\\frac{\\ln a}{\\ln b}$', '$\\ln(ab)$', '$\\frac{a}{b}$'], correctAnswer: 0, explanation: 'Change of base formula.', difficulty: 'medium', topicSlug: 'logarithmic-functions-properties' },
  { id: 25, question: 'Domain of $f(x) = \\log(x-5)$:', options: ['$x > 5$', '$x > 0$', '$x \\geq 5$', 'All reals'], correctAnswer: 0, explanation: 'Argument must be positive: $x - 5 > 0$.', difficulty: 'medium', topicSlug: 'logarithmic-functions-properties' },

  // ============ NATURAL LOG & e ============
  { id: 26, question: '$e^0 = $?', options: ['$1$', '$0$', '$e$', '$\\infty$'], correctAnswer: 0, explanation: 'Any nonzero base to power 0 is 1.', difficulty: 'easy', topicSlug: 'natural-log-and-e' },
  { id: 27, question: '$\\ln(e^5) = $?', options: ['$5$', '$e^5$', '$5e$', '$\\log 5$'], correctAnswer: 0, explanation: '$\\ln$ and $e^x$ are inverses.', difficulty: 'easy', topicSlug: 'natural-log-and-e' },
  { id: 28, question: '$e^{\\ln 3} = $?', options: ['$3$', '$e^3$', '$\\ln 3$', '$3e$'], correctAnswer: 0, explanation: '$e^{\\ln x} = x$.', difficulty: 'easy', topicSlug: 'natural-log-and-e' },
  { id: 29, question: 'Solve: $e^{2x} = 7$', options: ['$x = \\frac{\\ln 7}{2}$', '$x = 2\\ln 7$', '$x = \\frac{7}{2e}$', '$x = \\ln(3.5)$'], correctAnswer: 0, explanation: '$2x = \\ln 7 → x = \\frac{\\ln 7}{2}$.', difficulty: 'medium', topicSlug: 'natural-log-and-e' },
  { id: 30, question: 'Continuous compounding formula:', options: ['$A = Pe^{rt}$', '$A = P(1+r/n)^{nt}$', '$A = Prt$', '$A = P(1+r)^t$'], correctAnswer: 0, explanation: 'Continuous growth/decay uses $e$.', difficulty: 'medium', topicSlug: 'natural-log-and-e' },

  // ============ COMPOSITE FUNCTIONS ============
  { id: 31, question: 'If $f(x) = x^2$ and $g(x) = x+1$, find $(f \\circ g)(x)$:', options: ['$(x+1)^2$', '$x^2 + 1$', '$x^3$', '$x^2(x+1)$'], correctAnswer: 0, explanation: '$f(g(x)) = f(x+1) = (x+1)^2$.', difficulty: 'easy', topicSlug: 'composite-functions' },
  { id: 32, question: 'If $f(x) = 2x$ and $g(x) = x-3$, find $(g \\circ f)(2)$:', options: ['$1$', '$-2$', '$4$', '$7$'], correctAnswer: 0, explanation: '$g(f(2)) = g(4) = 4-3 = 1$.', difficulty: 'easy', topicSlug: 'composite-functions' },
  { id: 33, question: 'The domain of $(f \\circ g)(x)$ requires:', options: ['$x$ in domain of $g$ AND $g(x)$ in domain of $f$', 'Only domain of $f$', 'Only domain of $g$', 'Union of both domains'], correctAnswer: 0, explanation: 'Both conditions must be satisfied.', difficulty: 'medium', topicSlug: 'composite-functions' },
  { id: 34, question: 'If $f(x) = \\sqrt{x}$ and $g(x) = x - 4$, domain of $f(g(x))$:', options: ['$x \\geq 4$', '$x > 0$', '$x \\geq 0$', 'All reals'], correctAnswer: 0, explanation: '$g(x) \\geq 0 → x - 4 \\geq 0 → x \\geq 4$.', difficulty: 'medium', topicSlug: 'composite-functions' },

  // ============ INVERSE FUNCTIONS ============
  { id: 35, question: 'If $f(x) = 3x - 2$, then $f^{-1}(x) = $?', options: ['$\\frac{x+2}{3}$', '$\\frac{x-2}{3}$', '$3x+2$', '$\\frac{1}{3x-2}$'], correctAnswer: 0, explanation: 'Swap and solve: $x = 3y-2 → y = (x+2)/3$.', difficulty: 'easy', topicSlug: 'inverse-functions' },
  { id: 36, question: 'The graph of $f^{-1}$ is a reflection of $f$ over:', options: ['$y = x$', '$x$-axis', '$y$-axis', 'Origin'], correctAnswer: 0, explanation: 'Inverse reflects over the line $y = x$.', difficulty: 'easy', topicSlug: 'inverse-functions' },
  { id: 37, question: 'A function has an inverse if and only if it is:', options: ['One-to-one', 'Continuous', 'Differentiable', 'Polynomial'], correctAnswer: 0, explanation: 'Must pass horizontal line test.', difficulty: 'easy', topicSlug: 'inverse-functions' },
  { id: 38, question: 'If $f(3) = 7$, then $f^{-1}(7) = $?', options: ['$3$', '$7$', '$\\frac{1}{7}$', '$\\frac{1}{3}$'], correctAnswer: 0, explanation: 'Inverse swaps input and output.', difficulty: 'easy', topicSlug: 'inverse-functions' },

  // ============ TRANSFORMATIONS OF FUNCTIONS ============
  { id: 39, question: '$f(x-3)$ shifts the graph:', options: ['Right 3', 'Left 3', 'Up 3', 'Down 3'], correctAnswer: 0, explanation: 'Horizontal shift: opposite sign.', difficulty: 'easy', topicSlug: 'transformations-of-functions' },
  { id: 40, question: '$-f(x)$ does what to the graph?', options: ['Reflects over x-axis', 'Reflects over y-axis', 'Shifts down', 'Compresses vertically'], correctAnswer: 0, explanation: 'Negating output → x-axis reflection.', difficulty: 'easy', topicSlug: 'transformations-of-functions' },
  { id: 41, question: '$f(2x)$ does what?', options: ['Horizontal compression by factor 2', 'Horizontal stretch by 2', 'Vertical stretch by 2', 'Vertical compression'], correctAnswer: 0, explanation: 'Inside multiplier > 1 → compress horizontally.', difficulty: 'medium', topicSlug: 'transformations-of-functions' },
  { id: 42, question: '$3f(x)$ does what?', options: ['Vertical stretch by factor 3', 'Horizontal stretch by 3', 'Shift up 3', 'Shift right 3'], correctAnswer: 0, explanation: 'Outside multiplier → vertical stretch.', difficulty: 'easy', topicSlug: 'transformations-of-functions' },
  { id: 43, question: '$f(-x)$ reflects over:', options: ['y-axis', 'x-axis', '$y = x$', 'Origin'], correctAnswer: 0, explanation: 'Negating input → y-axis reflection.', difficulty: 'easy', topicSlug: 'transformations-of-functions' },

  // ============ TRIG RATIOS & UNIT CIRCLE ============
  { id: 44, question: '$\\sin(30°) = $?', options: ['$\\frac{1}{2}$', '$\\frac{\\sqrt{3}}{2}$', '$\\frac{\\sqrt{2}}{2}$', '$1$'], correctAnswer: 0, explanation: '30-60-90 triangle: opposite/hypotenuse.', difficulty: 'easy', topicSlug: 'trigonometric-ratios-unit-circle' },
  { id: 45, question: '$\\cos(60°) = $?', options: ['$\\frac{1}{2}$', '$\\frac{\\sqrt{3}}{2}$', '$0$', '$1$'], correctAnswer: 0, explanation: '$\\cos(60°) = 1/2$.', difficulty: 'easy', topicSlug: 'trigonometric-ratios-unit-circle' },
  { id: 46, question: '$\\tan(45°) = $?', options: ['$1$', '$0$', '$\\sqrt{2}$', '$\\frac{\\sqrt{3}}{3}$'], correctAnswer: 0, explanation: '$\\sin(45°)/\\cos(45°) = 1$.', difficulty: 'easy', topicSlug: 'trigonometric-ratios-unit-circle' },
  { id: 47, question: 'On the unit circle, the coordinates of $\\pi/6$ are:', options: ['$(\\frac{\\sqrt{3}}{2}, \\frac{1}{2})$', '$(\\frac{1}{2}, \\frac{\\sqrt{3}}{2})$', '$(\\frac{\\sqrt{2}}{2}, \\frac{\\sqrt{2}}{2})$', '$(1, 0)$'], correctAnswer: 0, explanation: '$\\cos(\\pi/6) = \\sqrt{3}/2$, $\\sin(\\pi/6) = 1/2$.', difficulty: 'medium', topicSlug: 'trigonometric-ratios-unit-circle' },
  { id: 48, question: '$\\sin(\\pi) = $?', options: ['$0$', '$1$', '$-1$', '$\\frac{1}{2}$'], correctAnswer: 0, explanation: 'Point $(−1, 0)$ on unit circle → $\\sin = 0$.', difficulty: 'easy', topicSlug: 'trigonometric-ratios-unit-circle' },

  // ============ GRAPHS OF SINE & COSINE ============
  { id: 49, question: 'Period of $y = \\sin(x)$:', options: ['$2\\pi$', '$\\pi$', '$\\pi/2$', '$4\\pi$'], correctAnswer: 0, explanation: 'Standard sine has period $2\\pi$.', difficulty: 'easy', topicSlug: 'graphs-of-sine-and-cosine' },
  { id: 50, question: 'Amplitude of $y = 3\\sin(x)$:', options: ['$3$', '$1$', '$6$', '$\\frac{1}{3}$'], correctAnswer: 0, explanation: 'Coefficient of sine is the amplitude.', difficulty: 'easy', topicSlug: 'graphs-of-sine-and-cosine' },
  { id: 51, question: 'Period of $y = \\sin(2x)$:', options: ['$\\pi$', '$2\\pi$', '$4\\pi$', '$\\frac{\\pi}{2}$'], correctAnswer: 0, explanation: 'Period = $2\\pi/B = 2\\pi/2 = \\pi$.', difficulty: 'medium', topicSlug: 'graphs-of-sine-and-cosine' },
  { id: 52, question: 'Range of $y = 2\\sin(x) + 3$:', options: ['$[1, 5]$', '$[-2, 2]$', '$[3, 5]$', '$[-1, 1]$'], correctAnswer: 0, explanation: '$-1 \\leq \\sin(x) \\leq 1$ so $1 \\leq 2\\sin(x)+3 \\leq 5$.', difficulty: 'medium', topicSlug: 'graphs-of-sine-and-cosine' },
  { id: 53, question: 'Phase shift of $y = \\sin(x - \\pi/4)$:', options: ['$\\pi/4$ right', '$\\pi/4$ left', '$\\pi$ right', 'No shift'], correctAnswer: 0, explanation: '$y = \\sin(x - c)$ shifts right by $c$.', difficulty: 'medium', topicSlug: 'graphs-of-sine-and-cosine' },

  // ============ TRIG IDENTITIES ============
  { id: 54, question: '$\\sin^2\\theta + \\cos^2\\theta = $?', options: ['$1$', '$0$', '$\\sin(2\\theta)$', '$2$'], correctAnswer: 0, explanation: 'Pythagorean identity.', difficulty: 'easy', topicSlug: 'trig-identities-pythagorean' },
  { id: 55, question: '$\\cos(2\\theta)$ in terms of $\\cos\\theta$:', options: ['$2\\cos^2\\theta - 1$', '$\\cos^2\\theta -1$', '$2\\cos\\theta$', '$1 - 2\\cos^2\\theta$'], correctAnswer: 0, explanation: 'Double angle formula for cosine.', difficulty: 'medium', topicSlug: 'trig-identities-pythagorean' },
  { id: 56, question: '$\\sin(A+B) = $?', options: ['$\\sin A \\cos B + \\cos A \\sin B$', '$\\sin A \\sin B + \\cos A \\cos B$', '$\\sin A \\cos B - \\cos A \\sin B$', '$\\cos A \\cos B - \\sin A \\sin B$'], correctAnswer: 0, explanation: 'Sine addition formula.', difficulty: 'medium', topicSlug: 'trig-identities-pythagorean' },
  { id: 57, question: '$1 + \\tan^2\\theta = $?', options: ['$\\sec^2\\theta$', '$\\csc^2\\theta$', '$\\cos^2\\theta$', '$\\sin^2\\theta$'], correctAnswer: 0, explanation: 'Pythagorean identity involving tangent.', difficulty: 'medium', topicSlug: 'trig-identities-pythagorean' },

  // ============ INVERSE TRIG FUNCTIONS ============
  { id: 58, question: '$\\arcsin(1/2) = $?', options: ['$\\pi/6$', '$\\pi/3$', '$\\pi/4$', '$\\pi/2$'], correctAnswer: 0, explanation: '$\\sin(\\pi/6) = 1/2$.', difficulty: 'easy', topicSlug: 'inverse-trig-functions' },
  { id: 59, question: 'Range of $\\arcsin(x)$:', options: ['$[-\\pi/2, \\pi/2]$', '$[0, \\pi]$', '$[0, 2\\pi]$', '$(-\\infty, \\infty)$'], correctAnswer: 0, explanation: 'Restricted range for inverse sine.', difficulty: 'medium', topicSlug: 'inverse-trig-functions' },
  { id: 60, question: '$\\arctan(1) = $?', options: ['$\\pi/4$', '$\\pi/2$', '$\\pi/3$', '$\\pi$'], correctAnswer: 0, explanation: '$\\tan(\\pi/4) = 1$.', difficulty: 'easy', topicSlug: 'inverse-trig-functions' },
  { id: 61, question: 'Range of $\\arccos(x)$:', options: ['$[0, \\pi]$', '$[-\\pi/2, \\pi/2]$', '$[0, 2\\pi]$', '$(-\\pi, \\pi)$'], correctAnswer: 0, explanation: 'Restricted range for inverse cosine.', difficulty: 'medium', topicSlug: 'inverse-trig-functions' },

  // ============ LAW OF SINES & COSINES ============
  { id: 62, question: 'Law of Cosines: $c^2 = $?', options: ['$a^2 + b^2 - 2ab\\cos C$', '$a^2 + b^2 + 2ab\\cos C$', '$a^2 + b^2$', '$(a+b)^2$'], correctAnswer: 0, explanation: 'Generalization of Pythagorean theorem.', difficulty: 'easy', topicSlug: 'law-of-sines-and-cosines' },
  { id: 63, question: 'Law of Sines: $\\frac{a}{\\sin A} = $?', options: ['$\\frac{b}{\\sin B} = \\frac{c}{\\sin C}$', '$\\frac{b}{\\cos B}$', '$2r$ only', '$a\\sin B$'], correctAnswer: 0, explanation: 'Ratios of sides to sines of opposite angles.', difficulty: 'easy', topicSlug: 'law-of-sines-and-cosines' },
  { id: 64, question: 'The ambiguous case of Law of Sines occurs with:', options: ['SSA (two sides and non-included angle)', 'SAS', 'ASA', 'SSS'], correctAnswer: 0, explanation: 'SSA can yield 0, 1, or 2 triangles.', difficulty: 'medium', topicSlug: 'law-of-sines-and-cosines' },
  { id: 65, question: 'Use Law of Cosines when you have:', options: ['SAS or SSS', 'ASA', 'AAS', 'Only angles'], correctAnswer: 0, explanation: 'Need at least two sides and included angle or all three sides.', difficulty: 'medium', topicSlug: 'law-of-sines-and-cosines' },

  // ============ POLAR COORDINATES ============
  { id: 66, question: 'Convert $(3, \\pi/2)$ polar to Cartesian:', options: ['$(0, 3)$', '$(3, 0)$', '$(0, -3)$', '$(-3, 0)$'], correctAnswer: 0, explanation: '$x = 3\\cos(\\pi/2) = 0$, $y = 3\\sin(\\pi/2) = 3$.', difficulty: 'easy', topicSlug: 'polar-coordinates-graphs' },
  { id: 67, question: 'Convert Cartesian $(1, 1)$ to polar $r$:', options: ['$\\sqrt{2}$', '$1$', '$2$', '$\\sqrt{3}$'], correctAnswer: 0, explanation: '$r = \\sqrt{1^2 + 1^2} = \\sqrt{2}$.', difficulty: 'easy', topicSlug: 'polar-coordinates-graphs' },
  { id: 68, question: '$r = 2\\sin\\theta$ is a:', options: ['Circle', 'Line', 'Spiral', 'Rose'], correctAnswer: 0, explanation: '$r = 2\\sin\\theta$ is a circle of diameter 2 centered at $(0,1)$.', difficulty: 'medium', topicSlug: 'polar-coordinates-graphs' },
  { id: 69, question: 'A cardioid has the form:', options: ['$r = a + a\\cos\\theta$', '$r = \\theta$', '$r = a\\cos(n\\theta)$', '$r = a$'], correctAnswer: 0, explanation: 'When coefficients are equal: cardioid shape.', difficulty: 'medium', topicSlug: 'polar-coordinates-graphs' },

  // ============ PARAMETRIC EQUATIONS ============
  { id: 70, question: 'If $x = t^2$ and $y = 2t$, eliminate $t$:', options: ['$x = y^2/4$', '$y = 2x^2$', '$x = 2y$', '$y = x/2$'], correctAnswer: 0, explanation: '$t = y/2$, so $x = (y/2)^2 = y^2/4$.', difficulty: 'medium', topicSlug: 'parametric-equations-motion' },
  { id: 71, question: 'Parametric equations of a circle of radius 3:', options: ['$x = 3\\cos t$, $y = 3\\sin t$', '$x = t$, $y = 9 - t^2$', '$x = 3t$, $y = 3t$', '$x = \\cos 3t$, $y = \\sin 3t$'], correctAnswer: 0, explanation: 'Standard parametric form of a circle.', difficulty: 'easy', topicSlug: 'parametric-equations-motion' },
  { id: 72, question: 'If $x = \\cos t$, $y = \\sin t$, the direction of motion as $t$ increases is:', options: ['Counterclockwise', 'Clockwise', 'Left to right', 'Random'], correctAnswer: 0, explanation: 'Standard parametrization traces CCW.', difficulty: 'medium', topicSlug: 'parametric-equations-motion' },

  // ============ VECTORS ============
  { id: 73, question: 'Magnitude of $\\vec{v} = \\langle 3, 4 \\rangle$:', options: ['$5$', '$7$', '$\\sqrt{7}$', '$25$'], correctAnswer: 0, explanation: '$|\\vec{v}| = \\sqrt{9+16} = 5$.', difficulty: 'easy', topicSlug: 'vectors-in-two-dimensions' },
  { id: 74, question: '$\\langle 2, 3 \\rangle + \\langle -1, 4 \\rangle = $?', options: ['$\\langle 1, 7 \\rangle$', '$\\langle 3, 7 \\rangle$', '$\\langle -3, 7 \\rangle$', '$\\langle 1, -1 \\rangle$'], correctAnswer: 0, explanation: 'Add component-wise.', difficulty: 'easy', topicSlug: 'vectors-in-two-dimensions' },
  { id: 75, question: 'Dot product $\\langle 2, 3 \\rangle \\cdot \\langle 4, -1 \\rangle = $?', options: ['$5$', '$11$', '$-5$', '$8$'], correctAnswer: 0, explanation: '$2(4) + 3(-1) = 8 - 3 = 5$.', difficulty: 'medium', topicSlug: 'vectors-in-two-dimensions' },
  { id: 76, question: 'Two vectors are perpendicular when their dot product is:', options: ['$0$', '$1$', '$-1$', 'Undefined'], correctAnswer: 0, explanation: 'Orthogonal ↔ dot product = 0.', difficulty: 'easy', topicSlug: 'vectors-in-two-dimensions' },
  { id: 77, question: 'Unit vector in direction of $\\langle 3, 4 \\rangle$:', options: ['$\\langle 3/5, 4/5 \\rangle$', '$\\langle 3, 4 \\rangle$', '$\\langle 1, 1 \\rangle$', '$\\langle 4/5, 3/5 \\rangle$'], correctAnswer: 0, explanation: 'Divide by magnitude: $\\vec{v}/|\\vec{v}|$.', difficulty: 'medium', topicSlug: 'vectors-in-two-dimensions' },

  // ============ SEQUENCES & SERIES ============
  { id: 78, question: 'Arithmetic sequence: $a_n = a_1 + $?', options: ['$(n-1)d$', '$nd$', '$r^{n-1}$', '$(n+1)d$'], correctAnswer: 0, explanation: 'Common difference $d$ added each term.', difficulty: 'easy', topicSlug: 'arithmetic-geometric-sequences' },
  { id: 79, question: 'Geometric sequence: $a_n = a_1 \\cdot $?', options: ['$r^{n-1}$', '$(n-1)r$', '$nr$', '$r^n$'], correctAnswer: 0, explanation: 'Common ratio $r$ multiplied each term.', difficulty: 'easy', topicSlug: 'arithmetic-geometric-sequences' },
  { id: 80, question: 'Sum of infinite geometric series ($|r| < 1$):', options: ['$\\frac{a_1}{1-r}$', '$\\frac{a_1}{r}$', '$a_1 r$', 'Does not converge'], correctAnswer: 0, explanation: 'Converges when $|r| < 1$.', difficulty: 'medium', topicSlug: 'arithmetic-geometric-sequences' },
  { id: 81, question: 'Is 2, 6, 18, 54 arithmetic or geometric?', options: ['Geometric ($r = 3$)', 'Arithmetic ($d = 4$)', 'Neither', 'Both'], correctAnswer: 0, explanation: 'Each term ×3 → geometric.', difficulty: 'easy', topicSlug: 'arithmetic-geometric-sequences' },
  { id: 82, question: 'Sum of first $n$ terms of arithmetic series:', options: ['$\\frac{n}{2}(a_1 + a_n)$', '$na_1$', '$\\frac{a_1(1-r^n)}{1-r}$', '$n^2 d$'], correctAnswer: 0, explanation: 'Average of first and last × count.', difficulty: 'medium', topicSlug: 'arithmetic-geometric-sequences' },

  // ============ PIECEWISE FUNCTIONS ============
  { id: 83, question: 'A piecewise function is defined by:', options: ['Different formulas on different intervals', 'One formula everywhere', 'Only at integer points', 'Random outputs'], correctAnswer: 0, explanation: 'Different rules apply on different domains.', difficulty: 'easy', topicSlug: 'piecewise-functions' },
  { id: 84, question: 'For $f(x) = \\begin{cases} x^2 & x < 0 \\\\ 2x+1 & x \\geq 0 \\end{cases}$, $f(3) = $?', options: ['$7$', '$9$', '$6$', '$4$'], correctAnswer: 0, explanation: '$3 \\geq 0$ so $f(3) = 2(3)+1 = 7$.', difficulty: 'easy', topicSlug: 'piecewise-functions' },
  { id: 85, question: 'A piecewise function is continuous at a break point when:', options: ['Left and right limits equal the function value', 'It is defined there', 'The formula changes', 'Limits exist'], correctAnswer: 0, explanation: 'Continuity = limits from both sides match.', difficulty: 'medium', topicSlug: 'piecewise-functions' },

  // ============ RATES OF CHANGE ============
  { id: 86, question: 'Average rate of change of $f$ on $[a,b]$:', options: ['$\\frac{f(b)-f(a)}{b-a}$', '$f(b) - f(a)$', '$\\frac{f(a)+f(b)}{2}$', '$f\'(a)$'], correctAnswer: 0, explanation: 'Slope of secant line.', difficulty: 'easy', topicSlug: 'rates-of-change' },
  { id: 87, question: 'Average rate of change of $f(x) = x^2$ on $[1, 3]$:', options: ['$4$', '$8$', '$2$', '$6$'], correctAnswer: 0, explanation: '$(9-1)/(3-1) = 8/2 = 4$.', difficulty: 'easy', topicSlug: 'rates-of-change' },
  { id: 88, question: 'Instantaneous rate of change is the:', options: ['Limit of average rate as interval shrinks to 0', 'Average of two rates', 'Slope of secant line', 'Area under curve'], correctAnswer: 0, explanation: 'Definition of derivative.', difficulty: 'medium', topicSlug: 'rates-of-change' },

  // ============ MATRICES & DETERMINANTS ============
  { id: 89, question: 'Size of matrix product $A_{2×3} \\cdot B_{3×4}$:', options: ['$2×4$', '$3×3$', '$2×3$', 'Undefined'], correctAnswer: 0, explanation: 'Inner dimensions match (3=3), result is outer: $2×4$.', difficulty: 'easy', topicSlug: 'matrices-and-determinants' },
  { id: 90, question: 'Determinant of $\\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix}$:', options: ['$ad - bc$', '$ac - bd$', '$ab - cd$', '$ad + bc$'], correctAnswer: 0, explanation: '2×2 determinant formula.', difficulty: 'easy', topicSlug: 'matrices-and-determinants' },
  { id: 91, question: 'A matrix has an inverse if its determinant is:', options: ['Not zero', 'Zero', 'Positive', 'Negative'], correctAnswer: 0, explanation: 'Singular (det = 0) → no inverse.', difficulty: 'medium', topicSlug: 'matrices-and-determinants' },
  { id: 92, question: '$\\det\\begin{bmatrix} 3 & 1 \\\\ 2 & 5 \\end{bmatrix} = $?', options: ['$13$', '$17$', '$7$', '$15$'], correctAnswer: 0, explanation: '$3(5) - 1(2) = 15 - 2 = 13$.', difficulty: 'easy', topicSlug: 'matrices-and-determinants' },

  // ============ SYSTEMS OF EQUATIONS ============
  { id: 93, question: 'A consistent system has:', options: ['At least one solution', 'No solution', 'Infinitely many', 'Exactly two'], correctAnswer: 0, explanation: 'Consistent = solvable (1 or infinitely many).', difficulty: 'easy', topicSlug: 'systems-of-equations-matrices' },
  { id: 94, question: 'If two lines are parallel, the system is:', options: ['Inconsistent (no solution)', 'Dependent', 'Independent', 'Has exactly one solution'], correctAnswer: 0, explanation: 'Parallel = same slope, different y-intercept → no intersection.', difficulty: 'easy', topicSlug: 'systems-of-equations-matrices' },
  { id: 95, question: 'Cramer\'s Rule uses:', options: ['Determinants to solve systems', 'Elimination', 'Graphing', 'Substitution'], correctAnswer: 0, explanation: "Replace columns with constants, divide determinants.", difficulty: 'medium', topicSlug: 'systems-of-equations-matrices' },

  // ============ COMPLEX NUMBERS ============
  { id: 96, question: '$i^2 = $?', options: ['$-1$', '$1$', '$i$', '$-i$'], correctAnswer: 0, explanation: 'Definition of imaginary unit.', difficulty: 'easy', topicSlug: 'complex-numbers-fundamental-theorem' },
  { id: 97, question: '$(3 + 2i)(1 - i) = $?', options: ['$5 - i$', '$3 - 2i$', '$1 + 5i$', '$5 + i$'], correctAnswer: 0, explanation: '$3 - 3i + 2i - 2i^2 = 3 - i + 2 = 5 - i$.', difficulty: 'medium', topicSlug: 'complex-numbers-fundamental-theorem' },
  { id: 98, question: 'Fundamental Theorem of Algebra states a degree-$n$ polynomial has:', options: ['Exactly $n$ complex roots (counting multiplicity)', '$n$ real roots', 'At most $n/2$ roots', '$n-1$ roots'], correctAnswer: 0, explanation: 'Every polynomial has $n$ roots in $\\mathbb{C}$.', difficulty: 'medium', topicSlug: 'complex-numbers-fundamental-theorem' },
  { id: 99, question: 'Modulus of $3 + 4i$:', options: ['$5$', '$7$', '$\\sqrt{7}$', '$25$'], correctAnswer: 0, explanation: '$|3+4i| = \\sqrt{9+16} = 5$.', difficulty: 'easy', topicSlug: 'complex-numbers-fundamental-theorem' },

  // ============ POLYNOMIAL DIVISION ============
  { id: 100, question: 'Synthetic division is used to divide by:', options: ['$(x - c)$ (linear factors)', 'Any polynomial', 'Quadratics only', 'Constants only'], correctAnswer: 0, explanation: 'Synthetic division works for linear divisors.', difficulty: 'easy', topicSlug: 'polynomial-division' },
  { id: 101, question: 'If $P(c) = 0$ then $(x - c)$ is:', options: ['A factor of $P(x)$', 'Not a factor', 'A root of $P$', 'Undefined'], correctAnswer: 0, explanation: 'Factor Theorem: $P(c) = 0 ↔ (x-c)$ divides $P(x)$.', difficulty: 'easy', topicSlug: 'polynomial-division' },
  { id: 102, question: 'Remainder Theorem: when $P(x)$ is divided by $(x-c)$, the remainder is:', options: ['$P(c)$', '$0$', '$c$', '$P(0)$'], correctAnswer: 0, explanation: 'Just evaluate the polynomial at $c$.', difficulty: 'medium', topicSlug: 'polynomial-division' },

  // ============ LOGARITHMIC EQUATIONS ============
  { id: 103, question: 'Solve: $\\log_2(x) = 5$', options: ['$x = 32$', '$x = 10$', '$x = 25$', '$x = 64$'], correctAnswer: 0, explanation: '$2^5 = 32$.', difficulty: 'easy', topicSlug: 'logarithmic-equations' },
  { id: 104, question: 'Solve: $\\log(x) + \\log(x-3) = 1$', options: ['$x = 5$', '$x = 10$', '$x = 3$', '$x = -2$'], correctAnswer: 0, explanation: '$\\log(x(x-3)) = 1 → x^2 - 3x = 10 → x = 5$ (reject negative).', difficulty: 'hard', topicSlug: 'logarithmic-equations' },
  { id: 105, question: 'Solve: $3^{x+1} = 27$', options: ['$x = 2$', '$x = 3$', '$x = 9$', '$x = 1$'], correctAnswer: 0, explanation: '$3^{x+1} = 3^3 → x+1 = 3 → x = 2$.', difficulty: 'easy', topicSlug: 'logarithmic-equations' },

  // ============ EXPONENTIAL MODELS ============
  { id: 106, question: 'Compound interest: $A = P(1 + r/n)^{nt}$. What is $n$?', options: ['Compounding periods per year', 'Number of years', 'Principal', 'Rate'], correctAnswer: 0, explanation: '$n$ = times interest compounds per year.', difficulty: 'easy', topicSlug: 'exponential-models-applications' },
  { id: 107, question: 'A population doubles every 5 years from 100. Model:', options: ['$P = 100 \\cdot 2^{t/5}$', '$P = 100 \\cdot 2^{5t}$', '$P = 200t$', '$P = 100 + 2t$'], correctAnswer: 0, explanation: 'Doubling time formula.', difficulty: 'medium', topicSlug: 'exponential-models-applications' },
  { id: 108, question: 'Carbon-14 has half-life 5730 years. After 5730 years, fraction remaining:', options: ['$1/2$', '$1/4$', '$1/e$', '$0$'], correctAnswer: 0, explanation: 'One half-life → half remains.', difficulty: 'easy', topicSlug: 'exponential-models-applications' },

  // ============ SEQUENCES & SERIES (GENERAL) ============
  { id: 109, question: 'A sequence where $a_n = a_{n-1} + a_{n-2}$ is called:', options: ['Fibonacci-like (recursive)', 'Arithmetic', 'Geometric', 'Harmonic'], correctAnswer: 0, explanation: 'Each term is sum of two preceding.', difficulty: 'medium', topicSlug: 'sequences-and-series' },
  { id: 110, question: 'Sigma notation $\\sum_{k=1}^{4} k^2 = $?', options: ['$30$', '$10$', '$20$', '$16$'], correctAnswer: 0, explanation: '$1 + 4 + 9 + 16 = 30$.', difficulty: 'medium', topicSlug: 'sequences-and-series' },
  { id: 111, question: 'Geometric series $\\sum_{k=0}^{\\infty} (1/3)^k = $?', options: ['$3/2$', '$1/3$', '$3$', '$1$'], correctAnswer: 0, explanation: '$a/(1-r) = 1/(1-1/3) = 3/2$.', difficulty: 'medium', topicSlug: 'sequences-and-series' },

  // ============ TOP-UP: bring all under-10 sub-topics to >=10 questions ============
  // exponential-models-applications (3 → 10)
  { id: 112, question: 'Continuous compound interest formula:', options: ['$A = Pe^{rt}$', '$A = P(1+r)^t$', '$A = Prt$', '$A = P/(rt)$'], correctAnswer: 0, explanation: 'Exponential growth at instantaneous rate r.', difficulty: 'easy', topicSlug: 'exponential-models-applications' },
  { id: 113, question: 'A bacteria population doubles every hour. Initial 100; after 3 hr:', options: ['800', '600', '400', '300'], correctAnswer: 0, explanation: '$100 \\cdot 2^3 = 800$.', difficulty: 'easy', topicSlug: 'exponential-models-applications' },
  { id: 114, question: 'Half-life model: $A(t) = A_0 (1/2)^{t/h}$. After 2 half-lives, $A/A_0 = $?', options: ['$1/4$', '$1/2$', '$1/3$', '$1/8$'], correctAnswer: 0, explanation: '$(1/2)^2 = 1/4$.', difficulty: 'easy', topicSlug: 'exponential-models-applications' },
  { id: 115, question: 'Newton\'s law of cooling has the form $T(t) = T_s + (T_0 - T_s)e^{-kt}$. As $t \\to \\infty$, $T \\to$', options: ['$T_s$', '$T_0$', '$0$', '$\\infty$'], correctAnswer: 0, explanation: '$e^{-kt} \\to 0$, so $T \\to T_s$ (surroundings).', difficulty: 'medium', topicSlug: 'exponential-models-applications' },
  { id: 116, question: 'A loan of \\$1000 at 5\\% compounded annually grows to (after 2 yr):', options: ['$\\$1102.50$', '$\\$1100$', '$\\$1050$', '$\\$1500$'], correctAnswer: 0, explanation: '$1000(1.05)^2 = 1102.50$.', difficulty: 'easy', topicSlug: 'exponential-models-applications' },
  { id: 117, question: 'Exponential decay model with rate $r$ negative satisfies:', options: ['$A(t)$ decreases toward $0$', '$A(t)$ grows', '$A(t)$ oscillates', '$A(t)$ is constant'], correctAnswer: 0, explanation: 'Negative rate ⇒ decay.', difficulty: 'easy', topicSlug: 'exponential-models-applications' },
  { id: 118, question: 'A population of 200 grows continuously at 4\\%. Population after 5 yr is:', options: ['$200e^{0.20}$', '$200(1.04)^5$', '$200 \\cdot 1.20$', '$200 + 0.04 \\cdot 5$'], correctAnswer: 0, explanation: 'Continuous: $A_0 e^{rt} = 200 e^{0.04 \\cdot 5}$.', difficulty: 'medium', topicSlug: 'exponential-models-applications' },

  // logarithmic-equations (3 → 10)
  { id: 119, question: 'Solve $\\log_2 x = 5$.', options: ['$32$', '$10$', '$25$', '$5$'], correctAnswer: 0, explanation: '$x = 2^5 = 32$.', difficulty: 'easy', topicSlug: 'logarithmic-equations' },
  { id: 120, question: 'Solve $\\ln x = 3$.', options: ['$e^3$', '$3$', '$e$', '$\\ln 3$'], correctAnswer: 0, explanation: 'Exponentiate: $x = e^3$.', difficulty: 'easy', topicSlug: 'logarithmic-equations' },
  { id: 121, question: 'Solve $\\log(x) + \\log(x-3) = 1$.', options: ['$x = 5$', '$x = -2$', '$x = 10$', '$x = 3$'], correctAnswer: 0, explanation: '$\\log(x(x-3)) = 1 \\Rightarrow x^2 - 3x - 10 = 0 \\Rightarrow x = 5$ (reject $x = -2$).', difficulty: 'medium', topicSlug: 'logarithmic-equations' },
  { id: 122, question: 'Solve $e^{2x} = 9$.', options: ['$x = \\ln 3$', '$x = 3$', '$x = 9/2$', '$x = \\ln 9$'], correctAnswer: 0, explanation: '$2x = \\ln 9 = 2\\ln 3 \\Rightarrow x = \\ln 3$.', difficulty: 'medium', topicSlug: 'logarithmic-equations' },
  { id: 123, question: 'Solve $\\log_3(x+1) = 2$.', options: ['$x = 8$', '$x = 5$', '$x = 9$', '$x = 7$'], correctAnswer: 0, explanation: '$x + 1 = 9 \\Rightarrow x = 8$.', difficulty: 'easy', topicSlug: 'logarithmic-equations' },
  { id: 124, question: 'Solve $5^x = 30$ (round to two decimals).', options: ['$\\approx 2.11$', '$\\approx 1.50$', '$\\approx 3.00$', '$\\approx 6.00$'], correctAnswer: 0, explanation: '$x = \\log_5 30 = \\ln 30 / \\ln 5 \\approx 2.11$.', difficulty: 'medium', topicSlug: 'logarithmic-equations' },
  { id: 125, question: 'Domain of $\\log(x - 4)$:', options: ['$x > 4$', '$x \\ge 4$', '$x < 4$', 'All reals'], correctAnswer: 0, explanation: 'Argument must be positive.', difficulty: 'easy', topicSlug: 'logarithmic-equations' },

  // parametric-equations-motion (3 → 10)
  { id: 126, question: 'For $x = t, y = t^2$, eliminating $t$ gives:', options: ['$y = x^2$', '$y = x$', '$x = y^2$', '$y = 2x$'], correctAnswer: 0, explanation: '$t = x \\Rightarrow y = x^2$.', difficulty: 'easy', topicSlug: 'parametric-equations-motion' },
  { id: 127, question: 'For $x = \\cos t, y = \\sin t$, the curve is:', options: ['Unit circle', 'Line $y = x$', 'Parabola', 'Ellipse with $a \\ne b$'], correctAnswer: 0, explanation: '$x^2 + y^2 = 1$.', difficulty: 'easy', topicSlug: 'parametric-equations-motion' },
  { id: 128, question: 'For $x = 2t, y = 3t + 1$, the slope $dy/dx$ is:', options: ['$3/2$', '$2/3$', '$1$', '$3$'], correctAnswer: 0, explanation: '$dy/dx = (dy/dt)/(dx/dt) = 3/2$.', difficulty: 'medium', topicSlug: 'parametric-equations-motion' },
  { id: 129, question: 'Projectile: $x = v_0 \\cos\\theta \\cdot t$, $y = v_0 \\sin\\theta \\cdot t - \\tfrac{1}{2}gt^2$. The trajectory is:', options: ['Parabolic', 'Linear', 'Circular', 'Hyperbolic'], correctAnswer: 0, explanation: 'Eliminating $t$ gives $y$ quadratic in $x$.', difficulty: 'medium', topicSlug: 'parametric-equations-motion' },
  { id: 130, question: 'Speed of a particle with $x(t), y(t)$ is:', options: ['$\\sqrt{(dx/dt)^2 + (dy/dt)^2}$', '$dx/dt + dy/dt$', '$dy/dx$', '$|dx/dt|$'], correctAnswer: 0, explanation: 'Magnitude of velocity vector.', difficulty: 'medium', topicSlug: 'parametric-equations-motion' },
  { id: 131, question: 'Eliminating $t$ from $x = t + 1, y = 2t - 3$ gives:', options: ['$y = 2x - 5$', '$y = x + 2$', '$y = 2x - 3$', '$y = x - 1$'], correctAnswer: 0, explanation: '$t = x - 1 \\Rightarrow y = 2(x-1) - 3 = 2x - 5$.', difficulty: 'easy', topicSlug: 'parametric-equations-motion' },
  { id: 132, question: 'For $x = \\cos t, y = \\sin t$, the particle moves:', options: ['Counterclockwise around the unit circle', 'Clockwise', 'Straight line', 'Spirally'], correctAnswer: 0, explanation: 'At $t = 0$ at $(1,0)$, then to $(0,1)$ — counterclockwise.', difficulty: 'medium', topicSlug: 'parametric-equations-motion' },

  // piecewise-functions (3 → 10)
  { id: 133, question: 'For $f(x) = \\begin{cases} x^2, & x < 0 \\\\ 2x, & x \\ge 0 \\end{cases}$, $f(-2) = $?', options: ['$4$', '$-4$', '$2$', '$0$'], correctAnswer: 0, explanation: 'Use $x^2$ branch: $(-2)^2 = 4$.', difficulty: 'easy', topicSlug: 'piecewise-functions' },
  { id: 134, question: 'Same $f$ as above. $f(3) = $?', options: ['$6$', '$9$', '$3$', '$0$'], correctAnswer: 0, explanation: 'Use $2x$ branch: $2 \\cdot 3 = 6$.', difficulty: 'easy', topicSlug: 'piecewise-functions' },
  { id: 135, question: 'For $f(x) = |x|$, $f$ can be written as a piecewise function:', options: ['$f(x) = x$ for $x \\ge 0$, $-x$ for $x < 0$', '$f(x) = x^2$', '$f(x) = -x$', '$f(x) = x$'], correctAnswer: 0, explanation: 'Definition of absolute value.', difficulty: 'easy', topicSlug: 'piecewise-functions' },
  { id: 136, question: 'A piecewise function is continuous at $x = a$ if:', options: ['Left limit = right limit = $f(a)$', 'Left limit only exists', 'Right limit only', 'Function values agree on one side'], correctAnswer: 0, explanation: 'Definition of continuity.', difficulty: 'medium', topicSlug: 'piecewise-functions' },
  { id: 137, question: 'For $f(x) = \\begin{cases} x+1, & x < 2 \\\\ 3, & x = 2 \\\\ 5-x, & x > 2 \\end{cases}$, $\\lim_{x \\to 2} f(x) = $?', options: ['$3$', '$5$', 'Does not exist', '$2$'], correctAnswer: 0, explanation: 'Both side limits equal 3; even though $f(2) = 3$.', difficulty: 'medium', topicSlug: 'piecewise-functions' },
  { id: 138, question: 'Step function $\\lfloor x \\rfloor$ is discontinuous at:', options: ['Every integer', 'Only at $x = 0$', 'Nowhere', 'Only at $x = 1$'], correctAnswer: 0, explanation: 'Greatest integer function jumps at each integer.', difficulty: 'medium', topicSlug: 'piecewise-functions' },
  { id: 139, question: 'Domain of a piecewise function is:', options: ['Union of the domains of each piece', 'Intersection of pieces', 'Only first piece', 'Only last piece'], correctAnswer: 0, explanation: 'Each branch contributes its part.', difficulty: 'easy', topicSlug: 'piecewise-functions' },

  // polynomial-division (3 → 10)
  { id: 140, question: 'Divide $x^2 - 4$ by $x - 2$:', options: ['$x + 2$', '$x - 2$', '$x^2 - 2$', '$x + 4$'], correctAnswer: 0, explanation: 'Difference of squares; quotient is $x+2$.', difficulty: 'easy', topicSlug: 'polynomial-division' },
  { id: 141, question: 'Synthetic division of $x^3 - 1$ by $x - 1$ gives quotient:', options: ['$x^2 + x + 1$', '$x^2 - x + 1$', '$x^2 - 1$', '$x + 1$'], correctAnswer: 0, explanation: 'Sum of cubes-style factoring (for $a^3 - b^3$).', difficulty: 'medium', topicSlug: 'polynomial-division' },
  { id: 142, question: 'Remainder when $p(x) = x^3 + 2x - 5$ is divided by $x - 1$:', options: ['$-2$', '$0$', '$5$', '$1$'], correctAnswer: 0, explanation: 'Remainder Theorem: $p(1) = 1 + 2 - 5 = -2$.', difficulty: 'easy', topicSlug: 'polynomial-division' },
  { id: 143, question: 'If $p(c) = 0$, then $(x - c)$ is a:', options: ['Factor of $p(x)$', 'Vertical asymptote', 'Root multiplicity 2', 'Removable hole'], correctAnswer: 0, explanation: 'Factor Theorem.', difficulty: 'easy', topicSlug: 'polynomial-division' },
  { id: 144, question: 'Divide $2x^2 + 3x - 2$ by $2x - 1$:', options: ['$x + 2$', '$x - 2$', '$2x + 2$', '$x + 1$'], correctAnswer: 0, explanation: 'Long division: quotient $x+2$, remainder $0$.', difficulty: 'medium', topicSlug: 'polynomial-division' },
  { id: 145, question: 'Quotient of $x^4 - 16$ by $x^2 - 4$ is:', options: ['$x^2 + 4$', '$x^2 - 4$', '$x^2$', '$x^2 + 8$'], correctAnswer: 0, explanation: 'Difference of squares: $(x^2-4)(x^2+4)$.', difficulty: 'medium', topicSlug: 'polynomial-division' },
  { id: 146, question: 'Synthetic division can be used when dividing by:', options: ['A linear factor $x - c$', 'Any polynomial', 'A quadratic', 'A constant'], correctAnswer: 0, explanation: 'Standard synthetic division applies only to $(x - c)$.', difficulty: 'easy', topicSlug: 'polynomial-division' },

  // rates-of-change (3 → 10)
  { id: 147, question: 'Average rate of change of $f$ on $[a,b]$:', options: ['$\\frac{f(b) - f(a)}{b - a}$', '$f(b) - f(a)$', '$\\frac{b - a}{f(b) - f(a)}$', '$f(a) + f(b)$'], correctAnswer: 0, explanation: 'Slope of secant line.', difficulty: 'easy', topicSlug: 'rates-of-change' },
  { id: 148, question: 'Average rate of change of $f(x) = x^2$ on $[1, 3]$:', options: ['$4$', '$2$', '$8$', '$3$'], correctAnswer: 0, explanation: '$(9 - 1)/2 = 4$.', difficulty: 'easy', topicSlug: 'rates-of-change' },
  { id: 149, question: 'Instantaneous rate of change at $x = a$ is the limit of:', options: ['$\\frac{f(a+h)-f(a)}{h}$ as $h \\to 0$', '$f(a+1) - f(a)$', '$f\'(a) \\cdot h$', '$\\frac{f(a)-f(0)}{a}$'], correctAnswer: 0, explanation: 'Definition of derivative.', difficulty: 'medium', topicSlug: 'rates-of-change' },
  { id: 150, question: 'A car travels 120 mi in 3 hr. Its average speed is:', options: ['$40$ mph', '$60$ mph', '$30$ mph', '$120$ mph'], correctAnswer: 0, explanation: '$120/3 = 40$.', difficulty: 'easy', topicSlug: 'rates-of-change' },
  { id: 151, question: 'For a linear function $f(x) = mx + b$, the average rate of change is always:', options: ['$m$', '$b$', '$0$', 'Variable'], correctAnswer: 0, explanation: 'Constant slope.', difficulty: 'easy', topicSlug: 'rates-of-change' },
  { id: 152, question: 'If $f$ is concave up on $[a,b]$, the slope of secant is:', options: ['Greater than $f\'(a)$ and less than $f\'(b)$', 'Equal to $f\'(a)$', 'Equal to $f\'(b)$', 'Always zero'], correctAnswer: 0, explanation: 'On concave-up arc, secant slope lies between endpoint tangent slopes.', difficulty: 'hard', topicSlug: 'rates-of-change' },
  { id: 153, question: 'Average rate of change of $f(x) = e^x$ on $[0, 1]$ equals:', options: ['$e - 1$', '$1$', '$e$', '$0$'], correctAnswer: 0, explanation: '$(e^1 - e^0)/(1 - 0) = e - 1$.', difficulty: 'medium', topicSlug: 'rates-of-change' },

  // sequences-and-series (3 → 10)
  { id: 154, question: 'Sum of first $n$ positive integers:', options: ['$n(n+1)/2$', '$n^2$', '$n(n-1)/2$', '$n^2/2$'], correctAnswer: 0, explanation: 'Gauss\'s formula.', difficulty: 'easy', topicSlug: 'sequences-and-series' },
  { id: 155, question: 'A series $\\sum a_n$ converges if its sequence of partial sums:', options: ['Approaches a finite limit', 'Goes to infinity', 'Oscillates', 'Is constant'], correctAnswer: 0, explanation: 'Definition of convergence.', difficulty: 'easy', topicSlug: 'sequences-and-series' },
  { id: 156, question: 'Geometric series $\\sum_{k=0}^{\\infty} r^k$ converges iff:', options: ['$|r| < 1$', '$r > 0$', '$r < 0$', '$|r| = 1$'], correctAnswer: 0, explanation: 'Standard convergence criterion.', difficulty: 'medium', topicSlug: 'sequences-and-series' },
  { id: 157, question: 'Sum of $\\sum_{k=0}^{\\infty} (1/2)^k = $?', options: ['$2$', '$1$', '$1/2$', '$\\infty$'], correctAnswer: 0, explanation: '$1/(1 - 1/2) = 2$.', difficulty: 'easy', topicSlug: 'sequences-and-series' },
  { id: 158, question: 'Harmonic series $\\sum 1/n$:', options: ['Diverges', 'Converges to a finite sum', 'Equals $\\ln 2$', 'Equals $1$'], correctAnswer: 0, explanation: 'Famous divergent series.', difficulty: 'medium', topicSlug: 'sequences-and-series' },
  { id: 159, question: 'A telescoping series $\\sum (a_n - a_{n+1})$ converges iff:', options: ['$a_n$ has a finite limit', '$a_n \\to \\infty$', '$a_n$ is eventually 0', '$a_n$ alternates'], correctAnswer: 0, explanation: 'Partial sums collapse.', difficulty: 'medium', topicSlug: 'sequences-and-series' },
  { id: 160, question: 'Sum of arithmetic series with first term $a$, last term $l$, $n$ terms:', options: ['$\\frac{n(a + l)}{2}$', '$na$', '$nl$', '$\\frac{a \\cdot l \\cdot n}{2}$'], correctAnswer: 0, explanation: 'Average of endpoints times count.', difficulty: 'easy', topicSlug: 'sequences-and-series' },

  // systems-of-equations-matrices (3 → 10)
  { id: 161, question: 'A system with no solutions is called:', options: ['Inconsistent', 'Dependent', 'Consistent', 'Trivial'], correctAnswer: 0, explanation: 'Lines parallel; no intersection.', difficulty: 'easy', topicSlug: 'systems-of-equations-matrices' },
  { id: 162, question: 'A 2×2 system has infinitely many solutions when the lines are:', options: ['The same line', 'Parallel', 'Perpendicular', 'Intersecting at one point'], correctAnswer: 0, explanation: 'Coincident lines ⇒ dependent system.', difficulty: 'easy', topicSlug: 'systems-of-equations-matrices' },
  { id: 163, question: 'Solve $x + y = 5$, $x - y = 1$:', options: ['$(3, 2)$', '$(2, 3)$', '$(4, 1)$', '$(5, 0)$'], correctAnswer: 0, explanation: 'Add: $2x = 6$ ⇒ $x = 3$, $y = 2$.', difficulty: 'easy', topicSlug: 'systems-of-equations-matrices' },
  { id: 164, question: 'Cramer\'s rule uses:', options: ['Determinants of coefficient matrix and modified matrices', 'Inverse functions', 'Logarithms', 'Trigonometry'], correctAnswer: 0, explanation: 'Solutions = ratios of determinants.', difficulty: 'medium', topicSlug: 'systems-of-equations-matrices' },
  { id: 165, question: 'Augmented matrix of $2x + y = 3$, $x - y = 0$ is:', options: ['$\\begin{pmatrix} 2 & 1 & | & 3 \\\\ 1 & -1 & | & 0 \\end{pmatrix}$', '$\\begin{pmatrix} 2 & 1 \\\\ 1 & -1 \\end{pmatrix}$', '$\\begin{pmatrix} 3 & 0 \\end{pmatrix}$', '$\\begin{pmatrix} 1 & 1 \\\\ 1 & 1 \\end{pmatrix}$'], correctAnswer: 0, explanation: 'Coefficients with constants appended.', difficulty: 'easy', topicSlug: 'systems-of-equations-matrices' },
  { id: 166, question: 'A homogeneous system $A\\mathbf{x} = \\mathbf{0}$ always has:', options: ['The trivial solution $\\mathbf{x} = \\mathbf{0}$', 'No solutions', 'Infinitely many', 'A unique nonzero solution'], correctAnswer: 0, explanation: 'Zero vector always satisfies.', difficulty: 'medium', topicSlug: 'systems-of-equations-matrices' },
  { id: 167, question: 'Reduced row echelon form (RREF) leading entries are:', options: ['1, with zeros above and below', 'Any nonzero number', 'All zeros', 'Negative ones'], correctAnswer: 0, explanation: 'Pivot is 1; rest of column is 0.', difficulty: 'medium', topicSlug: 'systems-of-equations-matrices' },

  // complex-numbers-fundamental-theorem (4 → 10)
  { id: 168, question: '$(2 + 3i)(2 - 3i) = $?', options: ['$13$', '$4 - 9i^2$', '$4 + 6i$', '$5$'], correctAnswer: 0, explanation: '$4 - 9i^2 = 4 + 9 = 13$.', difficulty: 'easy', topicSlug: 'complex-numbers-fundamental-theorem' },
  { id: 169, question: 'Modulus of $3 + 4i$:', options: ['$5$', '$7$', '$\\sqrt{7}$', '$25$'], correctAnswer: 0, explanation: '$\\sqrt{9 + 16} = 5$.', difficulty: 'easy', topicSlug: 'complex-numbers-fundamental-theorem' },
  { id: 170, question: 'Conjugate of $a + bi$:', options: ['$a - bi$', '$-a + bi$', '$-a - bi$', '$b + ai$'], correctAnswer: 0, explanation: 'Flip sign of imaginary part.', difficulty: 'easy', topicSlug: 'complex-numbers-fundamental-theorem' },
  { id: 171, question: 'Number of complex roots (counting multiplicity) of $x^4 - 1 = 0$:', options: ['$4$', '$2$', '$1$', '$0$'], correctAnswer: 0, explanation: 'Fundamental Theorem of Algebra: degree $n$ ⇒ $n$ roots.', difficulty: 'medium', topicSlug: 'complex-numbers-fundamental-theorem' },
  { id: 172, question: '$i^4 = $?', options: ['$1$', '$-1$', '$i$', '$-i$'], correctAnswer: 0, explanation: '$i^2 = -1$, so $i^4 = 1$.', difficulty: 'easy', topicSlug: 'complex-numbers-fundamental-theorem' },
  { id: 173, question: 'For real-coefficient polynomials, complex roots come in:', options: ['Conjugate pairs', 'Real-imaginary pairs', 'Multiplicity 2 only', 'No pattern'], correctAnswer: 0, explanation: 'If $a + bi$ is a root, so is $a - bi$.', difficulty: 'medium', topicSlug: 'complex-numbers-fundamental-theorem' },

  // composite-functions (4 → 10)
  { id: 174, question: 'For $f(x) = x + 1, g(x) = x^2$, $(f \\circ g)(x) = $?', options: ['$x^2 + 1$', '$(x+1)^2$', '$x^3 + x^2$', '$x + 1$'], correctAnswer: 0, explanation: '$f(g(x)) = g(x) + 1 = x^2 + 1$.', difficulty: 'easy', topicSlug: 'composite-functions' },
  { id: 175, question: 'For the same $f, g$, $(g \\circ f)(x) = $?', options: ['$(x+1)^2$', '$x^2 + 1$', '$x^2 + x$', '$x + 1$'], correctAnswer: 0, explanation: '$g(f(x)) = (x+1)^2$.', difficulty: 'easy', topicSlug: 'composite-functions' },
  { id: 176, question: 'Composition is generally:', options: ['Not commutative', 'Always commutative', 'Always associative AND commutative', 'Only defined for linear functions'], correctAnswer: 0, explanation: '$f \\circ g \\ne g \\circ f$ in general.', difficulty: 'medium', topicSlug: 'composite-functions' },
  { id: 177, question: 'Domain of $f \\circ g$ requires:', options: ['$x$ in domain of $g$, with $g(x)$ in domain of $f$', 'Only $x$ in domain of $f$', 'Any $x$', 'Only $x = 0$'], correctAnswer: 0, explanation: 'Both inputs must be valid.', difficulty: 'medium', topicSlug: 'composite-functions' },
  { id: 178, question: 'If $f(x) = \\sqrt{x}$ and $g(x) = x - 4$, the domain of $f \\circ g$ is:', options: ['$x \\ge 4$', '$x > 0$', 'All reals', '$x \\le 4$'], correctAnswer: 0, explanation: 'Need $g(x) = x - 4 \\ge 0$.', difficulty: 'medium', topicSlug: 'composite-functions' },
  { id: 179, question: '$(f \\circ f)(x)$ for $f(x) = 2x + 1$:', options: ['$4x + 3$', '$4x + 2$', '$2x + 2$', '$2x^2 + 1$'], correctAnswer: 0, explanation: '$f(f(x)) = 2(2x+1) + 1 = 4x + 3$.', difficulty: 'medium', topicSlug: 'composite-functions' },

  // inverse-functions (4 → 10)
  { id: 180, question: 'Inverse of $f(x) = 2x + 3$:', options: ['$f^{-1}(x) = (x-3)/2$', '$f^{-1}(x) = (x+3)/2$', '$f^{-1}(x) = 2x - 3$', '$f^{-1}(x) = 1/(2x+3)$'], correctAnswer: 0, explanation: 'Solve $y = 2x + 3$ for $x$.', difficulty: 'easy', topicSlug: 'inverse-functions' },
  { id: 181, question: 'A function has an inverse iff it is:', options: ['One-to-one (passes horizontal line test)', 'Continuous', 'Differentiable', 'Linear'], correctAnswer: 0, explanation: 'Injective ⇒ invertible.', difficulty: 'medium', topicSlug: 'inverse-functions' },
  { id: 182, question: 'Graph of $f^{-1}$ is the reflection of $f$ across:', options: ['$y = x$', '$y$-axis', '$x$-axis', 'Origin'], correctAnswer: 0, explanation: 'Inverse swaps $x$ and $y$.', difficulty: 'easy', topicSlug: 'inverse-functions' },
  { id: 183, question: 'If $f(2) = 7$, then $f^{-1}(7) = $?', options: ['$2$', '$7$', '$1/2$', '$1/7$'], correctAnswer: 0, explanation: 'Inverse undoes the function.', difficulty: 'easy', topicSlug: 'inverse-functions' },
  { id: 184, question: 'Inverse of $f(x) = e^x$:', options: ['$\\ln x$', '$1/e^x$', '$1/\\ln x$', '$x \\ln x$'], correctAnswer: 0, explanation: 'Logarithm is inverse of exponential.', difficulty: 'easy', topicSlug: 'inverse-functions' },
  { id: 185, question: 'Domain of $f^{-1}$ equals:', options: ['Range of $f$', 'Domain of $f$', '$\\mathbb{R}$', '$[0, \\infty)$'], correctAnswer: 0, explanation: 'Roles of domain and range swap.', difficulty: 'medium', topicSlug: 'inverse-functions' },

  // inverse-trig-functions (4 → 10)
  { id: 186, question: '$\\arcsin(1/2) = $?', options: ['$\\pi/6$', '$\\pi/3$', '$\\pi/4$', '$\\pi/2$'], correctAnswer: 0, explanation: '$\\sin(\\pi/6) = 1/2$.', difficulty: 'easy', topicSlug: 'inverse-trig-functions' },
  { id: 187, question: 'Range of $\\arccos x$:', options: ['$[0, \\pi]$', '$[-\\pi/2, \\pi/2]$', '$\\mathbb{R}$', '$(0, \\pi)$'], correctAnswer: 0, explanation: 'Standard principal-value range.', difficulty: 'easy', topicSlug: 'inverse-trig-functions' },
  { id: 188, question: 'Range of $\\arctan x$:', options: ['$(-\\pi/2, \\pi/2)$', '$[0, \\pi]$', '$\\mathbb{R}$', '$(0, \\pi)$'], correctAnswer: 0, explanation: 'Open interval; tangent has vertical asymptotes.', difficulty: 'easy', topicSlug: 'inverse-trig-functions' },
  { id: 189, question: '$\\arccos(0) = $?', options: ['$\\pi/2$', '$0$', '$\\pi$', '$-\\pi/2$'], correctAnswer: 0, explanation: '$\\cos(\\pi/2) = 0$.', difficulty: 'easy', topicSlug: 'inverse-trig-functions' },
  { id: 190, question: '$\\sin(\\arctan(3/4)) = $?', options: ['$3/5$', '$4/5$', '$3/4$', '$1$'], correctAnswer: 0, explanation: 'Right triangle opposite=3, adj=4, hyp=5; sin = 3/5.', difficulty: 'medium', topicSlug: 'inverse-trig-functions' },
  { id: 191, question: '$\\arctan(1) = $?', options: ['$\\pi/4$', '$\\pi/2$', '$\\pi/6$', '$0$'], correctAnswer: 0, explanation: '$\\tan(\\pi/4) = 1$.', difficulty: 'easy', topicSlug: 'inverse-trig-functions' },

  // law-of-sines-and-cosines (4 → 10)
  { id: 192, question: 'Law of sines:', options: ['$a/\\sin A = b/\\sin B = c/\\sin C$', '$a^2 = b^2 + c^2$', '$a = b + c$', '$\\cos A = b/c$'], correctAnswer: 0, explanation: 'Standard form.', difficulty: 'easy', topicSlug: 'law-of-sines-and-cosines' },
  { id: 193, question: 'Law of cosines:', options: ['$c^2 = a^2 + b^2 - 2ab\\cos C$', '$c = a + b$', '$\\sin C = a/b$', '$c^2 = a^2 + b^2$'], correctAnswer: 0, explanation: 'Generalization of Pythagorean theorem.', difficulty: 'easy', topicSlug: 'law-of-sines-and-cosines' },
  { id: 194, question: 'In a triangle with $a = 5$, $b = 6$, $C = 60°$, $c = $?', options: ['$\\sqrt{31}$', '$\\sqrt{61}$', '$\\sqrt{11}$', '$11$'], correctAnswer: 0, explanation: '$c^2 = 25 + 36 - 60 \\cdot 1/2 = 31$.', difficulty: 'medium', topicSlug: 'law-of-sines-and-cosines' },
  { id: 195, question: 'Law of sines is most useful when given:', options: ['ASA or AAS', 'SSS', 'SAS', 'A right triangle'], correctAnswer: 0, explanation: 'Need at least one side and its opposite angle.', difficulty: 'medium', topicSlug: 'law-of-sines-and-cosines' },
  { id: 196, question: 'Law of cosines applies for:', options: ['SSS or SAS', 'AAA only', 'Right triangles only', 'Equilateral only'], correctAnswer: 0, explanation: 'Use it for SSS or SAS configurations.', difficulty: 'medium', topicSlug: 'law-of-sines-and-cosines' },
  { id: 197, question: 'In a triangle with $A = 30°, B = 60°, a = 5$, $b = $?', options: ['$5\\sqrt{3}$', '$10$', '$5/\\sqrt{3}$', '$15$'], correctAnswer: 0, explanation: '$b = a \\sin B/\\sin A = 5 \\cdot (\\sqrt{3}/2)/(1/2) = 5\\sqrt{3}$.', difficulty: 'medium', topicSlug: 'law-of-sines-and-cosines' },

  // matrices-and-determinants (4 → 10)
  { id: 198, question: '$\\det\\begin{pmatrix} 2 & 1 \\\\ 3 & 4 \\end{pmatrix} = $?', options: ['$5$', '$8$', '$11$', '$-5$'], correctAnswer: 0, explanation: '$ad - bc = 8 - 3 = 5$.', difficulty: 'easy', topicSlug: 'matrices-and-determinants' },
  { id: 199, question: 'Identity matrix $I$ satisfies:', options: ['$AI = IA = A$', '$AI = 0$', '$IA = I$ only', 'Not defined'], correctAnswer: 0, explanation: 'Multiplicative identity.', difficulty: 'easy', topicSlug: 'matrices-and-determinants' },
  { id: 200, question: 'A matrix is invertible iff its determinant:', options: ['Is nonzero', 'Is positive', 'Equals $1$', 'Is integer'], correctAnswer: 0, explanation: 'Singular matrix ⇔ det = 0.', difficulty: 'medium', topicSlug: 'matrices-and-determinants' },
  { id: 201, question: 'For $A$ a 2×2 matrix, $\\det(2A) = $?', options: ['$4 \\det A$', '$2 \\det A$', '$\\det A$', '$8 \\det A$'], correctAnswer: 0, explanation: 'Each row scales by 2 ⇒ det scales by $2^2$.', difficulty: 'medium', topicSlug: 'matrices-and-determinants' },
  { id: 202, question: 'Matrix multiplication $AB$ requires:', options: ['Columns of $A$ = rows of $B$', 'Same dimensions', 'Square matrices only', 'Determinants nonzero'], correctAnswer: 0, explanation: '$A_{m \\times n} \\cdot B_{n \\times p}$.', difficulty: 'easy', topicSlug: 'matrices-and-determinants' },
  { id: 203, question: 'Inverse of $\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$ is:', options: ['$\\frac{1}{ad-bc}\\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$', '$\\begin{pmatrix} d & b \\\\ c & a \\end{pmatrix}$', '$\\begin{pmatrix} a & c \\\\ b & d \\end{pmatrix}$', 'Not invertible'], correctAnswer: 0, explanation: 'Standard 2×2 inverse formula.', difficulty: 'medium', topicSlug: 'matrices-and-determinants' },

  // polar-coordinates-graphs (4 → 10)
  { id: 204, question: 'Convert $(r, \\theta) = (2, \\pi/2)$ to rectangular:', options: ['$(0, 2)$', '$(2, 0)$', '$(\\sqrt{2}, \\sqrt{2})$', '$(-2, 0)$'], correctAnswer: 0, explanation: '$x = 2\\cos(\\pi/2) = 0$, $y = 2\\sin(\\pi/2) = 2$.', difficulty: 'easy', topicSlug: 'polar-coordinates-graphs' },
  { id: 205, question: 'Convert $(x, y) = (1, 1)$ to polar:', options: ['$(\\sqrt{2}, \\pi/4)$', '$(2, \\pi/4)$', '$(1, \\pi/2)$', '$(\\sqrt{2}, \\pi/2)$'], correctAnswer: 0, explanation: '$r = \\sqrt{2}$, $\\theta = \\arctan(1) = \\pi/4$.', difficulty: 'easy', topicSlug: 'polar-coordinates-graphs' },
  { id: 206, question: '$r = 4$ in polar describes:', options: ['Circle radius 4 at origin', 'Line $x = 4$', 'Parabola', 'Spiral'], correctAnswer: 0, explanation: 'All points distance 4 from origin.', difficulty: 'easy', topicSlug: 'polar-coordinates-graphs' },
  { id: 207, question: '$r = 2\\cos\\theta$ describes:', options: ['Circle radius 1 centered at $(1, 0)$', 'Line through origin', 'Spiral', 'Cardioid'], correctAnswer: 0, explanation: 'Convert: $r^2 = 2r\\cos\\theta$ ⇒ $x^2 + y^2 = 2x$ ⇒ $(x-1)^2 + y^2 = 1$.', difficulty: 'medium', topicSlug: 'polar-coordinates-graphs' },
  { id: 208, question: '$r = 1 + \\cos\\theta$ is a:', options: ['Cardioid', 'Circle', 'Limacon with inner loop', 'Spiral'], correctAnswer: 0, explanation: 'Form $a + a\\cos\\theta$ with $a = 1$ is a cardioid.', difficulty: 'medium', topicSlug: 'polar-coordinates-graphs' },
  { id: 209, question: 'A point with negative $r$ is plotted by:', options: ['Going opposite direction of $\\theta$', 'Reflecting across $x$-axis', 'Ignoring $r$', 'Plotting at origin'], correctAnswer: 0, explanation: '$(-r, \\theta) = (r, \\theta + \\pi)$.', difficulty: 'medium', topicSlug: 'polar-coordinates-graphs' },

  // trig-identities-pythagorean (4 → 10)
  { id: 210, question: '$\\sin^2\\theta + \\cos^2\\theta = $?', options: ['$1$', '$0$', '$\\sin\\theta$', '$\\cos\\theta$'], correctAnswer: 0, explanation: 'Pythagorean identity.', difficulty: 'easy', topicSlug: 'trig-identities-pythagorean' },
  { id: 211, question: '$1 + \\tan^2\\theta = $?', options: ['$\\sec^2\\theta$', '$\\csc^2\\theta$', '$\\cos^2\\theta$', '$1$'], correctAnswer: 0, explanation: 'Divide first identity by $\\cos^2\\theta$.', difficulty: 'medium', topicSlug: 'trig-identities-pythagorean' },
  { id: 212, question: '$1 + \\cot^2\\theta = $?', options: ['$\\csc^2\\theta$', '$\\sec^2\\theta$', '$\\sin^2\\theta$', '$1$'], correctAnswer: 0, explanation: 'Divide by $\\sin^2\\theta$.', difficulty: 'medium', topicSlug: 'trig-identities-pythagorean' },
  { id: 213, question: 'If $\\sin\\theta = 3/5$ in QI, $\\cos\\theta = $?', options: ['$4/5$', '$-4/5$', '$5/3$', '$3/4$'], correctAnswer: 0, explanation: 'Use $\\cos^2 = 1 - 9/25 = 16/25 \\Rightarrow \\cos = 4/5$ (positive in QI).', difficulty: 'medium', topicSlug: 'trig-identities-pythagorean' },
  { id: 214, question: '$\\sec^2\\theta - \\tan^2\\theta = $?', options: ['$1$', '$0$', '$\\sec\\theta$', '$\\tan\\theta$'], correctAnswer: 0, explanation: 'Rearranging $1 + \\tan^2 = \\sec^2$.', difficulty: 'easy', topicSlug: 'trig-identities-pythagorean' },
  { id: 215, question: '$\\sin\\theta = 1/2$ and $\\theta$ in QII gives $\\theta = $?', options: ['$5\\pi/6$', '$\\pi/6$', '$\\pi/3$', '$2\\pi/3$'], correctAnswer: 0, explanation: 'Reference angle $\\pi/6$ in QII ⇒ $\\pi - \\pi/6 = 5\\pi/6$.', difficulty: 'medium', topicSlug: 'trig-identities-pythagorean' },

  // arithmetic-geometric-sequences (5 → 10)
  { id: 216, question: 'Arithmetic sequence: $a_n = $?', options: ['$a_1 + (n-1)d$', '$a_1 r^{n-1}$', '$a_1 \\cdot n$', '$a_1 + n$'], correctAnswer: 0, explanation: 'Add common difference $d$.', difficulty: 'easy', topicSlug: 'arithmetic-geometric-sequences' },
  { id: 217, question: 'Geometric sequence: $a_n = $?', options: ['$a_1 r^{n-1}$', '$a_1 + (n-1)d$', '$a_1 \\cdot n$', '$a_1/n$'], correctAnswer: 0, explanation: 'Multiply by common ratio $r$.', difficulty: 'easy', topicSlug: 'arithmetic-geometric-sequences' },
  { id: 218, question: 'Find $a_{10}$ for arithmetic with $a_1 = 3, d = 2$:', options: ['$21$', '$20$', '$23$', '$13$'], correctAnswer: 0, explanation: '$a_{10} = 3 + 9 \\cdot 2 = 21$.', difficulty: 'easy', topicSlug: 'arithmetic-geometric-sequences' },
  { id: 219, question: 'Find $a_5$ for geometric with $a_1 = 2, r = 3$:', options: ['$162$', '$486$', '$54$', '$32$'], correctAnswer: 0, explanation: '$a_5 = 2 \\cdot 3^4 = 162$.', difficulty: 'medium', topicSlug: 'arithmetic-geometric-sequences' },
  { id: 220, question: 'Sum of first $n$ terms of arithmetic:', options: ['$\\frac{n}{2}(a_1 + a_n)$', '$a_1 r^n$', '$a_1 + a_n$', '$\\frac{a_n - a_1}{d}$'], correctAnswer: 0, explanation: 'Average of endpoints times count.', difficulty: 'easy', topicSlug: 'arithmetic-geometric-sequences' },

  // exponential-functions-growth-decay (5 → 10)
  { id: 221, question: '$f(x) = 2^x$ has $y$-intercept:', options: ['$1$', '$2$', '$0$', '$\\ln 2$'], correctAnswer: 0, explanation: '$2^0 = 1$.', difficulty: 'easy', topicSlug: 'exponential-functions-growth-decay' },
  { id: 222, question: 'Horizontal asymptote of $f(x) = 3^x$:', options: ['$y = 0$', '$y = 1$', '$y = 3$', 'None'], correctAnswer: 0, explanation: 'As $x \\to -\\infty$, $f \\to 0^+$.', difficulty: 'easy', topicSlug: 'exponential-functions-growth-decay' },
  { id: 223, question: 'Growth factor of $f(x) = 5(1.08)^x$ is:', options: ['$1.08$', '$5$', '$0.08$', '$0.92$'], correctAnswer: 0, explanation: 'Base of exponential = growth factor.', difficulty: 'easy', topicSlug: 'exponential-functions-growth-decay' },
  { id: 224, question: 'Decay factor 0.7 corresponds to a decrease of:', options: ['$30\\%$ each step', '$70\\%$ each step', '$0.3\\%$', '$7\\%$'], correctAnswer: 0, explanation: '$1 - 0.7 = 0.3 = 30\\%$.', difficulty: 'easy', topicSlug: 'exponential-functions-growth-decay' },
  { id: 225, question: '$2^{x+3} = $?', options: ['$8 \\cdot 2^x$', '$2^x + 8$', '$x + 3$', '$2^x \\cdot 3$'], correctAnswer: 0, explanation: 'Exponent rule: $2^{x+3} = 2^3 \\cdot 2^x = 8 \\cdot 2^x$.', difficulty: 'medium', topicSlug: 'exponential-functions-growth-decay' },

  // graphs-of-sine-and-cosine (5 → 10)
  { id: 226, question: 'Period of $y = \\sin(2x)$:', options: ['$\\pi$', '$2\\pi$', '$\\pi/2$', '$4\\pi$'], correctAnswer: 0, explanation: 'Period $= 2\\pi/B = 2\\pi/2 = \\pi$.', difficulty: 'medium', topicSlug: 'graphs-of-sine-and-cosine' },
  { id: 227, question: 'Amplitude of $y = 3\\cos x$:', options: ['$3$', '$1$', '$\\pi$', '$-3$'], correctAnswer: 0, explanation: '$|A| = 3$.', difficulty: 'easy', topicSlug: 'graphs-of-sine-and-cosine' },
  { id: 228, question: 'Vertical shift of $y = \\sin x + 4$:', options: ['Up 4 units', 'Down 4', 'Right 4', 'Left 4'], correctAnswer: 0, explanation: 'Adding constant shifts vertically.', difficulty: 'easy', topicSlug: 'graphs-of-sine-and-cosine' },
  { id: 229, question: 'Phase shift of $y = \\sin(x - \\pi/2)$:', options: ['Right $\\pi/2$', 'Left $\\pi/2$', 'No shift', 'Right $\\pi$'], correctAnswer: 0, explanation: '$x - C$ shifts right by $C$.', difficulty: 'medium', topicSlug: 'graphs-of-sine-and-cosine' },
  { id: 230, question: 'Range of $y = 2\\sin x$:', options: ['$[-2, 2]$', '$[-1, 1]$', '$[0, 2]$', '$\\mathbb{R}$'], correctAnswer: 0, explanation: 'Amplitude 2 ⇒ output between $-2$ and $2$.', difficulty: 'easy', topicSlug: 'graphs-of-sine-and-cosine' },

  // logarithmic-functions-properties (5 → 10)
  { id: 231, question: '$\\log_b(xy) = $?', options: ['$\\log_b x + \\log_b y$', '$\\log_b x \\cdot \\log_b y$', '$\\log_b x - \\log_b y$', '$\\log_b(x+y)$'], correctAnswer: 0, explanation: 'Product rule.', difficulty: 'easy', topicSlug: 'logarithmic-functions-properties' },
  { id: 232, question: '$\\log_b(x^n) = $?', options: ['$n\\log_b x$', '$\\log_b x + n$', '$(\\log_b x)^n$', '$x^n$'], correctAnswer: 0, explanation: 'Power rule.', difficulty: 'easy', topicSlug: 'logarithmic-functions-properties' },
  { id: 233, question: '$\\log_b(x/y) = $?', options: ['$\\log_b x - \\log_b y$', '$\\log_b x \\cdot \\log_b y$', '$\\log_b(x) / \\log_b(y)$', '$\\log_b(x+y)$'], correctAnswer: 0, explanation: 'Quotient rule.', difficulty: 'easy', topicSlug: 'logarithmic-functions-properties' },
  { id: 234, question: 'Change of base: $\\log_b a = $?', options: ['$\\frac{\\ln a}{\\ln b}$', '$\\frac{\\ln b}{\\ln a}$', '$\\ln(a) - \\ln(b)$', '$ab$'], correctAnswer: 0, explanation: 'Useful for evaluating non-standard bases.', difficulty: 'medium', topicSlug: 'logarithmic-functions-properties' },
  { id: 235, question: '$\\log_b(b^x) = $?', options: ['$x$', '$b$', '$bx$', '$1$'], correctAnswer: 0, explanation: 'Log and exponential are inverses.', difficulty: 'easy', topicSlug: 'logarithmic-functions-properties' },

  // natural-log-and-e (5 → 10)
  { id: 236, question: '$\\ln e = $?', options: ['$1$', '$0$', '$e$', '$\\ln 1$'], correctAnswer: 0, explanation: '$\\log_e e = 1$.', difficulty: 'easy', topicSlug: 'natural-log-and-e' },
  { id: 237, question: '$\\ln 1 = $?', options: ['$0$', '$1$', '$e$', 'Undefined'], correctAnswer: 0, explanation: '$e^0 = 1$.', difficulty: 'easy', topicSlug: 'natural-log-and-e' },
  { id: 238, question: '$e^{\\ln 7} = $?', options: ['$7$', '$\\ln 7$', '$e^7$', '$1$'], correctAnswer: 0, explanation: 'Inverse functions cancel.', difficulty: 'easy', topicSlug: 'natural-log-and-e' },
  { id: 239, question: '$\\ln(e^5) = $?', options: ['$5$', '$e^5$', '$\\ln 5$', '$1$'], correctAnswer: 0, explanation: '$\\ln(e^x) = x$.', difficulty: 'easy', topicSlug: 'natural-log-and-e' },
  { id: 240, question: 'Approximate value of $e$:', options: ['$\\approx 2.718$', '$\\approx 3.14$', '$\\approx 1.618$', '$\\approx 2$'], correctAnswer: 0, explanation: 'Euler\'s number $\\approx 2.71828$.', difficulty: 'easy', topicSlug: 'natural-log-and-e' },

  // polynomial-functions-end-behavior (5 → 10)
  { id: 241, question: 'End behavior of $f(x) = -2x^3$ as $x \\to \\infty$:', options: ['$f \\to -\\infty$', '$f \\to +\\infty$', '$f \\to 0$', '$f \\to 1$'], correctAnswer: 0, explanation: 'Odd degree, negative leading coefficient.', difficulty: 'medium', topicSlug: 'polynomial-functions-end-behavior' },
  { id: 242, question: 'End behavior of even-degree polynomial with positive leading coefficient:', options: ['Both ends $\\to +\\infty$', 'Both ends $\\to -\\infty$', 'Left $\\to -\\infty$, right $\\to +\\infty$', 'Left $\\to +\\infty$, right $\\to -\\infty$'], correctAnswer: 0, explanation: 'Like $x^2$ shape but more general.', difficulty: 'easy', topicSlug: 'polynomial-functions-end-behavior' },
  { id: 243, question: 'Degree of polynomial determines:', options: ['Maximum number of real roots and turning points − 1', 'Continuity', 'Y-intercept', 'Symmetry'], correctAnswer: 0, explanation: 'Degree $n$ ⇒ at most $n$ roots, $n-1$ turning points.', difficulty: 'medium', topicSlug: 'polynomial-functions-end-behavior' },
  { id: 244, question: 'Leading coefficient sign of $f(x) = -x^4 + 3x^2$:', options: ['Negative', 'Positive', 'Zero', 'Cannot determine'], correctAnswer: 0, explanation: 'Look at term with highest degree.', difficulty: 'easy', topicSlug: 'polynomial-functions-end-behavior' },
  { id: 245, question: 'Polynomials are always:', options: ['Continuous and smooth (differentiable)', 'Periodic', 'Bounded', 'Strictly increasing'], correctAnswer: 0, explanation: 'No breaks or corners.', difficulty: 'easy', topicSlug: 'polynomial-functions-end-behavior' },

  // polynomial-zeros-multiplicity (5 → 10)
  { id: 246, question: 'A zero of multiplicity 2 means the graph:', options: ['Touches the $x$-axis but doesn\'t cross', 'Crosses transversally', 'Has a vertical asymptote', 'Has a hole'], correctAnswer: 0, explanation: 'Even multiplicity: bounce off the axis.', difficulty: 'medium', topicSlug: 'polynomial-zeros-multiplicity' },
  { id: 247, question: 'A zero of multiplicity 1:', options: ['Crosses the $x$-axis', 'Touches and bounces', 'Has hole', 'Vertical asymptote'], correctAnswer: 0, explanation: 'Odd multiplicity: cross.', difficulty: 'easy', topicSlug: 'polynomial-zeros-multiplicity' },
  { id: 248, question: 'Zeros of $(x-2)(x+3)^2$:', options: ['$x = 2$ (mult 1), $x = -3$ (mult 2)', '$x = 2, x = 3$', '$x = -2, x = 3$', '$x = 0$'], correctAnswer: 0, explanation: 'Read directly from factors.', difficulty: 'easy', topicSlug: 'polynomial-zeros-multiplicity' },
  { id: 249, question: 'Sum of multiplicities of all real and complex zeros equals:', options: ['Degree of the polynomial', 'Number of distinct zeros', 'Leading coefficient', '$0$'], correctAnswer: 0, explanation: 'Fundamental Theorem of Algebra.', difficulty: 'medium', topicSlug: 'polynomial-zeros-multiplicity' },
  { id: 250, question: 'Rational root theorem: possible rational roots of $p$ are $p/q$ where:', options: ['$p$ divides constant, $q$ divides leading coeff', '$p, q$ are any integers', '$p = q$', '$p \\cdot q$ = constant'], correctAnswer: 0, explanation: 'Standard candidates list.', difficulty: 'medium', topicSlug: 'polynomial-zeros-multiplicity' },

  // rational-functions-asymptotes (5 → 10)
  { id: 251, question: 'Vertical asymptote of $f(x) = 1/(x-3)$:', options: ['$x = 3$', '$x = -3$', '$y = 0$', 'None'], correctAnswer: 0, explanation: 'Denominator zero where numerator nonzero.', difficulty: 'easy', topicSlug: 'rational-functions-asymptotes' },
  { id: 252, question: 'Horizontal asymptote of $f(x) = (2x^2 + 1)/(x^2 - 4)$:', options: ['$y = 2$', '$y = 0$', '$y = -1/4$', '$y = 1/2$'], correctAnswer: 0, explanation: 'Same degree ⇒ ratio of leading coefficients.', difficulty: 'medium', topicSlug: 'rational-functions-asymptotes' },
  { id: 253, question: 'Horizontal asymptote of $f(x) = (3x)/(x^2 + 1)$:', options: ['$y = 0$', '$y = 3$', '$y = 1$', 'None'], correctAnswer: 0, explanation: 'Numerator degree < denominator ⇒ HA at $y=0$.', difficulty: 'medium', topicSlug: 'rational-functions-asymptotes' },
  { id: 254, question: 'Slant asymptote occurs when:', options: ['Numerator degree is exactly 1 more than denominator', 'Same degree', 'Equal coefficients', 'Always'], correctAnswer: 0, explanation: 'Polynomial division yields linear quotient.', difficulty: 'medium', topicSlug: 'rational-functions-asymptotes' },
  { id: 255, question: 'A removable hole in a rational function appears when:', options: ['Common factor in numerator and denominator cancels', 'Vertical asymptote', 'Horizontal asymptote', 'No real roots'], correctAnswer: 0, explanation: 'Removed by cancellation.', difficulty: 'medium', topicSlug: 'rational-functions-asymptotes' },

  // transformations-of-functions (5 → 10)
  { id: 256, question: '$f(x) + 3$ shifts the graph of $f$:', options: ['Up 3', 'Down 3', 'Right 3', 'Left 3'], correctAnswer: 0, explanation: 'Adding outside ⇒ vertical shift.', difficulty: 'easy', topicSlug: 'transformations-of-functions' },
  { id: 257, question: '$f(x - 2)$ shifts the graph:', options: ['Right 2', 'Left 2', 'Up 2', 'Down 2'], correctAnswer: 0, explanation: 'Inside the function ⇒ opposite-direction horizontal shift.', difficulty: 'medium', topicSlug: 'transformations-of-functions' },
  { id: 258, question: '$-f(x)$ reflects across:', options: ['$x$-axis', '$y$-axis', 'Origin', '$y = x$'], correctAnswer: 0, explanation: 'Negate output.', difficulty: 'easy', topicSlug: 'transformations-of-functions' },
  { id: 259, question: '$f(-x)$ reflects across:', options: ['$y$-axis', '$x$-axis', 'Origin', '$y = x$'], correctAnswer: 0, explanation: 'Negate input.', difficulty: 'easy', topicSlug: 'transformations-of-functions' },
  { id: 260, question: '$2f(x)$ vertically:', options: ['Stretches by factor 2', 'Compresses by factor 2', 'Shifts right 2', 'Reflects'], correctAnswer: 0, explanation: 'Multiplying outside scales vertically.', difficulty: 'easy', topicSlug: 'transformations-of-functions' },

  // trigonometric-ratios-unit-circle (5 → 10)
  { id: 261, question: '$\\cos(0) = $?', options: ['$1$', '$0$', '$-1$', '$\\pi$'], correctAnswer: 0, explanation: 'Point $(1, 0)$ on unit circle.', difficulty: 'easy', topicSlug: 'trigonometric-ratios-unit-circle' },
  { id: 262, question: '$\\sin(\\pi/2) = $?', options: ['$1$', '$0$', '$-1$', '$\\pi/2$'], correctAnswer: 0, explanation: 'Point $(0, 1)$.', difficulty: 'easy', topicSlug: 'trigonometric-ratios-unit-circle' },
  { id: 263, question: '$\\tan(\\pi/3) = $?', options: ['$\\sqrt{3}$', '$1/\\sqrt{3}$', '$1$', '$2$'], correctAnswer: 0, explanation: '$\\sin(\\pi/3)/\\cos(\\pi/3) = (\\sqrt{3}/2)/(1/2) = \\sqrt{3}$.', difficulty: 'medium', topicSlug: 'trigonometric-ratios-unit-circle' },
  { id: 264, question: '$\\cos(\\pi) = $?', options: ['$-1$', '$0$', '$1$', '$\\pi$'], correctAnswer: 0, explanation: 'Point $(-1, 0)$ on unit circle.', difficulty: 'easy', topicSlug: 'trigonometric-ratios-unit-circle' },
  { id: 265, question: '$\\sin(\\pi/4) = $?', options: ['$\\sqrt{2}/2$', '$1/2$', '$\\sqrt{3}/2$', '$1$'], correctAnswer: 0, explanation: '$45°$ corner of unit circle.', difficulty: 'easy', topicSlug: 'trigonometric-ratios-unit-circle' },

  // vectors-in-two-dimensions (5 → 10)
  { id: 266, question: 'Magnitude of vector $\\langle 3, 4 \\rangle$:', options: ['$5$', '$7$', '$25$', '$\\sqrt{7}$'], correctAnswer: 0, explanation: '$\\sqrt{9+16} = 5$.', difficulty: 'easy', topicSlug: 'vectors-in-two-dimensions' },
  { id: 267, question: 'Sum $\\langle 1, 2 \\rangle + \\langle 3, -1 \\rangle = $?', options: ['$\\langle 4, 1 \\rangle$', '$\\langle 4, 3 \\rangle$', '$\\langle 2, 3 \\rangle$', '$\\langle 4, -1 \\rangle$'], correctAnswer: 0, explanation: 'Add componentwise.', difficulty: 'easy', topicSlug: 'vectors-in-two-dimensions' },
  { id: 268, question: 'Scalar multiplication: $3 \\langle 2, -1 \\rangle = $?', options: ['$\\langle 6, -3 \\rangle$', '$\\langle 5, 2 \\rangle$', '$\\langle 6, 3 \\rangle$', '$\\langle 2, -3 \\rangle$'], correctAnswer: 0, explanation: 'Multiply each component.', difficulty: 'easy', topicSlug: 'vectors-in-two-dimensions' },
  { id: 269, question: 'Dot product $\\langle 1, 2 \\rangle \\cdot \\langle 3, 4 \\rangle = $?', options: ['$11$', '$10$', '$7$', '$8$'], correctAnswer: 0, explanation: '$1 \\cdot 3 + 2 \\cdot 4 = 11$.', difficulty: 'easy', topicSlug: 'vectors-in-two-dimensions' },
  { id: 270, question: 'Two vectors are perpendicular iff:', options: ['Their dot product is $0$', 'Their magnitudes are equal', 'They are parallel', 'Their sum is zero'], correctAnswer: 0, explanation: '$\\cos(90°) = 0$.', difficulty: 'medium', topicSlug: 'vectors-in-two-dimensions' },
]

export function getPreCalcQuestions(count: number = 10, topicSlug?: string): PreCalcQuestion[] {
  let pool = allQuestions
  if (topicSlug) {
    const filtered = pool.filter(q => q.topicSlug === topicSlug)
    if (filtered.length > 0) pool = filtered
  }
  const shuffled = [...pool].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, Math.min(count, shuffled.length))
}
