export const oChemEASPart5Data = {
  topicSlug: 'electrophilic-aromatic-substitution',
  sections: [
    {
      id: 'elect5-intro',
      type: 'text' as const,
      content: `
# Multi-Step EAS

**Part 5 of 7 — Multi-Step EAS**

### 1. Order of reactions matters for desired product

Order of reactions matters for desired product

### 2. Blocking groups can be used strategically

Blocking groups can be used strategically

### 3. Retrosynthetic analysis for multi-step EAS

Retrosynthetic analysis for multi-step EAS

### 4. Clemmensen/Wolff-Kishner reduction

Ar-COR → Ar-CH₂R
      `
    },
    {
      id: 'elect5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of multi-step eas?',
            options: [
              'Order of reactions matters for desired product',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'Order of reactions matters for desired product'
          },
          {
            question: 'In the context of multi-step eas, which is accurate?',
            options: [
              'Retrosynthetic analysis for multi-step EAS',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Retrosynthetic analysis for multi-step EAS'
          }
        ]
      }
    },
    {
      id: 'elect5-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Order of reactions matters for desired product**
- **Blocking groups can be used strategically**
- **Retrosynthetic analysis for multi-step EAS**
- **Clemmensen/Wolff-Kishner reduction**: Ar-COR → Ar-CH₂R
      `
    },
    {
      id: 'elect5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to multi-step eas?',
            options: [
              'Ar-COR → Ar-CH₂R',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Clemmensen/Wolff-Kishner reduction: Ar-COR → Ar-CH₂R'
          }
        ]
      }
    },
    {
      id: 'elect5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Order of reactions matters for desired product',
            options: ['Order of reactions matters for desired product', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Blocking groups can be used strategically',
            options: ['Blocking groups can be used strategically', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Retrosynthetic analysis for multi-step EAS',
            options: ['Retrosynthetic analysis for multi-step EAS', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['Order of reactions matters for desired product', 'Blocking groups can be used strategically', 'Retrosynthetic analysis for multi-step EAS'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Multi-Step EAS.'
      }
    }
  ]
}
