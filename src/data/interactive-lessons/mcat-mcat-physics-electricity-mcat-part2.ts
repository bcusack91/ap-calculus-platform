export const mcatPhysElecPart2Data = {
  topicSlug: 'mcat-physics-electricity-mcat',
  sections: [
    {
      id: 'pe2-intro',
      type: 'text' as const,
      content: `# Physics: Electricity, Magnetism & Optics

**Part 2 of 7 — Circuits (HIGH YIELD)**

### Ohm's Law

$V = IR$ — voltage equals current times resistance

### Kirchhoff's Laws

1. **Junction Rule**: Current in = current out ($\\sum I_{in} = \\sum I_{out}$)
2. **Loop Rule**: Total voltage change around any closed loop = 0 ($\\sum V = 0$)

### Series vs. Parallel Resistors

| Configuration | Resistance | Current | Voltage |
|--------------|-----------|---------|---------|
| Series | $R_T = R_1 + R_2 + ...$ | Same through each | Divides |
| Parallel | $\\frac{1}{R_T} = \\frac{1}{R_1} + \\frac{1}{R_2} + ...$ | Divides | Same across each |

### Power

$P = IV = I^2R = \\frac{V^2}{R}$ — know all three forms

### Capacitors

$C = \\frac{Q}{V}$ and stored energy $U = \\frac{1}{2}CV^2$

- Series: $\\frac{1}{C_T} = \\frac{1}{C_1} + \\frac{1}{C_2}$ (OPPOSITE of resistors!)
- Parallel: $C_T = C_1 + C_2$

### RC Intuition

Capacitors resist instantaneous voltage change, which is why they smooth signals and set charging/discharging time constants $\\tau = RC$ in physiology instrumentation contexts.`
    },
    {
      id: 'pe2-worked',
      type: 'text' as const,
      content: `### Worked Example — Series/Parallel Combination

A $12\\;\\text{V}$ battery connects to a $4\\;\\Omega$ resistor in series with a parallel pair of $6\\;\\Omega$ and $3\\;\\Omega$ resistors. Find the total current the battery supplies and the power it delivers.

**Step 1 — Reduce the parallel pair.**

$\\frac{1}{R_P} = \\frac{1}{6} + \\frac{1}{3} = \\frac{1}{6} + \\frac{2}{6} = \\frac{3}{6} = \\frac{1}{2}$, so $R_P = 2\\;\\Omega$.

**Step 2 — Add the series resistor.**

$R_T = 4 + R_P = 4 + 2 = 6\\;\\Omega$.

**Step 3 — Apply Ohm's law for total current.**

$I = \\frac{V}{R_T} = \\frac{12}{6} = 2\\;\\text{A}$.

**Step 4 — Power delivered by the battery.**

$P = IV = (2)(12) = 24\\;\\text{W}$ (equivalently $I^2 R_T = 4 \\times 6 = 24\\;\\text{W}$).

The MCAT loves this pattern: collapse parallel groups first, then treat the rest as a simple series chain.`
    },
    {
      id: 'pe2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Circuits** 🎯`,
      exercise: {
        questions: [
          {
            question: `Two resistors ($3\\;\\Omega$ and $6\\;\\Omega$) are in parallel. The equivalent resistance is:`,
            options: [`$2\\;\\Omega$`, `$9\\;\\Omega$`, `$4.5\\;\\Omega$`, `$1.5\\;\\Omega$`],
            correctAnswer: 0,
            explanation: `$1/R_T = 1/3 + 1/6 = 2/6 + 1/6 = 3/6 = 1/2$, so $R_T = 2\\;\\Omega$. Parallel resistance is always LESS than the smallest individual resistor.`
          },
          {
            question: `A 12 V battery drives 2 A through a circuit. The total power dissipated is:`,
            options: [`24 W`, `6 W`, `144 W`, `48 W`],
            correctAnswer: 0,
            explanation: `$P = IV = 2(12) = 24$ W. You could also use $P = I^2R$ or $V^2/R$ if you know the resistance.`
          },
          {
            question: `In a series circuit with ideal wires, which quantity is the same through each resistor?`,
            options: [`Voltage`, `Current`, `Resistance`, `Power`],
            correctAnswer: 1,
            explanation: `Series elements carry the same current, while voltage divides across components in proportion to their resistance.`
          },
          {
            question: `Adding a resistor in parallel to an existing network makes total equivalent resistance:`,
            options: [`Increase`, `Decrease`, `Stay the same`, `Become zero always`],
            correctAnswer: 1,
            explanation: `A new parallel path increases total conductance, so equivalent resistance decreases.`
          },
          {
            question: `Two capacitors, $2\\;\\mu\\text{F}$ and $3\\;\\mu\\text{F}$, are connected in parallel. The equivalent capacitance is:`,
            options: [`$5\\;\\mu\\text{F}$`, `$1.2\\;\\mu\\text{F}$`, `$6\\;\\mu\\text{F}$`, `$0.83\\;\\mu\\text{F}$`],
            correctAnswer: 0,
            explanation: `Capacitors in parallel simply add: $C_T = 2 + 3 = 5\\;\\mu\\text{F}$. This is the opposite of resistors, which add in series.`
          },
          {
            question: `A $10\\;\\Omega$ resistor carries $0.5\\;\\text{A}$. The power dissipated as heat is:`,
            options: [`$2.5\\;\\text{W}$`, `$5\\;\\text{W}$`, `$20\\;\\text{W}$`, `$0.5\\;\\text{W}$`],
            correctAnswer: 0,
            explanation: `$P = I^2R = (0.5)^2(10) = 0.25 \\times 10 = 2.5\\;\\text{W}$. Using $V^2/R$ with $V = IR = 5\\;\\text{V}$ gives the same answer.`
          },
          {
            question: `A capacitor stores $Q = 6\\;\\mu\\text{C}$ at $V = 3\\;\\text{V}$. Its capacitance is:`,
            options: [`$2\\;\\mu\\text{F}$`, `$18\\;\\mu\\text{F}$`, `$0.5\\;\\mu\\text{F}$`, `$9\\;\\mu\\text{F}$`],
            correctAnswer: 0,
            explanation: `$C = Q/V = 6\\;\\mu\\text{C} / 3\\;\\text{V} = 2\\;\\mu\\text{F}$.`
          }
        ]
      }
    },
    {
      id: 'pe2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- Series: same current, voltages add, $R_{total}$ increases
- Parallel: same voltage, currents add, $R_{total}$ decreases
- Capacitors add OPPOSITE to resistors (parallel: $C$ adds; series: $1/C$ adds)
- $P = IV = I^2R = V^2/R$ — pick the form that matches your known quantities
- Strategy: collapse parallel groups first, then treat the rest as a series chain`
    }
  ]
};
