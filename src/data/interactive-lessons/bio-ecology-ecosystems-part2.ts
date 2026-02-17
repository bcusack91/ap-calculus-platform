export const bioEcologyPart2Data = {
  topicSlug: 'ecology-ecosystems',
  sections: [
    {
      id: 'ecol2-intro-p2',
      type: 'text' as const,
      content: `
# ## Biomes & Biosphere

**Part 2 of 7 — Biomes & Biosphere**

1. Terrestrial biomes: tropical rainforest, desert, tundra, etc.
2. Aquatic biomes: freshwater and marine
3. Biomes determined by temperature and precipitation
4. Climate vs weather
      `
    },
    {
      id: 'ecol2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Terrestrial biomes" refer to in biology?',
            options: [
              'freshwater and marine',
              'tropical rainforest, desert, tundra, etc.',
              'Climate vs weather',
              'Biomes determined by temperature and precipitation'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Terrestrial biomes: tropical rainforest, desert, tundra, etc. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Biomes & Biosphere, which explains Biomes determined by temperature and…?',
            options: [
              'freshwater and marine',
              'Climate vs weather',
              'tropical rainforest, desert, tundra, etc.',
              'Biomes determined by temperature and precipitation'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Biomes determined by temperature and precipitation. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'ecol2-detail-p2',
      type: 'text' as const,
      content: `
# ### Key Details

- **Terrestrial biomes**: tropical rainforest, desert, tundra, etc.
- **Aquatic biomes**: freshwater and marine
- **Biomes determined by temperature and precipitation**
- **Climate vs weather**
      `
    },
    {
      id: 'ecol2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents Climate vs weather?',
            options: [
              'tropical rainforest, desert, tundra, etc.',
              'freshwater and marine',
              'Climate vs weather',
              'Biomes determined by temperature and precipitation'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Climate vs weather. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'ecol2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Terrestrial biomes',
            options: ['Biomes determined by temperature and precipitation', 'Climate vs weather', 'tropical rainforest, desert, tundra, etc.', 'freshwater and marine']
          },
          {
            label: 'Aquatic biomes',
            options: ['freshwater and marine', 'Biomes determined by temperature and precipitation', 'tropical rainforest, desert, tundra, etc.', 'Climate vs weather']
          }
        ],
        correctAnswers: ['tropical rainforest, desert, tundra, etc.', 'freshwater and marine'],
        hint1: 'Think about what each concept specifically describes in Biomes & Biosphere.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Biomes & Biosphere describes a specific idea. Terrestrial biomes: tropical rainforest, desert, tundra, etc. Aquatic biomes: freshwater and marine.'
      }
    }
  ]
}
