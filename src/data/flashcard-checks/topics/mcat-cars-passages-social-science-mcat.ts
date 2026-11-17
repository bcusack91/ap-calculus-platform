import type { CardCheck } from '@/lib/flashcard-check-core'

/**
 * Card-check questions for the cards of `mcat-cars-passages-social-science-mcat`: one per card, keyed by the
 * card's exact front text. Each asks the student to use the card's idea in a
 * new situation. Gate: scripts/flashcard-checks/validate.ts.
 */
const r = String.raw

export const checks: Record<string, CardCheck> = {
  [r`How should you evaluate a cited study in a passage?`]: {
    question: r`A passage cites a researcher who interviewed 12 volunteers from a single chess club and concluded that board games improve memory in adults generally. Which evaluation of the study is most sound?`,
    options: [
      r`Its small, self-selected sample cannot support so broad a conclusion`,
      r`Its method is sound, because interviews are the most reliable design`,
      r`Its conclusion is safe, because chess players represent most adults`,
      r`Its large, random sample makes the broad conclusion well supported`,
    ],
    correctAnswer: 0,
    explanation: r`Twelve volunteers from one club are few and unrepresentative, so a conclusion about adults generally exceeds what the design can support. Interviews are not automatically reliable, and members of a chess club are not typical of most adults. The sample is neither large nor random, so the last evaluation misdescribes the study.`,
  },
  [r`How do social science passages differ from humanities passages?`]: {
    question: r`A sociology passage states: "In a survey of 2,000 households, those with gardens reported higher life satisfaction. The author concludes that cities should fund community plots." Which question is this passage most likely to prompt?`,
    options: [
      r`What the garden symbolizes in the author's figurative language`,
      r`Which poetic device the author uses to describe the households`,
      r`Whether the survey's evidence supports the author's conclusion`,
      r`How the narrator's feelings about gardens shift across scenes`,
    ],
    correctAnswer: 2,
    explanation: r`Social science passages lean on empirical studies and data, so they invite questions about whether the evidence supports the conclusion. Questions about symbolism, poetic devices, or a narrator's feelings suit literary passages, and this excerpt has no figurative language, poetry, or narrator to ask about.`,
  },
  [r`What subjects fall under social science CARS passages?`]: {
    question: r`A student sorts four reading-section passages into humanities and social science. Which passage belongs in the social science group?`,
    options: [
      r`An essay on the use of silence in a playwright's last works`,
      r`A reflection on whether beauty exists apart from observers`,
      r`A critique of the ornament on a cathedral's carved west front`,
      r`A study of how class size relates to pupils' test results`,
    ],
    correctAnswer: 3,
    explanation: r`Education is a social science subject, along with sociology, psychology, anthropology, economics, political science and history. An essay on a playwright is literature, a reflection on beauty is philosophy, and a critique of cathedral ornament is architecture or art history, all humanities.`,
  },
  [r`How do you handle passages presenting competing theories?`]: {
    question: r`An excerpt reads: "The scarcity theory holds that markets arose to ration scarce goods. The ritual theory holds that they grew out of seasonal gatherings. The latter fits the archaeological record better: the earliest market sites hold feasting remains but few storage pits." What is the author's stance?`,
    options: [
      r`Endorses the scarcity theory because it fits the excavated sites`,
      r`Endorses the ritual theory because it fits the excavated sites`,
      r`Endorses the ritual theory because it is the more recent theory`,
      r`Rejects both theories because no physical evidence has survived`,
    ],
    correctAnswer: 1,
    explanation: r`"The latter fits the archaeological record better" endorses the ritual theory, and the grounds are the feasting remains and scarce storage pits at early sites. Endorsing the scarcity theory reverses which theory is favored. Recency is never mentioned as a reason, and the author relies on surviving physical evidence instead of denying that any exists.`,
  },
  [r`Why is scope especially important in social science passages?`]: {
    question: r`A passage reports a study of nineteenth-century fishing towns in one northern country, which found that towns where boats were jointly owned had fewer recorded disputes. Which conclusion stays within what the study supports?`,
    options: [
      r`Shared property lowers disputes in all human communities`,
      r`Joint boat ownership went with fewer disputes in those towns`,
      r`Joint boat ownership lowers disputes in towns of every era`,
      r`Joint boat ownership would lower disputes in modern ports`,
    ],
    correctAnswer: 1,
    explanation: r`The finding concerns particular towns in one country and one century, so only the conclusion limited to those towns is supported. Extending it to all communities and all shared property, to every era, or to modern ports generalizes beyond the population and period that were studied.`,
  },
  [r`What should you do when a passage presents statistics?`]: {
    question: r`A passage states: "Of the town's commuters who switched to cycling, 40% made the switch after the new bridge opened." Which answer choice describes this statistic accurately?`,
    options: [
      r`Of all the town's commuters, 40% now cycle because of the bridge`,
      r`Cycling in the town rose by 40% after the new bridge was opened`,
      r`Of commuters who cross the new bridge, 40% travel by bicycle`,
      r`Of commuters who took up cycling, 40% did so after the opening`,
    ],
    correctAnswer: 3,
    explanation: r`The 40% is a share of those who switched to cycling, and it measures when they switched. Describing it as 40% of all commuters changes the group being counted and adds a cause. A 40% rise in cycling is a different quantity, and the share of bridge users who cycle is a comparison the passage never makes.`,
  },
  [r`What is the most common reasoning flaw tested in these passages?`]: {
    question: r`A passage notes that towns with more bookshops per resident have higher average incomes, and the author concludes that opening bookshops raises a town's income. To which objection is this reasoning most open?`,
    options: [
      r`It treats an association as proof that one thing causes another`,
      r`It treats a well-proven cause as if it were a mere association`,
      r`It relies on expert opinion in place of any measured evidence`,
      r`It attacks the character of people who hold the opposing view`,
    ],
    correctAnswer: 0,
    explanation: r`Bookshops and income vary together, but that does not show bookshops raise income: wealth may attract bookshops, or a third factor such as a nearby university may drive both. No cause has been proven, so the reasoning cannot be understating one. The argument uses measured figures, not expert opinion, and it attacks no one's character.`,
  },
  [r`What does it mean when an author says a finding is "suggestive"?`]: {
    question: r`An author writes: "Results from the pilot program are suggestive: attendance rose in the three schools that offered breakfast, though no comparison schools were tracked." Which statement would the author most likely accept?`,
    options: [
      r`Breakfast programs have been proven to raise school attendance`,
      r`Breakfast programs have been shown to leave attendance unchanged`,
      r`Breakfast programs may raise attendance, but this is not settled`,
      r`Breakfast programs raise attendance in every school that adopts one`,
    ],
    correctAnswer: 2,
    explanation: r`"Suggestive" is an explicit hedge, reinforced by the admission that no comparison schools were tracked, so the author would accept only the tentative statement. "Proven" overstates the certainty, and "every school" overstates both certainty and scope. Saying attendance was left unchanged contradicts the reported rise.`,
  },
}
