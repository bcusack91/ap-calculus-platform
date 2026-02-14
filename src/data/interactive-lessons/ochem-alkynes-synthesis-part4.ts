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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of reduction of alkynes?',
            options: [
              'H₂/Lindlar catalyst → cis-alkene (syn addition, partial reduction)',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'H₂/Lindlar catalyst → cis-alkene (syn addition, partial reduction)'
          },
          {
            question: 'In the context of reduction of alkynes, which is accurate?',
            options: [
              'H₂/Pd → alkane (full reduction)',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'H₂/Pd → alkane (full reduction)'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'H₂/Lindlar catalyst → cis-alkene (syn addition, partial reduction)',
            options: ['H₂/Lindlar catalyst → cis-alkene (syn addition, pa', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Na/NH₃(l) → trans-alkene (anti addition, dissolving metal)',
            options: ['Na/NH₃(l) → trans-alkene (anti addition, dissolvin', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'H₂/Pd → alkane (full reduction)',
            options: ['H₂/Pd → alkane (full reduction)', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['H₂/Lindlar catalyst → cis-alkene (syn addition, pa', 'Na/NH₃(l) → trans-alkene (anti addition, dissolvin', 'H₂/Pd → alkane (full reduction)'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Reduction of Alkynes.'
      }
    }
  ]
}
