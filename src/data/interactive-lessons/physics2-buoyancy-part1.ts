export const physics2BuoyancyPart1Data = {
  topicSlug: 'buoyancy-archimedes-principle',
  sections: [
    {
      id: 'bu1-intro',
      type: 'text' as const,
      content: `
# 🚢 Buoyancy & Archimedes' Principle

**Part 1 of 7 — Why Things Float**

You already know objects less dense than a fluid will float. But *how much* force does a fluid exert upward? And *why* does it exert an upward force at all?

The answer is **Archimedes' Principle** — one of the oldest and most elegant results in physics.
      `
    },
    {
      id: 'bu1-buoyant-force-origin',
      type: 'text' as const,
      content: `
## Where Does the Buoyant Force Come From?

Consider a cube submerged in water. Fluid pressure acts on **all six faces**:

- **Left and right faces:** Pressure forces cancel (same depth → same pressure)
- **Front and back faces:** Cancel by the same reasoning
- **Top face:** Pressure pushes **down** — $F_{\\text{top}} = P_{\\text{top}} \\times A$
- **Bottom face:** Pressure pushes **up** — $F_{\\text{bottom}} = P_{\\text{bottom}} \\times A$

Since the bottom face is **deeper** than the top face:

$$P_{\\text{bottom}} > P_{\\text{top}} \\implies F_{\\text{bottom}} > F_{\\text{top}}$$

The net upward force is the **buoyant force**:

$$F_B = F_{\\text{bottom}} - F_{\\text{top}} = (P_{\\text{bottom}} - P_{\\text{top}}) \\times A = \\rho g h \\times A = \\rho g V$$

This net upward force exists because **pressure increases with depth**.
      `
    },
    {
      id: 'bu1-archimedes',
      type: 'text' as const,
      content: `
## Archimedes' Principle

> **The buoyant force on an object equals the weight of the fluid displaced by the object.**

$$F_B = \\rho_{\\text{fluid}} \\cdot V_{\\text{displaced}} \\cdot g$$

Where:
- $F_B$ = buoyant force (N)
- $\\rho_{\\text{fluid}}$ = density of the fluid (kg/m³)
- $V_{\\text{displaced}}$ = volume of fluid displaced (= volume of the object that's submerged)
- $g$ = 9.8 m/s² (or 10 for AP estimates)

### The Key Insight

The buoyant force depends on:
- ✅ The **fluid's** density (not the object's density)
- ✅ The **volume** of fluid displaced
- ❌ NOT the object's mass, weight, or density (those determine whether it sinks or floats, but not the buoyant force formula itself)
      `
    },
    {
      id: 'bu1-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** — Buoyancy Basics
      `,
      exercise: {
        questions: [
          {
            question: 'A solid iron ball and a hollow plastic ball have the same volume and are both fully submerged in water. Which experiences a larger buoyant force?',
            options: [
              'The iron ball (it\'s heavier)',
              'The plastic ball (it\'s lighter)',
              'They experience the same buoyant force',
              'Cannot determine without knowing the masses'
            ],
            correctAnswer: 2,
            explanation: 'Buoyant force = $\\rho_{\\text{fluid}} V_{\\text{displaced}} g$. Same fluid, same displaced volume → same buoyant force. The buoyant force doesn\'t care about the object\'s material!'
          },
          {
            question: 'An object weighs 50 N in air and 35 N when submerged in water. The buoyant force is:',
            options: [
              '85 N',
              '50 N',
              '35 N',
              '15 N'
            ],
            correctAnswer: 3,
            explanation: 'Apparent weight = true weight − buoyant force. So $F_B = 50 - 35 = 15$ N. The "missing" weight is supported by the buoyant force.'
          },
          {
            question: 'If you push a beach ball underwater and release it, it shoots up because:',
            options: [
              'The air inside makes it light',
              'The buoyant force exceeds the ball\'s weight',
              'Water pressure is zero at the surface',
              'Gravity doesn\'t act underwater'
            ],
            correctAnswer: 1,
            explanation: 'The ball displaces a large volume of water → large buoyant force ($F_B = \\rho_w V g$). Since the ball is mostly air, its weight is much less than $F_B$. The net upward force accelerates it out of the water.'
          }
        ]
      }
    },
    {
      id: 'bu1-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Buoyant Force Drill** (use $g = 10$ m/s², $\\rho_{\\text{water}} = 1000$ kg/m³)

A block with volume $V = 0.005$ m³ is fully submerged in water.

1) Buoyant force on the block (in N)
2) If the block has mass 3 kg, will it sink or float? (type "sink" or "float")
3) If the block has mass 8 kg, its apparent weight when submerged (in N)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['50', 'float', '30'],
        hint1: '$F_B = \\rho_w g V = (1000)(10)(0.005)$.',
        hint2: 'Weight = $mg = 3 \\times 10 = 30$ N. Compare to $F_B = 50$ N.',
        hint3: 'Weight = $8 \\times 10 = 80$ N. Apparent weight = $80 - 50$.',
        explanation: '$F_B = 50$ N. Block with $m = 3$ kg weighs 30 N < 50 N → floats (net force upward). Block with $m = 8$ kg weighs 80 N > 50 N → sinks. Apparent weight = $80 - 50 = 30$ N.'
      }
    },
    {
      id: 'bu1-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz**
      `,
      exercise: {
        questions: [
          {
            question: 'A rock is lowered into water by a string. As it enters the water, the tension in the string:',
            options: [
              'Increases (water adds weight)',
              'Decreases (buoyant force supports part of the weight)',
              'Stays the same',
              'Drops to zero'
            ],
            correctAnswer: 1,
            explanation: '$T + F_B = W$. As $F_B$ increases (more volume submerged), $T$ must decrease. The string tension equals the apparent weight: $T = W - F_B$.'
          },
          {
            question: 'Archimedes allegedly discovered his principle while taking a bath. What did he notice?',
            options: [
              'The water got hotter',
              'Water overflowed when he got in — the displaced volume equals his body\'s submerged volume',
              'The bathtub cracked',
              'Bubbles formed'
            ],
            correctAnswer: 1,
            explanation: 'Legend has it that Archimedes noticed the water level rise as he entered the bath, realizing that the displaced water volume equaled his submerged body volume. He supposedly ran through the streets shouting "Eureka!" ("I found it!").'
          }
        ]
      }
    }
  ]
}
