export const actPunctuationPart5Data = {
  topicSlug: 'act-english-punctuation-act',
  sections: [
    {
      id: 'act-e5-intro',
      type: 'text' as const,
      content: `
# Common Punctuation Errors

**Part 5 of 7 — Common Punctuation Errors**

No comma between subject and verb.

No comma before "that" in essential clauses.
      `
    },
    {
      id: 'act-e5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains No comma between subject and verb.?',
            options: [
              'Comma splice: two independent clauses joined by only a comma (fix with semicolon or conjunction).',
              'No comma between subject and verb.',
              'Don\'t use a semicolon before FANBOYS — use a comma instead.',
              'No comma before "that" in essential clauses.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — No comma between subject and verb. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Key Insight:',
            options: [
              'Comma splice: two independent clauses joined by only a comma (fix with semicolon or conjunction).',
              'No comma between subject and verb.',
              'Don\'t use a semicolon before FANBOYS — use a comma instead.',
              'No comma before "that" in essential clauses.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Key Insight: Comma splice: two independent clauses joined by only a comma (fix with semicolon or conjunction). Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'act-e5-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Comma splice: two independent clauses joined by only a comma (fix with semicolon or conjunction).

**ACT Tip:** Don't use a semicolon before FANBOYS — use a comma instead.
      `
    },
    {
      id: 'act-e5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents ACT Tip?',
            options: [
              'No comma before "that" in essential clauses.',
              'Don\'t use a semicolon before FANBOYS — use a comma instead.',
              'Comma splice: two independent clauses joined by only a comma (fix with semicolon or conjunction).',
              'No comma between subject and verb.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — ACT Tip: Don\'t use a semicolon before FANBOYS — use a comma instead. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'act-e5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key Insight',
            options: ['No comma between subject and verb.', 'No comma before "that" in essential clauses.', 'Comma splice: two independent clauses joined by only a comma (fix with semicolon or conjunction).', 'Don\'t use a semicolon before FANBOYS — use a comma instead.']
          },
          {
            label: 'ACT Tip',
            options: ['No comma between subject and verb.', 'No comma before "that" in essential clauses.', 'Comma splice: two independent clauses joined by only a comma (fix with semicolon or conjunction).', 'Don\'t use a semicolon before FANBOYS — use a comma instead.']
          }
        ],
        correctAnswers: ['Comma splice: two independent clauses joined by only a comma (fix with semicolon or conjunction).', 'Don\'t use a semicolon before FANBOYS — use a comma instead.'],
        hint1: 'Think about what each concept specifically describes in Common Punctuation Errors.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Common Punctuation Errors describes a specific idea. Key Insight: Comma splice: two independent clauses joined by only a comma (fix with semicolon or conjunction). ACT Tip: Don\'t use a semicolon before FANBOYS — use a comma instead.'
      }
    }
  ]
}
