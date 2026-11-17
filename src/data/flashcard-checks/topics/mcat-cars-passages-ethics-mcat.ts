import type { CardCheck } from '@/lib/flashcard-check-core'

/**
 * Card-check questions for the cards of `mcat-cars-passages-ethics-mcat`: one per card, keyed by the
 * card's exact front text. Each asks the student to use the card's idea in a
 * new situation. Gate: scripts/flashcard-checks/validate.ts.
 */
const r = String.raw

export const checks: Record<string, CardCheck> = {
  [r`What is virtue ethics?`]: {
    question: r`A shopkeeper notices that a customer overpaid and runs after him to return the extra coins. Four commentators praise her for different reasons. Which commentator is reasoning as a virtue ethicist?`,
    options: [
      r`She produced more total happiness than keeping the coins would have`,
      r`She obeyed a rule against theft that binds whatever the result may be`,
      r`She acted as an honest person would, which shows her good character`,
      r`She followed the written policy that her shop's owner had laid down`,
    ],
    correctAnswer: 2,
    explanation: r`Virtue ethics evaluates character and asks what a virtuous person would do, so praising her as an honest person is the virtue-based judgment. Counting total happiness judges by consequences, and citing a rule that binds whatever the result judges by duty. Following the shop's policy is simple compliance, not an assessment of character.`,
  },
  [r`What are the four principles of medical ethics?`]: {
    question: r`A clinic receives fewer doses of a new medicine than it has eligible patients. Rather than offering the doses to patients who are friends of the staff, the director assigns them by lottery among everyone who qualifies. Which principle of medical ethics does the lottery most directly serve?`,
    options: [
      r`Autonomy: respecting each patient's own choice`,
      r`Beneficence: acting for the patient's own good`,
      r`Non-maleficence: avoiding harm to the patient`,
      r`Justice: distributing care fairly among patients`,
    ],
    correctAnswer: 3,
    explanation: r`A lottery among all who qualify is about fair distribution of a scarce resource, which is justice. Autonomy concerns a patient's right to decide about their own care, and no patient's decision is at issue here. Beneficence and non-maleficence concern helping and not harming an individual patient, not how doses are shared out.`,
  },
  [r`What is a common question type in ethics passages?`]: {
    question: r`An author argues that "a promise binds only when it was made freely." A question describes a sailor who, threatened by smugglers, promised to hand over his cargo and is now safely in port. What would the author conclude about the sailor?`,
    options: [
      r`He is not bound, because the promise was not made freely`,
      r`He is bound, because every promise must always be kept`,
      r`He is not bound, because the cargo was worth a great deal`,
      r`He is bound, because breaking promises harms public trust`,
    ],
    correctAnswer: 0,
    explanation: r`The principle, stated abstractly, is that only freely made promises bind, and a promise made under threat is not free. Saying every promise must be kept ignores the author's condition. The value of the cargo and harm to public trust are reasons the author never gives, so they do not apply the author's principle.`,
  },
  [r`How do you identify an unstated ethical assumption?`]: {
    question: r`An author argues: "Zoos prevent animals from roaming freely. Therefore zoos harm the animals they keep." Which unstated assumption does this argument depend on?`,
    options: [
      r`Zoos teach the public a great deal about wild animals`,
      r`Being unable to roam freely is a harm to an animal`,
      r`Some animals in zoos live longer than wild ones do`,
      r`Zoos prevent the animals they keep from roaming freely`,
    ],
    correctAnswer: 1,
    explanation: r`The conclusion about harm follows from the premise about roaming only if restricted roaming counts as harm, and denying that link collapses the argument. That zoos prevent roaming is the stated premise, not an unstated one. The points about teaching the public and about lifespan are not needed by the argument, and the lifespan point would work against it.`,
  },
  [r`Why are ethics passages often written as dialogues with objections?`]: {
    question: r`An excerpt reads: "Admittedly, strict honesty sometimes wounds, and a blunt truth can hurt a grieving friend. But a friendship sustained by comfortable lies is one in which neither person is truly known." What is the function of the first sentence?`,
    options: [
      r`It states the main thesis, which the author then defends`,
      r`It concedes an objection, which the author then answers`,
      r`It reveals that the author has given up the position`,
      r`It offers an example, which the author then ignores`,
    ],
    correctAnswer: 1,
    explanation: r`"Admittedly" grants the opposing point that honesty can hurt, and "But" introduces the author's reply, the concession-then-rebuttal pattern that builds credibility. The thesis is in the second sentence, not the first. The author keeps the position rather than giving it up, and the reply addresses the concession directly instead of ignoring it.`,
  },
  [r`How should you approach an ethics passage you personally disagree with?`]: {
    question: r`A passage argues that wealthy people have a duty not to harm strangers but no duty to donate to them. A student finds this view offensive. A question asks: "Which statement would the author most likely endorse?" How should the student answer?`,
    options: [
      r`Pick the statement denying a duty to donate, as the author argued`,
      r`Pick the statement affirming a duty to donate, as morality demands`,
      r`Pick the statement affirming a duty to donate, as most readers would`,
      r`Pick the statement that sounds most moderate, as a safe compromise`,
    ],
    correctAnswer: 0,
    explanation: r`The question asks what the author would endorse, and the author denied any duty to donate, so the student's own moral view is set aside. Affirming a duty because morality demands it, or because most readers would, answers a different question from the one asked. Choosing a moderate-sounding compromise also replaces the author's reasoning with the student's preference.`,
  },
  [r`What is the core structure of an ethics passage?`]: {
    question: r`An excerpt reads: "We ought to keep a deathbed promise even when breaking it would help more people, because a promise creates a duty to the person who received it. Those who count only total benefit cannot explain why the promise matters at all." What role does the last sentence play?`,
    options: [
      r`It states the moral claim that the rest of the excerpt supports`,
      r`It supplies the principle on which the author's own claim rests`,
      r`It concedes that the author's claim fails when benefits are large`,
      r`It sets the author's view against a competing ethical framework`,
    ],
    correctAnswer: 3,
    explanation: r`The first sentence gives the moral claim (keep the promise) and its supporting principle (a promise creates a duty). The last sentence turns to "those who count only total benefit," a rival framework, and criticizes it. It is neither the claim nor the supporting principle, and it attacks the rival view instead of conceding anything to it.`,
  },
  [r`Contrast consequentialism and deontology.`]: {
    question: r`An engineer could lie to an inspector to keep a bridge open, and the lie would leave thousands of commuters better off with no one worse off. Which judgment about the lie reflects deontological reasoning?`,
    options: [
      r`The lie is right, because it leaves everyone involved better off`,
      r`The lie is right, because the benefit to commuters outweighs it`,
      r`The lie is wrong, even though it leaves everyone better off`,
      r`The lie is wrong, because in time commuters will be worse off`,
    ],
    correctAnswer: 2,
    explanation: r`Deontology judges an act by duties and rules regardless of outcome, so calling the lie wrong despite its good results is the deontological judgment. The two choices that approve the lie weigh outcomes, which is consequentialist. Calling it wrong because commuters will end up worse off also reasons from outcomes, only with a different forecast.`,
  },
}
