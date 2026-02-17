export const actPunctuationPart6Data = {
  topicSlug: 'act-english-punctuation-act',
  sections: [
    {
      id: 'act-e6-intro',
      type: 'text' as const,
      content: `
# Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

No comma between subject and verb.

No comma before "that" in essential clauses.
      `
    },
    {
      id: 'act-e6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains No comma between subject and verb.?',
            options: [
              'Don\'t use a semicolon before FANBOYS — use a comma instead.',
              'Comma splice: two independent clauses joined by only a comma (fix with semicolon or conjunction).',
              'No comma before "that" in essential clauses.',
              'No comma between subject and verb.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — No comma between subject and verb. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Key Insight:',
            options: [
              'No comma between subject and verb.',
              'Don\'t use a semicolon before FANBOYS — use a comma instead.',
              'Comma splice: two independent clauses joined by only a comma (fix with semicolon or conjunction).',
              'No comma before "that" in essential clauses.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Key Insight: Comma splice: two independent clauses joined by only a comma (fix with semicolon or conjunction). Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'act-e6-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Comma splice: two independent clauses joined by only a comma (fix with semicolon or conjunction).

**ACT Tip:** Don't use a semicolon before FANBOYS — use a comma instead.
      `
    },
    {
      id: 'act-e6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Problem-Solving Workshop, which correctly describes ACT Tip?',
            options: [
              'No comma between subject and verb.',
              'Don\'t use a semicolon before FANBOYS — use a comma instead.',
              'Comma splice: two independent clauses joined by only a comma (fix with semicolon or conjunction).',
              'No comma before "that" in essential clauses.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — ACT Tip: Don\'t use a semicolon before FANBOYS — use a comma instead. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'act-e6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key Insight',
            options: ['Don\'t use a semicolon before FANBOYS — use a comma instead.', 'Comma splice: two independent clauses joined by only a comma (fix with semicolon or conjunction).', 'No comma between subject and verb.', 'No comma before "that" in essential clauses.']
          },
          {
            label: 'ACT Tip',
            options: ['Don\'t use a semicolon before FANBOYS — use a comma instead.', 'No comma before "that" in essential clauses.', 'Comma splice: two independent clauses joined by only a comma (fix with semicolon or conjunction).', 'No comma between subject and verb.']
          }
        ],
        correctAnswers: ['Comma splice: two independent clauses joined by only a comma (fix with semicolon or conjunction).', 'Don\'t use a semicolon before FANBOYS — use a comma instead.'],
        hint1: 'Think about what each concept specifically describes in Problem-Solving Workshop.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Problem-Solving Workshop describes a specific idea. Key Insight: Comma splice: two independent clauses joined by only a comma (fix with semicolon or conjunction). ACT Tip: Don\'t use a semicolon before FANBOYS — use a comma instead.'
      }
    }
  ]
}
