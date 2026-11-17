import type { CardCheck } from '@/lib/flashcard-check-core'

/**
 * Card-check questions for the cards of `mcat-science-passage-strategy-discrete-questions-mcat`: one per card, keyed by the
 * card's exact front text. Each asks the student to use the card's idea in a
 * new situation. Gate: scripts/flashcard-checks/validate.ts.
 */
const r = String.raw

export const checks: Record<string, CardCheck> = {
  [r`How should you pace discrete questions?`]: {
    question: r`A science section contains 15 discrete questions. On a practice test a student spends 2 minutes on each of them. If the student moves to the recommended pace of about 1 minute per discrete question, about how much time is banked for the passages?`,
    options: [
      r`About 5 minutes`,
      r`About 30 minutes`,
      r`About 15 minutes`,
      r`About 45 minutes`,
    ],
    correctAnswer: 2,
    explanation: r`Discrete questions should take about 1 minute each, so 15 questions take 15 minutes instead of 30, banking about 15 minutes. Thirty minutes is the time the student was spending, not the time saved. Five minutes would mean still spending 100 seconds per question, and 45 minutes is more than the 30 minutes that were being spent in the first place.`,
  },
  [r`What should you do if you do not know a discrete question?`]: {
    question: r`A discrete question asks which hormone is released by the posterior pituitary. The student quickly rules out two options but, after a moment, cannot recall which of the other two is right. No passage is attached. What is the best next step?`,
    options: [
      r`Guess between the remaining two now and move on`,
      r`Reread the previous passage for a helpful clue`,
      r`Leave it unanswered for the rest of the section`,
      r`Keep thinking for three more minutes until it comes`,
    ],
    correctAnswer: 0,
    explanation: r`A discrete question is recall with no passage to reason from, so after eliminating what you can, the right move is an immediate guess between the two survivors. The previous passage is unrelated and holds no clue. Leaving it unanswered gives up a 50% chance, and three more minutes of waiting spends passage time on a fact that is unlikely to arrive.`,
  },
  [r`Why are discrete questions strategically valuable?`]: {
    question: r`A student spends an evening memorizing amino acid side chains and standard equations until recall is instant. Which kind of question turns that work into points most directly and most quickly, and why?`,
    options: [
      r`Passage questions, since they test recall with no data to interpret`,
      r`Discrete questions, since they count for more than passage questions`,
      r`Passage questions, since every passage restates the content needed`,
      r`Discrete questions, since they test recall with no passage to read`,
    ],
    correctAnswer: 3,
    explanation: r`Discrete questions ask for content directly, so solid recall becomes a point in well under a minute with nothing to read first. They are not worth more than passage questions; each question counts the same. Passage questions usually add data to interpret, and passages do not reliably restate the background a student failed to learn.`,
  },
  [r`What are discrete questions?`]: {
    question: r`Which of the following items is a discrete question?`,
    options: [
      r`After Figure 2, a question asks which gel lane holds the mutant`,
      r`Between passages, a question asks for the unit of capacitance`,
      r`After passage 3, a question asks what paragraph 2 says about pH`,
      r`After Table 1, a question asks which trial gave the top yield`,
    ],
    correctAnswer: 1,
    explanation: r`A discrete question stands alone between passages and tests recall directly, like asking for the unit of capacitance. The other three items each depend on a figure, a paragraph or a table, so they are passage-based questions even though they may also draw on outside content.`,
  },
  [r`How do discrete questions differ in Psych/Soc?`]: {
    question: r`A discrete question in the behavioral sciences section describes a child who was bitten by a beagle and now fears every dog, and asks what this illustrates. What settles a question like this fastest?`,
    options: [
      r`Recalling the precise term, stimulus generalization`,
      r`Calculating a value from a memorized equation`,
      r`Searching the nearest passage for a definition`,
      r`Drawing the full pathway and tracing each step`,
    ],
    correctAnswer: 0,
    explanation: r`Behavioral discrete questions are mostly terminology: recognizing the scenario as stimulus generalization answers it at once. Calculations and pathway tracing belong to the natural science sections and do not apply here. A discrete question has no attached passage, so searching a nearby passage finds nothing useful.`,
  },
  [r`What content is most common in discrete questions?`]: {
    question: r`A student has 20 minutes of review time left and wants the best odds on the discrete questions in a science section. Which list is the best use of that time?`,
    options: [
      r`Rare enzyme deficiencies, eponymous syndromes and brand drug names`,
      r`Fine details of experiments from recently published research`,
      r`Amino acid properties, core equations and standard pathways`,
      r`Calculus derivations of each equation from first principles`,
    ],
    correctAnswer: 2,
    explanation: r`Discrete questions draw mostly on core content: equations, definitions, amino acids, pathways and standard mechanisms. Rare conditions and drug names are low-yield, and research details are supplied by passages rather than expected from memory. Derivations with calculus go beyond what these recall questions ask for.`,
  },
  [r`What is the biggest risk on discrete questions?`]: {
    question: r`A discrete question asks which amino acid has no chiral α-carbon. The student immediately thinks "glycine", then starts wondering whether it is a trick because proline also has an unusual structure. What is the best move?`,
    options: [
      r`Choose proline; discrete items usually hide a subtle twist`,
      r`Flag it for later; first instincts are usually unreliable`,
      r`Leave it blank; an uncertain answer usually costs points`,
      r`Choose glycine; the straightforward reading is usually right`,
    ],
    correctAnswer: 3,
    explanation: r`Glycine's α-carbon carries two hydrogens, so it is achiral, and the plain reading of the question is the intended one. The main risk on discrete questions is overthinking: they rarely hide a twist, so switching to proline talks the student out of a correct answer. Flagging a question already answered wastes time, and a blank can never score.`,
  },
  [r`Should you do discrete questions first?`]: {
    question: r`A student plans to start a 59-question science section by clicking through every screen to find the 15 discrete questions and answer them before reading any passage. What is the best advice?`,
    options: [
      r`Hunt for them first, since they are the fastest points`,
      r`Answer in order; flag any unresolved after about 60 s`,
      r`Save them all for last, after every passage is done`,
      r`Answer in order, and never flag or revisit any of them`,
    ],
    correctAnswer: 1,
    explanation: r`Discrete questions already arrive in short blocks between passages, so answering in order and flagging anything unresolved after about a minute costs no navigation time. Hunting for them or saving them all for the end means clicking back and forth, which wastes more time than it saves. Refusing to flag anything gives up the chance to revisit an item if time remains.`,
  },
}
