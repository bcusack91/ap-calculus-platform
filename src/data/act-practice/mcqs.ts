import type { MCQItem } from '@/components/FullLengthPracticeExam'

/**
 * ACT — full-length practice (representative scaled-down 2025+ Enhanced ACT format).
 * Real test: English 50 (35 min), Math 45 (50 min), Reading 36 (40 min), Science 40 (40 min, optional).
 * This practice exam: English 16, Math 18, Reading 13, Science 13 = 60 MCQs, ~64 min total.
 */

export const ENGLISH_MCQS: MCQItem[] = [
  { topic: 'grammar', question: 'Choose the correct sentence: "Each of the students _____ required to submit the assignment."', options: ['are', 'is', 'were', 'have been'], correctAnswer: 1, explanation: '"Each" is singular, so the verb must be "is."' },
  { topic: 'transitions', question: 'Which transition best connects: "The experiment failed. _____, the team redesigned their approach."', options: ['Moreover', 'Consequently', 'Similarly', 'Meanwhile'], correctAnswer: 1, explanation: '"Consequently" shows cause-and-effect: the failure led to the redesign.' },
  { topic: 'grammar', question: 'Identify the error: "Running through the park, the trees were beautiful."', options: ['No error', 'Dangling modifier', 'Subject-verb agreement', 'Pronoun reference'], correctAnswer: 1, explanation: 'The participial phrase "Running through the park" modifies "trees," but trees can\'t run — this is a dangling modifier.' },
  { topic: 'grammar', question: '"The data shows that temperatures has risen steadily." What needs correction?', options: ['"data shows" should be "data show"', '"has risen" should be "have risen"', 'Both A and B', 'No correction needed'], correctAnswer: 2, explanation: '"Data" is plural (datum is singular), so it requires "show" and "have risen."' },
  { topic: 'rhetoric', question: 'Which is most concise? "Due to the fact that it was raining, we stayed inside."', options: ['Original is best', 'Because it was raining, we stayed inside.', 'Owing to the fact of rain, we remained indoors.', 'It was a rainy day and therefore we made the decision to stay inside.'], correctAnswer: 1, explanation: '"Because" is more concise than "due to the fact that" without losing meaning.' },
  { topic: 'punctuation', question: 'Which sentence uses a semicolon correctly?', options: ['She likes math; and science.', 'She likes math; she also enjoys science.', 'She likes; math and science.', 'She; likes math and science.'], correctAnswer: 1, explanation: 'A semicolon connects two independent clauses: "She likes math" and "she also enjoys science."' },
  { topic: 'grammar', question: '"Neither the teacher nor the students _____ ready." Fill in the blank.', options: ['is', 'was', 'were', 'has been'], correctAnswer: 2, explanation: 'With "neither...nor," the verb agrees with the closer subject ("students"), which is plural → "were."' },
  { topic: 'usage', question: 'Which word correctly completes the sentence? "The team lost _____ motivation after the loss."', options: ['there', 'their', "they're", 'its'], correctAnswer: 1, explanation: '"Their" is the possessive pronoun referring to "the team."' },
  { topic: 'rhetoric', question: 'A rhetorical question in an essay primarily serves to:', options: ['Demand information', 'Engage the reader and provoke thought', 'Show uncertainty', 'Introduce a counterargument'], correctAnswer: 1, explanation: 'Rhetorical questions engage readers and encourage them to think about the writer\'s point.' },
  { topic: 'grammar', question: 'Which sentence contains a misplaced modifier?', options: ['Walking to school, I saw a bird.', 'I almost drove my car into every mailbox.', 'I drove my car into almost every mailbox.', 'Both B and C have misplaced modifiers.'], correctAnswer: 1, explanation: '"I almost drove" suggests I almost drove (but didn\'t). "I drove into almost every mailbox" is the intended meaning.' },
  { topic: 'punctuation', question: 'Choose the correctly punctuated sentence.', options: ['My brother who lives in Boston is visiting.', 'My brother, who lives in Boston, is visiting.', 'My brother, who lives in Boston is visiting.', 'My brother who lives in Boston, is visiting.'], correctAnswer: 1, explanation: 'A nonrestrictive relative clause must be set off by commas on BOTH sides.' },
  { topic: 'usage', question: 'Choose the best word: "The new policy will _____ how much overtime employees can work."', options: ['effect', 'affect', 'effecting', 'affected'], correctAnswer: 1, explanation: '"Affect" (verb) = to influence. "Effect" is usually a noun (a result).' },
  { topic: 'rhetoric', question: 'Which revision improves clarity? "There are many people who believe that exercise is beneficial."', options: ['Original is best.', 'Many people believe exercise is beneficial.', 'It is believed by many people that exercise has benefits.', 'Believing in exercise being beneficial is held by many.'], correctAnswer: 1, explanation: '"Many people believe exercise is beneficial" is direct, active, and concise.' },
  { topic: 'punctuation', question: 'Which list is punctuated correctly?', options: ['Apples oranges, and pears.', 'Apples, oranges and pears.', 'Apples, oranges, and pears.', 'Apples; oranges; and pears.'], correctAnswer: 2, explanation: 'The Oxford (serial) comma is preferred on the ACT: "Apples, oranges, and pears."' },
  { topic: 'grammar', question: 'Identify the verb-tense error: "By the time we arrived, the movie already started."', options: ['No error', '"started" should be "had started"', '"arrived" should be "had arrived"', '"already" should be removed'], correctAnswer: 1, explanation: 'A past action completed before another past action requires past perfect: "had already started."' },
  { topic: 'rhetoric', question: 'Which sentence is best to OPEN a paragraph that explains the causes of climate change?', options: ['Climate change is bad.', 'Although solutions exist, the planet is warming.', 'Climate change has multiple interrelated causes, including greenhouse-gas emissions, deforestation, and industrial pollution.', 'I learned about climate change in school.'], correctAnswer: 2, explanation: 'A topic sentence should preview the paragraph\'s scope. Option C names the causes that the paragraph will explain.' },
]

