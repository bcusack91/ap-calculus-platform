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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Interpreting heritability statistics?',
            options: [
              'Designing behavioral genetics studies',
              'Interpreting heritability statistics',
              'Evaluating nature vs nurture arguments',
              'Analyzing twin study data'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Interpreting heritability statistics. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Evaluating nature vs nurture arguments?',
            options: [
              'Evaluating nature vs nurture arguments',
              'Interpreting heritability statistics',
              'Analyzing twin study data',
              'Designing behavioral genetics studies'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Evaluating nature vs nurture arguments. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Interpreting heritability statistics',
            options: ['Interpreting heritability statistics', 'Evaluating nature vs nurture arguments', 'Designing behavioral genetics studies', 'Analyzing twin study data']
          },
          {
            label: 'Analyzing twin study data',
            options: ['Interpreting heritability statistics', 'Designing behavioral genetics studies', 'Analyzing twin study data', 'Evaluating nature vs nurture arguments']
          },
          {
            label: 'Evaluating nature vs nurture arguments',
            options: ['Evaluating nature vs nurture arguments', 'Designing behavioral genetics studies', 'Analyzing twin study data', 'Interpreting heritability statistics']
          }
        ],
        correctAnswers: ['Interpreting heritability statistics', 'Analyzing twin study data', 'Evaluating nature vs nurture arguments'],
        hint1: 'Think about what each concept specifically describes in Problem-Solving Workshop.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Problem-Solving Workshop describes a specific idea. Interpreting heritability statistics. Analyzing twin study data. Evaluating nature vs nurture arguments.'
      }
    }
  ]
}
