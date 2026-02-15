export const actRhetoricalPart3Data = {
  topicSlug: 'act-english-rhetorical-act',
  sections: [
    {
      id: 'act-e3-intro',
      type: 'text' as const,
      content: `
# Sentence Placement

**Part 3 of 7 — Sentence Placement**

Topic sentences usually go at the beginning of paragraphs.

Supporting details follow the topic sentence.
      `
    },
    {
      id: 'act-e3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes topic sentences usually go at the beginning of paragraphs?',
            options: [
              'Topic sentences usually go at the beginning of paragraphs is a key concept for ACT English/Reading',
              'Supporting details follow the topic sentence',
              'This concept is not tested on the ACT',
              'None of these apply to ACT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Topic sentences usually go at the beginning of paragraphs'
          }
        ]
      }
    },
    {
      id: 'act-e3-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Concluding/transitional sentences go at the end.

**ACT Tip:** Place sentences where they maintain chronological or logical order.
      `
    },
    {
      id: 'act-e3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for sentence placement?',
            options: [
              'Concluding/transitional sentences go at the end',
              'Skip these questions entirely on the ACT',
              'These are only on the optional Writing section',
              'This topic appears only on the SAT'
            ],
            correctAnswer: 0,
            explanation: 'Concluding/transitional sentences go at the end'
          }
        ]
      }
    },
    {
      id: 'act-e3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Sentence Placement:',
            options: ['Topic sentences usually go at the beginning of par', 'Supporting details follow the topic sentence', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Concluding/transitional sentences go at the end', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Topic sentences usually go at the beginning of par', 'Concluding/transitional sentences go at the end'],
        hint1: 'Think about sentence placement',
        hint2: 'Consider the best ACT strategy',
        explanation: 'Topic sentences usually go at the beginning of paragraphs. Concluding/transitional sentences go at the end.'
      }
    }
  ]
}
