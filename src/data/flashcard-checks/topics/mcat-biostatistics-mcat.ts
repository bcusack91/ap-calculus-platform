import type { CardCheck } from '@/lib/flashcard-check-core'

/**
 * Card-check questions for the cards of `mcat-biostatistics-mcat`: one per card, keyed by the
 * card's exact front text. Each asks the student to use the card's idea in a
 * new situation. Gate: scripts/flashcard-checks/validate.ts.
 */
const r = String.raw

export const checks: Record<string, CardCheck> = {
  [r`What does a confidence interval tell you?`]: {
    question: r`Study 1 reports that a drug lowers systolic pressure by 6 mmHg more than placebo (95% CI 2 to 10). Study 2 reports that a second drug lowers it by 9 mmHg more than placebo (95% CI −1 to 19). Which result is statistically significant at the 0.05 level?`,
    options: [r`only Study 2, because its difference is larger`, r`only Study 1, because its interval excludes 0`, r`both studies, because both differences exceed 0`, r`neither study, because both intervals are wide`],
    correctAnswer: 1,
    explanation: r`A 95% confidence interval for a difference that excludes 0 is significant at 0.05; Study 1's interval of 2 to 10 does, and Study 2's interval of −1 to 19 includes 0. A larger point estimate does not make a result significant, and a point estimate above 0 is not enough when the interval reaches 0. Width alone does not decide significance.`,
  },
  [r`What does a correlation coefficient $r$ indicate?`]: {
    question: r`Task performance rises steadily as arousal goes from low to moderate, then falls just as steadily as arousal goes from moderate to high, giving a symmetric inverted U. The correlation coefficient computed across the full range is r ≈ 0. The best conclusion is that:`,
    options: [r`the two variables are unrelated, since r near 0 rules that out`, r`arousal has no causal effect on performance, since r is near 0`, r`the data must contain errors, since r ought to be close to +1`, r`the two variables are related, but not linearly, so r misses it`],
    correctAnswer: 3,
    explanation: r`The coefficient r measures only the strength and direction of a linear relationship, so a strong curved relationship such as an inverted U can give r near 0. An r near 0 therefore does not show the variables are unrelated or that there is no causal effect. Nothing suggests an error: the rising and falling halves simply cancel.`,
  },
  [r`What are positive and negative predictive value?`]: {
    question: r`A test is given to 600 people, of whom 100 have the disease. Among the 100 with the disease, 80 test positive and 20 test negative. Among the 500 without it, 120 test positive and 380 test negative. What is the probability that a person with a negative result is truly disease-free?`,
    options: [r`95%`, r`80%`, r`76%`, r`40%`],
    correctAnswer: 0,
    explanation: r`This is the negative predictive value: true negatives over all negatives = 380/(380 + 20) = 380/400 = 95%. The value 80% is the sensitivity (80/100), 76% is the specificity (380/500), and 40% is the positive predictive value (80/200).`,
  },
  [r`What does a p-value mean?`]: {
    question: r`A trial comparing two diets finds a 1.5 kg difference in mean weight loss, with p = 0.20. What does this p-value say?`,
    options: [r`there is a 20% chance that the diets do not differ, given the gap that was observed`, r`there is an 80% chance that the diets really differ, given the gap that was observed`, r`if the diets do not differ, a gap at least this large would occur in 20% of such trials`, r`if the diets really differ, a gap at least this large would occur in 20% of such trials`],
    correctAnswer: 2,
    explanation: r`A p-value is the probability of data at least this extreme calculated on the assumption that the null hypothesis is true. It is not the probability that the null hypothesis is true, and one minus p is not the probability that the effect is real. It is also not computed under the assumption that the diets differ.`,
  },
  [r`What is a Type I vs. Type II error?`]: {
    question: r`A research group keeps its sample size the same but relaxes its significance threshold from α = 0.05 to α = 0.10. How does this change the chances of error?`,
    options: [r`Type I errors become less likely and Type II errors more likely`, r`Type I and Type II errors both become more likely than before`, r`Type I and Type II errors both become less likely than before`, r`Type I errors become more likely and Type II errors less likely`],
    correctAnswer: 3,
    explanation: r`α is the Type I error rate, so raising it to 0.10 means a true null is rejected more often. Because the bar for rejection is lower, real effects are also missed less often, so Type II errors fall. The reversed option describes making α stricter, and with sample size fixed the two error rates move in opposite directions, not together.`,
  },
  [r`Contrast sensitivity and specificity.`]: {
    question: r`A rapid test is evaluated in 200 people. Of the 50 who have the infection, 45 test positive. Of the 150 who do not, 120 test negative. What are the test's sensitivity and specificity?`,
    options: [r`sensitivity 80%, specificity 90%`, r`sensitivity 90%, specificity 80%`, r`sensitivity 60%, specificity 96%`, r`sensitivity 96%, specificity 60%`],
    correctAnswer: 1,
    explanation: r`Sensitivity is the fraction of infected people who test positive, 45/50 = 90%; specificity is the fraction of uninfected people who test negative, 120/150 = 80%. Swapping them reverses the definitions. The values 60% and 96% are the predictive values: 45 of the 75 positives are true (60%) and 120 of the 125 negatives are true (96%).`,
  },
  [r`Compare mean, median, and mode.`]: {
    question: r`Five patients made 2, 2, 3, 5 and 8 emergency visits last year. What are the mean, median and mode of these counts, in that order?`,
    options: [r`3, 4, 2`, r`4, 2, 3`, r`4, 3, 2`, r`5, 3, 2`],
    correctAnswer: 2,
    explanation: r`The sum is 20, so the mean is 20/5 = 4; the middle of the five ordered values is 3; the most frequent value is 2. The option 3, 4, 2 swaps mean and median, and 4, 2, 3 swaps median and mode. The value 5 is the midpoint of the range (2 to 8), not the mean.`,
  },
  [r`What does standard deviation measure?`]: {
    question: r`Exam scores are approximately normal with a mean of 70 and a standard deviation of 5. About what percentage of scores fall between 65 and 80?`,
    options: [r`81.5%`, r`68%`, r`95%`, r`47.5%`],
    correctAnswer: 0,
    explanation: r`The range runs from 1 SD below the mean to 2 SD above it. About 34% of scores lie between 65 and 70 (half of 68%) and about 47.5% lie between 70 and 80 (half of 95%), for a total near 81.5%. The value 68% is within 1 SD on both sides, 95% is within 2 SD on both sides, and 47.5% counts only the upper part.`,
  },
}
