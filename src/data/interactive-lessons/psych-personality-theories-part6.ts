export const psychPersonalityPart6Data = {
  topicSlug: 'personality-theories',
  sections: [
    {
      id: 'perso6-intro',
      type: 'text' as const,
      content: `
# ## Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

### 1. Comparing personality perspectives

Comparing personality perspectives

### 2. Identifying defense mechanisms in scenarios

Identifying defense mechanisms in scenarios

### 3. Evaluating personality assessments

Evaluating personality assessments

### 4. Applying social-cognitive theory

Applying social-cognitive theory
      `
    },
    {
      id: 'perso6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of problem-solving workshop?',
            options: [
              'Comparing personality perspectives',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Comparing personality perspectives'
          },
          {
            question: 'In the context of problem-solving workshop, which is accurate?',
            options: [
              'Evaluating personality assessments',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Evaluating personality assessments'
          }
        ]
      }
    },
    {
      id: 'perso6-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Comparing personality perspectives**
- **Identifying defense mechanisms in scenarios**
- **Evaluating personality assessments**
- **Applying social-cognitive theory**
      `
    },
    {
      id: 'perso6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to problem-solving workshop?',
            options: [
              'Applying social-cognitive theory',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Applying social-cognitive theory'
          }
        ]
      }
    },
    {
      id: 'perso6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Comparing personality perspectives',
            options: ['Comparing personality perspectives', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Identifying defense mechanisms in scenarios',
            options: ['Identifying defense mechanisms in scenarios', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Evaluating personality assessments',
            options: ['Evaluating personality assessments', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['Comparing personality perspectives', 'Identifying defense mechanisms in scenarios', 'Evaluating personality assessments'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Problem-Solving Workshop.'
      }
    }
  ]
}
