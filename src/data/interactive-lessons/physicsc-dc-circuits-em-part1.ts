export const physCEMCircuitsPart1Data = {
  topicSlug: 'dc-circuits-physics-c-em',
  sections: [
    {
      id: 'physicsc-dc-circuits-em-p1-intro',
      type: 'text' as const,
      content: `# ⚡ Current and Resistance

**Part 1 of 7 — Fundamentals of DC Circuits**

---

### Electric Current

$$I = \\frac{dQ}{dt}$$

Units: Amperes (A) = Coulombs/second

---

### Ohm’s Law

$$V = IR$$

| Quantity | Symbol | Unit |
|----------|--------|------|
| Voltage | $V$ | Volts (V) |
| Current | $I$ | Amperes (A) |
| Resistance | $R$ | Ohms ($\\Omega$) |

---

### Resistivity

$$R = \\rho \\frac{L}{A}$$

where $\\rho$ is resistivity, $L$ is length, $A$ is cross-sectional area.

---

### Power

$$P = IV = I^2R = \\frac{V^2}{R}$$

> 🔑 Current flows from high potential to low potential (conventional current).`
    },
    {
      id: 'physicsc-dc-circuits-em-p1-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Doubling the length of a wire while halving its cross-sectional area multiplies resistance by:',
            options: ['$2$', '$4$', '$1/2$', '$1$'],
            correctAnswer: 1,
            explanation: '$R = \\rho L/A$. Doubling $L$ and halving $A$: $R \\to \\rho(2L)/(A/2) = 4\\rho L/A = 4R$.'
          },
          {
            question: 'If current through a resistor doubles, the power dissipated:',
            options: ['Doubles', 'Quadruples', 'Halves', 'Stays the same'],
            correctAnswer: 1,
            explanation: '$P = I^2R$. Doubling $I$ → $P \\to (2I)^2 R = 4I^2R = 4P$.'
          }
        ]
      }
    }
  ]
};