export const MATH_MCQS: MCQItem[] = [
  { topic: 'algebra', question: 'If $3x + 7 = 22$, what is $x$?', options: ['3', '5', '7', '15'], correctAnswer: 1, explanation: '$3x = 15$, so $x = 5$.' },
  { topic: 'coordinate-geometry', question: 'What is the slope of the line passing through $(1, 3)$ and $(4, 15)$?', options: ['3', '4', '5', '6'], correctAnswer: 1, explanation: 'slope $= (15-3)/(4-1) = 12/3 = 4$.' },
  { topic: 'geometry', question: 'In a right triangle with legs 5 and 12, what is the hypotenuse?', options: ['13', '15', '17', '7'], correctAnswer: 0, explanation: '$c = \\sqrt{5^2 + 12^2} = \\sqrt{169} = 13$.' },
  { topic: 'arithmetic', question: 'What is 30% of 250?', options: ['50', '75', '80', '100'], correctAnswer: 1, explanation: '$0.30 \\times 250 = 75$.' },
  { topic: 'algebra', question: 'If $f(x) = x^2 - 4x + 3$, what are the zeros?', options: ['$x = 1, 3$', '$x = -1, -3$', '$x = 2, 6$', '$x = 1, -3$'], correctAnswer: 0, explanation: '$f(x) = (x-1)(x-3)=0 \\Rightarrow x = 1$ or $x = 3$.' },
  { topic: 'geometry', question: 'What is the area of a circle with diameter 10?', options: ['$25\\pi$', '$10\\pi$', '$100\\pi$', '$50\\pi$'], correctAnswer: 0, explanation: 'Radius $= 5$, so $A = \\pi r^2 = 25\\pi$.' },
  { topic: 'exponents', question: 'Simplify: $(2^3)(2^4)$', options: ['$2^7$', '$2^{12}$', '$4^7$', '$4^{12}$'], correctAnswer: 0, explanation: 'Same base ⇒ add exponents: $2^{3+4} = 2^7$.' },
  { topic: 'statistics', question: 'The median of $\\{3, 7, 9, 12, 15\\}$ is:', options: ['7', '9', '9.2', '12'], correctAnswer: 1, explanation: 'The median is the middle value of the ordered set: 9.' },
  { topic: 'trigonometry', question: 'What is $\\sin(30°)$?', options: ['$\\sqrt{3}/2$', '$1/2$', '$\\sqrt{2}/2$', '$1$'], correctAnswer: 1, explanation: '$\\sin(30°) = 1/2$ (standard 30-60-90 triangle).' },
  { topic: 'arithmetic', question: 'A shirt costs $40 and is 25% off. The sale price is:', options: ['$10', '$15', '$30', '$35'], correctAnswer: 2, explanation: 'Discount $= 0.25 \\times 40 = \\$10$. Sale price $= \\$30$.' },
  { topic: 'algebra', question: 'Solve for $x$: $\\frac{2x-3}{5} = 7$', options: ['$x = 17$', '$x = 19$', '$x = 16$', '$x = 18$'], correctAnswer: 1, explanation: '$2x - 3 = 35 \\Rightarrow 2x = 38 \\Rightarrow x = 19$.' },
  { topic: 'geometry', question: 'A rectangle has perimeter 28 and length 8. What is the width?', options: ['4', '6', '7', '12'], correctAnswer: 1, explanation: '$P = 2(l+w) \\Rightarrow 28 = 2(8 + w) \\Rightarrow w = 6$.' },
  { topic: 'algebra', question: 'Which is the equation of a line with slope $-2$ passing through $(3, 1)$?', options: ['$y = -2x + 7$', '$y = -2x - 5$', '$y = 2x + 7$', '$y = -2x + 1$'], correctAnswer: 0, explanation: 'Point-slope: $y - 1 = -2(x - 3) \\Rightarrow y = -2x + 7$.' },
  { topic: 'probability', question: 'A bag has 4 red, 6 blue, and 10 green marbles. What is the probability of drawing a red marble?', options: ['$1/5$', '$1/4$', '$1/10$', '$2/5$'], correctAnswer: 0, explanation: '$P(\\text{red}) = 4/(4+6+10) = 4/20 = 1/5$.' },
  { topic: 'trigonometry', question: 'In a right triangle, $\\cos\\theta = 3/5$. What is $\\sin\\theta$?', options: ['$3/5$', '$4/5$', '$5/3$', '$5/4$'], correctAnswer: 1, explanation: 'Pythagorean identity: $\\sin^2\\theta = 1 - 9/25 = 16/25 \\Rightarrow \\sin\\theta = 4/5$ (acute angle).' },
  { topic: 'algebra', question: 'If $2^x = 32$, what is $x$?', options: ['4', '5', '6', '16'], correctAnswer: 1, explanation: '$32 = 2^5$, so $x = 5$.' },
  { topic: 'statistics', question: 'The mean of 5 numbers is 12. If a sixth number, 18, is added, what is the new mean?', options: ['12.5', '13', '14', '15'], correctAnswer: 1, explanation: 'Original sum $= 5 \\times 12 = 60$. New sum $= 78$. New mean $= 78/6 = 13$.' },
  { topic: 'geometry', question: 'Two parallel lines are cut by a transversal. One pair of corresponding angles measures $(3x + 10)°$ and $(5x - 20)°$. Find $x$.', options: ['10', '15', '20', '30'], correctAnswer: 1, explanation: 'Corresponding angles are equal: $3x + 10 = 5x - 20 \\Rightarrow 30 = 2x \\Rightarrow x = 15$.' },
]

