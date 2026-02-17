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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Humanities',
            options: ['These passages may present competing historical or philosophical interpretations.', 'Cultural context clues help identify the time period and perspective.', 'Look for the authors thesis and the evidence used to support it.', 'history, literature, philosophy, religion — often argumentative or interpretive.']
          },
          {
            label: 'Key Insight',
            options: ['These passages may present competing historical or philosophical interpretations.', 'history, literature, philosophy, religion — often argumentative or interpretive.', 'Cultural context clues help identify the time period and perspective.', 'Look for the authors thesis and the evidence used to support it.']
          },
          {
            label: 'MCAT Tip',
            options: ['Cultural context clues help identify the time period and perspective.', 'history, literature, philosophy, religion — often argumentative or interpretive.', 'Look for the authors thesis and the evidence used to support it.', 'These passages may present competing historical or philosophical interpretations.']
          }
        ],
        correctAnswers: ['history, literature, philosophy, religion — often argumentative or interpretive.', 'Look for the authors thesis and the evidence used to support it.', 'Cultural context clues help identify the time period and perspective.'],
        hint1: 'Think about what each concept specifically describes in Cars Passages.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Cars Passages describes a specific idea. Humanities: history, literature, philosophy, religion — often argumentative or interpretive. Key Insight: Look for the authors thesis and the evidence used to support it. MCAT Tip: Cultural context clues help identify the time period and perspective.'
      }
    }
  ]
}
