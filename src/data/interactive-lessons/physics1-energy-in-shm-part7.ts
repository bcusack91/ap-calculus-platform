export const physics1EnergyInShmPart7Data = {
  topicSlug: 'energy-in-shm',
  sections: [
    {
      id: 'se7-intro',
      type: 'text' as const,
      content: `
# 🎓 Synthesis & AP Review

**Part 7 of 7 — Energy in Simple Harmonic Motion**

This final part brings together all energy concepts in SHM — KE/PE exchange, total energy, speed at any position, maximum velocity, and damping — for a comprehensive AP exam review.
      `
    },
    {
      id: 'se7-big-picture',
      type: 'text' as const,
      content: `
## Complete Energy Summary

### Core Equations

$$E = \\frac{1}{2}kA^2 = \\frac{1}{2}mv_{\\text{max}}^2 = \\frac{1}{2}m\\omega^2 A^2$$

$$\\frac{1}{2}kA^2 = \\frac{1}{2}kx^2 + \\frac{1}{2}mv^2$$

$$v = \\omega\\sqrt{A^2 - x^2} \\qquad v_{\\text{max}} = A\\omega$$

### Energy at Special Positions

| Position | KE | PE | Speed |
|----------|----|----|-------|
| $x = 0$ | $E$ | $0$ | $v_{\\text{max}} = A\\omega$ |
| $x = \\pm A$ | $0$ | $E$ | $0$ |
| $x = \\pm A/\\sqrt{2}$ | $E/2$ | $E/2$ | $v_{\\text{max}}/\\sqrt{2}$ |
| $x = \\pm A/2$ | $3E/4$ | $E/4$ | $(\\sqrt{3}/2)v_{\\text{max}}$ |

### Key Proportionalities

- $E \\propto A^2$ (double amplitude → 4× energy)
- $E \\propto k$ (double spring constant → 2× energy)
- $v_{\\text{max}} \\propto A$ and $v_{\\text{max}} \\propto \\omega$
- Energy oscillates at frequency $2f$
      `
    },
    {
      id: 'se7-common-mistakes',
      type: 'text' as const,
      content: `
## Common AP Mistakes to Avoid

❌ **"Energy is proportional to amplitude"** — No, $E \\propto A^2$!

❌ **"Speed is maximum at the endpoints"** — Speed is ZERO at endpoints, maximum at equilibrium.

❌ **"KE = PE at x = A/2"** — Actually, $KE = PE$ at $x = A/\\sqrt{2} \\approx 0.707A$.

❌ **"Total energy depends on mass"** — $E = \\frac{1}{2}kA^2$ has no mass! (Mass affects $v_{\\text{max}}$, not $E$.)

❌ **"Damping changes the period"** — Light damping barely affects the period; it mainly reduces amplitude.

❌ **"Energy is lost in damped motion"** — Total energy is conserved; mechanical energy converts to thermal energy.
      `
    },
    {
      id: 'se7-ap-quiz1',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Questions — Set 1** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A mass-spring system has $k = 50$ N/m, $m = 2.0$ kg, and $A = 0.40$ m. The maximum kinetic energy is:',
            options: [
              '$2.0$ J',
              '$4.0$ J',
              '$8.0$ J',
              '$10$ J'
            ],
            correctAnswer: 1,
            explanation: 'Maximum KE equals total energy: $E = \\frac{1}{2}kA^2 = \\frac{1}{2}(50)(0.16) = 4.0$ J.'
          },
          {
            question: 'An object in SHM has $v_{\\text{max}} = 8.0$ m/s. At a displacement where $PE = 75\\%$ of the total energy, the speed is:',
            options: [
              '$2.0$ m/s',
              '$4.0$ m/s',
              '$6.0$ m/s',
              '$7.0$ m/s'
            ],
            correctAnswer: 1,
            explanation: '$KE = 25\\%$ of $E$. $\\frac{1}{2}mv^2 = 0.25 \\times \\frac{1}{2}mv_{\\text{max}}^2$. $v^2 = 0.25v_{\\text{max}}^2 = 0.25(64) = 16$. $v = 4.0$ m/s.'
          },
          {
            question: 'A block on a spring is set into oscillation with amplitude $A$ and then again with amplitude $2A$. The ratio of maximum accelerations is:',
            options: [
              '$1:2$',
              '$1:4$',
              '$2:1$',
              '$1:1$'
            ],
            correctAnswer: 0,
            explanation: '$a_{\\text{max}} = A\\omega^2$. With same $\\omega$ (same $k$ and $m$): $a_{\\text{max,1}}/a_{\\text{max,2}} = A/(2A) = 1/2$. Ratio is $1:2$.'
          }
        ]
      }
    },
    {
      id: 'se7-ap-calc',
      type: 'input-boxes' as const,
      content: `
**AP Calculation Practice** 🧮

1) A spring ($k = 800$ N/m) stores 4.0 J of energy when compressed. What is the compression distance? (in m)

2) A 0.20 kg block oscillates with $k = 80$ N/m and $A = 0.05$ m. What is the speed at $x = 0.03$ m? (in m)

3) A damped oscillator starts with $A_0 = 0.30$ m and amplitude decreases to $0.15$ m. What fraction of the original energy remains? (as a decimal)

*Round all answers to 3 significant figures.*
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.1', '0.8', '0.25'],
        hint1: '$E = \\frac{1}{2}kx^2 \\Rightarrow x = \\sqrt{2E/k}$',
        hint2: '$\\omega = \\sqrt{k/m} = \\sqrt{80/0.20}$. $v = \\omega\\sqrt{A^2 - x^2}$',
        hint3: '$E \\propto A^2$. $E_{\\text{final}}/E_{\\text{initial}} = (0.15/0.30)^2$',
        explanation: '1) $x = \\sqrt{2(4.0)/800} = \\sqrt{0.01} = 0.1$ m. 2) $\\omega = \\sqrt{400} = 20$. $v = 20\\sqrt{0.0025 - 0.0009} = 20\\sqrt{0.0016} = 20(0.04) = 0.8$ m/s. 3) $(0.15/0.30)^2 = (0.5)^2 = 0.25$. One quarter of the energy remains.'
      }
    },
    {
      id: 'se7-dropdown-synthesis',
      type: 'dropdown-select' as const,
      content: `
**Comprehensive Energy Review** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The total energy of a mass-spring system in SHM is given by E =',
            options: ['$\\tfrac{1}{2} kA^{2}$', '½kA', '$kA^{2}$', '$2kA^{2}$'],
            correctIndex: 0,
            explanation: 'The total energy in a mass-spring SHM system is $E = \\frac{1}{2}kA^2$.'
          },
          {
            label: 'The displacement at which kinetic energy equals potential energy is:',
            options: ['x = A/2', 'x = $A/\\sqrt{2}$', 'x = A/3', 'x = A/4'],
            correctIndex: 1,
            explanation: 'KE = PE at $x = A/\\sqrt{2}$, where $PE = \\frac{1}{2}k(A/\\sqrt{2})^2 = \\frac{1}{4}kA^2 = E/2$.'
          },
          {
            label: 'In damped oscillations, mechanical energy is primarily converted to:',
            options: ['thermal energy', 'nuclear energy', 'chemical energy', 'light energy'],
            correctIndex: 0,
            explanation: 'In damped oscillations, mechanical energy is converted to thermal energy through friction and air resistance.'
          },
          {
            label: 'When the amplitude of SHM is doubled, the total energy:',
            options: ['quadruples', 'doubles', 'stays the same', 'halves'],
            correctIndex: 0,
            explanation: 'Since $E \\propto A^2$, doubling the amplitude means $E \\to 4E$. The energy quadruples.'
          }
        ]
      }
    },
    {
      id: 'se7-final-quiz',
      type: 'multiple-choice' as const,
      content: `
**Final Exit Quiz — Energy in SHM** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A vertical spring supports a 0.50 kg mass at equilibrium. When displaced 0.10 m and released, it oscillates with $T = 0.50$ s. The total energy is closest to:',
            options: [
              '$0.79$ J',
              '$1.58$ J',
              '$3.95$ J',
              '$7.90$ J'
            ],
            correctAnswer: 0,
            explanation: '$\\omega = 2\\pi/0.50 = 4\\pi$. $E = \\frac{1}{2}m\\omega^2 A^2 = \\frac{1}{2}(0.50)(4\\pi)^2(0.10)^2 = \\frac{1}{2}(0.50)(157.9)(0.01) = 0.395 \\times 2 = 0.79$ J.'
          },
          {
            question: 'Two identical springs are connected in parallel to a mass. Compared to a single spring with the same amplitude, the total energy is:',
            options: [
              'The same',
              'Doubled',
              'Halved',
              'Quadrupled'
            ],
            correctAnswer: 1,
            explanation: 'Parallel springs: $k_{\\text{eff}} = 2k$. $E = \\frac{1}{2}(2k)A^2 = 2 \\times \\frac{1}{2}kA^2$. The energy is doubled.'
          },
          {
            question: 'Which graph correctly shows the total mechanical energy of an underdamped oscillator over time?',
            options: [
              'Constant horizontal line',
              'Decreasing curve approaching zero',
              'Oscillating curve with constant amplitude',
              'Increasing curve'
            ],
            correctAnswer: 1,
            explanation: 'In an underdamped system, total mechanical energy gradually decreases due to friction, approaching zero as the oscillator comes to rest.'
          }
        ]
      }
    }
  ]
}
