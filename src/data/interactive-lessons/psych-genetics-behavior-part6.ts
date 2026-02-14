export const psychGeneticsPart6Data = {
  topicSlug: 'genetics-behavior',
  sections: [
    {
      id: 'genet6-intro',
      type: 'text' as const,
      content: `
# ## Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

### 1. Interpreting heritability statistics

Interpreting heritability statistics

### 2. Analyzing twin study data

Analyzing twin study data

### 3. Evaluating nature vs nurture arguments

Evaluating nature vs nurture arguments

### 4. Designing behavioral genetics studies

Designing behavioral genetics studies
      `
    },
    {
      id: 'genet6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of problem-solving workshop?',
            options: [
              'Interpreting heritability statistics',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Interpreting heritability statistics'
          },
          {
            question: 'In the context of problem-solving workshop, which is accurate?',
            options: [
              'Evaluating nature vs nurture arguments',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Evaluating nature vs nurture arguments'
          }
        ]
      }
    },
    {
      id: 'genet6-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Interpreting heritability statistics**
- **Analyzing twin study data**
- **Evaluating nature vs nurture arguments**
- **Designing behavioral genetics studies**
      `
    },
    {
      id: 'genet6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to problem-solving workshop?',
            options: [
              'Designing behavioral genetics studies',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Designing behavioral genetics studies'
          }
        ]
      }
    },
    {
      id: 'genet6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Interpreting heritability statistics',
            options: ['Interpreting heritability statistics', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Analyzing twin study data',
            options: ['Analyzing twin study data', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Evaluating nature vs nurture arguments',
            options: ['Evaluating nature vs nurture arguments', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['Interpreting heritability statistics', 'Analyzing twin study data', 'Evaluating nature vs nurture arguments'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Problem-Solving Workshop.'
      }
    }
  ]
}
