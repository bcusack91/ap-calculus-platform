export const bioCellCompartmentPart4Data = {
  topicSlug: 'cell-compartmentalization',
  sections: [
    {
      id: 'cell4-intro-p4',
      type: 'text' as const,
      content: `
# ## Cell Size Constraints

**Part 4 of 7 — Cell Size Constraints**

1. Diffusion limits how large cells can be
2. Need adequate surface area for nutrient/waste exchange
3. DNA must be able to control entire cell volume
4. Exceptions: neurons, muscle fibers (multinucleated)
      `
    },
    {
      id: 'cell4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Diffusion limits how large cells can be" refer to in biology?',
            options: [
              'DNA must be able to control entire cell volume',
              'Need adequate surface area for nutrient/waste exchange',
              'neurons, muscle fibers (multinucleated)',
              'Diffusion limits how large cells can be'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Diffusion limits how large cells can be. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about DNA must be able to control entire cell…?',
            options: [
              'DNA must be able to control entire cell volume',
              'Diffusion limits how large cells can be',
              'Need adequate surface area for nutrient/waste exchange',
              'neurons, muscle fibers (multinucleated)'
            ],
            correctAnswer: 0,
            explanation: 'Correct — DNA must be able to control entire cell volume. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'cell4-detail-p4',
      type: 'text' as const,
      content: `
# ### Key Details

- **Diffusion limits how large cells can be**
- **Need adequate surface area for nutrient/waste exchange**
- **DNA must be able to control entire cell volume**
- **Exceptions**: neurons, muscle fibers (multinucleated)
      `
    },
    {
      id: 'cell4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Cell Size Constraints, which correctly describes Exceptions?',
            options: [
              'neurons, muscle fibers (multinucleated)',
              'Diffusion limits how large cells can be',
              'DNA must be able to control entire cell volume',
              'Need adequate surface area for nutrient/waste exchange'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Exceptions: neurons, muscle fibers (multinucleated). Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'cell4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Diffusion limits how large cells can be',
            options: ['Need adequate surface area for nutrient/waste exchange', 'neurons, muscle fibers (multinucleated)', 'Diffusion limits how large cells can be', 'DNA must be able to control entire cell volume']
          },
          {
            label: 'Need adequate surface area for…',
            options: ['DNA must be able to control entire cell volume', 'Diffusion limits how large cells can be', 'neurons, muscle fibers (multinucleated)', 'Need adequate surface area for nutrient/waste exchange']
          },
          {
            label: 'DNA must be able to control entire cell…',
            options: ['neurons, muscle fibers (multinucleated)', 'Diffusion limits how large cells can be', 'DNA must be able to control entire cell volume', 'Need adequate surface area for nutrient/waste exchange']
          }
        ],
        correctAnswers: ['Diffusion limits how large cells can be', 'Need adequate surface area for nutrient/waste exchange', 'DNA must be able to control entire cell volume'],
        hint1: 'Think about what each concept specifically describes in Cell Size Constraints.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Cell Size Constraints describes a specific idea. Diffusion limits how large cells can be. Need adequate surface area for nutrient/waste exchange. DNA must be able to control entire cell volume.'
      }
    }
  ]
}
