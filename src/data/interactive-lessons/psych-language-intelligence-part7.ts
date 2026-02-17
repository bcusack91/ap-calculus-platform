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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Intelligence is complex and multifaceted?',
            options: [
              'Language and thought are interconnected',
              'Intelligence is complex and multifaceted',
              'Testing must be reliable, valid, and standardized',
              'theory comparison questions'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Intelligence is complex and multifaceted. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Synthesis & AP Review, which explains Testing must be reliable, valid, and…?',
            options: [
              'Language and thought are interconnected',
              'theory comparison questions',
              'Testing must be reliable, valid, and standardized',
              'Intelligence is complex and multifaceted'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Testing must be reliable, valid, and standardized. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Intelligence is complex and multifaceted',
            options: ['Language and thought are interconnected', 'Testing must be reliable, valid, and standardized', 'Intelligence is complex and multifaceted', 'theory comparison questions']
          },
          {
            label: 'Language and thought are interconnected',
            options: ['Language and thought are interconnected', 'Intelligence is complex and multifaceted', 'Testing must be reliable, valid, and standardized', 'theory comparison questions']
          },
          {
            label: 'Testing must be reliable, valid, and…',
            options: ['Intelligence is complex and multifaceted', 'Testing must be reliable, valid, and standardized', 'Language and thought are interconnected', 'theory comparison questions']
          }
        ],
        correctAnswers: ['Intelligence is complex and multifaceted', 'Language and thought are interconnected', 'Testing must be reliable, valid, and standardized'],
        hint1: 'Think about what each concept specifically describes in Synthesis & AP Review.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Synthesis & AP Review describes a specific idea. Intelligence is complex and multifaceted. Language and thought are interconnected. Testing must be reliable, valid, and standardized.'
      }
    }
  ]
}
