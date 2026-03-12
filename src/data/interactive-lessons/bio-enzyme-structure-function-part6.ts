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
3. **Distinguish inhibition types** by their effects on $K_m$ and $V_{max}$
4. **Connect to biological context** (what pathway? what regulation?)

### Common Mistakes to Avoid

- Enzymes do NOT provide energy for reactions
- Competitive inhibition does NOT change $V_{max}$
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
            question: 'An enzyme has $K_m$ = 5 mM. What does this tell you?',
            options: [
              'The enzyme denatures at 5 mM substrate',
              'Half of $V_{max}$ is reached at 5 mM substrate',
              'The enzyme has 5 active sites',
              'The reaction rate is 5 mM/s'
            ],
            correctAnswer: 1,
            explanation: '$K_m$ is the substrate concentration at which the reaction rate is half of $V_{max}$. A $K_m$ of 5 mM means half-maximal velocity occurs at 5 mM substrate.'
          },
          {
            question: 'Adding a noncompetitive inhibitor to an enzyme:',
            options: [
              'Increases $V_{max}$',
              'Decreases $V_{max}$ without changing $K_m$',
              'Increases $K_m$ without changing $V_{max}$',
              'Has no effect on kinetics'
            ],
            correctAnswer: 1,
            explanation: 'Noncompetitive inhibitors bind allosterically and reduce $V_{max}$ (fewer functional enzyme molecules) without affecting $K_m$ (substrate binding affinity is unchanged).'
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

**Answer:** At low [S], increasing substrate increases the rate because more enzyme-substrate complexes form. At high [S], all active sites are occupied (saturation), so the rate plateaus at $V_{max}$.
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
            question: 'Mercury ions (Hg²⁺) permanently inactivate enzymes by disrupting disulfide bonds. This is an example of:',
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
            options: ['competitive', 'noncompetitive', 'uncompetitive', 'allosteric activator']
          },
          {
            label: 'At saturation, adding more substrate ___ the rate',
            options: ['increases', 'decreases', 'does not change', 'doubles']
          },
          {
            label: 'Cyanide inhibits cytochrome c oxidase irreversibly. This type of inhibition ___ be overcome by adding more substrate',
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
