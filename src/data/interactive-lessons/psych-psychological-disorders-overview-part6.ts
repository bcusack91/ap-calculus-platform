export const psychDisordersPart6Data = {
  topicSlug: 'psychological-disorders-overview',
  sections: [
    {
      id: 'psych6-intro',
      type: 'text' as const,
      content: `
# ## Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

### 1. Identifying disorders from case descriptions

Identifying disorders from case descriptions

### 2. Distinguishing normal anxiety from disorders

Distinguishing normal anxiety from disorders

### 3. Applying the biopsychosocial model

Applying the biopsychosocial model

### 4. Evaluating diagnostic approaches

Evaluating diagnostic approaches
      `
    },
    {
      id: 'psych6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of problem-solving workshop?',
            options: [
              'Identifying disorders from case descriptions',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Identifying disorders from case descriptions'
          },
          {
            question: 'In the context of problem-solving workshop, which is accurate?',
            options: [
              'Applying the biopsychosocial model',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Applying the biopsychosocial model'
          }
        ]
      }
    },
    {
      id: 'psych6-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Identifying disorders from case descriptions**
- **Distinguishing normal anxiety from disorders**
- **Applying the biopsychosocial model**
- **Evaluating diagnostic approaches**
      `
    },
    {
      id: 'psych6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to problem-solving workshop?',
            options: [
              'Evaluating diagnostic approaches',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Evaluating diagnostic approaches'
          }
        ]
      }
    },
    {
      id: 'psych6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Identifying disorders from case descriptions',
            options: ['Identifying disorders from case descriptions', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Distinguishing normal anxiety from disorders',
            options: ['Distinguishing normal anxiety from disorders', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Applying the biopsychosocial model',
            options: ['Applying the biopsychosocial model', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['Identifying disorders from case descriptions', 'Distinguishing normal anxiety from disorders', 'Applying the biopsychosocial model'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Problem-Solving Workshop.'
      }
    }
  ]
}
