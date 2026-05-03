import type { SAQItem } from '@/components/FullLengthPracticeExam'

/**
 * AP Statistics — 6 FRQs matching the official Section II structure:
 *   Q1–Q5: Standard short-answer FRQs (~12 minutes each)
 *   Q6   : Investigative Task (~25 minutes, multi-part)
 *
 * 90 minutes total for Section II. Calculator and formulas/tables provided.
 */

export const FRQS: SAQItem[] = [
  /* ---- Q1: Exploratory data analysis (univariate) ---- */
  {
    type: 'saq',
    topic: 'frq-exploratory-data',
    stimulus: `**FRQ #1 — One-Variable Data Analysis**

A teacher records the test scores (out of 100) for 10 students:
$$72, 85, 90, 65, 78, 92, 88, 95, 70, 82$$`,
    parts: [
      {
        prompt: '(a) Calculate the mean and standard deviation of the test scores.',
        rubric: 'Mean = (72+85+90+65+78+92+88+95+70+82)/10 = 817/10 = 81.7. Standard deviation: $s \\approx 10.06$ (using sample SD; calculator: 1-Var Stats). Award full credit for mean ≈ 81.7 and SD ≈ 10.0–10.1.',
      },
      {
        prompt: '(b) Construct a five-number summary and identify any outliers using the 1.5×IQR rule.',
        rubric: 'Sorted: 65,70,72,78,82,85,88,90,92,95. Min=65, Q1=72, Median=(82+85)/2=83.5, Q3=90, Max=95. IQR=18. Lower fence = 72−27 = 45; Upper fence = 90+27 = 117. NO outliers (all values within 45–117).',
      },
      {
        prompt: '(c) Describe the shape of the distribution.',
        rubric: 'Approximately symmetric (mean ≈ median; 81.7 vs 83.5, very close). Slightly left-skewed possible since min (65) is farther from Q1 than max (95) from Q3, but acceptable to call "roughly symmetric."',
      },
    ],
  },

  /* ---- Q2: Two-variable / regression ---- */
  {
    type: 'saq',
    topic: 'frq-bivariate-regression',
    stimulus: `**FRQ #2 — Linear Regression**

A study examined the relationship between hours studied (x) and exam score (y) for 30 students. Computer output gave:

$$\\hat{y} = 50 + 4.5x, \\quad r = 0.78, \\quad s_e = 6.2$$`,
    parts: [
      {
        prompt: '(a) Interpret the slope of the regression line in context.',
        rubric: 'For each additional hour studied, the predicted exam score increases by 4.5 points (on average).',
      },
      {
        prompt: '(b) Interpret the value of $r^2$ in context.',
        rubric: '$r^2 = (0.78)^2 = 0.608$. About 60.8% of the variation in exam scores is explained by the linear regression on hours studied.',
      },
      {
        prompt: '(c) Predict the exam score for a student who studies 6 hours.',
        rubric: '$\\hat{y} = 50 + 4.5(6) = 50 + 27 = 77$.',
      },
      {
        prompt: '(d) Should the regression be used to predict the score of a student who studies 25 hours? Explain.',
        rubric: 'NO — extrapolation. The regression was based on data within a limited range; predictions outside that range (likely well above the observed max) are unreliable. Also, scores cap at 100.',
      },
    ],
  },

  /* ---- Q3: Probability ---- */
  {
    type: 'saq',
    topic: 'frq-probability',
    stimulus: `**FRQ #3 — Probability**

A bag contains 4 red marbles and 6 blue marbles. Two marbles are drawn WITHOUT replacement.`,
    parts: [
      {
        prompt: '(a) Find the probability that both marbles are red.',
        rubric: '$P(\\text{both red}) = \\frac{4}{10} \\cdot \\frac{3}{9} = \\frac{12}{90} = \\frac{2}{15} \\approx 0.133$.',
      },
      {
        prompt: '(b) Find the probability that exactly one marble is red.',
        rubric: 'P(R then B) + P(B then R) = $\\frac{4}{10} \\cdot \\frac{6}{9} + \\frac{6}{10} \\cdot \\frac{4}{9} = \\frac{24}{90} + \\frac{24}{90} = \\frac{48}{90} = \\frac{8}{15} \\approx 0.533$.',
      },
      {
        prompt: '(c) Given that the first marble drawn was blue, find the probability that the second marble is red.',
        rubric: 'After 1 blue removed: 4 red, 5 blue, 9 total. $P(\\text{2nd red} | \\text{1st blue}) = 4/9 \\approx 0.444$.',
      },
    ],
  },

  /* ---- Q4: Inference for proportion ---- */
  {
    type: 'saq',
    topic: 'frq-inference-proportion',
    stimulus: `**FRQ #4 — Significance Test for a Proportion**

A campaign manager believes more than 50% of voters in a city support Candidate X. In a random sample of 200 voters, 115 support Candidate X.

Test, at the $\\alpha = 0.05$ level, whether there is convincing evidence that more than half of all voters in the city support Candidate X.`,
    parts: [
      {
        prompt: '(a) State the null and alternative hypotheses.',
        rubric: '$H_0: p = 0.50$ vs. $H_a: p > 0.50$, where p = true proportion of voters in the city who support Candidate X.',
      },
      {
        prompt: '(b) State and verify the conditions for the test.',
        rubric: '(1) Random: stated random sample. (2) Independence (10% condition): n = 200, presumably city has > 2000 voters, OK. (3) Large counts: $np_0 = 200(0.5) = 100 \\geq 10$ and $n(1-p_0) = 100 \\geq 10$. ✓ All conditions met.',
      },
      {
        prompt: '(c) Calculate the test statistic and p-value.',
        rubric: '$\\hat{p} = 115/200 = 0.575$. SE = $\\sqrt{0.5(0.5)/200} = 0.0354$. $z = (0.575 - 0.50)/0.0354 = 2.12$. p-value = P(Z > 2.12) ≈ 0.017.',
      },
      {
        prompt: '(d) State your conclusion in context.',
        rubric: 'Since p-value (0.017) < α (0.05), we REJECT $H_0$. There is convincing evidence that more than 50% of voters in the city support Candidate X.',
      },
    ],
  },

  /* ---- Q5: Two-sample inference ---- */
  {
    type: 'saq',
    topic: 'frq-two-sample-means',
    stimulus: `**FRQ #5 — Two-Sample t-Interval for Means**

A nutrition researcher compares mean caloric intake of two groups. Independent random samples give:

| Group | n | $\\bar{x}$ (cal) | s |
|-------|---|------------------|---|
| Diet A | 25 | 1850 | 220 |
| Diet B | 30 | 2050 | 250 |`,
    parts: [
      {
        prompt: '(a) Construct a 95% confidence interval for $\\mu_B - \\mu_A$ (use df ≈ 52, t* ≈ 2.007).',
        rubric: 'Difference $\\bar{x}_B - \\bar{x}_A = 200$. SE = $\\sqrt{220^2/25 + 250^2/30} = \\sqrt{1936 + 2083.3} = \\sqrt{4019.3} \\approx 63.4$. ME = 2.007(63.4) ≈ 127.2. Interval: $200 \\pm 127.2$ = (72.8, 327.2) calories.',
      },
      {
        prompt: '(b) Interpret the interval in context.',
        rubric: 'We are 95% confident that the true difference in mean caloric intake (Diet B − Diet A) is between approximately 72.8 and 327.2 calories. (Diet B has higher mean intake.)',
      },
      {
        prompt: '(c) Based on the interval, is there convincing evidence (at the 5% level) that the mean intakes differ?',
        rubric: 'YES. The 95% CI for $\\mu_B - \\mu_A$ does not contain 0 (entirely positive: 72.8 to 327.2). This is equivalent to rejecting $H_0: \\mu_B = \\mu_A$ at α = 0.05 ⇒ convincing evidence of a difference.',
      },
    ],
  },

  /* ---- Q6: INVESTIGATIVE TASK ---- */
  {
    type: 'saq',
    topic: 'frq-investigative-task',
    stimulus: `**FRQ #6 — INVESTIGATIVE TASK (~25 min)**

A school district is investigating whether a new tutoring program improves student performance. Data were collected from a random sample of 80 students who participated, and 80 students from the same population who did not. Researchers recorded their scores on a standardized end-of-year math exam (out of 100):

| Group | n | Mean Score | Std Dev | Pass Rate (≥70) |
|-------|---|------------|---------|------------------|
| Tutored | 80 | 76.5 | 12.0 | 65 of 80 (81.3%) |
| Not tutored | 80 | 70.2 | 14.0 | 50 of 80 (62.5%) |`,
    parts: [
      {
        prompt: '(a) Conduct a two-sample t-test to determine whether the mean score for tutored students is significantly higher than for non-tutored students. Use $\\alpha = 0.05$. (Use df ≈ 154, $t^* \\approx 1.65$ for one-sided.) Show all hypotheses, conditions, test statistic, p-value, and conclusion.',
        rubric: 'H₀: $\\mu_T = \\mu_{NT}$; Hₐ: $\\mu_T > \\mu_{NT}$. Conditions: random samples (stated), independent groups, n=80 each large ⇒ CLT applies. SE = $\\sqrt{12^2/80 + 14^2/80} = \\sqrt{1.8 + 2.45} = \\sqrt{4.25} \\approx 2.06$. $t = (76.5 - 70.2)/2.06 = 6.3/2.06 \\approx 3.06$. p-value (one-sided, df ≈ 154) ≈ 0.0013. Since p < 0.05, REJECT H₀. Convincing evidence the mean score is higher for tutored students.',
      },
      {
        prompt: '(b) Conduct a two-proportion z-test to determine whether the pass rate is significantly higher among tutored students. Use $\\alpha = 0.05$.',
        rubric: '$\\hat{p}_T = 0.8125$, $\\hat{p}_{NT} = 0.625$. Pooled $\\hat{p} = 115/160 = 0.71875$. SE = $\\sqrt{0.71875 \\cdot 0.28125 (1/80 + 1/80)} = \\sqrt{0.20215 \\cdot 0.025} = \\sqrt{0.00505} \\approx 0.0711$. $z = (0.8125 - 0.625)/0.0711 \\approx 2.64$. p-value (one-sided) ≈ 0.0042. REJECT H₀. Convincing evidence pass rate is higher for tutored students.',
      },
      {
        prompt: '(c) Both tests indicate significantly higher performance for tutored students. Can the researchers conclude that the tutoring program CAUSES improved scores? Explain.',
        rubric: 'NO. This is an OBSERVATIONAL study, not a randomized experiment. Students self-selected (or were selected) into tutoring. Possible CONFOUNDING variables: motivation, prior achievement, parental involvement, study habits. Without random assignment, cannot rule out lurking variables ⇒ cannot establish causation.',
      },
      {
        prompt: '(d) Propose a study design that WOULD allow a causal conclusion about the tutoring program. Describe key features.',
        rubric: 'Randomized, controlled experiment: (1) Take a sample of eligible students; (2) RANDOMLY ASSIGN each student to either Tutoring (treatment) or No Tutoring (control); (3) Use blocking by prior achievement (or paired design) to reduce variability; (4) Administer same standardized test at the end; (5) Compare group means/pass rates. Random assignment ensures groups are similar on confounders ⇒ any difference attributable to tutoring ⇒ causal inference valid.',
      },
    ],
  },
]
