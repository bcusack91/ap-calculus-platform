export const psychMotivationPart7Data = {
  topicSlug: 'motivation-theories',
  sections: [
    {
      id: 'motiv7-intro',
      type: 'text' as const,
      content: `
# ## Synthesis & AP Review

**Part 7 of 7 — Synthesis & AP Review**

### 1. No single theory explains all motivation

No single theory explains all motivation

### 2. Biology and psychology both contribute

Biology and psychology both contribute

### 3. Motivation connects to emotion and personality

Motivation connects to emotion and personality

### 4. AP exam

motivation theory applications
      `
    },
    {
      id: 'motiv7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "No single theory explains all motivation" refer to in psychology?',
            options: [
              'No single theory explains all motivation',
              'Motivation connects to emotion and personality',
              'Biology and psychology both contribute',
              'motivation theory applications'
            ],
            correctAnswer: 0,
            explanation: 'Correct — No single theory explains all motivation. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Motivation connects to emotion and…:',
            options: [
              'Biology and psychology both contribute',
              'Motivation connects to emotion and personality',
              'No single theory explains all motivation',
              'motivation theory applications'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Motivation connects to emotion and personality. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'motiv7-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **No single theory explains all motivation**
- **Biology and psychology both contribute**
- **Motivation connects to emotion and personality**
- **AP exam**: motivation theory applications
      `
    },
    {
      id: 'motiv7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to synthesis & ap review?',
            options: [
              'motivation theory applications',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'AP exam: motivation theory applications'
          }
        ]
      }
    },
    {
      id: 'motiv7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'No single theory explains all motivation',
            options: ['Biology and psychology both contribute', 'Motivation connects to emotion and personality', 'motivation theory applications', 'No single theory explains all motivation']
          },
          {
            label: 'Biology and psychology both contribute',
            options: ['Motivation connects to emotion and personality', 'motivation theory applications', 'Biology and psychology both contribute', 'No single theory explains all motivation']
          },
          {
            label: 'Motivation connects to emotion and…',
            options: ['Motivation connects to emotion and personality', 'motivation theory applications', 'Biology and psychology both contribute', 'No single theory explains all motivation']
          }
        ],
        correctAnswers: ['No single theory explains all motivation', 'Biology and psychology both contribute', 'Motivation connects to emotion and personality'],
        hint1: 'Think about what each concept specifically describes in Synthesis & AP Review.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Synthesis & AP Review describes a specific idea. No single theory explains all motivation. Biology and psychology both contribute. Motivation connects to emotion and personality.'
      }
    }
  ]
}
