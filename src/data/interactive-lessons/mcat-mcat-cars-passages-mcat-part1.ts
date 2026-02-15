export const mcatCarsPsgPart1Data = {
  topicSlug: 'mcat-cars-passages-mcat',
  sections: [
    {
      id: 'mcat-1-intro',
      type: 'text' as const,
      content: `
# 🏥 Cars Passages

**Part 1 of 7 — Humanities Passages**

Humanities: history, literature, philosophy, religion — often argumentative or interpretive.

These passages may present competing historical or philosophical interpretations.
      `
    },
    {
      id: 'mcat-1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes a key concept in humanities passages?',
            options: [
              'Humanities: history, literature, philosophy, religion — often argumentative or interpretive',
              'This topic is not tested on the MCAT',
              'This applies only to clinical practice, not the MCAT',
              'None of the above'
            ],
            correctAnswer: 0,
            explanation: 'Humanities: history, literature, philosophy, religion — often argumentative or interpretive'
          }
        ]
      }
    },
    {
      id: 'mcat-1-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Look for the authors thesis and the evidence used to support it.

**MCAT Tip:** Cultural context clues help identify the time period and perspective.
      `
    },
    {
      id: 'mcat-1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is an important principle for MCAT CARS related to humanities passages?',
            options: [
              'Look for the authors thesis and the evidence used to support it',
              'Memorize without understanding — the MCAT only tests recall',
              'This concept is only relevant to graduate-level courses',
              'Skip this topic — it rarely appears on the MCAT'
            ],
            correctAnswer: 0,
            explanation: 'Look for the authors thesis and the evidence used to support it'
          }
        ]
      }
    },
    {
      id: 'mcat-1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Core concept for Humanities Passages:',
            options: ['Humanities: history, literature, philosophy, religion — ofte', 'These passages may present competing historical or philosoph', 'Not MCAT-relevant', 'Cannot be determined']
          },
          {
            label: 'MCAT application:',
            options: ['Look for the authors thesis and the evidence used to support', 'Skip this topic', 'Only on practice tests', 'Not applicable']
          }
        ],
        correctAnswers: ['Humanities: history, literature, philosophy, religion — ofte', 'Look for the authors thesis and the evidence used to support'],
        hint1: 'Think about humanities passages',
        hint2: 'Consider the MCAT application',
        explanation: 'Humanities: history, literature, philosophy, religion — often argumentative or interpretive. Look for the authors thesis and the evidence used to support it.'
      }
    }
  ]
}
