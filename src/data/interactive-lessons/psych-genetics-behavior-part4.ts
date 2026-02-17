export const psychGeneticsPart4Data = {
  topicSlug: 'genetics-behavior',
  sections: [
    {
      id: 'genet4-intro',
      type: 'text' as const,
      content: `
# ## Evolutionary Psychology

**Part 4 of 7 — Evolutionary Psychology**

### 1. Natural selection shaped behavioral tendencies

Natural selection shaped behavioral tendencies

### 2. Mate selection preferences (universal patterns)

Mate selection preferences (universal patterns)

### 3. Parental investment theory

Parental investment theory

### 4. Criticisms

just-so stories, difficult to test
      `
    },
    {
      id: 'genet4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Natural selection shaped behavioral…" refer to in psychology?',
            options: [
              'just-so stories, difficult to test',
              'Parental investment theory',
              'Mate selection preferences (universal patterns)',
              'Natural selection shaped behavioral tendencies'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Natural selection shaped behavioral tendencies. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Parental investment theory?',
            options: [
              'Parental investment theory',
              'just-so stories, difficult to test',
              'Mate selection preferences (universal patterns)',
              'Natural selection shaped behavioral tendencies'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Parental investment theory. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'genet4-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Natural selection shaped behavioral tendencies**
- **Mate selection preferences (universal patterns)**
- **Parental investment theory**
- **Criticisms**: just-so stories, difficult to test
      `
    },
    {
      id: 'genet4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to evolutionary psychology?',
            options: [
              'just-so stories, difficult to test',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Criticisms: just-so stories, difficult to test'
          }
        ]
      }
    },
    {
      id: 'genet4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Natural selection shaped behavioral…',
            options: ['Parental investment theory', 'just-so stories, difficult to test', 'Mate selection preferences (universal patterns)', 'Natural selection shaped behavioral tendencies']
          },
          {
            label: 'Mate selection preferences (universal…',
            options: ['Parental investment theory', 'Mate selection preferences (universal patterns)', 'just-so stories, difficult to test', 'Natural selection shaped behavioral tendencies']
          },
          {
            label: 'Parental investment theory',
            options: ['Mate selection preferences (universal patterns)', 'Natural selection shaped behavioral tendencies', 'just-so stories, difficult to test', 'Parental investment theory']
          }
        ],
        correctAnswers: ['Natural selection shaped behavioral tendencies', 'Mate selection preferences (universal patterns)', 'Parental investment theory'],
        hint1: 'Think about what each concept specifically describes in Evolutionary Psychology.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Evolutionary Psychology describes a specific idea. Natural selection shaped behavioral tendencies. Mate selection preferences (universal patterns). Parental investment theory.'
      }
    }
  ]
}
