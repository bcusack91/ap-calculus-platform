import type { CardCheck } from '@/lib/flashcard-check-core'

/**
 * Card-check questions for the cards of `mcat-cars-reasoning-strengthen-weaken-mcat`: one per card, keyed by the
 * card's exact front text. Each asks the student to use the card's idea in a
 * new situation. Gate: scripts/flashcard-checks/validate.ts.
 */
const r = String.raw

export const checks: Record<string, CardCheck> = {
  [r`What does a "weaken" answer typically do?`]: {
    question: r`A bookshop moved its poetry section to the front of the store, and poetry sales rose that month. The owner concludes that the new location caused the rise. Which statement, if true, most weakens the conclusion?`,
    options: [
      r`A popular poet won a major prize that month, lifting sales everywhere`,
      r`The poetry section holds fewer titles than the shop's fiction section`,
      r`The owner had planned the move for more than a year before making it`,
      r`Customers must now walk past the poetry shelves to reach the tills`,
    ],
    correctAnswer: 0,
    explanation: r`The owner assumes nothing but the move explains the rise; a prize that lifted poetry sales everywhere supplies an alternative explanation for the same evidence. The size of the section and how long the move was planned do not touch the causal link. Customers walking past the shelves would support the owner's explanation.`,
  },
  [r`What is the best way to weaken a causal claim?`]: {
    question: r`A survey finds that people who own dogs walk more each day than people who do not. A writer concludes that owning a dog makes people walk more. Which statement, if true, most weakens the writer's conclusion?`,
    options: [
      r`People who own dogs walk about an hour more per day than other people do`,
      r`People who own cats walk no more each day than people with no pets at all`,
      r`People who already walk a great deal are the ones who choose to get dogs`,
      r`People who own dogs say their dogs are what get them out of the house`,
    ],
    correctAnswer: 2,
    explanation: r`If keen walkers are the ones who get dogs, the causation runs the other way: walking leads to dog ownership, not ownership to walking. The hour-per-day figure only restates the correlation. The fact about cat owners does not bear on dogs, and owners crediting their dogs would support the conclusion.`,
  },
  [r`What does a "strengthen" answer typically do?`]: {
    question: r`After a town lowered the speed limit on Main Street, crashes there fell by a third. The mayor credits the lower limit. Which statement, if true, most strengthens the mayor's conclusion?`,
    options: [
      r`Traffic volume on Main Street dropped sharply over the whole period`,
      r`Main Street has more shops than any other street in the whole town`,
      r`The mayor has supported lower speed limits for a great many years`,
      r`Traffic volume on Main Street stayed the same over the whole period`,
    ],
    correctAnswer: 3,
    explanation: r`Fewer cars would be a competing explanation for fewer crashes, so learning that traffic volume was unchanged removes that rival and strengthens the claim. A sharp drop in traffic would do the reverse and weaken it. The number of shops and the mayor's long-held views have no effect on the link between the limit and the crashes.`,
  },
  [r`How does attacking the sample weaken a study-based argument?`]: {
    question: r`A magazine with 50,000 readers printed a survey form, and 30 readers mailed it back. Of those, 24 said they would pay more for the magazine. The editor concludes that most readers would pay more. Which statement, if true, most weakens the conclusion?`,
    options: [
      r`The survey form was printed on the last page of the March issue`,
      r`Only the most devoted readers bothered to mail in the survey form`,
      r`The magazine has raised its price twice in the past ten years`,
      r`The editor has wanted to raise the price for quite some time`,
    ],
    correctAnswer: 1,
    explanation: r`The conclusion generalizes from 30 respondents to 50,000 readers, so showing that those 30 are unrepresentative (the most devoted readers) removes its support. Where the form was printed and the history of price rises do not show the sample is skewed. The editor's wishes concern motive, not the evidence.`,
  },
  [r`Why are irrelevant answers common traps here?`]: {
    question: r`Students in a school's chess club earn higher math grades than other students. The principal concludes that playing chess improves math ability. Which statement, although it is about the same topic, has no effect on the strength of this argument?`,
    options: [
      r`Students who were already strong at math were the ones who chose chess`,
      r`Club members' math grades rose only after they had joined the club`,
      r`Chess was first played many centuries before the school was founded`,
      r`Club members also get extra math tutoring that other students do not`,
    ],
    correctAnswer: 2,
    explanation: r`The history of chess mentions the subject but says nothing about whether chess explains the higher grades, so it neither helps nor hurts. Strong math students choosing chess, and extra tutoring for members, each give a rival explanation and weaken the argument. Grades rising only after joining supports the causal claim.`,
  },
  [r`What is the difference between weakening and contradicting?`]: {
    question: r`A report states that a park's visitor numbers doubled after a new playground opened, and it concludes that the playground attracted the new visitors. Which choice weakens the conclusion by reducing its support, rather than by denying a fact the report states?`,
    options: [
      r`A new bus route to the park began running in that very same month`,
      r`The park's visitor numbers did not in fact double during that period`,
      r`The new playground did not in fact open at the park in that period`,
      r`The park's visitors were counted the same way before and afterward`,
    ],
    correctAnswer: 0,
    explanation: r`A new bus route leaves every stated fact in place but offers another reason for the extra visitors, so the evidence supports the conclusion less. Denying that visitor numbers doubled, or that the playground opened, contradicts stated facts instead of weakening the reasoning. Consistent counting makes the evidence more trustworthy, which helps the report.`,
  },
  [r`How do you handle "EXCEPT" versions of these questions?`]: {
    question: r`A farmer switched to a new fertilizer and his wheat yield rose. He concludes that the fertilizer caused the rise. Each of the following, if true, weakens his conclusion EXCEPT:`,
    options: [
      r`Rainfall that season was far higher than in any of the previous years`,
      r`The farmer also planted a new high-yield wheat variety that season`,
      r`Neighboring farms without the fertilizer saw the same rise in yield`,
      r`A neighboring field without the fertilizer showed no rise in yield`,
    ],
    correctAnswer: 3,
    explanation: r`Three choices weaken and the answer is the one that does not. A nearby field without the fertilizer and with no rise works like a control and strengthens the claim. Unusually high rainfall and a new wheat variety are alternative causes, and the same rise on farms without the fertilizer shows the effect occurring without the alleged cause.`,
  },
  [r`How should you treat the new information introduced in a strengthen or weaken answer choice?`]: {
    question: r`An author argues that new bike lanes caused a rise in cycling, since rider counts doubled after the lanes opened. A question asks which choice, if true, most weakens the argument, and one choice reads "The price of gasoline tripled during the same months." The passage never mentions gasoline. How should this choice be handled?`,
    options: [
      r`Reject it because the passage gives no support for the price change`,
      r`Accept it as true and note that it offers a rival cause of the rise`,
      r`Reject it because a tripling of gasoline prices is not very realistic`,
      r`Accept it as true and note that it supports the author's conclusion`,
    ],
    correctAnswer: 1,
    explanation: r`New information in a strengthen or weaken choice is taken as true; the only question is what it does to the link between evidence and conclusion. Here costly gasoline is another reason people would cycle, so it weakens the argument. Rejecting it for lacking passage support or for seeming unrealistic disputes the fact itself, and it does not support the bike-lane explanation.`,
  },
}
