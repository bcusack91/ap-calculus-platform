export const physics2SeriesParallelPart5Data = {
  topicSlug: 'series-parallel-circuits',
  sections: [
    {
      id: 'sp5-intro',
      type: 'text' as const,
      content: `
# 💡 Power in Circuits

**Part 5 of 7 — Energy Dissipation in Series & Parallel**

Every resistor converts electrical energy into heat. Understanding how power distributes among resistors is crucial for circuit design (and for the AP exam!).

In this part you'll learn:
- Three forms of the power equation
- Power distribution in series circuits
- Power distribution in parallel circuits
- Conservation of energy: total power equals source power
      `
    },
    {
      id: 'sp5-power-formulas',
      type: 'text' as const,
      content: `
## Power Equations

The power dissipated by a resistor can be calculated three ways:

$$P = IV \\qquad P = I^2 R \\qquad P = \\frac{V^2}{R}$$

All three are equivalent (just substitute $V = IR$ or $I = V/R$).

### Which Form to Use?

| Known Quantities | Best Formula |
|-----------------|--------------|
| $I$ and $V$ | $P = IV$ |
| $I$ and $R$ | $P = I^2 R$ |
| $V$ and $R$ | $P = V^2/R$ |

### Units

$$[P] = \\text{Watts (W)} = \\frac{\\text{J}}{\\text{s}} = \\text{A} \\cdot \\text{V}$$

### Conservation of Energy

The total power delivered by the battery equals the total power dissipated by all resistors:

$$P_{\\text{source}} = P_1 + P_2 + P_3 + \\cdots$$

This is just conservation of energy — the battery's energy output per second equals the total heat output per second.
      `
    },
    {
      id: 'sp5-power-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Power Concept Check**
      `,
      exercise: {
        questions: [
          {
            question: 'A resistor has 3 A flowing through it and 12 V across it. The power dissipated is:',
            options: [
              '4 W',
              '15 W',
              '36 W',
              '144 W'
            ],
            correctAnswer: 2,
            explanation: '$P = IV = 3 \\times 12 = 36$ W.'
          },
          {
            question: 'If you double the current through a resistor (resistance unchanged), the power:',
            options: [
              'Doubles',
              'Quadruples',
              'Halves',
              'Stays the same'
            ],
            correctAnswer: 1,
            explanation: '$P = I^2 R$. If $I$ doubles: $P\' = (2I)^2 R = 4I^2 R = 4P$. Power quadruples.'
          }
        ]
      }
    },
    {
      id: 'sp5-power-series',
      type: 'text' as const,
      content: `
## Power in Series Circuits

In series, the current $I$ is the same through every resistor:

$$P_k = I^2 R_k$$

The **larger resistor** dissipates **more power** in a series circuit (since $I$ is constant and $P \\propto R$).

### Example: Series

$R_1 = 2 \\; \\Omega$ and $R_2 = 6 \\; \\Omega$ in series, $V = 16$ V:

$$R_{\\text{total}} = 8 \\; \\Omega, \\qquad I = 16/8 = 2 \\text{ A}$$

$$P_1 = (2)^2 \\times 2 = 8 \\text{ W}$$
$$P_2 = (2)^2 \\times 6 = 24 \\text{ W}$$
$$P_{\\text{total}} = 8 + 24 = 32 \\text{ W}$$

**Check:** $P_{\\text{source}} = IV = 2 \\times 16 = 32$ W ✓

## Power in Parallel Circuits

In parallel, the voltage $V$ is the same across every resistor:

$$P_k = \\frac{V^2}{R_k}$$

The **smaller resistor** dissipates **more power** in a parallel circuit (since $V$ is constant and $P \\propto 1/R$).

### Example: Parallel

$R_1 = 3 \\; \\Omega$ and $R_2 = 6 \\; \\Omega$ in parallel, $V = 12$ V:

$$P_1 = \\frac{12^2}{3} = 48 \\text{ W} \\qquad P_2 = \\frac{12^2}{6} = 24 \\text{ W}$$

$$P_{\\text{total}} = 48 + 24 = 72 \\text{ W}$$

**Check:** $R_{\\text{total}} = 3 \\times 6/(3+6) = 2 \\; \\Omega$. $I = 12/2 = 6$ A. $P = 6 \\times 12 = 72$ W ✓

### Series vs. Parallel Summary

| | Series | Parallel |
|---|--------|----------|
| Same quantity | Current $I$ | Voltage $V$ |
| Best power formula | $P = I^2 R$ | $P = V^2/R$ |
| More power goes to... | Larger $R$ | Smaller $R$ |
      `
    },
    {
      id: 'sp5-power-drill',
      type: 'input-boxes' as const,
      content: `
**Power Distribution Drill**

A 24 V battery is connected to $R_1 = 4 \\; \\Omega$ in series with the parallel combination of $R_2 = 6 \\; \\Omega$ and $R_3 = 12 \\; \\Omega$.

1) Total resistance of the circuit (in $\\Omega$)
2) Total current (in A)
3) Power dissipated by $R_1$ (in W)
4) Power dissipated by $R_2$ (in W)
5) Total power delivered by the battery (in W)
      `,
      exercise: {
        boxes: 5,
        correctAnswers: ['8', '3', '36', '24', '72'],
        hint1: '$R_{23} = 6 \\times 12/(6+12) = 72/18 = 4 \\; \\Omega$. $R_{\\text{total}} = 4 + 4 = 8 \\; \\Omega$.',
        hint2: '$I = 24/8 = 3$ A. $P_1 = I^2 R_1 = 9 \\times 4 = 36$ W.',
        hint3: '$V_{23} = I \\times R_{23} = 3 \\times 4 = 12$ V. $P_2 = V_{23}^2/R_2 = 144/6 = 24$ W. $P_{\\text{total}} = IV = 3 \\times 24 = 72$ W.',
        explanation: '$R_{23} = 4 \\; \\Omega$. $R_{\\text{total}} = 8 \\; \\Omega$. $I = 3$ A. $P_1 = 9 \\times 4 = 36$ W. $V_{23} = 12$ V, $P_2 = 144/6 = 24$ W. $P_3 = 144/12 = 12$ W. $P_{\\text{total}} = 36 + 24 + 12 = 72$ W = $3 \\times 24$ ✓.'
      }
    },
    {
      id: 'sp5-brightness',
      type: 'text' as const,
      content: `
