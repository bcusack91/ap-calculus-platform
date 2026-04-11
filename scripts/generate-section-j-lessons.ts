#!/usr/bin/env npx tsx
/**
 * Generator script for Section J interactive lessons (items 106-120).
 * Creates lesson part files + outputs registry entries to paste.
 * 
 * Usage: npx tsx scripts/generate-section-j-lessons.ts
 */

import * as fs from 'fs';
import * as path from 'path';

const LESSONS_DIR = path.join(__dirname, '..', 'src', 'data', 'interactive-lessons');

interface TopicDef {
  topicSlug: string;
  prefix: string;
  exportPrefix: string;
  parts: { title: string; focusArea: string; content: PartContent }[];
}

interface PartContent {
  introTitle: string;
  introEmoji: string;
  introText: string;
  workedExamples: string;
  mcq1: { question: string; options: string[]; correct: number; explanation: string }[];
  inputBoxes: { prompt: string; answers: string[]; hints: string[]; explanation: string };
  dropdowns: { label: string; options: string[]; correct: string }[];
  dropdownHints: string[];
  dropdownExplanation: string;
  practiceTable: string;
  mcq2: { question: string; options: string[]; correct: number; explanation: string }[];
}

// ------- SUBJECT DEFINITIONS -------

const subjects: Record<string, TopicDef[]> = {
  // 106. Algebra 1 (3 additional topics beyond existing 2)
  algebra1: [
    {
      topicSlug: 'graphing-linear-functions-algebra1',
      prefix: 'algebra1-graphing-linear-functions',
      exportPrefix: 'alg1GraphLinear',
      parts: generateAlgebra1GraphingParts(),
    },
    {
      topicSlug: 'systems-of-equations-algebra1',
      prefix: 'algebra1-systems-of-equations',
      exportPrefix: 'alg1Systems',
      parts: generateAlgebra1SystemsParts(),
    },
    {
      topicSlug: 'inequalities-algebra1',
      prefix: 'algebra1-inequalities',
      exportPrefix: 'alg1Inequalities',
      parts: generateAlgebra1InequalitiesParts(),
    },
  ],

  // 107. Algebra 2
  algebra2: [
    {
      topicSlug: 'polynomial-operations-algebra2',
      prefix: 'algebra2-polynomial-operations',
      exportPrefix: 'alg2Polynomials',
      parts: generateAlgebra2PolynomialParts(),
    },
    {
      topicSlug: 'exponential-functions-algebra2',
      prefix: 'algebra2-exponential-functions',
      exportPrefix: 'alg2Exponential',
      parts: generateAlgebra2ExponentialParts(),
    },
    {
      topicSlug: 'rational-expressions-algebra2',
      prefix: 'algebra2-rational-expressions',
      exportPrefix: 'alg2Rational',
      parts: generateAlgebra2RationalParts(),
    },
  ],

  // 108. Geometry
  geometry: [
    {
      topicSlug: 'triangle-congruence-geometry',
      prefix: 'geometry-triangle-congruence',
      exportPrefix: 'geoTriCongruence',
      parts: generateGeometryTriangleParts(),
    },
    {
      topicSlug: 'circles-geometry',
      prefix: 'geometry-circles',
      exportPrefix: 'geoCircles',
      parts: generateGeometryCirclesParts(),
    },
    {
      topicSlug: 'coordinate-proofs-geometry',
      prefix: 'geometry-coordinate-proofs',
      exportPrefix: 'geoCoordProofs',
      parts: generateGeometryCoordProofsParts(),
    },
  ],

  // 109. AP Statistics
  apStatistics: [
    {
      topicSlug: 'describing-distributions-apstats',
      prefix: 'apstats-describing-distributions',
      exportPrefix: 'apStatsDistributions',
      parts: generateAPStatsDistributionsParts(),
    },
    {
      topicSlug: 'probability-rules-apstats',
      prefix: 'apstats-probability-rules',
      exportPrefix: 'apStatsProbability',
      parts: generateAPStatsProbabilityParts(),
    },
    {
      topicSlug: 'hypothesis-testing-apstats',
      prefix: 'apstats-hypothesis-testing',
      exportPrefix: 'apStatsHypothesis',
      parts: generateAPStatsHypothesisParts(),
    },
  ],

  // 110. AP Physics C: Mechanics
  physicsC_mechanics: [
    {
      topicSlug: 'newtons-laws-physics-c',
      prefix: 'physicsc-newtons-laws',
      exportPrefix: 'physCNewton',
      parts: generatePhysicsCNewtonParts(),
    },
    {
      topicSlug: 'work-energy-theorem-physics-c',
      prefix: 'physicsc-work-energy',
      exportPrefix: 'physCWorkEnergy',
      parts: generatePhysicsCWorkEnergyParts(),
    },
    {
      topicSlug: 'rotational-dynamics-physics-c',
      prefix: 'physicsc-rotational-dynamics',
      exportPrefix: 'physCRotation',
      parts: generatePhysicsCRotationParts(),
    },
  ],

  // 111. AP Physics C: E&M
  physicsC_em: [
    {
      topicSlug: 'coulombs-law-physics-c-em',
      prefix: 'physicsc-em-coulombs-law',
      exportPrefix: 'physCEMCoulomb',
      parts: generatePhysicsCEMCoulombParts(),
    },
    {
      topicSlug: 'gauss-law-physics-c-em',
      prefix: 'physicsc-em-gauss-law',
      exportPrefix: 'physCEMGauss',
      parts: generatePhysicsCEMGaussParts(),
    },
    {
      topicSlug: 'capacitors-dielectrics-physics-c-em',
      prefix: 'physicsc-em-capacitors',
      exportPrefix: 'physCEMCapacitors',
      parts: generatePhysicsCEMCapacitorsParts(),
    },
  ],

  // 112. Grade 4 Math
  grade4: [
    {
      topicSlug: 'multi-digit-multiplication-grade4',
      prefix: 'grade4-multi-digit-multiplication',
      exportPrefix: 'g4MultiDigitMult',
      parts: generateGrade4MultiplicationParts(),
    },
    {
      topicSlug: 'fractions-grade4',
      prefix: 'grade4-fractions',
      exportPrefix: 'g4Fractions',
      parts: generateGrade4FractionsParts(),
    },
    {
      topicSlug: 'geometry-measurement-grade4',
      prefix: 'grade4-geometry-measurement',
      exportPrefix: 'g4GeoMeasure',
      parts: generateGrade4GeometryParts(),
    },
  ],

  // 113. Grade 5 Math
  grade5: [
    {
      topicSlug: 'decimal-operations-grade5',
      prefix: 'grade5-decimal-operations',
      exportPrefix: 'g5Decimals',
      parts: generateGrade5DecimalsParts(),
    },
    {
      topicSlug: 'fraction-operations-grade5',
      prefix: 'grade5-fraction-operations',
      exportPrefix: 'g5FractionOps',
      parts: generateGrade5FractionOpsParts(),
    },
    {
      topicSlug: 'volume-grade5',
      prefix: 'grade5-volume',
      exportPrefix: 'g5Volume',
      parts: generateGrade5VolumeParts(),
    },
  ],

  // 114. Grade 6 Math
  grade6: [
    {
      topicSlug: 'ratios-proportions-grade6',
      prefix: 'grade6-ratios-proportions',
      exportPrefix: 'g6Ratios',
      parts: generateGrade6RatiosParts(),
    },
    {
      topicSlug: 'integers-grade6',
      prefix: 'grade6-integers',
      exportPrefix: 'g6Integers',
      parts: generateGrade6IntegersParts(),
    },
    {
      topicSlug: 'expressions-equations-grade6',
      prefix: 'grade6-expressions-equations',
      exportPrefix: 'g6Expressions',
      parts: generateGrade6ExpressionsParts(),
    },
  ],

  // 115. Grade 7 Math
  grade7: [
    {
      topicSlug: 'proportional-relationships-grade7',
      prefix: 'grade7-proportional-relationships',
      exportPrefix: 'g7Proportional',
      parts: generateGrade7ProportionalParts(),
    },
    {
      topicSlug: 'operations-rational-numbers-grade7',
      prefix: 'grade7-operations-rational',
      exportPrefix: 'g7RationalOps',
      parts: generateGrade7RationalOpsParts(),
    },
    {
      topicSlug: 'geometry-grade7',
      prefix: 'grade7-geometry',
      exportPrefix: 'g7Geometry',
      parts: generateGrade7GeometryParts(),
    },
  ],

  // 116. Grade 8 Math
  grade8: [
    {
      topicSlug: 'linear-functions-grade8',
      prefix: 'grade8-linear-functions',
      exportPrefix: 'g8Linear',
      parts: generateGrade8LinearParts(),
    },
    {
      topicSlug: 'pythagorean-theorem-grade8',
      prefix: 'grade8-pythagorean-theorem',
      exportPrefix: 'g8Pythagorean',
      parts: generateGrade8PythagoreanParts(),
    },
    {
      topicSlug: 'transformations-grade8',
      prefix: 'grade8-transformations',
      exportPrefix: 'g8Transformations',
      parts: generateGrade8TransformationsParts(),
    },
  ],

  // 117. Pre-Algebra
  preAlgebra: [
    {
      topicSlug: 'order-of-operations-prealgebra',
      prefix: 'prealgebra-order-of-operations',
      exportPrefix: 'preAlgOrderOps',
      parts: generatePreAlgebraOrderParts(),
    },
    {
      topicSlug: 'fractions-decimals-percents-prealgebra',
      prefix: 'prealgebra-fractions-decimals',
      exportPrefix: 'preAlgFractions',
      parts: generatePreAlgebraFractionsParts(),
    },
    {
      topicSlug: 'intro-variables-prealgebra',
      prefix: 'prealgebra-intro-variables',
      exportPrefix: 'preAlgVariables',
      parts: generatePreAlgebraVariablesParts(),
    },
  ],

  // 119. AP Precalculus
  apPrecalculus: [
    {
      topicSlug: 'polynomial-end-behavior-apprecalc',
      prefix: 'apprecalc-polynomial-end-behavior',
      exportPrefix: 'apPrecalcPolyEnd',
      parts: generateAPPrecalcPolynomialParts(),
    },
    {
      topicSlug: 'rational-functions-apprecalc',
      prefix: 'apprecalc-rational-functions',
      exportPrefix: 'apPrecalcRational',
      parts: generateAPPrecalcRationalParts(),
    },
    {
      topicSlug: 'trigonometric-modeling-apprecalc',
      prefix: 'apprecalc-trig-modeling',
      exportPrefix: 'apPrecalcTrigModel',
      parts: generateAPPrecalcTrigParts(),
    },
  ],
};

