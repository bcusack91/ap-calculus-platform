const fs = require('fs');
const path = require('path');

const OUT_DIR = path.join(__dirname, '..', 'src', 'data', 'interactive-lessons');

function escapeStr(s) {
  if (!s) return '';
  return s.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, ' ');
}

function generateMCSection(slug, partNum, id, questions) {
  const questionStrs = questions.map(q => `          {
            question: '${escapeStr(q.q)}',
            options: [
              '${escapeStr(q.opts[0])}',
              '${escapeStr(q.opts[1])}',
              '${escapeStr(q.opts[2])}',
              '${escapeStr(q.opts[3])}'
            ],
            correctAnswer: ${q.correct},
            explanation: '${escapeStr(q.explanation)}'
          }`);

  return `    {
      id: '${slug.substring(0, 5)}${partNum}-${id}',
      type: 'multiple-choice' as const,
      content: \`
**Concept Check** 🎯
      \`,
      exercise: {
        questions: [
${questionStrs.join(',\n')}
        ]
      }
    }`;
}

function generateDropdownSection(slug, partNum, dd) {
  const dropdownStrs = dd.items.map(item => `          {
            label: '${escapeStr(item.label)}',
            options: [${item.options.map(o => `'${escapeStr(o)}'`).join(', ')}]
          }`);

  const correctStrs = dd.items.map(item => `'${escapeStr(item.correct)}'`);
  const hintStrs = dd.hints ? dd.hints.map((h, i) => `        hint${i + 1}: '${escapeStr(h)}'`).join(',\n') : '';

  return `    {
      id: '${slug.substring(0, 5)}${partNum}-dropdown',
      type: 'dropdown-select' as const,
      content: \`
**Fill in the Blanks** 🔍
      \`,
      exercise: {
        dropdowns: [
${dropdownStrs.join(',\n')}
        ],
        correctAnswers: [${correctStrs.join(', ')}],
${hintStrs}${hintStrs ? ',' : ''}
        explanation: '${escapeStr(dd.explanation)}'
      }
    }`;
}

function slugToTitle(slug) {
  return slug.replace(/-calcbc$/, '').replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
}

function generateFile(topic, partIdx) {
  const part = topic.parts[partIdx];
  const partNum = partIdx + 1;
  const exportName = `${topic.exportBase}Part${partNum}Data`;
  const topicTitle = slugToTitle(topic.slug);

  let sections = [];

  sections.push(`    {
      id: '${topic.slug.substring(0, 5)}${partNum}-intro',
      type: 'text' as const,
      content: \`
# ${partIdx === 0 ? '∮ ' + topicTitle : part.title}

**Part ${partNum} of 7 — ${part.title}**

${part.textSections[0].body}
      \`
    }`);

  if (part.mcQuestions.length > 0) {
    const halfQ = Math.ceil(part.mcQuestions.length / 2);
    sections.push(generateMCSection(topic.slug, partNum, 'quiz1', part.mcQuestions.slice(0, halfQ)));
  }

  sections.push(`    {
      id: '${topic.slug.substring(0, 5)}${partNum}-detail',
      type: 'text' as const,
      content: \`
${part.textSections[1].body}
      \`
    }`);

  if (part.mcQuestions.length > 1) {
    const halfQ = Math.ceil(part.mcQuestions.length / 2);
    const rest = part.mcQuestions.slice(halfQ);
    if (rest.length > 0) {
      sections.push(generateMCSection(topic.slug, partNum, 'quiz2', rest));
    }
  }

  if (part.dropdowns) {
    sections.push(generateDropdownSection(topic.slug, partNum, part.dropdowns));
  }

  return `export const ${exportName} = {
  topicSlug: '${topic.slug}',
  sections: [
${sections.join(',\n')}
  ]
}
`;
}

