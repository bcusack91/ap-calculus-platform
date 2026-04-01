const fs = require('fs');

const precalcTopics = [
  { slug: 'polynomial-functions-precalc', base: 'precalcPolynomial', titles: ['Polynomial Basics','End Behavior','Zeros & Multiplicity','Graphing Polynomials','Polynomial Division','Problem-Solving Workshop','Review & Applications'] },
  { slug: 'rational-functions-precalc', base: 'precalcRational', titles: ['Rational Function Basics','Vertical Asymptotes','Horizontal & Slant Asymptotes','Graphing Rational Functions','Solving Rational Equations','Problem-Solving Workshop','Review & Applications'] },
  { slug: 'exponential-functions-precalc', base: 'precalcExponential', titles: ['Exponential Growth & Decay','Properties of Exponential Functions','Transformations','Real-World Models','Compound Interest & e','Problem-Solving Workshop','Review & Applications'] },
  { slug: 'logarithmic-functions-precalc', base: 'precalcLogarithmic', titles: ['Introduction to Logarithms','Properties of Logarithms','Solving Logarithmic Equations','Change of Base','Logarithmic Models','Problem-Solving Workshop','Review & Applications'] },
  { slug: 'function-composition-inverses-precalc', base: 'precalcComposition', titles: ['Function Composition','Domain of Compositions','Inverse Functions','Finding Inverses','Verifying Inverses','Problem-Solving Workshop','Review & Applications'] },
  { slug: 'transformations-precalc', base: 'precalcTransformations', titles: ['Translations','Reflections','Stretches & Compressions','Combined Transformations','Piecewise Functions','Problem-Solving Workshop','Review & Applications'] },
  { slug: 'trigonometric-functions-precalc', base: 'precalcTrigFunctions', titles: ['Unit Circle Fundamentals','Sine & Cosine Graphs','Tangent & Reciprocal Functions','Amplitude & Period','Phase Shifts','Problem-Solving Workshop','Review & Applications'] },
  { slug: 'trigonometric-identities-precalc', base: 'precalcTrigIdentities', titles: ['Pythagorean Identities','Sum & Difference Formulas','Double-Angle Formulas','Half-Angle Formulas','Verifying Identities','Problem-Solving Workshop','Review & Applications'] },
  { slug: 'inverse-trig-functions-precalc', base: 'precalcInverseTrig', titles: ['Inverse Sine','Inverse Cosine','Inverse Tangent','Compositions with Inverses','Solving Trig Equations','Problem-Solving Workshop','Review & Applications'] },
  { slug: 'law-of-sines-cosines-precalc', base: 'precalcLawSinesCosines', titles: ['Law of Sines','Ambiguous Case','Law of Cosines','Area of Triangles','Applications','Problem-Solving Workshop','Review & Applications'] },
  { slug: 'polar-coordinates-precalc', base: 'precalcPolar', titles: ['Polar Coordinate System','Converting Coordinates','Polar Graphs','Rose Curves & Limacons','Polar Equations','Problem-Solving Workshop','Review & Applications'] },
  { slug: 'vectors-two-dimensions-precalc', base: 'precalcVectors', titles: ['Vector Basics','Vector Operations','Dot Product','Unit Vectors','Applications of Vectors','Problem-Solving Workshop','Review & Applications'] },
  { slug: 'matrices-precalc', base: 'precalcMatrices', titles: ['Matrix Operations','Matrix Multiplication','Determinants','Inverse Matrices','Systems with Matrices','Problem-Solving Workshop','Review & Applications'] },
  { slug: 'sequences-series-precalc', base: 'precalcSequences', titles: ['Arithmetic Sequences','Geometric Sequences','Series & Partial Sums','Sigma Notation','Infinite Geometric Series','Problem-Solving Workshop','Review & Applications'] },
  { slug: 'conic-sections-precalc', base: 'precalcConics', titles: ['Circles','Parabolas','Ellipses','Hyperbolas','Identifying Conics','Problem-Solving Workshop','Review & Applications'] },
  { slug: 'parametric-equations-precalc', base: 'precalcParametric', titles: ['Parametric Basics','Graphing Parametric Curves','Eliminating the Parameter','Parametric Motion','Applications','Problem-Solving Workshop','Review & Applications'] },
  { slug: 'limits-introduction-precalc', base: 'precalcLimits', titles: ['Intuitive Limits','Limit Notation','One-Sided Limits','Limits at Infinity','Evaluating Limits','Problem-Solving Workshop','Review & Applications'] },
  { slug: 'continuity-precalc', base: 'precalcContinuity', titles: ['Continuity Basics','Types of Discontinuity','Intermediate Value Theorem','Piecewise Continuity','Continuity & Limits','Problem-Solving Workshop','Review & Applications'] },
  { slug: 'rates-of-change-precalc', base: 'precalcRatesOfChange', titles: ['Average Rate of Change','Secant Lines','Instantaneous Rate of Change','Tangent Line Concept','Applications','Problem-Solving Workshop','Review & Applications'] },
  { slug: 'systems-of-equations-precalc', base: 'precalcSystems', titles: ['Linear Systems','Substitution & Elimination','Nonlinear Systems','Systems of Inequalities','Applications','Problem-Solving Workshop','Review & Applications'] },
];

