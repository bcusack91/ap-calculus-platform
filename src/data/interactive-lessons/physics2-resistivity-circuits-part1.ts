export const physics2ResCircPart1Data = {
  topicSlug: 'resistivity-circuits-advanced',
  sections: [
    {
      id: 'resistivitycircuitsadvanced-p1-intro',
      type: 'text' as const,
      content: `# ⚡ Resistivity & Advanced Circuits

**Part 1 of 7 — Resistivity & Temperature Dependence**

---

### Resistivity

$$R = \\\\frac{\\\\rho L}{A}$$

| Variable | Meaning | Units |
|----------|---------|-------|
| $R$ | Resistance | Ω |
| $\\\\rho$ | Resistivity | Ω·m |
| $L$ | Length | m |
| $A$ | Cross-sectional area | m² |

### Temperature Dependence

$$\\\\rho(T) = \\\\rho_0[1 + \\\\alpha(T - T_0)]$$

For metals, resistivity **increases** with temperature ($\\\\alpha > 0$).
For semiconductors, resistivity **decreases** with temperature.

---

### Typical Resistivities

| Material | $\\\\rho$ (Ω·m) | Type |
|----------|---------------------|------|
| Copper | $1.7 \\\\times 10^{-8}$ | Conductor |
| Silicon | $6.4 \\\\times 10^{2}$ | Semiconductor |
| Glass | $10^{10} - 10^{14}$ | Insulator |`
    },
    {
      id: 'resistivitycircuitsadvanced-p1-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** \U0001f3af
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes resistivity & temperature dependence?',
            options: ['A core AP Physics 2 concept', 'Not tested on the AP exam', 'Only relevant for Physics C', 'A concept from chemistry'],
            correctAnswer: 0,
            explanation: 'Resistivity & Temperature Dependence is a fundamental concept tested on the AP Physics 2 exam.'
          }
        ]
      }
    }
  ]
};
