export const physics2SeriesParallelPart6Data = {
  topicSlug: 'series-parallel-circuits',
  sections: [
    {
      id: 'sp6-intro',
      type: 'text' as const,
      content: `
# 🔋 Capacitors in Series & Parallel

**Part 6 of 7 — The Rules Are Flipped!**

Capacitors combine in series and parallel using rules that are the **opposite** of resistors. This is one of the most common sources of mistakes on the AP exam — so pay close attention!

In this part you'll learn:
- How capacitors combine in parallel (add directly)
- How capacitors combine in series (reciprocals add)
- Why the rules are "opposite" to resistors
- Energy stored in capacitors: $U = \\frac{1}{2}CV^2$
- Charge distribution in series and parallel
      `
    },
    {
      id: 'sp6-parallel-caps',
      type: 'text' as const,
      content: `
## Capacitors in Parallel

When capacitors are in **parallel**, they share the same voltage. Each capacitor stores charge independently:

$$Q_1 = C_1 V, \\quad Q_2 = C_2 V, \\quad Q_3 = C_3 V$$

Total charge: $Q_{\\text{total}} = Q_1 + Q_2 + Q_3 = (C_1 + C_2 + C_3)V$

### Parallel Capacitance Formula

$$C_{\\text{parallel}} = C_1 + C_2 + C_3 + \\cdots$$

**Capacitors in parallel ADD directly** — just like resistors in series!

### Why?

Connecting capacitors in parallel effectively increases the total plate area. More area → more charge storage → more capacitance.

### Example

$C_1 = 2 \\; \\mu\\text{F}$, $C_2 = 3 \\; \\mu\\text{F}$, $C_3 = 5 \\; \\mu\\text{F}$ in parallel:

$$C_{\\text{total}} = 2 + 3 + 5 = 10 \\; \\mu\\text{F}$$
      `
    },
    {
      id: 'sp6-series-caps',
      type: 'text' as const,
      content: `
## Capacitors in Series

When capacitors are in **series**, they all store the **same charge** $Q$ (just like current is the same in series resistors). The voltage divides:

$$V_{\\text{total}} = V_1 + V_2 + V_3 = \\frac{Q}{C_1} + \\frac{Q}{C_2} + \\frac{Q}{C_3}$$

### Series Capacitance Formula

$$\\frac{1}{C_{\\text{series}}} = \\frac{1}{C_1} + \\frac{1}{C_2} + \\frac{1}{C_3} + \\cdots$$

**Capacitors in series use the RECIPROCAL rule** — just like resistors in parallel!

For **two capacitors** in series:

$$C_{\\text{series}} = \\frac{C_1 \\cdot C_2}{C_1 + C_2}$$

### Key Fact

$C_{\\text{series}}$ is always **less than the smallest** individual capacitance.

### Why?

Connecting capacitors in series effectively increases the plate separation. More separation → less capacitance.

### Example

$C_1 = 6 \\; \\mu\\text{F}$ and $C_2 = 3 \\; \\mu\\text{F}$ in series:

$$C_{\\text{series}} = \\frac{6 \\times 3}{6 + 3} = \\frac{18}{9} = 2 \\; \\mu\\text{F}$$
      `
    },
    {
      id: 'sp6-comparison',
      type: 'text' as const,
      content: `
## Resistors vs. Capacitors: The Flip

| | **Resistors** | **Capacitors** |
|---|---|---|
| **Series** | $R = R_1 + R_2$ (add) | $\\frac{1}{C} = \\frac{1}{C_1} + \\frac{1}{C_2}$ (reciprocal) |
| **Parallel** | $\\frac{1}{R} = \\frac{1}{R_1} + \\frac{1}{R_2}$ (reciprocal) | $C = C_1 + C_2$ (add) |
| **Series: same...** | Current | Charge |
| **Parallel: same...** | Voltage | Voltage |

### Memory Trick

> **R**esistors: **R**eciprocal in pa**R**allel
> **C**apacitors: the rules are **C**ompletely flipped!

## Energy Stored in a Capacitor

$$U = \\frac{1}{2}CV^2 = \\frac{Q^2}{2C} = \\frac{1}{2}QV$$

All three forms are equivalent, related by $Q = CV$.
      `
    },
    {
      id: 'sp6-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Capacitor Combination Concepts**
      `,
      exercise: {
        questions: [
          {
            question: 'Two identical capacitors ($C$ each) are connected in series. The total capacitance is:',
            options: [
              '$2C$',
              '$C$',
              '$C/2$',
              '$C^2$'
            ],
            correctAnswer: 2,
            explanation: 'In series: $1/C_{\\text{total}} = 1/C + 1/C = 2/C$, so $C_{\\text{total}} = C/2$. Series capacitance is always less than the smallest individual.'
          },
          {
            question: 'Those same two capacitors ($C$ each) connected in parallel have total capacitance:',
            options: [
              '$C/2$',
              '$C$',
              '$2C$',
              '$4C$'
            ],
            correctAnswer: 2,
            explanation: 'In parallel: $C_{\\text{total}} = C + C = 2C$. Parallel capacitance adds directly.'
          }
        ]
      }
    },
    {
      id: 'sp6-cap-drill',
      type: 'input-boxes' as const,
      content: `
**Capacitor Combination Drill**

$C_1 = 4 \\; \\mu\\text{F}$ and $C_2 = 12 \\; \\mu\\text{F}$ are connected in series across a 16 V battery.

1) Total capacitance (in $\\mu$F)

2) Charge stored on each capacitor (in $\\mu$C)

3) Voltage across $C_1$ (in V)

