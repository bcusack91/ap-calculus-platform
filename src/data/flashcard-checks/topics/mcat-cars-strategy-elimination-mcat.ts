import type { CardCheck } from '@/lib/flashcard-check-core'

/**
 * Card-check questions for the cards of `mcat-cars-strategy-elimination-mcat`: one per card, keyed by the
 * card's exact front text. Each asks the student to use the card's idea in a
 * new situation. Gate: scripts/flashcard-checks/validate.ts.
 */
const r = String.raw

export const checks: Record<string, CardCheck> = {
  [r`Name the four common CARS wrong-answer types.`]: {
    question: r`A passage argues that city parks modestly improve residents' mental health. An answer choice says: "City parks worsen the mental health of residents." Which wrong-answer type is this choice?`,
    options: [
      r`Out of scope: the passage never raises this issue`,
      r`Opposite: it reverses the claim the author makes`,
      r`Too extreme: it overstates a claim that is hedged`,
      r`Half-right: only its first part has any support`,
    ],
    correctAnswer: 1,
    explanation: r`The author says parks improve mental health and the choice says they worsen it, so it reverses the author: the opposite type. It is not out of scope, because parks and mental health are exactly what the passage discusses. It does not overstate the author's direction, and it has no correct first half.`,
  },
  [r`What is the fastest way to eliminate a CARS answer?`]: {
    question: r`A passage discusses how 19th-century railways changed the timing of mail delivery. An answer choice says: "Railways lowered the price of grain in inland towns." It sounds historically plausible. What is the fastest sound reason to eliminate it?`,
    options: [
      r`The claim is historically false, so it cannot be the answer`,
      r`The choice is shorter than the others, so it lacks support`,
      r`The wording is too cautious, so it understates the author`,
      r`The passage never discusses grain prices, so it is off scope`,
    ],
    correctAnswer: 3,
    explanation: r`A scope check is the quickest test: the passage is about mail delivery and never addresses grain prices, so the choice is out however plausible it sounds. Judging it historically false relies on outside knowledge, and it may well be true. Length and cautious wording are not reasons to eliminate a choice.`,
  },
  [r`Why are "half-right" answers dangerous?`]: {
    question: r`A passage says that a painter "abandoned realism after 1910 and was praised by critics for it." A question asks what the passage states about the painter. Which choice is the half-right trap?`,
    options: [
      r`The painter abandoned realism after 1910 and was condemned by critics`,
      r`The painter abandoned realism after 1910 and was praised by critics`,
      r`The painter embraced realism after 1910 and was condemned by critics`,
      r`The painter sold few works in the decade after leaving art school`,
    ],
    correctAnswer: 0,
    explanation: r`The trap matches the passage in its first clause (abandoned realism after 1910) and then changes one word in the second, "condemned" for "praised," which makes the whole choice wrong. The choice with "praised" is fully supported, so it is the answer, not a trap. The choice with "embraced" and "condemned" is wrong throughout, and the one about sales is out of scope.`,
  },
  [r`What should you do when all four choices seem wrong?`]: {
    question: r`A student checks each of the four choices on a question against the passage twice and concludes that all four are wrong. According to the strategy, what should she do first?`,
    options: [
      r`Pick the longest choice, since it is the most likely to be right`,
      r`Reread the entire passage from the start to find a missed detail`,
      r`Reread the question stem, since she may have misread what it asks`,
      r`Pick the choice that best fits what she knows about the subject`,
    ],
    correctAnswer: 2,
    explanation: r`When every choice looks wrong, the usual cause is that the student is answering a different question from the one asked, so rereading the stem comes first. Rereading the whole passage costs minutes and does not fix a misread stem. Length is not a signal of correctness, and outside knowledge of the subject is not a basis for an answer.`,
  },
  [r`Is the longest or most detailed answer usually right?`]: {
    question: r`A passage says only that a composer "drew on folk melodies." Two choices remain. The first: "The composer used folk melodies in his work." The second: "The composer used Hungarian folk melodies, collected on his 1906 travels, in his late string quartets." The passage names no country, year or quartets. Which should the student choose, and why?`,
    options: [
      r`The second, because the more detailed choice is usually right`,
      r`The second, because a longer choice shows deeper understanding`,
      r`The first, because the shorter choice is always the safe one`,
      r`The first, because the added details in the second lack support`,
    ],
    correctAnswer: 3,
    explanation: r`Length and detail are not signals of correctness: the second choice adds a country, a year and a genre that the passage never gives, so it is unsupported. The first choice says only what the passage says. Choosing by length in either direction, longer or shorter, replaces checking the text with a rule that does not hold.`,
  },
  [r`How does predicting an answer help elimination?`]: {
    question: r`A question asks why the author mentions a failed bridge project. Before looking at the choices, a student tells herself: "To show that the planners ignored local advice." How does this step help her?`,
    options: [
      r`She can skip reading the choices and write her own answer in`,
      r`She can quickly reject choices that do not match her prediction`,
      r`She no longer needs to check her answer against the passage`,
      r`She can be sure the first choice she reads is the right one`,
    ],
    correctAnswer: 1,
    explanation: r`With her own answer in mind, choices that say something else stand out as distractors and are easy to reject. She still has to read all four choices, since the answer must be one of them. A prediction comes from the passage and is checked against it, and it gives no guarantee about which choice appears first.`,
  },
  [r`How should you treat answers containing "only" or "solely"?`]: {
    question: r`A passage says: "Economic pressure was among the main causes of the migration, along with years of drought." Which answer choice deserves the closest scrutiny and turns out to be unsupported?`,
    options: [
      r`The migration was caused in part by economic pressure`,
      r`Drought was one of the causes behind the migration`,
      r`The migration was caused solely by economic pressure`,
      r`Economic pressure helped to bring about the migration`,
    ],
    correctAnswer: 2,
    explanation: r`"Solely" makes an exclusivity claim, and the passage names drought as a second cause, so that choice fails. Words like "in part," "one of" and "helped" match the passage's "among the main causes." Exclusive wording is rarely supported by hedged academic prose, which is why it earns a second look.`,
  },
  [r`What is the value of process of elimination over selection?`]: {
    question: r`On a hard question, a student finds firm passage evidence against three choices. The remaining choice is awkwardly worded and is not how she would have put it, but nothing in the passage contradicts it. What should she do?`,
    options: [
      r`Select the remaining choice, since it is the least wrong of the four`,
      r`Go back to an eliminated choice, since the answer should read well`,
      r`Leave the question blank, since none of the choices is fully right`,
      r`Select whichever choice has the most appealing and confident tone`,
    ],
    correctAnswer: 0,
    explanation: r`Right answers in this section are often the least wrong choice, not a perfect one, so eliminating three on evidence is more reliable than waiting to love one. Returning to a choice the passage contradicts trades evidence for smooth wording. Leaving it blank gives up a question she has effectively solved, and an appealing tone is not support.`,
  },
}
