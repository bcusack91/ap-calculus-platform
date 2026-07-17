export const physics1EnergyInShmPart2Data = {
  topicSlug: 'energy-in-shm',
  sections: [
    {
      id: 'se2-intro',
      type: 'text' as const,
      content: `
# 🔋 Total Energy $E = \\frac{1}{2}kA^2$

**Part 2 of 7 — Energy in Simple Harmonic Motion**

The total mechanical energy of a mass-spring system depends only on the spring constant and the amplitude. This simple but powerful result connects initial conditions to all energy calculations.
      `
    },
    {
      id: 'se2-derivation',
      type: 'text' as const,
      content: `
## Deriving Total Energy

At the endpoints ($x = \\pm A$), velocity is zero, so:

$$E = KE + PE = 0 + \\frac{1}{2}kA^2 = \\frac{1}{2}kA^2$$

At equilibrium ($x = 0$), displacement is zero, so:

$$E = KE + PE = \\frac{1}{2}mv_{\\text{max}}^2 + 0 = \\frac{1}{2}mv_{\\text{max}}^2$$

Setting them equal:

$$\\frac{1}{2}kA^2 = \\frac{1}{2}mv_{\\text{max}}^2$$

$$v_{\\text{max}} = A\\sqrt{\\frac{k}{m}} = A\\omega$$

### What Total Energy Depends On

| Factor | Effect on $E$ |
|--------|-------------|
| Double $A$ | $E$ quadruples ($E \\propto A^2$) |
| Double $k$ | $E$ doubles ($E \\propto k$) |
| Double $m$ | No direct effect (but changes $v_{\\text{max}}$) |
| Change $g$ | No effect (for springs) |
      `
    },
    {
      id: 'se2-equivalent',
      type: 'text' as const,
      content: `
## Equivalent Expressions for Total Energy

The total energy can be written several ways:

$$E = \\frac{1}{2}kA^2 = \\frac{1}{2}mv_{\\text{max}}^2 = \\frac{1}{2}m\\omega^2 A^2$$

Since $\\omega^2 = k/m$:

$$E = \\frac{1}{2}m\\omega^2 A^2 = \\frac{1}{2}m \\cdot \\frac{k}{m} \\cdot A^2 = \\frac{1}{2}kA^2 \\checkmark$$

### For a Pendulum

$$E = mgh_{\\text{max}} = \\frac{1}{2}mv_{\\text{max}}^2$$

where $h_{\\text{max}}$ is the maximum height above the lowest point. For small angles:

$$h_{\\text{max}} = L(1 - \\cos\\theta_{\\text{max}}) \\approx \\frac{L\\theta_{\\text{max}}^2}{2}$$
      `
    },
    {
      id: 'se2-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Total Energy Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A mass-spring system has $k = 200$ N/m and $A = 0.05$ m. The total energy is:',
            options: [
              '$0.125$ J',
              '$0.25$ J',
              '$0.50$ J',
              '$5.0$ J'
            ],
            correctAnswer: 1,
            explanation: '$E = \\frac{1}{2}kA^2 = \\frac{1}{2}(200)(0.05)^2 = \\frac{1}{2}(200)(0.0025) = 0.25$ J.'
          },
          {
            question: 'If the amplitude of an oscillator is reduced from 10 cm to 5 cm, the total energy becomes:',
            options: [
              'Half the original',
              'One-quarter the original',
              'Double the original',
              'Unchanged'
            ],
            correctAnswer: 1,
            explanation: '$E \\propto A^2$. Halving $A$: $E \\to (1/2)^2 E = E/4$. The energy is one-quarter of the original.'
          },
          {
            question: 'Two springs ($k_1 = 100$ N/m, $k_2 = 400$ N/m) oscillate with the same amplitude. The ratio $E_1/E_2$ is:',
            options: [
              '$1/4$',
              '$1/2$',
              '$2$',
              '$4$'
            ],
            correctAnswer: 0,
            explanation: '$E = \\frac{1}{2}kA^2$. Same $A$, so $E_1/E_2 = k_1/k_2 = 100/400 = 1/4$.'
          }
        ]
      }
    },
    {
      id: 'se2-energy-drill',
      type: 'input-boxes' as const,
      content: `
**Energy Drill** 🧮

1) A 0.50 kg mass on a spring ($k = 200$ N/m) has a total energy of 1.0 J. What is the amplitude? (in m)

2) With the same system, what is $v_{\\text{max}}$? (in m/s)

3) A different spring has $k = 80$ N/m and $A = 0.25$ m. What is the total energy? (in J)

*Round all answers to 3 significant figures.*
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.1', '2.0', '2.5'],
        hint1: '$E = \\frac{1}{2}kA^2 \\Rightarrow A = \\sqrt{2E/k} = \\sqrt{2(1.0)/200}$',
        hint2: '$\\frac{1}{2}mv_{\\text{max}}^2 = E \\Rightarrow v_{\\text{max}} = \\sqrt{2E/m}$',
        hint3: '$E = \\frac{1}{2}(80)(0.25)^2$',
        explanation: '1) $A = \\sqrt{2(1.0)/200} = \\sqrt{0.01} = 0.1$ m. 2) $v_{\\text{max}} = \\sqrt{2(1.0)/0.50} = \\sqrt{4.0} = 2.0$ m/s. 3) $E = \\frac{1}{2}(80)(0.0625) = 2.5$ J.'
      }
    },
    {
      id: 'se2-dropdown-check',
      type: 'dropdown-select' as const,
      content: `
**Total Energy Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The total mechanical energy of a mass-spring system in SHM depends on:',
            options: ['amplitude only', 'spring constant only', 'both amplitude and spring constant', 'mass and amplitude'],
            correctIndex: 2,
            explanation: '$E = \\frac{1}{2}kA^2$. Total energy depends on both the spring constant and the amplitude.'
          },
          {
            label: 'If the amplitude of oscillation is doubled, the total energy:',
            options: ['quadruples', 'doubles', 'stays the same', 'halves'],
            correctIndex: 0,
            explanation: 'Since $E \\propto A^2$, doubling the amplitude quadruples the total energy.'
          },
          {
            label: 'Which expression correctly gives the total energy of a mass-spring SHM system?',
            options: ['$\\tfrac{1}{2} kA^{2}$', '$\\tfrac{1}{2} mv^{2}max$', '$\\tfrac{1}{2} m\\omega^{2}A^{2}$', 'all of these'],
            correctIndex: 3,
            explanation: 'The total energy can be expressed as $\\frac{1}{2}kA^2 = \\frac{1}{2}mv_{\\text{max}}^2 = \\frac{1}{2}m\\omega^2 A^2$. All three are equivalent.'
          }
        ]
      }
    },
    {
      id: 'se2-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Total Energy** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A mass oscillates with total energy $E$. The spring constant is doubled and the amplitude is halved. The new total energy is:',
            options: [
              '$E/2$',
              '$E$',
              '$2E$',
              '$E/4$'
            ],
            correctAnswer: 0,
            explanation: '$E_{\\text{new}} = \\frac{1}{2}(2k)(A/2)^2 = \\frac{1}{2}(2k)(A^2/4) = \\frac{1}{2} \\cdot \\frac{1}{2}kA^2 = E/2$.'
          },
          {
            question: 'A block on a spring has $E = 2.0$ J. At a displacement where $PE = 0.5$ J, the KE is:',
            options: [
              '$0.5$ J',
              '$1.0$ J',
              '$1.5$ J',
              '$2.5$ J'
            ],
            correctAnswer: 2,
            explanation: '$E = KE + PE \\Rightarrow KE = E - PE = 2.0 - 0.5 = 1.5$ J.'
          }
        ]
      }
    }
  ]
}
