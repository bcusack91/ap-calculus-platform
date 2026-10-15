export const bioCellCommPart4Data = {
  topicSlug: 'cell-communication-signaling',
  sections: [
    {
      id: 'cell4-intro-p4',
      type: 'text' as const,
      content: `
## Signal Transduction Pathways

**Part 4 of 7 — Signal Transduction Pathways**

1. Phosphorylation cascades: kinases add phosphate groups
2. Second messengers: cAMP, $Ca^{2+}$, $IP_{3}$
3. Signal amplification: one signal → many responses
4. G-protein linked: α subunit activates adenylyl cyclase → cAMP
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
            question: 'Which of the following correctly describes Phosphorylation cascades?',
            options: [
              'Phosphatases add a phosphate group to each protein in turn',
              'Kinases strip a phosphate group from each protein in turn',
              'Each kinase adds a phosphate group to the next protein',
              'Second messengers add phosphate groups directly to the DNA'
            ],
            correctAnswer: 2,
            explanation: 'In a phosphorylation cascade, each protein kinase activates the next protein by adding a phosphate group (from ATP). Phosphatases remove phosphates to switch the pathway off.'
          },
          {
            question: 'Select the statement that correctly describes Signal amplification:',
            options: [
              'Each ligand activates exactly one target protein',
              'The cell copies the ligand so more of it reaches receptors',
              'One ligand can lead to many activated relay molecules',
              'Amplification adds receptors to every cell in the body'
            ],
            correctAnswer: 2,
            explanation: 'In amplification, each activated enzyme in a pathway acts on many molecules, so one ligand-receptor event can produce thousands of activated molecules and a large response.'
          }
        ]
      }
    },
    {
      id: 'cell4-detail-p4',
      type: 'text' as const,
      content: `
### Key Details

- **Phosphorylation cascades**: kinases add phosphate groups
- **Second messengers**: cAMP, $Ca^{2+}$, $IP_{3}$
- **Signal amplification**: one signal → many responses
- **G-protein linked**: α subunit activates adenylyl cyclase → cAMP
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
            question: 'Which of these accurately represents G-protein linked?',
            options: [
              'The G protein binds GDP to switch on adenylyl cyclase',
              'The activated α subunit turns on adenylyl cyclase to make cAMP',
              'The receptor itself phosphorylates tyrosines on its tails',
              'The ligand enters the cell and binds a receptor in the nucleus'
            ],
            correctAnswer: 1,
            explanation: 'In G protein-coupled signaling, the activated receptor causes the G protein\'s α subunit to exchange GDP for GTP; the α subunit then activates adenylyl cyclase, which makes the second messenger cAMP.'
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
            label: 'Phosphorylation cascades',
            options: ['α subunit activates adenylyl cyclase → cAMP', 'cAMP, $Ca^{2+}$, $IP_{3}$', 'kinases add phosphate groups', 'one signal → many responses']
          },
          {
            label: 'Second messengers',
            options: ['one signal → many responses', 'α subunit activates adenylyl cyclase → cAMP', 'cAMP, $Ca^{2+}$, $IP_{3}$', 'kinases add phosphate groups']
          },
          {
            label: 'Signal amplification',
            options: ['one signal → many responses', 'cAMP, $Ca^{2+}$, $IP_{3}$', 'kinases add phosphate groups', 'α subunit activates adenylyl cyclase → cAMP']
          }
        ],
        correctAnswers: ['kinases add phosphate groups', 'cAMP, $Ca^{2+}$, $IP_{3}$', 'one signal → many responses'],
        hint1: 'Think about what each concept specifically describes in Signal Transduction Pathways.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Signal Transduction Pathways describes a specific idea. Phosphorylation cascades: kinases add phosphate groups. Second messengers: cAMP, $Ca^{2+}$, $IP_{3}$. Signal amplification: one signal → many responses.'
      }
    }
  ]
}
