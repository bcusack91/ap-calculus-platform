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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of predicting acid-base reactions?',
            options: [
              'Equilibrium favors formation of weaker acid + weaker base',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'Equilibrium favors formation of weaker acid + weaker base'
          },
          {
            question: 'In the context of predicting acid-base reactions, which is accurate?',
            options: [
              'Strong acid + strong base → complete reaction',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Strong acid + strong base → complete reaction'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Equilibrium favors formation of weaker acid + weaker base',
            options: ['Equilibrium favors formation of weaker acid + weak', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Compare pKa values to predict direction',
            options: ['Compare pKa values to predict direction', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Strong acid + strong base → complete reaction',
            options: ['Strong acid + strong base → complete reaction', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['Equilibrium favors formation of weaker acid + weak', 'Compare pKa values to predict direction', 'Strong acid + strong base → complete reaction'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Predicting Acid-Base Reactions.'
      }
    }
  ]
}
