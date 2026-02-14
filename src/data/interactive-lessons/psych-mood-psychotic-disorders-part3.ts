export const psychMoodPsychPart3Data = {
  topicSlug: 'mood-psychotic-disorders',
  sections: [
    {
      id: 'mood-3-intro',
      type: 'text' as const,
      content: `
# ## Suicide Prevention

**Part 3 of 7 — Suicide Prevention**

### 1. Warning signs

talking about death, giving away possessions, withdrawal

### 2. Risk factors

depression, substance abuse, previous attempts

### 3. Protective factors

social support, treatment, sense of purpose

### 4. Crisis resources

988 Suicide & Crisis Lifeline
      `
    },
    {
      id: 'mood-3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of suicide prevention?',
            options: [
              'Warning signs',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Warning signs: talking about death, giving away possessions, withdrawal'
          },
          {
            question: 'In the context of suicide prevention, which is accurate?',
            options: [
              'social support, treatment, sense of purpose',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Protective factors: social support, treatment, sense of purpose'
          }
        ]
      }
    },
    {
      id: 'mood-3-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Warning signs**: talking about death, giving away possessions, withdrawal
- **Risk factors**: depression, substance abuse, previous attempts
- **Protective factors**: social support, treatment, sense of purpose
- **Crisis resources**: 988 Suicide & Crisis Lifeline
      `
    },
    {
      id: 'mood-3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to suicide prevention?',
            options: [
              '988 Suicide & Crisis Lifeline',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Crisis resources: 988 Suicide & Crisis Lifeline'
          }
        ]
      }
    },
    {
      id: 'mood-3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Warning signs',
            options: ['talking about death, giving away possessions, with', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Risk factors',
            options: ['depression, substance abuse, previous attempts', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Protective factors',
            options: ['social support, treatment, sense of purpose', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['talking about death, giving away possessions, with', 'depression, substance abuse, previous attempts', 'social support, treatment, sense of purpose'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Suicide Prevention.'
      }
    }
  ]
}
