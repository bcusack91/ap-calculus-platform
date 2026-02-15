export const actPassageTypesPart6Data = {
  topicSlug: 'act-reading-passage-types-act',
  sections: [
    {
      id: 'act-r6-intro',
      type: 'text' as const,
      content: `
# Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

Compare and contrast two shorter passages on a related topic.

Some questions ask about Passage A only, some about Passage B, some about both.
      `
    },
    {
      id: 'act-r6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes compare and contrast two shorter passages on a related topic?',
            options: [
              'Compare and contrast two shorter passages on a related topic is a key concept for ACT English/Reading',
              'Some questions ask about Passage A only, some about Passage B, some about both',
              'This concept is not tested on the ACT',
              'None of these apply to ACT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Compare and contrast two shorter passages on a related topic'
          }
        ]
      }
    },
    {
      id: 'act-r6-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Identify each author's position and how they agree or disagree.

**ACT Tip:** Relationship questions: how would Author A respond to Author B?.
      `
    },
    {
      id: 'act-r6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for problem-solving workshop?',
            options: [
              'Identify each author\'s position and how they agree or disagree',
              'Skip these questions entirely on the ACT',
              'These are only on the optional Writing section',
              'This topic appears only on the SAT'
            ],
            correctAnswer: 0,
            explanation: 'Identify each author\'s position and how they agree or disagree'
          }
        ]
      }
    },
    {
      id: 'act-r6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Problem-Solving Workshop:',
            options: ['Compare and contrast two shorter passages on a rel', 'Some questions ask about Passage A only, some abou', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Identify each author\'s position and how they agree', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Compare and contrast two shorter passages on a rel', 'Identify each author\'s position and how they agree'],
        hint1: 'Think about problem-solving workshop',
        hint2: 'Consider the best ACT strategy',
        explanation: 'Compare and contrast two shorter passages on a related topic. Identify each author\'s position and how they agree or disagree.'
      }
    }
  ]
}
