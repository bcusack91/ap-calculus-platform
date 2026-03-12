export const physics2SeriesParallelPart4Data = {
  topicSlug: 'series-parallel-circuits',
  sections: [
    {
      id: 'sp4-intro',
      type: 'text' as const,
      content: `
# ⚡ Voltage Dividers & Current Dividers

**Part 4 of 7 — Practical Circuit Design Tools**

Voltage dividers and current dividers are essential building blocks in electronics. They let you create specific voltages or steer currents without complex components — just resistors!

In this part you'll learn:
- The voltage divider formula and when to use it
- The current divider formula and when to use it
- How potentiometers work as adjustable voltage dividers
- Practical applications in circuit design
      `
    },
    {
      id: 'sp4-voltage-divider',
      type: 'text' as const,
      content: `
## The Voltage Divider

A **voltage divider** is two resistors in series that produce an output voltage that is a fraction of the input voltage.

### The Formula

For two resistors $R_1$ and $R_2$ in series, connected to source voltage $V_{\\text{in}}$:

$$V_{\\text{out}} = V_{\\text{in}} \\cdot \\frac{R_2}{R_1 + R_2}$$

where $V_{\\text{out}}$ is measured across $R_2$ (the "bottom" resistor).

### Why This Works

From the series voltage division rule:
$$V_2 = I \\cdot R_2 = \\frac{V_{\\text{in}}}{R_1 + R_2} \\cdot R_2 = V_{\\text{in}} \\cdot \\frac{R_2}{R_1 + R_2}$$

### Example

$V_{\\text{in}} = 9$ V, $R_1 = 3 \\; \\text{k}\\Omega$, $R_2 = 6 \\; \\text{k}\\Omega$:

$$V_{\\text{out}} = 9 \\times \\frac{6}{3 + 6} = 9 \\times \\frac{6}{9} = 6 \\text{ V}$$

### Key Insight

- If $R_2 \\gg R_1$: $V_{\\text{out}} \\approx V_{\\text{in}}$ (most voltage across $R_2$)
- If $R_2 \\ll R_1$: $V_{\\text{out}} \\approx 0$ (most voltage across $R_1$)
- If $R_1 = R_2$: $V_{\\text{out}} = V_{\\text{in}}/2$ (voltage splits equally)
      `
    },
    {
      id: 'sp4-vdivider-drill',
      type: 'input-boxes' as const,
      content: `
**Voltage Divider Drill**

1) A voltage divider with $R_1 = 2 \\; \\text{k}\\Omega$ and $R_2 = 8 \\; \\text{k}\\Omega$ is connected to 10 V. What is $V_{\\text{out}}$ across $R_2$? (in V)
2) You need $V_{\\text{out}} = 3$ V from a 12 V source using a voltage divider. If $R_2 = 1 \\; \\text{k}\\Omega$, what must $R_1$ be? (in k$\\Omega$)
3) A voltage divider uses $R_1 = R_2 = 5 \\; \\text{k}\\Omega$ with a 20 V input. What is $V_{\\text{out}}$? (in V)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['8', '3', '10'],
        hint1: '$V_{\\text{out}} = 10 \\times 8/(2+8) = 10 \\times 0.8$.',
        hint2: '$3 = 12 \\times 1/(R_1 + 1)$. Solve: $R_1 + 1 = 12/3 = 4$, so $R_1 = 3$ kΩ.',
        hint3: 'Equal resistors split the voltage equally: $V_{\\text{out}} = 20/2 = 10$ V.',
        explanation: '(1) $V_{\\text{out}} = 10 \\times 8/10 = 8$ V. (2) $3 = 12 \\times 1/(R_1+1)$ → $R_1 + 1 = 4$ → $R_1 = 3$ kΩ. (3) Equal resistors: $V_{\\text{out}} = 20/2 = 10$ V.'
      }
    },
    {
      id: 'sp4-potentiometer',
      type: 'text' as const,
      content: `
## Potentiometers

A **potentiometer** (or "pot") is an adjustable voltage divider. It's a single resistor with a sliding contact (wiper) that divides it into two parts.

### How It Works

Total resistance: $R_{\\text{total}}$

The wiper position determines the split:
- Upper portion: $R_1 = (1-x) \\cdot R_{\\text{total}}$
- Lower portion: $R_2 = x \\cdot R_{\\text{total}}$

where $x$ is the fractional position (0 to 1) of the wiper from bottom to top.

$$V_{\\text{out}} = V_{\\text{in}} \\cdot \\frac{x \\cdot R_{\\text{total}}}{R_{\\text{total}}} = x \\cdot V_{\\text{in}}$$

So a potentiometer gives you a **continuously adjustable output** from 0 to $V_{\\text{in}}$.

### Applications
- **Volume knobs** on audio equipment
- **Dimmer switches** for lights
- **Joysticks** in game controllers
- **Sensor readout** circuits (thermistors, photoresistors)
      `
    },
    {
      id: 'sp4-current-divider',
      type: 'text' as const,
      content: `
## The Current Divider

A **current divider** is two resistors in parallel that split the incoming current.

### The Formula

For two parallel resistors carrying total current $I_{\\text{total}}$:

$$I_1 = I_{\\text{total}} \\cdot \\frac{R_2}{R_1 + R_2}$$

$$I_2 = I_{\\text{total}} \\cdot \\frac{R_1}{R_1 + R_2}$$

### Key Insight — "Opposite" from Voltage Divider!

Notice the "flip": in the current divider, $I_1$ depends on $R_2$ (not $R_1$). The smaller resistor gets the **larger** share of the current.

### Example

$I_{\\text{total}} = 6$ A splits between $R_1 = 4 \\; \\Omega$ and $R_2 = 12 \\; \\Omega$ in parallel:

$$I_1 = 6 \\times \\frac{12}{4 + 12} = 6 \\times \\frac{12}{16} = 4.5 \\text{ A}$$

$$I_2 = 6 \\times \\frac{4}{4 + 12} = 6 \\times \\frac{4}{16} = 1.5 \\text{ A}$$

The $4 \\; \\Omega$ resistor (smaller) gets the larger current (4.5 A). ✓
      `
    },
    {
      id: 'sp4-cdivider-drill',
      type: 'input-boxes' as const,
      content: `
**Current Divider Drill**

A total current of 10 A enters a node and splits between $R_1 = 6 \\; \\Omega$ and $R_2 = 4 \\; \\Omega$ in parallel.

1) Current through $R_1$ (in A)
2) Current through $R_2$ (in A)
3) Voltage across the parallel combination (in V)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['4', '6', '24'],
        hint1: '$I_1 = 10 \\times R_2/(R_1 + R_2) = 10 \\times 4/(6+4)$.',
        hint2: '$I_2 = 10 \\times R_1/(R_1 + R_2) = 10 \\times 6/10 = 6$ A.',
        hint3: '$R_{\\text{total}} = 6 \\times 4/(6+4) = 2.4 \\; \\Omega$. $V = I_{\\text{total}} \\times R_{\\text{total}} = 10 \\times 2.4$.',
        explanation: '$I_1 = 10 \\times 4/10 = 4$ A. $I_2 = 10 \\times 6/10 = 6$ A. Check: $4 + 6 = 10$ A ✓. $R_{\\text{total}} = 24/10 = 2.4 \\; \\Omega$. $V = 10 \\times 2.4 = 24$ V.'
      }
    },
    {
      id: 'sp4-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Dividers**
      `,
      exercise: {
        questions: [
          {
            question: 'A voltage divider with $R_1 = 1 \\; \\text{k}\\Omega$ and $R_2 = 4 \\; \\text{k}\\Omega$ is connected to 15 V. The output voltage (across $R_2$) is:',
            options: [
              '3 V',
              '5 V',
              '10 V',
              '12 V'
            ],
            correctAnswer: 3,
            explanation: '$V_{\\text{out}} = 15 \\times 4/(1+4) = 15 \\times 4/5 = 12$ V.'
          },
          {
            question: 'In a current divider with two parallel resistors, the branch with the SMALLER resistance carries:',
            options: [
              'Less current (current avoids small R)',
              'More current (current prefers the easier path)',
              'The same current as the other branch',
              'No current'
            ],
            correctAnswer: 1,
            explanation: 'Current takes the path of least resistance. The smaller resistor provides an easier path, so it carries the larger share of the total current.'
          }
        ]
      }
    }
  ]
}