4) Voltage across $C_2$ (in V)

5) Total energy stored (in $\\mu$J)
      `,
      exercise: {
        boxes: 5,
        correctAnswers: ['3', '48', '12', '4', '384'],
        hint1: '$C_{\\text{series}} = (4 \\times 12)/(4 + 12) = 48/16 = 3 \\; \\mu$F.',
        hint2: '$Q = C_{\\text{total}} \\times V = 3 \\times 16 = 48 \\; \\mu$C. In series, all capacitors store the same charge.',
        hint3: '$V_1 = Q/C_1 = 48/4 = 12$ V. $V_2 = Q/C_2 = 48/12 = 4$ V. $U = \\frac{1}{2}CV^2 = \\frac{1}{2}(3)(16^2) = 384 \\; \\mu$J.',
        explanation: '$C = 3 \\; \\mu$F. $Q = 48 \\; \\mu$C. $V_1 = 48/4 = 12$ V, $V_2 = 48/12 = 4$ V. Check: $12 + 4 = 16$ V ✓. $U = \\frac{1}{2}(3 \\times 10^{-6})(16^2) = 384 \\; \\mu$J.'
      }
    },
    {
      id: 'sp6-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Capacitors**
      `,
      exercise: {
        questions: [
          {
            question: 'A $2 \\; \\mu$F capacitor is in parallel with a $3 \\; \\mu$F capacitor. This combination is in series with a $5 \\; \\mu$F capacitor. The total capacitance is:',
            options: [
              '10 μF',
              '5 μF',
              '2.5 μF',
              '1 μF'
            ],
            correctAnswer: 2,
            explanation: 'Parallel: $C_{12} = 2 + 3 = 5 \\; \\mu$F. Series with $5 \\; \\mu$F: $C = 5 \\times 5/(5+5) = 25/10 = 2.5 \\; \\mu$F.'
          },
          {
            question: 'Two capacitors in series store the same ___, while two capacitors in parallel share the same ___.',
            options: [
              'voltage; charge',
              'charge; voltage',
              'energy; current',
              'capacitance; resistance'
            ],
            correctAnswer: 1,
            explanation: 'Series capacitors: same charge $Q$ on each (charge has nowhere else to go). Parallel capacitors: same voltage $V$ across each (connected to same nodes).'
          }
        ]
      }
    }
  ]
}
