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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Margin of error?',
            options: [
              'Larger sample → smaller margin of error.',
              '95% confidence: if we repeated the survey, ~95% of intervals would contain the true value.',
              '± value around a sample statistic.',
              'Confidence interval: sample statistic ± margin of error.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Margin of error: ± value around a sample statistic. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Key Insight:',
            options: [
              '± value around a sample statistic.',
              'Larger sample → smaller margin of error.',
              'Confidence interval: sample statistic ± margin of error.',
              '95% confidence: if we repeated the survey, ~95% of intervals would contain the true value.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Key Insight: Confidence interval: sample statistic ± margin of error. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about SAT Tip is correct?',
            options: [
              '± value around a sample statistic.',
              'Confidence interval: sample statistic ± margin of error.',
              '95% confidence: if we repeated the survey, ~95% of intervals would contain the true value.',
              'Larger sample → smaller margin of error.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — SAT Tip: 95% confidence: if we repeated the survey, ~95% of intervals would contain the true value. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'sat-p4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Margin of error',
            options: ['Confidence interval: sample statistic ± margin of error.', '± value around a sample statistic.', 'Larger sample → smaller margin of error.', '95% confidence: if we repeated the survey, ~95% of intervals would contain the true value.']
          },
          {
            label: 'Key Insight',
            options: ['± value around a sample statistic.', 'Larger sample → smaller margin of error.', '95% confidence: if we repeated the survey, ~95% of intervals would contain the true value.', 'Confidence interval: sample statistic ± margin of error.']
          },
          {
            label: 'SAT Tip',
            options: ['95% confidence: if we repeated the survey, ~95% of intervals would contain the true value.', '± value around a sample statistic.', 'Confidence interval: sample statistic ± margin of error.', 'Larger sample → smaller margin of error.']
          }
        ],
        correctAnswers: ['± value around a sample statistic.', 'Confidence interval: sample statistic ± margin of error.', '95% confidence: if we repeated the survey, ~95% of intervals would contain the true value.'],
        hint1: 'Think about what each concept specifically describes in Margin of Error.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Margin of Error describes a specific idea. Margin of error: ± value around a sample statistic. Key Insight: Confidence interval: sample statistic ± margin of error. SAT Tip: 95% confidence: if we repeated the survey, ~95% of intervals would contain the true value.'
      }
    }
  ]
}
