export const bioCellStructurePart5Data = {
  topicSlug: 'cell-structure-organelles',
  sections: [
    {
      id: 'cell5-intro-p5',
      type: 'text' as const,
      content: `
# ## Cytoskeleton & Extracellular Matrix

**Part 5 of 7 — Cytoskeleton & Extracellular Matrix**

1. Microfilaments (actin): cell movement, 7nm
2. Intermediate filaments: structural support
3. Microtubules (tubulin): cell division, transport, 25nm
4. ECM: collagen, fibronectin, proteoglycans
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
            question: 'Which statement accurately explains Microfilaments (actin)?',
            options: [
              'cell movement, 7nm',
              'structural support',
              'cell division, transport, 25nm',
              'collagen, fibronectin, proteoglycans'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Microfilaments (actin): cell movement, 7nm. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Cytoskeleton & Extracellular Matrix, which explains Microtubules (tubulin)?',
            options: [
              'structural support',
              'cell movement, 7nm',
              'collagen, fibronectin, proteoglycans',
              'cell division, transport, 25nm'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Microtubules (tubulin): cell division, transport, 25nm. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'cell5-detail-p5',
      type: 'text' as const,
      content: `
# ### Key Details

- **Microfilaments (actin)**: cell movement, 7nm
- **Intermediate filaments**: structural support
- **Microtubules (tubulin)**: cell division, transport, 25nm
- **ECM**: collagen, fibronectin, proteoglycans
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
            question: 'Regarding Cytoskeleton & Extracellular Matrix, which correctly describes ECM?',
            options: [
              'cell movement, 7nm',
              'collagen, fibronectin, proteoglycans',
              'structural support',
              'cell division, transport, 25nm'
            ],
            correctAnswer: 1,
            explanation: 'Correct — ECM: collagen, fibronectin, proteoglycans. Each option describes a real concept from this topic, so pay attention to the specific details.'
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
            label: 'Microfilaments (actin)',
            options: ['cell division, transport, 25nm', 'cell movement, 7nm', 'structural support', 'collagen, fibronectin, proteoglycans']
          },
          {
            label: 'Intermediate filaments',
            options: ['collagen, fibronectin, proteoglycans', 'cell division, transport, 25nm', 'structural support', 'cell movement, 7nm']
          },
          {
            label: 'Microtubules (tubulin)',
            options: ['cell division, transport, 25nm', 'structural support', 'collagen, fibronectin, proteoglycans', 'cell movement, 7nm']
          }
        ],
        correctAnswers: ['cell movement, 7nm', 'structural support', 'cell division, transport, 25nm'],
        hint1: 'Think about what each concept specifically describes in Cytoskeleton & Extracellular Matrix.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Cytoskeleton & Extracellular Matrix describes a specific idea. Microfilaments (actin): cell movement, 7nm. Intermediate filaments: structural support. Microtubules (tubulin): cell division, transport, 25nm.'
      }
    }
  ]
}
