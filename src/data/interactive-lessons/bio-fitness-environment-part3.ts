export const bioFitnessPart3Data = {
  topicSlug: 'fitness-environment',
  sections: [
    {
      id: 'fitn3-intro-p3',
      type: 'text' as const,
      content: `
# ## Acclimation & Adaptation

**Part 3 of 7 — Acclimation & Adaptation**

1. Acclimation: short-term physiological adjustment (not genetic)
2. Adaptation: genetic change over generations
3. Acclimatization vs adaptation timescales
4. Examples: altitude acclimation, arctic fur color change
      `
    },
    {
      id: 'fitn3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Acclimation?',
            options: [
              'altitude acclimation, arctic fur color change',
              'genetic change over generations',
              'short-term physiological adjustment (not genetic)',
              'Acclimatization vs adaptation timescales'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Acclimation: short-term physiological adjustment (not genetic). The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Acclimatization vs adaptation timescales:',
            options: [
              'short-term physiological adjustment (not genetic)',
              'altitude acclimation, arctic fur color change',
              'genetic change over generations',
              'Acclimatization vs adaptation timescales'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Acclimatization vs adaptation timescales. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'fitn3-detail-p3',
      type: 'text' as const,
      content: `
# ### Key Details

- **Acclimation**: short-term physiological adjustment (not genetic)
- **Adaptation**: genetic change over generations
- **Acclimatization vs adaptation timescales**
- **Examples**: altitude acclimation, arctic fur color change
      `
    },
    {
      id: 'fitn3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about Examples is correct?',
            options: [
              'Acclimatization vs adaptation timescales',
              'genetic change over generations',
              'short-term physiological adjustment (not genetic)',
              'altitude acclimation, arctic fur color change'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Examples: altitude acclimation, arctic fur color change. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'fitn3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Acclimation',
            options: ['short-term physiological adjustment (not genetic)', 'altitude acclimation, arctic fur color change', 'Acclimatization vs adaptation timescales', 'genetic change over generations']
          },
          {
            label: 'Adaptation',
            options: ['short-term physiological adjustment (not genetic)', 'Acclimatization vs adaptation timescales', 'genetic change over generations', 'altitude acclimation, arctic fur color change']
          },
          {
            label: 'Examples',
            options: ['altitude acclimation, arctic fur color change', 'genetic change over generations', 'short-term physiological adjustment (not genetic)', 'Acclimatization vs adaptation timescales']
          }
        ],
        correctAnswers: ['short-term physiological adjustment (not genetic)', 'genetic change over generations', 'altitude acclimation, arctic fur color change'],
        hint1: 'Think about what each concept specifically describes in Acclimation & Adaptation.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Acclimation & Adaptation describes a specific idea. Acclimation: short-term physiological adjustment (not genetic). Adaptation: genetic change over generations. Examples: altitude acclimation, arctic fur color change.'
      }
    }
  ]
}
