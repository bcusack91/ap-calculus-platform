export const physics1ConservationOfMomentumPart3Data = {
  topicSlug: 'conservation-of-momentum',
  sections: [
    {
      id: 'cm3-intro',
      type: 'text' as const,
      content: `
# 💣 Recoil Problems (Explosion Type)

**Part 3 of 7 — Conservation of Momentum**

In **recoil** (or "explosion") problems, objects that start together push apart. Internal forces propel them in opposite directions, but the **total momentum of the system is conserved**.

Examples: a gun firing a bullet, fireworks exploding, skaters pushing off each other, a nucleus undergoing radioactive decay.
      `
    },
    {
      id: 'cm3-recoil-principle',
      type: 'text' as const,
      content: `
## The Recoil Principle

When the system starts at rest, the total initial momentum is zero:

$$p_i = 0$$

By conservation of momentum:

$$p_f = m_1 v_1 + m_2 v_2 = 0$$

$$m_1 v_1 = -m_2 v_2$$

### What This Means

- The two objects always move in **opposite directions**
- The **lighter** object moves **faster**
- The ratio of speeds is inverse to the ratio of masses:

$$\\frac{|v_1|}{|v_2|} = \\frac{m_2}{m_1}$$

### Energy Source

In explosions/recoil, where does the kinetic energy come from?
- Chemical energy (gunpowder, fuel)
- Elastic potential energy (spring, muscle contraction)
- Nuclear energy (radioactive decay)

Internal energy is converted to kinetic energy, but **momentum remains zero**.
      `
    },
    {
      id: 'cm3-examples',
      type: 'text' as const,
      content: `
## Classic Examples

### Gun Recoil

A 5 kg rifle fires a 0.010 kg bullet at 800 m/s. Find the recoil velocity of the rifle.

$$0 = (5)(v_r) + (0.010)(800)$$
$$0 = 5v_r + 8$$
$$v_r = -1.6 \\text{ m/s}$$

The rifle recoils at 1.6 m/s — much slower than the bullet because it is much heavier.

### Two Skaters

Skater A (50 kg) and Skater B (75 kg) push off from rest.

$$0 = (50)(v_A) + (75)(v_B)$$
$$v_A = -\\frac{75}{50} v_B = -1.5 v_B$$

If Skater B moves at $+2$ m/s: $v_A = -3$ m/s.

### Energy Analysis

$$KE_{\\text{total}} = \\frac{1}{2}(50)(3)^2 + \\frac{1}{2}(75)(2)^2 = 225 + 150 = 375 \\text{ J}$$

This 375 J came from the chemical energy in the skaters\' muscles.
      `
    },
    {
      id: 'cm3-three-pieces',
      type: 'text' as const,
      content: `
## Multi-Piece Explosions

When an object breaks into more than two pieces, we apply conservation of momentum in each direction.

### Example: Three-Piece Explosion

A 6 kg object at rest explodes into three pieces:
- Piece 1 (2 kg): $v_x = +3$ m/s, $v_y = 0$
- Piece 2 (1 kg): $v_x = 0$, $v_y = +6$ m/s
- Piece 3 (3 kg): Find $v_x$ and $v_y$

**x-direction:** $0 = (2)(3) + (1)(0) + (3)(v_{3x})$
$$v_{3x} = -2 \\text{ m/s}$$

**y-direction:** $0 = (2)(0) + (1)(6) + (3)(v_{3y})$
$$v_{3y} = -2 \\text{ m/s}$$

Piece 3 moves at $(-2, -2)$ m/s, with speed $|v_3| = \\sqrt{4 + 4} = 2\\sqrt{2} \\approx 2.83$ m/s.
      `
    },
    {
      id: 'cm3-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Concept Check — Recoil Problems** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A cannon (mass $M$) fires a ball (mass $m$) at speed $v$. The cannon recoils at speed:',
            options: [
              '$v$',
              '$mv/M$',
              '$Mv/m$',
              '$(M+m)v/M$'
            ],
            correctAnswer: 1,
            explanation: 'From $0 = Mv_{\\text{cannon}} + mv$: $v_{\\text{cannon}} = -mv/M$. The magnitude is $mv/M$.'
          },
          {
            question: 'In a recoil problem (starting from rest), the total kinetic energy after the explosion is:',
            options: [
              'Zero (momentum is zero)',
              'Negative',
              'Positive (energy came from an internal source)',
              'Equal to the total momentum'
            ],
            correctAnswer: 2,
            explanation: 'Zero total momentum does NOT mean zero kinetic energy. KE is $\\frac{1}{2}mv^2$ (always positive for each piece). The energy came from internal stored energy (chemical, elastic, etc.).'
          },
          {
            question: 'A 4 kg object at rest explodes into two equal pieces. One piece moves at +10 m/s. The other moves at:',
            options: [
              '+10 m/s',
              '−10 m/s',
              '0 m/s',
              '−5 m/s'
            ],
            correctAnswer: 1,
            explanation: 'Equal masses means equal and opposite velocities. $(2)(10) + (2)(v_2) = 0$. $v_2 = -10$ m/s.'
          }
        ]
      }
    },
    {
      id: 'cm3-calculations',
      type: 'input-boxes' as const,
      content: `
**Recoil Calculations** 🧮

1) A 3.0 kg rifle fires a 0.020 kg bullet at 600 m/s. What is the recoil speed of the rifle? (in m/s)

2) An 80 kg astronaut in space throws a 2 kg tool at 10 m/s. What is the astronaut\'s recoil speed? (in m/s)

3) A 10 kg object at rest explodes into two pieces. Piece A (4 kg) moves at +15 m/s. What is the speed of piece B? (in m/s)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['4', '0.25', '10'],
        hint1: '$0 = (3.0)(v_r) + (0.020)(600)$. $v_r = -12/3.0$.',
        hint2: '$0 = (80)(v_a) + (2)(10)$. $v_a = -20/80$.',
        hint3: '$0 = (4)(15) + (6)(v_B)$. $v_B = -60/6$. Take magnitude.',
        explanation: '1) $v_r = 12/3.0 = 4$ m/s. 2) $v_a = 20/80 = 0.25$ m/s. 3) $v_B = -60/6 = -10$ m/s. Speed = 10 m/s.'
      }
    },
    {
      id: 'cm3-dropdown-review',
      type: 'dropdown-select' as const,
      content: `
**Recoil Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'In a recoil from rest, the lighter object moves at:',
            options: ['the same speed', 'a higher speed', 'a lower speed', 'cannot be determined'],
            correctIndex: 1,
            explanation: 'In recoil from rest, $m_1 v_1 = m_2 v_2$ (magnitudes). The lighter object ($m_1 < m_2$) must have the larger speed to compensate.'
          },
          {
            label: 'After an explosion from rest, the total kinetic energy:',
            options: ['is zero', 'is positive', 'is negative', 'equals the total momentum'],
            correctIndex: 1,
            explanation: 'Total kinetic energy after an explosion is positive (each piece has $KE > 0$). This energy came from internal stored energy, not from momentum.'
          },
          {
            label: 'In a recoil or explosion, the separation is caused by:',
            options: ['internal forces only', 'external forces only', 'both internal and external forces', 'no forces at all'],
            correctIndex: 0,
            explanation: 'In a recoil/explosion, only internal forces cause the separation. No external force acts (or net external force is zero), which is why momentum is conserved.'
          }
        ]
      }
    },
    {
      id: 'cm3-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Recoil** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'An astronaut (90 kg) floating in space throws a 0.5 kg wrench at 18 m/s. How fast does the astronaut drift backward?',
            options: [
              '0.1 m/s',
              '0.5 m/s',
              '9 m/s',
              '18 m/s'
            ],
            correctAnswer: 0,
            explanation: '$0 = (90)(v_a) + (0.5)(18)$. $v_a = -9/90 = -0.1$ m/s. The astronaut drifts at 0.1 m/s — very slowly because of their large mass.'
          },
          {
            question: 'A firecracker at rest explodes into two pieces of mass ratio 1:3. The ratio of their kinetic energies ($KE_1 : KE_2$) is:',
            options: [
              '1:3',
              '3:1',
              '1:9',
              '9:1'
            ],
            correctAnswer: 1,
            explanation: 'From $mv = $ const: $v_1/v_2 = m_2/m_1 = 3$. $KE_1/KE_2 = (\\frac{1}{2}m_1 v_1^2)/(\\frac{1}{2}m_2 v_2^2) = (m_1/m_2)(v_1/v_2)^2 = (1/3)(9) = 3$. The lighter piece gets MORE KE.'
          }
        ]
      }
    }
  ]
}
