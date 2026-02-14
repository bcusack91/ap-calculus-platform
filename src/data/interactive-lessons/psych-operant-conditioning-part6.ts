export const psychOperantPart6Data = {
  topicSlug: 'operant-conditioning',
  sections: [
    {
      id: 'opera6-intro',
      type: 'text' as const,
      content: `
# ## Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

### 1. Classifying reinforcement and punishment scenarios

Classifying reinforcement and punishment scenarios

### 2. Identifying schedules of reinforcement

Identifying schedules of reinforcement

### 3. Comparing classical and operant conditioning

Comparing classical and operant conditioning

### 4. Designing behavior modification plans

Designing behavior modification plans
      `
    },
    {
      id: 'opera6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of problem-solving workshop?',
            options: [
              'Classifying reinforcement and punishment scenarios',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Classifying reinforcement and punishment scenarios'
          },
          {
            question: 'In the context of problem-solving workshop, which is accurate?',
            options: [
              'Comparing classical and operant conditioning',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Comparing classical and operant conditioning'
          }
        ]
      }
    },
    {
      id: 'opera6-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Classifying reinforcement and punishment scenarios**
- **Identifying schedules of reinforcement**
- **Comparing classical and operant conditioning**
- **Designing behavior modification plans**
      `
    },
    {
      id: 'opera6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to problem-solving workshop?',
            options: [
              'Designing behavior modification plans',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Designing behavior modification plans'
          }
        ]
      }
    },
    {
      id: 'opera6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Classifying reinforcement and punishment scenarios',
            options: ['Classifying reinforcement and punishment scenarios', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Identifying schedules of reinforcement',
            options: ['Identifying schedules of reinforcement', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Comparing classical and operant conditioning',
            options: ['Comparing classical and operant conditioning', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['Classifying reinforcement and punishment scenarios', 'Identifying schedules of reinforcement', 'Comparing classical and operant conditioning'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Problem-Solving Workshop.'
      }
    }
  ]
}
