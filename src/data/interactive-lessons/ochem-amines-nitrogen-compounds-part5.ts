export const oChemAminesPart5Data = {
  topicSlug: 'amines-nitrogen-compounds',
  sections: [
    {
      id: 'amine5-intro',
      type: 'text' as const,
      content: `
# Diazonium Chemistry

**Part 5 of 7 — Diazonium Chemistry**

### 1. Diazotization

primary aromatic amine + HNO₂ → diazonium salt (ArN₂⁺)

### 2. Sandmeyer reaction

ArN₂⁺ + CuX → ArX (X = Cl, Br, CN)

### 3. Diazo coupling

ArN₂⁺ + ArOH → azo dye

### 4. Diazonium salts are versatile synthetic intermediates

Diazonium salts are versatile synthetic intermediates
      `
    },
    {
      id: 'amine5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of diazonium chemistry?',
            options: [
              'Diazotization',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'Diazotization: primary aromatic amine + HNO₂ → diazonium salt (ArN₂⁺)'
          },
          {
            question: 'In the context of diazonium chemistry, which is accurate?',
            options: [
              'ArN₂⁺ + ArOH → azo dye',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Diazo coupling: ArN₂⁺ + ArOH → azo dye'
          }
        ]
      }
    },
    {
      id: 'amine5-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Diazotization**: primary aromatic amine + HNO₂ → diazonium salt (ArN₂⁺)
- **Sandmeyer reaction**: ArN₂⁺ + CuX → ArX (X = Cl, Br, CN)
- **Diazo coupling**: ArN₂⁺ + ArOH → azo dye
- **Diazonium salts are versatile synthetic intermediates**
      `
    },
    {
      id: 'amine5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to diazonium chemistry?',
            options: [
              'Diazonium salts are versatile synthetic intermediates',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Diazonium salts are versatile synthetic intermediates'
          }
        ]
      }
    },
    {
      id: 'amine5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Diazotization',
            options: ['primary aromatic amine + HNO₂ → diazonium salt (Ar', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Sandmeyer reaction',
            options: ['ArN₂⁺ + CuX → ArX (X = Cl, Br, CN)', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Diazo coupling',
            options: ['ArN₂⁺ + ArOH → azo dye', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['primary aromatic amine + HNO₂ → diazonium salt (Ar', 'ArN₂⁺ + CuX → ArX (X = Cl, Br, CN)', 'ArN₂⁺ + ArOH → azo dye'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Diazonium Chemistry.'
      }
    }
  ]
}
