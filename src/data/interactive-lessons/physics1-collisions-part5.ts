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
4. You have 2 (or 3) equations for the unknowns
      `
    },
    {
      id: 'co5-equal-mass-elastic',
      type: 'text' as const,
      content: `
## Special Case: Equal Masses, Elastic, Target at Rest

This is a famous result in physics:

> In a 2D elastic collision between equal masses (one at rest), the two objects always move at **90° to each other** after the collision.

### Proof (Summary)

From momentum conservation (vectors):
$$m\\vec{v}_{1i} = m\\vec{v}_{1f} + m\\vec{v}_{2f}$$
$$\\vec{v}_{1i} = \\vec{v}_{1f} + \\vec{v}_{2f}$$

Squaring both sides:
$$v_{1i}^2 = v_{1f}^2 + v_{2f}^2 + 2\\vec{v}_{1f} \\cdot \\vec{v}_{2f}$$

From KE conservation:
$$v_{1i}^2 = v_{1f}^2 + v_{2f}^2$$

Comparing: $2\\vec{v}_{1f} \\cdot \\vec{v}_{2f} = 0$

Since neither velocity is zero, $\\vec{v}_{1f} \\perp \\vec{v}_{2f}$ — they move at right angles!

### Applications

This is seen in:
- Billiards: cue ball and target ball go at 90° (if equal mass and elastic)
- Nuclear physics: proton-proton scattering at 90°
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
            question: 'In a 2D elastic collision between equal masses (target at rest), the angle between the final velocity vectors is:',
            options: [
              '0° (same direction)',
              '45°',
              '90°',
              '180° (opposite directions)'
            ],
            correctAnswer: 2,
            explanation: 'For equal masses in an elastic collision (target at rest), the two objects always move at 90° to each other after the collision. This is a fundamental result proved using both momentum and KE conservation.'
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
        correctAnswers: ['3.75', '1.5', '4.04', '3.750', '1.50', '4.040'],
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
            label: 'In a 2D elastic collision between equal masses (one initially at rest), the angle between the outgoing velocities is:',
            options: ['30°', '60°', '90°', '120°'],
            correctIndex: 2,
            explanation: 'In a 2D elastic collision between equal masses (one at rest), the angle between the outgoing velocity vectors is always 90°.'
          },
          {
            label: 'Momentum conservation applies in 2D:',
            options: ['only if the collision is head-on', 'only for elastic collisions', 'always, regardless of collision type', 'never in 2D'],
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
            question: 'Two billiard balls (equal mass) undergo an elastic glancing collision. Ball 1 deflects at 25° above the x-axis. Ball 2 deflects at:',
            options: [
              '25° below the x-axis',
              '65° below the x-axis',
              '90° from Ball 1, which is 65° below the x-axis',
              '45° below the x-axis'
            ],
            correctAnswer: 2,
            explanation: 'For equal-mass elastic collisions: the angle between the two outgoing velocities is 90°. If Ball 1 goes at 25° above, Ball 2 goes at $90° - 25° = 65°$ below the x-axis.'
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
