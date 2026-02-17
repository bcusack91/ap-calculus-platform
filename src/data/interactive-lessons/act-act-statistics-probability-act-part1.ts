export const actStatProbPart1Data = {
  topicSlug: 'act-statistics-probability-act',
  sections: [
    {
      id: 'act-s1-intro',
      type: 'text' as const,
      content: `
# 📋 Statistics Probability

**Part 1 of 7 — Mean, Median, Mode**

Mean = sum/count; Median = middle value (sorted); Mode = most frequent.

Weighted average: multiply each value by its weight, then divide by total weight.
      `
    },
    {
      id: 'act-s1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Mean = sum/count; Median = middle value…" refer to in ACT prep?',
            options: [
              'Range = max - min.',
              'Mean = sum/count; Median = middle value (sorted); Mode = most frequent.',
              'Effect of adding/removing values: track the sum.',
              'multiply each value by its weight, then divide by total weight.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Mean = sum/count; Median = middle value (sorted); Mode = most frequent. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Key Insight?',
            options: [
              'Range = max - min.',
              'Effect of adding/removing values: track the sum.',
              'multiply each value by its weight, then divide by total weight.',
              'Mean = sum/count; Median = middle value (sorted); Mode = most frequent.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Key Insight: Effect of adding/removing values: track the sum. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'act-s1-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Effect of adding/removing values: track the sum.

**ACT Tip:** Range = max - min.
      `
    },
    {
      id: 'act-s1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents ACT Tip?',
            options: [
              'Range = max - min.',
              'Mean = sum/count; Median = middle value (sorted); Mode = most frequent.',
              'Effect of adding/removing values: track the sum.',
              'multiply each value by its weight, then divide by total weight.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — ACT Tip: Range = max - min. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'act-s1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Weighted average',
            options: ['Range = max - min.', 'Effect of adding/removing values: track the sum.', 'multiply each value by its weight, then divide by total weight.', 'Mean = sum/count; Median = middle value (sorted); Mode = most frequent.']
          },
          {
            label: 'Key Insight',
            options: ['Effect of adding/removing values: track the sum.', 'Mean = sum/count; Median = middle value (sorted); Mode = most frequent.', 'multiply each value by its weight, then divide by total weight.', 'Range = max - min.']
          },
          {
            label: 'ACT Tip',
            options: ['Range = max - min.', 'Mean = sum/count; Median = middle value (sorted); Mode = most frequent.', 'multiply each value by its weight, then divide by total weight.', 'Effect of adding/removing values: track the sum.']
          }
        ],
        correctAnswers: ['multiply each value by its weight, then divide by total weight.', 'Effect of adding/removing values: track the sum.', 'Range = max - min.'],
        hint1: 'Think about what each concept specifically describes in Statistics Probability.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Statistics Probability describes a specific idea. Weighted average: multiply each value by its weight, then divide by total weight. Key Insight: Effect of adding/removing values: track the sum. ACT Tip: Range = max - min.'
      }
    }
  ]
}
