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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Week before',
            options: ['During breaks: eat, hydrate, stretch, use the restroom — do NOT review material.', 'light review, no new material, focus on rest and confidence.', 'prepare materials, set alarms, get 8+ hours of sleep.', 'Bring: valid ID, confirmation email, snacks/drinks for breaks, layers for temperature.']
          },
          {
            label: 'Night before',
            options: ['Bring: valid ID, confirmation email, snacks/drinks for breaks, layers for temperature.', 'light review, no new material, focus on rest and confidence.', 'During breaks: eat, hydrate, stretch, use the restroom — do NOT review material.', 'prepare materials, set alarms, get 8+ hours of sleep.']
          },
          {
            label: 'Key Insight',
            options: ['light review, no new material, focus on rest and confidence.', 'During breaks: eat, hydrate, stretch, use the restroom — do NOT review material.', 'prepare materials, set alarms, get 8+ hours of sleep.', 'Bring: valid ID, confirmation email, snacks/drinks for breaks, layers for temperature.']
          }
        ],
        correctAnswers: ['light review, no new material, focus on rest and confidence.', 'prepare materials, set alarms, get 8+ hours of sleep.', 'Bring: valid ID, confirmation email, snacks/drinks for breaks, layers for temperature.'],
        hint1: 'Think about what each concept specifically describes in Test Day Preparation.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Test Day Preparation describes a specific idea. Week before: light review, no new material, focus on rest and confidence. Night before: prepare materials, set alarms, get 8+ hours of sleep. Key Insight: Bring: valid ID, confirmation email, snacks/drinks for breaks, layers for temperature.'
      }
    }
  ]
}
