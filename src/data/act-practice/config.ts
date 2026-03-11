import type { PracticeExamConfig, PracticeQuestion } from '@/components/PracticeExam'

const ENGLISH: PracticeQuestion[] = [
  { question: 'Choose the correct sentence: "Each of the students _____ required to submit the assignment."', options: ['are', 'is', 'were', 'have been'], correctAnswer: 1, explanation: '"Each" is singular, so the verb must be "is."', topic: 'grammar' },
  { question: 'Which transition best connects: "The experiment failed. _____, the team redesigned their approach."', options: ['Moreover', 'Consequently', 'Similarly', 'Meanwhile'], correctAnswer: 1, explanation: '"Consequently" shows cause-and-effect: the failure led to the redesign.', topic: 'transitions' },
  { question: 'Identify the error: "Running through the park, the trees were beautiful."', options: ['No error', 'Dangling modifier', 'Subject-verb agreement', 'Pronoun reference'], correctAnswer: 1, explanation: 'The participial phrase "Running through the park" modifies "trees," but trees can\'t run — this is a dangling modifier.', topic: 'grammar' },
  { question: '"The data shows that temperatures has risen steadily." What needs correction?', options: ['"data shows" should be "data show"', '"has risen" should be "have risen"', 'Both A and B', 'No correction needed'], correctAnswer: 2, explanation: '"Data" is plural (datum is singular), so it requires "show" and "have risen."', topic: 'grammar' },
  { question: 'Which is most concise? "Due to the fact that it was raining, we stayed inside."', options: ['Original is best', 'Because it was raining, we stayed inside.', 'Owing to the fact of rain, we remained indoors.', 'It was a rainy day and therefore we made the decision to stay inside.'], correctAnswer: 1, explanation: '"Because" is more concise than "due to the fact that" without losing meaning.', topic: 'rhetoric' },
  { question: 'Which sentence uses a semicolon correctly?', options: ['She likes math; and science.', 'She likes math; she also enjoys science.', 'She likes; math and science.', 'She; likes math and science.'], correctAnswer: 1, explanation: 'A semicolon connects two independent clauses: "She likes math" and "she also enjoys science."', topic: 'punctuation' },
  { question: '"Neither the teacher nor the students _____ ready." Fill in the blank.', options: ['is', 'was', 'were', 'has been'], correctAnswer: 2, explanation: 'With "neither...nor," the verb agrees with the closer subject ("students"), which is plural → "were."', topic: 'grammar' },
  { question: 'Which word is the correct homophone? "The team lost _____ motivation."', options: ['there', 'their', 'they\'re', 'its'], correctAnswer: 1, explanation: '"Their" is the possessive pronoun referring to "the team."', topic: 'usage' },
  { question: 'A rhetorical question in an essay primarily serves to:', options: ['Demand information', 'Engage the reader and provoke thought', 'Show uncertainty', 'Introduce a counterargument'], correctAnswer: 1, explanation: 'Rhetorical questions engage readers and encourage them to think about the writer\'s point.', topic: 'rhetoric' },
  { question: 'Which sentence contains a misplaced modifier?', options: ['Walking to school, I saw a bird.', 'I almost drove my car into every mailbox.', 'I drove my car into almost every mailbox.', 'Both B and C have misplaced modifiers.'], correctAnswer: 1, explanation: '"I almost drove" suggests I almost drove (but didn\'t). "I drove into almost every mailbox" is the intended meaning.', topic: 'grammar' },
]

