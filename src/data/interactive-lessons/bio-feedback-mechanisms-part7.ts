export const bioFeedbackPart7Data = {
  topicSlug: 'feedback-mechanisms',
  sections: [
    {
      id: 'feed7-intro-p7',
      type: 'text' as const,
      content: `
# ## Feedback Mechanisms: Synthesis & AP Review

**Part 7 of 7 — Synthesis & AP Review**

1. Feedback in all body systems
2. Disease as homeostatic failure
3. Feedback at population and ecosystem levels
4. AP exam: constructing feedback diagrams
      `
    },
    {
      id: 'feed7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Feedback in all body systems?',
            options: [
              'constructing feedback diagrams',
              'Feedback at population and ecosystem levels',
              'Disease as homeostatic failure',
              'Feedback in all body systems'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Feedback in all body systems. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Feedback at population and ecosystem…?',
            options: [
              'Feedback in all body systems',
              'Disease as homeostatic failure',
              'Feedback at population and ecosystem levels',
              'constructing feedback diagrams'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Feedback at population and ecosystem levels. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'feed7-detail-p7',
      type: 'text' as const,
      content: `
# ### Key Details

- **Feedback in all body systems**
- **Disease as homeostatic failure**
- **Feedback at population and ecosystem levels**
- **AP exam**: constructing feedback diagrams
      `
    },
    {
      id: 'feed7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about AP exam is correct?',
            options: [
              'constructing feedback diagrams',
              'Feedback at population and ecosystem levels',
              'Feedback in all body systems',
              'Disease as homeostatic failure'
            ],
            correctAnswer: 0,
            explanation: 'Correct — AP exam: constructing feedback diagrams. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'feed7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Feedback in all body systems',
            options: ['constructing feedback diagrams', 'Feedback in all body systems', 'Disease as homeostatic failure', 'Feedback at population and ecosystem levels']
          },
          {
            label: 'Disease as homeostatic failure',
            options: ['Feedback in all body systems', 'Feedback at population and ecosystem levels', 'Disease as homeostatic failure', 'constructing feedback diagrams']
          },
          {
            label: 'Feedback at population and ecosystem…',
            options: ['Disease as homeostatic failure', 'Feedback at population and ecosystem levels', 'Feedback in all body systems', 'constructing feedback diagrams']
          }
        ],
        correctAnswers: ['Feedback in all body systems', 'Disease as homeostatic failure', 'Feedback at population and ecosystem levels'],
        hint1: 'Think about what each concept specifically describes in Feedback Mechanisms: Synthesis & AP Review.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Feedback Mechanisms: Synthesis & AP Review describes a specific idea. Feedback in all body systems. Disease as homeostatic failure. Feedback at population and ecosystem levels.'
      }
    }
  ]
}
