/**
 * ACT — Question of the Day
 *
 * Self-contained question pool covering all 4 ACT sections.
 * Deterministic per calendar day so every visitor sees the same question.
 */

interface Question {
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  section: string
}

const QUESTION_POOL: Question[] = [
  // English
  { section: 'English', question: 'Which version of the underlined portion is most concise? "She was very extremely tired after the long day."', options: ['very extremely tired', 'extremely tired', 'very, extremely tired', 'tired to an extreme degree'], correctAnswer: 1, explanation: '"Very" and "extremely" are redundant intensifiers. "Extremely tired" is the most concise option that retains the intended emphasis.' },
  { section: 'English', question: 'Choose the correct punctuation: "The students who studied _____ scored well on the exam."', options: ['hard,', 'hard;', 'hard', 'hard:'], correctAnswer: 2, explanation: 'No punctuation is needed between the verb "studied" and the adverb "hard" — they form a natural phrase. Adding punctuation would disrupt the sentence flow.' },
  { section: 'English', question: 'Which transition best connects these sentences? "The weather forecast predicted rain. _____ the outdoor event proceeded as planned."', options: ['Therefore,', 'Nevertheless,', 'Similarly,', 'In addition,'], correctAnswer: 1, explanation: '"Nevertheless" signals a contrast — the event continued despite the rain forecast. "Therefore" would imply the event was canceled because of rain.' },
  { section: 'English', question: 'Identify the correct subject-verb agreement: "Neither the teacher nor the students _____ ready for the assembly."', options: ['was', 'were', 'is', 'has been'], correctAnswer: 1, explanation: 'With "neither…nor," the verb agrees with the nearest subject ("students"), which is plural. Therefore "were" is correct.' },
  { section: 'English', question: 'Which sentence uses a semicolon correctly?', options: ['I like pizza; and pasta.', 'I went to the store; I bought milk.', 'The dog; barked loudly.', 'She ran; quickly.'], correctAnswer: 1, explanation: 'A semicolon connects two independent clauses. "I went to the store" and "I bought milk" are both complete sentences.' },
  { section: 'English', question: 'Which is the correct use of "its" vs. "it\'s"? "The cat licked _____ paw."', options: ['it\'s', 'its', 'its\'', 'its\'s'], correctAnswer: 1, explanation: '"Its" (no apostrophe) is the possessive form. "It\'s" is a contraction of "it is." The cat\'s paw = its paw.' },
  { section: 'English', question: '"The old, creaky, wooden door" — what type of error, if any, exists?', options: ['Run-on sentence', 'No error — commas separate coordinate adjectives', 'Missing semicolon', 'Dangling modifier'], correctAnswer: 1, explanation: 'Coordinate adjectives (adjectives that independently modify the noun) are separated by commas. "Old," "creaky," and "wooden" each directly describe "door."' },
  // Math
  { section: 'Math', question: 'If 3x + 7 = 22, what is the value of x?', options: ['3', '5', '7', '15'], correctAnswer: 1, explanation: '3x + 7 = 22 → 3x = 15 → x = 5.' },
  { section: 'Math', question: 'What is the slope of the line passing through (2, 3) and (6, 11)?', options: ['1', '2', '3', '4'], correctAnswer: 1, explanation: 'Slope = $(y_{2} - y_{1})/(x_{2} - x_{1})$ = (11 − 3)/(6 − 2) = 8/4 = 2.' },
  { section: 'Math', question: 'A circle has a radius of 5. What is its area?', options: ['10π', '25π', '50π', '5π'], correctAnswer: 1, explanation: 'Area = $\\pi r^{2}$ = $\\pi (5)^{2}$ = 25π.' },
  { section: 'Math', question: 'If f(x) = $2x^{2}$ − 3x + 1, what is f(2)?', options: ['3', '4', '5', '7'], correctAnswer: 0, explanation: 'f(2) = 2(4) − 3(2) + 1 = 8 − 6 + 1 = 3.' },
  { section: 'Math', question: 'What is the value of |−7| + |3|?', options: ['4', '10', '−4', '−10'], correctAnswer: 1, explanation: '|−7| = 7 and |3| = 3, so 7 + 3 = 10.' },
  { section: 'Math', question: 'A triangle has sides of length 3, 4, and 5. What type of triangle is it?', options: ['Equilateral', 'Isosceles', 'Right', 'Obtuse'], correctAnswer: 2, explanation: '$3^{2}$ + $4^{2}$ = 9 + 16 = 25 = $5^{2}$. Since it satisfies the Pythagorean theorem, it is a right triangle.' },
  { section: 'Math', question: 'What is 30% of 250?', options: ['50', '75', '80', '100'], correctAnswer: 1, explanation: '30% × 250 = 0.30 × 250 = 75.' },
  { section: 'Math', question: 'If $\\log_{2}(x)$ = 5, what is x?', options: ['10', '25', '32', '64'], correctAnswer: 2, explanation: '$\\log_{2}(x)$ = 5 means $2^{5}$ = x, so x = 32.' },
  // Reading
  { section: 'Reading', question: 'The main purpose of a topic sentence in a paragraph is to:', options: ['Provide supporting detail', 'State the central idea of the paragraph', 'Transition to the next paragraph', 'Conclude the argument'], correctAnswer: 1, explanation: 'A topic sentence states the main idea or claim of the paragraph. Supporting sentences then develop that idea with evidence and details.' },
  { section: 'Reading', question: 'When an author uses irony, they are:', options: ['Being literal and direct', 'Saying the opposite of what they mean for effect', 'Making a comparison using "like" or "as"', 'Exaggerating for emphasis'], correctAnswer: 1, explanation: 'Irony involves expressing meaning through language that normally signifies the opposite, creating contrast between expectation and reality.' },
  { section: 'Reading', question: 'An inference is best described as:', options: ['A fact stated directly in the text', 'A conclusion drawn from evidence and reasoning', 'The author\'s stated opinion', 'A summary of the passage'], correctAnswer: 1, explanation: 'An inference is a logical conclusion that is not explicitly stated but can be derived from the evidence, context, and reasoning provided in the text.' },
  { section: 'Reading', question: 'Which of these is a primary source?', options: ['A biography of Lincoln', 'A textbook chapter on the Civil War', 'Lincoln\'s Gettysburg Address', 'A documentary about Lincoln'], correctAnswer: 2, explanation: 'A primary source is an original, firsthand account. Lincoln\'s Gettysburg Address is a primary source; the others are secondary sources that interpret or describe events.' },
  { section: 'Reading', question: 'The tone of a passage that uses words like "magnificent," "breathtaking," and "extraordinary" is most likely:', options: ['Critical', 'Neutral', 'Admiring', 'Humorous'], correctAnswer: 2, explanation: 'Words like "magnificent," "breathtaking," and "extraordinary" convey admiration and enthusiasm, indicating an admiring tone.' },
  // Science
  { section: 'Science', question: 'In an experiment, the variable that the researcher changes is called the:', options: ['Dependent variable', 'Independent variable', 'Control variable', 'Confounding variable'], correctAnswer: 1, explanation: 'The independent variable is deliberately changed by the researcher. The dependent variable is what is measured in response.' },
  { section: 'Science', question: 'According to the pH scale, a solution with pH 3 is:', options: ['Neutral', 'Weakly basic', 'Strongly acidic', 'Strongly basic'], correctAnswer: 2, explanation: 'The pH scale ranges from 0-14. pH < 7 is acidic; pH 3 is strongly acidic. Neutral is pH 7; basic is pH > 7.' },
  { section: 'Science', question: 'If a graph shows a direct relationship between temperature and gas volume, as temperature increases:', options: ['Volume decreases', 'Volume stays the same', 'Volume increases', 'Pressure increases'], correctAnswer: 2, explanation: 'A direct (positive) relationship means both variables increase together. As temperature increases, gas volume increases (Charles\'s Law at constant pressure).' },
  { section: 'Science', question: 'Which of the following is the best conclusion from data showing a correlation between ice cream sales and drowning incidents?', options: ['Ice cream causes drowning', 'Drowning causes ice cream sales', 'A third variable (temperature) likely affects both', 'The data is unreliable'], correctAnswer: 2, explanation: 'Correlation does not imply causation. A confounding variable — hot weather — increases both ice cream sales and swimming (and thus drowning risk).' },
  { section: 'Science', question: 'A hypothesis is best described as:', options: ['A proven fact', 'A testable prediction based on observations', 'The conclusion of an experiment', 'A summary of data'], correctAnswer: 1, explanation: 'A hypothesis is a testable, falsifiable prediction about the relationship between variables, based on prior knowledge or observations.' },
  { section: 'Science', question: 'When scientists say a theory is "well-supported," they mean:', options: ['It has been proven beyond all doubt', 'It is backed by extensive, repeated evidence', 'It is an educated guess', 'It will never change'], correctAnswer: 1, explanation: 'In science, a theory is a well-substantiated explanation supported by extensive, repeated evidence. Theories can be refined as new evidence emerges.' },
  { section: 'Science', question: 'How many molecules of $CO_{2}$ are produced when one molecule of glucose $(C_{6}H_{12}O_{6})$ undergoes complete combustion?', options: ['1', '3', '6', '12'], correctAnswer: 2, explanation: '$C_{6}H_{12}O_{6}$ + $6O_{2}$ → $6CO_{2}$ + $6H_{2}O$. Complete combustion of one glucose molecule produces 6 molecules of $CO_{2}$.' },
  { section: 'Science', question: 'Which planet in our solar system has the shortest orbital period?', options: ['Venus', 'Mercury', 'Mars', 'Earth'], correctAnswer: 1, explanation: 'Mercury, being closest to the Sun, has the shortest orbital period at approximately 88 Earth days.' },
  { section: 'Science', question: 'In a food chain, energy transfer between trophic levels is approximately:', options: ['100%', '50%', '10%', '1%'], correctAnswer: 2, explanation: 'The 10% rule states that roughly 10% of energy is transferred from one trophic level to the next; the rest is lost as heat through metabolism.' },
  { section: 'Science', question: 'What does a control group in an experiment allow scientists to do?', options: ['Change the independent variable', 'Compare results with the experimental group', 'Eliminate all variables', 'Increase sample size'], correctAnswer: 1, explanation: 'A control group serves as a baseline. By comparing the experimental group\'s results to the control, scientists can determine the effect of the independent variable.' },
]

function dayOfYear(): number {
  const now = new Date()
  const start = new Date(now.getFullYear(), 0, 0)
  const diff = now.getTime() - start.getTime()
  return Math.floor(diff / (1000 * 60 * 60 * 24))
}

export interface ACTDailyQuestion {
  topicSlug: string
  section: string
  question: Omit<Question, 'section'>
  dayNumber: number
}

export function getDailyQuestions(): ACTDailyQuestion[] {
  const day = dayOfYear()
  const q = QUESTION_POOL[day % QUESTION_POOL.length]
  return [{
    topicSlug: 'act-' + q.section.toLowerCase(),
    section: q.section,
    question: { question: q.question, options: q.options, correctAnswer: q.correctAnswer, explanation: q.explanation },
    dayNumber: day,
  }]
}
