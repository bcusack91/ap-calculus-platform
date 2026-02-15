const fs = require('fs');

const satTopics = [
  { slug: 'sat-linear-equations-sat', exportBase: 'satLinearEquations', parts: ['Linear Equations Basics','Multi-Step Equations','Variables on Both Sides','Systems of Equations','Modeling with Equations','Problem-Solving Workshop','Review & Applications'] },
  { slug: 'sat-quadratic-equations-sat', exportBase: 'satQuadratics', parts: ['Quadratic Fundamentals','Factoring','Quadratic Formula','Vertex Form','Graphing Parabolas','Problem-Solving Workshop','Review & Applications'] },
  { slug: 'sat-functions-graphs-sat', exportBase: 'satFunctions', parts: ['Function Notation','Interpreting Graphs','Domain & Range','Transformations','Function Composition','Problem-Solving Workshop','Review & Applications'] },
  { slug: 'sat-exponents-radicals-sat', exportBase: 'satExponents', parts: ['Laws of Exponents','Negative & Zero Exponents','Radicals & Roots','Rational Exponents','Simplifying Expressions','Problem-Solving Workshop','Review & Applications'] },
  { slug: 'sat-polynomials-factoring-sat', exportBase: 'satPolynomials', parts: ['Polynomial Basics','Factoring Techniques','Special Products','Polynomial Division','Zeros & Roots','Problem-Solving Workshop','Review & Applications'] },
  { slug: 'sat-ratios-proportions-sat', exportBase: 'satRatios', parts: ['Ratios & Rates','Proportional Reasoning','Percentages','Unit Conversion','Scale & Modeling','Problem-Solving Workshop','Review & Applications'] },
  { slug: 'sat-geometry-angles-sat', exportBase: 'satGeometry', parts: ['Lines & Angles','Triangle Properties','Circle Properties','Area & Volume','Coordinate Geometry','Problem-Solving Workshop','Review & Applications'] },
  { slug: 'sat-data-statistics-sat', exportBase: 'satDataStats', parts: ['Mean, Median, Mode','Data Displays','Interpreting Tables','Standard Deviation','Statistical Inference','Problem-Solving Workshop','Review & Applications'] },
  { slug: 'sat-exponential-functions-sat', exportBase: 'satExponentialFn', parts: ['Exponential Growth','Exponential Decay','Compound Interest','Graphing Exponentials','Exponential Equations','Problem-Solving Workshop','Review & Applications'] },
  { slug: 'sat-circles-trig-sat', exportBase: 'satCirclesTrig', parts: ['Circle Equations','Arc Length & Sectors','Right Triangle Trig','Unit Circle Basics','Trig Applications','Problem-Solving Workshop','Review & Applications'] },
  { slug: 'sat-complex-numbers-sat', exportBase: 'satComplex', parts: ['Imaginary Unit','Complex Arithmetic','Complex Conjugates','Quadratics & Complex Roots','Powers of i','Problem-Solving Workshop','Review & Applications'] },
  { slug: 'sat-reading-evidence-sat', exportBase: 'satReadingEvidence', parts: ['Evidence-Based Reading','Main Idea & Purpose','Inference Questions','Vocabulary in Context','Command of Evidence','Problem-Solving Workshop','Review & Applications'] },
  { slug: 'sat-grammar-conventions-sat', exportBase: 'satGrammar', parts: ['Subject-Verb Agreement','Pronoun Clarity','Punctuation Rules','Sentence Structure','Modifier Placement','Problem-Solving Workshop','Review & Applications'] },
  { slug: 'sat-expression-ideas-sat', exportBase: 'satExpression', parts: ['Effective Language Use','Conciseness','Tone & Style','Transitions','Sentence Combining','Problem-Solving Workshop','Review & Applications'] },
  { slug: 'sat-word-problems-sat', exportBase: 'satWordProblems', parts: ['Translating Words to Math','Rate Problems','Mixture Problems','Age & Number Problems','Multi-Step Word Problems','Problem-Solving Workshop','Review & Applications'] },
  { slug: 'sat-passport-advanced-math-sat', exportBase: 'satPassportAdv', parts: ['Advanced Equations','Function Analysis','Nonlinear Systems','Polynomial Manipulation','Exponential & Radical Equations','Problem-Solving Workshop','Review & Applications'] },
  { slug: 'sat-problem-solving-data-sat', exportBase: 'satProbSolvData', parts: ['Data Analysis','Scatterplots','Probability','Two-Way Tables','Statistical Modeling','Problem-Solving Workshop','Review & Applications'] },
  { slug: 'sat-calculator-strategy-sat', exportBase: 'satCalcStrategy', parts: ['Calculator Overview','Graphing to Solve','Using Tables','Storing Values','Calculator vs. Mental Math','Problem-Solving Workshop','Review & Applications'] },
  { slug: 'sat-reading-writing-strategy-sat', exportBase: 'satRWStrategy', parts: ['Section Overview','Time Management','Passage Strategy','Answer Elimination','Evidence Pairing','Problem-Solving Workshop','Review & Applications'] },
  { slug: 'sat-test-day-strategy-sat', exportBase: 'satTestDay', parts: ['Test Format','What to Bring','Section Timing','Guessing Strategy','Mental Preparation','Problem-Solving Workshop','Review & Applications'] },
];

