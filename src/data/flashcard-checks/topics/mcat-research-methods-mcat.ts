import type { CardCheck } from '@/lib/flashcard-check-core'

/**
 * Card-check questions for the cards of `mcat-research-methods-mcat`: one per card, keyed by the
 * card's exact front text. Each asks the student to use the card's idea in a
 * new situation. Gate: scripts/flashcard-checks/validate.ts.
 */
const r = String.raw

export const checks: Record<string, CardCheck> = {
  [r`Compare cohort, case-control, and cross-sectional studies.`]: {
    question: r`Researchers enroll 5,000 nurses who do not have diabetes, record which of them work night shifts, and then track all of them for ten years to see who develops diabetes. This design is a:`,
    options: [r`case-control study`, r`cross-sectional study`, r`prospective cohort study`, r`randomized trial`],
    correctAnswer: 2,
    explanation: r`Starting with people free of the outcome, classifying them by exposure and following them forward is a cohort study. A case-control study would start with people who already have diabetes and look back. A cross-sectional study measures everything at one time, and a randomized trial would require the researchers to assign shifts.`,
  },
  [r`What is selection bias?`]: {
    question: r`In a diet trial, 40% of the participants assigned to the diet drop out, and most of those who leave were not losing weight. The analysis includes only people who finished, and the diet looks highly effective. The main threat to this conclusion is:`,
    options: [r`selection bias, because those who stayed were not representative`, r`recall bias, because participants misreported their past weights`, r`the placebo effect, because participants expected to lose weight`, r`sampling error, because the remaining group was too small to use`],
    correctAnswer: 0,
    explanation: r`Selection bias covers who remains in a study as well as who enters it: the unsuccessful dieters left, so the completers overstate the diet's effect. Weight was measured, not remembered, so recall bias does not apply. Expectation and sample size do not explain a result produced by losing the people who did poorly.`,
  },
  [r`Why is peer review important?`]: {
    question: r`A news story says that a supplement study 'must be true, because it appeared in a peer-reviewed journal.' Which reply is most accurate?`,
    options: [r`reviewers repeated the experiments, which shows the result has been replicated`, r`reviewers audited the raw data, which proves that no errors or fraud occurred`, r`reviewers were chosen by the authors, which means the check was not independent`, r`reviewers judged the methods and reasoning, which does not prove the result is right`],
    correctAnswer: 3,
    explanation: r`Peer review is independent expert scrutiny of a paper's methods and conclusions before publication, and it improves quality without guaranteeing correctness. Reviewers do not rerun experiments or audit raw data, so review is neither replication nor proof against error. Reviewers are selected by the journal's editor and are independent of the authors.`,
  },
  [r`What is recall bias and which design is vulnerable?`]: {
    question: r`In a case-control study, mothers of infants born with a heart defect report more medication use during pregnancy than mothers of healthy infants. Critics suspect the first group simply searched their memories harder. Which change would most reduce this problem?`,
    options: [r`enrolling many more mothers in each of the two study groups`, r`taking exposure from pharmacy records made during the pregnancy`, r`interviewing the mothers of affected infants at greater length`, r`matching the two groups of mothers on age and family income`],
    correctAnswer: 1,
    explanation: r`The problem is recall bias: cases remember past exposures more thoroughly than controls. Records made at the time of exposure do not depend on memory, so they remove it. A larger sample repeats the same bias, longer interviews of cases would make it worse, and matching addresses confounding, not differential memory.`,
  },
  [r`Contrast experimental and observational study designs.`]: {
    question: r`Study 1 randomly assigns 200 students to sleep either 6 or 8 hours in a laboratory and then tests their memory. Study 2 surveys 200 students about their usual sleep and tests their memory. Which study can support the claim that more sleep causes better memory?`,
    options: [r`only Study 1, because the researchers manipulated sleep`, r`only Study 2, because sleep was measured in real life`, r`both studies, because each one tested 200 participants`, r`neither study, because memory was tested only one time`],
    correctAnswer: 0,
    explanation: r`Study 1 is an experiment: the researchers set the independent variable and assigned it at random, so differences in memory can be attributed to sleep. Study 2 is observational and shows only an association, since students who sleep more may differ in other ways. Sample size and the number of memory tests do not decide whether a design supports causation.`,
  },
  [r`What is the placebo effect?`]: {
    question: r`Two groups of patients with chronic pain take the same inert pill. One group is told it is a powerful pain reliever, and the other is told truthfully that it is inert. The first group reports much less pain. This difference demonstrates:`,
    options: [r`the Hawthorne effect, since only one group knew it was observed`, r`regression to the mean, since only one group started in bad pain`, r`the placebo effect, since only the expectation of benefit differed`, r`recall bias, since only one group had to remember its past pain`],
    correctAnswer: 2,
    explanation: r`The pill was identical, so the only difference was what patients expected, and improvement from expectation is the placebo effect. Both groups were observed and both reported pain in the same way, so the Hawthorne effect and recall bias cannot separate them. Nothing indicates that the groups began with different pain levels.`,
  },
  [r`What is the Hawthorne effect?`]: {
    question: r`Hand-washing compliance on a hospital ward is 90% when auditors with clipboards stand in the hallway. Hidden counters on the soap dispensers put it at 50% on other days. Which figure better reflects usual behavior, and why?`,
    options: [r`the visible auditors, because direct observation is always more accurate`, r`the hidden counters, because staff did not know they were being observed`, r`the visible auditors, because staff were then showing what they truly do`, r`the hidden counters, because a mechanical count rules out all confounding`],
    correctAnswer: 1,
    explanation: r`The Hawthorne effect is a change in behavior caused by knowing one is observed, so the 90% figure is inflated and the unobtrusive count is closer to routine practice. Direct observation is not automatically more accurate when it alters the behavior. A mechanical count does not remove confounding; its advantage here is only that staff were unaware of it.`,
  },
  [r`What is external vs. internal validity?`]: {
    question: r`A double-blind randomized trial in 300 healthy male students aged 18 to 22 finds that a caffeine dose speeds reaction time. A physician wants to apply the result to women in their eighties. The study has:`,
    options: [r`strong external validity but limited internal validity`, r`strong internal validity and strong external validity`, r`limited internal validity and limited external validity`, r`strong internal validity but limited external validity`],
    correctAnswer: 3,
    explanation: r`Randomization and double blinding make it likely that caffeine caused the effect, which is strong internal validity. A narrow sample of young healthy men limits how far the finding generalizes to other people, which is weak external validity. The other options either reverse the two terms or ignore one of these two facts.`,
  },
}
