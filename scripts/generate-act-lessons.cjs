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
  return slug.replace(/-act$/, '').replace(/^act-/, '').replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
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
# ${partIdx === 0 ? '📋 ' + topicTitle : part.title}

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

// ═══════════════════════════════════════════
// ACT Prep - 20 Topics
// ═══════════════════════════════════════════
const actTopics = [
  { slug: 'act-pre-algebra-basics-act', exportBase: 'actPreAlgebra', partTopics: ['Number Properties','Fractions & Decimals','Ratios & Proportions','Percentages','Order of Operations','Problem-Solving Workshop','Review & Applications'],
    concepts: [
      ['Integers, primes, factors, multiples — these form the foundation of ACT Math','Even × odd = even; odd × odd = odd; even + odd = odd','Prime factorization helps with GCF and LCM','Divisibility rules: by 2 (even), by 3 (digit sum divisible by 3), by 5 (ends in 0 or 5)'],
      ['Convert between fractions, decimals, and percents fluently','To add/subtract fractions: find a common denominator','Multiply fractions: multiply across (numerator × numerator, denominator × denominator)','Divide fractions: multiply by the reciprocal (flip and multiply)'],
      ['Ratio a:b means for every a of one thing, there are b of another','Proportion: a/b = c/d — cross multiply to solve','Scale factors: if a model is 1:50, multiply model measurements by 50','Unit rates: simplify to "per one" (e.g., miles per hour, cost per item)'],
      ['Percent = part/whole × 100','Percent of a number: (percent/100) × number','Percent increase = (new - old)/old × 100','Discount then tax: calculate discount first, then apply tax to the reduced price'],
      ['PEMDAS: Parentheses, Exponents, Multiplication/Division (left to right), Addition/Subtraction (left to right)','Multiplication and division have equal priority — go left to right','Same for addition and subtraction — left to right','Nested parentheses: work from the innermost out']
    ] },
  { slug: 'act-algebra-equations-act', exportBase: 'actAlgebra', partTopics: ['Linear Equations','Inequalities','Systems of Equations','Absolute Value','Word Problem Translation','Problem-Solving Workshop','Review & Applications'],
    concepts: [
      ['Isolate the variable using inverse operations','Multi-step: distribute, combine like terms, then isolate','Variables on both sides: move all variable terms to one side','Check your answer by substituting back into the original equation'],
      ['Solve like equations, but flip the inequality sign when multiplying/dividing by a negative','Graph solutions on a number line: open circle for < or >, closed for ≤ or ≥','Compound inequalities: AND (intersection) vs. OR (union)','ACT may present inequalities in word problem form'],
      ['Substitution: solve one equation for a variable, plug into the other','Elimination: add/subtract equations to cancel a variable','Special cases: no solution (parallel lines) or infinite solutions (same line)','ACT tip: if the system looks complex, try elimination first'],
      ['|x| = a means x = a or x = -a','|x| < a means -a < x < a (AND compound inequality)','|x| > a means x > a or x < -a (OR compound inequality)','Always isolate the absolute value expression first before splitting into cases'],
      ['Assign variables to unknowns','\"Is\" = equals, \"more than\" = addition, \"less than\" = subtraction','\"Of\" = multiplication, \"per\" = division','Set up the equation, solve, then verify your answer makes sense in context']
    ] },
  { slug: 'act-intermediate-algebra-act', exportBase: 'actIntermAlg', partTopics: ['Quadratic Equations','Polynomial Operations','Radical Expressions','Complex Numbers','Sequences & Patterns','Problem-Solving Workshop','Review & Applications'],
    concepts: [
      ['Solve by factoring, completing the square, or the quadratic formula','Discriminant b² - 4ac: positive → 2 real roots, zero → 1, negative → complex','Vertex form y = a(x - h)² + k reveals the vertex (h, k)','Sum of roots = -b/a; Product of roots = c/a'],
      ['Add/subtract: combine like terms','Multiply: distribute (FOIL for binomials)','Factor: GCF, difference of squares, trinomial factoring, grouping','Divide: long division or synthetic division'],
      ['√(ab) = √a · √b; √(a/b) = √a/√b','Simplify by factoring out perfect squares','Rationalize denominators: multiply by √n/√n','Cannot add unlike radicals: √2 + √3 ≠ √5'],
      ['i = √(-1), i² = -1','Add/subtract: combine real and imaginary parts separately','Multiply using FOIL (remember i² = -1)','Powers of i cycle: i, -1, -i, 1, i, -1, ...'],
      ['Arithmetic sequence: constant difference d; aₙ = a₁ + (n-1)d','Geometric sequence: constant ratio r; aₙ = a₁ · r^(n-1)','Find the pattern: look at differences or ratios between terms','Sum formulas: arithmetic Sₙ = n(a₁ + aₙ)/2; geometric Sₙ = a₁(1-rⁿ)/(1-r)']
    ] },
  { slug: 'act-coordinate-geometry-act', exportBase: 'actCoordGeom', partTopics: ['Graphing Lines','Distance & Midpoint','Slope Applications','Conic Sections Basics','Transformations','Problem-Solving Workshop','Review & Applications'],
    concepts: [
      ['Slope-intercept form: y = mx + b (m = slope, b = y-intercept)','Point-slope form: y - y₁ = m(x - x₁)','Standard form: Ax + By = C','Convert between forms as needed by the ACT question'],
      ['Distance: d = √((x₂-x₁)² + (y₂-y₁)²)','Midpoint: ((x₁+x₂)/2, (y₁+y₂)/2)','Distance formula is the Pythagorean theorem in disguise','These formulas are NOT provided on the ACT — memorize them'],
      ['Slope = rise/run = (y₂-y₁)/(x₂-x₁)','Parallel lines: same slope','Perpendicular lines: slopes are negative reciprocals (m₁ · m₂ = -1)','Zero slope = horizontal line; undefined slope = vertical line'],
      ['Circle: (x-h)² + (y-k)² = r², center (h,k), radius r','Parabola: y = ax² + bx + c or y = a(x-h)² + k','Ellipse: (x-h)²/a² + (y-k)²/b² = 1','ACT rarely tests ellipses/hyperbolas in depth — focus on circles and parabolas'],
      ['Translation: shift graph horizontally or vertically','Reflection: flip over x-axis (negate y) or y-axis (negate x)','f(x) + k: up k; f(x-h): right h','|f(x)|: reflects negative y-values above x-axis']
    ] },
  { slug: 'act-plane-geometry-act', exportBase: 'actPlaneGeom', partTopics: ['Angles and Lines','Triangle Properties','Quadrilaterals & Polygons','Circles','Area & Perimeter','Problem-Solving Workshop','Review & Applications'],
    concepts: [
      ['Supplementary angles sum to 180°; complementary sum to 90°','Vertical angles are equal','Parallel lines + transversal: alternate interior angles equal, corresponding angles equal','Sum of interior angles of an n-gon: (n-2) × 180°'],
      ['Triangle angle sum = 180°','Triangle inequality: any side < sum of the other two','Pythagorean theorem: a² + b² = c² (right triangles only)','Special right triangles: 30-60-90 (1, √3, 2) and 45-45-90 (1, 1, √2)'],
      ['Parallelogram: opposite sides equal and parallel, opposite angles equal','Rectangle: all angles 90°; Rhombus: all sides equal; Square: both','Trapezoid area: ½(b₁ + b₂)h','Regular polygon: all sides and angles equal'],
      ['Area = πr²; Circumference = 2πr = πd','Arc length = (central angle/360°) × circumference','Sector area = (central angle/360°) × πr²','Inscribed angle = half the central angle (same arc)'],
      ['Rectangle: A = lw, P = 2l + 2w','Triangle: A = ½bh','Circle: A = πr², C = 2πr','Composite figures: break into simple shapes, add/subtract areas']
    ] },
  { slug: 'act-trigonometry-act', exportBase: 'actTrig', partTopics: ['Right Triangle Trig','Trig Ratios & Applications','Unit Circle','Trig Identities','Graphing Trig Functions','Problem-Solving Workshop','Review & Applications'],
    concepts: [
      ['SOH-CAH-TOA: sin = opp/hyp, cos = adj/hyp, tan = opp/adj','Always identify which angle you are working with','Inverse trig: if sin θ = 0.5, then θ = sin⁻¹(0.5) = 30°','Pythagorean theorem connects to trig: sin²θ + cos²θ = 1'],
      ['Elevation/depression angles: draw a right triangle from the scenario','Law of Sines: a/sin A = b/sin B = c/sin C','Law of Cosines: c² = a² + b² - 2ab cos C','Use Law of Sines for AAS/ASA; Law of Cosines for SAS/SSS'],
      ['Unit circle: radius 1, centered at origin','(cos θ, sin θ) are coordinates on the unit circle','Key values: 0°, 30°, 45°, 60°, 90° and multiples','Radian conversion: degrees × π/180 = radians'],
      ['Pythagorean: sin²θ + cos²θ = 1','tan θ = sin θ / cos θ','Reciprocal: csc = 1/sin, sec = 1/cos, cot = 1/tan','Double angle: sin 2θ = 2 sin θ cos θ; cos 2θ = cos²θ - sin²θ'],
      ['y = A sin(Bx + C) + D','Amplitude = |A|; Period = 2π/|B|','Phase shift = -C/B; Vertical shift = D','ACT tests basic graph reading: period, amplitude, max, min']
    ] },
  { slug: 'act-statistics-probability-act', exportBase: 'actStatProb', partTopics: ['Mean, Median, Mode','Data Displays','Counting Principles','Basic Probability','Combinations & Permutations','Problem-Solving Workshop','Review & Applications'],
    concepts: [
      ['Mean = sum/count; Median = middle value (sorted); Mode = most frequent','Weighted average: multiply each value by its weight, then divide by total weight','Effect of adding/removing values: track the sum','Range = max - min'],
      ['Bar graphs, histograms, line graphs, pie charts, stem-and-leaf plots','Read axes labels and scales carefully','Box plots: min, Q1, median, Q3, max','Histograms show frequency distribution — bars touch (no gaps)'],
      ['Fundamental counting principle: if event A has m outcomes and B has n outcomes, together they have m × n outcomes','Tree diagrams help visualize sequential events','With replacement: probabilities stay the same','Without replacement: probabilities change (dependent events)'],
      ['P(event) = favorable outcomes / total outcomes','P(A or B) = P(A) + P(B) - P(A and B)','P(A and B) = P(A) × P(B|A)','Complement: P(not A) = 1 - P(A)'],
      ['Permutation (order matters): nPr = n!/(n-r)!','Combination (order doesn\'t matter): nCr = n!/[r!(n-r)!]','Factorial: n! = n × (n-1) × ... × 2 × 1','ACT tip: ask "does order matter?" to decide which formula to use']
    ] },
  { slug: 'act-english-grammar-act', exportBase: 'actEnglishGrammar', partTopics: ['Subject-Verb Agreement','Pronoun Rules','Verb Tense','Sentence Structure','Modifiers & Parallelism','Problem-Solving Workshop','Review & Applications'],
    concepts: [
      ['Subject and verb must agree in number','Ignore prepositional phrases between subject and verb','Compound subjects with "and" = plural verb','Collective nouns (team, jury) are usually singular'],
      ['Pronouns must agree with antecedents in number, person, and gender','Avoid ambiguous pronoun references — the reader should know exactly what "it" or "they" refers to','Who = subject (he/she); Whom = object (him/her)','Its (possessive) vs. it\'s (it is)'],
      ['Keep tenses consistent unless there is a clear time shift','Past perfect (had + past participle) for events before another past event','Present perfect (has/have + past participle) for actions continuing to the present','Context clues: time words like "yesterday," "since," "by next year"'],
      ['Run-on: two independent clauses improperly joined','Fragment: lacks a subject, verb, or complete thought','Fix run-ons with: period, semicolon, comma + FANBOYS, or subordination','Semicolons connect two related independent clauses'],
      ['Modifiers should be next to what they modify','Dangling modifier: the subject being modified is missing from the sentence','Parallel structure: items in a list should have the same grammatical form','Not only... but also; either... or; neither... nor — keep both parts parallel']
    ] },
  { slug: 'act-english-rhetorical-act', exportBase: 'actRhetorical', partTopics: ['Transitions & Organization','Adding & Deleting Sentences','Sentence Placement','Conciseness','Author Purpose & Style','Problem-Solving Workshop','Review & Applications'],
    concepts: [
      ['Transitions connect ideas: addition (furthermore), contrast (however), cause-effect (therefore)','Choose transitions based on the logical relationship between sentences','Paragraph transitions: the first sentence should connect to the previous paragraph','Sequence: first, then, finally, meanwhile, subsequently'],
      ['Add a sentence if it: supports the main idea, provides relevant detail, improves flow','Delete a sentence if it: is off-topic, redundant, or disrupts the argument','The question will state the purpose — match the answer to that specific goal','Read the paragraph with and without the sentence to decide'],
      ['Topic sentences usually go at the beginning of paragraphs','Supporting details follow the topic sentence','Concluding/transitional sentences go at the end','Place sentences where they maintain chronological or logical order'],
      ['Eliminate wordiness and redundancy','\"In order to\" → \"to\"; \"the reason is because\" → \"because\"','If two choices say the same thing, pick the shorter one','OMIT is often the correct answer when a phrase adds nothing new'],
      ['Tone: formal vs. informal, objective vs. subjective','Word choice reflects purpose: informative, persuasive, narrative','\"Most effectively\" questions: match the stated goal','Consider the audience and the overall tone of the passage']
    ] },
  { slug: 'act-english-punctuation-act', exportBase: 'actPunctuation', partTopics: ['Commas','Semicolons & Colons','Apostrophes','Dashes & Parentheses','Common Punctuation Errors','Problem-Solving Workshop','Review & Applications'],
    concepts: [
      ['Comma before FANBOYS (for, and, nor, but, or, yet, so) in compound sentences','After introductory phrases/clauses','Around nonessential (nonrestrictive) information','Between items in a list of three or more (serial/Oxford comma)'],
      ['Semicolon: connects two related independent clauses (no conjunction)','Semicolon + transitional word: "She studied hard; therefore, she passed."','Colon: introduces a list, explanation, or elaboration','Before a colon: must be an independent clause'],
      ['Possessive nouns: singular add \'s (dog\'s); plural ending in s add \' (dogs\')','Contractions: apostrophe replaces missing letters (don\'t = do not)','Its vs. it\'s: its = possessive, it\'s = it is','No apostrophe for plural nouns: "The dogs ran" (not "The dog\'s ran")'],
      ['Dashes set off emphatic or explanatory information','Use a pair of dashes like parentheses — or a single dash for emphasis','Parentheses for supplementary information (less emphasis than dashes)','Be consistent: if you open with a dash, close with a dash (not a comma)'],
      ['No comma between subject and verb','No comma before "that" in essential clauses','Comma splice: two independent clauses joined by only a comma (fix with semicolon or conjunction)','Don\'t use a semicolon before FANBOYS — use a comma instead']
    ] },
  { slug: 'act-reading-main-ideas-act', exportBase: 'actReadingMain', partTopics: ['Finding the Main Idea','Supporting Details','Making Inferences','Author Purpose','Vocabulary in Context','Problem-Solving Workshop','Review & Applications'],
    concepts: [
      ['Main idea = the central point or argument of the passage','Check the first and last paragraphs — they often state or reinforce the main idea','Eliminate answers that are too specific (a detail) or too broad (beyond the passage)','Every paragraph should relate back to the main idea'],
      ['Supporting details provide evidence for the main idea','Look for specific examples, statistics, quotes, or descriptions','Detail questions often point to specific lines or paragraphs','The answer is stated in the passage — don\'t infer when the question asks for details'],
      ['Inferences: conclusions based on evidence + reasoning (not directly stated)','Must be strongly supported by the text — don\'t go too far','\"It can be inferred\" or \"the passage suggests\" = inference question','Eliminate answers that require outside knowledge or are too extreme'],
      ['Why did the author write this passage? (inform, persuade, entertain, describe)','Tone: positive, negative, neutral, critical, humorous, nostalgic, etc.','Look at word choice (diction) for clues about attitude','Author\'s purpose affects how information is presented'],
      ['Context clues: the surrounding words reveal the meaning','Substitute each answer choice — which one makes the most sense?','ACT tests common words with uncommon meanings','Read the full sentence, not just the phrase around the word']
    ] },
  { slug: 'act-reading-passage-types-act', exportBase: 'actPassageTypes', partTopics: ['Prose Fiction / Literary Narrative','Social Science','Humanities','Natural Science','Paired Passages','Problem-Solving Workshop','Review & Applications'],
    concepts: [
      ['Focus on characters, relationships, emotions, and themes','Track character motivations and how they change','Pay attention to tone and mood','Questions ask about character traits, relationships, and the narrator\'s perspective'],
      ['Factual, objective passages about psychology, sociology, economics, etc.','Focus on the argument or thesis','Look for cause-effect relationships and evidence','Questions test comprehension of the author\'s claims and supporting data'],
      ['Topics: art, music, literature, philosophy, memoir','Often personal or reflective in tone','Track the author\'s experiences and how they shape their perspective','Questions may ask about the significance of specific events or ideas'],
      ['Scientific topics: biology, chemistry, physics, earth science','Focus on the process, findings, and conclusions','Understand the experiment: hypothesis, method, results, implications','Questions test comprehension of scientific reasoning and data'],
      ['Compare and contrast two shorter passages on a related topic','Some questions ask about Passage A only, some about Passage B, some about both','Identify each author\'s position and how they agree or disagree','Relationship questions: how would Author A respond to Author B?']
    ] },
  { slug: 'act-reading-strategy-act', exportBase: 'actReadingStrat', partTopics: ['Time Management','Passage Order Strategy','Active Reading','Eliminating Wrong Answers','Question Type Recognition','Problem-Solving Workshop','Review & Applications'],
    concepts: [
      ['35 minutes for 4 passages × 10 questions = ~8.75 minutes per passage','Allocate ~3-4 minutes reading, ~4-5 minutes answering questions','Don\'t spend too long on one question — mark and move on','Wear a watch to track time (digital watches without alarms are allowed)'],
      ['Start with your strongest passage type for confidence','Some students do science or social science first (more straightforward)','Literary narrative can be time-consuming — save it if it is your weakest','Order doesn\'t affect scoring — play to your strengths'],
      ['Underline topic sentences and key transitions while reading','Note the main idea of each paragraph in the margin','Star or mark confusing sections to revisit if needed','Pay attention to "however," "although," "in contrast" — they signal shifts'],
      ['Wrong answers often: are too extreme, use passage words out of context, or are partially true','\"Always\" and \"never\" are usually wrong unless strongly supported','If two answers seem similar, one is likely a trap — find the key difference','The correct answer is always supported by specific text'],
      ['Main idea: asks about the passage as a whole','Detail: asks about specific information stated in the passage','Inference: asks what can be concluded or implied','Vocabulary: asks about word meaning in context']
    ] },
  { slug: 'act-science-data-act', exportBase: 'actScienceData', partTopics: ['Reading Data Tables','Interpreting Graphs','Identifying Trends','Comparing Data Sets','Making Predictions','Problem-Solving Workshop','Review & Applications'],
    concepts: [
      ['Read column headers and row labels first','Identify units of measurement','Find specific values by cross-referencing rows and columns','Watch for footnotes or special notations'],
      ['Read both axis labels and understand what is being plotted','Identify the independent (x-axis) and dependent (y-axis) variables','Note the scale — is it linear, logarithmic, or broken?','Multiple lines/bars: use the legend to identify each data series'],
      ['Direct relationship: both variables increase together','Inverse relationship: one increases as the other decreases','Look for patterns: linear, exponential, cyclical','Describe trends using "as X increases, Y..."'],
      ['Compare similar measurements across different experiments or conditions','Look for consistent patterns or notable differences','Control vs. experimental groups: what changed?','Identify which variable was manipulated and which was measured'],
      ['Extrapolate: extend the trend beyond the data','Interpolate: estimate between known data points','Predictions based on trends should follow the established pattern','State limitations: extrapolation is less reliable than interpolation']
    ] },
  { slug: 'act-science-experiments-act', exportBase: 'actScienceExp', partTopics: ['Experimental Design','Variables & Controls','Research Summaries','Conflicting Viewpoints','Evaluating Conclusions','Problem-Solving Workshop','Review & Applications'],
    concepts: [
      ['Independent variable: what the scientist changes','Dependent variable: what is measured/observed','Control group: the baseline for comparison','Constants: everything kept the same across trials'],
      ['Identify the IV, DV, and constants in each experiment','A good experiment changes only one variable at a time','Sample size matters: larger samples give more reliable results','Replication: repeating the experiment to verify results'],
      ['Multiple experiments on the same topic — each with a different approach','Identify what each experiment tests and how they differ','Results from one experiment may support or contradict another','Synthesize findings across experiments to draw broader conclusions'],
      ['Two or more scientists/students disagree about an explanation','Read each viewpoint carefully and identify the key claims','Find where they agree and where they differ','Questions ask: which data supports/contradicts which viewpoint?'],
      ['Does the conclusion logically follow from the data?','Look for overgeneralizations or claims beyond the evidence','Alternative explanations: could something else explain the results?','Sample bias: is the sample representative of the population?']
    ] },
  { slug: 'act-science-reasoning-act', exportBase: 'actScienceReason', partTopics: ['Scientific Method','Hypothesis Testing','Drawing Conclusions','Applying Concepts','Science Passage Strategy','Problem-Solving Workshop','Review & Applications'],
    concepts: [
      ['Observation → Question → Hypothesis → Experiment → Analysis → Conclusion','A hypothesis is testable and falsifiable','Theory: well-supported explanation; Law: describes a consistent pattern','Scientific method is iterative — new questions arise from conclusions'],
      ['Hypothesis predicts the relationship between variables','If the data supports the hypothesis, it is not "proven" — just supported','If the data contradicts the hypothesis, it must be revised or rejected','Statistical significance: is the result likely due to the variable or just chance?'],
      ['Conclusions must be based on the actual data, not assumptions','Correlation does not equal causation','Look for alternative explanations before accepting a conclusion','Valid conclusions are limited to the scope of the experiment'],
      ['Apply scientific principles to new situations or data','If you understand the concept, you can predict outcomes in novel scenarios','Connect findings to real-world applications','Analogical reasoning: this experiment is like that situation because...'],
      ['Spend 5-6 minutes per passage (7 passages total, 40 questions, 35 minutes)','Read the intro and scan figures BEFORE reading the questions','Don\'t get bogged down in technical details — focus on trends and relationships','You don\'t need outside science knowledge — everything is in the passage']
    ] },
  { slug: 'act-math-strategy-act', exportBase: 'actMathStrategy', partTopics: ['ACT Math Overview','Calculator Tips','Backsolving','Plugging In Numbers','Time Management','Problem-Solving Workshop','Review & Applications'],
    concepts: [
      ['60 questions in 60 minutes = 1 minute per question','Difficulty increases: questions 1-20 easy, 21-40 medium, 41-60 hard','Content: pre-algebra, algebra, geometry, intermediate algebra, coordinate geometry, trigonometry','Calculator allowed for ALL math questions (unlike SAT)'],
      ['Use a graphing calculator: TI-84 or similar','Graph equations to find intersections, zeros, and behavior','Use TABLE to test values quickly','Store intermediate results in memory to avoid re-calculating'],
      ['Plug answer choices into the question to see which works','Start with choice C (middle value) — if too big, try A/B; if too small, try D/E','Works great for "what value of x" questions','Saves time on complex algebra'],
      ['Replace variables with easy numbers (2, 3, 5, 10)','Solve with those numbers, then check which answer choice gives the same result','Use for percent problems, fraction problems, and abstract algebra','Avoid 0 and 1 — they can make multiple answers appear correct'],
      ['First pass: do all easy questions (1-30) quickly','Second pass: tackle medium questions (31-50)','Final pass: attempt hard questions (51-60) with remaining time','Never leave a question blank — guess if needed (no penalty)']
    ] },
  { slug: 'act-english-strategy-act', exportBase: 'actEnglishStrat', partTopics: ['ACT English Overview','Grammar vs. Rhetoric','Reading in Context','Answer Elimination','Pacing & Timing','Problem-Solving Workshop','Review & Applications'],
    concepts: [
      ['75 questions in 45 minutes = 36 seconds per question','5 passages with 15 questions each','Two main types: conventions of standard English (grammar) and production of writing (rhetoric)','Questions are embedded in the passage — read the full context'],
      ['Grammar: one objectively correct answer based on rules','Rhetoric: best answer based on effectiveness, purpose, or style','Grammar = ~51% of questions; Rhetoric = ~49%','For grammar: apply the rule; for rhetoric: consider the goal'],
      ['Always read the full sentence, not just the underlined portion','Read the sentence before and after for context','Some questions test transitions between paragraphs — read both','The correct answer must fit the tone and style of the surrounding text'],
      ['\"NO CHANGE\" is correct about 25% of the time — don\'t avoid it','Shorter answers are often correct when content is the same','Eliminate obviously wrong choices first','If two answers are grammatically correct, choose the one that fits the context better'],
      ['~36 seconds per question — move quickly','If a grammar question stumps you, go with your ear (it often sounds right)','Rhetoric questions may take longer — budget extra time','Skip and return: mark difficult questions and come back']
    ] },
  { slug: 'act-reading-science-tips-act', exportBase: 'actReadSciTips', partTopics: ['ACT Reading Overview','ACT Science Overview','Cross-Section Strategies','Managing Difficult Passages','Score Improvement Plan','Problem-Solving Workshop','Review & Applications'],
    concepts: [
      ['40 questions in 35 minutes across 4 passages','Passage types: literary narrative, social science, humanities, natural science','Questions test comprehension, inference, vocabulary, and author\'s craft','Every answer is supported by the passage text — no outside knowledge needed'],
      ['40 questions in 35 minutes across 7 passages','Three types: data representation (~30%), research summaries (~45%), conflicting viewpoints (~25%)','Focus on trends and relationships, not memorizing data','You do NOT need advanced science knowledge — it is a reading comprehension test'],
      ['Both sections reward careful reading and evidence-based reasoning','Practice skimming for main ideas and scanning for specific details','Time pressure is the biggest challenge — practice under timed conditions','Develop a consistent approach: read passage first, then answer questions'],
      ['Don\'t panic — difficult passages still have straightforward questions','Focus on what you DO understand','Look at the questions first for very dense passages','Eliminate clearly wrong answers even if you are unsure of the right one'],
      ['Take a full-length practice test to establish your baseline','Focus improvement on your weakest section for the biggest gains','Practice regularly with official ACT materials','Review every wrong answer — understand WHY you missed it']
    ] },
  { slug: 'act-test-day-strategy-act', exportBase: 'actTestDay', partTopics: ['Test Format & Registration','What to Bring','Section-by-Section Timing','Guessing Strategy','Mental Preparation','Problem-Solving Workshop','Review & Applications'],
    concepts: [
      ['4 sections: English (45 min), Math (60 min), Reading (35 min), Science (35 min) + optional Writing (40 min)','Total: ~2 hours 55 minutes (without Writing) or ~3 hours 35 minutes (with Writing)','10-minute break between Math and Reading; 5-minute break between Reading and Science','Register at act.org — check deadlines for your preferred test date'],
      ['Admission ticket (printed), valid photo ID, #2 pencils (no mechanical), approved calculator','Snacks and water for breaks (keep in your bag, not on the desk)','Watch (no smartwatch) for time tracking','Backup calculator and extra pencils — be prepared'],
      ['English: 36 sec/question — move fast, trust your instincts on grammar','Math: 60 sec/question — do easy ones first, skip and return for hard ones','Reading: 52 sec/question — read efficiently, don\'t over-analyze','Science: 52 sec/question — focus on data, not background info'],
      ['No penalty for wrong answers — NEVER leave a question blank','If completely stuck, pick one letter and use it consistently for all guesses','Educated guessing: eliminate 1-2 wrong answers, then guess from the rest','Last 2 minutes of each section: answer every remaining question'],
      ['Get a good night\'s sleep — at least 8 hours','Eat a balanced breakfast with protein and complex carbs','Arrive early — rushing increases anxiety','Deep breaths between sections to reset your focus']
    ] },
];

