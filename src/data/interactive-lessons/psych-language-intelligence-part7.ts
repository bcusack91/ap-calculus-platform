export const psychLanguagePart7Data = {
  topicSlug: 'language-intelligence',
  sections: [
    {
      id: 'langu7-intro',
      type: 'text' as const,
      content: `
# ## Synthesis & AP Review

**Part 7 of 7 — Synthesis & AP Review**

### 1. Intelligence is complex and multifaceted

Intelligence is complex and multifaceted

### 2. Language and thought are interconnected

Language and thought are interconnected

### 3. Testing must be reliable, valid, and standardized

Testing must be reliable, valid, and standardized

### 4. AP exam

theory comparison questions
      `
    },
    {
      id: 'langu7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of synthesis & ap review?',
            options: [
              'Intelligence is complex and multifaceted',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Intelligence is complex and multifaceted'
          },
          {
            question: 'In the context of synthesis & ap review, which is accurate?',
            options: [
              'Testing must be reliable, valid, and standardized',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Testing must be reliable, valid, and standardized'
          }
        ]
      }
    },
    {
      id: 'langu7-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Intelligence is complex and multifaceted**
- **Language and thought are interconnected**
- **Testing must be reliable, valid, and standardized**
- **AP exam**: theory comparison questions
      `
    },
    {
      id: 'langu7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to synthesis & ap review?',
            options: [
              'theory comparison questions',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'AP exam: theory comparison questions'
          }
        ]
      }
    },
    {
      id: 'langu7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Intelligence is complex and multifaceted',
            options: ['Intelligence is complex and multifaceted', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Language and thought are interconnected',
            options: ['Language and thought are interconnected', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Testing must be reliable, valid, and standardized',
            options: ['Testing must be reliable, valid, and standardized', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['Intelligence is complex and multifaceted', 'Language and thought are interconnected', 'Testing must be reliable, valid, and standardized'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Synthesis & AP Review.'
      }
    }
  ]
}
