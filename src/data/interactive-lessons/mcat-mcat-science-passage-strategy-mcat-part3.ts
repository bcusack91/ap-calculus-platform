export const mcatSciPassagePart3Data = {
  topicSlug: 'mcat-science-passage-strategy-mcat',
  sections: [
    {
      id: 'sp3-intro',
      type: 'text' as const,
      content: `# Science Passage Strategy for the MCAT

**Part 3 of 7 — Experimental Design**

### Key Experimental Components

| Component | Definition | Example |
|-----------|-----------|---------|
| **Independent variable (IV)** | What the researcher manipulates | Drug dosage |
| **Dependent variable (DV)** | What is measured | Blood pressure |
| **Control group** | No treatment / standard treatment | Placebo group |
| **Experimental group** | Receives treatment | Drug group |
| **Confounding variable** | Uncontrolled factor that could explain results | Age differences between groups |

### Types of Studies

| Type | Description | Strength |
|------|-------------|---------|
| Randomized controlled trial (RCT) | Random assignment, intervention, control | Gold standard for causation |
| Cohort study | Follow groups over time | Good for rare exposures |
| Case-control study | Compare cases vs. controls (retrospective) | Good for rare diseases |
| Cross-sectional | Snapshot at one time point | Quick, shows associations |

### Validity & Reliability

- **Internal validity**: Can you conclude cause-and-effect? (controlled confounders)
- **External validity**: Can you generalize to broader population?
- **Reliability**: Reproducibility — same results with repeated testing`
    },
    {
      id: 'sp3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Experimental Design** 🎯',
      exercise: {
        questions: [
          {
            question: 'A study finds that coffee drinkers have lower rates of depression, but coffee drinkers also exercise more. Exercise is a:',
            options: ['Confounding variable — it could explain the association instead of coffee itself', 'Dependent variable', 'Independent variable', 'Control variable'],
            correctAnswer: 0,
            explanation: 'Exercise is a confounding variable because it\'s associated with both the exposure (coffee drinking) and the outcome (depression) and could be the real cause of the observed association. This limits internal validity.'
          }
        ]
      }
    },
    {
      id: 'sp3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- IV = manipulated. DV = measured. Confounders = uncontrolled alternatives.
- RCTs are gold standard for causation. Observational studies show associations only.
- Internal validity = cause-and-effect confidence. External validity = generalizability.
- ALWAYS look for confounding variables in MCAT passages`
    }
  ]
};