const MATH: PracticeQuestion[] = [
  { question: 'If 3x + 7 = 22, what is x?', options: ['3', '5', '7', '15'], correctAnswer: 1, explanation: '3x = 22 − 7 = 15, so x = 5.', topic: 'algebra' },
  { question: 'What is the slope of the line passing through (1, 3) and (4, 15)?', options: ['3', '4', '5', '6'], correctAnswer: 1, explanation: 'slope = (15 − 3)/(4 − 1) = 12/3 = 4.', topic: 'coordinate-geometry' },
  { question: 'In a right triangle with legs 5 and 12, what is the hypotenuse?', options: ['13', '15', '17', '7'], correctAnswer: 0, explanation: 'c = √(5² + 12²) = √(25 + 144) = √169 = 13.', topic: 'geometry' },
  { question: 'What is 30% of 250?', options: ['50', '75', '80', '100'], correctAnswer: 1, explanation: '0.30 × 250 = 75.', topic: 'arithmetic' },
  { question: 'If f(x) = x² − 4x + 3, what are the zeros?', options: ['x = 1, 3', 'x = −1, −3', 'x = 2, 6', 'x = 1, −3'], correctAnswer: 0, explanation: 'f(x) = (x − 1)(x − 3) = 0 → x = 1 or x = 3.', topic: 'algebra' },
  { question: 'What is the area of a circle with diameter 10?', options: ['25π', '10π', '100π', '50π'], correctAnswer: 0, explanation: 'Radius = 5, so A = πr² = 25π.', topic: 'geometry' },
  { question: 'Simplify: (2³)(2⁴)', options: ['2⁷', '2¹²', '4⁷', '4¹²'], correctAnswer: 0, explanation: 'When multiplying same base, add exponents: 2³⁺⁴ = 2⁷ = 128.', topic: 'exponents' },
  { question: 'The median of {3, 7, 9, 12, 15} is:', options: ['7', '9', '9.2', '12'], correctAnswer: 1, explanation: 'The median is the middle value of the ordered set: 9.', topic: 'statistics' },
  { question: 'What is sin(30°)?', options: ['√3/2', '1/2', '√2/2', '1'], correctAnswer: 1, explanation: 'sin(30°) = 1/2.', topic: 'trigonometry' },
  { question: 'If a shirt costs $40 and is 25% off, the sale price is:', options: ['$10', '$15', '$30', '$35'], correctAnswer: 2, explanation: 'Discount = 0.25 × 40 = $10. Sale price = $40 − $10 = $30.', topic: 'arithmetic' },
]

const READING: PracticeQuestion[] = [
  { question: 'The primary purpose of a thesis statement in an essay is to:', options: ['Provide background information', 'Present the main argument or claim', 'Summarize the conclusion', 'List supporting evidence'], correctAnswer: 1, explanation: 'A thesis statement presents the main argument or central claim of the essay.', topic: 'reading-comprehension' },
  { question: 'In literature, an unreliable narrator is one who:', options: ['Tells the story in third person', 'Cannot be fully trusted by the reader', 'Uses flashbacks', 'Speaks directly to the audience'], correctAnswer: 1, explanation: 'An unreliable narrator\'s account is questionable due to bias, limited knowledge, or deception.', topic: 'literary-analysis' },
  { question: 'When an author uses a comparison without "like" or "as," it is called:', options: ['Simile', 'Metaphor', 'Hyperbole', 'Personification'], correctAnswer: 1, explanation: 'A metaphor makes a direct comparison without using "like" or "as" (e.g., "Time is money").', topic: 'literary-devices' },
  { question: 'Which best describes the tone of: "Despite overwhelming odds, the team persevered with remarkable tenacity"?', options: ['Pessimistic', 'Admiring', 'Sarcastic', 'Indifferent'], correctAnswer: 1, explanation: 'Words like "persevered" and "remarkable tenacity" convey admiration for the team\'s determination.', topic: 'reading-comprehension' },
  { question: 'Making an inference means:', options: ['Quoting directly from the text', 'Drawing a logical conclusion from given information', 'Summarizing the passage', 'Identifying the genre'], correctAnswer: 1, explanation: 'An inference is a conclusion drawn from evidence and reasoning, not stated directly in the text.', topic: 'reading-comprehension' },
  { question: 'The author\'s purpose in a persuasive essay is primarily to:', options: ['Entertain', 'Inform', 'Convince the reader', 'Describe a scene'], correctAnswer: 2, explanation: 'Persuasive essays aim to convince the reader to accept the author\'s viewpoint or take action.', topic: 'reading-comprehension' },
  { question: 'Context clues help readers:', options: ['Identify the genre', 'Determine the meaning of unfamiliar words', 'Find the thesis statement', 'Analyze sentence structure'], correctAnswer: 1, explanation: 'Context clues — surrounding words and phrases — help determine the meaning of unfamiliar vocabulary.', topic: 'vocabulary' },
  { question: 'A passage that compares and contrasts two ideas primarily uses which organizational pattern?', options: ['Chronological order', 'Cause and effect', 'Compare and contrast', 'Problem and solution'], correctAnswer: 2, explanation: 'A compare and contrast pattern highlights similarities and differences between two or more ideas.', topic: 'reading-comprehension' },
]

