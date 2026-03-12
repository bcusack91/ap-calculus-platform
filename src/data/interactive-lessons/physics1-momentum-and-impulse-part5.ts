export const physics1MomentumAndImpulsePart5Data = {
  topicSlug: 'momentum-and-impulse',
  sections: [
    {
      id: 'mi5-intro',
      type: 'text' as const,
      content: `
# 🛡️ Applications: Airbags, Crumple Zones & Safety

**Part 5 of 7 — Momentum and Impulse**

The impulse-momentum theorem has life-saving applications! When a car crashes, the driver\'s momentum must change from $mv$ to zero. The impulse ($\\Delta p$) is **fixed** by physics. But we can control **how** that impulse is delivered by manipulating force and time.

$$F_{\\text{avg}} = \\frac{\\Delta p}{\\Delta t}$$

Since $\\Delta p$ is fixed: **increasing $\\Delta t$ decreases $F_{\\text{avg}}$** — and that saves lives.
      `
    },
    {
      id: 'mi5-key-principle',
      type: 'text' as const,
      content: `
## The Key Principle: Increase Time to Reduce Force

For a given change in momentum, force and time are inversely related:

$$F_{\\text{avg}} \\times \\Delta t = \\Delta p = \\text{constant}$$

| Strategy | How It Works | $\\Delta t$ | $F_{\\text{avg}}$ |
|----------|-------------|-----------|-----------------|
| **Airbags** | Cushion spreads deceleration over longer time | ↑ Increases | ↓ Decreases |
| **Crumple zones** | Car body collapses gradually | ↑ Increases | ↓ Decreases |
| **Seatbelts** | Stretchy webbing extends stopping time | ↑ Increases | ↓ Decreases |
| **Helmets** | Foam liner crushes slowly | ↑ Increases | ↓ Decreases |
| **Bending knees on landing** | Extends deceleration distance/time | ↑ Increases | ↓ Decreases |

### Example: Car Crash

A 70 kg driver at 30 m/s (67 mph) must stop. $\\Delta p = -2100$ kg·m/s.

| Scenario | $\\Delta t$ | $F_{\\text{avg}}$ |
|----------|-----------|-----------------|
| Hit dashboard (no airbag) | 0.02 s | 105,000 N (lethal!) |
| Airbag deployment | 0.15 s | 14,000 N (survivable) |
| Crumple zone + airbag + seatbelt | 0.30 s | 7,000 N (much safer) |
      `
    },
    {
      id: 'mi5-real-world',
      type: 'text' as const,
      content: `
## Real-World Applications

### Catching a Ball

When you catch a fast baseball, you instinctively **pull your hand back** — this increases the time of contact, reducing the force on your hand.

- Stiff catch: $\\Delta t \\approx 0.01$ s → $F$ is very large (ouch!)
- "Soft" catch: $\\Delta t \\approx 0.1$ s → $F$ is 10× smaller

### Egg Drop Competitions

The goal: land an egg without breaking it. Strategy: increase the stopping time using padding, parachutes, or collapsible structures.

### Boxing

A boxer "rolls with the punch" — moving the head backward upon impact extends the contact time and reduces the peak force. Standing rigid allows the full force to transfer in a shorter time.

### Bungee Jumping

The elastic cord stretches over several seconds, converting the jumper\'s momentum to zero over a long time rather than instantly (which would be like hitting the ground).
      `
    },
    {
      id: 'mi5-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Concept Check — Safety Applications** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'An airbag reduces injury primarily by:',
            options: [
              'Reducing the impulse delivered to the occupant',
              'Reducing the change in momentum',
              'Increasing the stopping time to reduce the average force',
              'Absorbing kinetic energy through friction'
            ],
            correctAnswer: 2,
            explanation: 'The change in momentum (and impulse) is fixed — the occupant must stop regardless. The airbag increases the time over which this happens, which reduces the average force: $F = \\Delta p / \\Delta t$.'
          },
          {
            question: 'Two cars crash at the same speed. Car A has a crumple zone that collapses over 0.5 m; Car B is rigid and stops in 0.05 m. How do the average forces compare?',
            options: [
              'Car A experiences about 10× more force',
              'Car B experiences about 10× more force',
              'The forces are equal',
              'Cannot compare without knowing mass'
            ],
            correctAnswer: 1,
            explanation: 'The crumple zone extends the stopping distance (and time) by roughly 10×. Since $\\Delta p$ is the same, extending the time by 10× reduces the force by 10×. Car B (rigid) experiences about 10× more force.'
          },
          {
            question: 'When catching a ball, a catcher moves their hand backward. This:',
            options: [
              'Increases the impulse delivered to the hand',
              'Decreases the ball\'s change in momentum',
              'Reduces the average force by increasing contact time',
              'Makes the ball lighter'
            ],
            correctAnswer: 2,
            explanation: 'Moving the hand back increases the time over which the ball decelerates. Since $J = \\Delta p$ is fixed, a longer $\\Delta t$ means a smaller average force on the hand.'
          }
        ]
      }
    },
    {
      id: 'mi5-calculations',
      type: 'input-boxes' as const,
      content: `
**Safety Physics Calculations** 🧮

1) A 60 kg driver traveling at 20 m/s crashes. The airbag increases the stopping time to 0.2 s. What is the average force on the driver? (in N)

2) Without the airbag, the driver hits the steering wheel and stops in 0.01 s. What is the average force now? (in N)

3) What is the ratio of force without airbag to force with airbag? (give as a whole number)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['6000', '120000', '20'],
        hint1: '$F = m|\\Delta v|/\\Delta t = (60)(20)/(0.2)$',
        hint2: '$F = m|\\Delta v|/\\Delta t = (60)(20)/(0.01)$',
        hint3: 'Ratio = $120000/6000$',
        explanation: '1) $F = (60)(20)/(0.2) = 6{,}000$ N. 2) $F = (60)(20)/(0.01) = 120{,}000$ N. 3) Ratio = $120{,}000/6{,}000 = 20$. The airbag reduces the force by a factor of 20!'
      }
    },
    {
      id: 'mi5-dropdown-review',
      type: 'dropdown-select' as const,
      content: `
**Safety Design Principles** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Safety devices like airbags and crumple zones work by:',
            options: ['decrease stopping time', 'increase stopping time', 'increase momentum', 'decrease mass'],
            correctIndex: 1,
            explanation: 'Crumple zones, airbags, and seatbelts all work by increasing the stopping time, which reduces the average force for the same impulse.'
          },
          {
            label: 'Whether you stop suddenly or gradually, your body receives:',
            options: ['the same impulse', 'less impulse', 'more impulse', 'no impulse'],
            correctIndex: 0,
            explanation: 'The impulse ($\\Delta p$) is determined by the change in velocity and mass — it is the same regardless of how fast or slow you stop. Safety devices change the force, not the impulse.'
          },
          {
            label: 'The primary goal of all collision safety devices is to reduce the:',
            options: ['momentum', 'velocity', 'average force', 'kinetic energy'],
            correctIndex: 2,
            explanation: 'All safety devices aim to reduce the average force on the person. This is achieved by extending the stopping time while keeping the impulse constant.'
          }
        ]
      }
    },
    {
      id: 'mi5-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Safety Applications** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A gymnast bends their knees upon landing from a jump. Compared to landing stiff-legged, the gymnast experiences:',
            options: [
              'Greater impulse and greater force',
              'Same impulse but less force',
              'Less impulse and less force',
              'Same impulse and same force'
            ],
            correctAnswer: 1,
            explanation: 'The impulse is the same (same $\\Delta p$ — the gymnast must stop either way). Bending the knees increases the stopping time, which reduces the average force: $F = \\Delta p / \\Delta t$.'
          },
          {
            question: 'Modern cars are designed to crumple in a crash rather than remain rigid because:',
            options: [
              'Crumpling absorbs all kinetic energy as heat',
              'Crumpling reduces the car\'s momentum',
              'Crumpling increases the collision time, reducing peak force on passengers',
              'Rigid cars would bounce and cause a second collision'
            ],
            correctAnswer: 2,
            explanation: 'The primary purpose of crumple zones is to increase the time over which the car decelerates. Since $F = \\Delta p / \\Delta t$, a longer $\\Delta t$ means a smaller force on the occupants.'
          }
        ]
      }
    }
  ]
}
