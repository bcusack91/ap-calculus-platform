export const physics1FluidsContinuityPart1Data = {
  topicSlug: 'fluids-continuity',
  sections: [
    {
      id: 'fc1-intro',
      type: 'text' as const,
      content: `
# 💧 Volume Flow Rate: $Q = Av$

**Part 1 of 7 — Fluids: Continuity**

Now we move from STATIC fluids to MOVING fluids. The first key concept: how fast fluid passes through a region. We measure this with **volume flow rate**.

**In this lesson you will learn:**
- The definition $Q = A\\,v$
- Units (m³/s) and conversions to L/min, gal/min
- How $Q$ depends on cross-section and speed
- Why $Q$ matters before we get to continuity
      `
    },
    {
      id: 'fc1-definition',
      type: 'text' as const,
      content: `
## Definition

$$Q = A\\, v$$

- $Q$: volume flow rate (m³/s)
- $A$: cross-sectional area (m²)
- $v$: average fluid speed perpendicular to $A$ (m/s)

### Why It Works

In time $\\Delta t$, fluid moving at speed $v$ travels a distance $v \\Delta t$. The volume that crosses the area is:

$$\\Delta V = A (v \\Delta t)$$

So:

$$Q = \\frac{\\Delta V}{\\Delta t} = A v$$

### Useful Conversions

| Equivalent |
|-----------|
| $1 \\text{ m}^3/\\text{s} = 1000 \\text{ L/s}$ |
| $1 \\text{ L/s} = 60 \\text{ L/min}$ |
| $1 \\text{ gal} \\approx 3.785 \\text{ L}$ |

### Reality Anchors
- A garden hose: ~$10^{-4}$ m³/s (0.1 L/s)
- A bathroom faucet: ~$10^{-4}$ – $10^{-3}$ m³/s
- A river the size of the Mississippi: ~$10^{4}$ m³/s
      `
    },
    {
      id: 'fc1-mc',
      type: 'multiple-choice' as const,
      content: `
**Volume Flow Rate Concepts** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Volume flow rate $Q$ has units of:',
            options: ['m/s', 'm²/s', 'm³/s', 'kg/s'],
            correctAnswer: 2,
            explanation: '$Q = Av$, units = m² × m/s = m³/s.'
          },
          {
            question: 'If you double the cross-sectional area at constant speed:',
            options: ['$Q$ halves', '$Q$ doubles', '$Q$ unchanged', '$Q$ becomes zero'],
            correctAnswer: 1,
            explanation: '$Q = Av$. Doubling $A$ doubles $Q$.'
          },
          {
            question: 'A pipe carries water at 0.5 m³/s with $A = 0.10$ m². Flow speed?',
            options: ['0.05 m/s', '0.5 m/s', '5 m/s', '50 m/s'],
            correctAnswer: 2,
            explanation: '$v = Q/A = 0.5/0.10 = 5$ m/s.'
          }
        ]
      }
    },
    {
      id: 'fc1-input',
      type: 'input-boxes' as const,
      content: `
**Flow Rate Calculations** 🧮

1) Pipe area $A = 0.020$ m², fluid speed $v = 3.0$ m/s. $Q$ (m³/s)?

2) River area $A = 50$ m², speed 1.2 m/s. $Q$ (m³/s)?

3) A faucet delivers 2.0 L/s. Convert to m³/s.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.06', '60', '0.002'],
        hint1: '$Q = Av$.',
        hint2: '$Q = Av$.',
        hint3: '1 L = $10^{-3}$ m³.',
        explanation: '1) $Q = 0.020 \\times 3.0 = 0.060$ m³/s. 2) $Q = 50 \\times 1.2 = 60$ m³/s. 3) 2.0 L/s × $10^{-3}$ m³/L = 0.002 m³/s.'
      }
    },
    {
      id: 'fc1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Flow Rate Reasoning** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Same fluid moves through pipes A and B with $v_A = v_B$ but $A_A < A_B$. The flow rate $Q$ is:',
            options: ['Greater in A', 'Greater in B', 'Equal', 'Zero in B'],
            correctIndex: 1,
            explanation: '$Q = Av$, larger area at same speed → larger $Q$.'
          },
          {
            label: 'A pipe carries the same volume of water but speed doubles. The cross-sectional area must:',
            options: ['Double', 'Halve', 'Quadruple', 'Stay the same'],
            correctIndex: 1,
            explanation: 'For constant $Q$, $A$ and $v$ are inversely related. Speed × 2 → area × ½.'
          },
          {
            label: 'A river is 100 m wide and 5 m deep, flowing at 2 m/s. Volume flow rate is:',
            options: ['10 m³/s', '500 m³/s', '1000 m³/s', '5000 m³/s'],
            correctIndex: 2,
            explanation: '$A = 500$ m², $Q = 500 \\times 2 = 1000$ m³/s.'
          },
          {
            label: 'A garden hose with $A = 1.0\\times10^{-4}$ m² carries 0.5 L/s. Speed of water?',
            options: ['0.5 m/s', '5 m/s', '50 m/s', '500 m/s'],
            correctIndex: 1,
            explanation: '$Q = 5\\times10^{-4}$ m³/s. $v = Q/A = 5\\times10^{-4}/10^{-4} = 5$ m/s.'
          }
        ]
      }
    },
    {
      id: 'fc1-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Volume Flow Rate** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A pump delivers 0.012 m³/s of water through a pipe of cross-section $4.0\\times10^{-4}$ m². Flow speed?',
            options: ['3 m/s', '12 m/s', '30 m/s', '300 m/s'],
            correctAnswer: 2,
            explanation: '$v = Q/A = 0.012/(4.0\\times10^{-4}) = 30$ m/s.'
          },
          {
            question: 'A spillway 8 m wide × 1.5 m deep carries water at 2.5 m/s. Flow rate (m³/s)?',
            options: ['12', '20', '30', '60'],
            correctAnswer: 2,
            explanation: '$A = 12$ m². $Q = Av = 12 \\times 2.5 = 30$ m³/s.'
          }
        ]
      }
    }
  ]
}
