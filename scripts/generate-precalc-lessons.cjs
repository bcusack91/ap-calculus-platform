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
  return slug.replace(/-precalc$/, '').replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
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
# ${partIdx === 0 ? '📈 ' + topicTitle : part.title}

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

// AP Precalculus - 20 Topics
const precalcTopics = [
  { slug: 'polynomial-functions-precalc', exportBase: 'precalcPolynomial', partTopics: ['Polynomial Basics', 'End Behavior', 'Zeros & Multiplicity', 'Graphing Polynomials', 'Polynomial Division', 'Problem-Solving Workshop', 'Review & Applications'],
    concepts: [
      ['Polynomials are expressions of the form aₙxⁿ + aₙ₋₁xⁿ⁻¹ + ... + a₁x + a₀', 'Degree: highest power of x determines the polynomial\'s behavior', 'Leading coefficient: the coefficient of the highest-degree term', 'Standard form lists terms from highest to lowest degree'],
      ['Even-degree polynomials: both ends go the same direction', 'Odd-degree polynomials: ends go in opposite directions', 'Positive leading coefficient with even degree: both ends up', 'Negative leading coefficient with odd degree: left end up, right end down'],
      ['Zeros (roots): values of x where f(x) = 0', 'Multiplicity: the number of times a factor repeats', 'Odd multiplicity: graph crosses the x-axis at that zero', 'Even multiplicity: graph touches and bounces off the x-axis'],
      ['Plot zeros and y-intercept first', 'Use end behavior to sketch the tails', 'Apply multiplicity to determine crossing vs bouncing', 'Connect with a smooth, continuous curve'],
      ['Long division of polynomials: divide step by step', 'Synthetic division: shortcut when dividing by (x - c)', 'Remainder Theorem: f(c) = remainder when dividing by (x - c)', 'Factor Theorem: (x - c) is a factor if and only if f(c) = 0']
    ] },
  { slug: 'rational-functions-precalc', exportBase: 'precalcRational', partTopics: ['Rational Function Basics', 'Vertical Asymptotes', 'Horizontal & Slant Asymptotes', 'Graphing Rational Functions', 'Solving Rational Equations', 'Problem-Solving Workshop', 'Review & Applications'],
    concepts: [
      ['Rational function: f(x) = p(x)/q(x) where p and q are polynomials', 'Domain: all real numbers except where q(x) = 0', 'Simplification: factor and cancel common factors', 'Holes occur where common factors cancel'],
      ['Vertical asymptotes occur where q(x) = 0 (after cancellation)', 'The graph approaches ±∞ near vertical asymptotes', 'Sign analysis determines whether the function goes to +∞ or -∞', 'A factor in the denominator that does NOT cancel gives a vertical asymptote'],
      ['Horizontal asymptote depends on degree comparison of p(x) and q(x)', 'Degree of numerator < degree of denominator: y = 0', 'Degrees equal: y = (leading coeff of p)/(leading coeff of q)', 'Degree of numerator = denominator + 1: slant (oblique) asymptote found by polynomial division'],
      ['Find domain, intercepts, asymptotes, and holes', 'Plot key points and asymptotes on the coordinate plane', 'Determine sign of function in each interval between critical points', 'Connect with smooth curves approaching asymptotes'],
      ['Multiply both sides by the LCD to eliminate fractions', 'Check all solutions against the original domain', 'Extraneous solutions: solutions that make a denominator zero', 'Solve resulting polynomial equation after clearing fractions']
    ] },
  { slug: 'exponential-functions-precalc', exportBase: 'precalcExponential', partTopics: ['Exponential Growth & Decay', 'Properties of Exponential Functions', 'The Number e', 'Exponential Equations', 'Exponential Modeling', 'Problem-Solving Workshop', 'Review & Applications'],
    concepts: [
      ['Exponential function: f(x) = a · bˣ where b > 0, b ≠ 1', 'b > 1: exponential growth; 0 < b < 1: exponential decay', 'Growth factor b = 1 + rate for growth, b = 1 - rate for decay', 'The y-intercept of f(x) = a · bˣ is the point (0, a)'],
      ['Domain: all real numbers; Range: (0, ∞) for positive a', 'Horizontal asymptote at y = 0 (or y = k for shifts)', 'Exponential functions are always one-to-one', 'Transformations: f(x) = a · b^(x-h) + k shifts h units right, k units up'],
      ['e ≈ 2.71828..., the base of natural exponential functions', 'Continuous compounding: A = Pe^(rt)', 'The function f(x) = eˣ has a slope equal to its value at every point', 'e = lim(n→∞) (1 + 1/n)ⁿ'],
      ['If bˣ = bʸ, then x = y (one-to-one property)', 'Rewrite both sides with the same base when possible', 'Use logarithms when bases cannot be matched', 'Check solutions in the original equation'],
      ['Population growth: P(t) = P₀ · e^(kt) where k > 0', 'Radioactive decay: A(t) = A₀ · e^(kt) where k < 0', 'Half-life: time for quantity to reduce to half; t₁/₂ = ln(2)/|k|', 'Doubling time: t_d = ln(2)/k for growth']
    ] },
  { slug: 'logarithmic-functions-precalc', exportBase: 'precalcLogarithmic', partTopics: ['Logarithm Basics', 'Properties of Logarithms', 'Common & Natural Logs', 'Solving Logarithmic Equations', 'Logarithmic Modeling', 'Problem-Solving Workshop', 'Review & Applications'],
    concepts: [
      ['log_b(x) = y means b^y = x', 'Logarithm is the inverse of the exponential function', 'Domain: (0, ∞); Range: all real numbers', 'The graph of y = log_b(x) passes through (1, 0) and (b, 1)'],
      ['Product rule: log_b(MN) = log_b(M) + log_b(N)', 'Quotient rule: log_b(M/N) = log_b(M) - log_b(N)', 'Power rule: log_b(M^n) = n · log_b(M)', 'Change of base: log_b(x) = ln(x)/ln(b) = log(x)/log(b)'],
      ['Common log: log(x) = log₁₀(x), used for pH, decibels, Richter scale', 'Natural log: ln(x) = logₑ(x), used in calculus and natural phenomena', 'ln(e) = 1 and log(10) = 1', 'ln(eˣ) = x and e^(ln(x)) = x for x > 0'],
      ['Isolate the logarithmic expression', 'Convert to exponential form: log_b(x) = y → b^y = x', 'Check for extraneous solutions (argument must be positive)', 'Use properties to combine or expand log expressions before solving'],
      ['Richter scale: M = log(I/I₀), each unit is 10× intensity', 'Decibel scale: dB = 10 · log(I/I₀)', 'pH scale: pH = -log[H⁺], logarithmic measure of acidity', 'Logarithmic regression: y = a + b · ln(x) for data modeling']
    ] },
  { slug: 'function-composition-inverses-precalc', exportBase: 'precalcComposition', partTopics: ['Function Composition', 'Domain of Composed Functions', 'Inverse Functions', 'Finding Inverses Algebraically', 'Verifying Inverses', 'Problem-Solving Workshop', 'Review & Applications'],
    concepts: [
      ['Composition: (f ∘ g)(x) = f(g(x)) — apply g first, then f', 'Order matters: f(g(x)) ≠ g(f(x)) in general', 'Read "f composed with g" or "f of g of x"', 'Decompose complex functions into simpler compositions'],
      ['Domain of f ∘ g: x must be in domain of g AND g(x) must be in domain of f', 'Always check inner function\'s range against outer function\'s domain', 'Restrict domain when square roots or logarithms are involved', 'Write domain in interval notation'],
      ['f⁻¹ is the inverse function: f⁻¹(f(x)) = x and f(f⁻¹(x)) = x', 'Only one-to-one functions have inverses', 'Horizontal Line Test: if any horizontal line crosses the graph more than once, no inverse exists', 'The graph of f⁻¹ is the reflection of f over the line y = x'],
      ['Replace f(x) with y', 'Swap x and y in the equation', 'Solve the new equation for y', 'Replace y with f⁻¹(x) and state the domain'],
      ['Verify: f(f⁻¹(x)) = x for all x in domain of f⁻¹', 'Verify: f⁻¹(f(x)) = x for all x in domain of f', 'Graphical verification: reflection over y = x', 'Domain of f = Range of f⁻¹ and vice versa']
    ] },
  { slug: 'transformations-precalc', exportBase: 'precalcTransformations', partTopics: ['Vertical & Horizontal Shifts', 'Reflections', 'Stretches & Compressions', 'Combining Transformations', 'Parent Functions Gallery', 'Problem-Solving Workshop', 'Review & Applications'],
    concepts: [
      ['Vertical shift: f(x) + k moves the graph up (k > 0) or down (k < 0)', 'Horizontal shift: f(x - h) moves the graph right (h > 0) or left (h < 0)', 'Note: horizontal shifts are opposite to the sign inside', 'Shifts do not change the shape, only the position'],
      ['Reflection over x-axis: -f(x) flips the graph vertically', 'Reflection over y-axis: f(-x) flips the graph horizontally', 'Reflection over y = x gives the inverse function graph', 'Reflections preserve the shape but change orientation'],
      ['Vertical stretch by factor a: a · f(x) where |a| > 1', 'Vertical compression by factor a: a · f(x) where 0 < |a| < 1', 'Horizontal compression by factor b: f(bx) where |b| > 1', 'Horizontal stretch by factor b: f(bx) where 0 < |b| < 1'],
      ['Order of transformations: horizontal shifts/stretches first, then vertical', 'General form: a · f(b(x - h)) + k', 'a controls vertical stretch/reflection; b controls horizontal stretch/reflection', 'h controls horizontal shift; k controls vertical shift'],
      ['Linear: f(x) = x; Quadratic: f(x) = x²; Cubic: f(x) = x³', 'Absolute value: f(x) = |x|; Square root: f(x) = √x', 'Reciprocal: f(x) = 1/x; Exponential: f(x) = bˣ', 'Logarithmic: f(x) = log_b(x); Greatest integer: f(x) = ⌊x⌋']
    ] },
  { slug: 'trigonometric-functions-precalc', exportBase: 'precalcTrigFunctions', partTopics: ['Angles & Radian Measure', 'Unit Circle', 'Sine & Cosine Functions', 'Other Trig Functions', 'Trig Function Graphs', 'Problem-Solving Workshop', 'Review & Applications'],
    concepts: [
      ['Degree to radian: multiply by π/180', 'Radian to degree: multiply by 180/π', 'One full rotation = 2π radians = 360°', 'Arc length: s = rθ where θ is in radians'],
      ['Unit circle: radius 1 centered at the origin', 'Point on unit circle: (cos θ, sin θ)', 'Key angles: 0, π/6, π/4, π/3, π/2 and their multiples', 'Reference angles: acute angle formed with the x-axis'],
      ['sin θ = y-coordinate on unit circle; cos θ = x-coordinate', 'Period of sin and cos: 2π', 'Amplitude: |a| in y = a sin(bx) or y = a cos(bx)', 'Domain: all reals; Range: [-1, 1]'],
      ['tan θ = sin θ / cos θ; cot θ = cos θ / sin θ', 'sec θ = 1/cos θ; csc θ = 1/sin θ', 'Period of tan and cot: π', 'Tangent is undefined where cos θ = 0'],
      ['y = a sin(b(x - c)) + d: amplitude |a|, period 2π/|b|, phase shift c, vertical shift d', 'y = a cos(b(x - c)) + d follows the same pattern', 'tan graph has vertical asymptotes at x = π/2 + nπ', 'Reciprocal functions have the same period as their base functions']
    ] },
  { slug: 'trigonometric-identities-precalc', exportBase: 'precalcTrigIdentities', partTopics: ['Fundamental Identities', 'Pythagorean Identities', 'Sum & Difference Formulas', 'Double & Half Angle Formulas', 'Verifying Identities', 'Problem-Solving Workshop', 'Review & Applications'],
    concepts: [
      ['Reciprocal: csc θ = 1/sin θ, sec θ = 1/cos θ, cot θ = 1/tan θ', 'Quotient: tan θ = sin θ/cos θ, cot θ = cos θ/sin θ', 'Even/odd: cos(-θ) = cos θ (even); sin(-θ) = -sin θ (odd)', 'Cofunction: sin(π/2 - θ) = cos θ, tan(π/2 - θ) = cot θ'],
      ['sin²θ + cos²θ = 1', '1 + tan²θ = sec²θ', '1 + cot²θ = csc²θ', 'These can be rearranged to isolate any single function'],
      ['sin(A + B) = sin A cos B + cos A sin B', 'sin(A - B) = sin A cos B - cos A sin B', 'cos(A + B) = cos A cos B - sin A sin B', 'cos(A - B) = cos A cos B + sin A sin B'],
      ['sin(2θ) = 2 sin θ cos θ', 'cos(2θ) = cos²θ - sin²θ = 2cos²θ - 1 = 1 - 2sin²θ', 'sin(θ/2) = ±√((1 - cos θ)/2)', 'cos(θ/2) = ±√((1 + cos θ)/2)'],
      ['Work with one side at a time to transform it into the other', 'Convert everything to sine and cosine as a strategy', 'Factor, combine fractions, or multiply by conjugates', 'Use Pythagorean identities to simplify']
    ] },
  { slug: 'inverse-trig-functions-precalc', exportBase: 'precalcInverseTrig', partTopics: ['Inverse Sine (arcsin)', 'Inverse Cosine (arccos)', 'Inverse Tangent (arctan)', 'Compositions with Inverse Trig', 'Solving Trig Equations', 'Problem-Solving Workshop', 'Review & Applications'],
    concepts: [
      ['arcsin(x) = sin⁻¹(x): finds the angle whose sine is x', 'Domain: [-1, 1]; Range: [-π/2, π/2]', 'sin(sin⁻¹(x)) = x for x in [-1, 1]', 'sin⁻¹(sin(x)) = x only for x in [-π/2, π/2]'],
      ['arccos(x) = cos⁻¹(x): finds the angle whose cosine is x', 'Domain: [-1, 1]; Range: [0, π]', 'cos(cos⁻¹(x)) = x for x in [-1, 1]', 'cos⁻¹(cos(x)) = x only for x in [0, π]'],
      ['arctan(x) = tan⁻¹(x): finds the angle whose tangent is x', 'Domain: all reals; Range: (-π/2, π/2)', 'Horizontal asymptotes at y = ±π/2', 'tan(tan⁻¹(x)) = x for all real x'],
      ['For sin(cos⁻¹(x)), draw a right triangle with cos θ = x', 'Use the Pythagorean theorem to find the missing side', 'Evaluate the desired trig function from the triangle', 'This technique works for any composition of trig and inverse trig'],
      ['Isolate the trig function first', 'Find reference angle, then determine all angles in the given interval', 'General solutions use + 2nπ (or + nπ for tangent)', 'Factor or use substitution for equations with multiple trig terms']
    ] },
  { slug: 'law-of-sines-cosines-precalc', exportBase: 'precalcLawSinesCosines', partTopics: ['Law of Sines', 'Ambiguous Case (SSA)', 'Law of Cosines', 'Area of Triangles', 'Applications of Triangle Solving', 'Problem-Solving Workshop', 'Review & Applications'],
    concepts: [
      ['Law of Sines: a/sin A = b/sin B = c/sin C', 'Use when you know: AAS, ASA, or SSA', 'Relates sides to opposite angles', 'Can solve for unknown sides or angles'],
      ['SSA (Side-Side-Angle) can give 0, 1, or 2 solutions', 'Compare the given side opposite the known angle with the other known side', 'If a < b sin A: no solution', 'If b sin A < a < b: two possible triangles (ambiguous)'],
      ['Law of Cosines: c² = a² + b² - 2ab cos C', 'Use when you know: SAS or SSS', 'Generalizes the Pythagorean theorem (when C = 90°, cos C = 0)', 'Can solve for a side or for an angle: cos C = (a² + b² - c²)/(2ab)'],
      ['Area = ½ab sin C (using two sides and included angle)', 'Heron\'s formula: Area = √(s(s-a)(s-b)(s-c)) where s = (a+b+c)/2', 'Area using Law of Sines: Area = a² sin B sin C / (2 sin A)', 'These formulas work for any triangle, not just right triangles'],
      ['Navigation: finding distances using bearings and angles', 'Surveying: determining heights and distances indirectly', 'Force vectors: resolving and combining forces', 'Real-world problems often involve oblique (non-right) triangles']
    ] },
  { slug: 'polar-coordinates-precalc', exportBase: 'precalcPolar', partTopics: ['Polar Coordinate System', 'Converting Between Coordinate Systems', 'Polar Equations & Graphs', 'Classic Polar Curves', 'Complex Numbers in Polar Form', 'Problem-Solving Workshop', 'Review & Applications'],
    concepts: [
      ['Polar coordinates: (r, θ) where r is distance from origin and θ is angle from positive x-axis', 'Multiple representations: (r, θ) = (r, θ + 2πn) = (-r, θ + π)', 'Pole is the origin (r = 0)', 'Polar axis is the positive x-axis direction'],
      ['Polar to rectangular: x = r cos θ, y = r sin θ', 'Rectangular to polar: r = √(x² + y²), θ = arctan(y/x) (adjust quadrant)', 'r² = x² + y²', 'Convert equations by substituting x, y, r, θ relationships'],
      ['Circles: r = a (centered at origin), r = a cos θ or r = a sin θ (through origin)', 'Lines: θ = c (through the pole), r = a/cos θ (vertical), r = a/sin θ (horizontal)', 'Symmetry tests: replace θ with -θ (x-axis), θ with π-θ (y-axis), r with -r (origin)', 'Plot by evaluating r at several values of θ'],
      ['Rose curves: r = a cos(nθ) or r = a sin(nθ); n petals if odd, 2n petals if even', 'Limaçons: r = a + b cos θ; inner loop when |a/b| < 1, cardioid when |a/b| = 1', 'Lemniscate: r² = a² cos(2θ) or r² = a² sin(2θ)', 'Spiral of Archimedes: r = aθ, distance from pole increases with angle'],
      ['Complex number: z = a + bi plotted as (a, b) in complex plane', 'Polar (trigonometric) form: z = r(cos θ + i sin θ) where r = |z|', 'De Moivre\'s Theorem: zⁿ = rⁿ(cos(nθ) + i sin(nθ))', 'nth roots: n equally spaced roots on a circle of radius r^(1/n)']
    ] },
  { slug: 'vectors-two-dimensions-precalc', exportBase: 'precalcVectors2D', partTopics: ['Vector Basics', 'Vector Operations', 'Unit Vectors & Components', 'Dot Product', 'Applications of Vectors', 'Problem-Solving Workshop', 'Review & Applications'],
    concepts: [
      ['Vector: a quantity with both magnitude and direction', 'Notation: v⃗ or ⟨a, b⟩ (component form) or ai + bj', 'Magnitude (length): |v⃗| = √(a² + b²)', 'Direction angle: θ = arctan(b/a), adjust for quadrant'],
      ['Addition: ⟨a₁,b₁⟩ + ⟨a₂,b₂⟩ = ⟨a₁+a₂, b₁+b₂⟩ (head-to-tail method)', 'Scalar multiplication: k⟨a,b⟩ = ⟨ka, kb⟩', 'Subtraction: u⃗ - v⃗ = u⃗ + (-v⃗)', 'Zero vector: ⟨0,0⟩ is the additive identity'],
      ['Unit vector: magnitude 1; û = v⃗/|v⃗|', 'Standard unit vectors: i = ⟨1,0⟩, j = ⟨0,1⟩', 'Any vector v⃗ = ⟨a,b⟩ = ai + bj', 'Component form from magnitude and angle: v⃗ = |v⃗|cos θ i + |v⃗|sin θ j'],
      ['Dot product: u⃗ · v⃗ = a₁a₂ + b₁b₂', 'Geometric form: u⃗ · v⃗ = |u⃗||v⃗|cos θ', 'Perpendicular vectors: u⃗ · v⃗ = 0', 'Angle between vectors: θ = arccos(u⃗ · v⃗ / (|u⃗||v⃗|))'],
      ['Resultant force: vector sum of all forces acting on an object', 'Navigation: velocity vectors for wind and heading', 'Work: W = F⃗ · d⃗ = |F||d|cos θ', 'Projection of u⃗ onto v⃗: proj_v(u) = (u⃗ · v⃗ / |v⃗|²) v⃗']
    ] },
  { slug: 'matrices-precalc', exportBase: 'precalcMatrices', partTopics: ['Matrix Basics', 'Matrix Operations', 'Determinants', 'Inverse Matrices', 'Solving Systems with Matrices', 'Problem-Solving Workshop', 'Review & Applications'],
    concepts: [
      ['Matrix: a rectangular array of numbers arranged in rows and columns', 'Dimension: m × n (m rows, n columns)', 'Elements identified by position: a_ij (row i, column j)', 'Special matrices: square, identity (I), zero matrix'],
      ['Addition/subtraction: add corresponding elements (same dimensions required)', 'Scalar multiplication: multiply every element by the scalar', 'Matrix multiplication: (AB)_ij = sum of row i of A times column j of B', 'AB ≠ BA in general (not commutative)'],
      ['2×2 determinant: |A| = ad - bc for A = [[a,b],[c,d]]', '3×3 determinant: expand along a row or column using cofactors', 'If det(A) = 0, the matrix is singular (no inverse)', 'Determinant properties: det(AB) = det(A)·det(B)'],
      ['A⁻¹ exists only if det(A) ≠ 0', 'For 2×2: A⁻¹ = (1/det(A))[[d,-b],[-c,a]]', 'AA⁻¹ = A⁻¹A = I (identity matrix)', 'Use row reduction (Gauss-Jordan) for larger matrices'],
      ['Write system as AX = B where A is coefficient matrix', 'Solution: X = A⁻¹B (if A is invertible)', 'Cramer\'s rule: x_i = det(A_i)/det(A)', 'Row reduction (augmented matrix) works for any size system']
    ] },
  { slug: 'sequences-series-precalc', exportBase: 'precalcSequences', partTopics: ['Sequences & Notation', 'Arithmetic Sequences', 'Geometric Sequences', 'Series & Summation', 'Binomial Theorem', 'Problem-Solving Workshop', 'Review & Applications'],
    concepts: [
      ['Sequence: an ordered list of numbers following a pattern', 'Explicit formula: aₙ = f(n) gives the nth term directly', 'Recursive formula: aₙ = f(aₙ₋₁) defines each term from the previous', 'Sequences can be finite or infinite'],
      ['Arithmetic sequence: common difference d between consecutive terms', 'Explicit formula: aₙ = a₁ + (n-1)d', 'Arithmetic mean: the average of two terms equals the term between them', 'Sum of first n terms: Sₙ = n(a₁ + aₙ)/2 = n(2a₁ + (n-1)d)/2'],
      ['Geometric sequence: common ratio r between consecutive terms', 'Explicit formula: aₙ = a₁ · r^(n-1)', 'Geometric mean: √(a · b) for terms a and b', 'Sum of first n terms: Sₙ = a₁(1 - rⁿ)/(1 - r), r ≠ 1'],
      ['Series: the sum of terms in a sequence', 'Sigma notation: Σ represents summation from lower to upper bound', 'Infinite geometric series: S = a₁/(1 - r) when |r| < 1', 'Diverges when |r| ≥ 1 (no finite sum)'],
      ['Binomial Theorem: (a + b)ⁿ = Σ C(n,k) a^(n-k) b^k', 'C(n,k) = n!/(k!(n-k)!) is the binomial coefficient', 'Pascal\'s Triangle gives binomial coefficients', 'The (k+1)th term is C(n,k) a^(n-k) b^k']
    ] },
  { slug: 'conic-sections-precalc', exportBase: 'precalcConics', partTopics: ['Parabolas', 'Circles', 'Ellipses', 'Hyperbolas', 'General Second-Degree Equations', 'Problem-Solving Workshop', 'Review & Applications'],
    concepts: [
      ['Parabola: set of points equidistant from focus and directrix', 'Standard form (vertical): (x-h)² = 4p(y-k); opens up if p > 0', 'Standard form (horizontal): (y-k)² = 4p(x-h); opens right if p > 0', 'Vertex at (h,k); focus at distance |p| from vertex; directrix at distance |p| opposite'],
      ['Circle: set of points equidistant from center', 'Standard form: (x-h)² + (y-k)² = r²', 'Center (h,k) and radius r', 'General form: x² + y² + Dx + Ey + F = 0; complete the square to convert'],
      ['Ellipse: set of points where sum of distances to two foci is constant', 'Standard form: (x-h)²/a² + (y-k)²/b² = 1 where a > b', 'c² = a² - b²; c = distance from center to each focus', 'Eccentricity e = c/a, where 0 < e < 1 (closer to 0 = more circular)'],
      ['Hyperbola: set of points where difference of distances to foci is constant', 'Standard form: (x-h)²/a² - (y-k)²/b² = 1 (opens left-right)', 'Asymptotes: y - k = ±(b/a)(x - h)', 'c² = a² + b²; eccentricity e = c/a, where e > 1'],
      ['General form: Ax² + Bxy + Cy² + Dx + Ey + F = 0', 'Discriminant B² - 4AC determines the conic type', 'B² - 4AC < 0: ellipse (or circle if A = C and B = 0)', 'B² - 4AC = 0: parabola; B² - 4AC > 0: hyperbola']
    ] },
  { slug: 'parametric-equations-precalc', exportBase: 'precalcParametric', partTopics: ['Introduction to Parametric Equations', 'Graphing Parametric Curves', 'Eliminating the Parameter', 'Parametric Equations for Conics', 'Projectile Motion', 'Problem-Solving Workshop', 'Review & Applications'],
    concepts: [
      ['Parametric equations: x = f(t) and y = g(t) define a curve', 'Parameter t often represents time', 'Each value of t gives a point (x, y) on the curve', 'Direction of motion is determined by increasing t'],
      ['Make a table of t, x, y values and plot points', 'Indicate direction with arrows', 'The same curve can have different parametric representations', 'Restrict t-domain to show only part of the curve'],
      ['Solve one equation for t, substitute into the other', 'For x = cos t, y = sin t: use cos²t + sin²t = 1 → x² + y² = 1', 'Eliminating the parameter gives the rectangular equation', 'May need to restrict domain/range after elimination'],
      ['Circle: x = h + r cos t, y = k + r sin t', 'Ellipse: x = h + a cos t, y = k + b sin t', 'Line: x = x₁ + at, y = y₁ + bt', 'Parabola: x = t, y = at² + bt + c (or other parameterizations)'],
      ['Horizontal: x = v₀ cos(θ) · t', 'Vertical: y = v₀ sin(θ) · t - ½gt² + h₀', 'Maximum height at t = v₀ sin(θ)/g', 'Range (horizontal distance) = v₀² sin(2θ)/g']
    ] },
  { slug: 'limits-introduction-precalc', exportBase: 'precalcLimits', partTopics: ['Intuitive Understanding of Limits', 'Evaluating Limits Numerically & Graphically', 'Algebraic Limit Techniques', 'One-Sided Limits', 'Limits at Infinity', 'Problem-Solving Workshop', 'Review & Applications'],
    concepts: [
      ['Limit: the value f(x) approaches as x approaches a value c', 'Written as lim(x→c) f(x) = L', 'The limit may exist even if f(c) is undefined', 'Limits describe behavior near a point, not at the point'],
      ['Numerical: make a table with x-values approaching c from both sides', 'Graphical: follow the curve from both sides toward x = c', 'If left and right approaches agree, the limit exists', 'If they disagree or go to ±∞, the limit does not exist (or is infinite)'],
      ['Direct substitution: plug in c if the function is continuous', 'Factor and cancel: for 0/0 indeterminate forms', 'Rationalize: multiply by conjugate for radical expressions', 'Special limits: lim(x→0) sin(x)/x = 1, lim(x→0) (1-cos(x))/x = 0'],
      ['Left-hand limit: lim(x→c⁻) f(x) — approaching from the left', 'Right-hand limit: lim(x→c⁺) f(x) — approaching from the right', 'The two-sided limit exists iff both one-sided limits exist and are equal', 'Jump discontinuity: one-sided limits exist but are not equal'],
      ['lim(x→∞): behavior as x grows without bound', 'For rational functions: compare degrees of numerator and denominator', 'Same degree: limit = ratio of leading coefficients', 'Numerator degree < denominator degree: limit = 0; greater: limit = ±∞']
    ] },
  { slug: 'continuity-precalc', exportBase: 'precalcContinuity', partTopics: ['Definition of Continuity', 'Types of Discontinuities', 'Continuity on an Interval', 'Intermediate Value Theorem', 'Piecewise Functions & Continuity', 'Problem-Solving Workshop', 'Review & Applications'],
    concepts: [
      ['f is continuous at x = c if: (1) f(c) is defined, (2) lim(x→c) f(x) exists, (3) lim(x→c) f(x) = f(c)', 'Intuition: you can draw the graph without lifting your pencil', 'Polynomials are continuous everywhere', 'Rational functions are continuous except where the denominator is zero'],
      ['Removable discontinuity (hole): limit exists but f(c) ≠ limit or f(c) undefined', 'Jump discontinuity: left and right limits exist but are not equal', 'Infinite discontinuity (vertical asymptote): limit is ±∞', 'Oscillating discontinuity: the function oscillates (e.g., sin(1/x) near 0)'],
      ['Continuous on [a,b]: continuous at every point in (a,b), and one-sided limits match at endpoints', 'Continuous on (a,b): continuous at every interior point', 'Sums, products, quotients, and compositions of continuous functions are continuous (where defined)', 'Absolute value of a continuous function is continuous'],
      ['IVT: if f is continuous on [a,b] and N is between f(a) and f(b), then there exists c in (a,b) with f(c) = N', 'Used to prove existence of roots (zeros)', 'If f(a) and f(b) have opposite signs, there is a zero between a and b', 'IVT does not tell you the exact value of c'],
      ['Piecewise functions: check continuity at each boundary point', 'Set left-hand limit = right-hand limit = function value at the boundary', 'Solve for parameters to make piecewise functions continuous', 'Graph each piece on its defined interval']
    ] },
  { slug: 'rates-of-change-precalc', exportBase: 'precalcRatesOfChange', partTopics: ['Average Rate of Change', 'Secant Lines', 'Instantaneous Rate of Change', 'Tangent Lines (Preview)', 'Modeling with Rates of Change', 'Problem-Solving Workshop', 'Review & Applications'],
    concepts: [
      ['Average rate of change of f on [a,b]: (f(b) - f(a))/(b - a)', 'This is the slope of the secant line through (a, f(a)) and (b, f(b))', 'Units: (output units)/(input units)', 'Average rate of change = slope of secant line'],
      ['Secant line: a line passing through two points on a curve', 'Equation: y - f(a) = m(x - a) where m = (f(b) - f(a))/(b - a)', 'As the two points get closer, the secant approaches the tangent', 'Secant lines approximate instantaneous behavior over small intervals'],
      ['Instantaneous rate of change: limit of average rate as interval shrinks to zero', 'lim(h→0) [f(a+h) - f(a)]/h gives the instantaneous rate at x = a', 'This is the slope of the tangent line at x = a', 'Preview of the derivative from calculus'],
      ['Tangent line: touches the curve at exactly one point (locally)', 'Slope = instantaneous rate of change = derivative at the point', 'Equation: y - f(a) = f\'(a)(x - a)', 'The tangent line is the best linear approximation near the point'],
      ['Position → velocity: rate of change of position with respect to time', 'Cost → marginal cost: rate of change of total cost per unit', 'Population growth rate: how fast a population is changing', 'Interpreting the sign of the rate: positive = increasing, negative = decreasing']
    ] },
  { slug: 'systems-of-equations-precalc', exportBase: 'precalcSystems', partTopics: ['Systems of Linear Equations', 'Substitution & Elimination', 'Systems of Three Variables', 'Nonlinear Systems', 'Systems of Inequalities', 'Problem-Solving Workshop', 'Review & Applications'],
    concepts: [
      ['A system: two or more equations with the same variables', 'Solution: values that satisfy ALL equations simultaneously', 'Consistent system: at least one solution; Inconsistent: no solution', 'Dependent system: infinitely many solutions (same line or plane)'],
      ['Substitution: solve one equation for a variable, plug into the other', 'Elimination: add or subtract equations to eliminate a variable', 'Choose the method that makes the algebra simplest', 'Graphical interpretation: intersection point(s) of lines'],
      ['Three equations in three unknowns: use elimination or substitution iteratively', 'Row reduction: organized elimination using augmented matrices', 'Solution is an ordered triple (x, y, z)', 'Systems may have 0, 1, or infinitely many solutions'],
      ['At least one equation is non-linear (quadratic, exponential, etc.)', 'Substitution is often the best method', 'A line and a conic can intersect in 0, 1, or 2 points', 'Two conics can intersect in up to 4 points'],
      ['Graph each inequality by shading the correct region', 'The solution set is the intersection of all shaded regions', 'Use dashed lines for strict inequalities (<, >)', 'Use solid lines for non-strict inequalities (≤, ≥)']
    ] }
];