// Generate parts from concepts
actTopics.forEach(topic => {
  topic.parts = topic.partTopics.map((title, i) => {
    const c = topic.concepts[Math.min(i, topic.concepts.length - 1)];
    return {
      title,
      textSections: [
        { body: `${c[0]}.\n\n${c[1]}.` },
        { body: `**Key Insight:** ${c[2]}.\n\n**ACT Tip:** ${c[3]}.` }
      ],
      mcQuestions: [
        { q: `Which statement best describes ${c[0].split(':')[0].toLowerCase() || title.toLowerCase()}?`,
          opts: [c[0].split(':')[0] + ' is a key concept for ACT ' + (topic.slug.includes('reading') || topic.slug.includes('english') || topic.slug.includes('rhetorical') || topic.slug.includes('punctuation') ? 'English/Reading' : topic.slug.includes('science') ? 'Science' : 'Math'),
                 c[1].replace(/'/g, ''),
                 'This concept is not tested on the ACT',
                 'None of these apply to ACT preparation'],
          correct: 0, explanation: escapeStr(c[0]) },
        { q: `What is a key strategy for ${title.toLowerCase()}?`,
          opts: [escapeStr(c[2]),
                 'Skip these questions entirely on the ACT',
                 'These are only on the optional Writing section',
                 'This topic appears only on the SAT'],
          correct: 0, explanation: escapeStr(c[2]) },
      ],
      dropdowns: {
        items: [
          { label: `Key concept for ${title}:`, options: [c[0].substring(0, 50), c[1].substring(0, 50), 'Not applicable', 'None of these'], correct: c[0].substring(0, 50) },
          { label: 'Strategy tip:', options: [c[2].substring(0, 50), 'Guess randomly', 'Skip the question', 'Use a different test'], correct: c[2].substring(0, 50) },
        ],
        hints: [`Think about ${title.toLowerCase()}`, 'Consider the best ACT strategy'],
        explanation: `${escapeStr(c[0])}. ${escapeStr(c[2])}.`
      }
    };
  });
});

// Generate files
let count = 0;
actTopics.forEach(topic => {
  for (let i = 0; i < 7; i++) {
    const filename = `act-${topic.slug}-part${i + 1}.ts`;
    const filepath = path.join(OUT_DIR, filename);
    const content = generateFile(topic, i);
    fs.writeFileSync(filepath, content);
    count++;
  }
});

console.log(`Generated ${count} ACT Prep lesson files for ${actTopics.length} topics`);
