export const physics1EnergyInShmPart5Data = {
  topicSlug: 'energy-in-shm',
  sections: [
    {
      id: 'se5-intro',
      type: 'text' as const,
      content: `
# 🪀 Vertical Springs and Choosing the System

**Part 5 of 7 — Energy in Simple Harmonic Motion**

A block hanging on a vertical spring oscillates just like a block on a horizontal spring, but now gravity is part of the story. In this part you will find the new equilibrium position, see why the period does not change, and track three kinds of energy at once.

**In this lesson you will learn:**
- Where the equilibrium position of a hanging spring–block system is
- Why $T = 2\\pi\\sqrt{m/k}$ still holds for a vertical spring
- How kinetic, spring potential and gravitational potential energy trade off
- How the choice of system decides which energies you count
      `
    },
    {
      id: 'se5-equilibrium',
      type: 'text' as const,
      content: `
## The New Equilibrium Position

Hang a block of mass $m$ on a spring of constant $k$. The block settles where the net force is zero (EK 7.1.A.2.ii):

$$k\\,d = mg \\quad\\Rightarrow\\quad d = \\frac{mg}{k}$$

Here $d$ is how far the spring has stretched from its relaxed length. This stretched position is the **equilibrium position** for the oscillation.

### Oscillating About the New Equilibrium

Pull the block a further distance $A$ below equilibrium and release it. Measured from the **new** equilibrium:

- The net force is restoring and proportional to the displacement: if the block is a distance $y$ below equilibrium, the spring pulls up with $k(d + y)$ and gravity pulls down with $mg = kd$, so the net force is $ky$ upward.
- That is exactly the condition for SHM, so the block oscillates with amplitude $A$ about the new equilibrium.
- The period is $T = 2\\pi\\sqrt{m/k}$, the same as for a horizontal spring. Gravity shifts **where** the block oscillates, not **how fast**.

### Common Mistake

The amplitude is measured from the equilibrium position, not from the spring's relaxed length. A block hanging 0.10 m below the relaxed length and pulled down another 0.06 m has amplitude 0.06 m.
      `
    },
    {
      id: 'se5-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Vertical Spring Concepts** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A 0.40 kg block hangs at rest from a spring with $k = 80$ N/m. How far is the spring stretched from its relaxed length? ($g = 10$ $m/s^{2}$)',
            options: [
              '0.0050 m',
              '0.050 m',
              '0.50 m',
              '20 m'
            ],
            correctAnswer: 1,
            explanation: 'At equilibrium $kd = mg$, so $d = (0.40)(10)/80 = 0.050$ m. Leaving out $g$ gives 0.0050 m, and dividing $k$ by $mg$ gives 20 m; check units, since N divided by N/m gives meters.'
          },
          {
            question: 'The same spring and block are moved from a horizontal frictionless table to hang vertically. Compared with the horizontal system, the period of the vertical system is:',
            options: [
              'Longer, because gravity adds to the restoring force',
              'Shorter, because gravity speeds up the block',
              'The same, because it depends only on $m$ and $k$',
              'Longer, because the spring starts out stretched'
            ],
            correctAnswer: 2,
            explanation: 'The net force measured from the new equilibrium is still $-ky$, so $T = 2\\pi\\sqrt{m/k}$ is unchanged. Gravity only moves the equilibrium position down by $mg/k$.'
          },
          {
            question: 'At the lowest point of a vertical spring–block oscillation, which statement is correct?',
            options: [
              'The net force is zero because the block is momentarily at rest',
              'The spring force is greater than the block\'s weight',
              'The spring force equals the block\'s weight',
              'The spring force is less than the block\'s weight'
            ],
            correctAnswer: 1,
            explanation: 'At the lowest point the block is below equilibrium, so the spring is stretched more than $mg/k$ and pulls up harder than gravity pulls down. The net force is upward and maximal even though the speed is momentarily zero.'
          }
        ]
      }
    },
    {
      id: 'se5-energy-tracking',
      type: 'text' as const,
      content: `
## Tracking Three Energies

Choose the system **block + spring + Earth**. No external work is done on it (ignore air resistance), so its total mechanical energy is constant (EK 3.4.C.2, 7.4.A.2):

$$K + U_s + U_g = \\text{constant}$$

The total potential energy of a system with more than two objects is the sum over each interacting pair (EK 3.3.A.5): $U_s$ for the spring–block pair and $U_g$ for the Earth–block pair.

### Worked Example

A 0.50 kg block hangs from a spring with $k = 50$ N/m, so the equilibrium stretch is $d = (0.50)(10)/50 = 0.10$ m. The block is pulled down 0.06 m more and released. Find its speed as it passes equilibrium. Set $U_g = 0$ at the lowest point.

| Position | Stretch | $U_s = \\frac{1}{2}kx^2$ | $U_g$ | $K$ |
|----------|---------|--------------------------|-------|-----|
| Lowest point | 0.16 m | 0.64 J | 0 | 0 |
| Equilibrium | 0.10 m | 0.25 J | $mg(0.06) = 0.30$ J | ? |

Energy conservation: $0.64 = 0.25 + 0.30 + K$, so $K = 0.09$ J and $v = \\sqrt{2(0.09)/0.50} = 0.60$ m/s.

### A Useful Check

The same speed comes from treating the motion as SHM about the new equilibrium: $\\frac{1}{2}kA^2 = \\frac{1}{2}(50)(0.06)^2 = 0.09$ J of oscillation energy, all kinetic at equilibrium. Both routes agree, which is a good way to catch arithmetic slips.
      `
    },
    {
      id: 'se5-energy-quiz',
      type: 'input-boxes' as const,
      content: `
**Vertical Spring Energy Calculations** 🧮

Use $g = 10$ $m/s^{2}$. A 0.20 kg block hangs from a spring with $k = 20$ N/m. It is pulled 0.05 m below its equilibrium position and released.

1) How far is the spring stretched from its relaxed length when the block is at equilibrium? (in m)

2) What is the period of the oscillation? (in s, round to 3 significant figures)

3) What is the block's maximum speed? (in m/s)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.1', '0.628', '0.5'],
        hint1: 'At equilibrium $kd = mg$.',
        hint2: '$T = 2\\pi\\sqrt{m/k}$, the same as for a horizontal spring.',
        hint3: 'The amplitude is 0.05 m, measured from equilibrium. Set $\\frac{1}{2}kA^2 = \\frac{1}{2}mv_{\\max}^2$.',
        explanation: '1) $d = (0.20)(10)/20 = 0.10$ m. 2) $T = 2\\pi\\sqrt{0.20/20} = 2\\pi(0.10) = 0.628$ s. 3) $\\frac{1}{2}(20)(0.05)^2 = 0.025$ J $= \\frac{1}{2}(0.20)v^2$, so $v^2 = 0.25$ and $v_{\\max} = 0.50$ m/s.'
      }
    },
    {
      id: 'se5-system-choice',
      type: 'text' as const,
      content: `
## How the System Choice Changes the Energy Story

Which energies you count depends on what is inside your system (EK 3.4.A, 3.4.C):

| System | Energies inside | Outside forces that do work |
|--------|-----------------|-----------------------------|
| Block + spring + Earth | $K$, $U_s$, $U_g$ | none, so total energy is constant |
| Block + spring | $K$, $U_s$ | gravity (Earth does work on the block) |
| Block alone | $K$ only | spring force and gravity |

- A system containing only a single object can have only kinetic energy (EK 3.4.A.1). The spring and Earth then do **work** on the block instead of storing potential energy inside the system.
- Every choice gives the same answer for the block's speed; the bigger system simply turns "work done by outside forces" into "change in potential energy inside."

AP Physics 1 treats oscillators as ideal, so the total mechanical energy of the block–spring–Earth system stays constant. Real oscillators slowly lose energy to air resistance and internal friction, but that loss is not modeled on the exam.
      `
    },
    {
      id: 'se5-dropdown-review',
      type: 'dropdown-select' as const,
      content: `
**System and Energy Review** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'For the system of the block alone, the energy the system can have is:',
            options: ['kinetic only', 'kinetic and spring potential', 'kinetic and gravitational potential', 'all three kinds'],
            correctIndex: 0,
            explanation: 'A single-object system can only have kinetic energy. The spring and Earth are outside it, so they do work on the block rather than storing potential energy in the system.'
          },
          {
            label: 'As the block rises from its lowest point to equilibrium, the gravitational potential energy of the block–Earth system:',
            options: ['decreases', 'increases', 'stays constant', 'drops to zero'],
            correctIndex: 1,
            explanation: 'The block gains height, so $U_g = mgh$ increases. At the same time the spring\'s stretch shrinks, so $U_s$ decreases by even more, and the difference becomes kinetic energy.'
          },
          {
            label: 'Doubling the mass on a vertical spring (same $k$) makes the equilibrium stretch:',
            options: ['half as large', 'twice as large', 'four times as large', 'unchanged'],
            correctIndex: 1,
            explanation: 'The equilibrium stretch is $d = mg/k$, which is proportional to $m$, so doubling the mass doubles it. The period grows by only $\\sqrt{2}$.'
          }
        ]
      }
    },
    {
      id: 'se5-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Vertical Springs** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A block on a vertical spring oscillates with amplitude $A$. If it is instead released from a point $2A$ below equilibrium, the oscillation energy $\\frac{1}{2}kA^2$ becomes:',
            options: [
              'Twice as large',
              'Four times as large',
              'Unchanged',
              'Half as large'
            ],
            correctAnswer: 1,
            explanation: 'The oscillation energy is proportional to the square of the amplitude, so doubling $A$ multiplies it by 4. The period stays the same because it depends only on $m$ and $k$.'
          },
          {
            question: 'A student treats the block, spring and Earth as one system while the block oscillates. Ignoring air resistance, the student should expect the total mechanical energy of that system to:',
            options: [
              'Increase as the block speeds up toward equilibrium',
              'Stay constant throughout the motion',
              'Decrease each time the block passes equilibrium',
              'Equal zero, since the forces inside cancel'
            ],
            correctAnswer: 1,
            explanation: 'No external force does work on the block–spring–Earth system, so $K + U_s + U_g$ is constant. Energy only changes form inside the system.'
          }
        ]
      }
    }
  ]
}
