export const physics1CollisionsPart2Data = {
  topicSlug: 'collisions',
  sections: [
    {
      id: 'co2-intro',
      type: 'text' as const,
      content: `
# 🧲 Perfectly Inelastic Collisions

**Part 2 of 7 — Collisions**

A **perfectly inelastic collision** is one where the colliding objects **stick together** and move as a single unit afterward. These are the simplest collision problems to solve because there\'s only one unknown (the final velocity), but they also represent the **maximum possible kinetic energy loss**.
      `
    },
    {
      id: 'co2-definition',
      type: 'text' as const,
      content: `
## The Physics

In a perfectly inelastic collision:

$$m_1 v_{1i} + m_2 v_{2i} = (m_1 + m_2) v_f$$

Solving for $v_f$:

$$v_f = \\frac{m_1 v_{1i} + m_2 v_{2i}}{m_1 + m_2}$$

### Properties

| Property | Detail |
|----------|--------|
| **Momentum** | Conserved ✅ |
| **Kinetic energy** | NOT conserved ❌ (maximum loss) |
| **Objects after** | Stuck together (one final velocity) |
| **Lost KE goes to** | Heat, sound, deformation |
| **Unknowns** | Only 1 ($v_f$) |
      `
    },
    {
      id: 'co2-energy-loss',
      type: 'text' as const,
      content: `
## Kinetic Energy Loss

The kinetic energy lost in a perfectly inelastic collision:

$$\\Delta KE = KE_i - KE_f$$

### Special Case: Target at Rest

For $m_1$ hitting stationary $m_2$:

$$v_f = \\frac{m_1}{m_1 + m_2} v_{1i}$$

$$KE_f = \\frac{1}{2}(m_1 + m_2)v_f^2 = \\frac{m_1^2}{2(m_1 + m_2)} v_{1i}^2$$

$$\\text{Fraction retained} = \\frac{KE_f}{KE_i} = \\frac{m_1}{m_1 + m_2}$$

$$\\text{Fraction lost} = \\frac{m_2}{m_1 + m_2}$$

### Example

A 2 kg ball hits a 8 kg ball at rest:

- Fraction of KE retained: $2/(2+8) = 0.20$ or 20%
- Fraction of KE lost: $8/(2+8) = 0.80$ or **80% lost!**

### Maximum Loss

When $m_2 \\gg m_1$: nearly ALL KE is lost (object stops).

When $m_1 = m_2$: exactly **50%** of KE is lost.
      `
    },
    {
      id: 'co2-head-on',
      type: 'text' as const,
      content: `
## Head-On Perfectly Inelastic Collisions

When objects move toward each other:

$$v_f = \\frac{m_1 v_{1i} + m_2 v_{2i}}{m_1 + m_2}$$

The sign of $v_f$ tells you which direction the combined mass moves.

### Example

Car A (1200 kg, +20 m/s) hits Car B (800 kg, −15 m/s) head-on:

$$v_f = \\frac{(1200)(20) + (800)(-15)}{1200 + 800} = \\frac{24000 - 12000}{2000} = \\frac{12000}{2000} = +6 \\text{ m/s}$$

The wreckage moves in the direction of Car A (the heavier/faster car).

### Energy Lost

$$KE_i = \\frac{1}{2}(1200)(400) + \\frac{1}{2}(800)(225) = 240{,}000 + 90{,}000 = 330{,}000 \\text{ J}$$

$$KE_f = \\frac{1}{2}(2000)(36) = 36{,}000 \\text{ J}$$

$$\\text{Lost} = 330{,}000 - 36{,}000 = 294{,}000 \\text{ J} \\approx 89\\% \\text{ of initial KE}$$
      `
    },
    {
      id: 'co2-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Concept Check — Perfectly Inelastic Collisions** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In a perfectly inelastic collision, what is always true?',
            options: [
              'Kinetic energy is conserved',
              'The objects stick together',
              'The objects bounce apart',
              'Momentum is not conserved'
            ],
            correctAnswer: 1,
            explanation: 'By definition, a perfectly inelastic collision is one where the objects stick together and move as a single unit. Momentum is still conserved, but KE is not.'
          },
          {
            question: 'A 1 kg ball at 10 m/s hits a 9 kg ball at rest and sticks. The final speed is:',
            options: [
              '10 m/s',
              '5 m/s',
              '1 m/s',
              '0.1 m/s'
            ],
            correctAnswer: 2,
            explanation: '$v_f = \\frac{(1)(10)}{1 + 9} = \\frac{10}{10} = 1$ m/s. The final speed is dramatically reduced because the total mass is 10× the original.'
          },
          {
            question: 'In the collision above, what fraction of the kinetic energy is lost?',
            options: [
              '10%',
              '50%',
              '80%',
              '90%'
            ],
            correctAnswer: 3,
            explanation: '$KE_i = \\frac{1}{2}(1)(100) = 50$ J. $KE_f = \\frac{1}{2}(10)(1) = 5$ J. Fraction lost = $(50-5)/50 = 0.90 = 90\\%$. Alternatively: fraction lost = $m_2/(m_1+m_2) = 9/10 = 90\\%$.'
          }
        ]
      }
    },
    {
      id: 'co2-calculations',
      type: 'input-boxes' as const,
      content: `
**Perfectly Inelastic Collision Practice** 🧮

1) A 3 kg cart at +8 m/s collides with a 5 kg cart at rest and sticks. What is the final velocity? (in m/s)

2) What is the kinetic energy lost in this collision? (in J)

3) Two identical 4 kg balls moving toward each other at +6 m/s and −2 m/s collide and stick. What is the final velocity? (in m/s)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['3', '60', '2'],
        hint1: '$v_f = (3 \\times 8)/(3 + 5) = 24/8$',
        hint2: '$KE_i = \\frac{1}{2}(3)(64) = 96$ J. $KE_f = \\frac{1}{2}(8)(9) = 36$ J. Lost = $96 - 36$',
        hint3: '$v_f = [(4)(6) + (4)(-2)]/(4+4) = (24-8)/8$',
        explanation: '1) $v_f = 24/8 = 3$ m/s. 2) $KE_i = 96$ J, $KE_f = 36$ J. Lost = 60 J. 3) $v_f = 16/8 = 2$ m/s.'
      }
    },
    {
      id: 'co2-dropdown-review',
      type: 'dropdown-select' as const,
      content: `
**Perfectly Inelastic Collision Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'In a perfectly inelastic collision, kinetic energy is:',
            options: ['conserved', 'maximally lost', 'doubled', 'zero'],
            correctIndex: 1,
            explanation: 'In a perfectly inelastic collision, kinetic energy loss is maximized (for a given set of initial conditions). Objects sticking together is the "worst case" for energy loss.'
          },
          {
            label: 'The lost kinetic energy is converted to:',
            options: ['heat and sound', 'more momentum', 'potential energy only', 'it disappears'],
            correctIndex: 0,
            explanation: 'The lost kinetic energy is converted to thermal energy (heat), sound, and permanent deformation of the objects. Energy is conserved overall — it just changes form.'
          },
          {
            label: 'A perfectly inelastic collision problem has:',
            options: ['one unknown (v_f)', 'two unknowns', 'three unknowns', 'no unknowns'],
            correctIndex: 0,
            explanation: 'Since both objects move together with the same final velocity $v_f$, there is only one unknown, making these the simplest collision problems to solve.'
          }
        ]
      }
    },
    {
      id: 'co2-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Perfectly Inelastic** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Two objects of equal mass collide head-on at equal speeds and stick together. The final kinetic energy is:',
            options: [
              'Equal to the initial KE',
              'Half the initial KE',
              'Zero',
              'Double the initial KE'
            ],
            correctAnswer: 2,
            explanation: 'Equal masses at equal but opposite velocities: $v_f = [m(v) + m(-v)]/(2m) = 0$. All kinetic energy is converted to heat, sound, and deformation. $KE_f = 0$.'
          },
          {
            question: 'A 0.020 kg bullet at 500 m/s embeds in a 5 kg block at rest. The percentage of kinetic energy retained is approximately:',
            options: [
              '0.4%',
              '4%',
              '40%',
              '99.6%'
            ],
            correctAnswer: 0,
            explanation: 'Fraction retained = $m_1/(m_1+m_2) = 0.020/5.020 \\approx 0.004 = 0.4\\%$. Nearly all (99.6%) of the bullet\'s kinetic energy is converted to heat and deformation!'
          }
        ]
      }
    }
  ]
}
