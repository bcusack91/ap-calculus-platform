export const bioEnzymesPart5Data = {
  topicSlug: 'enzyme-structure-function',
  sections: [
    {
      id: 'enzy5-cofactors',
      type: 'text' as const,
      content: `
## Cofactors & Coenzymes

### Cofactors

**Cofactors** are non-protein molecules required for enzyme activity.

| Type | Nature | Examples |
|------|--------|----------|
| **Inorganic cofactors** | Metal ions | $Zn^{2+}$, $Fe^{2+}$, $Mg^{2+}$ |
| **Coenzymes** | Organic molecules | $NAD^{+}$, FAD |

### Coenzymes you will meet in Unit 3

| Coenzyme | Function |
|----------|----------|
| **$NAD^{+}$** | Picks up electrons (becoming NADH) in glycolysis and the Krebs cycle |
| **FAD** | Picks up electrons (becoming $FADH_2$) in the Krebs cycle |

A cofactor is a **component of the enzymatic system**. If it is missing or changed, the enzyme's function or efficiency changes, just as it would if the protein itself were altered.
      `
    },
    {
      id: 'enzy5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: '$NAD^{+}$ functions as a(n):',
            options: [
              'Enzyme that oxidizes glucose directly',
              'Substrate for ATP synthase',
              'Coenzyme that carries electrons',
              'Competitive inhibitor of glycolysis'
            ],
            correctAnswer: 2,
            explanation: '$NAD^{+}$ is a coenzyme that carries electrons (as NADH) during cellular respiration. It shuttles electrons to the electron transport chain.'
          }
        ]
      }
    },
    {
      id: 'enzy5-vitamins',
      type: 'text' as const,
      content: `
## Testing for a Cofactor: Experimental Design

Suppose you suspect that an enzyme needs $Mg^{2+}$ to work. A clean experiment changes **one** variable and measures its effect.

| Element | In this experiment |
|---|---|
| **Independent variable** | Whether $Mg^{2+}$ is added (or how much) |
| **Dependent variable** | Reaction rate (product formed per minute) |
| **Held constant** | Enzyme amount, substrate concentration, temperature, pH, total volume, time |
| **Negative control** | Substrate + $Mg^{2+}$ with **no enzyme** — shows the ion alone does not make product |
| **Comparison group** | Enzyme + substrate with no $Mg^{2+}$ |

### Worked example — interpreting the results

| Tube | Contents | Rate (μmol/min) |
|---|---|---|
| 1 | Enzyme + substrate | 0.4 |
| 2 | Enzyme + substrate + $Mg^{2+}$ | 6.0 |
| 3 | Substrate + $Mg^{2+}$, no enzyme | 0.0 |

1. **Compare tubes 1 and 2:** adding $Mg^{2+}$ raises the rate 15-fold (6.0 ÷ 0.4).
2. **Check the control:** tube 3 makes no product, so the ion is not doing the catalysis itself.
3. **Claim:** the enzyme requires $Mg^{2+}$ as a cofactor for full activity.
      `
    },
    {
      id: 'enzy5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In the cofactor experiment, why is the tube with substrate and $Mg^{2+}$ but no enzyme included?',
            options: [
              'To show that the ion alone does not produce the product',
              'To measure how quickly the enzyme denatures without the ion',
              'To provide the largest possible rate for comparison',
              'To keep the temperature of the other tubes constant'
            ],
            correctAnswer: 0,
            explanation: 'It is a negative control. If the ion by itself could convert substrate to product, the higher rate in the enzyme + ion tube might not reflect any effect on the enzyme. A rate of zero rules that out.'
          }
        ]
      }
    },
    {
      id: 'enzy5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Metal ions that assist enzymes are called ___',
            options: ['substrates', 'cofactors', 'products', 'inhibitors']
          },
          {
            label: '$NAD^{+}$ acts as a coenzyme by carrying ___',
            options: ['electrons', 'amino acids', 'oxygen gas', 'glucose']
          },
          {
            label: 'In the cofactor experiment, the presence of $Mg^{2+}$ is the ___ variable',
            options: ['independent', 'dependent', 'controlled', 'confounding']
          }
        ],
        correctAnswers: ['cofactors', 'electrons', 'independent'],
        hint1: 'These non-protein helpers are often metal ions.',
        hint2: 'It becomes NADH when it is loaded.',
        hint3: 'It is the factor the researcher deliberately changes.',
        explanation: 'Metal ion helpers are cofactors. $NAD^{+}$ carries electrons (as NADH). The researcher changes whether $Mg^{2+}$ is present, so it is the independent variable; the reaction rate is the dependent variable.'
      }
    }
  ]
}
