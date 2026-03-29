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
| Null (H₀) | No effect or difference | The drug has no effect on blood pressure |
| Alternative (H₁) | There is an effect | The drug lowers blood pressure |

**One-tailed vs Two-tailed:**
- **One-tailed**: Predicts direction (Drug **lowers** BP) → p-value not split
- **Two-tailed**: No direction (Drug **changes** BP) → p-value split between tails

### Type I & II Errors

| Error | What Happens | Probability |
|-------|-------------|------------|
| Type I | Reject H₀ when it's true (False positive) | $\\alpha$ (significance level) |
| Type II | Fail to reject H₀ when it's false (False negative) | $\\beta$ |

**Critical:** α = 0.05 means 5% chance of Type I error (standard MCAT threshold)

### p-value Interpretation

\`\`\`
p < 0.05 → Reject H₀ (statistically significant)
p ≥ 0.05 → Fail to reject H₀ (not significant)
\`\`\`

**Example:** A study finds p = 0.03 for a new antibiotic efficacy.
- Interpretation: **3% chance** these results occurred by random chance if the antibiotic has no real effect
- Conclusion: Reject H₀; the antibiotic likely has real efficacy

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
              `The vaccine is 92% effective`,
              `There is an 8% chance of Type I error`,
              `The results are not statistically significant (α=0.05)`,
              `The vaccine has no effect`
            ],
            correctAnswer: 2,
            explanation: `p = 0.08 > 0.05, so we fail to reject H₀. The study did not find sufficient evidence of vaccine efficacy at the 0.05 significance level.`
          },
          {
            question: `Researchers test if caffeine affects exam scores. They use a **two-tailed** test with α=0.05. What does α represent here?`,
            options: [
              `The probability the caffeine has an effect`,
              `The probability of incorrectly rejecting H₀ (Type I error)`,
              `The p-value threshold`,
              `Both B and C`
            ],
            correctAnswer: 3,
            explanation: `α is both the significance level (threshold for rejecting H₀) and the maximum acceptable Type I error rate. If p < 0.05, we reject H₀.`
          },
          {
            question: `A study of 50 patients finds a difference in pain scores (p=0.06), but a study of 500 patients on the same drug finds p=0.04. Why did power increase?`,
            options: [
              `More patients provide more data, increasing ability to detect true effects`,
              `The p-value decreased due to chance`,
              `Type II error became more likely`,
              `The effect size grew`
            ],
            correctAnswer: 0,
            explanation: `Larger sample size (50 vs 500) increases **statistical power** (ability to detect real effects). The second study had more power, allowing detection of significance.`
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
            explanation: `Failing to reject H₀ when there might be a real effect = Type II error (false negative). p=0.10 means insufficient evidence, not proof of no effect.`
          }
        ]
      }
    },
    {
      id: 'biostats2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- **p-value** = Probability of observing data (or more extreme) if H₀ is true
- **α=0.05** = 5% threshold; p < 0.05 → reject H₀
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
2. Since 0.03 < 0.05, reject H₀.

Conclusion: **statistically significant** finding.
</details>

<details>
<summary><b>Example 2: Identify a Type I error</b></summary>

A test concludes a drug works, but in reality it does not.

1. Rejected H₀ when H₀ was true.
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
