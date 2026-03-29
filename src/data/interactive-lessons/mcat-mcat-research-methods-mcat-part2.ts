export const mcatResearchMethodsPart2Data = {
  topicSlug: 'mcat-research-methods-mcat',
  sections: [
    {
      id: 'rm2-intro',
      type: 'text' as const,
      content: `# Research Methods & Study Design

**Part 2 of 4 — Validity & Threats to Validity**

### Types of Validity

| Validity Type | Definition | Example |
|--------------|-----------|---------|
| **Internal Validity** | Causal inference: Did IV cause the DV? | Did drug (not age/diet) cause recovery? |
| **External Validity** | Generalizability: Do results apply beyond the study? | Do lab findings translate to real patients? |
| **Construct Validity** | Does the measurement actually measure what it claims? | Does IQ test truly measure "intelligence"? |
| **Statistical Conclusion Validity** | Are conclusions about relationships statistically sound? | Is the sample large enough to detect effect? |

### Threats to Internal Validity

| Threat | What it is | Example |
|--------|-----------|---------|
| **Confounding** | Unmeasured variable causes apparent effect | Older patients recover faster (age ← good health status) |
| **Selection Bias** | Systematic differences in groups before study | Healthier patients self-select into treatment group |
| **Attrition** | Differential dropout in groups | Sicker subjects quit drug trial early |
| **History** | Environmental event affects all subjects | Epidemic changes disease prevalence during study |
| **Maturation** | Subjects change naturally over time | Patients improve due to aging, not treatment |

### Threats to External Validity

| Threat | Impact |
|--------|--------|
| **Limited Sample** | Results may not generalize to other populations |
| **Lab Conditions** | Artificial environment ≠ real-world effects |
| **Volunteer Bias** | Volunteers differ from general population |
| **Interaction with IV** | Effect depends on specific conditions (works in winter, not summer) |

**Solution:** Randomization (internal validity) + Large diverse sample (external validity)`
    },
    {
      id: 'rm2-quiz',
      type: 'multiple-choice' as const,
      content: `**Validity & Threats** 🎯`,
      exercise: {
        questions: [
          {
            question: `A study measures intelligence with a test correlated with wealth. This threatens which validity?`,
            options: [`Internal validity`, `External validity`, `Construct validity`, `Statistical validity`],
            correctAnswer: 2,
            explanation: `The test doesn't measure true intelligence (confounded by socioeconomic factors). This is a construct validity threat—the measurement doesn't measure what it claims.`
          },
          {
            question: `An RCT shows a medication is effective in a university hospital. Can we generalize to rural clinics?`,
            options: [`Yes; randomization fixes all issues`, `Questionable; external validity threat (setting, patient demographics)`, `No; RCTs cannot generalize`, `Depends on p-value`],
            correctAnswer: 1,
            explanation: `External validity concerns generalization to different settings/populations. Rural patients may differ (age, comorbidities, medication access), limiting generalizability.`
          },
          {
            question: `A weight-loss study: Motivated self-selected volunteers randomized to diet vs control. Why is internal validity stronger than external validity?`,
            options: [
              `Randomization controls confounds (IV); volunteers ≠ general population (EV)`,
              `External validity cannot be threatened if randomized`,
              `Diet effect size is always generalizable`,
              `Both are equally strong in RCTs`
            ],
            correctAnswer: 0,
            explanation: `Randomization balances confounds (strong internal validity), but volunteer samples aren't representative (weak external validity). Results may not generalize to non-motivated populations.`
          },
          {
            question: `A study on antacid effectiveness finds dropout rate 2× higher in placebo group. What threat is this?`,
            options: [`Selection bias`, `Attrition bias`, `Maturation`, `History`],
            correctAnswer: 1,
            explanation: `Differential dropout (attrition) between groups biases results. Sicker placebo subjects quit → remaining placebo group appears healthier → drug looks better by comparison.`
          }
        ]
      }
    },
    {
      id: 'rm2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- **Internal Validity**: Random assignment controls confounds (high IV = good study)
- **External Validity**: Representative sampling + diverse conditions enable generalization
- **Construct Validity**: Measurement must truly measure the construct intended
- **Key Threats**: Confounding, selection bias, attrition (internal); volunteer bias, lab conditions (external)
- **Ideal Study**: Randomized (strong internal) + Large diverse sample (strong external)`
    },
    {
      id: 'rm2-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Validity & Threats

<details>
<summary><b>Example 1: Internal vs external validity</b></summary>

Question: A tightly controlled inpatient trial shows strong results, but participants are all healthy young adults.

1. Strong protocol control supports internal validity.
2. Narrow participant profile limits generalization.

Result: **high internal validity, weaker external validity**.
</details>

<details>
<summary><b>Example 2: Identify attrition bias</b></summary>

Question: In a weight-loss trial, dropout is 35% in treatment vs 8% in control.

1. Unequal dropout changes who remains in each group.
2. Final comparison can be biased.

Threat: **attrition bias**.
</details>

<details>
<summary><b>Example 3: Construct validity check</b></summary>

Question: "Empathy" is measured only by number of social media comments posted.

1. Metric may not map to the intended construct.
2. Behavior proxy is weak and noisy.

Main concern: **construct validity**.
</details>`
    }
  ]
};