// AP Calculus BC - 20 Topics (BC-exclusive content beyond AB)
const calcBCTopics = [
  { slug: 'integration-by-parts-calcbc', exportBase: 'calcBCIntByParts', partTopics: ['Integration by Parts Formula', 'Choosing u and dv (LIATE)', 'Repeated Integration by Parts', 'Tabular Integration', 'Definite Integrals by Parts', 'Problem-Solving Workshop', 'Review & Applications'],
    concepts: [
      ['Integration by parts: ∫u dv = uv - ∫v du', 'Derived from the product rule in reverse', 'Choose u (to differentiate) and dv (to integrate)', 'Transforms a hard integral into a simpler one'],
      ['LIATE priority for choosing u: Logarithmic, Inverse trig, Algebraic, Trig, Exponential', 'u should get simpler when differentiated', 'dv must be something you can integrate', 'Example: ∫x·eˣ dx → u = x, dv = eˣ dx'],
      ['Some integrals require integration by parts multiple times', '∫x²eˣ dx: apply twice to reduce x² to x then to a constant', 'Cycling integrals: ∫eˣ sin x dx leads back to the original integral — solve algebraically', 'Set I = ∫eˣ sin x dx, apply twice, get equation I = ... - I, solve for I'],
      ['Tabular method: list derivatives of u and integrals of dv in columns', 'Alternate signs: +, -, +, -, ...', 'Multiply diagonally and sum', 'Efficient when u eventually differentiates to zero (polynomial × eˣ, polynomial × sin x)'],
      ['∫ₐᵇ u dv = [uv]ₐᵇ - ∫ₐᵇ v du', 'Evaluate the boundary term uv at both limits', 'Then evaluate the remaining integral', 'Watch for improper integrals when limits include ∞']
    ] },
  { slug: 'partial-fractions-calcbc', exportBase: 'calcBCPartialFractions', partTopics: ['Partial Fraction Decomposition', 'Distinct Linear Factors', 'Repeated Linear Factors', 'Irreducible Quadratic Factors', 'Integration with Partial Fractions', 'Problem-Solving Workshop', 'Review & Applications'],
    concepts: [
      ['Partial fractions: decompose P(x)/Q(x) into simpler fractions', 'Q(x) must be factored completely', 'Degree of P must be less than degree of Q (use long division if not)', 'Each factor of Q contributes one or more partial fraction terms'],
      ['For distinct linear factors (ax+b)(cx+d)...', 'A/(ax+b) + B/(cx+d) + ...', 'Multiply both sides by Q(x) and solve for A, B, ...', 'Use strategic substitution: set each factor to zero to find constants'],
      ['For repeated factor (ax+b)ⁿ', 'Include: A₁/(ax+b) + A₂/(ax+b)² + ... + Aₙ/(ax+b)ⁿ', 'Need as many terms as the power of the repeated factor', 'Solve for constants by expanding and matching coefficients'],
      ['For irreducible quadratic ax²+bx+c (b²-4ac < 0)', 'Include: (Ax+B)/(ax²+bx+c) for each irreducible quadratic factor', 'The numerator has degree one less than the quadratic', 'If repeated: add (Cx+D)/(ax²+bx+c)² etc.'],
      ['After decomposition, integrate each fraction separately', '∫A/(ax+b)dx = (A/a)ln|ax+b| + C', '∫A/(ax+b)²dx = -A/[a(ax+b)] + C', '∫(Ax+B)/(x²+a²)dx: split into ∫Ax/(x²+a²)dx + ∫B/(x²+a²)dx → use ln and arctan']
    ] },
  { slug: 'improper-integrals-calcbc', exportBase: 'calcBCImproper', partTopics: ['Type I: Infinite Limits', 'Type II: Discontinuous Integrands', 'Convergence & Divergence', 'Comparison Tests', 'Applications of Improper Integrals', 'Problem-Solving Workshop', 'Review & Applications'],
    concepts: [
      ['Type I: one or both limits of integration are ±∞', '∫ₐ^∞ f(x)dx = lim(b→∞) ∫ₐᵇ f(x)dx', '∫₋∞^∞ f(x)dx: split at any point c and evaluate both halves', 'Both halves must converge for the integral to converge'],
      ['Type II: integrand has a discontinuity in [a,b]', 'Discontinuity at a: lim(c→a⁺) ∫_c^b f(x)dx', 'Discontinuity at b: lim(c→b⁻) ∫ₐ^c f(x)dx', 'Interior discontinuity at d: split into two integrals at d'],
      ['If the limit exists and is finite, the integral converges', 'If the limit is ±∞ or doesn\'t exist, the integral diverges', '∫₁^∞ 1/xᵖ dx: converges if p > 1, diverges if p ≤ 1 (p-series test)', '∫₀¹ 1/xᵖ dx: converges if p < 1, diverges if p ≥ 1'],
      ['Direct Comparison: if 0 ≤ f(x) ≤ g(x) and ∫g converges, then ∫f converges', 'If 0 ≤ g(x) ≤ f(x) and ∫g diverges, then ∫f diverges', 'Limit Comparison: if lim f(x)/g(x) = L (finite, positive), both converge or both diverge', 'Compare with known integrals: 1/xᵖ, e⁻ˣ, etc.'],
      ['Probability: ∫₋∞^∞ f(x)dx = 1 for probability density functions', 'Laplace transforms use improper integrals', 'Area under curves that extend to infinity', 'Gabriel\'s Horn: finite volume but infinite surface area']
    ] },
  { slug: 'parametric-curves-calculus-calcbc', exportBase: 'calcBCParametric', partTopics: ['Parametric Equations Review', 'Derivatives of Parametric Curves', 'Second Derivatives (Parametric)', 'Arc Length (Parametric)', 'Area Under Parametric Curves', 'Problem-Solving Workshop', 'Review & Applications'],
    concepts: [
      ['Parametric curve: x = f(t), y = g(t) for t in some interval', 'The parameter t traces the curve as it varies', 'Direction of motion determined by increasing t', 'Eliminate t to find the rectangular equation (when useful)'],
      ['dy/dx = (dy/dt)/(dx/dt) — ratio of derivatives with respect to t', 'Horizontal tangent: dy/dt = 0 (and dx/dt ≠ 0)', 'Vertical tangent: dx/dt = 0 (and dy/dt ≠ 0)', 'Slope of tangent at a specific t: evaluate dy/dx at that t'],
      ['d²y/dx² = (d/dt[dy/dx])/(dx/dt)', 'First find dy/dx as a function of t', 'Then differentiate dy/dx with respect to t', 'Divide by dx/dt to get the second derivative'],
      ['Arc length: L = ∫ₐᵇ √[(dx/dt)² + (dy/dt)²] dt', 'Speed: |v(t)| = √[(dx/dt)² + (dy/dt)²]', 'Total distance traveled = ∫ₐᵇ |v(t)| dt', 'Arc length parametrization: s(t) = ∫ₐᵗ |v(u)| du'],
      ['Area under parametric curve: A = ∫ₐᵇ y(t) · x\'(t) dt', 'Or equivalently: A = ∫ₐᵇ g(t) · f\'(t) dt', 'Watch the direction of traversal (may need absolute value)', 'Closed curve area: A = ½|∮(x dy - y dx)|']
    ] },
  { slug: 'polar-calculus-calcbc', exportBase: 'calcBCPolar', partTopics: ['Polar Coordinates Review', 'Derivatives in Polar', 'Area in Polar Coordinates', 'Arc Length in Polar', 'Polar Curve Analysis', 'Problem-Solving Workshop', 'Review & Applications'],
    concepts: [
      ['Polar coordinates: (r, θ); x = r cos θ, y = r sin θ', 'r = f(θ) defines a polar curve', 'Common curves: circles, cardioids, limaçons, roses, lemniscates', 'r can be negative: the point is reflected through the origin'],
      ['For r = f(θ): dy/dx = (dy/dθ)/(dx/dθ)', 'dy/dθ = f\'(θ)sin θ + f(θ)cos θ', 'dx/dθ = f\'(θ)cos θ - f(θ)sin θ', 'Horizontal tangent: dy/dθ = 0; Vertical tangent: dx/dθ = 0'],
      ['Area enclosed by r = f(θ) from θ = α to θ = β: A = ½∫_α^β [f(θ)]² dθ', 'Area between two polar curves: A = ½∫_α^β ([r_outer]² - [r_inner]²) dθ', 'Determine correct bounds by finding intersection points', 'For rose curves: each petal may have different θ-bounds'],
      ['Arc length: L = ∫_α^β √[r² + (dr/dθ)²] dθ', 'Derived from the parametric arc length formula', 'r² + (dr/dθ)² under the square root', 'Can be quite complex — often requires numerical methods on AP exam'],
      ['Find zeros: where r = 0 (curve passes through origin)', 'Maximum r: set dr/dθ = 0 (farthest from origin)', 'Symmetry: test r(θ) = r(-θ), r(π-θ), r(θ+π)', 'Intersections: solve r₁(θ) = r₂(θ) AND check origin separately']
    ] },
  { slug: 'vector-valued-functions-calcbc', exportBase: 'calcBCVectors', partTopics: ['Vector-Valued Functions', 'Derivatives of Vector Functions', 'Integrals of Vector Functions', 'Motion in the Plane', 'Speed and Arc Length', 'Problem-Solving Workshop', 'Review & Applications'],
    concepts: [
      ['r⃗(t) = ⟨f(t), g(t)⟩ = f(t)i + g(t)j defines a vector-valued function', 'Position vector: gives location at time t', 'The tip of r⃗(t) traces a curve in the plane', 'Domain: all t for which both components are defined'],
      ['r⃗\'(t) = ⟨f\'(t), g\'(t)⟩ — differentiate component by component', 'r⃗\'(t) is the velocity vector, tangent to the curve', 'Direction of r⃗\'(t) gives the direction of motion', 'Tangent line: R⃗(s) = r⃗(t₀) + s·r⃗\'(t₀)'],
      ['∫r⃗(t)dt = ⟨∫f(t)dt, ∫g(t)dt⟩ — integrate component by component', 'Definite integral: ∫ₐᵇ r⃗(t)dt = ⟨∫ₐᵇ f(t)dt, ∫ₐᵇ g(t)dt⟩', 'The result is a vector', 'Position from velocity: r⃗(t) = r⃗(t₀) + ∫_(t₀)^t v⃗(s)ds'],
      ['Position: r⃗(t) = ⟨x(t), y(t)⟩', 'Velocity: v⃗(t) = r⃗\'(t) = ⟨x\'(t), y\'(t)⟩', 'Acceleration: a⃗(t) = v⃗\'(t) = ⟨x\'\'{t}, y\'\'{t}⟩', 'Each component of motion is analyzed independently'],
      ['Speed = |v⃗(t)| = √[x\'(t)² + y\'(t)²]', 'Total distance = ∫ₐᵇ |v⃗(t)| dt = ∫ₐᵇ √[x\'(t)² + y\'(t)²] dt', 'This is the arc length formula', 'Displacement vector = r⃗(b) - r⃗(a) = ∫ₐᵇ v⃗(t)dt']
    ] },
  { slug: 'infinite-sequences-calcbc', exportBase: 'calcBCSequences', partTopics: ['Sequences & Convergence', 'Monotonic & Bounded Sequences', 'Limits of Sequences', 'Growth Rates', 'Squeeze Theorem for Sequences', 'Problem-Solving Workshop', 'Review & Applications'],
    concepts: [
      ['Sequence {aₙ}: an ordered list a₁, a₂, a₃, ...', 'Convergent: lim(n→∞) aₙ = L (approaches a finite limit)', 'Divergent: the limit does not exist or is ±∞', 'A sequence converges if and only if the terms get arbitrarily close to L'],
      ['Monotonically increasing: aₙ₊₁ ≥ aₙ for all n', 'Monotonically decreasing: aₙ₊₁ ≤ aₙ for all n', 'Bounded above: aₙ ≤ M for all n; Bounded below: aₙ ≥ m for all n', 'Monotone Convergence Theorem: a monotone bounded sequence converges'],
      ['Direct computation: plug in and simplify', 'L\'Hôpital\'s Rule (applied to a related function): if lim f(x) helps find lim aₙ', 'If lim(n→∞) |aₙ| = 0, then lim(n→∞) aₙ = 0', 'Continuous function theorem: if f is continuous and aₙ → L, then f(aₙ) → f(L)'],
      ['Exponential growth dominates polynomial: xⁿ/n! → 0 and nᵏ/aⁿ → 0 for a > 1', 'n! grows faster than aⁿ which grows faster than nᵏ', 'ln(n) grows slower than any positive power of n', 'Useful hierarchy: ln(n) << nᵖ << aⁿ << n! << nⁿ'],
      ['If aₙ ≤ bₙ ≤ cₙ and lim aₙ = lim cₙ = L, then lim bₙ = L', 'Common use: |aₙ| ≤ cₙ → 0 implies aₙ → 0', 'Example: (-1)ⁿ/n → 0 because |(-1)ⁿ/n| = 1/n → 0', 'Squeeze theorem is especially useful for oscillating sequences']
    ] },
  { slug: 'infinite-series-calcbc', exportBase: 'calcBCSeries', partTopics: ['Introduction to Series', 'Geometric & Telescoping Series', 'Divergence Test & Integral Test', 'p-Series & Comparison Tests', 'Ratio & Root Tests', 'Problem-Solving Workshop', 'Review & Applications'],
    concepts: [
      ['Series: Σ aₙ = a₁ + a₂ + a₃ + ... (sum of a sequence)', 'Partial sums: Sₙ = a₁ + a₂ + ... + aₙ', 'If lim(n→∞) Sₙ = S (finite), the series converges to S', 'If the limit of partial sums doesn\'t exist or is infinite, the series diverges'],
      ['Geometric series: Σ arⁿ = a/(1-r) when |r| < 1; diverges when |r| ≥ 1', 'a = first term, r = common ratio', 'Telescoping series: partial sums simplify by cancellation', 'For telescoping: write out Sₙ, most terms cancel, take the limit'],
      ['Divergence Test: if lim aₙ ≠ 0, then Σ aₙ diverges', 'But lim aₙ = 0 does NOT guarantee convergence (harmonic series!)', 'Integral Test: Σ f(n) converges iff ∫₁^∞ f(x)dx converges (f positive, decreasing)', 'Integral test gives convergence/divergence but not the sum'],
      ['p-series: Σ 1/nᵖ converges if p > 1, diverges if p ≤ 1', 'Harmonic series (p=1): Σ 1/n diverges', 'Direct Comparison: if 0 ≤ aₙ ≤ bₙ and Σbₙ converges, then Σaₙ converges', 'Limit Comparison: if lim(aₙ/bₙ) = c > 0, both series behave the same'],
      ['Ratio Test: L = lim|aₙ₊₁/aₙ|; converges if L < 1, diverges if L > 1', 'If L = 1, the ratio test is inconclusive', 'Best for series with factorials and exponentials', 'Root Test: L = lim|aₙ|^(1/n); same conclusion rules as ratio test']
    ] },
  { slug: 'alternating-series-calcbc', exportBase: 'calcBCAlternating', partTopics: ['Alternating Series', 'Alternating Series Test', 'Absolute vs Conditional Convergence', 'Alternating Series Error Bound', 'Rearrangement of Series', 'Problem-Solving Workshop', 'Review & Applications'],
    concepts: [
      ['Alternating series: terms alternate in sign — Σ(-1)ⁿ bₙ or Σ(-1)ⁿ⁺¹ bₙ', 'Examples: Σ(-1)ⁿ/n (alternating harmonic), Σ(-1)ⁿ/n²', 'The signs must strictly alternate: +, -, +, -, ...', 'Many important series are alternating (ln 2, π/4, etc.)'],
      ['AST: Σ(-1)ⁿ bₙ converges if (1) bₙ > 0, (2) bₙ is decreasing, (3) lim bₙ = 0', 'All three conditions must be verified', 'If lim bₙ ≠ 0, the series diverges (by the Divergence Test)', 'The alternating harmonic series Σ(-1)ⁿ⁺¹/n converges (to ln 2)'],
      ['Absolute convergence: Σ|aₙ| converges → Σaₙ converges absolutely', 'Conditional convergence: Σaₙ converges but Σ|aₙ| diverges', 'Absolute convergence implies convergence (stronger condition)', 'Alternating harmonic series: conditionally convergent (Σ1/n diverges)'],
      ['Error bound: |S - Sₙ| ≤ bₙ₊₁ (the first omitted term)', 'The error is at most the absolute value of the next term', 'This gives a quick estimate of how many terms are needed for desired accuracy', 'Example: approximate ln 2 to within 0.01 — need bₙ₊₁ < 0.01'],
      ['An absolutely convergent series can be rearranged without changing the sum', 'A conditionally convergent series can be rearranged to converge to any value (Riemann)', 'This is why absolute convergence is "better" than conditional', 'On the AP exam: just determine absolute vs conditional convergence']
    ] },
  { slug: 'power-series-calcbc', exportBase: 'calcBCPowerSeries', partTopics: ['Introduction to Power Series', 'Radius & Interval of Convergence', 'Finding the Radius', 'Operations on Power Series', 'Differentiation & Integration of Power Series', 'Problem-Solving Workshop', 'Review & Applications'],
    concepts: [
      ['Power series: Σ cₙ(x-a)ⁿ = c₀ + c₁(x-a) + c₂(x-a)² + ...', 'Centered at a (when a=0, it\'s a Maclaurin series form)', 'Each power series converges for some set of x-values', 'A power series defines a function f(x) within its interval of convergence'],
      ['Interval of convergence: the set of x-values for which the series converges', 'Radius of convergence R: the series converges for |x-a| < R', 'Three cases: R = 0 (converges only at center), R = ∞ (converges everywhere), 0 < R < ∞', 'Always check endpoints separately (may converge at one, both, or neither)'],
      ['Use the Ratio Test: L = lim|cₙ₊₁(x-a)ⁿ⁺¹/(cₙ(x-a)ⁿ)| < 1', 'Solve for |x-a| < R where R = lim|cₙ/cₙ₊₁|', 'Or use R = 1/lim|cₙ₊₁/cₙ|', 'Root test can also be used: R = 1/lim|cₙ|^(1/n)'],
      ['Addition: Σaₙxⁿ + Σbₙxⁿ = Σ(aₙ+bₙ)xⁿ (within shared interval)', 'Multiplication: Cauchy product (not tested explicitly on AP exam)', 'Substitution: replace x with a function of x in a known series', 'Example: e^(-x²) = Σ(-1)ⁿx²ⁿ/n! (substitute -x² into eˣ series)'],
      ['d/dx[Σcₙxⁿ] = Σn·cₙxⁿ⁻¹ (term-by-term differentiation)', '∫[Σcₙxⁿ]dx = Σcₙxⁿ⁺¹/(n+1) + C (term-by-term integration)', 'Radius of convergence is preserved (endpoints may change)', 'Use this to find power series for ln(1+x), arctan(x), etc.']
    ] },
  { slug: 'taylor-maclaurin-series-calcbc', exportBase: 'calcBCTaylorMaclaurin', partTopics: ['Taylor Series Formula', 'Maclaurin Series', 'Common Maclaurin Series', 'Taylor Polynomials', 'Constructing New Series', 'Problem-Solving Workshop', 'Review & Applications'],
    concepts: [
      ['Taylor series of f about x = a: Σ f⁽ⁿ⁾(a)/n! · (x-a)ⁿ', 'f⁽ⁿ⁾(a) is the nth derivative of f evaluated at a', 'The series "encodes" all information about f near x = a', 'If the series converges to f(x), then f equals its Taylor series'],
      ['Maclaurin series: Taylor series centered at a = 0', 'Σ f⁽ⁿ⁾(0)/n! · xⁿ', 'Many common functions have well-known Maclaurin series', 'Easier to compute since all derivatives are evaluated at 0'],
      ['eˣ = Σ xⁿ/n! = 1 + x + x²/2! + x³/3! + ... (R = ∞)', 'sin x = Σ (-1)ⁿx²ⁿ⁺¹/(2n+1)! = x - x³/3! + x⁵/5! - ... (R = ∞)', 'cos x = Σ (-1)ⁿx²ⁿ/(2n)! = 1 - x²/2! + x⁴/4! - ... (R = ∞)', '1/(1-x) = Σ xⁿ = 1 + x + x² + x³ + ... (R = 1)'],
      ['Taylor polynomial Pₙ(x): the first n+1 terms of the Taylor series', 'P₁(x) = f(a) + f\'(a)(x-a) is the linearization', 'Higher-degree polynomials give better approximations near a', 'The polynomial "wraps around" the function near the center'],
      ['Substitution: replace x in a known series (e.g., e^(-x²) from eˣ)', 'Differentiation: differentiate a known series term by term', 'Integration: integrate a known series term by term', 'Multiplication: multiply series together for products of functions']
    ] },
  { slug: 'lagrange-error-bound-calcbc', exportBase: 'calcBCLagrange', partTopics: ['Taylor Polynomial Error', 'Lagrange Error Bound Formula', 'Applying the Error Bound', 'Finding Sufficient Degree', 'Alternating Series Error vs Lagrange', 'Problem-Solving Workshop', 'Review & Applications'],
    concepts: [
      ['Rₙ(x) = f(x) - Pₙ(x) is the remainder (error) of the nth-degree Taylor polynomial', 'The remainder tells us how far off our polynomial approximation is', 'We want |Rₙ(x)| to be small for the approximation to be useful', 'Higher degree → smaller error (generally) near the center'],
      ['|Rₙ(x)| ≤ M|x-a|ⁿ⁺¹/(n+1)! where M = max|f⁽ⁿ⁺¹⁾(z)| for z between a and x', 'M is the maximum of the absolute value of the (n+1)th derivative on the interval', 'This gives an upper bound, not the exact error', 'Lagrange error bound is the most general error bound for Taylor polynomials'],
      ['Step 1: identify f, a, n, and x', 'Step 2: find f⁽ⁿ⁺¹⁾ and bound its absolute value by M on the interval', 'Step 3: plug into |Rₙ(x)| ≤ M|x-a|ⁿ⁺¹/(n+1)!', 'Step 4: evaluate to get the numerical bound'],
      ['Given a desired accuracy ε, find n such that M|x-a|ⁿ⁺¹/(n+1)! < ε', 'Try increasing values of n until the bound is small enough', 'For eˣ, sin x, cos x: M is often 1 or eˣ (easy to bound)', 'The factorial in the denominator grows very fast, so large n usually works'],
      ['For alternating Taylor series: use alternating series error bound |S-Sₙ| ≤ |aₙ₊₁|', 'This is often tighter (better) than the Lagrange bound', 'Use alternating series bound when the series alternates in sign', 'Use Lagrange bound when the series doesn\'t alternate or you need a general bound']
    ] },
  { slug: 'convergence-tests-summary-calcbc', exportBase: 'calcBCConvergenceTests', partTopics: ['Test Selection Strategy', 'nth Term & Geometric Tests', 'Integral & p-Series Tests', 'Comparison Tests', 'Ratio, Root & Alternating Tests', 'Problem-Solving Workshop', 'Review & Applications'],
    concepts: [
      ['First: always check the Divergence Test — if lim aₙ ≠ 0, series diverges', 'If the series is geometric, use |r| < 1 criterion', 'If terms involve factorials or exponentials, try Ratio Test', 'If terms are similar to 1/nᵖ, try p-series or comparison'],
      ['nth Term (Divergence) Test: if lim aₙ ≠ 0 → diverges (but lim = 0 proves nothing)', 'Geometric series: converges if |r| < 1, sum = a/(1-r)', 'Telescoping: write Sₙ, cancel terms, take the limit', 'These are the simplest tests — try them first'],
      ['Integral Test: Σf(n) and ∫₁^∞ f(x)dx behave the same (f positive, decreasing, continuous)', 'p-series: Σ1/nᵖ converges iff p > 1', 'Harmonic series (p=1) diverges — know this cold', 'Integral test remainder: Sₙ + ∫_(n+1)^∞ f(x)dx ≤ S ≤ Sₙ + ∫_n^∞ f(x)dx'],
      ['Direct Comparison: aₙ ≤ bₙ and Σbₙ converges → Σaₙ converges', 'Direct Comparison: aₙ ≥ bₙ and Σbₙ diverges → Σaₙ diverges', 'Limit Comparison: lim(aₙ/bₙ) = c (finite, positive) → same behavior', 'Choose bₙ to be a simpler series you know converges or diverges'],
      ['Ratio Test: L = lim|aₙ₊₁/aₙ|; L<1 converges, L>1 diverges, L=1 inconclusive', 'Root Test: L = lim|aₙ|^(1/n); same rules', 'AST: Σ(-1)ⁿbₙ converges if bₙ decreasing → 0', 'Absolute vs conditional: check if Σ|aₙ| converges or just Σaₙ']
    ] },
  { slug: 'euler-method-advanced-calcbc', exportBase: 'calcBCEulerAdv', partTopics: ['Euler\'s Method Review', 'Improving Accuracy', 'Logistic Differential Equations', 'Second-Order DEs (Preview)', 'Slope Fields for BC', 'Problem-Solving Workshop', 'Review & Applications'],
    concepts: [
      ['Euler\'s Method: yₙ₊₁ = yₙ + f(xₙ, yₙ)·Δx', 'Linear approximation at each step: follow the tangent line', 'Start with initial condition (x₀, y₀)', 'More steps (smaller Δx) → more accurate, but more computation'],
      ['Smaller step size Δx reduces error per step', 'Error compounds over many steps', 'Concavity affects accuracy: concave up → Euler underestimates (if increasing)', 'Better methods exist (Runge-Kutta) but Euler is what\'s tested on AP'],
      ['Logistic: dP/dt = kP(1 - P/L)', 'Separable: ∫dP/[P(1-P/L)] = ∫k dt', 'Solution: P(t) = L/(1 + Ae^(-kt)) where A = (L-P₀)/P₀', 'Inflection point at P = L/2 (fastest growth); P → L as t → ∞'],
      ['Second-order DE: involves y\'\' — Preview/enrichment for BC', 'y\'\' + y = 0 → y = A cos t + B sin t (simple harmonic motion)', 'Not heavily tested on AP BC, but useful conceptual understanding', 'Relates to parametric and vector motion problems'],
      ['Slope fields show dy/dx at each (x,y) point', 'Match slope field patterns to differential equations', 'Isoclines: curves where the slope is constant', 'Particular solutions follow the flow of the slope field']
    ] },
  { slug: 'arc-length-surface-area-calcbc', exportBase: 'calcBCArcLength', partTopics: ['Arc Length for y = f(x)', 'Arc Length for Parametric Curves', 'Arc Length for Polar Curves', 'Surface Area of Revolution', 'Speed & Distance Applications', 'Problem-Solving Workshop', 'Review & Applications'],
    concepts: [
      ['Arc length: L = ∫ₐᵇ √(1 + [f\'(x)]²) dx', 'Derived from the Pythagorean theorem on infinitesimal segments', 'The integrand √(1 + [f\'(x)]²) gives the "speed" along the curve', 'Often leads to integrals that are difficult to evaluate by hand'],
      ['Parametric arc length: L = ∫ₐᵇ √[(dx/dt)² + (dy/dt)²] dt', 'This is the integral of the speed |v⃗(t)|', 'Same formula as total distance traveled by a particle', 'Reduce to y = f(x) formula when x = t, y = f(t)'],
      ['Polar arc length: L = ∫_α^β √[r² + (dr/dθ)²] dθ', 'Derived from parametric formula with x = r cos θ, y = r sin θ', 'Often used for cardioids, roses, spirals', 'Simplifies when r = constant (circle: L = rΔθ)'],
      ['Revolution about x-axis: SA = 2π∫ₐᵇ f(x)√(1+[f\'(x)]²) dx (for f(x) ≥ 0)', 'Revolution about y-axis: SA = 2π∫ₐᵇ x√(1+[f\'(x)]²) dx', 'Parametric: SA = 2π∫ₐᵇ y(t)√[(dx/dt)² + (dy/dt)²] dt (about x-axis)', 'Surface area involves multiplying arc length element by circumference'],
      ['Speed at time t: |v⃗(t)| = √[x\'(t)² + y\'(t)²]', 'Total distance = ∫ₐᵇ |v⃗(t)| dt', 'Average speed = (total distance)/(total time)', 'Arc length parametrization: reparametrize by distance traveled']
    ] },
  { slug: 'series-applications-calcbc', exportBase: 'calcBCSeriesApps', partTopics: ['Approximating Functions', 'Computing Integrals with Series', 'Solving DEs with Series', 'Error Analysis in Practice', 'Series in Physics & Engineering', 'Problem-Solving Workshop', 'Review & Applications'],
    concepts: [
      ['Use Taylor polynomials to approximate function values near the center', 'Higher degree → better approximation (within radius of convergence)', 'Example: e^(0.1) ≈ 1 + 0.1 + 0.01/2 + 0.001/6 = 1.10517 (to 5 decimal places)', 'Polynomial approximations are fast to compute — no transcendental functions needed'],
      ['If f(x) has no elementary antiderivative, integrate its Taylor series term by term', '∫e^(-x²)dx: integrate Σ(-1)ⁿx²ⁿ/n! → Σ(-1)ⁿx²ⁿ⁺¹/[n!(2n+1)] + C', 'Evaluate ∫₀^1 e^(-x²)dx by summing enough terms for desired accuracy', 'Use alternating series error bound to determine how many terms suffice'],
      ['For y\' = f(x,y), assume y = Σaₙxⁿ and match coefficients', 'Substitute the series into the DE and equate coefficients of like powers', 'This gives a recurrence relation for the coefficients aₙ', 'Yields a power series solution even when closed-form solution is unknown'],
      ['Lagrange error bound: |Rₙ(x)| ≤ M|x-a|ⁿ⁺¹/(n+1)!', 'Alternating series error: |S - Sₙ| ≤ |aₙ₊₁|', 'Choose the tighter bound when both apply', 'On AP exam: state which bound you\'re using and show the calculation'],
      ['Fourier series: represent periodic functions (preview)', 'Taylor series in physics: small-angle approximations (sin θ ≈ θ)', 'Binomial series: (1+x)ᵖ = Σ C(p,n)xⁿ for any real p', 'Series solutions are fundamental in differential equations and mathematical physics']
    ] },
  { slug: 'bc-exam-strategies-calcbc', exportBase: 'calcBCExamStrategies', partTopics: ['BC vs AB Content Overview', 'Series Questions Strategy', 'Parametric & Polar Strategies', 'Integration Technique Selection', 'Full Exam Review', 'Problem-Solving Workshop', 'Comprehensive Review'],
    concepts: [
      ['BC includes all AB content plus: series, parametric/polar/vector calculus, advanced integration', 'About 60% of BC exam is AB content', 'BC sub-score (the AB portion) is reported separately', 'Focus extra study time on BC-only topics: series, parametric/polar, integration techniques'],
      ['Series MC: identify convergence test quickly using the strategy flowchart', 'Series FRQ: usually involves Taylor series construction, error bounds, and interval of convergence', 'Memorize the common Maclaurin series (eˣ, sin x, cos x, 1/(1-x), ln(1+x))', 'Know how to construct new series from known ones by substitution, differentiation, integration'],
      ['Parametric FRQ: find dy/dx, tangent lines, arc length, area', 'Polar FRQ: area = ½∫r²dθ, find tangent lines, intersections', 'Vector motion: position, velocity, speed, distance, direction', 'Always set up the integral clearly even if you use a calculator to evaluate'],
      ['Polynomial × eˣ or trig: integration by parts (tabular method)', 'Rational functions: partial fractions', 'Recognize inverse trig forms: 1/(1+x²), 1/√(1-x²)', 'u-substitution: always try this first if the integrand has a composite structure'],
      ['Practice with released AP exams under timed conditions', 'Master the calculator: store functions, use numerical integration', 'Show all work on free-response — communication matters', 'Time management: don\'t spend too long on any one problem']
    ] },
  { slug: 'logistic-models-calcbc', exportBase: 'calcBCLogistic', partTopics: ['Logistic Differential Equation', 'Solving the Logistic Equation', 'Analyzing Logistic Growth', 'Phase Lines & Equilibria', 'Real-World Logistic Models', 'Problem-Solving Workshop', 'Review & Applications'],
    concepts: [
      ['dP/dt = kP(1 - P/L) where k = growth rate, L = carrying capacity', 'When P is small: growth is approximately exponential (kP)', 'When P → L: growth slows to zero (1 - P/L → 0)', 'This models populations limited by resources'],
      ['Separate variables: ∫dP/[P(1-P/L)] = ∫k dt', 'Use partial fractions: 1/[P(1-P/L)] = (1/P + 1/(L-P)) · (1/L)', 'Solution: P(t) = L/(1 + Ae^(-kt)) where A = (L - P₀)/P₀', 'Initial condition P(0) = P₀ determines A'],
      ['P(t) is an S-shaped (sigmoid) curve', 'Inflection point at P = L/2 — growth rate is maximum here', 'dP/dt is maximized when P = L/2: max rate = kL/4', 'As t → ∞, P → L (carrying capacity is the horizontal asymptote)'],
      ['Phase line: one-dimensional diagram showing direction of change', 'Equilibria: P = 0 (unstable) and P = L (stable)', 'If P < L: dP/dt > 0 (population increasing)', 'If P > L: dP/dt < 0 (population decreasing toward L)'],
      ['Ecology: population growth with limited resources', 'Epidemiology: spread of disease through a population', 'Technology adoption: S-curve of market penetration', 'Chemical reactions: approach to equilibrium concentration']
    ] },
  { slug: 'advanced-integration-calcbc', exportBase: 'calcBCAdvIntegration', partTopics: ['Trig Substitution (Overview)', 'Integration Strategy Selection', 'Combining Techniques', 'Numerical Integration Methods', 'When Closed-Form Doesn\'t Exist', 'Problem-Solving Workshop', 'Review & Applications'],
    concepts: [
      ['For √(a²-x²): substitute x = a sin θ', 'For √(a²+x²): substitute x = a tan θ', 'For √(x²-a²): substitute x = a sec θ', 'After substitution, simplify using trig identities and integrate'],
      ['Try direct/simple methods first: u-sub, basic formulas', 'Products of powers: integration by parts or reduction formulas', 'Rational functions with quadratics: partial fractions', 'Recognize inverse trig patterns: arctan, arcsin forms'],
      ['Some integrals require multiple techniques in sequence', 'Example: partial fractions then u-substitution', 'Example: u-sub then integration by parts', 'Keep the overall strategy clear; don\'t get lost in algebra'],
      ['Trapezoidal Rule: T_n = (Δx/2)[f(x₀) + 2f(x₁) + ... + 2f(xₙ₋₁) + f(xₙ)]', 'Simpson\'s Rule: S_n = (Δx/3)[f(x₀) + 4f(x₁) + 2f(x₂) + 4f(x₃) + ... + f(xₙ)] (n even)', 'Simpson\'s is more accurate (uses parabolas instead of trapezoids)', 'Error bounds: |E_T| ≤ K(b-a)³/(12n²), |E_S| ≤ K(b-a)⁵/(180n⁴)'],
      ['Some functions have no elementary antiderivative: e^(-x²), sin(x)/x, etc.', 'Use power series to integrate term by term', 'Use numerical methods for definite integrals', 'These functions are still well-defined — they just can\'t be written in closed form']
    ] },
  { slug: 'review-connections-calcbc', exportBase: 'calcBCReviewConnections', partTopics: ['AB Foundations for BC', 'Series & Function Representation', 'Parametric, Polar & Vector Unity', 'Integration Techniques Connected', 'The Big Picture of Calculus', 'Problem-Solving Workshop', 'Comprehensive Review'],
    concepts: [
      ['All AB topics are fair game on the BC exam', 'Limits → derivatives → integrals is the core AB progression', 'FTC connects differentiation and integration', 'Applications (area, volume, motion) are built on these foundations'],
      ['Taylor series represent functions as infinite polynomials', 'The series "remembers" the function via its derivatives at the center', 'Convergence tests determine where the representation is valid', 'Error bounds quantify the quality of polynomial approximations'],
      ['Parametric, polar, and vector functions all describe curves in the plane', 'Each uses different coordinates but shares calculus operations (derivatives, integrals)', 'Arc length formula unifies all three: ∫√[(dx)² + (dy)²]', 'Area formulas differ: rectangular, polar (½∫r²dθ), parametric'],
      ['u-substitution reverses the chain rule', 'Integration by parts reverses the product rule', 'Partial fractions decomposes rational functions', 'All techniques transform hard integrals into known forms'],
      ['Calculus = the study of change and accumulation', 'Derivatives measure instantaneous rates of change', 'Integrals accumulate rates to recover total change', 'Series extend these ideas to infinite processes']
    ] }
];

