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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of 1,2- vs 1,4-addition?',
            options: [
              '1,2-addition',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: '1,2-addition: electrophile adds across one double bond (kinetic product)'
          },
          {
            question: 'In the context of 1,2- vs 1,4-addition, which is accurate?',
            options: [
              'Low temperature favors kinetic (1,2) product',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Low temperature favors kinetic (1,2) product'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '1,2-addition',
            options: ['electrophile adds across one double bond (kinetic ', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: '1,4-addition',
            options: ['electrophile adds across entire system (thermodyna', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Low temperature favors kinetic (1,2) product',
            options: ['Low temperature favors kinetic (1,2) product', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['electrophile adds across one double bond (kinetic ', 'electrophile adds across entire system (thermodyna', 'Low temperature favors kinetic (1,2) product'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding 1,2- vs 1,4-Addition.'
      }
    }
  ]
}
