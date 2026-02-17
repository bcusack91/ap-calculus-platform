export const psychGroupPart7Data = {
  topicSlug: 'group-behavior-prejudice',
  sections: [
    {
      id: 'group7-intro',
      type: 'text' as const,
      content: `
# ## Synthesis & AP Review

**Part 7 of 7 — Synthesis & AP Review**

### 1. Group membership shapes identity and behavior

Group membership shapes identity and behavior

### 2. Prejudice can be reduced through structured contact

Prejudice can be reduced through structured contact

### 3. Culture influences psychological processes

Culture influences psychological processes

### 4. AP exam

social psychology research studies
      `
    },
    {
      id: 'group7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Group membership shapes identity and…?',
            options: [
              'Group membership shapes identity and behavior',
              'Prejudice can be reduced through structured contact',
              'Culture influences psychological processes',
              'social psychology research studies'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Group membership shapes identity and behavior. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Synthesis & AP Review, which explains Culture influences psychological…?',
            options: [
              'Culture influences psychological processes',
              'Group membership shapes identity and behavior',
              'social psychology research studies',
              'Prejudice can be reduced through structured contact'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Culture influences psychological processes. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'group7-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Group membership shapes identity and behavior**
- **Prejudice can be reduced through structured contact**
- **Culture influences psychological processes**
- **AP exam**: social psychology research studies
      `
    },
    {
      id: 'group7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to synthesis & ap review?',
            options: [
              'social psychology research studies',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'AP exam: social psychology research studies'
          }
        ]
      }
    },
    {
      id: 'group7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Group membership shapes identity and…',
            options: ['social psychology research studies', 'Prejudice can be reduced through structured contact', 'Group membership shapes identity and behavior', 'Culture influences psychological processes']
          },
          {
            label: 'Prejudice can be reduced through…',
            options: ['Prejudice can be reduced through structured contact', 'social psychology research studies', 'Group membership shapes identity and behavior', 'Culture influences psychological processes']
          },
          {
            label: 'Culture influences psychological…',
            options: ['social psychology research studies', 'Prejudice can be reduced through structured contact', 'Group membership shapes identity and behavior', 'Culture influences psychological processes']
          }
        ],
        correctAnswers: ['Group membership shapes identity and behavior', 'Prejudice can be reduced through structured contact', 'Culture influences psychological processes'],
        hint1: 'Think about what each concept specifically describes in Synthesis & AP Review.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Synthesis & AP Review describes a specific idea. Group membership shapes identity and behavior. Prejudice can be reduced through structured contact. Culture influences psychological processes.'
      }
    }
  ]
}
