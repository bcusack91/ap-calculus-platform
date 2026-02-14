export const psychMoodPsychPart6Data = {
  topicSlug: 'mood-psychotic-disorders',
  sections: [
    {
      id: 'mood-6-intro',
      type: 'text' as const,
      content: `
# ## Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

### 1. Differentiating mood disorders

Differentiating mood disorders

### 2. Identifying schizophrenia symptoms

Identifying schizophrenia symptoms

### 3. Analyzing neurotransmitter involvement

Analyzing neurotransmitter involvement

### 4. Evaluating diagnostic criteria

Evaluating diagnostic criteria
      `
    },
    {
      id: 'mood-6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of problem-solving workshop?',
            options: [
              'Differentiating mood disorders',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Differentiating mood disorders'
          },
          {
            question: 'In the context of problem-solving workshop, which is accurate?',
            options: [
              'Analyzing neurotransmitter involvement',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Analyzing neurotransmitter involvement'
          }
        ]
      }
    },
    {
      id: 'mood-6-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Differentiating mood disorders**
- **Identifying schizophrenia symptoms**
- **Analyzing neurotransmitter involvement**
- **Evaluating diagnostic criteria**
      `
    },
    {
      id: 'mood-6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to problem-solving workshop?',
            options: [
              'Evaluating diagnostic criteria',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Evaluating diagnostic criteria'
          }
        ]
      }
    },
    {
      id: 'mood-6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Differentiating mood disorders',
            options: ['Differentiating mood disorders', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Identifying schizophrenia symptoms',
            options: ['Identifying schizophrenia symptoms', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Analyzing neurotransmitter involvement',
            options: ['Analyzing neurotransmitter involvement', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['Differentiating mood disorders', 'Identifying schizophrenia symptoms', 'Analyzing neurotransmitter involvement'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Problem-Solving Workshop.'
      }
    }
  ]
}
