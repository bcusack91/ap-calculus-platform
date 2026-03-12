export const physics2CurrentResistancePart3Data = {
  topicSlug: 'current-resistance-ohms-law',
  sections: [
    {
      id: 'cr3-intro',
      type: 'text' as const,
      content: `
# 📐 Ohm's Law & Electric Power

**Part 3 of 7 — The Most Important Equation in Circuits**

Ohm's Law connects voltage, current, and resistance in one elegant equation. Combined with the power formulas, you can analyze any simple circuit.
      `
    },
    {
      id: 'cr3-ohms-law',
      type: 'text' as const,
      content: `
## Ohm's Law

$$V = IR$$

This says: the voltage drop across a resistor equals the current through it times its resistance.

### Three Forms

| Solving for | Formula |
|-------------|---------|
| Voltage | $V = IR$ |
| Current | $I = V/R$ |
| Resistance | $R = V/I$ |

### Ohmic vs. Non-Ohmic Materials

**Ohmic materials** obey $V = IR$ with constant $R$:
- Metals at constant temperature
- Carbon resistors
- Their $I$-$V$ graph is a **straight line** through the origin

**Non-ohmic materials** have resistance that changes:
- Light bulbs (filament heats up → $R$ increases)
- Diodes (current flows in only one direction)
- Semiconductors
- Their $I$-$V$ graph is **curved**

### Reading $I$-$V$ Curves

On an $I$ vs. $V$ graph:
- **Slope** = $1/R$ (for ohmic materials, the slope is constant)
- **Steeper line** = lower resistance (more current for same voltage)
- **Shallower line** = higher resistance
      `
    },
    {
      id: 'cr3-power',
      type: 'text' as const,
      content: `
## Electric Power

Power is the rate at which electrical energy is converted to other forms (heat, light, motion):

$$P = IV$$

Combining with Ohm's Law gives three equivalent forms:

| Formula | Best when you know |
|---------|-------------------|
| $P = IV$ | Current and voltage |
| $P = I^2 R$ | Current and resistance |
| $P = V^2 / R$ | Voltage and resistance |

### Units

$$1 \\text{ W} = 1 \\text{ V} \\cdot \\text{A} = 1 \\text{ A}^2 \\cdot \\Omega = 1 \\text{ V}^2 / \\Omega$$

### Key Insight

In a resistor, electrical energy is converted entirely to **thermal energy** (heat). This is called **Joule heating** or **resistive dissipation**.

A 100 W light bulb converts 100 joules of electrical energy per second — mostly to heat, with a small fraction as visible light.
      `
    },
    {
      id: 'cr3-ohms-quiz',
      type: 'multiple-choice' as const,
      content: `
**Ohm's Law Concept Check**
      `,
      exercise: {
        questions: [
          {
            question: 'A resistor has 12 V across it and 0.50 A flowing through it. Its resistance is:',
            options: [
              '6.0 $\\Omega$',
              '12 $\\Omega$',
              '24 $\\Omega$',
              '0.042 $\\Omega$'
            ],
            correctAnswer: 2,
            explanation: '$R = V/I = 12/0.50 = 24$ $\\Omega$.'
          },
          {
            question: 'On an $I$ vs $V$ graph, material A has a steeper straight line than material B. Which statement is correct?',
            options: [
              'A has higher resistance than B',
              'A has lower resistance than B',
              'Both have the same resistance',
              'A is non-ohmic'
            ],
            correctAnswer: 1,
            explanation: 'Slope of $I$-$V$ graph = $1/R$. Steeper slope → larger $1/R$ → smaller $R$. Material A has lower resistance.'
          }
        ]
      }
    },
    {
      id: 'cr3-power-quiz',
      type: 'multiple-choice' as const,
      content: `
**Power Concept Check**
      `,
      exercise: {
        questions: [
          {
            question: 'If the current through a resistor is doubled (resistance unchanged), the power dissipated:',
            options: [
              'Doubles',
              'Quadruples',
              'Halves',
              'Stays the same'
            ],
            correctAnswer: 1,
            explanation: '$P = I^2 R$. If $I \\to 2I$: $P \\to (2I)^2 R = 4I^2R = 4P$. Power quadruples.'
          },
          {
            question: 'A 60 W light bulb operates at 120 V. The current through it is:',
            options: [
              '7200 A',
              '2.0 A',
              '0.50 A',
              '0.0083 A'
            ],
            correctAnswer: 2,
            explanation: '$P = IV$ → $I = P/V = 60/120 = 0.50$ A.'
          }
        ]
      }
    },
    {
      id: 'cr3-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Ohm's Law & Power Drill** 🔧

1) A 100 $\\Omega$ resistor carries 0.30 A. What is the voltage across it? (in V)

2) A toaster draws 10 A from a 120 V outlet. What is its resistance? (in $\\Omega$)

3) What power does the toaster in #2 dissipate? (in W)

4) A 500 $\\Omega$ resistor has 25 V across it. What power does it dissipate? (in W)

*Round all answers to 3 significant figures.*
      `,
      exercise: {
        boxes: 4,
        correctAnswers: ['30', '12', '1200', '1.25', '1.250'],
        hint1: '$V = IR = (0.30)(100)$.',
        hint2: '$R = V/I = 120/10$.',
        hint3: '$P = IV = (10)(120)$ or $P = I^2 R = (10)^2(12)$.',
        hint4: '$P = V^2/R = (25)^2/500$.',
        explanation: '1) $V = 0.30 \\times 100 = 30$ V. 2) $R = 120/10 = 12$ $\\Omega$. 3) $P = 10 \\times 120 = 1200$ W. 4) $P = 625/500 = 1.25$ W.'
      }
    },
    {
      id: 'cr3-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz**
      `,
      exercise: {
        questions: [
          {
            question: 'Two resistors have the same voltage across them. Resistor A has twice the resistance of Resistor B. The ratio of power dissipated $P_A / P_B$ is:',
            options: [
              '$2$',
              '$1/2$',
              '$4$',
              '$1/4$'
            ],
            correctAnswer: 1,
            explanation: 'Same voltage: use $P = V^2/R$. $P_A/P_B = (V^2/R_A)/(V^2/R_B) = R_B/R_A = 1/2$. The higher-resistance resistor dissipates less power.'
          },
          {
            question: 'A device is labeled "500 W, 120 V." Its resistance is closest to:',
            options: [
              '$0.24\\;\\Omega$',
              '$4.2\\;\\Omega$',
              '$29\\;\\Omega$',
              '$240\\;\\Omega$'
            ],
            correctAnswer: 2,
            explanation: '$P = V^2/R$ → $R = V^2/P = (120)^2/500 = 14400/500 = 28.8 \\approx 29$ $\\Omega$.'
          }
        ]
      }
    }
  ]
}
