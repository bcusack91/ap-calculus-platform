export const oChemAlkynesPart4Data = {
  topicSlug: 'alkynes-synthesis',
  sections: [
    {
      id: 'alkyn4-intro',
      type: 'text' as const,
      content: `
# Reduction of Alkynes

**Part 4 of 7 — Reduction of Alkynes**

### 1. H₂/Lindlar catalyst → cis-alkene (syn addition, partial reduction)

H₂/Lindlar catalyst → cis-alkene (syn addition, partial reduction)

### 2. Na/NH₃(l) → trans-alkene (anti addition, dissolving metal)

Na/NH₃(l) → trans-alkene (anti addition, dissolving metal)

### 3. H₂/Pd → alkane (full reduction)

H₂/Pd → alkane (full reduction)

### 4. Selective reduction is a powerful synthetic tool

Selective reduction is a powerful synthetic tool
      `
    },
    {
      id: 'alkyn4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains H₂/Lindlar catalyst → cis-alkene (syn…?',
            options: [
              'H₂/Pd → alkane (full reduction)',
              'H₂/Lindlar catalyst → cis-alkene (syn addition, partial reduction)',
              'Na/NH₃(l) → trans-alkene (anti addition, dissolving metal)',
              'Selective reduction is a powerful synthetic tool'
            ],
            correctAnswer: 1,
            explanation: 'Correct — H₂/Lindlar catalyst → cis-alkene (syn addition, partial reduction). The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes H₂/Pd → alkane (full reduction):',
            options: [
              'H₂/Lindlar catalyst → cis-alkene (syn addition, partial reduction)',
              'Na/NH₃(l) → trans-alkene (anti addition, dissolving metal)',
              'H₂/Pd → alkane (full reduction)',
              'Selective reduction is a powerful synthetic tool'
            ],
            correctAnswer: 2,
            explanation: 'Correct — H₂/Pd → alkane (full reduction). Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'alkyn4-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **H₂/Lindlar catalyst → cis-alkene (syn addition, partial reduction)**
- **Na/NH₃(l) → trans-alkene (anti addition, dissolving metal)**
- **H₂/Pd → alkane (full reduction)**
- **Selective reduction is a powerful synthetic tool**
      `
    },
    {
      id: 'alkyn4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to reduction of alkynes?',
            options: [
              'Selective reduction is a powerful synthetic tool',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Selective reduction is a powerful synthetic tool'
          }
        ]
      }
    },
    {
      id: 'alkyn4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'H₂/Lindlar catalyst → cis-alkene (syn…',
            options: ['H₂/Pd → alkane (full reduction)', 'H₂/Lindlar catalyst → cis-alkene (syn addition, partial reduction)', 'Selective reduction is a powerful synthetic tool', 'Na/NH₃(l) → trans-alkene (anti addition, dissolving metal)']
          },
          {
            label: 'Na/NH₃(l) → trans-alkene (anti…',
            options: ['H₂/Pd → alkane (full reduction)', 'H₂/Lindlar catalyst → cis-alkene (syn addition, partial reduction)', 'Selective reduction is a powerful synthetic tool', 'Na/NH₃(l) → trans-alkene (anti addition, dissolving metal)']
          },
          {
            label: 'H₂/Pd → alkane (full reduction)',
            options: ['H₂/Pd → alkane (full reduction)', 'Na/NH₃(l) → trans-alkene (anti addition, dissolving metal)', 'H₂/Lindlar catalyst → cis-alkene (syn addition, partial reduction)', 'Selective reduction is a powerful synthetic tool']
          }
        ],
        correctAnswers: ['H₂/Lindlar catalyst → cis-alkene (syn addition, partial reduction)', 'Na/NH₃(l) → trans-alkene (anti addition, dissolving metal)', 'H₂/Pd → alkane (full reduction)'],
        hint1: 'Think about what each concept specifically describes in Reduction of Alkynes.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Reduction of Alkynes describes a specific idea. H₂/Lindlar catalyst → cis-alkene (syn addition, partial reduction). Na/NH₃(l) → trans-alkene (anti addition, dissolving metal). H₂/Pd → alkane (full reduction).'
      }
    }
  ]
}
