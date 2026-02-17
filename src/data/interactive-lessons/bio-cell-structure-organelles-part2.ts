export const bioCellStructurePart2Data = {
  topicSlug: 'cell-structure-organelles',
  sections: [
    {
      id: 'cell2-intro-p2',
      type: 'text' as const,
      content: `
# ## Membrane-Bound Organelles

**Part 2 of 7 — Membrane-Bound Organelles**

1. Nucleus: contains DNA, double membrane
2. Endoplasmic reticulum: rough (ribosomes) and smooth
3. Golgi apparatus: modifies, sorts, ships proteins
4. Lysosomes: digestive enzymes, pH ~5
      `
    },
    {
      id: 'cell2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Nucleus?',
            options: [
              'rough (ribosomes) and smooth',
              'contains DNA, double membrane',
              'digestive enzymes, pH ~5',
              'modifies, sorts, ships proteins'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Nucleus: contains DNA, double membrane. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Membrane-Bound Organelles, which explains Golgi apparatus?',
            options: [
              'rough (ribosomes) and smooth',
              'digestive enzymes, pH ~5',
              'modifies, sorts, ships proteins',
              'contains DNA, double membrane'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Golgi apparatus: modifies, sorts, ships proteins. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'cell2-detail-p2',
      type: 'text' as const,
      content: `
# ### Key Details

- **Nucleus**: contains DNA, double membrane
- **Endoplasmic reticulum**: rough (ribosomes) and smooth
- **Golgi apparatus**: modifies, sorts, ships proteins
- **Lysosomes**: digestive enzymes, pH ~5
      `
    },
    {
      id: 'cell2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Membrane-Bound Organelles, which correctly describes Lysosomes?',
            options: [
              'modifies, sorts, ships proteins',
              'rough (ribosomes) and smooth',
              'digestive enzymes, pH ~5',
              'contains DNA, double membrane'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Lysosomes: digestive enzymes, pH ~5. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'cell2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Nucleus',
            options: ['contains DNA, double membrane', 'modifies, sorts, ships proteins', 'rough (ribosomes) and smooth', 'digestive enzymes, pH ~5']
          },
          {
            label: 'Endoplasmic reticulum',
            options: ['rough (ribosomes) and smooth', 'modifies, sorts, ships proteins', 'digestive enzymes, pH ~5', 'contains DNA, double membrane']
          },
          {
            label: 'Golgi apparatus',
            options: ['modifies, sorts, ships proteins', 'digestive enzymes, pH ~5', 'rough (ribosomes) and smooth', 'contains DNA, double membrane']
          }
        ],
        correctAnswers: ['contains DNA, double membrane', 'rough (ribosomes) and smooth', 'modifies, sorts, ships proteins'],
        hint1: 'Think about what each concept specifically describes in Membrane-Bound Organelles.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Membrane-Bound Organelles describes a specific idea. Nucleus: contains DNA, double membrane. Endoplasmic reticulum: rough (ribosomes) and smooth. Golgi apparatus: modifies, sorts, ships proteins.'
      }
    }
  ]
}
