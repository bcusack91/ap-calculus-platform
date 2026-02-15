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
  return slug.replace(/-calcab$/, '').replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
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
# ${partIdx === 0 ? '∫ ' + topicTitle : part.title}

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

// AP Calculus AB - 22 Topics
const calcABTopics = [
  { slug: 'limits-continuity-calcab', exportBase: 'calcABLimitsContinuity', partTopics: ['Understanding Limits', 'Limit Laws', 'Evaluating Limits Algebraically', 'Continuity', 'Intermediate Value Theorem', 'Problem-Solving Workshop', 'Review & Applications'],
    concepts: [
      ['A limit describes the value a function approaches as x approaches a specific value', 'lim(x→c) f(x) = L means f(x) gets arbitrarily close to L as x → c', 'A limit can exist even when f(c) is undefined or different from L', 'Limits are the foundation of all calculus concepts'],
      ['Sum rule: lim[f(x) + g(x)] = lim f(x) + lim g(x)', 'Product rule: lim[f(x) · g(x)] = lim f(x) · lim g(x)', 'Quotient rule: lim[f(x)/g(x)] = lim f(x) / lim g(x), provided denominator ≠ 0', 'Constant multiple: lim[c · f(x)] = c · lim f(x)'],
      ['Direct substitution works for continuous functions', 'For 0/0 indeterminate form: factor, rationalize, or simplify', 'Special limit: lim(x→0) sin(x)/x = 1', 'Squeeze Theorem: if g(x) ≤ f(x) ≤ h(x) and lim g = lim h = L, then lim f = L'],
      ['f is continuous at c if: f(c) is defined, lim(x→c) f(x) exists, and lim(x→c) f(x) = f(c)', 'Polynomials are continuous everywhere', 'Removable discontinuity: the limit exists but doesn\'t equal f(c)', 'Jump and infinite discontinuities are non-removable'],
      ['IVT: if f is continuous on [a,b] and N is between f(a) and f(b), then f(c) = N for some c in (a,b)', 'IVT guarantees existence of a solution but doesn\'t locate it', 'Useful for proving a function has a root in an interval', 'Requires continuity on the closed interval — cannot skip this condition']
    ] },
  { slug: 'definition-of-derivative-calcab', exportBase: 'calcABDerivativeDef', partTopics: ['Average vs Instantaneous Rate', 'Limit Definition of the Derivative', 'Derivative as a Function', 'Differentiability', 'Graphical Interpretation', 'Problem-Solving Workshop', 'Review & Applications'],
    concepts: [
      ['Average rate of change = [f(b) - f(a)]/(b - a) = slope of secant line', 'Instantaneous rate of change = slope of tangent line at a point', 'As the secant interval shrinks to zero, the secant approaches the tangent', 'The derivative captures instantaneous rate of change'],
      ['f\'(x) = lim(h→0) [f(x+h) - f(x)]/h', 'Alternative form: f\'(a) = lim(x→a) [f(x) - f(a)]/(x - a)', 'The limit must exist for the derivative to exist', 'This definition connects the slope concept to limits'],
      ['f\'(x) is itself a function — it has its own domain, range, and graph', 'f\'(x) > 0 means f is increasing; f\'(x) < 0 means f is decreasing', 'f\'(x) = 0 at horizontal tangent lines (potential extrema)', 'The derivative of a polynomial of degree n has degree n-1'],
      ['If f is differentiable at c, then f is continuous at c', 'Continuous does NOT imply differentiable (example: |x| at x=0)', 'Not differentiable at corners, cusps, vertical tangents, or discontinuities', 'Differentiability is a stronger condition than continuity'],
      ['The derivative at a point = slope of the tangent line at that point', 'Tangent line equation: y - f(a) = f\'(a)(x - a)', 'Where f\' is zero, f has a horizontal tangent', 'The sign of f\' indicates whether f is rising or falling']
    ] },
  { slug: 'basic-differentiation-rules-calcab', exportBase: 'calcABBasicDiff', partTopics: ['Power Rule', 'Constant & Sum Rules', 'Product Rule', 'Quotient Rule', 'Derivatives of Trig Functions', 'Problem-Solving Workshop', 'Review & Applications'],
    concepts: [
      ['Power Rule: d/dx[xⁿ] = n·x^(n-1) for any real number n', 'd/dx[x³] = 3x², d/dx[x⁻²] = -2x⁻³, d/dx[√x] = 1/(2√x)', 'Works for integer, fractional, and negative exponents', 'Combine with constant multiple rule for terms like 5x⁴'],
      ['Constant rule: d/dx[c] = 0 for any constant c', 'Sum/Difference rule: d/dx[f ± g] = f\' ± g\'', 'Constant multiple rule: d/dx[c·f(x)] = c·f\'(x)', 'Differentiate each term independently, then combine'],
      ['Product Rule: d/dx[f·g] = f\'·g + f·g\'', 'Remember: the derivative of a product is NOT the product of derivatives', 'Keep first times derivative of second, plus derivative of first times keep second', 'Extend to three functions: (fgh)\' = f\'gh + fg\'h + fgh\''],
      ['Quotient Rule: d/dx[f/g] = (f\'g - fg\')/g²', 'Low d-high minus high d-low, over the square of what\'s below', 'Can also write as: d/dx[f/g] = (gf\' - fg\')/g²', 'Alternative: rewrite f/g = f·g⁻¹ and use product rule with power rule'],
      ['d/dx[sin x] = cos x; d/dx[cos x] = -sin x', 'd/dx[tan x] = sec²x; d/dx[cot x] = -csc²x', 'd/dx[sec x] = sec x tan x; d/dx[csc x] = -csc x cot x', 'These come from the limit definition and the identity sin(x)/x → 1']
    ] },
  { slug: 'chain-rule-calcab', exportBase: 'calcABChainRule', partTopics: ['The Chain Rule', 'Nested Functions', 'Chain Rule with Trig', 'Chain Rule with Exponentials & Logs', 'Implicit Differentiation', 'Problem-Solving Workshop', 'Review & Applications'],
    concepts: [
      ['Chain Rule: d/dx[f(g(x))] = f\'(g(x)) · g\'(x)', 'Outer derivative times inner derivative', 'Leibniz notation: dy/dx = (dy/du)(du/dx)', 'Used whenever one function is "inside" another'],
      ['Identify the outer and inner functions', 'Example: d/dx[(3x+1)⁵] = 5(3x+1)⁴ · 3 = 15(3x+1)⁴', 'Multiple layers: apply chain rule multiple times', 'Always differentiate from the outside in'],
      ['d/dx[sin(u)] = cos(u) · u\' where u = g(x)', 'd/dx[cos(3x²)] = -sin(3x²) · 6x', 'd/dx[tan(u)] = sec²(u) · u\'', 'Chain rule combines with every trig derivative'],
      ['d/dx[eᵘ] = eᵘ · u\' — the exponential function times the derivative of the exponent', 'd/dx[ln(u)] = u\'/u = (1/u) · u\'', 'd/dx[aᵘ] = aᵘ · ln(a) · u\' for any base a > 0', 'd/dx[log_a(u)] = u\'/(u · ln(a))'],
      ['Implicit differentiation: differentiate both sides with respect to x', 'Treat y as a function of x; apply chain rule when differentiating y-terms', 'Collect dy/dx terms on one side, factor, and solve', 'Use for equations like x² + y² = 25 where y isn\'t isolated']
    ] },
  { slug: 'applications-of-derivatives-calcab', exportBase: 'calcABDerivApps', partTopics: ['Related Rates', 'Local Extrema', 'Mean Value Theorem', 'First & Second Derivative Tests', 'Concavity & Inflection Points', 'Problem-Solving Workshop', 'Review & Applications'],
    concepts: [
      ['Related rates: quantities changing with respect to time, connected by an equation', 'Steps: draw a picture, identify variables, write an equation, differentiate with respect to t', 'Use the chain rule: d/dt[r²] = 2r · dr/dt', 'Substitute known values AFTER differentiating, not before'],
      ['Local maximum: f(c) ≥ f(x) for all x near c', 'Local minimum: f(c) ≤ f(x) for all x near c', 'Critical points: where f\'(c) = 0 or f\'(c) is undefined', 'Extrema only occur at critical points (within the domain)'],
      ['MVT: if f is continuous on [a,b] and differentiable on (a,b), then f\'(c) = [f(b)-f(a)]/(b-a) for some c in (a,b)', 'There exists at least one point where the instantaneous rate equals the average rate', 'Rolle\'s Theorem is MVT with f(a) = f(b), giving f\'(c) = 0', 'MVT requires both continuity on [a,b] and differentiability on (a,b)'],
      ['First Derivative Test: f\' changes sign from + to - at c → local max; - to + → local min', 'Second Derivative Test: if f\'(c)=0 and f\'\'{c} < 0 → local max; f\'\'{c} > 0 → local min', 'If f\'\'{c} = 0, the second derivative test is inconclusive', 'Create a sign chart for f\' to determine increasing/decreasing intervals'],
      ['f\'\' > 0: concave up (holds water like a cup)', 'f\'\' < 0: concave down (spills water like a cap)', 'Inflection point: where concavity changes (f\'\' changes sign)', 'Inflection points occur where f\'\' = 0 or f\'\' is undefined (check sign change)']
    ] },
  { slug: 'optimization-calcab', exportBase: 'calcABOptimization', partTopics: ['Optimization Strategy', 'Setting Up Optimization Problems', 'Closed Interval Method', 'Applied Optimization', 'Business & Economics Applications', 'Problem-Solving Workshop', 'Review & Applications'],
    concepts: [
      ['Optimization: finding the maximum or minimum value of a function subject to constraints', 'Steps: define variables, write the objective function, apply constraints, find critical points', 'Check critical points and endpoints for global extrema', 'Verify your answer makes sense in the context of the problem'],
      ['Write the quantity to optimize as a function of one variable', 'Use the constraint to eliminate one variable', 'Determine the domain (often a closed interval)', 'Draw a picture and label all relevant quantities'],
      ['Extreme Value Theorem: a continuous function on [a,b] attains a global max and min', 'Evaluate f at all critical points in (a,b) and at endpoints a and b', 'The largest value is the global maximum; the smallest is the global minimum', 'Works only on closed, bounded intervals'],
      ['Maximum area enclosed by a fixed perimeter', 'Minimum distance between a point and a curve', 'Maximizing volume of a box given material constraints', 'Minimum surface area for a given volume'],
      ['Revenue R(x) = x · p(x) where p(x) is the price function', 'Profit P(x) = R(x) - C(x) where C(x) is cost', 'Maximize profit: set P\'(x) = 0 → marginal revenue = marginal cost', 'Elasticity of demand: how quantity changes in response to price']
    ] },
  { slug: 'linearization-differentials-calcab', exportBase: 'calcABLinearization', partTopics: ['Linear Approximation', 'Differentials', 'Error Estimation', 'Newton\'s Method (Preview)', 'L\'Hôpital\'s Rule', 'Problem-Solving Workshop', 'Review & Applications'],
    concepts: [
      ['Linearization: L(x) = f(a) + f\'(a)(x - a) — the tangent line approximation', 'Best linear approximation of f near x = a', 'Approximation improves as x gets closer to a', 'Example: √(4.01) ≈ L(4.01) using f(x) = √x at a = 4'],
      ['Differential: dy = f\'(x)dx represents the change along the tangent line', 'Δy is the actual change in f; dy is the approximate change', 'dy ≈ Δy for small dx', 'dx is an independent variable; dy depends on both x and dx'],
      ['Relative error = |dy/y| or |Δy/y|', 'Percentage error = relative error × 100%', 'Propagated error: error in output due to error in input', 'Use differentials to estimate maximum error in computed quantities'],
      ['Newton\'s Method: xₙ₊₁ = xₙ - f(xₙ)/f\'(xₙ)', 'Iteratively approximates roots of f(x) = 0', 'Converges quickly when starting near a root', 'May fail if f\'(xₙ) = 0 or if the initial guess is too far from the root'],
      ['L\'Hôpital\'s Rule: for 0/0 or ∞/∞ indeterminate forms, lim f(x)/g(x) = lim f\'(x)/g\'(x)', 'Only apply when the limit is an indeterminate form', 'May need to apply multiple times', 'Other indeterminate forms (0·∞, ∞-∞, 0⁰, ∞⁰, 1^∞) must be converted first']
    ] },
  { slug: 'definite-integrals-calcab', exportBase: 'calcABDefiniteIntegrals', partTopics: ['Riemann Sums', 'The Definite Integral', 'Properties of Definite Integrals', 'Fundamental Theorem of Calculus (Part 1)', 'Fundamental Theorem of Calculus (Part 2)', 'Problem-Solving Workshop', 'Review & Applications'],
    concepts: [
      ['Riemann sum: Σ f(xᵢ*)Δx approximates the area under a curve', 'Left, right, midpoint, and trapezoidal approximations', 'More rectangles (smaller Δx) → better approximation', 'The definite integral is the limit of Riemann sums as n → ∞'],
      ['∫ₐᵇ f(x)dx = lim(n→∞) Σ f(xᵢ*)Δx', 'Geometric interpretation: signed area under the curve from a to b', 'Area above x-axis is positive; area below is negative', 'Net area vs total area: total area uses |f(x)|'],
      ['∫ₐᵃ f(x)dx = 0 (zero-width interval)', '∫ₐᵇ f(x)dx = -∫ᵇₐ f(x)dx (reversing limits negates the integral)', '∫ₐᵇ [f(x) + g(x)]dx = ∫ₐᵇ f(x)dx + ∫ₐᵇ g(x)dx', '∫ₐᵇ cf(x)dx = c∫ₐᵇ f(x)dx (constant multiple)'],
      ['FTC Part 1: d/dx[∫ₐˣ f(t)dt] = f(x)', 'If F(x) = ∫ₐˣ f(t)dt, then F\'(x) = f(x)', 'With chain rule: d/dx[∫ₐ^(g(x)) f(t)dt] = f(g(x)) · g\'(x)', 'This connects differentiation and integration as inverse processes'],
      ['FTC Part 2: ∫ₐᵇ f(x)dx = F(b) - F(a) where F\' = f', 'Find any antiderivative F of f, then evaluate at the bounds', 'This gives an exact method for computing definite integrals', 'No need to take limits of Riemann sums — use antiderivatives instead']
    ] },
  { slug: 'antiderivatives-indefinite-integrals-calcab', exportBase: 'calcABAntiderivatives', partTopics: ['Antiderivatives', 'Basic Integration Rules', 'Integrating Trig Functions', 'Integrating Exponentials & Logs', 'Initial Value Problems', 'Problem-Solving Workshop', 'Review & Applications'],
    concepts: [
      ['An antiderivative of f is a function F such that F\' = f', 'General antiderivative: F(x) + C (always include the constant of integration)', 'The indefinite integral ∫f(x)dx represents the family of all antiderivatives', 'Integration is the reverse of differentiation'],
      ['Power Rule for integration: ∫xⁿ dx = x^(n+1)/(n+1) + C, n ≠ -1', '∫1/x dx = ln|x| + C (the case n = -1)', '∫dx = x + C; ∫k dx = kx + C', 'Sum/Difference rule: ∫[f(x) ± g(x)]dx = ∫f(x)dx ± ∫g(x)dx'],
      ['∫sin x dx = -cos x + C; ∫cos x dx = sin x + C', '∫sec²x dx = tan x + C; ∫csc²x dx = -cot x + C', '∫sec x tan x dx = sec x + C; ∫csc x cot x dx = -csc x + C', 'Remember: integration reverses the sign patterns from differentiation'],
      ['∫eˣ dx = eˣ + C', '∫aˣ dx = aˣ/ln(a) + C for a > 0, a ≠ 1', '∫1/x dx = ln|x| + C', '∫1/(1+x²) dx = arctan(x) + C; ∫1/√(1-x²) dx = arcsin(x) + C'],
      ['Given f\'(x) and an initial condition f(a) = b, find f(x)', 'Integrate f\'(x) to get f(x) + C', 'Use the initial condition to solve for C', 'Velocity → position and acceleration → velocity are common applications']
    ] },
  { slug: 'u-substitution-calcab', exportBase: 'calcABUSub', partTopics: ['Introduction to u-Substitution', 'Choosing u', 'Definite Integrals with u-Sub', 'Advanced u-Substitution Techniques', 'Completing the Square for Integration', 'Problem-Solving Workshop', 'Review & Applications'],
    concepts: [
      ['u-substitution reverses the chain rule for integration', 'Let u = g(x), then du = g\'(x)dx', '∫f(g(x))·g\'(x)dx = ∫f(u)du', 'After integrating in terms of u, substitute back to x'],
      ['Choose u as the "inside" function (the argument of a composite function)', 'du should match (or be a constant multiple of) the remaining factors', 'Common choices: u = expression inside a power, inside a trig function, exponent, denominator', 'If the first choice doesn\'t work, try a different u'],
      ['Option 1: change bounds to u-values: when x = a, u = g(a)', 'Option 2: integrate in u, back-substitute, then use original x-bounds', 'Changing bounds is often cleaner — no need to back-substitute', 'Don\'t mix x-bounds with u-integrand (or vice versa)'],
      ['Multiplying/dividing by a constant to match du', 'Long division before substitution for improper rational functions', 'Splitting fractions: ∫(A+B)/C dx = ∫A/C dx + ∫B/C dx', 'Rewriting integrands to reveal standard forms'],
      ['∫1/(x²+bx+c)dx: complete the square, then use arctan form', '∫1/√(a²-x²)dx = arcsin(x/a) + C', '∫1/(x²+a²)dx = (1/a)arctan(x/a) + C', 'Completing the square converts quadratics into recognizable integration forms']
    ] },
  { slug: 'area-between-curves-calcab', exportBase: 'calcABAreaCurves', partTopics: ['Area Under a Curve', 'Area Between Two Curves (Vertical)', 'Area Between Two Curves (Horizontal)', 'Determining Top & Bottom Functions', 'Multiple Intersection Points', 'Problem-Solving Workshop', 'Review & Applications'],
    concepts: [
      ['Area under f(x) from a to b: A = ∫ₐᵇ f(x)dx (when f(x) ≥ 0)', 'For f(x) < 0, the integral gives negative area; use |f(x)| for total area', 'Total area = ∫ₐᵇ |f(x)|dx = sum of areas of positive and negative regions', 'Split the integral at zeros of f when the sign changes'],
      ['Area between f(x) and g(x): A = ∫ₐᵇ |f(x) - g(x)|dx', 'When f(x) ≥ g(x) on [a,b]: A = ∫ₐᵇ [f(x) - g(x)]dx', 'Top function minus bottom function, integrated from left to right', 'Find intersection points to determine bounds of integration'],
      ['Integrate with respect to y when boundaries are horizontal', 'A = ∫_c^d [right(y) - left(y)]dy', 'Right function minus left function, integrated from bottom to top', 'Sometimes integrating with respect to y is simpler than with respect to x'],
      ['Graph the functions or evaluate at test points to determine which is on top', 'The "top" and "bottom" functions can switch at intersection points', 'Split the integral at each intersection where functions cross', 'Always subtract the lower function from the upper function in each sub-interval'],
      ['Find all intersection points by setting f(x) = g(x)', 'Create separate integrals for each region between consecutive intersection points', 'Sum the areas of all regions (each area is positive)', 'Watch for functions that intersect more than twice']
    ] },
  { slug: 'volumes-of-revolution-calcab', exportBase: 'calcABVolumes', partTopics: ['Disk Method', 'Washer Method', 'Revolving Around Other Axes', 'Volumes by Cross Sections', 'Setting Up Volume Integrals', 'Problem-Solving Workshop', 'Review & Applications'],
    concepts: [
      ['Disk method: V = π∫ₐᵇ [R(x)]² dx for revolution about x-axis', 'Each cross-section is a disk with radius R(x) = |f(x)|', 'The volume element is π[R(x)]²Δx — a thin cylinder', 'Use when the region touches the axis of revolution (no hole)'],
      ['Washer method: V = π∫ₐᵇ ([R(x)]² - [r(x)]²) dx', 'R(x) = outer radius, r(x) = inner radius', 'Use when there is a gap between the region and the axis of revolution', 'Cross-sections are washers (disks with holes)'],
      ['Revolving about y = k: adjust radii by subtracting k', 'Revolving about x = k: integrate with respect to y, adjust radii', 'Outer radius = |farther boundary - axis|', 'Inner radius = |closer boundary - axis|'],
      ['Known cross-sections perpendicular to the x-axis: V = ∫ₐᵇ A(x)dx', 'A(x) is the area of the cross-section at position x', 'Common shapes: squares, semicircles, equilateral triangles, rectangles', 'The "base" of each cross-section is typically bounded by two curves'],
      ['Sketch the region and axis of revolution', 'Determine if you need disks, washers, or known cross-sections', 'Identify the correct radii and bounds of integration', 'Integrate with respect to the variable parallel to the axis of revolution']
    ] },
  { slug: 'accumulation-functions-calcab', exportBase: 'calcABAccumulation', partTopics: ['Accumulation Functions', 'FTC with Variable Bounds', 'Interpreting Accumulation', 'Net Change Theorem', 'Average Value of a Function', 'Problem-Solving Workshop', 'Review & Applications'],
    concepts: [
      ['F(x) = ∫ₐˣ f(t)dt is an accumulation function', 'F(x) accumulates the net signed area from a to x', 'F(a) = 0 (no accumulation at the starting point)', 'F is increasing where f > 0, decreasing where f < 0'],
      ['d/dx[∫ₐˣ f(t)dt] = f(x) (FTC Part 1)', 'With variable upper bound g(x): d/dx[∫ₐ^(g(x)) f(t)dt] = f(g(x))·g\'(x)', 'With variable lower bound: d/dx[∫_(h(x))^b f(t)dt] = -f(h(x))·h\'(x)', 'Both bounds variable: split into two integrals and apply chain rule to each'],
      ['If f(t) represents a rate, ∫ₐˣ f(t)dt gives total accumulated quantity', 'F\'(x) = f(x) means the rate of accumulation equals the integrand', 'Extrema of F correspond to zeros of f (where accumulation rate changes sign)', 'Graph of f determines behavior of F: positive f → F increasing'],
      ['Net Change Theorem: ∫ₐᵇ F\'(x)dx = F(b) - F(a)', 'The integral of a rate of change gives the net change', 'Displacement = ∫ₐᵇ v(t)dt (net change in position)', 'Total distance = ∫ₐᵇ |v(t)|dt (always positive)'],
      ['Average value of f on [a,b]: f_avg = (1/(b-a)) ∫ₐᵇ f(x)dx', 'Mean Value Theorem for Integrals: f(c) = f_avg for some c in (a,b)', 'Geometric interpretation: rectangle with same area as the region under f', 'Units of average value are the same as the units of f']
    ] },
  { slug: 'differential-equations-calcab', exportBase: 'calcABDiffEq', partTopics: ['Introduction to Differential Equations', 'Slope Fields', 'Euler\'s Method', 'Separation of Variables', 'Exponential Growth & Decay', 'Problem-Solving Workshop', 'Review & Applications'],
    concepts: [
      ['Differential equation: an equation involving a derivative (dy/dx = f(x,y))', 'Solution: a function y = g(x) that satisfies the equation', 'General solution: includes arbitrary constant C', 'Particular solution: specific solution using an initial condition'],
      ['Slope field: grid of short line segments with slope dy/dx at each point', 'Each segment shows the slope a solution curve would have at that point', 'Solution curves follow the pattern of the slope field', 'Draw by evaluating dy/dx at grid points and sketching segments'],
      ['Euler\'s Method: numerical approximation of solutions', 'yₙ₊₁ = yₙ + f(xₙ, yₙ)·Δx', 'Start from initial condition (x₀, y₀) and step forward', 'Smaller step size Δx gives more accurate approximation (but more steps)'],
      ['Separate variables: get all y-terms and dy on one side, all x-terms and dx on the other', 'Integrate both sides: ∫g(y)dy = ∫f(x)dx', 'Solve for y (if possible) and apply the initial condition', 'Only works when the DE can be written as g(y)dy = f(x)dx'],
      ['Exponential growth/decay: dy/dt = ky → y = y₀·e^(kt)', 'k > 0: growth; k < 0: decay', 'Half-life: t₁/₂ = ln(2)/|k|', 'Newton\'s Law of Cooling: dT/dt = k(T - Tₛ) where Tₛ is ambient temperature']
    ] },
  { slug: 'particle-motion-calcab', exportBase: 'calcABParticleMotion', partTopics: ['Position, Velocity, Acceleration', 'Analyzing Motion', 'Speed & Direction', 'Displacement vs Distance', 'Particle Motion from Graphs', 'Problem-Solving Workshop', 'Review & Applications'],
    concepts: [
      ['Position s(t) describes location at time t', 'Velocity v(t) = s\'(t) — rate of change of position', 'Acceleration a(t) = v\'(t) = s\'\'{t} — rate of change of velocity', 'Relationships: differentiate position → velocity → acceleration; integrate in reverse'],
      ['Particle at rest when v(t) = 0', 'Particle changes direction when v(t) changes sign', 'Particle speeds up when v and a have the same sign', 'Particle slows down when v and a have opposite signs'],
      ['Speed = |v(t)| — always non-negative', 'If v(t) > 0: moving in positive direction (right/up)', 'If v(t) < 0: moving in negative direction (left/down)', 'Maximum speed occurs at the largest |v(t)| value'],
      ['Displacement = ∫ₐᵇ v(t)dt — net change in position (can be negative)', 'Total distance = ∫ₐᵇ |v(t)|dt — always positive', 'Split the integral at zeros of v(t) to find total distance', 'Displacement can be zero even if the particle moved (returned to start)'],
      ['Given a velocity graph: area above t-axis is positive displacement, below is negative', 'Position at time b: s(b) = s(a) + ∫ₐᵇ v(t)dt', 'Acceleration is the slope of the velocity graph', 'Particle farthest from origin when displacement is maximized']
    ] },
  { slug: 'exponential-models-calcab', exportBase: 'calcABExpModels', partTopics: ['Derivatives of eˣ and ln(x)', 'Logarithmic Differentiation', 'Exponential Growth Models', 'Logistic Growth', 'Bounded Growth Applications', 'Problem-Solving Workshop', 'Review & Applications'],
    concepts: [
      ['d/dx[eˣ] = eˣ — the exponential function is its own derivative', 'd/dx[e^(g(x))] = e^(g(x)) · g\'(x) (chain rule)', 'd/dx[ln(x)] = 1/x for x > 0', 'd/dx[ln(g(x))] = g\'(x)/g(x) (chain rule)'],
      ['Logarithmic differentiation: take ln of both sides, then differentiate', 'Useful for products, quotients, and variable exponents like x^x', 'Steps: y = f(x) → ln y = ln f(x) → (1/y)y\' = [ln f(x)]\' → y\' = f(x)·[ln f(x)]\'', 'd/dx[x^x] = x^x(ln x + 1) using logarithmic differentiation'],
      ['dy/dt = ky → y = Ce^(kt): continuous exponential model', 'k = growth rate (instantaneous rate proportional to current value)', 'C = initial value y(0)', 'Doubling time = ln(2)/k; half-life = ln(2)/|k|'],
      ['Logistic model: dP/dt = kP(1 - P/L) where L is carrying capacity', 'Solution: P(t) = L/(1 + Ae^(-kt)) where A = (L-P₀)/P₀', 'Population grows fastest at P = L/2 (inflection point)', 'As t → ∞, P → L (population approaches carrying capacity)'],
      ['Limited growth: rate proportional to remaining capacity', 'Newton\'s Law of Cooling: dT/dt = k(T - Tₛ) → T(t) = Tₛ + (T₀-Tₛ)e^(kt)', 'Concentration mixing: rate of change = rate in - rate out', 'Logistic models capture S-shaped growth curves in biology and economics']
    ] },
  { slug: 'integration-applications-calcab', exportBase: 'calcABIntApps', partTopics: ['Area Review & Setup', 'Volumes of Known Cross-Sections', 'Distance from Velocity', 'Population & Accumulation', 'Work & Fluid Force (Preview)', 'Problem-Solving Workshop', 'Review & Applications'],
    concepts: [
      ['Area between curves: ∫ₐᵇ [top(x) - bottom(x)]dx or ∫_c^d [right(y) - left(y)]dy', 'Choose the variable that makes bounds and functions simplest', 'Split at intersections where top/bottom switch', 'Always verify which function is on top by testing a point'],
      ['Volume = ∫ₐᵇ A(x)dx where A(x) is the cross-sectional area', 'Square cross-sections: A(x) = [f(x) - g(x)]²', 'Semicircular cross-sections: A(x) = π/8 · [f(x) - g(x)]²', 'Equilateral triangle cross-sections: A(x) = (√3/4)[f(x) - g(x)]²'],
      ['Displacement = ∫ₐᵇ v(t)dt; Total distance = ∫ₐᵇ |v(t)|dt', 'Position function: s(t) = s(0) + ∫₀ᵗ v(u)du', 'If velocity is given as data, use trapezoidal approximation', 'Units: velocity in m/s, time in s → displacement in meters'],
      ['Population growth: P(t) = P(0) + ∫₀ᵗ r(s)ds where r is the growth rate', 'Total amount consumed/produced: integral of the rate', 'Average rate over [a,b] = (1/(b-a))∫ₐᵇ r(t)dt', 'Net change = integral of the rate function over the interval'],
      ['Work = ∫ₐᵇ F(x)dx where F(x) is force as a function of position', 'Spring force: F(x) = kx (Hooke\'s Law)', 'Pumping fluid: W = ∫ρg · A(y) · (D-y) dy', 'These applications extend the accumulation framework to physics']
    ] },
  { slug: 'free-response-strategies-calcab', exportBase: 'calcABFreeResponse', partTopics: ['Reading AP Free Response Questions', 'Justification & Communication', 'Calculator vs No-Calculator Sections', 'Rate & Accumulation Problems', 'Differential Equation Problems', 'Problem-Solving Workshop', 'Review & Applications'],
    concepts: [
      ['Read the entire problem before starting', 'Identify what each part asks: find, show, justify, explain', 'Label answers clearly with units', 'Show all work — no credit for answers without supporting work'],
      ['Use calculus-based justifications: "Since f\' > 0 on (a,b), f is increasing"', 'IVT: "Since f is continuous and f(a) < N < f(b), by IVT there exists c..."', 'MVT: "Since f is continuous on [a,b] and differentiable on (a,b), by MVT..."', 'State theorems by name and verify their hypotheses'],
      ['Calculator section: use stored integrals and derivatives, graph to find intersections', 'No-calculator section: show all algebraic steps', 'On calculator problems, write the integral/equation being computed', 'Round to 3 decimal places unless otherwise specified'],
      ['Total amount = ∫ₐᵇ rate(t)dt', 'Interpret ∫ₐᵇ r(t)dt in context with units', '"At time t = c, the rate is..." vs "The total from a to b is..."', 'Average value = (1/(b-a))∫ₐᵇ f(t)dt'],
      ['Sketch solution curve on slope field through given initial condition', 'Separate and integrate with proper technique', 'Apply initial condition to find particular solution', 'State the domain of the particular solution']
    ] },
  { slug: 'ap-exam-review-calcab', exportBase: 'calcABExamReview', partTopics: ['Limits & Continuity Review', 'Derivatives Review', 'Applications of Derivatives Review', 'Integrals Review', 'Applications of Integrals Review', 'Problem-Solving Workshop', 'Comprehensive Review'],
    concepts: [
      ['Evaluate limits using substitution, factoring, rationalization, L\'Hôpital\'s Rule', 'Identify types of discontinuities: removable, jump, infinite', 'Apply Squeeze Theorem for bounded functions', 'IVT and its conditions: continuous function on closed interval'],
      ['Power, product, quotient, chain rules', 'Implicit differentiation and related rates', 'Derivatives of trig, exponential, and logarithmic functions', 'Inverse function derivatives: (f⁻¹)\'(a) = 1/f\'(f⁻¹(a))'],
      ['Critical points, extrema, increasing/decreasing intervals', 'Mean Value Theorem and Rolle\'s Theorem', 'Optimization: set up and solve applied max/min problems', 'Concavity, inflection points, second derivative test'],
      ['Fundamental Theorem of Calculus (Parts 1 and 2)', 'u-substitution for definite and indefinite integrals', 'Properties of integrals: linearity, additivity, comparison', 'Basic antiderivative formulas and techniques'],
      ['Area between curves, volumes of revolution (disk/washer)', 'Accumulation functions and net change', 'Average value of a function', 'Particle motion: displacement vs total distance']
    ] },
  { slug: 'inverse-functions-derivatives-calcab', exportBase: 'calcABInverseDeriv', partTopics: ['Review of Inverse Functions', 'Derivative of Inverse Functions', 'Derivatives of Inverse Trig Functions', 'Integrals Leading to Inverse Trig', 'Applications of Inverse Derivatives', 'Problem-Solving Workshop', 'Review & Applications'],
    concepts: [
      ['f and f⁻¹ are reflections across y = x', 'f(f⁻¹(x)) = x and f⁻¹(f(x)) = x', 'Domain of f = Range of f⁻¹ and vice versa', 'Only one-to-one functions have inverses'],
      ['(f⁻¹)\'(a) = 1/f\'(f⁻¹(a))', 'This formula comes from differentiating f(f⁻¹(x)) = x implicitly', 'You need both f⁻¹(a) and f\' at that point', 'Example: if f(3)=7 and f\'(3)=4, then (f⁻¹)\'(7) = 1/4'],
      ['d/dx[arcsin(x)] = 1/√(1-x²)', 'd/dx[arccos(x)] = -1/√(1-x²)', 'd/dx[arctan(x)] = 1/(1+x²)', 'With chain rule: d/dx[arctan(g(x))] = g\'(x)/(1+[g(x)]²)'],
      ['∫1/√(a²-x²) dx = arcsin(x/a) + C', '∫1/(a²+x²) dx = (1/a)arctan(x/a) + C', 'Recognize these forms in integrands', 'May need to complete the square or factor to reveal these forms'],
      ['Finding tangent lines to inverse function graphs', 'Solving equations involving inverse trig functions', 'Related rates with inverse trig functions', 'Understanding the restricted domains that make inverses possible']
    ] },
  { slug: 'tables-data-calcab', exportBase: 'calcABTablesData', partTopics: ['Using Data Tables for Derivatives', 'Trapezoidal Rule', 'Riemann Sums from Tables', 'Applying FTC with Tabular Data', 'Interpreting Results in Context', 'Problem-Solving Workshop', 'Review & Applications'],
    concepts: [
      ['Approximate f\'(c) ≈ [f(b)-f(a)]/(b-a) using nearby table values', 'Use symmetric difference quotient when c is between a and b', 'Cannot compute exact derivatives from discrete data — only approximations', 'Units of the derivative: (units of f)/(units of x)'],
      ['Trapezoidal Rule: ∫ₐᵇ f(x)dx ≈ (Δx/2)[f(x₀) + 2f(x₁) + 2f(x₂) + ... + 2f(xₙ₋₁) + f(xₙ)]', 'Works with unequal subintervals: sum individual trapezoid areas', 'Each trapezoid area = ½(f(xᵢ) + f(xᵢ₊₁))(xᵢ₊₁ - xᵢ)', 'Generally more accurate than left or right Riemann sums'],
      ['Left Riemann sum: uses left endpoints of each subinterval', 'Right Riemann sum: uses right endpoints', 'Midpoint sum: uses the midpoint of each subinterval', 'Over/underestimates depend on whether f is increasing or decreasing'],
      ['Use FTC Part 2: ∫ₐᵇ f\'(x)dx = f(b) - f(a) with tabular rate data', 'Approximate ∫ₐᵇ f(x)dx using Riemann sums or trapezoidal rule', 'Interpret the integral: "total change in f from a to b"', 'Average value from table: (1/(b-a)) × approximate integral'],
      ['Always include units in your answer', 'State what the computed quantity represents in context', 'Explain whether an approximation is an over- or underestimate', '"Since f is decreasing, the right Riemann sum is an underestimate"']
    ] },
  { slug: 'theorem-applications-calcab', exportBase: 'calcABTheorems', partTopics: ['Extreme Value Theorem', 'Mean Value Theorem Applications', 'Intermediate Value Theorem Applications', 'Existence Theorems Summary', 'Connecting Theorems to Problems', 'Problem-Solving Workshop', 'Review & Applications'],
    concepts: [
      ['EVT: a continuous function on [a,b] attains both a global max and a global min', 'Global max and min occur at critical points or endpoints', 'Check f\' = 0, f\' undefined, and endpoints', 'EVT guarantees existence; finding extrema requires calculation'],
      ['MVT: f\'(c) = [f(b)-f(a)]/(b-a) for some c in (a,b)', 'Interpretation: at some point the instantaneous rate equals the average rate', 'If a car travels 60 miles in 1 hour, at some moment it was going exactly 60 mph', 'Rolle\'s: if f(a) = f(b), then f\'(c) = 0 for some c in (a,b)'],
      ['IVT: if f is continuous on [a,b] and N is between f(a) and f(b), then f(c) = N for some c', 'Use IVT to show existence of solutions', 'Example: show f(x) = 0 has a solution by finding a and b where f(a) and f(b) have opposite signs', 'IVT requires continuity — always state this condition'],
      ['All three theorems (EVT, MVT, IVT) are existence theorems', 'They guarantee SOMETHING EXISTS but don\'t give a formula to find it', 'Common thread: continuity (and differentiability for MVT) is essential', 'Know when to apply each theorem based on what you need to prove'],
      ['Read what the question asks: "must there exist," "is it possible," "show that"', '"Must there exist" → use a theorem (IVT, MVT, EVT)', '"Is it possible" → provide an example or counterexample', 'Connect the theorem\'s conclusion to the specific quantities in the problem']
    ] }
];

