export const satProbSolvDataPart1Data = {
  topicSlug: 'sat-problem-solving-data-sat',
  sections: [
    {
      id: 'sat-p1-intro',
      type: 'text' as const,
      content: `
# 📝 Problem Solving Data

**Part 1 of 7 — Reading Tables & Graphs**

Read axis labels and units carefully.

Identify trends: increasing, decreasing, or constant.
      `
    },
    {
      id: 'sat-p1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Read axis labels and units carefully.?',
            options: [
              'increasing, decreasing, or constant.',
              'Interpolate (between data points) and extrapolate (beyond data).',
              'Read axis labels and units carefully.',
              'Bar graphs vs. line graphs vs. pie charts: each shows different things.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Read axis labels and units carefully. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Key Insight?',
            options: [
              'Bar graphs vs. line graphs vs. pie charts: each shows different things.',
              'increasing, decreasing, or constant.',
              'Read axis labels and units carefully.',
              'Interpolate (between data points) and extrapolate (beyond data).'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Key Insight: Interpolate (between data points) and extrapolate (beyond data). Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'sat-p1-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Interpolate (between data points) and extrapolate (beyond data).

**SAT Tip:** Bar graphs vs. line graphs vs. pie charts: each shows different things.
      `
    },
    {
      id: 'sat-p1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about SAT Tip is correct?',
            options: [
              'Bar graphs vs. line graphs vs. pie charts: each shows different things.',
              'Interpolate (between data points) and extrapolate (beyond data).',
              'Read axis labels and units carefully.',
              'increasing, decreasing, or constant.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — SAT Tip: Bar graphs vs. line graphs vs. pie charts: each shows different things. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'sat-p1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Identify trends',
            options: ['Interpolate (between data points) and extrapolate (beyond data).', 'Read axis labels and units carefully.', 'increasing, decreasing, or constant.', 'Bar graphs vs. line graphs vs. pie charts: each shows different things.']
          },
          {
            label: 'Key Insight',
            options: ['Read axis labels and units carefully.', 'Interpolate (between data points) and extrapolate (beyond data).', 'increasing, decreasing, or constant.', 'Bar graphs vs. line graphs vs. pie charts: each shows different things.']
          },
          {
            label: 'SAT Tip',
            options: ['Bar graphs vs. line graphs vs. pie charts: each shows different things.', 'increasing, decreasing, or constant.', 'Read axis labels and units carefully.', 'Interpolate (between data points) and extrapolate (beyond data).']
          }
        ],
        correctAnswers: ['increasing, decreasing, or constant.', 'Interpolate (between data points) and extrapolate (beyond data).', 'Bar graphs vs. line graphs vs. pie charts: each shows different things.'],
        hint1: 'Think about what each concept specifically describes in Problem Solving Data.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Problem Solving Data describes a specific idea. Identify trends: increasing, decreasing, or constant. Key Insight: Interpolate (between data points) and extrapolate (beyond data). SAT Tip: Bar graphs vs. line graphs vs. pie charts: each shows different things.'
      }
    }
  ]
}