// Build topics array
const topics = [];

for (const topicDef of calcBCTopics) {
  const parts = topicDef.partTopics.map((partTitle, idx) => {
    const conceptIdx = Math.min(idx, topicDef.concepts.length - 1);
    const concepts = topicDef.concepts[conceptIdx];
    return {
      title: partTitle,
      textSections: [
        { id: 'intro', body: concepts.map((c, i) => `### ${i + 1}. ${c.split(':')[0]}\n\n${c.includes(':') ? c.split(':').slice(1).join(':').trim() : c}`).join('\n\n') },
        { id: 'detail', body: `### Key Concepts Summary\n\n${concepts.map(c => `- **${c.split(':')[0].trim()}**${c.includes(':') ? ': ' + c.split(':').slice(1).join(':').trim() : ''}`).join('\n')}` }
      ],
      mcQuestions: [
        { q: `Which best describes a key concept of ${partTitle.toLowerCase()}?`, opts: [concepts[0].split(':')[0].trim(), 'An unrelated concept', 'This is not covered in AP Calculus BC', 'A concept from a different course'], correct: 0, explanation: concepts[0] },
        ...(concepts.length >= 3 ? [{ q: `In the context of ${partTitle.toLowerCase()}, which is accurate?`, opts: [concepts[2].includes(':') ? concepts[2].split(':').slice(1).join(':').trim() : concepts[2], 'The opposite is true', 'This concept is obsolete', 'None of these are correct'], correct: 0, explanation: concepts[2] }] : []),
        ...(concepts.length >= 4 ? [{ q: `Which concept relates directly to ${partTitle.toLowerCase()}?`, opts: [concepts[3].includes(':') ? concepts[3].split(':').slice(1).join(':').trim().substring(0, 80) : concepts[3].substring(0, 80), 'Only in abstract algebra', 'Exclusively in number theory', 'This applies only to discrete math'], correct: 0, explanation: concepts[3] }] : [])
      ],
      dropdowns: {
        items: concepts.slice(0, 3).map(c => {
          const ps = c.split(':');
          return { label: ps[0].trim(), options: [ps.length > 1 ? ps.slice(1).join(':').trim().substring(0, 50) : c.substring(0, 50), 'Not applicable', 'Unrelated to calculus', 'Only in higher math'], correct: ps.length > 1 ? ps.slice(1).join(':').trim().substring(0, 50) : c.substring(0, 50) };
        }),
        hints: concepts.slice(0, 3).map((_, i) => `Review key concept ${i + 1}.`),
        explanation: `These concepts are fundamental to understanding ${partTitle}.`
      }
    };
  });

  topics.push({
    slug: topicDef.slug,
    exportBase: topicDef.exportBase,
    parts
  });
}

// Main
function main() {
  let totalFiles = 0;
  for (const topic of topics) {
    for (let i = 0; i < topic.parts.length; i++) {
      const partNum = i + 1;
      const fileName = `calcbc-${topic.slug}-part${partNum}.ts`;
      const filePath = path.join(OUT_DIR, fileName);
      const content = generateFile(topic, i);
      fs.writeFileSync(filePath, content, 'utf-8');
      totalFiles++;
    }
  }
  console.log(`✅ Generated ${totalFiles} AP Calculus BC lesson files`);
}

main();
