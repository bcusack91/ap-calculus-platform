export const actScienceExpPart3Data = {
  topicSlug: 'act-science-experiments-act',
  sections: [
    {
      id: 'act-s3-intro',
      type: 'text' as const,
      content: `
# Research Summaries

**Part 3 of 7 — Research Summaries**

Multiple experiments on the same topic — each with a different approach.

Identify what each experiment tests and how they differ.
      `
    },
    {
      id: 'act-s3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Multiple experiments on the same topic…?',
            options: [
              'Synthesize findings across experiments to draw broader conclusions.',
              'Results from one experiment may support or contradict another.',
              'Multiple experiments on the same topic — each with a different approach.',
              'Identify what each experiment tests and how they differ.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Multiple experiments on the same topic — each with a different approach. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Research Summaries, which explains Key Insight?',
            options: [
              'Identify what each experiment tests and how they differ.',
              'Results from one experiment may support or contradict another.',
              'Synthesize findings across experiments to draw broader conclusions.',
              'Multiple experiments on the same topic — each with a different approach.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Key Insight: Results from one experiment may support or contradict another. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'act-s3-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Results from one experiment may support or contradict another.

**ACT Tip:** Synthesize findings across experiments to draw broader conclusions.
      `
    },
    {
      id: 'act-s3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about ACT Tip is correct?',
            options: [
              'Multiple experiments on the same topic — each with a different approach.',
              'Results from one experiment may support or contradict another.',
              'Synthesize findings across experiments to draw broader conclusions.',
              'Identify what each experiment tests and how they differ.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — ACT Tip: Synthesize findings across experiments to draw broader conclusions. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'act-s3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key Insight',
            options: ['Multiple experiments on the same topic — each with a different approach.', 'Results from one experiment may support or contradict another.', 'Identify what each experiment tests and how they differ.', 'Synthesize findings across experiments to draw broader conclusions.']
          },
          {
            label: 'ACT Tip',
            options: ['Multiple experiments on the same topic — each with a different approach.', 'Identify what each experiment tests and how they differ.', 'Synthesize findings across experiments to draw broader conclusions.', 'Results from one experiment may support or contradict another.']
          }
        ],
        correctAnswers: ['Results from one experiment may support or contradict another.', 'Synthesize findings across experiments to draw broader conclusions.'],
        hint1: 'Think about what each concept specifically describes in Research Summaries.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Research Summaries describes a specific idea. Key Insight: Results from one experiment may support or contradict another. ACT Tip: Synthesize findings across experiments to draw broader conclusions.'
      }
    }
  ]
}
