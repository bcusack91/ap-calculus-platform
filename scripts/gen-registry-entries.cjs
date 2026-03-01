const fs = require('fs');

// Precalculus topics
const precalcTopics = [
  { slug: 'polynomial-functions-precalc', exportBase: 'precalcPolynomial', parts: ['Polynomial Basics', 'End Behavior', 'Zeros & Multiplicity', 'Graphing Polynomials', 'Polynomial Division', 'Problem-Solving Workshop', 'Review & Applications'] },
  { slug: 'rational-functions-precalc', exportBase: 'precalcRational', parts: ['Rational Function Basics', 'Vertical Asymptotes', 'Horizontal & Slant Asymptotes', 'Graphing Rational Functions', 'Solving Rational Equations', 'Problem-Solving Workshop', 'Review & Applications'] },
  { slug: 'exponential-functions-precalc', exportBase: 'precalcExponential', parts: ['Exponential Growth & Decay', 'Properties of Exponential Functions', 'The Number e', 'Exponential Equations', 'Exponential Modeling', 'Problem-Solving Workshop', 'Review & Applications'] },
  { slug: 'logarithmic-functions-precalc', exportBase: 'precalcLogarithmic', parts: ['Logarithm Basics', 'Properties of Logarithms', 'Common & Natural Logs', 'Solving Logarithmic Equations', 'Logarithmic Modeling', 'Problem-Solving Workshop', 'Review & Applications'] },
  { slug: 'function-composition-inverses-precalc', exportBase: 'precalcComposition', parts: ['Function Composition', 'Domain of Composed Functions', 'Inverse Functions', 'Finding Inverses Algebraically', 'Verifying Inverses', 'Problem-Solving Workshop', 'Review & Applications'] },
  { slug: 'transformations-precalc', exportBase: 'precalcTransformations', parts: ['Vertical & Horizontal Shifts', 'Reflections', 'Stretches & Compressions', 'Combining Transformations', 'Parent Functions Gallery', 'Problem-Solving Workshop', 'Review & Applications'] },
  { slug: 'trigonometric-functions-precalc', exportBase: 'precalcTrigFunctions', parts: ['Angles & Radian Measure', 'Unit Circle', 'Sine & Cosine Functions', 'Other Trig Functions', 'Trig Function Graphs', 'Problem-Solving Workshop', 'Review & Applications'] },
  { slug: 'trigonometric-identities-precalc', exportBase: 'precalcTrigIdentities', parts: ['Fundamental Identities', 'Pythagorean Identities', 'Sum & Difference Formulas', 'Double & Half Angle Formulas', 'Verifying Identities', 'Problem-Solving Workshop', 'Review & Applications'] },
  { slug: 'inverse-trig-functions-precalc', exportBase: 'precalcInverseTrig', parts: ['Inverse Sine (arcsin)', 'Inverse Cosine (arccos)', 'Inverse Tangent (arctan)', 'Compositions with Inverse Trig', 'Solving Trig Equations', 'Problem-Solving Workshop', 'Review & Applications'] },
  { slug: 'law-of-sines-cosines-precalc', exportBase: 'precalcLawSinesCosines', parts: ['Law of Sines', 'Ambiguous Case (SSA)', 'Law of Cosines', 'Area of Triangles', 'Applications of Triangle Solving', 'Problem-Solving Workshop', 'Review & Applications'] },
  { slug: 'polar-coordinates-precalc', exportBase: 'precalcPolar', parts: ['Polar Coordinate System', 'Converting Between Coordinate Systems', 'Polar Equations & Graphs', 'Classic Polar Curves', 'Complex Numbers in Polar Form', 'Problem-Solving Workshop', 'Review & Applications'] },
  { slug: 'vectors-two-dimensions-precalc', exportBase: 'precalcVectors2D', parts: ['Vector Basics', 'Vector Operations', 'Unit Vectors & Components', 'Dot Product', 'Applications of Vectors', 'Problem-Solving Workshop', 'Review & Applications'] },
  { slug: 'matrices-precalc', exportBase: 'precalcMatrices', parts: ['Matrix Basics', 'Matrix Operations', 'Determinants', 'Inverse Matrices', 'Solving Systems with Matrices', 'Problem-Solving Workshop', 'Review & Applications'] },
  { slug: 'sequences-series-precalc', exportBase: 'precalcSequences', parts: ['Sequences & Notation', 'Arithmetic Sequences', 'Geometric Sequences', 'Series & Summation', 'Binomial Theorem', 'Problem-Solving Workshop', 'Review & Applications'] },
  { slug: 'conic-sections-precalc', exportBase: 'precalcConics', parts: ['Parabolas', 'Circles', 'Ellipses', 'Hyperbolas', 'General Second-Degree Equations', 'Problem-Solving Workshop', 'Review & Applications'] },
  { slug: 'parametric-equations-precalc', exportBase: 'precalcParametric', parts: ['Introduction to Parametric Equations', 'Graphing Parametric Curves', 'Eliminating the Parameter', 'Parametric Equations for Conics', 'Projectile Motion', 'Problem-Solving Workshop', 'Review & Applications'] },
  { slug: 'limits-introduction-precalc', exportBase: 'precalcLimits', parts: ['Intuitive Understanding of Limits', 'Evaluating Limits Numerically & Graphically', 'Algebraic Limit Techniques', 'One-Sided Limits', 'Limits at Infinity', 'Problem-Solving Workshop', 'Review & Applications'] },
  { slug: 'continuity-precalc', exportBase: 'precalcContinuity', parts: ['Definition of Continuity', 'Types of Discontinuities', 'Continuity on an Interval', 'Intermediate Value Theorem', 'Piecewise Functions & Continuity', 'Problem-Solving Workshop', 'Review & Applications'] },
  { slug: 'rates-of-change-precalc', exportBase: 'precalcRatesOfChange', parts: ['Average Rate of Change', 'Secant Lines', 'Instantaneous Rate of Change', 'Tangent Lines (Preview)', 'Modeling with Rates of Change', 'Problem-Solving Workshop', 'Review & Applications'] },
  { slug: 'systems-of-equations-precalc', exportBase: 'precalcSystems', parts: ['Systems of Linear Equations', 'Substitution & Elimination', 'Systems of Three Variables', 'Nonlinear Systems', 'Systems of Inequalities', 'Problem-Solving Workshop', 'Review & Applications'] },
];