const calcabTopics = [
  { slug: 'limits-continuity-calcab', base: 'calcabLimits', titles: ['Limit Definition','Evaluating Limits','One-Sided Limits','Squeeze Theorem','Continuity & IVT','Problem-Solving Workshop','Review & Applications'] },
  { slug: 'definition-of-derivative-calcab', base: 'calcabDerivativeDef', titles: ['Derivative as Limit','Differentiability','Graphical Interpretation','Notation','Tangent Lines','Problem-Solving Workshop','Review & Applications'] },
  { slug: 'basic-differentiation-rules-calcab', base: 'calcabBasicDiff', titles: ['Power Rule','Product Rule','Quotient Rule','Trig Derivatives','Higher-Order Derivatives','Problem-Solving Workshop','Review & Applications'] },
  { slug: 'chain-rule-calcab', base: 'calcabChainRule', titles: ['Chain Rule Basics','Nested Functions','Implicit Differentiation','Related Rates Intro','Applications','Problem-Solving Workshop','Review & Applications'] },
  { slug: 'applications-of-derivatives-calcab', base: 'calcabAppsDerivatives', titles: ['Critical Points','First Derivative Test','Second Derivative Test','Concavity & Inflection','Curve Sketching','Problem-Solving Workshop','Review & Applications'] },
  { slug: 'optimization-calcab', base: 'calcabOptimization', titles: ['Setting Up Problems','Constraint Equations','Solving Optimization','Business Applications','Geometric Applications','Problem-Solving Workshop','Review & Applications'] },
  { slug: 'linearization-differentials-calcab', base: 'calcabLinearization', titles: ['Linear Approximation','Differentials','Error Estimation','Tangent Line Approx','Applications','Problem-Solving Workshop','Review & Applications'] },
  { slug: 'definite-integrals-calcab', base: 'calcabDefiniteIntegrals', titles: ['Riemann Sums','Definite Integral Definition','Properties of Integrals','FTC Part 1','FTC Part 2','Problem-Solving Workshop','Review & Applications'] },
  { slug: 'antiderivatives-indefinite-integrals-calcab', base: 'calcabAntiderivatives', titles: ['Antiderivative Basics','Power Rule for Integration','Trig Antiderivatives','Initial Value Problems','Motion Applications','Problem-Solving Workshop','Review & Applications'] },
  { slug: 'u-substitution-calcab', base: 'calcabUSub', titles: ['Basic u-Substitution','Adjusting for Constants','Definite Integrals with u-Sub','Trig Substitutions','Complex Substitutions','Problem-Solving Workshop','Review & Applications'] },
  { slug: 'area-between-curves-calcab', base: 'calcabAreaCurves', titles: ['Area Under a Curve','Area Between Two Curves','Horizontal Slicing','Multiple Regions','Applications','Problem-Solving Workshop','Review & Applications'] },
  { slug: 'volumes-of-revolution-calcab', base: 'calcabVolumes', titles: ['Disk Method','Washer Method','Shell Method','Revolution About Other Axes','Cross-Section Volumes','Problem-Solving Workshop','Review & Applications'] },
  { slug: 'accumulation-functions-calcab', base: 'calcabAccumulation', titles: ['Accumulation Concept','Interpreting Integrals','FTC Connections','Rate In vs Rate Out','Applications','Problem-Solving Workshop','Review & Applications'] },
  { slug: 'differential-equations-calcab', base: 'calcabDiffEq', titles: ['Intro to Differential Equations','Slope Fields','Separation of Variables','General vs Particular Solutions','Exponential Growth & Decay','Problem-Solving Workshop','Review & Applications'] },
  { slug: 'particle-motion-calcab', base: 'calcabParticleMotion', titles: ['Position & Velocity','Velocity & Acceleration','Speed vs Velocity','Displacement vs Distance','Motion Analysis','Problem-Solving Workshop','Review & Applications'] },
  { slug: 'exponential-models-calcab', base: 'calcabExpModels', titles: ['Exponential Growth & Decay',"Newton's Law of Cooling",'Compound Interest & Continuous Growth','Derivatives & Integrals of Exponentials','Logistic Growth','Practice Workshop','Final Assessment'] },
  { slug: 'integration-applications-calcab', base: 'calcabIntApps', titles: ['Average Value of a Function','Mean Value Theorem for Integrals','Net Change Theorem','Physical Applications','Economics Applications','Problem-Solving Workshop','Review & Applications'] },
  { slug: 'free-response-strategies-calcab', base: 'calcabFRQ', titles: ['FRQ Format Overview','Calculator-Active Tips','No-Calculator Strategies','Justification Techniques','Common Mistakes','Problem-Solving Workshop','Review & Applications'] },
  { slug: 'ap-exam-review-calcab', base: 'calcabExamReview', titles: ['Unit 1-3 Review','Unit 4-5 Review','Unit 6-7 Review','Unit 8 Review','Full Practice Exam Tips','Problem-Solving Workshop','Review & Applications'] },
  { slug: 'inverse-functions-derivatives-calcab', base: 'calcabInverseFunctions', titles: ['Inverse Function Review','Derivative of Inverse Functions','Inverse Trig Derivatives','Logarithmic Differentiation','Applications','Problem-Solving Workshop','Review & Applications'] },
  { slug: 'tables-data-calcab', base: 'calcabTablesData', titles: ['Reading Data Tables','Approximating Derivatives','Trapezoidal Approximation','Riemann from Tables','Interpreting Results','Problem-Solving Workshop','Review & Applications'] },
  { slug: 'theorem-applications-calcab', base: 'calcabTheorems', titles: ['Mean Value Theorem','Rolle Theorem','Extreme Value Theorem','IVT Applications','EVT & MVT Combined','Problem-Solving Workshop','Review & Applications'] },
];

