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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of disaccharides & glycosidic bonds?',
            options: [
              'Glycosidic bond',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'Glycosidic bond: acetal linkage between two sugars'
          },
          {
            question: 'In the context of disaccharides & glycosidic bonds, which is accurate?',
            options: [
              'β-1,4 (galactose-glucose)',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Lactose: β-1,4 (galactose-glucose)'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Glycosidic bond',
            options: ['acetal linkage between two sugars', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Maltose',
            options: ['α-1,4 (glucose-glucose)', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Lactose',
            options: ['β-1,4 (galactose-glucose)', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['acetal linkage between two sugars', 'α-1,4 (glucose-glucose)', 'β-1,4 (galactose-glucose)'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Disaccharides & Glycosidic Bonds.'
      }
    }
  ]
}
