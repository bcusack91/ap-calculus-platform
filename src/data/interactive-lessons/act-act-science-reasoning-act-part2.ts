export const actScienceReasonPart2Data = {
  topicSlug: 'act-science-reasoning-act',
  sections: [
    {
      id: 'act-s2-intro',
      type: 'text' as const,
      content: `
# Hypothesis Testing

**Part 2 of 7 — Hypothesis Testing**

Hypothesis predicts the relationship between variables.

If the data supports the hypothesis, it is not "proven" — just supported.
      `
    },
    {
      id: 'act-s2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Hypothesis predicts the relationship…?',
            options: [
              'Statistical significance: is the result likely due to the variable or just chance?.',
              'Hypothesis predicts the relationship between variables.',
              'If the data contradicts the hypothesis, it must be revised or rejected.',
              'If the data supports the hypothesis, it is not "proven" — just supported.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Hypothesis predicts the relationship between variables. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Hypothesis Testing, which explains Key Insight?',
            options: [
              'If the data contradicts the hypothesis, it must be revised or rejected.',
              'Hypothesis predicts the relationship between variables.',
              'Statistical significance: is the result likely due to the variable or just chance?.',
              'If the data supports the hypothesis, it is not "proven" — just supported.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Key Insight: If the data contradicts the hypothesis, it must be revised or rejected. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'act-s2-detail',
      type: 'text' as const,
      content: `
**Key Insight:** If the data contradicts the hypothesis, it must be revised or rejected.

**ACT Tip:** Statistical significance: is the result likely due to the variable or just chance?.
      `
    },
    {
      id: 'act-s2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about ACT Tip is correct?',
            options: [
              'If the data contradicts the hypothesis, it must be revised or rejected.',
              'Hypothesis predicts the relationship between variables.',
              'If the data supports the hypothesis, it is not "proven" — just supported.',
              'Statistical significance: is the result likely due to the variable or just chance?.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — ACT Tip: Statistical significance: is the result likely due to the variable or just chance?. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'act-s2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key Insight',
            options: ['If the data supports the hypothesis, it is not "proven" — just supported.', 'Statistical significance: is the result likely due to the variable or just chance?.', 'Hypothesis predicts the relationship between variables.', 'If the data contradicts the hypothesis, it must be revised or rejected.']
          },
          {
            label: 'ACT Tip',
            options: ['If the data contradicts the hypothesis, it must be revised or rejected.', 'Statistical significance: is the result likely due to the variable or just chance?.', 'Hypothesis predicts the relationship between variables.', 'If the data supports the hypothesis, it is not "proven" — just supported.']
          }
        ],
        correctAnswers: ['If the data contradicts the hypothesis, it must be revised or rejected.', 'Statistical significance: is the result likely due to the variable or just chance?.'],
        hint1: 'Think about what each concept specifically describes in Hypothesis Testing.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Hypothesis Testing describes a specific idea. Key Insight: If the data contradicts the hypothesis, it must be revised or rejected. ACT Tip: Statistical significance: is the result likely due to the variable or just chance?.'
      }
    }
  ]
}
