import type { CardCheck } from '@/lib/flashcard-check-core'

/**
 * Card-check questions for the cards of `mcat-cars-strategy-active-reading-mcat`: one per card, keyed by the
 * card's exact front text. Each asks the student to use the card's idea in a
 * new situation. Gate: scripts/flashcard-checks/validate.ts.
 */
const r = String.raw

export const checks: Record<string, CardCheck> = {
  [r`What question should you ask at the end of each paragraph?`]: {
    question: r`A student finishes a paragraph describing a 1950s experiment whose results contradict the theory introduced in paragraph 1. Which end-of-paragraph note best answers the question a reader should ask at that point?`,
    options: [
      r`Experiment ran in the 1950s with two groups of subjects`,
      r`Contains several long sentences and technical terms`,
      r`Gives evidence against the theory from paragraph 1`,
      r`Interesting study that I should remember for later`,
    ],
    correctAnswer: 2,
    explanation: r`The question to ask is what the paragraph did for the argument, and this one supplies evidence against the earlier theory. Noting the decade and the groups records details, not function. Notes about sentence length or about the study being interesting describe the reader's experience and say nothing about the paragraph's role.`,
  },
  [r`What does active reading mean in CARS?`]: {
    question: r`Two students read the same paragraph. The first finishes and can say, "The author thinks zoning laws raise rents because they limit supply." The second can only say, "It was about zoning." What did the first student do that the second did not?`,
    options: [
      r`Kept asking what the author was claiming and for what reason`,
      r`Read each sentence twice so that every detail was absorbed`,
      r`Underlined every sentence that included a number or a name`,
      r`Read faster so that more time was left over for questions`,
    ],
    correctAnswer: 0,
    explanation: r`The first student can state a claim and its reason, which is the product of active reading: asking continuously what the author is claiming and why. Reading every sentence twice or underlining names and numbers is still passive absorption of details. Reading faster does not by itself produce a grasp of the argument.`,
  },
  [r`How should you handle dense or confusing sentences?`]: {
    question: r`Midway through a philosophy passage, a student meets a 60-word sentence she cannot untangle. She gathers only that the author is objecting to the view just described. What should she do?`,
    options: [
      r`Reread the sentence until every clause in it is fully understood`,
      r`Stop and rewrite the sentence in simpler words before continuing`,
      r`Skip the rest of the paragraph, since it depends on that sentence`,
      r`Take that gist, read on, and return only if a question needs it`,
    ],
    correctAnswer: 3,
    explanation: r`The gist, that the author objects to the earlier view, is enough to keep following the argument, and she can return if a question points to that sentence. Rereading until every clause is clear, or rewriting the sentence, stalls on one sentence and burns time. Skipping the rest of the paragraph throws away text she can probably follow.`,
  },
  [r`What are the highest-value words to notice?`]: {
    question: r`A sentence reads: "Although the vaccine trial was small, its results were striking; therefore, regulators moved quickly." Which pair of words are the signal words that mark how the ideas connect?`,
    options: [
      r`"vaccine" and "regulators"`,
      r`"Although" and "therefore"`,
      r`"small" and "striking"`,
      r`"results" and "quickly"`,
    ],
    correctAnswer: 1,
    explanation: r`"Although" signals a concession and "therefore" signals a conclusion, so together they show the logic of the sentence: despite the small size, the results led regulators to act. "Vaccine" and "regulators" name the subject matter, and "small," "striking," "results" and "quickly" carry content. None of those marks a turn or a step in the reasoning.`,
  },
  [r`What is a passage map?`]: {
    question: r`A student has just read a four-paragraph passage (P1 to P4). Which of the following is a passage map?`,
    options: [
      r`P1 old view; P2 its flaw; P3 author's fix; P4 limits. Thesis: fix works. Tone: careful`,
      r`A full list of each date, name and figure in the order the passage presents them`,
      r`A copy of the first sentence of all four paragraphs, written out word for word`,
      r`A guess at which question types will come up, ranked from easiest to hardest`,
    ],
    correctAnswer: 0,
    explanation: r`A passage map is a brief outline of each paragraph's role plus the overall thesis and tone, which is what the "P1 old view; P2 its flaw" note records. A list of dates and names is a record of details, and copied first sentences are text, not roles. Guessing at question types says nothing about the passage's structure.`,
  },
  [r`Why is tone so important to track?`]: {
    question: r`An author writes that a new therapy "shows some promise, though larger trials are needed before anyone should rely on it." A question asks for the author's attitude toward the therapy. Which choice matches?`,
    options: [r`Wholly enthusiastic`, r`Openly dismissive`, r`Cautiously optimistic`, r`Entirely indifferent`],
    correctAnswer: 2,
    explanation: r`The author sees "some promise" but wants larger trials, so the attitude is positive with reservations, and the right answer matches that degree of certainty. "Wholly enthusiastic" ignores the reservation, and "openly dismissive" ignores the promise. An author who weighs promise against the need for trials is not indifferent.`,
  },
  [r`How do you identify the thesis when it is not stated plainly?`]: {
    question: r`A passage never states its thesis. Paragraph 1 shows that handwritten letters reveal a writer's revisions. Paragraph 2 shows that they preserve regional spellings. Paragraph 3 shows that they record private doubts missing from published work. What is the thesis?`,
    options: [
      r`Handwritten letters preserve regional spellings lost from print`,
      r`Handwritten letters are a rich source for understanding writers`,
      r`Published work is worthless as evidence about a writer's life`,
      r`Historians should study handwriting rather than what is written`,
    ],
    correctAnswer: 1,
    explanation: r`The thesis is the claim that all three paragraphs support together, and revisions, spellings and private doubts are each evidence that letters are a rich source for understanding writers. The spelling claim is only paragraph 2's point. Calling published work worthless, or favoring handwriting over content, goes beyond anything the paragraphs support.`,
  },
  [r`What is the difference between topic and main idea?`]: {
    question: r`A passage is about standardized testing, and its author argues that such tests measure family income more than ability. Which line states the passage's main idea rather than its topic?`,
    options: [
      r`Standardized testing in schools and how it is used today`,
      r`The role of standardized testing in modern education`,
      r`Standardized tests, family income, and student ability`,
      r`Standardized tests mostly reflect income, not ability`,
    ],
    correctAnswer: 3,
    explanation: r`The main idea is what the author argues about the subject, and only "tests mostly reflect income, not ability" makes a claim. The other three lines name what the passage is about, including the list of tests, income and ability, without saying what the author asserts about them. Those are topics.`,
  },
}
