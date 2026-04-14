export const physics2BuoyancyPart4Data = {
  topicSlug: 'buoyancy-archimedes-principle',
  sections: [
    {
      id: 'bu4-intro',
      type: 'text' as const,
      content: `
# 🧊 Floating Object Problems

**Part 4 of 7 — The Problems AP Loves Most**

Floating objects are AP exam favorites because they combine buoyancy, density, and equilibrium in satisfying ways. Let's master every variant.
      `
    },
    {
      id: 'bu4-floating-equilibrium',
      type: 'text' as const,
      content: `
## The Floating Equilibrium Equation

For any floating object, exactly two forces balance:

$$F_B = W$$

$$\\rho_{\\text{fluid}} V_{\\text{sub}} g = \\rho_{\\text{obj}} V_{\\text{total}} g$$

From this, we can derive:

$$\\frac{V_{\\text{sub}}}{V_{\\text{total}}} = \\frac{\\rho_{\\text{obj}}}{\\rho_{\\text{fluid}}} \\quad \\text{(fraction submerged)}$$

$$\\frac{V_{\\text{above}}}{V_{\\text{total}}} = 1 - \\frac{\\rho_{\\text{obj}}}{\\rho_{\\text{fluid}}} \\quad \\text{(fraction above)}$$

### Common Floating Scenarios

| Object & Fluid | Fraction Sub | Fraction Above |
|:---:|:---:|:---:|
| Ice in fresh water (917/1000) | 91.7% | 8.3% |
| Ice in seawater (917/1025) | 89.5% | 10.5% |
| Wood (700) in water | 70% | 30% |
| Cork (240) in water | 24% | 76% |
| Steel block in mercury (7800/13600) | 57.4% | 42.6% |
      `
    },
    {
      id: 'bu4-adding-weight',
      type: 'text' as const,
      content: `
## Adding Weight to Floating Objects

**Classic problem:** A wooden raft floats in water. How much extra mass can you put on it before it sinks?

### Strategy

The raft sinks when it's fully submerged ($V_{\\text{sub}} = V_{\\text{total}}$). At this point:

$$\\rho_w V_{\\text{raft}} g = (m_{\\text{raft}} + m_{\\text{extra}}) g$$

$$m_{\\text{extra}} = \\rho_w V_{\\text{raft}} - m_{\\text{raft}}$$

### Worked Example

A wooden raft has volume 2.0 m³ and mass 1200 kg. Maximum extra mass:

$$m_{\\text{extra}} = (1000)(2.0) - 1200 = 2000 - 1200 = 800 \\text{ kg}$$

The raft can hold up to 800 kg before going under!

**General formula:** $m_{\\text{extra}} = (\\rho_{\\text{fluid}} - \\rho_{\\text{obj}}) \\times V_{\\text{obj}}$
      `
    },
    {
      id: 'bu4-problems-quiz',
      type: 'multiple-choice' as const,
      content: `
**Floating Problems Quiz**
      `,
      exercise: {
        questions: [
          {
            question: 'A cube of side 0.10 m and density 600 kg/m³ floats in water. The depth of the bottom of the cube below the water surface is:',
            options: [
              '0.04 m',
              '0.06 m',
              '0.08 m',
              '0.10 m'
            ],
            correctAnswer: 1,
            explanation: 'Fraction submerged = 600/1000 = 0.60. Depth = $0.60 \\times 0.10 = 0.06$ m = 6 cm.'
          },
          {
            question: 'A floating block has 3/4 of its volume submerged in a liquid of density 1200 kg/m³. The block\'s density is:',
            options: [
              '1600 kg/m³',
              '900 kg/m³',
              '1200 kg/m³',
              '400 kg/m³'
            ],
            correctAnswer: 1,
            explanation: '$\\rho_{\\text{obj}}/\\rho_{\\text{fluid}} = V_{\\text{sub}}/V_{\\text{total}} = 3/4$. So $\\rho_{\\text{obj}} = (3/4)(1200) = 900$ kg/m³.'
          },
          {
            question: 'An ice cube with a pebble frozen inside floats in water. The pebble melts free and sinks. The water level:',
            options: [
              'Rises',
              'Falls',
              'Stays the same',
              'Depends on the pebble\'s density'
            ],
            correctAnswer: 1,
            explanation: 'While frozen in the ice, the pebble\'s weight displaced extra water (floating rule: displaces weight). Once it sinks, it only displaces its volume of water — which is less (since the pebble is denser than water). The water level drops.'
          }
        ]
      }
    },
    {
      id: 'bu4-raft-drill',
      type: 'input-boxes' as const,
      content: `
**Raft Problem Drill** (use $g = 10$ m/s²)

A styrofoam raft ($\\rho = 50$ kg/m³) is $2.0 \\times 1.0 \\times 0.20$ m.

1) Mass of the raft (in kg)

2) Maximum buoyant force when fully submerged (in N)

3) Maximum extra mass it can carry before sinking (in kg)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['20', '4000', '380'],
        hint1: '$m = \\rho V = 50 \\times (2.0 \\times 1.0 \\times 0.20)$.',
        hint2: '$F_{B,\\text{max}} = \\rho_w V g = (1000)(0.40)(10)$.',
        hint3: '$m_{\\text{extra}} = F_{B,\\text{max}}/g - m_{\\text{raft}} = 400 - 20$.',
        explanation: '$V = 0.40$ m³. $m = 50 \\times 0.40 = 20$ kg. $F_{B,\\text{max}} = (1000)(0.40)(10) = 4000$ N. Max total mass = $4000/10 = 400$ kg. Extra = $400 - 20 = 380$ kg.'
      }
    },
    {
      id: 'bu4-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz**
      `,
      exercise: {
        questions: [
          {
            question: 'You pour oil ($\\rho = 800$ kg/m³) on top of water in a tank. A block ($\\rho = 900$ kg/m³) is placed in the tank. The block will:',
            options: [
              'Float on the oil',
              'Sink to the bottom',
              'Float at the oil-water interface (partially in each)',
              'Hover in the middle of the water'
            ],
            correctAnswer: 2,
            explanation: 'The block is denser than oil (900 > 800) but less dense than water (900 < 1000). It sinks through the oil but floats on the water — resting at the interface with part in each fluid.'
          },
          {
            question: 'A boat floating in a swimming pool has a rock inside. You throw the rock overboard into the pool. The water level in the pool:',
            options: [
              'Rises',
              'Falls',
              'Stays the same',
              'Depends on the rock\'s mass'
            ],
            correctAnswer: 1,
            explanation: 'In the boat, the rock displaces water equal to its *weight* (large volume for a dense rock). In the pool, it displaces water equal to its *volume* (smaller amount). Less water is displaced overall → water level falls.'
          }
        ]
      }
    }
  ]
}
