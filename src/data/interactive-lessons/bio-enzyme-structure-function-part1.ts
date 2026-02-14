export const bioEnzymesPart1Data = {
  topicSlug: 'enzyme-structure-function',
  sections: [
    {
      id: 'enzy1-intro',
      type: 'text' as const,
      content: `
# ⚡ Introduction to Enzymes

Enzymes are **biological catalysts** — proteins that speed up chemical reactions without being consumed. They are essential for life because most biological reactions would occur too slowly without them.

### Key Concepts

- Enzymes lower the **activation energy** ($E_a$) of reactions
- They do NOT change the equilibrium or ΔG of a reaction
- They are highly **specific** — each enzyme catalyzes one type of reaction
- Most enzymes are proteins (some RNA molecules are catalytic — ribozymes)

### How Enzymes Work

The **induced fit model** explains enzyme action:
1. Substrate binds to the enzyme's **active site**
2. The enzyme changes shape to fit the substrate more tightly
3. The reaction occurs (bonds are stressed, broken, or formed)
4. Products are released
5. The enzyme is **unchanged** and can be reused
      `
    },
    {
      id: 'enzy1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Enzymes speed up reactions by:',
            options: [
              'Increasing the temperature',
              'Lowering the activation energy',
              'Changing the equilibrium',
              'Increasing ΔG'
            ],
            correctAnswer: 1,
            explanation: 'Enzymes lower the activation energy barrier, allowing more molecules to react at a given temperature. They don\'t change the equilibrium or ΔG.'
          }
        ]
      }
    },
    {
      id: 'enzy1-energy',
      type: 'text' as const,
      content: `
# ## Activation Energy

Every chemical reaction requires an initial input of energy — the **activation energy** ($E_a$).

| Without Enzyme | With Enzyme |
|---------------|-------------|
| High $E_a$ | Lower $E_a$ |
| Slow reaction rate | Fast reaction rate |
| Same ΔG | Same ΔG |
| Same equilibrium | Same equilibrium |

Enzymes can speed up reactions by factors of **$10^6$ to $10^{12}$**!
      `
    },
    {
      id: 'enzy1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The induced fit model states that:',
            options: [
              'The substrate changes shape to fit the enzyme',
              'The enzyme changes shape when the substrate binds',
              'Lock and key is always correct',
              'Enzymes are consumed in reactions'
            ],
            correctAnswer: 1,
            explanation: 'In the induced fit model, the enzyme\'s active site changes conformation when the substrate binds, creating a tighter fit.'
          }
        ]
      }
    },
    {
      id: 'enzy1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Enzymes are typically made of ___',
            options: ['carbohydrates', 'lipids', 'proteins', 'nucleic acids']
          },
          {
            label: 'The region where substrate binds is the ___',
            options: ['allosteric site', 'active site', 'regulatory site', 'binding domain']
          },
          {
            label: 'Enzymes ___ activation energy',
            options: ['increase', 'lower', 'eliminate', 'don\'t affect']
          }
        ],
        correctAnswers: ['proteins', 'active site', 'lower'],
        hint1: 'Most enzymes are proteins (some are RNA).',
        hint2: 'This is the specific 3D pocket where catalysis occurs.',
        hint3: 'Enzymes make reactions easier but don\'t eliminate the energy requirement entirely.',
        explanation: 'Enzymes are proteins. Substrates bind at the active site. Enzymes lower (but don\'t eliminate) activation energy.'
      }
    }
  ]
}
