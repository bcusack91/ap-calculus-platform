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

$$\\text{95\\% CI} = \\bar{x} \\pm 1.96 \\times SE, \\qquad SE = \\frac{SD}{\\sqrt{n}}$$

(1.96 is often rounded to 2, so a 95% CI is roughly the estimate ± 2 SE.)

**Interpretation:** "We are 95% confident the true population mean falls within this range."

| CI feature | What it means |
|----------|--------------|
| Narrow CI | More precise estimate (good sample size) |
| Wide CI | Less precise estimate (small sample size) |
| CI excludes the null value | Statistically significant |
| CI includes the null value | Not statistically significant |

The **null value** is **0 for a difference** (mean difference, change in BP) and **1 for a ratio** (odds ratio, relative risk).

**Example:** Study finds mean blood pressure reduction of 10 mmHg (95% CI: 5–15 mmHg).
- Interpretation: Likely true reduction is between 5–15 mmHg
- Since CI doesn't include 0, the effect is significant

### Effect Size

Effect size quantifies **magnitude** of difference (independent of sample size).

| Measure | What it shows | Range |
|---------|--------------|-------|
| Standardized mean difference (Cohen's d) | Difference between group means, in SD units | Larger = bigger effect |
| Correlation (r) | Strength and direction of a linear relationship | −1 to +1 (0 = none; ±1 = perfect) |
| Odds Ratio (OR) | Relative odds of outcome | >1 = increased odds; <1 = decreased |

<!-- yield:low -->
- Rough benchmarks for Cohen's d: 0.2 (small), 0.5 (medium) and 0.8 (large).
<!-- /yield -->

**Example:** A very large trial compares two antacids head to head:
- Drug A: Mean relief = 7.0 hours
- Drug B: Mean relief = 6.9 hours
- p = 0.02, so the difference is "significant," but the **effect size** is trivial (0.1 hour, about 6 minutes)`
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
              `We are 95% confident the population mean is 13.5–14.5 g/dL`,
              `Repeated samples will always have means of 13.5–14.5 g/dL`,
              `The true mean is certainly between 13.5 and 14.5 g/dL`
            ],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `A 95% CI means: if we repeated this study 100 times, ~95 would capture the true population mean. It's about the population parameter, not individual values. A CI gives no certainty, and other samples' means can fall outside it.`
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
            yield: 'HIGH',
            explanation: `Narrow CI = more precise estimate (larger sample size or lower variability). Study B's tight CI (4.9–5.1) is much more precise than Study A's wide range (1–9).`
          },
          {
            question: `A dataset with Odds Ratio = 2.0 (95% CI: 0.8–5.2) for disease and exposure. Is this significant?`,
            options: [
              `Yes; OR=2.0 means doubled risk`,
              `No; the CI crosses 1.0`,
              `Yes; a 95% CI is reported for the OR`,
              `Cannot determine from given info`
            ],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `For a ratio such as the OR, the null value is 1.0 (equal odds). When the CI includes 1.0, the effect is **not statistically significant**. Here, 0.8–5.2 includes 1.0, so there is no significant association between exposure and disease. A point estimate of 2.0 means doubled odds (not risk) and is not significant on its own, and simply reporting a CI says nothing about significance; the CI given here is enough to decide.`
          },
          {
            question: `Which scenario represents a **meaningful** but **statistically insignificant** result?`,
            options: [
              `Large effect size with p = 0.08`,
              `Small effect size with p = 0.001`,
              `Trivial effect size with p = 0.40`,
              `Large effect size with p = 0.001`
            ],
            correctAnswer: 0,
            yield: 'MEDIUM',
            explanation: `"Meaningful" refers to effect size and "statistically insignificant" to p > 0.05, so only a large effect with p = 0.08 fits both. This pattern typically comes from a small, underpowered study with a wide CI: the effect may be clinically important, but the study lacked power to confirm it. A large effect with p = 0.001 is meaningful and significant, a small effect with p = 0.001 is significant but trivial, and a trivial effect with p = 0.40 is neither.`
          }
        ]
      }
    },
    {
      id: 'biostats3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- **95% CI**: Range where true population parameter likely falls
- **Narrow CI** = Better precision (larger N); **CI includes the null value** (0 for differences, 1 for ratios such as OR/RR) = Not significant
- **Effect Size**: Magnitude of difference (Cohen's d, OR, r); independent of sample size
- **p-value vs Effect Size**: p-value answers "Is there an effect?" (yes/no). Effect size answers "How big?"
- **MCAT Tip**: Always check both—significant p-value ≠ meaningful effect; large CI suggests underpowered study

<!-- yield:low -->
- Low-yield extras: Cohen's d benchmarks (0.2 small, 0.5 medium, 0.8 large)
<!-- /yield -->`
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
