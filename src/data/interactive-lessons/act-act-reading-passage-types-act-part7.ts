export const actPassageTypesPart7Data = {
  topicSlug: 'act-reading-passage-types-act',
  sections: [
    {
      id: 'act-r7-intro',
      type: 'text' as const,
      content: `
# Review & Applications

**Part 7 of 7 — Review & Applications**

Compare and contrast two shorter passages on a related topic.

Some questions ask about Passage A only, some about Passage B, some about both.
      `
    },
    {
      id: 'act-r7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Compare and contrast two shorter…" refer to in ACT prep?',
            options: [
              'Compare and contrast two shorter passages on a related topic.',
              'Relationship questions: how would Author A respond to Author B?.',
              'Some questions ask about Passage A only, some about Passage B, some about both.',
              'Identify each author\'s position and how they agree or disagree.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Compare and contrast two shorter passages on a related topic. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Key Insight?',
            options: [
              'Relationship questions: how would Author A respond to Author B?.',
              'Compare and contrast two shorter passages on a related topic.',
              'Identify each author\'s position and how they agree or disagree.',
              'Some questions ask about Passage A only, some about Passage B, some about both.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Key Insight: Identify each author\'s position and how they agree or disagree. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'act-r7-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Identify each author's position and how they agree or disagree.

**ACT Tip:** Relationship questions: how would Author A respond to Author B?.
      `
    },
    {
      id: 'act-r7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Review & Applications, which correctly describes ACT Tip?',
            options: [
              'Compare and contrast two shorter passages on a related topic.',
              'Relationship questions: how would Author A respond to Author B?.',
              'Some questions ask about Passage A only, some about Passage B, some about both.',
              'Identify each author\'s position and how they agree or disagree.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — ACT Tip: Relationship questions: how would Author A respond to Author B?. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'act-r7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key Insight',
            options: ['Compare and contrast two shorter passages on a related topic.', 'Some questions ask about Passage A only, some about Passage B, some about both.', 'Identify each author\'s position and how they agree or disagree.', 'Relationship questions: how would Author A respond to Author B?.']
          },
          {
            label: 'ACT Tip',
            options: ['Identify each author\'s position and how they agree or disagree.', 'Relationship questions: how would Author A respond to Author B?.', 'Some questions ask about Passage A only, some about Passage B, some about both.', 'Compare and contrast two shorter passages on a related topic.']
          }
        ],
        correctAnswers: ['Identify each author\'s position and how they agree or disagree.', 'Relationship questions: how would Author A respond to Author B?.'],
        hint1: 'Think about what each concept specifically describes in Review & Applications.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Review & Applications describes a specific idea. Key Insight: Identify each author\'s position and how they agree or disagree. ACT Tip: Relationship questions: how would Author A respond to Author B?.'
      }
    }
  ]
}
