export const physCEMCircuitsPart3Data = {
  topicSlug: 'dc-circuits-physics-c-em',
  sections: [
    {
      id: 'physicsc-dc-circuits-em-p3-intro',
      type: 'text' as const,
      content: `# 🔄 Kirchhoff’s Rules

**Part 3 of 7 — Analyzing Complex Circuits**

---

### Junction Rule (KCL)

$$\\sum I_{\\text{in}} = \\sum I_{\\text{out}}$$

Conservation of charge at any junction.

---

### Loop Rule (KVL)

$$\\sum \\Delta V = 0$$

Around any closed loop, the total voltage change is zero.

**Sign Conventions:**
| Element | Direction | $\\Delta V$ |
|---------|-----------|-------------|
| Battery | − to + | $+\\mathcal{E}$ |
| Battery | + to − | $-\\mathcal{E}$ |
| Resistor | With current | $-IR$ |
| Resistor | Against current | $+IR$ |

> 🔑 Write enough equations (junction + loop) to solve for all unknowns.`
    },
    {
      id: 'physicsc-dc-circuits-em-p3-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Kirchhoff’s junction rule is based on conservation of:',
            options: ['Energy', 'Charge', 'Momentum', 'Mass'],
            correctAnswer: 1,
            explanation: 'The junction rule says charge in = charge out. Conservation of charge.'
          },
          {
            question: 'Kirchhoff’s loop rule is based on conservation of:',
            options: ['Charge', 'Mass', 'Energy', 'Momentum'],
            correctAnswer: 2,
            explanation: 'The loop rule says total voltage changes around a loop = 0. Conservation of energy.'
          }
        ]
      }
    }
  ]
};
