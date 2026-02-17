export const bioSpeciationPart7Data = {
  topicSlug: 'speciation-macroevolution',
  sections: [
    {
      id: 'spec7-intro-p7',
      type: 'text' as const,
      content: `
# ## Speciation: Synthesis & AP Review

**Part 7 of 7 — Synthesis & AP Review**

1. Speciation connects micro- and macroevolution
2. Reproductive isolation mechanisms
3. Reading and constructing cladograms
4. AP exam: phylogenetics questions
      `
    },
    {
      id: 'spec7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Speciation connects micro- and…" refer to in biology?',
            options: [
              'phylogenetics questions',
              'Reproductive isolation mechanisms',
              'Speciation connects micro- and macroevolution',
              'Reading and constructing cladograms'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Speciation connects micro- and macroevolution. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Reading and constructing cladograms?',
            options: [
              'Reading and constructing cladograms',
              'Reproductive isolation mechanisms',
              'phylogenetics questions',
              'Speciation connects micro- and macroevolution'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Reading and constructing cladograms. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'spec7-detail-p7',
      type: 'text' as const,
      content: `
# ### Key Details

- **Speciation connects micro- and macroevolution**
- **Reproductive isolation mechanisms**
- **Reading and constructing cladograms**
- **AP exam**: phylogenetics questions
      `
    },
    {
      id: 'spec7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Speciation: Synthesis & AP Review, which correctly describes AP exam?',
            options: [
              'Reading and constructing cladograms',
              'Speciation connects micro- and macroevolution',
              'Reproductive isolation mechanisms',
              'phylogenetics questions'
            ],
            correctAnswer: 3,
            explanation: 'Correct — AP exam: phylogenetics questions. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'spec7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Speciation connects micro- and…',
            options: ['phylogenetics questions', 'Reproductive isolation mechanisms', 'Speciation connects micro- and macroevolution', 'Reading and constructing cladograms']
          },
          {
            label: 'Reproductive isolation mechanisms',
            options: ['Speciation connects micro- and macroevolution', 'Reproductive isolation mechanisms', 'Reading and constructing cladograms', 'phylogenetics questions']
          },
          {
            label: 'Reading and constructing cladograms',
            options: ['Reproductive isolation mechanisms', 'Reading and constructing cladograms', 'Speciation connects micro- and macroevolution', 'phylogenetics questions']
          }
        ],
        correctAnswers: ['Speciation connects micro- and macroevolution', 'Reproductive isolation mechanisms', 'Reading and constructing cladograms'],
        hint1: 'Think about what each concept specifically describes in Speciation: Synthesis & AP Review.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Speciation: Synthesis & AP Review describes a specific idea. Speciation connects micro- and macroevolution. Reproductive isolation mechanisms. Reading and constructing cladograms.'
      }
    }
  ]
}
