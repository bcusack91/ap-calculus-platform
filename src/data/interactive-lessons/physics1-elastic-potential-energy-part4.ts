export const physics1ElasticPotentialEnergyPart4Data = {
  topicSlug: 'elastic-potential-energy',
  sections: [
    {
      id: 'ep4-intro',
      type: 'text' as const,
      content: `
# 🏋️ Spring-Mass Systems

**Part 4 of 7 — Elastic Potential Energy**

A mass attached to a spring is one of the most fundamental systems in physics. When displaced and released, the mass oscillates back and forth. Understanding the forces and energy in this system is essential for AP Physics 1.
      `
    },
    {
      id: 'ep4-horizontal',
      type: 'text' as const,
      content: `
## Horizontal Spring-Mass System

A block of mass $m$ is attached to a spring ($k$) on a frictionless horizontal surface.

### At Equilibrium ($x = 0$)
- Spring force = 0
- Acceleration = 0
- Speed is **maximum** (if oscillating)

### Displaced by $x$
- Spring force: $F = -kx$ (restoring)
- Acceleration: $a = -kx/m$ (toward equilibrium)
- The acceleration is **not constant** — it depends on position!

### Key Behavior

When released from displacement $A$ (amplitude):
1. Block accelerates toward equilibrium
2. Passes through equilibrium at maximum speed
3. Overshoots, compressing (or stretching) the spring
4. Spring slows the block, stops it at $-A$
5. Process repeats — **simple harmonic motion**
      `
    },
    {
      id: 'ep4-vertical',
      type: 'text' as const,
      content: `
## Vertical Spring-Mass System

When a mass hangs from a spring:

### New Equilibrium Position

The spring stretches by $x_0$ where gravity is balanced:

$$kx_0 = mg \\Rightarrow x_0 = \\frac{mg}{k}$$

### Oscillation About the New Equilibrium

If displaced from this new equilibrium by $x$:
- The net force is still $F = -kx$ (measured from the new equilibrium)
- The oscillation is identical to the horizontal case!
- Gravity shifts the equilibrium point but doesn\'t change the oscillation behavior

### Important Insight

For oscillation problems, measure displacement from the **equilibrium position** (where the net force is zero), not from the spring\'s natural length.
      `
    },
    {
      id: 'ep4-force-and-accel',
      type: 'text' as const,
      content: `
## Force and Acceleration Analysis

For a spring-mass system oscillating with amplitude $A$:

| Position | Displacement | Force | Acceleration | Speed |
|----------|-------------|-------|-------------|-------|
| Maximum stretch | $+A$ | $-kA$ (toward center) | $-kA/m$ (max) | 0 |
| Equilibrium | $0$ | $0$ | $0$ | Maximum |
| Maximum compression | $-A$ | $+kA$ (toward center) | $+kA/m$ (max) | 0 |

### Key Relationships

- **Maximum force/acceleration** occur at **maximum displacement** (endpoints)
- **Zero force/acceleration** occur at **equilibrium** (center)
- **Maximum speed** occurs at **equilibrium**
- **Zero speed** occurs at **endpoints**

Force/acceleration and speed are **out of phase** — when one is max, the other is zero.
      `
    },
    {
      id: 'ep4-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Spring-Mass System Concepts** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A block on a frictionless surface oscillates on a spring. At the equilibrium position:',
            options: [
              'Speed is zero and acceleration is maximum',
              'Speed is maximum and acceleration is zero',
              'Both speed and acceleration are maximum',
              'Both speed and acceleration are zero'
            ],
            correctAnswer: 1,
            explanation: 'At equilibrium ($x = 0$): $F = -k(0) = 0$, so $a = 0$. All PE has converted to KE, so speed is maximum.'
          },
          {
            question: 'A mass on a spring is at maximum compression. The acceleration:',
            options: [
              'Points toward equilibrium and is at maximum magnitude',
              'Points away from equilibrium',
              'Is zero',
              'Points toward equilibrium but is small'
            ],
            correctAnswer: 0,
            explanation: 'At maximum compression, $|x|$ is maximum, so $|F| = k|x|$ is maximum, and the force (and acceleration) point toward equilibrium (restoring force).'
          },
          {
            question: 'A vertical spring-mass system oscillates. Compared to a horizontal system with the same $k$ and $m$:',
            options: [
              'The vertical system oscillates faster',
              'The vertical system oscillates slower',
              'They oscillate identically (same period)',
              'The vertical system doesn\'t oscillate'
            ],
            correctAnswer: 2,
            explanation: 'Gravity shifts the equilibrium position but doesn\'t affect the restoring force about that equilibrium. The oscillation is identical.'
          }
        ]
      }
    },
    {
      id: 'ep4-calculations',
      type: 'input-boxes' as const,
      content: `
**Spring-Mass Calculations** 🧮

Use $g = 10$ m/s².

1) A 2 kg mass hangs from a spring ($k = 100$ N/m). How far does the spring stretch at equilibrium (in m)?

2) A 0.5 kg block oscillates on a spring ($k = 200$ N/m) with amplitude 0.1 m. What is the maximum acceleration (in m/s²)?

3) Same system as problem 2. What is the maximum speed of the block (in m/s)?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.2', '40', '2'],
        hint1: '$x_0 = mg/k = 2(10)/100$.',
        hint2: '$a_{\\max} = kA/m = 200(0.1)/0.5$.',
        hint3: 'At max speed, all PE converts to KE: $\\frac{1}{2}kA^2 = \\frac{1}{2}mv_{\\max}^2 \\Rightarrow v_{\\max} = A\\sqrt{k/m}$.',
        explanation: '1) $x_0 = 20/100 = 0.2$ m. 2) $a_{\\max} = 200(0.1)/0.5 = 40$ m/s². 3) $v_{\\max} = 0.1\\sqrt{200/0.5} = 0.1\\sqrt{400} = 0.1(20) = 2$ m/s.'
      }
    },
    {
      id: 'ep4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Spring-Mass Analysis** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Increasing the amplitude of oscillation changes the maximum speed:',
            options: ['Increases it', 'Decreases it', 'No change', 'Depends on mass'],
            correctIndex: 0,
            explanation: '$v_{\\max} = A\\sqrt{k/m}$. Larger amplitude → larger maximum speed.'
          },
          {
            label: 'Increasing the mass (same spring and amplitude) changes the maximum speed:',
            options: ['Increases it', 'Decreases it', 'No change', 'Depends on k'],
            correctIndex: 1,
            explanation: '$v_{\\max} = A\\sqrt{k/m}$. Larger mass → smaller $v_{\\max}$. More mass is harder to accelerate.'
          },
          {
            label: 'At the instant the block passes through equilibrium, the net force is:',
            options: ['Maximum', 'Half the maximum', 'Zero', 'Equal to weight'],
            correctIndex: 2,
            explanation: 'At equilibrium, $x = 0$, so $F = -kx = 0$. No net force at the center (but the block is moving fastest).'
          },
          {
            label: 'The acceleration of a spring-mass system is proportional to:',
            options: ['Velocity', 'Displacement from equilibrium', 'Time', 'Mass'],
            correctIndex: 1,
            explanation: '$a = -kx/m$. Acceleration is proportional to displacement and points opposite to it.'
          }
        ]
      }
    },
    {
      id: 'ep4-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Spring-Mass Systems** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A 0.4 kg block on a frictionless surface oscillates with $k = 160$ N/m and amplitude 0.05 m. The maximum speed is:',
            options: [
              '0.5 m/s',
              '1 m/s',
              '2 m/s',
              '4 m/s'
            ],
            correctAnswer: 1,
            explanation: '$v_{\\max} = A\\sqrt{k/m} = 0.05\\sqrt{160/0.4} = 0.05\\sqrt{400} = 0.05(20) = 1$ m/s.'
          },
          {
            question: 'A block oscillates on a spring. At the moment the block is at half its maximum displacement ($x = A/2$), the speed is:',
            options: [
              'Half the maximum speed',
              '$\\frac{\\sqrt{3}}{2}$ of the maximum speed',
              '$\\frac{1}{\\sqrt{2}}$ of the maximum speed',
              'Equal to the maximum speed'
            ],
            correctAnswer: 1,
            explanation: '$\\frac{1}{2}kA^2 = \\frac{1}{2}k(A/2)^2 + \\frac{1}{2}mv^2$. $\\frac{1}{2}mv^2 = \\frac{1}{2}k(A^2 - A^2/4) = \\frac{3}{4} \\cdot \\frac{1}{2}kA^2 = \\frac{3}{4} \\cdot \\frac{1}{2}mv_{\\max}^2$. So $v = v_{\\max}\\sqrt{3/4} = \\frac{\\sqrt{3}}{2}v_{\\max}$.'
          }
        ]
      }
    }
  ]
}
