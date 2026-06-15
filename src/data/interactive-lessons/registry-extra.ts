import type { InteractiveTopicConfig } from './registry'

/**
 * AUTO-GENERATED from lessons-manifest.json by scripts/gen-registry-extra.cjs.
 * Do not edit by hand — add lessons to the manifest and re-run the generator.
 *
 * Hand-authored interactive lessons for topics not covered by the auto-generated
 * registry chunks, keyed by DB Topic.slug, spread into the registry last.
 */
export const registryExtra: Record<string, InteractiveTopicConfig> = {
  'completing-the-square': {
    completionDestination: 'competitive',
    parts: [
      { title: '🔲 Perfect Square Trinomials', loader: () => import('./algebra1-completing-the-square').then((m) => m.parts[0]) },
      { title: 'The Completing-the-Square Method', loader: () => import('./algebra1-completing-the-square').then((m) => m.parts[1]) },
      { title: 'Solving Quadratic Equations', loader: () => import('./algebra1-completing-the-square').then((m) => m.parts[2]) },
      { title: 'Vertex Form & Graphing', loader: () => import('./algebra1-completing-the-square').then((m) => m.parts[3]) },
      { title: 'Mixed Practice & Mastery Check', loader: () => import('./algebra1-completing-the-square').then((m) => m.parts[4]) },
    ],
  },
  'absolute-value-algebra1': {
    completionDestination: 'competitive',
    parts: [
      { title: 'What Absolute Value Really Means', loader: () => import('./extra/absolute-value-algebra1').then((m) => m.parts[0]) },
      { title: 'Solving the Two Cases', loader: () => import('./extra/absolute-value-algebra1').then((m) => m.parts[1]) },
      { title: 'Isolate First, Then Watch for Special Cases', loader: () => import('./extra/absolute-value-algebra1').then((m) => m.parts[2]) },
      { title: 'Variables on Both Sides & Extraneous Solutions', loader: () => import('./extra/absolute-value-algebra1').then((m) => m.parts[3]) },
      { title: 'Mixed Practice & Mastery Check', loader: () => import('./extra/absolute-value-algebra1').then((m) => m.parts[4]) },
    ],
  },
  'circles-algebra2': {
    completionDestination: 'competitive',
    parts: [
      { title: 'The Standard Equation', loader: () => import('./extra/circles-algebra2').then((m) => m.parts[0]) },
      { title: 'Reading & Graphing a Circle', loader: () => import('./extra/circles-algebra2').then((m) => m.parts[1]) },
      { title: 'General Form & Completing the Square', loader: () => import('./extra/circles-algebra2').then((m) => m.parts[2]) },
      { title: 'Building Circles from Geometry', loader: () => import('./extra/circles-algebra2').then((m) => m.parts[3]) },
      { title: 'Mixed Practice & Mastery Check', loader: () => import('./extra/circles-algebra2').then((m) => m.parts[4]) },
    ],
  },
  'absolute-extrema': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Local vs. Absolute Extrema', loader: () => import('./extra/absolute-extrema').then((m) => m.parts[0]) },
      { title: 'The Extreme Value Theorem', loader: () => import('./extra/absolute-extrema').then((m) => m.parts[1]) },
      { title: 'Critical Numbers', loader: () => import('./extra/absolute-extrema').then((m) => m.parts[2]) },
      { title: 'The Candidates Test', loader: () => import('./extra/absolute-extrema').then((m) => m.parts[3]) },
      { title: 'Cusps, Corners & Endpoint Traps', loader: () => import('./extra/absolute-extrema').then((m) => m.parts[4]) },
      { title: 'Applied Optimization', loader: () => import('./extra/absolute-extrema').then((m) => m.parts[5]) },
      { title: 'Mixed Practice & Mastery Check', loader: () => import('./extra/absolute-extrema').then((m) => m.parts[6]) },
    ],
  },
  'angle-relationships-geometry': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Naming & Classifying Angles', loader: () => import('./extra/angle-relationships-geometry').then((m) => m.parts[0]) },
      { title: 'Complementary & Supplementary Angles', loader: () => import('./extra/angle-relationships-geometry').then((m) => m.parts[1]) },
      { title: 'Vertical Angles & Angles Around a Point', loader: () => import('./extra/angle-relationships-geometry').then((m) => m.parts[2]) },
      { title: 'Parallel Lines & a Transversal', loader: () => import('./extra/angle-relationships-geometry').then((m) => m.parts[3]) },
      { title: 'Mixed Practice & Mastery Check', loader: () => import('./extra/angle-relationships-geometry').then((m) => m.parts[4]) },
    ],
  },
  'area-polygons-grade6': {
    completionDestination: 'competitive',
    parts: [
      { title: 'What Is Area? Rectangles & Squares', loader: () => import('./extra/area-polygons-grade6').then((m) => m.parts[0]) },
      { title: 'Parallelograms', loader: () => import('./extra/area-polygons-grade6').then((m) => m.parts[1]) },
      { title: 'Triangles', loader: () => import('./extra/area-polygons-grade6').then((m) => m.parts[2]) },
      { title: 'Trapezoids', loader: () => import('./extra/area-polygons-grade6').then((m) => m.parts[3]) },
      { title: 'Composite Figures & Mastery Check', loader: () => import('./extra/area-polygons-grade6').then((m) => m.parts[4]) },
    ],
  },
  'apes-air-pollution': {
    completionDestination: 'competitive',
    parts: [
      { title: '🏭 Pollutants, Sources & Primary vs. Secondary', loader: () => import('./extra/apes-air-pollution').then((m) => m.parts[0]) },
      { title: 'Photochemical Smog', loader: () => import('./extra/apes-air-pollution').then((m) => m.parts[1]) },
      { title: 'Industrial Smog & Acid Deposition', loader: () => import('./extra/apes-air-pollution').then((m) => m.parts[2]) },
      { title: 'Thermal Inversions & the Role of Weather', loader: () => import('./extra/apes-air-pollution').then((m) => m.parts[3]) },
      { title: 'Health Effects & the Air Quality Index', loader: () => import('./extra/apes-air-pollution').then((m) => m.parts[4]) },
      { title: 'Indoor Air Pollution', loader: () => import('./extra/apes-air-pollution').then((m) => m.parts[5]) },
      { title: 'Control Technology, Policy & Mastery Check', loader: () => import('./extra/apes-air-pollution').then((m) => m.parts[6]) },
    ],
  },
  'act-conflicting-viewpoints': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Meet the Only "Reading" Passage on the Science Test', loader: () => import('./extra/act-conflicting-viewpoints').then((m) => m.parts[0]) },
      { title: 'Summarizing Each Viewpoint', loader: () => import('./extra/act-conflicting-viewpoints').then((m) => m.parts[1]) },
      { title: 'Agreement, Disagreement & Comparison Questions', loader: () => import('./extra/act-conflicting-viewpoints').then((m) => m.parts[2]) },
      { title: 'Strengthen, Weaken & "What If" Questions', loader: () => import('./extra/act-conflicting-viewpoints').then((m) => m.parts[3]) },
      { title: 'Strategy, Timing & Mastery Check', loader: () => import('./extra/act-conflicting-viewpoints').then((m) => m.parts[4]) },
    ],
  },
  'act-intermediate-algebra': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Exponents, Radicals & Algebraic Expressions', loader: () => import('./extra/act-intermediate-algebra').then((m) => m.parts[0]) },
      { title: 'Quadratics: Factoring, the Formula & Systems', loader: () => import('./extra/act-intermediate-algebra').then((m) => m.parts[1]) },
      { title: 'Inequalities, Functions & Absolute Value', loader: () => import('./extra/act-intermediate-algebra').then((m) => m.parts[2]) },
      { title: 'The Coordinate Plane: Slope, Distance & Lines', loader: () => import('./extra/act-intermediate-algebra').then((m) => m.parts[3]) },
      { title: 'Circles, Mixed Practice & Mastery Check', loader: () => import('./extra/act-intermediate-algebra').then((m) => m.parts[4]) },
    ],
  },
  'act-plane-geometry-trig': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Angles, Lines & Triangle Sums', loader: () => import('./extra/act-plane-geometry-trig').then((m) => m.parts[0]) },
      { title: 'Triangles: Pythagoras, Special Triangles & Similarity', loader: () => import('./extra/act-plane-geometry-trig').then((m) => m.parts[1]) },
      { title: 'Polygons, Circles, Area & Perimeter', loader: () => import('./extra/act-plane-geometry-trig').then((m) => m.parts[2]) },
      { title: 'Right-Triangle Trigonometry (SOH-CAH-TOA)', loader: () => import('./extra/act-plane-geometry-trig').then((m) => m.parts[3]) },
      { title: 'Coordinate Geometry & Mastery Check', loader: () => import('./extra/act-plane-geometry-trig').then((m) => m.parts[4]) },
    ],
  },
  'act-research-summaries': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Anatomy of an Experiment Passage', loader: () => import('./extra/act-research-summaries').then((m) => m.parts[0]) },
      { title: 'Reading the Data: Tables, Trends & Trials', loader: () => import('./extra/act-research-summaries').then((m) => m.parts[1]) },
      { title: 'Comparing Experiments & Experimental Design', loader: () => import('./extra/act-research-summaries').then((m) => m.parts[2]) },
      { title: 'From Hypothesis to Conclusion', loader: () => import('./extra/act-research-summaries').then((m) => m.parts[3]) },
      { title: 'Strategy, Mixed Practice & Mastery Check', loader: () => import('./extra/act-research-summaries').then((m) => m.parts[4]) },
    ],
  },
  'arithmetic-geometric-sequences-alg1': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Sequences & the Common Difference', loader: () => import('./extra/arithmetic-geometric-sequences-alg1').then((m) => m.parts[0]) },
      { title: 'The Explicit Formula for Arithmetic Sequences', loader: () => import('./extra/arithmetic-geometric-sequences-alg1').then((m) => m.parts[1]) },
      { title: 'Geometric Sequences & the Common Ratio', loader: () => import('./extra/arithmetic-geometric-sequences-alg1').then((m) => m.parts[2]) },
      { title: 'Telling Them Apart & Real-World Models', loader: () => import('./extra/arithmetic-geometric-sequences-alg1').then((m) => m.parts[3]) },
      { title: 'Mixed Practice & Mastery Check', loader: () => import('./extra/arithmetic-geometric-sequences-alg1').then((m) => m.parts[4]) },
    ],
  },
  'box-plots': {
    completionDestination: 'competitive',
    parts: [
      { title: 'The Five-Number Summary', loader: () => import('./extra/box-plots').then((m) => m.parts[0]) },
      { title: 'Building the Box & Whiskers', loader: () => import('./extra/box-plots').then((m) => m.parts[1]) },
      { title: 'Outliers & the 1.5 × IQR Rule', loader: () => import('./extra/box-plots').then((m) => m.parts[2]) },
      { title: 'Reading & Comparing Box Plots', loader: () => import('./extra/box-plots').then((m) => m.parts[3]) },
      { title: 'Mixed Practice & Mastery Check', loader: () => import('./extra/box-plots').then((m) => m.parts[4]) },
    ],
  },
  'compound-absolute-value-inequalities-alg1': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Compound Inequalities: AND vs. OR', loader: () => import('./extra/compound-absolute-value-inequalities-alg1').then((m) => m.parts[0]) },
      { title: 'Solving Compound Inequalities', loader: () => import('./extra/compound-absolute-value-inequalities-alg1').then((m) => m.parts[1]) },
      { title: 'Absolute Value as Distance', loader: () => import('./extra/compound-absolute-value-inequalities-alg1').then((m) => m.parts[2]) },
      { title: 'Solving |ax + b| Inequalities', loader: () => import('./extra/compound-absolute-value-inequalities-alg1').then((m) => m.parts[3]) },
      { title: 'Applications & Mastery Check', loader: () => import('./extra/compound-absolute-value-inequalities-alg1').then((m) => m.parts[4]) },
    ],
  },
  'domain-and-range': {
    completionDestination: 'competitive',
    parts: [
      { title: 'What Domain and Range Mean', loader: () => import('./extra/domain-and-range').then((m) => m.parts[0]) },
      { title: 'Reading Domain & Range from Graphs', loader: () => import('./extra/domain-and-range').then((m) => m.parts[1]) },
      { title: 'Domain from an Equation', loader: () => import('./extra/domain-and-range').then((m) => m.parts[2]) },
      { title: 'Range & Real-World Restrictions', loader: () => import('./extra/domain-and-range').then((m) => m.parts[3]) },
      { title: 'Mixed Practice & Mastery Check', loader: () => import('./extra/domain-and-range').then((m) => m.parts[4]) },
    ],
  },
  'exponent-rules-algebra1': {
    completionDestination: 'competitive',
    parts: [
      { title: 'What an Exponent Really Means', loader: () => import('./extra/exponent-rules-algebra1').then((m) => m.parts[0]) },
      { title: 'Product, Quotient & Power Rules', loader: () => import('./extra/exponent-rules-algebra1').then((m) => m.parts[1]) },
      { title: 'Zero & Negative Exponents', loader: () => import('./extra/exponent-rules-algebra1').then((m) => m.parts[2]) },
      { title: 'Combining the Rules', loader: () => import('./extra/exponent-rules-algebra1').then((m) => m.parts[3]) },
      { title: 'Mixed Practice & Mastery Check', loader: () => import('./extra/exponent-rules-algebra1').then((m) => m.parts[4]) },
    ],
  },
  'exponential-growth-decay-alg1': {
    completionDestination: 'competitive',
    parts: [
      { title: 'What Makes a Function Exponential?', loader: () => import('./extra/exponential-growth-decay-alg1').then((m) => m.parts[0]) },
      { title: 'Exponential Growth', loader: () => import('./extra/exponential-growth-decay-alg1').then((m) => m.parts[1]) },
      { title: 'Exponential Decay', loader: () => import('./extra/exponential-growth-decay-alg1').then((m) => m.parts[2]) },
      { title: 'Tables, Graphs & Word Problems', loader: () => import('./extra/exponential-growth-decay-alg1').then((m) => m.parts[3]) },
      { title: 'Mixed Practice & Mastery Check', loader: () => import('./extra/exponential-growth-decay-alg1').then((m) => m.parts[4]) },
    ],
  },
  'functions-basics-algebra1': {
    completionDestination: 'competitive',
    parts: [
      { title: 'What Is a Function?', loader: () => import('./extra/functions-basics-algebra1').then((m) => m.parts[0]) },
      { title: 'Domain, Range & the Vertical Line Test', loader: () => import('./extra/functions-basics-algebra1').then((m) => m.parts[1]) },
      { title: 'Function Notation f(x)', loader: () => import('./extra/functions-basics-algebra1').then((m) => m.parts[2]) },
      { title: 'Reading Tables & Graphs', loader: () => import('./extra/functions-basics-algebra1').then((m) => m.parts[3]) },
      { title: 'Mixed Practice & Mastery Check', loader: () => import('./extra/functions-basics-algebra1').then((m) => m.parts[4]) },
    ],
  },
  'graphing-linear-equations-algebra1': {
    completionDestination: 'competitive',
    parts: [
      { title: 'The Coordinate Plane & Plotting Points', loader: () => import('./extra/graphing-linear-equations-algebra1').then((m) => m.parts[0]) },
      { title: 'Slope: Steepness & Direction', loader: () => import('./extra/graphing-linear-equations-algebra1').then((m) => m.parts[1]) },
      { title: 'Slope-Intercept Form', loader: () => import('./extra/graphing-linear-equations-algebra1').then((m) => m.parts[2]) },
      { title: 'Intercepts, Standard Form & Special Lines', loader: () => import('./extra/graphing-linear-equations-algebra1').then((m) => m.parts[3]) },
      { title: 'Mixed Practice & Mastery Check', loader: () => import('./extra/graphing-linear-equations-algebra1').then((m) => m.parts[4]) },
    ],
  },
  'graphing-quadratics-algebra1': {
    completionDestination: 'competitive',
    parts: [
      { title: 'The Parabola & Standard Form', loader: () => import('./extra/graphing-quadratics-algebra1').then((m) => m.parts[0]) },
      { title: 'Vertex & Axis of Symmetry', loader: () => import('./extra/graphing-quadratics-algebra1').then((m) => m.parts[1]) },
      { title: 'Intercepts, Roots & Factored Form', loader: () => import('./extra/graphing-quadratics-algebra1').then((m) => m.parts[2]) },
      { title: 'Vertex Form & Transformations', loader: () => import('./extra/graphing-quadratics-algebra1').then((m) => m.parts[3]) },
      { title: 'Putting It All Together & Mastery Check', loader: () => import('./extra/graphing-quadratics-algebra1').then((m) => m.parts[4]) },
    ],
  },
  'graphing-systems-algebra1': {
    completionDestination: 'competitive',
    parts: [
      { title: 'What a System Is and What "Solution" Means', loader: () => import('./extra/graphing-systems-algebra1').then((m) => m.parts[0]) },
      { title: 'Graphing the Lines and Reading the Intersection', loader: () => import('./extra/graphing-systems-algebra1').then((m) => m.parts[1]) },
      { title: 'Three Types of Solutions', loader: () => import('./extra/graphing-systems-algebra1').then((m) => m.parts[2]) },
      { title: 'Real-World Applications', loader: () => import('./extra/graphing-systems-algebra1').then((m) => m.parts[3]) },
      { title: 'Mixed Practice & Mastery Check', loader: () => import('./extra/graphing-systems-algebra1').then((m) => m.parts[4]) },
    ],
  },
  'linear-inequalities-algebra1': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Reading and Understanding Inequalities', loader: () => import('./extra/linear-inequalities-algebra1').then((m) => m.parts[0]) },
      { title: 'Solving One- and Two-Step Inequalities', loader: () => import('./extra/linear-inequalities-algebra1').then((m) => m.parts[1]) },
      { title: 'Multi-Step Inequalities', loader: () => import('./extra/linear-inequalities-algebra1').then((m) => m.parts[2]) },
      { title: 'Graphing, Interval Notation & Word Problems', loader: () => import('./extra/linear-inequalities-algebra1').then((m) => m.parts[3]) },
      { title: 'Mixed Practice & Mastery Check', loader: () => import('./extra/linear-inequalities-algebra1').then((m) => m.parts[4]) },
    ],
  },
  'linear-regression-correlation-alg1': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Scatterplots & Describing a Relationship', loader: () => import('./extra/linear-regression-correlation-alg1').then((m) => m.parts[0]) },
      { title: 'The Correlation Coefficient r', loader: () => import('./extra/linear-regression-correlation-alg1').then((m) => m.parts[1]) },
      { title: 'The Line of Best Fit', loader: () => import('./extra/linear-regression-correlation-alg1').then((m) => m.parts[2]) },
      { title: 'Predictions, Residuals & Cautions', loader: () => import('./extra/linear-regression-correlation-alg1').then((m) => m.parts[3]) },
      { title: 'Mixed Practice & Mastery Check', loader: () => import('./extra/linear-regression-correlation-alg1').then((m) => m.parts[4]) },
    ],
  },
  'mean-median-mode-algebra1': {
    completionDestination: 'competitive',
    parts: [
      { title: 'What "Center" Means (mean / average)', loader: () => import('./extra/mean-median-mode-algebra1').then((m) => m.parts[0]) },
      { title: 'Median & Mode', loader: () => import('./extra/mean-median-mode-algebra1').then((m) => m.parts[1]) },
      { title: 'Outliers & Which Measure to Use', loader: () => import('./extra/mean-median-mode-algebra1').then((m) => m.parts[2]) },
      { title: 'Working Backward & Weighted Means', loader: () => import('./extra/mean-median-mode-algebra1').then((m) => m.parts[3]) },
      { title: 'Mixed Practice & Mastery Check (Exit Quiz)', loader: () => import('./extra/mean-median-mode-algebra1').then((m) => m.parts[4]) },
    ],
  },
  'multiplying-polynomials-algebra1': {
    completionDestination: 'competitive',
    parts: [
      { title: 'The Distributive Property & Exponents', loader: () => import('./extra/multiplying-polynomials-algebra1').then((m) => m.parts[0]) },
      { title: 'Monomial × Polynomial, Carefully', loader: () => import('./extra/multiplying-polynomials-algebra1').then((m) => m.parts[1]) },
      { title: 'Binomial × Binomial (FOIL)', loader: () => import('./extra/multiplying-polynomials-algebra1').then((m) => m.parts[2]) },
      { title: 'Special Products (Shortcuts)', loader: () => import('./extra/multiplying-polynomials-algebra1').then((m) => m.parts[3]) },
      { title: 'Bigger Products, Applications & Mastery Check', loader: () => import('./extra/multiplying-polynomials-algebra1').then((m) => m.parts[4]) },
    ],
  },
  'outliers-in-data': {
    completionDestination: 'competitive',
    parts: [
      { title: 'What Is an Outlier?', loader: () => import('./extra/outliers-in-data').then((m) => m.parts[0]) },
      { title: 'The 1.5 × IQR Rule', loader: () => import('./extra/outliers-in-data').then((m) => m.parts[1]) },
      { title: 'The Standard-Deviation Rule', loader: () => import('./extra/outliers-in-data').then((m) => m.parts[2]) },
      { title: 'How Outliers Affect Statistics', loader: () => import('./extra/outliers-in-data').then((m) => m.parts[3]) },
      { title: 'Causes, Decisions & Mastery Check', loader: () => import('./extra/outliers-in-data').then((m) => m.parts[4]) },
    ],
  },
  'percent-problems-algebra1': {
    completionDestination: 'competitive',
    parts: [
      { title: 'What a Percent Really Is', loader: () => import('./extra/percent-problems-algebra1').then((m) => m.parts[0]) },
      { title: 'The Percent Proportion & The Three Questions', loader: () => import('./extra/percent-problems-algebra1').then((m) => m.parts[1]) },
      { title: 'Finding the Whole (the Reverse Problem)', loader: () => import('./extra/percent-problems-algebra1').then((m) => m.parts[2]) },
      { title: 'Percent Change, Tips, Tax & Discounts', loader: () => import('./extra/percent-problems-algebra1').then((m) => m.parts[3]) },
      { title: 'Mixed Applications & Mastery Check', loader: () => import('./extra/percent-problems-algebra1').then((m) => m.parts[4]) },
    ],
  },
  'polynomial-operations-algebra1': {
    completionDestination: 'competitive',
    parts: [
      { title: 'The Language of Polynomials', loader: () => import('./extra/polynomial-operations-algebra1').then((m) => m.parts[0]) },
      { title: 'Adding Polynomials', loader: () => import('./extra/polynomial-operations-algebra1').then((m) => m.parts[1]) },
      { title: 'Subtracting Polynomials', loader: () => import('./extra/polynomial-operations-algebra1').then((m) => m.parts[2]) },
      { title: 'Word Problems & Applications', loader: () => import('./extra/polynomial-operations-algebra1').then((m) => m.parts[3]) },
      { title: 'Mixed Practice & Mastery Check', loader: () => import('./extra/polynomial-operations-algebra1').then((m) => m.parts[4]) },
    ],
  },
  'proportions-algebra1': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Ratios & What a Proportion Is', loader: () => import('./extra/proportions-algebra1').then((m) => m.parts[0]) },
      { title: 'The Cross-Products Method', loader: () => import('./extra/proportions-algebra1').then((m) => m.parts[1]) },
      { title: 'Variables in Binomials & Both Sides', loader: () => import('./extra/proportions-algebra1').then((m) => m.parts[2]) },
      { title: 'Word Problems & Real Applications', loader: () => import('./extra/proportions-algebra1').then((m) => m.parts[3]) },
      { title: 'Mixed Practice & Mastery Check', loader: () => import('./extra/proportions-algebra1').then((m) => m.parts[4]) },
    ],
  },
  'quadratic-formula-detailed-algebra1': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Standard Form & Identifying a, b, c', loader: () => import('./extra/quadratic-formula-detailed-algebra1').then((m) => m.parts[0]) },
      { title: 'Plugging Into the Formula', loader: () => import('./extra/quadratic-formula-detailed-algebra1').then((m) => m.parts[1]) },
      { title: 'The Discriminant: How Many Solutions?', loader: () => import('./extra/quadratic-formula-detailed-algebra1').then((m) => m.parts[2]) },
      { title: 'Irrational Roots & Word Problems', loader: () => import('./extra/quadratic-formula-detailed-algebra1').then((m) => m.parts[3]) },
      { title: 'Mixed Practice & Mastery Check', loader: () => import('./extra/quadratic-formula-detailed-algebra1').then((m) => m.parts[4]) },
    ],
  },
  'radical-operations-algebra1': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Radicals and "Like" Terms', loader: () => import('./extra/radical-operations-algebra1').then((m) => m.parts[0]) },
      { title: 'Combining Like Radicals', loader: () => import('./extra/radical-operations-algebra1').then((m) => m.parts[1]) },
      { title: 'Simplify First, Then Combine', loader: () => import('./extra/radical-operations-algebra1').then((m) => m.parts[2]) },
      { title: 'Multi-Term Problems & Applications', loader: () => import('./extra/radical-operations-algebra1').then((m) => m.parts[3]) },
      { title: 'Mixed Practice & Mastery Check', loader: () => import('./extra/radical-operations-algebra1').then((m) => m.parts[4]) },
    ],
  },
  'ratios-rates-algebra1': {
    completionDestination: 'competitive',
    parts: [
      { title: 'What Is a Ratio?', loader: () => import('./extra/ratios-rates-algebra1').then((m) => m.parts[0]) },
      { title: 'Rates & Unit Rates', loader: () => import('./extra/ratios-rates-algebra1').then((m) => m.parts[1]) },
      { title: 'Proportions & Cross-Multiplication', loader: () => import('./extra/ratios-rates-algebra1').then((m) => m.parts[2]) },
      { title: 'Real-World Applications', loader: () => import('./extra/ratios-rates-algebra1').then((m) => m.parts[3]) },
      { title: 'Mixed Practice & Mastery Check', loader: () => import('./extra/ratios-rates-algebra1').then((m) => m.parts[4]) },
    ],
  },
  'simplifying-radicals-alg1': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Square Roots & Perfect Squares', loader: () => import('./extra/simplifying-radicals-alg1').then((m) => m.parts[0]) },
      { title: 'The Product & Quotient Rules', loader: () => import('./extra/simplifying-radicals-alg1').then((m) => m.parts[1]) },
      { title: 'Adding & Subtracting Radicals', loader: () => import('./extra/simplifying-radicals-alg1').then((m) => m.parts[2]) },
      { title: 'Multiplying Radicals', loader: () => import('./extra/simplifying-radicals-alg1').then((m) => m.parts[3]) },
      { title: 'Rationalizing Denominators & Mastery Check', loader: () => import('./extra/simplifying-radicals-alg1').then((m) => m.parts[4]) },
    ],
  },
  'simplifying-radicals-algebra1': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Square Roots & Perfect Squares', loader: () => import('./extra/simplifying-radicals-algebra1').then((m) => m.parts[0]) },
      { title: 'The Product Property', loader: () => import('./extra/simplifying-radicals-algebra1').then((m) => m.parts[1]) },
      { title: 'Variables Under the Radical', loader: () => import('./extra/simplifying-radicals-algebra1').then((m) => m.parts[2]) },
      { title: 'Adding, Multiplying & Rationalizing', loader: () => import('./extra/simplifying-radicals-algebra1').then((m) => m.parts[3]) },
      { title: 'Mixed Practice & Mastery Check', loader: () => import('./extra/simplifying-radicals-algebra1').then((m) => m.parts[4]) },
    ],
  },
  'slope-intercept-form-algebra1': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Slope-Intercept Form: y = mx + b', loader: () => import('./extra/slope-intercept-form-algebra1').then((m) => m.parts[0]) },
      { title: 'From Slope and a Point', loader: () => import('./extra/slope-intercept-form-algebra1').then((m) => m.parts[1]) },
      { title: 'From Two Points & Point-Slope Form', loader: () => import('./extra/slope-intercept-form-algebra1').then((m) => m.parts[2]) },
      { title: 'Special Lines, Standard Form & Modeling', loader: () => import('./extra/slope-intercept-form-algebra1').then((m) => m.parts[3]) },
      { title: 'Mixed Practice & Mastery Check', loader: () => import('./extra/slope-intercept-form-algebra1').then((m) => m.parts[4]) },
    ],
  },
  'solving-quadratics-algebra1': {
    completionDestination: 'competitive',
    parts: [
      { title: 'What Is a Quadratic Equation? (standard form, two roots, Zero Product Property)', loader: () => import('./extra/solving-quadratics-algebra1').then((m) => m.parts[0]) },
      { title: 'Solving by Factoring', loader: () => import('./extra/solving-quadratics-algebra1').then((m) => m.parts[1]) },
      { title: 'The Square Root Method', loader: () => import('./extra/solving-quadratics-algebra1').then((m) => m.parts[2]) },
      { title: 'The Quadratic Formula & Discriminant', loader: () => import('./extra/solving-quadratics-algebra1').then((m) => m.parts[3]) },
      { title: 'Choosing a Method, Mixed Practice & Mastery Check', loader: () => import('./extra/solving-quadratics-algebra1').then((m) => m.parts[4]) },
    ],
  },
  'solving-systems-algebra1': {
    completionDestination: 'competitive',
    parts: [
      { title: 'What Is a System & Solving by Graphing', loader: () => import('./extra/solving-systems-algebra1').then((m) => m.parts[0]) },
      { title: 'The Substitution Method', loader: () => import('./extra/solving-systems-algebra1').then((m) => m.parts[1]) },
      { title: 'The Elimination Method', loader: () => import('./extra/solving-systems-algebra1').then((m) => m.parts[2]) },
      { title: 'Special Cases & Choosing a Method', loader: () => import('./extra/solving-systems-algebra1').then((m) => m.parts[3]) },
      { title: 'Word Problems & Mastery Check', loader: () => import('./extra/solving-systems-algebra1').then((m) => m.parts[4]) },
    ],
  },
  'word-problems-linear-algebra1': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Translating Words into Algebra', loader: () => import('./extra/word-problems-linear-algebra1').then((m) => m.parts[0]) },
      { title: 'Number, Consecutive-Integer & Age Problems', loader: () => import('./extra/word-problems-linear-algebra1').then((m) => m.parts[1]) },
      { title: 'Money, Coins & Percent Problems', loader: () => import('./extra/word-problems-linear-algebra1').then((m) => m.parts[2]) },
      { title: 'Distance, Rate & Time + Geometry & Perimeter', loader: () => import('./extra/word-problems-linear-algebra1').then((m) => m.parts[3]) },
      { title: 'Mixed Mastery & Exit Quiz', loader: () => import('./extra/word-problems-linear-algebra1').then((m) => m.parts[4]) },
    ],
  },
  'complex-number-system-alg2': {
    completionDestination: 'competitive',
    parts: [
      { title: 'The Imaginary Unit i', loader: () => import('./extra/complex-number-system-alg2').then((m) => m.parts[0]) },
      { title: 'Standard Form, the Complex Plane & Adding', loader: () => import('./extra/complex-number-system-alg2').then((m) => m.parts[1]) },
      { title: 'Multiplying Complex Numbers', loader: () => import('./extra/complex-number-system-alg2').then((m) => m.parts[2]) },
      { title: 'Conjugates, Division & Modulus', loader: () => import('./extra/complex-number-system-alg2').then((m) => m.parts[3]) },
      { title: 'Mixed Practice & Mastery Check', loader: () => import('./extra/complex-number-system-alg2').then((m) => m.parts[4]) },
    ],
  },
  'complex-numbers-intro-algebra2': {
    completionDestination: 'competitive',
    parts: [
      { title: 'The Imaginary Unit i', loader: () => import('./extra/complex-numbers-intro-algebra2').then((m) => m.parts[0]) },
      { title: 'Complex Numbers in Standard Form', loader: () => import('./extra/complex-numbers-intro-algebra2').then((m) => m.parts[1]) },
      { title: 'Adding, Subtracting & Multiplying', loader: () => import('./extra/complex-numbers-intro-algebra2').then((m) => m.parts[2]) },
      { title: 'Powers of i & Complex Conjugates', loader: () => import('./extra/complex-numbers-intro-algebra2').then((m) => m.parts[3]) },
      { title: 'Dividing, Solving & Mastery Check', loader: () => import('./extra/complex-numbers-intro-algebra2').then((m) => m.parts[4]) },
    ],
  },
  'exponential-equations-algebra2': {
    completionDestination: 'competitive',
    parts: [
      { title: 'What Makes an Equation "Exponential"?', loader: () => import('./extra/exponential-equations-algebra2').then((m) => m.parts[0]) },
      { title: 'The Same-Base Method', loader: () => import('./extra/exponential-equations-algebra2').then((m) => m.parts[1]) },
      { title: 'Logarithms: The Tool for Every Other Case', loader: () => import('./extra/exponential-equations-algebra2').then((m) => m.parts[2]) },
      { title: 'Solving with Logs & Real Applications', loader: () => import('./extra/exponential-equations-algebra2').then((m) => m.parts[3]) },
      { title: 'Mixed Practice & Mastery Check', loader: () => import('./extra/exponential-equations-algebra2').then((m) => m.parts[4]) },
    ],
  },
  'factoring-polynomials-algebra2': {
    completionDestination: 'competitive',
    parts: [
      { title: 'The Greatest Common Factor', loader: () => import('./extra/factoring-polynomials-algebra2').then((m) => m.parts[0]) },
      { title: 'Trinomials with Leading Coefficient 1', loader: () => import('./extra/factoring-polynomials-algebra2').then((m) => m.parts[1]) },
      { title: 'Trinomials when a ≠ 1 (the AC Method)', loader: () => import('./extra/factoring-polynomials-algebra2').then((m) => m.parts[2]) },
      { title: 'Special Patterns (difference of squares, perfect square trinomials, sum/difference of cubes)', loader: () => import('./extra/factoring-polynomials-algebra2').then((m) => m.parts[3]) },
      { title: 'A Strategy, Solving, & Mastery Check (with Exit Quiz)', loader: () => import('./extra/factoring-polynomials-algebra2').then((m) => m.parts[4]) },
    ],
  },
  'geometric-sequences-algebra2': {
    completionDestination: 'competitive',
    parts: [
      { title: 'The Common Ratio', loader: () => import('./extra/geometric-sequences-algebra2').then((m) => m.parts[0]) },
      { title: 'The Explicit Formula', loader: () => import('./extra/geometric-sequences-algebra2').then((m) => m.parts[1]) },
      { title: 'Recursive Rules, Missing Terms & Geometric Mean', loader: () => import('./extra/geometric-sequences-algebra2').then((m) => m.parts[2]) },
      { title: 'Finite Geometric Series', loader: () => import('./extra/geometric-sequences-algebra2').then((m) => m.parts[3]) },
      { title: 'Applications & Mastery Check', loader: () => import('./extra/geometric-sequences-algebra2').then((m) => m.parts[4]) },
    ],
  },
  'geometric-sequences-series': {
    completionDestination: 'competitive',
    parts: [
      { title: 'The Common Ratio', loader: () => import('./extra/geometric-sequences-series').then((m) => m.parts[0]) },
      { title: 'The nth-Term Formula', loader: () => import('./extra/geometric-sequences-series').then((m) => m.parts[1]) },
      { title: 'Finite Geometric Series', loader: () => import('./extra/geometric-sequences-series').then((m) => m.parts[2]) },
      { title: 'Infinite Geometric Series', loader: () => import('./extra/geometric-sequences-series').then((m) => m.parts[3]) },
      { title: 'Applications & Mastery Check', loader: () => import('./extra/geometric-sequences-series').then((m) => m.parts[4]) },
    ],
  },
  'infinite-series': {
    completionDestination: 'competitive',
    parts: [
      { title: 'From Sequences to Series (partial sums, sigma notation)', loader: () => import('./extra/infinite-series').then((m) => m.parts[0]) },
      { title: 'Geometric Series & the Common Ratio (finding r, nth-term formula)', loader: () => import('./extra/infinite-series').then((m) => m.parts[1]) },
      { title: 'Convergence: When Does an Infinite Sum Have a Value? (the |r| < 1 rule)', loader: () => import('./extra/infinite-series').then((m) => m.parts[2]) },
      { title: 'The Sum Formula & Repeating Decimals (S = a1/(1-r), decimals to fractions)', loader: () => import('./extra/infinite-series').then((m) => m.parts[3]) },
      { title: 'Mixed Practice & Mastery Check (Exit Quiz)', loader: () => import('./extra/infinite-series').then((m) => m.parts[4]) },
    ],
  },
  'intro-trigonometry-alg2': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Right Triangles & the Three Ratios', loader: () => import('./extra/intro-trigonometry-alg2').then((m) => m.parts[0]) },
      { title: 'Finding a Missing Side', loader: () => import('./extra/intro-trigonometry-alg2').then((m) => m.parts[1]) },
      { title: 'Finding a Missing Angle', loader: () => import('./extra/intro-trigonometry-alg2').then((m) => m.parts[2]) },
      { title: 'Special Right Triangles & Exact Values', loader: () => import('./extra/intro-trigonometry-alg2').then((m) => m.parts[3]) },
      { title: 'Applications & Mastery Check', loader: () => import('./extra/intro-trigonometry-alg2').then((m) => m.parts[4]) },
    ],
  },
  'inverse-functions-algebra2': {
    completionDestination: 'competitive',
    parts: [
      { title: 'The Idea of "Undoing"', loader: () => import('./extra/inverse-functions-algebra2').then((m) => m.parts[0]) },
      { title: 'Finding the Inverse Algebraically', loader: () => import('./extra/inverse-functions-algebra2').then((m) => m.parts[1]) },
      { title: 'Verifying Inverses with Composition', loader: () => import('./extra/inverse-functions-algebra2').then((m) => m.parts[2]) },
      { title: 'Graphs, One-to-One, and Domain Restrictions', loader: () => import('./extra/inverse-functions-algebra2').then((m) => m.parts[3]) },
      { title: 'Mixed Practice & Mastery Check', loader: () => import('./extra/inverse-functions-algebra2').then((m) => m.parts[4]) },
    ],
  },
  'logarithmic-equations-algebra2': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Logs & Exponentials Are Inverses', loader: () => import('./extra/logarithmic-equations-algebra2').then((m) => m.parts[0]) },
      { title: 'The Three Log Properties', loader: () => import('./extra/logarithmic-equations-algebra2').then((m) => m.parts[1]) },
      { title: 'Convert to Exponential Form', loader: () => import('./extra/logarithmic-equations-algebra2').then((m) => m.parts[2]) },
      { title: 'Combine Logs & Check for Extraneous Roots', loader: () => import('./extra/logarithmic-equations-algebra2').then((m) => m.parts[3]) },
      { title: 'Applications, Mixed Practice & Mastery Check', loader: () => import('./extra/logarithmic-equations-algebra2').then((m) => m.parts[4]) },
    ],
  },
  'logarithmic-functions-algebra2': {
    completionDestination: 'competitive',
    parts: [
      { title: 'What a Logarithm Really Is', loader: () => import('./extra/logarithmic-functions-algebra2').then((m) => m.parts[0]) },
      { title: 'The Graph & Its Inverse', loader: () => import('./extra/logarithmic-functions-algebra2').then((m) => m.parts[1]) },
      { title: 'The Laws of Logarithms', loader: () => import('./extra/logarithmic-functions-algebra2').then((m) => m.parts[2]) },
      { title: 'Change of Base & Real-World Models', loader: () => import('./extra/logarithmic-functions-algebra2').then((m) => m.parts[3]) },
      { title: 'Solving Equations & Mastery Check', loader: () => import('./extra/logarithmic-functions-algebra2').then((m) => m.parts[4]) },
    ],
  },
  'logarithms-properties-alg2': {
    completionDestination: 'competitive',
    parts: [
      { title: 'What Is a Logarithm?', loader: () => import('./extra/logarithms-properties-alg2').then((m) => m.parts[0]) },
      { title: 'Common Logs, Natural Logs & Inverses', loader: () => import('./extra/logarithms-properties-alg2').then((m) => m.parts[1]) },
      { title: 'The Three Big Properties', loader: () => import('./extra/logarithms-properties-alg2').then((m) => m.parts[2]) },
      { title: 'Change of Base & Solving Equations', loader: () => import('./extra/logarithms-properties-alg2').then((m) => m.parts[3]) },
      { title: 'Mixed Practice & Mastery Check', loader: () => import('./extra/logarithms-properties-alg2').then((m) => m.parts[4]) },
    ],
  },
  'matrix-operations-algebra2': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Meet the Matrix', loader: () => import('./extra/matrix-operations-algebra2').then((m) => m.parts[0]) },
      { title: 'Addition, Subtraction & Scalar Multiplication', loader: () => import('./extra/matrix-operations-algebra2').then((m) => m.parts[1]) },
      { title: 'Matrix Multiplication', loader: () => import('./extra/matrix-operations-algebra2').then((m) => m.parts[2]) },
      { title: 'Special Matrices & Determinants', loader: () => import('./extra/matrix-operations-algebra2').then((m) => m.parts[3]) },
      { title: 'Mixed Practice & Mastery Check', loader: () => import('./extra/matrix-operations-algebra2').then((m) => m.parts[4]) },
    ],
  },
  'parabolas-conic-algebra2': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Focus, Directrix & the Definition', loader: () => import('./extra/parabolas-conic-algebra2').then((m) => m.parts[0]) },
      { title: 'Vertical Parabolas: x² = 4py', loader: () => import('./extra/parabolas-conic-algebra2').then((m) => m.parts[1]) },
      { title: 'Horizontal Parabolas: y² = 4px', loader: () => import('./extra/parabolas-conic-algebra2').then((m) => m.parts[2]) },
      { title: 'Translated Parabolas (Vertex (h, k))', loader: () => import('./extra/parabolas-conic-algebra2').then((m) => m.parts[3]) },
      { title: 'Mixed Practice & Mastery Check', loader: () => import('./extra/parabolas-conic-algebra2').then((m) => m.parts[4]) },
    ],
  },
  'piecewise-functions-algebra2': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Reading the Notation', loader: () => import('./extra/piecewise-functions-algebra2').then((m) => m.parts[0]) },
      { title: 'Boundary Points & Evaluating Carefully', loader: () => import('./extra/piecewise-functions-algebra2').then((m) => m.parts[1]) },
      { title: 'Graphing Piecewise Functions', loader: () => import('./extra/piecewise-functions-algebra2').then((m) => m.parts[2]) },
      { title: 'Absolute Value, Step Functions & Continuity', loader: () => import('./extra/piecewise-functions-algebra2').then((m) => m.parts[3]) },
      { title: 'Applications & Mastery Check', loader: () => import('./extra/piecewise-functions-algebra2').then((m) => m.parts[4]) },
    ],
  },
  'polynomial-division-algebra2': {
    completionDestination: 'competitive',
    parts: [
      { title: 'The Big Picture & Dividing by a Monomial', loader: () => import('./extra/polynomial-division-algebra2').then((m) => m.parts[0]) },
      { title: 'Long Division', loader: () => import('./extra/polynomial-division-algebra2').then((m) => m.parts[1]) },
      { title: 'Synthetic Division', loader: () => import('./extra/polynomial-division-algebra2').then((m) => m.parts[2]) },
      { title: 'The Remainder & Factor Theorems', loader: () => import('./extra/polynomial-division-algebra2').then((m) => m.parts[3]) },
      { title: 'Mixed Practice & Mastery Check', loader: () => import('./extra/polynomial-division-algebra2').then((m) => m.parts[4]) },
    ],
  },
  'polynomial-graphs-algebra2': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Degree, Leading Coefficient & End Behavior', loader: () => import('./extra/polynomial-graphs-algebra2').then((m) => m.parts[0]) },
      { title: 'Zeros & x-Intercepts', loader: () => import('./extra/polynomial-graphs-algebra2').then((m) => m.parts[1]) },
      { title: 'Multiplicity: Cross vs. Touch', loader: () => import('./extra/polynomial-graphs-algebra2').then((m) => m.parts[2]) },
      { title: 'Sketching a Full Graph', loader: () => import('./extra/polynomial-graphs-algebra2').then((m) => m.parts[3]) },
      { title: 'Mixed Practice & Mastery Check', loader: () => import('./extra/polynomial-graphs-algebra2').then((m) => m.parts[4]) },
    ],
  },
  'polynomial-long-division': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Why Divide Polynomials?', loader: () => import('./extra/polynomial-long-division').then((m) => m.parts[0]) },
      { title: 'The Four-Step Loop', loader: () => import('./extra/polynomial-long-division').then((m) => m.parts[1]) },
      { title: 'Remainders & Placeholders', loader: () => import('./extra/polynomial-long-division').then((m) => m.parts[2]) },
      { title: 'The Remainder & Factor Theorems', loader: () => import('./extra/polynomial-long-division').then((m) => m.parts[3]) },
      { title: 'Mixed Practice & Mastery Check', loader: () => import('./extra/polynomial-long-division').then((m) => m.parts[4]) },
    ],
  },
  'polynomial-operations-theorems-alg2': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Vocabulary & Arithmetic of Polynomials', loader: () => import('./extra/polynomial-operations-theorems-alg2').then((m) => m.parts[0]) },
      { title: 'Special Products & Polynomial Division', loader: () => import('./extra/polynomial-operations-theorems-alg2').then((m) => m.parts[1]) },
      { title: 'The Remainder & Factor Theorems', loader: () => import('./extra/polynomial-operations-theorems-alg2').then((m) => m.parts[2]) },
      { title: 'Finding All the Roots', loader: () => import('./extra/polynomial-operations-theorems-alg2').then((m) => m.parts[3]) },
      { title: 'Roots, Multiplicity & Mastery Check', loader: () => import('./extra/polynomial-operations-theorems-alg2').then((m) => m.parts[4]) },
    ],
  },
  'polynomial-theorems-algebra2': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Roots, Factors, and Zeros', loader: () => import('./extra/polynomial-theorems-algebra2').then((m) => m.parts[0]) },
      { title: 'The Remainder & Factor Theorems', loader: () => import('./extra/polynomial-theorems-algebra2').then((m) => m.parts[1]) },
      { title: 'The Rational Root Theorem', loader: () => import('./extra/polynomial-theorems-algebra2').then((m) => m.parts[2]) },
      { title: 'Fundamental Theorem, Multiplicity & Complex Roots', loader: () => import('./extra/polynomial-theorems-algebra2').then((m) => m.parts[3]) },
      { title: 'Mixed Practice & Mastery Check', loader: () => import('./extra/polynomial-theorems-algebra2').then((m) => m.parts[4]) },
    ],
  },
  'radical-equations-algebra2': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Square Roots & the Big Idea', loader: () => import('./extra/radical-equations-algebra2').then((m) => m.parts[0]) },
      { title: 'Extraneous Solutions', loader: () => import('./extra/radical-equations-algebra2').then((m) => m.parts[1]) },
      { title: 'Equations That Become Quadratics', loader: () => import('./extra/radical-equations-algebra2').then((m) => m.parts[2]) },
      { title: 'Cube Roots & Two Radicals', loader: () => import('./extra/radical-equations-algebra2').then((m) => m.parts[3]) },
      { title: 'Applications & Mastery Check', loader: () => import('./extra/radical-equations-algebra2').then((m) => m.parts[4]) },
    ],
  },
  'rational-equations-algebra2': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Restrictions & the LCD', loader: () => import('./extra/rational-equations-algebra2').then((m) => m.parts[0]) },
      { title: 'The Core Method: Clear the Denominators', loader: () => import('./extra/rational-equations-algebra2').then((m) => m.parts[1]) },
      { title: 'Factored Denominators & Quadratics', loader: () => import('./extra/rational-equations-algebra2').then((m) => m.parts[2]) },
      { title: 'Extraneous Solutions & Applications', loader: () => import('./extra/rational-equations-algebra2').then((m) => m.parts[3]) },
      { title: 'Mixed Practice & Mastery Check', loader: () => import('./extra/rational-equations-algebra2').then((m) => m.parts[4]) },
    ],
  },
  'rational-exponents-algebra2': {
    completionDestination: 'competitive',
    parts: [
      { title: 'From Roots to Fractional Powers', loader: () => import('./extra/rational-exponents-algebra2').then((m) => m.parts[0]) },
      { title: 'The m/n Power', loader: () => import('./extra/rational-exponents-algebra2').then((m) => m.parts[1]) },
      { title: 'Negative Exponents & Simplifying', loader: () => import('./extra/rational-exponents-algebra2').then((m) => m.parts[2]) },
      { title: 'Solving Equations & Variable Expressions', loader: () => import('./extra/rational-exponents-algebra2').then((m) => m.parts[3]) },
      { title: 'Mixed Practice & Mastery Check', loader: () => import('./extra/rational-exponents-algebra2').then((m) => m.parts[4]) },
    ],
  },
  'rational-functions-graphs-alg2': {
    completionDestination: 'competitive',
    parts: [
      { title: 'What Is a Rational Function? (definition, domain, the 1/x parent graph)', loader: () => import('./extra/rational-functions-graphs-alg2').then((m) => m.parts[0]) },
      { title: 'Vertical Asymptotes & Holes (factor, cancel, classify)', loader: () => import('./extra/rational-functions-graphs-alg2').then((m) => m.parts[1]) },
      { title: 'Horizontal & Slant Asymptotes (degree rules, polynomial division)', loader: () => import('./extra/rational-functions-graphs-alg2').then((m) => m.parts[2]) },
      { title: 'Intercepts & Sketching the Whole Graph (full recipe)', loader: () => import('./extra/rational-functions-graphs-alg2').then((m) => m.parts[3]) },
      { title: 'Mixed Practice & Mastery Check (Exit Quiz)', loader: () => import('./extra/rational-functions-graphs-alg2').then((m) => m.parts[4]) },
    ],
  },
  'rational-operations-algebra2': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Simplifying & Domain Restrictions', loader: () => import('./extra/rational-operations-algebra2').then((m) => m.parts[0]) },
      { title: 'Multiplying & Dividing', loader: () => import('./extra/rational-operations-algebra2').then((m) => m.parts[1]) },
      { title: 'Adding & Subtracting (Like Denominators) and the LCD', loader: () => import('./extra/rational-operations-algebra2').then((m) => m.parts[2]) },
      { title: 'Unlike Denominators & Complex Fractions', loader: () => import('./extra/rational-operations-algebra2').then((m) => m.parts[3]) },
      { title: 'Mixed Practice & Mastery Check', loader: () => import('./extra/rational-operations-algebra2').then((m) => m.parts[4]) },
    ],
  },
  'series-probability-alg2': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Series & Sigma Notation', loader: () => import('./extra/series-probability-alg2').then((m) => m.parts[0]) },
      { title: 'Arithmetic & Geometric Series', loader: () => import('./extra/series-probability-alg2').then((m) => m.parts[1]) },
      { title: 'Counting Principles', loader: () => import('./extra/series-probability-alg2').then((m) => m.parts[2]) },
      { title: 'Probability Basics', loader: () => import('./extra/series-probability-alg2').then((m) => m.parts[3]) },
      { title: 'Compound Events & Mastery Check', loader: () => import('./extra/series-probability-alg2').then((m) => m.parts[4]) },
    ],
  },
  'series-summation-algebra2': {
    completionDestination: 'competitive',
    parts: [
      { title: 'From Sequences to Series & Sigma Notation', loader: () => import('./extra/series-summation-algebra2').then((m) => m.parts[0]) },
      { title: 'The Arithmetic Series Formula', loader: () => import('./extra/series-summation-algebra2').then((m) => m.parts[1]) },
      { title: 'Finite Geometric Series', loader: () => import('./extra/series-summation-algebra2').then((m) => m.parts[2]) },
      { title: 'Infinite Geometric Series', loader: () => import('./extra/series-summation-algebra2').then((m) => m.parts[3]) },
      { title: 'Mixed Practice & Mastery Check', loader: () => import('./extra/series-summation-algebra2').then((m) => m.parts[4]) },
    ],
  },
  'simplifying-rationals-algebra2': {
    completionDestination: 'competitive',
    parts: [
      { title: 'What Is a Rational Expression?', loader: () => import('./extra/simplifying-rationals-algebra2').then((m) => m.parts[0]) },
      { title: 'The Factoring Toolkit', loader: () => import('./extra/simplifying-rationals-algebra2').then((m) => m.parts[1]) },
      { title: 'Factor, Then Cancel', loader: () => import('./extra/simplifying-rationals-algebra2').then((m) => m.parts[2]) },
      { title: 'Domain Restrictions & Opposite Factors', loader: () => import('./extra/simplifying-rationals-algebra2').then((m) => m.parts[3]) },
      { title: 'Mixed Practice & Mastery Check', loader: () => import('./extra/simplifying-rationals-algebra2').then((m) => m.parts[4]) },
    ],
  },
  'synthetic-division': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Setting Up the Shortcut', loader: () => import('./extra/synthetic-division').then((m) => m.parts[0]) },
      { title: 'The Algorithm: Bring Down, Multiply, Add', loader: () => import('./extra/synthetic-division').then((m) => m.parts[1]) },
      { title: 'The Remainder & Factor Theorems', loader: () => import('./extra/synthetic-division').then((m) => m.parts[2]) },
      { title: 'Factoring Polynomials & Special Divisors', loader: () => import('./extra/synthetic-division').then((m) => m.parts[3]) },
      { title: 'Mixed Practice & Mastery Check', loader: () => import('./extra/synthetic-division').then((m) => m.parts[4]) },
    ],
  },
  'area-between-curves': {
    completionDestination: 'competitive',
    parts: [
      { title: 'From Area Under a Curve to Area Between Two', loader: () => import('./extra/area-between-curves').then((m) => m.parts[0]) },
      { title: 'The Formula & Finding the Bounds', loader: () => import('./extra/area-between-curves').then((m) => m.parts[1]) },
      { title: 'When the Curves Cross', loader: () => import('./extra/area-between-curves').then((m) => m.parts[2]) },
      { title: 'Integrating with Respect to y', loader: () => import('./extra/area-between-curves').then((m) => m.parts[3]) },
      { title: 'Choosing dx vs. dy on Hard Regions', loader: () => import('./extra/area-between-curves').then((m) => m.parts[4]) },
      { title: 'Applications & Mixed Regions', loader: () => import('./extra/area-between-curves').then((m) => m.parts[5]) },
      { title: 'Mixed Practice & Mastery Check', loader: () => import('./extra/area-between-curves').then((m) => m.parts[6]) },
    ],
  },
  'chain-rule': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Composite Functions: The "Inside" and the "Outside"', loader: () => import('./extra/chain-rule').then((m) => m.parts[0]) },
      { title: 'The Rule Itself', loader: () => import('./extra/chain-rule').then((m) => m.parts[1]) },
      { title: 'The General Power Rule', loader: () => import('./extra/chain-rule').then((m) => m.parts[2]) },
      { title: 'Trig, Exponential & Logarithmic Chains', loader: () => import('./extra/chain-rule').then((m) => m.parts[3]) },
      { title: 'Nested Chains: Functions Inside Functions Inside Functions', loader: () => import('./extra/chain-rule').then((m) => m.parts[4]) },
      { title: 'Combining Rules, Tables & Related Rates', loader: () => import('./extra/chain-rule').then((m) => m.parts[5]) },
      { title: 'Mixed Practice & Mastery Check', loader: () => import('./extra/chain-rule').then((m) => m.parts[6]) },
    ],
  },
  'constant-multiple-sum-rules': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Why We Need Differentiation Rules', loader: () => import('./extra/constant-multiple-sum-rules').then((m) => m.parts[0]) },
      { title: 'The Constant Multiple Rule', loader: () => import('./extra/constant-multiple-sum-rules').then((m) => m.parts[1]) },
      { title: 'The Sum & Difference Rule', loader: () => import('./extra/constant-multiple-sum-rules').then((m) => m.parts[2]) },
      { title: 'Combining Both Rules on Polynomials', loader: () => import('./extra/constant-multiple-sum-rules').then((m) => m.parts[3]) },
      { title: 'Negative & Fractional Powers, Roots, and Rewrites', loader: () => import('./extra/constant-multiple-sum-rules').then((m) => m.parts[4]) },
      { title: 'Evaluating Derivatives & Common Traps', loader: () => import('./extra/constant-multiple-sum-rules').then((m) => m.parts[5]) },
      { title: 'Mixed Mastery & Exit Quiz', loader: () => import('./extra/constant-multiple-sum-rules').then((m) => m.parts[6]) },
    ],
  },
  'critical-points-and-extrema': {
    completionDestination: 'competitive',
    parts: [
      { title: 'What Is a Critical Point?', loader: () => import('./extra/critical-points-and-extrema').then((m) => m.parts[0]) },
      { title: 'Increasing, Decreasing, and the Sign of f\'', loader: () => import('./extra/critical-points-and-extrema').then((m) => m.parts[1]) },
      { title: 'The First Derivative Test', loader: () => import('./extra/critical-points-and-extrema').then((m) => m.parts[2]) },
      { title: 'Concavity & the Second Derivative Test', loader: () => import('./extra/critical-points-and-extrema').then((m) => m.parts[3]) },
      { title: 'Endpoints, Global Extrema & Choosing a Test', loader: () => import('./extra/critical-points-and-extrema').then((m) => m.parts[4]) },
      { title: 'Applied Extrema (Optimization)', loader: () => import('./extra/critical-points-and-extrema').then((m) => m.parts[5]) },
      { title: 'Mixed Practice & Mastery Check', loader: () => import('./extra/critical-points-and-extrema').then((m) => m.parts[6]) },
    ],
  },
  'curve-sketching': {
    completionDestination: 'competitive',
    parts: [
      { title: 'The Toolbox: What Derivatives Tell Us About Shape', loader: () => import('./extra/curve-sketching').then((m) => m.parts[0]) },
      { title: 'Critical Numbers & the Increasing/Decreasing Test', loader: () => import('./extra/curve-sketching').then((m) => m.parts[1]) },
      { title: 'The First Derivative Test', loader: () => import('./extra/curve-sketching').then((m) => m.parts[2]) },
      { title: 'Concavity & the Second Derivative', loader: () => import('./extra/curve-sketching').then((m) => m.parts[3]) },
      { title: 'Inflection Points & the Second Derivative Test', loader: () => import('./extra/curve-sketching').then((m) => m.parts[4]) },
      { title: 'Asymptotes & End Behavior', loader: () => import('./extra/curve-sketching').then((m) => m.parts[5]) },
      { title: 'Putting It All Together + Exit Quiz', loader: () => import('./extra/curve-sketching').then((m) => m.parts[6]) },
    ],
  },
  'definite-integrals': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Area Under a Curve & Riemann Sums', loader: () => import('./extra/definite-integrals').then((m) => m.parts[0]) },
      { title: 'The Definite Integral as a Limit', loader: () => import('./extra/definite-integrals').then((m) => m.parts[1]) },
      { title: 'Properties of Definite Integrals', loader: () => import('./extra/definite-integrals').then((m) => m.parts[2]) },
      { title: 'FTC Part 2: Evaluating Integrals', loader: () => import('./extra/definite-integrals').then((m) => m.parts[3]) },
      { title: 'FTC Part 1: Accumulation Functions', loader: () => import('./extra/definite-integrals').then((m) => m.parts[4]) },
      { title: 'Applications: Net Change & Average Value', loader: () => import('./extra/definite-integrals').then((m) => m.parts[5]) },
      { title: 'Mixed Practice & Mastery Check', loader: () => import('./extra/definite-integrals').then((m) => m.parts[6]) },
    ],
  },
  'derivative-as-rate-of-change': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Average Rate of Change', loader: () => import('./extra/derivative-as-rate-of-change').then((m) => m.parts[0]) },
      { title: 'From Average to Instantaneous Rate', loader: () => import('./extra/derivative-as-rate-of-change').then((m) => m.parts[1]) },
      { title: 'Units & Interpreting f\'(a) in Context', loader: () => import('./extra/derivative-as-rate-of-change').then((m) => m.parts[2]) },
      { title: 'Motion: Position, Velocity, Acceleration', loader: () => import('./extra/derivative-as-rate-of-change').then((m) => m.parts[3]) },
      { title: 'Reading Rates from Graphs & Tables', loader: () => import('./extra/derivative-as-rate-of-change').then((m) => m.parts[4]) },
      { title: 'Applied Rates Everywhere', loader: () => import('./extra/derivative-as-rate-of-change').then((m) => m.parts[5]) },
      { title: 'Mixed Practice & Mastery Check', loader: () => import('./extra/derivative-as-rate-of-change').then((m) => m.parts[6]) },
    ],
  },
  'derivative-as-slope': {
    completionDestination: 'competitive',
    parts: [
      { title: 'From Lines to Curves', loader: () => import('./extra/derivative-as-slope').then((m) => m.parts[0]) },
      { title: 'From Secant to Tangent', loader: () => import('./extra/derivative-as-slope').then((m) => m.parts[1]) },
      { title: 'The Derivative at a Point', loader: () => import('./extra/derivative-as-slope').then((m) => m.parts[2]) },
      { title: 'The Derivative as a Function', loader: () => import('./extra/derivative-as-slope').then((m) => m.parts[3]) },
      { title: 'Reading Slope Off a Graph', loader: () => import('./extra/derivative-as-slope').then((m) => m.parts[4]) },
      { title: 'Tangent Lines & Linear Approximation', loader: () => import('./extra/derivative-as-slope').then((m) => m.parts[5]) },
      { title: 'Mixed Practice & Mastery Check', loader: () => import('./extra/derivative-as-slope').then((m) => m.parts[6]) },
    ],
  },
  'derivative-notation': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Why So Many Symbols?', loader: () => import('./extra/derivative-notation').then((m) => m.parts[0]) },
      { title: 'Lagrange (Prime) Notation', loader: () => import('./extra/derivative-notation').then((m) => m.parts[1]) },
      { title: 'Leibniz Notation', loader: () => import('./extra/derivative-notation').then((m) => m.parts[2]) },
      { title: 'Evaluating a Derivative at a Point', loader: () => import('./extra/derivative-notation').then((m) => m.parts[3]) },
      { title: 'Higher-Order Derivatives', loader: () => import('./extra/derivative-notation').then((m) => m.parts[4]) },
      { title: 'The Operator d/dx, Plus Euler & Newton', loader: () => import('./extra/derivative-notation').then((m) => m.parts[5]) },
      { title: 'Mixed Practice & Mastery Check', loader: () => import('./extra/derivative-notation').then((m) => m.parts[6]) },
    ],
  },
  'derivatives-of-exponential-functions': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Why Exponentials Are Special', loader: () => import('./extra/derivatives-of-exponential-functions').then((m) => m.parts[0]) },
      { title: 'The Natural Base e', loader: () => import('./extra/derivatives-of-exponential-functions').then((m) => m.parts[1]) },
      { title: 'General Base: d/dx a^x = a^x ln a', loader: () => import('./extra/derivatives-of-exponential-functions').then((m) => m.parts[2]) },
      { title: 'The Chain Rule with Exponentials', loader: () => import('./extra/derivatives-of-exponential-functions').then((m) => m.parts[3]) },
      { title: 'Product & Quotient Combinations', loader: () => import('./extra/derivatives-of-exponential-functions').then((m) => m.parts[4]) },
      { title: 'Tangent Lines, Growth & Decay', loader: () => import('./extra/derivatives-of-exponential-functions').then((m) => m.parts[5]) },
      { title: 'Pitfalls, Mixed Practice & Mastery Check', loader: () => import('./extra/derivatives-of-exponential-functions').then((m) => m.parts[6]) },
    ],
  },
}
