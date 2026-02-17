export const satExpressionPart4Data = {
  topicSlug: 'sat-expression-ideas-sat',
  sections: [
    {
      id: 'sat-e4-intro',
      type: 'text' as const,
      content: `
# Logical Sequence

**Part 4 of 7 — Logical Sequence**

Place sentences where they logically belong in the paragraph.

Topic sentence usually goes first; conclusion sentence goes last.
      `
    },
    {
      id: 'sat-e4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Place sentences where they logically…?',
            options: [
              'Ask: does this sentence fit the flow and purpose of the paragraph?.',
              'Add or delete sentences based on whether they support the main point.',
              'Place sentences where they logically belong in the paragraph.',
              'Topic sentence usually goes first; conclusion sentence goes last.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Place sentences where they logically belong in the paragraph. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Logical Sequence, which explains Key Insight?',
            options: [
              'Add or delete sentences based on whether they support the main point.',
              'Place sentences where they logically belong in the paragraph.',
              'Ask: does this sentence fit the flow and purpose of the paragraph?.',
              'Topic sentence usually goes first; conclusion sentence goes last.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Key Insight: Add or delete sentences based on whether they support the main point. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'sat-e4-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Add or delete sentences based on whether they support the main point.

**SAT Tip:** Ask: does this sentence fit the flow and purpose of the paragraph?.
      `
    },
    {
      id: 'sat-e4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents SAT Tip?',
            options: [
              'Ask: does this sentence fit the flow and purpose of the paragraph?.',
              'Place sentences where they logically belong in the paragraph.',
              'Add or delete sentences based on whether they support the main point.',
              'Topic sentence usually goes first; conclusion sentence goes last.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — SAT Tip: Ask: does this sentence fit the flow and purpose of the paragraph?. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'sat-e4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key Insight',
            options: ['Ask: does this sentence fit the flow and purpose of the paragraph?.', 'Add or delete sentences based on whether they support the main point.', 'Place sentences where they logically belong in the paragraph.', 'Topic sentence usually goes first; conclusion sentence goes last.']
          },
          {
            label: 'SAT Tip',
            options: ['Add or delete sentences based on whether they support the main point.', 'Ask: does this sentence fit the flow and purpose of the paragraph?.', 'Place sentences where they logically belong in the paragraph.', 'Topic sentence usually goes first; conclusion sentence goes last.']
          }
        ],
        correctAnswers: ['Add or delete sentences based on whether they support the main point.', 'Ask: does this sentence fit the flow and purpose of the paragraph?.'],
        hint1: 'Think about what each concept specifically describes in Logical Sequence.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Logical Sequence describes a specific idea. Key Insight: Add or delete sentences based on whether they support the main point. SAT Tip: Ask: does this sentence fit the flow and purpose of the paragraph?.'
      }
    }
  ]
}
