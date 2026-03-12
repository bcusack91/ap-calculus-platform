export const physics2SeriesParallelPart2Data = {
  topicSlug: 'series-parallel-circuits',
  sections: [
    {
      id: 'sp2-intro',
      type: 'text' as const,
      content: `
# 🔀 Parallel Circuits

**Part 2 of 7 — Multiple Paths, Shared Voltage**

When resistors are connected so that both ends of each resistor share the same two nodes, current has **multiple paths** to follow. This is a **parallel circuit** — and the rules are very different from series.

In this part you'll learn:
- How to identify parallel connections
- Why voltage is the same across every parallel element
- How to calculate total resistance in parallel
- How current divides among parallel branches
- Why parallel resistance is always less than the smallest individual resistor
      `
    },
    {
      id: 'sp2-parallel-defined',
      type: 'text' as const,
      content: `
## What Makes a Parallel Circuit?

Resistors are in **parallel** when they are connected between the **same two nodes** — each resistor provides a **separate path** for current.

### Key Properties of Parallel Circuits

| Property | Rule |
|----------|------|
| **Voltage** | Same across every branch: $V_1 = V_2 = V_3 = \\ldots = V$ |
| **Current** | Divides among branches: $I_{\\text{total}} = I_1 + I_2 + I_3 + \\ldots$ |
| **Resistance** | Reciprocals add: $\\frac{1}{R_{\\text{total}}} = \\frac{1}{R_1} + \\frac{1}{R_2} + \\frac{1}{R_3} + \\ldots$ |

### Why Is the Voltage the Same?

Each parallel resistor is directly connected to the same two nodes (same two wires). By definition, the potential difference between those two nodes is the same no matter which path you take — it's the **same voltage**.

### Total Resistance

Each additional parallel path gives current **another way to flow**, so the total resistance **decreases**:

$$\\frac{1}{R_{\\text{total}}} = \\frac{1}{R_1} + \\frac{1}{R_2} + \\frac{1}{R_3} + \\cdots$$

For **two resistors** in parallel, there's a useful shortcut:

$$R_{\\text{total}} = \\frac{R_1 \\cdot R_2}{R_1 + R_2}$$

**Key fact:** $R_{\\text{total}}$ is always **less than the smallest** individual resistance.
      `
    },
    {
      id: 'sp2-parallel-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Parallel Circuit Concepts**
      `,
      exercise: {
        questions: [
          {
            question: 'Three resistors ($10 \\; \\Omega$, $20 \\; \\Omega$, $30 \\; \\Omega$) are connected in parallel across a 12 V battery. Which statement is TRUE?',
            options: [
              'The 10 Ω resistor has the least current',
              'All three resistors have the same voltage across them',
              'The total resistance is 60 Ω',
              'The 30 Ω resistor has the most current'
            ],
            correctAnswer: 1,
            explanation: 'In a parallel circuit, every branch is connected to the same two nodes, so all three resistors have the same 12 V across them.'
          },
          {
            question: '$6 \\; \\Omega$ and $3 \\; \\Omega$ resistors are in parallel. The total resistance is:',
            options: [
              '9 Ω',
              '4.5 Ω',
              '2 Ω',
              '1.5 Ω'
            ],
            correctAnswer: 2,
            explanation: '$R_{\\text{total}} = \\frac{6 \\times 3}{6 + 3} = \\frac{18}{9} = 2 \\; \\Omega$. This is less than the smallest resistor (3 Ω), as expected for parallel.'
          }
        ]
      }
    },
    {
      id: 'sp2-current-division',
      type: 'text' as const,
      content: `
## Current Division in Parallel

Since each branch sees the same voltage, the current through each branch depends on its resistance:

$$I_k = \\frac{V}{R_k}$$

A **smaller** resistance carries a **larger** current — current prefers the easy path!

### Example

Two resistors in parallel: $R_1 = 4 \\; \\Omega$ and $R_2 = 12 \\; \\Omega$, connected to a $12$ V battery.

$$I_1 = \\frac{12}{4} = 3 \\text{ A} \\qquad I_2 = \\frac{12}{12} = 1 \\text{ A}$$

$$I_{\\text{total}} = 3 + 1 = 4 \\text{ A}$$

**Check:** $R_{\\text{total}} = \\frac{4 \\times 12}{4 + 12} = \\frac{48}{16} = 3 \\; \\Omega$. $I = 12/3 = 4$ A ✓

### If One Branch Breaks...

Unlike series circuits, if one branch in a parallel circuit opens, **the other branches continue to operate**. Current simply flows through the remaining paths. This is why household circuits are wired in parallel — one light burning out doesn't affect the others!
      `
    },
    {
      id: 'sp2-parallel-calc-drill',
      type: 'input-boxes' as const,
      content: `
**Parallel Circuit Calculation Drill**

A 30 V battery is connected to three resistors in parallel: $R_1 = 10 \\; \\Omega$, $R_2 = 15 \\; \\Omega$, $R_3 = 30 \\; \\Omega$.

1) Current through $R_1$ (in A)
2) Current through $R_2$ (in A)
3) Current through $R_3$ (in A)
4) Total current from the battery (in A)
5) Total resistance of the circuit (in $\\Omega$)
      `,
      exercise: {
        boxes: 5,
        correctAnswers: ['3', '2', '1', '6', '5'],
        hint1: '$I_1 = V / R_1 = 30 / 10$.',
        hint2: '$I_2 = 30/15 = 2$ A, $I_3 = 30/30 = 1$ A. $I_{\\text{total}} = I_1 + I_2 + I_3$.',
        hint3: '$R_{\\text{total}} = V / I_{\\text{total}} = 30 / 6$. Or: $1/R = 1/10 + 1/15 + 1/30 = 3/30 + 2/30 + 1/30 = 6/30 = 1/5$.',
        explanation: '$I_1 = 3$ A, $I_2 = 2$ A, $I_3 = 1$ A. $I_{\\text{total}} = 6$ A. $R_{\\text{total}} = 30/6 = 5 \\; \\Omega$. Check: $1/R = 1/10 + 1/15 + 1/30 = 6/30 = 1/5$, so $R = 5 \\; \\Omega$ ✓.'
      }
    },
    {
      id: 'sp2-identical-resistors',
      type: 'text' as const,
      content: `
