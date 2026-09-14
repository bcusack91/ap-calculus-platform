/**
 * MCAT CARS Exit Quiz
 * Covers: reading comprehension, reasoning, argument analysis, inference
 */

import { authoredFor } from './mcat-authored-pool'
import { mcatSubtopicPool } from './mcat-subtopic-pool'
import type { MCATQuizQuestion } from './mcat-general-chemistry'
import type { ExitQuizQuestion } from './sat-linear-equations-inequalities'
import { shuffleArray } from '@/lib/shuffle-options'

const questionPool: MCATQuizQuestion[] = [
  {
    question: 'A passage argues that modern architecture has abandoned humanistic values in favor of pure functionality. The author\'s main thesis is best described as:',
    options: ['Modern architecture is more efficient than classical architecture', 'Good architecture should balance human values with function', 'Functional efficiency should be the chief goal of building design', 'Classical styles should entirely replace modern architecture'],
    correctAnswer: 1,
    explanation: 'The author criticizes "abandoning humanistic values" for "pure functionality," implying the two should coexist — a balanced thesis grounded in the stem, not an extreme position. (The answer stays within the passage\'s terms — human values and functionality — without importing outside concerns.)',
    difficulty: 'medium',
  },
  {
    question: 'If an author states "some critics argue that..." and then provides counterevidence, the author\'s purpose is most likely to:',
    options: ['Support the critics\' position', 'Present a balanced view without taking a side', 'Refute the critics\' position', 'Introduce a new topic'],
    correctAnswer: 2,
    explanation: 'When an author presents a viewpoint ("some critics argue") and then provides counterevidence, the structure indicates the author is refuting or undermining that position.',
    difficulty: 'easy',
  },
  {
    question: 'In a passage about the ethics of genetic engineering, the author writes: "We must ask not whether we can, but whether we should." This rhetorical strategy is:',
    options: ['Citing expert authority to end the debate', 'Presenting only two options when more exist', 'Shifting the question from ability to ethics', 'Attacking the motives of genetic engineers'],
    correctAnswer: 2,
    explanation: 'The author shifts the frame from a question of technological capability ("can") to one of moral responsibility ("should"), which is a reframing strategy. No expert is cited, no one is attacked, and the sentence does not claim that only two options exist; it redirects which question matters.',
    difficulty: 'medium',
  },
  {
    question: 'An author describes two conflicting theories and then states "the truth likely lies somewhere between these extremes." This approach is best characterized as:',
    options: ['Appeal to moderation', 'Reductio ad absurdum', 'False dichotomy', 'Straw man argument'],
    correctAnswer: 0,
    explanation: 'Claiming the truth lies *between* two extremes is an appeal to moderation (the golden mean). It is not a false dichotomy, which would insist that one of the two extremes must be true, and neither theory is exaggerated or pushed to an absurd conclusion.',
    difficulty: 'medium',
  },
  {
    question: 'A passage discusses how the printing press democratized knowledge. Which inference is most strongly supported?',
    options: ['Everyone could read once the printing press was invented', 'The printing press had no effect on religious institutions', 'Wider access to printed texts helped raise literacy over time', 'The printing press was invented primarily for entertainment'],
    correctAnswer: 2,
    explanation: 'If the printing press "democratized knowledge," it logically follows that greater access to printed materials would contribute to increased literacy over time. Claiming that everyone could read is too extreme, and the claims about religious institutions and entertainment are unsupported or contradicted by the premise.',
    difficulty: 'easy',
  },
  {
    question: 'When an author uses a personal anecdote in an otherwise academic essay, the most likely purpose is to:',
    options: ['Reveal the author\'s bias on the topic', 'Make the argument more relatable', 'Weaken the essay\'s academic rigor', 'Replace empirical evidence with opinion'],
    correctAnswer: 1,
    explanation: 'Personal anecdotes in academic writing typically serve a rhetorical purpose: making abstract arguments more concrete, engaging and persuasive for the reader. An author would not deliberately expose bias, weaken rigor, or abandon evidence as the purpose of the anecdote.',
    difficulty: 'easy',
  },
  {
    question: 'A passage states: "While correlation does not imply causation, the consistent association across multiple studies suggests a genuine relationship." The author\'s tone toward the evidence is best described as:',
    options: ['Largely dismissive', 'Cautiously supportive', 'Uncritically accepting', 'Deeply skeptical'],
    correctAnswer: 1,
    explanation: 'The author acknowledges limitations ("correlation does not imply causation") but still sees value in the evidence ("consistent association suggests a genuine relationship"), indicating cautious support.',
    difficulty: 'medium',
  },
  {
    question: 'An argument that "we should fund space exploration because great civilizations have always looked outward" is primarily an example of:',
    options: ['Empirical reasoning', 'Appeal to tradition', 'Deductive reasoning', 'Cost-benefit analysis'],
    correctAnswer: 1,
    explanation: 'The argument justifies a current action by pointing to what "great civilizations have always" done — this is an appeal to tradition or historical precedent.',
    difficulty: 'easy',
  },
  {
    question: 'In a passage, the author refers to an opposing view as "simplistic" and "reductive." The author\'s attitude toward this view is:',
    options: ['Neutral and objective', 'Warm and approving', 'Dismissive and critical', 'Ambivalent and unsure'],
    correctAnswer: 2,
    explanation: 'Words like "simplistic" and "reductive" carry negative connotations, indicating the author views the opposing position as oversimplified and inadequate.',
    difficulty: 'easy',
  },
  {
    question: 'If an author presents statistical data followed by the phrase "these numbers tell only part of the story," the implicit message is:',
    options: ['The statistics are unreliable', 'Qualitative factors also matter', 'The data supports the opposite conclusion', 'More research is impossible'],
    correctAnswer: 1,
    explanation: 'By saying numbers tell "only part of the story," the author implies there are additional dimensions (likely qualitative or contextual) that are also important to consider.',
    difficulty: 'medium',
  },
  {
    question: 'A passage discusses both benefits and risks of artificial intelligence. The author concludes with a call for "thoughtful regulation." The overall structure is:',
    options: ['Problem identified, then a sweeping solution', 'Chronological history, then a forecast', 'Balanced analysis, then a moderate proposal', 'Emotional appeal, then a call for a ban'],
    correctAnswer: 2,
    explanation: 'Presenting both benefits and risks (balanced analysis) and concluding with "thoughtful regulation" (a moderate recommendation) represents a common CARS pattern of balanced-then-moderate. The passage weighs benefits as well as risks, so it is not a problem followed by a sweeping fix, a chronology, or an emotional plea for a ban.',
    difficulty: 'medium',
  },
  {
    question: 'Which of the following would most weaken an author\'s argument that classical music improves cognitive function?',
    options: ['A study showing that most people enjoy classical music', 'A meta-analysis finding no cognitive benefit from the music', 'An anecdote about a musician who is also a scientist', 'A historical account of classical music\'s popularity'],
    correctAnswer: 1,
    explanation: 'A meta-analysis (which aggregates multiple studies) finding no significant cognitive improvement from classical music exposure would directly contradict and weaken the causal claim. Enjoyment, popularity, and a single musician-scientist anecdote say nothing about cognitive function, or at most lend weak support.',
    difficulty: 'medium',
  },
  {
    question: 'An author writes: "The policy was well-intentioned, yet its consequences were devastating." This sentence structure creates:',
    options: ['A logical fallacy that undermines the claim', 'An ironic contrast between intent and outcome', 'A false equivalence that treats both as equal', 'A circular argument restating the policy\'s aim'],
    correctAnswer: 1,
    explanation: 'The contrast between "well-intentioned" and "devastating consequences" creates irony through the juxtaposition of good intentions with bad outcomes.',
    difficulty: 'easy',
  },
  {
    question: 'In CARS passages, when "some scholars" or "critics" are referenced without specific citation, the author is most likely:',
    options: ['Borrowing others\' ideas without giving credit', 'Setting up a general view to respond to', 'Providing strong evidence for their argument', 'Attacking the scholars\' personal character'],
    correctAnswer: 1,
    explanation: 'Vague references to "some scholars" or "critics" typically introduce a generalized opposing viewpoint that the author then addresses or refutes. An uncited, generalized reference is too vague to count as strong evidence, and it neither plagiarizes nor attacks anyone personally.',
    difficulty: 'easy',
  },
]

// Deep pool: local questions + the authored competitive bank for this area
// (audit F1). Authored items carry subtopic tags the selector prefers.
const fullPool = [...questionPool, ...authoredFor(['mcat-cars-'])]

export function generateExitQuiz(count: number = 10, topicSlug?: string): ExitQuizQuestion[] {
  const source = topicSlug ? mcatSubtopicPool(fullPool, 'cars', topicSlug) : fullPool
  const shuffled = shuffleArray(source)
  return shuffled.slice(0, Math.min(count, shuffled.length)).map((q, i) => ({
    id: `cars-${i}`,
    question: q.question,
    options: q.options,
    correctIndex: q.correctAnswer,
    explanation: q.explanation,
    category: q.subtopicSlug ?? 'mcat-cars',
  }))
}
