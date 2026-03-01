export const bioCellCommPart3Data = {
  topicSlug: 'cell-communication-signaling',
  sections: [
    {
      id: 'cell3-intro-p3',
      type: 'text' as const,
      content: `
## Signal Reception

**Part 3 of 7 — Signal Reception**

1. Membrane receptors: G-protein coupled, receptor tyrosine kinases, ion channels
2. Intracellular receptors: for lipid-soluble signals (steroids)
3. Ligand binding causes conformational change
4. Receptor specificity determines which cells respond
      `
    },
    {
      id: 'cell3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Membrane receptors?',
            options: [
              'for lipid-soluble signals (steroids)',
              'Ligand binding causes conformational change',
              'Receptor specificity determines which cells respond',
              'G-protein coupled, receptor tyrosine kinases, ion channels'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Membrane receptors: G-protein coupled, receptor tyrosine kinases, ion channels. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Ligand binding causes conformational…:',
            options: [
              'G-protein coupled, receptor tyrosine kinases, ion channels',
              'Ligand binding causes conformational change',
              'for lipid-soluble signals (steroids)',
              'Receptor specificity determines which cells respond'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Ligand binding causes conformational change. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'cell3-detail-p3',
      type: 'text' as const,
      content: `
### Key Details

- **Membrane receptors**: G-protein coupled, receptor tyrosine kinases, ion channels
- **Intracellular receptors**: for lipid-soluble signals (steroids)
- **Ligand binding causes conformational change**
- **Receptor specificity determines which cells respond**
      `
    },
    {
      id: 'cell3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about Receptor specificity determines which… is correct?',
            options: [
              'Receptor specificity determines which cells respond',
              'G-protein coupled, receptor tyrosine kinases, ion channels',
              'Ligand binding causes conformational change',
              'for lipid-soluble signals (steroids)'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Receptor specificity determines which cells respond. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'cell3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Membrane receptors',
            options: ['Receptor specificity determines which cells respond', 'G-protein coupled, receptor tyrosine kinases, ion channels', 'Ligand binding causes conformational change', 'for lipid-soluble signals (steroids)']
          },
          {
            label: 'Intracellular receptors',
            options: ['G-protein coupled, receptor tyrosine kinases, ion channels', 'Receptor specificity determines which cells respond', 'Ligand binding causes conformational change', 'for lipid-soluble signals (steroids)']
          }
        ],
        correctAnswers: ['G-protein coupled, receptor tyrosine kinases, ion channels', 'for lipid-soluble signals (steroids)'],
        hint1: 'Think about what each concept specifically describes in Signal Reception.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Signal Reception describes a specific idea. Membrane receptors: G-protein coupled, receptor tyrosine kinases, ion channels. Intracellular receptors: for lipid-soluble signals (steroids).'
      }
    }
  ]
}
