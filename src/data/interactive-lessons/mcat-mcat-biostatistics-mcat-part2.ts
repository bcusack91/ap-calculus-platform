export const mcatBiostatisticsPart2Data = {
  topicSlug: 'mcat-biostatistics-mcat',
  sections: [
    {
      id: 'biostats2-intro',
      type: 'text' as const,
      content: `# Biostatistics Fundamentals

**Part 2 of 4 — Hypothesis Testing & p-values**

### Hypothesis Types

| Hypothesis | Definition | Example |
|-----------|-----------|---------|
| Null $(H_{0})$ | No effect or difference | The drug has no effect on blood pressure |
| Alternative $(H_{1})$ | There is an effect | The drug lowers blood pressure |

**One-tailed vs Two-tailed:**
- **One-tailed**: Predicts direction (Drug **lowers** BP) → p-value not split
- **Two-tailed**: No direction (Drug **changes** BP) → p-value split between tails

### Type I & II Errors

| Error | What Happens | Probability |
|-------|-------------|------------|
| Type I | Reject $H_{0}$ when it's true (False positive) | $\\alpha$ (significance level) |
| Type II | Fail to reject $H_{0}$ when it's false (False negative) | $\\beta$ |

**Critical:** α = 0.05 means a 5% chance of a Type I error when $H_{0}$ is true, i.e., a 5% chance of rejecting a true null (standard MCAT threshold)

### p-value Interpretation

\`\`\`
p < 0.05 → Reject $H_{0}$ (statistically significant)
p ≥ 0.05 → Fail to reject $H_{0}$ (not significant)
\`\`\`

**Example:** A study finds p = 0.03 for a new antibiotic efficacy.
- Interpretation: **3% probability** of obtaining results at least as extreme as those observed, assuming the null hypothesis (no real antibiotic effect) is true
- Conclusion: Reject $H_{0}$; the antibiotic likely has real efficacy

### Power & Sample Size

- **Power** = 1 − β (ability to detect a true effect)
- Larger sample size → More power
- Higher power = better study (typically aim for 80%+ power)`
    },
    {
      id: 'biostats2-quiz',
      type: 'multiple-choice' as const,
      content: `**Hypothesis Testing** 🎯`,
      exercise: {
        questions: [
          {
            question: `A vaccine trial reports p = 0.08. Which is the correct interpretation?`,
            options: [
              `The vaccine is 92% effective against infection`,
              `There is an 8% chance the null hypothesis is true`,
              `The result is not significant at the 0.05 level`,
              `The trial proves that the vaccine has no effect`
            ],
            correctAnswer: 2,
            explanation: `p = 0.08 > 0.05, so we fail to reject $H_{0}$. The study did not find sufficient evidence of vaccine efficacy at the 0.05 significance level, but failing to find evidence does not prove the vaccine has no effect. A p-value is not the probability that the null is true, and it does not measure vaccine efficacy.`
          },
          {
            question: `Researchers test if caffeine affects exam scores. They use a **two-tailed** test with α=0.05. What does α represent here?`,
            options: [
              `The probability that caffeine truly has an effect`,
              `The significance cutoff and the Type I error rate`,
              `The Type II error rate, or chance of missing an effect`,
              `The p-value that this particular study obtained`
            ],
            correctAnswer: 1,
            explanation: `α is both the significance level (the p-value threshold for rejecting $H_{0}$) and the maximum acceptable Type I error rate, the probability of incorrectly rejecting a true $H_{0}$. If p < 0.05, we reject $H_{0}$. α is set before the study, so it is not the obtained p-value; the Type II error rate is β; and neither gives the probability that caffeine has an effect.`
          },
          {
            question: `Two trials of the same drug use identical designs and pain-score measures, except that one enrolls 50 patients and the other 500. They report p = 0.06 and p = 0.04, respectively. Why does the 500-patient trial have more statistical power?`,
            options: [
              `A larger sample gives more precise estimates of the effect`,
              `Its smaller p-value is itself what gives it more power`,
              `Type II error becomes more likely with more patients`,
              `The drug's true effect grows larger in the bigger trial`
            ],
            correctAnswer: 0,
            explanation: `The only design difference is sample size (50 vs 500), and a larger sample increases **statistical power** (the ability to detect a real effect). More patients give more precise estimates (a smaller standard error), so a true effect of a given size is more likely to reach significance. Power is a property of the design, fixed before any data come in, so an obtained p-value cannot be what gives a trial its power, and the two p-values alone do not show which trial had more. More power makes Type II error less likely, not more, and it is the same drug, so there is no reason its true effect changed.`
          },
          {
            question: `A study concludes "No significant difference" (p=0.10). Which error might have occurred?`,
            options: [
              `Type I error (false positive)`,
              `Type II error (false negative)`,
              `Both; we can't know which`,
              `Neither; p=0.10 is conclusive`
            ],
            correctAnswer: 1,
            explanation: `Failing to reject $H_{0}$ when there might be a real effect = Type II error (false negative). p=0.10 means insufficient evidence, not proof of no effect.`
          }
        ]
      }
    },
    {
      id: 'biostats2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- **p-value** = Probability of observing data (or more extreme) if $H_{0}$ is true
- **α=0.05** = 5% threshold; p < 0.05 → reject $H_{0}$
- **Type I error** (α): False positive; Type II error (β): False negative
- **Power** (1−β): Increases with larger sample size; typical goal is 80%+
- **MCAT Tip**: p < 0.05 = statistically significant; always check the p-value first`
    },
    {
      id: 'biostats2-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Hypothesis Testing & p-values

<details>
<summary><b>Example 1: Decide significance quickly</b></summary>

Study result: p = 0.03, α = 0.05.

1. Compare p to α.
2. Since 0.03 < 0.05, reject $H_{0}$.

Conclusion: **statistically significant** finding.
</details>

<details>
<summary><b>Example 2: Identify a Type I error</b></summary>

A test concludes a drug works, but in reality it does not.

1. Rejected $H_{0}$ when $H_{0}$ was true.
2. This is a false positive.

Error type: **Type I error (α)**.
</details>

<details>
<summary><b>Example 3: Why larger sample size helps</b></summary>

Small trial p = 0.07; larger trial on same effect p = 0.02.

1. Larger n reduces standard error.
2. Smaller uncertainty improves ability to detect true effects.
3. Power increases, reducing Type II error risk.

Takeaway: **bigger sample, higher power**.
</details>`
    }
  ]
};
