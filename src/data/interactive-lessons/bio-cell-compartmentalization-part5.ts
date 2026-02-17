export const bioCellCompartmentPart5Data = {
  topicSlug: 'cell-compartmentalization',
  sections: [
    {
      id: 'cell5-intro-p5',
      type: 'text' as const,
      content: `
# ## Organelle Interactions

**Part 5 of 7 — Organelle Interactions**

1. Endomembrane system connects organelles
2. Mitochondria interact with ER
3. Vesicle trafficking between compartments
4. Metabolic pathways span multiple organelles
      `
    },
    {
      id: 'cell5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Endomembrane system connects organelles?',
            options: [
              'Mitochondria interact with ER',
              'Endomembrane system connects organelles',
              'Metabolic pathways span multiple organelles',
              'Vesicle trafficking between compartments'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Endomembrane system connects organelles. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Vesicle trafficking between compartments?',
            options: [
              'Vesicle trafficking between compartments',
              'Mitochondria interact with ER',
              'Endomembrane system connects organelles',
              'Metabolic pathways span multiple organelles'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Vesicle trafficking between compartments. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'cell5-detail-p5',
      type: 'text' as const,
      content: `
# ### Key Details

- **Endomembrane system connects organelles**
- **Mitochondria interact with ER**
- **Vesicle trafficking between compartments**
- **Metabolic pathways span multiple organelles**
      `
    },
    {
      id: 'cell5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about Metabolic pathways span multiple… is correct?',
            options: [
              'Metabolic pathways span multiple organelles',
              'Mitochondria interact with ER',
              'Vesicle trafficking between compartments',
              'Endomembrane system connects organelles'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Metabolic pathways span multiple organelles. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'cell5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Endomembrane system connects organelles',
            options: ['Mitochondria interact with ER', 'Endomembrane system connects organelles', 'Metabolic pathways span multiple organelles', 'Vesicle trafficking between compartments']
          },
          {
            label: 'Mitochondria interact with ER',
            options: ['Mitochondria interact with ER', 'Metabolic pathways span multiple organelles', 'Endomembrane system connects organelles', 'Vesicle trafficking between compartments']
          },
          {
            label: 'Vesicle trafficking between compartments',
            options: ['Vesicle trafficking between compartments', 'Endomembrane system connects organelles', 'Metabolic pathways span multiple organelles', 'Mitochondria interact with ER']
          }
        ],
        correctAnswers: ['Endomembrane system connects organelles', 'Mitochondria interact with ER', 'Vesicle trafficking between compartments'],
        hint1: 'Think about what each concept specifically describes in Organelle Interactions.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Organelle Interactions describes a specific idea. Endomembrane system connects organelles. Mitochondria interact with ER. Vesicle trafficking between compartments.'
      }
    }
  ]
}
