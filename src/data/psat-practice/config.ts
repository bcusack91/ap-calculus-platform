import type { PracticeExamConfig, PracticeQuestion } from '@/components/PracticeExam'

const RW_POOL: PracticeQuestion[] = [
  { question: 'Which phrase best replaces "a lot of" in formal writing?', options: ['Numerous', 'Tons of', 'A bunch of', 'A lot of is acceptable'], correctAnswer: 0, explanation: '"Numerous" is the most formal and precise replacement for "a lot of."', topic: 'writing-conventions' },
  { question: '"The committee have reached their decision." How should this be corrected?', options: ['No correction needed', '"The committee has reached its decision."', '"The committee have reached its decision."', '"The committees has reached their decision."'], correctAnswer: 1, explanation: 'In American English, "committee" is singular and takes "has" and "its."', topic: 'writing-conventions' },
  { question: 'A passage argues that social media harms teen mental health. The author\'s primary purpose is to:', options: ['Entertain', 'Persuade', 'Describe', 'Narrate'], correctAnswer: 1, explanation: 'Arguing a point (social media is harmful) is a persuasive purpose.', topic: 'reading-comprehension' },
  { question: 'Which sentence correctly uses parallel structure?', options: ['She likes running, swimming, and to bike.', 'She likes running, swimming, and biking.', 'She likes to run, swimming, and biking.', 'She likes run, swim, and bike.'], correctAnswer: 1, explanation: 'Parallel structure requires consistent form: "running, swimming, and biking" (all gerunds).', topic: 'writing-conventions' },
  { question: '"Despite the rain, the picnic was delightful." The word "despite" functions as:', options: ['A conjunction', 'A preposition showing contrast', 'An adverb', 'A pronoun'], correctAnswer: 1, explanation: '"Despite" is a preposition that introduces a contrasting condition.', topic: 'reading-comprehension' },
  { question: 'An author\'s use of short, choppy sentences typically creates a tone of:', options: ['Relaxation', 'Urgency or tension', 'Formality', 'Humor'], correctAnswer: 1, explanation: 'Short, choppy sentences create a sense of urgency, tension, or rapid action.', topic: 'reading-comprehension' },
  { question: '"The study found a correlation between sleep and grades. _____, students who slept more earned higher GPAs." Choose the best transition.', options: ['However', 'Specifically', 'Nevertheless', 'In contrast'], correctAnswer: 1, explanation: '"Specifically" introduces a detailed example that supports the previous general statement.', topic: 'writing-conventions' },
  { question: 'Which revision eliminates wordiness? "At this point in time, we need to make a decision."', options: ['Now, we need to decide.', 'At this point, we need to make a decision.', 'Currently at this time, a decision must be made by us.', 'No revision needed.'], correctAnswer: 0, explanation: '"Now, we need to decide" is the most concise version.', topic: 'writing-conventions' },
  { question: 'What is the meaning of "ubiquitous" based on context? "Smartphones have become ubiquitous, found in nearly every household."', options: ['Rare', 'Expensive', 'Found everywhere', 'Dangerous'], correctAnswer: 2, explanation: 'The context clue "found in nearly every household" indicates "ubiquitous" means found everywhere.', topic: 'vocabulary' },
  { question: 'The phrase "a double-edged sword" is an example of:', options: ['Simile', 'Metaphor', 'Hyperbole', 'Alliteration'], correctAnswer: 1, explanation: '"A double-edged sword" is a metaphor meaning something with both positive and negative consequences.', topic: 'reading-comprehension' },
  { question: 'An argument that attacks the person rather than their ideas commits which fallacy?', options: ['Straw man', 'Ad hominem', 'Red herring', 'Slippery slope'], correctAnswer: 1, explanation: 'Ad hominem attacks the character of the person making the argument rather than addressing the argument itself.', topic: 'reading-comprehension' },
  { question: 'Which citation format is commonly used in social sciences?', options: ['MLA', 'APA', 'Chicago', 'IEEE'], correctAnswer: 1, explanation: 'APA (American Psychological Association) style is standard in social sciences.', topic: 'writing-conventions' },
  { question: '"The findings suggest, but do not prove, a causal link." The word "suggest" implies:', options: ['Certainty', 'Tentativeness', 'Rejection', 'Confusion'], correctAnswer: 1, explanation: '"Suggest" implies tentativeness — the evidence points toward but does not confirm the conclusion.', topic: 'reading-comprehension' },
  { question: 'A claim supported by both statistical data and expert testimony is strengthened by:', options: ['Anecdotal evidence only', 'Multiple types of evidence', 'Emotional appeal alone', 'Repetition'], correctAnswer: 1, explanation: 'Using multiple types of evidence (quantitative + authoritative) strengthens a claim.', topic: 'reading-comprehension' },
  { question: 'Identify the correct possessive: "The _____ books were on the shelf."', options: ["student\'s (one student)", "students (no possessive needed)", "students\' (multiple students)", "Both A and C could be correct depending on context"], correctAnswer: 3, explanation: 'Both are valid: "student\'s" = one student\'s books; "students\'" = multiple students\' books. Context determines which.', topic: 'writing-conventions' },
]

