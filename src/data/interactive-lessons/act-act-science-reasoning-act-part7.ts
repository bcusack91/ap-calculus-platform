export const actScienceReasonPart7Data = {
  topicSlug: 'act-science-reasoning-act',
  sections: [
    {
      id: 'act-s7-intro',
      type: 'text' as const,
      content: `
# Review & Applications

**Part 7 of 7 — Review & Applications**

Spend 5-6 minutes per passage (7 passages total, 40 questions, 35 minutes).

Read the intro and scan figures BEFORE reading the questions.
      `
    },
    {
      id: 'act-s7-quiz1',
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
              'Read the intro and scan figures BEFORE reading the questions.',
              'Spend 5-6 minutes per passage (7 passages total, 40 questions, 35 minutes).',
              'Don\'t get bogged down in technical details — focus on trends and relationships.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Spend 5-6 minutes per passage (7 passages total, 40 questions, 35 minutes). The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Key Insight?',
            options: [
              'Spend 5-6 minutes per passage (7 passages total, 40 questions, 35 minutes).',
              'You don\'t need outside science knowledge — everything is in the passage.',
              'Don\'t get bogged down in technical details — focus on trends and relationships.',
              'Read the intro and scan figures BEFORE reading the questions.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Key Insight: Don\'t get bogged down in technical details — focus on trends and relationships. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'act-s7-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Don't get bogged down in technical details — focus on trends and relationships.

**ACT Tip:** You don't need outside science knowledge — everything is in the passage.
      `
    },
    {
      id: 'act-s7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Review & Applications, which correctly describes ACT Tip?',
            options: [
              'Read the intro and scan figures BEFORE reading the questions.',
              'You don\'t need outside science knowledge — everything is in the passage.',
              'Spend 5-6 minutes per passage (7 passages total, 40 questions, 35 minutes).',
              'Don\'t get bogged down in technical details — focus on trends and relationships.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — ACT Tip: You don\'t need outside science knowledge — everything is in the passage. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'act-s7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key Insight',
            options: ['Spend 5-6 minutes per passage (7 passages total, 40 questions, 35 minutes).', 'Read the intro and scan figures BEFORE reading the questions.', 'Don\'t get bogged down in technical details — focus on trends and relationships.', 'You don\'t need outside science knowledge — everything is in the passage.']
          },
          {
            label: 'ACT Tip',
            options: ['You don\'t need outside science knowledge — everything is in the passage.', 'Spend 5-6 minutes per passage (7 passages total, 40 questions, 35 minutes).', 'Don\'t get bogged down in technical details — focus on trends and relationships.', 'Read the intro and scan figures BEFORE reading the questions.']
          }
        ],
        correctAnswers: ['Don\'t get bogged down in technical details — focus on trends and relationships.', 'You don\'t need outside science knowledge — everything is in the passage.'],
        hint1: 'Think about what each concept specifically describes in Review & Applications.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Review & Applications describes a specific idea. Key Insight: Don\'t get bogged down in technical details — focus on trends and relationships. ACT Tip: You don\'t need outside science knowledge — everything is in the passage.'
      }
    }
  ]
}