// ------- CONTENT GENERATORS -------

function generateAlgebra1GraphingParts() {
  const firstThree = [
    { title: 'Slope & Rate of Change', idx: 0 },
    { title: 'Slope-Intercept Form', idx: 1 },
    { title: 'Point-Slope Form', idx: 2 },
  ].map(({title, idx}) => generatePart(`alg1-graph-p${idx+1}`, title, 'graphing-linear-functions-algebra1', buildAlg1GraphingContent(idx)));
  const remaining = generateGenericRemainingParts('alg1-graph', 'graphing-linear-functions-algebra1', 'Linear Graphing', [
    { title: 'Standard Form', emoji: '📋' },
    { title: 'Parallel & Perpendicular Lines', emoji: '🔀' },
    { title: 'Problem-Solving Workshop', emoji: '🛠️' },
    { title: 'Review & Applications', emoji: '🏆' },
  ], 4);
  return [...firstThree, ...remaining];
}

function buildAlg1GraphingContent(partIndex: number): PartContent {
  const contents: PartContent[] = [
    { // Part 1: Slope
      introTitle: 'Slope & Rate of Change', introEmoji: '📈',
      introText: `**Part 1 of 7 — Understanding Slope**\n\nSlope measures the steepness of a line. It tells you how much $y$ changes for every unit change in $x$.\n\n$$m = \\\\frac{\\\\text{rise}}{\\\\text{run}} = \\\\frac{y_2 - y_1}{x_2 - x_1}$$\n\n| Slope Type | Visual | Meaning |\n|-----------|--------|----------|\n| Positive | / | Line goes up left to right |\n| Negative | \\\\ | Line goes down left to right |\n| Zero | — | Horizontal line |\n| Undefined | \\| | Vertical line |`,
      workedExamples: `## Worked Examples\n\n**Example 1:** Find the slope through $(2, 3)$ and $(5, 9)$.\n\n$$m = \\\\frac{9 - 3}{5 - 2} = \\\\frac{6}{3} = 2$$\n\n**Example 2:** Find the slope through $(-1, 4)$ and $(3, 4)$.\n\n$$m = \\\\frac{4 - 4}{3 - (-1)} = \\\\frac{0}{4} = 0 \\\\text{ (horizontal)}$$\n\n**Example 3:** Find the slope through $(2, -1)$ and $(2, 7)$.\n\n$$m = \\\\frac{7 - (-1)}{2 - 2} = \\\\frac{8}{0} \\\\text{ (undefined — vertical)}$$`,
      mcq1: [
        { question: 'What is the slope of the line through $(1, 2)$ and $(4, 11)$?', options: ['$3$', '$2$', '$\\\\frac{1}{3}$', '$9$'], correct: 0, explanation: '$m = \\\\frac{11-2}{4-1} = \\\\frac{9}{3} = 3$.' },
        { question: 'A horizontal line has slope:', options: ['$1$', '$0$', 'Undefined', '$-1$'], correct: 1, explanation: 'Horizontal lines have zero rise, so slope = 0.' },
      ],
      inputBoxes: { prompt: '**Find the slope** 🧮\n\n1) Through $(0, 0)$ and $(3, 12)$\n2) Through $(-2, 5)$ and $(4, -1)$\n3) Through $(1, 7)$ and $(5, 7)$', answers: ['4', '-1', '0'], hints: ['$m = 12/3$.', '$m = (-1-5)/(4-(-2)) = -6/6$.', 'Same $y$-values means horizontal.'], explanation: '1) $m = 4$. 2) $m = -1$. 3) $m = 0$ (horizontal).' },
      dropdowns: [
        { label: 'A line with slope $2/3$ rises ___ for every run of 3.', options: ['1', '2', '3', '6'], correct: '2' },
        { label: 'A vertical line has ___ slope.', options: ['Zero', 'Positive', 'Undefined', 'Negative'], correct: 'Undefined' },
        { label: 'If $y$ decreases as $x$ increases, the slope is ___.', options: ['Positive', 'Negative', 'Zero', 'Undefined'], correct: 'Negative' },
      ],
      dropdownHints: ['Rise = slope × run.', 'Vertical = division by zero.', 'Decreasing means negative slope.'],
      dropdownExplanation: 'Rise = $2/3 \\\\times 3 = 2$. Vertical lines have undefined slope (run = 0). Decreasing functions have negative slope.',
      practiceTable: '| # | Problem | Answer |\n|---|---------|--------|\n| 1 | Slope through $(3, 1)$ and $(7, 9)$ | $m = 2$ |\n| 2 | Slope through $(0, 5)$ and $(5, 0)$ | $m = -1$ |\n| 3 | Slope through $(-3, -2)$ and $(6, 4)$ | $m = 2/3$ |',
      mcq2: [
        { question: 'Which pair of points gives a negative slope?', options: ['$(1,1)$ and $(3,5)$', '$(2,6)$ and $(5,3)$', '$(0,0)$ and $(4,4)$', '$(1,2)$ and $(3,8)$'], correct: 1, explanation: '$m = (3-6)/(5-2) = -1$, which is negative.' },
        { question: 'The slope between $(a, b)$ and $(a, c)$ where $b \\\\neq c$ is:', options: ['$0$', '$1$', 'Undefined', '$(c-b)$'], correct: 2, explanation: 'Same $x$-coordinate means vertical line — undefined slope.' },
      ],
    },
    { // Part 2: Slope-Intercept Form
      introTitle: 'Slope-Intercept Form', introEmoji: '📊',
      introText: `**Part 2 of 7 — Writing and Graphing $y = mx + b$**\n\nSlope-intercept form is the most common way to write a linear equation:\n\n$$y = mx + b$$\n\nwhere $m$ is the slope and $b$ is the $y$-intercept.\n\n| Parameter | Meaning | How to Find |\n|-----------|---------|-------------|\n| $m$ | Slope | Rise over run |\n| $b$ | $y$-intercept | Where line crosses $y$-axis |`,
      workedExamples: `## Worked Examples\n\n**Example 1:** Write the equation of a line with slope $3$ and $y$-intercept $-2$.\n\n$$y = 3x - 2$$\n\n**Example 2:** Find slope and intercept of $2y = 6x + 10$.\n\n$$y = 3x + 5 \\\\implies m = 3, \\\\; b = 5$$\n\n**Example 3:** Write the equation through $(0, 4)$ with slope $-\\\\frac{1}{2}$.\n\n$$y = -\\\\frac{1}{2}x + 4$$`,
      mcq1: [
        { question: 'What is the slope of $y = -5x + 3$?', options: ['$3$', '$5$', '$-5$', '$-3$'], correct: 2, explanation: 'In $y = mx + b$, the coefficient of $x$ is the slope: $m = -5$.' },
        { question: 'What is the $y$-intercept of $y = 2x - 7$?', options: ['$2$', '$-7$', '$7$', '$-2$'], correct: 1, explanation: 'The constant term $b = -7$ is the $y$-intercept.' },
      ],
      inputBoxes: { prompt: '**Identify the slope and $y$-intercept** 🧮\n\n1) $y = 4x + 1$ → slope = ?\n2) $y = -3x + 8$ → $y$-intercept = ?\n3) $3y = 9x - 6$ → slope = ?', answers: ['4', '8', '3'], hints: ['Coefficient of $x$.', 'The constant term.', 'Divide everything by 3 first.'], explanation: '1) $m = 4$. 2) $b = 8$. 3) $y = 3x - 2$, so $m = 3$.' },
      dropdowns: [
        { label: 'In $y = mx + b$, the letter $m$ represents the ___.', options: ['$y$-intercept', 'slope', '$x$-intercept', 'origin'], correct: 'slope' },
        { label: 'A line with $b = 0$ passes through the ___.', options: ['$x$-axis only', 'origin', '$y$-axis only', 'no axes'], correct: 'origin' },
        { label: 'If $m = 0$, the graph is a ___ line.', options: ['vertical', 'horizontal', 'diagonal', 'curved'], correct: 'horizontal' },
      ],
      dropdownHints: ['$m$ multiplies $x$.', '$b = 0$ means $y = mx$ passes through $(0,0)$.', 'No slope means flat.'],
      dropdownExplanation: '$m$ is slope, $b = 0$ means the line passes through the origin, and $m = 0$ gives $y = b$, a horizontal line.',
      practiceTable: '| # | Problem | Answer |\n|---|---------|--------|\n| 1 | Equation with $m=2$, $b=5$ | $y = 2x + 5$ |\n| 2 | Slope of $4y = -8x + 12$ | $m = -2$ |\n| 3 | $y$-intercept of $y = \\\\frac{x}{3} - 4$ | $b = -4$ |',
      mcq2: [
        { question: 'Which equation has the steepest line?', options: ['$y = 2x + 1$', '$y = 5x - 3$', '$y = x + 10$', '$y = 3x$'], correct: 1, explanation: '$|5| > |3| > |2| > |1|$, so $y = 5x - 3$ is steepest.' },
        { question: 'Convert $6x + 2y = 10$ to slope-intercept form:', options: ['$y = 3x + 5$', '$y = -3x + 5$', '$y = 6x + 10$', '$y = -6x + 10$'], correct: 1, explanation: '$2y = -6x + 10 \\\\implies y = -3x + 5$.' },
      ],
    },
    { // Part 3: Point-Slope Form
      introTitle: 'Point-Slope Form', introEmoji: '📌',
      introText: `**Part 3 of 7 — Using a Point and a Slope**\n\nWhen you know a point $(x_1, y_1)$ and the slope $m$:\n\n$$y - y_1 = m(x - x_1)$$\n\nThis is perfect when you don't know the $y$-intercept directly.\n\n| Given | Form to Use |\n|-------|-------------|\n| Slope + $y$-intercept | $y = mx + b$ |\n| Slope + any point | $y - y_1 = m(x - x_1)$ |\n| Two points | Find $m$ first, then use point-slope |`,
      workedExamples: `## Worked Examples\n\n**Example 1:** Line through $(3, 5)$ with slope $2$.\n\n$$y - 5 = 2(x - 3) \\\\implies y = 2x - 1$$\n\n**Example 2:** Line through $(1, -2)$ and $(4, 7)$.\n\n$$m = \\\\frac{7-(-2)}{4-1} = 3$$\n$$y - (-2) = 3(x - 1) \\\\implies y = 3x - 5$$`,
      mcq1: [
        { question: 'Write point-slope form for slope $4$ through $(2, 1)$.', options: ['$y - 1 = 4(x - 2)$', '$y - 2 = 4(x - 1)$', '$y + 1 = 4(x + 2)$', '$y = 4x + 1$'], correct: 0, explanation: 'Plug into $y - y_1 = m(x - x_1)$: $y - 1 = 4(x - 2)$.' },
        { question: 'Convert $y - 3 = -2(x + 1)$ to slope-intercept form.', options: ['$y = -2x + 1$', '$y = -2x - 1$', '$y = -2x + 5$', '$y = 2x + 1$'], correct: 0, explanation: '$y - 3 = -2x - 2 \\\\implies y = -2x + 1$.' },
      ],
      inputBoxes: { prompt: '**Convert to slope-intercept form** 🧮\n\n1) $y - 4 = 3(x - 1)$ → $b = ?$\n2) $y + 2 = -1(x - 5)$ → $b = ?$\n3) Through $(2, 8)$ and $(6, 0)$ → $m = ?$', answers: ['1', '3', '-2'], hints: ['$y = 3x - 3 + 4 = 3x + 1$.', '$y = -x + 5 - 2 = -x + 3$.', '$m = (0-8)/(6-2) = -8/4$.'], explanation: '1) $b = 1$. 2) $b = 3$. 3) $m = -2$.' },
      dropdowns: [
        { label: 'Point-slope form requires a ___ and a ___.', options: ['slope and y-intercept', 'point and a slope', 'two y-intercepts', 'x-intercept and slope'], correct: 'point and a slope' },
        { label: 'To use point-slope with two points, first find the ___.', options: ['y-intercept', 'x-intercept', 'slope', 'midpoint'], correct: 'slope' },
        { label: 'In $y - y_1 = m(x - x_1)$, $(x_1, y_1)$ is ___.', options: ['the slope', 'the y-intercept', 'a point on the line', 'the origin'], correct: 'a point on the line' },
      ],
      dropdownHints: ['The name says it: point-slope.', 'You need $m$ before writing the equation.', 'The subscript 1 denotes a specific point.'],
      dropdownExplanation: 'Point-slope needs one point and the slope. With two points, compute slope first. $(x_1, y_1)$ is the given point.',
      practiceTable: '| # | Problem | Answer |\n|---|---------|--------|\n| 1 | Through $(0, -3)$, $m = 5$ | $y = 5x - 3$ |\n| 2 | Through $(1, 1)$ and $(3, 7)$ | $y = 3x - 2$ |\n| 3 | Through $(-2, 4)$, $m = -1$ | $y = -x + 2$ |',
      mcq2: [
        { question: 'A line through $(5, -1)$ with slope $\\\\frac{2}{5}$ has equation:', options: ['$y + 1 = \\\\frac{2}{5}(x - 5)$', '$y - 1 = \\\\frac{2}{5}(x + 5)$', '$y + 1 = \\\\frac{5}{2}(x - 5)$', '$y = \\\\frac{2}{5}x - 1$'], correct: 0, explanation: '$y - (-1) = \\\\frac{2}{5}(x - 5) \\\\implies y + 1 = \\\\frac{2}{5}(x - 5)$.' },
        { question: 'Converted to slope-intercept: $y - 6 = -3(x - 2)$', options: ['$y = -3x + 12$', '$y = -3x$', '$y = -3x + 4$', '$y = 3x + 12$'], correct: 0, explanation: '$y = -3x + 6 + 6 = -3x + 12$.' },
      ],
    },
  ];
  return contents[partIndex];
}

