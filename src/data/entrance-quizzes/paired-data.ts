/**
 * Entrance Quiz — Paired Data (AP Statistics)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Paired vs Independent Samples
  {
    id: 'pd-ent-1a',
    question: 'A study measures students\' test scores before and after a tutoring program. What type of data is this?',
    options: [
      'Independent samples — different students in each group',
      'Paired data — each student is measured twice',
      'Observational — no treatment is applied',
      'Categorical — scores are categories'
    ],
    correctIndex: 1,
    explanation: 'Before-and-after measurements on the same subjects create paired data because each observation in one group has a natural match in the other.',
    partNumber: 1,
    partTitle: 'Paired vs Independent Samples'
  },
  {
    id: 'pd-ent-1b',
    question: 'Researchers compare the mean SAT scores of students from School A with students from School B. This design uses:',
    options: [
      'Paired data — one score from each school per student',
      'Independent samples — no pairing between the two groups',
      'Matched pairs — students are paired across schools',
      'A one-sample t-test on the differences'
    ],
    correctIndex: 1,
    explanation: 'When there is no natural pairing between observations in the two groups, the data are independent samples, not paired.',
    partNumber: 1,
    partTitle: 'Paired vs Independent Samples'
  },
  // Part 2: Paired t-Test
  {
    id: 'pd-ent-2a',
    question: 'In a paired t-test, what is the first step after collecting paired observations?',
    options: [
      'Pool the two sample standard deviations',
      'Compute the difference d = $x_{1}$ − $x_{2}$ for each pair, then perform a one-sample t-test on the d values',
      'Compare the sample means directly using a two-sample t-test',
      'Check whether σ is known for both populations'
    ],
    correctIndex: 1,
    explanation: 'A paired t-test reduces to a one-sample t-test on the differences: compute d for each pair, then test whether the mean difference μ_d equals the hypothesized value.',
    partNumber: 2,
    partTitle: 'Paired t-Test'
  },
  {
    id: 'pd-ent-2b',
    question: 'The test statistic for a paired t-test is given by:',
    options: [
      't = (x̄$ {}_{1}$ − x̄$ {}_{2}$) / $\\sqrt{s_{1}^{2}/n_{1} + s_{2}^{2}/n_{2}}$',
      't = d̄ / $(s_{d} / \\sqrt{n})$, where n = number of pairs',
      't = d̄ / σ_d',
      't = (x̄$ {}_{1}$ − x̄$ {}_{2}$) / s_pooled'
    ],
    correctIndex: 1,
    explanation: 'The paired t-statistic is t = d̄ / $(s_{d} / \\sqrt{n})$, where d̄ is the mean of the differences, s_d is the standard deviation of the differences, and n is the number of pairs.',
    partNumber: 2,
    partTitle: 'Paired t-Test'
  },
  // Part 3: Calculating Differences
  {
    id: 'pd-ent-3a',
    question: 'In a paired study, you compute d = Before − After for each subject. If you reverse the order to d = After − Before, what changes?',
    options: [
      'The p-value changes for a two-sided test',
      'The sign of d̄ reverses, but the p-value for a two-sided test stays the same',
      'The test statistic is unchanged',
      'The degrees of freedom change'
    ],
    correctIndex: 1,
    explanation: 'The order of subtraction affects the sign of d̄ (and therefore the sign of t), but in a two-sided test the p-value remains the same because it considers both tails.',
    partNumber: 3,
    partTitle: 'Calculating Differences'
  },
  {
    id: 'pd-ent-3b',
    question: 'For 8 pairs, the differences are: 3, 5, −1, 4, 2, 6, 1, 4. Since most differences are positive, what does this suggest?',
    options: [
      'The second measurement tends to be larger',
      'There is no difference between the two measurements',
      'The first measurement tends to be larger (mean difference d̄ > 0)',
      'The sample size is too small to draw conclusions'
    ],
    correctIndex: 2,
    explanation: 'If differences (first − second) are mostly positive, then d̄ > 0, suggesting the first measurement tends to be larger than the second.',
    partNumber: 3,
    partTitle: 'Calculating Differences'
  },
  // Part 4: Conditions for Pairing
  {
    id: 'pd-ent-4a',
    question: 'Which conditions must be satisfied before performing a paired t-test?',
    options: [
      'Equal sample sizes, equal variances, normal populations',
      'Pairs selected randomly, differences are independent, differences approximately normal or n ≥ 30',
      'Random samples, σ known, large samples only',
      'Independent groups, 10% condition on each group separately'
    ],
    correctIndex: 1,
    explanation: 'The conditions are: (1) pairs selected randomly, (2) differences are independent of each other, and (3) the distribution of differences is approximately normal or the number of pairs n ≥ 30.',
    partNumber: 4,
    partTitle: 'Conditions for Pairing'
  },
  {
    id: 'pd-ent-4b',
    question: 'A researcher has paired data but mistakenly uses a two-sample t-test. What is the consequence?',
    options: [
      'The test becomes more powerful',
      'The p-value decreases, making rejection more likely',
      'The test loses the benefit of pairing and typically has less power',
      'The results are identical either way'
    ],
    correctIndex: 2,
    explanation: 'Treating paired data as two independent samples ignores the pairing, which typically increases variability in the analysis and reduces the power to detect a real difference.',
    partNumber: 4,
    partTitle: 'Conditions for Pairing'
  },
  // Part 5: Applications
  {
    id: 'pd-ent-5a',
    question: 'Which scenario is a classic application of a paired t-procedure?',
    options: [
      'Comparing average income between two different cities',
      'A pre-test/post-test study measuring the same students before and after instruction',
      'Comparing proportions of voters in two states',
      'Testing whether a single population proportion equals 0.5'
    ],
    correctIndex: 1,
    explanation: 'Before-and-after studies on the same subjects (pre-test/post-test) are classic applications of paired t-procedures because each subject serves as their own control.',
    partNumber: 5,
    partTitle: 'Applications'
  },
  {
    id: 'pd-ent-5b',
    question: 'In a matched-pairs experiment, how are treatments assigned?',
    options: [
      'Each subject receives both treatments in the same order',
      'Subjects are paired by similarity, then treatments are randomly assigned within each pair',
      'All subjects in one group get Treatment A, all in the other get Treatment B',
      'Treatments are assigned alphabetically by subject name'
    ],
    correctIndex: 1,
    explanation: 'In a matched-pairs design, subjects are paired based on similar characteristics, and then within each pair, one is randomly assigned to each treatment.',
    partNumber: 5,
    partTitle: 'Applications'
  },
  // Part 6: Problem-Solving Workshop
  {
    id: 'pd-ent-6a',
    question: '15 patients have blood pressure measured before and after a medication. Which procedure should be used?',
    options: [
      'Two-sample t-test comparing the two groups',
      'One-sample z-test on the after measurements',
      'Paired t-test: compute differences, then one-sample t-test on the differences',
      'Chi-square test for independence'
    ],
    correctIndex: 2,
    explanation: 'Since each patient is measured twice (before and after), the data are paired. Compute differences for each patient, then perform a one-sample t-test on those differences.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },
  {
    id: 'pd-ent-6b',
    question: 'Why does pairing often result in a more powerful test than using independent samples?',
    options: [
      'Pairing increases the sample size',
      'Pairing reduces variability by eliminating subject-to-subject differences from the analysis',
      'Pairing allows the use of a z-distribution instead of t',
      'Pairing removes the need to check conditions'
    ],
    correctIndex: 1,
    explanation: 'Pairing controls for individual variation — each subject acts as their own control, so subject-to-subject differences are removed, reducing the variability in the differences.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },
  // Part 7: AP Review & Applications
  {
    id: 'pd-ent-7a',
    question: 'On the AP Statistics exam, what must you clearly state when choosing a test procedure?',
    options: [
      'Only the formula you plan to use',
      'Whether the data are paired or independent, since the choice determines the procedure',
      'The software package you would use',
      'The exact p-value to three decimal places'
    ],
    correctIndex: 1,
    explanation: 'On the AP exam, you must clearly identify whether data are paired or independent because this determines whether you use a paired t-test or a two-sample t-test.',
    partNumber: 7,
    partTitle: 'AP Review & Applications'
  },
  {
    id: 'pd-ent-7b',
    question: 'After a paired t-test finds a significant mean difference, which interpretation is best?',
    options: [
      '"The means of the two groups are different."',
      '"The mean change in blood pressure after medication is significantly different from zero."',
      '"Every patient experienced a decrease in blood pressure."',
      '"The medication definitely works for all patients."'
    ],
    correctIndex: 1,
    explanation: 'Interpret paired results by referencing the mean difference in context: "The mean change/difference in [variable] is [significantly different from zero / significantly positive/negative]."',
    partNumber: 7,
    partTitle: 'AP Review & Applications'
  }
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Paired vs Independent Samples' },
    { partNumber: 2, partTitle: 'Paired t-Test' },
    { partNumber: 3, partTitle: 'Calculating Differences' },
    { partNumber: 4, partTitle: 'Conditions for Pairing' },
    { partNumber: 5, partTitle: 'Applications' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review & Applications' }
  ]
}
