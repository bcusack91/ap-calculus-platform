export const physics1IntroductionToShmPart3Data = {
  topicSlug: 'introduction-to-shm',
  sections: [
    {
      id: 'sh3-intro',
      type: 'text' as const,
      content: `
# 🕰️ The Simple Pendulum

**Part 3 of 7 — $T = 2\\pi\\sqrt{L/g}$**

A simple pendulum — a mass on a string swinging back and forth — is another classic SHM system (for small angles). Its period depends on the string length and gravitational acceleration.
      `
    },
    {
      id: 'sh3-period',
      type: 'text' as const,
      content: `
## Period of a Simple Pendulum

For small angular displacements ($\\theta < 15°$):

$$T = 2\\pi\\sqrt{\\frac{L}{g}}$$

Where:
- $L$ = length of the pendulum (from pivot to center of mass)
- $g$ = gravitational acceleration ($9.8$ m/s² on Earth)

### Key Dependencies

| Factor | Effect on Period |
|--------|-----------------|
| Increase length $L$ | Period **increases** |
| Increase gravity $g$ | Period **decreases** |
| Change mass $m$ | **No effect!** |
| Change amplitude (small) | **No effect!** |

### Why No Mass Dependence?

The restoring force is the tangential component of gravity: $F = -mg\\sin\\theta$. For small angles, $\\sin\\theta \\approx \\theta$:

$$F \\approx -mg\\theta = -mg\\frac{x}{L} = -\\frac{mg}{L}x$$

The effective spring constant is $k_{\\text{eff}} = mg/L$. Period: $T = 2\\pi\\sqrt{m/k_{\\text{eff}}} = 2\\pi\\sqrt{m/(mg/L)} = 2\\pi\\sqrt{L/g}$. Mass cancels!
      `
    },
    {
      id: 'sh3-comparison',
      type: 'text' as const,
      content: `
## Comparing Spring and Pendulum

| Property | Mass-Spring | Simple Pendulum |
|----------|------------|-----------------|
| Period | $T = 2\\pi\\sqrt{m/k}$ | $T = 2\\pi\\sqrt{L/g}$ |
| Depends on mass? | **Yes** | **No** |
| Depends on gravity? | **No** | **Yes** |
| Depends on amplitude? | **No** | **No** (small angles) |

### The Pendulum as a Clock

The independence of period from mass and (small) amplitude is what makes pendulums excellent timekeeping devices. Galileo first noticed this property!

### Physical Pendulum

For an extended object (not a point mass on a string):

$$T = 2\\pi\\sqrt{\\frac{I}{mgd}}$$

where $I$ is the rotational inertia about the pivot and $d$ is the distance from the pivot to the center of mass.
      `
    },
    {
      id: 'sh3-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Pendulum Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Doubling the length of a simple pendulum changes the period by a factor of:',
            options: [
              '2',
              '$\\sqrt{2}$',
              '4',
              '$1/\\sqrt{2}$'
            ],
            correctAnswer: 1,
            explanation: '$T = 2\\pi\\sqrt{L/g}$. If $L \\to 2L$: $T \\to 2\\pi\\sqrt{2L/g} = \\sqrt{2} \\cdot T$.'
          },
          {
            question: 'A pendulum on the Moon ($g_{\\text{Moon}} = g/6$) has a period that is:',
            options: [
              '6 times the Earth period',
              '$\\sqrt{6}$ times the Earth period',
              'The same as on Earth',
              '$1/\\sqrt{6}$ times the Earth period'
            ],
            correctAnswer: 1,
            explanation: '$T \\propto 1/\\sqrt{g}$. If $g \\to g/6$: $T \\to T\\sqrt{6} \\approx 2.45T$. The pendulum swings $\\sqrt{6}$ times more slowly.'
          },
          {
            question: 'Replacing the pendulum bob with a heavier mass (same length):',
            options: [
              'Increases the period',
              'Decreases the period',
              'Has no effect on the period',
              'Stops the oscillation'
            ],
            correctAnswer: 2,
            explanation: 'The period $T = 2\\pi\\sqrt{L/g}$ does not depend on mass. Heavier or lighter, the period is the same.'
          }
        ]
      }
    },
    {
      id: 'sh3-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Pendulum Calculations** 🧮

1) A pendulum is 1.0 m long. What is its period on Earth? (in seconds, round to 3 significant figures, use $g = 9.8$ m/s²)

2) A pendulum has a period of 3.0 s on Earth. What is its length? (in m, round to 3 significant figures)

3) A pendulum has period 2.0 s on Earth. What would its period be on a planet where $g = 2.45$ m/s²? (in s)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['2.01', '2.24', '4.0', '2.010', '2.240', '4.00'],
        hint1: '$T = 2\\pi\\sqrt{1.0/9.8}$',
        hint2: '$T = 2\\pi\\sqrt{L/g} \\Rightarrow L = gT^2/(4\\pi^2) = 9.8(9)/(4\\pi^2)$',
        hint3: '$T_2/T_1 = \\sqrt{g_1/g_2} = \\sqrt{9.8/2.45} = \\sqrt{4} = 2$. $T_2 = 2 \\times 2.0$',
        explanation: '1) $T = 2\\pi\\sqrt{1/9.8} = 2\\pi(0.3194) = 2.007 \\approx 2.01$ s. 2) $L = 9.8(9)/(39.48) = 88.2/39.48 = 2.234 \\approx 2.24$ m. 3) $T_2 = 2.0 \\times \\sqrt{9.8/2.45} = 2.0 \\times 2 = 4.0$ s.'
      }
    },
    {
      id: 'sh3-dropdown-review',
      type: 'dropdown-select' as const,
      content: `
**Pendulum Review** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The period of a simple pendulum depends on:',
            options: ['mass and length', 'length and gravity', 'mass and gravity', 'amplitude and length'],
            correctIndex: 1,
            explanation: 'The pendulum period $T = 2\\pi\\sqrt{L/g}$ depends on length and gravity only.'
          },
          {
            label: 'If the mass of a pendulum bob is doubled, the period:',
            options: ['increases', 'decreases', 'stays the same', 'becomes zero'],
            correctIndex: 2,
            explanation: 'Doubling the mass has no effect on the pendulum period since mass cancels out.'
          },
          {
            label: 'The small-angle approximation used for pendulum SHM is:',
            options: ['sin θ ≈ θ', 'sin θ ≈ 1', 'cos θ ≈ θ', 'tan θ ≈ 1'],
            correctIndex: 0,
            explanation: 'The small-angle approximation $\\sin\\theta \\approx \\theta$ (in radians) is what makes pendulum motion approximately SHM.'
          }
        ]
      }
    },
    {
      id: 'sh3-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Simple Pendulum** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A grandfather clock uses a pendulum with $T = 2$ s (called the "seconds pendulum"). Its length is approximately:',
            options: [
              '0.25 m',
              '0.50 m',
              '1.0 m',
              '2.0 m'
            ],
            correctAnswer: 2,
            explanation: '$L = gT^2/(4\\pi^2) = (9.8)(4)/(39.48) = 39.2/39.48 \\approx 0.993 \\approx 1.0$ m.'
          },
          {
            question: 'A student wants to double the frequency of a pendulum. She should change the length to:',
            options: [
              '$L/2$',
              '$L/4$',
              '$2L$',
              '$4L$'
            ],
            correctAnswer: 1,
            explanation: '$f \\propto 1/\\sqrt{L}$. To double $f$: $2f \\propto 1/\\sqrt{L\'}$, so $\\sqrt{L\'} = \\sqrt{L}/2$, $L\' = L/4$.'
          }
        ]
      }
    }
  ]
}