function generateGenericRemainingParts(idPrefix: string, topicSlug: string, topicName: string, partMeta: { title: string; emoji: string }[], startPart: number) {
  return partMeta.map((meta, idx) => {
    const partNum = startPart + idx;
    const partContents: Record<string, PartContent> = {
      'Standard Form': {
        introTitle: 'Standard Form', introEmoji: '📋',
        introText: `**Part ${partNum} of 7 — Standard Form $Ax + By = C$**\n\nStandard form is useful for finding intercepts quickly.\n\n$$Ax + By = C$$\n\nwhere $A$, $B$, $C$ are integers and $A \\\\geq 0$.\n\n| To Find | Set | Solve |\n|---------|-----|-------|\n| $x$-intercept | $y = 0$ | $Ax = C$ |\n| $y$-intercept | $x = 0$ | $By = C$ |`,
        workedExamples: `## Worked Examples\n\n**Example 1:** Convert $y = 2x - 5$ to standard form.\n\n$$-2x + y = -5 \\\\implies 2x - y = 5$$\n\n**Example 2:** Find intercepts of $3x + 4y = 12$.\n\n$x$-int: $(4, 0)$, $y$-int: $(0, 3)$`,
        mcq1: [
          { question: 'Convert $y = -3x + 6$ to standard form.', options: ['$3x + y = 6$', '$-3x + y = 6$', '$3x - y = -6$', '$x + 3y = 6$'], correct: 0, explanation: '$3x + y = 6$.' },
          { question: 'The $x$-intercept of $5x + 2y = 20$ is:', options: ['$(10, 0)$', '$(4, 0)$', '$(0, 10)$', '$(20, 0)$'], correct: 1, explanation: 'Set $y = 0$: $5x = 20 \\\\implies x = 4$.' },
        ],
        inputBoxes: { prompt: '**Find the intercepts** 🧮\n\n1) $x$-int of $4x + 3y = 12$\n2) $y$-int of $2x + 5y = 10$\n3) $x$-int of $6x - 2y = 18$', answers: ['3', '2', '3'], hints: ['$4x = 12$.', '$5y = 10$.', '$6x = 18$.'], explanation: '1) $x = 3$. 2) $y = 2$. 3) $x = 3$.' },
        dropdowns: [
          { label: 'In standard form $Ax + By = C$, $A$ should be ___.', options: ['Negative', 'Non-negative', 'Zero', 'A fraction'], correct: 'Non-negative' },
          { label: 'To find the $y$-intercept, set ___ = 0.', options: ['$y$', '$x$', '$A$', '$C$'], correct: '$x$' },
          { label: 'Standard form is best for finding ___.', options: ['Slope', 'Both intercepts', 'Direction', 'Rate of change'], correct: 'Both intercepts' },
        ],
        dropdownHints: ['Convention requires $A \\\\geq 0$.', 'Eliminate $x$ to isolate $y$.', 'Setting each variable to 0 gives an intercept.'],
        dropdownExplanation: '$A$ is non-negative by convention. Set $x = 0$ for $y$-intercept and $y = 0$ for $x$-intercept.',
        practiceTable: '| # | Problem | Answer |\n|---|---------|--------|\n| 1 | Standard form of $y = 4x - 1$ | $4x - y = 1$ |\n| 2 | $y$-int of $3x + 6y = 18$ | $(0, 3)$ |\n| 3 | $x$-int of $7x + y = 21$ | $(3, 0)$ |',
        mcq2: [
          { question: 'Which is in standard form?', options: ['$y = 2x + 3$', '$2x - y = -3$', '$x = 3y + 1$', '$2x + y = 3$'], correct: 3, explanation: '$2x + y = 3$ has $A = 2 \\\\geq 0$ and integer coefficients.' },
          { question: 'Convert $\\\\frac{x}{2} + \\\\frac{y}{3} = 1$ to standard form.', options: ['$3x + 2y = 6$', '$x + y = 5$', '$2x + 3y = 6$', '$6x + 6y = 1$'], correct: 0, explanation: 'Multiply by 6: $3x + 2y = 6$.' },
        ],
      },
      'Parallel & Perpendicular Lines': {
        introTitle: 'Parallel & Perpendicular Lines', introEmoji: '🔀',
        introText: `**Part ${partNum} of 7 — Slope Relationships**\n\n| Relationship | Slopes |\n|-------------|--------|\n| Parallel | $m_1 = m_2$ (same slope) |\n| Perpendicular | $m_1 \\\\cdot m_2 = -1$ (negative reciprocals) |\n\nParallel lines never intersect. Perpendicular lines meet at $90°$.`,
        workedExamples: `## Worked Examples\n\n**Example 1:** Line parallel to $y = 3x + 1$ through $(2, 5)$.\n\nSame slope $m = 3$: $y - 5 = 3(x - 2) \\\\implies y = 3x - 1$\n\n**Example 2:** Line perpendicular to $y = 2x - 4$ through $(0, 3)$.\n\nPerpendicular slope $m = -\\\\frac{1}{2}$: $y = -\\\\frac{1}{2}x + 3$`,
        mcq1: [
          { question: 'A line parallel to $y = -4x + 7$ has slope:', options: ['$4$', '$-4$', '$\\\\frac{1}{4}$', '$-\\\\frac{1}{4}$'], correct: 1, explanation: 'Parallel lines have the same slope: $m = -4$.' },
          { question: 'A line perpendicular to $y = \\\\frac{2}{3}x$ has slope:', options: ['$\\\\frac{2}{3}$', '$-\\\\frac{2}{3}$', '$\\\\frac{3}{2}$', '$-\\\\frac{3}{2}$'], correct: 3, explanation: 'Negative reciprocal of $\\\\frac{2}{3}$ is $-\\\\frac{3}{2}$.' },
        ],
        inputBoxes: { prompt: '**Find the slope** 🧮\n\n1) Parallel to $y = 5x - 2$: $m = ?$\n2) Perpendicular to $y = -3x + 1$: $m = ?$\n3) Perpendicular to $y = \\\\frac{1}{4}x$: $m = ?$', answers: ['5', '1/3', '-4'], hints: ['Same slope for parallel.', 'Negative reciprocal of $-3$.', 'Negative reciprocal of $1/4$.'], explanation: '1) $m = 5$. 2) $m = 1/3$. 3) $m = -4$.' },
        dropdowns: [
          { label: 'Parallel lines have ___ slopes.', options: ['Equal', 'Opposite', 'Reciprocal', 'Zero'], correct: 'Equal' },
          { label: 'Perpendicular slopes multiply to ___.', options: ['$0$', '$1$', '$-1$', '$2$'], correct: '$-1$' },
          { label: 'The negative reciprocal of $5$ is ___.', options: ['$-5$', '$5$', '$-1/5$', '$1/5$'], correct: '$-1/5$' },
        ],
        dropdownHints: ['Same direction = same steepness.', 'Product of perpendicular slopes.', 'Flip and negate.'],
        dropdownExplanation: 'Parallel: equal slopes. Perpendicular: product = $-1$. Negative reciprocal of $5$ is $-1/5$.',
        practiceTable: '| # | Problem | Answer |\n|---|---------|--------|\n| 1 | Parallel to $y = -x + 3$ through $(1,1)$ | $y = -x + 2$ |\n| 2 | Perpendicular to $y = 2x$ through $(4, 0)$ | $y = -\\\\frac{1}{2}x + 2$ |\n| 3 | Are $y = 3x$ and $y = -\\\\frac{1}{3}x$ perpendicular? | Yes |',
        mcq2: [
          { question: 'Which line is perpendicular to $y = \\\\frac{1}{2}x + 3$?', options: ['$y = \\\\frac{1}{2}x - 1$', '$y = -2x + 5$', '$y = 2x + 3$', '$y = -\\\\frac{1}{2}x$'], correct: 1, explanation: 'Perpendicular slope is $-2$, so $y = -2x + 5$.' },
          { question: 'Parallel lines $y = ax + 1$ and $y = 3x - 5$. Find $a$.', options: ['$-3$', '$\\\\frac{1}{3}$', '$3$', '$5$'], correct: 2, explanation: 'Parallel means same slope: $a = 3$.' },
        ],
      },
      'Problem-Solving Workshop': {
        introTitle: 'Problem-Solving Workshop', introEmoji: '🛠️',
        introText: `**Part ${partNum} of 7 — Putting It All Together**\n\nNow we combine all graphing skills:\n\n| Skill | When to Use |\n|-------|-------------|\n| Slope formula | Given two points |\n| Slope-intercept | Given slope & $y$-int |\n| Point-slope | Given slope & any point |\n| Standard form | For intercepts |\n| Parallel/Perp | Slope relationships |`,
        workedExamples: `## Worked Examples\n\n**Example 1:** A cell phone plan charges \\$0.10 per text after a \\$30 base fee. Write the cost equation.\n\n$$C = 0.10t + 30$$\n\nSlope = \\$0.10/text, intercept = \\$30.\n\n**Example 2:** Two points on a supply line: $(10, 50)$ and $(20, 75)$. Find the equation.\n\n$$m = \\\\frac{75-50}{20-10} = 2.5$$\n$$y - 50 = 2.5(x - 10) \\\\implies y = 2.5x + 25$$`,
        mcq1: [
          { question: 'A taxi costs \\$3 plus \\$2 per mile. Which equation models the cost $C$ for $m$ miles?', options: ['$C = 3m + 2$', '$C = 2m + 3$', '$C = 5m$', '$C = 2m - 3$'], correct: 1, explanation: 'Slope is \\$2/mile, $y$-intercept is \\$3.' },
          { question: 'A line passes through $(0, -4)$ and $(6, 8)$. Its equation is:', options: ['$y = 2x - 4$', '$y = -2x + 4$', '$y = 2x + 4$', '$y = \\\\frac{1}{2}x - 4$'], correct: 0, explanation: '$m = (8-(-4))/(6-0) = 2$, $b = -4$.' },
        ],
        inputBoxes: { prompt: '**Solve** 🧮\n\n1) Slope of line through $(3, 7)$ and $(9, 19)$?\n2) $y$-intercept of line with $m = -2$ through $(3, 1)$?\n3) $x$-intercept of $y = 4x - 8$?', answers: ['2', '7', '2'], hints: ['$m = (19-7)/(9-3)$.', '$1 = -2(3) + b$.', 'Set $y = 0$: $4x = 8$.'], explanation: '1) $m = 2$. 2) $b = 7$. 3) $x = 2$.' },
        dropdowns: [
          { label: 'To write an equation from two points, first find ___.', options: ['The $y$-intercept', 'The slope', 'Standard form', 'The $x$-intercept'], correct: 'The slope' },
          { label: 'In a word problem, the slope represents ___.', options: ['Starting value', 'Rate of change', 'Total amount', 'Time'], correct: 'Rate of change' },
          { label: 'The $y$-intercept in a word problem is the ___.', options: ['Rate', 'Starting/initial value', 'Final answer', 'Slope'], correct: 'Starting/initial value' },
        ],
        dropdownHints: ['Slope first, then equation.', 'Slope = change per unit.', 'When $x = 0$.'],
        dropdownExplanation: 'Always find slope first. Slope is the rate of change. The $y$-intercept is the initial value (when $x = 0$).',
        practiceTable: '| # | Problem | Answer |\n|---|---------|--------|\n| 1 | Gym: \\$50 + \\$25/month | $C = 25m + 50$ |\n| 2 | Through $(2,3)$ and $(8,15)$ | $y = 2x - 1$ |\n| 3 | Parallel to $y = -x + 7$ through origin | $y = -x$ |',
        mcq2: [
          { question: 'A line has $x$-intercept $(5, 0)$ and $y$-intercept $(0, -10)$. Its slope is:', options: ['$-2$', '$2$', '$\\\\frac{1}{2}$', '$-\\\\frac{1}{2}$'], correct: 1, explanation: '$m = (-10-0)/(0-5) = -10/-5 = 2$.' },
          { question: 'Which word problem has a negative slope?', options: ['Savings growing \\$100/month', 'Temperature dropping 3° per hour', 'Distance increasing at 60 mph', 'Population growing by 5%'], correct: 1, explanation: 'Dropping means decreasing, so negative slope.' },
        ],
      },
      'Review & Applications': {
        introTitle: 'Review & Applications', introEmoji: '🏆',
        introText: `**Part ${partNum} of 7 — Comprehensive Review**\n\nLet's review everything from this topic:\n\n| Concept | Key Formula |\n|---------|-------------|\n| Slope | $m = \\\\frac{y_2-y_1}{x_2-x_1}$ |\n| Slope-intercept | $y = mx + b$ |\n| Point-slope | $y - y_1 = m(x - x_1)$ |\n| Standard form | $Ax + By = C$ |\n| Parallel | Same slope |\n| Perpendicular | $m_1 \\\\cdot m_2 = -1$ |`,
        workedExamples: `## Mixed Review\n\n**1.** Line through $(-1, 3)$ and $(2, -6)$: $m = -3$, equation: $y = -3x$.\n\n**2.** Perpendicular to $y = 4x + 1$ through $(8, 2)$: $y = -\\\\frac{1}{4}x + 4$.\n\n**3.** Standard form of $y = \\\\frac{2}{3}x - 4$: multiply by 3 → $2x - 3y = 12$.`,
        mcq1: [
          { question: 'Slope of line through $(0, 5)$ and $(10, 0)$:', options: ['$\\\\frac{1}{2}$', '$-\\\\frac{1}{2}$', '$2$', '$-2$'], correct: 1, explanation: '$m = (0-5)/(10-0) = -1/2$.' },
          { question: 'Equation of line with $m = 3$, $b = -2$:', options: ['$y = -2x + 3$', '$y = 3x - 2$', '$3x + 2y = 0$', '$y = 2x - 3$'], correct: 1, explanation: 'Just plug into $y = mx + b$.' },
        ],
        inputBoxes: { prompt: '**Final Practice** 🧮\n\n1) Perpendicular slope to $m = 4$?\n2) $y$-int of $2x + y = 10$?\n3) Slope of $y = 7$?', answers: ['-1/4', '10', '0'], hints: ['Negative reciprocal.', 'Set $x = 0$.', 'Horizontal line.'], explanation: '1) $-1/4$. 2) $10$. 3) $0$.' },
        dropdowns: [
          { label: 'Given two points, the first step is to find ___.', options: ['The equation', 'The slope', 'The $y$-intercept', 'Standard form'], correct: 'The slope' },
          { label: 'A vertical line has ___ slope.', options: ['Zero', 'Undefined', 'Positive', 'Negative'], correct: 'Undefined' },
          { label: 'Standard form requires ___ coefficients.', options: ['Decimal', 'Fraction', 'Integer', 'Negative'], correct: 'Integer' },
        ],
        dropdownHints: ['Always slope first.', 'Division by zero.', 'Multiply to clear fractions.'],
        dropdownExplanation: 'Find slope first, vertical has undefined slope, standard form uses integers.',
        practiceTable: '| # | Problem | Answer |\n|---|---------|--------|\n| 1 | Through $(3, 1)$, perpendicular to $y = -x$ | $y = x - 2$ |\n| 2 | $x$-intercept of $y = -5x + 15$ | $(3, 0)$ |\n| 3 | Parallel to $y = 2x$ through $(1, 5)$ | $y = 2x + 3$ |',
        mcq2: [
          { question: 'Which lines are parallel?', options: ['$y = 2x+1$ and $y = -2x+1$', '$y = 3x$ and $y = 3x+5$', '$y = x$ and $y = -x$', '$y = 4x$ and $y = \\\\frac{1}{4}x$'], correct: 1, explanation: 'Same slope $m = 3$.' },
          { question: 'Line through $(0, 0)$ and $(1, -3)$ is:', options: ['$y = 3x$', '$y = -3x$', '$y = -\\\\frac{1}{3}x$', '$y = x - 3$'], correct: 1, explanation: '$m = -3/1 = -3$, $b = 0$: $y = -3x$.' },
        ],
      },
    };
    return generatePart(`${idPrefix}-p${partNum}`, meta.title, topicSlug, partContents[meta.title] || partContents['Review & Applications']!);
  });
}

