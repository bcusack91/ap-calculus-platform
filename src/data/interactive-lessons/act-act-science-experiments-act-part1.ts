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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Independent variable?',
            options: [
              'Constants: everything kept the same across trials.',
              'what is measured/observed.',
              'Control group: the baseline for comparison.',
              'what the scientist changes.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Independent variable: what the scientist changes. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Science Experiments, which explains Key Insight?',
            options: [
              'what is measured/observed.',
              'what the scientist changes.',
              'Constants: everything kept the same across trials.',
              'Control group: the baseline for comparison.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Key Insight: Control group: the baseline for comparison. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents ACT Tip?',
            options: [
              'Control group: the baseline for comparison.',
              'Constants: everything kept the same across trials.',
              'what the scientist changes.',
              'what is measured/observed.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — ACT Tip: Constants: everything kept the same across trials. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'act-s1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Independent variable',
            options: ['what the scientist changes.', 'what is measured/observed.', 'Control group: the baseline for comparison.', 'Constants: everything kept the same across trials.']
          },
          {
            label: 'Dependent variable',
            options: ['what the scientist changes.', 'what is measured/observed.', 'Control group: the baseline for comparison.', 'Constants: everything kept the same across trials.']
          },
          {
            label: 'Key Insight',
            options: ['Control group: the baseline for comparison.', 'what is measured/observed.', 'what the scientist changes.', 'Constants: everything kept the same across trials.']
          }
        ],
        correctAnswers: ['what the scientist changes.', 'what is measured/observed.', 'Control group: the baseline for comparison.'],
        hint1: 'Think about what each concept specifically describes in Science Experiments.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Science Experiments describes a specific idea. Independent variable: what the scientist changes. Dependent variable: what is measured/observed. Key Insight: Control group: the baseline for comparison.'
      }
    }
  ]
}
