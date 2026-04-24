/**
 * ACT Diagnostic Test Generator
 *
 * 10 alternate forms (1–10), ~36 questions each covering all 4 ACT
 * sections: English, Math, Reading, Science. Weak areas map to topic slugs.
 */

export const TOTAL_FORMS = 10

export interface ACTDiagnosticQuestion {
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  domain: string
  topicSlug: string
}

export interface ACTDomain {
  id: string
  name: string
  topicSlugs: string[]
  questionTarget: number
}

export interface ACTDiagnosticTestData {
  form: number
  questions: ACTDiagnosticQuestion[]
  domains: ACTDomain[]
  totalQuestions: number
  timeLimitMinutes: number
}

export interface ACTDomainResult {
  domainId: string
  domainName: string
  correct: number
  total: number
  percentage: number
  level: 'strong' | 'moderate' | 'weak'
}

export interface ACTRecommendedTopic {
  slug: string
  name: string
  domainId: string
  priority: 'high' | 'medium'
}

export interface ACTDiagnosticResults {
  form: number
  totalCorrect: number
  totalQuestions: number
  percentage: number
  estimatedComposite: number
  domains: ACTDomainResult[]
  weakAreas: string[]
  moderateAreas: string[]
  strengths: string[]
  recommendedTopics: ACTRecommendedTopic[]
}

const ACT_DOMAINS: ACTDomain[] = [
  { id: 'english', name: 'English', topicSlugs: ['grammar-usage', 'sentence-structure', 'rhetorical-skills'], questionTarget: 10 },
  { id: 'math', name: 'Math', topicSlugs: ['pre-algebra-basics', 'algebra-equations', 'geometry-trig', 'advanced-math'], questionTarget: 10 },
  { id: 'reading', name: 'Reading', topicSlugs: ['main-idea-inference', 'detail-vocabulary', 'passage-analysis'], questionTarget: 8 },
  { id: 'science', name: 'Science', topicSlugs: ['data-representation', 'research-summaries', 'conflicting-viewpoints'], questionTarget: 8 },
]

export { ACT_DOMAINS }

interface PoolQuestion {
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  domain: string
  topicSlug: string
  formSet: 'A' | 'B' | 'both'
}

