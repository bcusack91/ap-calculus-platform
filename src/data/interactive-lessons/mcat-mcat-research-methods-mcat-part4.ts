export const mcatResearchMethodsPart4Data = {
  topicSlug: 'mcat-research-methods-mcat',
  sections: [
    {
      id: 'rm4-intro',
      type: 'text' as const,
      content: `# Research Methods & Study Design

**Part 4 of 4 — Sample Size, Ethics & Meta-Analysis**

### Sample Size & Power

Larger sample → More power to detect true effects (↓β, Type II error)

| Factor | Effect on Power |
|--------|-----------------|
| Larger sample size | ↑ Power |
| Larger effect size | ↑ Power |
| Lower variability | ↑ Power |
| Higher α (0.05 vs 0.01) | ↑ Power |

**Rule of thumb:** Aim for 80%+ power (allow 20% ≤β).

### Research Ethics (MCAT focus: Informed Consent, IRB)

| Principle | Requirement |
|-----------|------------|
| **Informed Consent** | Subjects understand risks/benefits; voluntary participation |
| **Beneficence** | Maximize benefits; minimize harms |
| **Justice** | Fair distribution of risks/benefits; equitable access |
| **IRB (Institutional Review Board)** | Ethical review before study starts |

**Special Populations:** Extra protections for children, prisoners, cognitively impaired (cannot give true consent)

**Vulnerable Populations:** Cannot be excluded from research solely for "protection"; must justify any exclusion

### Meta-Analysis

Combines data from multiple studies to increase statistical power.

\`\`\`
Advantage: Large sample → more generalizable conclusions
Risk: Publication bias (only positive findings published)
\`\`\`

| Issue | Impact |
|-------|--------|
| **Heterogeneity** | Studies differ in methods; may not combine |
| **Publication Bias** | Null findings ↓ published; overestimates effect |
| **Quality Variation** | Poor-quality studies can bias pooled analysis |

**Forest Plot Interpretation:** Vertical line at 1.0 (OR) means no effect; if confidence intervals cross it, effect not significant overall.`
    },
    {
      id: 'rm4-quiz',
      type: 'multiple-choice' as const,
      content: `**Sample Size, Ethics & Meta-Analysis** 🎯`,
      exercise: {
        questions: [
          {
            question: `A medication trial finds no significant difference with 50 participants (p=0.10). What might improve the conclusion?`,
            options: [
              `Larger sample size (would increase power)`,
              `Lower α threshold`,
              `Use one-tailed test instead of two-tailed`,
              `A and C`
            ],
            correctAnswer: 3,
            explanation: `Larger N increases power to detect effects (if they exist). One-tailed test increases power by directing p-value to one tail. These address Type II error (false negative).`
          },
          {
            question: `A researcher wants to test a vaccine in vulnerable populations (homeless). Why must researchers include (not exclude) them?`,
            options: [
              `Cost savings`,
              `Justice principle: equitable access to potential benefits`,
              `Easy recruitment`,
              `IRB requirement`
            ],
            correctAnswer: 1,
            explanation: `Justice requires fair distribution of research benefits. Excluding vulnerable groups historically "protected" them but denied access to potential treatments—unethical.`
          },
          {
            question: `A meta-analysis combines 20 depression studies (n=5000 total). One issue could be:`,
            options: [
              `Too many studies`,
              `Publication bias: negative studies less likely published, overestimating drug effect`,
              `Sample size too large`,
              `Cannot combine different study types`
            ],
            correctAnswer: 1,
            explanation: `Publication bias is a major meta-analysis limitation. If 80% of published studies show a drug works (but 40% of unpublished studies don't), the pooled effect is overestimated.`
          },
          {
            question: `Informed consent requires subjects know: (Select all that apply)`,
            options: [
              `Study purpose and procedures`,
              `Risks and benefits`,
              `Right to withdraw without penalty`,
              `Confidentiality protections`,
              `All of the above`
            ],
            correctAnswer: 4,
            explanation: `All four elements (purpose, risks/benefits, withdrawal rights, confidentiality) are essential for true informed consent and ethical research.`
          }
        ]
      }
    },
    {
      id: 'rm4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- **Sample Size**: Larger N → More power (can detect small true effects)
- **Power Goal**: 80%+ (give ≤20% Type II error allowance)
- **Informed Consent**: Disclosure of risks/benefits; voluntary; ability to withdraw
- **Vulnerable Populations**: Include with extra protections, don't exclude
- **Meta-Analysis**: Combines studies for power, but publication bias can overestimate effects
- **Forest Plots**: If CI crosses 1.0 (OR), effect is not statistically significant
- **MCAT Tip**: Ethics questions focus on consent, IRB review, protection of vulnerable groups`
    },
    {
      id: 'rm4-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Power, Ethics & Meta-Analysis

<details>
<summary><b>Example 1: Increase power in a weak study</b></summary>

Question: Trial with n=40 per arm yields p=0.09 for a moderate effect.

1. Small sample can underpower the test.
2. Increasing n reduces standard error.
3. Better power improves chance of detecting a true effect.

Most direct improvement: **larger sample size**.
</details>

<details>
<summary><b>Example 2: Informed consent essentials</b></summary>

Question: A participant signs a form but was never told key side effects.

1. Signature alone is insufficient.
2. Valid consent requires meaningful disclosure and understanding.

Ethics issue: **informed consent was inadequate**.
</details>

<details>
<summary><b>Example 3: Read a forest plot threshold</b></summary>

Question: Pooled odds ratio is 0.85 with 95% CI 0.62 to 1.10.

1. For OR, null value is 1.0.
2. CI crosses 1.0.
3. Pooled effect is not statistically significant.

Interpretation: **possible benefit, but inconclusive overall**.
</details>`
    }
  ]
};
