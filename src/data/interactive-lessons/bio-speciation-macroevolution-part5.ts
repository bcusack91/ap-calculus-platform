export const bioSpeciationPart5Data = {
  topicSlug: 'speciation-macroevolution',
  sections: [
    {
      id: 'spec5-intro-p5',
      type: 'text' as const,
      content: `
# ## Extinction & Phylogenetics

**Part 5 of 7 — Extinction & Phylogenetics**

1. Background extinction: normal rate of species loss
2. Mass extinction: >75% species lost (Big Five events)
3. Phylogenetic trees show evolutionary relationships
4. Cladistics: shared derived characters define groups
      `
    },
    {
      id: 'spec5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Background extinction" refer to in biology?',
            options: [
              '>75% species lost (Big Five events)',
              'Phylogenetic trees show evolutionary relationships',
              'shared derived characters define groups',
              'normal rate of species loss'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Background extinction: normal rate of species loss. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Phylogenetic trees show evolutionary…:',
            options: [
              'normal rate of species loss',
              '>75% species lost (Big Five events)',
              'shared derived characters define groups',
              'Phylogenetic trees show evolutionary relationships'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Phylogenetic trees show evolutionary relationships. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'spec5-detail-p5',
      type: 'text' as const,
      content: `
# ### Key Details

- **Background extinction**: normal rate of species loss
- **Mass extinction**: >75% species lost (Big Five events)
- **Phylogenetic trees show evolutionary relationships**
- **Cladistics**: shared derived characters define groups
      `
    },
    {
      id: 'spec5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents Cladistics?',
            options: [
              'Phylogenetic trees show evolutionary relationships',
              'shared derived characters define groups',
              'normal rate of species loss',
              '>75% species lost (Big Five events)'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Cladistics: shared derived characters define groups. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'spec5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Background extinction',
            options: ['Phylogenetic trees show evolutionary relationships', 'shared derived characters define groups', '>75% species lost (Big Five events)', 'normal rate of species loss']
          },
          {
            label: 'Mass extinction',
            options: ['Phylogenetic trees show evolutionary relationships', 'normal rate of species loss', 'shared derived characters define groups', '>75% species lost (Big Five events)']
          },
          {
            label: 'Cladistics',
            options: ['>75% species lost (Big Five events)', 'normal rate of species loss', 'shared derived characters define groups', 'Phylogenetic trees show evolutionary relationships']
          }
        ],
        correctAnswers: ['normal rate of species loss', '>75% species lost (Big Five events)', 'shared derived characters define groups'],
        hint1: 'Think about what each concept specifically describes in Extinction & Phylogenetics.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Extinction & Phylogenetics describes a specific idea. Background extinction: normal rate of species loss. Mass extinction: >75% species lost (Big Five events). Cladistics: shared derived characters define groups.'
      }
    }
  ]
}
