export const oChemCarbsPart3Data = {
  topicSlug: 'carbohydrates-biochemistry',
  sections: [
    {
      id: 'carbo3-intro',
      type: 'text' as const,
      content: `
# Reactions of Monosaccharides

**Part 3 of 7 — Reactions of Monosaccharides**

### 1. Mutarotation

equilibrium between α and β anomers through open-chain form

### 2. Reduction

NaBH₄ → alditol (sugar alcohol)

### 3. Oxidation

Tollens/Benedict's → aldonic acid (reducing sugars)

### 4. Glycoside formation

acetal from hemiacetal + alcohol
      `
    },
    {
      id: 'carbo3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Mutarotation" refer to in this topic?',
            options: [
              'Tollens/Benedict\'s → aldonic acid (reducing sugars)',
              'NaBH₄ → alditol (sugar alcohol)',
              'acetal from hemiacetal + alcohol',
              'equilibrium between α and β anomers through open-chain form'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Mutarotation: equilibrium between α and β anomers through open-chain form. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Reactions of Monosaccharides, which explains Oxidation?',
            options: [
              'acetal from hemiacetal + alcohol',
              'NaBH₄ → alditol (sugar alcohol)',
              'Tollens/Benedict\'s → aldonic acid (reducing sugars)',
              'equilibrium between α and β anomers through open-chain form'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Oxidation: Tollens/Benedict\'s → aldonic acid (reducing sugars). Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'carbo3-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Mutarotation**: equilibrium between α and β anomers through open-chain form
- **Reduction**: NaBH₄ → alditol (sugar alcohol)
- **Oxidation**: Tollens/Benedict's → aldonic acid (reducing sugars)
- **Glycoside formation**: acetal from hemiacetal + alcohol
      `
    },
    {
      id: 'carbo3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to reactions of monosaccharides?',
            options: [
              'acetal from hemiacetal + alcohol',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Glycoside formation: acetal from hemiacetal + alcohol'
          }
        ]
      }
    },
    {
      id: 'carbo3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Mutarotation',
            options: ['NaBH₄ → alditol (sugar alcohol)', 'equilibrium between α and β anomers through open-chain form', 'Tollens/Benedict\'s → aldonic acid (reducing sugars)', 'acetal from hemiacetal + alcohol']
          },
          {
            label: 'Reduction',
            options: ['NaBH₄ → alditol (sugar alcohol)', 'equilibrium between α and β anomers through open-chain form', 'Tollens/Benedict\'s → aldonic acid (reducing sugars)', 'acetal from hemiacetal + alcohol']
          },
          {
            label: 'Oxidation',
            options: ['NaBH₄ → alditol (sugar alcohol)', 'Tollens/Benedict\'s → aldonic acid (reducing sugars)', 'equilibrium between α and β anomers through open-chain form', 'acetal from hemiacetal + alcohol']
          }
        ],
        correctAnswers: ['equilibrium between α and β anomers through open-chain form', 'NaBH₄ → alditol (sugar alcohol)', 'Tollens/Benedict\'s → aldonic acid (reducing sugars)'],
        hint1: 'Think about what each concept specifically describes in Reactions of Monosaccharides.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Reactions of Monosaccharides describes a specific idea. Mutarotation: equilibrium between α and β anomers through open-chain form. Reduction: NaBH₄ → alditol (sugar alcohol). Oxidation: Tollens/Benedict\'s → aldonic acid (reducing sugars).'
      }
    }
  ]
}
