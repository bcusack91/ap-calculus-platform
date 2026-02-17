export const actScienceDataPart2Data = {
  topicSlug: 'act-science-data-act',
  sections: [
    {
      id: 'act-s2-intro',
      type: 'text' as const,
      content: `
# Interpreting Graphs

**Part 2 of 7 — Interpreting Graphs**

Read both axis labels and understand what is being plotted.

Identify the independent (x-axis) and dependent (y-axis) variables.
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
            question: 'Which statement accurately explains Read both axis labels and understand…?',
            options: [
              'Read both axis labels and understand what is being plotted.',
              'Identify the independent (x-axis) and dependent (y-axis) variables.',
              'Note the scale — is it linear, logarithmic, or broken?.',
              'Multiple lines/bars: use the legend to identify each data series.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Read both axis labels and understand what is being plotted. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Key Insight?',
            options: [
              'Note the scale — is it linear, logarithmic, or broken?.',
              'Read both axis labels and understand what is being plotted.',
              'Multiple lines/bars: use the legend to identify each data series.',
              'Identify the independent (x-axis) and dependent (y-axis) variables.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Key Insight: Note the scale — is it linear, logarithmic, or broken?. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'act-s2-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Note the scale — is it linear, logarithmic, or broken?.

**ACT Tip:** Multiple lines/bars: use the legend to identify each data series.
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
            question: 'Which statement about ACT Tip is correct?',
            options: [
              'Note the scale — is it linear, logarithmic, or broken?.',
              'Identify the independent (x-axis) and dependent (y-axis) variables.',
              'Read both axis labels and understand what is being plotted.',
              'Multiple lines/bars: use the legend to identify each data series.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — ACT Tip: Multiple lines/bars: use the legend to identify each data series. Each option describes a real concept from this topic, so pay attention to the specific details.'
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
            options: ['Identify the independent (x-axis) and dependent (y-axis) variables.', 'Note the scale — is it linear, logarithmic, or broken?.', 'Read both axis labels and understand what is being plotted.', 'Multiple lines/bars: use the legend to identify each data series.']
          },
          {
            label: 'ACT Tip',
            options: ['Read both axis labels and understand what is being plotted.', 'Identify the independent (x-axis) and dependent (y-axis) variables.', 'Note the scale — is it linear, logarithmic, or broken?.', 'Multiple lines/bars: use the legend to identify each data series.']
          }
        ],
        correctAnswers: ['Note the scale — is it linear, logarithmic, or broken?.', 'Multiple lines/bars: use the legend to identify each data series.'],
        hint1: 'Think about what each concept specifically describes in Interpreting Graphs.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Interpreting Graphs describes a specific idea. Key Insight: Note the scale — is it linear, logarithmic, or broken?. ACT Tip: Multiple lines/bars: use the legend to identify each data series.'
      }
    }
  ]
}
