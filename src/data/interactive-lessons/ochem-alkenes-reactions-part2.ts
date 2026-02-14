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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of electrophilic addition?',
            options: [
              'Electrophilic addition',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'Electrophilic addition: π electrons attack electrophile'
          },
          {
            question: 'In the context of electrophilic addition, which is accurate?',
            options: [
              'nucleophile attacks carbocation',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Step 2: nucleophile attacks carbocation'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Electrophilic addition',
            options: ['π electrons attack electrophile', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Step 1',
            options: ['electrophile adds to less substituted carbon → car', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Step 2',
            options: ['nucleophile attacks carbocation', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['π electrons attack electrophile', 'electrophile adds to less substituted carbon → car', 'nucleophile attacks carbocation'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Electrophilic Addition.'
      }
    }
  ]
}
