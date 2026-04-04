export const physics2FluidDynamicsPart2Data = {
  topicSlug: 'fluid-dynamics-continuity',
  sections: [
    {
      id: 'fd2-intro',
      type: 'text' as const,
      content: `
# 📏 The Continuity Equation

**Part 2 of 7 — What Goes In Must Come Out**

The continuity equation is one of the most intuitive results in physics: fluid can't just appear or disappear in a pipe. Whatever enters one end must exit the other.
      `
    },
    {
      id: 'fd2-derivation',
      type: 'text' as const,
      content: `
## Deriving the Continuity Equation

Consider a pipe that narrows from area $A_1$ to area $A_2$:

In time $\\Delta t$:
- Fluid entering at point 1: volume = $A_1 v_1 \\Delta t$
- Fluid exiting at point 2: volume = $A_2 v_2 \\Delta t$

Since the fluid is **incompressible** (constant density) and no fluid leaks:

$$A_1 v_1 \\Delta t = A_2 v_2 \\Delta t$$

$$\\boxed{A_1 v_1 = A_2 v_2}$$

This is the **Equation of Continuity**.

### What It Means

$$Q = Av = \\text{constant throughout the pipe}$$

- **Narrow section → fast flow** (small $A$ → large $v$)
- **Wide section → slow flow** (large $A$ → small $v$)

This is why:
- A thumb over a garden hose makes water squirt faster
- River rapids occur where the channel narrows
- Wind accelerates between buildings (wind tunnel effect)
      `
    },
    {
      id: 'fd2-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Continuity Concept Check**
      `,
      exercise: {
        questions: [
          {
            question: 'A pipe narrows to half its original diameter. The fluid speed in the narrow section is:',
            options: [
              '2× the original speed',
              '4× the original speed',
              '8× the original speed',
              'Half the original speed'
            ],
            correctAnswer: 1,
            explanation: 'Halving the diameter reduces the area by a factor of 4 ($A = \\pi r^2$, radius halved → area quartered). By continuity: $v_2 = (A_1/A_2) v_1 = 4v_1$.'
          },
          {
            question: 'Water flows through a pipe at 6 m/s. The pipe splits into 3 identical branches, each with the same cross-section as the original pipe. The speed in each branch is:',
            options: [
              '6 m/s',
              '2 m/s',
              '18 m/s',
              '3 m/s'
            ],
            correctAnswer: 1,
            explanation: 'Total flow in = total flow out. $A(6) = 3A(v)$. $v = 6/3 = 2$ m/s. The flow divides equally among the three branches.'
          },
          {
            question: 'The continuity equation $A_1 v_1 = A_2 v_2$ assumes:',
            options: [
              'The fluid is compressible',
              'The pipe has no friction',
              'The fluid density is constant (incompressible)',
              'The flow is turbulent'
            ],
            correctAnswer: 2,
            explanation: 'The continuity equation in this form requires incompressibility ($\\rho = $ constant). For compressible fluids, the equation becomes $\\rho_1 A_1 v_1 = \\rho_2 A_2 v_2$ (mass flow rate conservation).'
          }
        ]
      }
    },
    {
      id: 'fd2-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Continuity Equation Drill**

Water flows through a circular pipe of radius 3.0 cm at 2.0 m/s. The pipe narrows to a radius of 1.0 cm.

1) Area of the wide section (in cm²)
2) Area of the narrow section (in cm²)
3) Speed in the narrow section (in m/s)

*Round all answers to 3 significant figures.*
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['28.3', '3.14', '18'],
        hint1: '$A = \\pi r^2 = \\pi (3.0)^2$ (keep in cm²).',
        hint2: '$A = \\pi (1.0)^2$.',
        hint3: '$v_2 = (A_1/A_2) v_1 = (28.3/3.14)(2.0)$.',
        explanation: '$A_1 = 9\\pi = 28.3$ cm². $A_2 = \\pi = 3.14$ cm². Ratio = 9. $v_2 = 9 \\times 2.0 = 18$ m/s.'
      }
    },
    {
      id: 'fd2-applications',
      type: 'text' as const,
      content: `
## Applications of Continuity

### 🩺 Blood Flow

The aorta (radius ≈ 1 cm) carries blood at ≈ 30 cm/s. Capillaries (radius ≈ 4 μm each) carry blood at ≈ 0.05 cm/s.

Total capillary area: $A_{\\text{cap}} = A_{\\text{aorta}} \\times v_{\\text{aorta}} / v_{\\text{cap}} = \\pi(0.01)^2 \\times 30/0.05 \\approx 0.19$ m²

That's about **6 billion** capillaries! Continuity works even in biology.

### 🚿 Nozzle Design

Fire hose nozzles are narrow to increase exit speed: if the hose has $A = 50$ cm² and the nozzle has $A = 5$ cm², the exit speed is 10× the hose speed.

### 🏞️ River Flow

A river 20 m wide and 3 m deep flows at 0.5 m/s. It narrows to 10 m wide and 2 m deep:

$v_2 = \\frac{A_1 v_1}{A_2} = \\frac{(20)(3)(0.5)}{(10)(2)} = \\frac{30}{20} = 1.5$ m/s

The current triples as the river narrows!
      `
    },
    {
      id: 'fd2-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz**
      `,
      exercise: {
        questions: [
          {
            question: 'A firefighter adjusts a nozzle to reduce its opening area by a factor of 3. The exit speed of the water:',
            options: [
              'Decreases by a factor of 3',
              'Increases by a factor of 3',
              'Increases by a factor of 9',
              'Stays the same'
            ],
            correctAnswer: 1,
            explanation: '$A_1 v_1 = A_2 v_2$. If $A_2 = A_1/3$, then $v_2 = 3v_1$. The speed triples — the water shoots farther.'
          },
          {
            question: 'Oil flows through a pipe that branches into two equal-sized pipes. If the original pipe has radius $R$, what radius of each branch pipe keeps the oil at the same speed?',
            options: [
              '$R$',
              '$R/2$',
              '$R/\\sqrt{2}$',
              '$R/4$'
            ],
            correctAnswer: 2,
            explanation: '$A_1 v = 2 A_{\\text{branch}} v$ (same speed → $v$ cancels). $\\pi R^2 = 2\\pi r^2$. $r = R/\\sqrt{2} \\approx 0.707R$.'
          }
        ]
      }
    }
  ]
}
