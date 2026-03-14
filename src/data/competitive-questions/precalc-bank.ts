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
