export const actReadingStratPart5Data = {
  topicSlug: 'act-reading-strategy-act',
  sections: [
    {
      id: 'act-r5-intro',
      type: 'text' as const,
      content: `
# Question Type Recognition

**Part 5 of 7 — Question Type Recognition**

Main idea: asks about the passage as a whole.

Detail: asks about specific information stated in the passage.
      `
    },
    {
      id: 'act-r5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Main idea?',
            options: [
              'Inference: asks what can be concluded or implied.',
              'Vocabulary: asks about word meaning in context.',
              'asks about specific information stated in the passage.',
              'asks about the passage as a whole.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Main idea: asks about the passage as a whole. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Key Insight:',
            options: [
              'asks about the passage as a whole.',
              'Inference: asks what can be concluded or implied.',
              'Vocabulary: asks about word meaning in context.',
              'asks about specific information stated in the passage.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Key Insight: Inference: asks what can be concluded or implied. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'act-r5-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Inference: asks what can be concluded or implied.

**ACT Tip:** Vocabulary: asks about word meaning in context.
      `
    },
    {
      id: 'act-r5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents ACT Tip?',
            options: [
              'Inference: asks what can be concluded or implied.',
              'Vocabulary: asks about word meaning in context.',
              'asks about specific information stated in the passage.',
              'asks about the passage as a whole.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — ACT Tip: Vocabulary: asks about word meaning in context. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'act-r5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Main idea',
            options: ['asks about specific information stated in the passage.', 'Inference: asks what can be concluded or implied.', 'asks about the passage as a whole.', 'Vocabulary: asks about word meaning in context.']
          },
          {
            label: 'Detail',
            options: ['Inference: asks what can be concluded or implied.', 'asks about the passage as a whole.', 'Vocabulary: asks about word meaning in context.', 'asks about specific information stated in the passage.']
          },
          {
            label: 'Key Insight',
            options: ['asks about the passage as a whole.', 'Inference: asks what can be concluded or implied.', 'asks about specific information stated in the passage.', 'Vocabulary: asks about word meaning in context.']
          }
        ],
        correctAnswers: ['asks about the passage as a whole.', 'asks about specific information stated in the passage.', 'Inference: asks what can be concluded or implied.'],
        hint1: 'Think about what each concept specifically describes in Question Type Recognition.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Question Type Recognition describes a specific idea. Main idea: asks about the passage as a whole. Detail: asks about specific information stated in the passage. Key Insight: Inference: asks what can be concluded or implied.'
      }
    }
  ]
}
