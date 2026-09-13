export const mcatBiostatisticsPart4Data = {
  topicSlug: 'mcat-biostatistics-mcat',
  sections: [
    {
      id: 'biostats4-intro',
      type: 'text' as const,
      content: `# Biostatistics Fundamentals

**Part 4 of 4 — Correlation vs Causation & Study Design Implications**

### Correlation Coefficient (r)

Measures **strength** and **direction** of linear relationship between two variables.

\`\`\`
r = -1 → Perfect negative correlation
r = 0 → No correlation
r = +1 → Perfect positive correlation
\`\`\`

| r Value | Interpretation |
|---------|----------------|
| ±0.0–0.3 | Weak correlation |
| ±0.3–0.7 | Moderate correlation |
| ±0.7–1.0 | Strong correlation |

**Critical:** r close to ±1 does NOT prove causation!

### Correlation ≠ Causation

**Three mechanisms for correlation:**

1. **Causation**: X → Y (aspirin → reduced heart attack risk)
2. **Reverse Causation**: Y → X (depression ← poor health status)
3. **Confounding Variable**: Z → both X and Y (smoking → both yellow teeth AND lung cancer)

**Example:** Ice cream sales correlate with drowning deaths. 
- **Confounder:** Summer heat drives both (neither causes the other)

### Study Design & Confounders

| Design | Controls Confounders? | Causation Inference |
|--------|----------------------|-------------------|
| Observational | Poor (confounding risk) | Weak |
| Case-Control | Better (matching) | Moderate |
| Cohort | Good (prospective tracking) | Good |
| RCT | Excellent (randomization) | Strong |

**RCT Gold Standard:** Randomization balances known **and unknown** confounders across groups.

\`\`\`
Observational Study: 
  Does statin use → lower cholesterol?
  (Confounded by: diet, exercise, genetics)

RCT Gold Standard:
  Randomize patients to statin vs placebo
  (Randomization balances confounders)
\`\`\``
    },
    {
      id: 'biostats4-quiz',
      type: 'multiple-choice' as const,
      content: `**Correlation, Causation & Study Bias** 🎯`,
      exercise: {
        questions: [
          {
            question: `A study finds r = −0.85 between exercise frequency and BMI. Which is correct?`,
            options: [
              `Exercise lowers BMI, as the strong correlation proves`,
              `A strong negative correlation, but causation is unproven`,
              `About 85% of the variation in BMI is due to exercise`,
              `Exercise frequency explains almost none of BMI's variation`
            ],
            correctAnswer: 1,
            explanation: `High |r| indicates strong correlation, NOT causation, and the negative sign means higher exercise frequency goes with lower BMI. The share of variance explained is $r^2 \\approx 0.72$, which is substantial but not 85%, and it would not show cause. Confounders (e.g., diet, genetics) may explain both exercise habits and BMI independently.`
          },
          {
            question: `Coffee consumption correlates with heart attack risk. Which scenario rules out confounding?`,
            options: [
              `Matching drinkers to non-drinkers by age and sex`,
              `Randomizing people to coffee or decaf in an RCT`,
              `Adjusting statistically for smoking and diet`,
              `Surveying a much larger sample of coffee drinkers`
            ],
            correctAnswer: 1,
            explanation: `RCT randomization balances confounders on average, both measured and unknown, across groups, so it is the only option that addresses confounding in general rather than strictly ruling it out. Statistical adjustment and matching address only the specific confounders chosen (smoking, diet, age, sex), leaving unknown confounders in place, and a larger sample reduces random error but not confounding.`
          },
          {
            question: `A cohort study follows 1000 patients taking medication X for 5 years. Why is this better than an observational cross-sectional study for inferring causation?`,
            options: [
              `Cohort studies always enroll larger samples`,
              `Exposure is measured before the outcome occurs`,
              `Following patients over time removes confounding`,
              `Cohort studies are cheaper and faster to run`
            ],
            correctAnswer: 1,
            explanation: `Cohort studies are prospective: exposure (medication X) is measured before outcome occurs. This temporal relationship (exposure precedes outcome) strengthens causal inference compared to cross-sectional data. Cohorts are not necessarily larger, are usually slower and more costly, and remain vulnerable to confounding.`
          },
          {
            question: `A study reports: "Children watching violent TV shows are more aggressive." Which BEST explains the correlation?`,
            options: [
              `Violent TV must cause it, since viewing came first`,
              `Aggression must drive viewing, since kids pick their shows`,
              `A confounder, like low supervision, could drive both`,
              `No link exists, since r = 0 for this relationship`
            ],
            correctAnswer: 2,
            explanation: `A confounding variable (parental supervision) could drive both outcomes: low supervision leads to more TV and more aggression. That explanation fits the reported association without claiming more than it shows. A correlational finding cannot establish either causal direction: the report gives no timing showing viewing came first, and no evidence that children's choices drive viewing, so neither "must" claim is supported. A reported association also means r is not 0. Only an experiment (e.g., RCT with random TV assignment) could establish causation.`
          }
        ]
      }
    },
    {
      id: 'biostats4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- **Correlation (r)**: Measures linear relationship; high |r| ≠ causation
- **Confounding**: Third variable influences both exposure and outcome
- **Study Hierarchy** (for causation inference): Observational < Case-Control < Cohort < RCT
- **RCT Gold Standard**: Randomization balances known and unknown confounders
- **Temporal Relationship**: Exposure must precede outcome for causation (cohort better than cross-sectional)
- **MCAT Tip**: Always ask "Could a confounder explain this correlation?" and "What study design would prove causation?"`
    },
    {
      id: 'biostats4-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Correlation, Causation & Design

<details>
<summary><b>Example 1: Correlation does not prove causation</b></summary>

Data show coffee intake correlates with heart disease.

1. Correlation indicates association only.
2. Smoking could confound both coffee intake and disease risk.
3. Need stronger design (e.g., randomized intervention) for causal inference.

Conclusion: **association present, causation unproven**.
</details>

<details>
<summary><b>Example 2: Rank study designs for causal strength</b></summary>

Given cross-sectional, case-control, cohort, and RCT:

1. RCT is strongest due to randomization.
2. Cohort is next because exposure precedes outcome.
3. Case-control and cross-sectional are more confounded.

Strongest to weakest: **RCT > cohort > case-control > cross-sectional**.
</details>

<details>
<summary><b>Example 3: Identify temporal logic</b></summary>

Study records current depression and current sleep quality at one time point.

1. Exposure and outcome measured simultaneously.
2. Cannot determine which came first.
3. Reverse causation remains possible.

Takeaway: temporal ambiguity weakens causal claims.
</details>`
    }
  ]
};
