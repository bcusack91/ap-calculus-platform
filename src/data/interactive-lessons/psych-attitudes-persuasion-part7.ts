export const psychAttitudesPart7Data = {
  topicSlug: 'attitudes-persuasion',
  sections: [
    {
      id: 'attit7-intro',
      type: 'text' as const,
      content: `
# ## Synthesis & AP Review

**Part 7 of 7 — Synthesis & AP Review**

### 1. Attitudes and behavior influence each other

Attitudes and behavior influence each other

### 2. Prejudice can be reduced through contact

Prejudice can be reduced through contact

### 3. Situational factors affect helping behavior

Situational factors affect helping behavior

### 4. AP exam

social psychology applications
      `
    },
    {
      id: 'attit7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Attitudes and behavior influence each…" refer to in psychology?',
            options: [
              'Situational factors affect helping behavior',
              'Prejudice can be reduced through contact',
              'social psychology applications',
              'Attitudes and behavior influence each other'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Attitudes and behavior influence each other. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Situational factors affect helping…?',
            options: [
              'social psychology applications',
              'Attitudes and behavior influence each other',
              'Situational factors affect helping behavior',
              'Prejudice can be reduced through contact'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Situational factors affect helping behavior. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'attit7-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Attitudes and behavior influence each other**
- **Prejudice can be reduced through contact**
- **Situational factors affect helping behavior**
- **AP exam**: social psychology applications
      `
    },
    {
      id: 'attit7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to synthesis & ap review?',
            options: [
              'social psychology applications',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'AP exam: social psychology applications'
          }
        ]
      }
    },
    {
      id: 'attit7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Attitudes and behavior influence each…',
            options: ['Attitudes and behavior influence each other', 'social psychology applications', 'Prejudice can be reduced through contact', 'Situational factors affect helping behavior']
          },
          {
            label: 'Prejudice can be reduced through contact',
            options: ['social psychology applications', 'Prejudice can be reduced through contact', 'Situational factors affect helping behavior', 'Attitudes and behavior influence each other']
          },
          {
            label: 'Situational factors affect helping…',
            options: ['social psychology applications', 'Attitudes and behavior influence each other', 'Situational factors affect helping behavior', 'Prejudice can be reduced through contact']
          }
        ],
        correctAnswers: ['Attitudes and behavior influence each other', 'Prejudice can be reduced through contact', 'Situational factors affect helping behavior'],
        hint1: 'Think about what each concept specifically describes in Synthesis & AP Review.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Synthesis & AP Review describes a specific idea. Attitudes and behavior influence each other. Prejudice can be reduced through contact. Situational factors affect helping behavior.'
      }
    }
  ]
}
