export const physCEMCircuitsPart2Data = {
  topicSlug: 'dc-circuits-physics-c-em',
  sections: [
    {
      id: 'physicsc-dc-circuits-em-p2-intro',
      type: 'text' as const,
      content: `# 🔌 Series and Parallel Circuits

**Part 2 of 7 — Combining Resistors**

---

### Series Resistors

$$R_{\\text{eq}} = R_1 + R_2 + R_3 + \\cdots$$

- Same current through each resistor
- Voltages add: $V = V_1 + V_2 + V_3$

---

### Parallel Resistors

$$\\frac{1}{R_{\\text{eq}}} = \\frac{1}{R_1} + \\frac{1}{R_2} + \\frac{1}{R_3} + \\cdots$$

For two resistors: $R_{\\text{eq}} = \\frac{R_1 R_2}{R_1 + R_2}$

- Same voltage across each resistor
- Currents add: $I = I_1 + I_2 + I_3$

> 🔑 Series: current same, voltage divides. Parallel: voltage same, current divides.`
    },
    {
      id: 'physicsc-dc-circuits-em-p2-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Three 6Ω resistors in parallel have equivalent resistance:',
            options: ['$18\\Omega$', '$6\\Omega$', '$2\\Omega$', '$3\\Omega$'],
            correctAnswer: 2,
            explanation: '$1/R_{eq} = 1/6 + 1/6 + 1/6 = 3/6 = 1/2$. So $R_{eq} = 2\\Omega$.'
          },
          {
            question: 'In a series circuit, if one resistor is removed:',
            options: ['Current increases', 'Current stops', 'Nothing changes', 'Voltage drops'],
            correctAnswer: 1,
            explanation: 'Series circuit = one path. Removing a resistor breaks the circuit.'
          }
        ]
      }
    }
  ]
};
