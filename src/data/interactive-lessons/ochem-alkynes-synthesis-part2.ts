export const oChemAlkynesPart2Data = {
  topicSlug: 'alkynes-synthesis',
  sections: [
    {
      id: 'alkyn2-intro',
      type: 'text' as const,
      content: `
# Alkyne Acidity

**Part 2 of 7 — Alkyne Acidity**

### 1. Terminal alkynes are weakly acidic (pKa ~25)

Terminal alkynes are weakly acidic (pKa ~25)

### 2. NaNH₂ deprotonates terminal alkynes → acetylide anion

NaNH₂ deprotonates terminal alkynes → acetylide anion

### 3. Acetylide is a good nucleophile and base

Acetylide is a good nucleophile and base

### 4. Alkylation

R-C≡C⁻ + R'-X → R-C≡C-R' (SN2)
      `
    },
    {
      id: 'alkyn2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Terminal alkynes are weakly acidic (pKa…?',
            options: [
              'Terminal alkynes are weakly acidic (pKa ~25)',
              'R-C≡C⁻ + R\'-X → R-C≡C-R\' (SN2)',
              'NaNH₂ deprotonates terminal alkynes → acetylide anion',
              'Acetylide is a good nucleophile and base'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Terminal alkynes are weakly acidic (pKa ~25). The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Acetylide is a good nucleophile and base:',
            options: [
              'Terminal alkynes are weakly acidic (pKa ~25)',
              'Acetylide is a good nucleophile and base',
              'NaNH₂ deprotonates terminal alkynes → acetylide anion',
              'R-C≡C⁻ + R\'-X → R-C≡C-R\' (SN2)'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Acetylide is a good nucleophile and base. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'alkyn2-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Terminal alkynes are weakly acidic (pKa ~25)**
- **NaNH₂ deprotonates terminal alkynes → acetylide anion**
- **Acetylide is a good nucleophile and base**
- **Alkylation**: R-C≡C⁻ + R'-X → R-C≡C-R' (SN2)
      `
    },
    {
      id: 'alkyn2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to alkyne acidity?',
            options: [
              'R-C≡C⁻ + R\'-X → R-C≡C-R\' (SN2)',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Alkylation: R-C≡C⁻ + R\'-X → R-C≡C-R\' (SN2)'
          }
        ]
      }
    },
    {
      id: 'alkyn2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Terminal alkynes are weakly acidic (pKa…',
            options: ['R-C≡C⁻ + R\'-X → R-C≡C-R\' (SN2)', 'Acetylide is a good nucleophile and base', 'Terminal alkynes are weakly acidic (pKa ~25)', 'NaNH₂ deprotonates terminal alkynes → acetylide anion']
          },
          {
            label: 'NaNH₂ deprotonates terminal alkynes →…',
            options: ['NaNH₂ deprotonates terminal alkynes → acetylide anion', 'Terminal alkynes are weakly acidic (pKa ~25)', 'R-C≡C⁻ + R\'-X → R-C≡C-R\' (SN2)', 'Acetylide is a good nucleophile and base']
          },
          {
            label: 'Acetylide is a good nucleophile and base',
            options: ['NaNH₂ deprotonates terminal alkynes → acetylide anion', 'R-C≡C⁻ + R\'-X → R-C≡C-R\' (SN2)', 'Terminal alkynes are weakly acidic (pKa ~25)', 'Acetylide is a good nucleophile and base']
          }
        ],
        correctAnswers: ['Terminal alkynes are weakly acidic (pKa ~25)', 'NaNH₂ deprotonates terminal alkynes → acetylide anion', 'Acetylide is a good nucleophile and base'],
        hint1: 'Think about what each concept specifically describes in Alkyne Acidity.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Alkyne Acidity describes a specific idea. Terminal alkynes are weakly acidic (pKa ~25). NaNH₂ deprotonates terminal alkynes → acetylide anion. Acetylide is a good nucleophile and base.'
      }
    }
  ]
}
