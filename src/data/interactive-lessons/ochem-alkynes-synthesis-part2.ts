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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of alkyne acidity?',
            options: [
              'Terminal alkynes are weakly acidic (pKa ~25)',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'Terminal alkynes are weakly acidic (pKa ~25)'
          },
          {
            question: 'In the context of alkyne acidity, which is accurate?',
            options: [
              'Acetylide is a good nucleophile and base',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Acetylide is a good nucleophile and base'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Terminal alkynes are weakly acidic (pKa ~25)',
            options: ['Terminal alkynes are weakly acidic (pKa ~25)', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'NaNH₂ deprotonates terminal alkynes → acetylide anion',
            options: ['NaNH₂ deprotonates terminal alkynes → acetylide an', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Acetylide is a good nucleophile and base',
            options: ['Acetylide is a good nucleophile and base', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['Terminal alkynes are weakly acidic (pKa ~25)', 'NaNH₂ deprotonates terminal alkynes → acetylide an', 'Acetylide is a good nucleophile and base'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Alkyne Acidity.'
      }
    }
  ]
}