export const READING_MCQS: MCQItem[] = [
  { topic: 'reading-comprehension', question: 'The primary purpose of a thesis statement in an essay is to:', options: ['Provide background information', 'Present the main argument or claim', 'Summarize the conclusion', 'List supporting evidence'], correctAnswer: 1, explanation: 'A thesis statement presents the main argument or central claim of the essay.' },
  { topic: 'literary-analysis', question: 'In literature, an unreliable narrator is one who:', options: ['Tells the story in third person', 'Cannot be fully trusted by the reader', 'Uses flashbacks', 'Speaks directly to the audience'], correctAnswer: 1, explanation: 'An unreliable narrator\'s account is questionable due to bias, limited knowledge, or deception.' },
  { topic: 'literary-devices', question: 'When an author uses a comparison without "like" or "as," it is called:', options: ['Simile', 'Metaphor', 'Hyperbole', 'Personification'], correctAnswer: 1, explanation: 'A metaphor makes a direct comparison without "like" or "as" (e.g., "Time is money").' },
  { topic: 'reading-comprehension', question: 'Which best describes the tone of: "Despite overwhelming odds, the team persevered with remarkable tenacity"?', options: ['Pessimistic', 'Admiring', 'Sarcastic', 'Indifferent'], correctAnswer: 1, explanation: '"Persevered" and "remarkable tenacity" convey admiration for the team\'s determination.' },
  { topic: 'reading-comprehension', question: 'Making an inference means:', options: ['Quoting directly from the text', 'Drawing a logical conclusion from given information', 'Summarizing the passage', 'Identifying the genre'], correctAnswer: 1, explanation: 'An inference is a conclusion drawn from evidence and reasoning, not stated directly in the text.' },
  { topic: 'reading-comprehension', question: 'The author\'s purpose in a persuasive essay is primarily to:', options: ['Entertain', 'Inform', 'Convince the reader', 'Describe a scene'], correctAnswer: 2, explanation: 'Persuasive essays aim to convince the reader to accept the author\'s viewpoint or take action.' },
  { topic: 'vocabulary', question: 'Context clues help readers:', options: ['Identify the genre', 'Determine the meaning of unfamiliar words', 'Find the thesis statement', 'Analyze sentence structure'], correctAnswer: 1, explanation: 'Context clues — surrounding words and phrases — help determine the meaning of unfamiliar vocabulary.' },
  {
    topic: 'reading-comprehension',
    stimulus: `**Passage (Prose Fiction):**

Margaret stood at the edge of the dock, her father's old fishing rod leaning against the weathered post beside her. Twenty years had passed since she had last visited the lake, and yet every detail — the smell of pine, the cry of a loon, the way the morning mist clung to the water like memory itself — was exactly as she remembered. She had told herself she was returning for the cabin, to settle the estate. But the truth, she now admitted, was simpler: she had come to feel close to him again, even if only for a morning.`,
    question: 'The passage primarily characterizes Margaret as someone who:',
    options: ['has avoided the lake out of bitterness', 'is fearful of returning to a familiar place', 'is grappling with grief and longing for connection to her father', 'is excited to take up fishing again'],
    correctAnswer: 2,
    explanation: 'The closing sentence — "she had come to feel close to him again" — directly reveals her motivation as longing for connection to her deceased father. Sensory details about memory reinforce the grief theme.',
  },
  {
    topic: 'reading-comprehension',
    stimulus: `**Passage (Prose Fiction) — same as previous question.**`,
    question: 'The simile "the morning mist clung to the water like memory itself" most directly serves to:',
    options: ['emphasize the cold temperature of the morning', 'connect the physical setting to the protagonist\'s emotional state', 'describe a meteorological phenomenon scientifically', 'foreshadow a storm later in the passage'],
    correctAnswer: 1,
    explanation: 'The simile bridges external setting (mist on water) with internal experience (memory), reinforcing the passage\'s focus on Margaret\'s emotional reflection.',
  },
  { topic: 'reading-comprehension', question: 'A passage that compares and contrasts two ideas primarily uses which organizational pattern?', options: ['Chronological order', 'Cause and effect', 'Compare and contrast', 'Problem and solution'], correctAnswer: 2, explanation: 'A compare and contrast pattern highlights similarities and differences between two or more ideas.' },
  { topic: 'reading-comprehension', question: 'When asked to find the MAIN IDEA of a passage, you should focus on:', options: ['the longest paragraph', 'the title alone', 'the central point the author argues across the passage as a whole', 'a single dramatic sentence'], correctAnswer: 2, explanation: 'The main idea is the central claim or unifying point of the passage, supported by its details.' },
  { topic: 'literary-devices', question: 'Which device involves giving human qualities to non-human things?', options: ['Personification', 'Allegory', 'Allusion', 'Imagery'], correctAnswer: 0, explanation: 'Personification attributes human qualities to non-human things ("The wind whispered").' },
  { topic: 'reading-comprehension', question: 'A factual claim in a science passage is BEST evaluated by examining:', options: ['the author\'s emotional tone', 'whether the claim is supported by data and methodology', 'how interesting the writing is', 'how many adjectives are used'], correctAnswer: 1, explanation: 'Factual claims are evaluated against evidence — methodology, sample size, and reproducibility — not stylistic features.' },
]