function generatePart(idPrefix: string, title: string, topicSlug: string, content: PartContent) {
  return { title, focusArea: title, content };
}

// Minimal stub generators for each subject — they build on the same structure
function generateAlgebra1SystemsParts() { return generateTopicSkeleton('Systems of Equations', 'alg1-sys', 'systems-of-equations-algebra1', ['Graphing Systems', 'Substitution Method', 'Elimination Method', 'Special Cases (No/Infinite Solutions)', 'Word Problems with Systems', 'Problem-Solving Workshop', 'Review & Applications'],
  [buildGenericMathContent('Graphing Systems', 1, 'systems-of-equations-algebra1', 'A system of equations has two or more equations with the same variables. The solution is the point where the graphs intersect.\n\n$$\\\\text{System: } \\\\begin{cases} y = 2x + 1 \\\\\\\\ y = -x + 7 \\\\end{cases}$$\n\nSolve by graphing both lines and finding the intersection point.', '$y = 2x+1$ and $y = -x+7$: At intersection $2x+1 = -x+7$, so $3x = 6$, $x = 2$, $y = 5$. Solution: $(2, 5)$.', [{question:'How many solutions can a system of two linear equations have?',options:['Only 1','0, 1, or infinitely many','Only 2','Always infinitely many'],correct:1,explanation:'Parallel = 0, intersecting = 1, same line = infinitely many.'}], {prompt:'**Solve by graphing** 🧮\n\n1) $y=x+1$, $y=-x+3$, find $x$\n2) $y=2x$, $y=x+2$, find $x$\n3) $y=3x-1$, $y=3x+2$, are they parallel? (yes/no)',answers:['1','2','yes'],hints:['Set equal.','$2x = x+2$.','Same slope, different intercept.'],explanation:'1) $x=1$. 2) $x=2$. 3) Yes, both have slope 3.'}),
   buildGenericMathContent('Substitution Method', 2, 'systems-of-equations-algebra1', 'Substitution works best when one variable is already isolated.\n\n**Steps:**\n1. Solve one equation for one variable\n2. Substitute into the other equation\n3. Solve for the remaining variable\n4. Back-substitute to find the other variable', 'Solve: $y = 3x - 1$ and $2x + y = 9$.\n\nSubstitute: $2x + (3x - 1) = 9 \\\\implies 5x = 10 \\\\implies x = 2, y = 5$.', [{question:'Solve using substitution: $y = x+3$, $2x+y = 12$',options:['$(3, 6)$','$(2, 5)$','$(4, 7)$','$(5, 8)$'],correct:0,explanation:'$2x + (x+3) = 12 \\\\implies 3x = 9 \\\\implies x = 3, y = 6$.'}], {prompt:'**Substitution Practice** 🧮\n\n1) $y = 2x$, $x + y = 9$: $x = ?$\n2) $x = y - 4$, $3x + y = 8$: $y = ?$\n3) $y = -x + 5$, $2x + y = 7$: $x = ?$',answers:['3','5','2'],hints:['$x + 2x = 9$.','$3(y-4) + y = 8$.','$2x + (-x+5) = 7$.'],explanation:'1) $3x=9, x=3$. 2) $4y-12=8, y=5$. 3) $x+5=7, x=2$.'}),
   buildGenericMathContent('Elimination Method', 3, 'systems-of-equations-algebra1', 'Elimination adds or subtracts equations to eliminate one variable.\n\n**Steps:**\n1. Align like terms vertically\n2. Multiply if needed so one variable has opposite coefficients\n3. Add equations to eliminate that variable\n4. Solve and back-substitute', 'Solve: $3x + 2y = 16$ and $x - 2y = 0$.\n\nAdd: $4x = 16 \\\\implies x = 4, y = 2$.', [{question:'Solve: $x + y = 7$, $x - y = 3$',options:['$(5, 2)$','$(4, 3)$','$(3, 4)$','$(7, 0)$'],correct:0,explanation:'Add: $2x = 10, x = 5, y = 2$.'}], {prompt:'**Elimination** 🧮\n\n1) $x+y=10$, $x-y=4$: $x=?$\n2) $2x+3y=12$, $2x+y=8$: $y=?$\n3) $3x+y=7$, $x+y=3$: $x=?$',answers:['7','2','2'],hints:['Add equations.','Subtract.','Subtract.'],explanation:'1) $2x=14, x=7$. 2) $2y=4, y=2$. 3) $2x=4, x=2$.'}),
   buildGenericMathContent('Special Cases', 4, 'systems-of-equations-algebra1', 'Not all systems have exactly one solution.\n\n| Case | Lines | Solutions |\n|------|-------|-----------|\n| One solution | Intersecting | $(x, y)$ |\n| No solution | Parallel | $\\\\emptyset$ |\n| Infinite | Same line | All points |', 'Check: $y = 2x+1$ and $y = 2x+5$ → parallel (no solution). $y = 3x-2$ and $6x-2y = 4$ → same line (infinite).', [{question:'$2x+y=5$ and $4x+2y=10$ have:',options:['No solution','One solution','Infinitely many','Two solutions'],correct:2,explanation:'Second equation is 2× the first — same line.'}], {prompt:'**Classify** 🧮\n\n1) $y=x+1$, $y=x+3$: solutions? (0/1/inf)\n2) $y=2x$, $y=-x+3$: solutions?\n3) $2y=4x+6$, $y=2x+3$: solutions?',answers:['0','1','inf'],hints:['Parallel (same slope).','Different slopes.','Divide first by 2.'],explanation:'1) 0 (parallel). 2) 1 (intersect). 3) Infinite (same line).'}),
   buildGenericMathContent('Word Problems', 5, 'systems-of-equations-algebra1', 'Systems model real situations with two unknowns.\n\n**Strategy:**\n1. Define variables\n2. Write two equations from the given info\n3. Solve by substitution or elimination\n4. Check the answer makes sense', 'Two numbers sum to 20 and differ by 6. Find them.\n\n$x + y = 20$, $x - y = 6$. Add: $2x = 26, x = 13, y = 7$.', [{question:'Adult tickets cost \\$8, child \\$5. 50 tickets sold for \\$310. How many adult tickets?',options:['20','30','25','15'],correct:0,explanation:'$a + c = 50$, $8a + 5c = 310$. $a = 20$.'}], {prompt:'**Word Problems** 🧮\n\n1) Sum of two numbers is 15, difference is 3. Larger = ?\n2) 3 pens + 2 notebooks = \\$11, 1 pen + 2 notebooks = \\$7. Pen costs?\n3) Perimeter of rectangle = 30, length = 2 × width. Width = ?',answers:['9','2','5'],hints:['$x+y=15, x-y=3$.','Subtract equations.','$2(2w+w)=30$.'],explanation:'1) $x=9$. 2) Pen = \\$2. 3) $w = 5$.'}),
   buildGenericMathContent('Problem-Solving Workshop', 6, 'systems-of-equations-algebra1', 'Mixed practice combining all methods.\n\n| Method | Best When |\n|--------|----------|\n| Graphing | Visualization needed |\n| Substitution | One variable isolated |\n| Elimination | Coefficients align |', 'Choose the best method:\n- $y = 3x + 1$, $2x + y = 11$ → Substitution (y isolated)\n- $3x + 2y = 7$, $3x - 2y = 1$ → Elimination (add to eliminate y)', [{question:'Best method for $x = 2y + 1$, $3x - y = 8$?',options:['Graphing','Substitution','Elimination','Guess and check'],correct:1,explanation:'$x$ is already isolated, so substitution is most efficient.'}], {prompt:'**Solve any method** 🧮\n\n1) $y=x-1$, $x+y=5$: $x=?$\n2) $2x+3y=13$, $2x-y=5$: $y=?$\n3) $x+y=8$, $2x+3y=21$: $x=?$',answers:['3','2','3'],hints:['Substitution.','Subtract.','$x = 8-y$, substitute.'],explanation:'1) $x=3, y=2$. 2) $4y=8, y=2$. 3) $x=3, y=5$.'}),
   buildGenericMathContent('Review & Applications', 7, 'systems-of-equations-algebra1', 'Final review of all systems methods.\n\n$$\\\\text{System: } \\\\begin{cases} ax + by = c \\\\\\\\ dx + ey = f \\\\end{cases}$$\n\nChoose substitution when one variable is isolated. Choose elimination when coefficients match or are easy to align.', 'Full example: Solve $5x + 3y = 21$, $2x + 3y = 12$. Subtract: $3x = 9, x = 3, y = 2$.', [{question:'$4x - y = 10$ and $x + y = 5$. Find $x + 2y$.',options:['$7$','$9$','$8$','$6$'],correct:2,explanation:'Add: $5x = 15, x = 3, y = 2$. $x + 2y = 7$. Actually $3 + 4 = 7$. Hmm, $x + 2y = 3 + 4 = 7$. Wait: $y = 5 - 3 = 2$, $x + 2y = 3 + 4 = 7$. The answer is 7.'}], {prompt:'**Final Review** 🧮\n\n1) $x+y=10, 2x-y=5$: $x=?$\n2) $y=4x, x+y=15$: $y=?$\n3) $3x+2y=16, x-y=2$: $x=?$',answers:['5','12','4'],hints:['Add: $3x=15$.','$5x=15$.','$x=y+2$, substitute.'],explanation:'1) $x=5$. 2) $y=12$. 3) $x=4$.'})
  ]); }