## Lightbulb Brightness & Power

On the AP exam, questions often ask about **brightness** of identical lightbulbs in different configurations. Brightness is proportional to power dissipated.

### Identical Bulbs (each resistance $R$)

**Two bulbs in series** (battery voltage $V$):
$$I = \\frac{V}{2R}, \\qquad P_{\\text{each}} = I^2 R = \\frac{V^2}{4R}$$

**Two bulbs in parallel** (battery voltage $V$):
$$P_{\\text{each}} = \\frac{V^2}{R}$$

**Ratio:** Each parallel bulb is **4× brighter** than each series bulb!

### Why?

In parallel, each bulb gets the full battery voltage. In series, each bulb gets only half.

$$\\frac{P_{\\text{parallel}}}{P_{\\text{series}}} = \\frac{V^2/R}{V^2/(4R)} = 4$$
      `
    },
    {
      id: 'sp5-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Power in Circuits**
      `,
      exercise: {
        questions: [
          {
            question: 'Two resistors ($R$ and $2R$) are connected in series to a battery. Which resistor dissipates more power?',
            options: [
              'The smaller resistor ($R$)',
              'The larger resistor ($2R$)',
              'They dissipate equal power',
              'It depends on the battery voltage'
            ],
            correctAnswer: 1,
            explanation: 'In series, the current is the same through both. $P = I^2 R$, so the larger resistor ($2R$) dissipates twice the power.'
          },
          {
            question: 'The same two resistors ($R$ and $2R$) are now connected in parallel. Which dissipates more power?',
            options: [
              'The smaller resistor ($R$)',
              'The larger resistor ($2R$)',
              'They dissipate equal power',
              'It depends on the battery voltage'
            ],
            correctAnswer: 0,
            explanation: 'In parallel, the voltage is the same across both. $P = V^2/R$, so the smaller resistor ($R$) dissipates twice the power. The rule flips!'
          }
        ]
      }
    }
  ]
}
