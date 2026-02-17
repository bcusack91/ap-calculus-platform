export const bioEcologyPart4Data = {
  topicSlug: 'ecology-ecosystems',
  sections: [
    {
      id: 'ecol4-intro-p4',
      type: 'text' as const,
      content: `
# ## Abiotic & Biotic Factors

**Part 4 of 7 — Abiotic & Biotic Factors**

1. Temperature, water, sunlight, soil, nutrients (abiotic)
2. Competition, predation, symbiosis (biotic)
3. Limiting factors constrain population growth
4. Tolerance range for each environmental factor
      `
    },
    {
      id: 'ecol4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Temperature, water, sunlight, soil,…" refer to in biology?',
            options: [
              'Temperature, water, sunlight, soil, nutrients (abiotic)',
              'Competition, predation, symbiosis (biotic)',
              'Limiting factors constrain population growth',
              'Tolerance range for each environmental factor'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Temperature, water, sunlight, soil, nutrients (abiotic). The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Abiotic & Biotic Factors, which explains Limiting factors constrain population…?',
            options: [
              'Tolerance range for each environmental factor',
              'Limiting factors constrain population growth',
              'Temperature, water, sunlight, soil, nutrients (abiotic)',
              'Competition, predation, symbiosis (biotic)'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Limiting factors constrain population growth. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'ecol4-detail-p4',
      type: 'text' as const,
      content: `
# ### Key Details

- **Temperature, water, sunlight, soil, nutrients (abiotic)**
- **Competition, predation, symbiosis (biotic)**
- **Limiting factors constrain population growth**
- **Tolerance range for each environmental factor**
      `
    },
    {
      id: 'ecol4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Abiotic & Biotic Factors, which correctly describes Tolerance range for each environmental…?',
            options: [
              'Competition, predation, symbiosis (biotic)',
              'Tolerance range for each environmental factor',
              'Limiting factors constrain population growth',
              'Temperature, water, sunlight, soil, nutrients (abiotic)'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Tolerance range for each environmental factor. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'ecol4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Temperature, water, sunlight, soil,…',
            options: ['Tolerance range for each environmental factor', 'Temperature, water, sunlight, soil, nutrients (abiotic)', 'Limiting factors constrain population growth', 'Competition, predation, symbiosis (biotic)']
          },
          {
            label: 'Competition, predation, symbiosis…',
            options: ['Tolerance range for each environmental factor', 'Limiting factors constrain population growth', 'Temperature, water, sunlight, soil, nutrients (abiotic)', 'Competition, predation, symbiosis (biotic)']
          },
          {
            label: 'Limiting factors constrain population…',
            options: ['Competition, predation, symbiosis (biotic)', 'Limiting factors constrain population growth', 'Temperature, water, sunlight, soil, nutrients (abiotic)', 'Tolerance range for each environmental factor']
          }
        ],
        correctAnswers: ['Temperature, water, sunlight, soil, nutrients (abiotic)', 'Competition, predation, symbiosis (biotic)', 'Limiting factors constrain population growth'],
        hint1: 'Think about what each concept specifically describes in Abiotic & Biotic Factors.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Abiotic & Biotic Factors describes a specific idea. Temperature, water, sunlight, soil, nutrients (abiotic). Competition, predation, symbiosis (biotic). Limiting factors constrain population growth.'
      }
    }
  ]
}
