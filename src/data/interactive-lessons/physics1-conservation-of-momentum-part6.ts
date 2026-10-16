export const physics1ConservationOfMomentumPart6Data = {
  topicSlug: 'conservation-of-momentum',
  sections: [
    {
      id: 'cm6-intro',
      type: 'text' as const,
      content: `
# 🔧 Problem-Solving Workshop

**Part 6 of 7 — Conservation of Momentum**

Let\'s practice solving a variety of momentum conservation problems — from basic 1D collisions to recoil, 2D, and problems with external forces. This workshop focuses on building your problem-solving confidence for the AP exam.
      `
    },
    {
      id: 'cm6-strategy-review',
      type: 'text' as const,
      content: `
## Problem-Solving Checklist

Before writing any equation, always ask:

1. ✅ **Is the system isolated?** (No net external force → momentum conserved)
2. ✅ **What is the system?** (Choose objects wisely to eliminate external forces)
3. ✅ **Is this 1D or 2D?** (How many equations do I need?)
4. ✅ **Do objects stick together?** (Perfectly inelastic → one final velocity)
5. ✅ **Is energy also needed?** (Elastic collision → both $p$ and $KE$ conserved)
6. ✅ **What are my knowns and unknowns?** (List them before solving)

### The Master Equation (1D)

$$m_1 v_{1i} + m_2 v_{2i} = m_1 v_{1f} + m_2 v_{2f}$$

For perfectly inelastic: replace right side with $(m_1 + m_2)v_f$
      `
    },
    {
      id: 'cm6-problem1',
      type: 'multiple-choice' as const,
      content: `
**Problem 1: Ballistic Pendulum** 🎯

A 0.010 kg bullet embeds in a 2.0 kg wooden block hanging from a string. The block+bullet swings upward to a height of 0.20 m. What was the bullet\'s speed? (Use $g = 10$ $m/s^{2}$)

*Hint: Use two steps — conservation of momentum during collision, then conservation of energy during swing.*
      `,
      exercise: {
        questions: [
          {
            question: 'What was the bullet\'s initial speed?',
            options: [
              '200 m/s',
              '402 m/s',
              '600 m/s',
              '804 m/s'
            ],
            correctAnswer: 1,
            explanation: 'Step 1 — Energy conservation (swing): $\\frac{1}{2}(m_1+m_2)v_f^2 = (m_1+m_2)gh$. $v_f = \\sqrt{2gh} = \\sqrt{2(10)(0.20)} = 2$ m/s. Step 2 — Momentum conservation (collision): $(0.010)(v_b) = (2.010)(2)$. $v_b = 4.02/0.010 = 402$ m/s.'
          }
        ]
      }
    },
    {
      id: 'cm6-problem2',
      type: 'input-boxes' as const,
      content: `
**Problem 2: Head-On Collision** 🚗

Car A (1500 kg) travels east at 20 m/s. Car B (2000 kg) travels west at 15 m/s. They collide and lock bumpers.

1) What is the total initial momentum of the system? (in kg·m/s, take east as positive)

2) What is the final velocity of the wreckage? (in m/s, to 3 significant figures, include sign)

3) In which direction does the wreckage move? (type "east", "west", or "neither")
      `,
      exercise: {
        questions: [{ question: '1) Total initial momentum (kg·m/s)', answer: '0', acceptableAnswers: ['0', '0.0'] }, { question: '2) Final velocity of the wreckage (m/s)', answer: '0.00', acceptableAnswers: ['0.00', '0', '0.0'] }, { question: '3) Direction of the wreckage', answer: 'neither', acceptableAnswers: ['neither', 'none', 'no direction', 'at rest', 'rest', 'stationary', 'it does not move', 'not moving'] }],
        hint1: '$p_i = (1500)(20) + (2000)(-15) = 30000 - 30000$',
        hint2: '$v_f = p_i / (m_1 + m_2) = 0/3500$',
        hint3: 'If $v_f = 0$, the wreckage doesn\'t move in either direction.',
        explanation: '1) $p_i = 30{,}000 - 30{,}000 = 0$ kg·m/s. 2) $v_f = 0/3500 = 0.00$ m/s. 3) Neither: the wreckage doesn\'t move, because the two momenta are exactly equal and opposite.'
      }
    },
    {
      id: 'cm6-problem3',
      type: 'multiple-choice' as const,
      content: `
**Problem 3: Recoil in Space** 🚀

An astronaut (80 kg) floats at rest in space holding a 4.0 kg oxygen tank. She throws the tank straight away from her at 5.0 m/s, measured by an observer at rest.
      `,
      exercise: {
        questions: [
          {
            question: 'What is the astronaut\'s speed after the throw?',
            options: [
              '0.24 m/s',
              '0.25 m/s',
              '1.1 m/s',
              '5.0 m/s'
            ],
            correctAnswer: 1,
            explanation: 'The astronaut and tank start at rest, so the total momentum stays zero: $0 = (80)v_a + (4.0)(5.0)$, giving $v_a = -20/80 = -0.25$ m/s, a speed of 0.25 m/s opposite the tank. Dividing by 84 kg (astronaut plus tank) gives 0.24 m/s, setting the two kinetic energies equal (energy is not conserved in a throw) gives about 1.1 m/s, and 5.0 m/s assumes both move equally fast.'
          },
          {
            question: 'Compared with the tank, the astronaut\'s kinetic energy just after the throw is:',
            options: [
              '1/20 as large',
              '20 times as large',
              'the same',
              '1/400 as large'
            ],
            correctAnswer: 0,
            explanation: 'Both have momentum of magnitude $p = 20$ kg·m/s. Since $KE = p^2/(2m)$, the kinetic energies are inversely proportional to the masses: $KE_a/KE_{\\text{tank}} = 4.0/80 = 1/20$. Check: $\\frac{1}{2}(80)(0.25)^2 = 2.5$ J and $\\frac{1}{2}(4.0)(5.0)^2 = 50$ J.'
          }
        ]
      }
    },
    {
      id: 'cm6-problem4',
      type: 'input-boxes' as const,
      content: `
**Problem 4: Mixed Practice** 📝

1) A 6 kg block at +4 m/s collides with a 2 kg block at −8 m/s. They stick together. What is the final velocity? (in m/s)

2) A 0.15 kg ball at +20 m/s collides with a 0.15 kg ball at −10 m/s. After collision, the first ball moves at +5 m/s. What is the velocity of the second ball? (in m/s, include sign)

3) A 50 kg cannon at rest fires a 5 kg ball at 100 m/s. What is the cannon\'s recoil speed? (in m/s)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['1', '5', '10'],
        hint1: '$(6)(4) + (2)(-8) = (8)v_f$. $24 - 16 = 8v_f$.',
        hint2: '$(0.15)(20) + (0.15)(-10) = (0.15)(5) + (0.15)(v_2)$. $3 - 1.5 = 0.75 + 0.15v_2$.',
        hint3: '$0 = (50)(v_c) + (5)(100)$. $v_c = -500/50$.',
        explanation: '1) $8 = 8v_f$. $v_f = 1$ m/s. 2) $1.5 = 0.75 + 0.15v_2$. $v_2 = 0.75/0.15 = +5$ m/s. 3) $v_c = -500/50 = -10$ m/s. Recoil speed = 10 m/s.'
      }
    },
    {
      id: 'cm6-dropdown-review',
      type: 'dropdown-select' as const,
      content: `
**Problem Type Identification** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A ballistic pendulum involves a:',
            options: ['elastic collision', 'perfectly inelastic collision', 'recoil/explosion', 'external force problem'],
            correctIndex: 1,
            explanation: 'A ballistic pendulum involves a bullet embedding in a block — objects stick together, making it a perfectly inelastic collision.'
          },
          {
            label: 'To solve a ballistic pendulum, you use:',
            options: ['momentum only', 'energy only', 'momentum first, then energy', 'energy first, then momentum'],
            correctIndex: 2,
            explanation: 'In a ballistic pendulum: use momentum conservation for the collision (to find velocity after impact), then energy conservation for the swing (to find height or vice versa).'
          },
          {
            label: 'During the collision in a ballistic pendulum:',
            options: ['the block alone conserves momentum', 'momentum is conserved for bullet + block', 'kinetic energy is conserved', 'the bullet keeps all its momentum'],
            correctIndex: 1,
            explanation: 'During the collision, the bullet + block system is approximately isolated (gravity impulse is negligible during the brief collision). Momentum is conserved for the system, not for individual objects.'
          }
        ]
      }
    },
    {
      id: 'cm6-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Problem Solving** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'In the ballistic pendulum, why can\'t we use conservation of kinetic energy during the collision?',
            options: [
              'The collision is too brief for its energy to be tracked',
              'Gravity does negative work on the block during the impact',
              'The bullet embeds, so KE becomes heat and deformation',
              'Momentum is not conserved, so energy cannot be conserved either'
            ],
            correctAnswer: 2,
            explanation: 'The bullet embeds in the block (perfectly inelastic collision). Kinetic energy is not conserved — it is converted to heat, sound, and deformation. We use momentum conservation for the collision and energy conservation for the subsequent swing.'
          },
          {
            question: 'A 3 kg ball at +5 m/s and a 2 kg ball at −5 m/s collide and stick. The final velocity is:',
            options: [
              '+1 m/s',
              '−1 m/s',
              '+5 m/s',
              '0 m/s'
            ],
            correctAnswer: 0,
            explanation: '$(3)(5) + (2)(-5) = (5)v_f$. $15 - 10 = 5v_f$. $v_f = +1$ m/s. The heavier ball "wins" and the system moves in its direction.'
          }
        ]
      }
    }
  ]
}
