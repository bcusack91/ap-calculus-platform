export const oChemEnolatePart6Data = {
  topicSlug: 'enolate-chemistry',
  sections: [
    {
      id: 'enola6-intro',
      type: 'text' as const,
      content: `
# Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

### 1. Predicting aldol and Claisen products

Predicting aldol and Claisen products

### 2. Designing enolate-based syntheses

Designing enolate-based syntheses

### 3. Analyzing crossed reactions for selectivity

Analyzing crossed reactions for selectivity

### 4. Retrosynthetic analysis of ring systems

Retrosynthetic analysis of ring systems
      `
    },
    {
      id: 'enola6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of problem-solving workshop?',
            options: [
              'Predicting aldol and Claisen products',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'Predicting aldol and Claisen products'
          },
          {
            question: 'In the context of problem-solving workshop, which is accurate?',
            options: [
              'Analyzing crossed reactions for selectivity',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Analyzing crossed reactions for selectivity'
          }
        ]
      }
    },
    {
      id: 'enola6-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Predicting aldol and Claisen products**
- **Designing enolate-based syntheses**
- **Analyzing crossed reactions for selectivity**
- **Retrosynthetic analysis of ring systems**
      `
    },
    {
      id: 'enola6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to problem-solving workshop?',
            options: [
              'Retrosynthetic analysis of ring systems',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Retrosynthetic analysis of ring systems'
          }
        ]
      }
    },
    {
      id: 'enola6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Predicting aldol and Claisen products',
            options: ['Predicting aldol and Claisen products', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Designing enolate-based syntheses',
            options: ['Designing enolate-based syntheses', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Analyzing crossed reactions for selectivity',
            options: ['Analyzing crossed reactions for selectivity', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['Predicting aldol and Claisen products', 'Designing enolate-based syntheses', 'Analyzing crossed reactions for selectivity'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Problem-Solving Workshop.'
      }
    }
  ]
}
