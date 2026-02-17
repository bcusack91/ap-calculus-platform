export const actPassageTypesPart4Data = {
  topicSlug: 'act-reading-passage-types-act',
  sections: [
    {
      id: 'act-r4-intro',
      type: 'text' as const,
      content: `
# Natural Science

**Part 4 of 7 — Natural Science**

Scientific topics: biology, chemistry, physics, earth science.

Focus on the process, findings, and conclusions.
      `
    },
    {
      id: 'act-r4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Scientific topics" refer to in ACT prep?',
            options: [
              'Focus on the process, findings, and conclusions.',
              'Understand the experiment: hypothesis, method, results, implications.',
              'Questions test comprehension of scientific reasoning and data.',
              'biology, chemistry, physics, earth science.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Scientific topics: biology, chemistry, physics, earth science. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Key Insight?',
            options: [
              'biology, chemistry, physics, earth science.',
              'Understand the experiment: hypothesis, method, results, implications.',
              'Questions test comprehension of scientific reasoning and data.',
              'Focus on the process, findings, and conclusions.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Key Insight: Understand the experiment: hypothesis, method, results, implications. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'act-r4-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Understand the experiment: hypothesis, method, results, implications.

**ACT Tip:** Questions test comprehension of scientific reasoning and data.
      `
    },
    {
      id: 'act-r4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Natural Science, which correctly describes ACT Tip?',
            options: [
              'Questions test comprehension of scientific reasoning and data.',
              'Understand the experiment: hypothesis, method, results, implications.',
              'Focus on the process, findings, and conclusions.',
              'biology, chemistry, physics, earth science.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — ACT Tip: Questions test comprehension of scientific reasoning and data. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'act-r4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Scientific topics',
            options: ['Understand the experiment: hypothesis, method, results, implications.', 'Focus on the process, findings, and conclusions.', 'biology, chemistry, physics, earth science.', 'Questions test comprehension of scientific reasoning and data.']
          },
          {
            label: 'Key Insight',
            options: ['biology, chemistry, physics, earth science.', 'Understand the experiment: hypothesis, method, results, implications.', 'Focus on the process, findings, and conclusions.', 'Questions test comprehension of scientific reasoning and data.']
          },
          {
            label: 'ACT Tip',
            options: ['Questions test comprehension of scientific reasoning and data.', 'Understand the experiment: hypothesis, method, results, implications.', 'biology, chemistry, physics, earth science.', 'Focus on the process, findings, and conclusions.']
          }
        ],
        correctAnswers: ['biology, chemistry, physics, earth science.', 'Understand the experiment: hypothesis, method, results, implications.', 'Questions test comprehension of scientific reasoning and data.'],
        hint1: 'Think about what each concept specifically describes in Natural Science.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Natural Science describes a specific idea. Scientific topics: biology, chemistry, physics, earth science. Key Insight: Understand the experiment: hypothesis, method, results, implications. ACT Tip: Questions test comprehension of scientific reasoning and data.'
      }
    }
  ]
}
