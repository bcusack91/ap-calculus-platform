export const psychHistoryApproachesPart7Data = {
  topicSlug: 'history-approaches-psychology',
  sections: [
    {
      id: 'histo7-synthesis',
      type: 'text' as const,
      content: `
## AP Psychology: History & Methods Review

### Key Comparisons

| Topic | Key Points |
|-------|------------|
| **Wundt** | First lab, structuralism, introspection |
| **James** | Functionalism, adaptation |
| **Freud** | Psychodynamic, unconscious |
| **Watson/Skinner** | Behaviorism, observable behavior |
| **Maslow/Rogers** | Humanistic, self-actualization |
| **Experiments** | Causation, IV/DV, random assignment |
| **Correlation** | Association only, no causation |
| **Ethics** | Informed consent, debriefing, IRB |
      `
    },
    {
      id: 'histo7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which pair correctly matches a researcher with their perspective?',
            options: [
              'Freud — Behavioral',
              'Skinner — Psychodynamic',
              'Rogers — Humanistic',
              'Watson — Cognitive'
            ],
            correctAnswer: 2,
            explanation: 'Carl Rogers is associated with the humanistic perspective, emphasizing unconditional positive regard and client-centered therapy.'
          }
        ]
      }
    },
    {
      id: 'histo7-tips',
      type: 'text' as const,
      content: `
## AP Exam Tips

- Know the **key figures** and their contributions
- Be able to **design an experiment** from a research question
- Understand the **difference between correlation and causation**
- Know **ethical guidelines** and famous ethical controversies
- Practice **interpreting statistics** (mean, SD, p-value)
- Remember the **biopsychosocial approach**
      `
    },
    {
      id: 'histo7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A researcher finds r = -0.85 between stress and health. This means:',
            options: [
              'Stress causes poor health',
              'There is a strong negative correlation',
              'The relationship is weak',
              'The correlation is positive'
            ],
            correctAnswer: 1,
            explanation: 'r = -0.85 is a strong negative correlation (close to -1.0). As stress increases, health tends to decrease. But correlation ≠ causation.'
          }
        ]
      }
    },
    {
      id: 'histo7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The father of psychology is ___',
            options: ['Freud', 'James', 'Wundt', 'Skinner']
          },
          {
            label: 'Behaviorism rejected the study of ___',
            options: ['behavior', 'mental processes', 'animals', 'statistics']
          },
          {
            label: 'p < 0.05 means results are statistically ___',
            options: ['insignificant', 'significant', 'invalid', 'unreliable']
          }
        ],
        correctAnswers: ['Wundt', 'mental processes', 'significant'],
        hint1: 'He established the first lab in 1879.',
        hint2: 'Watson said psychology should only study what is observable.',
        hint3: 'The standard threshold for significance.',
        explanation: 'Wundt is the father of psychology. Behaviorists rejected studying unobservable mental processes. p < 0.05 = statistically significant.'
      }
    }
  ]
}