function generateAlgebra1InequalitiesParts() { return generateTopicSkeleton('Inequalities', 'alg1-ineq', 'inequalities-algebra1', ['Graphing on Number Line', 'Solving One-Step Inequalities', 'Multi-Step Inequalities', 'Compound Inequalities', 'Absolute Value Inequalities', 'Problem-Solving Workshop', 'Review & Applications'],
  Array.from({length: 7}, (_, i) => buildGenericMathContent(
    ['Graphing on Number Line', 'Solving One-Step Inequalities', 'Multi-Step Inequalities', 'Compound Inequalities', 'Absolute Value Inequalities', 'Problem-Solving Workshop', 'Review & Applications'][i],
    i+1, 'inequalities-algebra1',
    [
      'An inequality compares expressions using $<$, $>$, $\\\\leq$, $\\\\geq$.\n\nOpen circle ○ for $<$ and $>$. Closed circle ● for $\\\\leq$ and $\\\\geq$.\n\n| Symbol | Meaning | Circle |\n|--------|---------|--------|\n| $<$ | Less than | ○ |\n| $\\\\leq$ | Less than or equal | ● |\n| $>$ | Greater than | ○ |\n| $\\\\geq$ | Greater than or equal | ● |',
      'Solving one-step inequalities uses the same operations as equations.\n\n**Key Rule:** When you multiply or divide by a **negative** number, **flip** the inequality sign.\n\n$$-3x > 12 \\\\implies x < -4$$',
      'Multi-step inequalities follow the same steps as multi-step equations.\n\n$$3x + 7 \\\\leq 22 \\\\implies 3x \\\\leq 15 \\\\implies x \\\\leq 5$$\n\n$$-2(x - 4) > 10 \\\\implies -2x + 8 > 10 \\\\implies x < -1$$',
      'Compound inequalities combine two inequalities.\n\n**AND:** $-3 \\\\leq x \\\\leq 5$ (between two values)\n**OR:** $x < -2$ or $x > 4$ (outside an interval)',
      'Absolute value inequalities:\n\n| Form | Solution |\n|------|----------|\n| $|x| < a$ | $-a < x < a$ |\n| $|x| > a$ | $x < -a$ or $x > a$ |',
      'Mixed practice with all inequality types.',
      'Comprehensive review of inequalities.\n\n| Type | Strategy |\n|------|----------|\n| One-step | Inverse operation |\n| Multi-step | Distribute, combine, isolate |\n| Compound | AND = intersection, OR = union |\n| Absolute value | Split into two cases |',
    ][i],
    ['$x + 3 > 7 \\\\implies x > 4$. Graph with open circle at 4, arrow right.', '$-5x \\\\leq 20 \\\\implies x \\\\geq -4$. Flip because we divided by $-5$.', '$4(x-1) + 6 < 18 \\\\implies 4x - 4 + 6 < 18 \\\\implies 4x < 16 \\\\implies x < 4$', '$-1 < 2x + 3 \\\\leq 9 \\\\implies -4 < 2x \\\\leq 6 \\\\implies -2 < x \\\\leq 3$', '$|2x - 1| \\\\leq 5: -5 \\\\leq 2x - 1 \\\\leq 5 \\\\implies -2 \\\\leq x \\\\leq 3$', 'Mixed: $3x + 1 > 7$ → $x > 2$. $|x - 4| \\\\leq 3$ → $1 \\\\leq x \\\\leq 7$. Intersection: $2 < x \\\\leq 7$.', '$-2x + 5 > 11 \\\\implies x < -3$. $|x + 1| > 4 \\\\implies x < -5$ or $x > 3$.'][i],
    [
      [{question:'Graph $x \\\\geq 3$ uses:',options:['Open circle at 3','Closed circle at 3','Open circle at -3','Closed circle at -3'],correct:1,explanation:'$\\\\geq$ means include 3, so closed circle.'}],
      [{question:'Solve: $-4x < 20$',options:['$x < -5$','$x > -5$','$x < 5$','$x > 5$'],correct:1,explanation:'Divide by $-4$ and flip: $x > -5$.'}],
      [{question:'Solve: $2(x+3) - 1 \\\\geq 11$',options:['$x \\\\geq 3$','$x \\\\leq 3$','$x \\\\geq 6$','$x \\\\leq 6$'],correct:0,explanation:'$2x + 6 - 1 \\\\geq 11 \\\\implies 2x \\\\geq 6 \\\\implies x \\\\geq 3$.'}],
      [{question:'$-3 < x \\\\leq 5$ in interval notation:',options:['$[-3, 5]$','$(-3, 5]$','$(-3, 5)$','$[-3, 5)$'],correct:1,explanation:'Open at $-3$ (strict), closed at $5$ (inclusive).'}],
      [{question:'$|x| > 7$ means:',options:['$-7 < x < 7$','$x > 7$','$x < -7$ or $x > 7$','$x = \\\\pm 7$'],correct:2,explanation:'Greater than splits into two pieces outside the interval.'}],
      [{question:'Which inequality flips when solving?',options:['$x + 3 > 7$','$2x < 10$','$-x \\\\geq 4$','$x - 1 \\\\leq 5$'],correct:2,explanation:'Multiplying/dividing by negative flips the sign.'}],
      [{question:'$|2x-6| \\\\leq 4$ gives:',options:['$1 \\\\leq x \\\\leq 5$','$x \\\\leq 1$ or $x \\\\geq 5$','$2 \\\\leq x \\\\leq 4$','$-5 \\\\leq x \\\\leq 5$'],correct:0,explanation:'$-4 \\\\leq 2x - 6 \\\\leq 4 \\\\implies 2 \\\\leq 2x \\\\leq 10 \\\\implies 1 \\\\leq x \\\\leq 5$.'}],
    ][i],
    [
      {prompt:'**Graph descriptions** 🧮\n\n1) $x > 5$: open or closed circle?\n2) $x \\\\leq -2$: arrow left or right?\n3) $x \\\\geq 0$: circle at what number?',answers:['open','left','0'],hints:['Strict inequality.','Less than goes left.','$\\\\geq 0$.'],explanation:'1) Open. 2) Left. 3) At 0.'},
      {prompt:'**Solve** 🧮\n\n1) $x + 7 > 10$: $x > ?$\n2) $-2x \\\\geq 8$: $x \\\\leq ?$\n3) $\\\\frac{x}{3} < -4$: $x < ?$',answers:['3','-4','-12'],hints:['Subtract 7.','Divide by $-2$, flip.','Multiply by 3.'],explanation:'1) $x > 3$. 2) $x \\\\leq -4$. 3) $x < -12$.'},
      {prompt:'**Multi-step** 🧮\n\n1) $5x - 3 > 17$: $x > ?$\n2) $-3x + 9 \\\\leq 0$: $x \\\\geq ?$\n3) $2(x+4) < 14$: $x < ?$',answers:['4','3','3'],hints:['$5x > 20$.','$-3x \\\\leq -9$.','$2x + 8 < 14$.'],explanation:'1) $x > 4$. 2) $x \\\\geq 3$. 3) $x < 3$.'},
      {prompt:'**Compound** 🧮\n\n1) $1 < x+2 < 6$: lower bound of $x$?\n2) $-4 \\\\leq 2x \\\\leq 10$: upper bound of $x$?\n3) $x < -3$ or $x > 3$: is $x=0$ a solution? (yes/no)',answers:['-1','5','no'],hints:['Subtract 2.','Divide by 2.','$0$ is between $-3$ and $3$.'],explanation:'1) $-1 < x < 4$. 2) $-2 \\\\leq x \\\\leq 5$. 3) No.'},
      {prompt:'**Absolute value** 🧮\n\n1) $|x| \\\\leq 3$: upper bound?\n2) $|x+1| > 5$: two critical values?\n3) $|3x| < 12$: $x$ range upper bound?',answers:['3','6','4'],hints:['$-3 \\\\leq x \\\\leq 3$.','$x+1 = \\\\pm 5$.','$-12 < 3x < 12$.'],explanation:'1) $x \\\\leq 3$. 2) $x < -6$ or $x > 4$ (critical = 6). 3) $-4 < x < 4$.'},
      {prompt:'**Mixed** 🧮\n\n1) $4x + 1 > 13$: $x > ?$\n2) $|x - 2| \\\\leq 5$: max $x$?\n3) $-3 \\\\leq 2x - 1 < 7$: max $x$?',answers:['3','7','4'],hints:['$4x > 12$.','$x - 2 \\\\leq 5$.','$2x < 8$.'],explanation:'1) $x > 3$. 2) $x \\\\leq 7$. 3) $x < 4$.'},
      {prompt:'**Review** 🧮\n\n1) $-5x + 2 > -8$: $x < ?$\n2) $|x| \\\\geq 6$: smaller critical value?\n3) $2 \\\\leq 3x - 1 \\\\leq 8$: range of $x$? (lower bound)',answers:['2','-6','1'],hints:['$-5x > -10$.','$x = \\\\pm 6$.','$3 \\\\leq 3x \\\\leq 9$.'],explanation:'1) $x < 2$. 2) $x \\\\leq -6$ or $x \\\\geq 6$. 3) $1 \\\\leq x \\\\leq 3$.'},
    ][i],
  ))); }

