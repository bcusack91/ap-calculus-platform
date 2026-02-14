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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of reactions of monosaccharides?',
            options: [
              'Mutarotation',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'Mutarotation: equilibrium between α and β anomers through open-chain form'
          },
          {
            question: 'In the context of reactions of monosaccharides, which is accurate?',
            options: [
              'Tollens/Benedict\'s → aldonic acid (reducing sugars)',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Oxidation: Tollens/Benedict\'s → aldonic acid (reducing sugars)'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Mutarotation',
            options: ['equilibrium between α and β anomers through open-c', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Reduction',
            options: ['NaBH₄ → alditol (sugar alcohol)', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Oxidation',
            options: ['Tollens/Benedict\'s → aldonic acid (reducing sugars', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['equilibrium between α and β anomers through open-c', 'NaBH₄ → alditol (sugar alcohol)', 'Tollens/Benedict\'s → aldonic acid (reducing sugars'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Reactions of Monosaccharides.'
      }
    }
  ]
}
