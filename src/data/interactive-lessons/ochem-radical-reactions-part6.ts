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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Drawing radical mechanisms" refer to in this topic?',
            options: [
              'Analyzing BDE data',
              'Predicting halogenation products and selectivity',
              'Drawing radical mechanisms',
              'Comparing radical vs ionic pathways'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Drawing radical mechanisms. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Comparing radical vs ionic pathways?',
            options: [
              'Predicting halogenation products and selectivity',
              'Drawing radical mechanisms',
              'Analyzing BDE data',
              'Comparing radical vs ionic pathways'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Comparing radical vs ionic pathways. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Drawing radical mechanisms',
            options: ['Predicting halogenation products and selectivity', 'Analyzing BDE data', 'Drawing radical mechanisms', 'Comparing radical vs ionic pathways']
          },
          {
            label: 'Predicting halogenation products and…',
            options: ['Predicting halogenation products and selectivity', 'Comparing radical vs ionic pathways', 'Analyzing BDE data', 'Drawing radical mechanisms']
          },
          {
            label: 'Comparing radical vs ionic pathways',
            options: ['Predicting halogenation products and selectivity', 'Analyzing BDE data', 'Comparing radical vs ionic pathways', 'Drawing radical mechanisms']
          }
        ],
        correctAnswers: ['Drawing radical mechanisms', 'Predicting halogenation products and selectivity', 'Comparing radical vs ionic pathways'],
        hint1: 'Think about what each concept specifically describes in Problem-Solving Workshop.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Problem-Solving Workshop describes a specific idea. Drawing radical mechanisms. Predicting halogenation products and selectivity. Comparing radical vs ionic pathways.'
      }
    }
  ]
}
