export const mcatTestDayPart4Data = {
  topicSlug: 'mcat-test-day-strategy-mcat',
  sections: [
    {
      id: 'mcat-4-intro',
      type: 'text' as const,
      content: `
# Practice Test Analysis

**Part 4 of 7 — Practice Test Analysis**

Review every wrong answer on practice tests — categorize errors as content, reasoning, or careless.

Content gap: you didnt know the material — go back and study.
      `
    },
    {
      id: 'mcat-4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes a key concept in practice test analysis?',
            options: [
              'Review every wrong answer on practice tests — categorize errors as content, reasoning, or careless',
              'This topic is not tested on the MCAT',
              'This applies only to clinical practice, not the MCAT',
              'None of the above'
            ],
            correctAnswer: 0,
            explanation: 'Review every wrong answer on practice tests — categorize errors as content, reasoning, or careless'
          }
        ]
      }
    },
    {
      id: 'mcat-4-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Reasoning error: you knew the content but applied it incorrectly — practice passage strategy.

**MCAT Tip:** Careless mistake: you knew the answer but misread — slow down, read carefully.
      `
    },
    {
      id: 'mcat-4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is an important principle for MCAT Strategy related to practice test analysis?',
            options: [
              'Reasoning error: you knew the content but applied it incorrectly — practice passage strategy',
              'Memorize without understanding — the MCAT only tests recall',
              'This concept is only relevant to graduate-level courses',
              'Skip this topic — it rarely appears on the MCAT'
            ],
            correctAnswer: 0,
            explanation: 'Reasoning error: you knew the content but applied it incorrectly — practice passage strategy'
          }
        ]
      }
    },
    {
      id: 'mcat-4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Content gap',
            options: ['Careless mistake: you knew the answer but misread — slow down, read carefully.', 'Reasoning error: you knew the content but applied it incorrectly — practice passage strategy.', 'you didnt know the material — go back and study.', 'Review every wrong answer on practice tests — categorize errors as content, reasoning, or careless.']
          },
          {
            label: 'Key Insight',
            options: ['Careless mistake: you knew the answer but misread — slow down, read carefully.', 'Review every wrong answer on practice tests — categorize errors as content, reasoning, or careless.', 'you didnt know the material — go back and study.', 'Reasoning error: you knew the content but applied it incorrectly — practice passage strategy.']
          },
          {
            label: 'MCAT Tip',
            options: ['Reasoning error: you knew the content but applied it incorrectly — practice passage strategy.', 'Careless mistake: you knew the answer but misread — slow down, read carefully.', 'you didnt know the material — go back and study.', 'Review every wrong answer on practice tests — categorize errors as content, reasoning, or careless.']
          }
        ],
        correctAnswers: ['you didnt know the material — go back and study.', 'Reasoning error: you knew the content but applied it incorrectly — practice passage strategy.', 'Careless mistake: you knew the answer but misread — slow down, read carefully.'],
        hint1: 'Think about what each concept specifically describes in Practice Test Analysis.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Practice Test Analysis describes a specific idea. Content gap: you didnt know the material — go back and study. Key Insight: Reasoning error: you knew the content but applied it incorrectly — practice passage strategy. MCAT Tip: Careless mistake: you knew the answer but misread — slow down, read carefully.'
      }
    }
  ]
}
