export const physics2KirchhoffPart3Data = {
  topicSlug: 'kirchhoffs-laws',
  sections: [
    {
      id: 'kl3-intro',
      type: 'text' as const,
      content: `
# 🔋 Single-Loop Circuits with Multiple Batteries

**Part 3 of 7 — Opposing EMFs and Finding Current Direction**

What happens when a circuit has **two or more batteries** that may oppose each other? The loop rule handles this elegantly — just be careful with signs!
      `
    },
    {
      id: 'kl3-opposing-emfs',
      type: 'text' as const,
      content: `
## Opposing EMFs

When two batteries face each other in a single loop, their EMFs partially cancel. The **net EMF** drives the current.

### Example: Two Batteries in Opposition

A loop contains:
- Battery 1: $\\varepsilon_1 = 12$ V
- Battery 2: $\\varepsilon_2 = 5$ V (opposing $\\varepsilon_1$)
- Resistor: $R = 7\\;\\Omega$

**Step 1**: Assume current flows clockwise (driven by the larger battery).

**Step 2**: Traverse clockwise, starting from the negative terminal of $\\varepsilon_1$:

$$+\\varepsilon_1 - \\varepsilon_2 - IR = 0$$
$$12 - 5 - 7I = 0$$
$$I = 1 \\text{ A (clockwise)}$$

The net EMF is $12 - 5 = 7$ V, and the current flows in the direction the larger battery "wants."

### What If You Guess Wrong?

Suppose you assumed current flows counterclockwise:

$$+\\varepsilon_2 - \\varepsilon_1 - IR = 0$$
$$5 - 12 - 7I = 0$$
$$I = -1 \\text{ A}$$

The negative sign tells you: the current is actually **clockwise** (opposite to your assumption). The magnitude is the same!
      `
    },
    {
      id: 'kl3-three-batteries',
      type: 'text' as const,
      content: `
## Three Batteries in a Loop

Consider a single loop with three batteries and three resistors:

- $\\varepsilon_1 = 20$ V, $\\varepsilon_2 = 8$ V (opposing), $\\varepsilon_3 = 4$ V (aiding $\\varepsilon_1$)
- $R_1 = 3\\;\\Omega$, $R_2 = 5\\;\\Omega$, $R_3 = 2\\;\\Omega$

Assume current clockwise. Traverse clockwise:

$$+\\varepsilon_1 - \\varepsilon_2 + \\varepsilon_3 - IR_1 - IR_2 - IR_3 = 0$$

$$20 - 8 + 4 = I(3 + 5 + 2)$$

$$16 = 10I$$

$$I = 1.6 \\text{ A (clockwise)}$$

### Voltage Drops

- $V_{R_1} = 1.6 \\times 3 = 4.8$ V
- $V_{R_2} = 1.6 \\times 5 = 8.0$ V
- $V_{R_3} = 1.6 \\times 2 = 3.2$ V
- Total drops: $4.8 + 8.0 + 3.2 = 16.0$ V = Net EMF ✓
      `
    },
    {
      id: 'kl3-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Concept Check**
      `,
      exercise: {
        questions: [
          {
            question: 'Two batteries ($\\varepsilon_1 = 15$ V and $\\varepsilon_2 = 9$ V) oppose each other in a loop with total resistance 3 Ω. The current magnitude is:',
            options: [
              '8 A',
              '5 A',
              '2 A',
              '3 A'
            ],
            correctAnswer: 2,
            explanation: 'Net EMF = $15 - 9 = 6$ V. $I = 6/3 = 2$ A.'
          },
          {
            question: 'In the same circuit, the current flows in the direction that:',
            options: [
              'The 9 V battery would drive it alone',
              'The 15 V battery would drive it alone',
              'Neither — the current is zero',
              'Alternates between the two'
            ],
            correctAnswer: 1,
            explanation: 'The larger battery wins. The current flows in the direction the 15 V battery would drive it.'
          }
        ]
      }
    },
    {
      id: 'kl3-drill',
      type: 'input-boxes' as const,
      content: `
**Single-Loop Drill**

A single loop contains (going clockwise):
- Battery 1: $\\varepsilon_1 = 24$ V (+ terminal at top, drives current clockwise)
- Resistor: $R_1 = 4\\;\\Omega$
- Battery 2: $\\varepsilon_2 = 6$ V (opposes $\\varepsilon_1$, drives current counterclockwise)
- Resistor: $R_2 = 8\\;\\Omega$
- Resistor: $R_3 = 6\\;\\Omega$

1) Net EMF around the loop (in V):
2) Total resistance (in Ω):
3) Current in the loop (in A):
4) Voltage across $R_2$ (in V):
      `,
      exercise: {
        boxes: 4,
        correctAnswers: ['18', '18', '1', '8'],
        hint1: 'Net EMF = $\\varepsilon_1 - \\varepsilon_2 = 24 - 6$.',
        hint2: '$R_{\\text{total}} = R_1 + R_2 + R_3 = 4 + 8 + 6$.',
        hint3: '$I = \\text{Net EMF} / R_{\\text{total}}$. Then $V_{R_2} = IR_2$.',
        explanation: 'Net EMF $= 24 - 6 = 18$ V. $R_{\\text{total}} = 4 + 8 + 6 = 18\\;\\Omega$. $I = 18/18 = 1$ A. $V_{R_2} = (1)(8) = 8$ V.'
      }
    },
    {
      id: 'kl3-challenge-drill',
      type: 'input-boxes' as const,
      content: `
