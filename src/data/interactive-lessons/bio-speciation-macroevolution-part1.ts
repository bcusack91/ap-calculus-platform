export const bioSpeciationPart1Data = {
  topicSlug: 'speciation-macroevolution',
  sections: [
    {
      id: 'spec1-intro-p1',
      type: 'text' as const,
      content: `
# ## Species Concepts

**Part 1 of 7 — Species Concepts**

1. Biological species concept: can interbreed and produce fertile offspring
2. Morphological species concept: based on physical appearance
3. Phylogenetic species concept: smallest monophyletic group
4. Reproductive isolation prevents gene flow between species
      `
    },
    {
      id: 'spec1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Biological species concept" refer to in biology?',
            options: [
              'smallest monophyletic group',
              'based on physical appearance',
              'Reproductive isolation prevents gene flow between species',
              'can interbreed and produce fertile offspring'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Biological species concept: can interbreed and produce fertile offspring. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Species Concepts, which explains Phylogenetic species concept?',
            options: [
              'can interbreed and produce fertile offspring',
              'smallest monophyletic group',
              'Reproductive isolation prevents gene flow between species',
              'based on physical appearance'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Phylogenetic species concept: smallest monophyletic group. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'spec1-detail-p1',
      type: 'text' as const,
      content: `
# ### Key Details

- **Biological species concept**: can interbreed and produce fertile offspring
- **Morphological species concept**: based on physical appearance
- **Phylogenetic species concept**: smallest monophyletic group
- **Reproductive isolation prevents gene flow between species**
      `
    },
    {
      id: 'spec1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Species Concepts, which correctly describes Reproductive isolation prevents gene…?',
            options: [
              'can interbreed and produce fertile offspring',
              'based on physical appearance',
              'Reproductive isolation prevents gene flow between species',
              'smallest monophyletic group'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Reproductive isolation prevents gene flow between species. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'spec1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Biological species concept',
            options: ['based on physical appearance', 'Reproductive isolation prevents gene flow between species', 'can interbreed and produce fertile offspring', 'smallest monophyletic group']
          },
          {
            label: 'Morphological species concept',
            options: ['can interbreed and produce fertile offspring', 'Reproductive isolation prevents gene flow between species', 'smallest monophyletic group', 'based on physical appearance']
          },
          {
            label: 'Phylogenetic species concept',
            options: ['based on physical appearance', 'Reproductive isolation prevents gene flow between species', 'can interbreed and produce fertile offspring', 'smallest monophyletic group']
          }
        ],
        correctAnswers: ['can interbreed and produce fertile offspring', 'based on physical appearance', 'smallest monophyletic group'],
        hint1: 'Think about what each concept specifically describes in Species Concepts.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Species Concepts describes a specific idea. Biological species concept: can interbreed and produce fertile offspring. Morphological species concept: based on physical appearance. Phylogenetic species concept: smallest monophyletic group.'
      }
    }
  ]
}
