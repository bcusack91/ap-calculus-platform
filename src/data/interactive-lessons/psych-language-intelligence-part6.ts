export const psychLanguagePart6Data = {
  topicSlug: 'language-intelligence',
  sections: [
    {
      id: 'langu6-intro',
      type: 'text' as const,
      content: `
# ## Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

### 1. Analyzing intelligence test data

Analyzing intelligence test data

### 2. Evaluating multiple intelligence theories

Evaluating multiple intelligence theories

### 3. Identifying language development stages

Identifying language development stages

### 4. Applying linguistic relativity

Applying linguistic relativity
      `
    },
    {
      id: 'langu6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of problem-solving workshop?',
            options: [
              'Analyzing intelligence test data',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Analyzing intelligence test data'
          },
          {
            question: 'In the context of problem-solving workshop, which is accurate?',
            options: [
              'Identifying language development stages',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Identifying language development stages'
          }
        ]
      }
    },
    {
      id: 'langu6-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Analyzing intelligence test data**
- **Evaluating multiple intelligence theories**
- **Identifying language development stages**
- **Applying linguistic relativity**
      `
    },
    {
      id: 'langu6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to problem-solving workshop?',
            options: [
              'Applying linguistic relativity',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Applying linguistic relativity'
          }
        ]
      }
    },
    {
      id: 'langu6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Analyzing intelligence test data',
            options: ['Analyzing intelligence test data', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Evaluating multiple intelligence theories',
            options: ['Evaluating multiple intelligence theories', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Identifying language development stages',
            options: ['Identifying language development stages', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['Analyzing intelligence test data', 'Evaluating multiple intelligence theories', 'Identifying language development stages'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Problem-Solving Workshop.'
      }
    }
  ]
}
