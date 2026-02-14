export const oChemRadicalsPart5Data = {
  topicSlug: 'radical-reactions',
  sections: [
    {
      id: 'radic5-intro',
      type: 'text' as const,
      content: `
# Radical Stability

**Part 5 of 7 — Radical Stability**

### 1. Radical stability

3° > 2° > 1° > methyl (same as carbocations)

### 2. Allylic and benzylic radicals

stabilized by resonance

### 3. Bond dissociation energy (BDE)

energy to break bond homolytically

### 4. Lower BDE = easier radical formation

Lower BDE = easier radical formation
      `
    },
    {
      id: 'radic5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of radical stability?',
            options: [
              'Radical stability',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'Radical stability: 3° > 2° > 1° > methyl (same as carbocations)'
          },
          {
            question: 'In the context of radical stability, which is accurate?',
            options: [
              'energy to break bond homolytically',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Bond dissociation energy (BDE): energy to break bond homolytically'
          }
        ]
      }
    },
    {
      id: 'radic5-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Radical stability**: 3° > 2° > 1° > methyl (same as carbocations)
- **Allylic and benzylic radicals**: stabilized by resonance
- **Bond dissociation energy (BDE)**: energy to break bond homolytically
- **Lower BDE = easier radical formation**
      `
    },
    {
      id: 'radic5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to radical stability?',
            options: [
              'Lower BDE = easier radical formation',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Lower BDE = easier radical formation'
          }
        ]
      }
    },
    {
      id: 'radic5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Radical stability',
            options: ['3° > 2° > 1° > methyl (same as carbocations)', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Allylic and benzylic radicals',
            options: ['stabilized by resonance', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Bond dissociation energy (BDE)',
            options: ['energy to break bond homolytically', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['3° > 2° > 1° > methyl (same as carbocations)', 'stabilized by resonance', 'energy to break bond homolytically'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Radical Stability.'
      }
    }
  ]
}
