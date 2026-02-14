export const bioCellCompartmentPart1Data = {
  topicSlug: 'cell-compartmentalization',
  sections: [
    {
      id: 'cell1-intro-p1',
      type: 'text' as const,
      content: `
# ## Prokaryotes vs Eukaryotes

**Part 1 of 7 — Prokaryotes vs Eukaryotes**

1. Prokaryotes: no nucleus, no membrane-bound organelles
2. Eukaryotes: nucleus and compartmentalized organelles
3. Both have ribosomes, DNA, plasma membrane
4. Size difference: prokaryotes 1-10 μm, eukaryotes 10-100 μm
      `
    },
    {
      id: 'cell1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes prokaryotes?',
            options: [
              'no nucleus, no membrane-bound organelles',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'Prokaryotes: no nucleus, no membrane-bound organelles'
          },
          {
            question: 'In the context of prokaryotes vs eukaryotes, which statement is accurate?',
            options: [
              'Both have ribosomes, DNA, plasma membrane',
              'sellenagro dnuob-enarbmem on ,suelcun on :setoyrakorP',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Both have ribosomes, DNA, plasma membrane'
          }
        ]
      }
    },
    {
      id: 'cell1-detail-p1',
      type: 'text' as const,
      content: `
# ### Key Details

- **Prokaryotes**: no nucleus, no membrane-bound organelles
- **Eukaryotes**: nucleus and compartmentalized organelles
- **Both have ribosomes, DNA, plasma membrane**
- **Size difference**: prokaryotes 1-10 μm, eukaryotes 10-100 μm
      `
    },
    {
      id: 'cell1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to prokaryotes vs eukaryotes?',
            options: [
              'Size difference: prokaryotes 1-10 μm, eukaryotes 10-100 μm',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'Size difference: prokaryotes 1-10 μm, eukaryotes 10-100 μm'
          }
        ]
      }
    },
    {
      id: 'cell1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Prokaryotes is important in prokaryotes vs eukaryotes because',
            options: ['no nucleus, no membrane-bound organelles', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Eukaryotes is important in prokaryotes vs eukaryotes because',
            options: ['nucleus and compartmentalized organelles', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Both have ribosomes, DNA, plasma membrane is important in prokaryotes vs eukaryotes because',
            options: ['Both have ribosomes, DNA, plasma membrane', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['no nucleus, no membrane-bound organelles', 'nucleus and compartmentalized organelles', 'Both have ribosomes, DNA, plasma membrane'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Prokaryotes vs Eukaryotes.'
      }
    }
  ]
}