## Special Case: Identical Resistors in Parallel

When $n$ identical resistors of resistance $R$ are connected in parallel:

$$R_{\\text{total}} = \\frac{R}{n}$$

This is a very useful shortcut!

| $n$ identical resistors | $R_{\\text{total}}$ |
|------------------------|---------------------|
| 2 in parallel | $R/2$ |
| 3 in parallel | $R/3$ |
| 4 in parallel | $R/4$ |

### Example

Four $100 \\; \\Omega$ resistors in parallel:

$$R_{\\text{total}} = \\frac{100}{4} = 25 \\; \\Omega$$

Each resistor carries one-quarter of the total current.
      `
    },
    {
      id: 'sp2-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Parallel Circuits**
      `,
      exercise: {
        questions: [
          {
            question: 'Adding another resistor in parallel to a circuit will:',
            options: [
              'Increase total resistance and decrease total current',
              'Decrease total resistance and increase total current',
              'Not change total resistance',
              'Decrease both total resistance and total current'
            ],
            correctAnswer: 1,
            explanation: 'Adding a parallel path gives current more ways to flow. This decreases $R_{\\text{total}}$ and increases $I_{\\text{total}} = V/R_{\\text{total}}$.'
          },
          {
            question: 'A $12 \\; \\Omega$ resistor and a $4 \\; \\Omega$ resistor are in parallel across a 12 V battery. The current through the $4 \\; \\Omega$ resistor is:',
            options: [
              '1 A',
              '2 A',
              '3 A',
              '4 A'
            ],
            correctAnswer: 2,
            explanation: 'In parallel, each resistor sees the full 12 V. $I = V/R = 12/4 = 3$ A.'
          }
        ]
      }
    }
  ]
}
