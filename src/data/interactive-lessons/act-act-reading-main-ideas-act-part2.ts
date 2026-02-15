export const actReadingMainPart2Data = {
  topicSlug: 'act-reading-main-ideas-act',
  sections: [
    {
      id: 'act-r2-intro',
      type: 'text' as const,
      content: `
# Supporting Details

**Part 2 of 7 — Supporting Details**

Supporting details provide evidence for the main idea.

Look for specific examples, statistics, quotes, or descriptions.
      `
    },
    {
      id: 'act-r2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes supporting details provide evidence for the main idea?',
            options: [
              'Supporting details provide evidence for the main idea is a key concept for ACT English/Reading',
              'Look for specific examples, statistics, quotes, or descriptions',
              'This concept is not tested on the ACT',
              'None of these apply to ACT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Supporting details provide evidence for the main idea'
          }
        ]
      }
    },
    {
      id: 'act-r2-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Detail questions often point to specific lines or paragraphs.

**ACT Tip:** The answer is stated in the passage — don't infer when the question asks for details.
      `
    },
    {
      id: 'act-r2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for supporting details?',
            options: [
              'Detail questions often point to specific lines or paragraphs',
              'Skip these questions entirely on the ACT',
              'These are only on the optional Writing section',
              'This topic appears only on the SAT'
            ],
            correctAnswer: 0,
            explanation: 'Detail questions often point to specific lines or paragraphs'
          }
        ]
      }
    },
    {
      id: 'act-r2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Supporting Details:',
            options: ['Supporting details provide evidence for the main i', 'Look for specific examples, statistics, quotes, or', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Detail questions often point to specific lines or ', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Supporting details provide evidence for the main i', 'Detail questions often point to specific lines or '],
        hint1: 'Think about supporting details',
        hint2: 'Consider the best ACT strategy',
        explanation: 'Supporting details provide evidence for the main idea. Detail questions often point to specific lines or paragraphs.'
      }
    }
  ]
}
