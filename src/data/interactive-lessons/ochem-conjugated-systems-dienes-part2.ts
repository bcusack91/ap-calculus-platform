export const oChemConjugatedPart2Data = {
  topicSlug: 'conjugated-systems-dienes',
  sections: [
    {
      id: 'conju2-intro',
      type: 'text' as const,
      content: `
# 1,2- vs 1,4-Addition

**Part 2 of 7 — 1,2- vs 1,4-Addition**

### 1. 1,2-addition

electrophile adds across one double bond (kinetic product)

### 2. 1,4-addition

electrophile adds across entire system (thermodynamic product)

### 3. Low temperature favors kinetic (1,2) product

Low temperature favors kinetic (1,2) product

### 4. High temperature favors thermodynamic (1,4) product

High temperature favors thermodynamic (1,4) product
      `
    },
    {
      id: 'conju2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains 1,2-addition?',
            options: [
              'High temperature favors thermodynamic (1,4) product',
              'electrophile adds across one double bond (kinetic product)',
              'Low temperature favors kinetic (1,2) product',
              'electrophile adds across entire system (thermodynamic product)'
            ],
            correctAnswer: 1,
            explanation: 'Correct — 1,2-addition: electrophile adds across one double bond (kinetic product). The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of ,2- vs 1,4-Addition, which explains Low temperature favors kinetic (1,2)…?',
            options: [
              'electrophile adds across entire system (thermodynamic product)',
              'electrophile adds across one double bond (kinetic product)',
              'Low temperature favors kinetic (1,2) product',
              'High temperature favors thermodynamic (1,4) product'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Low temperature favors kinetic (1,2) product. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'conju2-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **1,2-addition**: electrophile adds across one double bond (kinetic product)
- **1,4-addition**: electrophile adds across entire system (thermodynamic product)
- **Low temperature favors kinetic (1,2) product**
- **High temperature favors thermodynamic (1,4) product**
      `
    },
    {
      id: 'conju2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to 1,2- vs 1,4-addition?',
            options: [
              'High temperature favors thermodynamic (1,4) product',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'High temperature favors thermodynamic (1,4) product'
          }
        ]
      }
    },
    {
      id: 'conju2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '1,2-addition',
            options: ['electrophile adds across one double bond (kinetic product)', 'electrophile adds across entire system (thermodynamic product)', 'Low temperature favors kinetic (1,2) product', 'High temperature favors thermodynamic (1,4) product']
          },
          {
            label: '1,4-addition',
            options: ['High temperature favors thermodynamic (1,4) product', 'electrophile adds across one double bond (kinetic product)', 'Low temperature favors kinetic (1,2) product', 'electrophile adds across entire system (thermodynamic product)']
          }
        ],
        correctAnswers: ['electrophile adds across one double bond (kinetic product)', 'electrophile adds across entire system (thermodynamic product)'],
        hint1: 'Think about what each concept specifically describes in ,2- vs 1,4-Addition.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in ,2- vs 1,4-Addition describes a specific idea. 1,2-addition: electrophile adds across one double bond (kinetic product). 1,4-addition: electrophile adds across entire system (thermodynamic product).'
      }
    }
  ]
}
