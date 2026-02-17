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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Diazotization" refer to in this topic?',
            options: [
              'ArN₂⁺ + CuX → ArX (X = Cl, Br, CN)',
              'ArN₂⁺ + ArOH → azo dye',
              'Diazonium salts are versatile synthetic intermediates',
              'primary aromatic amine + HNO₂ → diazonium salt (ArN₂⁺)'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Diazotization: primary aromatic amine + HNO₂ → diazonium salt (ArN₂⁺). The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Diazo coupling:',
            options: [
              'primary aromatic amine + HNO₂ → diazonium salt (ArN₂⁺)',
              'Diazonium salts are versatile synthetic intermediates',
              'ArN₂⁺ + CuX → ArX (X = Cl, Br, CN)',
              'ArN₂⁺ + ArOH → azo dye'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Diazo coupling: ArN₂⁺ + ArOH → azo dye. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Diazotization',
            options: ['ArN₂⁺ + CuX → ArX (X = Cl, Br, CN)', 'Diazonium salts are versatile synthetic intermediates', 'ArN₂⁺ + ArOH → azo dye', 'primary aromatic amine + HNO₂ → diazonium salt (ArN₂⁺)']
          },
          {
            label: 'Sandmeyer reaction',
            options: ['Diazonium salts are versatile synthetic intermediates', 'primary aromatic amine + HNO₂ → diazonium salt (ArN₂⁺)', 'ArN₂⁺ + ArOH → azo dye', 'ArN₂⁺ + CuX → ArX (X = Cl, Br, CN)']
          },
          {
            label: 'Diazo coupling',
            options: ['ArN₂⁺ + ArOH → azo dye', 'primary aromatic amine + HNO₂ → diazonium salt (ArN₂⁺)', 'ArN₂⁺ + CuX → ArX (X = Cl, Br, CN)', 'Diazonium salts are versatile synthetic intermediates']
          }
        ],
        correctAnswers: ['primary aromatic amine + HNO₂ → diazonium salt (ArN₂⁺)', 'ArN₂⁺ + CuX → ArX (X = Cl, Br, CN)', 'ArN₂⁺ + ArOH → azo dye'],
        hint1: 'Think about what each concept specifically describes in Diazonium Chemistry.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Diazonium Chemistry describes a specific idea. Diazotization: primary aromatic amine + HNO₂ → diazonium salt (ArN₂⁺). Sandmeyer reaction: ArN₂⁺ + CuX → ArX (X = Cl, Br, CN). Diazo coupling: ArN₂⁺ + ArOH → azo dye.'
      }
    }
  ]
}
