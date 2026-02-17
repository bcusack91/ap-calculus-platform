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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Warning signs" refer to in psychology?',
            options: [
              'depression, substance abuse, previous attempts',
              'social support, treatment, sense of purpose',
              '988 Suicide & Crisis Lifeline',
              'talking about death, giving away possessions, withdrawal'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Warning signs: talking about death, giving away possessions, withdrawal. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Protective factors:',
            options: [
              '988 Suicide & Crisis Lifeline',
              'depression, substance abuse, previous attempts',
              'talking about death, giving away possessions, withdrawal',
              'social support, treatment, sense of purpose'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Protective factors: social support, treatment, sense of purpose. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Warning signs',
            options: ['talking about death, giving away possessions, withdrawal', 'social support, treatment, sense of purpose', 'depression, substance abuse, previous attempts', '988 Suicide & Crisis Lifeline']
          },
          {
            label: 'Risk factors',
            options: ['talking about death, giving away possessions, withdrawal', 'social support, treatment, sense of purpose', '988 Suicide & Crisis Lifeline', 'depression, substance abuse, previous attempts']
          },
          {
            label: 'Protective factors',
            options: ['988 Suicide & Crisis Lifeline', 'depression, substance abuse, previous attempts', 'social support, treatment, sense of purpose', 'talking about death, giving away possessions, withdrawal']
          }
        ],
        correctAnswers: ['talking about death, giving away possessions, withdrawal', 'depression, substance abuse, previous attempts', 'social support, treatment, sense of purpose'],
        hint1: 'Think about what each concept specifically describes in Suicide Prevention.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Suicide Prevention describes a specific idea. Warning signs: talking about death, giving away possessions, withdrawal. Risk factors: depression, substance abuse, previous attempts. Protective factors: social support, treatment, sense of purpose.'
      }
    }
  ]
}
