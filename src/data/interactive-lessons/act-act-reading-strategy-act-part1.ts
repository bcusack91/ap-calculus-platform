export const actReadingStratPart1Data = {
  topicSlug: 'act-reading-strategy-act',
  sections: [
    {
      id: 'act-r1-intro',
      type: 'text' as const,
      content: `
# 📋 Reading Strategy

**Part 1 of 7 — Time Management**

35 minutes for 4 passages × 10 questions = ~8.75 minutes per passage.

Allocate ~3-4 minutes reading, ~4-5 minutes answering questions.
      `
    },
    {
      id: 'act-r1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains 35 minutes for 4 passages × 10…?',
            options: [
              'Allocate ~3-4 minutes reading, ~4-5 minutes answering questions.',
              'Don\'t spend too long on one question — mark and move on.',
              'Wear a watch to track time (digital watches without alarms are allowed).',
              '35 minutes for 4 passages × 10 questions = ~8.75 minutes per passage.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — 35 minutes for 4 passages × 10 questions = ~8.75 minutes per passage. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Reading Strategy, which explains Key Insight?',
            options: [
              'Don\'t spend too long on one question — mark and move on.',
              'Allocate ~3-4 minutes reading, ~4-5 minutes answering questions.',
              'Wear a watch to track time (digital watches without alarms are allowed).',
              '35 minutes for 4 passages × 10 questions = ~8.75 minutes per passage.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Key Insight: Don\'t spend too long on one question — mark and move on. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'act-r1-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Don't spend too long on one question — mark and move on.

**ACT Tip:** Wear a watch to track time (digital watches without alarms are allowed).
      `
    },
    {
      id: 'act-r1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Reading Strategy, which correctly describes ACT Tip?',
            options: [
              'Don\'t spend too long on one question — mark and move on.',
              '35 minutes for 4 passages × 10 questions = ~8.75 minutes per passage.',
              'Allocate ~3-4 minutes reading, ~4-5 minutes answering questions.',
              'Wear a watch to track time (digital watches without alarms are allowed).'
            ],
            correctAnswer: 3,
            explanation: 'Correct — ACT Tip: Wear a watch to track time (digital watches without alarms are allowed). Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'act-r1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key Insight',
            options: ['Allocate ~3-4 minutes reading, ~4-5 minutes answering questions.', 'Don\'t spend too long on one question — mark and move on.', 'Wear a watch to track time (digital watches without alarms are allowed).', '35 minutes for 4 passages × 10 questions = ~8.75 minutes per passage.']
          },
          {
            label: 'ACT Tip',
            options: ['Don\'t spend too long on one question — mark and move on.', 'Allocate ~3-4 minutes reading, ~4-5 minutes answering questions.', '35 minutes for 4 passages × 10 questions = ~8.75 minutes per passage.', 'Wear a watch to track time (digital watches without alarms are allowed).']
          }
        ],
        correctAnswers: ['Don\'t spend too long on one question — mark and move on.', 'Wear a watch to track time (digital watches without alarms are allowed).'],
        hint1: 'Think about what each concept specifically describes in Reading Strategy.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Reading Strategy describes a specific idea. Key Insight: Don\'t spend too long on one question — mark and move on. ACT Tip: Wear a watch to track time (digital watches without alarms are allowed).'
      }
    }
  ]
}