const MATH_POOL: PracticeQuestion[] = [
  { question: 'If 2x − 5 = 11, what is x?', options: ['3', '8', '5.5', '16'], correctAnswer: 1, explanation: '2x = 16, so x = 8.', topic: 'algebra' },
  { question: 'What is √(144)?', options: ['11', '12', '13', '14'], correctAnswer: 1, explanation: '12 × 12 = 144, so √144 = 12.', topic: 'arithmetic' },
  { question: 'A triangle has angles of 40° and 60°. What is the third angle?', options: ['70°', '80°', '90°', '100°'], correctAnswer: 1, explanation: 'Sum of angles = 180°. Third angle = 180° − 40° − 60° = 80°.', topic: 'geometry' },
  { question: 'What is the slope of the line y = −3x + 7?', options: ['7', '3', '−3', '−7'], correctAnswer: 2, explanation: 'In y = mx + b form, the slope m = −3.', topic: 'algebra' },
  { question: 'If a rectangle has perimeter 30 and width 5, what is its length?', options: ['10', '15', '20', '25'], correctAnswer: 0, explanation: 'P = 2(l + w) → 30 = 2(l + 5) → l + 5 = 15 → l = 10.', topic: 'geometry' },
  { question: 'What is 15% of 200?', options: ['15', '20', '30', '35'], correctAnswer: 2, explanation: '0.15 × 200 = 30.', topic: 'arithmetic' },
  { question: 'Solve: |x − 3| = 5', options: ['x = 8 only', 'x = −2 only', 'x = 8 or x = −2', 'x = 2 or x = −8'], correctAnswer: 2, explanation: '|x − 3| = 5 → x − 3 = 5 or x − 3 = −5 → x = 8 or x = −2.', topic: 'algebra' },
  { question: 'What is the mean of the set {4, 8, 12, 16, 20}?', options: ['10', '12', '14', '15'], correctAnswer: 1, explanation: 'Mean = (4 + 8 + 12 + 16 + 20)/5 = 60/5 = 12.', topic: 'statistics' },
  { question: 'Factor: x² − 9', options: ['(x − 3)²', '(x + 3)²', '(x − 3)(x + 3)', '(x − 9)(x + 1)'], correctAnswer: 2, explanation: 'Difference of squares: x² − 9 = (x − 3)(x + 3).', topic: 'algebra' },
  { question: 'A line passes through the origin with slope 2. What is its equation?', options: ['y = 2x', 'y = x + 2', 'y = 2x + 1', 'x = 2y'], correctAnswer: 0, explanation: 'Through origin (b = 0) with slope m = 2: y = 2x.', topic: 'algebra' },
  { question: 'What is the probability of rolling a sum of 7 with two dice?', options: ['1/6', '1/12', '1/36', '5/36'], correctAnswer: 0, explanation: 'There are 6 ways to roll 7 out of 36 total outcomes: 6/36 = 1/6.', topic: 'probability' },
  { question: 'Convert 0.75 to a fraction in lowest terms.', options: ['3/4', '7/5', '75/100', '15/20'], correctAnswer: 0, explanation: '0.75 = 75/100 = 3/4 in lowest terms.', topic: 'arithmetic' },
  { question: 'What is the volume of a cube with edge length 4?', options: ['16', '48', '64', '256'], correctAnswer: 2, explanation: 'V = s³ = 4³ = 64.', topic: 'geometry' },
  { question: 'If f(x) = 3x + 1, what is f(−2)?', options: ['−7', '−5', '5', '7'], correctAnswer: 1, explanation: 'f(−2) = 3(−2) + 1 = −6 + 1 = −5.', topic: 'functions' },
  { question: 'In a right triangle, if one leg is 3 and the hypotenuse is 5, the other leg is:', options: ['2', '4', '6', '8'], correctAnswer: 1, explanation: 'a² + 3² = 5² → a² = 25 − 9 = 16 → a = 4.', topic: 'geometry' },
]

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]] }
  return a
}

const pools: Record<string, PracticeQuestion[]> = { rw: RW_POOL, math: MATH_POOL }

export const config: PracticeExamConfig = {
  subject: 'PSAT/NMSQT',
  description: 'Practice each PSAT section with timed, scored questions to prepare for the National Merit Scholarship Qualifying Test.',
  backLink: { href: '/', label: 'Home' },
  ctaLinks: [
    { href: '/sat-practice', label: 'SAT Practice' },
    { href: '/sat-daily-question', label: 'SAT Daily Question' },
  ],
  accent: 'sky',
  sections: [
    { id: 'rw', name: 'Reading & Writing', description: 'Craft and structure, information and ideas, standard English conventions, and expression of ideas.', questionCount: 15, timeLimitMinutes: 20 },
    { id: 'math', name: 'Math', description: 'Algebra, problem-solving, advanced math, and geometry/trigonometry.', questionCount: 15, timeLimitMinutes: 25 },
  ],
  getQuestions: async (sectionId: string) => shuffle(pools[sectionId] ?? []),
  aboutInfo: {
    title: 'About the PSAT/NMSQT',
    columns: [
      { heading: 'Test Structure', items: ['Reading & Writing: 54 questions (64 min)', 'Math: 44 questions (70 min)', 'Total: 2 hours 14 minutes'] },
      { heading: 'Scoring', items: ['Each section: 160–760', 'Total: 320–1520', 'Selection Index (NMSC): 48–228', 'Semifinalist cutoff varies by state'] },
    ],
  },
}
