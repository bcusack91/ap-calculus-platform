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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Core concept for Practice Test Analysis:',
            options: ['Review every wrong answer on practice tests — categorize err', 'Content gap: you didnt know the material — go back and study', 'Not MCAT-relevant', 'Cannot be determined']
          },
          {
            label: 'MCAT application:',
            options: ['Reasoning error: you knew the content but applied it incorre', 'Skip this topic', 'Only on practice tests', 'Not applicable']
          }
        ],
        correctAnswers: ['Review every wrong answer on practice tests — categorize err', 'Reasoning error: you knew the content but applied it incorre'],
        hint1: 'Think about practice test analysis',
        hint2: 'Consider the MCAT application',
        explanation: 'Review every wrong answer on practice tests — categorize errors as content, reasoning, or careless. Reasoning error: you knew the content but applied it incorrectly — practice passage strategy.'
      }
    }
  ]
}
