export const actScienceExpPart1Data = {
  topicSlug: 'act-science-experiments-act',
  sections: [
    {
      id: 'act-s1-intro',
      type: 'text' as const,
      content: `
# 📋 Science Experiments

**Part 1 of 7 — Experimental Design**

Independent variable: what the scientist changes.

Dependent variable: what is measured/observed.
      `
    },
    {
      id: 'act-s1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes independent variable?',
            options: [
              'Independent variable is a key concept for ACT Science',
              'Dependent variable: what is measured/observed',
              'This concept is not tested on the ACT',
              'None of these apply to ACT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Independent variable: what the scientist changes'
          }
        ]
      }
    },
    {
      id: 'act-s1-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Control group: the baseline for comparison.

**ACT Tip:** Constants: everything kept the same across trials.
      `
    },
    {
      id: 'act-s1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for experimental design?',
            options: [
              'Control group: the baseline for comparison',
              'Skip these questions entirely on the ACT',
              'These are only on the optional Writing section',
              'This topic appears only on the SAT'
            ],
            correctAnswer: 0,
            explanation: 'Control group: the baseline for comparison'
          }
        ]
      }
    },
    {
      id: 'act-s1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Experimental Design:',
            options: ['Independent variable: what the scientist changes', 'Dependent variable: what is measured/observed', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Control group: the baseline for comparison', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Independent variable: what the scientist changes', 'Control group: the baseline for comparison'],
        hint1: 'Think about experimental design',
        hint2: 'Consider the best ACT strategy',
        explanation: 'Independent variable: what the scientist changes. Control group: the baseline for comparison.'
      }
    }
  ]
}
