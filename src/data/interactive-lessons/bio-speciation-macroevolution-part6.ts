export const bioSpeciationPart6Data = {
  topicSlug: 'speciation-macroevolution',
  sections: [
    {
      id: 'spec6-intro-p6',
      type: 'text' as const,
      content: `
# ## Speciation: Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving**

1. Interpreting phylogenetic trees
2. Identifying reproductive isolation mechanisms
3. Predicting speciation outcomes
4. Analyzing adaptive radiation patterns
      `
    },
    {
      id: 'spec6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Interpreting phylogenetic trees" refer to in biology?',
            options: [
              'Interpreting phylogenetic trees',
              'Identifying reproductive isolation mechanisms',
              'Predicting speciation outcomes',
              'Analyzing adaptive radiation patterns'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Interpreting phylogenetic trees. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Predicting speciation outcomes:',
            options: [
              'Analyzing adaptive radiation patterns',
              'Interpreting phylogenetic trees',
              'Predicting speciation outcomes',
              'Identifying reproductive isolation mechanisms'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Predicting speciation outcomes. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'spec6-detail-p6',
      type: 'text' as const,
      content: `
# ### Key Details

- **Interpreting phylogenetic trees**
- **Identifying reproductive isolation mechanisms**
- **Predicting speciation outcomes**
- **Analyzing adaptive radiation patterns**
      `
    },
    {
      id: 'spec6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about Analyzing adaptive radiation patterns is correct?',
            options: [
              'Interpreting phylogenetic trees',
              'Analyzing adaptive radiation patterns',
              'Identifying reproductive isolation mechanisms',
              'Predicting speciation outcomes'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Analyzing adaptive radiation patterns. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'spec6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Interpreting phylogenetic trees',
            options: ['Interpreting phylogenetic trees', 'Predicting speciation outcomes', 'Identifying reproductive isolation mechanisms', 'Analyzing adaptive radiation patterns']
          },
          {
            label: 'Identifying reproductive isolation…',
            options: ['Analyzing adaptive radiation patterns', 'Identifying reproductive isolation mechanisms', 'Interpreting phylogenetic trees', 'Predicting speciation outcomes']
          },
          {
            label: 'Predicting speciation outcomes',
            options: ['Interpreting phylogenetic trees', 'Identifying reproductive isolation mechanisms', 'Analyzing adaptive radiation patterns', 'Predicting speciation outcomes']
          }
        ],
        correctAnswers: ['Interpreting phylogenetic trees', 'Identifying reproductive isolation mechanisms', 'Predicting speciation outcomes'],
        hint1: 'Think about what each concept specifically describes in Speciation: Problem-Solving Workshop.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Speciation: Problem-Solving Workshop describes a specific idea. Interpreting phylogenetic trees. Identifying reproductive isolation mechanisms. Predicting speciation outcomes.'
      }
    }
  ]
}
