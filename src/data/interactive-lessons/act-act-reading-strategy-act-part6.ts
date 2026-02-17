export const actReadingStratPart6Data = {
  topicSlug: 'act-reading-strategy-act',
  sections: [
    {
      id: 'act-r6-intro',
      type: 'text' as const,
      content: `
# Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

Main idea: asks about the passage as a whole.

Detail: asks about specific information stated in the passage.
      `
    },
    {
      id: 'act-r6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Main idea?',
            options: [
              'asks about specific information stated in the passage.',
              'asks about the passage as a whole.',
              'Vocabulary: asks about word meaning in context.',
              'Inference: asks what can be concluded or implied.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Main idea: asks about the passage as a whole. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Key Insight:',
            options: [
              'asks about the passage as a whole.',
              'Inference: asks what can be concluded or implied.',
              'asks about specific information stated in the passage.',
              'Vocabulary: asks about word meaning in context.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Key Insight: Inference: asks what can be concluded or implied. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'act-r6-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Inference: asks what can be concluded or implied.

**ACT Tip:** Vocabulary: asks about word meaning in context.
      `
    },
    {
      id: 'act-r6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about ACT Tip is correct?',
            options: [
              'asks about specific information stated in the passage.',
              'asks about the passage as a whole.',
              'Vocabulary: asks about word meaning in context.',
              'Inference: asks what can be concluded or implied.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — ACT Tip: Vocabulary: asks about word meaning in context. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'act-r6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Main idea',
            options: ['Vocabulary: asks about word meaning in context.', 'asks about specific information stated in the passage.', 'Inference: asks what can be concluded or implied.', 'asks about the passage as a whole.']
          },
          {
            label: 'Detail',
            options: ['Vocabulary: asks about word meaning in context.', 'Inference: asks what can be concluded or implied.', 'asks about specific information stated in the passage.', 'asks about the passage as a whole.']
          },
          {
            label: 'Key Insight',
            options: ['Inference: asks what can be concluded or implied.', 'Vocabulary: asks about word meaning in context.', 'asks about the passage as a whole.', 'asks about specific information stated in the passage.']
          }
        ],
        correctAnswers: ['asks about the passage as a whole.', 'asks about specific information stated in the passage.', 'Inference: asks what can be concluded or implied.'],
        hint1: 'Think about what each concept specifically describes in Problem-Solving Workshop.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Problem-Solving Workshop describes a specific idea. Main idea: asks about the passage as a whole. Detail: asks about specific information stated in the passage. Key Insight: Inference: asks what can be concluded or implied.'
      }
    }
  ]
}