const questionPool: PoolQuestion[] = [
  // ---- English ----
  { question: 'Which sentence is punctuated correctly?', options: ['The dog, who was brown ran fast.', 'The dog, who was brown, ran fast.', 'The dog who was brown, ran fast.', 'The dog who, was brown ran fast.'], correctAnswer: 1, explanation: 'A nonrestrictive clause ("who was brown") must be set off by commas on both sides.', domain: 'english', topicSlug: 'grammar-usage', formSet: 'A' },
  { question: 'Choose the correct word: "Each of the students ___ their homework."', options: ['completed', 'have completed', 'were completing', 'are completing'], correctAnswer: 0, explanation: '"Each" is singular and takes a singular verb: "Each … completed."', domain: 'english', topicSlug: 'grammar-usage', formSet: 'A' },
  { question: 'Identify the error: "She is more smarter than her brother."', options: ['"She is"', '"more smarter"', '"than her"', 'No error'], correctAnswer: 1, explanation: 'Double comparative: use "smarter" or "more smart," not "more smarter."', domain: 'english', topicSlug: 'grammar-usage', formSet: 'A' },
  { question: 'Which transition best connects these sentences? "The experiment failed. ___, the team redesigned their approach."', options: ['However', 'Furthermore', 'Consequently', 'Similarly'], correctAnswer: 2, explanation: '"Consequently" shows cause/effect — the failure caused the redesign.', domain: 'english', topicSlug: 'rhetorical-skills', formSet: 'A' },
  { question: 'Which revision eliminates the dangling modifier? "Running quickly, the finish line was crossed."', options: ['Running quickly, crossed was the finish line.', 'The finish line, running quickly, was crossed.', 'Running quickly, the runner crossed the finish line.', 'The finish line was quickly crossed, running.'], correctAnswer: 2, explanation: 'The modifier "Running quickly" must describe the runner, not the finish line.', domain: 'english', topicSlug: 'sentence-structure', formSet: 'A' },
  { question: 'Which version is most concise? "Due to the fact that it was raining, we stayed inside."', options: ['Due to the fact that it was raining, we stayed inside.', 'Because it was raining, we stayed inside.', 'As a result of the fact that rain was occurring, we stayed inside.', 'Owing to the precipitation event, we remained indoors.'], correctAnswer: 1, explanation: '"Because" is more concise than "due to the fact that."', domain: 'english', topicSlug: 'rhetorical-skills', formSet: 'B' },
  { question: 'Select the correct form: "The team ___ to the finals last year."', options: ['advance', 'advanced', 'has advancing', 'were advance'], correctAnswer: 1, explanation: '"Last year" indicates past tense; "advanced" is correct.', domain: 'english', topicSlug: 'grammar-usage', formSet: 'B' },
  { question: 'Which sentence uses a semicolon correctly?', options: ['I like apples; and oranges.', 'I like apples; however, I prefer oranges.', 'I like; apples and oranges.', 'I like apples however; I prefer oranges.'], correctAnswer: 1, explanation: 'A semicolon joins two independent clauses; "however" is a conjunctive adverb requiring a comma after it.', domain: 'english', topicSlug: 'sentence-structure', formSet: 'B' },
  { question: 'Choose the correct pronoun: "Between you and ___, this plan won\'t work."', options: ['I', 'me', 'myself', 'mine'], correctAnswer: 1, explanation: '"Between" is a preposition; its object requires the objective case: "me."', domain: 'english', topicSlug: 'grammar-usage', formSet: 'B' },
  { question: '"The scientist, along with her assistants, ___ working late." Choose the correct verb.', options: ['are', 'is', 'were', 'have been'], correctAnswer: 1, explanation: 'The subject is "scientist" (singular). "Along with her assistants" is a parenthetical phrase that doesn\'t change the subject.', domain: 'english', topicSlug: 'grammar-usage', formSet: 'B' },
  { question: 'Which sentence has a parallel structure error?', options: ['She likes hiking, swimming, and biking.', 'He is smart, talented, and works hard.', 'The book was interesting and engaging.', 'They walked, talked, and laughed.'], correctAnswer: 1, explanation: '"Smart, talented" are adjectives; "works hard" is a verb phrase — not parallel. Should be "hardworking."', domain: 'english', topicSlug: 'sentence-structure', formSet: 'both' },
  { question: 'Which word best replaces "utilized" in casual writing? "She utilized the tool effectively."', options: ['employed', 'leveraged', 'used', 'exercised'], correctAnswer: 2, explanation: '"Used" is the simplest, most direct word for casual writing.', domain: 'english', topicSlug: 'rhetorical-skills', formSet: 'both' },

  // ---- Math ----
  { question: 'If 3x + 7 = 22, what is x?', options: ['3', '5', '7', '15'], correctAnswer: 1, explanation: '3x + 7 = 22 → 3x = 15 → x = 5.', domain: 'math', topicSlug: 'algebra-equations', formSet: 'A' },
  { question: 'What is the slope of the line passing through (2, 3) and (6, 11)?', options: ['1', '2', '4', '8'], correctAnswer: 1, explanation: 'Slope = (11 − 3)/(6 − 2) = 8/4 = 2.', domain: 'math', topicSlug: 'algebra-equations', formSet: 'A' },
  { question: 'What is 25% of 80?', options: ['15', '20', '25', '40'], correctAnswer: 1, explanation: '25% × 80 = 0.25 × 80 = 20.', domain: 'math', topicSlug: 'pre-algebra-basics', formSet: 'A' },
  { question: 'If the area of a circle is 49π, what is the radius?', options: ['7', '14', '49', '24.5'], correctAnswer: 0, explanation: 'A = πr² → r² = 49 → r = 7.', domain: 'math', topicSlug: 'geometry-trig', formSet: 'A' },
  { question: 'Simplify: (x² − 9)/(x − 3)', options: ['x − 3', 'x + 3', 'x² + 3', '3x'], correctAnswer: 1, explanation: 'x² − 9 = (x − 3)(x + 3). Cancel (x − 3): result is x + 3.', domain: 'math', topicSlug: 'algebra-equations', formSet: 'A' },
  { question: 'What is the value of sin(30°)?', options: ['0', '1/2', '√2/2', '√3/2'], correctAnswer: 1, explanation: 'sin(30°) = 1/2. This is a standard trigonometric value.', domain: 'math', topicSlug: 'geometry-trig', formSet: 'B' },
  { question: 'If f(x) = 2x² − 3x + 1, what is f(2)?', options: ['1', '3', '5', '7'], correctAnswer: 1, explanation: 'f(2) = 2(4) − 3(2) + 1 = 8 − 6 + 1 = 3.', domain: 'math', topicSlug: 'advanced-math', formSet: 'B' },
  { question: 'What is the greatest common factor of 24 and 36?', options: ['4', '6', '8', '12'], correctAnswer: 3, explanation: 'Factors of 24: 1,2,3,4,6,8,12,24. Factors of 36: 1,2,3,4,6,9,12,18,36. GCF = 12.', domain: 'math', topicSlug: 'pre-algebra-basics', formSet: 'B' },
  { question: 'Solve: |2x − 5| = 9', options: ['x = 7 or x = −2', 'x = 7 only', 'x = −2 only', 'x = 2 or x = 7'], correctAnswer: 0, explanation: '2x − 5 = 9 → x = 7. 2x − 5 = −9 → x = −2. Both solutions.', domain: 'math', topicSlug: 'algebra-equations', formSet: 'B' },
  { question: 'In a right triangle, if one leg is 5 and the hypotenuse is 13, what is the other leg?', options: ['8', '10', '12', '18'], correctAnswer: 2, explanation: 'a² + b² = c². 5² + b² = 13². b² = 169 − 25 = 144. b = 12.', domain: 'math', topicSlug: 'geometry-trig', formSet: 'B' },
  { question: 'What is the median of {3, 7, 9, 12, 15}?', options: ['7', '9', '9.2', '12'], correctAnswer: 1, explanation: 'Median is the middle value in an ordered set: 9.', domain: 'math', topicSlug: 'pre-algebra-basics', formSet: 'both' },
  { question: 'The graph of y = (x − 2)² + 3 has its vertex at:', options: ['(2, 3)', '(−2, 3)', '(2, −3)', '(3, 2)'], correctAnswer: 0, explanation: 'Vertex form y = (x − h)² + k → vertex at (h, k) = (2, 3).', domain: 'math', topicSlug: 'advanced-math', formSet: 'both' },

  // ---- Reading ----
  { question: 'The main purpose of a thesis statement in an essay is to:', options: ['Provide background information', 'State the central argument or claim', 'Summarize the conclusion', 'List supporting evidence'], correctAnswer: 1, explanation: 'A thesis statement presents the central argument that the essay will support.', domain: 'reading', topicSlug: 'main-idea-inference', formSet: 'A' },
  { question: 'When an author includes specific statistics about pollution, they are primarily using:', options: ['Emotional appeal (pathos)', 'Logical appeal (logos)', 'Ethical appeal (ethos)', 'Narrative technique'], correctAnswer: 1, explanation: 'Statistics and data constitute a logical appeal (logos) — using evidence and reason.', domain: 'reading', topicSlug: 'passage-analysis', formSet: 'A' },
  { question: '"The old house groaned under the weight of years." This is an example of:', options: ['Simile', 'Personification', 'Hyperbole', 'Alliteration'], correctAnswer: 1, explanation: '"Groaned" gives the house a human quality (personification).', domain: 'reading', topicSlug: 'detail-vocabulary', formSet: 'A' },
  { question: 'A passage states: "The candidate promised lower taxes, better schools, and safer streets." The author\'s tone is most likely:', options: ['Sarcastic', 'Informative', 'Emotional', 'Humorous'], correctAnswer: 1, explanation: 'The statement is a neutral report of facts — informative tone.', domain: 'reading', topicSlug: 'main-idea-inference', formSet: 'A' },
  { question: 'To "infer" in reading means to:', options: ['Copy information directly from the text', 'Draw a conclusion based on evidence and reasoning', 'Summarize the main idea', 'Identify the author\'s name'], correctAnswer: 1, explanation: 'Inference means using clues in the text plus prior knowledge to reach a conclusion not stated directly.', domain: 'reading', topicSlug: 'main-idea-inference', formSet: 'B' },
  { question: 'Context clues most directly help a reader to:', options: ['Identify the genre of a text', 'Determine the meaning of unfamiliar words', 'Find the thesis statement', 'Evaluate the author\'s credibility'], correctAnswer: 1, explanation: 'Context clues — surrounding words and sentences — help you figure out the meaning of unknown words.', domain: 'reading', topicSlug: 'detail-vocabulary', formSet: 'B' },
  { question: 'An author who writes "studies show that exercise reduces stress by 40%" is strengthening their argument through:', options: ['Anecdote', 'Expert testimony', 'Statistical evidence', 'Personal experience'], correctAnswer: 2, explanation: 'Citing a specific percentage from studies is statistical evidence.', domain: 'reading', topicSlug: 'passage-analysis', formSet: 'B' },
  { question: 'When comparing two passages on the same topic, the most important first step is to:', options: ['Count the word length of each', 'Identify each passage\'s main argument', 'Read the titles only', 'Look at the publication dates'], correctAnswer: 1, explanation: 'Understanding each passage\'s main argument is essential before comparing positions.', domain: 'reading', topicSlug: 'passage-analysis', formSet: 'B' },
  { question: 'The word "ambiguous" most nearly means:', options: ['Clear', 'Open to multiple interpretations', 'Angry', 'Simple'], correctAnswer: 1, explanation: '"Ambiguous" means having more than one possible meaning; unclear.', domain: 'reading', topicSlug: 'detail-vocabulary', formSet: 'both' },
  { question: 'An author begins a paragraph with "On the other hand..." This signals:', options: ['A supporting detail', 'A contrasting point', 'A chronological event', 'The conclusion'], correctAnswer: 1, explanation: '"On the other hand" is a contrast transition, introducing an opposing or different perspective.', domain: 'reading', topicSlug: 'main-idea-inference', formSet: 'both' },

  // ---- Science ----
  { question: 'A graph shows a direct relationship between temperature and volume. As temperature increases, volume:', options: ['Decreases', 'Increases', 'Stays the same', 'First increases then decreases'], correctAnswer: 1, explanation: 'A direct (positive) relationship means both variables increase together.', domain: 'science', topicSlug: 'data-representation', formSet: 'A' },
  { question: 'In a controlled experiment, the variable the researcher changes is called the:', options: ['Dependent variable', 'Independent variable', 'Control variable', 'Confounding variable'], correctAnswer: 1, explanation: 'The independent variable is intentionally manipulated by the researcher.', domain: 'science', topicSlug: 'research-summaries', formSet: 'A' },
  { question: 'Which of the following is a testable hypothesis?', options: ['Water is the best liquid.', 'Plants grow taller when given more sunlight.', 'Science is interesting.', 'Stars are beautiful.'], correctAnswer: 1, explanation: 'A testable hypothesis makes a specific, measurable prediction that can be tested experimentally.', domain: 'science', topicSlug: 'research-summaries', formSet: 'A' },
  { question: 'A bar graph compares plant growth under three light conditions. Which conclusion is most appropriate if the "full sun" bar is tallest?', options: ['Full sun is the only way plants grow', 'Full sun resulted in the most growth in this experiment', 'All plants need full sun', 'Shade kills plants'], correctAnswer: 1, explanation: 'The correct conclusion is limited to what the data shows: full sun produced the most growth in this experiment.', domain: 'science', topicSlug: 'data-representation', formSet: 'A' },
  { question: 'Two scientists disagree about whether a chemical is safe. Scientist 1 cites animal studies; Scientist 2 cites human epidemiological data. This scenario best represents:', options: ['A flaw in the scientific method', 'Conflicting viewpoints based on different evidence', 'One scientist being wrong', 'An unsolvable problem'], correctAnswer: 1, explanation: 'Scientists can reach different conclusions based on different types of evidence — conflicting viewpoints.', domain: 'science', topicSlug: 'conflicting-viewpoints', formSet: 'A' },
  { question: 'A table shows that as altitude increases, air pressure decreases. This is an example of:', options: ['A direct relationship', 'An inverse relationship', 'No relationship', 'A cyclic relationship'], correctAnswer: 1, explanation: 'As one variable goes up and the other goes down, it is an inverse relationship.', domain: 'science', topicSlug: 'data-representation', formSet: 'B' },
  { question: 'What is the purpose of a control group in an experiment?', options: ['To introduce more variables', 'To provide a baseline for comparison', 'To make the experiment longer', 'To add more test subjects'], correctAnswer: 1, explanation: 'A control group provides a baseline — it shows what happens without the experimental treatment.', domain: 'science', topicSlug: 'research-summaries', formSet: 'B' },
  { question: 'If an experiment has too many variables changing at once, the results:', options: ['Are more reliable', 'Cannot clearly attribute effects to any one variable', 'Are always invalid', 'Need fewer trials'], correctAnswer: 1, explanation: 'Multiple changing variables make it impossible to determine which caused the observed effect — confounding.', domain: 'science', topicSlug: 'research-summaries', formSet: 'B' },
  { question: 'Scientist A argues that the dinosaur extinction was caused by an asteroid; Scientist B argues it was caused by volcanic activity. Both support their claims with evidence. What is the best approach?', options: ['Accept Scientist A because asteroids are dramatic', 'Dismiss both since they disagree', 'Evaluate the evidence each provides and consider if both factors contributed', 'Choose the scientist with more publications'], correctAnswer: 2, explanation: 'The scientific approach is to evaluate evidence objectively; it\'s possible both factors contributed.', domain: 'science', topicSlug: 'conflicting-viewpoints', formSet: 'B' },
  { question: 'A scatter plot shows data points with no clear trend line. This suggests:', options: ['A strong positive correlation', 'A strong negative correlation', 'Little or no correlation', 'A perfect relationship'], correctAnswer: 2, explanation: 'Scattered data points with no pattern indicate little or no correlation between the variables.', domain: 'science', topicSlug: 'data-representation', formSet: 'both' },
  { question: 'In an experiment measuring reaction time, what is the dependent variable?', options: ['The type of stimulus used', 'The age of the participants', 'The measured reaction time', 'The room temperature'], correctAnswer: 2, explanation: 'The dependent variable is what is measured as an outcome — reaction time in this case.', domain: 'science', topicSlug: 'research-summaries', formSet: 'both' },
]

