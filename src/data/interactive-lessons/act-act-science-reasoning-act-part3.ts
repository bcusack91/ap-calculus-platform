export const actScienceReasonPart3Data = {
  topicSlug: 'act-science-reasoning-act',
  sections: [
    {
      id: 'act-s3-intro',
      type: 'text' as const,
      content: `
# Drawing Conclusions

**Part 3 of 7 — Drawing Conclusions**

Conclusions must be based on the actual data, not assumptions.

Correlation does not equal causation.
      `
    },
    {
      id: 'act-s3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Conclusions must be based on the actual…?',
            options: [
              'Correlation does not equal causation.',
              'Conclusions must be based on the actual data, not assumptions.',
              'Valid conclusions are limited to the scope of the experiment.',
              'Look for alternative explanations before accepting a conclusion.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Conclusions must be based on the actual data, not assumptions. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Key Insight?',
            options: [
              'Look for alternative explanations before accepting a conclusion.',
              'Correlation does not equal causation.',
              'Conclusions must be based on the actual data, not assumptions.',
              'Valid conclusions are limited to the scope of the experiment.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Key Insight: Look for alternative explanations before accepting a conclusion. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'act-s3-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Look for alternative explanations before accepting a conclusion.

**ACT Tip:** Valid conclusions are limited to the scope of the experiment.
      `
    },
    {
      id: 'act-s3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents ACT Tip?',
            options: [
              'Look for alternative explanations before accepting a conclusion.',
              'Correlation does not equal causation.',
              'Valid conclusions are limited to the scope of the experiment.',
              'Conclusions must be based on the actual data, not assumptions.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — ACT Tip: Valid conclusions are limited to the scope of the experiment. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'act-s3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key Insight',
            options: ['Conclusions must be based on the actual data, not assumptions.', 'Look for alternative explanations before accepting a conclusion.', 'Correlation does not equal causation.', 'Valid conclusions are limited to the scope of the experiment.']
          },
          {
            label: 'ACT Tip',
            options: ['Correlation does not equal causation.', 'Valid conclusions are limited to the scope of the experiment.', 'Look for alternative explanations before accepting a conclusion.', 'Conclusions must be based on the actual data, not assumptions.']
          }
        ],
        correctAnswers: ['Look for alternative explanations before accepting a conclusion.', 'Valid conclusions are limited to the scope of the experiment.'],
        hint1: 'Think about what each concept specifically describes in Drawing Conclusions.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Drawing Conclusions describes a specific idea. Key Insight: Look for alternative explanations before accepting a conclusion. ACT Tip: Valid conclusions are limited to the scope of the experiment.'
      }
    }
  ]
}
