export const physics1IntroductionToShmPart2Data = {
  topicSlug: 'introduction-to-shm',
  sections: [
    {
      id: 'sh2-intro',
      type: 'text' as const,
      content: `
# 🔩 Mass-Spring System

**Part 2 of 7 — $T = 2\\pi\\sqrt{m/k}$**

The mass-spring system is the most fundamental example of SHM. A mass $m$ attached to a spring with spring constant $k$ oscillates with a period that depends only on $m$ and $k$.
      `
    },
    {
      id: 'sh2-period',
      type: 'text' as const,
      content: `
## Period of a Mass-Spring System

$$T = 2\\pi\\sqrt{\\frac{m}{k}}$$

### Frequency and Angular Frequency

$$f = \\frac{1}{T} = \\frac{1}{2\\pi}\\sqrt{\\frac{k}{m}}$$

$$\\omega = 2\\pi f = \\sqrt{\\frac{k}{m}}$$

### Key Dependencies

| Factor | Effect on Period |
|--------|-----------------|
| Increase mass $m$ | Period **increases** (heavier → slower) |
| Increase spring constant $k$ | Period **decreases** (stiffer → faster) |
| Change amplitude $A$ | **No effect** on period! |
| Change gravity $g$ | **No effect** on period! |

### The Amazing Independence of Amplitude

The period of SHM does **not** depend on the amplitude. Whether you stretch the spring a little or a lot, the period is the same. This is called **isochronism**.
      `
    },
    {
      id: 'sh2-horizontal-vertical',
      type: 'text' as const,
      content: `
## Horizontal vs. Vertical Springs

### Horizontal Spring

A mass slides on a frictionless surface. The equilibrium position is where the spring is at its natural length.

### Vertical Spring

A mass hangs from a spring. The equilibrium position is where the spring force balances gravity:

$$kx_0 = mg \\quad \\Rightarrow \\quad x_0 = \\frac{mg}{k}$$

The **period is the same** as the horizontal case: $T = 2\\pi\\sqrt{m/k}$

The equilibrium point just shifts downward by $x_0$. The oscillation about this new equilibrium is still SHM with the same $T$.

### Finding $T$ from the Static Stretch

If a hanging mass stretches a vertical spring by $x_0$ at equilibrium, then $k = mg/x_0$, so

$$T = 2\\pi\\sqrt{\\frac{m}{k}} = 2\\pi\\sqrt{\\frac{x_0}{g}}$$

A spring that sags 0.10 m under its load oscillates with $T = 2\\pi\\sqrt{0.10/10} \\approx 0.63$ s, whatever the mass. This does not make the period depend on $g$: a different $g$ changes $x_0$ in the same proportion, so $x_0/g = m/k$ stays fixed. AP Physics 1 problems use one spring at a time; combining springs into an equivalent spring constant is not on the exam.
      `
    },
    {
      id: 'sh2-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Mass-Spring Period Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Doubling the mass on a spring changes the period by a factor of:',
            options: [
              '$2$',
              '$\\sqrt{2}$',
              '$4$',
              '$1/\\sqrt{2}$'
            ],
            correctAnswer: 1,
            explanation: '$T = 2\\pi\\sqrt{m/k}$. If $m \\to 2m$: $T \\to 2\\pi\\sqrt{2m/k} = \\sqrt{2} \\cdot T$.'
          },
          {
            question: 'Doubling the amplitude of a mass-spring oscillation:',
            options: [
              'Doubles the period, since the path is twice as long',
              'Halves the period, since the restoring force doubles',
              'Has no effect on the period',
              'Increases the period by a factor of $\\sqrt{2}$'
            ],
            correctAnswer: 2,
            explanation: 'The period of a mass-spring system depends only on $m$ and $k$, not on amplitude. $T = 2\\pi\\sqrt{m/k}$.'
          },
          {
            question: 'A vertical spring has a mass hanging from it in equilibrium. The period of oscillation about this equilibrium:',
            options: [
              'Is greater than the horizontal case',
              'Is less than the horizontal case',
              'Is the same as the horizontal case',
              'Depends on $g$'
            ],
            correctAnswer: 2,
            explanation: 'The period is $T = 2\\pi\\sqrt{m/k}$ regardless of orientation. Gravity just shifts the equilibrium position but doesn\'t affect the period.'
          }
        ]
      }
    },
    {
      id: 'sh2-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Mass-Spring Calculations** 🧮

1) A 0.5 kg mass on a spring ($k = 200$ N/m) oscillates. What is the period? (in seconds, round to 3 significant figures)

