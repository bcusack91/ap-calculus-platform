export const physics1CollisionsPart4Data = {
  topicSlug: 'collisions',
  sections: [
    {
      id: 'co4-intro',
      type: 'text' as const,
      content: `
# 📐 Collisions Through the Center of Mass and Impulse Pairs

**Part 4 of 7 — Collisions**

During a collision the two objects push on each other hard for a very short time. Two powerful ideas let you reason about that moment without knowing the messy details of the force: the system's **center of mass keeps moving steadily**, and the two objects receive **equal and opposite impulses**.

**In this lesson you will learn:**
- How to find the center-of-mass velocity of a colliding system
- Why that velocity does not change during the collision
- Why the impulses on the two objects are equal and opposite
- How to read momentum–time graphs of a collision
      `
    },
    {
      id: 'co4-center-of-mass',
      type: 'text' as const,
      content: `
## The Center of Mass Keeps Moving

A system of colliding objects can be described by one center-of-mass velocity (EK 4.3.A.1):

$$v_{cm} = \\frac{m_1 v_1 + m_2 v_2}{m_1 + m_2} = \\frac{p_{\\text{total}}}{m_{\\text{total}}}$$

Because the forces between the objects are internal, they cannot change the total momentum. With no net external force, $v_{cm}$ is the **same before, during and after** the collision (EK 4.3.A.1.ii) — whether the collision is elastic, inelastic or perfectly inelastic.

### A Shortcut for Perfectly Inelastic Collisions

When the objects stick together, they move as one object, so their common final velocity simply **is** $v_{cm}$:

$$v_f = v_{cm} = \\frac{m_1 v_{1i} + m_2 v_{2i}}{m_1 + m_2}$$

### Example

A 3 kg cart at $+6$ m/s approaches a 1 kg cart at $-2$ m/s.

$$v_{cm} = \\frac{(3)(6) + (1)(-2)}{4} = \\frac{16}{4} = +4 \\text{ m/s}$$

If they stick, they move off at $+4$ m/s. If they bounce apart instead, they still have a center of mass moving at $+4$ m/s: one cart ends up faster than 4 m/s and the other slower.
      `
    },
    {
      id: 'co4-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Concept Check — Center of Mass in Collisions** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A 2 kg cart moving at $+5$ m/s collides with a 3 kg cart at rest on a frictionless track. The velocity of the system\'s center of mass after the collision is:',
            options: [
              '$+2.0$ m/s',
              '$+2.5$ m/s',
              '$+3.3$ m/s',
              '$+5.0$ m/s'
            ],
            correctAnswer: 0,
            explanation: '$v_{cm} = (2)(5)/(2 + 3) = +2.0$ m/s, and it stays that value because the collision forces are internal. Averaging the two speeds gives 2.5 m/s, and dividing by the 3 kg cart\'s mass alone gives 3.3 m/s.'
          },
          {
            question: 'Two carts collide on a frictionless track. Which statement about the system\'s center of mass is correct for every type of collision?',
            options: [
              'Its velocity drops to zero at the instant of greatest compression',
              'Its velocity is constant before, during and after the collision',
              'Its velocity is constant only if the collision is elastic',
              'It moves with the heavier cart throughout the collision'
            ],
            correctAnswer: 1,
            explanation: 'With no net external force the total momentum is constant, so $v_{cm} = p_{\\text{total}}/m_{\\text{total}}$ is constant. That holds for elastic and inelastic collisions alike; only the kinetic energy bookkeeping differs.'
          },
          {
            question: 'Two identical carts approach each other with equal speeds and collide. The center of mass of the two-cart system:',
            options: [
              'Moves in the direction of the cart that pushes harder',
              'Stays at rest the whole time',
              'Moves only after the carts bounce apart',
              'Is at rest only if the carts stick together'
            ],
            correctAnswer: 1,
            explanation: 'The momenta are equal and opposite, so the total momentum and $v_{cm}$ are zero throughout. Whether the carts stick or bounce, the center of mass stays put.'
          }
        ]
      }
    },
    {
      id: 'co4-impulse-pairs',
      type: 'text' as const,
      content: `
## Equal and Opposite Impulses

By Newton's third law, the force cart A exerts on cart B is equal and opposite to the force B exerts on A at every instant. Both forces act for the same time interval, so the impulses are equal and opposite (EK 4.3.A.3.i):

$$J_{A \\text{ on } B} = -J_{B \\text{ on } A} \\quad\\Rightarrow\\quad \\Delta p_B = -\\Delta p_A$$

### What This Means

- The **changes in momentum** of the two objects are equal in size and opposite in direction — even if one object is a truck and the other a fly.
- The **changes in velocity** are not equal: $\\Delta v = \\Delta p/m$, so the lighter object's velocity changes more.
- In an elastic collision the total kinetic energy is unchanged, but each object's kinetic energy can change (EK 4.4.A.2): one gains exactly what the other loses.

### Reading Momentum–Time Graphs

On a graph of each object's momentum versus time during a collision:
- The two curves are mirror images: whatever one gains, the other loses, so their sum is a flat line.
- The **slope** of each curve at any instant equals the net force on that object (EK 4.2.A.5). The slopes are equal in size and opposite in sign at every instant.
      `
    },
    {
      id: 'co4-calculations',
      type: 'input-boxes' as const,
      content: `
**Impulse Pair Practice** 🧮

A 1500 kg car moving at $+20$ m/s rear-ends a 1000 kg car moving at $+10$ m/s. Right after the collision the 1500 kg car moves at $+14$ m/s.

1) What is the change in momentum of the 1500 kg car? (in kg·m/s, include sign)

2) What is the change in momentum of the 1000 kg car? (in kg·m/s, include sign)

3) What is the 1000 kg car's velocity just after the collision? (in m/s)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['-9000', '9000', '19'],
        hint1: '$\\Delta p = m(v_f - v_i) = 1500(14 - 20)$',
        hint2: 'The impulses are equal and opposite, so $\\Delta p_{1000} = -\\Delta p_{1500}$.',
        hint3: '$v_f = v_i + \\Delta p/m = 10 + 9000/1000$',
        explanation: '1) $\\Delta p = 1500(14 - 20) = -9000$ kg·m/s. 2) By Newton\'s third law the 1000 kg car gains $+9000$ kg·m/s. 3) $v_f = 10 + 9000/1000 = 19$ m/s. Check: total momentum is $30\\,000 + 10\\,000 = 40\\,000$ before and $21\\,000 + 19\\,000 = 40\\,000$ after.'
      }
    },
    {
      id: 'co4-dropdown-review',
      type: 'dropdown-select' as const,
      content: `
**Impulse and Center of Mass Review** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A truck collides head-on with a small car. Compared with the car, the truck\'s change in momentum is:',
            options: ['larger', 'equal in size, opposite in direction', 'smaller', 'zero, because it barely slows'],
            correctIndex: 1,
            explanation: 'The forces are a Newton\'s third law pair acting for the same time, so the impulses, and therefore the momentum changes, are equal and opposite. The car\'s velocity changes more because its mass is smaller.'
          },
          {
            label: 'On a momentum–time graph of one cart during a collision, the slope at an instant equals:',
            options: ['the cart\'s velocity', 'the net force on the cart', 'the impulse on the cart', 'the cart\'s kinetic energy'],
            correctIndex: 1,
            explanation: 'Net force is the rate of change of momentum, $F = \\Delta p/\\Delta t$, so the slope of $p$ versus $t$ is the net force. The impulse is the total change in $p$, not the slope.'
          },
          {
            label: 'Two carts stick together after colliding. Their common final velocity equals:',
            options: ['the average of their speeds', 'the center-of-mass velocity', 'the heavier cart\'s initial speed', 'zero'],
            correctIndex: 1,
            explanation: 'Stuck together, they move as one object whose velocity is the center-of-mass velocity, $p_{\\text{total}}/m_{\\text{total}}$, which never changed during the collision.'
          }
        ]
      }
    },
    {
      id: 'co4-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Center of Mass and Impulse Pairs** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A 4 kg cart at $+3$ m/s and a 2 kg cart at $-3$ m/s collide on a frictionless track. Whatever kind of collision occurs, the center-of-mass velocity afterward is:',
            options: [
              '$+1$ m/s',
              '$0$ m/s',
              '$+2$ m/s',
              '$+3$ m/s'
            ],
            correctAnswer: 0,
            explanation: '$v_{cm} = [(4)(3) + (2)(-3)]/6 = 6/6 = +1$ m/s, and internal forces cannot change it. Averaging the velocities gives 0, which ignores the unequal masses.'
          },
          {
            question: 'In an elastic collision, cart A loses 6 J of kinetic energy. Cart B\'s kinetic energy:',
            options: [
              'Increases by 6 J',
              'Decreases by 6 J',
              'Stays the same, because the collision is elastic',
              'Increases by an amount set by the mass ratio'
            ],
            correctAnswer: 0,
            explanation: 'Elastic means the total kinetic energy of the system is unchanged, so the 6 J cart A loses must appear as cart B\'s gain. Individual kinetic energies can change in an elastic collision; only their sum is fixed.'
          }
        ]
      }
    }
  ]
}
