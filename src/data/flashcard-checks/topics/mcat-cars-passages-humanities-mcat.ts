import type { CardCheck } from '@/lib/flashcard-check-core'

/**
 * Card-check questions for the cards of `mcat-cars-passages-humanities-mcat`: one per card, keyed by the
 * card's exact front text. Each asks the student to use the card's idea in a
 * new situation. Gate: scripts/flashcard-checks/validate.ts.
 */
const r = String.raw

export const checks: Record<string, CardCheck> = {
  [r`What is a common structure in art/literary criticism passages?`]: {
    question: r`An excerpt reads: "Critics have long read the novel's flooded village as a symbol of despair. Yet the villagers' songs in the final chapter suggest something more: the same water carries their boats to market." Which statement gives the author's own reading?`,
    options: [
      r`The flood stands purely for despair, as critics have long held`,
      r`The flood has no symbolic meaning and serves only the plot`,
      r`The flood matters less than the market, the novel's real subject`,
      r`The flood also suggests renewal, complicating the usual view`,
    ],
    correctAnswer: 3,
    explanation: r`The excerpt gives the conventional interpretation first and then, after "Yet," the author's complication of it: the water also sustains the villagers. Pure despair is the critics' reading, which the author is qualifying. The author treats the flood as symbolic and central, so the choices denying its symbolism or demoting it below the market are unsupported.`,
  },
  [r`How should you treat quoted material in a humanities passage?`]: {
    question: r`An excerpt reads: "A reviewer of the day called the symphony 'a noise fit for the stable.' Such verdicts tell us more about the era's expectations than about the music, whose structure is in fact unusually disciplined." Why does the author include the reviewer's words?`,
    options: [
      r`As evidence: a judgment that the author goes on to adopt`,
      r`As a foil: a judgment that the author goes on to dispute`,
      r`As background: a judgment the author leaves unexamined`,
      r`As a concession: a judgment the author partly accepts`,
    ],
    correctAnswer: 1,
    explanation: r`The author quotes the harsh review and then answers it by calling the symphony "unusually disciplined," so the quotation is a foil for the author's own position. The author does not adopt the verdict, and does comment on it, which rules out evidence and unexamined background. Nothing in the reply accepts any part of the reviewer's judgment of the music.`,
  },
  [r`What tone is most common in humanities passages?`]: {
    question: r`An excerpt reads: "The sculptor's early bronzes are technically superb, and their balance still astonishes. Her later work, however, repeats those solutions without extending them." Which phrase best describes the author's attitude toward the sculptor?`,
    options: [
      r`Appreciative of the early work but critical of the later`,
      r`Wholly admiring of the sculptor's entire body of work`,
      r`Wholly dismissive of the sculptor's entire body of work`,
      r`Detached, reporting facts without passing any judgment`,
    ],
    correctAnswer: 0,
    explanation: r`"Technically superb" and "astonishes" praise the early bronzes, while "repeats those solutions without extending them" faults the later work, giving a measured, mixed tone. Wholly admiring ignores the criticism and wholly dismissive ignores the praise. The author is clearly judging, so a detached, judgment-free reading does not fit.`,
  },
  [r`How do you handle a passage about an artwork you have never seen?`]: {
    question: r`A passage discusses a mural the reader has never seen. The author claims its crowded composition expresses the anxiety of city life and points to "figures jostling at every edge of the wall." A question asks what purpose this description serves. Which answer is best?`,
    options: [
      r`It shows that readers must have viewed the mural to respond`,
      r`It proves that the mural is the finest work by its painter`,
      r`It supports the claim that the mural conveys urban anxiety`,
      r`It records the mural's contents without serving any claim`,
    ],
    correctAnswer: 2,
    explanation: r`The reader only needs the author's claim about the mural, and the jostling figures are offered as evidence for that claim about urban anxiety. No prior viewing is required, since the passage supplies the relevant detail. The author makes no ranking of the painter's works, and the description is tied directly to the stated claim.`,
  },
  [r`How do you handle figurative or metaphorical language?`]: {
    question: r`A historian, discussing a region where only landowners kept written records, writes: "The archive is a river that was dammed by those who owned its banks." In context, what does the sentence most plainly mean?`,
    options: [
      r`The archive was housed on land beside a dammed river`,
      r`The surviving records flow freely and are complete`,
      r`The surviving records were shaped by those with power`,
      r`The landowners destroyed every record that existed`,
    ],
    correctAnswer: 2,
    explanation: r`Translated into plain terms, the dammed river is a record whose contents were controlled by the landowners who kept it. Reading the river as a real one takes the metaphor literally. A dam restricts flow, so "flow freely and are complete" reverses the image, and total destruction of the records goes far beyond what the metaphor claims.`,
  },
  [r`What if a philosophy passage uses a term in a specialized way?`]: {
    question: r`A passage states: "In this essay, 'myth' means not a falsehood but a story a community uses to explain its own origins." Later the author writes that the founding of the republic "is, in this sense, a myth." What is the author claiming about the founding story?`,
    options: [
      r`It is a story the community uses to explain its own origins`,
      r`It is a falsehood, since the founding never really took place`,
      r`It is a falsehood, although one that is still worth teaching`,
      r`It is a story too old for any historian to be able to check`,
    ],
    correctAnswer: 0,
    explanation: r`"In this sense" points back to the author's stipulated definition, under which a myth is an origin story, not a falsehood. Both "falsehood" choices import the ordinary meaning that the author explicitly excluded. Nothing in the definition concerns whether historians can check the story.`,
  },
  [r`What subjects fall under humanities CARS passages?`]: {
    question: r`A student sorts four reading-section passages into humanities and social science. Which passage belongs in the humanities group?`,
    options: [
      r`A survey study of voter turnout across income groups`,
      r`A critic's reading of rhythm in a composer's late quartets`,
      r`A field report on kinship terms in a mountain village`,
      r`An analysis of wage data after a change in trade policy`,
    ],
    correctAnswer: 1,
    explanation: r`Music criticism is a humanities subject, alongside literature, philosophy, art history and architecture. A turnout survey is political science, a field report on kinship terms is anthropology, and an analysis of wage data is economics, all of which are social sciences.`,
  },
  [r`What makes humanities passages challenging?`]: {
    question: r`A passage claims that "the poem's irregular meter is its greatest strength," then explains how the broken rhythm mirrors the speaker's hesitation. A student looks for data that proves the claim, finds none, and decides the argument is unsupported. What is the best correction?`,
    options: [
      r`The claim is empirical, so it fails without measured results`,
      r`The claim is figurative, so it has no content to be assessed`,
      r`The claim is factual, so outside sources should be consulted`,
      r`The claim is evaluative, so judge the reasoning that is given`,
    ],
    correctAnswer: 3,
    explanation: r`"Greatest strength" is a value judgment, and such claims are supported by reasoning, here the link between rhythm and hesitation, not by data. Treating it as empirical or factual applies the wrong standard and invites outside information. The claim is stated literally and can be assessed, so calling it figurative and empty is also wrong.`,
  },
}
