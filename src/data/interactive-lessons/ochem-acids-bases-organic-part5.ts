export const oChemAcidsBasesPart5Data = {
  topicSlug: 'acids-bases-organic',
  sections: [
    {
      id: 'acids5-intro',
      type: 'text' as const,
      content: `
# Predicting Acid-Base Reactions

**Part 5 of 7 — Predicting Acid-Base Reactions**

### 1. Equilibrium favors formation of weaker acid + weaker base

Equilibrium favors formation of weaker acid + weaker base

### 2. Compare pKa values to predict direction

Compare pKa values to predict direction

### 3. Strong acid + strong base → complete reaction

Strong acid + strong base → complete reaction

### 4. Curved arrow notation shows electron flow

Curved arrow notation shows electron flow
      `
    },
    {
      id: 'acids5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Equilibrium favors formation of weaker…" refer to in this topic?',
            options: [
              'Compare pKa values to predict direction',
              'Strong acid + strong base → complete reaction',
              'Curved arrow notation shows electron flow',
              'Equilibrium favors formation of weaker acid + weaker base'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Equilibrium favors formation of weaker acid + weaker base. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Strong acid + strong base → complete…?',
            options: [
              'Equilibrium favors formation of weaker acid + weaker base',
              'Compare pKa values to predict direction',
              'Curved arrow notation shows electron flow',
              'Strong acid + strong base → complete reaction'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Strong acid + strong base → complete reaction. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'acids5-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Equilibrium favors formation of weaker acid + weaker base**
- **Compare pKa values to predict direction**
- **Strong acid + strong base → complete reaction**
- **Curved arrow notation shows electron flow**
      `
    },
    {
      id: 'acids5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to predicting acid-base reactions?',
            options: [
              'Curved arrow notation shows electron flow',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Curved arrow notation shows electron flow'
          }
        ]
      }
    },
    {
      id: 'acids5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Equilibrium favors formation of weaker…',
            options: ['Strong acid + strong base → complete reaction', 'Curved arrow notation shows electron flow', 'Equilibrium favors formation of weaker acid + weaker base', 'Compare pKa values to predict direction']
          },
          {
            label: 'Compare pKa values to predict direction',
            options: ['Strong acid + strong base → complete reaction', 'Compare pKa values to predict direction', 'Equilibrium favors formation of weaker acid + weaker base', 'Curved arrow notation shows electron flow']
          },
          {
            label: 'Strong acid + strong base → complete…',
            options: ['Strong acid + strong base → complete reaction', 'Equilibrium favors formation of weaker acid + weaker base', 'Curved arrow notation shows electron flow', 'Compare pKa values to predict direction']
          }
        ],
        correctAnswers: ['Equilibrium favors formation of weaker acid + weaker base', 'Compare pKa values to predict direction', 'Strong acid + strong base → complete reaction'],
        hint1: 'Think about what each concept specifically describes in Predicting Acid-Base Reactions.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Predicting Acid-Base Reactions describes a specific idea. Equilibrium favors formation of weaker acid + weaker base. Compare pKa values to predict direction. Strong acid + strong base → complete reaction.'
      }
    }
  ]
}
