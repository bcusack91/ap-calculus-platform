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

$$1 \\text{ Watt} = 1 \\text{ J/s} = 1 \\text{ kg}\\cdot\\text{m}^2/\\text{s}^3$$

### Common Units

| Unit | Value |
|------|-------|
| 1 Watt (W) | 1 J/s |
| 1 kilowatt (kW) | 1,000 W |
| 1 megawatt (MW) | 1,000,000 W |

Note: the watt measures a **rate**. Energy and work are measured in joules, and $W = Pt$ converts between them.
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
## Average, Instantaneous and Negative Power

### Average vs. Instantaneous Power

- **Average power**: $P_{\\text{avg}} = W_{\\text{total}} / t_{\\text{total}}$
- **Instantaneous power**: $P = Fv$ at a specific moment

### Power Can Be Negative

Work can be negative, so power can be too. A force that points **opposite** the velocity ($\\theta = 180°$) removes energy: kinetic friction on a sliding box delivers $P = -f_k v$. A motor lifting a load at constant speed delivers $P = mgv$ while gravity delivers $-mgv$ to the load, so the net power on the load is zero and its kinetic energy stays constant.
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
              'Twice as much',
              'Four times as much',
              'Depends on the mass'
            ],
            correctAnswer: 1,
            explanation: 'At constant velocity on a flat road, the engine force equals the drag force. If drag is constant (simplified model), $P = Fv$, so doubling $v$ doubles $P$. (In reality, drag increases with speed, making it even worse.)'
          },
          {
            question: 'A 1000 W motor runs for 1 hour. The energy delivered is:',
            options: [
              '$1.0 \\times 10^{3}$ J',
              '$6.0 \\times 10^{4}$ J',
              '$3.6 \\times 10^{6}$ J',
              '$3.6 \\times 10^{5}$ J'
            ],
            correctAnswer: 2,
            explanation: 'Convert the time to seconds: 1 hour = 3600 s. Then $W = Pt = (1000\\text{ W})(3600\\text{ s}) = 3.6 \\times 10^{6}$ J. Using 1 s gives $1.0 \\times 10^{3}$ J, treating an hour as 60 s gives $6.0 \\times 10^{4}$ J, and $3.6 \\times 10^{5}$ J is off by a factor of ten.'
          }
        ]
      }
    },
    {
      id: 'wk5-calculations',
      type: 'input-boxes' as const,
      content: `
**Power Calculations** 🧮

Use $g = 10$ $m/s^{2}$.

1) A crane lifts a 500 kg load 20 m in 25 s. What is the average power output (in W)?

2) A car engine provides 5000 W. If the car moves at a constant 25 m/s against friction, what is the friction force (in N)?

3) A motor lifts a 600 kg load straight up at a constant 2 m/s. What power does the motor deliver to the load (in W)?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['4000', '200', '12000'],
        hint1: '$W = mgh = 500(10)(20) = 100{,}000$ J. $P = W/t = 100{,}000/25$.',
        hint2: 'At constant velocity: engine force = friction force. $P = Fv \\Rightarrow F = P/v = 5000/25$.',
        hint3: 'At constant speed the motor\'s force equals the weight: $P = Fv = mgv = 600(10)(2)$.',
        explanation: '1) $P = 100{,}000/25 = 4000$ W. 2) $F = 5000/25 = 200$ N. 3) $P = mgv = 600(10)(2) = 12{,}000$ W.'
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
            options: ['Twice as high in the same time', 'Twice as high in twice the time', 'At the same height in twice the time', 'With half the mass in the same time'],
            correctIndex: 0,
            explanation: '$P = mgh/t$. Doubling $h$, halving $t$, or doubling $m$ each doubles $P$, but doubling $h$ and $t$ together leaves $P$ unchanged.'
          },
          {
            label: 'The power delivered by kinetic friction on a sliding box is:',
            options: ['positive, adding energy', 'negative, removing energy', 'zero, since friction is internal', 'equal to the box\'s kinetic energy'],
            correctIndex: 1,
            explanation: 'Kinetic friction points opposite the box\'s velocity, so $P = f_k v\\cos 180° < 0$: it removes kinetic energy and turns it into thermal energy.'
          },
          {
            label: 'At constant power, as a car accelerates, the force from the engine:',
            options: ['Increases with speed', 'Decreases as the speed rises', 'Stays constant', 'Drops to zero at once'],
            correctIndex: 1,
            explanation: '$P = Fv \\Rightarrow F = P/v$. As $v$ increases at constant $P$, $F$ must decrease.'
          },
          {
            label: 'A force does 600 J of work in 3.0 s. The average power is:',
            options: ['200 W', '1800 W', '600 W', '0.005 W'],
            correctIndex: 0,
            explanation: '$P = W/t = 600/3.0 = 200$ W. Multiplying instead gives 1800 W, and $t/W$ gives 0.005 W.'
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
            question: 'A 70 kg person runs up a 5 m staircase in 4 s. Their average power output is approximately ($g = 10$ $m/s^{2}$):',
            options: [
              '87.5 W',
              '3500 W',
              '875 W',
              '14000 W'
            ],
            correctAnswer: 2,
            explanation: '$W = mgh = 70(10)(5) = 3500$ J. $P = W/t = 3500/4 = 875$ W. Forgetting $g$ gives 87.5 W, not dividing by the time gives 3500, and multiplying by the time gives 14,000.'
          },
          {
            question: 'A 2000 kg car accelerates on a flat road. At the instant the car moves at 20 m/s with an engine force of 3000 N, the instantaneous power is:',
            options: [
              '30 kW',
              '60 kW',
              '0.15 kW',
              '400 kW'
            ],
            correctAnswer: 1,
            explanation: '$P = Fv = 3000 \\times 20 = 60{,}000$ W $= 60$ kW. Dividing instead ($F/v$) gives 0.15 kW, a stray $\\frac{1}{2}$ gives 30 kW, and $\\frac{1}{2}mv^2 = 400$ kJ is the kinetic energy, not a power.'
          }
        ]
      }
    }
  ]
}
