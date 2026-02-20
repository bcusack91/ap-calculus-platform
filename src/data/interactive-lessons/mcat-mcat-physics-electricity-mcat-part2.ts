export const mcatPhysElecPart2Data = {
  topicSlug: 'mcat-physics-electricity-mcat',
  sections: [
    {
      id: 'pe2-intro',
      type: 'text' as const,
      content: `# Physics: Electricity, Magnetism & Optics

**Part 2 of 7 — Circuits (HIGH YIELD)**

### Ohm's Law

$$V = IR$$

### Kirchhoff's Laws

1. **Junction Rule**: Current in = current out ($\\sum I_{in} = \\sum I_{out}$)
2. **Loop Rule**: Total voltage around a loop = 0 ($\\sum V = 0$)

### Series vs. Parallel Resistors

| Configuration | Resistance | Current | Voltage |
|--------------|-----------|---------|---------|
| Series | $R_T = R_1 + R_2 + ...$ | Same through each | Divides |
| Parallel | $\\frac{1}{R_T} = \\frac{1}{R_1} + \\frac{1}{R_2} + ...$ | Divides | Same across each |

### Power

$$P = IV = I^2R = \\frac{V^2}{R}$$

### Capacitors

$$C = \\frac{Q}{V} \\qquad U = \\frac{1}{2}CV^2$$

- Series: $\\frac{1}{C_T} = \\frac{1}{C_1} + \\frac{1}{C_2}$ (OPPOSITE of resistors!)
- Parallel: $C_T = C_1 + C_2$ `
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
            explanation: `$1/R_T = 1/3 + 1/6 = 2/6 + 1/6 = 3/6 = 1/2$. So $R_T = 2\\;\\Omega$. Parallel resistance is always LESS than the smallest individual resistor.`
          },
          {
            question: `A 12 V battery drives 2 A through a circuit. The total power dissipated is:`,
            options: [`24 W`, `6 W`, `144 W`, `48 W`],
            correctAnswer: 0,
            explanation: `$P = IV = 2(12) = 24$ W. Could also use $P = I^2R$ or $V^2/R$ if you know the resistance.`
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
- Capacitors add OPPOSITE to resistors! (parallel: $C$ adds; series: $1/C$ adds)
- $P = IV = I^2R = V^2/R$ — know all three forms`
    }
  ]
};
