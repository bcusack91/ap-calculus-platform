export const actStatProbPart2Data = {
  topicSlug: 'act-statistics-probability-act',
  sections: [
    {
      id: 'act-s2-intro',
      type: 'text' as const,
      content: `
# Data Displays

**Part 2 of 7 — Data Displays**

Bar graphs, histograms, line graphs, pie charts, stem-and-leaf plots.

Read axes labels and scales carefully.
      `
    },
    {
      id: 'act-s2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Bar graphs, histograms, line graphs,…" refer to in ACT prep?',
            options: [
              'Read axes labels and scales carefully.',
              'Box plots: min, Q1, median, Q3, max.',
              'Histograms show frequency distribution — bars touch (no gaps).',
              'Bar graphs, histograms, line graphs, pie charts, stem-and-leaf plots.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Bar graphs, histograms, line graphs, pie charts, stem-and-leaf plots. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Key Insight?',
            options: [
              'Bar graphs, histograms, line graphs, pie charts, stem-and-leaf plots.',
              'Box plots: min, Q1, median, Q3, max.',
              'Histograms show frequency distribution — bars touch (no gaps).',
              'Read axes labels and scales carefully.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Key Insight: Box plots: min, Q1, median, Q3, max. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'act-s2-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Box plots: min, Q1, median, Q3, max.

**ACT Tip:** Histograms show frequency distribution — bars touch (no gaps).
      `
    },
    {
      id: 'act-s2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Data Displays, which correctly describes ACT Tip?',
            options: [
              'Box plots: min, Q1, median, Q3, max.',
              'Read axes labels and scales carefully.',
              'Histograms show frequency distribution — bars touch (no gaps).',
              'Bar graphs, histograms, line graphs, pie charts, stem-and-leaf plots.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — ACT Tip: Histograms show frequency distribution — bars touch (no gaps). Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'act-s2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key Insight',
            options: ['Box plots: min, Q1, median, Q3, max.', 'Read axes labels and scales carefully.', 'Bar graphs, histograms, line graphs, pie charts, stem-and-leaf plots.', 'Histograms show frequency distribution — bars touch (no gaps).']
          },
          {
            label: 'ACT Tip',
            options: ['Bar graphs, histograms, line graphs, pie charts, stem-and-leaf plots.', 'Box plots: min, Q1, median, Q3, max.', 'Read axes labels and scales carefully.', 'Histograms show frequency distribution — bars touch (no gaps).']
          }
        ],
        correctAnswers: ['Box plots: min, Q1, median, Q3, max.', 'Histograms show frequency distribution — bars touch (no gaps).'],
        hint1: 'Think about what each concept specifically describes in Data Displays.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Data Displays describes a specific idea. Key Insight: Box plots: min, Q1, median, Q3, max. ACT Tip: Histograms show frequency distribution — bars touch (no gaps).'
      }
    }
  ]
}
