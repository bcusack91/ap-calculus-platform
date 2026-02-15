export const actPunctuationPart7Data = {
  topicSlug: 'act-english-punctuation-act',
  sections: [
    {
      id: 'act-e7-intro',
      type: 'text' as const,
      content: `
# Review & Applications

**Part 7 of 7 — Review & Applications**

No comma between subject and verb.

No comma before "that" in essential clauses.
      `
    },
    {
      id: 'act-e7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes no comma between subject and verb?',
            options: [
              'No comma between subject and verb is a key concept for ACT English/Reading',
              'No comma before "that" in essential clauses',
              'This concept is not tested on the ACT',
              'None of these apply to ACT preparation'
            ],
            correctAnswer: 0,
            explanation: 'No comma between subject and verb'
          }
        ]
      }
    },
    {
      id: 'act-e7-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Comma splice: two independent clauses joined by only a comma (fix with semicolon or conjunction).

**ACT Tip:** Don't use a semicolon before FANBOYS — use a comma instead.
      `
    },
    {
      id: 'act-e7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for review & applications?',
            options: [
              'Comma splice: two independent clauses joined by only a comma (fix with semicolon or conjunction)',
              'Skip these questions entirely on the ACT',
              'These are only on the optional Writing section',
              'This topic appears only on the SAT'
            ],
            correctAnswer: 0,
            explanation: 'Comma splice: two independent clauses joined by only a comma (fix with semicolon or conjunction)'
          }
        ]
      }
    },
    {
      id: 'act-e7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Review & Applications:',
            options: ['No comma between subject and verb', 'No comma before "that" in essential clauses', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Comma splice: two independent clauses joined by on', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['No comma between subject and verb', 'Comma splice: two independent clauses joined by on'],
        hint1: 'Think about review & applications',
        hint2: 'Consider the best ACT strategy',
        explanation: 'No comma between subject and verb. Comma splice: two independent clauses joined by only a comma (fix with semicolon or conjunction).'
      }
    }
  ]
}