**Challenge: Three-Battery Loop**

A single loop contains:
- $\\varepsilon_1 = 16$ V (drives clockwise)
- $R_1 = 2\\;\\Omega$
- $\\varepsilon_2 = 10$ V (drives counterclockwise)
- $R_2 = 3\\;\\Omega$
- $\\varepsilon_3 = 6$ V (drives clockwise)
- $R_3 = 5\\;\\Omega$

1) Net EMF with clockwise positive (in V):
2) Current magnitude (in A):
3) Voltage across $R_3$ (in V):

*Round all answers to 3 significant figures.*
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['12', '1.2', '6'],
        hint1: 'Net EMF = $\\varepsilon_1 - \\varepsilon_2 + \\varepsilon_3 = 16 - 10 + 6$.',
        hint2: '$I = \\text{Net EMF} / (R_1 + R_2 + R_3) = 12 / 10$.',
        hint3: '$V_{R_3} = IR_3 = (1.2)(5)$.',
        explanation: 'Net EMF $= 16 - 10 + 6 = 12$ V. $R_{\\text{total}} = 2 + 3 + 5 = 10\\;\\Omega$. $I = 12/10 = 1.2$ A. $V_{R_3} = (1.2)(5) = 6$ V.'
      }
    },
    {
      id: 'kl3-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz**
      `,
      exercise: {
        questions: [
          {
            question: 'Two identical 10 V batteries are placed in a loop in OPPOSITION with a single 5 Ω resistor. The current is:',
            options: [
              '4 A',
              '2 A',
              '0 A',
              '1 A'
            ],
            correctAnswer: 2,
            explanation: 'Identical batteries opposing each other: net EMF = $10 - 10 = 0$ V. Therefore $I = 0/5 = 0$ A. No current flows!'
          },
          {
            question: 'A 20 V and a 12 V battery aid each other (both drive current the same way) in a loop with 8 Ω total resistance. The current is:',
            options: [
              '1 A',
              '1.5 A',
              '2.5 A',
              '4 A'
            ],
            correctAnswer: 3,
            explanation: 'Aiding batteries: net EMF $= 20 + 12 = 32$ V. $I = 32/8 = 4$ A.'
          }
        ]
      }
    }
  ]
}
