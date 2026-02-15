export const satRatiosPart5Data = {
  topicSlug: 'sat-ratios-proportions-sat',
  sections: [
    {
      id: 'sat-r5-intro',
      type: 'text' as const,
      content: `
# Rate Problems

**Part 5 of 7 — Rate Problems**

Rate = distance/time or work/time.

Combined rates: add rates when working together.
      `
    },
    {
      id: 'sat-r5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes rate = distance/time or work/time?',
            options: [
              'Rate = distance/time or work/time is a fundamental concept in SAT Math',
              'Combined rates: add rates when working together',
              'This concept is not tested on the SAT',
              'None of these apply to SAT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Rate = distance/time or work/time'
          }
        ]
      }
    },
    {
      id: 'sat-r5-detail',
      type: 'text' as const,
      content: `
**Key Insight:** d = rt (distance = rate × time).

**SAT Tip:** Average speed = total distance / total time (NOT average of speeds).
      `
    },
    {
      id: 'sat-r5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for rate problems?',
            options: [
              'd = rt (distance = rate × time)',
              'Skip these questions entirely on the SAT',
              'These are only in the no-calculator section',
              'This topic appears only on the PSAT'
            ],
            correctAnswer: 0,
            explanation: 'd = rt (distance = rate × time)'
          }
        ]
      }
    },
    {
      id: 'sat-r5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Rate Problems:',
            options: ['Rate = distance/time or work/time', 'Combined rates: add rates when working together', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['d = rt (distance = rate × time)', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Rate = distance/time or work/time', 'd = rt (distance = rate × time)'],
        hint1: 'Think about rate problems',
        hint2: 'Consider the best SAT strategy',
        explanation: 'Rate = distance/time or work/time. d = rt (distance = rate × time).'
      }
    }
  ]
}
