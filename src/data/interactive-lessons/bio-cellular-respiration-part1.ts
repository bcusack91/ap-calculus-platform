export const bioCellRespirationPart1Data = {
  topicSlug: 'cellular-respiration',
  sections: [
    {
      id: 'cell1-intro-p1',
      type: 'text' as const,
      content: `
# ## Overview & Glycolysis

**Part 1 of 7 — Overview & Glycolysis**

1. Overall equation: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ATP
2. Glycolysis occurs in cytoplasm, no O₂ required
3. Glucose → 2 pyruvate + 2 ATP + 2 NADH
4. First step of both aerobic and anaerobic respiration
      `
    },
    {
      id: 'cell1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes overall equation?',
            options: [
              'C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ATP',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'Overall equation: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ATP'
          },
          {
            question: 'In the context of overview & glycolysis, which statement is accurate?',
            options: [
              'Glucose → 2 pyruvate + 2 ATP + 2 NADH',
              'PTA + O₂H6 + ₂OC6 → ₂O6 + ₆O₂₁H₆C :noitauqe llarevO',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Glucose → 2 pyruvate + 2 ATP + 2 NADH'
          }
        ]
      }
    },
    {
      id: 'cell1-detail-p1',
      type: 'text' as const,
      content: `
# ### Key Details

- **Overall equation**: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ATP
- **Glycolysis occurs in cytoplasm, no O₂ required**
- **Glucose → 2 pyruvate + 2 ATP + 2 NADH**
- **First step of both aerobic and anaerobic respiration**
      `
    },
    {
      id: 'cell1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to overview & glycolysis?',
            options: [
              'First step of both aerobic and anaerobic respiration',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'First step of both aerobic and anaerobic respiration'
          }
        ]
      }
    },
    {
      id: 'cell1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Overall equation is important in overview & glycolysis because',
            options: ['C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ATP', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Glycolysis occurs in cytoplasm, no O₂ required is important in overview & glycolysis because',
            options: ['Glycolysis occurs in cytoplasm, no O₂ required', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Glucose → 2 pyruvate + 2 ATP + 2 NADH is important in overview & glycolysis because',
            options: ['Glucose → 2 pyruvate + 2 ATP + 2 NADH', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ATP', 'Glycolysis occurs in cytoplasm, no O₂ required', 'Glucose → 2 pyruvate + 2 ATP + 2 NADH'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Overview & Glycolysis.'
      }
    }
  ]
}
