export const oChemAlkenesPart2Data = {
  topicSlug: 'alkenes-reactions',
  sections: [
    {
      id: 'alken2-intro',
      type: 'text' as const,
      content: `
# Electrophilic Addition

**Part 2 of 7 — Electrophilic Addition**

### 1. Electrophilic addition

π electrons attack electrophile

### 2. Step 1

electrophile adds to less substituted carbon → carbocation

### 3. Step 2

nucleophile attacks carbocation

### 4. Common electrophiles

HX, H₂O/H⁺, X₂
      `
    },
    {
      id: 'alken2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Electrophilic addition?',
            options: [
              'HX, H₂O/H⁺, X₂',
              'π electrons attack electrophile',
              'electrophile adds to less substituted carbon → carbocation',
              'nucleophile attacks carbocation'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Electrophilic addition: π electrons attack electrophile. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Electrophilic Addition, which explains Step 2?',
            options: [
              'π electrons attack electrophile',
              'HX, H₂O/H⁺, X₂',
              'nucleophile attacks carbocation',
              'electrophile adds to less substituted carbon → carbocation'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Step 2: nucleophile attacks carbocation. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'alken2-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Electrophilic addition**: π electrons attack electrophile
- **Step 1**: electrophile adds to less substituted carbon → carbocation
- **Step 2**: nucleophile attacks carbocation
- **Common electrophiles**: HX, H₂O/H⁺, X₂
      `
    },
    {
      id: 'alken2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to electrophilic addition?',
            options: [
              'HX, H₂O/H⁺, X₂',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Common electrophiles: HX, H₂O/H⁺, X₂'
          }
        ]
      }
    },
    {
      id: 'alken2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Electrophilic addition',
            options: ['electrophile adds to less substituted carbon → carbocation', 'nucleophile attacks carbocation', 'π electrons attack electrophile', 'HX, H₂O/H⁺, X₂']
          },
          {
            label: 'Step 1',
            options: ['π electrons attack electrophile', 'nucleophile attacks carbocation', 'HX, H₂O/H⁺, X₂', 'electrophile adds to less substituted carbon → carbocation']
          },
          {
            label: 'Step 2',
            options: ['nucleophile attacks carbocation', 'electrophile adds to less substituted carbon → carbocation', 'HX, H₂O/H⁺, X₂', 'π electrons attack electrophile']
          }
        ],
        correctAnswers: ['π electrons attack electrophile', 'electrophile adds to less substituted carbon → carbocation', 'nucleophile attacks carbocation'],
        hint1: 'Think about what each concept specifically describes in Electrophilic Addition.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Electrophilic Addition describes a specific idea. Electrophilic addition: π electrons attack electrophile. Step 1: electrophile adds to less substituted carbon → carbocation. Step 2: nucleophile attacks carbocation.'
      }
    }
  ]
}
