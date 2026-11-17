import type { CardCheck } from '@/lib/flashcard-check-core'

/**
 * Card-check questions for the cards of `mcat-cars-strategy-main-idea-inference-mcat`: one per card, keyed by the
 * card's exact front text. Each asks the student to use the card's idea in a
 * new situation. Gate: scripts/flashcard-checks/validate.ts.
 */
const r = String.raw

export const checks: Record<string, CardCheck> = {
  [r`What must a valid CARS inference be?`]: {
    question: r`A passage states: "Every manuscript in the archive was copied before 1400, and the Hale manuscript is held in the archive." Which of the following is a valid inference from this statement?`,
    options: [
      r`The Hale manuscript is the oldest one in the archive`,
      r`The archive stopped acquiring manuscripts in 1400`,
      r`The Hale manuscript was copied by a monastic scribe`,
      r`The Hale manuscript was copied before the year 1400`,
    ],
    correctAnswer: 3,
    explanation: r`A valid inference must follow from the passage: if every manuscript in the archive was copied before 1400 and the Hale manuscript is in it, then it was copied before 1400. That it is the oldest, that the archive stopped acquiring in 1400, or that a monastic scribe copied it might each be plausible, but none has to be true given the statement.`,
  },
  [r`How do you approach a main idea question?`]: {
    question: r`After a passage on the history of the tea trade, a student reaches the question "Which of the following best expresses the main idea of the passage?" What should she do before reading the four choices?`,
    options: [
      r`Read all four choices, then pick the one that sounds most scholarly`,
      r`Put the thesis in her own words, then look for the choice matching it`,
      r`Reread the final paragraph, then pick the choice that best echoes it`,
      r`Find the choice with the most passage keywords, then select that one`,
    ],
    correctAnswer: 1,
    explanation: r`Predicting the thesis in her own words first gives her a standard to match against, in both scope and emphasis, before the choices can pull her off course. Picking what sounds scholarly or what repeats the most keywords judges wording, not meaning. The final paragraph is one part of the passage and may not carry the overall claim.`,
  },
  [r`What makes a main-idea answer wrong for being too narrow?`]: {
    question: r`A passage argues that public libraries strengthen democratic life. Its second paragraph gives one example, a library's voter registration drive. Which main-idea choice is wrong because it is too narrow?`,
    options: [
      r`One library ran a successful voter registration drive`,
      r`Public libraries help to strengthen democratic life`,
      r`All public institutions are essential to democracy`,
      r`Public libraries weaken democratic participation`,
    ],
    correctAnswer: 0,
    explanation: r`The registration drive is a single example from one paragraph, so a choice built on it captures only part of the passage and is too narrow. The choice about libraries strengthening democratic life matches the overall claim. The one about all public institutions is too broad, and the one about weakening participation reverses the author.`,
  },
  [r`What makes a main-idea answer wrong for being too broad?`]: {
    question: r`A passage argues that one city's bike-lane program reduced traffic injuries in that city over five years. Which main-idea choice is wrong because it is too broad?`,
    options: [
      r`The city's bike-lane program reduced injuries`,
      r`Bike lanes were painted green on one avenue`,
      r`Transport reforms make cities everywhere safer`,
      r`The city's bike-lane program raised injuries`,
    ],
    correctAnswer: 2,
    explanation: r`The author argued about one program in one city, so a claim about transport reforms in cities everywhere covers ground the passage never addressed and is too broad. The choice about the program reducing injuries matches the passage. The painted avenue is a narrow detail, and the choice about raising injuries is the opposite of the author's claim.`,
  },
  [r`What should "the author would most likely agree" answers rest on?`]: {
    question: r`In a passage, the author writes that "zoos justify their existence only when they fund conservation in the wild." A question asks which statement the author would most likely agree with. Which choice rests on the right basis?`,
    options: [
      r`Most people enjoy visiting zoos and learning about animals`,
      r`A zoo that funds no wild conservation lacks justification`,
      r`Zoo animals generally live longer than their wild relatives`,
      r`Zoos should be closed regardless of what they contribute`,
    ],
    correctAnswer: 1,
    explanation: r`The answer must rest on a position the author took, and the author said zoos are justified only when they fund wild conservation, so a zoo that funds none lacks justification. That people enjoy zoos is popular opinion, and the lifespan of zoo animals is a general claim the author never made. Closing all zoos regardless contradicts the author's stated condition.`,
  },
  [r`Why is extreme wording usually a warning sign?`]: {
    question: r`An author writes: "Remote work often appears to raise productivity among experienced staff." Which answer choice has wording that should raise a warning flag?`,
    options: [
      r`Remote work may raise productivity for some employees`,
      r`Experienced staff often seem to do well working remotely`,
      r`Remote work can be productive for experienced workers`,
      r`Remote work proves to be more productive for all staff`,
    ],
    correctAnswer: 3,
    explanation: r`The author hedges with "often appears" and limits the claim to experienced staff, so "proves" and "all staff" are absolutes that go past what was said. "May," "often seem" and "can be" keep the author's level of certainty. Absolute wording rarely matches a hedged claim, so it should prompt a check against the text.`,
  },
  [r`How do you answer a question about a specific word's meaning?`]: {
    question: r`A passage says: "The senator's opening line was calculated to arrest the attention of a distracted chamber, and for a moment every head turned." A question asks what "arrest" means here. Which choice fits the context?`,
    options: [r`To take into custody`, r`To bring to a stop`, r`To capture and hold`, r`To charge formally`],
    correctAnswer: 2,
    explanation: r`The context, a distracted chamber in which "every head turned," shows that the line caught and held the listeners' attention. "To take into custody" and "to charge formally" are the everyday legal senses, which do not fit attention. "To bring to a stop" is another dictionary sense, but the speech gained the chamber's attention; it did not end it.`,
  },
  [r`What is the most common CARS trap answer?`]: {
    question: r`A passage on sleep says only that "napping habits vary widely between cultures." A question asks what the passage suggests about sleep. One choice reads: "Adults need about seven to nine hours of sleep per night." A student recognizes this as a well-known fact. What kind of choice is it?`,
    options: [
      r`A trap: true in the real world but not supported by the passage`,
      r`The answer: a true statement is always the best-supported choice`,
      r`A trap: far too extreme, since it relies on absolute wording`,
      r`The answer: the passage implies it by raising the topic of sleep`,
    ],
    correctAnswer: 0,
    explanation: r`The statement may be true, but the passage says nothing about how many hours adults need, so it is the common trap of real-world truth without passage support. Truth alone does not make a choice correct, and raising the topic of sleep does not imply every fact about sleep. The wording, "about seven to nine," is hedged, so it is not an extreme choice.`,
  },
}
