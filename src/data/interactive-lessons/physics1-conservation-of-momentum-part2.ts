export const physics1ConservationOfMomentumPart2Data = {
  topicSlug: 'conservation-of-momentum',
  sections: [
    {
      id: 'cm2-intro',
      type: 'text' as const,
      content: `
# 🎱 Two-Object 1D Momentum Problems

**Part 2 of 7 — Conservation of Momentum**

The most common AP Physics 1 momentum problems involve two objects interacting in one dimension. In this lesson, we\'ll master the systematic approach to solving these problems using conservation of momentum.
      `
    },
    {
      id: 'cm2-setup',
      type: 'text' as const,
      content: `
## The General 1D Setup

For two objects in one dimension:

$$m_1 v_{1i} + m_2 v_{2i} = m_1 v_{1f} + m_2 v_{2f}$$

### Problem-Solving Steps

1. **Draw a before/after diagram** — show velocities with arrows
2. **Choose positive direction** — typically the direction of the initially moving object
3. **Assign signed velocities** — positive or negative based on direction
4. **Write the momentum equation** — substitute known values
5. **Solve for the unknown**
6. **Interpret the sign** — positive = positive direction, negative = opposite

### Three Scenarios

| Type | Description | Unknowns |
|------|-------------|----------|
| **Collision (separate after)** | Objects bounce apart | Usually $v_{1f}$ or $v_{2f}$ |
| **Perfectly inelastic** | Objects stick together | $v_f$ (one velocity) |
| **Explosion / recoil** | Objects push apart from rest | Two velocities (need extra info) |
      `
    },
    {
      id: 'cm2-example1',
      type: 'text' as const,
      content: `
## Example 1: Head-On Collision

A 6 kg ball moving at $+5$ m/s collides head-on with a 4 kg ball moving at $-3$ m/s. After the collision, the 6 kg ball moves at $+1$ m/s. Find the velocity of the 4 kg ball.

**Before:** $p_i = (6)(+5) + (4)(-3) = 30 - 12 = +18$ kg·m/s

**After:** $p_f = (6)(+1) + (4)(v_{2f}) = 6 + 4v_{2f}$

**Conservation:** $18 = 6 + 4v_{2f}$

$$v_{2f} = \\frac{18 - 6}{4} = +3 \\text{ m/s}$$

The 4 kg ball reverses and moves at $+3$ m/s (in the positive direction).
      `
    },
    {
      id: 'cm2-example2',
      type: 'text' as const,
      content: `
## Example 2: Perfectly Inelastic Collision

A 2 kg block moving at $+8$ m/s collides with a 6 kg block at rest. They stick together. Find the final velocity.

$$m_1 v_{1i} + m_2 v_{2i} = (m_1 + m_2) v_f$$

$$(2)(8) + (6)(0) = (2 + 6)v_f$$

$$16 = 8v_f$$

$$v_f = +2 \\text{ m/s}$$

### Energy Check

- $KE_i = \\frac{1}{2}(2)(8)^2 = 64$ J
- $KE_f = \\frac{1}{2}(8)(2)^2 = 16$ J
- **Lost:** $64 - 16 = 48$ J (converted to heat, sound, deformation)

In a perfectly inelastic collision, kinetic energy is **always** lost (converted to other forms). This is the **maximum** KE loss for a given set of initial conditions.
      `
    },
    {
      id: 'cm2-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Concept Check — 1D Momentum Problems** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A 3 kg ball at +4 m/s hits a 1 kg ball at rest. After the collision, the 3 kg ball moves at +2 m/s. What is the velocity of the 1 kg ball?',
            options: [
              '+2 m/s',
              '+4 m/s',
              '+6 m/s',
              '+8 m/s'
            ],
            correctAnswer: 2,
            explanation: '$(3)(4) + (1)(0) = (3)(2) + (1)(v_2)$. $12 = 6 + v_2$. $v_2 = +6$ m/s.'
          },
          {
            question: 'Two objects of equal mass collide head-on with equal speeds and stick together. What is the final velocity?',
            options: [
              'The average of their speeds',
              'Zero',
              'Half the initial speed',
              'Twice the initial speed'
            ],
            correctAnswer: 1,
            explanation: '$m(+v) + m(-v) = 2m \\cdot v_f$. $0 = 2m \\cdot v_f$. $v_f = 0$. Equal masses at equal but opposite velocities have zero total momentum, so they stop.'
          },
          {
            question: 'A moving object collides with an identical stationary object and they stick together. The final speed is:',
            options: [
              'Equal to the initial speed',
              'Half the initial speed',
              'One-third the initial speed',
              'Zero'
            ],
            correctAnswer: 1,
            explanation: '$mv + m(0) = 2m \\cdot v_f$. $v_f = v/2$. The final speed is always half the initial speed when equal masses stick together.'
          }
        ]
      }
    },
    {
      id: 'cm2-calculations',
      type: 'input-boxes' as const,
      content: `
**Two-Object Problem Practice** 🧮

1) A 4 kg cart at +5 m/s collides with a 6 kg cart at −2 m/s. They stick together. What is the final velocity? (in m/s, to 1 decimal)

2) A 0.010 kg bullet at +400 m/s embeds in a 2.0 kg block at rest. What is the final speed of the block+bullet? (in m/s, to 1 decimal place)

3) A 8 kg ball at +3 m/s hits a 2 kg ball at +1 m/s. The 8 kg ball slows to +2 m/s. What is the final velocity of the 2 kg ball? (in m/s)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.8', '2.0', '5'],
        hint1: '$(4)(5) + (6)(-2) = (10)v_f$. $20 - 12 = 10v_f$.',
        hint2: '$(0.010)(400) + (2.0)(0) = (2.010)v_f$.',
        hint3: '$(8)(3) + (2)(1) = (8)(2) + (2)(v_2)$. $26 = 16 + 2v_2$.',
        explanation: '1) $8 = 10v_f$. $v_f = 0.8$ m/s. 2) $4 = 2.010 v_f$. $v_f = 4/2.010 \\approx 2.0$ m/s. 3) $26 = 16 + 2v_2$. $v_2 = 10/2 = 5$ m/s.'
      }
    },
    {
      id: 'cm2-dropdown-review',
      type: 'dropdown-select' as const,
      content: `
**Collision Types** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'When two objects stick together after colliding, it is a:',
            options: ['elastic collision', 'perfectly inelastic collision', 'explosion', 'superelastic collision'],
            correctIndex: 1,
            explanation: 'When objects stick together after colliding, it is a perfectly inelastic collision — the maximum kinetic energy is lost.'
          },
          {
            label: 'In collisions, momentum is:',
            options: ['always conserved', 'never conserved', 'conserved only in elastic collisions', 'conserved only if no external forces act'],
            correctIndex: 3,
            explanation: 'Momentum is conserved in ALL collisions (elastic or inelastic) as long as no net external force acts on the system.'
          },
          {
            label: 'In collisions, kinetic energy:',
            options: ['is always conserved', 'is never conserved', 'may or may not be conserved', 'increases'],
            correctIndex: 2,
            explanation: 'Kinetic energy is conserved only in elastic collisions. In inelastic collisions, some KE is converted to heat, sound, and deformation.'
          }
        ]
      }
    },
    {
      id: 'cm2-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — 1D Problems** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A 0.020 kg bullet traveling at 500 m/s embeds in a 5.0 kg wooden block at rest on a frictionless surface. What is the speed of the block + bullet?',
            options: [
              '0.5 m/s',
              '1.0 m/s',
              '2.0 m/s',
              '5.0 m/s'
            ],
            correctAnswer: 2,
            explanation: '$(0.020)(500) = (5.020)(v_f)$. $10 = 5.020 v_f$. $v_f = 10/5.020 \\approx 2.0$ m/s.'
          },
          {
            question: 'Object A (mass $2m$) at velocity $+v$ collides with Object B (mass $m$) at velocity $-v$. They stick together. The final velocity is:',
            options: [
              '$+v/3$',
              '$+v/2$',
              '$0$',
              '$-v/3$'
            ],
            correctAnswer: 0,
            explanation: '$(2m)(v) + (m)(-v) = (3m)v_f$. $2mv - mv = 3mv_f$. $mv = 3mv_f$. $v_f = v/3$ (positive direction).'
          }
        ]
      }
    }
  ]
}
