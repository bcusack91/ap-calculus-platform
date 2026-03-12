export const oChemIRMSPart5Data = {
  topicSlug: 'infrared-mass-spectrometry',
  sections: [
    {
      id: 'infra5-intro',
      type: 'text' as const,
      content: `
# Fragmentation Patterns

**Part 5 of 7 — Fragmentation Patterns**

### 1. Base peak

most abundant fragment

### 2. Common losses

-15 (CH₃), -18 (H₂O), -28 (CO), -29 (CHO)

### 3. McLafferty rearrangement

γ-hydrogen transfer

### 4. Nitrogen rule

odd molecular weight suggests nitrogen
      `
    },
    {
      id: 'infra5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Base peak?',
            options: [
              'γ-hydrogen transfer',
              'odd molecular weight suggests nitrogen',
              'most abundant fragment',
              '-15 (CH₃), -18 (H₂O), -28 (CO), -29 (CHO)'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Base peak: most abundant fragment. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Fragmentation Patterns, which explains McLafferty rearrangement?',
            options: [
              'most abundant fragment',
              'γ-hydrogen transfer',
              'odd molecular weight suggests nitrogen',
              '-15 (CH₃), -18 (H₂O), -28 (CO), -29 (CHO)'
            ],
            correctAnswer: 1,
            explanation: 'Correct — McLafferty rearrangement: γ-hydrogen transfer. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'infra5-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Base peak**: most abundant fragment
- **Common losses**: -15 (CH₃), -18 (H₂O), -28 (CO), -29 (CHO)
- **McLafferty rearrangement**: γ-hydrogen transfer
- **Nitrogen rule**: odd molecular weight suggests nitrogen
      `
    },
    {
      id: 'infra5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to fragmentation patterns?',
            options: [
              'odd molecular weight suggests nitrogen',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Nitrogen rule: odd molecular weight suggests nitrogen'
          }
        ]
      }
    },
    {
      id: 'infra5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Base peak',
            options: ['γ-hydrogen transfer', '-15 (CH₃), -18 (H₂O), -28 (CO), -29 (CHO)', 'odd molecular weight suggests nitrogen', 'most abundant fragment']
          },
          {
            label: 'Common losses',
            options: ['-15 (CH₃), -18 (H₂O), -28 (CO), -29 (CHO)', 'most abundant fragment', 'γ-hydrogen transfer', 'odd molecular weight suggests nitrogen']
          },
          {
            label: 'McLafferty rearrangement',
            options: ['γ-hydrogen transfer', '-15 (CH₃), -18 (H₂O), -28 (CO), -29 (CHO)', 'most abundant fragment', 'odd molecular weight suggests nitrogen']
          }
        ],
        correctAnswers: ['most abundant fragment', '-15 (CH₃), -18 (H₂O), -28 (CO), -29 (CHO)', 'γ-hydrogen transfer'],
        hint1: 'Think about what each concept specifically describes in Fragmentation Patterns.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Fragmentation Patterns describes a specific idea. Base peak: most abundant fragment. Common losses: -15 (CH₃), -18 (H₂O), -28 (CO), -29 (CHO). McLafferty rearrangement: γ-hydrogen transfer.'
      }
    }
  ]
}