2) A mass-spring system has $T = 0.8$ s and $k = 50$ N/m. What is the mass? (in kg, round to 3 significant figures)

3) A 0.50 kg mass hangs at rest from a vertical spring and stretches it 0.20 m. It is pulled down slightly and released. What is the period? (use $g = 10$ $m/s^{2}$; in seconds, round to 3 significant figures)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.314', '0.811', '0.889'],
        hint1: '$T = 2\\pi\\sqrt{m/k} = 2\\pi\\sqrt{0.5/200}$',
        hint2: '$T = 2\\pi\\sqrt{m/k} \\Rightarrow m = kT^2/(4\\pi^2)$',
        hint3: 'At equilibrium $kx_0 = mg$, so $k = (0.50)(10)/0.20 = 25$ N/m. Then $T = 2\\pi\\sqrt{0.50/25}$',
        explanation: '1) $T = 2\\pi\\sqrt{0.5/200} = 2\\pi\\sqrt{0.0025} = 2\\pi(0.05) = 0.314$ s. 2) $m = 50(0.64)/(4\\pi^2) = 32/39.48 = 0.811$ kg. 3) $k = mg/x_0 = 5.0/0.20 = 25$ N/m. $T = 2\\pi\\sqrt{0.50/25} = 2\\pi\\sqrt{0.02} = 2\\pi(0.1414) = 0.889$ s.'
      }
    },
    {
      id: 'sh2-dropdown-review',
      type: 'dropdown-select' as const,
      content: `
**Spring Period Review** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'If you increase the mass on a spring, the period:',
            options: ['increases', 'decreases, since a heavier mass stretches the spring more', 'stays the same', 'depends on the amplitude of the motion'],
            correctIndex: 0,
            explanation: 'Increasing mass increases the period: $T \\propto \\sqrt{m}$. More mass → slower oscillation.'
          },
          {
            label: 'If you use a stiffer spring (larger $k$), the period:',
            options: ['increases', 'decreases', 'stays the same', 'increases in proportion to $k$'],
            correctIndex: 1,
            explanation: 'A stiffer spring (larger $k$) decreases the period: $T \\propto 1/\\sqrt{k}$. Stiffer → faster oscillation.'
          },
          {
            label: 'On the same planet, if a hanging mass makes its spring sag farther at equilibrium (larger $x_0$), the period:',
            options: ['increases', 'decreases', 'stays the same', 'depends only on the amplitude'],
            correctIndex: 0,
            explanation: 'At equilibrium $k = mg/x_0$, so $T = 2\\pi\\sqrt{m/k} = 2\\pi\\sqrt{x_0/g}$. A larger sag means a softer spring for that mass, and the period increases.'
          }
        ]
      }
    },
    {
      id: 'sh2-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Mass-Spring System** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A student wants to double the period of a block-spring oscillator. She should:',
            options: [
              'Double the amplitude of the motion',
              'Double the mass of the block',
              'Replace the block with one 4 times as massive',
              'Use a spring that is twice as stiff'
            ],
            correctAnswer: 2,
            explanation: '$T = 2\\pi\\sqrt{m/k}$, so $T \\propto \\sqrt{m}$. Doubling $T$ needs $\\sqrt{m}$ to double, which takes four times the mass. Doubling the mass only multiplies $T$ by $\\sqrt{2}$, a stiffer spring shortens the period, and the amplitude has no effect.'
          },
          {
            question: 'On the Moon ($g_{\\text{Moon}} = g/6$), a mass-spring system will oscillate with a period that is:',
            options: [
              '6 times longer, because gravity is weaker',
              '$\\sqrt{6}$ times longer',
              'The same as on Earth',
              '$1/6$ as long, since the mass weighs less'
            ],
            correctAnswer: 2,
            explanation: 'The period of a mass-spring system ($T = 2\\pi\\sqrt{m/k}$) does not depend on $g$. It oscillates with the same period on the Moon.'
          }
        ]
      }
    }
  ]
}
