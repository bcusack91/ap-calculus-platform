export const bioCellRespirationPart2Data = {
  topicSlug: 'cellular-respiration',
  sections: [
    {
      id: 'cell2-intro-p2',
      type: 'text' as const,
      content: `
# ## Pyruvate Oxidation & Krebs Cycle

**Part 2 of 7 — Pyruvate Oxidation & Krebs Cycle**

1. Pyruvate → acetyl-CoA + CO₂ + NADH (in mitochondrial matrix)
2. Krebs cycle: acetyl-CoA → 2CO₂ + 3NADH + FADH₂ + ATP
3. Per glucose: cycle turns twice
4. Occurs in mitochondrial matrix
      `
    },
    {
      id: 'cell2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes pyruvate → acetyl-coa + co₂ + nadh (in mitochondrial matrix)?',
            options: [
              'Pyruvate → acetyl-CoA + CO₂ + NADH (in mitochondrial matrix)',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'Pyruvate → acetyl-CoA + CO₂ + NADH (in mitochondrial matrix)'
          },
          {
            question: 'In the context of pyruvate oxidation & krebs cycle, which statement is accurate?',
            options: [
              'Per glucose: cycle turns twice',
              ')xirtam lairdnohcotim ni( HDAN + ₂OC + AoC-lyteca → etavuryP',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Per glucose: cycle turns twice'
          }
        ]
      }
    },
    {
      id: 'cell2-detail-p2',
      type: 'text' as const,
      content: `
# ### Key Details

- **Pyruvate → acetyl-CoA + CO₂ + NADH (in mitochondrial matrix)**
- **Krebs cycle**: acetyl-CoA → 2CO₂ + 3NADH + FADH₂ + ATP
- **Per glucose**: cycle turns twice
- **Occurs in mitochondrial matrix**
      `
    },
    {
      id: 'cell2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to pyruvate oxidation & krebs cycle?',
            options: [
              'Occurs in mitochondrial matrix',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'Occurs in mitochondrial matrix'
          }
        ]
      }
    },
    {
      id: 'cell2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Pyruvate → acetyl-CoA + CO₂ + NADH (in mitochondrial matrix) is important in pyruvate oxidation & krebs cycle because',
            options: ['Pyruvate → acetyl-CoA + CO₂ + NADH (in mitochondri', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Krebs cycle is important in pyruvate oxidation & krebs cycle because',
            options: ['acetyl-CoA → 2CO₂ + 3NADH + FADH₂ + ATP', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Per glucose is important in pyruvate oxidation & krebs cycle because',
            options: ['cycle turns twice', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['Pyruvate → acetyl-CoA + CO₂ + NADH (in mitochondri', 'acetyl-CoA → 2CO₂ + 3NADH + FADH₂ + ATP', 'cycle turns twice'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Pyruvate Oxidation & Krebs Cycle.'
      }
    }
  ]
}
