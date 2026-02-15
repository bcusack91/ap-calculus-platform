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
  return slug.replace(/-sat$/, '').replace(/^sat-/, '').replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
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
# ${partIdx === 0 ? '📝 ' + topicTitle : part.title}

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
// SAT Prep - 20 Topics
// ═══════════════════════════════════════════
const satTopics = [
  { slug: 'sat-linear-equations-sat', exportBase: 'satLinearEquations', partTopics: ['Linear Equations Basics','Solving Multi-Step Equations','Linear Inequalities','Systems of Linear Equations','Word Problem Setup','Problem-Solving Workshop','Review & Applications'],
    concepts: [
      ['A linear equation has the form ax + b = c, where x is the variable','To solve, isolate x by performing inverse operations on both sides','The solution is the value that makes the equation true','Check your answer by substituting back into the original equation'],
      ['Multi-step equations require multiple operations to isolate x','Always simplify each side first: distribute and combine like terms','Apply inverse operations in reverse order of operations','Example: 3(2x - 4) + 5 = 23 → 6x - 12 + 5 = 23 → 6x = 30 → x = 5'],
      ['Inequalities use <, >, ≤, ≥ instead of =','Solve like equations, but flip the inequality when multiplying/dividing by a negative','Graph solutions on a number line','Compound inequalities: -3 < 2x + 1 ≤ 7 — solve both parts'],
      ['A system has two or more equations with the same variables','Substitution: solve one equation for a variable, plug into the other','Elimination: add/subtract equations to eliminate a variable','No solution: parallel lines (same slope, different intercept); infinite solutions: same line'],
      ['Read the problem carefully — identify what x represents','Translate words to math: "is" = equals, "more than" = addition, "of" = multiplication','Set up the equation, then solve','Always check: does your answer make sense in context?']
    ] },
  { slug: 'sat-quadratic-equations-sat', exportBase: 'satQuadratics', partTopics: ['Quadratic Form & Factoring','Completing the Square','The Quadratic Formula','Graphing Parabolas','Quadratic Word Problems','Problem-Solving Workshop','Review & Applications'],
    concepts: [
      ['Standard form: ax² + bx + c = 0','Factoring: find two numbers that multiply to ac and add to b','Zero product property: if (x - r)(x - s) = 0, then x = r or x = s','Special patterns: difference of squares a² - b² = (a+b)(a-b), perfect square trinomials'],
      ['Completing the square: x² + bx + (b/2)² = (x + b/2)²','Move the constant to the other side first','Add (b/2)² to both sides','Vertex form: a(x - h)² + k where (h, k) is the vertex'],
      ['x = (-b ± √(b² - 4ac)) / (2a)','Discriminant b² - 4ac determines the number of real solutions','b² - 4ac > 0: two real solutions; = 0: one (repeated); < 0: no real solutions','SAT Tip: the discriminant alone can answer "how many solutions?" questions'],
      ['Parabola opens up if a > 0, down if a < 0','Vertex: x = -b/(2a), then find y','Axis of symmetry: x = -b/(2a)','x-intercepts (roots): set y = 0 and solve; y-intercept: set x = 0'],
      ['Projectile motion: h(t) = -16t² + v₀t + h₀ (feet) or h(t) = -4.9t² + v₀t + h₀ (meters)','Maximum height: find the vertex','When does it hit the ground? Set h(t) = 0 and solve','Area problems: set up quadratic from length/width relationships']
    ] },
  { slug: 'sat-functions-graphs-sat', exportBase: 'satFunctions', partTopics: ['Function Notation & Evaluation','Domain and Range','Interpreting Graphs','Transformations of Functions','Function Composition','Problem-Solving Workshop','Review & Applications'],
    concepts: [
      ['f(x) means "the output of function f when the input is x"','To evaluate f(3): substitute 3 everywhere you see x','f(a) = 0 means a is a zero (x-intercept) of the function','If f(x) = 2x + 1, then f(3) = 2(3) + 1 = 7'],
      ['Domain: all possible input (x) values','Range: all possible output (y) values','Restrictions: no division by zero, no square root of negatives (for reals)','From a graph: domain is the horizontal extent, range is the vertical extent'],
      ['Increasing: graph goes up left to right; decreasing: goes down','Maximum/minimum: highest/lowest point on the graph','Intercepts: where the graph crosses the axes','Rate of change = (change in y)/(change in x) = slope between two points'],
      ['f(x) + k: shifts up k units; f(x) - k: shifts down k','f(x - h): shifts right h units; f(x + h): shifts left h','af(x): vertical stretch (a > 1) or compression (0 < a < 1)','f(-x): reflects over y-axis; -f(x): reflects over x-axis'],
      ['(f ∘ g)(x) = f(g(x)): apply g first, then f','Find g(x) first, then use that result as input to f','Domain of f ∘ g: x must be in domain of g, AND g(x) must be in domain of f','Example: f(x) = x², g(x) = x + 1, then f(g(x)) = (x+1)²']
    ] },
  { slug: 'sat-exponents-radicals-sat', exportBase: 'satExponents', partTopics: ['Exponent Rules','Negative & Zero Exponents','Radical Expressions','Rational Exponents','Scientific Notation','Problem-Solving Workshop','Review & Applications'],
    concepts: [
      ['Product rule: aᵐ · aⁿ = aᵐ⁺ⁿ','Quotient rule: aᵐ / aⁿ = aᵐ⁻ⁿ','Power rule: (aᵐ)ⁿ = aᵐⁿ','Power of a product: (ab)ⁿ = aⁿbⁿ'],
      ['a⁰ = 1 for any a ≠ 0','a⁻ⁿ = 1/aⁿ — move to denominator and make positive','(a/b)⁻ⁿ = (b/a)ⁿ — flip the fraction','Simplify step by step: apply rules, then convert negative exponents'],
      ['√a = a^(1/2); ∛a = a^(1/3); ⁿ√a = a^(1/n)','Simplify radicals by factoring out perfect squares/cubes','Rationalize denominators: multiply by √a/√a','Add/subtract radicals: only combine like radicals (same radicand)'],
      ['a^(m/n) = ⁿ√(aᵐ) = (ⁿ√a)ᵐ','Convert between radical and exponent form','Apply exponent rules to rational exponents','Example: 8^(2/3) = (∛8)² = 2² = 4'],
      ['Scientific notation: a × 10ⁿ where 1 ≤ a < 10','Large numbers: move decimal left, positive exponent','Small numbers: move decimal right, negative exponent','Multiply/divide: handle coefficients and powers of 10 separately']
    ] },
  { slug: 'sat-polynomials-factoring-sat', exportBase: 'satPolynomials', partTopics: ['Polynomial Operations','Factoring Techniques','Polynomial Division','Remainder & Factor Theorems','Polynomial Graphs','Problem-Solving Workshop','Review & Applications'],
    concepts: [
      ['Add/subtract polynomials: combine like terms','Multiply polynomials: distribute each term (FOIL for binomials)','Degree of a polynomial: highest power of the variable','Leading coefficient: coefficient of the highest-degree term'],
      ['GCF first: always factor out the greatest common factor','Difference of squares: a² - b² = (a + b)(a - b)','Trinomials: x² + bx + c = (x + p)(x + q) where pq = c and p + q = b','Grouping: for 4-term polynomials, group in pairs and factor each'],
      ['Long division: divide polynomials like long division with numbers','Synthetic division: shortcut when dividing by (x - c)','The result: dividend = quotient × divisor + remainder','Useful for simplifying rational expressions'],
      ['Remainder Theorem: when P(x) is divided by (x - c), the remainder is P(c)','Factor Theorem: (x - c) is a factor of P(x) if and only if P(c) = 0','Use to test potential rational roots','If P(c) = 0, then c is a root and (x - c) is a factor'],
      ['End behavior: determined by leading term (degree and sign of coefficient)','Even degree with positive leading coefficient: both ends up','Odd degree with positive leading coefficient: left down, right up','Number of real zeros ≤ degree; turns ≤ degree - 1']
    ] },
  { slug: 'sat-ratios-proportions-sat', exportBase: 'satRatios', partTopics: ['Ratios and Proportions','Percentages','Unit Conversion','Direct & Inverse Variation','Rate Problems','Problem-Solving Workshop','Review & Applications'],
    concepts: [
      ['Ratio: comparison of two quantities (a:b or a/b)','Proportion: two equal ratios, a/b = c/d','Cross-multiply to solve: ad = bc','Part-to-whole vs. part-to-part ratios: context matters on the SAT'],
      ['Percent = (part/whole) × 100','Percent change = ((new - old)/old) × 100','Successive percent changes: multiply the multipliers (1 + r₁)(1 + r₂)...','Common SAT trap: 20% increase then 20% decrease ≠ original (it is 96% of original)'],
      ['Multiply by conversion factors as fractions','Units should cancel: (mi/hr) × (hr/min) → mi/min','Dimensional analysis: track units through the calculation','SAT often uses unit conversion in multi-step problems'],
      ['Direct variation: y = kx (y increases as x increases proportionally)','Inverse variation: y = k/x (y decreases as x increases)','k is the constant of variation','Find k from one data point, then use it to find unknowns'],
      ['Rate = distance/time or work/time','Combined rates: add rates when working together','d = rt (distance = rate × time)','Average speed = total distance / total time (NOT average of speeds)']
    ] },
  { slug: 'sat-geometry-angles-sat', exportBase: 'satGeometry', partTopics: ['Lines and Angles','Triangles','Circles','Coordinate Geometry','Volume & Surface Area','Problem-Solving Workshop','Review & Applications'],
    concepts: [
      ['Vertical angles are equal; linear pair = 180°','Parallel lines cut by a transversal: corresponding angles equal, alternate interior angles equal','Sum of angles in a triangle = 180°','Exterior angle = sum of two remote interior angles'],
      ['Pythagorean theorem: a² + b² = c² (right triangles)','Special right triangles: 30-60-90 (x, x√3, 2x) and 45-45-90 (x, x, x√2)','Triangle inequality: sum of any two sides > third side','Similar triangles: corresponding sides proportional, angles equal'],
      ['Area = πr²; Circumference = 2πr','Arc length = (θ/360) × 2πr; Sector area = (θ/360) × πr²','Central angle = arc measure','Inscribed angle = half the intercepted arc'],
      ['Distance: d = √((x₂-x₁)² + (y₂-y₁)²)','Midpoint: ((x₁+x₂)/2, (y₁+y₂)/2)','Slope: m = (y₂-y₁)/(x₂-x₁)','Parallel lines: same slope; Perpendicular lines: slopes are negative reciprocals'],
      ['Rectangular prism: V = lwh, SA = 2(lw + lh + wh)','Cylinder: V = πr²h, SA = 2πr² + 2πrh','Cone: V = (1/3)πr²h','Sphere: V = (4/3)πr³, SA = 4πr²']
    ] },
  { slug: 'sat-data-statistics-sat', exportBase: 'satDataStats', partTopics: ['Mean, Median, Mode','Standard Deviation & Spread','Data Displays','Scatterplots & Line of Best Fit','Probability Basics','Problem-Solving Workshop','Review & Applications'],
    concepts: [
      ['Mean (average): sum of values / number of values','Median: middle value when sorted (average of two middle if even count)','Mode: most frequent value','SAT tip: adding/removing values changes mean — track the sum'],
      ['Range = max - min','Standard deviation measures spread from the mean','Larger SD = more spread out; smaller SD = more clustered','SAT won\'t ask you to calculate SD, but you must compare or interpret it'],
      ['Histograms: bars show frequency for intervals (no gaps)','Box plots: show min, Q1, median, Q3, max','IQR = Q3 - Q1 (middle 50% of data)','Outliers: typically more than 1.5 × IQR below Q1 or above Q3'],
      ['Scatterplot: shows relationship between two variables','Line of best fit: approximates the trend','Positive correlation: both increase together; negative: one up, one down','r (correlation coefficient): closer to ±1 = stronger linear relationship'],
      ['Probability = favorable outcomes / total outcomes','P(A or B) = P(A) + P(B) - P(A and B)','P(A and B) = P(A) × P(B) if independent','Conditional probability: P(A|B) = P(A and B) / P(B)']
    ] },
  { slug: 'sat-exponential-functions-sat', exportBase: 'satExponentialFn', partTopics: ['Exponential Growth & Decay','Exponential Equations','Exponential vs. Linear','Compound Interest','Interpreting Exponential Models','Problem-Solving Workshop','Review & Applications'],
    concepts: [
      ['Growth: f(x) = a · bˣ where b > 1','Decay: f(x) = a · bˣ where 0 < b < 1','a = initial value (when x = 0)','Growth rate r: b = 1 + r; Decay rate r: b = 1 - r'],
      ['If bases are equal: aˣ = aʸ implies x = y','Take log of both sides when bases differ','ln(aˣ) = x · ln(a)','Solve: 2ˣ = 32 → 2ˣ = 2⁵ → x = 5'],
      ['Linear: constant rate of change (adding the same amount)','Exponential: constant percent change (multiplying by the same factor)','Linear grows by addition; exponential grows by multiplication','Exponential eventually overtakes linear growth'],
      ['A = P(1 + r/n)^(nt) — compound interest formula','P = principal, r = annual rate, n = compounds per year, t = years','Continuous compounding: A = Pe^(rt)','SAT focuses on interpreting parts of the formula'],
      ['y-intercept: initial value in context','Base: growth/decay factor per time period','Exponent: often involves time','Doubling time: solve a · 2ᵗ/ᵈ or use the formula d = ln(2)/ln(b)']
    ] },
  { slug: 'sat-circles-trig-sat', exportBase: 'satCirclesTrig', partTopics: ['Circle Equations','Arc Length & Sectors','Right Triangle Trig','Unit Circle Basics','Trig on the SAT','Problem-Solving Workshop','Review & Applications'],
    concepts: [
      ['Standard form: (x - h)² + (y - k)² = r², center (h, k), radius r','General form: x² + y² + Dx + Ey + F = 0 — complete the square to convert','SAT may give general form and ask for center or radius','Two circles: compare centers and radii to determine relationship'],
      ['Arc length = (θ/360°) × 2πr (degrees) or s = rθ (radians)','Sector area = (θ/360°) × πr² (degrees) or A = ½r²θ (radians)','Convert: radians = degrees × π/180','SAT gives formulas at the start — know when to use them'],
      ['sin θ = opposite/hypotenuse; cos θ = adjacent/hypotenuse; tan θ = opposite/adjacent','SOH-CAH-TOA','Complementary angles: sin(x) = cos(90° - x)','Pythagorean identity: sin²θ + cos²θ = 1'],
      ['Unit circle: radius = 1, x = cos θ, y = sin θ','Key angles: 0°, 30°, 45°, 60°, 90° and their radian equivalents','sin(30°) = ½, cos(30°) = √3/2, tan(30°) = √3/3','sin(45°) = cos(45°) = √2/2, tan(45°) = 1'],
      ['SAT trig is straightforward — mostly right triangle and basic identities','Know radian/degree conversion','Understand sin/cos graphs: period, amplitude','Most SAT trig = setting up the right ratio from a diagram']
    ] },
  { slug: 'sat-complex-numbers-sat', exportBase: 'satComplex', partTopics: ['Imaginary Numbers','Complex Number Operations','Complex Number Applications','Powers of i','Complex Conjugates','Problem-Solving Workshop','Review & Applications'],
    concepts: [
      ['i = √(-1), so i² = -1','√(-a) = i√a for a > 0','Complex number: a + bi where a is real part, b is imaginary part','Pure imaginary: bi (when a = 0); real: a (when b = 0)'],
      ['Add/subtract: combine real parts and imaginary parts separately','(a + bi) + (c + di) = (a+c) + (b+d)i','Multiply using FOIL: (a + bi)(c + di) = ac + adi + bci + bdi² = (ac - bd) + (ad + bc)i','Remember: i² = -1, so replace i² with -1'],
      ['Complex solutions come in conjugate pairs: a + bi and a - bi','If the discriminant b² - 4ac < 0, the quadratic has complex roots','x = (-b ± i√(4ac - b²)) / (2a)','Every polynomial of degree n has exactly n roots (counting complex and repeated)'],
      ['i¹ = i, i² = -1, i³ = -i, i⁴ = 1, then the pattern repeats','To find iⁿ: divide n by 4, use the remainder','Remainder 0 → 1, remainder 1 → i, remainder 2 → -1, remainder 3 → -i','Example: i²³ → 23 ÷ 4 = 5 remainder 3 → i²³ = -i'],
      ['Conjugate of a + bi is a - bi','(a + bi)(a - bi) = a² + b² (always real and positive)','Use conjugates to divide complex numbers: multiply numerator and denominator by the conjugate of the denominator','Rationalizing: (3 + 2i)/(1 - i) × (1 + i)/(1 + i)']
    ] },
  { slug: 'sat-reading-evidence-sat', exportBase: 'satReadingEvidence', partTopics: ['Finding Main Ideas','Textual Evidence Questions','Author Purpose & Tone','Vocabulary in Context','Paired Passages','Problem-Solving Workshop','Review & Applications'],
    concepts: [
      ['Main idea = what the passage is mostly about','Look at the first and last paragraphs for the thesis','Eliminate answers that are too broad, too narrow, or not supported','The main idea is supported by the details in the passage — not the other way around'],
      ['"Which choice provides the best evidence for the answer to the previous question?"','Work backwards: check each line reference against the previous answer','Evidence must directly support the claim, not just relate to the topic','These are paired with command-of-evidence questions — tackle them together'],
      ['Purpose: why did the author write this? (inform, persuade, entertain, analyze)','Tone: the author\'s attitude (objective, critical, enthusiastic, skeptical)','Look at word choice (diction) for tone clues','Don\'t confuse the author\'s tone with a character\'s or speaker\'s tone'],
      ['Context clues: look at the surrounding sentence for meaning','Replace the word with each answer choice — which makes the most sense?','SAT tests secondary meanings of common words (e.g., "address" = deal with, not a street address)','Read 3-5 words before and after the target word'],
      ['Compare/contrast the two passages','Questions may ask: how would Author 1 respond to Author 2?','Find shared topics but differing perspectives','Some questions target just Passage 1 or Passage 2; others ask about both']
    ] },
  { slug: 'sat-grammar-conventions-sat', exportBase: 'satGrammar', partTopics: ['Subject-Verb Agreement','Pronoun Usage','Verb Tense & Mood','Sentence Structure','Punctuation Rules','Problem-Solving Workshop','Review & Applications'],
    concepts: [
      ['The subject and verb must agree in number (singular/plural)','Ignore words between the subject and verb (prepositional phrases, appositives)','Compound subjects with "and" take plural verbs','Collective nouns (team, group) are typically singular'],
      ['Pronouns must agree with antecedents in number and gender','Ambiguous pronoun reference: unclear which noun the pronoun refers to','Who/whom: who = subject, whom = object (try replacing with he/him)','Its vs. it\'s: its = possessive, it\'s = it is/it has'],
      ['Keep verb tenses consistent within a passage unless there\'s a time shift','Past perfect (had + past participle): action completed before another past action','Subjunctive mood: "If I were" (contrary to fact), "It is essential that she be present"','SAT loves testing tense consistency and unnecessary tense shifts'],
      ['Run-on sentences: two independent clauses without proper punctuation','Fix with: period, semicolon, comma + FANBOYS conjunction, or subordination','Fragment: missing subject or verb, or a dependent clause standing alone','Parallel structure: items in a list or comparison should have the same grammatical form'],
      ['Comma: before FANBOYS in compound sentences, after introductory elements, around nonessential clauses','Semicolon: connects two related independent clauses (no conjunction needed)','Colon: introduces a list, explanation, or elaboration (independent clause before it)','Dash: sets off a parenthetical or emphatic statement — can replace commas or colons for emphasis']
    ] },
  { slug: 'sat-expression-ideas-sat', exportBase: 'satExpression', partTopics: ['Conciseness & Redundancy','Combining Sentences','Transitions & Flow','Logical Sequence','Rhetorical Synthesis','Problem-Solving Workshop','Review & Applications'],
    concepts: [
      ['Avoid redundancy: don\'t say the same thing twice in different words','Shorter is usually better on the SAT (if meaning is preserved)','Eliminate wordy phrases: "due to the fact that" → "because"','If two answers convey the same meaning, choose the more concise one'],
      ['Combine sentences to improve flow and eliminate repetition','Use relative clauses (who, which, that), appositives, or participial phrases','Maintain the meaning and emphasis of the original sentences','Shorter combined version is usually preferred'],
      ['Transitions show relationships: addition, contrast, cause/effect, sequence','However/nevertheless = contrast; Furthermore/moreover = addition','Therefore/consequently = cause-effect; Similarly/likewise = comparison','Choose transitions based on the logical relationship between ideas'],
      ['Place sentences where they logically belong in the paragraph','Topic sentence usually goes first; conclusion sentence goes last','Add or delete sentences based on whether they support the main point','Ask: does this sentence fit the flow and purpose of the paragraph?'],
      ['Rhetorical synthesis: combine notes/bullet points into effective writing','Match the purpose: inform, argue, compare, etc.','Choose the option that best accomplishes the stated goal','Consider audience and tone when selecting the best synthesis']
    ] },
  { slug: 'sat-word-problems-sat', exportBase: 'satWordProblems', partTopics: ['Translating Words to Math','Rate & Work Problems','Mixture Problems','Percent Problems','Multi-Step Strategy','Problem-Solving Workshop','Review & Applications'],
    concepts: [
      ['"Is" or "equals" → =; "more than" or "added to" → +; "less than" → −','\"Times\" or \"of\" → ×; \"per\" → ÷','Let x = the unknown; write an equation, then solve','Always define your variable clearly and check units'],
      ['Distance = Rate × Time (d = rt)','Work rate: if A does a job in a hours, rate = 1/a per hour','Combined work: 1/a + 1/b = 1/t where t is time together','Two objects moving: determine if approaching (subtract speeds) or separating (add speeds)'],
      ['Concentration problems: amount of substance = concentration × volume','Mixture equation: c₁v₁ + c₂v₂ = c_final × v_total','Track what stays constant (usually the amount of pure substance)','Table method: organize given info into a table before writing equations'],
      ['Part = percent × whole → amount = (p/100) × total','Percent increase: new = original × (1 + r/100)','Percent decrease: new = original × (1 - r/100)','Finding percent change: ((new - original)/original) × 100'],
      ['Read the entire problem before starting','Identify what you\'re solving for','Set up equations, then solve systematically','Check: does your answer make sense? Are units correct?']
    ] },
  { slug: 'sat-passport-advanced-math-sat', exportBase: 'satPassportAdv', partTopics: ['Manipulating Expressions','Nonlinear Equations','Function Behavior','Isolating Variables','SAT Advanced Math Strategy','Problem-Solving Workshop','Review & Applications'],
    concepts: [
      ['Factor, expand, and simplify algebraic expressions','Rewrite expressions in equivalent forms to reveal information','Common factor, complete the square, use identities','SAT may ask "which is equivalent to..." — transform step by step'],
      ['Quadratic, polynomial, radical, rational, and absolute value equations','Extraneous solutions: always check answers in the original equation','Radical equations: isolate the radical, square both sides, check','Rational equations: multiply by LCD, solve, exclude values that make denominator 0'],
      ['Increasing/decreasing behavior from graphs','End behavior: what happens as x → ∞ or x → -∞','Zeros: where f(x) = 0 (x-intercepts)','Maximum and minimum values from graphs or vertex form'],
      ['Rearrange formulas to solve for any variable','Treat all other variables as constants','Apply the same algebraic steps as solving equations','Example: A = πr²h, solve for h → h = A/(πr²)'],
      ['Passport to Advanced Math = ~28% of SAT Math','Focus on creating, solving, and interpreting nonlinear expressions','Know how to move between forms of quadratics','Read graphs carefully — the SAT tests interpretation more than computation']
    ] },
  { slug: 'sat-problem-solving-data-sat', exportBase: 'satProbSolvData', partTopics: ['Reading Tables & Graphs','Two-Way Tables','Inference & Prediction','Margin of Error','Survey & Experiment Design','Problem-Solving Workshop','Review & Applications'],
    concepts: [
      ['Read axis labels and units carefully','Identify trends: increasing, decreasing, or constant','Interpolate (between data points) and extrapolate (beyond data)','Bar graphs vs. line graphs vs. pie charts: each shows different things'],
      ['Two-way tables organize data by two categorical variables','Joint frequency: a specific cell value','Marginal frequency: row or column totals','Conditional probability: focus on one row or column only'],
      ['Make predictions using the line of best fit','The prediction is most reliable within the data range (interpolation)','Extrapolation (beyond the data) is less reliable','Correlation ≠ causation — SAT tests this concept directly'],
      ['Margin of error: ± value around a sample statistic','Larger sample → smaller margin of error','Confidence interval: sample statistic ± margin of error','95% confidence: if we repeated the survey, ~95% of intervals would contain the true value'],
      ['Random sampling: every member has an equal chance of being selected','Random assignment: participants are randomly placed in treatment groups','Observational study: no treatment applied — can show association but not causation','Experiment with random assignment: CAN establish causation']
    ] },
  { slug: 'sat-calculator-strategy-sat', exportBase: 'satCalcStrategy', partTopics: ['Calculator Section Overview','When to Use (and Skip) the Calculator','Graphing Calculator Tricks','Backsolving & Plugging In','Time Management','Problem-Solving Workshop','Review & Applications'],
    concepts: [
      ['SAT Math: Section 3 (no calculator, 25 min, 20 questions) and Section 4 (calculator, 55 min, 38 questions)','No-calculator section tests mental math and algebraic fluency','Calculator section: more complex, multi-step, and data problems','Know your calculator: practice with the same one you\'ll use on test day'],
      ['Use calculator for: complex arithmetic, graphing to check, table of values','Skip calculator for: simple algebra, factoring, conceptual questions','Mental math is often faster than typing into calculator','Rule of thumb: if you can solve in under 30 seconds by hand, don\'t reach for the calculator'],
      ['Graph functions to find intersections (solutions to systems)','Use TABLE feature to test values quickly','Store intermediate values in memory','Graph y = left side and y = right side to solve equations'],
      ['Backsolving: plug answer choices into the question to see which works','Start with choice B or C (middle values) to narrow down','Plugging in: replace variables with simple numbers to test','Pick numbers that are easy to work with: 2, 3, 5, 10, 100'],
      ['Average time per question: ~75 seconds (no-calc), ~87 seconds (calc)','Do easy questions first — every question is worth the same','Mark and skip questions that seem time-consuming, return later','Last 5 minutes: answer every remaining question (no penalty for guessing)']
    ] },
  { slug: 'sat-reading-writing-strategy-sat', exportBase: 'satRWStrategy', partTopics: ['Reading Section Overview','Passage Strategy','Evidence-Based Questions','Writing Section Overview','Grammar vs. Rhetoric','Problem-Solving Workshop','Review & Applications'],
    concepts: [
      ['65 minutes, 52 questions across 5 passages (or 4 passages + 1 paired set)','Passage types: literature, history/social studies (2), science (2)','Skim-then-answer or read-carefully approaches — find what works for you','Questions roughly follow passage order — use this to your advantage'],
      ['Read the blurb (italicized intro) — it gives context','Underline topic sentences and key transitions as you read','Main idea questions: what is the passage MOSTLY about?','Don\'t bring outside knowledge — answers must be supported by the passage text'],
      ['Best evidence questions: which lines support your previous answer?','Command of evidence: cite specific text to support a conclusion','Work these in pairs with the preceding question','Eliminate choices where the evidence doesn\'t match the claim'],
      ['35 minutes, 44 questions across 4 passages','Standard English Conventions: grammar, punctuation, sentence structure','Expression of Ideas: development, organization, effective language use','Read the full sentence (and surrounding sentences) before answering'],
      ['Grammar questions: one answer is objectively correct (rules-based)','Rhetoric questions: "most effectively" — subjective but still have a best answer','For rhetoric: consider purpose, audience, and what the question is asking','If the question asks "which best accomplishes [goal]," match the goal precisely']
    ] },
  { slug: 'sat-test-day-strategy-sat', exportBase: 'satTestDay', partTopics: ['Test Format & Timing','Process of Elimination','Guessing Strategy','Common Traps & Pitfalls','Score Improvement Plan','Problem-Solving Workshop','Review & Applications'],
    concepts: [
      ['Total: ~3 hours + breaks','Reading: 65 min, 52 questions; Writing: 35 min, 44 questions','Math No-Calc: 25 min, 20 questions; Math Calculator: 55 min, 38 questions','Bring: admission ticket, photo ID, #2 pencils, approved calculator, snacks for breaks'],
      ['Eliminate wrong answers before guessing','On math: estimate to eliminate impossible answers','On reading: eliminate answers that are too extreme, unsupported, or opposite','Usually 2 answers are clearly wrong, leaving a 50/50 guess'],
      ['No penalty for wrong answers — ALWAYS guess (never leave blank)','If stuck, eliminate what you can, then guess from remaining choices','On grid-in: any correct form is accepted (1/2 = .5 = 0.5)','Letter of the day: if completely stuck, consistently guess the same letter'],
      ['Misreading the question: "NOT" or "EXCEPT" or "must be true" vs. "could be true"','Calculation errors: double-check by substituting your answer back in','Picking the most tempting wrong answer (designed to catch common mistakes)','Running out of time: pace yourself with a watch, don\'t get stuck on one question'],
      ['Take a diagnostic test first — know your baseline','Focus on your weakest areas for the biggest score gains','Practice with official College Board materials','Simulate test conditions: timed, quiet, full-length practice tests']
    ] },
];

