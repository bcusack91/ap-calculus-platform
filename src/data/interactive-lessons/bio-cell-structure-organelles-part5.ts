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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes microfilaments (actin)?',
            options: [
              'cell movement, 7nm',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'Microfilaments (actin): cell movement, 7nm'
          },
          {
            question: 'In the context of cytoskeleton & extracellular matrix, which statement is accurate?',
            options: [
              'Microtubules (tubulin): cell division, transport, 25nm',
              'mn7 ,tnemevom llec :)nitca( stnemaliforciM',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Microtubules (tubulin): cell division, transport, 25nm'
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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to cytoskeleton & extracellular matrix?',
            options: [
              'ECM: collagen, fibronectin, proteoglycans',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'ECM: collagen, fibronectin, proteoglycans'
          }
        ]
      }
    },
    {
      id: 'cell5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Microfilaments (actin) is important in cytoskeleton & extracellular matrix because',
            options: ['cell movement, 7nm', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Intermediate filaments is important in cytoskeleton & extracellular matrix because',
            options: ['structural support', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Microtubules (tubulin) is important in cytoskeleton & extracellular matrix because',
            options: ['cell division, transport, 25nm', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['cell movement, 7nm', 'structural support', 'cell division, transport, 25nm'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Cytoskeleton & Extracellular Matrix.'
      }
    }
  ]
}
