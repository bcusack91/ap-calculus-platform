import type { CardCheck } from '@/lib/flashcard-check-core'

/**
 * Card-check questions for the cards of `mcat-cars-reasoning-assumptions-mcat`: one per card, keyed by the
 * card's exact front text. Each asks the student to use the card's idea in a
 * new situation. Gate: scripts/flashcard-checks/validate.ts.
 */
const r = String.raw

export const checks: Record<string, CardCheck> = {
  [r`What is an assumption in argumentative terms?`]: {
    question: r`An argument reads: "The town's only bridge will be closed on Saturday. So the farmers on the far bank will be unable to bring their produce to Saturday's market." Which statement is an assumption of this argument?`,
    options: [
      r`The town's only bridge will be closed to traffic on Saturday`,
      r`The farmers will be unable to bring produce to the market`,
      r`The farmers have no way to cross the river except the bridge`,
      r`The farmers sell more on Saturdays than on any other day`,
    ],
    correctAnswer: 2,
    explanation: r`The conclusion follows from the bridge closure only if there is no ferry, ford or other crossing, and the argument never says so: that is the required unstated premise. The bridge closure is stated, so it is a premise. The farmers being unable to reach the market is the conclusion, and how much they sell on Saturdays is not needed.`,
  },
  [r`How does an assumption differ from an implication?`]: {
    question: r`An argument reads: "The bakery's ovens broke down on Monday and will take a week to fix. So the bakery will sell no bread of its own this week." Consider the statement "A customer who wants the bakery's own bread on Thursday will not find any." How is it best described?`,
    options: [
      r`An implication: it follows once the conclusion is accepted`,
      r`An assumption: the conclusion needs it in order to follow`,
      r`A premise: it is stated as evidence for the conclusion`,
      r`A counterexample: it shows that the conclusion is false`,
    ],
    correctAnswer: 0,
    explanation: r`If the bakery sells no bread of its own this week, then a Thursday customer finds none: the statement comes after the conclusion, so it is an implication. An assumption comes before the conclusion, such as the bakery having no other way to bake. The statement is not given in the argument, and it agrees with the conclusion.`,
  },
  [r`What is the most common assumption in causal arguments?`]: {
    question: r`After a company installed standing desks, its employees reported fewer backaches. The manager concludes that the desks reduced the backaches. Which assumption does this conclusion depend on?`,
    options: [
      r`Standing desks are cheaper to install than ordinary seated desks`,
      r`Every employee at the company prefers standing to sitting at work`,
      r`Backaches are the most serious health problem among the employees`,
      r`Nothing else that changed at the time explains the fewer backaches`,
    ],
    correctAnswer: 3,
    explanation: r`A causal conclusion drawn from a before-and-after change assumes no other factor, such as new chairs or a lighter workload, produced the result. The cost of the desks, whether everyone likes standing and how serious backaches are can all be false without touching the claim that the desks caused the improvement.`,
  },
  [r`Why are assumption answers often the least "interesting" choice?`]: {
    question: r`An argument reads: "The recipe says this cake must bake for 40 minutes. Noor put the cake in the oven at 3:00, so it will be ready at 3:40." Which choice, although it may seem too obvious to matter, is an assumption the argument requires?`,
    options: [
      r`Noor has baked this cake successfully many times before`,
      r`The oven is at the temperature that the recipe calls for`,
      r`The recipe was written by a well-known pastry chef`,
      r`The cake will taste better than one bought from a shop`,
    ],
    correctAnswer: 1,
    explanation: r`The 40-minute figure applies only if the oven is at the recipe's temperature; if it is not, the conclusion about 3:40 fails, so this plain statement is required. Noor's experience, the fame of the recipe's writer and how the cake will taste are more eye-catching, but each could be false and the timing argument would still stand.`,
  },
  [r`What is the difference between an assumption and a fact stated in the passage?`]: {
    question: r`An argument reads: "Our orchestra's ticket sales rose 20% this season. This season we also added a Sunday afternoon concert. Clearly, audiences prefer afternoon concerts." Which statement is a premise of this argument rather than an assumption?`,
    options: [
      r`The orchestra added a Sunday afternoon concert this season`,
      r`The rise in sales came mainly from the afternoon concert`,
      r`Nothing other than the new concert explains the sales rise`,
      r`Buyers chose the Sunday concert because of its time of day`,
    ],
    correctAnswer: 0,
    explanation: r`The addition of the Sunday afternoon concert is stated outright, so it is a premise; an assumption is always unstated. The other three are ideas the argument needs but never says: that the extra sales came from that concert, that nothing else explains the rise, and that the time of day is what attracted buyers.`,
  },
  [r`What is the negation test?`]: {
    question: r`A cafe's sales fell while the road outside was closed for repairs. The owner concludes that sales will recover once the road reopens. A student tests the candidate assumption "The road closure was the reason sales fell" by negating it. What does the test show?`,
    options: [
      r`The argument survives, so the statement is a genuine assumption`,
      r`The argument collapses, so the statement is not an assumption`,
      r`The argument collapses, so the statement is a genuine assumption`,
      r`The argument survives, so the statement is not an assumption`,
    ],
    correctAnswer: 2,
    explanation: r`Negated, the statement says the closure was not the reason sales fell, and then reopening the road gives no ground to expect a recovery: the argument collapses. Collapse under negation is what marks a genuine assumption. Saying the argument survives misreads the negation, and treating collapse as a sign of a non-assumption reverses the test.`,
  },
  [r`What assumption underlies generalizing from a sample?`]: {
    question: r`A reporter interviews 50 people leaving a downtown gym and finds that 45 of them exercise at least three times a week. She concludes that 90% of the city's residents exercise at least three times a week. Which assumption does she rely on?`,
    options: [
      r`People leaving a gym exercise more often than most residents do`,
      r`People leaving a gym are typical of the city's residents overall`,
      r`The gym is the most popular place to exercise in the whole city`,
      r`Exercising three times a week is enough to keep a person healthy`,
    ],
    correctAnswer: 1,
    explanation: r`Moving from 45 of 50 gym users to 90% of all residents works only if the people sampled are representative of the city. If gym users exercise more than most residents, the generalization fails, so that statement is the opposite of what she needs. The gym's popularity and the health value of exercise do not bear on the step from sample to population.`,
  },
  [r`How do you find an assumption bridging a gap?`]: {
    question: r`An argument reads: "This novel has sold more copies than any other book this year. Therefore it is the best-written book of the year." Which assumption links the new term in the conclusion to the premise?`,
    options: [
      r`The book that sells the most copies is the one that is priced lowest`,
      r`The novel has sold more copies than any other book has sold this year`,
      r`The novel will sell more copies next year than it has sold this year`,
      r`The book that sells the most copies is the one that is written best`,
    ],
    correctAnswer: 3,
    explanation: r`The conclusion introduces "best-written," which the premise about sales never mentions, so the argument needs a link from highest sales to best writing. A link from sales to low price connects to nothing in the conclusion. The sales fact is already stated as the premise, and next year's sales are irrelevant.`,
  },
}
