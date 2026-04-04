export const physics1EnergyInShmPart4Data = {
  topicSlug: 'energy-in-shm',
  sections: [
    {
      id: 'se4-intro',
      type: 'text' as const,
      content: `
# 🚀 Maximum Velocity $v_{\\text{max}} = A\\omega$

**Part 4 of 7 — Energy in Simple Harmonic Motion**

The maximum velocity is one of the most frequently tested quantities in AP Physics 1 SHM problems. It connects amplitude, angular frequency, and energy in a powerful way.
      `
    },
    {
      id: 'se4-derivation',
      type: 'text' as const,
      content: `
## Deriving $v_{\\text{max}}$

### From Energy Conservation

At equilibrium ($x = 0$), all energy is kinetic:

$$\\frac{1}{2}mv_{\\text{max}}^2 = \\frac{1}{2}kA^2$$

$$v_{\\text{max}} = A\\sqrt{\\frac{k}{m}} = A\\omega$$

### From the Velocity Equation

$$v(t) = -A\\omega\\sin(\\omega t)$$

The maximum value of $|\\sin(\\omega t)|$ is 1, so:

$$v_{\\text{max}} = A\\omega$$

### Multiple Forms

$$v_{\\text{max}} = A\\omega = 2\\pi f A = \\frac{2\\pi A}{T} = A\\sqrt{\\frac{k}{m}}$$

### How $v_{\\text{max}}$ Depends on Parameters

| Change | Effect on $v_{\\text{max}}$ |
|--------|--------------------------|
| Double $A$ | Doubles |
| Double $\\omega$ (or $f$) | Doubles |
| Double both $A$ and $\\omega$ | Quadruples |
| Double $m$ (spring) | Decreases by $\\sqrt{2}$ |
| Double $k$ (spring) | Increases by $\\sqrt{2}$ |
      `
    },
    {
      id: 'se4-energy-connection',
      type: 'text' as const,
      content: `
## Connecting $v_{\\text{max}}$ to Energy

$$E = \\frac{1}{2}mv_{\\text{max}}^2 = \\frac{1}{2}kA^2$$

This means:

$$v_{\\text{max}} = \\sqrt{\\frac{2E}{m}}$$

### Speed at Any Position (revisited)

$$v(x) = v_{\\text{max}}\\sqrt{1 - \\frac{x^2}{A^2}}$$

This elegant form shows that:
- At $x = 0$: $v = v_{\\text{max}}$
- At $x = A$: $v = 0$
- At $x = A/2$: $v = v_{\\text{max}}\\sqrt{3/4} = v_{\\text{max}}(\\sqrt{3}/2) \\approx 0.866 v_{\\text{max}}$

### Maximum Acceleration Connection

$$a_{\\text{max}} = \\omega \\cdot v_{\\text{max}} = \\omega^2 A$$

So $\\omega = a_{\\text{max}}/v_{\\text{max}}$ — a useful relationship for AP problems!
      `
    },
    {
      id: 'se4-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Maximum Velocity Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A mass on a spring has $A = 0.20$ m and $T = 0.50$ s. The maximum speed is:',
            options: [
              '$0.40$ m/s',
              '$1.26$ m/s',
              '$2.51$ m/s',
              '$6.28$ m/s'
            ],
            correctAnswer: 2,
            explanation: '$\\omega = 2\\pi/T = 2\\pi/0.50 = 4\\pi$ rad/s. $v_{\\text{max}} = A\\omega = 0.20 \\times 4\\pi = 0.80\\pi = 2.51$ m/s.'
          },
          {
            question: 'If both the amplitude and frequency are doubled, $v_{\\text{max}}$:',
            options: [
              'Doubles',
              'Triples',
              'Quadruples',
              'Stays the same'
            ],
            correctAnswer: 2,
            explanation: '$v_{\\text{max}} = A\\omega = A(2\\pi f)$. Double $A$ and double $f$: $v_{\\text{max}} \\to (2A)(2 \\times 2\\pi f) = 4A\\omega$. It quadruples.'
          },
          {
            question: 'An oscillator has $v_{\\text{max}} = 3.0$ m/s and $a_{\\text{max}} = 18$ m/s². The amplitude is:',
            options: [
              '$0.17$ m',
              '$0.50$ m',
              '$1.0$ m',
              '$6.0$ m'
            ],
            correctAnswer: 1,
            explanation: '$\\omega = a_{\\text{max}}/v_{\\text{max}} = 18/3.0 = 6.0$ rad/s. $A = v_{\\text{max}}/\\omega = 3.0/6.0 = 0.50$ m.'
          }
        ]
      }
    },
    {
      id: 'se4-calc-practice',
      type: 'input-boxes' as const,
      content: `
**Maximum Velocity Calculations** 🧮

1) A 0.25 kg block on a spring ($k = 100$ N/m) oscillates with $A = 0.08$ m. Find $v_{\\text{max}}$. (in m/s)

2) An oscillator has $v_{\\text{max}} = 5.0$ m/s and $\\omega = 10$ rad/s. Find the amplitude. (in m)

3) A mass has $v_{\\text{max}} = 2.0$ m/s and $m = 0.50$ kg. Find the total energy. (in J)

*Round all answers to 3 significant figures.*
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['1.6', '0.5', '1.0'],
        hint1: '$v_{\\text{max}} = A\\sqrt{k/m} = 0.08\\sqrt{100/0.25}$',
        hint2: '$A = v_{\\text{max}}/\\omega = 5.0/10$',
        hint3: '$E = \\frac{1}{2}mv_{\\text{max}}^2 = \\frac{1}{2}(0.50)(2.0)^2$',
        explanation: '1) $v_{\\text{max}} = 0.08\\sqrt{400} = 0.08(20) = 1.6$ m/s. 2) $A = 5.0/10 = 0.50$ m. 3) $E = \\frac{1}{2}(0.50)(4.0) = 1.0$ J.'
      }
    },
    {
      id: 'se4-dropdown-review',
      type: 'dropdown-select' as const,
      content: `
**$v_{\\text{max}}$ Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The maximum speed in SHM occurs:',
            options: ['at the endpoints', 'at equilibrium', 'at half amplitude', 'everywhere equally'],
            correctIndex: 1,
            explanation: 'Maximum speed occurs at $x = 0$ (equilibrium), where all energy is kinetic.'
          },
          {
            label: 'The maximum speed of an object in SHM is given by v_max =',
            options: ['Aω', 'Aω²', 'A/ω', '½Aω²'],
            correctIndex: 0,
            explanation: '$v_{\\text{max}} = A\\omega$. This combines the amplitude and angular frequency.'
          },
          {
            label: 'If the spring constant is doubled (same mass and amplitude), the maximum speed:',
            options: ['doubles', 'quadruples', 'stays the same', 'increases by √2'],
            correctIndex: 3,
            explanation: 'Doubling $k$ with same $m$: $\\omega = \\sqrt{k/m} \\to \\sqrt{2k/m} = \\sqrt{2}\\omega$. So $v_{\\text{max}} = A\\omega \\to A\\sqrt{2}\\omega$, increasing by $\\sqrt{2}$.'
          }
        ]
      }
    },
    {
      id: 'se4-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Maximum Velocity** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Two identical masses on springs oscillate. System A has twice the amplitude and half the frequency of System B. The ratio $v_{\\text{max,A}}/v_{\\text{max,B}}$ is:',
            options: [
              '$1/2$',
              '$1$',
              '$2$',
              '$4$'
            ],
            correctAnswer: 1,
            explanation: '$v_{\\text{max}} = 2\\pi f A$. System A: $v_A = 2\\pi(f/2)(2A) = 2\\pi fA$. System B: $v_B = 2\\pi fA$. They are equal, ratio = 1.'
          },
          {
            question: 'A mass oscillates with $v_{\\text{max}} = 4$ m/s. At what speed is $KE = 3PE$?',
            options: [
              '$2$ m/s',
              '$2\\sqrt{3}$ m/s',
              '$3$ m/s',
              '$\\sqrt{3}$ m/s'
            ],
            correctAnswer: 1,
            explanation: '$KE = 3PE$ means $KE = 3(E - KE)$, so $4KE = 3E$, $KE = (3/4)E$. $\\frac{1}{2}mv^2 = (3/4)\\frac{1}{2}mv_{\\text{max}}^2$. $v^2 = (3/4)v_{\\text{max}}^2 = (3/4)(16) = 12$. $v = 2\\sqrt{3}$ m/s.'
          }
        ]
      }
    }
  ]
}
