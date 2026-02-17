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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Dashes set off emphatic or explanatory…?',
            options: [
              'Parentheses for supplementary information (less emphasis than dashes).',
              'Use a pair of dashes like parentheses — or a single dash for emphasis.',
              'Dashes set off emphatic or explanatory information.',
              'Be consistent: if you open with a dash, close with a dash (not a comma).'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Dashes set off emphatic or explanatory information. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Key Insight:',
            options: [
              'Use a pair of dashes like parentheses — or a single dash for emphasis.',
              'Dashes set off emphatic or explanatory information.',
              'Be consistent: if you open with a dash, close with a dash (not a comma).',
              'Parentheses for supplementary information (less emphasis than dashes).'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Key Insight: Parentheses for supplementary information (less emphasis than dashes). Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about ACT Tip is correct?',
            options: [
              'Use a pair of dashes like parentheses — or a single dash for emphasis.',
              'Dashes set off emphatic or explanatory information.',
              'Parentheses for supplementary information (less emphasis than dashes).',
              'Be consistent: if you open with a dash, close with a dash (not a comma).'
            ],
            correctAnswer: 3,
            explanation: 'Correct — ACT Tip: Be consistent: if you open with a dash, close with a dash (not a comma). Each option describes a real concept from this topic, so pay attention to the specific details.'
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
            options: ['Be consistent: if you open with a dash, close with a dash (not a comma).', 'Dashes set off emphatic or explanatory information.', 'Use a pair of dashes like parentheses — or a single dash for emphasis.', 'Parentheses for supplementary information (less emphasis than dashes).']
          },
          {
            label: 'ACT Tip',
            options: ['Use a pair of dashes like parentheses — or a single dash for emphasis.', 'Dashes set off emphatic or explanatory information.', 'Be consistent: if you open with a dash, close with a dash (not a comma).', 'Parentheses for supplementary information (less emphasis than dashes).']
          }
        ],
        correctAnswers: ['Parentheses for supplementary information (less emphasis than dashes).', 'Be consistent: if you open with a dash, close with a dash (not a comma).'],
        hint1: 'Think about what each concept specifically describes in Dashes & Parentheses.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Dashes & Parentheses describes a specific idea. Key Insight: Parentheses for supplementary information (less emphasis than dashes). ACT Tip: Be consistent: if you open with a dash, close with a dash (not a comma).'
      }
    }
  ]
}
