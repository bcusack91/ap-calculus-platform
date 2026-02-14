export const physics1CollisionsPart1Data = {
  topicSlug: 'collisions',
  sections: [
    {
      id: 'co1-intro',
      type: 'text' as const,
      content: `
# 💎 Elastic Collisions

**Part 1 of 7 — Collisions**

In an **elastic collision**, both momentum AND kinetic energy are conserved. These are special collisions where no energy is converted to heat, sound, or deformation. While perfectly elastic collisions are an idealization, collisions between hard objects like billiard balls and atomic/molecular collisions come very close.
      `
    },
    {
      id: 'co1-definition',
      type: 'text' as const,
      content: `
## What Makes a Collision Elastic?

An **elastic collision** satisfies TWO conservation laws simultaneously:

### 1. Conservation of Momentum (always)

$$m_1 v_{1i} + m_2 v_{2i} = m_1 v_{1f} + m_2 v_{2f}$$

### 2. Conservation of Kinetic Energy (elastic only)

$$\\frac{1}{2}m_1 v_{1i}^2 + \\frac{1}{2}m_2 v_{2i}^2 = \\frac{1}{2}m_1 v_{1f}^2 + \\frac{1}{2}m_2 v_{2f}^2$$

### Comparison of Collision Types

| Type | Momentum | Kinetic Energy | Objects After |
|------|----------|---------------|---------------|
| **Elastic** | Conserved ✅ | Conserved ✅ | Separate |
| **Inelastic** | Conserved ✅ | NOT conserved ❌ | Separate |
| **Perfectly inelastic** | Conserved ✅ | Maximum loss ❌ | Stick together |
      `
    },
    {
      id: 'co1-special-cases',
      type: 'text' as const,
      content: `
## Special Cases of Elastic Collisions

### Case 1: Equal Masses ($m_1 = m_2$), One at Rest

The moving object **stops** and the stationary object moves with the original velocity:

$$v_{1f} = 0, \\quad v_{2f} = v_{1i}$$

This is seen clearly in Newton\'s cradle!

### Case 2: Heavy Hits Light ($m_1 \\gg m_2$), Light at Rest

The heavy object barely changes speed; the light object flies off at nearly $2v_{1i}$:

$$v_{1f} \\approx v_{1i}, \\quad v_{2f} \\approx 2v_{1i}$$

### Case 3: Light Hits Heavy ($m_1 \\ll m_2$), Heavy at Rest

The light object bounces back at nearly its original speed; the heavy object barely moves:

$$v_{1f} \\approx -v_{1i}, \\quad v_{2f} \\approx 0$$

Think of a tennis ball bouncing off a bowling ball.
      `
    },
    {
      id: 'co1-examples',
      type: 'text' as const,
      content: `
## Real-World Examples

### Nearly Elastic

- **Billiard balls** — very hard, minimal deformation
- **Atomic collisions** — ideal gas molecules
- **Newton\'s cradle** — steel balls transfer energy with minimal loss
- **Superball bouncing** — coefficient of restitution near 1

### NOT Elastic

- **Car crashes** — significant deformation (perfectly inelastic if cars lock together)
- **Ball of clay** — sticks on impact
- **Football tackle** — players move together
- **Meteor impact** — enormous energy converted to heat and crater formation

### How to Tell

If you can calculate $KE_i$ and $KE_f$ and they\'re equal → elastic. If $KE_f < KE_i$ → inelastic.
      `
    },
    {
      id: 'co1-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Concept Check — Elastic Collisions** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In an elastic collision between two objects of equal mass (one initially at rest), the first object:',
            options: [
              'Continues forward at half speed',
              'Bounces backward at the original speed',
              'Stops completely',
              'Continues forward at the original speed'
            ],
            correctAnswer: 2,
            explanation: 'In an elastic collision between equal masses with one at rest, the moving object stops and transfers ALL of its momentum and kinetic energy to the other. This is the Newton\'s cradle effect.'
          },
          {
            question: 'Which quantity is conserved in ALL types of collisions (elastic, inelastic, perfectly inelastic)?',
            options: [
              'Kinetic energy',
              'Total mechanical energy',
              'Momentum',
              'Speed'
            ],
            correctAnswer: 2,
            explanation: 'Momentum is conserved in all collisions (as long as no net external force acts). Kinetic energy is conserved only in elastic collisions.'
          },
          {
            question: 'A ball bounces off a wall elastically. The ball\'s kinetic energy:',
            options: [
              'Doubles',
              'Stays the same',
              'Drops to zero',
              'Is transferred to the wall'
            ],
            correctAnswer: 1,
            explanation: 'In an elastic collision, kinetic energy is conserved. The ball bounces back with the same speed (assuming the wall has infinite mass), so its KE is unchanged.'
          }
        ]
      }
    },
    {
      id: 'co1-calculations',
      type: 'input-boxes' as const,
      content: `
**Elastic Collision Checks** 🧮

A 2 kg ball at +6 m/s hits a 2 kg ball at rest. After collision: Ball 1 stops, Ball 2 moves at +6 m/s.

1) What is $KE_i$? (in J)

2) What is $KE_f$? (in J)

3) Is this collision elastic? (type "yes" or "no")
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['36', '36', 'yes'],
        hint1: '$KE_i = \\frac{1}{2}(2)(6)^2 + \\frac{1}{2}(2)(0)^2$',
        hint2: '$KE_f = \\frac{1}{2}(2)(0)^2 + \\frac{1}{2}(2)(6)^2$',
        hint3: 'Compare $KE_i$ and $KE_f$. If equal, it is elastic.',
        explanation: '1) $KE_i = \\frac{1}{2}(2)(36) = 36$ J. 2) $KE_f = \\frac{1}{2}(2)(36) = 36$ J. 3) Yes — $KE_i = KE_f = 36$ J, so kinetic energy is conserved and the collision is elastic.'
      }
    },
    {
      id: 'co1-dropdown-review',
      type: 'dropdown-select' as const,
      content: `
**Elastic Collision Properties** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'In an elastic collision, the conserved quantities are:',
            options: ['momentum only', 'kinetic energy only', 'both momentum and kinetic energy', 'neither'],
            correctIndex: 2,
            explanation: 'Elastic collisions conserve BOTH momentum and kinetic energy. This double conservation is what distinguishes them from inelastic collisions.'
          },
          {
            label: 'In a head-on elastic collision between equal masses (one at rest), the moving object:',
            options: ['continues at the same speed', 'stops completely', 'bounces back', 'moves at half speed'],
            correctIndex: 1,
            explanation: 'In an elastic collision between equal masses with one at rest, the moving object stops and the stationary one takes all the velocity.'
          },
          {
            label: 'A collision between two billiard balls is best classified as:',
            options: ['elastic', 'inelastic', 'perfectly inelastic', 'superelastic'],
            correctIndex: 0,
            explanation: 'Billiard ball collisions are nearly elastic — very little kinetic energy is lost to heat or sound because the balls are very hard.'
          }
        ]
      }
    },
    {
      id: 'co1-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Elastic Collisions** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A 1 kg ball at 10 m/s hits a 1000 kg block at rest elastically. After collision, the ball\'s approximate velocity is:',
            options: [
              '+10 m/s',
              '0 m/s',
              '−10 m/s',
              '+5 m/s'
            ],
            correctAnswer: 2,
            explanation: 'Light hitting heavy (at rest): the light object bounces back at nearly its original speed. $v_{1f} \\approx -v_{1i} = -10$ m/s. The heavy block barely moves.'
          },
          {
            question: 'In Newton\'s cradle, when one ball swings in and hits, exactly one ball flies out the other side. This demonstrates conservation of:',
            options: [
              'Momentum only',
              'Energy only',
              'Both momentum and kinetic energy',
              'Neither — it\'s just how the device works'
            ],
            correctAnswer: 2,
            explanation: 'Both conservation laws must be satisfied simultaneously. Conservation of momentum alone would allow 2 balls at half speed, but conservation of KE requires one ball at the original speed. Only the elastic solution satisfies both.'
          }
        ]
      }
    }
  ]
}
