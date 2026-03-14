// AP Calculus AB unified question bank for competitive mode
// Covers all major AP Calculus AB topics with topicSlug for sub-topic routing

export interface ApCalculusQuestion {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  difficulty: 'easy' | 'medium' | 'hard'
  topicSlug: string
}

const allQuestions: ApCalculusQuestion[] = [
  // ============ LIMITS GRAPHICALLY ============
  { id: 1, question: 'If $f(x) → 5$ as $x → 3$ from both sides, $\\lim_{x→3} f(x) = $?', options: ['$5$', '$3$', 'Does not exist', '$0$'], correctAnswer: 0, explanation: 'Both one-sided limits equal → limit exists.', difficulty: 'easy', topicSlug: 'limits-graphically' },
  { id: 2, question: 'If $\\lim_{x→2^-} f(x) = 4$ and $\\lim_{x→2^+} f(x) = 6$, then $\\lim_{x→2} f(x)$:', options: ['Does not exist', '$4$', '$6$', '$5$'], correctAnswer: 0, explanation: 'One-sided limits differ → limit DNE.', difficulty: 'easy', topicSlug: 'limits-graphically' },
  { id: 3, question: 'A limit can exist at $x = a$ even if:', options: ['$f(a)$ is undefined', '$f$ is continuous', '$f(a)$ equals the limit', 'None of these'], correctAnswer: 0, explanation: 'Limit depends on behavior near $a$, not at $a$.', difficulty: 'medium', topicSlug: 'limits-graphically' },
  { id: 4, question: 'If $f(x) → ∞$ as $x → 1$, the limit:', options: ['Does not exist (infinite)', 'Equals $∞$', 'Equals $1$', 'Is finite'], correctAnswer: 0, explanation: 'Infinite limits technically do not exist as real numbers.', difficulty: 'medium', topicSlug: 'limits-graphically' },

  // ============ LIMITS ALGEBRAICALLY ============
  { id: 5, question: '$\\lim_{x→2} (3x + 1) = $?', options: ['$7$', '$6$', '$5$', '$8$'], correctAnswer: 0, explanation: 'Direct substitution: $3(2)+1 = 7$.', difficulty: 'easy', topicSlug: 'limits-algebraically' },
  { id: 6, question: '$\\lim_{x→0} \\frac{\\sin x}{x} = $?', options: ['$1$', '$0$', '$∞$', 'DNE'], correctAnswer: 0, explanation: 'Fundamental trigonometric limit.', difficulty: 'easy', topicSlug: 'limits-algebraically' },
  { id: 7, question: '$\\lim_{x→3} \\frac{x^2 - 9}{x - 3} = $?', options: ['$6$', '$0$', '$3$', 'DNE'], correctAnswer: 0, explanation: 'Factor: $(x+3)(x-3)/(x-3) = x+3 → 6$.', difficulty: 'easy', topicSlug: 'limits-algebraically' },
  { id: 8, question: '$\\lim_{x→∞} \\frac{3x^2 + 1}{x^2 - 5} = $?', options: ['$3$', '$∞$', '$0$', '$-3$'], correctAnswer: 0, explanation: 'Same degree → ratio of leading coefficients.', difficulty: 'medium', topicSlug: 'limits-algebraically' },
  { id: 9, question: '$\\lim_{x→0} \\frac{1 - \\cos x}{x} = $?', options: ['$0$', '$1$', '$1/2$', 'DNE'], correctAnswer: 0, explanation: 'Standard limit: $(1-\\cos x)/x → 0$.', difficulty: 'hard', topicSlug: 'limits-algebraically' },

  // ============ CONTINUITY & IVT ============
  { id: 10, question: 'A function is continuous at $x = a$ if:', options: ['$\\lim_{x→a} f(x) = f(a)$', '$f(a)$ exists', 'Limit exists', '$f$ is differentiable'], correctAnswer: 0, explanation: 'Three conditions: $f(a)$ exists, limit exists, they are equal.', difficulty: 'easy', topicSlug: 'continuity-and-ivt' },
  { id: 11, question: 'IVT states that if $f$ is continuous on $[a,b]$ and $N$ is between $f(a)$ and $f(b)$:', options: ['There exists $c ∈ (a,b)$ with $f(c) = N$', '$f$ has a max at $c$', '$f$ is differentiable', '$f\'(c) = 0$'], correctAnswer: 0, explanation: 'Intermediate Value Theorem guarantees the value is achieved.', difficulty: 'medium', topicSlug: 'continuity-and-ivt' },
  { id: 12, question: 'A removable discontinuity occurs when:', options: ['The limit exists but $f(a)$ differs or is undefined', '$f$ has a vertical asymptote', 'The function jumps', 'The limit does not exist'], correctAnswer: 0, explanation: 'Can be "fixed" by redefining $f(a)$.', difficulty: 'medium', topicSlug: 'continuity-and-ivt' },
  { id: 13, question: 'Which is NOT a type of discontinuity?', options: ['Differentiable', 'Removable', 'Jump', 'Infinite'], correctAnswer: 0, explanation: 'Differentiable is not a type of discontinuity.', difficulty: 'easy', topicSlug: 'continuity-and-ivt' },

  // ============ SQUEEZE THEOREM ============
  { id: 14, question: 'Squeeze Theorem: if $g(x) ≤ f(x) ≤ h(x)$ near $a$ and $\\lim g = \\lim h = L$:', options: ['$\\lim f(x) = L$', '$f(a) = L$', '$f$ is continuous', '$f = g$'], correctAnswer: 0, explanation: '$f$ is squeezed to the same limit.', difficulty: 'medium', topicSlug: 'squeeze-theorem' },
  { id: 15, question: 'To evaluate $\\lim_{x→0} x^2 \\sin(1/x)$, use Squeeze with:', options: ['$-x^2 ≤ x^2\\sin(1/x) ≤ x^2$, limit = 0', 'L\'Hôpital\'s Rule', 'Direct substitution', 'Factor'], correctAnswer: 0, explanation: '$|\\sin(1/x)| ≤ 1$, multiply by $x^2 → 0$.', difficulty: 'hard', topicSlug: 'squeeze-theorem' },
  { id: 16, question: 'The Squeeze Theorem requires:', options: ['Two bounding functions with the same limit', 'Continuity of $f$', '$f$ to be differentiable', 'Only one bound'], correctAnswer: 0, explanation: 'Both bounds must converge to same $L$.', difficulty: 'medium', topicSlug: 'squeeze-theorem' },

  // ============ DEFINITION OF DERIVATIVE ============
  { id: 17, question: 'The derivative $f\'(a)$ is defined as:', options: ['$\\lim_{h→0} \\frac{f(a+h) - f(a)}{h}$', '$\\frac{f(b)-f(a)}{b-a}$', '$f(a+h) - f(a)$', '$\\lim_{x→∞} f(x)$'], correctAnswer: 0, explanation: 'Limit definition of derivative.', difficulty: 'easy', topicSlug: 'definition-of-derivative' },
  { id: 18, question: 'The derivative represents:', options: ['Instantaneous rate of change / slope of tangent', 'Average rate of change', 'Area under curve', 'Maximum value'], correctAnswer: 0, explanation: 'Derivative = slope of tangent line at a point.', difficulty: 'easy', topicSlug: 'definition-of-derivative' },
  { id: 19, question: 'If $f$ is differentiable at $a$, then $f$ is ___ at $a$:', options: ['Continuous', 'Not continuous', 'Unbounded', 'Maximum'], correctAnswer: 0, explanation: 'Differentiable → continuous (converse not always true).', difficulty: 'medium', topicSlug: 'definition-of-derivative' },
  { id: 20, question: 'Using the limit definition, $f\'(x)$ for $f(x) = x^2$ equals:', options: ['$2x$', '$x^2$', '$2$', '$x$'], correctAnswer: 0, explanation: '$\\lim_{h→0} \\frac{(x+h)^2 - x^2}{h} = \\lim_{h→0} (2x+h) = 2x$.', difficulty: 'medium', topicSlug: 'definition-of-derivative' },

  // ============ BASIC DIFFERENTIATION RULES ============
  { id: 21, question: '$\\frac{d}{dx}[x^5] = $?', options: ['$5x^4$', '$4x^5$', '$x^4$', '$5x^5$'], correctAnswer: 0, explanation: 'Power rule: $nx^{n-1}$.', difficulty: 'easy', topicSlug: 'basic-differentiation-rules' },
  { id: 22, question: '$\\frac{d}{dx}[\\sin x] = $?', options: ['$\\cos x$', '$-\\sin x$', '$-\\cos x$', '$\\tan x$'], correctAnswer: 0, explanation: 'Standard derivative.', difficulty: 'easy', topicSlug: 'basic-differentiation-rules' },
  { id: 23, question: '$\\frac{d}{dx}[e^x] = $?', options: ['$e^x$', '$xe^{x-1}$', '$e^{x-1}$', '$\\ln(x)$'], correctAnswer: 0, explanation: '$e^x$ is its own derivative.', difficulty: 'easy', topicSlug: 'basic-differentiation-rules' },
  { id: 24, question: '$\\frac{d}{dx}[\\ln x] = $?', options: ['$1/x$', '$\\ln x$', '$e^x$', '$x$'], correctAnswer: 0, explanation: 'Standard derivative of natural log.', difficulty: 'easy', topicSlug: 'basic-differentiation-rules' },
  { id: 25, question: '$\\frac{d}{dx}[7x^3 - 2x + 4] = $?', options: ['$21x^2 - 2$', '$7x^2 - 2$', '$21x^3 - 2$', '$21x^2$'], correctAnswer: 0, explanation: 'Differentiate term by term.', difficulty: 'easy', topicSlug: 'basic-differentiation-rules' },
  { id: 26, question: '$\\frac{d}{dx}[\\cos x] = $?', options: ['$-\\sin x$', '$\\sin x$', '$-\\cos x$', '$\\sec^2 x$'], correctAnswer: 0, explanation: 'Standard trig derivative.', difficulty: 'easy', topicSlug: 'basic-differentiation-rules' },

  // ============ PRODUCT & QUOTIENT RULES ============
  { id: 27, question: 'Product rule: $\\frac{d}{dx}[f \\cdot g] = $?', options: ["$f'g + fg'$", "$f'g'$", "$f'g - fg'$", "$(fg)'$"], correctAnswer: 0, explanation: 'Leibniz product rule.', difficulty: 'easy', topicSlug: 'product-quotient-rules' },
  { id: 28, question: 'Quotient rule: $\\frac{d}{dx}[f/g] = $?', options: ["$(f'g - fg')/g^2$", "$(fg' - f'g)/g^2$", "$f'/g'$", "$f'g + fg'$"], correctAnswer: 0, explanation: '"Lo dHi minus Hi dLo over Lo squared."', difficulty: 'easy', topicSlug: 'product-quotient-rules' },
  { id: 29, question: '$\\frac{d}{dx}[x^2 \\sin x] = $?', options: ['$2x\\sin x + x^2\\cos x$', '$2x\\cos x$', '$x^2\\cos x$', '$2x\\sin x$'], correctAnswer: 0, explanation: 'Product rule: $f\'g + fg\'$.', difficulty: 'medium', topicSlug: 'product-quotient-rules' },
  { id: 30, question: '$\\frac{d}{dx}[\\tan x] = $?', options: ['$\\sec^2 x$', '$\\csc^2 x$', '$\\sec x \\tan x$', '$-\\csc^2 x$'], correctAnswer: 0, explanation: 'Derive using quotient rule on $\\sin x/\\cos x$.', difficulty: 'medium', topicSlug: 'product-quotient-rules' },

  // ============ CHAIN RULE ============
  { id: 31, question: '$\\frac{d}{dx}[\\sin(3x)] = $?', options: ['$3\\cos(3x)$', '$\\cos(3x)$', '$3\\sin(3x)$', '$-3\\cos(3x)$'], correctAnswer: 0, explanation: 'Chain rule: outer derivative × inner derivative.', difficulty: 'easy', topicSlug: 'chain-rule' },
  { id: 32, question: '$\\frac{d}{dx}[(2x+1)^5] = $?', options: ['$10(2x+1)^4$', '$5(2x+1)^4$', '$(2x+1)^4$', '$10(2x)^4$'], correctAnswer: 0, explanation: '$5(2x+1)^4 \\cdot 2 = 10(2x+1)^4$.', difficulty: 'easy', topicSlug: 'chain-rule' },
  { id: 33, question: '$\\frac{d}{dx}[e^{x^2}] = $?', options: ['$2xe^{x^2}$', '$e^{x^2}$', '$x^2 e^{x^2-1}$', '$2e^{x^2}$'], correctAnswer: 0, explanation: 'Chain rule: $e^{x^2} \\cdot 2x$.', difficulty: 'medium', topicSlug: 'chain-rule' },
  { id: 34, question: '$\\frac{d}{dx}[\\ln(x^2 + 1)] = $?', options: ['$\\frac{2x}{x^2+1}$', '$\\frac{1}{x^2+1}$', '$\\frac{2x}{\\ln(x^2+1)}$', '$2x\\ln(x^2+1)$'], correctAnswer: 0, explanation: 'Chain: $\\frac{1}{x^2+1} \\cdot 2x$.', difficulty: 'medium', topicSlug: 'chain-rule' },
  { id: 35, question: '$\\frac{d}{dx}[\\sqrt{x^2 + 9}] = $?', options: ['$\\frac{x}{\\sqrt{x^2+9}}$', '$\\frac{1}{2\\sqrt{x^2+9}}$', '$2x$', '$\\frac{2x}{\\sqrt{x^2+9}}$'], correctAnswer: 0, explanation: '$(x^2+9)^{1/2}$ → $\\frac{1}{2}(x^2+9)^{-1/2} \\cdot 2x = \\frac{x}{\\sqrt{x^2+9}}$.', difficulty: 'medium', topicSlug: 'chain-rule' },

  // ============ IMPLICIT DIFFERENTIATION ============
  { id: 36, question: 'For $x^2 + y^2 = 25$, $\\frac{dy}{dx} = $?', options: ['$-x/y$', '$x/y$', '$-y/x$', '$2x$'], correctAnswer: 0, explanation: '$2x + 2y(dy/dx) = 0 → dy/dx = -x/y$.', difficulty: 'medium', topicSlug: 'implicit-differentiation' },
  { id: 37, question: 'Implicit differentiation treats $y$ as:', options: ['A function of $x$', 'A constant', 'Independent variable', 'Equal to $x$'], correctAnswer: 0, explanation: 'Apply chain rule to $y$ terms.', difficulty: 'easy', topicSlug: 'implicit-differentiation' },
  { id: 38, question: 'For $xy = 6$, $\\frac{dy}{dx} = $?', options: ['$-y/x$', '$6/x^2$', '$y/x$', '$-6/x$'], correctAnswer: 0, explanation: 'Product rule: $y + x(dy/dx) = 0 → dy/dx = -y/x$.', difficulty: 'medium', topicSlug: 'implicit-differentiation' },

  // ============ RELATED RATES ============
  { id: 39, question: 'In related rates, you differentiate with respect to:', options: ['Time ($t$)', '$x$', '$y$', 'The radius'], correctAnswer: 0, explanation: 'All variables change with time.', difficulty: 'easy', topicSlug: 'related-rates' },
  { id: 40, question: 'A circle\'s area $A = πr^2$. If $dr/dt = 3$, $dA/dt$ when $r = 5$:', options: ['$30\\pi$', '$15\\pi$', '$25\\pi$', '$10\\pi$'], correctAnswer: 0, explanation: '$dA/dt = 2\\pi r \\cdot dr/dt = 2\\pi(5)(3) = 30\\pi$.', difficulty: 'medium', topicSlug: 'related-rates' },
  { id: 41, question: 'A cube has edge $s$. Volume $V = s^3$, $\\frac{dV}{dt} = $?', options: ['$3s^2 \\frac{ds}{dt}$', '$s^3 \\frac{ds}{dt}$', '$3s \\frac{ds}{dt}$', '$\\frac{ds}{dt}$'], correctAnswer: 0, explanation: 'Chain rule differentiation with respect to $t$.', difficulty: 'medium', topicSlug: 'related-rates' },
  { id: 42, question: 'A ladder 10 ft long slides down. Which equation relates $x$, $y$?', options: ['$x^2 + y^2 = 100$', '$x + y = 10$', '$xy = 10$', '$x^2 - y^2 = 100$'], correctAnswer: 0, explanation: 'Pythagorean theorem with constant hypotenuse.', difficulty: 'easy', topicSlug: 'related-rates' },

  // ============ EXTREME VALUE THEOREM ============
  { id: 43, question: 'EVT states that on a closed interval $[a,b]$, continuous $f$ attains:', options: ['Both an absolute max and min', 'Only a max', 'Only a min', 'Neither'], correctAnswer: 0, explanation: 'Continuity on closed interval guarantees both.', difficulty: 'easy', topicSlug: 'extreme-value-theorem' },
  { id: 44, question: 'Critical points occur where:', options: ["$f'(x) = 0$ or $f'(x)$ DNE", '$f(x) = 0$', '$f\'\'(x) = 0$', '$f$ is discontinuous'], correctAnswer: 0, explanation: 'Candidates for local extrema.', difficulty: 'easy', topicSlug: 'extreme-value-theorem' },
  { id: 45, question: 'To find absolute extrema on $[a,b]$, evaluate $f$ at:', options: ['Critical points and endpoints', 'Only critical points', 'Only endpoints', 'Where $f\'\' = 0$'], correctAnswer: 0, explanation: 'Closed interval method.', difficulty: 'medium', topicSlug: 'extreme-value-theorem' },
  { id: 46, question: 'First derivative test: $f\'$ changes from $+ → -$ means:', options: ['Local maximum', 'Local minimum', 'Inflection point', 'No extremum'], correctAnswer: 0, explanation: 'Increasing then decreasing → peak.', difficulty: 'medium', topicSlug: 'extreme-value-theorem' },

  // ============ MEAN VALUE THEOREM ============
  { id: 47, question: 'MVT says if $f$ is continuous on $[a,b]$ and differentiable on $(a,b)$:', options: ['$∃\\; c: f\'(c) = \\frac{f(b)-f(a)}{b-a}$', '$f\'(c) = 0$', '$f(c) = 0$', '$f$ has a max at $c$'], correctAnswer: 0, explanation: 'Some tangent line has the same slope as the secant.', difficulty: 'medium', topicSlug: 'mean-value-theorem' },
  { id: 48, question: 'Rolle\'s Theorem is MVT with the added condition:', options: ['$f(a) = f(b)$', '$f\'(a) = f\'(b)$', '$f$ is constant', '$a = b$'], correctAnswer: 0, explanation: 'Equal endpoints → some $c$ where $f\'(c) = 0$.', difficulty: 'medium', topicSlug: 'mean-value-theorem' },
  { id: 49, question: 'MVT guarantees the existence of $c$ but not:', options: ['Its exact value (without calculation)', 'That $f$ is continuous', 'That the slope exists', 'A tangent line'], correctAnswer: 0, explanation: 'MVT is an existence theorem.', difficulty: 'medium', topicSlug: 'mean-value-theorem' },

  // ============ CURVE SKETCHING ============
  { id: 50, question: 'If $f\'(x) > 0$ on an interval, $f$ is:', options: ['Increasing', 'Decreasing', 'Concave up', 'Concave down'], correctAnswer: 0, explanation: 'Positive first derivative → increasing.', difficulty: 'easy', topicSlug: 'curve-sketching' },
  { id: 51, question: 'If $f\'\'(x) > 0$, $f$ is:', options: ['Concave up', 'Concave down', 'Increasing', 'Decreasing'], correctAnswer: 0, explanation: 'Positive second derivative → concave up.', difficulty: 'easy', topicSlug: 'curve-sketching' },
  { id: 52, question: 'An inflection point occurs where:', options: ['$f\'\'$ changes sign', '$f\' = 0$', '$f = 0$', '$f\'\'= 0$ always'], correctAnswer: 0, explanation: 'Concavity changes → inflection.', difficulty: 'medium', topicSlug: 'curve-sketching' },
  { id: 53, question: 'Second derivative test: if $f\'(c) = 0$ and $f\'\'(c) > 0$:', options: ['Local minimum at $c$', 'Local maximum', 'Inflection point', 'No conclusion'], correctAnswer: 0, explanation: 'Concave up at critical point → min.', difficulty: 'medium', topicSlug: 'curve-sketching' },

  // ============ OPTIMIZATION ============
  { id: 54, question: 'In optimization problems, candidates for max/min are:', options: ['Critical points and endpoints of the domain', 'Only where $f = 0$', 'Everywhere', 'Only endpoints'], correctAnswer: 0, explanation: 'Check all candidates.', difficulty: 'easy', topicSlug: 'optimization' },
  { id: 55, question: 'Maximize area of rectangle with perimeter 20. Dimensions:', options: ['$5 × 5$ (square)', '$4 × 6$', '$10 × 0$', '$3 × 7$'], correctAnswer: 0, explanation: '$A = x(10-x)$, max at $x = 5$.', difficulty: 'medium', topicSlug: 'optimization' },
  { id: 56, question: 'To minimize cost $C(x)$, find where:', options: ["$C'(x) = 0$ and $C''(x) > 0$", '$C(x) = 0$', "$C'(x) > 0$", "$C''(x) = 0$"], correctAnswer: 0, explanation: 'First derivative zero + concave up → minimum.', difficulty: 'medium', topicSlug: 'optimization' },

  // ============ LINEARIZATION & DIFFERENTIALS ============
  { id: 57, question: 'Linear approximation of $f$ near $a$:', options: ['$L(x) = f(a) + f\'(a)(x - a)$', '$L(x) = f\'(a)$', '$L(x) = f(a) + f(x)$', '$L(x) = f\'(x)$'], correctAnswer: 0, explanation: 'Tangent line approximation.', difficulty: 'medium', topicSlug: 'linearization-differentials' },
  { id: 58, question: 'Differential $dy = $?', options: ["$f'(x)\\,dx$", '$f(x)\\,dx$', '$\\Delta y$', '$f\'(x)$'], correctAnswer: 0, explanation: '$dy$ approximates the change in $y$.', difficulty: 'medium', topicSlug: 'linearization-differentials' },
  { id: 59, question: 'Approximate $\\sqrt{4.1}$ using linearization of $\\sqrt{x}$ at $a = 4$:', options: ['$2.025$', '$2.05$', '$2.1$', '$2.0$'], correctAnswer: 0, explanation: '$L(x) = 2 + \\frac{1}{4}(x-4)$, $L(4.1) = 2 + 0.025 = 2.025$.', difficulty: 'hard', topicSlug: 'linearization-differentials' },

  // ============ ANTIDERIVATIVES / INDEFINITE INTEGRALS ============
  { id: 60, question: '$\\int x^3\\,dx = $?', options: ['$\\frac{x^4}{4} + C$', '$3x^2 + C$', '$\\frac{x^4}{3} + C$', '$x^4 + C$'], correctAnswer: 0, explanation: 'Reverse power rule: add 1 to exponent, divide.', difficulty: 'easy', topicSlug: 'antiderivatives-indefinite-integrals' },
  { id: 61, question: '$\\int \\cos x\\,dx = $?', options: ['$\\sin x + C$', '$-\\sin x + C$', '$\\cos x + C$', '$\\tan x + C$'], correctAnswer: 0, explanation: 'Antiderivative of $\\cos x$ is $\\sin x$.', difficulty: 'easy', topicSlug: 'antiderivatives-indefinite-integrals' },
  { id: 62, question: '$\\int e^x\\,dx = $?', options: ['$e^x + C$', '$xe^x + C$', '$e^{x+1}/(x+1) + C$', '$\\ln|x| + C$'], correctAnswer: 0, explanation: '$e^x$ is its own antiderivative.', difficulty: 'easy', topicSlug: 'antiderivatives-indefinite-integrals' },
  { id: 63, question: '$\\int \\frac{1}{x}\\,dx = $?', options: ['$\\ln|x| + C$', '$-1/x^2 + C$', '$x^{-1} + C$', '$\\log x + C$'], correctAnswer: 0, explanation: 'Standard integral.', difficulty: 'easy', topicSlug: 'antiderivatives-indefinite-integrals' },
  { id: 64, question: '$\\int (3x^2 + 2x)\\,dx = $?', options: ['$x^3 + x^2 + C$', '$6x + 2 + C$', '$3x^3 + 2x^2 + C$', '$x^3 + x + C$'], correctAnswer: 0, explanation: 'Integrate term by term.', difficulty: 'easy', topicSlug: 'antiderivatives-indefinite-integrals' },

  // ============ RIEMANN SUMS ============
  { id: 65, question: 'Left Riemann sum uses function values at:', options: ['Left endpoints of subintervals', 'Right endpoints', 'Midpoints', 'Random points'], correctAnswer: 0, explanation: 'Left endpoint of each subinterval.', difficulty: 'easy', topicSlug: 'riemann-sums' },
  { id: 66, question: 'As number of subintervals $n → ∞$, Riemann sum approaches:', options: ['The definite integral', 'Zero', 'Infinity', 'The average value'], correctAnswer: 0, explanation: 'Definition of the definite integral.', difficulty: 'easy', topicSlug: 'riemann-sums' },
  { id: 67, question: 'For increasing $f$, left Riemann sum is a(n):', options: ['Underestimate', 'Overestimate', 'Exact', 'Not determinable'], correctAnswer: 0, explanation: 'Left endpoints of increasing function → below curve.', difficulty: 'medium', topicSlug: 'riemann-sums' },
  { id: 68, question: 'Trapezoidal rule uses ___ for each subinterval:', options: ['Trapezoids (average of left + right)', 'Rectangles', 'Parabolas', 'Triangles'], correctAnswer: 0, explanation: 'Average of left and right → trapezoid.', difficulty: 'medium', topicSlug: 'riemann-sums' },

  // ============ FUNDAMENTAL THEOREM OF CALCULUS ============
  { id: 69, question: 'FTC Part 1: $\\frac{d}{dx}\\int_a^x f(t)\\,dt = $?', options: ['$f(x)$', '$F(x) - F(a)$', '$0$', '$f(a)$'], correctAnswer: 0, explanation: 'Derivative of accumulation function equals the integrand.', difficulty: 'easy', topicSlug: 'fundamental-theorem-of-calculus' },
  { id: 70, question: 'FTC Part 2: $\\int_a^b f(x)\\,dx = $?', options: ['$F(b) - F(a)$', '$f(b) - f(a)$', '$F(a) - F(b)$', '$f\'(b) - f\'(a)$'], correctAnswer: 0, explanation: 'Evaluate antiderivative at endpoints.', difficulty: 'easy', topicSlug: 'fundamental-theorem-of-calculus' },
  { id: 71, question: '$\\int_1^3 2x\\,dx = $?', options: ['$8$', '$4$', '$6$', '$12$'], correctAnswer: 0, explanation: '$[x^2]_1^3 = 9 - 1 = 8$.', difficulty: 'easy', topicSlug: 'fundamental-theorem-of-calculus' },
  { id: 72, question: '$\\frac{d}{dx}\\int_0^{x^2} \\sin(t)\\,dt = $?', options: ['$2x\\sin(x^2)$', '$\\sin(x^2)$', '$\\cos(x^2)$', '$2x\\cos(x^2)$'], correctAnswer: 0, explanation: 'Chain rule + FTC: $\\sin(x^2) \\cdot 2x$.', difficulty: 'hard', topicSlug: 'fundamental-theorem-of-calculus' },

  // ============ INTEGRATION BY SUBSTITUTION ============
  { id: 73, question: '$\\int 2x(x^2 + 1)^3\\,dx = $? (let $u = x^2+1$)', options: ['$\\frac{(x^2+1)^4}{4} + C$', '$(x^2+1)^4 + C$', '$\\frac{(x^2+1)^3}{3} + C$', '$2x(x^2+1)^4 + C$'], correctAnswer: 0, explanation: '$u = x^2+1$, $du = 2x\\,dx$; $\\int u^3\\,du = u^4/4$.', difficulty: 'medium', topicSlug: 'integration-by-substitution' },
  { id: 74, question: '$\\int \\cos(3x)\\,dx = $?', options: ['$\\frac{\\sin(3x)}{3} + C$', '$\\sin(3x) + C$', '$3\\sin(3x) + C$', '$-\\sin(3x)/3 + C$'], correctAnswer: 0, explanation: '$u = 3x$, $du = 3\\,dx$; divide by 3.', difficulty: 'easy', topicSlug: 'integration-by-substitution' },
  { id: 75, question: '$\\int \\frac{e^{\\sqrt{x}}}{2\\sqrt{x}}\\,dx = $?', options: ['$e^{\\sqrt{x}} + C$', '$2e^{\\sqrt{x}} + C$', '$\\frac{e^{\\sqrt{x}}}{\\sqrt{x}} + C$', '$e^x + C$'], correctAnswer: 0, explanation: '$u = \\sqrt{x}$, $du = \\frac{1}{2\\sqrt{x}}dx$.', difficulty: 'hard', topicSlug: 'integration-by-substitution' },
  { id: 76, question: 'The u-substitution method reverses:', options: ['The chain rule', 'The product rule', 'The quotient rule', 'The power rule'], correctAnswer: 0, explanation: 'Substitution is the "un-chain rule."', difficulty: 'easy', topicSlug: 'integration-by-substitution' },

  // ============ AREA BETWEEN CURVES ============
  { id: 77, question: 'Area between $f(x)$ and $g(x)$ on $[a,b]$ when $f ≥ g$:', options: ['$\\int_a^b [f(x) - g(x)]\\,dx$', '$\\int_a^b [g(x) - f(x)]\\,dx$', '$\\int_a^b f(x)\\,dx$', '$f(b) - g(a)$'], correctAnswer: 0, explanation: 'Top minus bottom.', difficulty: 'easy', topicSlug: 'area-between-curves' },
  { id: 78, question: 'Area between $y = x^2$ and $y = x$ from $x = 0$ to $x = 1$:', options: ['$1/6$', '$1/3$', '$1/2$', '$1/4$'], correctAnswer: 0, explanation: '$\\int_0^1 (x - x^2)\\,dx = [x^2/2 - x^3/3]_0^1 = 1/2 - 1/3 = 1/6$.', difficulty: 'medium', topicSlug: 'area-between-curves' },
  { id: 79, question: 'To find intersection points of $f$ and $g$, solve:', options: ['$f(x) = g(x)$', '$f\'(x) = g\'(x)$', '$f(x) \\cdot g(x) = 0$', '$f(x) + g(x) = 0$'], correctAnswer: 0, explanation: 'Set functions equal to find bounds.', difficulty: 'easy', topicSlug: 'area-between-curves' },

  // ============ VOLUMES OF REVOLUTION ============
  { id: 80, question: 'Disk method: $V = \\int_a^b \\pi [R(x)]^2\\,dx$ rotates about:', options: ['x-axis (with $R$ = distance from axis)', 'y-axis', 'Any line', 'No axis'], correctAnswer: 0, explanation: 'Cross-sections are circles of radius $R(x)$.', difficulty: 'medium', topicSlug: 'volumes-of-revolution' },
  { id: 81, question: 'Washer method uses:', options: ['$\\pi[(R_{outer})^2 - (R_{inner})^2]$', '$\\pi R^2$ only', '$2\\pi r h$', 'Triangles'], correctAnswer: 0, explanation: 'Subtract inner hole from outer disk.', difficulty: 'medium', topicSlug: 'volumes-of-revolution' },
  { id: 82, question: 'Volume of solid formed by rotating $y = \\sqrt{x}$ about x-axis, $x ∈ [0,4]$:', options: ['$8\\pi$', '$4\\pi$', '$16\\pi$', '$2\\pi$'], correctAnswer: 0, explanation: '$V = \\pi\\int_0^4 x\\,dx = \\pi[x^2/2]_0^4 = 8\\pi$.', difficulty: 'hard', topicSlug: 'volumes-of-revolution' },
  { id: 83, question: 'Shell method formula for rotation about the y-axis:', options: ['$V = \\int_a^b 2\\pi x \\cdot f(x)\\,dx$', '$V = \\int \\pi f(x)^2\\,dx$', '$V = \\int 2\\pi f(x)\\,dx$', '$V = \\pi r^2 h$'], correctAnswer: 0, explanation: 'Cylindrical shells: $2\\pi$(radius)(height)(thickness).', difficulty: 'hard', topicSlug: 'volumes-of-revolution' },

  // ============ DIFFERENTIAL EQUATIONS & SLOPE FIELDS ============
  { id: 84, question: 'A slope field shows:', options: ['Small line segments with slope = $dy/dx$ at each point', 'Solution curves', 'Integrals', 'Limits'], correctAnswer: 0, explanation: 'Visual representation of the DE.', difficulty: 'easy', topicSlug: 'differential-equations-slope-fields' },
  { id: 85, question: 'Solve: $\\frac{dy}{dx} = 2x$, $y(0) = 1$:', options: ['$y = x^2 + 1$', '$y = 2x + 1$', '$y = x^2$', '$y = 2x$'], correctAnswer: 0, explanation: '$y = \\int 2x\\,dx = x^2 + C$; $y(0)=1 → C=1$.', difficulty: 'easy', topicSlug: 'differential-equations-slope-fields' },
  { id: 86, question: 'Separable DE $\\frac{dy}{dx} = xy$ separates as:', options: ['$\\frac{dy}{y} = x\\,dx$', '$dy = x\\,dx + y$', '$\\frac{dx}{x} = y\\,dy$', 'Cannot separate'], correctAnswer: 0, explanation: 'Move $y$ terms to one side, $x$ to other.', difficulty: 'medium', topicSlug: 'differential-equations-slope-fields' },
  { id: 87, question: 'Solution of $\\frac{dy}{dx} = ky$ is:', options: ['$y = Ce^{kt}$', '$y = kt + C$', '$y = k^t$', '$y = \\ln(kt)$'], correctAnswer: 0, explanation: 'Exponential growth/decay model.', difficulty: 'medium', topicSlug: 'differential-equations-slope-fields' },
  { id: 88, question: 'In a slope field, a horizontal segment indicates:', options: ['$dy/dx = 0$', '$dy/dx = 1$', '$dy/dx = ∞$', 'No solution'], correctAnswer: 0, explanation: 'Zero slope at that point.', difficulty: 'easy', topicSlug: 'differential-equations-slope-fields' },
]

export function getApCalculusQuestions(count: number = 10, topicSlug?: string): ApCalculusQuestion[] {
  let pool = allQuestions
  if (topicSlug) {
    const filtered = pool.filter(q => q.topicSlug === topicSlug)
    if (filtered.length > 0) pool = filtered
  }
  const shuffled = [...pool].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, Math.min(count, shuffled.length))
}
