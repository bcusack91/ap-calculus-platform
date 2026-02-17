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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Order of reactions matters for desired…?',
            options: [
              'Ar-COR → Ar-CH₂R',
              'Order of reactions matters for desired product',
              'Retrosynthetic analysis for multi-step EAS',
              'Blocking groups can be used strategically'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Order of reactions matters for desired product. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Retrosynthetic analysis for multi-step…:',
            options: [
              'Blocking groups can be used strategically',
              'Order of reactions matters for desired product',
              'Retrosynthetic analysis for multi-step EAS',
              'Ar-COR → Ar-CH₂R'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Retrosynthetic analysis for multi-step EAS. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Order of reactions matters for desired…',
            options: ['Order of reactions matters for desired product', 'Ar-COR → Ar-CH₂R', 'Blocking groups can be used strategically', 'Retrosynthetic analysis for multi-step EAS']
          },
          {
            label: 'Blocking groups can be used…',
            options: ['Ar-COR → Ar-CH₂R', 'Retrosynthetic analysis for multi-step EAS', 'Order of reactions matters for desired product', 'Blocking groups can be used strategically']
          },
          {
            label: 'Retrosynthetic analysis for multi-step…',
            options: ['Order of reactions matters for desired product', 'Retrosynthetic analysis for multi-step EAS', 'Ar-COR → Ar-CH₂R', 'Blocking groups can be used strategically']
          }
        ],
        correctAnswers: ['Order of reactions matters for desired product', 'Blocking groups can be used strategically', 'Retrosynthetic analysis for multi-step EAS'],
        hint1: 'Think about what each concept specifically describes in Multi-Step EAS.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Multi-Step EAS describes a specific idea. Order of reactions matters for desired product. Blocking groups can be used strategically. Retrosynthetic analysis for multi-step EAS.'
      }
    }
  ]
}
