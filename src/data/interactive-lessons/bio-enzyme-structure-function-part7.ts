export const bioEnzymesPart7Data = {
  topicSlug: 'enzyme-structure-function',
  sections: [
    {
      id: 'enzy7-synthesis',
      type: 'text' as const,
      content: `
## Enzyme Synthesis & AP Review

### Key Enzyme Concepts for AP Biology

| Concept | Details |
|---------|--------|
| **Activation energy** | Energy barrier enzymes lower |
| **Active site** | Specific 3D pocket for substrate |
| **Induced fit** | Enzyme changes shape upon binding |
| **Saturation** | Rate levels off when all active sites are occupied |
| **Denaturation** | Temperature, pH, or chemicals disrupt shape → activity lost |
| **Competitive** | Binds active site; overcome by more substrate |
| **Noncompetitive** | Binds allosteric site; not overcome by more substrate |
| **Feedback inhibition** | End product inhibits early enzyme |
      `
    },
    {
      id: 'enzy7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Rate-versus-substrate curves are drawn for an enzyme alone and with an inhibitor. At low substrate the inhibited rate is much lower, but at very high substrate both curves reach the same rate. Which kind of inhibitor was added?',
            options: [
              'A competitive inhibitor that binds the active site',
              'A noncompetitive inhibitor that binds an allosteric site',
              'An irreversible inhibitor that denatures the enzyme',
              'An allosteric activator that speeds the reaction'
            ],
            correctAnswer: 0,
            explanation: 'Only a competitive inhibitor can be outcompeted: at very high substrate, substrate occupies nearly every active site and the inhibited rate catches up. A noncompetitive or irreversible inhibitor would keep the rate lower even at high substrate, and an activator would raise the rate.'
          }
        ]
      }
    },
    {
      id: 'enzy7-tips',
      type: 'text' as const,
      content: `
## AP Exam Tips

- Be able to **interpret enzyme kinetics graphs** (rate vs. [S] curves)
- Know how **competitive and noncompetitive inhibitors** change a rate-vs-[S] curve
- Understand **how pH and temperature** affect enzyme activity
- Connect enzyme regulation to **metabolic pathways**
- Practice **experimental design** questions about enzyme activity
      `
    },
    {
      id: 'enzy7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'An enzyme in a metabolic pathway is regulated by the pathway\'s end product. This is:',
            options: [
              'Competitive inhibition',
              'Allosteric activation',
              'Feedback inhibition',
              'Irreversible inhibition'
            ],
            correctAnswer: 2,
            explanation: 'Feedback (end-product) inhibition occurs when the final product allosterically inhibits an early enzyme in its own synthesis pathway.'
          }
        ]
      }
    },
    {
      id: 'enzy7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Enzymes ___ the ΔG of a reaction',
            options: ['increase', 'decrease', 'do not change', 'reverse']
          },
          {
            label: 'The lock-and-key model has been replaced by the ___ model',
            options: ['fluid mosaic', 'induced fit', 'competitive', 'allosteric']
          },
          {
            label: 'Ribozymes are catalytic ___ molecules',
            options: ['protein', 'RNA', 'DNA', 'lipid']
          }
        ],
        correctAnswers: ['do not change', 'induced fit', 'RNA'],
        hint1: 'Catalysts don\'t change thermodynamics.',
        hint2: 'The enzyme changes shape to fit the substrate.',
        hint3: 'These RNA molecules can catalyze reactions.',
        explanation: 'Enzymes don\'t change ΔG (thermodynamics). The induced fit model describes enzyme flexibility. Ribozymes are catalytic RNA molecules.'
      }
    }
  ]
}
