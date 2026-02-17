export const bioSpeciationPart4Data = {
  topicSlug: 'speciation-macroevolution',
  sections: [
    {
      id: 'spec4-intro-p4',
      type: 'text' as const,
      content: `
# ## Adaptive Radiation

**Part 4 of 7 — Adaptive Radiation**

1. One ancestor diversifies into many species
2. Occurs when new niches become available
3. Examples: Darwin's finches, Hawaiian honeycreepers
4. Triggered by mass extinctions or new environments
      `
    },
    {
      id: 'spec4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "One ancestor diversifies into many…" refer to in biology?',
            options: [
              'Darwin\'s finches, Hawaiian honeycreepers',
              'Triggered by mass extinctions or new environments',
              'One ancestor diversifies into many species',
              'Occurs when new niches become available'
            ],
            correctAnswer: 2,
            explanation: 'Correct — One ancestor diversifies into many species. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Examples:',
            options: [
              'Triggered by mass extinctions or new environments',
              'One ancestor diversifies into many species',
              'Occurs when new niches become available',
              'Darwin\'s finches, Hawaiian honeycreepers'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Examples: Darwin\'s finches, Hawaiian honeycreepers. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'spec4-detail-p4',
      type: 'text' as const,
      content: `
# ### Key Details

- **One ancestor diversifies into many species**
- **Occurs when new niches become available**
- **Examples**: Darwin's finches, Hawaiian honeycreepers
- **Triggered by mass extinctions or new environments**
      `
    },
    {
      id: 'spec4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Adaptive Radiation, which correctly describes Triggered by mass extinctions or new…?',
            options: [
              'One ancestor diversifies into many species',
              'Occurs when new niches become available',
              'Darwin\'s finches, Hawaiian honeycreepers',
              'Triggered by mass extinctions or new environments'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Triggered by mass extinctions or new environments. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'spec4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'One ancestor diversifies into many…',
            options: ['Occurs when new niches become available', 'Triggered by mass extinctions or new environments', 'One ancestor diversifies into many species', 'Darwin\'s finches, Hawaiian honeycreepers']
          },
          {
            label: 'Occurs when new niches become available',
            options: ['Occurs when new niches become available', 'Darwin\'s finches, Hawaiian honeycreepers', 'One ancestor diversifies into many species', 'Triggered by mass extinctions or new environments']
          },
          {
            label: 'Examples',
            options: ['Triggered by mass extinctions or new environments', 'Darwin\'s finches, Hawaiian honeycreepers', 'One ancestor diversifies into many species', 'Occurs when new niches become available']
          }
        ],
        correctAnswers: ['One ancestor diversifies into many species', 'Occurs when new niches become available', 'Darwin\'s finches, Hawaiian honeycreepers'],
        hint1: 'Think about what each concept specifically describes in Adaptive Radiation.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Adaptive Radiation describes a specific idea. One ancestor diversifies into many species. Occurs when new niches become available. Examples: Darwin\'s finches, Hawaiian honeycreepers.'
      }
    }
  ]
}
