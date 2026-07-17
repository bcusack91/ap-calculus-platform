/**
 * Entrance Quiz — Hypothesis Testing Framework (AP Statistics)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Null & Alternative Hypotheses
  {
    id: 'htf-ent-1a',
    question: 'What does the null hypothesis $H_{0}$ represent?',
    options: [
      'The claim the researcher wants to prove',
      'The "no effect" or "no difference" assumption (status quo)',
      'The alternative explanation for the data',
      'The most likely value of the parameter'
    ],
    correctIndex: 1,
    explanation: '$H_{0}$ states "no effect" or "no difference" — it represents the status quo. $H_{a}$ (the alternative hypothesis) states the claim we are testing.',
    partNumber: 1,
    partTitle: 'Null & Alternative Hypotheses'
  },
  {
    id: 'htf-ent-1b',
    question: 'Hypotheses in significance tests are always written in terms of:',
    options: [
      'Sample statistics (x̄, p̂)',
      'Population parameters (μ, p)',
      'Test statistics (z, t)',
      'P-values'
    ],
    correctIndex: 1,
    explanation: 'Hypotheses are always about PARAMETERS (μ, p), never about statistics (x̄, p̂). Statistics are computed from the sample; parameters are the unknown population values we are making claims about.',
    partNumber: 1,
    partTitle: 'Null & Alternative Hypotheses'
  },

  // Part 2: Test Statistics
  {
    id: 'htf-ent-2a',
    question: 'A test statistic measures:',
    options: [
      'The probability of the null hypothesis being true',
      'The distance of the observed statistic from the hypothesized parameter value, in standard error units',
      'The confidence level of the procedure',
      'The sample size needed for significance'
    ],
    correctIndex: 1,
    explanation: 'Test statistic = $(statistic - parameter_{0})$ / standard error. It measures how far the observed data is from what $H_{0}$ predicts, expressed in standard error units.',
    partNumber: 2,
    partTitle: 'Test Statistics'
  },
  {
    id: 'htf-ent-2b',
    question: 'The z-test statistic for a one-proportion test is:',
    options: [
      'z = (x̄ − $\\mu_{0}$) / $(s/\\sqrt{n})$',
      'z = (p̂ − $p_{0}$) / √[$p_{0}(1-p_{0})/n$]',
      'z = (p̂$ {}_{1}$ − p̂$ {}_{2}$) / SE',
      'z = n · $p_{0}$'
    ],
    correctIndex: 1,
    explanation: 'For a one-proportion z-test: z = (p̂ − $p_{0}$) / √[$p_{0}(1-p_{0})/n$]. The standard error uses $p_{0}$ (not p̂) because we compute it under the assumption that $H_{0}$ is true.',
    partNumber: 2,
    partTitle: 'Test Statistics'
  },

  // Part 3: P-Values
  {
    id: 'htf-ent-3a',
    question: 'A p-value is defined as:',
    options: [
      'The probability that $H_{0}$ is true',
      'The probability of getting a result as extreme or more extreme than observed, assuming $H_{0}$ is true',
      'The probability that $H_{a}$ is true',
      'The significance level chosen by the researcher'
    ],
    correctIndex: 1,
    explanation: 'The p-value is the probability of obtaining a test statistic as extreme or more extreme than the one observed, assuming $H_{0}$ is true. It is NOT the probability that $H_{0}$ is true.',
    partNumber: 3,
    partTitle: 'P-Values'
  },
  {
    id: 'htf-ent-3b',
    question: 'If the p-value is 0.02 and α = 0.05, what is the correct decision?',
    options: [
      'Fail to reject $H_{0}$ because 0.02 is small',
      'Reject $H_{0}$ because p < α',
      'Accept $H_{0}$ because p > 0',
      'Reject $H_{a}$ because p < α'
    ],
    correctIndex: 1,
    explanation: 'Since p = 0.02 < α = 0.05, we reject $H_{0}$. A small p-value provides evidence against $H_{0}$. The decision rule is: if p < α, reject $H_{0}$.',
    partNumber: 3,
    partTitle: 'P-Values'
  },

  // Part 4: Type I & Type II Errors
  {
    id: 'htf-ent-4a',
    question: 'A Type I error occurs when:',
    options: [
      'We fail to reject $H_{0}$ when $H_{a}$ is true',
      'We reject $H_{0}$ when $H_{0}$ is actually true (false positive)',
      'We correctly reject a false $H_{0}$',
      'The p-value equals α exactly'
    ],
    correctIndex: 1,
    explanation: 'A Type I error is rejecting $H_{0}$ when it is actually true — a false positive. The probability of a Type I error equals α, the significance level.',
    partNumber: 4,
    partTitle: 'Type I & Type II Errors'
  },
  {
    id: 'htf-ent-4b',
    question: 'A Type II error occurs when:',
    options: [
      'We reject $H_{0}$ when $H_{0}$ is true',
      'We fail to reject $H_{0}$ when $H_{a}$ is actually true (false negative)',
      'We correctly fail to reject a true $H_{0}$',
      'The p-value is exactly 0.05'
    ],
    correctIndex: 1,
    explanation: 'A Type II error is failing to reject $H_{0}$ when $H_{a}$ is actually true — a false negative. The probability of a Type II error is denoted β.',
    partNumber: 4,
    partTitle: 'Type I & Type II Errors'
  },

  // Part 5: One-Sample t-Test
  {
    id: 'htf-ent-5a',
    question: 'The test statistic for a one-sample t-test is:',
    options: [
      't = (p̂ − $p_{0}$) / √[$p_{0}(1-p_{0})/n$]',
      't = (x̄ − $\\mu_{0}$) / $(s/\\sqrt{n})$ with df = n − 1',
      't = (x̄$ {}_{1}$ − x̄$ {}_{2}$) / SE',
      't = s / $\\sqrt{n}$'
    ],
    correctIndex: 1,
    explanation: 'The one-sample t-test statistic is t = (x̄ − $\\mu_{0}$) / $(s/\\sqrt{n})$ with df = n − 1, where $\\mu_{0}$ is the hypothesized population mean.',
    partNumber: 5,
    partTitle: 'One-Sample t-Test'
  },
  {
    id: 'htf-ent-5b',
    question: 'Which conditions must be met for a one-sample t-test?',
    options: [
      'Known σ and normal population only',
      'Random sample, independent observations, and approximately normal population or large n',
      'Equal variances and paired data',
      'np ≥ 10 and n(1−p) ≥ 10'
    ],
    correctIndex: 1,
    explanation: 'The conditions for a one-sample t-test are: (1) random sample, (2) independent observations (10% condition), and (3) approximately normal population or large sample size.',
    partNumber: 5,
    partTitle: 'One-Sample t-Test'
  },

  // Part 6: Problem-Solving Workshop
  {
    id: 'htf-ent-6a',
    question: 'A researcher tests a hypothesis and gets p = 0.03. Which statement is correct?',
    options: [
      'Reject $H_{0}$ at α = 0.05 and at α = 0.01',
      'Reject $H_{0}$ at α = 0.05 but fail to reject at α = 0.01',
      'Fail to reject $H_{0}$ at both α = 0.05 and α = 0.01',
      'The test is invalid because p is between 0.01 and 0.05'
    ],
    correctIndex: 1,
    explanation: 'With p = 0.03: at α = 0.05, p < α so reject $H_{0}$; at α = 0.01, p > α so fail to reject $H_{0}$. The decision depends on the chosen significance level.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },
  {
    id: 'htf-ent-6b',
    question: '"Statistically significant" means:',
    options: [
      'The result is practically important and meaningful',
      'The p-value is less than α, so the result is unlikely under $H_{0}$',
      'The sample size was very large',
      'The effect size is large enough to matter'
    ],
    correctIndex: 1,
    explanation: '"Statistically significant" means the p-value is less than α — the result is unlikely to occur by chance under $H_{0}$. It does NOT necessarily mean the result is practically important.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },

  // Part 7: Review & Applications
  {
    id: 'htf-ent-7a',
    question: 'What is the correct order of steps for a significance test on the AP exam?',
    options: [
      'Calculate p-value → State hypotheses → Conclude',
      'State hypotheses → Check conditions → Calculate test statistic and p-value → State conclusion in context',
      'Check conditions → State conclusion → Calculate test statistic',
      'State conclusion → Show calculations → Write hypotheses'
    ],
    correctIndex: 1,
    explanation: 'The AP exam format is: (1) State hypotheses, (2) Check conditions, (3) Calculate test statistic and p-value, (4) State conclusion in context.',
    partNumber: 7,
    partTitle: 'Review & Applications'
  },
  {
    id: 'htf-ent-7b',
    question: 'Which is the correct way to state a conclusion for a significance test?',
    options: [
      '"We accept $H_{0}$. The claim is proven false."',
      '"We reject/fail to reject $H_{0}$. There is/is not convincing evidence that [context]."',
      '"$H_{0}$ is true/false based on the data."',
      '"The p-value proves the alternative hypothesis."'
    ],
    correctIndex: 1,
    explanation: 'The proper conclusion format is: "We [reject/fail to reject] $H_{0}$. There [is/is not] convincing evidence that [conclusion in context]." Never say "accept $H_{0}$" or "prove."',
    partNumber: 7,
    partTitle: 'Review & Applications'
  }
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Null & Alternative Hypotheses' },
    { partNumber: 2, partTitle: 'Test Statistics' },
    { partNumber: 3, partTitle: 'P-Values' },
    { partNumber: 4, partTitle: 'Type I & Type II Errors' },
    { partNumber: 5, partTitle: 'One-Sample t-Test' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Review & Applications' }
  ]
}
