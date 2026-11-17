import type { CardCheck } from '@/lib/flashcard-check-core'

/**
 * Card-check questions for the cards of `mcat-cars-reasoning-mcat`: one per card, keyed by the
 * card's exact front text. Each asks the student to use the card's idea in a
 * new situation. Gate: scripts/flashcard-checks/validate.ts.
 */
const r = String.raw

export const checks: Record<string, CardCheck> = {
  [r`How do you identify a conclusion?`]: {
    question: r`Read this argument: "The library should extend its evening hours. Most of its members work during the day, and half of them have never visited on a weekday. Evening visits already account for most borrowing." Which statement is the conclusion?`,
    options: [
      r`Most of the library's members work during the day.`,
      r`Half of the members have never visited on a weekday.`,
      r`The library should extend its evening hours.`,
      r`Evening visits already account for most borrowing.`,
    ],
    correctAnswer: 2,
    explanation: r`The conclusion is the statement the others support: the three facts about members and borrowing are all reasons to extend the hours, and extending the hours supports nothing further. No signal word marks it here, so you find it by asking what each sentence is doing. The statements about working members, weekday visits and evening borrowing are premises.`,
  },
  [r`What is a necessary vs. sufficient condition?`]: {
    question: r`A firm states: "Every applicant we hire has passed the written test." Dana passed the written test and concludes that she will be hired. Which description of passing the test is correct?`,
    options: [
      r`Passing is sufficient for being hired but is not required for it`,
      r`Passing is necessary for being hired but does not guarantee it`,
      r`Passing is both necessary and sufficient for being hired here`,
      r`Passing is neither necessary nor sufficient for being hired here`,
    ],
    correctAnswer: 1,
    explanation: r`The firm says everyone hired has passed, so passing must be present for hiring: it is necessary. Nothing says that everyone who passes is hired, so passing is not sufficient, and Dana has confused the two. Calling it sufficient reverses the statement, calling it both adds a guarantee the firm never gave, and calling it neither ignores that no one is hired without passing.`,
  },
  [r`How does a counterexample function?`]: {
    question: r`A critic claims: "Every novel that has won the regional prize was written by an author born in the region." Which single finding would refute this claim?`,
    options: [
      r`One prize-winning novel by an author born outside the region`,
      r`Many prize-winning novels by authors born inside the region`,
      r`One losing novel by an author who was born inside the region`,
      r`Many losing novels by authors who were born outside the region`,
    ],
    correctAnswer: 0,
    explanation: r`A universal claim is refuted by one case that breaks it: a single winner whose author was born elsewhere. Many winners by local authors fit the claim and cannot refute it. Novels that lost the prize, whoever wrote them, fall outside a claim that is only about winners.`,
  },
  [r`What is the difference between deductive and inductive reasoning?`]: {
    question: r`A gardener notes that each of the forty tomato plants she has grown in clay soil produced small fruit. She concludes that the next tomato plant she grows in clay soil will produce small fruit. How is this reasoning best described?`,
    options: [
      r`Deductive: the premises make the conclusion certain if they are true`,
      r`Inductive: the premises make the conclusion certain if they are true`,
      r`Deductive: the premises make the conclusion likely but not certain`,
      r`Inductive: the premises make the conclusion likely but not certain`,
    ],
    correctAnswer: 3,
    explanation: r`She generalizes from forty observed cases to a new one, which is inductive, and past cases can only make the prediction probable: plant forty-one could differ. Calling it deductive mistakes a pattern for a guarantee. The two mixed descriptions attach the wrong strength to the label, since induction never gives certainty and deduction never gives mere likelihood.`,
  },
  [r`What is circular reasoning?`]: {
    question: r`Four people defend the same guidebook. Which argument is circular?`,
    options: [
      r`"This guidebook is reliable, because what it says can be relied on."`,
      r`"This guidebook is reliable, because a famous actor recommends it."`,
      r`"This guidebook is reliable, because nobody has shown it has errors."`,
      r`"This guidebook is reliable, because my one trip with it went well."`,
    ],
    correctAnswer: 0,
    explanation: r`Saying the book is reliable because it can be relied on gives the conclusion again as its own premise, so nothing new is proved. The other three are weak for different reasons but do offer a separate reason: the actor is an appeal to authority, the absence of shown errors is an appeal to ignorance, and one good trip is a hasty generalization.`,
  },
  [r`What makes an argument valid but unsound?`]: {
    question: r`Consider: "All fish breathe air with lungs. A trout is a fish. So a trout breathes air with lungs." Fish in fact breathe with gills. How is this argument best described?`,
    options: [
      r`Sound but invalid: the premises are true, but the form is flawed`,
      r`Valid but unsound: the form is correct, but a premise is false`,
      r`Valid and sound: the form is correct and the premises are true`,
      r`Invalid and unsound: the form is flawed and a premise is false`,
    ],
    correctAnswer: 1,
    explanation: r`If both premises were true the conclusion would have to be true, so the form is valid. The first premise is false, so the argument is unsound and the conclusion is not established. Calling the form flawed confuses a false premise with bad logic, and calling the argument sound ignores the false premise.`,
  },
  [r`How should you evaluate analogical reasoning?`]: {
    question: r`A coach argues: "This training plan improved the race times of a group of sprinters. My marathon runners are also runners who train on the same track, so the plan will improve their times too." Which fact, if true, most undermines the analogy?`,
    options: [
      r`The sprinters wore a different brand of shoes from the marathon group`,
      r`The sprinters live in a different part of the city from the others`,
      r`The sprinters' club was founded many years before the marathon club`,
      r`The plan builds short bursts of power, which a marathon barely uses`,
    ],
    correctAnswer: 3,
    explanation: r`An analogy holds only if the cases are alike in the respects that matter to the conclusion. What the plan trains is exactly such a respect, so a difference there breaks the comparison. Shoe brand, where the runners live and the age of the clubs are differences with no bearing on whether the plan would work.`,
  },
  [r`What are the components of an argument?`]: {
    question: r`An editorial says: "Cyclists who wear helmets suffer fewer head injuries. The city should therefore require helmets for all cyclists." The editorial never says that reducing head injuries is worth the burden of a legal requirement. What role does that unsaid idea play?`,
    options: [
      r`A premise: stated evidence offered for the conclusion`,
      r`A conclusion: the claim the other statements support`,
      r`An assumption: needed by the conclusion but never stated`,
      r`A counterexample: one case that refutes the conclusion`,
    ],
    correctAnswer: 2,
    explanation: r`The step from fewer injuries to a legal requirement works only if the benefit is worth the burden, and the editorial never says so: that makes it an assumption. It is not a premise, because premises are stated. The conclusion is the call to require helmets, and nothing here is a single case refuting a universal claim.`,
  },
  [r`Which is the strongest sign an answer choice is a CARS trap?`]: {
    question: r`A short passage says only that a town built a seawall in 1950 and that flooding of its harbor street stopped afterward. A question begins "The passage suggests that the seawall..." Which completion should be rejected because it rests on outside knowledge?`,
    options: [
      r`"was followed by an end to flooding on the harbor street"`,
      r`"was built around the middle of the twentieth century"`,
      r`"is a common form of coastal defense used around the world"`,
      r`"was put up before the flooding of the street had ended"`,
    ],
    correctAnswer: 2,
    explanation: r`That seawalls are a common coastal defense is true in the real world, but nothing in the passage says or implies it, so it is the trap. The other three can each be pointed to in the text: built in 1950, flooding stopped afterward, and the wall came before the flooding ended.`,
  },
  [r`A "weaken the argument" question asks you to find the choice that:`]: {
    question: r`A museum sold 10,000 tickets last year. Its director argues: "If we double the ticket price, our ticket revenue will double." Which statement, if true, most weakens the argument?`,
    options: [
      r`The museum's ticket price has stayed unchanged for the last decade`,
      r`Surveys show most visitors would stop coming at the higher price`,
      r`Several other museums in the region also sold 10,000 tickets last year`,
      r`The museum spends most of its ticket revenue on building upkeep`,
    ],
    correctAnswer: 1,
    explanation: r`The argument depends on the unstated assumption that just as many people will buy tickets at double the price, and the survey result knocks out that assumption. How long the price has been unchanged, what other museums sold and how the revenue is spent are facts about the topic that leave the link between price and revenue untouched.`,
  },
  [r`When a question asks what the author "most likely means" by a phrase, you should:`]: {
    question: r`A reviewer writes: "The director's latest film is a quiet one. There are no car chases and no grand speeches, just two people slowly learning to forgive each other." As used here, "quiet" most nearly means:`,
    options: [
      r`recorded at a very low sound volume`,
      r`ignored by nearly all of the public`,
      r`free of any spoken lines of dialogue`,
      r`restrained and undramatic in its style`,
    ],
    correctAnswer: 3,
    explanation: r`The next sentence explains the word: no chases, no grand speeches, only a slow personal story, so "quiet" means restrained. Low volume is the dictionary sense, which the context does not support. Nothing is said about how the public received the film, and "no grand speeches" does not mean no dialogue at all.`,
  },
  [r`What is the function of a passage's first paragraph most often?`]: {
    question: r`An essay opens: "For decades, historians have disagreed about why the canal company failed. Some blame its managers; others blame the railways." The remaining paragraphs argue for the railway explanation. What does the opening paragraph do?`,
    options: [
      r`It sets out the background and the question the essay will address`,
      r`It states the conclusion that the rest of the essay goes on to defend`,
      r`It supplies the main evidence for the railway explanation of failure`,
      r`It rebuts the strongest objection to the essay's railway explanation`,
    ],
    correctAnswer: 0,
    explanation: r`The opening names a long-running disagreement and the two sides, which gives context and poses the question. It does not take a side, so it does not state the conclusion. It offers no evidence for the railway view and answers no objection; those jobs fall to the later paragraphs.`,
  },
  [r`An author describes two conflicting theories and then states "the truth likely lies somewhere between these extremes." This approach is best characterized as:`]: {
    question: r`One committee member says the footbridge needs no new support beams. Another says it needs twelve. The chair concludes: "Six beams must be the right number, since it is halfway between the two views." Which flaw does the chair commit?`,
    options: [
      r`False dichotomy: assuming that only two views could possibly exist`,
      r`Straw man: distorting one of the two views in order to refute it`,
      r`Appeal to moderation: assuming the midpoint of two views is correct`,
      r`Circular reasoning: assuming the conclusion in one of the premises`,
    ],
    correctAnswer: 2,
    explanation: r`The chair gives no engineering reason for six beams, only that it lies between the two positions, which is an appeal to moderation. It is not a false dichotomy, because the chair adopts a third option. Neither view is distorted, and the premise (the two views) does not restate the conclusion.`,
  },
  [r`Which is a hallmark of a correct CARS answer?`]: {
    question: r`An essayist writes that the town's old clock tower "no longer keeps time, yet residents still set their routines by its silent face." Which statement about the residents can be traced to this sentence?`,
    options: [
      r`They keep time by the tower because its clock remains accurate`,
      r`They still organize their days around a tower that has stopped`,
      r`They set their routines in silence out of respect for the tower`,
      r`They want the old tower repaired so that it keeps time again`,
    ],
    correctAnswer: 1,
    explanation: r`The sentence says the clock has stopped and that residents still set their routines by it, which matches the keyed statement in meaning. The choices about keeping time and about silence reuse the words of the sentence but change what it says. A wish to repair the tower appears nowhere in the text.`,
  },
  [r`A CARS answer choice that is "too strong" typically:`]: {
    question: r`An author writes that regular reading "may, in some children, be associated with larger vocabularies." Which answer choice should be rejected as too strong for this author?`,
    options: [
      r`Reading might be linked to larger vocabularies for some children`,
      r`Some children who read regularly could have larger vocabularies`,
      r`A link between reading and vocabulary may exist in some children`,
      r`Reading always produces a larger vocabulary in every child`,
    ],
    correctAnswer: 3,
    explanation: r`The author hedges three times: "may," "in some children," and "associated with." A choice saying reading "always produces" the effect "in every child" replaces all of that with absolute, causal language the passage never supports. The other three keep the same limited, tentative level of certainty as the author.`,
  },
}
