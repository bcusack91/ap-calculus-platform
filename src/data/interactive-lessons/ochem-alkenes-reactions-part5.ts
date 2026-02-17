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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Catalytic hydrogenation?',
            options: [
              'O₃ then Zn/H₂O cleaves C=C → carbonyl compounds',
              'H₂/Pd → alkane (syn addition)',
              'mCPBA → epoxide',
              'OsO₄ → cis-diol (syn addition)'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Catalytic hydrogenation: H₂/Pd → alkane (syn addition). The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Oxidation & Reduction, which explains Dihydroxylation?',
            options: [
              'H₂/Pd → alkane (syn addition)',
              'O₃ then Zn/H₂O cleaves C=C → carbonyl compounds',
              'mCPBA → epoxide',
              'OsO₄ → cis-diol (syn addition)'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Dihydroxylation: OsO₄ → cis-diol (syn addition). Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Catalytic hydrogenation',
            options: ['O₃ then Zn/H₂O cleaves C=C → carbonyl compounds', 'OsO₄ → cis-diol (syn addition)', 'H₂/Pd → alkane (syn addition)', 'mCPBA → epoxide']
          },
          {
            label: 'Ozonolysis',
            options: ['H₂/Pd → alkane (syn addition)', 'OsO₄ → cis-diol (syn addition)', 'mCPBA → epoxide', 'O₃ then Zn/H₂O cleaves C=C → carbonyl compounds']
          },
          {
            label: 'Dihydroxylation',
            options: ['H₂/Pd → alkane (syn addition)', 'mCPBA → epoxide', 'O₃ then Zn/H₂O cleaves C=C → carbonyl compounds', 'OsO₄ → cis-diol (syn addition)']
          }
        ],
        correctAnswers: ['H₂/Pd → alkane (syn addition)', 'O₃ then Zn/H₂O cleaves C=C → carbonyl compounds', 'OsO₄ → cis-diol (syn addition)'],
        hint1: 'Think about what each concept specifically describes in Oxidation & Reduction.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Oxidation & Reduction describes a specific idea. Catalytic hydrogenation: H₂/Pd → alkane (syn addition). Ozonolysis: O₃ then Zn/H₂O cleaves C=C → carbonyl compounds. Dihydroxylation: OsO₄ → cis-diol (syn addition).'
      }
    }
  ]
}