function mulberry32(seed: number): () => number {
  return () => { let t = (seed += 0x6d2b79f5); t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }
}

function seededShuffle<T>(arr: T[], rng: () => number): T[] {
  const a = [...arr]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rng() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a;
}

export function generateACTDiagnosticTest(form: number): ACTDiagnosticTestData {
  const rng = mulberry32(form * 7919)
  const questions: ACTDiagnosticQuestion[] = []
  for (const domain of ACT_DOMAINS) {
    const pool = questionPool.filter(q => q.domain === domain.id)
    const shuffled = seededShuffle(pool, rng)
    for (const q of shuffled.slice(0, domain.questionTarget)) {
      questions.push({ question: q.question, options: q.options, correctAnswer: q.correctAnswer, explanation: q.explanation, domain: domain.id, topicSlug: q.topicSlug })
    }
  }
  return { form, questions: seededShuffle(questions, rng), domains: ACT_DOMAINS, totalQuestions: questions.length, timeLimitMinutes: 40 }
}

export function scoreACTDiagnostic(form: number, questions: ACTDiagnosticQuestion[], answers: Record<number, number>): ACTDiagnosticResults {
  const domainResults: ACTDomainResult[] = ACT_DOMAINS.map(domain => {
    const domainQs = questions.map((q, i) => ({ q, i })).filter(({ q }) => q.domain === domain.id)
    const correct = domainQs.filter(({ i }) => answers[i] !== undefined && answers[i] === questions[i].correctAnswer).length
    const total = domainQs.length
    const percentage = total > 0 ? Math.round((correct / total) * 100) : 0
    const level: 'strong' | 'moderate' | 'weak' = percentage >= 75 ? 'strong' : percentage >= 50 ? 'moderate' : 'weak'
    return { domainId: domain.id, domainName: domain.name, correct, total, percentage, level }
  })

  const totalCorrect = domainResults.reduce((s, d) => s + d.correct, 0)
  const totalQuestions = domainResults.reduce((s, d) => s + d.total, 0)
  const percentage = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0

  // Estimated ACT composite (1-36 scale)
  let estimatedComposite: number
  if (percentage >= 95) estimatedComposite = 35
  else if (percentage >= 90) estimatedComposite = 33
  else if (percentage >= 85) estimatedComposite = 31
  else if (percentage >= 80) estimatedComposite = 29
  else if (percentage >= 75) estimatedComposite = 27
  else if (percentage >= 70) estimatedComposite = 25
  else if (percentage >= 65) estimatedComposite = 23
  else if (percentage >= 60) estimatedComposite = 21
  else if (percentage >= 50) estimatedComposite = 19
  else if (percentage >= 40) estimatedComposite = 16
  else if (percentage >= 30) estimatedComposite = 13
  else estimatedComposite = 10

  const weakAreas = domainResults.filter(d => d.level === 'weak').map(d => d.domainName)
  const moderateAreas = domainResults.filter(d => d.level === 'moderate').map(d => d.domainName)
  const strengths = domainResults.filter(d => d.level === 'strong').map(d => d.domainName)

  const recommendedTopics: ACTRecommendedTopic[] = []
  // Prioritize by exam weight (questionTarget) so highest-impact topics surface first.
  const examWeight = (id: string) => ACT_DOMAINS.find(d => d.id === id)?.questionTarget ?? 0
  const weakDomainResults = [...domainResults.filter(d => d.level === 'weak')].sort((a, b) => examWeight(b.domainId) - examWeight(a.domainId))
  const moderateDomainResults = [...domainResults.filter(d => d.level === 'moderate')].sort((a, b) => examWeight(b.domainId) - examWeight(a.domainId))
  for (const wd of weakDomainResults) {
    const domainDef = ACT_DOMAINS.find(d => d.id === wd.domainId)
    if (!domainDef) continue
    const missedSlugs = new Set<string>()
    questions.forEach((q, i) => { if (q.domain === wd.domainId && (answers[i] === undefined || answers[i] !== q.correctAnswer)) missedSlugs.add(q.topicSlug) })
    const slugs = missedSlugs.size > 0 ? [...missedSlugs].slice(0, 2) : domainDef.topicSlugs.slice(0, 2)
    for (const slug of slugs) { if (recommendedTopics.length < 5) recommendedTopics.push({ slug, name: slugToReadableName(slug), domainId: wd.domainId, priority: 'high' }) }
  }
  for (const md of moderateDomainResults) {
    if (recommendedTopics.length >= 5) break
    const domainDef = ACT_DOMAINS.find(d => d.id === md.domainId)
    if (!domainDef) continue
    const missedSlugs = new Set<string>()
    questions.forEach((q, i) => { if (q.domain === md.domainId && (answers[i] === undefined || answers[i] !== q.correctAnswer)) missedSlugs.add(q.topicSlug) })
    const slug = missedSlugs.size > 0 ? [...missedSlugs].values().next().value : domainDef.topicSlugs[0]
    if (slug) recommendedTopics.push({ slug, name: slugToReadableName(slug), domainId: md.domainId, priority: 'medium' })
  }

  return { form, totalCorrect, totalQuestions, percentage, estimatedComposite, domains: domainResults, weakAreas, moderateAreas, strengths, recommendedTopics: recommendedTopics.slice(0, 5) }
}

export function pickNextForm(previousForms: number[]): number {
  if (previousForms.length === 0) return 1
  const last = previousForms[previousForms.length - 1]
  return last >= TOTAL_FORMS ? 1 : last + 1
}

const SLUG_LABELS: Record<string, string> = {
  'grammar-usage': 'Grammar & Usage',
  'sentence-structure': 'Sentence Structure',
  'rhetorical-skills': 'Rhetorical Skills',
  'pre-algebra-basics': 'Pre-Algebra Basics',
  'algebra-equations': 'Algebra & Equations',
  'geometry-trig': 'Geometry & Trigonometry',
  'advanced-math': 'Advanced Math',
  'main-idea-inference': 'Main Idea & Inference',
  'detail-vocabulary': 'Detail & Vocabulary',
  'passage-analysis': 'Passage Analysis',
  'data-representation': 'Data Representation',
  'research-summaries': 'Research Summaries',
  'conflicting-viewpoints': 'Conflicting Viewpoints',
}

function slugToReadableName(slug: string): string {
  return SLUG_LABELS[slug] ?? slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
}
