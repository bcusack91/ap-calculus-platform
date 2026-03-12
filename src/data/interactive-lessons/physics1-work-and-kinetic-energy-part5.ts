export const physics1WorkAndKineticEnergyPart5Data = {
  topicSlug: 'work-and-kinetic-energy',
  sections: [
    {
      id: 'wk5-intro',
      type: 'text' as const,
      content: `
# ⚡ Power: $P = W/t = Fv$

**Part 5 of 7 — Work and Kinetic Energy**

Work tells us how much energy is transferred. **Power** tells us how **fast** that energy is transferred. A powerful engine doesn\'t necessarily do more work — it does the same work in **less time**.
      `
    },
    {
      id: 'wk5-definition',
      type: 'text' as const,
      content: `
## Defining Power

**Power** is the rate at which work is done (or energy is transferred):

$$P = \\frac{W}{t}$$

where:
- $P$ = power (Watts, W)
- $W$ = work done (Joules, J)
- $t$ = time interval (seconds, s)

### Units

$$1 \\text{ Watt} = 1 \\text{ J/s} = 1 \\text{ kg·m}^2/\\text{s}^3$$

### Common Units

| Unit | Value |
|------|-------|
| 1 Watt (W) | 1 J/s |
| 1 kilowatt (kW) | 1,000 W |
| 1 horsepower (hp) | 746 W |
| 1 kilowatt-hour (kWh) | $3.6 \\times 10^6$ J (energy, not power!) |

Note: A kilowatt-hour is a unit of **energy** (power × time), not power.
      `
    },
    {
      id: 'wk5-instantaneous-power',
      type: 'text' as const,
      content: `
## Instantaneous Power

For an object moving at velocity $v$ under a force $F$:

$$P = Fv\\cos\\theta$$

When the force is in the direction of motion ($\\theta = 0°$):

$$P = Fv$$

### Derivation

$$P = \\frac{W}{t} = \\frac{Fd\\cos\\theta}{t} = F\\left(\\frac{d}{t}\\right)\\cos\\theta = Fv\\cos\\theta$$

### Important Consequence

At constant power $P$, if speed increases, force must decrease:

$$F = \\frac{P}{v}$$

This is why cars have a **maximum speed** — as speed increases, the engine force decreases until it equals the drag force, and acceleration stops.
      `
    },
    {
      id: 'wk5-efficiency',
      type: 'text' as const,
      content: `
## Power and Efficiency

### Average vs. Instantaneous Power

- **Average power**: $P_{\\text{avg}} = W_{\\text{total}} / t_{\\text{total}}$
- **Instantaneous power**: $P = Fv$ at a specific moment

### Efficiency

In real systems, not all energy goes where we want. **Efficiency** measures this:

$$\\text{efficiency} = \\frac{P_{\\text{useful}}}{P_{\\text{total}}} \\times 100\\%$$

For example, if a motor uses 1000 W but only 800 W goes to lifting a load:

$$\\text{efficiency} = \\frac{800}{1000} \\times 100\\% = 80\\%$$
      `
    },
    {
      id: 'wk5-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Power Concepts** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Two motors lift identical loads the same height. Motor A takes 10 s, Motor B takes 5 s. Which statement is true?',
            options: [
              'Motor A does more work',
              'Motor B does more work',
              'Both do the same work; Motor B has more power',
              'Both do the same work; Motor A has more power'
            ],
            correctAnswer: 2,
            explanation: 'Both do the same work ($W = mgh$, same mass and height). But Motor B does it in half the time, so $P_B = W/5$ vs. $P_A = W/10$. Motor B has twice the power.'
          },
          {
            question: 'A car travels at constant velocity on a flat road against a drag force. If the car doubles its speed, the power required:',
            options: [
              'Stays the same',
              'Doubles',
              'Quadruples',
              'Depends on the mass'
            ],
            correctAnswer: 1,
            explanation: 'At constant velocity on a flat road, the engine force equals the drag force. If drag is constant (simplified model), $P = Fv$, so doubling $v$ doubles $P$. (In reality, drag increases with speed, making it even worse.)'
          },
          {
            question: 'A 1000 W motor runs for 1 hour. The energy delivered is:',
            options: [
              '1000 J',
              '60,000 J',
              '3,600,000 J',
              '1 kWh'
            ],
            correctAnswer: 2,
            explanation: '$W = Pt = 1000 \\times 3600 = 3{,}600{,}000$ J $= 3.6$ MJ $= 1$ kWh. Both C and D are correct numerically, but 3,600,000 J is the answer in Joules.'
          }
        ]
      }
    },
    {
      id: 'wk5-calculations',
      type: 'input-boxes' as const,
      content: `
**Power Calculations** 🧮

Use $g = 10$ m/s².

1) A crane lifts a 500 kg load 20 m in 25 s. What is the average power output (in W)?

2) A car engine provides 5000 W. If the car moves at a constant 25 m/s against friction, what is the friction force (in N)?

3) An elevator motor has an efficiency of 80%. To lift a 600 kg load at 2 m/s, what total (input) power is needed (in W)?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['4000', '200', '15000'],
        hint1: '$W = mgh = 500(10)(20) = 100{,}000$ J. $P = W/t = 100{,}000/25$.',
        hint2: 'At constant velocity: engine force = friction force. $P = Fv \\Rightarrow F = P/v = 5000/25$.',
        hint3: 'Useful power: $P_{\\text{useful}} = Fv = mgv = 600(10)(2) = 12{,}000$ W. $P_{\\text{total}} = P_{\\text{useful}} / 0.80$.',
        explanation: '1) $P = 100{,}000/25 = 4000$ W. 2) $F = 5000/25 = 200$ N. 3) $P_{\\text{total}} = 12{,}000/0.80 = 15{,}000$ W.'
      }
    },
    {
      id: 'wk5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Power Analysis** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A person climbs stairs. To double their power output, they should climb:',
            options: ['Twice as high', 'In half the time', 'With twice the mass', 'All of these work'],
            correctIndex: 3,
            explanation: '$P = mgh/t$. Doubling $h$, halving $t$, or doubling $m$ each doubles $P$.'
          },
          {
            label: 'Unit of energy commonly used in electricity bills:',
            options: ['Watt', 'Kilowatt', 'Kilowatt-hour', 'Joule per second'],
            correctIndex: 2,
            explanation: 'kWh = power × time = energy. 1 kWh = 3.6 × 10⁶ J. Watts and kilowatts are units of power.'
          },
          {
            label: 'At constant power, as a car accelerates, the force from the engine:',
            options: ['Increases', 'Decreases', 'Stays the same', 'Drops to zero'],
            correctIndex: 1,
            explanation: '$P = Fv \\Rightarrow F = P/v$. As $v$ increases at constant $P$, $F$ must decrease.'
          },
          {
            label: '1 horsepower equals approximately:',
            options: ['100 W', '500 W', '746 W', '1000 W'],
            correctIndex: 2,
            explanation: '1 hp = 746 W, approximately 3/4 of a kilowatt.'
          }
        ]
      }
    },
    {
      id: 'wk5-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Power** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A 70 kg person runs up a 5 m staircase in 4 s. Their average power output is approximately ($g = 10$ m/s²):',
            options: [
              '350 W',
              '700 W',
              '875 W',
              '1400 W'
            ],
            correctAnswer: 2,
            explanation: '$W = mgh = 70(10)(5) = 3500$ J. $P = W/t = 3500/4 = 875$ W.'
          },
          {
            question: 'A 2000 kg car accelerates on a flat road. At the instant the car moves at 20 m/s with an engine force of 3000 N, the instantaneous power is:',
            options: [
              '30 kW',
              '60 kW',
              '120 kW',
              '150 kW'
            ],
            correctAnswer: 1,
            explanation: '$P = Fv = 3000 \\times 20 = 60{,}000$ W $= 60$ kW.'
          }
        ]
      }
    }
  ]
}
