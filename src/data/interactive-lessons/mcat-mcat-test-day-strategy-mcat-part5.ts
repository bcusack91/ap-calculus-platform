export const mcatTestDayPart5Data = {
  topicSlug: 'mcat-test-day-strategy-mcat',
  sections: [
    {
      id: 'mcat-5-intro',
      type: 'text' as const,
      content: `
# Test Day Preparation

**Part 5 of 7 — Test Day Preparation**

Week before: light review, no new material, focus on rest and confidence.

Night before: prepare materials, set alarms, get 8+ hours of sleep.
      `
    },
    {
      id: 'mcat-5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes a key concept in test day preparation?',
            options: [
              'Week before: light review, no new material, focus on rest and confidence',
              'This topic is not tested on the MCAT',
              'This applies only to clinical practice, not the MCAT',
              'None of the above'
            ],
            correctAnswer: 0,
            explanation: 'Week before: light review, no new material, focus on rest and confidence'
          }
        ]
      }
    },
    {
      id: 'mcat-5-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Bring: valid ID, confirmation email, snacks/drinks for breaks, layers for temperature.

**MCAT Tip:** During breaks: eat, hydrate, stretch, use the restroom — do NOT review material.
      `
    },
    {
      id: 'mcat-5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is an important principle for MCAT Strategy related to test day preparation?',
            options: [
              'Bring: valid ID, confirmation email, snacks/drinks for breaks, layers for temperature',
              'Memorize without understanding — the MCAT only tests recall',
              'This concept is only relevant to graduate-level courses',
              'Skip this topic — it rarely appears on the MCAT'
            ],
            correctAnswer: 0,
            explanation: 'Bring: valid ID, confirmation email, snacks/drinks for breaks, layers for temperature'
          }
        ]
      }
    },
    {
      id: 'mcat-5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Core concept for Test Day Preparation:',
            options: ['Week before: light review, no new material, focus on rest an', 'Night before: prepare materials, set alarms, get 8+ hours of', 'Not MCAT-relevant', 'Cannot be determined']
          },
          {
            label: 'MCAT application:',
            options: ['Bring: valid ID, confirmation email, snacks/drinks for break', 'Skip this topic', 'Only on practice tests', 'Not applicable']
          }
        ],
        correctAnswers: ['Week before: light review, no new material, focus on rest an', 'Bring: valid ID, confirmation email, snacks/drinks for break'],
        hint1: 'Think about test day preparation',
        hint2: 'Consider the MCAT application',
        explanation: 'Week before: light review, no new material, focus on rest and confidence. Bring: valid ID, confirmation email, snacks/drinks for breaks, layers for temperature.'
      }
    }
  ]
}
