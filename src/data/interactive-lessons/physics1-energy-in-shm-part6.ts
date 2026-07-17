export const physics1EnergyInShmPart6Data = {
  topicSlug: 'energy-in-shm',
  sections: [
    {
      id: 'se6-intro',
      type: 'text' as const,
      content: `
# 🛠️ Problem-Solving Workshop

**Part 6 of 7 — Energy in Simple Harmonic Motion**

Time to tackle comprehensive energy problems that combine everything: $E = \\frac{1}{2}kA^2$, speed at any position, $v_{\\text{max}} = A\\omega$, and damping concepts.
      `
    },
    {
      id: 'se6-strategy',
      type: 'text' as const,
      content: `
## Energy Problem-Solving Strategy

1. **Identify what you know**: $m$, $k$, $A$, $v_{\\text{max}}$, $E$, position, speed, etc.
2. **Write the energy conservation equation**: $\\frac{1}{2}kA^2 = \\frac{1}{2}kx^2 + \\frac{1}{2}mv^2$
3. **Use the appropriate form**:
   - Need $v_{\\text{max}}$? → $v_{\\text{max}} = A\\omega = A\\sqrt{k/m}$
   - Need $v$ at position $x$? → $v = \\omega\\sqrt{A^2 - x^2}$
   - Need energy? → $E = \\frac{1}{2}kA^2 = \\frac{1}{2}mv_{\\text{max}}^2$
4. **Check**: Does the answer make physical sense?

### Quick Reference

$$\\omega = \\sqrt{\\frac{k}{m}} = \\frac{2\\pi}{T} = 2\\pi f$$

$$v_{\\text{max}} = A\\omega \\qquad a_{\\text{max}} = A\\omega^2 \\qquad \\omega = \\frac{a_{\\text{max}}}{v_{\\text{max}}}$$
      `
    },
    {
      id: 'se6-problem1',
      type: 'multiple-choice' as const,
      content: `
**Problem 1** 🎯

A 0.30 kg block attached to a spring ($k = 120$ N/m) is pulled 0.15 m from equilibrium and released from rest on a frictionless surface.
      `,
      exercise: {
        questions: [
          {
            question: 'What is the total energy of the system?',
            options: [
              '$0.675$ J',
              '$1.35$ J',
              '$2.70$ J',
              '$9.0$ J'
            ],
            correctAnswer: 1,
            explanation: '$E = \\frac{1}{2}kA^2 = \\frac{1}{2}(120)(0.15)^2 = \\frac{1}{2}(120)(0.0225) = 1.35$ J.'
          },
          {
            question: 'What is the maximum speed of the block?',
            options: [
              '$1.5$ m/s',
              '$3.0$ m/s',
              '$4.5$ m/s',
              '$9.0$ m/s'
            ],
            correctAnswer: 1,
            explanation: '$v_{\\text{max}} = A\\sqrt{k/m} = 0.15\\sqrt{120/0.30} = 0.15\\sqrt{400} = 0.15(20) = 3.0$ m/s.'
          },
          {
            question: 'What is the speed when the block is 0.10 m from equilibrium?',
            options: [
              '$1.12$ m/s',
              '$2.24$ m/s',
              '$3.0$ m/s',
              '$0.50$ m/s'
            ],
            correctAnswer: 1,
            explanation: '$v = \\omega\\sqrt{A^2 - x^2} = 20\\sqrt{(0.15)^2 - (0.10)^2} = 20\\sqrt{0.0225 - 0.0100} = 20\\sqrt{0.0125} = 20(0.1118) = 2.24$ m/s.'
          }
        ]
      }
    },
    {
      id: 'se6-problem2',
      type: 'input-boxes' as const,
      content: `
**Problem 2** 🧮

A pendulum bob ($m = 0.50$ kg) swings through its lowest point with a speed of 1.2 m/s.

1) What is the kinetic energy at the lowest point? (in J, round to 3 significant figures)

2) What is the maximum height above the lowest point? (in m, round to 3 significant figures, use $g = 9.8$ $m/s^{2}$)

3) What is the total mechanical energy of the system? (in J, round to 3 significant figures)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.36', '0.073', '0.36'],
        hint1: '$KE = \\frac{1}{2}mv^2 = \\frac{1}{2}(0.50)(1.2)^2$',
        hint2: 'At max height: all KE converts to PE. $mgh = \\frac{1}{2}mv^2 \\Rightarrow h = v^2/(2g)$',
        hint3: 'At the lowest point, $PE = 0$, so $E = KE$',
        explanation: '1) $KE = \\frac{1}{2}(0.50)(1.44) = 0.36$ J. 2) $h = v^2/(2g) = 1.44/(19.6) = 0.0735 \\approx 0.073$ m. 3) At the bottom, $PE = 0$ so $E = KE = 0.36$ J.'
      }
    },
    {
      id: 'se6-problem3',
      type: 'multiple-choice' as const,
      content: `
**Problem 3 — Energy Ratios** 🎯

A block on a spring oscillates with amplitude $A$ and total energy $E$.
      `,
      exercise: {
        questions: [
          {
            question: 'At what displacement is the kinetic energy equal to three times the potential energy ($KE = 3PE$)?',
            options: [
              '$x = A/2$',
              '$x = A/4$',
              '$x = A/\\sqrt{2}$',
              '$x = A/\\sqrt{4}$'
            ],
            correctAnswer: 0,
            explanation: '$KE = 3PE$ and $KE + PE = E$, so $3PE + PE = E$, $PE = E/4$. $\\frac{1}{2}kx^2 = \\frac{1}{4} \\cdot \\frac{1}{2}kA^2$, $x^2 = A^2/4$, $x = A/2$.'
          },
          {
            question: 'At $x = A/3$, what fraction of the total energy is kinetic?',
            options: [
              '$1/9$',
              '$8/9$',
              '$1/3$',
              '$2/3$'
            ],
            correctAnswer: 1,
            explanation: '$PE/E = x^2/A^2 = (A/3)^2/A^2 = 1/9$. So $KE/E = 1 - 1/9 = 8/9$.'
          }
        ]
      }
    },
    {
      id: 'se6-problem4',
      type: 'dropdown-select' as const,
      content: `
**Problem 4 — Conceptual Problem Solving** 🔍

A mass-spring system oscillates on a frictionless surface with energy $E$ and amplitude $A$. Various changes are described below.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'If the amplitude is doubled, the new total energy becomes:',
            options: ['E', '2E', '4E', 'E/2'],
            correctIndex: 2,
            explanation: 'Doubling the amplitude: $E_{\\text{new}} = \\frac{1}{2}k(2A)^2 = 4 \\times \\frac{1}{2}kA^2 = 4E$.'
          },
          {
            label: 'If the mass is replaced with a heavier one (same k and A), the total energy is:',
            options: ['the same', 'halved', 'doubled', 'quadrupled'],
            correctIndex: 0,
            explanation: 'Replacing the mass does not change the total energy. $E = \\frac{1}{2}kA^2$ does not depend on mass. (But $v_{\\text{max}}$ changes.)'
          },
          {
            label: 'When the mass is doubled (same k and A), the maximum speed:',
            options: ['increases', 'decreases', 'stays the same', 'becomes zero'],
            correctIndex: 1,
            explanation: 'Doubling the mass with same $k$ and $A$: $v_{\\text{max}} = A\\sqrt{k/m}$. With $2m$: $v_{\\text{max}} = A\\sqrt{k/(2m)}$, which is smaller by $\\sqrt{2}$.'
          }
        ]
      }
    },
    {
      id: 'se6-challenge',
      type: 'input-boxes' as const,
      content: `
**Challenge Problem** 🧮

A 1.0 kg mass on a spring ($k = 400$ N/m) has total energy $E = 8.0$ J.

1) What is the amplitude? (in m)

2) At what position is the speed 3.0 m/s? (in m, round to 3 significant figures)

3) At what position is $KE = 2PE$? (in m, round to 3 significant figures)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.2', '0.13', '0.115'],
        hint1: '$A = \\sqrt{2E/k} = \\sqrt{2(8.0)/400}$',
        hint2: '$KE = \\frac{1}{2}(1.0)(9.0) = 4.5$ J. $PE = 8.0 - 4.5 = 3.5$ J. $x = \\sqrt{2(3.5)/400}$',
        hint3: '$KE = 2PE$ and $KE + PE = E$, so $PE = E/3$. $\\frac{1}{2}kx^2 = E/3$. $x = \\sqrt{2E/(3k)}$',
        explanation: '1) $A = \\sqrt{16/400} = \\sqrt{0.04} = 0.2$ m. 2) $PE = 8.0 - 4.5 = 3.5$ J. $x = \\sqrt{7.0/400} = \\sqrt{0.0175} = 0.132 \\approx 0.13$ m. 3) $PE = 8.0/3 = 2.667$ J. $x = \\sqrt{5.333/400} = \\sqrt{0.01333} = 0.1155 \\approx 0.115$ m.'
      }
    },
    {
      id: 'se6-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Problem Workshop** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A block has $v_{\\text{max}} = 6.0$ m/s in SHM. At a point where $KE = PE$, the speed is:',
            options: [
              '$3.0$ m/s',
              '$6\\sqrt{2}$ m/s',
              '$6.0/\\sqrt{2}$ m/s',
              '$6.0$ m/s'
            ],
            correctAnswer: 2,
            explanation: '$KE = PE = E/2$. So $\\frac{1}{2}mv^2 = \\frac{1}{2} \\cdot \\frac{1}{2}mv_{\\text{max}}^2$. $v^2 = v_{\\text{max}}^2/2$. $v = 6.0/\\sqrt{2} \\approx 4.24$ m/s. That is $v_{\\text{max}}/\\sqrt{2}$ — not simply half of $v_{\\text{max}}$.'
          }
        ]
      }
    }
  ]
}
