export const mcatSciPassagePart3Data = {
  topicSlug: 'mcat-science-passage-strategy-mcat',
  sections: [
    {
      id: 'mcat-3-intro',
      type: 'text' as const,
      content: `
# Experimental Design

**Part 3 of 7 — Experimental Design**

Control group: baseline for comparison; Experimental group: receives the treatment.

Positive control: expected to produce a result (validates the assay); Negative control: expected to produce no result.
      `
    },
    {
      id: 'mcat-3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes a key concept in experimental design?',
            options: [
              'Control group: baseline for comparison; Experimental group: receives the treatment',
              'This topic is not tested on the MCAT',
              'This applies only to clinical practice, not the MCAT',
              'None of the above'
            ],
            correctAnswer: 0,
            explanation: 'Control group: baseline for comparison; Experimental group: receives the treatment'
          }
        ]
      }
    },
    {
      id: 'mcat-3-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Randomization and blinding reduce bias in experiments.

**MCAT Tip:** Statistical significance (p < 0.05): the result is unlikely due to chance alone.
      `
    },
    {
      id: 'mcat-3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is an important principle for MCAT Strategy related to experimental design?',
            options: [
              'Randomization and blinding reduce bias in experiments',
              'Memorize without understanding — the MCAT only tests recall',
              'This concept is only relevant to graduate-level courses',
              'Skip this topic — it rarely appears on the MCAT'
            ],
            correctAnswer: 0,
            explanation: 'Randomization and blinding reduce bias in experiments'
          }
        ]
      }
    },
    {
      id: 'mcat-3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Core concept for Experimental Design:',
            options: ['Control group: baseline for comparison; Experimental group: ', 'Positive control: expected to produce a result (validates th', 'Not MCAT-relevant', 'Cannot be determined']
          },
          {
            label: 'MCAT application:',
            options: ['Randomization and blinding reduce bias in experiments', 'Skip this topic', 'Only on practice tests', 'Not applicable']
          }
        ],
        correctAnswers: ['Control group: baseline for comparison; Experimental group: ', 'Randomization and blinding reduce bias in experiments'],
        hint1: 'Think about experimental design',
        hint2: 'Consider the MCAT application',
        explanation: 'Control group: baseline for comparison; Experimental group: receives the treatment. Randomization and blinding reduce bias in experiments.'
      }
    }
  ]
}
