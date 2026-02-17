export const oChemAlkenesPart6Data = {
  topicSlug: 'alkenes-reactions',
  sections: [
    {
      id: 'alken6-intro',
      type: 'text' as const,
      content: `
# Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

### 1. Predicting addition products and regiochemistry

Predicting addition products and regiochemistry

### 2. Drawing mechanisms for electrophilic addition

Drawing mechanisms for electrophilic addition

### 3. Comparing Markovnikov vs anti-Markovnikov outcomes

Comparing Markovnikov vs anti-Markovnikov outcomes

### 4. Designing multi-step syntheses with alkenes

Designing multi-step syntheses with alkenes
      `
    },
    {
      id: 'alken6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Predicting addition products and…?',
            options: [
              'Comparing Markovnikov vs anti-Markovnikov outcomes',
              'Designing multi-step syntheses with alkenes',
              'Predicting addition products and regiochemistry',
              'Drawing mechanisms for electrophilic addition'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Predicting addition products and regiochemistry. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Problem-Solving Workshop, which explains Comparing Markovnikov vs…?',
            options: [
              'Drawing mechanisms for electrophilic addition',
              'Predicting addition products and regiochemistry',
              'Designing multi-step syntheses with alkenes',
              'Comparing Markovnikov vs anti-Markovnikov outcomes'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Comparing Markovnikov vs anti-Markovnikov outcomes. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'alken6-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Predicting addition products and regiochemistry**
- **Drawing mechanisms for electrophilic addition**
- **Comparing Markovnikov vs anti-Markovnikov outcomes**
- **Designing multi-step syntheses with alkenes**
      `
    },
    {
      id: 'alken6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to problem-solving workshop?',
            options: [
              'Designing multi-step syntheses with alkenes',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Designing multi-step syntheses with alkenes'
          }
        ]
      }
    },
    {
      id: 'alken6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Predicting addition products and…',
            options: ['Drawing mechanisms for electrophilic addition', 'Comparing Markovnikov vs anti-Markovnikov outcomes', 'Designing multi-step syntheses with alkenes', 'Predicting addition products and regiochemistry']
          },
          {
            label: 'Drawing mechanisms for electrophilic…',
            options: ['Drawing mechanisms for electrophilic addition', 'Designing multi-step syntheses with alkenes', 'Predicting addition products and regiochemistry', 'Comparing Markovnikov vs anti-Markovnikov outcomes']
          },
          {
            label: 'Comparing Markovnikov vs…',
            options: ['Comparing Markovnikov vs anti-Markovnikov outcomes', 'Designing multi-step syntheses with alkenes', 'Drawing mechanisms for electrophilic addition', 'Predicting addition products and regiochemistry']
          }
        ],
        correctAnswers: ['Predicting addition products and regiochemistry', 'Drawing mechanisms for electrophilic addition', 'Comparing Markovnikov vs anti-Markovnikov outcomes'],
        hint1: 'Think about what each concept specifically describes in Problem-Solving Workshop.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Problem-Solving Workshop describes a specific idea. Predicting addition products and regiochemistry. Drawing mechanisms for electrophilic addition. Comparing Markovnikov vs anti-Markovnikov outcomes.'
      }
    }
  ]
}
