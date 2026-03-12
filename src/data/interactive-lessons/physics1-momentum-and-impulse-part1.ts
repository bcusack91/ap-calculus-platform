export const physics1MomentumAndImpulsePart1Data = {
  topicSlug: 'momentum-and-impulse',
  sections: [
    {
      id: 'mi1-intro',
      type: 'text' as const,
      content: `
# 🚀 Momentum — The Quantity of Motion

**Part 1 of 7 — Momentum and Impulse**

In everyday language, we say a speeding truck has "more momentum" than a bicycle. In physics, **momentum** has a precise mathematical definition that makes it one of the most powerful concepts in mechanics.

Momentum connects an object\'s mass and velocity into a single vector quantity that is central to understanding collisions, explosions, and all interactions between objects.
      `
    },
    {
      id: 'mi1-definition',
      type: 'text' as const,
      content: `
## Defining Momentum

The **linear momentum** of an object is defined as:

$$\\vec{p} = m\\vec{v}$$

where:
- $\\vec{p}$ = momentum (kg·m/s)
- $m$ = mass (kg)
- $\\vec{v}$ = velocity (m/s)

### Key Properties

| Property | Description |
|----------|-------------|
| **Vector quantity** | Same direction as velocity $\\vec{v}$ |
| **SI unit** | kg·m/s (no special name) |
| **Sign convention** | Positive/negative indicates direction (in 1D) |
| **Depends on frame** | Different observers may measure different momenta |

### Example

A 0.145 kg baseball moving at 40 m/s:

$$p = (0.145)(40) = 5.8 \\text{ kg·m/s}$$

A 1200 kg car moving at 0.005 m/s:

$$p = (1200)(0.005) = 6.0 \\text{ kg·m/s}$$

The slow-moving car has *more* momentum than the fast baseball!
      `
    },
    {
      id: 'mi1-vector-nature',
      type: 'text' as const,
      content: `
## Momentum as a Vector

Because momentum is a vector, **direction matters**:

- In 1D: positive momentum means motion in the positive direction; negative means the opposite direction
- In 2D: momentum has components $p_x = mv_x$ and $p_y = mv_y$

### Total Momentum of a System

For a system of multiple objects, the **total momentum** is the vector sum:

$$\\vec{p}_{\\text{total}} = \\vec{p}_1 + \\vec{p}_2 + \\cdots = m_1\\vec{v}_1 + m_2\\vec{v}_2 + \\cdots$$

### Example

Object A (2 kg) moves right at +3 m/s; Object B (4 kg) moves left at −1 m/s:

$$p_{\\text{total}} = (2)(+3) + (4)(-1) = 6 - 4 = +2 \\text{ kg·m/s (to the right)}$$
      `
    },
    {
      id: 'mi1-momentum-vs-ke',
      type: 'text' as const,
      content: `
## Momentum vs. Kinetic Energy

Students often confuse momentum and kinetic energy. They are related but distinct:

| | Momentum ($\\vec{p}$) | Kinetic Energy ($KE$) |
|---|---|---|
| **Formula** | $m\\vec{v}$ | $\\frac{1}{2}mv^2$ |
| **Type** | Vector | Scalar |
| **Can be negative?** | Yes | No |
| **Can be zero for moving object?** | Only if $m = 0$ | Only if $v = 0$ |
| **Depends on $v$ as** | Linear | Quadratic |

### Important Relationship

$$KE = \\frac{p^2}{2m}$$

This means doubling velocity:
- **Doubles** momentum
- **Quadruples** kinetic energy
      `
    },
    {
      id: 'mi1-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Concept Check — Momentum Basics** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A truck has 100 times the mass of a bicycle. If both have the same momentum, how do their speeds compare?',
            options: [
              'The truck moves 100 times faster',
              'The bicycle moves 100 times faster',
              'They move at the same speed',
              'The truck moves 10 times faster'
            ],
            correctAnswer: 1,
            explanation: 'If $m_{\\text{truck}} v_{\\text{truck}} = m_{\\text{bike}} v_{\\text{bike}}$ and $m_{\\text{truck}} = 100 m_{\\text{bike}}$, then $v_{\\text{bike}} = 100 v_{\\text{truck}}$. The bicycle must move 100 times faster to have the same momentum.'
          },
          {
            question: 'Two objects have the same kinetic energy. Object A has twice the mass of Object B. What is the ratio $p_A / p_B$?',
            options: [
              '1',
              '$\\sqrt{2}$',
              '2',
              '4'
            ],
            correctAnswer: 1,
            explanation: 'From $KE = p^2/(2m)$: if $KE_A = KE_B$, then $p_A^2/(2m_A) = p_B^2/(2m_B)$. With $m_A = 2m_B$: $p_A^2 = 2p_B^2 \\cdot 2 = 4p_B^2 \\cdot (m_A/m_B)$... Actually, $p_A^2/(2 \\cdot 2m_B) = p_B^2/(2m_B)$, so $p_A^2 = 2p_B^2$, giving $p_A/p_B = \\sqrt{2}$.'
          },
          {
            question: 'Object A (3 kg) moves at +4 m/s and Object B (2 kg) moves at −6 m/s. What is the total momentum of the system?',
            options: [
              '+24 kg·m/s',
              '0 kg·m/s',
              '−24 kg·m/s',
              '+12 kg·m/s'
            ],
            correctAnswer: 1,
            explanation: '$p_{\\text{total}} = m_A v_A + m_B v_B = (3)(+4) + (2)(-6) = 12 - 12 = 0$ kg·m/s. The momenta are equal in magnitude but opposite in direction, so they cancel.'
          }
        ]
      }
    },
    {
      id: 'mi1-calculations',
      type: 'input-boxes' as const,
      content: `
**Momentum Calculations** 🧮

1) A 0.50 kg ball moves at 12 m/s. What is its momentum? (in kg·m/s)

2) A 2000 kg car has a momentum of 30000 kg·m/s. What is its speed? (in m/s)

3) Object A (5 kg, +6 m/s) and Object B (3 kg, −4 m/s). What is the total momentum? (in kg·m/s, include sign)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['6', '15', '18'],
        hint1: '$p = mv = (0.50)(12)$',
        hint2: '$v = p/m = 30000/2000$',
        hint3: '$p_{\\text{total}} = (5)(6) + (3)(-4) = 30 - 12$',
        explanation: '1) $p = mv = (0.50)(12) = 6$ kg·m/s. 2) $v = p/m = 30000/2000 = 15$ m/s. 3) $p_{\\text{total}} = (5)(+6) + (3)(-4) = 30 - 12 = +18$ kg·m/s.'
      }
    },
    {
      id: 'mi1-dropdown-review',
      type: 'dropdown-select' as const,
      content: `
**Classify Momentum Properties** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Momentum is classified as a:',
            options: ['scalar', 'vector', 'dimensionless', 'constant'],
            correctIndex: 1,
            explanation: 'Momentum is a vector quantity — it has both magnitude and direction (same direction as velocity).'
          },
          {
            label: 'The SI unit of momentum is:',
            options: ['kg·m/s²', 'kg·m/s', 'N·m', 'J'],
            correctIndex: 1,
            explanation: 'Momentum $p = mv$ has units of kg·m/s. Note that kg·m/s² is the unit of force (Newtons).'
          },
          {
            label: 'If you double an object\'s velocity, its momentum:',
            options: ['doubles', 'quadruples', 'halves', 'stays the same'],
            correctIndex: 0,
            explanation: 'Since $p = mv$, doubling velocity doubles momentum (linear relationship). Kinetic energy would quadruple.'
          }
        ]
      }
    },
    {
      id: 'mi1-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Momentum** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A 70 kg sprinter runs at 10 m/s. A 7000 kg truck is parked. Which has more momentum?',
            options: [
              'The truck (more mass)',
              'The sprinter',
              'They have equal momentum',
              'Cannot be determined'
            ],
            correctAnswer: 1,
            explanation: 'Sprinter: $p = (70)(10) = 700$ kg·m/s. Truck: $p = (7000)(0) = 0$ kg·m/s. A parked object has zero momentum regardless of its mass.'
          },
          {
            question: 'If you triple both the mass and velocity of an object, its momentum increases by a factor of:',
            options: [
              '3',
              '6',
              '9',
              '27'
            ],
            correctAnswer: 2,
            explanation: '$p\' = (3m)(3v) = 9mv = 9p$. Momentum is proportional to the product $mv$, so tripling both gives a factor of $3 \\times 3 = 9$.'
          }
        ]
      }
    }
  ]
}
