/**
 * MCAT CARS Exit Quiz
 * Covers: reading comprehension, reasoning, argument analysis, inference
 */

import type { MCATQuizQuestion } from './mcat-general-chemistry'
import type { ExitQuizQuestion } from './sat-linear-equations-inequalities'

const questionPool: MCATQuizQuestion[] = [
  {
    question: 'A passage argues that modern architecture has abandoned humanistic values in favor of pure functionality. The author\'s main thesis is best described as:',
    options: ['Modern architecture is more efficient than classical architecture', 'Architectural design should prioritize both aesthetic and human needs', 'Functionalism is the optimal design philosophy', 'Classical architecture should be revived entirely'],
    correctAnswer: 1,
    explanation: 'The author criticizes "abandoning humanistic values" for "pure functionality," implying that both should coexist. This is a balanced thesis, not an extreme position.',
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
    options: ['Appeal to authority', 'False dichotomy', 'Reframing the question from capability to morality', 'Ad hominem attack'],
    correctAnswer: 2,
    explanation: 'The author shifts the frame from a question of technological capability ("can") to one of moral responsibility ("should"), which is a reframing strategy.',
    difficulty: 'medium',
  },
  {
    question: 'An author describes two conflicting theories and then states "the truth likely lies somewhere between these extremes." This approach is best characterized as:',
    options: ['Dialectical synthesis', 'Reductio ad absurdum', 'Appeal to tradition', 'Straw man argument'],
    correctAnswer: 0,
    explanation: 'Dialectical synthesis presents a thesis and antithesis, then proposes a synthesis that incorporates elements of both — "the truth lies between the extremes."',
    difficulty: 'medium',
  },
  {
    question: 'A passage discusses how the printing press democratized knowledge. Which inference is most strongly supported?',
    options: ['Everyone could read after the invention of the printing press', 'The printing press had no effect on religious institutions', 'Access to printed materials contributed to increased literacy rates over time', 'The printing press was invented primarily for entertainment'],
    correctAnswer: 2,
    explanation: 'If the printing press "democratized knowledge," it logically follows that greater access to printed materials would contribute to increased literacy over time. The other options are not supported or are contradicted by the premise.',
    difficulty: 'easy',
  },
  {
    question: 'When an author uses a personal anecdote in an otherwise academic essay, the most likely purpose is to:',
    options: ['Demonstrate bias', 'Make the argument more relatable and persuasive', 'Weaken the academic rigor', 'Replace evidence with opinion'],
    correctAnswer: 1,
    explanation: 'Personal anecdotes in academic writing typically serve a rhetorical purpose: making abstract arguments more concrete and engaging for the reader.',
    difficulty: 'easy',
  },
  {
    question: 'A passage states: "While correlation does not imply causation, the consistent association across multiple studies suggests a genuine relationship." The author\'s tone toward the evidence is best described as:',
    options: ['Dismissive', 'Cautiously supportive', 'Uncritically accepting', 'Deeply skeptical'],
    correctAnswer: 1,
    explanation: 'The author acknowledges limitations ("correlation does not imply causation") but still sees value in the evidence ("consistent association suggests a genuine relationship"), indicating cautious support.',
    difficulty: 'medium',
  },
  {
    question: 'An argument that "we should fund space exploration because great civilizations have always looked outward" is primarily an example of:',
    options: ['Empirical reasoning', 'Appeal to tradition/historical precedent', 'Deductive logic', 'Cost-benefit analysis'],
    correctAnswer: 1,
    explanation: 'The argument justifies a current action by pointing to what "great civilizations have always" done — this is an appeal to tradition or historical precedent.',
    difficulty: 'easy',
  },
  {
    question: 'In a passage, the author refers to an opposing view as "simplistic" and "reductive." The author\'s attitude toward this view is:',
    options: ['Neutral and objective', 'Highly favorable', 'Dismissive and critical', 'Ambivalent'],
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
    options: ['Problem-solution', 'Chronological narrative', 'Balanced analysis followed by a moderate recommendation', 'Persuasion through emotional appeal'],
    correctAnswer: 2,
    explanation: 'Presenting both benefits and risks (balanced analysis) and concluding with "thoughtful regulation" (moderate recommendation) represents a common CARS pattern of balanced-then-moderate.',
    difficulty: 'medium',
  },
  {
    question: 'Which of the following would most weaken an author\'s argument that classical music improves cognitive function?',
    options: ['A study showing people enjoy classical music', 'A meta-analysis finding no significant cognitive improvement from classical music exposure', 'An anecdote about a musician who is also a scientist', 'A historical account of classical music\'s popularity'],
    correctAnswer: 1,
    explanation: 'A meta-analysis (which aggregates multiple studies) finding no cognitive improvement would directly contradict and weaken the causal claim. The other options are irrelevant or supportive.',
    difficulty: 'medium',
  },
  {
    question: 'An author writes: "The policy was well-intentioned, yet its consequences were devastating." This sentence structure creates:',
    options: ['A logical fallacy', 'An ironic contrast between intention and outcome', 'A false equivalence', 'A circular argument'],
    correctAnswer: 1,
    explanation: 'The contrast between "well-intentioned" and "devastating consequences" creates irony through the juxtaposition of good intentions with bad outcomes.',
    difficulty: 'easy',
  },
  {
    question: 'In CARS passages, when "some scholars" or "critics" are referenced without specific citation, the author is most likely:',
    options: ['Committing plagiarism', 'Presenting a generalized viewpoint to respond to', 'Providing strong evidence for their argument', 'Making an ad hominem attack'],
    correctAnswer: 1,
    explanation: 'Vague references to "some scholars" or "critics" typically introduce a generalized opposing viewpoint that the author then addresses or refutes.',
    difficulty: 'easy',
  },
]

export function generateExitQuiz(count: number = 10): ExitQuizQuestion[] {
  const shuffled = [...questionPool].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, Math.min(count, shuffled.length)).map((q, i) => ({
    id: `cars-${i}`,
    question: q.question,
    options: q.options,
    correctIndex: q.correctAnswer,
    explanation: q.explanation,
    category: 'mcat-cars',
  }))
}