const SCIENCE: PracticeQuestion[] = [
  { question: 'A scientist tests whether fertilizer affects plant growth. The independent variable is:', options: ['Plant height', 'Amount of water', 'Type/amount of fertilizer', 'Sunlight hours'], correctAnswer: 2, explanation: 'The independent variable is what the scientist manipulates — the type/amount of fertilizer.', topic: 'experimental-design' },
  { question: 'If a graph shows a direct relationship between temperature and volume (at constant pressure), this demonstrates:', options: ['Boyle\'s law', 'Charles\'s law', 'Avogadro\'s law', 'Dalton\'s law'], correctAnswer: 1, explanation: 'Charles\'s law: V ∝ T at constant pressure (direct relationship between volume and temperature).', topic: 'data-interpretation' },
  { question: 'Two scientists disagree about whether a chemical reaction is endothermic or exothermic. The best way to resolve this is to:', options: ['Take a vote', 'Measure the temperature change during the reaction', 'Ask a textbook', 'Repeat the hypothesis'], correctAnswer: 1, explanation: 'Measuring temperature change provides objective data: increase = exothermic, decrease = endothermic.', topic: 'experimental-design' },
  { question: 'A data table shows that as pH decreases from 7 to 3, enzyme activity also decreases. This suggests:', options: ['Enzymes work best at neutral pH', 'Acidic conditions reduce this enzyme\'s activity', 'Alkaline conditions are harmful', 'pH has no effect'], correctAnswer: 1, explanation: 'The data shows enzyme activity decreasing as the solution becomes more acidic (lower pH).', topic: 'data-interpretation' },
  { question: 'Which conclusion is supported if Student 1 says all metals conduct electricity and Student 2 tests copper, iron, and aluminum — all of which conduct?', options: ['Student 1\'s hypothesis is proven true', 'The results are consistent with Student 1\'s hypothesis', 'All materials conduct electricity', 'The experiment is invalid'], correctAnswer: 1, explanation: 'The results support (are consistent with) the hypothesis, but don\'t prove it — other metals might not conduct.', topic: 'conflicting-viewpoints' },
  { question: 'According to a graph showing population growth, what phase shows the steepest rise?', options: ['Lag phase', 'Exponential growth phase', 'Stationary phase', 'Death phase'], correctAnswer: 1, explanation: 'The exponential growth phase shows the steepest rise as population grows at an increasing rate.', topic: 'data-interpretation' },
  { question: 'A control group in an experiment:', options: ['Receives the treatment', 'Is the variable being measured', 'Does not receive the treatment being tested', 'Has the most subjects'], correctAnswer: 2, explanation: 'The control group does not receive the experimental treatment and serves as a baseline for comparison.', topic: 'experimental-design' },
  { question: 'If a scatter plot shows data points that form a downward curve, the correlation is:', options: ['Positive linear', 'Negative', 'No correlation', 'Perfectly positive'], correctAnswer: 1, explanation: 'A downward curve indicates a negative correlation — as one variable increases, the other decreases.', topic: 'data-interpretation' },
]

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]] }
  return a
}

const sectionPools: Record<string, PracticeQuestion[]> = {
  english: ENGLISH, math: MATH, reading: READING, science: SCIENCE,
}

export const config: PracticeExamConfig = {
  subject: 'ACT',
  description: 'Practice each ACT section individually with timed, scored practice tests.',
  backLink: { href: '/act', label: 'ACT Prep' },
  ctaLinks: [
    { href: '/act-diagnostic', label: 'Diagnostic Test' },
    { href: '/act-daily-question', label: 'Daily Question' },
  ],
  accent: 'red',
  sections: [
    { id: 'english', name: 'English', description: 'Grammar, usage, rhetorical skills, and punctuation.', questionCount: 10, timeLimitMinutes: 9 },
    { id: 'math', name: 'Mathematics', description: 'Algebra, geometry, trigonometry, and statistics.', questionCount: 10, timeLimitMinutes: 10 },
    { id: 'reading', name: 'Reading', description: 'Comprehension, inference, literary analysis, and vocabulary.', questionCount: 8, timeLimitMinutes: 7 },
    { id: 'science', name: 'Science', description: 'Data interpretation, experimental design, and conflicting viewpoints.', questionCount: 8, timeLimitMinutes: 7 },
  ],
  getQuestions: async (sectionId: string) => shuffle(sectionPools[sectionId] ?? []),
  aboutInfo: {
    title: 'About the ACT',
    columns: [
      { heading: 'Test Structure', items: ['English: 75 questions, 45 minutes', 'Math: 60 questions, 60 minutes', 'Reading: 40 questions, 35 minutes', 'Science: 40 questions, 35 minutes', 'Optional Writing: 1 essay, 40 minutes'] },
      { heading: 'Scoring', items: ['Each section: 1–36', 'Composite: average of 4 sections', 'National average: ~21', 'Competitive: 30+'] },
    ],
  },
}
