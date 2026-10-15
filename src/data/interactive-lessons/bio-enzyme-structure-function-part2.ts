export const bioEnzymesPart2Data = {
  topicSlug: 'enzyme-structure-function',
  sections: [
    {
      id: 'enzy2-kinetics',
      type: 'text' as const,
      content: `
## Enzyme Kinetics

### Reaction Rate

The **rate** of an enzyme-catalyzed reaction is how fast product appears (or substrate disappears):

$$\\text{rate} = \\frac{\\text{change in amount of product}}{\\text{change in time}}$$

In a typical experiment you measure product at several times and plot product against time. The **initial rate** is the slope at the start, before substrate has been used up.

### How Rate Responds to Substrate

1. At low substrate concentration, the rate **rises** as substrate is added — more substrate means more enzyme-substrate collisions.
2. The rise slows and the rate **levels off** (plateaus).
3. At the plateau, every active site is occupied; the enzyme is **saturated**, and adding more substrate cannot speed the reaction.

| Region of the rate-vs-[S] graph | What is happening |
|------|------------|
| Steep rise | Many active sites are free; more substrate fills them |
| Curve bending over | Most active sites are already occupied |
| Plateau | All active sites are occupied (saturation) |

> Formal kinetic constants used in college biochemistry are not tested on the AP exam. You need to explain the shape of the curve and calculate rates from data.
      `
    },
    {
      id: 'enzy2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In an enzyme assay, the amount of product rises from 0 to 12 μmol during the first 4 minutes. What is the initial reaction rate?',
            options: [
              '3 μmol/min',
              '12 μmol/min',
              '48 μmol/min',
              '0.33 μmol/min'
            ],
            correctAnswer: 0,
            explanation: 'Rate = change in product ÷ change in time = 12 μmol ÷ 4 min = 3 μmol/min. Multiplying (48) or dividing time by product (0.33) gives the wrong quantity, and 12 is the total amount, not a rate.'
          }
        ]
      }
    },
    {
      id: 'enzy2-factors',
      type: 'text' as const,
      content: `
## Substrate and Product Concentration Effects

The relative amounts of substrate and product determine how efficiently an enzymatic reaction proceeds.

- **Low [substrate]:** the rate depends strongly on how much substrate is present.
- **High [substrate]:** the rate levels off because the enzyme is **saturated**. The only way to go faster is to add more enzyme (more active sites).
- **Over time in a closed tube:** substrate is used up and product accumulates, so the rate slows. A product-vs-time curve therefore starts steep and flattens out even though the enzyme is still active.

### Worked example — reading a product curve

| Time (min) | Product (μmol) |
|---|---|
| 0 | 0 |
| 2 | 8 |
| 4 | 14 |
| 6 | 17 |
| 8 | 18 |

1. **Rate from 0 to 2 min:** 8 ÷ 2 = **4 μmol/min**.
2. **Rate from 6 to 8 min:** (18 − 17) ÷ 2 = **0.5 μmol/min**.
3. **Explanation:** the rate falls because substrate is running out, not because the enzyme was destroyed. Adding fresh substrate at 8 minutes would speed the reaction up again.
      `
    },
    {
      id: 'enzy2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A student keeps adding substrate to an enzyme reaction, but past a certain point the rate stops increasing. What is the best explanation?',
            options: [
              'The active sites are already full',
              'The extra substrate denatured the enzyme',
              'The reaction ran out of activation energy',
              'The substrate began acting as an inhibitor'
            ],
            correctAnswer: 0,
            explanation: 'When every active site is occupied, the enzyme is saturated and extra substrate has nowhere to bind, so the rate levels off. Substrate does not denature the enzyme, and activation energy is a barrier, not a supply that runs out.'
          }
        ]
      }
    },
    {
      id: 'enzy2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'When the rate levels off at high substrate, the enzymes are ___',
            options: ['denatured', 'inhibited', 'saturated', 'destroyed']
          },
          {
            label: 'A reaction rate is the amount of product formed per unit of ___',
            options: ['time', 'concentration', 'energy', 'temperature']
          },
          {
            label: 'Once the enzyme is saturated, adding more enzyme ___ the rate',
            options: ['increases', 'decreases', 'does not change', 'halves']
          }
        ],
        correctAnswers: ['saturated', 'time', 'increases'],
        hint1: 'All active sites are filled.',
        hint2: 'Rate = change in product ÷ change in ___.',
        hint3: 'More enzyme molecules = more active sites.',
        explanation: 'At the plateau, all enzymes are saturated. A rate is product formed per unit time. Adding more enzyme adds active sites, so the rate increases even when the existing enzyme is saturated.'
      }
    }
  ]
}