// Calculus AB topics
const calcABTopics = [
  { slug: 'limits-continuity-calcab', exportBase: 'calcABLimitsContinuity', parts: ['Understanding Limits', 'Limit Laws', 'Evaluating Limits Algebraically', 'Continuity', 'Intermediate Value Theorem', 'Problem-Solving Workshop', 'Review & Applications'] },
  { slug: 'definition-of-derivative-calcab', exportBase: 'calcABDerivativeDef', parts: ['Average vs Instantaneous Rate', 'Limit Definition of the Derivative', 'Derivative as a Function', 'Differentiability', 'Graphical Interpretation', 'Problem-Solving Workshop', 'Review & Applications'] },
  { slug: 'basic-differentiation-rules-calcab', exportBase: 'calcABBasicDiff', parts: ['Power Rule', 'Constant & Sum Rules', 'Product Rule', 'Quotient Rule', 'Derivatives of Trig Functions', 'Problem-Solving Workshop', 'Review & Applications'] },
  { slug: 'chain-rule-calcab', exportBase: 'calcABChainRule', parts: ['The Chain Rule', 'Nested Functions', 'Chain Rule with Trig', 'Chain Rule with Exponentials & Logs', 'Implicit Differentiation', 'Problem-Solving Workshop', 'Review & Applications'] },
  { slug: 'applications-of-derivatives-calcab', exportBase: 'calcABDerivApps', parts: ['Related Rates', 'Local Extrema', 'Mean Value Theorem', 'First & Second Derivative Tests', 'Concavity & Inflection Points', 'Problem-Solving Workshop', 'Review & Applications'] },
  { slug: 'optimization-calcab', exportBase: 'calcABOptimization', parts: ['Optimization Strategy', 'Setting Up Optimization Problems', 'Closed Interval Method', 'Applied Optimization', 'Business & Economics Applications', 'Problem-Solving Workshop', 'Review & Applications'] },
  { slug: 'linearization-differentials-calcab', exportBase: 'calcABLinearization', parts: ['Linear Approximation', 'Differentials', 'Error Estimation', "Newton's Method (Preview)", "L'Hôpital's Rule", 'Problem-Solving Workshop', 'Review & Applications'] },
  { slug: 'definite-integrals-calcab', exportBase: 'calcABDefiniteIntegrals', parts: ['Riemann Sums', 'The Definite Integral', 'Properties of Definite Integrals', 'Fundamental Theorem of Calculus (Part 1)', 'Fundamental Theorem of Calculus (Part 2)', 'Problem-Solving Workshop', 'Review & Applications'] },
  { slug: 'antiderivatives-indefinite-integrals-calcab', exportBase: 'calcABAntiderivatives', parts: ['Antiderivatives', 'Basic Integration Rules', 'Integrating Trig Functions', 'Integrating Exponentials & Logs', 'Initial Value Problems', 'Problem-Solving Workshop', 'Review & Applications'] },
  { slug: 'u-substitution-calcab', exportBase: 'calcABUSub', parts: ['Introduction to u-Substitution', 'Choosing u', 'Definite Integrals with u-Sub', 'Advanced u-Substitution Techniques', 'Completing the Square for Integration', 'Problem-Solving Workshop', 'Review & Applications'] },
  { slug: 'area-between-curves-calcab', exportBase: 'calcABAreaCurves', parts: ['Area Under a Curve', 'Area Between Two Curves (Vertical)', 'Area Between Two Curves (Horizontal)', 'Determining Top & Bottom Functions', 'Multiple Intersection Points', 'Problem-Solving Workshop', 'Review & Applications'] },
  { slug: 'volumes-of-revolution-calcab', exportBase: 'calcABVolumes', parts: ['Disk Method', 'Washer Method', 'Revolving Around Other Axes', 'Volumes by Cross Sections', 'Setting Up Volume Integrals', 'Problem-Solving Workshop', 'Review & Applications'] },
  { slug: 'accumulation-functions-calcab', exportBase: 'calcABAccumulation', parts: ['Accumulation Functions', 'FTC with Variable Bounds', 'Interpreting Accumulation', 'Net Change Theorem', 'Average Value of a Function', 'Problem-Solving Workshop', 'Review & Applications'] },
  { slug: 'differential-equations-calcab', exportBase: 'calcABDiffEq', parts: ['Introduction to Differential Equations', 'Slope Fields', "Euler's Method", 'Separation of Variables', 'Exponential Growth & Decay', 'Problem-Solving Workshop', 'Review & Applications'] },
  { slug: 'particle-motion-calcab', exportBase: 'calcABParticleMotion', parts: ['Position, Velocity, Acceleration', 'Analyzing Motion', 'Speed & Direction', 'Displacement vs Distance', 'Particle Motion from Graphs', 'Problem-Solving Workshop', 'Review & Applications'] },
  { slug: 'exponential-models-calcab', exportBase: 'calcABExpModels', parts: ['Derivatives of eˣ and ln(x)', 'Logarithmic Differentiation', 'Exponential Growth Models', 'Logistic Growth', 'Bounded Growth Applications', 'Problem-Solving Workshop', 'Review & Applications'] },
  { slug: 'integration-applications-calcab', exportBase: 'calcABIntApps', parts: ['Area Review & Setup', 'Volumes of Known Cross-Sections', 'Distance from Velocity', 'Population & Accumulation', 'Work & Fluid Force (Preview)', 'Problem-Solving Workshop', 'Review & Applications'] },
  { slug: 'free-response-strategies-calcab', exportBase: 'calcABFreeResponse', parts: ['Reading AP Free Response Questions', 'Justification & Communication', 'Calculator vs No-Calculator Sections', 'Rate & Accumulation Problems', 'Differential Equation Problems', 'Problem-Solving Workshop', 'Review & Applications'] },
  { slug: 'ap-exam-review-calcab', exportBase: 'calcABExamReview', parts: ['Limits & Continuity Review', 'Derivatives Review', 'Applications of Derivatives Review', 'Integrals Review', 'Applications of Integrals Review', 'Problem-Solving Workshop', 'Comprehensive Review'] },
  { slug: 'inverse-functions-derivatives-calcab', exportBase: 'calcABInverseDeriv', parts: ['Review of Inverse Functions', 'Derivative of Inverse Functions', 'Derivatives of Inverse Trig Functions', 'Integrals Leading to Inverse Trig', 'Applications of Inverse Derivatives', 'Problem-Solving Workshop', 'Review & Applications'] },
  { slug: 'tables-data-calcab', exportBase: 'calcABTablesData', parts: ['Using Data Tables for Derivatives', 'Trapezoidal Rule', 'Riemann Sums from Tables', 'Applying FTC with Tabular Data', 'Interpreting Results in Context', 'Problem-Solving Workshop', 'Review & Applications'] },
  { slug: 'theorem-applications-calcab', exportBase: 'calcABTheorems', parts: ['Extreme Value Theorem', 'Mean Value Theorem Applications', 'Intermediate Value Theorem Applications', 'Existence Theorems Summary', 'Connecting Theorems to Problems', 'Problem-Solving Workshop', 'Review & Applications'] },
];

