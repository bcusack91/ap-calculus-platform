export const oChemAlkenesPart5Data = {
  topicSlug: 'alkenes-reactions',
  sections: [
    {
      id: 'alken5-intro',
      type: 'text' as const,
      content: `
# Oxidation & Reduction

**Part 5 of 7 — Oxidation & Reduction**

### 1. Catalytic hydrogenation

H₂/Pd → alkane (syn addition)

### 2. Ozonolysis

O₃ then Zn/H₂O cleaves C=C → carbonyl compounds

### 3. Dihydroxylation

OsO₄ → cis-diol (syn addition)

### 4. Epoxidation

mCPBA → epoxide
      `
    },
    {
      id: 'alken5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of oxidation & reduction?',
            options: [
              'Catalytic hydrogenation',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'Catalytic hydrogenation: H₂/Pd → alkane (syn addition)'
          },
          {
            question: 'In the context of oxidation & reduction, which is accurate?',
            options: [
              'OsO₄ → cis-diol (syn addition)',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Dihydroxylation: OsO₄ → cis-diol (syn addition)'
          }
        ]
      }
    },
    {
      id: 'alken5-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Catalytic hydrogenation**: H₂/Pd → alkane (syn addition)
- **Ozonolysis**: O₃ then Zn/H₂O cleaves C=C → carbonyl compounds
- **Dihydroxylation**: OsO₄ → cis-diol (syn addition)
- **Epoxidation**: mCPBA → epoxide
      `
    },
    {
      id: 'alken5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to oxidation & reduction?',
            options: [
              'mCPBA → epoxide',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Epoxidation: mCPBA → epoxide'
          }
        ]
      }
    },
    {
      id: 'alken5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Catalytic hydrogenation',
            options: ['H₂/Pd → alkane (syn addition)', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Ozonolysis',
            options: ['O₃ then Zn/H₂O cleaves C=C → carbonyl compounds', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Dihydroxylation',
            options: ['OsO₄ → cis-diol (syn addition)', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['H₂/Pd → alkane (syn addition)', 'O₃ then Zn/H₂O cleaves C=C → carbonyl compounds', 'OsO₄ → cis-diol (syn addition)'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Oxidation & Reduction.'
      }
    }
  ]
}
