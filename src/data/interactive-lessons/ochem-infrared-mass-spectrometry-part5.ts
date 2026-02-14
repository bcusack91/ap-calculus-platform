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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of fragmentation patterns?',
            options: [
              'Base peak',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'Base peak: most abundant fragment'
          },
          {
            question: 'In the context of fragmentation patterns, which is accurate?',
            options: [
              'γ-hydrogen transfer',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'McLafferty rearrangement: γ-hydrogen transfer'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Base peak',
            options: ['most abundant fragment', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Common losses',
            options: ['-15 (CH₃), -18 (H₂O), -28 (CO), -29 (CHO)', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'McLafferty rearrangement',
            options: ['γ-hydrogen transfer', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['most abundant fragment', '-15 (CH₃), -18 (H₂O), -28 (CO), -29 (CHO)', 'γ-hydrogen transfer'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Fragmentation Patterns.'
      }
    }
  ]
}
