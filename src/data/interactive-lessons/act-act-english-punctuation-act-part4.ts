export const actPunctuationPart4Data = {
  topicSlug: 'act-english-punctuation-act',
  sections: [
    {
      id: 'act-e4-intro',
      type: 'text' as const,
      content: `
# Dashes & Parentheses

**Part 4 of 7 — Dashes & Parentheses**

Dashes set off emphatic or explanatory information.

Use a pair of dashes like parentheses — or a single dash for emphasis.
      `
    },
    {
      id: 'act-e4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes dashes set off emphatic or explanatory information?',
            options: [
              'Dashes set off emphatic or explanatory information is a key concept for ACT English/Reading',
              'Use a pair of dashes like parentheses — or a single dash for emphasis',
              'This concept is not tested on the ACT',
              'None of these apply to ACT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Dashes set off emphatic or explanatory information'
          }
        ]
      }
    },
    {
      id: 'act-e4-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Parentheses for supplementary information (less emphasis than dashes).

**ACT Tip:** Be consistent: if you open with a dash, close with a dash (not a comma).
      `
    },
    {
      id: 'act-e4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for dashes & parentheses?',
            options: [
              'Parentheses for supplementary information (less emphasis than dashes)',
              'Skip these questions entirely on the ACT',
              'These are only on the optional Writing section',
              'This topic appears only on the SAT'
            ],
            correctAnswer: 0,
            explanation: 'Parentheses for supplementary information (less emphasis than dashes)'
          }
        ]
      }
    },
    {
      id: 'act-e4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Dashes & Parentheses:',
            options: ['Dashes set off emphatic or explanatory information', 'Use a pair of dashes like parentheses — or a singl', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Parentheses for supplementary information (less em', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Dashes set off emphatic or explanatory information', 'Parentheses for supplementary information (less em'],
        hint1: 'Think about dashes & parentheses',
        hint2: 'Consider the best ACT strategy',
        explanation: 'Dashes set off emphatic or explanatory information. Parentheses for supplementary information (less emphasis than dashes).'
      }
    }
  ]
}
