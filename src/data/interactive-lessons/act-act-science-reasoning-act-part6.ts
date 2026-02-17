export const actScienceReasonPart6Data = {
  topicSlug: 'act-science-reasoning-act',
  sections: [
    {
      id: 'act-s6-intro',
      type: 'text' as const,
      content: `
# Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

Spend 5-6 minutes per passage (7 passages total, 40 questions, 35 minutes).

Read the intro and scan figures BEFORE reading the questions.
      `
    },
    {
      id: 'act-s6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Spend 5-6 minutes per passage (7…?',
            options: [
              'You don\'t need outside science knowledge — everything is in the passage.',
              'Spend 5-6 minutes per passage (7 passages total, 40 questions, 35 minutes).',
              'Don\'t get bogged down in technical details — focus on trends and relationships.',
              'Read the intro and scan figures BEFORE reading the questions.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Spend 5-6 minutes per passage (7 passages total, 40 questions, 35 minutes). The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Key Insight?',
            options: [
              'You don\'t need outside science knowledge — everything is in the passage.',
              'Don\'t get bogged down in technical details — focus on trends and relationships.',
              'Spend 5-6 minutes per passage (7 passages total, 40 questions, 35 minutes).',
              'Read the intro and scan figures BEFORE reading the questions.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Key Insight: Don\'t get bogged down in technical details — focus on trends and relationships. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'act-s6-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Don't get bogged down in technical details — focus on trends and relationships.

**ACT Tip:** You don't need outside science knowledge — everything is in the passage.
      `
    },
    {
      id: 'act-s6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents ACT Tip?',
            options: [
              'Spend 5-6 minutes per passage (7 passages total, 40 questions, 35 minutes).',
              'Don\'t get bogged down in technical details — focus on trends and relationships.',
              'You don\'t need outside science knowledge — everything is in the passage.',
              'Read the intro and scan figures BEFORE reading the questions.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — ACT Tip: You don\'t need outside science knowledge — everything is in the passage. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'act-s6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key Insight',
            options: ['Read the intro and scan figures BEFORE reading the questions.', 'Don\'t get bogged down in technical details — focus on trends and relationships.', 'Spend 5-6 minutes per passage (7 passages total, 40 questions, 35 minutes).', 'You don\'t need outside science knowledge — everything is in the passage.']
          },
          {
            label: 'ACT Tip',
            options: ['Don\'t get bogged down in technical details — focus on trends and relationships.', 'You don\'t need outside science knowledge — everything is in the passage.', 'Read the intro and scan figures BEFORE reading the questions.', 'Spend 5-6 minutes per passage (7 passages total, 40 questions, 35 minutes).']
          }
        ],
        correctAnswers: ['Don\'t get bogged down in technical details — focus on trends and relationships.', 'You don\'t need outside science knowledge — everything is in the passage.'],
        hint1: 'Think about what each concept specifically describes in Problem-Solving Workshop.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Problem-Solving Workshop describes a specific idea. Key Insight: Don\'t get bogged down in technical details — focus on trends and relationships. ACT Tip: You don\'t need outside science knowledge — everything is in the passage.'
      }
    }
  ]
}
