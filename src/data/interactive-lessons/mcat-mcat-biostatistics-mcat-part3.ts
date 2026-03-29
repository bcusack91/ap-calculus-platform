export const mcatBiostatisticsPart3Data = {
  topicSlug: 'mcat-biostatistics-mcat',
  sections: [
    {
      id: 'biostats3-intro',
      type: 'text' as const,
      content: `# Biostatistics Fundamentals

**Part 3 of 4 — Confidence Intervals & Effect Size**

### Confidence Intervals (CI)

A CI gives a **range** where the true parameter likely lies (unlike a single p-value).

\`\`\`
95% CI = Sample mean ± 1.96 × SE
(where SE = SD / √n)
\`\`\`

**Interpretation:** "We are 95% confident the true population mean falls within this range."

| CI Width | What it means |
|----------|--------------|
| Narrow CI | More precise estimate (good sample size) |
| Wide CI | Less precise estimate (small sample size) |
| CI doesn't cross 0 | Statistically significant difference |
| CI crosses 0 | Not statistically significant |

**Example:** Study finds mean blood pressure reduction of 10 mmHg (95% CI: 5–15 mmHg).
- Interpretation: Likely true reduction is between 5–15 mmHg
- Since CI doesn't include 0, the effect is significant

### Effect Size

Effect size quantifies **magnitude** of difference (independent of sample size).

| Measure | What it shows | Range |
|---------|--------------|-------|
| Cohen's d | Standardized difference between groups | Small (0.2), Medium (0.5), Large (0.8) |
| Correlation (r) | Strength of relationship | 0 (none) to 1 (perfect) |
| Odds Ratio (OR) | Relative odds of outcome | >1 = increased odds; <1 = decreased |

**Example:** Two antacid drugs show:
- Drug A: Mean relief = 7 hours (Large sample, p=0.001)
- Drug B: Mean relief = 6.9 hours (Huge sample, p=0.02)
- p-value suggests B is "significant," but **effect size** is trivial (~0.01 hours difference)`
    },
    {
      id: 'biostats3-quiz',
      type: 'multiple-choice' as const,
      content: `**Confidence Intervals & Effect Size** 🎯`,
      exercise: {
        questions: [
          {
            question: `A study reports: Mean hemoglobin = 14 g/dL (95% CI: 13.5–14.5). Interpret this.`,
            options: [
              `95% of patients have hemoglobin between 13.5–14.5 g/dL`,
              `We're 95% confident the true population mean is between 13.5–14.5`,
              `The sample mean will be 14 ± 0.5 g/dL`,
              `Hemoglobin is definitely between these values`
            ],
            correctAnswer: 1,
            explanation: `A 95% CI means: if we repeated this study 100 times, ~95 would capture the true population mean. It's about the population parameter, not individual values.`
          },
          {
            question: `Study A reports: Mean weight loss = 5 lb (95% CI: 1–9 lb). Study B: Mean = 5 lb (95% CI: 4.9–5.1 lb). Which study has a more precise estimate?`,
            options: [
              `Study A; the effect is larger`,
              `Study B; the CI is narrower`,
              `Both are equally precise`,
              `Study A; it shows clinical significance`
            ],
            correctAnswer: 1,
            explanation: `Narrow CI = more precise estimate (larger sample size or lower variability). Study B's tight CI (4.9–5.1) is much more precise than Study A's wide range (1–9).`
          },
          {
            question: `A dataset with Odds Ratio = 2.0 (95% CI: 0.8–5.2) for disease and exposure. Is this significant?`,
            options: [
              `Yes; OR=2.0 means doubled risk`,
              `No; the CI crosses 1.0`,
              `Yes; CI is reported`,
              `Cannot determine from given info`
            ],
            correctAnswer: 1,
            explanation: `When CI for OR crosses 1.0, the effect is **not statistically significant**. Here, 0.8–5.2 includes 1.0, so no significant association between exposure and disease.`
          },
          {
            question: `Which scenario represents a **meaningful** but **statistically insignificant** result?`,
            options: [
              `Large effect size, high p-value (p=0.08)`,
              `Small effect size, low p-value (p=0.001)`,
              `Large CI, small sample size`,
              `A and C`
            ],
            correctAnswer: 3,
            explanation: `Large effect + high p-value occurs with small sample size (underpowered study). Both large effect and large CI indicate the result is clinically important but lacked statistical power.`
          }
        ]
      }
    },
    {
      id: 'biostats3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- **95% CI**: Range where true population parameter likely falls
- **Narrow CI** = Better precision (larger N); **CI crosses 0** = Not significant
- **Effect Size**: Magnitude of difference (Cohen's d, OR, r); independent of sample size
- **p-value vs Effect Size**: p-value answers "Is there an effect?" (yes/no). Effect size answers "How big?"
- **MCAT Tip**: Always check both—significant p-value ≠ meaningful effect; large CI suggests underpowered study`
    },
    {
      id: 'biostats3-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Confidence Intervals & Effect Size

<details>
<summary><b>Example 1: Interpret a confidence interval</b></summary>

Treatment effect = 4 units, 95% CI: 1 to 7.

1. Interval does not include 0.
2. Effect is statistically significant.
3. True effect is plausibly between 1 and 7 units.

Conclusion: **significant positive effect with moderate precision**.
</details>

<details>
<summary><b>Example 2: Compare precision between studies</b></summary>

Study A CI: 10 to 30. Study B CI: 18 to 22.

1. Study B has a much narrower CI.
2. Narrower CI means lower uncertainty in estimate.

More precise estimate: **Study B**.
</details>

<details>
<summary><b>Example 3: p-value vs practical importance</b></summary>

A huge sample finds p < 0.001 for a score increase of 0.2 points.

1. p-value says the effect is unlikely due to chance.
2. Effect size is tiny.
3. Statistical significance does not guarantee clinical relevance.

Takeaway: evaluate **both p-value and effect size**.
</details>`
    }
  ]
};
