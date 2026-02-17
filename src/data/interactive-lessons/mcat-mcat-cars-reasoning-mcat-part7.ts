export const mcatCarsReasonPart7Data = {
  topicSlug: 'mcat-cars-reasoning-mcat',
  sections: [
    {
      id: 'mcat-7-intro',
      type: 'text' as const,
      content: `
# Review & MCAT Practice

**Part 7 of 7 — Review & MCAT Practice**

Ad hominem: attacking the person instead of the argument.

Straw man: misrepresenting an opponents position to make it easier to attack.
      `
    },
    {
      id: 'mcat-7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes a key concept in review & mcat practice?',
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
      id: 'mcat-7-detail',
      type: 'text' as const,
      content: `
**Key Insight:** False dichotomy: presenting only two options when more exist.

**MCAT Tip:** Appeal to authority: citing an authority figure rather than evidence (can be valid or fallacious).
      `
    },
    {
      id: 'mcat-7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is an important principle for MCAT CARS related to review & mcat practice?',
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
      id: 'mcat-7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Ad hominem',
            options: ['False dichotomy: presenting only two options when more exist.', 'misrepresenting an opponents position to make it easier to attack.', 'attacking the person instead of the argument.', 'Appeal to authority: citing an authority figure rather than evidence (can be valid or fallacious).']
          },
          {
            label: 'Straw man',
            options: ['misrepresenting an opponents position to make it easier to attack.', 'False dichotomy: presenting only two options when more exist.', 'attacking the person instead of the argument.', 'Appeal to authority: citing an authority figure rather than evidence (can be valid or fallacious).']
          },
          {
            label: 'Key Insight',
            options: ['misrepresenting an opponents position to make it easier to attack.', 'attacking the person instead of the argument.', 'Appeal to authority: citing an authority figure rather than evidence (can be valid or fallacious).', 'False dichotomy: presenting only two options when more exist.']
          }
        ],
        correctAnswers: ['attacking the person instead of the argument.', 'misrepresenting an opponents position to make it easier to attack.', 'False dichotomy: presenting only two options when more exist.'],
        hint1: 'Think about what each concept specifically describes in Review & MCAT Practice.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Review & MCAT Practice describes a specific idea. Ad hominem: attacking the person instead of the argument. Straw man: misrepresenting an opponents position to make it easier to attack. Key Insight: False dichotomy: presenting only two options when more exist.'
      }
    }
  ]
}
