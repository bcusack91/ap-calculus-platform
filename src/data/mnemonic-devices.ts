/**
 * Mnemonic Devices Database
 * Item #160: Mnemonic devices for flashcards and study aids
 * Covers major subjects: Calculus, Chemistry, Biology, Physics, Trig, Algebra
 */

export interface MnemonicDevice {
  id: string
  subject: string
  topic: string
  mnemonic: string
  meaning: string
  explanation: string
}

export const MNEMONIC_DEVICES: MnemonicDevice[] = [
  // --- AP Calculus ---
  {
    id: 'calc-limits',
    subject: 'AP Calculus',
    topic: 'Limits',
    mnemonic: 'BOBO BOTN EATS DC',
    meaning: 'Horizontal asymptote rules for rational functions',
    explanation: 'Bigger On Bottom → y = 0. Bigger On Top → No HA. Exponents Are The Same → Divide Coefficients.',
  },
  {
    id: 'calc-derivatives-trig',
    subject: 'AP Calculus',
    topic: 'Trig Derivatives',
    mnemonic: '"Positive Santa Claus, Negative Co-workers"',
    meaning: 'Derivatives of trig functions: sin→cos, tan→sec², sec→sec·tan are positive; cos→−sin, cot→−csc², csc→−csc·cot are negative',
    explanation: 'Functions starting with "co-" have negative derivatives.',
  },
  {
    id: 'calc-integration-parts',
    subject: 'AP Calculus',
    topic: 'Integration by Parts',
    mnemonic: 'LIATE',
    meaning: 'Order for choosing u in integration by parts',
    explanation: 'Logarithmic, Inverse trig, Algebraic, Trig, Exponential — pick u from left to right.',
  },
  {
    id: 'calc-product-rule',
    subject: 'AP Calculus',
    topic: 'Product Rule',
    mnemonic: '"Left d-Right plus Right d-Left"',
    meaning: 'd/dx[f·g] = f·g\' + g·f\'',
    explanation: 'First function times derivative of second, plus second function times derivative of first.',
  },
  {
    id: 'calc-quotient-rule',
    subject: 'AP Calculus',
    topic: 'Quotient Rule',
    mnemonic: '"Lo d-Hi minus Hi d-Lo, all over Lo-Lo"',
    meaning: 'd/dx[f/g] = (g·f\' − f·g\') / g²',
    explanation: 'Bottom times derivative of top, minus top times derivative of bottom, all over bottom squared.',
  },
  {
    id: 'calc-mvt',
    subject: 'AP Calculus',
    topic: 'Mean Value Theorem',
    mnemonic: '"The MVT guarantees a matching slope"',
    meaning: 'If f is continuous on [a,b] and differentiable on (a,b), there exists c where f\'(c) = (f(b)−f(a))/(b−a)',
    explanation: 'At some point the instantaneous rate of change equals the average rate of change.',
  },
  // --- AP Chemistry ---
  {
    id: 'chem-diatomics',
    subject: 'AP Chemistry',
    topic: 'Diatomic Molecules',
    mnemonic: 'I Have No Bright Or Clever Friends (I Bring Cookies For Hank)',
    meaning: 'The 7 diatomic elements: I₂, H₂, N₂, Br₂, O₂, Cl₂, F₂',
    explanation: 'These elements always exist as diatomic molecules in their natural state.',
  },
  {
    id: 'chem-redox',
    subject: 'AP Chemistry',
    topic: 'Oxidation/Reduction',
    mnemonic: 'OIL RIG',
    meaning: 'Oxidation Is Loss, Reduction Is Gain (of electrons)',
    explanation: 'Oxidation = losing electrons; Reduction = gaining electrons.',
  },
  {
    id: 'chem-cation',
    subject: 'AP Chemistry',
    topic: 'Ions',
    mnemonic: 'A cat has paws (paws-itive)',
    meaning: 'Cations are positive ions',
    explanation: 'Cat-ion = positive. An-ion = negative (the "n" looks like a minus sign).',
  },
  {
    id: 'chem-activity-series',
    subject: 'AP Chemistry',
    topic: 'Activity Series',
    mnemonic: 'Lazy Kangaroos Can Not Make A Zoo In The Late PM Hours',
    meaning: 'Li, K, Ca, Na, Mg, Al, Zn, In (Fe), Sn (Ti), Pb, (H), Cu — metals in decreasing activity',
    explanation: 'More active metals replace less active metals in single replacement reactions.',
  },
  {
    id: 'chem-acid-base',
    subject: 'AP Chemistry',
    topic: 'Strong Acids',
    mnemonic: 'HClO₄ Happy Clams Happily Nibble on Salty Hamburgers In Homes',
    meaning: 'The 7 strong acids: HClO₄, HCl, HBr, HNO₃, H₂SO₄, HI, HF (only first 6 are strong)',
    explanation: 'HCl, HBr, HI, HNO₃, H₂SO₄, HClO₄ are the 6 strong acids to memorize.',
  },
  // --- AP Biology ---
  {
    id: 'bio-taxonomy',
    subject: 'AP Biology',
    topic: 'Taxonomy',
    mnemonic: 'Dear King Philip Came Over For Good Spaghetti',
    meaning: 'Domain, Kingdom, Phylum, Class, Order, Family, Genus, Species',
    explanation: 'The order of biological classification from broadest to most specific.',
  },
  {
    id: 'bio-mitosis',
    subject: 'AP Biology',
    topic: 'Mitosis Phases',
    mnemonic: 'IPMAT (I Passed My Anatomy Test)',
    meaning: 'Interphase, Prophase, Metaphase, Anaphase, Telophase',
    explanation: 'The phases of mitosis in order.',
  },
  {
    id: 'bio-amino-acids',
    subject: 'AP Biology',
    topic: 'Essential Amino Acids',
    mnemonic: 'PVT TIM HALL',
    meaning: 'Phenylalanine, Valine, Threonine, Tryptophan, Isoleucine, Methionine, Histidine, Arginine, Leucine, Lysine',
    explanation: 'The 10 essential amino acids humans cannot synthesize.',
  },
  {
    id: 'bio-photosynthesis',
    subject: 'AP Biology',
    topic: 'Photosynthesis',
    mnemonic: '"Light reactions make ATP and NADPH; Calvin cycle makes G3P (sugar)"',
    meaning: 'Light-dependent → thylakoid → ATP + NADPH. Light-independent (Calvin) → stroma → G3P',
    explanation: 'Light reactions in thylakoid membranes, Calvin cycle in stroma.',
  },
  {
    id: 'bio-dna-rna',
    subject: 'AP Biology',
    topic: 'DNA vs RNA bases',
    mnemonic: '"GCAT for DNA, GCAU for RNA — U replace T"',
    meaning: 'DNA uses Thymine, RNA uses Uracil',
    explanation: 'Both use Guanine, Cytosine, Adenine. DNA has Thymine; RNA substitutes Uracil.',
  },
  // --- Trigonometry / Pre-Calculus ---
  {
    id: 'trig-sohcahtoa',
    subject: 'Pre-Calculus',
    topic: 'Trig Ratios',
    mnemonic: 'SOH-CAH-TOA',
    meaning: 'Sine = Opposite/Hypotenuse, Cosine = Adjacent/Hypotenuse, Tangent = Opposite/Adjacent',
    explanation: 'The three primary trigonometric ratios in a right triangle.',
  },
  {
    id: 'trig-unit-circle',
    subject: 'Pre-Calculus',
    topic: 'Unit Circle',
    mnemonic: '"All Students Take Calculus"',
    meaning: 'Quadrant signs: All positive (Q1), Sine positive (Q2), Tangent positive (Q3), Cosine positive (Q4)',
    explanation: 'Starting from Q1 and going counter-clockwise.',
  },
  {
    id: 'trig-inverse',
    subject: 'Pre-Calculus',
    topic: 'Reciprocal Trig',
    mnemonic: '"Flip to the Co" — sec = 1/cos, csc = 1/sin, cot = 1/tan',
    meaning: 'Reciprocal trig functions',
    explanation: 'Secant is reciprocal of cosine, cosecant of sine, cotangent of tangent.',
  },
  // --- Physics ---
  {
    id: 'phys-kinematics',
    subject: 'AP Physics',
    topic: 'Kinematics Equations',
    mnemonic: '"VUE VATS DUX" (v=u+at, v²=u²+2as, s=ut+½at²)',
    meaning: 'The three kinematic equations for constant acceleration',
    explanation: 'v = u + at, v² = u² + 2as, s = ut + ½at² (where u = initial velocity).',
  },
  {
    id: 'phys-resistors',
    subject: 'AP Physics',
    topic: 'Circuits',
    mnemonic: '"Series adds, Parallel parks"',
    meaning: 'Series: R_total = R₁+R₂. Parallel: 1/R_total = 1/R₁ + 1/R₂',
    explanation: 'In series, resistances add directly. In parallel, reciprocals add.',
  },
  {
    id: 'phys-waves',
    subject: 'AP Physics',
    topic: 'Electromagnetic Spectrum',
    mnemonic: 'Roy G. Biv',
    meaning: 'Red, Orange, Yellow, Green, Blue, Indigo, Violet',
    explanation: 'Colors of visible light in order of decreasing wavelength.',
  },
  {
    id: 'phys-newtons-laws',
    subject: 'AP Physics',
    topic: 'Newton\'s Laws',
    mnemonic: '"Inertia, F=ma, Action-Reaction" → 1-2-3',
    meaning: 'First: objects at rest stay at rest. Second: F=ma. Third: equal and opposite reactions.',
    explanation: 'The three laws of motion in order.',
  },
  // --- Algebra ---
  {
    id: 'alg-foil',
    subject: 'Algebra',
    topic: 'Binomial Multiplication',
    mnemonic: 'FOIL',
    meaning: 'First, Outer, Inner, Last',
    explanation: '(a+b)(c+d) = ac + ad + bc + bd — multiply in FOIL order.',
  },
  {
    id: 'alg-pemdas',
    subject: 'Algebra',
    topic: 'Order of Operations',
    mnemonic: 'PEMDAS — "Please Excuse My Dear Aunt Sally"',
    meaning: 'Parentheses, Exponents, Multiplication/Division, Addition/Subtraction',
    explanation: 'Order of operations: evaluate from left to right within same precedence.',
  },
  {
    id: 'alg-slope',
    subject: 'Algebra',
    topic: 'Slope-Intercept Form',
    mnemonic: '"y = mx + b: m is the mountain (slope), b is the base (y-intercept)"',
    meaning: 'y = mx + b where m = slope and b = y-intercept',
    explanation: 'm tells you rise/run, b tells you where the line crosses the y-axis.',
  },
  {
    id: 'alg-difference-of-squares',
    subject: 'Algebra',
    topic: 'Factoring',
    mnemonic: '"Same, Different, Square — a²-b² = (a+b)(a-b)"',
    meaning: 'Difference of squares factoring pattern',
    explanation: 'First terms same, signs different. Both terms must be perfect squares.',
  },
  // --- Statistics ---
  {
    id: 'stats-normal',
    subject: 'AP Statistics',
    topic: 'Normal Distribution',
    mnemonic: '"68-95-99.7 Rule" (Empirical Rule)',
    meaning: '68% within 1 SD, 95% within 2 SD, 99.7% within 3 SD of the mean',
    explanation: 'For normally distributed data, these percentages fall within standard deviations.',
  },
  {
    id: 'stats-correlation',
    subject: 'AP Statistics',
    topic: 'Correlation vs Causation',
    mnemonic: '"Correlation does not imply causation — ice cream and drowning"',
    meaning: 'Two variables can be correlated without one causing the other',
    explanation: 'Ice cream sales and drowning deaths are correlated (both rise in summer) but neither causes the other.',
  },
  {
    id: 'stats-hypothesis',
    subject: 'AP Statistics',
    topic: 'Hypothesis Testing',
    mnemonic: '"If p is low, H₀ must go"',
    meaning: 'When p-value < significance level α, reject the null hypothesis H₀',
    explanation: 'Small p-value = strong evidence against the null hypothesis.',
  },
  // --- SAT ---
  {
    id: 'sat-grammar',
    subject: 'SAT',
    topic: 'Comma Splices',
    mnemonic: '"FANBOYS" — For, And, Nor, But, Or, Yet, So',
    meaning: 'Coordinating conjunctions that can join two independent clauses with a comma',
    explanation: 'Only FANBOYS conjunctions can fix a comma splice: ", and" ", but" etc.',
  },
  {
    id: 'sat-math-special-triangles',
    subject: 'SAT',
    topic: 'Special Right Triangles',
    mnemonic: '"45-45-90: x, x, x√2" and "30-60-90: x, x√3, 2x"',
    meaning: 'Side ratios for the two special right triangles',
    explanation: '45-45-90 gives equal legs with hypotenuse × √2. 30-60-90: short, long (×√3), hypotenuse (×2).',
  },
]
