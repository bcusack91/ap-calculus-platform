export const satWordProblemsPart2Data = {
  topicSlug: 'sat-word-problems-sat',
  sections: [
    {
      id: 'sat-w2-intro',
      type: 'text' as const,
      content: `
# Rate & Work Problems

**Part 2 of 7 — Rate & Work Problems**

Distance = Rate × Time (d = rt).

Work rate: if A does a job in a hours, rate = 1/a per hour.
      `
    },
    {
      id: 'sat-w2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes distance = rate × time (d = rt)?',
            options: [
              'Distance = Rate × Time (d = rt) is a fundamental concept in SAT Math',
              'Work rate: if A does a job in a hours, rate = 1/a per hour',
              'This concept is not tested on the SAT',
              'None of these apply to SAT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Distance = Rate × Time (d = rt)'
          }
        ]
      }
    },
    {
      id: 'sat-w2-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Combined work: 1/a + 1/b = 1/t where t is time together.

**SAT Tip:** Two objects moving: determine if approaching (subtract speeds) or separating (add speeds).
      `
    },
    {
      id: 'sat-w2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for rate & work problems?',
            options: [
              'Combined work: 1/a + 1/b = 1/t where t is time together',
              'Skip these questions entirely on the SAT',
              'These are only in the no-calculator section',
              'This topic appears only on the PSAT'
            ],
            correctAnswer: 0,
            explanation: 'Combined work: 1/a + 1/b = 1/t where t is time together'
          }
        ]
      }
    },
    {
      id: 'sat-w2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Rate & Work Problems:',
            options: ['Distance = Rate × Time (d = rt)', 'Work rate: if A does a job in a hours, rate = 1/a ', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Combined work: 1/a + 1/b = 1/t where t is time tog', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Distance = Rate × Time (d = rt)', 'Combined work: 1/a + 1/b = 1/t where t is time tog'],
        hint1: 'Think about rate & work problems',
        hint2: 'Consider the best SAT strategy',
        explanation: 'Distance = Rate × Time (d = rt). Combined work: 1/a + 1/b = 1/t where t is time together.'
      }
    }
  ]
}