// Generate parts from concepts
satTopics.forEach(topic => {
  topic.parts = topic.partTopics.map((title, i) => {
    const c = topic.concepts[Math.min(i, topic.concepts.length - 1)];
    return {
      title,
      textSections: [
        { body: `${c[0]}.\n\n${c[1]}.` },
        { body: `**Key Insight:** ${c[2]}.\n\n**SAT Tip:** ${c[3]}.` }
      ],
      mcQuestions: [
        { q: `Which statement best describes ${c[0].split(':')[0].toLowerCase() || title.toLowerCase()}?`,
          opts: [c[0].split(':')[0] + ' is a fundamental concept in SAT ' + (topic.slug.includes('reading') || topic.slug.includes('grammar') || topic.slug.includes('expression') || topic.slug.includes('writing') ? 'Reading & Writing' : 'Math'),
                 c[1].replace(/'/g, ''),
                 'This concept is not tested on the SAT',
                 'None of these apply to SAT preparation'],
          correct: 0, explanation: escapeStr(c[0]) },
        { q: `What is a key strategy for ${title.toLowerCase()}?`,
          opts: [escapeStr(c[2]),
                 'Skip these questions entirely on the SAT',
                 'These are only in the no-calculator section',
                 'This topic appears only on the PSAT'],
          correct: 0, explanation: escapeStr(c[2]) },
      ],
      dropdowns: {
        items: [
          { label: `Key concept for ${title}:`, options: [c[0].substring(0, 50), c[1].substring(0, 50), 'Not applicable', 'None of these'], correct: c[0].substring(0, 50) },
          { label: 'Strategy tip:', options: [c[2].substring(0, 50), 'Guess randomly', 'Skip the question', 'Use a different test'], correct: c[2].substring(0, 50) },
        ],
        hints: [`Think about ${title.toLowerCase()}`, 'Consider the best SAT strategy'],
        explanation: `${escapeStr(c[0])}. ${escapeStr(c[2])}.`
      }
    };
  });
});

// Generate files
let count = 0;
satTopics.forEach(topic => {
  for (let i = 0; i < 7; i++) {
    const filename = `sat-${topic.slug}-part${i + 1}.ts`;
    const filepath = path.join(OUT_DIR, filename);
    const content = generateFile(topic, i);
    fs.writeFileSync(filepath, content);
    count++;
  }
});

console.log(`Generated ${count} SAT Prep lesson files for ${satTopics.length} topics`);
