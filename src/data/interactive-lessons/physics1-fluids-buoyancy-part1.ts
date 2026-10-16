export const physics1FluidsBuoyancyPart1Data = {
  topicSlug: 'fluids-buoyancy',
  sections: [
    {
      id: 'fb1-intro',
      type: 'text' as const,
      content: `
# 🛟 What Is Buoyancy?

**Part 1 of 7 — Fluids: Buoyancy**

Why does a steel ship float but a steel coin sink? The answer is **buoyancy** — the upward force a fluid exerts on any object submerged or floating in it. This part introduces the qualitative idea before we hit Archimedes' equation.

**In this lesson you will learn:**
- The physical origin of buoyancy (pressure difference)
- Why buoyancy always points UP
- How buoyancy depends on fluid (not object) density
- How buoyancy compares to gravity in a static situation
      `
    },
    {
      id: 'fb1-concepts',
      type: 'text' as const,
      content: `
## Where Buoyancy Comes From

The pressure on the bottom of a submerged object is greater than the pressure on the top, because pressure increases with depth ($P = \\rho g h$).

The downward force on the top is $F_{top} = P_{top} A$.
The upward force on the bottom is $F_{bot} = P_{bot} A$, with $P_{bot} > P_{top}$.

The net result is an UPWARD force:

$$F_b = F_{bot} - F_{top} = (\\rho_{fluid}\\, g\\, h_{bot} - \\rho_{fluid}\\, g\\, h_{top})A = \\rho_{fluid}\\, g\\, V_{disp}$$

This is **the buoyant force**.

### Two Possible Outcomes (static)

| Comparison | Result |
|-----------|--------|
| $F_b > W$ | Net force up — object accelerates upward / floats higher |
| $F_b = W$ | Equilibrium — floats or hovers in place |
| $F_b < W$ | Net force down — object sinks |

### Important Reality Checks
- Buoyancy depends on the **fluid's** density, not the object's.
- Volume submerged matters — only the displaced volume contributes.
- Air is also a fluid — every object in air experiences a small buoyant force (usually negligible).
      `
    },
    {
      id: 'fb1-mc',
      type: 'multiple-choice' as const,
      content: `
**Buoyancy Concepts** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The buoyant force on a submerged object always points:',
            options: ['Down', 'Sideways', 'Up', 'In the direction of motion'],
            correctAnswer: 2,
            explanation: 'Pressure increases with depth, so the bottom face has greater upward push than the top face has downward push. Net force = up.'
          },
          {
            question: 'Buoyant force depends on:',
            options: [
              'The object\'s mass and how deep it sits',
              'The fluid\'s density and the displaced volume',
              'The container\'s shape and the fluid depth',
              'The object\'s own density and its weight'
            ],
            correctAnswer: 1,
            explanation: '$F_b = \\rho_{fluid}\\, g\\, V_{disp}$ — fluid density and displaced volume only.'
          },
          {
            question: 'A steel ball and a hollow ball of the same volume are submerged at the same depth. The buoyant forces are:',
            options: [
              'Greater on the steel ball, which is heavier',
              'Greater on the hollow ball, which is lighter',
              'Equal on the two balls',
              'Zero on the hollow ball, which is mostly air'
            ],
            correctAnswer: 2,
            explanation: 'Same displaced volume × same fluid density → same $F_b$. The balls\' weights differ, but the buoyant force does not depend on what is inside the object.'
          }
        ]
      }
    },
    {
      id: 'fb1-input',
      type: 'input-boxes' as const,
      content: `
**Quick Buoyancy Calculations** 🧮 (g = 10, $\\rho_{water} = 1000$)

1) A fully submerged object displaces 0.020 $m^{3}$ of water. Buoyant force (N)?

2) A block, half-submerged, displaces 0.0050 $m^{3}$. Buoyant force (N)?

3) A balloon of volume 1.0 $m^{3}$ in air ($\\rho_{air} = 1.2$). Buoyant force from air (N)?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['200', '50', '12'],
        hint1: '$F_b = \\rho g V_{disp}$.',
        hint2: 'Half submerged = use that half-volume.',
        hint3: 'Air still has density.',
        explanation: '1) $F_b = 1000(10)(0.020) = 200$ N. 2) $F_b = 1000(10)(0.0050) = 50$ N. 3) $F_b = 1.2(10)(1.0) = 12$ N — small but non-zero (and why hot-air balloons can lift!).'
      }
    },
    {
      id: 'fb1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Buoyancy Reasoning** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A fully submerged object floats up if:',
            options: ['$\\rho_{obj} > \\rho_{fluid}$', '$\\rho_{obj} = \\rho_{fluid}$', '$\\rho_{obj} < \\rho_{fluid}$', '$W_{obj} < W_{fluid\\ in\\ tank}$'],
            correctIndex: 2,
            explanation: 'Less dense than the fluid → $F_b > W$ → net upward force → it rises. Comparing the object\'s weight with the weight of all the fluid in the tank is a common mix-up; only the displaced fluid matters.'
          },
          {
            label: 'A submerged object\'s buoyant force is independent of:',
            options: ['The density of the fluid', 'The volume of the object', 'The object\'s density', 'The strength of gravity, $g$'],
            correctIndex: 2,
            explanation: 'Buoyancy depends on fluid density and displaced volume — not object density.'
          },
          {
            label: 'In a vacuum (no fluid around), the buoyant force on an object is:',
            options: ['Equal to its weight', 'Half its weight', 'Zero', 'The same as it would be in air'],
            correctIndex: 2,
            explanation: 'No fluid → no displaced fluid → $F_b = 0$. Buoyancy is a force exerted by a fluid, not a property the object carries with it.'
          },
          {
            label: 'If you replace water with denser saltwater, the buoyant force on the same submerged object:',
            options: ['Decreases, since denser water resists more', 'Stays the same, since the volume is unchanged', 'Increases, since the displaced fluid is now heavier', 'Decreases, as saltwater presses down harder'],
            correctIndex: 2,
            explanation: '$F_b = \\rho_{fluid} g V$: same displaced volume, denser fluid → more buoyancy. (Why it\'s easier to float in the ocean than in a pool.)'
          }
        ]
      }
    },
    {
      id: 'fb1-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Intro to Buoyancy** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A submarine hovers stationary at constant depth. Which is true?',
            options: [
              '$F_b > W$',
              '$F_b = W$',
              '$F_b < W$',
              '$F_b = 0$'
            ],
            correctAnswer: 1,
            explanation: 'Stationary at constant depth → equilibrium → buoyant force = weight.'
          },
          {
            question: 'Two cubes of the same volume but different masses are fully submerged in water. Compared to each other, the buoyant forces are:',
            options: [
              'Greater on the heavier cube',
              'Greater on the lighter cube',
              'Equal',
              'Cannot be determined without depth'
            ],
            correctAnswer: 2,
            explanation: 'Same volume submerged in same fluid → same $F_b = \\rho_{fluid} g V$. Their net vertical forces (and thus motions) differ, but buoyancy alone is identical.'
          }
        ]
      }
    }
  ]
}
