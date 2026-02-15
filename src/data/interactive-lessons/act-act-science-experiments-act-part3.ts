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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes multiple experiments on the same topic — each with a different approach?',
            options: [
              'Multiple experiments on the same topic — each with a different approach is a key concept for ACT Science',
              'Identify what each experiment tests and how they differ',
              'This concept is not tested on the ACT',
              'None of these apply to ACT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Multiple experiments on the same topic — each with a different approach'
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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for research summaries?',
            options: [
              'Results from one experiment may support or contradict another',
              'Skip these questions entirely on the ACT',
              'These are only on the optional Writing section',
              'This topic appears only on the SAT'
            ],
            correctAnswer: 0,
            explanation: 'Results from one experiment may support or contradict another'
          }
        ]
      }
    },
    {
      id: 'act-s3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Research Summaries:',
            options: ['Multiple experiments on the same topic — each with', 'Identify what each experiment tests and how they d', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Results from one experiment may support or contrad', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Multiple experiments on the same topic — each with', 'Results from one experiment may support or contrad'],
        hint1: 'Think about research summaries',
        hint2: 'Consider the best ACT strategy',
        explanation: 'Multiple experiments on the same topic — each with a different approach. Results from one experiment may support or contradict another.'
      }
    }
  ]
}
