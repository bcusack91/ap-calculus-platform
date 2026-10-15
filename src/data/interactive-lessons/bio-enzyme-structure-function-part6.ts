export const bioEnzymesPart6Data = {
  topicSlug: 'enzyme-structure-function',
  sections: [
    {
      id: 'enzy6-workshop',
      type: 'text' as const,
      content: `
## Enzyme Problem-Solving Workshop

### AP Exam Strategy for Enzyme Questions

1. **Identify the enzyme property** being tested
2. **Draw or visualize** the energy diagram if relevant
3. **Distinguish inhibition types** by where the inhibitor binds and whether extra substrate overcomes it
4. **Connect to biological context** (what pathway? what regulation?)

### Common Mistakes to Avoid

- Enzymes do NOT provide energy for reactions
- Competitive inhibition CAN be overcome by adding more substrate; noncompetitive inhibition cannot
- Denaturation ≠ competitive inhibition
- Enzymes are NOT consumed in reactions
      `
    },
    {
      id: 'enzy6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Enzyme activity is measured at 20°C, 30°C, 40°C, and 50°C. The rate rises from 20°C to 40°C and then drops sharply at 50°C. What best explains the drop?',
            options: [
              'Substrate molecules stop moving at high temperature',
              'Heat disrupts the protein\'s shape, so the active site no longer fits',
              'A second active site forms at high temperature',
              'The reaction reaches equilibrium faster at 50°C'
            ],
            correctAnswer: 1,
            explanation: 'Up to the optimum, higher temperature means faster molecules and more collisions. Above it, the hydrogen bonds holding the enzyme\'s shape break, the active site changes, and the rate falls. Molecules move faster, not slower, as temperature rises.'
          },
          {
            question: 'A noncompetitive inhibitor is added to an enzyme reaction. The researcher then adds a large excess of substrate. What is the most likely result?',
            options: [
              'The rate stays low, because substrate cannot displace the inhibitor',
              'The rate returns to normal, because substrate outcompetes the inhibitor',
              'The rate rises above normal, because the inhibitor now activates the enzyme',
              'The rate falls to zero, because extra substrate denatures the enzyme'
            ],
            correctAnswer: 0,
            explanation: 'A noncompetitive inhibitor binds an allosteric site, not the active site, so adding substrate does not push it off. The enzyme stays altered and the rate stays below the uninhibited rate. Only a competitive inhibitor can be outcompeted by extra substrate.'
          }
        ]
      }
    },
    {
      id: 'enzy6-practice',
      type: 'text' as const,
      content: `
## Practice Scenarios

### Scenario 1
A pharmaceutical company designs a drug that has a similar shape to the substrate of a disease-causing enzyme. Predict how this drug works.

**Answer:** The drug acts as a competitive inhibitor — it binds to the active site and blocks the natural substrate.

### Scenario 2
A student adds increasing amounts of substrate to an enzyme-catalyzed reaction. The rate increases and then plateaus. Explain.

**Answer:** At low [S], increasing substrate increases the rate because more enzyme-substrate complexes form. At high [S], all active sites are occupied (saturation), so the rate plateaus.
      `
    },
    {
      id: 'enzy6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Mercury ions $(Hg^{2+})$ permanently inactivate enzymes by disrupting disulfide bonds. This is an example of:',
            options: [
              'Competitive inhibition',
              'Noncompetitive inhibition',
              'Irreversible inhibition',
              'Feedback inhibition'
            ],
            correctAnswer: 2,
            explanation: 'Mercury permanently alters the enzyme structure by breaking disulfide bonds. This is irreversible inhibition — the enzyme cannot recover.'
          }
        ]
      }
    },
    {
      id: 'enzy6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A drug shaped like the substrate is likely a ___ inhibitor',
            options: ['competitive', 'noncompetitive', 'irreversible', 'allosteric activator']
          },
          {
            label: 'At saturation, adding more substrate ___ the rate',
            options: ['increases', 'decreases', 'does not change', 'doubles']
          },
          {
            label: 'An irreversible inhibitor permanently alters the enzyme. This type of inhibition ___ be overcome by adding more substrate',
            options: ['can', 'cannot', 'sometimes can', 'always can']
          }
        ],
        correctAnswers: ['competitive', 'does not change', 'cannot'],
        hint1: 'Shaped like the substrate → competes for the active site.',
        hint2: 'All active sites are already filled.',
        hint3: 'Irreversible = permanent damage to enzyme.',
        explanation: 'Substrate-shaped drugs are competitive inhibitors. At saturation, more substrate doesn\'t help. Irreversible inhibition cannot be overcome.'
      }
    }
  ]
}