// Build topics array
const topics = [];

for (const topicDef of precalcTopics) {
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
        { q: `Which best describes a key concept of ${partTitle.toLowerCase()}?`, opts: [concepts[0].split(':')[0].trim(), 'An unrelated concept', 'This is not covered in Precalculus', 'A concept from a different course'], correct: 0, explanation: concepts[0] },
        ...(concepts.length >= 3 ? [{ q: `In the context of ${partTitle.toLowerCase()}, which is accurate?`, opts: [concepts[2].includes(':') ? concepts[2].split(':').slice(1).join(':').trim() : concepts[2], 'The opposite is true', 'This concept is obsolete', 'None of these are correct'], correct: 0, explanation: concepts[2] }] : []),
        ...(concepts.length >= 4 ? [{ q: `Which concept relates directly to ${partTitle.toLowerCase()}?`, opts: [concepts[3].includes(':') ? concepts[3].split(':').slice(1).join(':').trim().substring(0, 80) : concepts[3].substring(0, 80), 'Only complex analysis', 'Exclusively abstract algebra', 'This applies only to statistics'], correct: 0, explanation: concepts[3] }] : [])
      ],
      dropdowns: {
        items: concepts.slice(0, 3).map(c => {
          const ps = c.split(':');
          return { label: ps[0].trim(), options: [ps.length > 1 ? ps.slice(1).join(':').trim().substring(0, 50) : c.substring(0, 50), 'Not applicable', 'Unrelated to precalculus', 'Only in higher math'], correct: ps.length > 1 ? ps.slice(1).join(':').trim().substring(0, 50) : c.substring(0, 50) };
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
      const fileName = `precalc-${topic.slug}-part${partNum}.ts`;
      const filePath = path.join(OUT_DIR, fileName);
      const content = generateFile(topic, i);
      fs.writeFileSync(filePath, content, 'utf-8');
      totalFiles++;
    }
  }
  console.log(`✅ Generated ${totalFiles} AP Precalculus lesson files`);
}

main();