const actTopics = [
  { slug: 'act-pre-algebra-basics-act', exportBase: 'actPreAlgebra', parts: ['Number Properties','Fractions & Decimals','Ratios & Proportions','Percentages','Order of Operations','Problem-Solving Workshop','Review & Applications'] },
  { slug: 'act-algebra-equations-act', exportBase: 'actAlgebra', parts: ['Linear Equations','Inequalities','Systems of Equations','Absolute Value','Word Problem Translation','Problem-Solving Workshop','Review & Applications'] },
  { slug: 'act-intermediate-algebra-act', exportBase: 'actIntermAlg', parts: ['Quadratic Equations','Polynomial Operations','Radical Expressions','Complex Numbers','Sequences & Patterns','Problem-Solving Workshop','Review & Applications'] },
  { slug: 'act-coordinate-geometry-act', exportBase: 'actCoordGeom', parts: ['Graphing Lines','Distance & Midpoint','Slope Applications','Conic Sections Basics','Transformations','Problem-Solving Workshop','Review & Applications'] },
  { slug: 'act-plane-geometry-act', exportBase: 'actPlaneGeom', parts: ['Angles and Lines','Triangle Properties','Quadrilaterals & Polygons','Circles','Area & Perimeter','Problem-Solving Workshop','Review & Applications'] },
  { slug: 'act-trigonometry-act', exportBase: 'actTrig', parts: ['Right Triangle Trig','Trig Ratios & Applications','Unit Circle','Trig Identities','Graphing Trig Functions','Problem-Solving Workshop','Review & Applications'] },
  { slug: 'act-statistics-probability-act', exportBase: 'actStatProb', parts: ['Mean, Median, Mode','Data Displays','Counting Principles','Basic Probability','Combinations & Permutations','Problem-Solving Workshop','Review & Applications'] },
  { slug: 'act-english-grammar-act', exportBase: 'actEnglishGrammar', parts: ['Subject-Verb Agreement','Pronoun Rules','Verb Tense','Sentence Structure','Modifiers & Parallelism','Problem-Solving Workshop','Review & Applications'] },
  { slug: 'act-english-rhetorical-act', exportBase: 'actRhetorical', parts: ['Transitions & Organization','Adding & Deleting Sentences','Sentence Placement','Conciseness','Author Purpose & Style','Problem-Solving Workshop','Review & Applications'] },
  { slug: 'act-english-punctuation-act', exportBase: 'actPunctuation', parts: ['Commas','Semicolons & Colons','Apostrophes','Dashes & Parentheses','Common Punctuation Errors','Problem-Solving Workshop','Review & Applications'] },
  { slug: 'act-reading-main-ideas-act', exportBase: 'actReadingMain', parts: ['Finding the Main Idea','Supporting Details','Making Inferences','Author Purpose','Vocabulary in Context','Problem-Solving Workshop','Review & Applications'] },
  { slug: 'act-reading-passage-types-act', exportBase: 'actPassageTypes', parts: ['Prose Fiction / Literary Narrative','Social Science','Humanities','Natural Science','Paired Passages','Problem-Solving Workshop','Review & Applications'] },
  { slug: 'act-reading-strategy-act', exportBase: 'actReadingStrat', parts: ['Time Management','Passage Order Strategy','Active Reading','Eliminating Wrong Answers','Question Type Recognition','Problem-Solving Workshop','Review & Applications'] },
  { slug: 'act-science-data-act', exportBase: 'actScienceData', parts: ['Reading Data Tables','Interpreting Graphs','Identifying Trends','Comparing Data Sets','Making Predictions','Problem-Solving Workshop','Review & Applications'] },
  { slug: 'act-science-experiments-act', exportBase: 'actScienceExp', parts: ['Experimental Design','Variables & Controls','Research Summaries','Conflicting Viewpoints','Evaluating Conclusions','Problem-Solving Workshop','Review & Applications'] },
  { slug: 'act-science-reasoning-act', exportBase: 'actScienceReason', parts: ['Scientific Method','Hypothesis Testing','Drawing Conclusions','Applying Concepts','Science Passage Strategy','Problem-Solving Workshop','Review & Applications'] },
  { slug: 'act-math-strategy-act', exportBase: 'actMathStrategy', parts: ['ACT Math Overview','Calculator Tips','Backsolving','Plugging In Numbers','Time Management','Problem-Solving Workshop','Review & Applications'] },
  { slug: 'act-english-strategy-act', exportBase: 'actEnglishStrat', parts: ['ACT English Overview','Grammar vs. Rhetoric','Reading in Context','Answer Elimination','Pacing & Timing','Problem-Solving Workshop','Review & Applications'] },
  { slug: 'act-reading-science-tips-act', exportBase: 'actReadSciTips', parts: ['ACT Reading Overview','ACT Science Overview','Cross-Section Strategies','Managing Difficult Passages','Score Improvement Plan','Problem-Solving Workshop','Review & Applications'] },
  { slug: 'act-test-day-strategy-act', exportBase: 'actTestDay', parts: ['Test Format & Registration','What to Bring','Section-by-Section Timing','Guessing Strategy','Mental Preparation','Problem-Solving Workshop','Review & Applications'] },
];

function generateEntries(topics, prefix) {
  let output = '';
  for (const t of topics) {
    output += `  '${t.slug}': {\n    parts: [\n`;
    for (let i = 0; i < 7; i++) {
      const p = i + 1;
      const filename = `${prefix}-${t.slug}-part${p}`;
      const exportName = `${t.exportBase}Part${p}Data`;
      output += `      { title: '${t.parts[i]}', loader: () => import('./${filename}').then(m => m.${exportName}) },\n`;
    }
    output += `    ],\n  },\n`;
  }
  return output;
}

const satEntries = generateEntries(satTopics, 'sat');
const actEntries = generateEntries(actTopics, 'act');

const combined = `  // ═══════════════════════════════════════════
  // SAT Prep — 20 Topics
  // ═══════════════════════════════════════════
${satEntries}  // ═══════════════════════════════════════════
  // ACT Prep — 20 Topics
  // ═══════════════════════════════════════════
${actEntries}`;

fs.writeFileSync('/tmp/sat-act-registry.txt', combined);
console.log(`Generated registry entries for ${satTopics.length} SAT + ${actTopics.length} ACT = ${satTopics.length + actTopics.length} topics`);