export const SCIENCE_MCQS: MCQItem[] = [
  { topic: 'experimental-design', question: 'A scientist tests whether fertilizer affects plant growth. The independent variable is:', options: ['Plant height', 'Amount of water', 'Type/amount of fertilizer', 'Sunlight hours'], correctAnswer: 2, explanation: 'The independent variable is what the scientist manipulates — the type/amount of fertilizer.' },
  { topic: 'data-interpretation', question: 'A graph shows volume increasing linearly with temperature at constant pressure. This demonstrates:', options: ['Boyle\'s law', 'Charles\'s law', 'Avogadro\'s law', 'Dalton\'s law'], correctAnswer: 1, explanation: 'Charles\'s law: $V \\propto T$ at constant pressure.' },
  { topic: 'experimental-design', question: 'Two scientists disagree about whether a chemical reaction is endothermic or exothermic. The best way to resolve this is to:', options: ['Take a vote', 'Measure the temperature change during the reaction', 'Ask a textbook', 'Repeat the hypothesis'], correctAnswer: 1, explanation: 'Measuring temperature change provides objective data: increase = exothermic, decrease = endothermic.' },
  { topic: 'data-interpretation', question: 'A data table shows that as pH decreases from 7 to 3, enzyme activity also decreases. This suggests:', options: ['Enzymes work best at neutral pH', 'Acidic conditions reduce this enzyme\'s activity', 'Alkaline conditions are harmful', 'pH has no effect'], correctAnswer: 1, explanation: 'Activity falls as solution becomes more acidic — acidic conditions reduce activity (within tested range).' },
  {
    topic: 'conflicting-viewpoints',
    stimulus: `**Conflicting Viewpoints — Origin of the Moon**

**Scientist 1 (Capture Hypothesis):** A wandering protoplanet from elsewhere in the solar system was gravitationally captured by Earth. This would explain compositional differences between Earth and Moon.

**Scientist 2 (Giant Impact Hypothesis):** A Mars-sized body collided with the early Earth. The Moon formed from debris ejected by the impact, predicting strong compositional similarity (especially oxygen-isotope ratios) between the Moon and Earth's mantle.`,
    question: 'A finding that lunar oxygen-isotope ratios are virtually identical to Earth\'s mantle would most directly:',
    options: ['support Scientist 1 and weaken Scientist 2', 'support Scientist 2 and weaken Scientist 1', 'support both scientists equally', 'weaken both scientists'],
    correctAnswer: 1,
    explanation: 'Scientist 2 explicitly predicts compositional similarity due to shared origin material; Scientist 1 predicts differences. Identical isotopes support the Giant Impact Hypothesis.',
  },
  {
    topic: 'conflicting-viewpoints',
    stimulus: `**Conflicting Viewpoints — Origin of the Moon (same as previous question).**`,
    question: 'Scientist 1\'s hypothesis would be most strengthened by which finding?',
    options: ['Lunar rocks dated to before Earth\'s formation', 'Lunar surface composition very different from Earth\'s mantle', 'Evidence of a large impact crater on Earth\'s early surface', 'Identical iron content between Earth and Moon'],
    correctAnswer: 1,
    explanation: 'A captured body would have a different composition than Earth. A and C would weaken the capture hypothesis; D would weaken it as well.',
  },
  { topic: 'data-interpretation', question: 'A graph of population vs. time shows the steepest rise during which phase?', options: ['Lag phase', 'Exponential growth phase', 'Stationary phase', 'Death phase'], correctAnswer: 1, explanation: 'Exponential growth shows the steepest rise as population grows at an increasing rate.' },
  { topic: 'experimental-design', question: 'A control group in an experiment:', options: ['Receives the treatment', 'Is the variable being measured', 'Does not receive the treatment being tested', 'Has the most subjects'], correctAnswer: 2, explanation: 'The control group does not receive the experimental treatment and serves as a baseline.' },
  { topic: 'data-interpretation', question: 'A scatter plot shows points forming a downward curve. The correlation is:', options: ['Positive linear', 'Negative', 'No correlation', 'Perfectly positive'], correctAnswer: 1, explanation: 'Downward = negative correlation: as one variable increases, the other decreases.' },
  { topic: 'data-interpretation', question: 'A reaction\'s rate doubles when temperature increases by 10°C. If the rate at 20°C is 4 units/sec, the rate at 40°C should be approximately:', options: ['8 units/sec', '12 units/sec', '16 units/sec', '32 units/sec'], correctAnswer: 2, explanation: '20 → 30: double to 8. 30 → 40: double to 16.' },
  { topic: 'experimental-design', question: 'Which is the strongest evidence that a drug actually causes (rather than is merely associated with) reduced blood pressure?', options: ['A correlation between the drug and lower blood pressure in observational data', 'A randomized controlled trial showing reduced blood pressure in the treatment group vs. placebo', 'Anecdotes from satisfied patients', 'A theoretical model predicting the effect'], correctAnswer: 1, explanation: 'Randomization controls for confounding variables, allowing causal inference. Observational correlations cannot rule out confounders.' },
  { topic: 'data-interpretation', question: 'A scientist reports a measurement of 10.0 ± 0.2 cm. This notation indicates:', options: ['the measurement is exactly 10.0 cm', 'the true value is between 9.8 cm and 10.2 cm with some confidence', 'the measurement is uncertain by exactly 20%', 'the experiment failed'], correctAnswer: 1, explanation: 'The ± value is the uncertainty interval — the true value lies within that range with some specified confidence.' },
  { topic: 'experimental-design', question: 'A study is described as "double-blind." This means:', options: ['Both eyes of the subjects are covered', 'Neither the subjects nor the experimenters know which group each subject is in', 'The study is repeated twice', 'Two control groups are used'], correctAnswer: 1, explanation: 'Double-blinding controls for placebo effects (subjects) and experimenter expectancy effects (researchers).' },
]
