export const actScienceExpPart6Data = {
  topicSlug: 'act-science-experiments-act',
  sections: [
    {
      id: 'act-s6-intro',
      type: 'text' as const,
      content: `
# Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

Does the conclusion logically follow from the data?.

Look for overgeneralizations or claims beyond the evidence.
      `
    },
    {
      id: 'act-s6-quiz1',
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
              'Alternative explanations: could something else explain the results?.',
              'Does the conclusion logically follow from the data?.',
              'Look for overgeneralizations or claims beyond the evidence.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Does the conclusion logically follow from the data?. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Key Insight?',
            options: [
              'Look for overgeneralizations or claims beyond the evidence.',
              'Does the conclusion logically follow from the data?.',
              'Alternative explanations: could something else explain the results?.',
              'Sample bias: is the sample representative of the population?.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Key Insight: Alternative explanations: could something else explain the results?. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'act-s6-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Alternative explanations: could something else explain the results?.

**ACT Tip:** Sample bias: is the sample representative of the population?.
      `
    },
    {
      id: 'act-s6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about ACT Tip is correct?',
            options: [
              'Does the conclusion logically follow from the data?.',
              'Sample bias: is the sample representative of the population?.',
              'Alternative explanations: could something else explain the results?.',
              'Look for overgeneralizations or claims beyond the evidence.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — ACT Tip: Sample bias: is the sample representative of the population?. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'act-s6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key Insight',
            options: ['Alternative explanations: could something else explain the results?.', 'Does the conclusion logically follow from the data?.', 'Look for overgeneralizations or claims beyond the evidence.', 'Sample bias: is the sample representative of the population?.']
          },
          {
            label: 'ACT Tip',
            options: ['Alternative explanations: could something else explain the results?.', 'Does the conclusion logically follow from the data?.', 'Look for overgeneralizations or claims beyond the evidence.', 'Sample bias: is the sample representative of the population?.']
          }
        ],
        correctAnswers: ['Alternative explanations: could something else explain the results?.', 'Sample bias: is the sample representative of the population?.'],
        hint1: 'Think about what each concept specifically describes in Problem-Solving Workshop.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Problem-Solving Workshop describes a specific idea. Key Insight: Alternative explanations: could something else explain the results?. ACT Tip: Sample bias: is the sample representative of the population?.'
      }
    }
  ]
}
