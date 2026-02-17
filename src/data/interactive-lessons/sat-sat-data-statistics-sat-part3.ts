export const satDataStatsPart3Data = {
  topicSlug: 'sat-data-statistics-sat',
  sections: [
    {
      id: 'sat-d3-intro',
      type: 'text' as const,
      content: `
# Data Displays

**Part 3 of 7 — Data Displays**

Histograms: bars show frequency for intervals (no gaps).

Box plots: show min, Q1, median, Q3, max.
      `
    },
    {
      id: 'sat-d3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Histograms?',
            options: [
              'IQR = Q3 - Q1 (middle 50% of data).',
              'Outliers: typically more than 1.5 × IQR below Q1 or above Q3.',
              'show min, Q1, median, Q3, max.',
              'bars show frequency for intervals (no gaps).'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Histograms: bars show frequency for intervals (no gaps). The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Key Insight?',
            options: [
              'show min, Q1, median, Q3, max.',
              'bars show frequency for intervals (no gaps).',
              'IQR = Q3 - Q1 (middle 50% of data).',
              'Outliers: typically more than 1.5 × IQR below Q1 or above Q3.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Key Insight: IQR = Q3 - Q1 (middle 50% of data). Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'sat-d3-detail',
      type: 'text' as const,
      content: `
**Key Insight:** IQR = Q3 - Q1 (middle 50% of data).

**SAT Tip:** Outliers: typically more than 1.5 × IQR below Q1 or above Q3.
      `
    },
    {
      id: 'sat-d3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about SAT Tip is correct?',
            options: [
              'show min, Q1, median, Q3, max.',
              'bars show frequency for intervals (no gaps).',
              'Outliers: typically more than 1.5 × IQR below Q1 or above Q3.',
              'IQR = Q3 - Q1 (middle 50% of data).'
            ],
            correctAnswer: 2,
            explanation: 'Correct — SAT Tip: Outliers: typically more than 1.5 × IQR below Q1 or above Q3. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'sat-d3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Histograms',
            options: ['show min, Q1, median, Q3, max.', 'bars show frequency for intervals (no gaps).', 'Outliers: typically more than 1.5 × IQR below Q1 or above Q3.', 'IQR = Q3 - Q1 (middle 50% of data).']
          },
          {
            label: 'Box plots',
            options: ['IQR = Q3 - Q1 (middle 50% of data).', 'bars show frequency for intervals (no gaps).', 'show min, Q1, median, Q3, max.', 'Outliers: typically more than 1.5 × IQR below Q1 or above Q3.']
          },
          {
            label: 'Key Insight',
            options: ['show min, Q1, median, Q3, max.', 'IQR = Q3 - Q1 (middle 50% of data).', 'bars show frequency for intervals (no gaps).', 'Outliers: typically more than 1.5 × IQR below Q1 or above Q3.']
          }
        ],
        correctAnswers: ['bars show frequency for intervals (no gaps).', 'show min, Q1, median, Q3, max.', 'IQR = Q3 - Q1 (middle 50% of data).'],
        hint1: 'Think about what each concept specifically describes in Data Displays.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Data Displays describes a specific idea. Histograms: bars show frequency for intervals (no gaps). Box plots: show min, Q1, median, Q3, max. Key Insight: IQR = Q3 - Q1 (middle 50% of data).'
      }
    }
  ]
}
