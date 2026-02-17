export const satRWStrategyPart1Data = {
  topicSlug: 'sat-reading-writing-strategy-sat',
  sections: [
    {
      id: 'sat-r1-intro',
      type: 'text' as const,
      content: `
# 📝 Reading Writing Strategy

**Part 1 of 7 — Reading Section Overview**

65 minutes, 52 questions across 5 passages (or 4 passages + 1 paired set).

Passage types: literature, history/social studies (2), science (2).
      `
    },
    {
      id: 'sat-r1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes 65 minutes, 52 questions across 5…?',
            options: [
              'Questions roughly follow passage order — use this to your advantage.',
              'Skim-then-answer or read-carefully approaches — find what works for you.',
              '65 minutes, 52 questions across 5 passages (or 4 passages + 1 paired set).',
              'literature, history/social studies (2), science (2).'
            ],
            correctAnswer: 2,
            explanation: 'Correct — 65 minutes, 52 questions across 5 passages (or 4 passages + 1 paired set). The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Key Insight?',
            options: [
              '65 minutes, 52 questions across 5 passages (or 4 passages + 1 paired set).',
              'Skim-then-answer or read-carefully approaches — find what works for you.',
              'literature, history/social studies (2), science (2).',
              'Questions roughly follow passage order — use this to your advantage.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Key Insight: Skim-then-answer or read-carefully approaches — find what works for you. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'sat-r1-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Skim-then-answer or read-carefully approaches — find what works for you.

**SAT Tip:** Questions roughly follow passage order — use this to your advantage.
      `
    },
    {
      id: 'sat-r1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents SAT Tip?',
            options: [
              'literature, history/social studies (2), science (2).',
              '65 minutes, 52 questions across 5 passages (or 4 passages + 1 paired set).',
              'Questions roughly follow passage order — use this to your advantage.',
              'Skim-then-answer or read-carefully approaches — find what works for you.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — SAT Tip: Questions roughly follow passage order — use this to your advantage. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'sat-r1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Passage types',
            options: ['Skim-then-answer or read-carefully approaches — find what works for you.', 'Questions roughly follow passage order — use this to your advantage.', 'literature, history/social studies (2), science (2).', '65 minutes, 52 questions across 5 passages (or 4 passages + 1 paired set).']
          },
          {
            label: 'Key Insight',
            options: ['Questions roughly follow passage order — use this to your advantage.', 'literature, history/social studies (2), science (2).', '65 minutes, 52 questions across 5 passages (or 4 passages + 1 paired set).', 'Skim-then-answer or read-carefully approaches — find what works for you.']
          },
          {
            label: 'SAT Tip',
            options: ['Skim-then-answer or read-carefully approaches — find what works for you.', '65 minutes, 52 questions across 5 passages (or 4 passages + 1 paired set).', 'Questions roughly follow passage order — use this to your advantage.', 'literature, history/social studies (2), science (2).']
          }
        ],
        correctAnswers: ['literature, history/social studies (2), science (2).', 'Skim-then-answer or read-carefully approaches — find what works for you.', 'Questions roughly follow passage order — use this to your advantage.'],
        hint1: 'Think about what each concept specifically describes in Reading Writing Strategy.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Reading Writing Strategy describes a specific idea. Passage types: literature, history/social studies (2), science (2). Key Insight: Skim-then-answer or read-carefully approaches — find what works for you. SAT Tip: Questions roughly follow passage order — use this to your advantage.'
      }
    }
  ]
}
