export const bioMembraneTransportPart3Data = {
  topicSlug: 'membrane-transport',
  sections: [
    {
      id: 'memb3-intro-p3',
      type: 'text' as const,
      content: `
# ## Osmosis & Tonicity

**Part 3 of 7 — Osmosis & Tonicity**

1. Osmosis: water moves across semipermeable membrane
2. Hypotonic: water enters cell (lysis in animal cells)
3. Hypertonic: water leaves cell (crenation/plasmolysis)
4. Isotonic: no net water movement
      `
    },
    {
      id: 'memb3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Osmosis?',
            options: [
              'no net water movement',
              'water leaves cell (crenation/plasmolysis)',
              'water enters cell (lysis in animal cells)',
              'water moves across semipermeable membrane'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Osmosis: water moves across semipermeable membrane. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Osmosis & Tonicity, which explains Hypertonic?',
            options: [
              'water leaves cell (crenation/plasmolysis)',
              'water moves across semipermeable membrane',
              'water enters cell (lysis in animal cells)',
              'no net water movement'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Hypertonic: water leaves cell (crenation/plasmolysis). Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'memb3-detail-p3',
      type: 'text' as const,
      content: `
# ### Key Details

- **Osmosis**: water moves across semipermeable membrane
- **Hypotonic**: water enters cell (lysis in animal cells)
- **Hypertonic**: water leaves cell (crenation/plasmolysis)
- **Isotonic**: no net water movement
      `
    },
    {
      id: 'memb3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about Isotonic is correct?',
            options: [
              'water leaves cell (crenation/plasmolysis)',
              'water moves across semipermeable membrane',
              'no net water movement',
              'water enters cell (lysis in animal cells)'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Isotonic: no net water movement. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'memb3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Osmosis',
            options: ['water moves across semipermeable membrane', 'no net water movement', 'water enters cell (lysis in animal cells)', 'water leaves cell (crenation/plasmolysis)']
          },
          {
            label: 'Hypotonic',
            options: ['no net water movement', 'water moves across semipermeable membrane', 'water leaves cell (crenation/plasmolysis)', 'water enters cell (lysis in animal cells)']
          },
          {
            label: 'Hypertonic',
            options: ['water enters cell (lysis in animal cells)', 'water leaves cell (crenation/plasmolysis)', 'no net water movement', 'water moves across semipermeable membrane']
          }
        ],
        correctAnswers: ['water moves across semipermeable membrane', 'water enters cell (lysis in animal cells)', 'water leaves cell (crenation/plasmolysis)'],
        hint1: 'Think about what each concept specifically describes in Osmosis & Tonicity.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Osmosis & Tonicity describes a specific idea. Osmosis: water moves across semipermeable membrane. Hypotonic: water enters cell (lysis in animal cells). Hypertonic: water leaves cell (crenation/plasmolysis).'
      }
    }
  ]
}
