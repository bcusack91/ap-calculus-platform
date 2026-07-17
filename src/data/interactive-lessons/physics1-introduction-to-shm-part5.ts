export const physics1IntroductionToShmPart5Data = {
  topicSlug: 'introduction-to-shm',
  sections: [
    {
      id: 'sh5-intro',
      type: 'text' as const,
      content: `
# 🔄 Amplitude, Period, and Frequency Relationships

**Part 5 of 7 — Connecting the Parameters**

Amplitude, period, and frequency are three fundamental quantities that describe every SHM system. Understanding their relationships is crucial for AP Physics 1.
      `
    },
    {
      id: 'sh5-definitions',
      type: 'text' as const,
      content: `
## Key Definitions

| Quantity | Symbol | Units | Definition |
|----------|--------|-------|-----------|
| **Amplitude** | $A$ | meters (m) | Maximum displacement from equilibrium |
| **Period** | $T$ | seconds (s) | Time for one complete oscillation |
| **Frequency** | $f$ | hertz (Hz = 1/s) | Number of oscillations per second |
| **Angular frequency** | $\\omega$ | rad/s | Rate of change of phase angle |

### Fundamental Relationships

$$f = \\frac{1}{T} \\quad \\text{and} \\quad T = \\frac{1}{f}$$

$$\\omega = 2\\pi f = \\frac{2\\pi}{T}$$

### The Independence of Amplitude

A critical AP concept: **amplitude does NOT affect period or frequency** in ideal SHM.

- A mass-spring with $A = 10$ cm has the same period as one with $A = 1$ cm (same $m$ and $k$).
- A pendulum swinging 5° has the same period as one swinging 10° (same $L$, small angles).
      `
    },
    {
      id: 'sh5-connected',
      type: 'text' as const,
      content: `
## How Parameters Connect

### Maximum Values

$$v_{\\text{max}} = A\\omega = 2\\pi f A = \\frac{2\\pi A}{T}$$

$$a_{\\text{max}} = A\\omega^2 = 4\\pi^2 f^2 A = \\frac{4\\pi^2 A}{T^2}$$

### What Determines Period?

| System | Period Formula | Depends On | Independent Of |
|--------|--------------|-----------|---------------|
| Mass-spring | $T = 2\\pi\\sqrt{m/k}$ | mass, spring constant | amplitude, gravity |
| Pendulum | $T = 2\\pi\\sqrt{L/g}$ | length, gravity | amplitude, mass |

### Doubling Experiments

| Change | Effect on $T$ | Effect on $f$ | Effect on $v_{\\text{max}}$ |
|--------|-------------|-------------|----------------------|
| Double $A$ | No change | No change | Doubles |
| Double $m$ (spring) | Increases by $\\sqrt{2}$ | Decreases by $\\sqrt{2}$ | Decreases by... |
| Double $k$ (spring) | Decreases by $\\sqrt{2}$ | Increases by $\\sqrt{2}$ | Increases by... |
| Double $L$ (pendulum) | Increases by $\\sqrt{2}$ | Decreases by $\\sqrt{2}$ | — |
      `
    },
    {
      id: 'sh5-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Concept Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A mass on a spring oscillates at 2.0 Hz. If the amplitude is doubled (keeping m and k the same), the new frequency is:',
            options: [
              '1.0 Hz',
              '2.0 Hz',
              '4.0 Hz',
              '$2\\sqrt{2}$ Hz'
            ],
            correctAnswer: 1,
            explanation: 'Frequency depends only on $m$ and $k$: $f = (1/2\\pi)\\sqrt{k/m}$. Changing amplitude does NOT change the frequency.'
          },
          {
            question: 'An oscillator has $T = 0.50$ s. Its angular frequency is:',
            options: [
              '$2\\pi$ rad/s',
              '$4\\pi$ rad/s',
              '$\\pi$ rad/s',
              '$0.50$ rad/s'
            ],
            correctAnswer: 1,
            explanation: '$\\omega = 2\\pi/T = 2\\pi/0.50 = 4\\pi \\approx 12.57$ rad/s.'
          },
          {
            question: 'Doubling the amplitude of SHM while keeping the period constant will:',
            options: [
              'Double the maximum velocity',
              'Quadruple the maximum velocity',
              'Not change the maximum velocity',
              'Halve the maximum velocity'
            ],
            correctAnswer: 0,
            explanation: '$v_{\\text{max}} = A\\omega$. If $A \\to 2A$ and $\\omega$ stays the same, then $v_{\\text{max}} \\to 2A\\omega$, which is double.'
          }
        ]
      }
    },
    {
      id: 'sh5-conversions',
      type: 'input-boxes' as const,
      content: `
**Parameter Conversions** 🧮

1) An oscillator has $f = 5.0$ Hz. What is its period? (in seconds)

2) An oscillator has $T = 0.25$ s. What is its angular frequency? (in rad/s, round to 3 significant figures)

3) A spring system has $k = 200$ N/m and $m = 0.50$ kg with amplitude $A = 0.10$ m. What is the maximum speed? (in m/s)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.2', '25.13', '2.0'],
        hint1: '$T = 1/f = 1/5.0$',
        hint2: '$\\omega = 2\\pi/T = 2\\pi/0.25$',
        hint3: '$v_{\\text{max}} = A\\omega = A\\sqrt{k/m} = 0.10\\sqrt{200/0.50}$',
        explanation: '1) $T = 1/5.0 = 0.2$ s. 2) $\\omega = 2\\pi/0.25 = 8\\pi = 25.13$ rad/s. 3) $\\omega = \\sqrt{200/0.50} = \\sqrt{400} = 20$ rad/s. $v_{\\text{max}} = 0.10(20) = 2.0$ m/s.'
      }
    },
    {
      id: 'sh5-dropdown-review',
      type: 'dropdown-select' as const,
      content: `
**Parameter Review** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The frequency of a mass-spring system is determined by:',
            options: ['the amplitude', 'the mass and spring constant', 'the initial velocity', 'the gravitational field'],
            correctIndex: 1,
            explanation: 'The frequency of a mass-spring system depends on $m$ and $k$: $f = (1/2\\pi)\\sqrt{k/m}$.'
          },
          {
            label: 'If the amplitude of oscillation is doubled, the period:',
            options: ['doubles', 'stays the same', 'halves', 'quadruples'],
            correctIndex: 1,
            explanation: 'Amplitude does not affect the period or frequency in ideal SHM. Only $m$ and $k$ (or $L$ and $g$) matter.'
          },
          {
            label: 'If the angular frequency ω is doubled (same amplitude), the maximum acceleration is:',
            options: ['halved', 'doubled', 'quadrupled', 'unchanged'],
            correctIndex: 2,
            explanation: '$a_{\\text{max}} = A\\omega^2$. Doubling both $A$ and $\\omega$: $a_{\\text{max}} \\to (2A)(2\\omega)^2 = (2A)(4\\omega^2) = 8A\\omega^2$... but doubling $A$ alone: $2A\\omega^2$, that is doubled. Doubling $\\omega$ alone: $A(2\\omega)^2 = 4A\\omega^2$ — quadrupled.'
          }
        ]
      }
    },
    {
      id: 'sh5-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Amplitude, Period, Frequency** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A spring system has $f = 10$ Hz and $A = 0.05$ m. The maximum acceleration is closest to:',
            options: [
              '$20$ $m/s^{2}$',
              '$100$ $m/s^{2}$',
              '$200$ $m/s^{2}$',
              '$2000$ $m/s^{2}$'
            ],
            correctAnswer: 2,
            explanation: '$\\omega = 2\\pi f = 20\\pi$. $a_{\\text{max}} = A\\omega^2 = 0.05(20\\pi)^2 = 0.05(400\\pi^2) = 0.05(3948) \\approx 197 \\approx 200$ $m/s^{2}$.'
          },
          {
            question: 'If you triple the frequency of an oscillator (same amplitude), the maximum speed:',
            options: [
              'Triples',
              'Is unchanged',
              'Increases by 9',
              'Decreases by 3'
            ],
            correctAnswer: 0,
            explanation: '$v_{\\text{max}} = A\\omega = A(2\\pi f)$. Tripling $f$: $v_{\\text{max}} \\to A(2\\pi)(3f) = 3A\\omega$. The max speed triples.'
          }
        ]
      }
    }
  ]
}
