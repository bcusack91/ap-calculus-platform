import type { CardCheck } from '@/lib/flashcard-check-core'

/**
 * Card-check questions for the cards of `mcat-cars-passages-comparative-mcat`: one per card, keyed by the
 * card's exact front text. Each asks the student to use the card's idea in a
 * new situation. Gate: scripts/flashcard-checks/validate.ts.
 */
const r = String.raw

export const checks: Record<string, CardCheck> = {
  [r`How do you handle a question asking what both authors would accept?`]: {
    question: r`An excerpt reads: "Halvorsen holds that pupils must first memorize a body of facts, because independent judgment needs material to work on. Okafor holds that pupils should pursue their own questions, because independent judgment grows only through practice." Which claim would both thinkers accept?`,
    options: [
      r`Memorized facts must come before any open questioning`,
      r`Schooling should aim at building independent judgment`,
      r`Pupils learn best when they pursue their own questions`,
      r`Independent judgment cannot be developed in a school`,
    ],
    correctAnswer: 1,
    explanation: r`Each thinker justifies a method by appeal to independent judgment, so that shared goal is the overlap. Putting memorized facts first belongs to Halvorsen alone, and pursuing one's own questions belongs to Okafor alone. The claim that judgment cannot be developed in school is held by neither.`,
  },
  [r`What is a comparative CARS passage?`]: {
    question: r`Four passages all concern the same peasant revolt. Which description identifies the comparative passage?`,
    options: [
      r`It sets two historians' accounts of the revolt side by side and weighs them`,
      r`It narrates the revolt in order, from its first causes to its aftermath`,
      r`It explains how one archive of documents on the revolt was assembled`,
      r`It defends one thesis about the revolt with three documentary examples`,
    ],
    correctAnswer: 0,
    explanation: r`A comparative passage presents two or more positions and examines how they relate, which is what setting two historians' accounts side by side does. A narrative of events, an explanation of how an archive was built, and a defense of one thesis each develop a single line of thought with no second position to compare.`,
  },
  [r`What is a frequent trap in comparative passages?`]: {
    question: r`An excerpt reads: "Marlowe treats translation as loss: every rendering sheds some of the original's music. Tennant counters that a translation is a new poem with merits of its own. The essayist, reviewing both, remarks only that the debate has lasted for centuries." Which answer choice attributes a view correctly?`,
    options: [
      r`Tennant regards every translation as a loss of the original's music`,
      r`The essayist regards a translation as a new work with its own merits`,
      r`The essayist regards every translation as a loss of the original's music`,
      r`Tennant regards a translation as a new work with merits of its own`,
    ],
    correctAnswer: 3,
    explanation: r`Tennant is the one who calls a translation a new poem with its own merits. Saying Tennant sees translation as loss swaps in Marlowe's position. Both choices about the essayist assign one thinker's view to the passage author, who only notes how long the debate has run.`,
  },
  [r`What should you track most carefully in a comparative passage?`]: {
    question: r`An excerpt reads: "Ilves and Brandt agree that cities grew because trade concentrated wealth. Ilves adds that walls came first and trade followed security. Brandt holds that trade came first and walls were built to protect it." On what point do the two scholars diverge?`,
    options: [
      r`On whether trade concentrated wealth in the growing cities`,
      r`On whether cities grew at all during the period in question`,
      r`On whether walls came before trade or trade before walls`,
      r`On whether walls were ever built around the trading cities`,
    ],
    correctAnswer: 2,
    explanation: r`The scholars share the claim about trade and wealth and split only on the order of walls and trade. The choice about trade concentrating wealth names their point of agreement, not divergence. Neither scholar doubts that cities grew or that walls were built, so those choices describe disputes the excerpt does not contain.`,
  },
  [r`How do you find the passage author's own view in a comparative piece?`]: {
    question: r`A passage's final paragraph reads: "One school reads the epic as a celebration of conquest. Another reads it as a lament for the conquered. The first reading, though long dominant, strains to explain the closing funeral scene. The second accounts for it with ease." What is the author's own view?`,
    options: [
      r`The author favors the lament reading, as the evaluative wording shows`,
      r`The author favors the conquest reading, since it was long dominant`,
      r`The author stays neutral, since both readings are described in turn`,
      r`The author rejects both readings, since neither explains the ending`,
    ],
    correctAnswer: 0,
    explanation: r`"Strains to explain" and "accounts for it with ease" are evaluative phrases in the concluding paragraph, and they favor the lament reading. Long dominance is reported, not endorsed. The author is not neutral once one reading is said to strain, and the author says the second reading does explain the ending.`,
  },
  [r`What if the author appears neutral between two positions?`]: {
    question: r`A passage concludes: "Some linguists hold that regional dialects are fading under mass media. Others find new dialects forming in large cities. The evidence for each claim is substantial, and present data cannot settle the matter." Which statement best describes the author's position?`,
    options: [
      r`Dialects are fading, though the author avoids saying so outright`,
      r`New dialects are forming, though the author avoids saying it`,
      r`The question remains open, with real support for each side`,
      r`Neither claim has meaningful evidence to recommend it`,
    ],
    correctAnswer: 2,
    explanation: r`The author credits both claims with substantial evidence and says the data cannot decide, so the balanced reading is the supported one. The two choices that assign a concealed preference invent a hidden view the text gives no sign of. Saying neither claim has evidence contradicts "substantial."`,
  },
  [r`How should you annotate a comparative passage?`]: {
    question: r`A passage alternates, paragraph by paragraph, between the claims of two critics named Reyes and Lindqvist. A student keeps missing questions of the form "Lindqvist would most likely agree that..." Which note-taking habit addresses the problem most directly?`,
    options: [
      r`Highlight each sentence that contains a date or a proper noun`,
      r`Write a full summary of each paragraph before reading the next`,
      r`Underline the first and the last sentence of the whole passage`,
      r`Tag each paragraph with the critic whose claim it sets out`,
    ],
    correctAnswer: 3,
    explanation: r`The student's errors come from confusing whose claim is whose, and labeling each paragraph by critic fixes exactly that. Highlighting dates and names marks details without separating the viewpoints. Full summaries cost too much time, and underlining only the first and last sentences skips the paragraphs where the two critics' claims are stated.`,
  },
  [r`What question type is most common here?`]: {
    question: r`In a passage, two gardeners agree that a hedge should grow dense. One says to trim it in spring and the other says to trim it in autumn. A question asks which new situation is most analogous to their disagreement. Which choice matches its structure?`,
    options: [
      r`Two coaches differ on whether endurance matters in their sport at all`,
      r`Two coaches both want endurance but differ on when to schedule long runs`,
      r`Two coaches both want endurance and both schedule their long runs at dawn`,
      r`Two coaches want different results yet schedule their runs the same way`,
    ],
    correctAnswer: 1,
    explanation: r`The gardeners share a goal and disagree about the timing of the means, and the coaches who both want endurance but differ on scheduling repeat that structure. Coaches who dispute whether endurance matters disagree about the goal itself. Coaches who agree on both goal and schedule have no disagreement, and coaches with different goals but the same schedule reverse the pattern.`,
  },
}
