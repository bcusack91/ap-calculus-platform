export const mcatCarsReasonPart6Data = {
  topicSlug: 'mcat-cars-reasoning-mcat',
  sections: [
    {
      id: 'mcat-6-intro',
      type: 'text' as const,
      content: `
# Common Logical Fallacies

**Part 6 of 7 — Common Logical Fallacies**

Ad hominem: attacking the person instead of the argument.

Straw man: misrepresenting an opponents position to make it easier to attack.
      `
    },
    {
      id: 'mcat-6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes a key concept in common logical fallacies?',
            options: [
              'Ad hominem: attacking the person instead of the argument',
              'This topic is not tested on the MCAT',
              'This applies only to clinical practice, not the MCAT',
              'None of the above'
            ],
            correctAnswer: 0,
            explanation: 'Ad hominem: attacking the person instead of the argument'
          }
        ]
      }
    },
    {
      id: 'mcat-6-detail',
      type: 'text' as const,
      content: `
**Key Insight:** False dichotomy: presenting only two options when more exist.

**MCAT Tip:** Appeal to authority: citing an authority figure rather than evidence (can be valid or fallacious).
      `
    },
    {
      id: 'mcat-6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is an important principle for MCAT CARS related to common logical fallacies?',
            options: [
              'False dichotomy: presenting only two options when more exist',
              'Memorize without understanding — the MCAT only tests recall',
              'This concept is only relevant to graduate-level courses',
              'Skip this topic — it rarely appears on the MCAT'
            ],
            correctAnswer: 0,
            explanation: 'False dichotomy: presenting only two options when more exist'
          }
        ]
      }
    },
    {
      id: 'mcat-6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Ad hominem',
            options: ['misrepresenting an opponents position to make it easier to attack.', 'attacking the person instead of the argument.', 'Appeal to authority: citing an authority figure rather than evidence (can be valid or fallacious).', 'False dichotomy: presenting only two options when more exist.']
          },
          {
            label: 'Straw man',
            options: ['Appeal to authority: citing an authority figure rather than evidence (can be valid or fallacious).', 'misrepresenting an opponents position to make it easier to attack.', 'attacking the person instead of the argument.', 'False dichotomy: presenting only two options when more exist.']
          },
          {
            label: 'Key Insight',
            options: ['False dichotomy: presenting only two options when more exist.', 'attacking the person instead of the argument.', 'Appeal to authority: citing an authority figure rather than evidence (can be valid or fallacious).', 'misrepresenting an opponents position to make it easier to attack.']
          }
        ],
        correctAnswers: ['attacking the person instead of the argument.', 'misrepresenting an opponents position to make it easier to attack.', 'False dichotomy: presenting only two options when more exist.'],
        hint1: 'Think about what each concept specifically describes in Common Logical Fallacies.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Common Logical Fallacies describes a specific idea. Ad hominem: attacking the person instead of the argument. Straw man: misrepresenting an opponents position to make it easier to attack. Key Insight: False dichotomy: presenting only two options when more exist.'
      }
    }
  ]
}
