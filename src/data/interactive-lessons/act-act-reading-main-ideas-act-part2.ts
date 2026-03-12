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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Supporting details provide evidence for…?',
            options: [
              'Look for specific examples, statistics, quotes, or descriptions.',
              'Detail questions often point to specific lines or paragraphs.',
              'Supporting details provide evidence for the main idea.',
              'The answer is stated in the passage — don\'t infer when the question asks for details.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Supporting details provide evidence for the main idea. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Key Insight:',
            options: [
              'Supporting details provide evidence for the main idea.',
              'Detail questions often point to specific lines or paragraphs.',
              'The answer is stated in the passage — don\'t infer when the question asks for details.',
              'Look for specific examples, statistics, quotes, or descriptions.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Key Insight: Detail questions often point to specific lines or paragraphs. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Supporting Details, which correctly describes ACT Tip?',
            options: [
              'Look for specific examples, statistics, quotes, or descriptions.',
              'The answer is stated in the passage — don\'t infer when the question asks for details.',
              'Detail questions often point to specific lines or paragraphs.',
              'Supporting details provide evidence for the main idea.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — ACT Tip: The answer is stated in the passage — don\'t infer when the question asks for details. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'act-r2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key Insight',
            options: ['Detail questions often point to specific lines or paragraphs.', 'Supporting details provide evidence for the main idea.', 'The answer is stated in the passage — don\'t infer when the question asks for details.', 'Look for specific examples, statistics, quotes, or descriptions.']
          },
          {
            label: 'ACT Tip',
            options: ['Supporting details provide evidence for the main idea.', 'Detail questions often point to specific lines or paragraphs.', 'Look for specific examples, statistics, quotes, or descriptions.', 'The answer is stated in the passage — don\'t infer when the question asks for details.']
          }
        ],
        correctAnswers: ['Detail questions often point to specific lines or paragraphs.', 'The answer is stated in the passage — don\'t infer when the question asks for details.'],
        hint1: 'Think about what each concept specifically describes in Supporting Details.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Supporting Details describes a specific idea. Key Insight: Detail questions often point to specific lines or paragraphs. ACT Tip: The answer is stated in the passage — don\'t infer when the question asks for details.'
      }
    }
  ]
}
