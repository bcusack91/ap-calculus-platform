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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes osmosis?',
            options: [
              'water moves across semipermeable membrane',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'Osmosis: water moves across semipermeable membrane'
          },
          {
            question: 'In the context of osmosis & tonicity, which statement is accurate?',
            options: [
              'Hypertonic: water leaves cell (crenation/plasmolysis)',
              'enarbmem elbaemrepimes ssorca sevom retaw :sisomsO',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Hypertonic: water leaves cell (crenation/plasmolysis)'
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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to osmosis & tonicity?',
            options: [
              'Isotonic: no net water movement',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'Isotonic: no net water movement'
          }
        ]
      }
    },
    {
      id: 'memb3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Osmosis is important in osmosis & tonicity because',
            options: ['water moves across semipermeable membrane', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Hypotonic is important in osmosis & tonicity because',
            options: ['water enters cell (lysis in animal cells)', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Hypertonic is important in osmosis & tonicity because',
            options: ['water leaves cell (crenation/plasmolysis)', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['water moves across semipermeable membrane', 'water enters cell (lysis in animal cells)', 'water leaves cell (crenation/plasmolysis)'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Osmosis & Tonicity.'
      }
    }
  ]
}
