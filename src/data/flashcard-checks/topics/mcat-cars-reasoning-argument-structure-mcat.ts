import type { CardCheck } from '@/lib/flashcard-check-core'

/**
 * Card-check questions for the cards of `mcat-cars-reasoning-argument-structure-mcat`: one per card, keyed by the
 * card's exact front text. Each asks the student to use the card's idea in a
 * new situation. Gate: scripts/flashcard-checks/validate.ts.
 */
const r = String.raw

export const checks: Record<string, CardCheck> = {
  [r`What is the concession-rebuttal structure?`]: {
    question: r`An author writes: "Admittedly, electric buses cost more to buy than diesel ones. But over ten years their lower fuel and repair bills more than make up the difference, so the city should buy them." What is the first sentence doing?`,
    options: [
      r`It states the main conclusion that the other sentences are there to support`,
      r`It grants an opposing point that the author then shows is not decisive`,
      r`It offers a piece of evidence that directly supports buying electric buses`,
      r`It rebuts an opposing point that the author had granted in an earlier line`,
    ],
    correctAnswer: 1,
    explanation: r`The author first admits the higher purchase price, a point for the other side, and then explains why it does not defeat the case: that is a concession followed by a rebuttal. The conclusion is that the city should buy the buses. The higher price counts against buying, so it is not supporting evidence, and the rebuttal is the second sentence, not the first.`,
  },
  [r`What does a question asking the "function" of a paragraph want?`]: {
    question: r`An essay argues that city trees lower summer temperatures. Its third paragraph reports measurements in which tree-lined streets were 3 degrees cooler than bare streets nearby. Which choice names that paragraph's role in the argument, rather than merely summarizing what it says?`,
    options: [
      r`It reports that tree-lined streets were three degrees cooler`,
      r`It raises an objection to the essay's claim about city trees`,
      r`It qualifies the essay's claim by limiting it to some streets`,
      r`It provides evidence supporting the essay's claim about trees`,
    ],
    correctAnswer: 3,
    explanation: r`A function question asks what the paragraph does for the argument, and measurements showing cooler tree-lined streets serve as evidence for the claim. Saying that it reports streets were three degrees cooler is accurate but only repeats the content. The measurements agree with the claim, so they are not an objection, and they do not narrow it.`,
  },
  [r`What is the role of an example in an argument?`]: {
    question: r`A passage reads: "Small changes in routine can have large effects on a workplace. At one print shop, moving the morning meeting half an hour earlier cut late orders by half. Managers should not dismiss minor adjustments." What role does the print shop play?`,
    options: [
      r`It illustrates the general claim that small changes can matter`,
      r`It is the main idea that the rest of the passage sets out to prove`,
      r`It is an objection to the general claim that the author answers`,
      r`It narrows the general claim so that it covers print shops only`,
    ],
    correctAnswer: 0,
    explanation: r`The print shop is one concrete case offered to support the general point about small changes. An example is never the main idea, which here is the claim about workplaces in general. The case agrees with the claim, so it is not an objection, and the author still speaks of managers in general, so the claim is not narrowed.`,
  },
  [r`How do you spot the pivot point in a passage?`]: {
    question: r`A passage reads: "Many people believe that a longer school day would raise achievement. The idea is intuitive, and several districts have tried it. Yet the districts that added hours saw no gains, which suggests that how time is used matters more than how much of it there is." Where does the author's own argument begin?`,
    options: [
      r`At "Many people believe," where the popular view is introduced`,
      r`At "The idea is intuitive," where the author endorses that view`,
      r`At "Yet," where the author turns away from the popular belief`,
      r`At "several districts," where the author first gives evidence`,
    ],
    correctAnswer: 2,
    explanation: r`The contrast word "Yet" marks the turn from what many people believe to what the author actually argues, that use of time matters more than amount. The opening sentence only reports the popular view. Calling the idea intuitive and noting that districts tried it are setup, not endorsement and not the evidence for the author's claim.`,
  },
  [r`What does it mean when an author qualifies a claim late in the passage?`]: {
    question: r`A passage argues at length that remote work raises productivity. Its last paragraph adds: "These gains, however, appear only in jobs that require little real-time collaboration." Which statement best expresses the main idea?`,
    options: [
      r`Remote work raises productivity in every job and in every industry`,
      r`Remote work lowers productivity in jobs needing much live teamwork`,
      r`Remote work has no clear effect on how productive employees can be`,
      r`Remote work raises productivity in jobs needing little live teamwork`,
    ],
    correctAnswer: 3,
    explanation: r`The late qualification narrows the claim to jobs with little real-time collaboration, so the main idea must carry that limit. The version covering every job ignores the qualification. The passage says the gains are absent in collaborative jobs, not that productivity falls, and it plainly does claim an effect.`,
  },
  [r`What is the difference between an author's claim and their evidence?`]: {
    question: r`A letter reads: "The town should replace its streetlights with LED lamps. LED lamps use half the electricity of the current ones, and the neighboring town cut its lighting bill by 40% after switching." What is the statement about the neighboring town's bill?`,
    options: [
      r`Evidence: a reason offered for accepting the claim`,
      r`The claim: what the writer wants the reader to accept`,
      r`An assumption: a needed idea the writer never states`,
      r`A concession: a point granted to the opposing side`,
    ],
    correctAnswer: 0,
    explanation: r`The claim is that the town should switch to LED lamps; the neighboring town's lower bill is a reason given for accepting it, so it is evidence. It cannot be an assumption because it is stated outright. It favors the writer's side, so it is not a concession.`,
  },
  [r`How do you tell the main conclusion from an intermediate conclusion?`]: {
    question: r`An argument reads: "The river's fish count fell sharply only after the factory opened upstream, and nothing else on the river changed. So the factory is the cause of the decline. Since the factory is the cause, the council should require it to treat its wastewater." What is the main conclusion?`,
    options: [
      r`The factory is the cause of the decline in the river's fish count`,
      r`The fish count fell sharply only after the factory had opened`,
      r`The council should require the factory to treat its wastewater`,
      r`Nothing else on the river changed during the period in question`,
    ],
    correctAnswer: 2,
    explanation: r`The call for wastewater treatment is supported by everything else and supports nothing further, so it is the main conclusion. That the factory caused the decline is an intermediate conclusion: it is argued for first and then used as a premise. The timing of the decline and the absence of other changes are the basic premises.`,
  },
}
