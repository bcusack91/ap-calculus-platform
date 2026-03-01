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
| **$V_{max}$** | Max rate when saturated |
| **$K_m$** | Substrate concentration at ½ $V_{max}$ |
| **Competitive** | Binds active site, ↑ $K_m$ |
| **Noncompetitive** | Binds allosteric site, ↓ $V_{max}$ |
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
            question: 'Which graph shows the effect of a competitive inhibitor?',
            options: [
              'Higher $V_{max}$, same $K_m$',
              'Same $V_{max}$, higher apparent $K_m$',
              'Lower $V_{max}$, same $K_m$',
              'Lower $V_{max}$, lower $K_m$'
            ],
            correctAnswer: 1,
            explanation: 'Competitive inhibitors increase the apparent $K_m$ (more substrate needed) but don\'t change $V_{max}$ (at high enough [S], the inhibitor is outcompeted).'
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
- Know how **inhibitor types** affect $K_m$ and $V_{max}$
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