// Calculus BC topics
const calcBCTopics = [
  { slug: 'integration-by-parts-calcbc', exportBase: 'calcBCIntByParts', parts: ['Integration by Parts Formula', 'Choosing u and dv (LIATE)', 'Repeated Integration by Parts', 'Tabular Integration', 'Definite Integrals by Parts', 'Problem-Solving Workshop', 'Review & Applications'] },
  { slug: 'partial-fractions-calcbc', exportBase: 'calcBCPartialFractions', parts: ['Partial Fraction Decomposition', 'Distinct Linear Factors', 'Repeated Linear Factors', 'Irreducible Quadratic Factors', 'Integration with Partial Fractions', 'Problem-Solving Workshop', 'Review & Applications'] },
  { slug: 'improper-integrals-calcbc', exportBase: 'calcBCImproper', parts: ['Type I: Infinite Limits', 'Type II: Discontinuous Integrands', 'Convergence & Divergence', 'Comparison Tests', 'Applications of Improper Integrals', 'Problem-Solving Workshop', 'Review & Applications'] },
  { slug: 'parametric-curves-calculus-calcbc', exportBase: 'calcBCParametric', parts: ['Parametric Equations Review', 'Derivatives of Parametric Curves', 'Second Derivatives (Parametric)', 'Arc Length (Parametric)', 'Area Under Parametric Curves', 'Problem-Solving Workshop', 'Review & Applications'] },
  { slug: 'polar-calculus-calcbc', exportBase: 'calcBCPolar', parts: ['Polar Coordinates Review', 'Derivatives in Polar', 'Area in Polar Coordinates', 'Arc Length in Polar', 'Polar Curve Analysis', 'Problem-Solving Workshop', 'Review & Applications'] },
  { slug: 'vector-valued-functions-calcbc', exportBase: 'calcBCVectors', parts: ['Vector-Valued Functions', 'Derivatives of Vector Functions', 'Integrals of Vector Functions', 'Motion in the Plane', 'Speed and Arc Length', 'Problem-Solving Workshop', 'Review & Applications'] },
  { slug: 'infinite-sequences-calcbc', exportBase: 'calcBCSequences', parts: ['Sequences & Convergence', 'Monotonic & Bounded Sequences', 'Limits of Sequences', 'Growth Rates', 'Squeeze Theorem for Sequences', 'Problem-Solving Workshop', 'Review & Applications'] },
  { slug: 'infinite-series-calcbc', exportBase: 'calcBCSeries', parts: ['Introduction to Series', 'Geometric & Telescoping Series', 'Divergence Test & Integral Test', 'p-Series & Comparison Tests', 'Ratio & Root Tests', 'Problem-Solving Workshop', 'Review & Applications'] },
  { slug: 'alternating-series-calcbc', exportBase: 'calcBCAlternating', parts: ['Alternating Series', 'Alternating Series Test', 'Absolute vs Conditional Convergence', 'Alternating Series Error Bound', 'Rearrangement of Series', 'Problem-Solving Workshop', 'Review & Applications'] },
  { slug: 'power-series-calcbc', exportBase: 'calcBCPowerSeries', parts: ['Introduction to Power Series', 'Radius & Interval of Convergence', 'Finding the Radius', 'Operations on Power Series', 'Differentiation & Integration of Power Series', 'Problem-Solving Workshop', 'Review & Applications'] },
  { slug: 'taylor-maclaurin-series-calcbc', exportBase: 'calcBCTaylorMaclaurin', parts: ['Taylor Series Formula', 'Maclaurin Series', 'Common Maclaurin Series', 'Taylor Polynomials', 'Constructing New Series', 'Problem-Solving Workshop', 'Review & Applications'] },
  { slug: 'lagrange-error-bound-calcbc', exportBase: 'calcBCLagrange', parts: ['Taylor Polynomial Error', 'Lagrange Error Bound Formula', 'Applying the Error Bound', 'Finding Sufficient Degree', 'Alternating Series Error vs Lagrange', 'Problem-Solving Workshop', 'Review & Applications'] },
  { slug: 'convergence-tests-summary-calcbc', exportBase: 'calcBCConvergenceTests', parts: ['Test Selection Strategy', 'nth Term & Geometric Tests', 'Integral & p-Series Tests', 'Comparison Tests', 'Ratio, Root & Alternating Tests', 'Problem-Solving Workshop', 'Review & Applications'] },
  { slug: 'euler-method-advanced-calcbc', exportBase: 'calcBCEulerAdv', parts: ["Euler's Method Review", 'Improving Accuracy', 'Logistic Differential Equations', 'Second-Order DEs (Preview)', 'Slope Fields for BC', 'Problem-Solving Workshop', 'Review & Applications'] },
  { slug: 'arc-length-surface-area-calcbc', exportBase: 'calcBCArcLength', parts: ['Arc Length for y = f(x)', 'Arc Length for Parametric Curves', 'Arc Length for Polar Curves', 'Surface Area of Revolution', 'Speed & Distance Applications', 'Problem-Solving Workshop', 'Review & Applications'] },
  { slug: 'series-applications-calcbc', exportBase: 'calcBCSeriesApps', parts: ['Approximating Functions', 'Computing Integrals with Series', 'Solving DEs with Series', 'Error Analysis in Practice', 'Series in Physics & Engineering', 'Problem-Solving Workshop', 'Review & Applications'] },
  { slug: 'bc-exam-strategies-calcbc', exportBase: 'calcBCExamStrategies', parts: ['BC vs AB Content Overview', 'Series Questions Strategy', 'Parametric & Polar Strategies', 'Integration Technique Selection', 'Full Exam Review', 'Problem-Solving Workshop', 'Comprehensive Review'] },
  { slug: 'logistic-models-calcbc', exportBase: 'calcBCLogistic', parts: ['Logistic Differential Equation', 'Solving the Logistic Equation', 'Analyzing Logistic Growth', 'Phase Lines & Equilibria', 'Real-World Logistic Models', 'Problem-Solving Workshop', 'Review & Applications'] },
  { slug: 'advanced-integration-calcbc', exportBase: 'calcBCAdvIntegration', parts: ['Trig Substitution (Overview)', 'Integration Strategy Selection', 'Combining Techniques', 'Numerical Integration Methods', "When Closed-Form Doesn't Exist", 'Problem-Solving Workshop', 'Review & Applications'] },
  { slug: 'review-connections-calcbc', exportBase: 'calcBCReviewConnections', parts: ['AB Foundations for BC', 'Series & Function Representation', 'Parametric, Polar & Vector Unity', 'Integration Techniques Connected', 'The Big Picture of Calculus', 'Problem-Solving Workshop', 'Comprehensive Review'] },
];

function escapeTitle(t) {
  return t.replace(/'/g, "\\'");
}

function genEntry(prefix, topic) {
  const parts = topic.parts.map((title, i) => {
    const n = i + 1;
    return `      { title: '${escapeTitle(title)}', loader: () => import('./${prefix}-${topic.slug}-part${n}').then(m => m.${topic.exportBase}Part${n}Data) },`;
  }).join('\n');
  return `  '${topic.slug}': {\n    completionDestination: 'competitive',\n    parts: [\n${parts}\n    ],\n  },`;
}

let output = '';
output += '  // === AP Precalculus (20 topics) ===\n';
precalcTopics.forEach(t => { output += genEntry('precalc', t) + '\n'; });

output += '  // === AP Calculus AB (22 topics) ===\n';
calcABTopics.forEach(t => { output += genEntry('calcab', t) + '\n'; });

output += '  // === AP Calculus BC (20 topics) ===\n';
calcBCTopics.forEach(t => { output += genEntry('calcbc', t) + '\n'; });

fs.writeFileSync('/tmp/registry_entries.txt', output);
console.log(`Generated registry entries for ${precalcTopics.length + calcABTopics.length + calcBCTopics.length} topics`);
