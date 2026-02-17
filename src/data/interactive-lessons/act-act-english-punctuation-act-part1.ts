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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Comma before FANBOYS (for, and, nor,…?',
            options: [
              'Between items in a list of three or more (serial/Oxford comma).',
              'After introductory phrases/clauses.',
              'Comma before FANBOYS (for, and, nor, but, or, yet, so) in compound sentences.',
              'Around nonessential (nonrestrictive) information.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Comma before FANBOYS (for, and, nor, but, or, yet, so) in compound sentences. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Key Insight?',
            options: [
              'After introductory phrases/clauses.',
              'Around nonessential (nonrestrictive) information.',
              'Between items in a list of three or more (serial/Oxford comma).',
              'Comma before FANBOYS (for, and, nor, but, or, yet, so) in compound sentences.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Key Insight: Around nonessential (nonrestrictive) information. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about ACT Tip is correct?',
            options: [
              'Around nonessential (nonrestrictive) information.',
              'Comma before FANBOYS (for, and, nor, but, or, yet, so) in compound sentences.',
              'After introductory phrases/clauses.',
              'Between items in a list of three or more (serial/Oxford comma).'
            ],
            correctAnswer: 3,
            explanation: 'Correct — ACT Tip: Between items in a list of three or more (serial/Oxford comma). Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'act-e1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key Insight',
            options: ['Comma before FANBOYS (for, and, nor, but, or, yet, so) in compound sentences.', 'Between items in a list of three or more (serial/Oxford comma).', 'After introductory phrases/clauses.', 'Around nonessential (nonrestrictive) information.']
          },
          {
            label: 'ACT Tip',
            options: ['Comma before FANBOYS (for, and, nor, but, or, yet, so) in compound sentences.', 'Around nonessential (nonrestrictive) information.', 'After introductory phrases/clauses.', 'Between items in a list of three or more (serial/Oxford comma).']
          }
        ],
        correctAnswers: ['Around nonessential (nonrestrictive) information.', 'Between items in a list of three or more (serial/Oxford comma).'],
        hint1: 'Think about what each concept specifically describes in English Punctuation.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in English Punctuation describes a specific idea. Key Insight: Around nonessential (nonrestrictive) information. ACT Tip: Between items in a list of three or more (serial/Oxford comma).'
      }
    }
  ]
}
