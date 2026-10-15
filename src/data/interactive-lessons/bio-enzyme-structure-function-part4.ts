export const bioEnzymesPart4Data = {
  topicSlug: 'enzyme-structure-function',
  sections: [
    {
      id: 'enzy4-inhibition',
      type: 'text' as const,
      content: `
## Enzyme Inhibition

### Competitive Inhibition

- Inhibitor **resembles the substrate** and binds to the **active site**
- Competes directly with substrate for the active site
- Binds **reversibly**, so it can be overcome by **increasing substrate concentration**
- On a rate-vs-[S] graph: the inhibited curve rises more slowly but reaches the same plateau at very high [S]

### Noncompetitive Inhibition

- Inhibitor binds to an **allosteric site** (not the active site)
- Changes enzyme shape so the active site no longer fits the substrate
- **Cannot** be overcome by increasing [S]
- On a rate-vs-[S] graph: the inhibited curve levels off at a lower rate, no matter how much substrate is added

| | Competitive | Noncompetitive |
|---|---|---|
| Binding site | Active site | Allosteric site |
| Resembles substrate? | Yes | No |
| Overcome by more substrate? | Yes | No |
      `
    },
    {
      id: 'enzy4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A competitive inhibitor can be overcome by:',
            options: [
              'Lowering the temperature of the reaction mixture',
              'Increasing substrate concentration',
              'Raising the pH well above the enzyme\'s optimum',
              'Removing the enzyme\'s cofactor from the solution'
            ],
            correctAnswer: 1,
            explanation: 'Competitive inhibitors compete with substrate for the active site. Adding more substrate outcompetes the inhibitor.'
          }
        ]
      }
    },
    {
      id: 'enzy4-allosteric',
      type: 'text' as const,
      content: `
## Allosteric Regulation

### Allosteric Enzymes

Some enzymes have **allosteric sites** — binding sites separate from the active site.

| Type | Effect |
|------|--------|
| **Allosteric activator** | Stabilizes active conformation → increases activity |
| **Allosteric inhibitor** | Stabilizes inactive conformation → decreases activity |

### Feedback Inhibition

The **end product** of a metabolic pathway inhibits an **early enzyme** in the pathway.

Example: In the pathway A → B → C → D, product D inhibits the enzyme that converts A → B.

This is a form of **negative feedback** that prevents overproduction.
      `
    },
    {
      id: 'enzy4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In feedback inhibition, which enzyme is typically inhibited?',
            options: [
              'The last enzyme in the pathway',
              'The first enzyme in the pathway',
              'Every enzyme in the pathway equally',
              'An enzyme in an unrelated pathway'
            ],
            correctAnswer: 1,
            explanation: 'Feedback inhibition targets an early (often the first) enzyme in the pathway. This efficiently shuts down the entire pathway when the end product accumulates.'
          }
        ]
      }
    },
    {
      id: 'enzy4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Competitive inhibitors bind to the ___',
            options: ['allosteric site', 'active site', 'substrate', 'product']
          },
          {
            label: 'Noncompetitive inhibitors bind to the ___',
            options: ['allosteric site', 'active site', 'substrate', 'product']
          },
          {
            label: 'Feedback inhibition is a type of ___ regulation',
            options: ['positive feedback', 'negative feedback', 'feed-forward', 'constitutive']
          }
        ],
        correctAnswers: ['active site', 'allosteric site', 'negative feedback'],
        hint1: 'Competitive inhibitors mimic the substrate.',
        hint2: 'They bind somewhere other than the active site and change the enzyme\'s shape.',
        hint3: 'The end product turns off its own production.',
        explanation: 'Competitive inhibitors bind at the active site. Noncompetitive inhibitors bind an allosteric site and change the enzyme\'s shape. Feedback inhibition is negative feedback.'
      }
    }
  ]
}
