export const actPunctuationPart1Data = {
  topicSlug: 'act-english-punctuation-act',
  sections: [
    {
      id: 'act-e1-intro',
      type: 'text' as const,
      content: `
# 📋 English Punctuation

**Part 1 of 7 — Commas**

Comma before FANBOYS (for, and, nor, but, or, yet, so) in compound sentences.

After introductory phrases/clauses.
      `
    },
    {
      id: 'act-e1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes comma before fanboys (for, and, nor, but, or, yet, so) in compound sentences?',
            options: [
              'Comma before FANBOYS (for, and, nor, but, or, yet, so) in compound sentences is a key concept for ACT English/Reading',
              'After introductory phrases/clauses',
              'This concept is not tested on the ACT',
              'None of these apply to ACT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Comma before FANBOYS (for, and, nor, but, or, yet, so) in compound sentences'
          }
        ]
      }
    },
    {
      id: 'act-e1-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Around nonessential (nonrestrictive) information.

**ACT Tip:** Between items in a list of three or more (serial/Oxford comma).
      `
    },
    {
      id: 'act-e1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for commas?',
            options: [
              'Around nonessential (nonrestrictive) information',
              'Skip these questions entirely on the ACT',
              'These are only on the optional Writing section',
              'This topic appears only on the SAT'
            ],
            correctAnswer: 0,
            explanation: 'Around nonessential (nonrestrictive) information'
          }
        ]
      }
    },
    {
      id: 'act-e1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Commas:',
            options: ['Comma before FANBOYS (for, and, nor, but, or, yet,', 'After introductory phrases/clauses', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Around nonessential (nonrestrictive) information', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Comma before FANBOYS (for, and, nor, but, or, yet,', 'Around nonessential (nonrestrictive) information'],
        hint1: 'Think about commas',
        hint2: 'Consider the best ACT strategy',
        explanation: 'Comma before FANBOYS (for, and, nor, but, or, yet, so) in compound sentences. Around nonessential (nonrestrictive) information.'
      }
    }
  ]
}
