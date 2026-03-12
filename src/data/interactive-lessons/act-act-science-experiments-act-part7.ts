export const actScienceExpPart7Data = {
  topicSlug: 'act-science-experiments-act',
  sections: [
    {
      id: 'act-s7-intro',
      type: 'text' as const,
      content: `
# Review & Applications

**Part 7 of 7 — Review & Applications**

Does the conclusion logically follow from the data?.

Look for overgeneralizations or claims beyond the evidence.
      `
    },
    {
      id: 'act-s7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Does the conclusion logically follow…?',
            options: [
              'Sample bias: is the sample representative of the population?.',
              'Does the conclusion logically follow from the data?.',
              'Look for overgeneralizations or claims beyond the evidence.',
              'Alternative explanations: could something else explain the results?.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Does the conclusion logically follow from the data?. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Key Insight?',
            options: [
              'Look for overgeneralizations or claims beyond the evidence.',
              'Alternative explanations: could something else explain the results?.',
              'Sample bias: is the sample representative of the population?.',
              'Does the conclusion logically follow from the data?.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Key Insight: Alternative explanations: could something else explain the results?. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'act-s7-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Alternative explanations: could something else explain the results?.

**ACT Tip:** Sample bias: is the sample representative of the population?.
      `
    },
    {
      id: 'act-s7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents ACT Tip?',
            options: [
              'Look for overgeneralizations or claims beyond the evidence.',
              'Alternative explanations: could something else explain the results?.',
              'Sample bias: is the sample representative of the population?.',
              'Does the conclusion logically follow from the data?.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — ACT Tip: Sample bias: is the sample representative of the population?. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'act-s7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key Insight',
            options: ['Does the conclusion logically follow from the data?.', 'Alternative explanations: could something else explain the results?.', 'Look for overgeneralizations or claims beyond the evidence.', 'Sample bias: is the sample representative of the population?.']
          },
          {
            label: 'ACT Tip',
            options: ['Alternative explanations: could something else explain the results?.', 'Sample bias: is the sample representative of the population?.', 'Does the conclusion logically follow from the data?.', 'Look for overgeneralizations or claims beyond the evidence.']
          }
        ],
        correctAnswers: ['Alternative explanations: could something else explain the results?.', 'Sample bias: is the sample representative of the population?.'],
        hint1: 'Think about what each concept specifically describes in Review & Applications.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Review & Applications describes a specific idea. Key Insight: Alternative explanations: could something else explain the results?. ACT Tip: Sample bias: is the sample representative of the population?.'
      }
    }
  ]
}
