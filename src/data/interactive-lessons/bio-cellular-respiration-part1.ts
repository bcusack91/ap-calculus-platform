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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Overall equation?',
            options: [
              'C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ATP',
              'Glucose → 2 pyruvate + 2 ATP + 2 NADH',
              'Glycolysis occurs in cytoplasm, no O₂ required',
              'First step of both aerobic and anaerobic respiration'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Overall equation: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ATP. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Glucose → 2 pyruvate + 2 ATP + 2 NADH?',
            options: [
              'Glucose → 2 pyruvate + 2 ATP + 2 NADH',
              'C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ATP',
              'First step of both aerobic and anaerobic respiration',
              'Glycolysis occurs in cytoplasm, no O₂ required'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Glucose → 2 pyruvate + 2 ATP + 2 NADH. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about First step of both aerobic and… is correct?',
            options: [
              'First step of both aerobic and anaerobic respiration',
              'Glycolysis occurs in cytoplasm, no O₂ required',
              'C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ATP',
              'Glucose → 2 pyruvate + 2 ATP + 2 NADH'
            ],
            correctAnswer: 0,
            explanation: 'Correct — First step of both aerobic and anaerobic respiration. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'cell1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Overall equation',
            options: ['Glycolysis occurs in cytoplasm, no O₂ required', 'First step of both aerobic and anaerobic respiration', 'C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ATP', 'Glucose → 2 pyruvate + 2 ATP + 2 NADH']
          },
          {
            label: 'Glycolysis occurs in cytoplasm, no O₂…',
            options: ['Glycolysis occurs in cytoplasm, no O₂ required', 'C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ATP', 'First step of both aerobic and anaerobic respiration', 'Glucose → 2 pyruvate + 2 ATP + 2 NADH']
          },
          {
            label: 'Glucose → 2 pyruvate + 2 ATP + 2 NADH',
            options: ['First step of both aerobic and anaerobic respiration', 'Glycolysis occurs in cytoplasm, no O₂ required', 'Glucose → 2 pyruvate + 2 ATP + 2 NADH', 'C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ATP']
          }
        ],
        correctAnswers: ['C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ATP', 'Glycolysis occurs in cytoplasm, no O₂ required', 'Glucose → 2 pyruvate + 2 ATP + 2 NADH'],
        hint1: 'Think about what each concept specifically describes in Overview & Glycolysis.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Overview & Glycolysis describes a specific idea. Overall equation: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ATP. Glycolysis occurs in cytoplasm, no O₂ required. Glucose → 2 pyruvate + 2 ATP + 2 NADH.'
      }
    }
  ]
}
