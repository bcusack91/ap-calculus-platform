export const psychAttitudesPart6Data = {
  topicSlug: 'attitudes-persuasion',
  sections: [
    {
      id: 'attit6-intro',
      type: 'text' as const,
      content: `
# ## Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

### 1. Analyzing cognitive dissonance scenarios

Analyzing cognitive dissonance scenarios

### 2. Identifying prejudice, discrimination, and stereotypes

Identifying prejudice, discrimination, and stereotypes

### 3. Evaluating aggression theories

Evaluating aggression theories

### 4. Predicting prosocial behavior

Predicting prosocial behavior
      `
    },
    {
      id: 'attit6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of problem-solving workshop?',
            options: [
              'Analyzing cognitive dissonance scenarios',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Analyzing cognitive dissonance scenarios'
          },
          {
            question: 'In the context of problem-solving workshop, which is accurate?',
            options: [
              'Evaluating aggression theories',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Evaluating aggression theories'
          }
        ]
      }
    },
    {
      id: 'attit6-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Analyzing cognitive dissonance scenarios**
- **Identifying prejudice, discrimination, and stereotypes**
- **Evaluating aggression theories**
- **Predicting prosocial behavior**
      `
    },
    {
      id: 'attit6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to problem-solving workshop?',
            options: [
              'Predicting prosocial behavior',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Predicting prosocial behavior'
          }
        ]
      }
    },
    {
      id: 'attit6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Analyzing cognitive dissonance scenarios',
            options: ['Analyzing cognitive dissonance scenarios', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Identifying prejudice, discrimination, and stereotypes',
            options: ['Identifying prejudice, discrimination, and stereot', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Evaluating aggression theories',
            options: ['Evaluating aggression theories', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['Analyzing cognitive dissonance scenarios', 'Identifying prejudice, discrimination, and stereot', 'Evaluating aggression theories'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Problem-Solving Workshop.'
      }
    }
  ]
}
