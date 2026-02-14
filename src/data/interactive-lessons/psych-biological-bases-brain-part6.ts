export const psychBrainPart6Data = {
  topicSlug: 'biological-bases-brain',
  sections: [
    {
      id: 'biolo6-intro',
      type: 'text' as const,
      content: `
# ## Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

### 1. Identifying brain regions from symptoms

Identifying brain regions from symptoms

### 2. Matching neurotransmitters to functions

Matching neurotransmitters to functions

### 3. Analyzing brain imaging results

Analyzing brain imaging results

### 4. Predicting effects of brain damage

Predicting effects of brain damage
      `
    },
    {
      id: 'biolo6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of problem-solving workshop?',
            options: [
              'Identifying brain regions from symptoms',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Identifying brain regions from symptoms'
          },
          {
            question: 'In the context of problem-solving workshop, which is accurate?',
            options: [
              'Analyzing brain imaging results',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Analyzing brain imaging results'
          }
        ]
      }
    },
    {
      id: 'biolo6-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Identifying brain regions from symptoms**
- **Matching neurotransmitters to functions**
- **Analyzing brain imaging results**
- **Predicting effects of brain damage**
      `
    },
    {
      id: 'biolo6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to problem-solving workshop?',
            options: [
              'Predicting effects of brain damage',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Predicting effects of brain damage'
          }
        ]
      }
    },
    {
      id: 'biolo6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Identifying brain regions from symptoms',
            options: ['Identifying brain regions from symptoms', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Matching neurotransmitters to functions',
            options: ['Matching neurotransmitters to functions', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Analyzing brain imaging results',
            options: ['Analyzing brain imaging results', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['Identifying brain regions from symptoms', 'Matching neurotransmitters to functions', 'Analyzing brain imaging results'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Problem-Solving Workshop.'
      }
    }
  ]
}