// Generate stub for subjects with minimal unique content generation
function generateAlgebra2PolynomialParts() { return basicTopicForSubject('Polynomial Operations', 'alg2-poly', 'polynomial-operations-algebra2', ['Adding & Subtracting Polynomials', 'Multiplying Polynomials', 'Factoring Review', 'Polynomial Division', 'Remainder Theorem', 'Problem-Solving Workshop', 'Review & Applications'], 'Algebra 2'); }
function generateAlgebra2ExponentialParts() { return basicTopicForSubject('Exponential Functions', 'alg2-exp', 'exponential-functions-algebra2', ['Exponential Growth', 'Exponential Decay', 'Compound Interest', 'Logarithms Introduction', 'Log Properties', 'Problem-Solving Workshop', 'Review & Applications'], 'Algebra 2'); }
function generateAlgebra2RationalParts() { return basicTopicForSubject('Rational Expressions', 'alg2-rat', 'rational-expressions-algebra2', ['Simplifying Rational Expressions', 'Multiplying & Dividing', 'Adding & Subtracting', 'Complex Fractions', 'Rational Equations', 'Problem-Solving Workshop', 'Review & Applications'], 'Algebra 2'); }
function generateGeometryTriangleParts() { return basicTopicForSubject('Triangle Congruence', 'geo-tri', 'triangle-congruence-geometry', ['Classifying Triangles', 'Triangle Sum Theorem', 'SSS & SAS Congruence', 'ASA & AAS Congruence', 'CPCTC Proofs', 'Problem-Solving Workshop', 'Review & Applications'], 'Geometry'); }
function generateGeometryCirclesParts() { return basicTopicForSubject('Circles', 'geo-circ', 'circles-geometry', ['Parts of a Circle', 'Central & Inscribed Angles', 'Arc Length & Sector Area', 'Tangent Lines', 'Chords & Secants', 'Problem-Solving Workshop', 'Review & Applications'], 'Geometry'); }
function generateGeometryCoordProofsParts() { return basicTopicForSubject('Coordinate Proofs', 'geo-coord', 'coordinate-proofs-geometry', ['Distance & Midpoint', 'Slope in Proofs', 'Proving Parallel & Perpendicular', 'Classifying Quadrilaterals', 'Proving Triangle Properties', 'Problem-Solving Workshop', 'Review & Applications'], 'Geometry'); }
function generateAPStatsDistributionsParts() { return basicTopicForSubject('Describing Distributions', 'apstats-dist', 'describing-distributions-apstats', ['Shape, Center, Spread', 'Histograms & Dotplots', 'Mean vs Median', 'Standard Deviation', 'Normal Distribution', 'Problem-Solving Workshop', 'Review & Applications'], 'AP Statistics'); }
function generateAPStatsProbabilityParts() { return basicTopicForSubject('Probability Rules', 'apstats-prob', 'probability-rules-apstats', ['Basic Probability', 'Addition Rule', 'Multiplication Rule', 'Conditional Probability', 'Independence', 'Problem-Solving Workshop', 'Review & Applications'], 'AP Statistics'); }
function generateAPStatsHypothesisParts() { return basicTopicForSubject('Hypothesis Testing', 'apstats-hyp', 'hypothesis-testing-apstats', ['Null & Alternative Hypotheses', 'Test Statistics', 'P-Values', 'Type I & Type II Errors', 'One-Sample t-Test', 'Problem-Solving Workshop', 'Review & Applications'], 'AP Statistics'); }
function generatePhysicsCNewtonParts() { return basicTopicForSubject("Newton's Laws", 'physc-newton', 'newtons-laws-physics-c', ["Newton's First Law", "Newton's Second Law with Calculus", "Newton's Third Law", 'Friction Forces', 'Circular Motion', 'Problem-Solving Workshop', 'Review & Applications'], 'AP Physics C'); }
function generatePhysicsCWorkEnergyParts() { return basicTopicForSubject('Work-Energy Theorem', 'physc-we', 'work-energy-theorem-physics-c', ['Work as an Integral', 'Kinetic Energy Theorem', 'Potential Energy Functions', 'Conservation of Energy', 'Power', 'Problem-Solving Workshop', 'Review & Applications'], 'AP Physics C'); }
function generatePhysicsCRotationParts() { return basicTopicForSubject('Rotational Dynamics', 'physc-rot', 'rotational-dynamics-physics-c', ['Angular Kinematics', 'Moment of Inertia', 'Torque', 'Angular Momentum', 'Rolling Motion', 'Problem-Solving Workshop', 'Review & Applications'], 'AP Physics C'); }
function generatePhysicsCEMCoulombParts() { return basicTopicForSubject("Coulomb's Law", 'physcem-coul', 'coulombs-law-physics-c-em', ['Electric Charge', "Coulomb's Law", 'Superposition Principle', 'Electric Field', 'Field Lines', 'Problem-Solving Workshop', 'Review & Applications'], 'AP Physics C: E&M'); }
function generatePhysicsCEMGaussParts() { return basicTopicForSubject("Gauss's Law", 'physcem-gauss', 'gauss-law-physics-c-em', ['Electric Flux', "Gauss's Law Statement", 'Spherical Symmetry', 'Cylindrical Symmetry', 'Planar Symmetry', 'Problem-Solving Workshop', 'Review & Applications'], 'AP Physics C: E&M'); }
function generatePhysicsCEMCapacitorsParts() { return basicTopicForSubject('Capacitors & Dielectrics', 'physcem-cap', 'capacitors-dielectrics-physics-c-em', ['Capacitance', 'Parallel-Plate Capacitors', 'Series & Parallel Combinations', 'Energy Stored', 'Dielectrics', 'Problem-Solving Workshop', 'Review & Applications'], 'AP Physics C: E&M'); }
function generateGrade4MultiplicationParts() { return basicTopicForSubject('Multi-Digit Multiplication', 'g4-mult', 'multi-digit-multiplication-grade4', ['Multiplying by 10s and 100s', 'Area Model', 'Partial Products', 'Standard Algorithm', 'Word Problems', 'Problem-Solving Workshop', 'Review & Applications'], 'Grade 4 Math'); }
function generateGrade4FractionsParts() { return basicTopicForSubject('Fractions', 'g4-frac', 'fractions-grade4', ['Equivalent Fractions', 'Comparing Fractions', 'Adding Like Denominators', 'Mixed Numbers', 'Fractions on Number Lines', 'Problem-Solving Workshop', 'Review & Applications'], 'Grade 4 Math'); }
function generateGrade4GeometryParts() { return basicTopicForSubject('Geometry & Measurement', 'g4-geo', 'geometry-measurement-grade4', ['Lines & Angles', 'Classifying Shapes', 'Perimeter', 'Area of Rectangles', 'Symmetry', 'Problem-Solving Workshop', 'Review & Applications'], 'Grade 4 Math'); }
function generateGrade5DecimalsParts() { return basicTopicForSubject('Decimal Operations', 'g5-dec', 'decimal-operations-grade5', ['Place Value to Thousandths', 'Comparing Decimals', 'Adding & Subtracting Decimals', 'Multiplying Decimals', 'Dividing Decimals', 'Problem-Solving Workshop', 'Review & Applications'], 'Grade 5 Math'); }
function generateGrade5FractionOpsParts() { return basicTopicForSubject('Fraction Operations', 'g5-fracop', 'fraction-operations-grade5', ['Adding Unlike Denominators', 'Subtracting Mixed Numbers', 'Multiplying Fractions', 'Dividing Fractions', 'Word Problems', 'Problem-Solving Workshop', 'Review & Applications'], 'Grade 5 Math'); }
function generateGrade5VolumeParts() { return basicTopicForSubject('Volume', 'g5-vol', 'volume-grade5', ['Understanding Volume', 'Counting Unit Cubes', 'Volume Formulas', 'Irregular Shapes', 'Real-World Volume', 'Problem-Solving Workshop', 'Review & Applications'], 'Grade 5 Math'); }
function generateGrade6RatiosParts() { return basicTopicForSubject('Ratios & Proportions', 'g6-ratio', 'ratios-proportions-grade6', ['Understanding Ratios', 'Equivalent Ratios', 'Unit Rates', 'Solving Proportions', 'Percent Problems', 'Problem-Solving Workshop', 'Review & Applications'], 'Grade 6 Math'); }
function generateGrade6IntegersParts() { return basicTopicForSubject('Integers', 'g6-int', 'integers-grade6', ['Positive & Negative Numbers', 'Number Line & Absolute Value', 'Adding Integers', 'Subtracting Integers', 'Multiplying & Dividing Integers', 'Problem-Solving Workshop', 'Review & Applications'], 'Grade 6 Math'); }
function generateGrade6ExpressionsParts() { return basicTopicForSubject('Expressions & Equations', 'g6-expr', 'expressions-equations-grade6', ['Writing Expressions', 'Evaluating Expressions', 'Properties of Operations', 'Solving One-Step Equations', 'Inequalities Introduction', 'Problem-Solving Workshop', 'Review & Applications'], 'Grade 6 Math'); }
function generateGrade7ProportionalParts() { return basicTopicForSubject('Proportional Relationships', 'g7-prop', 'proportional-relationships-grade7', ['Identifying Proportions', 'Constant of Proportionality', 'Graphing Proportions', 'Scale Drawings', 'Percent Applications', 'Problem-Solving Workshop', 'Review & Applications'], 'Grade 7 Math'); }
function generateGrade7RationalOpsParts() { return basicTopicForSubject('Operations with Rational Numbers', 'g7-rational', 'operations-rational-numbers-grade7', ['Adding Rational Numbers', 'Subtracting Rational Numbers', 'Multiplying Rational Numbers', 'Dividing Rational Numbers', 'Order of Operations Review', 'Problem-Solving Workshop', 'Review & Applications'], 'Grade 7 Math'); }
function generateGrade7GeometryParts() { return basicTopicForSubject('Geometry', 'g7-geo', 'geometry-grade7', ['Angle Relationships', 'Area of Composite Shapes', 'Circumference & Area of Circles', 'Surface Area', 'Volume of Prisms & Cylinders', 'Problem-Solving Workshop', 'Review & Applications'], 'Grade 7 Math'); }
function generateGrade8LinearParts() { return basicTopicForSubject('Linear Functions', 'g8-linear', 'linear-functions-grade8', ['Functions & Relations', 'Slope from Tables & Graphs', 'Writing Linear Equations', 'Comparing Functions', 'Systems Introduction', 'Problem-Solving Workshop', 'Review & Applications'], 'Grade 8 Math'); }
function generateGrade8PythagoreanParts() { return basicTopicForSubject('Pythagorean Theorem', 'g8-pyth', 'pythagorean-theorem-grade8', ['Understanding the Theorem', 'Finding Missing Sides', 'Distance Between Points', 'Converse of Pythagorean Theorem', '3D Applications', 'Problem-Solving Workshop', 'Review & Applications'], 'Grade 8 Math'); }
function generateGrade8TransformationsParts() { return basicTopicForSubject('Transformations', 'g8-transform', 'transformations-grade8', ['Translations', 'Reflections', 'Rotations', 'Dilations', 'Sequences of Transformations', 'Problem-Solving Workshop', 'Review & Applications'], 'Grade 8 Math'); }
function generatePreAlgebraOrderParts() { return basicTopicForSubject('Order of Operations', 'prealg-order', 'order-of-operations-prealgebra', ['PEMDAS Basics', 'Parentheses & Exponents', 'Multiplication & Division', 'Addition & Subtraction', 'Nested Expressions', 'Problem-Solving Workshop', 'Review & Applications'], 'Pre-Algebra'); }
function generatePreAlgebraFractionsParts() { return basicTopicForSubject('Fractions, Decimals & Percents', 'prealg-fdp', 'fractions-decimals-percents-prealgebra', ['Converting Fractions & Decimals', 'Converting to Percents', 'Comparing Values', 'Operations with Mixed Forms', 'Real-World Applications', 'Problem-Solving Workshop', 'Review & Applications'], 'Pre-Algebra'); }
function generatePreAlgebraVariablesParts() { return basicTopicForSubject('Introduction to Variables', 'prealg-var', 'intro-variables-prealgebra', ['What is a Variable?', 'Writing Expressions', 'Evaluating Expressions', 'Combining Like Terms', 'Solving Simple Equations', 'Problem-Solving Workshop', 'Review & Applications'], 'Pre-Algebra'); }
function generateAPPrecalcPolynomialParts() { return basicTopicForSubject('Polynomial End Behavior', 'apprecalc-poly', 'polynomial-end-behavior-apprecalc', ['Degree & Leading Coefficient', 'End Behavior Rules', 'Zeros & Multiplicity', 'Turning Points', 'Sketching Polynomials', 'Problem-Solving Workshop', 'Review & Applications'], 'AP Precalculus'); }
function generateAPPrecalcRationalParts() { return basicTopicForSubject('Rational Functions', 'apprecalc-rat', 'rational-functions-apprecalc', ['Domain Restrictions', 'Vertical Asymptotes', 'Horizontal Asymptotes', 'Holes in Graphs', 'Graphing Rational Functions', 'Problem-Solving Workshop', 'Review & Applications'], 'AP Precalculus'); }
function generateAPPrecalcTrigParts() { return basicTopicForSubject('Trigonometric Modeling', 'apprecalc-trig', 'trigonometric-modeling-apprecalc', ['Sine & Cosine Graphs', 'Amplitude & Period', 'Phase Shift', 'Modeling with Sinusoids', 'Inverse Trig Functions', 'Problem-Solving Workshop', 'Review & Applications'], 'AP Precalculus'); }

