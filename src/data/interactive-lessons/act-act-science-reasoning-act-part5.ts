export const actScienceReasonPart5Data = {
  topicSlug: 'act-science-reasoning-act',
  sections: [
    {
      id: 'act-s5-intro',
      type: 'text' as const,
      content: `
# Science Passage Strategy

**Part 5 of 7 — Science Passage Strategy**

Spend 5-6 minutes per passage (7 passages total, 40 questions, 35 minutes).

Read the intro and scan figures BEFORE reading the questions.
      `
    },
    {
      id: 'act-s5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Spend 5-6 minutes per passage (7…?',
            options: [
              'Don\'t get bogged down in technical details — focus on trends and relationships.',
              'Spend 5-6 minutes per passage (7 passages total, 40 questions, 35 minutes).',
              'Read the intro and scan figures BEFORE reading the questions.',
              'You don\'t need outside science knowledge — everything is in the passage.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Spend 5-6 minutes per passage (7 passages total, 40 questions, 35 minutes). The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Key Insight?',
            options: [
              'Spend 5-6 minutes per passage (7 passages total, 40 questions, 35 minutes).',
              'Read the intro and scan figures BEFORE reading the questions.',
              'Don\'t get bogged down in technical details — focus on trends and relationships.',
              'You don\'t need outside science knowledge — everything is in the passage.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Key Insight: Don\'t get bogged down in technical details — focus on trends and relationships. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'act-s5-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Don't get bogged down in technical details — focus on trends and relationships.

**ACT Tip:** You don't need outside science knowledge — everything is in the passage.
      `
    },
    {
      id: 'act-s5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about ACT Tip is correct?',
            options: [
              'Spend 5-6 minutes per passage (7 passages total, 40 questions, 35 minutes).',
              'Read the intro and scan figures BEFORE reading the questions.',
              'Don\'t get bogged down in technical details — focus on trends and relationships.',
              'You don\'t need outside science knowledge — everything is in the passage.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — ACT Tip: You don\'t need outside science knowledge — everything is in the passage. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'act-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key Insight',
            options: ['Spend 5-6 minutes per passage (7 passages total, 40 questions, 35 minutes).', 'Read the intro and scan figures BEFORE reading the questions.', 'You don\'t need outside science knowledge — everything is in the passage.', 'Don\'t get bogged down in technical details — focus on trends and relationships.']
          },
          {
            label: 'ACT Tip',
            options: ['Don\'t get bogged down in technical details — focus on trends and relationships.', 'Read the intro and scan figures BEFORE reading the questions.', 'Spend 5-6 minutes per passage (7 passages total, 40 questions, 35 minutes).', 'You don\'t need outside science knowledge — everything is in the passage.']
          }
        ],
        correctAnswers: ['Don\'t get bogged down in technical details — focus on trends and relationships.', 'You don\'t need outside science knowledge — everything is in the passage.'],
        hint1: 'Think about what each concept specifically describes in Science Passage Strategy.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Science Passage Strategy describes a specific idea. Key Insight: Don\'t get bogged down in technical details — focus on trends and relationships. ACT Tip: You don\'t need outside science knowledge — everything is in the passage.'
      }
    }
  ]
}
