export const physics2ThermoLawsPart6Data = {
  topicSlug: 'laws-of-thermodynamics',
  sections: [
    {
      id: 'tl6-intro',
      type: 'text' as const,
      content: `
# ❄️ Refrigerators & Heat Pumps

**Part 6 of 7 — Running a Heat Engine in Reverse**

A refrigerator is essentially a heat engine running backward: instead of using heat to produce work, it uses work to move heat from cold to hot. Heat pumps use the same principle to heat buildings efficiently.
      `
    },
    {
      id: 'tl6-refrigerator',
      type: 'text' as const,
      content: `
## How a Refrigerator Works

A refrigerator uses **work input** to extract heat from a cold reservoir (inside the fridge) and dump it into a hot reservoir (the kitchen):

1. **Cold reservoir** ($T_C$): heat $Q_C$ is absorbed from the cold interior
2. **Work input** ($W$): electrical energy drives the compressor
3. **Hot reservoir** ($T_H$): heat $Q_H$ is released into the room

### Energy Conservation

$$Q_H = Q_C + W$$

The heat expelled into the room is MORE than the heat removed from inside — that's why the back of your fridge feels warm!

### Coefficient of Performance (COP) — Refrigerator

For a refrigerator, we want to **maximize cooling per unit of work**:

$$\\text{COP}_{\\text{fridge}} = \\frac{Q_C}{W} = \\frac{Q_C}{Q_H - Q_C}$$

Note: COP can be greater than 1 (unlike efficiency). A typical fridge has COP ≈ 3–5, meaning each joule of work removes 3–5 joules of heat.

### Maximum COP (Carnot Refrigerator)

$$\\text{COP}_{\\text{Carnot, fridge}} = \\frac{T_C}{T_H - T_C}$$
      `
    },
    {
      id: 'tl6-heat-pump',
      type: 'text' as const,
      content: `
## Heat Pumps

A **heat pump** is the same device as a refrigerator, but the goal is reversed: we want to **heat** the hot reservoir (the building) by extracting heat from the cold reservoir (outside air).

### COP — Heat Pump

$$\\text{COP}_{\\text{heat pump}} = \\frac{Q_H}{W} = \\frac{Q_H}{Q_H - Q_C}$$

### Maximum COP (Carnot Heat Pump)

$$\\text{COP}_{\\text{Carnot, HP}} = \\frac{T_H}{T_H - T_C}$$

### Useful Relationship

$$\\text{COP}_{\\text{heat pump}} = \\text{COP}_{\\text{fridge}} + 1$$

This makes sense: $Q_H/W = Q_C/W + W/W = Q_C/W + 1$.

### Real-World Applications

- **Air conditioners**: refrigerators that cool indoor air
- **Heat pumps**: heat buildings by extracting heat from outdoor air (even cold air has thermal energy!)
- **Geothermal heat pumps**: use the stable ground temperature as a reservoir — very efficient
- A heat pump with COP = 4 delivers 4 kW of heating for every 1 kW of electricity — far better than a space heater (COP = 1)
      `
    },
    {
      id: 'tl6-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Refrigerator & Heat Pump Concepts** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'A refrigerator removes 400 J from the cold reservoir and the compressor does 100 J of work. The heat exhausted to the hot reservoir is:',
            options: [
              '300 J',
              '400 J',
              '500 J',
              '100 J'
            ],
            correctAnswer: 2,
            explanation: '$Q_H = Q_C + W = 400 + 100 = 500$ J. The room receives more heat than was removed from the fridge because the work input also becomes heat.'
          },
          {
            question: 'A heat pump with COP = 5 uses 200 J of work. How much heat does it deliver to the building?',
            options: [
              '40 J',
              '200 J',
              '800 J',
              '1000 J'
            ],
            correctAnswer: 3,
            explanation: '$\\text{COP}_{\\text{HP}} = Q_H/W$, so $Q_H = \\text{COP} \\times W = 5 \\times 200 = 1000$ J. This is why heat pumps are so much more efficient than electric heaters.'
          }
        ]
      }
    },
    {
      id: 'tl6-comparison-quiz',
      type: 'multiple-choice' as const,
      content: `
**Engine vs. Refrigerator** ⚖️
      `,
      exercise: {
        questions: [
          {
            question: 'The key difference between a heat engine and a refrigerator is:',
            options: [
              'A heat engine violates the Second Law; a refrigerator does not',
              'A heat engine produces net work output; a refrigerator requires net work input',
              'A heat engine operates between two temperatures; a refrigerator operates at one temperature',
              'A heat engine uses gas; a refrigerator uses liquid'
            ],
            correctAnswer: 1,
            explanation: 'Both operate between two thermal reservoirs. A heat engine runs clockwise on a PV diagram (net work out), while a refrigerator runs counterclockwise (net work in). Neither violates the Second Law.'
          },
          {
            question: 'Why can COP be greater than 1, while engine efficiency cannot?',
            options: [
              'COP violates conservation of energy',
              'COP measures useful output (heat moved) per work input, not energy conversion',
              'COP uses different units',
              'COP is measured differently in Europe'
            ],
            correctAnswer: 1,
            explanation: 'COP is not an energy conversion efficiency — it measures how much heat is moved per unit of work. Since heat is being moved (not created), you can move more heat energy than the work you put in.'
          }
        ]
      }
    },
    {
      id: 'tl6-cop-drill',
      type: 'input-boxes' as const,
      content: `
**COP Calculation Drill** 🔧

1) A refrigerator removes 600 J from the cold reservoir using 200 J of work. What is its COP?

2) What is the maximum COP of a refrigerator operating between $T_C = 250$ K and $T_H = 300$ K?

3) A Carnot heat pump operates between $T_C = 270$ K and $T_H = 300$ K. What is its COP?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['3', '5', '10'],
        hint1: '$\\text{COP}_{\\text{fridge}} = Q_C/W = 600/200 = 3$.',
        hint2: '$\\text{COP}_{\\text{Carnot, fridge}} = T_C/(T_H - T_C) = 250/(300 - 250) = 250/50 = 5$.',
        hint3: '$\\text{COP}_{\\text{Carnot, HP}} = T_H/(T_H - T_C) = 300/(300 - 270) = 300/30 = 10$. Or use $\\text{COP}_{\\text{HP}} = \\text{COP}_{\\text{fridge}} + 1 = 9 + 1 = 10$.',
        explanation: 'Refrigerator COP $= Q_C/W$. Heat pump COP $= Q_H/W$. Carnot versions use temperature ratios. Heat pump COP is always one more than fridge COP for the same temperatures.'
      }
    }
  ]
}