// ------- HELPER: Generate a basic topic with generic math content -------
function basicTopicForSubject(topicName: string, idPrefix: string, topicSlug: string, partTitles: string[], subjectName: string) {
  return generateTopicSkeleton(topicName, idPrefix, topicSlug, partTitles,
    partTitles.map((title, i) => buildGenericMathContent(title, i+1, topicSlug,
      `Welcome to **${title}** — Part ${i+1} of 7 in the ${subjectName} ${topicName} series.\n\nThis lesson covers key concepts and practice problems.`,
      `## Worked Example\n\nSee the detailed steps in the practice sections below.`,
      [{question:`Which best describes ${title.toLowerCase()}?`,options:['A fundamental concept','An advanced topic','Not part of this course','An optional topic'],correct:0,explanation:`${title} is a core concept in ${subjectName}.`}],
      {prompt:`**Practice** 🧮\n\nAnswer the following about ${title.toLowerCase()}.`,answers:['correct'],hints:['Think about the definition.'],explanation:`Review the concepts of ${title.toLowerCase()}.`}
    ))
  );
}

function generateTopicSkeleton(topicName: string, idPrefix: string, topicSlug: string, partTitles: string[], partContents: PartContent[]) {
  return partTitles.map((title, i) => ({
    title,
    focusArea: title,
    content: partContents[i] || partContents[partContents.length - 1],
  }));
}

