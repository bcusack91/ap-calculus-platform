import type { CardCheck } from '@/lib/flashcard-check-core'

/**
 * Card-check questions for the cards of `mcat-science-passage-strategy-experimental-design-mcat`: one per card, keyed by the
 * card's exact front text. Each asks the student to use the card's idea in a
 * new situation. Gate: scripts/flashcard-checks/validate.ts.
 */
const r = String.raw

export const checks: Record<string, CardCheck> = {
  [r`What is the purpose of a control group?`]: {
    question: r`Sixty patients with colds are split into two groups of 30. One group takes zinc lozenges; the other takes identical-looking lozenges with no zinc. Symptoms last 5 days in the zinc group and 7 days in the other group. What does the no-zinc group contribute to the study?`,
    options: [
      r`A check that the zinc lozenges really contain zinc`,
      r`A baseline for how long colds last without zinc`,
      r`A way to make the patient sample more representative`,
      r`A way to make the measured durations more consistent`,
    ],
    correctAnswer: 1,
    explanation: r`The no-zinc group shows how long colds last when everything except zinc is the same, so the 2-day difference can be attributed to zinc. Checking the lozenge contents is an assay question that a comparison group cannot answer. Representativeness depends on how patients were recruited, and consistency of measurement depends on the measuring method.`,
  },
  [r`Why is randomization important?`]: {
    question: r`In a study of exercise and blood pressure, 40 volunteers choose for themselves whether to join the exercise group or the no-exercise group. The fitter volunteers mostly choose exercise. The researchers repeat the study, assigning each volunteer by coin flip. What does the coin flip accomplish?`,
    options: [
      r`It keeps volunteers from knowing which group they are in`,
      r`It makes the 40 volunteers represent the whole population`,
      r`It spreads fitness and unknown factors evenly across groups`,
      r`It guarantees the two groups end with identical outcomes`,
    ],
    correctAnswer: 2,
    explanation: r`Random assignment makes it likely that fitness and any unmeasured confounders are balanced between groups, so a difference in blood pressure can be credited to exercise. Keeping volunteers unaware of their group is blinding, a separate feature. Representing the population is about random sampling, not random assignment, and no method guarantees identical outcomes.`,
  },
  [r`What does double-blind mean and why does it matter?`]: {
    question: r`In a trial of a pain cream, patients do not know whether they received the cream or a look-alike. The physician who scores each patient's swelling does know. Which bias remains, and what removes it?`,
    options: [
      r`Observer bias; removed by a double-blind design`,
      r`Placebo effect; removed by a double-blind design`,
      r`Observer bias; removed by a larger sample size`,
      r`Selection bias; removed by a single-blind design`,
    ],
    correctAnswer: 0,
    explanation: r`The patients are already blinded, which handles the placebo effect, but a scorer who knows the groups can rate swelling in line with expectations. That is observer bias, and blinding the physician as well (double-blind) removes it. A larger sample does not correct a biased scorer, and selection bias concerns how patients entered the groups.`,
  },
  [r`Define independent, dependent, and controlled variables.`]: {
    question: r`An enzyme's activity is measured at pH 5, pH 7 and pH 9 by reading the absorbance of its product. Every tube is kept at 37 °C and contains 2 mM substrate. In this experiment, temperature is which kind of variable?`,
    options: [
      r`The independent variable, set to differ between tubes`,
      r`The dependent variable, measured in each of the tubes`,
      r`A confounding variable, changing along with the pH`,
      r`A controlled variable, held constant across the tubes`,
    ],
    correctAnswer: 3,
    explanation: r`Temperature is fixed at 37 °C in every tube so that only pH can explain differences in activity, which makes it a controlled variable. The independent variable is pH, the factor the researcher changes. The dependent variable is absorbance, and temperature is not a confounder because it does not vary with pH.`,
  },
  [r`Contrast positive and negative controls.`]: {
    question: r`A PCR test looks for a bacterial gene in patient samples. Alongside the samples, one tube holds DNA known to contain the gene and one tube holds only water. The known-DNA tube shows the expected band. The water tube also shows a band. What follows?`,
    options: [
      r`The positive control failed; patient negatives may be false`,
      r`The negative control worked; patient positives can be trusted`,
      r`The negative control failed; patient positives may be false`,
      r`The positive control failed; patient positives may be false`,
    ],
    correctAnswer: 2,
    explanation: r`Water is the negative control and should give no band, so a band there points to contamination and means positive results in patients cannot be trusted. The known-DNA tube is the positive control, and it worked: it showed the band it should. Calling the water tube a working control ignores that a negative control must produce no signal.`,
  },
  [r`What is a confounding variable?`]: {
    question: r`A school tests a new teaching method in its 8 a.m. algebra class and keeps the standard method in its 3 p.m. algebra class. Both classes use the same textbook and take the same exam. The 8 a.m. class scores 8 points higher. Which factor is a confounding variable?`,
    options: [
      r`Time of day, since it changed along with the method`,
      r`Exam score, since it was measured in both classes`,
      r`Teaching method, since the school chose to vary it`,
      r`The textbook, since it was the same in both classes`,
    ],
    correctAnswer: 0,
    explanation: r`Time of day differed between the classes exactly as the teaching method did, so alertness at 8 a.m. versus 3 p.m. is an alternative explanation for the 8-point gap. Exam score is the dependent variable and teaching method is the independent variable. The textbook was held constant, so it is a controlled variable and cannot explain a difference.`,
  },
  [r`What is the difference between reliability and validity?`]: {
    question: r`A person whose true mass is 70.0 kg steps on a bathroom scale three times. It reads 75.0 kg, 75.0 kg and 75.0 kg. How should the scale's measurements be described?`,
    options: [
      r`Valid but not reliable`,
      r`Reliable but not valid`,
      r`Both reliable and valid`,
      r`Neither reliable nor valid`,
    ],
    correctAnswer: 1,
    explanation: r`The readings repeat exactly, so the scale is reliable, but they are 5 kg from the true mass, so it does not measure what it claims to and is not valid. "Valid but not reliable" reverses the two terms. The scale cannot be both, because it is consistently wrong, and it is not neither, because it is perfectly consistent.`,
  },
  [r`Why can observational studies not establish causation?`]: {
    question: r`Researchers survey 5,000 adults and find that those who take a daily walk report better sleep than those who do not. Nobody was assigned to walk or not to walk. Which statement best describes what the study permits?`,
    options: [
      r`Walking improves sleep, since the walkers slept better on average`,
      r`Walking is unrelated to sleep, since no one was assigned to walk`,
      r`Walking improves sleep, but only in adults who chose to walk`,
      r`Walking is linked to sleep, but good sleep may lead to walking`,
    ],
    correctAnswer: 3,
    explanation: r`With no assignment or randomization, the study shows only an association: well-rested people may be the ones with energy to walk (reverse causation), or a third factor such as good health may drive both. Both claims that walking improves sleep draw a causal conclusion the design cannot support. Lack of assignment does not erase the association, so "unrelated" is also wrong.`,
  },
}