const calcbcTopics = [
  { slug: 'integration-by-parts-calcbc', base: 'calcbcIntByParts', titles: ['IBP Formula','LIATE Strategy','Repeated IBP','Tabular Method','Applications','Problem-Solving Workshop','Review & Applications'] },
  { slug: 'partial-fractions-calcbc', base: 'calcbcPartialFrac', titles: ['Decomposition Basics','Distinct Linear Factors','Repeated Factors','Irreducible Quadratics','Integration with Partial Fractions','Problem-Solving Workshop','Review & Applications'] },
  { slug: 'improper-integrals-calcbc', base: 'calcbcImproper', titles: ['Type I: Infinite Bounds','Type II: Discontinuous Integrands','Convergence Tests','Comparison Test','Applications','Problem-Solving Workshop','Review & Applications'] },
  { slug: 'parametric-curves-calculus-calcbc', base: 'calcbcParametric', titles: ['Parametric Derivatives','Second Derivatives','Arc Length','Speed','Area Under Parametric Curves','Problem-Solving Workshop','Review & Applications'] },
  { slug: 'polar-calculus-calcbc', base: 'calcbcPolar', titles: ['Polar Derivatives','Area in Polar','Intersections','Arc Length in Polar','Applications','Problem-Solving Workshop','Review & Applications'] },
  { slug: 'vector-valued-functions-calcbc', base: 'calcbcVectors', titles: ['Vector Functions','Derivatives of Vectors','Integrals of Vectors','Velocity & Acceleration','Motion in the Plane','Problem-Solving Workshop','Review & Applications'] },
  { slug: 'infinite-sequences-calcbc', base: 'calcbcSequences', titles: ['Sequence Basics','Convergence & Divergence','Bounded & Monotonic','Recursive Sequences','Limit of a Sequence','Problem-Solving Workshop','Review & Applications'] },
  { slug: 'infinite-series-calcbc', base: 'calcbcSeries', titles: ['Series Introduction','Geometric Series','Telescoping Series','nth Term Test','Harmonic Series','Problem-Solving Workshop','Review & Applications'] },
  { slug: 'alternating-series-calcbc', base: 'calcbcAlternating', titles: ['Alternating Series Test','Error Bound','Conditional Convergence','Absolute Convergence','Applications','Problem-Solving Workshop','Review & Applications'] },
  { slug: 'power-series-calcbc', base: 'calcbcPowerSeries', titles: ['Power Series Basics','Radius of Convergence','Interval of Convergence','Differentiation of Power Series','Integration of Power Series','Problem-Solving Workshop','Review & Applications'] },
  { slug: 'taylor-maclaurin-series-calcbc', base: 'calcbcTaylor', titles: ['Taylor Series','Maclaurin Series','Common Series','Taylor Polynomials','Applications','Problem-Solving Workshop','Review & Applications'] },
  { slug: 'lagrange-error-bound-calcbc', base: 'calcbcLagrange', titles: ['Error Bound Formula','Finding Maximum Error','Alternating Series Error','Choosing Degree','Applications','Problem-Solving Workshop','Review & Applications'] },
  { slug: 'convergence-tests-summary-calcbc', base: 'calcbcConvergence', titles: ['Direct Comparison','Limit Comparison','Ratio Test','Root Test','Choosing the Right Test','Problem-Solving Workshop','Review & Applications'] },
  { slug: 'euler-method-advanced-calcbc', base: 'calcbcEuler', titles: ['Euler Method Basics','Step-by-Step Process','Error Analysis','Improved Methods','Applications','Problem-Solving Workshop','Review & Applications'] },
  { slug: 'arc-length-surface-area-calcbc', base: 'calcbcArcLength', titles: ['Arc Length Formula','Parametric Arc Length','Surface Area of Revolution','Polar Arc Length','Applications','Problem-Solving Workshop','Review & Applications'] },
  { slug: 'series-applications-calcbc', base: 'calcbcSeriesApps', titles: ['Function Approximation','Solving DEs with Series','Physics Applications','Error Analysis','Representing Functions','Problem-Solving Workshop','Review & Applications'] },
  { slug: 'bc-exam-strategies-calcbc', base: 'calcbcExamStrategy', titles: ['BC-Specific Topics','Calculator Strategies','Series FRQ Tips','Parametric/Polar Tips','Time Management','Problem-Solving Workshop','Review & Applications'] },
  { slug: 'logistic-models-calcbc', base: 'calcbcLogistic', titles: ['Logistic Equation','Carrying Capacity','Solving Logistic DEs','Point of Inflection','Applications','Problem-Solving Workshop','Review & Applications'] },
  { slug: 'advanced-integration-calcbc', base: 'calcbcAdvIntegration', titles: ['Trig Substitution','Advanced u-Sub','Integration Strategies','Reduction Formulas','Mixed Practice','Problem-Solving Workshop','Review & Applications'] },
  { slug: 'review-connections-calcbc', base: 'calcbcReview', titles: ['AB Topics Review','BC Unique Topics','Series Mastery','Parametric & Polar Review','Full Exam Prep','Problem-Solving Workshop','Review & Applications'] },
];

function generateEntries(topics, prefix, label) {
  let out = `  // === ${label} (${topics.length} topics) ===\n`;
  for (const t of topics) {
    out += `  '${t.slug}': {\n`;
    out += `    completionDestination: 'competitive',\n`;
    out += `    parts: [\n`;
    for (let i = 0; i < t.titles.length; i++) {
      const partNum = i + 1;
      out += `      { title: '${t.titles[i]}', loader: () => import('./${prefix}-${t.slug}-part${partNum}').then(m => m.${t.base}Part${partNum}Data) },\n`;
    }
    out += `    ],\n`;
    out += `  },\n`;
  }
  return out;
}

let result = '';
result += generateEntries(precalcTopics, 'precalc', 'AP Precalculus');
result += '\n';
result += generateEntries(calcabTopics, 'calcab', 'AP Calculus AB');
result += '\n';
result += generateEntries(calcbcTopics, 'calcbc', 'AP Calculus BC');

fs.writeFileSync('/tmp/registry_entries_v2.txt', result);
console.log('Generated ' + (precalcTopics.length + calcabTopics.length + calcbcTopics.length) + ' topic entries');