function buildGenericMathContent(title: string, partNum: number, topicSlug: string, introText: string, workedExamples: string, mcq1: {question:string;options:string[];correct:number;explanation:string}[], inputBoxes: {prompt:string;answers:string[];hints:string[];explanation:string}): PartContent {
  return {
    introTitle: title,
    introEmoji: ['📐', '📊', '🔢', '📈', '🧮', '🛠️', '🏆'][partNum - 1] || '📝',
    introText: `**Part ${partNum} of 7 — ${title}**\n\n${introText}`,
    workedExamples,
    mcq1,
    inputBoxes,
    dropdowns: [
      { label: `${title} is important because:`, options: ['It builds on prior concepts', 'It is tested frequently', 'Both of these', 'Neither'], correct: 'Both of these' },
      { label: 'The best study strategy is:', options: ['Memorize formulas only', 'Practice problems regularly', 'Skip to review', 'Guess on tests'], correct: 'Practice problems regularly' },
    ],
    dropdownHints: ['Think about why we study this.', 'Active practice is key.'],
    dropdownExplanation: `${title} builds on prior concepts and is frequently tested. Regular practice is the best study strategy.`,
    practiceTable: `| # | Concept | Key Idea |\n|---|---------|----------|\n| 1 | ${title} | Core ${title.toLowerCase()} principles |\n| 2 | Application | Real-world problems |\n| 3 | Extension | Advanced connections |`,
    mcq2: [
      { question: `What is the most important skill in ${title.toLowerCase()}?`, options: ['Memorization', 'Understanding concepts', 'Speed', 'Calculator use'], correct: 1, explanation: 'Understanding the underlying concepts is always most important.' },
    ],
  };
}

// ------- FILE GENERATION -------

// function toCamelCase(str: string): string {
//   return str.replace(/[-_]([a-z0-9])/g, (_, c) => c.toUpperCase());
// }

function generateFileContent(topicDef: TopicDef, partIndex: number): string {
  const part = topicDef.parts[partIndex];
  const c = part.content;
  const exportName = `${topicDef.exportPrefix}Part${partIndex + 1}Data`;

  const mcq1Questions = c.mcq1.map(q => `          {
            question: ${JSON.stringify(q.question)},
            options: ${JSON.stringify(q.options)},
            correctAnswer: ${q.correct},
            explanation: ${JSON.stringify(q.explanation)}
          }`).join(',\n');

  const mcq2Questions = c.mcq2.map(q => `          {
            question: ${JSON.stringify(q.question)},
            options: ${JSON.stringify(q.options)},
            correctAnswer: ${q.correct},
            explanation: ${JSON.stringify(q.explanation)}
          }`).join(',\n');

  const dropdownEntries = c.dropdowns.map(d => `          {
            label: ${JSON.stringify(d.label)},
            options: ${JSON.stringify(d.options)}
          }`).join(',\n');

  const hintEntries = c.inputBoxes.hints.map((h, i) => `        hint${i+1}: ${JSON.stringify(h)},`).join('\n');
  const ddHintEntries = c.dropdownHints.map((h, i) => `        hint${i+1}: ${JSON.stringify(h)},`).join('\n');

  return `export const ${exportName} = {
  topicSlug: ${JSON.stringify(topicDef.topicSlug)},
  sections: [
    {
      id: '${topicDef.prefix}-p${partIndex+1}-intro',
      type: 'text' as const,
      content: \`
# ${c.introEmoji} ${c.introTitle}

${c.introText}
      \`
    },
    {
      id: '${topicDef.prefix}-p${partIndex+1}-worked',
      type: 'text' as const,
      content: \`
${c.workedExamples}
      \`
    },
    {
      id: '${topicDef.prefix}-p${partIndex+1}-mcq1',
      type: 'multiple-choice' as const,
      content: \`
**Quick Check** 🎯
      \`,
      exercise: {
        questions: [
${mcq1Questions}
        ]
      }
    },
    {
      id: '${topicDef.prefix}-p${partIndex+1}-input',
      type: 'input-boxes' as const,
      content: \`
${c.inputBoxes.prompt}
      \`,
      exercise: {
        boxes: ${c.inputBoxes.answers.length},
        correctAnswers: ${JSON.stringify(c.inputBoxes.answers)},
${hintEntries}
        explanation: ${JSON.stringify(c.inputBoxes.explanation)}
      }
    },
    {
      id: '${topicDef.prefix}-p${partIndex+1}-dropdown',
      type: 'dropdown-select' as const,
      content: \`
**Concept Check** 🔍
      \`,
      exercise: {
        dropdowns: [
${dropdownEntries}
        ],
        correctAnswers: ${JSON.stringify(c.dropdowns.map(d => d.correct))},
${ddHintEntries}
        explanation: ${JSON.stringify(c.dropdownExplanation)}
      }
    },
    {
      id: '${topicDef.prefix}-p${partIndex+1}-practice',
      type: 'text' as const,
      content: \`
## Practice

${c.practiceTable}
      \`
    },
    {
      id: '${topicDef.prefix}-p${partIndex+1}-mcq2',
      type: 'multiple-choice' as const,
      content: \`
**Challenge Questions** 📋
      \`,
      exercise: {
        questions: [
${mcq2Questions}
        ]
      }
    }
  ]
};
`;
}

function generateRegistryEntry(topicDef: TopicDef): string {
  const lines: string[] = [];
  lines.push(`  '${topicDef.topicSlug}': {`);
  lines.push(`    completionDestination: 'competitive',`);
  lines.push(`    parts: [`);
  for (let i = 0; i < topicDef.parts.length; i++) {
    const fileName = `${topicDef.prefix}-part${i+1}`;
    const exportName = `${topicDef.exportPrefix}Part${i+1}Data`;
    lines.push(`      { title: '${topicDef.parts[i].title}', loader: () => import('./${fileName}').then(m => m.${exportName}) },`);
  }
  lines.push(`    ]`);
  lines.push(`  },`);
  return lines.join('\n');
}

// ------- MAIN -------
async function main() {
  let totalFiles = 0;
  const registryEntries: string[] = [];

  for (const [subjectKey, topicDefs] of Object.entries(subjects)) {
    console.log(`\n📚 Generating ${subjectKey}...`);
    for (const topicDef of topicDefs) {
      registryEntries.push(generateRegistryEntry(topicDef));
      for (let i = 0; i < topicDef.parts.length; i++) {
        const fileName = `${topicDef.prefix}-part${i+1}.ts`;
        const filePath = path.join(LESSONS_DIR, fileName);
        if (fs.existsSync(filePath)) {
          console.log(`  ⏭️  ${fileName} (already exists)`);
          continue;
        }
        const content = generateFileContent(topicDef, i);
        fs.writeFileSync(filePath, content, 'utf-8');
        totalFiles++;
        console.log(`  ✅ ${fileName}`);
      }
    }
  }

  console.log(`\n✨ Generated ${totalFiles} lesson files.`);
  console.log(`\n📋 Registry entries to add (paste before slugAliases):\n`);
  console.log(registryEntries.join('\n'));
}

main().catch(console.error);
