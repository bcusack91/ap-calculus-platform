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

### Springs in Combination

| Configuration | Effective $k$ |
|--------------|---------------|
| Parallel | $k_{\\text{eff}} = k_1 + k_2$ |
| Series | $\\frac{1}{k_{\\text{eff}}} = \\frac{1}{k_1} + \\frac{1}{k_2}$ |
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
              '2',
              '$\\sqrt{2}$',
              '4',
              '$1/\\sqrt{2}$'
            ],
            correctAnswer: 1,
            explanation: '$T = 2\\pi\\sqrt{m/k}$. If $m \\to 2m$: $T \\to 2\\pi\\sqrt{2m/k} = \\sqrt{2} \\cdot T$.'
          },
          {
            question: 'Doubling the amplitude of a mass-spring oscillation:',
            options: [
              'Doubles the period',
              'Halves the period',
              'Has no effect on the period',
              'Doubles the frequency'
            ],
            correctAnswer: 2,
            explanation: 'The period of a mass-spring system depends only on $m$ and $k$, NOT on amplitude. $T = 2\\pi\\sqrt{m/k}$.'
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

1) A 0.5 kg mass on a spring ($k = 200$ N/m) oscillates. What is the period? (in seconds, round to 2 decimal places)

2) A mass-spring system has $T = 0.8$ s and $k = 50$ N/m. What is the mass? (in kg, round to 2 decimal places)

3) Two springs ($k_1 = 100$ N/m, $k_2 = 300$ N/m) are connected in parallel to a 2 kg mass. What is the period? (in seconds, round to 2 decimal places)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.31', '0.81', '0.44'],
        hint1: '$T = 2\\pi\\sqrt{m/k} = 2\\pi\\sqrt{0.5/200}$',
        hint2: '$T = 2\\pi\\sqrt{m/k} \\Rightarrow m = kT^2/(4\\pi^2)$',
        hint3: '$k_{\\text{eff}} = k_1 + k_2 = 400$ N/m. $T = 2\\pi\\sqrt{2/400}$',
        explanation: '1) $T = 2\\pi\\sqrt{0.5/200} = 2\\pi\\sqrt{0.0025} = 2\\pi(0.05) = 0.314 \\approx 0.31$ s. 2) $m = 50(0.64)/(4\\pi^2) = 32/39.48 = 0.810 \\approx 0.81$ kg. 3) $k_{\\text{eff}} = 400$. $T = 2\\pi\\sqrt{2/400} = 2\\pi\\sqrt{0.005} = 2\\pi(0.0707) = 0.444 \\approx 0.44$ s.'
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
            options: ['increases', 'decreases', 'stays the same', 'becomes zero'],
            correctIndex: 0,
            explanation: 'Increasing mass increases the period: $T \\propto \\sqrt{m}$. More mass → slower oscillation.'
          },
          {
            label: 'If you use a stiffer spring (larger $k$), the period:',
            options: ['increases', 'decreases', 'stays the same', 'becomes infinite'],
            correctIndex: 1,
            explanation: 'A stiffer spring (larger $k$) decreases the period: $T \\propto 1/\\sqrt{k}$. Stiffer → faster oscillation.'
          },
          {
            label: 'The effective spring constant for two springs in parallel is:',
            options: ['k₁ + k₂', '1/(1/k₁ + 1/k₂)', 'k₁k₂', 'k₁ - k₂'],
            correctIndex: 0,
            explanation: 'Springs in parallel: $k_{\\text{eff}} = k_1 + k_2$. They share the displacement.'
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
            question: 'A spring-mass system oscillates with period $T$. If the spring is cut in half and the same mass is attached to one piece, the new period is:',
            options: [
              '$T/\\sqrt{2}$',
              '$T/2$',
              '$\\sqrt{2}T$',
              '$2T$'
            ],
            correctAnswer: 0,
            explanation: 'Cutting a spring in half doubles its spring constant ($k\' = 2k$). $T\' = 2\\pi\\sqrt{m/(2k)} = T/\\sqrt{2}$.'
          },
          {
            question: 'On the Moon ($g_{\\text{Moon}} = g/6$), a mass-spring system will oscillate with a period that is:',
            options: [
              '6 times longer',
              '$\\sqrt{6}$ times longer',
              'The same as on Earth',
              '6 times shorter'
            ],
            correctAnswer: 2,
            explanation: 'The period of a mass-spring system ($T = 2\\pi\\sqrt{m/k}$) does not depend on $g$. It oscillates with the same period on the Moon.'
          }
        ]
      }
    }
  ]
}
