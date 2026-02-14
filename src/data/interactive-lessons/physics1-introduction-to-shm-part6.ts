export const physics1IntroductionToShmPart6Data = {
  topicSlug: 'introduction-to-shm',
  sections: [
    {
      id: 'sh6-intro',
      type: 'text' as const,
      content: `
# 🛠️ Problem-Solving Workshop

**Part 6 of 7 — Introduction to SHM**

Time to put all your SHM knowledge to work! This workshop covers mass-spring systems, pendulums, sinusoidal relationships, and connecting parameters.
      `
    },
    {
      id: 'sh6-strategy',
      type: 'text' as const,
      content: `
## Problem-Solving Strategy for SHM

1. **Identify the system** — Is it a mass-spring or a pendulum?
2. **Choose the correct period formula**:
   - Spring: $T = 2\\pi\\sqrt{m/k}$
   - Pendulum: $T = 2\\pi\\sqrt{L/g}$
3. **Identify what is given** and what is asked for ($T$, $f$, $\\omega$, $A$, $v_{\\text{max}}$, $a_{\\text{max}}$)
4. **Use relationships**: $f = 1/T$, $\\omega = 2\\pi f$, $v_{\\text{max}} = A\\omega$, $a_{\\text{max}} = A\\omega^2$
5. **Remember key independences**: amplitude does not affect $T$ or $f$

### Common Formulas

$$T = 2\\pi\\sqrt{\\frac{m}{k}} \\qquad T = 2\\pi\\sqrt{\\frac{L}{g}}$$

$$v_{\\text{max}} = A\\omega \\qquad a_{\\text{max}} = A\\omega^2 \\qquad a = -\\omega^2 x$$
      `
    },
    {
      id: 'sh6-problem1',
      type: 'multiple-choice' as const,
      content: `
**Problem 1** 🎯

A 0.50 kg block on a spring oscillates with a period of 0.40 s and an amplitude of 0.12 m. What is the spring constant?
      `,
      exercise: {
        questions: [
          {
            question: 'Find the spring constant $k$.',
            options: [
              '$12.3$ N/m',
              '$49.3$ N/m',
              '$123$ N/m',
              '$197$ N/m'
            ],
            correctAnswer: 2,
            explanation: '$T = 2\\pi\\sqrt{m/k} \\Rightarrow k = \\frac{4\\pi^2 m}{T^2} = \\frac{4\\pi^2(0.50)}{(0.40)^2} = \\frac{19.74}{0.16} = 123.4 \\approx 123$ N/m.'
          },
          {
            question: 'What is the maximum speed of the block?',
            options: [
              '$0.60$ m/s',
              '$1.88$ m/s',
              '$3.77$ m/s',
              '$15.7$ m/s'
            ],
            correctAnswer: 1,
            explanation: '$\\omega = 2\\pi/T = 2\\pi/0.40 = 5\\pi = 15.71$ rad/s. $v_{\\text{max}} = A\\omega = 0.12(15.71) = 1.885 \\approx 1.88$ m/s.'
          }
        ]
      }
    },
    {
      id: 'sh6-problem2',
      type: 'input-boxes' as const,
      content: `
**Problem 2** 🧮

A pendulum clock keeps perfect time on Earth ($g = 9.8$ m/s²). It is taken to a planet where $g = 4.9$ m/s².

1) By what factor does the period change? (give as a decimal, round to 2 decimal places)

2) If the Earth period was 1.00 s, what is the new period? (in seconds, round to 2 decimal places)

3) Will the clock run fast or slow on the new planet? (type "fast" or "slow")
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['1.41', '1.41', 'slow'],
        hint1: '$T \\propto 1/\\sqrt{g}$. Factor $= \\sqrt{g_{\\text{Earth}}/g_{\\text{planet}}} = \\sqrt{9.8/4.9}$',
        hint2: '$T_{\\text{new}} = 1.00 \\times \\sqrt{2}$',
        hint3: 'If each swing takes longer, does the clock run fast or slow?',
        explanation: '1) Factor $= \\sqrt{9.8/4.9} = \\sqrt{2} = 1.414 \\approx 1.41$. 2) $T_{\\text{new}} = 1.00 \\times 1.41 = 1.41$ s. 3) Each swing takes longer, so the clock runs slow — it loses time.'
      }
    },
    {
      id: 'sh6-problem3',
      type: 'multiple-choice' as const,
      content: `
**Problem 3** 🎯

An object in SHM has a position given by $x(t) = 0.15\\cos(10t)$ (in meters, with $t$ in seconds).
      `,
      exercise: {
        questions: [
          {
            question: 'What is the amplitude and angular frequency?',
            options: [
              '$A = 0.15$ m, $\\omega = 10$ rad/s',
              '$A = 10$ m, $\\omega = 0.15$ rad/s',
              '$A = 0.15$ m, $\\omega = 10\\pi$ rad/s',
              '$A = 1.5$ m, $\\omega = 1.0$ rad/s'
            ],
            correctAnswer: 0,
            explanation: 'Reading directly from $x = A\\cos(\\omega t)$: $A = 0.15$ m and $\\omega = 10$ rad/s.'
          },
          {
            question: 'What is the period of oscillation?',
            options: [
              '$0.10$ s',
              '$0.628$ s',
              '$1.0$ s',
              '$6.28$ s'
            ],
            correctAnswer: 1,
            explanation: '$T = 2\\pi/\\omega = 2\\pi/10 = 0.2\\pi = 0.628$ s.'
          },
          {
            question: 'What is the maximum acceleration?',
            options: [
              '$1.5$ m/s²',
              '$10$ m/s²',
              '$15$ m/s²',
              '$150$ m/s²'
            ],
            correctAnswer: 2,
            explanation: '$a_{\\text{max}} = A\\omega^2 = 0.15 \\times 10^2 = 0.15 \\times 100 = 15$ m/s².'
          }
        ]
      }
    },
    {
      id: 'sh6-problem4',
      type: 'dropdown-select' as const,
      content: `
**Problem 4 — Conceptual Reasoning** 🔍

Two identical springs each have spring constant $k$. A mass $m$ is attached.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'When two identical springs (each with constant k) are connected in parallel, the effective spring constant is:',
            options: ['$2k$', '$k/2$', '$k$', '$4k$'],
            correctIndex: 0,
            explanation: 'Springs in parallel: $k_{\\text{eff}} = k_1 + k_2 = k + k = 2k$. Both springs pull together.'
          },
          {
            label: 'If a single spring gives period T, the period with two identical springs in parallel is:',
            options: ['$T\\sqrt{2}$', '$T/\\sqrt{2}$', '$2T$', '$T/2$'],
            correctIndex: 1,
            explanation: '$T_{\\text{parallel}} = 2\\pi\\sqrt{m/(2k)} = (1/\\sqrt{2}) \\times 2\\pi\\sqrt{m/k} = T/\\sqrt{2}$.'
          },
          {
            label: 'When two identical springs (each with constant k) are connected in series, the effective spring constant is:',
            options: ['$2k$', '$k/2$', '$k$', '$4k$'],
            correctIndex: 1,
            explanation: 'Springs in series: $1/k_{\\text{eff}} = 1/k + 1/k = 2/k$, so $k_{\\text{eff}} = k/2$.'
          }
        ]
      }
    },
    {
      id: 'sh6-problem5',
      type: 'input-boxes' as const,
      content: `
**Problem 5 — Challenge** 🧮

A 2.0 kg mass hangs from a vertical spring and stretches it 0.10 m to a new equilibrium. It is then pulled down an additional 0.05 m and released.

1) What is the spring constant $k$? (in N/m, use $g = 9.8$ m/s²)

2) What is the period of oscillation? (in seconds, round to 2 decimal places)

3) What is the maximum speed? (in m/s, round to 2 decimal places)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['196', '0.63', '0.50'],
        hint1: 'At equilibrium: $kx = mg \\Rightarrow k = mg/x = 2.0(9.8)/0.10$',
        hint2: '$T = 2\\pi\\sqrt{m/k} = 2\\pi\\sqrt{2.0/196}$',
        hint3: '$v_{\\text{max}} = A\\omega$ where $A = 0.05$ m and $\\omega = 2\\pi/T$',
        explanation: '1) $k = mg/x = 2.0(9.8)/0.10 = 196$ N/m. 2) $T = 2\\pi\\sqrt{2.0/196} = 2\\pi\\sqrt{0.01020} = 2\\pi(0.1010) = 0.635 \\approx 0.63$ s. 3) $\\omega = 2\\pi/0.635 = 9.90$ rad/s. $v_{\\text{max}} = 0.05(9.90) = 0.495 \\approx 0.50$ m/s.'
      }
    },
    {
      id: 'sh6-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Problem Workshop** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A mass-spring system has $m = 1.0$ kg and $k = 100$ N/m. If the amplitude is tripled from 0.05 m to 0.15 m, what happens to the period?',
            options: [
              'Triples',
              'Increases by $\\sqrt{3}$',
              'Remains the same',
              'Decreases by $\\sqrt{3}$'
            ],
            correctAnswer: 2,
            explanation: 'The period $T = 2\\pi\\sqrt{m/k}$ depends only on mass and spring constant, not amplitude. The period is unchanged.'
          }
        ]
      }
    }
  ]
}
