export const actPassageTypesPart4Data = {
  topicSlug: 'act-reading-passage-types-act',
  sections: [
    {
      id: 'act-r4-intro',
      type: 'text' as const,
      content: `
# Natural Science

**Part 4 of 7 — Natural Science**

Scientific topics: biology, chemistry, physics, earth science.

Focus on the process, findings, and conclusions.
      `
    },
    {
      id: 'act-r4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes scientific topics?',
            options: [
              'Scientific topics is a key concept for ACT English/Reading',
              'Focus on the process, findings, and conclusions',
              'This concept is not tested on the ACT',
              'None of these apply to ACT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Scientific topics: biology, chemistry, physics, earth science'
          }
        ]
      }
    },
    {
      id: 'act-r4-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Understand the experiment: hypothesis, method, results, implications.

**ACT Tip:** Questions test comprehension of scientific reasoning and data.
      `
    },
    {
      id: 'act-r4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for natural science?',
            options: [
              'Understand the experiment: hypothesis, method, results, implications',
              'Skip these questions entirely on the ACT',
              'These are only on the optional Writing section',
              'This topic appears only on the SAT'
            ],
            correctAnswer: 0,
            explanation: 'Understand the experiment: hypothesis, method, results, implications'
          }
        ]
      }
    },
    {
      id: 'act-r4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Natural Science:',
            options: ['Scientific topics: biology, chemistry, physics, ea', 'Focus on the process, findings, and conclusions', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Understand the experiment: hypothesis, method, res', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Scientific topics: biology, chemistry, physics, ea', 'Understand the experiment: hypothesis, method, res'],
        hint1: 'Think about natural science',
        hint2: 'Consider the best ACT strategy',
        explanation: 'Scientific topics: biology, chemistry, physics, earth science. Understand the experiment: hypothesis, method, results, implications.'
      }
    }
  ]
}
