export const bioEcologyPart7Data = {
  topicSlug: 'ecology-ecosystems',
  sections: [
    {
      id: 'ecol7-intro-p7',
      type: 'text' as const,
      content: `
# ## Ecology: Synthesis & AP Review

**Part 7 of 7 — Synthesis & AP Review**

1. Ecology connects to evolution
2. Ecosystems and energy flow
3. Human impacts on ecosystems
4. AP exam: data analysis in ecology
      `
    },
    {
      id: 'ecol7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Ecology connects to evolution" refer to in biology?',
            options: [
              'data analysis in ecology',
              'Ecosystems and energy flow',
              'Human impacts on ecosystems',
              'Ecology connects to evolution'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Ecology connects to evolution. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Human impacts on ecosystems:',
            options: [
              'Ecosystems and energy flow',
              'Ecology connects to evolution',
              'Human impacts on ecosystems',
              'data analysis in ecology'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Human impacts on ecosystems. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'ecol7-detail-p7',
      type: 'text' as const,
      content: `
# ### Key Details

- **Ecology connects to evolution**
- **Ecosystems and energy flow**
- **Human impacts on ecosystems**
- **AP exam**: data analysis in ecology
      `
    },
    {
      id: 'ecol7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Ecology: Synthesis & AP Review, which correctly describes AP exam?',
            options: [
              'data analysis in ecology',
              'Ecosystems and energy flow',
              'Ecology connects to evolution',
              'Human impacts on ecosystems'
            ],
            correctAnswer: 0,
            explanation: 'Correct — AP exam: data analysis in ecology. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'ecol7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Ecology connects to evolution',
            options: ['data analysis in ecology', 'Human impacts on ecosystems', 'Ecology connects to evolution', 'Ecosystems and energy flow']
          },
          {
            label: 'Ecosystems and energy flow',
            options: ['Ecology connects to evolution', 'Ecosystems and energy flow', 'Human impacts on ecosystems', 'data analysis in ecology']
          },
          {
            label: 'Human impacts on ecosystems',
            options: ['Ecology connects to evolution', 'data analysis in ecology', 'Ecosystems and energy flow', 'Human impacts on ecosystems']
          }
        ],
        correctAnswers: ['Ecology connects to evolution', 'Ecosystems and energy flow', 'Human impacts on ecosystems'],
        hint1: 'Think about what each concept specifically describes in Ecology: Synthesis & AP Review.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Ecology: Synthesis & AP Review describes a specific idea. Ecology connects to evolution. Ecosystems and energy flow. Human impacts on ecosystems.'
      }
    }
  ]
}
