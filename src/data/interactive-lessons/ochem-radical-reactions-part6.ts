export const oChemRadicalsPart6Data = {
  topicSlug: 'radical-reactions',
  sections: [
    {
      id: 'radic6-intro',
      type: 'text' as const,
      content: `
# Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

### 1. Drawing radical mechanisms

Drawing radical mechanisms

### 2. Predicting halogenation products and selectivity

Predicting halogenation products and selectivity

### 3. Comparing radical vs ionic pathways

Comparing radical vs ionic pathways

### 4. Analyzing BDE data

Analyzing BDE data
      `
    },
    {
      id: 'radic6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of problem-solving workshop?',
            options: [
              'Drawing radical mechanisms',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'Drawing radical mechanisms'
          },
          {
            question: 'In the context of problem-solving workshop, which is accurate?',
            options: [
              'Comparing radical vs ionic pathways',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Comparing radical vs ionic pathways'
          }
        ]
      }
    },
    {
      id: 'radic6-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Drawing radical mechanisms**
- **Predicting halogenation products and selectivity**
- **Comparing radical vs ionic pathways**
- **Analyzing BDE data**
      `
    },
    {
      id: 'radic6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to problem-solving workshop?',
            options: [
              'Analyzing BDE data',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Analyzing BDE data'
          }
        ]
      }
    },
    {
      id: 'radic6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Drawing radical mechanisms',
            options: ['Drawing radical mechanisms', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Predicting halogenation products and selectivity',
            options: ['Predicting halogenation products and selectivity', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Comparing radical vs ionic pathways',
            options: ['Comparing radical vs ionic pathways', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['Drawing radical mechanisms', 'Predicting halogenation products and selectivity', 'Comparing radical vs ionic pathways'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Problem-Solving Workshop.'
      }
    }
  ]
}
