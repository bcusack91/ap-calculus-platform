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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Prokaryotes" refer to in biology?',
            options: [
              'prokaryotes 1-10 μm, eukaryotes 10-100 μm',
              'nucleus and compartmentalized organelles',
              'no nucleus, no membrane-bound organelles',
              'Both have ribosomes, DNA, plasma membrane'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Prokaryotes: no nucleus, no membrane-bound organelles. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Prokaryotes vs Eukaryotes, which explains Both have ribosomes, DNA, plasma…?',
            options: [
              'prokaryotes 1-10 μm, eukaryotes 10-100 μm',
              'no nucleus, no membrane-bound organelles',
              'Both have ribosomes, DNA, plasma membrane',
              'nucleus and compartmentalized organelles'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Both have ribosomes, DNA, plasma membrane. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Prokaryotes vs Eukaryotes, which correctly describes Size difference?',
            options: [
              'prokaryotes 1-10 μm, eukaryotes 10-100 μm',
              'Both have ribosomes, DNA, plasma membrane',
              'nucleus and compartmentalized organelles',
              'no nucleus, no membrane-bound organelles'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Size difference: prokaryotes 1-10 μm, eukaryotes 10-100 μm. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'cell1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Prokaryotes',
            options: ['nucleus and compartmentalized organelles', 'no nucleus, no membrane-bound organelles', 'prokaryotes 1-10 μm, eukaryotes 10-100 μm', 'Both have ribosomes, DNA, plasma membrane']
          },
          {
            label: 'Eukaryotes',
            options: ['no nucleus, no membrane-bound organelles', 'nucleus and compartmentalized organelles', 'prokaryotes 1-10 μm, eukaryotes 10-100 μm', 'Both have ribosomes, DNA, plasma membrane']
          },
          {
            label: 'Size difference',
            options: ['nucleus and compartmentalized organelles', 'Both have ribosomes, DNA, plasma membrane', 'prokaryotes 1-10 μm, eukaryotes 10-100 μm', 'no nucleus, no membrane-bound organelles']
          }
        ],
        correctAnswers: ['no nucleus, no membrane-bound organelles', 'nucleus and compartmentalized organelles', 'prokaryotes 1-10 μm, eukaryotes 10-100 μm'],
        hint1: 'Think about what each concept specifically describes in Prokaryotes vs Eukaryotes.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Prokaryotes vs Eukaryotes describes a specific idea. Prokaryotes: no nucleus, no membrane-bound organelles. Eukaryotes: nucleus and compartmentalized organelles. Size difference: prokaryotes 1-10 μm, eukaryotes 10-100 μm.'
      }
    }
  ]
}
