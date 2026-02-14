export const oChemAldehydesKetonesPart5Data = {
  topicSlug: 'aldehydes-ketones-reactions',
  sections: [
    {
      id: 'aldeh5-intro',
      type: 'text' as const,
      content: `
# Acetals & Hemiacetals

**Part 5 of 7 — Acetals & Hemiacetals**

### 1. Hemiacetal

one -OH and one -OR on same carbon

### 2. Acetal

two -OR groups on same carbon (formed in acid, excess alcohol)

### 3. Acetals are stable under basic conditions → protecting groups

Acetals are stable under basic conditions → protecting groups

### 4. Cyclic hemiacetals

found in sugars (glucose, fructose)
      `
    },
    {
      id: 'aldeh5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of acetals & hemiacetals?',
            options: [
              'Hemiacetal',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'Hemiacetal: one -OH and one -OR on same carbon'
          },
          {
            question: 'In the context of acetals & hemiacetals, which is accurate?',
            options: [
              'Acetals are stable under basic conditions → protecting groups',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Acetals are stable under basic conditions → protecting groups'
          }
        ]
      }
    },
    {
      id: 'aldeh5-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Hemiacetal**: one -OH and one -OR on same carbon
- **Acetal**: two -OR groups on same carbon (formed in acid, excess alcohol)
- **Acetals are stable under basic conditions → protecting groups**
- **Cyclic hemiacetals**: found in sugars (glucose, fructose)
      `
    },
    {
      id: 'aldeh5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to acetals & hemiacetals?',
            options: [
              'found in sugars (glucose, fructose)',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Cyclic hemiacetals: found in sugars (glucose, fructose)'
          }
        ]
      }
    },
    {
      id: 'aldeh5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Hemiacetal',
            options: ['one -OH and one -OR on same carbon', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Acetal',
            options: ['two -OR groups on same carbon (formed in acid, exc', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Acetals are stable under basic conditions → protecting groups',
            options: ['Acetals are stable under basic conditions → protec', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['one -OH and one -OR on same carbon', 'two -OR groups on same carbon (formed in acid, exc', 'Acetals are stable under basic conditions → protec'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Acetals & Hemiacetals.'
      }
    }
  ]
}
