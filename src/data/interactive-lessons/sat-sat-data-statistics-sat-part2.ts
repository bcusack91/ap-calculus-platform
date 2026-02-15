export const satDataStatsPart2Data = {
  topicSlug: 'sat-data-statistics-sat',
  sections: [
    {
      id: 'sat-d2-intro',
      type: 'text' as const,
      content: `
# Standard Deviation & Spread

**Part 2 of 7 — Standard Deviation & Spread**

Range = max - min.

Standard deviation measures spread from the mean.
      `
    },
    {
      id: 'sat-d2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes range = max - min?',
            options: [
              'Range = max - min is a fundamental concept in SAT Math',
              'Standard deviation measures spread from the mean',
              'This concept is not tested on the SAT',
              'None of these apply to SAT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Range = max - min'
          }
        ]
      }
    },
    {
      id: 'sat-d2-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Larger SD = more spread out; smaller SD = more clustered.

**SAT Tip:** SAT won't ask you to calculate SD, but you must compare or interpret it.
      `
    },
    {
      id: 'sat-d2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for standard deviation & spread?',
            options: [
              'Larger SD = more spread out; smaller SD = more clustered',
              'Skip these questions entirely on the SAT',
              'These are only in the no-calculator section',
              'This topic appears only on the PSAT'
            ],
            correctAnswer: 0,
            explanation: 'Larger SD = more spread out; smaller SD = more clustered'
          }
        ]
      }
    },
    {
      id: 'sat-d2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Standard Deviation & Spread:',
            options: ['Range = max - min', 'Standard deviation measures spread from the mean', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Larger SD = more spread out; smaller SD = more clu', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Range = max - min', 'Larger SD = more spread out; smaller SD = more clu'],
        hint1: 'Think about standard deviation & spread',
        hint2: 'Consider the best SAT strategy',
        explanation: 'Range = max - min. Larger SD = more spread out; smaller SD = more clustered.'
      }
    }
  ]
}
