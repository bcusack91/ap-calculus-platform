export const actEnglishStratPart4Data = {
  topicSlug: 'act-english-strategy-act',
  sections: [
    {
      id: 'act-e4-intro',
      type: 'text' as const,
      content: `
# Answer Elimination

**Part 4 of 7 — Answer Elimination**

"NO CHANGE" is correct about 25% of the time — don't avoid it.

Shorter answers are often correct when content is the same.
      `
    },
    {
      id: 'act-e4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes "NO CHANGE" is correct about 25% of the…?',
            options: [
              'Shorter answers are often correct when content is the same.',
              '"NO CHANGE" is correct about 25% of the time — don\'t avoid it.',
              'Eliminate obviously wrong choices first.',
              'If two answers are grammatically correct, choose the one that fits the context better.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — "NO CHANGE" is correct about 25% of the time — don\'t avoid it. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Key Insight?',
            options: [
              'Shorter answers are often correct when content is the same.',
              'If two answers are grammatically correct, choose the one that fits the context better.',
              'Eliminate obviously wrong choices first.',
              '"NO CHANGE" is correct about 25% of the time — don\'t avoid it.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Key Insight: Eliminate obviously wrong choices first. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'act-e4-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Eliminate obviously wrong choices first.

**ACT Tip:** If two answers are grammatically correct, choose the one that fits the context better.
      `
    },
    {
      id: 'act-e4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about ACT Tip is correct?',
            options: [
              'Eliminate obviously wrong choices first.',
              'Shorter answers are often correct when content is the same.',
              '"NO CHANGE" is correct about 25% of the time — don\'t avoid it.',
              'If two answers are grammatically correct, choose the one that fits the context better.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — ACT Tip: If two answers are grammatically correct, choose the one that fits the context better. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'act-e4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key Insight',
            options: ['"NO CHANGE" is correct about 25% of the time — don\'t avoid it.', 'If two answers are grammatically correct, choose the one that fits the context better.', 'Shorter answers are often correct when content is the same.', 'Eliminate obviously wrong choices first.']
          },
          {
            label: 'ACT Tip',
            options: ['If two answers are grammatically correct, choose the one that fits the context better.', 'Eliminate obviously wrong choices first.', 'Shorter answers are often correct when content is the same.', '"NO CHANGE" is correct about 25% of the time — don\'t avoid it.']
          }
        ],
        correctAnswers: ['Eliminate obviously wrong choices first.', 'If two answers are grammatically correct, choose the one that fits the context better.'],
        hint1: 'Think about what each concept specifically describes in Answer Elimination.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Answer Elimination describes a specific idea. Key Insight: Eliminate obviously wrong choices first. ACT Tip: If two answers are grammatically correct, choose the one that fits the context better.'
      }
    }
  ]
}
