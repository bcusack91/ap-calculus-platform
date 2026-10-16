export const physics1CollisionsPart5Data = {
  topicSlug: 'collisions',
  sections: [
    {
      id: 'co5-intro',
      type: 'text' as const,
      content: `
# 🎯 2D Collisions (Glancing Collisions)

**Part 5 of 7 — Collisions**

When objects collide at an angle rather than head-on, we have a **2D (or glancing) collision**. The physics is the same — momentum is conserved — but we must apply conservation independently in the $x$ and $y$ directions.

These are among the most challenging collision problems, but the systematic approach makes them manageable.
      `
    },
    {
      id: 'co5-setup',
      type: 'text' as const,
      content: `
## Setting Up 2D Collision Problems

### Conservation Equations

$$\\textbf{x: } m_1 v_{1i} = m_1 v_{1f}\\cos\\theta_1 + m_2 v_{2f}\\cos\\theta_2$$

$$\\textbf{y: } 0 = m_1 v_{1f}\\sin\\theta_1 - m_2 v_{2f}\\sin\\theta_2$$

(Assuming object 1 moves along the $x$-axis initially, and object 2 is at rest.)

### Why the y-equation equals zero

If the initial motion is entirely along the $x$-axis, the total initial $y$-momentum is zero. After the collision, the $y$-components of the two objects must cancel:

$$m_1 v_{1f}\\sin\\theta_1 = m_2 v_{2f}\\sin\\theta_2$$

### Strategy

1. Choose $x$-axis along the initial velocity
2. Write conservation in $x$ and $y$
3. If elastic: add the KE conservation equation
4. Use the equations to reason about directions and how masses, speeds and angles trade off
      `
    },
    {
      id: 'co5-reasoning',
      type: 'text' as const,
      content: `
## Reasoning Without Solving

AP Physics 1 treats 2D momentum **semiquantitatively** (CED Topic 4.3): you must set up the $x$ and $y$ equations correctly and reason about them, but you will not be asked to solve simultaneous equations for unknown angles and speeds.

### What the Equations Tell You at a Glance

- **The $y$-momenta must cancel.** If the incoming object moves along $x$, any $y$-momentum one object gains after the collision is matched by equal and opposite $y$-momentum of the other. One object goes above the axis, the other below.
- **Changing a mass changes the balance.** From $m_1 v_{1f}\\sin\\theta_1 = m_2 v_{2f}\\sin\\theta_2$: if the target is heavier but leaves with the same speed and angle, the incoming object must carry more $y$-momentum away.
- **Momentum is a vector, kinetic energy is not.** Adding momenta means adding components; adding kinetic energies is ordinary addition. Only an elastic collision lets you also write $K_i = K_f$.

### A Quick Check

Two pucks moving at right angles collide and stick. Their combined momentum is the vector sum of the two initial momenta, so the wreck moves **between** the two original directions, tilted toward the puck that had more momentum.
      `
    },
    {
      id: 'co5-example',
      type: 'text' as const,
      content: `
## Worked Example: 2D Perfectly Inelastic

A 3 kg ball at 4 m/s ($+x$) collides with a 2 kg ball at 5 m/s ($+y$). They stick together. Find the final velocity.

**x-momentum:**
$$(3)(4) + (2)(0) = (5)v_{fx}$$
$$v_{fx} = 12/5 = 2.4 \\text{ m/s}$$

**y-momentum:**
$$(3)(0) + (2)(5) = (5)v_{fy}$$
$$v_{fy} = 10/5 = 2.0 \\text{ m/s}$$

**Final speed:**
$$v_f = \\sqrt{2.4^2 + 2.0^2} = \\sqrt{5.76 + 4.0} = \\sqrt{9.76} = 3.12 \\text{ m/s}$$

**Direction:**
$$\\theta = \\arctan\\left(\\frac{2.0}{2.4}\\right) = \\arctan(0.833) = 39.8°$$

above the $x$-axis.
      `
    },
    {
      id: 'co5-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Concept Check — 2D Collisions** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Ball 1 moving in $+x$ hits ball 2 at rest; ball 2 leaves at $30°$ below the $x$-axis. If ball 2 were more massive but left with the same speed and angle, ball 1\'s final $y$-momentum would be:',
            options: [
              'Larger, pointing above the $x$-axis',
              'Smaller, pointing above the $x$-axis',
              'Larger, pointing below the $x$-axis',
              'Unchanged, since only the angle matters'
            ],
            correctAnswer: 0,
            explanation: 'The $y$-momenta must cancel: $p_{1y} = m_2 v_{2f}\\sin30°$ upward. A larger $m_2$ with the same speed and angle means ball 2 carries more downward $y$-momentum, so ball 1 must carry more upward $y$-momentum.'
          },
          {
            question: 'A ball moving in the +x direction hits a stationary ball in a glancing collision. The stationary ball deflects at 30° below the x-axis. The first ball must deflect:',
            options: [
              'At exactly 30° above the x-axis',
              'Above the x-axis, but the angle depends on the masses',
              'Along the x-axis (no deflection)',
              'At 60° above the x-axis'
            ],
            correctAnswer: 1,
            explanation: 'The $y$-momentum was zero initially, so the $y$-momenta must cancel after collision. The first ball goes above the $x$-axis. The exact angle depends on the masses and speeds.'
          },
          {
            question: 'In a 2D collision, the number of independent conservation equations is:',
            options: [
              '1',
              '2 (x and y momentum)',
              '3 (x momentum, y momentum, and energy)',
              '4'
            ],
            correctAnswer: 1,
            explanation: 'In general, we have 2 conservation equations (x and y momentum). If the collision is elastic, we get a third equation (KE conservation). But KE conservation is not guaranteed in all collision types.'
          }
        ]
      }
    },
    {
      id: 'co5-calculations',
      type: 'input-boxes' as const,
      content: `
**2D Collision Practice** 🧮

A 5 kg ball at 6 m/s ($+x$) and a 3 kg ball at 4 m/s ($+y$) collide and stick together.

1) What is $v_{fx}$? (in m/s, to 3 significant figures)

2) What is $v_{fy}$? (in m/s)

3) What is the final speed? (in m/s, to 3 significant figures)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['3.75', '1.5', '4.04'],
        hint1: '$v_{fx} = (5 \\times 6 + 3 \\times 0)/(5+3) = 30/8$',
        hint2: '$v_{fy} = (5 \\times 0 + 3 \\times 4)/(5+3) = 12/8$',
        hint3: '$v_f = \\sqrt{3.75^2 + 1.5^2}$',
        explanation: '1) $v_{fx} = 30/8 = 3.75$ m/s. 2) $v_{fy} = 12/8 = 1.5$ m/s. 3) $v_f = \\sqrt{14.0625 + 2.25} = \\sqrt{16.3125} \\approx 4.04$ m/s.'
      }
    },
    {
      id: 'co5-dropdown-review',
      type: 'dropdown-select' as const,
      content: `
**2D Collision Analysis** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'In 2D collisions, momentum is conserved:',
            options: ['only in the x-direction', 'only in the y-direction', 'independently in both x and y', 'in neither direction'],
            correctIndex: 2,
            explanation: 'In 2D collisions, momentum conservation applies independently in the x and y directions, giving two separate equations.'
          },
          {
            label: 'Two pucks moving at right angles collide and stick. The wreck moves:',
            options: ['between the two initial directions', 'along the faster puck\'s path', 'along the heavier puck\'s path', 'perpendicular to both paths'],
            correctIndex: 0,
            explanation: 'The total momentum is the vector sum of two perpendicular momenta, so it points between the two original directions, tilted toward whichever puck had more momentum.'
          },
          {
            label: 'Momentum conservation applies in 2D:',
            options: ['only if the collision is head-on', 'only for elastic collisions', 'always, regardless of collision type', 'only along the x-axis'],
            correctIndex: 2,
            explanation: 'Momentum conservation applies to all collisions (elastic, inelastic, perfectly inelastic) in all dimensions, as long as the net external force is zero.'
          }
        ]
      }
    },
    {
      id: 'co5-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — 2D Collisions** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A 2 kg puck moving at 3 m/s in $+x$ strikes a 1 kg puck at rest. Afterward the 1 kg puck has $y$-momentum $-1.2$ kg·m/s. The 2 kg puck\'s $y$-momentum afterward is:',
            options: [
              '$+1.2$ kg·m/s',
              '$-1.2$ kg·m/s',
              '$+0.6$ kg·m/s',
              '$+2.4$ kg·m/s'
            ],
            correctAnswer: 0,
            explanation: 'The initial $y$-momentum is zero, so the final $y$-momenta must cancel: the 2 kg puck has $+1.2$ kg·m/s. Dividing by the mass ratio gives 0.6, which is a velocity mistake, not a momentum one.'
          },
          {
            question: 'A 4 kg ball at 5 m/s (+x) hits a 4 kg ball at rest in a 2D elastic collision. After collision, Ball 1 moves at 3 m/s at some angle. What is the speed of Ball 2?',
            options: [
              '2 m/s',
              '3 m/s',
              '4 m/s',
              '5 m/s'
            ],
            correctAnswer: 2,
            explanation: 'KE conservation: $\\frac{1}{2}(4)(25) = \\frac{1}{2}(4)(9) + \\frac{1}{2}(4)(v_2^2)$. $25 = 9 + v_2^2$. $v_2 = 4$ m/s.'
          }
        ]
      }
    }
  ]
}
