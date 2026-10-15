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
              'They bind steroids, thyroid hormone, and other lipid-soluble signals',
              'They work without changing shape when ligands bind the receptor',
              'They are found in every cell type in equal numbers',
              'They include G protein-coupled receptors, RTKs, and ion channels'
            ],
            correctAnswer: 3,
            explanation: 'Membrane receptors bind hydrophilic ligands at the cell surface; major classes are G protein-coupled receptors, receptor tyrosine kinases (RTKs), and ligand-gated ion channels. Lipid-soluble signals such as steroids cross the membrane and bind intracellular receptors.'
          },
          {
            question: 'Select the statement that correctly describes Ligand binding causes conformational…:',
            options: [
              'Ligand binding permanently inactivates the receptor protein it binds',
              'Ligand binding changes the receptor\'s shape, starting transduction',
              'Ligand binding carries the ligand into the nucleus every time',
              'Ligand binding adds a phosphate group to the ligand itself'
            ],
            correctAnswer: 1,
            explanation: 'When a ligand binds, the receptor changes conformation (shape). That shape change activates the receptor and starts the transduction pathway inside the cell.'
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
              'Cells respond only if they carry the matching receptor',
              'Cells respond to any ligand reaching their surface receptors',
              'Cells respond only if the ligand enters their nucleus',
              'Cells respond only to signals they produced themselves'
            ],
            correctAnswer: 0,
            explanation: 'Receptor specificity determines which cells respond: a ligand affects only cells that express a receptor whose binding site fits it.'
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
