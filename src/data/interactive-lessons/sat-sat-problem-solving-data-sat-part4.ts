export const satProbSolvDataPart4Data = {
  topicSlug: 'sat-problem-solving-data-sat',
  sections: [
    {
      id: 'sat-p4-intro',
      type: 'text' as const,
      content: `
# Margin of Error

**Part 4 of 7 — Margin of Error**

Margin of error: ± value around a sample statistic.

Larger sample → smaller margin of error.
      `
    },
    {
      id: 'sat-p4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes margin of error?',
            options: [
              'Margin of error is a fundamental concept in SAT Math',
              'Larger sample → smaller margin of error',
              'This concept is not tested on the SAT',
              'None of these apply to SAT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Margin of error: ± value around a sample statistic'
          }
        ]
      }
    },
    {
      id: 'sat-p4-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Confidence interval: sample statistic ± margin of error.

**SAT Tip:** 95% confidence: if we repeated the survey, ~95% of intervals would contain the true value.
      `
    },
    {
      id: 'sat-p4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for margin of error?',
            options: [
              'Confidence interval: sample statistic ± margin of error',
              'Skip these questions entirely on the SAT',
              'These are only in the no-calculator section',
              'This topic appears only on the PSAT'
            ],
            correctAnswer: 0,
            explanation: 'Confidence interval: sample statistic ± margin of error'
          }
        ]
      }
    },
    {
      id: 'sat-p4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Margin of Error:',
            options: ['Margin of error: ± value around a sample statistic', 'Larger sample → smaller margin of error', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Confidence interval: sample statistic ± margin of ', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Margin of error: ± value around a sample statistic', 'Confidence interval: sample statistic ± margin of '],
        hint1: 'Think about margin of error',
        hint2: 'Consider the best SAT strategy',
        explanation: 'Margin of error: ± value around a sample statistic. Confidence interval: sample statistic ± margin of error.'
      }
    }
  ]
}
