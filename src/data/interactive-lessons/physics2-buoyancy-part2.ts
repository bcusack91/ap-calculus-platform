export const physics2BuoyancyPart2Data = {
  topicSlug: 'buoyancy-archimedes-principle',
  sections: [
    {
      id: 'bu2-intro',
      type: 'text' as const,
      content: `
# ⚖️ Sink, Float, or Hover?

**Part 2 of 7 — The Three Cases**

Now that you understand the buoyant force, let's systematically analyze what happens when you place an object in a fluid. There are exactly three possible outcomes.
      `
    },
    {
      id: 'bu2-three-cases',
      type: 'text' as const,
      content: `
## The Three Cases

### Case 1: Sinking ($\\rho_{\\text{obj}} > \\rho_{\\text{fluid}}$)

- Weight > buoyant force → net force downward
- Object accelerates to the bottom
- $V_{\\text{displaced}} = V_{\\text{object}}$ (fully submerged)
- Examples: rock in water, iron in water

### Case 2: Floating ($\\rho_{\\text{obj}} < \\rho_{\\text{fluid}}$)

- Object rises until buoyant force equals weight
- Only partially submerged
- $V_{\\text{displaced}} < V_{\\text{object}}$
- Fraction submerged: $V_{\\text{sub}}/V_{\\text{total}} = \\rho_{\\text{obj}}/\\rho_{\\text{fluid}}$
- Examples: wood in water, ice in water, oil on water

### Case 3: Neutral Buoyancy ($\\rho_{\\text{obj}} = \\rho_{\\text{fluid}}$)

- Weight = buoyant force at any depth
- Object hovers in equilibrium
- Fully submerged but not sinking
- Examples: submarine at operating depth, fish adjusting swim bladder
      `
    },
    {
      id: 'bu2-floating-analysis',
      type: 'text' as const,
      content: `
## Floating Objects: The Equilibrium Condition

When an object floats in equilibrium:

$$F_B = W$$

$$\\rho_{\\text{fluid}} V_{\\text{sub}} g = \\rho_{\\text{obj}} V_{\\text{total}} g$$

$$\\frac{V_{\\text{sub}}}{V_{\\text{total}}} = \\frac{\\rho_{\\text{obj}}}{\\rho_{\\text{fluid}}}$$

This is the **fraction submerged** equation. Let's use it:

### Example: Wooden Block

A wooden block ($\\rho = 700$ kg/m³) floats in water ($\\rho = 1000$ kg/m³).

$$\\text{Fraction submerged} = \\frac{700}{1000} = 0.70 = 70\\%$$

70% of the block is underwater, 30% sticks above the surface.

### Example: Ice in Seawater

Ice ($\\rho = 917$ kg/m³) in seawater ($\\rho = 1025$ kg/m³):

$$\\text{Fraction submerged} = \\frac{917}{1025} = 0.895 = 89.5\\%$$

Only 10.5% of an iceberg is visible above the surface!
      `
    },
    {
      id: 'bu2-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** — Sink vs. Float
      `,
      exercise: {
        questions: [
          {
            question: 'A steel ship floats even though steel is denser than water because:',
            options: [
              'Steel becomes lighter in water',
              'The ship\'s hollow shape gives it a low *average* density (less than water)',
              'Water can\'t exert force on metal',
              'The ship is moving'
            ],
            correctAnswer: 1,
            explanation: 'The ship is mostly air inside. Its *average* density (total mass / total volume including air spaces) is less than water\'s density. It displaces more water than a solid steel block of the same mass would.'
          },
          {
            question: 'A submarine dives by:',
            options: [
              'Turning its propellers downward',
              'Flooding ballast tanks to increase its average density above water\'s density',
              'Reducing the buoyant force',
              'Using gravity rockets'
            ],
            correctAnswer: 1,
            explanation: 'Ballast tanks are filled with seawater, increasing the sub\'s total mass without changing its volume → density increases. When $\\rho_{\\text{sub}} > \\rho_{\\text{water}}$, it sinks. To surface, compressed air blows water out of the tanks.'
          },
          {
            question: 'A block floats in water with 75% submerged. If the water is replaced with a denser liquid (SG = 1.5), the fraction submerged becomes:',
            options: [
              '75% (unchanged)',
              '50%',
              '37.5%',
              '100% (it sinks)'
            ],
            correctAnswer: 1,
            explanation: '$\\rho_{\\text{obj}} = 0.75 \\times 1000 = 750$ kg/m³. In new liquid ($\\rho = 1500$): fraction = $750/1500 = 0.50 = 50\\%$. The object floats higher in the denser liquid.'
          }
        ]
      }
    },
    {
      id: 'bu2-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Floating Drill** (use $g = 10$ m/s²)

A rectangular barge ($6.0 \\times 3.0 \\times 1.0$ m) has mass 12,000 kg. It floats in freshwater ($\\rho = 1000$ kg/m³).

1) Volume of the barge (in m³)
2) Volume of water displaced (in m³)
3) Depth the barge sinks to (draft, in m)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['18', '12', '0.67'],
        hint1: '$V = 6.0 \\times 3.0 \\times 1.0$.',
        hint2: 'Floating: $F_B = W$. $\\rho_w V_{\\text{disp}} g = mg$. $V_{\\text{disp}} = m/\\rho_w = 12{,}000/1000$.',
        hint3: 'Draft = $V_{\\text{disp}} / (\\text{length} \\times \\text{width}) = 12/(6 \\times 3)$.',
        explanation: '$V_{\\text{barge}} = 18$ m³. $V_{\\text{disp}} = 12{,}000/1000 = 12$ m³. Draft = $12/(6 \\times 3) = 12/18 = 0.667$ m. The barge sits 0.67 m deep, leaving 0.33 m of freeboard.'
      }
    },
    {
      id: 'bu2-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz**
      `,
      exercise: {
        questions: [
          {
            question: 'An ice cube floats in a glass of water filled to the brim. When the ice melts, the water level will:',
            options: [
              'Rise and overflow',
              'Drop below the brim',
              'Stay exactly at the brim',
              'It depends on the water temperature'
            ],
            correctAnswer: 2,
            explanation: 'Classic AP question! When floating, the ice displaces its *weight* in water. When it melts, it becomes water with exactly that weight. The melted water fills exactly the space the ice was displacing. Level stays the same.'
          },
          {
            question: 'You stand on a floating raft and drop a heavy stone into the lake. The water level of the lake will:',
            options: [
              'Rise',
              'Fall',
              'Stay the same',
              'Depends on the stone\'s density'
            ],
            correctAnswer: 1,
            explanation: 'On the raft, the stone displaces water equal to its *weight* (floating rule). In the lake, it displaces water equal to its *volume*. Since the stone is denser than water, its volume displaces less water than its weight did. The lake level *falls*.'
          }
        ]
      }
    }
  ]
}
