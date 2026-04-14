export const physics2BuoyancyPart5Data = {
  topicSlug: 'buoyancy-archimedes-principle',
  sections: [
    {
      id: 'bu5-intro',
      type: 'text' as const,
      content: `
# 🔗 Multi-Object & Multi-Fluid Buoyancy

**Part 5 of 7 — Complex Buoyancy Scenarios**

AP Physics 2 loves problems with objects in layered fluids, objects connected by strings, and objects stacked on top of each other while floating. Let's conquer them all.
      `
    },
    {
      id: 'bu5-layered-fluids',
      type: 'text' as const,
      content: `
## Objects in Layered Fluids

When two immiscible fluids form layers (e.g., oil on water), an object can float at the **interface**, partially submerged in each.

### Setup

A block of density $\\rho_{\\text{obj}}$ where $\\rho_{\\text{oil}} < \\rho_{\\text{obj}} < \\rho_{\\text{water}}$.

The block sinks through the oil but floats on the water.

### Equilibrium Equation

$$W = F_{B,\\text{oil}} + F_{B,\\text{water}}$$

$$\\rho_{\\text{obj}} V_{\\text{total}} g = \\rho_{\\text{oil}} V_{\\text{oil}} g + \\rho_{\\text{water}} V_{\\text{water}} g$$

Where $V_{\\text{oil}}$ is the volume in the oil layer and $V_{\\text{water}}$ is the volume in the water layer.

Since the block is fully submerged: $V_{\\text{oil}} + V_{\\text{water}} = V_{\\text{total}}$

### Worked Example

A cube (side 10 cm, $\\rho = 850$ kg/m³) in oil ($\\rho_{\\text{oil}} = 700$ kg/m³) over water ($\\rho_w = 1000$ kg/m³):

$$850 V = 700 V_{\\text{oil}} + 1000 V_{\\text{water}}$$

Let $V_{\\text{water}} = f \\cdot V$ (fraction in water), so $V_{\\text{oil}} = (1-f) \\cdot V$:

$$850 = 700(1-f) + 1000f = 700 + 300f$$

$$f = 150/300 = 0.50$$

Half the cube is in water, half in oil.
      `
    },
    {
      id: 'bu5-layered-quiz',
      type: 'multiple-choice' as const,
      content: `
**Layered Fluid Quiz**
      `,
      exercise: {
        questions: [
          {
            question: 'A block ($\\rho = 920$ kg/m³) floats at the interface of oil ($\\rho = 800$ kg/m³) and water ($\\rho = 1000$ kg/m³). What fraction is in water?',
            options: [
              '40%',
              '50%',
              '60%',
              '92%'
            ],
            correctAnswer: 2,
            explanation: '$920 = 800(1-f) + 1000f = 800 + 200f$. $f = 120/200 = 0.60 = 60\\%$. 60% of the block sits in the water layer.'
          },
          {
            question: 'A sphere ($\\rho = 750$ kg/m³) is placed in a tank with oil ($\\rho = 700$ kg/m³) on top of water. The sphere will:',
            options: [
              'Float on top of the oil',
              'Float at the oil-water interface',
              'Sink through both layers',
              'Float entirely within the oil layer'
            ],
            correctAnswer: 1,
            explanation: '$\\rho_{\\text{obj}} = 750$ is between $\\rho_{\\text{oil}} = 700$ and $\\rho_w = 1000$. It sinks through the oil but is buoyed by the denser water — it rests at the interface.'
          }
        ]
      }
    },
    {
      id: 'bu5-connected-objects',
      type: 'text' as const,
      content: `
## Connected Objects: The Balloon-on-a-String Problem

**Setup:** A light object (e.g., a balloon or cork) is tied by a string to the bottom of a tank filled with water. The object is less dense than water and would float, but the string holds it down.

### Free-Body Diagram

- **Buoyant force** $F_B$ (upward)
- **Weight** $W$ (downward)
- **Tension** $T$ (downward — the string pulls it down)

$$F_B = W + T$$

$$T = F_B - W = (\\rho_{\\text{fluid}} - \\rho_{\\text{obj}}) V g$$

### Reverse Case: Dense Object on a String from Above

An object denser than water hangs from a string:

$$T + F_B = W \\implies T = W - F_B$$

### Key Distinction

| Scenario | String Direction | Tension |
|:---:|:---:|:---:|
| Light object tied to bottom | String pulls **down** | $T = F_B - W$ |
| Heavy object hung from above | String pulls **up** | $T = W - F_B$ |
      `
    },
    {
      id: 'bu5-connected-drill',
      type: 'input-boxes' as const,
      content: `
**Connected Object Problems** (use $g = 10$ m/s², $\\rho_w = 1000$ kg/m³)

A wooden ball ($\\rho = 500$ kg/m³, $V = 0.002$ m³) is tied to the bottom of a pool by a string.

1) Weight of the ball (in N)

2) Buoyant force on the ball (in N)

3) Tension in the string (in N)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['10', '20', '10'],
        hint1: '$W = \\rho_{\\text{ball}} V g = (500)(0.002)(10)$.',
        hint2: '$F_B = \\rho_w V g = (1000)(0.002)(10)$.',
        hint3: '$T = F_B - W$ (string pulls down to keep light object submerged).',
        explanation: '$W = 10$ N. $F_B = 20$ N. $T = 20 - 10 = 10$ N. The string must pull down with 10 N to keep the ball submerged.'
      }
    },
    {
      id: 'bu5-stacked-objects',
      type: 'text' as const,
      content: `
## Stacked Floating Objects

**Problem:** A block of wood floats in water. A second, smaller block is placed on top of the first. How does the system float?

### Strategy

Treat the stack as one floating object:

$$\\rho_w V_{\\text{sub}} g = (m_1 + m_2) g$$

$$V_{\\text{sub}} = \\frac{m_1 + m_2}{\\rho_w}$$

The first block sinks deeper to support the extra weight.

### Example

Block 1: 2.0 kg, volume 0.003 m³. Block 2: 0.5 kg placed on top.

$$V_{\\text{sub}} = \\frac{2.0 + 0.5}{1000} = 0.0025 \\text{ m}^3$$

Since $V_{\\text{sub}} = 0.0025 < V_1 = 0.003$ m³, the stack still floats (part of block 1 above water).
      `
    },
    {
      id: 'bu5-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz**
      `,
      exercise: {
        questions: [
          {
            question: 'A helium balloon is tied to a string attached to a rock at the bottom of a pool. If the string is cut, the balloon:',
            options: [
              'Sinks to the bottom',
              'Stays in place',
              'Rises to the surface (and out of the water if buoyant enough)',
              'Implodes from water pressure'
            ],
            correctAnswer: 2,
            explanation: 'Helium is much less dense than water. The buoyant force greatly exceeds the balloon\'s weight. Once the string is cut, the net upward force causes the balloon to rise rapidly to the surface.'
          },
          {
            question: 'A wooden block floats in water with 40% above the surface. A coin is placed on the block and it now floats with 30% above the surface. If more coins are added until 0% is above the surface, adding one more coin will:',
            options: [
              'Make the block float deeper',
              'Cause the block (and coins) to sink',
              'Have no effect',
              'Make the water level rise'
            ],
            correctAnswer: 1,
            explanation: 'When the block is fully submerged, it has reached its maximum buoyant force ($\\rho_w V_{\\text{block}} g$). Any additional weight exceeds this maximum → the total weight exceeds $F_B$ → the system sinks.'
          }
        ]
      }
    }
  ]
}
