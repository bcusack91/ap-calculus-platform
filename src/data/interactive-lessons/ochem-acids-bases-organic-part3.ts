export const oChemAcidsBasesPart3Data = {
  topicSlug: 'acids-bases-organic',
  sections: [
    {
      id: 'acids3-intro',
      type: 'text' as const,
      content: `
# Factors Affecting Acidity

**Part 3 of 7 — Factors Affecting Acidity**

### 1. Electronegativity

more EN atom stabilizes negative charge → stronger acid

### 2. Atom size

larger atoms stabilize charge → stronger acid (HI > HF)

### 3. Resonance

delocalization stabilizes conjugate base → stronger acid

### 4. Inductive effects

electron-withdrawing groups increase acidity
      `
    },
    {
      id: 'acids3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of factors affecting acidity?',
            options: [
              'Electronegativity',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'Electronegativity: more EN atom stabilizes negative charge → stronger acid'
          },
          {
            question: 'In the context of factors affecting acidity, which is accurate?',
            options: [
              'delocalization stabilizes conjugate base → stronger acid',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Resonance: delocalization stabilizes conjugate base → stronger acid'
          }
        ]
      }
    },
    {
      id: 'acids3-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Electronegativity**: more EN atom stabilizes negative charge → stronger acid
- **Atom size**: larger atoms stabilize charge → stronger acid (HI > HF)
- **Resonance**: delocalization stabilizes conjugate base → stronger acid
- **Inductive effects**: electron-withdrawing groups increase acidity
      `
    },
    {
      id: 'acids3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to factors affecting acidity?',
            options: [
              'electron-withdrawing groups increase acidity',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Inductive effects: electron-withdrawing groups increase acidity'
          }
        ]
      }
    },
    {
      id: 'acids3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Electronegativity',
            options: ['more EN atom stabilizes negative charge → stronger', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Atom size',
            options: ['larger atoms stabilize charge → stronger acid (HI ', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Resonance',
            options: ['delocalization stabilizes conjugate base → stronge', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['more EN atom stabilizes negative charge → stronger', 'larger atoms stabilize charge → stronger acid (HI ', 'delocalization stabilizes conjugate base → stronge'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Factors Affecting Acidity.'
      }
    }
  ]
}
