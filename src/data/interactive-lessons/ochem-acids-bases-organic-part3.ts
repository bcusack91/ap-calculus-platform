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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Electronegativity" refer to in this topic?',
            options: [
              'larger atoms stabilize charge → stronger acid (HI > HF)',
              'delocalization stabilizes conjugate base → stronger acid',
              'more EN atom stabilizes negative charge → stronger acid',
              'electron-withdrawing groups increase acidity'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Electronegativity: more EN atom stabilizes negative charge → stronger acid. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Factors Affecting Acidity, which explains Resonance?',
            options: [
              'larger atoms stabilize charge → stronger acid (HI > HF)',
              'electron-withdrawing groups increase acidity',
              'delocalization stabilizes conjugate base → stronger acid',
              'more EN atom stabilizes negative charge → stronger acid'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Resonance: delocalization stabilizes conjugate base → stronger acid. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Electronegativity',
            options: ['more EN atom stabilizes negative charge → stronger acid', 'electron-withdrawing groups increase acidity', 'larger atoms stabilize charge → stronger acid (HI > HF)', 'delocalization stabilizes conjugate base → stronger acid']
          },
          {
            label: 'Atom size',
            options: ['delocalization stabilizes conjugate base → stronger acid', 'larger atoms stabilize charge → stronger acid (HI > HF)', 'electron-withdrawing groups increase acidity', 'more EN atom stabilizes negative charge → stronger acid']
          },
          {
            label: 'Resonance',
            options: ['larger atoms stabilize charge → stronger acid (HI > HF)', 'more EN atom stabilizes negative charge → stronger acid', 'electron-withdrawing groups increase acidity', 'delocalization stabilizes conjugate base → stronger acid']
          }
        ],
        correctAnswers: ['more EN atom stabilizes negative charge → stronger acid', 'larger atoms stabilize charge → stronger acid (HI > HF)', 'delocalization stabilizes conjugate base → stronger acid'],
        hint1: 'Think about what each concept specifically describes in Factors Affecting Acidity.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Factors Affecting Acidity describes a specific idea. Electronegativity: more EN atom stabilizes negative charge → stronger acid. Atom size: larger atoms stabilize charge → stronger acid (HI > HF). Resonance: delocalization stabilizes conjugate base → stronger acid.'
      }
    }
  ]
}
