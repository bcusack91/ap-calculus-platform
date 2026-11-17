import type { CardCheck } from '@/lib/flashcard-check-core'

/**
 * Card-check questions for the cards of `mcat-cars-reasoning-fallacies-mcat`: one per card, keyed by the
 * card's exact front text. Each asks the student to use the card's idea in a
 * new situation. Gate: scripts/flashcard-checks/validate.ts.
 */
const r = String.raw

export const checks: Record<string, CardCheck> = {
  [r`How do you recognize a straw man in a passage?`]: {
    question: r`Councillor Reyes proposes closing one downtown street to cars on Sundays. Her opponent replies: "Reyes wants to ban cars from the city. Without cars, businesses would collapse, so her proposal must be rejected." What is wrong with the reply?`,
    options: [
      r`It attacks her personal character rather than her proposal`,
      r`It assumes that only two traffic policies could ever exist`,
      r`It cites an authority who has no expertise in city traffic`,
      r`It attacks an exaggerated version of the proposal she made`,
    ],
    correctAnswer: 3,
    explanation: r`Closing one street on Sundays has been restated as banning cars from the city, a version Reyes would reject, and only that version is refuted: a straw man. Nothing is said about her character, so it is not ad hominem. The reply offers no either/or choice and cites no authority.`,
  },
  [r`What is a false dichotomy?`]: {
    question: r`A speaker says: "Either we cut the library's hours or the town goes bankrupt. Nobody wants bankruptcy, so we must cut the hours." Which fact, if true, most directly exposes the flaw in this argument?`,
    options: [
      r`The town's library is used by fewer people than it once was`,
      r`The town could instead raise funds or trim other spending`,
      r`The speaker has personally disliked the library for years`,
      r`The town has never gone bankrupt at any time in its history`,
    ],
    correctAnswer: 1,
    explanation: r`The argument offers only two options, so showing that other options exist, such as raising funds or trimming other spending, breaks the either/or. Falling library use would, if anything, support the cut. The speaker's dislike of the library attacks the person, and the town's past record does not show that a third choice is available.`,
  },
  [r`What is an ad hominem fallacy?`]: {
    question: r`An economist argues that raising a bridge toll would reduce congestion. Which reply commits an ad hominem fallacy?`,
    options: [
      r`"She drives a luxury car, so her argument is worthless."`,
      r`"Her traffic data come from just one unusual week."`,
      r`"Tolls in a similar city failed to cut congestion."`,
      r`"Her argument ignores drivers with no other route."`,
    ],
    correctAnswer: 0,
    explanation: r`Pointing to the car she drives attacks the economist and says nothing about whether a higher toll would reduce congestion. The other three replies engage the argument itself: one questions her data, one offers a comparison case, and one names a group her reasoning leaves out.`,
  },
  [r`What is an appeal to ignorance?`]: {
    question: r`A resident argues: "No inspector has ever shown that the old footbridge is unsafe. Therefore the footbridge is safe." Which flaw does this argument commit?`,
    options: [
      r`Appeal to authority: an expert's word is treated as proof`,
      r`Hasty generalization: a few cases are treated as all cases`,
      r`Appeal to ignorance: lack of disproof is treated as proof`,
      r`Equivocation: one word is used with two different meanings`,
    ],
    correctAnswer: 2,
    explanation: r`The only support given for the bridge being safe is that no one has shown it to be unsafe, which treats missing disproof as proof. No inspector is quoted as saying the bridge is safe, so it is not an appeal to authority. The argument does not generalize from a few cases, and no word shifts meaning.`,
  },
  [r`Define post hoc ergo propter hoc.`]: {
    question: r`Jun wore a new pair of socks to a quiz and earned his best score of the term. He concludes that the socks improved his performance. What is the flaw in his reasoning?`,
    options: [
      r`It infers that the socks work because nobody has shown they do not`,
      r`It infers that one event caused another only because it came first`,
      r`It infers that the claim is true because a respected person said so`,
      r`It infers the conclusion from a premise that merely restates it`,
    ],
    correctAnswer: 1,
    explanation: r`The score followed the new socks, and Jun treats that order in time as proof of cause: post hoc ergo propter hoc. He does not argue from a lack of disproof, he cites no authority, and his premise (he wore the socks, then scored well) is not the same statement as his conclusion.`,
  },
  [r`What is a hasty generalization?`]: {
    question: r`Four travelers talk about the same city. Which of them commits a hasty generalization?`,
    options: [
      r`"Either we leave for that city by noon or we miss the whole festival."`,
      r`"A famous singer praises that city, so its museums must be excellent."`,
      r`"No one has shown that city is unsafe, so it must be perfectly safe."`,
      r`"Two tourists I met from that city were rude, so its people are rude."`,
    ],
    correctAnswer: 3,
    explanation: r`Judging a whole city's people from two tourists draws a broad conclusion from far too little evidence. The either/or about leaving by noon is at most a false dichotomy, the singer's praise is an appeal to authority, and inferring safety from a lack of disproof is an appeal to ignorance.`,
  },
  [r`What is a slippery slope fallacy?`]: {
    question: r`A teacher warns: "If we let students retake one quiz, they will soon demand to retake every test, then homework will become optional, and within a few years our diplomas will mean nothing." What does this argument fail to provide?`,
    options: [
      r`Support for the claim that each step will lead to the next`,
      r`Support for the claim that students dislike taking quizzes`,
      r`A meaning for the word "quiz" that stays fixed throughout`,
      r`A second option besides the two choices that it presents`,
    ],
    correctAnswer: 0,
    explanation: r`The warning runs from one retake to worthless diplomas without giving any reason to think each step will produce the next, which is what makes it a slippery slope. Whether students dislike quizzes is beside the point. No word changes meaning, and the argument is a chain of predictions, not a choice between two options.`,
  },
  [r`What is an appeal to authority fallacy?`]: {
    question: r`An advertisement says: "A world champion chess player says this brand of tire is the safest on the market, so it is the safest." What is the main weakness of this argument?`,
    options: [
      r`The player's opinion about tires has never been proved to be false`,
      r`The player's success in chess came only after years of hard practice`,
      r`The player's expertise in chess gives no special knowledge of tires`,
      r`The player's view is dismissed because of who the player happens to be`,
    ],
    correctAnswer: 2,
    explanation: r`The claim is accepted only because a famous person said it, and that person's expertise is in chess, not tire safety. That the opinion has not been proved false would be an appeal to ignorance, not a weakness of this argument. Years of practice are irrelevant, and the advertisement accepts the player's view; it does not dismiss it.`,
  },
  [r`What is equivocation?`]: {
    question: r`Consider: "Every bank is a secure place to keep money. The river has a wide bank. So the riverside is a secure place to keep money." What is the flaw in this argument?`,
    options: [
      r`The word "secure" changes its meaning between the two premises`,
      r`The word "bank" changes its meaning between the two premises`,
      r`The first premise is repeated as the conclusion that it supports`,
      r`The river is treated as the cause of the money being kept secure`,
    ],
    correctAnswer: 1,
    explanation: r`In the first premise "bank" means a financial institution and in the second it means the edge of a river, so the conclusion only appears to follow: that is equivocation. "Secure" keeps one meaning throughout. The conclusion is not a restatement of a premise, and no causal claim is made.`,
  },
}
