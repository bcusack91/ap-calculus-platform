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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Predicting aldol and Claisen products?',
            options: [
              'Designing enolate-based syntheses',
              'Analyzing crossed reactions for selectivity',
              'Predicting aldol and Claisen products',
              'Retrosynthetic analysis of ring systems'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Predicting aldol and Claisen products. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Analyzing crossed reactions for…?',
            options: [
              'Predicting aldol and Claisen products',
              'Analyzing crossed reactions for selectivity',
              'Retrosynthetic analysis of ring systems',
              'Designing enolate-based syntheses'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Analyzing crossed reactions for selectivity. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Predicting aldol and Claisen products',
            options: ['Predicting aldol and Claisen products', 'Designing enolate-based syntheses', 'Retrosynthetic analysis of ring systems', 'Analyzing crossed reactions for selectivity']
          },
          {
            label: 'Designing enolate-based syntheses',
            options: ['Retrosynthetic analysis of ring systems', 'Predicting aldol and Claisen products', 'Designing enolate-based syntheses', 'Analyzing crossed reactions for selectivity']
          },
          {
            label: 'Analyzing crossed reactions for…',
            options: ['Retrosynthetic analysis of ring systems', 'Analyzing crossed reactions for selectivity', 'Designing enolate-based syntheses', 'Predicting aldol and Claisen products']
          }
        ],
        correctAnswers: ['Predicting aldol and Claisen products', 'Designing enolate-based syntheses', 'Analyzing crossed reactions for selectivity'],
        hint1: 'Think about what each concept specifically describes in Problem-Solving Workshop.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Problem-Solving Workshop describes a specific idea. Predicting aldol and Claisen products. Designing enolate-based syntheses. Analyzing crossed reactions for selectivity.'
      }
    }
  ]
}
