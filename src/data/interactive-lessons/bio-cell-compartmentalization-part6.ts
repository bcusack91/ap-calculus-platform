export const bioCellCompartmentPart6Data = {
  topicSlug: 'cell-compartmentalization',
  sections: [
    {
      id: 'cell6-intro-p6',
      type: 'text' as const,
      content: `
# ## Cell Compartmentalization: Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving**

1. SA:V ratio calculations
2. Predicting effects of compartment disruption
3. Comparing prokaryotic and eukaryotic strategies
4. Experimental design questions
      `
    },
    {
      id: 'cell6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes SA?',
            options: [
              'Comparing prokaryotic and eukaryotic strategies',
              'V ratio calculations',
              'Experimental design questions',
              'Predicting effects of compartment disruption'
            ],
            correctAnswer: 1,
            explanation: 'Correct — SA: V ratio calculations. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Comparing prokaryotic and eukaryotic…?',
            options: [
              'Comparing prokaryotic and eukaryotic strategies',
              'V ratio calculations',
              'Experimental design questions',
              'Predicting effects of compartment disruption'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Comparing prokaryotic and eukaryotic strategies. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'cell6-detail-p6',
      type: 'text' as const,
      content: `
# ### Key Details

- **SA**:V ratio calculations
- **Predicting effects of compartment disruption**
- **Comparing prokaryotic and eukaryotic strategies**
- **Experimental design questions**
      `
    },
    {
      id: 'cell6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents Experimental design questions?',
            options: [
              'Predicting effects of compartment disruption',
              'Comparing prokaryotic and eukaryotic strategies',
              'V ratio calculations',
              'Experimental design questions'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Experimental design questions. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'cell6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'SA',
            options: ['Experimental design questions', 'V ratio calculations', 'Predicting effects of compartment disruption', 'Comparing prokaryotic and eukaryotic strategies']
          },
          {
            label: 'Predicting effects of compartment…',
            options: ['Predicting effects of compartment disruption', 'Experimental design questions', 'Comparing prokaryotic and eukaryotic strategies', 'V ratio calculations']
          },
          {
            label: 'Comparing prokaryotic and eukaryotic…',
            options: ['Comparing prokaryotic and eukaryotic strategies', 'V ratio calculations', 'Predicting effects of compartment disruption', 'Experimental design questions']
          }
        ],
        correctAnswers: ['V ratio calculations', 'Predicting effects of compartment disruption', 'Comparing prokaryotic and eukaryotic strategies'],
        hint1: 'Think about what each concept specifically describes in Cell Compartmentalization: Problem-Solving Workshop.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Cell Compartmentalization: Problem-Solving Workshop describes a specific idea. SA: V ratio calculations. Predicting effects of compartment disruption. Comparing prokaryotic and eukaryotic strategies.'
      }
    }
  ]
}
