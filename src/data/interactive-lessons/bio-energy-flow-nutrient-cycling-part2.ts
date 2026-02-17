export const bioEnergyFlowPart2Data = {
  topicSlug: 'energy-flow-nutrient-cycling',
  sections: [
    {
      id: 'ener2-intro-p2',
      type: 'text' as const,
      content: `
# ## Trophic Levels

**Part 2 of 7 — Trophic Levels**

1. Producers: trophic level 1
2. Primary consumers (herbivores): trophic level 2
3. Secondary consumers: trophic level 3
4. Tertiary consumers (top predators): trophic level 4
      `
    },
    {
      id: 'ener2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Producers" refer to in biology?',
            options: [
              'trophic level 2',
              'trophic level 3',
              'trophic level 1',
              'trophic level 4'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Producers: trophic level 1. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Trophic Levels, which explains Secondary consumers?',
            options: [
              'trophic level 4',
              'trophic level 1',
              'trophic level 2',
              'trophic level 3'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Secondary consumers: trophic level 3. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'ener2-detail-p2',
      type: 'text' as const,
      content: `
# ### Key Details

- **Producers**: trophic level 1
- **Primary consumers (herbivores)**: trophic level 2
- **Secondary consumers**: trophic level 3
- **Tertiary consumers (top predators)**: trophic level 4
      `
    },
    {
      id: 'ener2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents Tertiary consumers (top predators)?',
            options: [
              'trophic level 2',
              'trophic level 3',
              'trophic level 1',
              'trophic level 4'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Tertiary consumers (top predators): trophic level 4. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'ener2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Producers',
            options: ['trophic level 4', 'trophic level 1', 'trophic level 3', 'trophic level 2']
          },
          {
            label: 'Primary consumers (herbivores)',
            options: ['trophic level 1', 'trophic level 2', 'trophic level 4', 'trophic level 3']
          },
          {
            label: 'Secondary consumers',
            options: ['trophic level 2', 'trophic level 4', 'trophic level 3', 'trophic level 1']
          }
        ],
        correctAnswers: ['trophic level 1', 'trophic level 2', 'trophic level 3'],
        hint1: 'Think about what each concept specifically describes in Trophic Levels.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Trophic Levels describes a specific idea. Producers: trophic level 1. Primary consumers (herbivores): trophic level 2. Secondary consumers: trophic level 3.'
      }
    }
  ]
}
