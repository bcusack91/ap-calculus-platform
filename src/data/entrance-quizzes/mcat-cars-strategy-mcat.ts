/**
 * Entrance Quiz — MCAT CARS Strategy
 * 14 questions · 7 parts (2 per part)
 * Part titles match the interactive lesson's "Part N of 7" lines
 * (re-aligned Nov 2026 so a mastered part skips the right lesson part).
 * Every item tests a reading strategy, never outside content knowledge.
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const P1 = 'Understanding the CARS Section'
const P2 = 'Active Reading Techniques'
const P3 = 'Eliminating Wrong Answers'
const P4 = 'Handling Difficult Passages'
const P5 = 'Question-Specific Strategies'
const P6 = 'Tone & Rhetoric'
const P7 = 'Long-Term CARS Improvement Plan'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Understanding the CARS Section
  { id: 'mcs-ent-1a', question: 'A CARS question describes a city policy that the passage never mentions and asks how the author would most likely judge it. In the AAMC framework, this question tests:', options: ['Foundations of Comprehension, recalling what the text states', 'Reasoning Within the Text, tracing how the argument works', 'Reasoning Beyond the Text, applying ideas to a new case', 'Outside knowledge of how such policies have usually fared'], correctIndex: 2, explanation: 'Carrying the author\'s ideas into a situation the passage never discusses is Reasoning Beyond the Text, the largest of the three skill categories (about 40% of questions). Foundations of Comprehension asks what the text says, Reasoning Within the Text asks how the argument works and what follows from it, and outside knowledge is never what CARS rewards.', partNumber: 1, partTitle: P1 },
  { id: 'mcs-ent-1b', question: 'The CARS section consists of approximately how many passages and questions?', options: ['5 passages, 30 questions', '12 passages, 60 questions', '7 passages, 40 questions', '9 passages, 53 questions'], correctIndex: 3, explanation: 'CARS has about 9 passages with roughly 6 questions each, 53 questions in all, to be completed in 90 minutes. That is where the budget of about 10 minutes per passage comes from.', partNumber: 1, partTitle: P1 },

  // Part 2 — Active Reading Techniques
  { id: 'mcs-ent-2a', question: 'When first reading a CARS passage, the most effective strategy is to:', options: ['Read actively for the main idea, tone, and structure', 'Read every word closely and commit the details to memory', 'Skim the first and last sentence of each paragraph', 'Go straight to the questions and hunt for the answers'], correctIndex: 0, explanation: 'Active reading captures what the questions turn on: each paragraph\'s point, the author\'s stance, and the structural shifts between paragraphs. Details can be found again when a question needs them, so memorizing them wastes time; skimming topic sentences misses the turns in the argument; and answering before reading leaves you no map of the passage.', partNumber: 2, partTitle: P2 },
  { id: 'mcs-ent-2b', question: 'A passage\'s first paragraph claims that city parks reduce stress. The second paragraph reads: "In one city study, residents living within a block of a park reported far lower stress than those living farther away." In a paragraph map, the best tag for the second paragraph is:', options: ['Turn: the author begins to reject the opening claim', 'Evidence: a study that supports the opening claim', 'Verdict: the author\'s final judgment on city parks', 'Detail to memorize: the study\'s exact setting and result'], correctIndex: 1, explanation: 'A paragraph map tags each paragraph by its role, and this one backs the first paragraph\'s claim with a study, so its role is evidence. Nothing pivots (there is no "however"), it is not where the author lands, and the point of the map is to record WHERE details sit, not to memorize them.', partNumber: 2, partTitle: P2 },

  // Part 3 — Eliminating Wrong Answers
  { id: 'mcs-ent-3a', question: 'The "opposite" trap in CARS answer choices is best described as an answer that:', options: ['Uses vocabulary that never appears anywhere in the passage', 'States a true fact the passage never discusses', 'Reverses the direction of the passage\'s own argument', 'Is correct in substance but stated too extremely'], correctIndex: 2, explanation: 'An opposite answer borrows the passage\'s own language and flips its direction, which is why it feels familiar and tempting. Unfamiliar wording is not itself a flaw, an unmentioned true fact is the out-of-scope trap, and an overstated answer is the too-extreme trap.', partNumber: 3, partTitle: P3 },
  { id: 'mcs-ent-3b', question: 'An author argues that a city\'s zoning reform has modestly lowered rents, while conceding that it has done little for the poorest renters. Which answer choice best survives elimination as the author\'s view?', options: ['The reform has solved the city\'s housing affordability crisis', 'The reform has had no real effect on rents across the city', 'The reform should be paired with new rent-control laws', 'The reform eased rents somewhat but left the poorest behind'], correctIndex: 3, explanation: 'The surviving choice keeps both the modest gain and the concession, in the same measured tone. "Solved the crisis" is too extreme, "no real effect" is the opposite of the author\'s claim, and pairing the reform with rent control is out of scope, since the author never proposes it.', partNumber: 3, partTitle: P3 },

  // Part 4 — Handling Difficult Passages
  { id: 'mcs-ent-4a', question: 'On a very hard CARS passage, the two-pass approach means:', options: ['Reading it twice in full before looking at any of the questions', 'One read for the gist, then letting questions send you back', 'Answering the questions first, then reading only the cited lines', 'Reading the first pass slowly and the second pass at a skim'], correctIndex: 1, explanation: 'Pass 1 is a single read for the gist without stopping to reread; pass 2 uses each question to send you back to the specific lines it needs. Two full reads burn the passage\'s time budget, skipping the first read leaves you no map, and a slow first pass spends the time where it helps least.', partNumber: 4, partTitle: P4 },
  { id: 'mcs-ent-4b', question: 'A passage reads: "The hermeneutic turn does not abolish the reader\'s prejudgments but renders them productive, so that interpretation proceeds from them rather than in spite of them." Without decoding the jargon, what can a reader most safely conclude?', options: ['Prejudgments are kept and put to work, not eliminated', 'The hermeneutic turn is rejected as a muddled, confused idea', 'Interpretation must be cleansed of every prejudgment', 'Prejudgment and interpretation are one and the same'], correctIndex: 0, explanation: 'The load-bearing words are the contrasts: "does not abolish... but renders productive" and "from them rather than in spite of them." Those alone show that prejudgments are retained and used. Saying interpretation must be free of prejudgment reverses the sentence, nothing in it rejects the idea it describes, and a contrast between two things is not a claim that they are identical.', partNumber: 4, partTitle: P4 },

  // Part 5 — Question-Specific Strategies
  { id: 'mcs-ent-5a', question: 'A main-idea question in CARS asks you to:', options: ['Identify the central argument of the entire passage', 'Locate a specific factual detail stated in the passage', 'Predict what happens in a scenario the passage never mentions', 'Evaluate the author\'s credentials on the subject'], correctIndex: 0, explanation: 'A main-idea question wants the thesis or primary purpose of the whole passage, so it should match the author\'s main idea you formed while reading, and a choice true of only one paragraph is too narrow. Retrieving a single detail, applying the passage to a new scenario, and judging the author personally are different tasks.', partNumber: 5, partTitle: P5 },
  { id: 'mcs-ent-5b', question: 'A passage states: "The curator expected complaints after removing the wall labels, yet few visitors asked for them back, and time spent in the unlabeled rooms grew." Which inference stays closest to the text?', options: ['Wall labels make museums less enjoyable for most of their visitors', 'The curator was trained in contemporary art theory', 'Visitors largely did not treat the missing labels as a loss', 'Visitors demanded that the labels be restored right away'], correctIndex: 2, explanation: 'A good inference is unstated but forced by the text, one small step beyond it: few requests and longer visits show that visitors did not much miss the labels. Claiming labels make museums worse in general is a big leap, the curator\'s training is outside the passage, and a demand to restore the labels contradicts it.', partNumber: 5, partTitle: P5 },

  // Part 6 — Tone & Rhetoric
  { id: 'mcs-ent-6a', question: 'In CARS, the author\'s "tone" refers to:', options: ['The difficulty of the vocabulary that the author chooses to use', 'The overall organization of the passage\'s paragraphs', 'The number of examples the author supplies as support', 'The author\'s attitude toward the subject being discussed'], correctIndex: 3, explanation: 'Tone is the author\'s attitude, such as supportive, critical, neutral, dismissive, or ambivalent, read from charged words and qualifying language across the whole passage. Vocabulary difficulty, paragraph organization, and the amount of evidence describe the passage, not the author\'s stance toward its subject.', partNumber: 6, partTitle: P6 },
  { id: 'mcs-ent-6b', question: 'An author writes: "Some will object that the archive costs too much to maintain. Yet the cost of losing it would be far greater." The first sentence functions as:', options: ['An appeal to authority that backs up the author\'s main claim', 'A counterargument the author raises in order to rebut it', 'An analogy that clarifies the value of the archive', 'Qualifying language that softens the author\'s thesis'], correctIndex: 1, explanation: 'The author voices an opposing view ("some will object") and answers it at once with "Yet," which is how a counterargument works. No expert is cited, nothing is compared to anything else, and the sentence states an objection rather than hedging the author\'s own claim.', partNumber: 6, partTitle: P6 },

  // Part 7 — Long-Term CARS Improvement Plan
  { id: 'mcs-ent-7a', question: 'Prior scientific or factual knowledge about a CARS passage topic should be:', options: ['Used freely to fill in any gaps that the passage leaves', 'Used whenever the passage seems to agree with it', 'Set aside, since only the passage can justify an answer', 'Used to judge how credible the author is overall'], correctIndex: 2, explanation: 'Choosing answers from outside knowledge is one of the most common CARS mistakes: it makes true-but-unsupported choices look right. Every credited answer has to be defensible from the passage alone, outside knowledge that agrees with the passage adds nothing, and the author\'s credibility is never what a question asks.', partNumber: 7, partTitle: P7 },
  { id: 'mcs-ent-7b', question: 'In the long-term CARS plan, a student who is about two months from test day should mainly be:', options: ['Reading dense non-fiction daily, with no timed practice at all', 'Doing one or two timed passages daily, with full review', 'Taking a full-length CARS section every single day', 'Resting and lightly reviewing strategy notes only'], correctIndex: 1, explanation: 'The plan builds in stages: daily challenging reading from three or more months out, one or two timed passages a day with review at two months, weekly full-length sections at one month, and light practice in test week. Daily full sections overshoot the schedule, and rest belongs to the final week.', partNumber: 7, partTitle: P7 },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: P1 },
    { partNumber: 2, partTitle: P2 },
    { partNumber: 3, partTitle: P3 },
    { partNumber: 4, partTitle: P4 },
    { partNumber: 5, partTitle: P5 },
    { partNumber: 6, partTitle: P6 },
    { partNumber: 7, partTitle: P7 },
  ]
}
