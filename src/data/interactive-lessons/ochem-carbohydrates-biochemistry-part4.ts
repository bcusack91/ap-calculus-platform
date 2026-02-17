export const oChemCarbsPart4Data = {
  topicSlug: 'carbohydrates-biochemistry',
  sections: [
    {
      id: 'carbo4-intro',
      type: 'text' as const,
      content: `
# Disaccharides & Glycosidic Bonds

**Part 4 of 7 — Disaccharides & Glycosidic Bonds**

### 1. Glycosidic bond

acetal linkage between two sugars

### 2. Maltose

α-1,4 (glucose-glucose)

### 3. Lactose

β-1,4 (galactose-glucose)

### 4. Sucrose

α-1,β-2 (glucose-fructose) — not a reducing sugar
      `
    },
    {
      id: 'carbo4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Glycosidic bond" refer to in this topic?',
            options: [
              'α-1,4 (glucose-glucose)',
              'acetal linkage between two sugars',
              'α-1,β-2 (glucose-fructose) — not a reducing sugar',
              'β-1,4 (galactose-glucose)'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Glycosidic bond: acetal linkage between two sugars. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Lactose?',
            options: [
              'α-1,β-2 (glucose-fructose) — not a reducing sugar',
              'β-1,4 (galactose-glucose)',
              'acetal linkage between two sugars',
              'α-1,4 (glucose-glucose)'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Lactose: β-1,4 (galactose-glucose). Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'carbo4-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Glycosidic bond**: acetal linkage between two sugars
- **Maltose**: α-1,4 (glucose-glucose)
- **Lactose**: β-1,4 (galactose-glucose)
- **Sucrose**: α-1,β-2 (glucose-fructose) — not a reducing sugar
      `
    },
    {
      id: 'carbo4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to disaccharides & glycosidic bonds?',
            options: [
              'α-1,β-2 (glucose-fructose) — not a reducing sugar',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Sucrose: α-1,β-2 (glucose-fructose) — not a reducing sugar'
          }
        ]
      }
    },
    {
      id: 'carbo4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Glycosidic bond',
            options: ['acetal linkage between two sugars', 'β-1,4 (galactose-glucose)', 'α-1,β-2 (glucose-fructose) — not a reducing sugar', 'α-1,4 (glucose-glucose)']
          },
          {
            label: 'Maltose',
            options: ['α-1,β-2 (glucose-fructose) — not a reducing sugar', 'α-1,4 (glucose-glucose)', 'acetal linkage between two sugars', 'β-1,4 (galactose-glucose)']
          },
          {
            label: 'Lactose',
            options: ['α-1,β-2 (glucose-fructose) — not a reducing sugar', 'acetal linkage between two sugars', 'α-1,4 (glucose-glucose)', 'β-1,4 (galactose-glucose)']
          }
        ],
        correctAnswers: ['acetal linkage between two sugars', 'α-1,4 (glucose-glucose)', 'β-1,4 (galactose-glucose)'],
        hint1: 'Think about what each concept specifically describes in Disaccharides & Glycosidic Bonds.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Disaccharides & Glycosidic Bonds describes a specific idea. Glycosidic bond: acetal linkage between two sugars. Maltose: α-1,4 (glucose-glucose). Lactose: β-1,4 (galactose-glucose).'
      }
    }
  ]
}
