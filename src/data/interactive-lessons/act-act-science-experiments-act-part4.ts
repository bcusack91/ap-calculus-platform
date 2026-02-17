export const actScienceExpPart4Data = {
  topicSlug: 'act-science-experiments-act',
  sections: [
    {
      id: 'act-s4-intro',
      type: 'text' as const,
      content: `
# Conflicting Viewpoints

**Part 4 of 7 — Conflicting Viewpoints**

Two or more scientists/students disagree about an explanation.

Read each viewpoint carefully and identify the key claims.
      `
    },
    {
      id: 'act-s4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Two or more scientists/students…?',
            options: [
              'Read each viewpoint carefully and identify the key claims.',
              'Two or more scientists/students disagree about an explanation.',
              'Find where they agree and where they differ.',
              'Questions ask: which data supports/contradicts which viewpoint?.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Two or more scientists/students disagree about an explanation. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Key Insight?',
            options: [
              'Two or more scientists/students disagree about an explanation.',
              'Read each viewpoint carefully and identify the key claims.',
              'Find where they agree and where they differ.',
              'Questions ask: which data supports/contradicts which viewpoint?.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Key Insight: Find where they agree and where they differ. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'act-s4-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Find where they agree and where they differ.

**ACT Tip:** Questions ask: which data supports/contradicts which viewpoint?.
      `
    },
    {
      id: 'act-s4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents ACT Tip?',
            options: [
              'Questions ask: which data supports/contradicts which viewpoint?.',
              'Find where they agree and where they differ.',
              'Two or more scientists/students disagree about an explanation.',
              'Read each viewpoint carefully and identify the key claims.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — ACT Tip: Questions ask: which data supports/contradicts which viewpoint?. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'act-s4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key Insight',
            options: ['Two or more scientists/students disagree about an explanation.', 'Find where they agree and where they differ.', 'Read each viewpoint carefully and identify the key claims.', 'Questions ask: which data supports/contradicts which viewpoint?.']
          },
          {
            label: 'ACT Tip',
            options: ['Questions ask: which data supports/contradicts which viewpoint?.', 'Find where they agree and where they differ.', 'Read each viewpoint carefully and identify the key claims.', 'Two or more scientists/students disagree about an explanation.']
          }
        ],
        correctAnswers: ['Find where they agree and where they differ.', 'Questions ask: which data supports/contradicts which viewpoint?.'],
        hint1: 'Think about what each concept specifically describes in Conflicting Viewpoints.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Conflicting Viewpoints describes a specific idea. Key Insight: Find where they agree and where they differ. ACT Tip: Questions ask: which data supports/contradicts which viewpoint?.'
      }
    }
  ]
}
