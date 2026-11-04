/**
 * Entrance Quiz — MCAT CARS Passage Types
 * 14 questions · 7 parts (2 per part)
 * Part titles match the interactive lesson's "Part N of 7" lines
 * (re-aligned Nov 2026 so a mastered part skips the right lesson part).
 * Every item tests a reading strategy, never outside content knowledge.
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const P1 = 'Humanities Passages'
const P2 = 'Social Science Passages'
const P3 = 'Argumentative Passages'
const P4 = 'Comparative & Multiple-Perspective Passages'
const P5 = 'Ethics & Morality Passages'
const P6 = 'Art, Architecture & Aesthetics Passages'
const P7 = 'Passage Practice Principles'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Humanities Passages
  { id: 'mcp-ent-1a', question: 'CARS humanities passages typically draw from which fields?', options: ['Literature, philosophy, art, and religion', 'Chemistry, physics, and biology', 'Economics, sociology, and political science', 'History, geography, and archaeology only'], correctIndex: 0, explanation: 'Humanities passages come from philosophy, literature and literary criticism, art and music, and religion, and they tend to be abstract and argument-driven. Economics, sociology, political science, and history belong to the social-science passages, and natural-science passages never appear in CARS.', partNumber: 1, partTitle: P1 },
  { id: 'mcp-ent-1b', question: 'When reading a philosophy-based CARS passage, you should pay particular attention to:', options: ['The dates of the historical events that the author mentions', 'Definitions of the technical vocabulary, and nothing else', 'The author\'s central thesis and the argument\'s structure', 'The statistical data the passage cites in support'], correctIndex: 2, explanation: 'Philosophy passages are arguments, so the payoff comes from finding the thesis and tracking who says what and how each paragraph supports or complicates it. Examples illustrate a point rather than being the point, and dates, isolated terms, and statistics are details you can look up when a question asks.', partNumber: 1, partTitle: P1 },

  // Part 2 — Social Science Passages
  { id: 'mcp-ent-2a', question: 'CARS social science passages typically come from which disciplines?', options: ['Physics, chemistry, and astronomy', 'Biology, medicine, and public health', 'Engineering, mathematics, and computer science', 'Psychology, sociology, and economics'], correctIndex: 3, explanation: 'Social-science passages deal with human behavior, institutions, and societies, drawing on history, economics, political science, psychology, sociology, and anthropology. The natural sciences and technical fields are not CARS material at all.', partNumber: 2, partTitle: P2 },
  { id: 'mcp-ent-2b', question: 'A social-science passage argues that a school-lunch program, not rising family incomes, explains a region\'s drop in childhood anemia. Which evidence would best isolate the program as the cause?', options: ['Anemia fell across the region after the program began', 'Districts with similar incomes but no program saw no drop', 'Families in the region reported liking the lunches served', 'Anemia is a common problem among children worldwide'], correctIndex: 1, explanation: 'A comparative case holds the rival factor (income) fixed while the proposed cause varies, which is how a social-science author isolates a cause. A drop after the program began shows only sequence, which income growth could also explain, and how much families liked the food or how common anemia is elsewhere bears on neither explanation.', partNumber: 2, partTitle: P2 },

  // Part 3 — Argumentative Passages
  { id: 'mcp-ent-3a', question: 'A passage argues: "The town\'s new library will raise local reading scores, because it doubles the number of books available to children." Which unstated warrant links the evidence to the claim?', options: ['Children will actually borrow and read the added books', 'The library was funded by a voter-approved local tax', 'Reading scores in the town are lower than the state average', 'Other towns have libraries that are larger than this one'], correctIndex: 0, explanation: 'A warrant is the unstated assumption that connects evidence to claim. More books can raise scores only if children use them, so that is the link the argument silently relies on. How the library was funded, where scores stand now, and the size of other towns\' libraries do not connect "more books" to "higher scores."', partNumber: 3, partTitle: P3 },
  { id: 'mcp-ent-3b', question: 'A passage spends two paragraphs describing how rural clinics are closing, then turns with "To address this, the state could..." and spends the rest outlining a fix. This argument follows which pattern?', options: ['Critique', 'Cause-effect', 'Problem-solution', 'Compare-contrast'], correctIndex: 2, explanation: 'A problem is laid out first and a proposed fix follows, signaled by "To address this," which is the problem-solution pattern. A critique evaluates someone else\'s position, cause-effect traces what led to what, and compare-contrast weighs one view against another.', partNumber: 3, partTitle: P3 },

  // Part 4 — Comparative & Multiple-Perspective Passages
  { id: 'mcp-ent-4a', question: 'A CARS passage presents two conflicting theories of income inequality. The best approach is to:', options: ['Decide immediately which theory is right from prior knowledge', 'Attend only to the theory presented in the final paragraph', 'Ignore the conflict and note only the factual statements', 'Map each theory\'s position and where the author stands'], correctIndex: 3, explanation: 'Multiple-perspective questions turn on who said what and where the author lands, so track each theory\'s claim and evidence separately, then locate the author, who may favor one side, combine them, or reject both. Prior knowledge, the last paragraph alone, or the bare facts all substitute something else for the author\'s actual stance.', partNumber: 4, partTitle: P4 },
  { id: 'mcp-ent-4b', question: 'A passage reads: "According to Okafor, rising rents are driven mainly by speculation. The evidence assembled here, however, points more strongly to a shortage of new housing." Which statement reflects the AUTHOR\'s view?', options: ['Speculation is the main force driving rents upward', 'A housing shortage better explains the rise in rents', 'Rents are rising for reasons no one can yet identify', 'Speculation and shortage matter exactly equally here'], correctIndex: 1, explanation: '"According to Okafor" marks Okafor\'s view, not the author\'s, and "however" hands the passage back to the author, who favors the shortage explanation. Choosing speculation is the classic attribution error, and the author neither gives up on an explanation nor weighs the two factors equally.', partNumber: 4, partTitle: P4 },

  // Part 5 — Ethics & Morality Passages
  { id: 'mcp-ent-5a', question: 'An ethics passage argues that a physician facing a hard choice should ask not "Which act produces the best outcome?" or "Which rule applies?" but "What would an honest, compassionate doctor do?" The author is reasoning within:', options: ['Virtue ethics', 'Utilitarianism', 'Deontology', 'Social contract theory'], correctIndex: 0, explanation: 'Asking what a person of good character would do is the mark of virtue ethics (Aristotle). The author sets aside the outcome question that drives utilitarianism and the rule question that drives deontology, and nothing in the passage appeals to an implicit agreement, as social contract theory does.', partNumber: 5, partTitle: P5 },
  { id: 'mcp-ent-5b', question: 'You strongly disagree with the moral conclusion of an ethics passage. When a question asks what the author would most likely endorse, you should:', options: ['Pick the choice that seems most ethically defensible to you', 'Pick the choice that most experts in ethics would accept', 'Pick the most balanced choice, since ethics has no answers', 'Answer from the author\'s stated principles, setting yours aside'], correctIndex: 3, explanation: 'Ethics passages reward answering from the author\'s framework, so your own moral view, expert opinion, and a reflexive middle path are all outside the text. Find the principle the author relies on (consequences, duty, character) and apply it.', partNumber: 5, partTitle: P5 },

  // Part 6 — Art, Architecture & Aesthetics Passages
  { id: 'mcp-ent-6a', question: 'A CARS passage about art criticism states: "Beauty is inherently subjective; no universal aesthetic standards exist." A question asks what the author would most likely say about a critic who declares a painting objectively beautiful. The author would say:', options: ['The critic is right to apply objective aesthetic standards', 'The critic\'s claim conflicts with the passage\'s thesis', 'The critic\'s judgment has no bearing on aesthetics at all', 'The painting must therefore be genuinely beautiful'], correctIndex: 1, explanation: 'The author denies that universal aesthetic standards exist, so a claim of objective beauty asserts exactly what the author rejects. That is as far as the passage goes: dismissing aesthetic judgment as irrelevant is a stronger claim the author never makes, and the other two choices side with the critic.', partNumber: 6, partTitle: P6 },
  { id: 'mcp-ent-6b', question: 'A critic writes that a new concert hall is "competent, even polished, but content to repeat what the architects of the 1960s already said better." The critic\'s value judgment of the hall is that it is:', options: ['Bold and genuinely innovative', 'Poorly built and unsafe', 'Well made but derivative', 'Neutral, with no judgment offered'], correctIndex: 2, explanation: 'Tracking the value judgment means reading the charged words: "competent, even polished" grants skill, and "content to repeat what... already said better" calls the design derivative. Nothing suggests innovation or structural flaws, and the sentence is plainly evaluative, not neutral.', partNumber: 6, partTitle: P6 },

  // Part 7 — Passage Practice Principles
  { id: 'mcp-ent-7a', question: 'When reviewing a practice passage, what should you check about the questions you answered CORRECTLY?', options: ['Nothing, since review time is best spent on misses', 'Whether you got each one right for the right reason', 'Whether the passage was easy, medium, or hard for you', 'How quickly you answered each relative to the others'], correctIndex: 1, explanation: 'A right answer reached by a lucky guess or flawed reasoning will fail next time, so review every question and confirm the reasoning behind correct ones too. Rating the passage\'s difficulty is part of categorizing it, not of reviewing a question, and relative speed says nothing about whether the reasoning was sound.', partNumber: 7, partTitle: P7 },
  { id: 'mcp-ent-7b', question: 'After logging 12 practice passages, a student sees that most of her misses come on philosophy and literary-criticism passages. The most targeted next step is to:', options: ['Read more philosophy and literary criticism outside practice', 'Do more timed passages of every type, in equal measure', 'Skip humanities passages on test day and guess on them', 'Focus her review on her rare social-science misses'], correctIndex: 0, explanation: 'Once a pattern shows up across 10 or more passages, practice should target it, and a weakness on humanities passages calls for more reading in philosophy and literary criticism. Spreading practice evenly ignores the pattern, skipping a passage type forfeits points, and the rare misses are the smallest opportunity.', partNumber: 7, partTitle: P7 },
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
