export const bioNatSelectionPart7Data = {
  topicSlug: 'natural-selection-adaptation',
  sections: [
    {
      id: 'natu7-intro-p7',
      type: 'text' as const,
      content: `
# ## Natural Selection: Synthesis & AP Review

**Part 7 of 7 — Synthesis & AP Review**

1. Five agents of evolution
2. Natural selection vs genetic drift
3. Hardy-Weinberg as null hypothesis
4. AP exam: mathematical analysis of evolution
      `
    },
    {
      id: 'natu7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Five agents of evolution?',
            options: [
              'Hardy-Weinberg as null hypothesis',
              'Natural selection vs genetic drift',
              'Five agents of evolution',
              'mathematical analysis of evolution'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Five agents of evolution. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Hardy-Weinberg as null hypothesis:',
            options: [
              'Natural selection vs genetic drift',
              'Five agents of evolution',
              'Hardy-Weinberg as null hypothesis',
              'mathematical analysis of evolution'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Hardy-Weinberg as null hypothesis. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'natu7-detail-p7',
      type: 'text' as const,
      content: `
# ### Key Details

- **Five agents of evolution**
- **Natural selection vs genetic drift**
- **Hardy-Weinberg as null hypothesis**
- **AP exam**: mathematical analysis of evolution
      `
    },
    {
      id: 'natu7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about AP exam is correct?',
            options: [
              'Natural selection vs genetic drift',
              'Five agents of evolution',
              'Hardy-Weinberg as null hypothesis',
              'mathematical analysis of evolution'
            ],
            correctAnswer: 3,
            explanation: 'Correct — AP exam: mathematical analysis of evolution. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'natu7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Five agents of evolution',
            options: ['mathematical analysis of evolution', 'Natural selection vs genetic drift', 'Hardy-Weinberg as null hypothesis', 'Five agents of evolution']
          },
          {
            label: 'Natural selection vs genetic drift',
            options: ['Natural selection vs genetic drift', 'Hardy-Weinberg as null hypothesis', 'mathematical analysis of evolution', 'Five agents of evolution']
          },
          {
            label: 'Hardy-Weinberg as null hypothesis',
            options: ['Hardy-Weinberg as null hypothesis', 'Natural selection vs genetic drift', 'Five agents of evolution', 'mathematical analysis of evolution']
          }
        ],
        correctAnswers: ['Five agents of evolution', 'Natural selection vs genetic drift', 'Hardy-Weinberg as null hypothesis'],
        hint1: 'Think about what each concept specifically describes in Natural Selection: Synthesis & AP Review.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Natural Selection: Synthesis & AP Review describes a specific idea. Five agents of evolution. Natural selection vs genetic drift. Hardy-Weinberg as null hypothesis.'
      }
    }
  ]
}
