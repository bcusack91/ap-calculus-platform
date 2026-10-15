export const physics1ConservationOfMomentumPart4Data = {
  topicSlug: 'conservation-of-momentum',
  sections: [
    {
      id: 'cm4-intro',
      type: 'text' as const,
      content: `
# 🧭 2D Momentum Conservation

**Part 4 of 7 — Conservation of Momentum**

Momentum is a vector, and conservation applies to **each component independently**. When objects collide or interact in two dimensions, we apply conservation of momentum separately in the $x$ and $y$ directions.
      `
    },
    {
      id: 'cm4-2d-principle',
      type: 'text' as const,
      content: `
## 2D Conservation Equations

In two dimensions, the single vector equation:

$$\\vec{p}_i = \\vec{p}_f$$

becomes two scalar equations:

$$\\textbf{x-direction: } m_1 v_{1ix} + m_2 v_{2ix} = m_1 v_{1fx} + m_2 v_{2fx}$$

$$\\textbf{y-direction: } m_1 v_{1iy} + m_2 v_{2iy} = m_1 v_{1fy} + m_2 v_{2fy}$$

### Velocity Components

If an object moves at speed $v$ at angle $\\theta$ from the $x$-axis:

$$v_x = v\\cos\\theta, \\quad v_y = v\\sin\\theta$$

### Problem-Solving Strategy

1. Set up a coordinate system ($x$ and $y$ axes)
2. Break all velocities into components
3. Apply conservation of momentum in $x$ and $y$ separately
4. Solve the two equations (may need both simultaneously)
5. Find magnitude and direction of the final velocity if needed
      `
    },
    {
      id: 'cm4-example',
      type: 'text' as const,
      content: `
## Example: 2D Collision

A 2 kg ball moving at 5 m/s in the $+x$ direction collides with a 3 kg ball at rest. After the collision, the 2 kg ball moves at 3 m/s at 30° above the $x$-axis. Find the velocity of the 3 kg ball.

**x-components:**
$$p_{ix} = (2)(5) + (3)(0) = 10 \\text{ kg}\\cdot\\text{m/s}$$
$$p_{fx} = (2)(3\\cos 30°) + (3)(v_{2x})$$
$$10 = (2)(2.598) + 3v_{2x}$$
$$10 = 5.196 + 3v_{2x}$$
$$v_{2x} = 1.60 \\text{ m/s}$$

**y-components:**
$$p_{iy} = 0$$
$$p_{fy} = (2)(3\\sin 30°) + (3)(v_{2y})$$
$$0 = (2)(1.5) + 3v_{2y}$$
$$v_{2y} = -1.0 \\text{ m/s}$$

**Speed:** $v_2 = \\sqrt{1.60^2 + 1.0^2} = \\sqrt{3.56} = 1.89$ m/s

**Direction:** $\\theta = \\arctan(-1.0/1.60) = -32°$ (below $x$-axis)
      `
    },
    {
      id: 'cm4-2d-sticky',
      type: 'text' as const,
      content: `
## 2D Perfectly Inelastic Collision

When objects stick together in 2D:

$$m_1 \\vec{v}_1 + m_2 \\vec{v}_2 = (m_1 + m_2)\\vec{v}_f$$

### Example

Ball A (2 kg) moves at 4 m/s in the $+x$ direction. Ball B (3 kg) moves at 3 m/s in the $+y$ direction. They collide and stick.

**x:** $(2)(4) + (3)(0) = 5v_{fx}$ → $v_{fx} = 1.6$ m/s

**y:** $(2)(0) + (3)(3) = 5v_{fy}$ → $v_{fy} = 1.8$ m/s

**Speed:** $v_f = \\sqrt{1.6^2 + 1.8^2} = \\sqrt{5.80} = 2.41$ m/s

**Direction:** $\\theta = \\arctan(1.8/1.6) = 48.4°$ above the $x$-axis
      `
    },
    {
      id: 'cm4-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Concept Check — 2D Momentum** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In a 2D collision, momentum is conserved:',
            options: [
              'Only in the direction of initial motion',
              'Only in the x-direction',
              'Independently in both x and y directions',
              'Only if kinetic energy is conserved'
            ],
            correctAnswer: 2,
            explanation: 'Momentum conservation is a vector equation. It applies independently in each direction: $p_{ix} = p_{fx}$ AND $p_{iy} = p_{fy}$.'
          },
          {
            question: 'A ball moving in the +x direction collides with a stationary ball. After collision, one ball moves at 30° above the x-axis. The other ball must move:',
            options: [
              'At 30° below the x-axis',
              'Below the x-axis, but the angle depends on masses and speeds',
              'Straight along the x-axis',
              'At 60° above the x-axis'
            ],
            correctAnswer: 1,
            explanation: 'The $y$-component of total momentum was zero initially. So the $y$-momenta of the two balls after collision must cancel. The other ball moves below the $x$-axis, but the exact angle depends on the masses and speeds.'
          },
          {
            question: 'Object A (4 kg) at 3 m/s in +x collides with Object B (4 kg) at 3 m/s in +y. They stick together. The final speed is:',
            options: [
              '3.00 m/s',
              '1.50 m/s',
              '2.12 m/s',
              '4.24 m/s'
            ],
            correctAnswer: 2,
            explanation: 'x: $(4)(3) = 8v_{fx}$, $v_{fx} = 1.5$ m/s. y: $(4)(3) = 8v_{fy}$, $v_{fy} = 1.5$ m/s. Speed = $\\sqrt{1.5^2 + 1.5^2} = 1.5\\sqrt{2} \\approx 2.12$ m/s. Using 4 kg instead of the combined 8 kg gives 4.24 m/s, and reporting only one component gives 1.50 m/s.'
          }
        ]
      }
    },
    {
      id: 'cm4-calculations',
      type: 'input-boxes' as const,
      content: `
**2D Momentum Calculations** 🧮

1) A 5 kg ball at 6 m/s ($+x$) collides with a 5 kg ball at rest. They stick together. What is the $x$-component of the final velocity? (in m/s)

2) For the same collision, what is the final speed? (in m/s)

3) A 3 kg object at 4 m/s ($+x$) and a 1 kg object at 8 m/s ($+y$) collide and stick. What is the final speed? (in m/s, to 3 significant figures)
      `,
      exercise: {
        questions: [{ question: '1) x-component of final velocity (m/s)', answer: '3', acceptableAnswers: ['3', '3.0'] }, { question: '2) Final speed (m/s)', answer: '3', acceptableAnswers: ['3', '3.0'] }, { question: '3) Final speed (m/s)', answer: '3.61', acceptableAnswers: ['3.61', '3.6', '3.606'] }],
        hint1: '$(5)(6) = (10)v_{fx}$',
        hint2: 'Since there is no y-momentum, $v_{fy} = 0$. Speed = $v_{fx}$.',
        hint3: 'x: $(3)(4) = 4v_{fx}$, $v_{fx} = 3$. y: $(1)(8) = 4v_{fy}$, $v_{fy} = 2$. Speed = $\\sqrt{9 + 4}$.',
        explanation: '1) $v_{fx} = 30/10 = 3$ m/s. 2) No initial $y$-momentum, so $v_{fy} = 0$. Speed = 3 m/s. 3) $v_{fx} = 12/4 = 3$ m/s, $v_{fy} = 8/4 = 2$ m/s. Speed $= \\sqrt{9+4} = \\sqrt{13} \\approx 3.61$ m/s.'
      }
    },
    {
      id: 'cm4-dropdown-review',
      type: 'dropdown-select' as const,
      content: `
**2D Momentum Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'In 2D, momentum conservation provides:',
            options: ['one equation', 'two independent equations', 'three equations', 'four equations'],
            correctIndex: 1,
            explanation: 'In 2D, momentum conservation gives two independent equations: one for the x-component and one for the y-component.'
          },
          {
            label: 'To handle momentum in 2D, you should:',
            options: ['add the speeds of the objects', 'add the velocity vectors, ignoring mass', 'multiply total mass by total speed', 'use x and y components'],
            correctIndex: 3,
            explanation: 'To handle 2D momentum, break velocities into x and y components, then apply conservation in each direction independently.'
          },
          {
            label: 'If the initial total y-momentum is zero, the final total y-momentum is:',
            options: ['equal to the final x-momentum', 'still zero', 'nonzero, since the pieces move apart vertically', 'the sum of the pieces\' y-speeds'],
            correctIndex: 1,
            explanation: 'Total y-momentum is conserved. If it starts at zero, it is still zero afterward: the y-momenta of the pieces after the collision must cancel, even though the pieces themselves move up and down.'
          }
        ]
      }
    },
    {
      id: 'cm4-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — 2D Conservation** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Two objects of equal mass collide elastically. Object 1 was moving in the +x direction; Object 2 was at rest. After collision, Object 1 moves at 45° above the x-axis. At what angle does Object 2 move?',
            options: [
              '45° above the x-axis, alongside Object 1',
              '90° below the x-axis (straight down)',
              '45° below the x-axis',
              'Straight along the +x direction'
            ],
            correctAnswer: 2,
            explanation: 'The total $y$-momentum was zero, so if Object 1 gains positive $y$-momentum, Object 2 must gain equal negative $y$-momentum and move below the x-axis. For an elastic collision of equal masses with the target at rest, the two outgoing velocities are 90° apart, so Object 2 moves at $90° - 45° = 45°$ below the x-axis.'
          },
          {
            question: 'A firework at rest explodes into 3 equal pieces. Two pieces fly off at 90° to each other at equal speeds $v$. The third piece moves at speed:',
            options: [
              '$v$',
              '$v\\sqrt{2}$',
              '$2v$',
              '$v/\\sqrt{2}$'
            ],
            correctAnswer: 1,
            explanation: 'Let the two pieces move in +x and +y with momentum $mv$ each. The third piece must have $p_x = -mv$ and $p_y = -mv$. Its speed = $\\sqrt{v^2 + v^2} = v\\sqrt{2}$.'
          }
        ]
      }
    }
  ]
}
