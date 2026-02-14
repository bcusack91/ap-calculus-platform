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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of evolutionary psychology?',
            options: [
              'Natural selection shaped behavioral tendencies',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Natural selection shaped behavioral tendencies'
          },
          {
            question: 'In the context of evolutionary psychology, which is accurate?',
            options: [
              'Parental investment theory',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Parental investment theory'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Natural selection shaped behavioral tendencies',
            options: ['Natural selection shaped behavioral tendencies', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Mate selection preferences (universal patterns)',
            options: ['Mate selection preferences (universal patterns)', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Parental investment theory',
            options: ['Parental investment theory', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['Natural selection shaped behavioral tendencies', 'Mate selection preferences (universal patterns)', 'Parental investment theory'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Evolutionary Psychology.'
      }
    }
  ]
}