// Build topics array
const topics = [];

for (const topicDef of calcABTopics) {
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
        { q: `Which best describes a key concept of ${partTitle.toLowerCase()}?`, opts: [concepts[0].split(':')[0].trim(), 'An unrelated concept', 'This is not covered in AP Calculus AB', 'A concept from a different course'], correct: 0, explanation: concepts[0] },
        ...(concepts.length >= 3 ? [{ q: `In the context of ${partTitle.toLowerCase()}, which is accurate?`, opts: [concepts[2].includes(':') ? concepts[2].split(':').slice(1).join(':').trim() : concepts[2], 'The opposite is true', 'This concept is obsolete', 'None of these are correct'], correct: 0, explanation: concepts[2] }] : []),
        ...(concepts.length >= 4 ? [{ q: `Which concept relates directly to ${partTitle.toLowerCase()}?`, opts: [concepts[3].includes(':') ? concepts[3].split(':').slice(1).join(':').trim().substring(0, 80) : concepts[3].substring(0, 80), 'Only in linear algebra', 'Exclusively in statistics', 'This applies only to discrete math'], correct: 0, explanation: concepts[3] }] : [])
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
      const fileName = `calcab-${topic.slug}-part${partNum}.ts`;
      const filePath = path.join(OUT_DIR, fileName);
      const content = generateFile(topic, i);
      fs.writeFileSync(filePath, content, 'utf-8');
      totalFiles++;
    }
  }
  console.log(`✅ Generated ${totalFiles} AP Calculus AB lesson files`);
}

main();
